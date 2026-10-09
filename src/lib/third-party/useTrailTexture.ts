/**
 * Vendored, performance-patched copy of @react-three/drei's TrailTexture
 * (https://github.com/pmndrs/drei).
 *
 * Why vendored: the upstream engine has several hot paths that cause frame
 * drops when the pointer moves quickly:
 *   - `addTouch` spawns O(distance^2) interpolated points per pointermove,
 *     so a fast flick injects hundreds of points in a single frame.
 *   - `onMove` is wired straight to `pointermove` with no batching, so dozens
 *     of events (and dozens of `addTouch` bursts) queue between frames.
 *   - `update()` clears + redraws every point and re-uploads the full texture
 *     to the GPU every RAF, even when the trail is empty/idle.
 *   - points are aged out with `splice` inside `forEach` — O(n^2)-ish.
 *
 * Patches applied here (behaviour-preserving for the normal case):
 *   1. Per-frame coalescing of pointer input — only the latest uv survives
 *      until the next frame, so at most one `addTouch` runs per RAF. The
 *      existing interpolation still fills the gap, so visual coverage is
 *      identical while point throughput drops by an order of magnitude.
 *   2. `maxInterpolatedPerTouch` caps the worst-case burst from a single move.
 *   3. `maxPoints` hard-caps live point count (oldest dropped first).
 *   4. `update()` early-returns when the trail is empty and the texture is
 *      already cleared — no clear, no redraw, no GPU upload while idle.
 *   5. Aging uses an in-place two-pointer compaction instead of splice-in-forEach.
 *   6. The frame loop is paused entirely while the tab is hidden.
 *   7. `dispose()` frees the Three.js Texture on unmount.
 *
 * Original drei source is MIT licensed (Poimandres).
 */
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { Texture } from "three";

type BlendOp = CanvasRenderingContext2D["globalCompositeOperation"];

export interface TrailConfig {
  size?: number;
  maxAge?: number;
  radius?: number;
  intensity?: number;
  interpolate?: number;
  smoothing?: number;
  minForce?: number;
  blend?: BlendOp;
  ease?: (t: number) => number;
  /** Hard cap on live trail points; oldest are dropped first. */
  maxPoints?: number;
  /** Max interpolated points a single pointer move may inject. */
  maxInterpolatedPerTouch?: number;
}

interface TrailPoint {
  x: number;
  y: number;
  age: number;
  force: number;
}

function smoothAverage(current: number, measurement: number, smoothing = 0.9) {
  return measurement * smoothing + current * (1.0 - smoothing);
}

const easeCircleOut = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2));

class TrailTextureImpl {
  size: number;
  maxAge: number;
  radius: number;
  intensity: number;
  ease: (t: number) => number;
  interpolate: number;
  smoothing: number;
  minForce: number;
  blend: BlendOp;
  maxPoints: number;
  maxInterpolatedPerTouch: number;
  trail: TrailPoint[] = [];
  force = 0;

  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  texture!: Texture;

  /** True while the offscreen canvas is solid black and needs no repainting. */
  private cleared = true;

  constructor({
    size = 256,
    maxAge = 750,
    radius = 0.3,
    intensity = 0.2,
    interpolate = 0,
    smoothing = 0,
    minForce = 0.3,
    blend = "screen",
    ease = easeCircleOut,
    maxPoints = 600,
    maxInterpolatedPerTouch = 20,
  }: TrailConfig = {}) {
    this.size = size;
    this.maxAge = maxAge;
    this.radius = radius;
    this.intensity = intensity;
    this.ease = ease;
    this.interpolate = interpolate;
    this.smoothing = smoothing;
    this.minForce = minForce;
    this.blend = blend;
    this.maxPoints = maxPoints;
    this.maxInterpolatedPerTouch = maxInterpolatedPerTouch;
    this.initTexture();
  }

  initTexture() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.canvas.height = this.size;
    const ctx = this.canvas.getContext("2d");
    if (ctx === null) {
      throw new Error("2D not available");
    }
    this.ctx = ctx;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.texture = new Texture(this.canvas);
    this.canvas.id = "touchTexture";
    this.canvas.style.width = this.canvas.style.height = `${this.canvas.width}px`;
  }

  update(delta: number) {
    const deltaMs = delta * 1000;

    // Age every point, then compact in place (two-pointer, O(n), no shifting).
    const alive = this.trail.length;
    for (let i = 0; i < alive; i++) {
      this.trail[i].age += deltaMs;
    }
    let writeIdx = 0;
    for (let i = 0; i < alive; i++) {
      if (this.trail[i].age <= this.maxAge) {
        this.trail[writeIdx++] = this.trail[i];
      }
    }
    this.trail.length = writeIdx;

    // Idle fast-path: nothing to draw. Only repaint once to clear the texture
    // back to black, then skip clear/redraw/GPU-upload on subsequent frames.
    if (this.trail.length === 0) {
      this.force = 0;
      if (this.cleared) return;
      this.clear();
      this.texture.needsUpdate = true;
      this.cleared = true;
      return;
    }
    this.cleared = false;

    this.clear();
    for (let i = 0; i < this.trail.length; i++) {
      this.drawTouch(this.trail[i]);
    }
    this.texture.needsUpdate = true;
  }

  clear() {
    this.ctx.globalCompositeOperation = "source-over";
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  addTouch(point: { x: number; y: number }) {
    const last = this.trail[this.trail.length - 1];
    if (last) {
      const dx = last.x - point.x;
      const dy = last.y - point.y;
      const dd = dx * dx + dy * dy;
      const force = Math.max(this.minForce, Math.min(dd * 10000, 1));
      this.force = smoothAverage(force, this.force, this.smoothing);
      if (this.interpolate) {
        // Cap the burst so a single huge jump can't flood the array. The +1
        // accounts for the loop below producing `lines - 1` points.
        const lines = Math.min(
          Math.ceil(dd / Math.pow((this.radius * 0.5) / this.interpolate, 2)),
          this.maxInterpolatedPerTouch + 1,
        );
        if (lines > 1) {
          for (let i = 1; i < lines; i++) {
            this.trail.push({
              x: last.x - (dx / lines) * i,
              y: last.y - (dy / lines) * i,
              age: 0,
              force,
            });
          }
        }
      }
    }
    this.trail.push({ x: point.x, y: point.y, age: 0, force: this.force });

    // Enforce the hard cap, dropping oldest points first.
    const excess = this.trail.length - this.maxPoints;
    if (excess > 0) this.trail.splice(0, excess);
  }

  drawTouch(point: TrailPoint) {
    const pos = {
      x: point.x * this.size,
      y: (1 - point.y) * this.size,
    };
    let intensity: number;
    if (point.age < this.maxAge * 0.3) {
      intensity = this.ease(point.age / (this.maxAge * 0.3));
    } else {
      intensity = this.ease(1 - (point.age - this.maxAge * 0.3) / (this.maxAge * 0.7));
    }
    intensity *= point.force;

    this.ctx.globalCompositeOperation = this.blend;
    const radius = this.size * this.radius * intensity;
    const grd = this.ctx.createRadialGradient(
      pos.x,
      pos.y,
      Math.max(0, radius * 0.25),
      pos.x,
      pos.y,
      Math.max(0, radius),
    );
    grd.addColorStop(0, `rgba(255, 255, 255, ${this.intensity})`);
    grd.addColorStop(1, `rgba(0, 0, 0, 0.0)`);
    this.ctx.beginPath();
    this.ctx.fillStyle = grd;
    this.ctx.arc(pos.x, pos.y, Math.max(0, radius), 0, Math.PI * 2);
    this.ctx.fill();
  }

  dispose() {
    this.texture.dispose();
    this.trail.length = 0;
  }
}

export function useTrailTexture(
  config: TrailConfig = {},
): [Texture, (e: ThreeEvent<PointerEvent>) => void] {
  const {
    size,
    maxAge,
    radius,
    intensity,
    interpolate,
    smoothing,
    minForce,
    blend,
    ease,
    maxPoints,
    maxInterpolatedPerTouch,
  } = config;

  const trail = useMemo(
    () => new TrailTextureImpl(config),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      size,
      maxAge,
      radius,
      intensity,
      interpolate,
      smoothing,
      minForce,
      blend,
      ease,
      maxPoints,
      maxInterpolatedPerTouch,
    ],
  );

  // Coalesced pointer input: only the most recent uv survives until the next
  // frame, so we run at most one `addTouch` per RAF regardless of event volume.
  const pendingRef = useRef<{ x: number; y: number } | null>(null);
  // Paused while the tab is hidden — skips flush + update entirely.
  const hiddenRef = useRef(false);

  useEffect(() => {
    const onVisibility = () => {
      hiddenRef.current = document.hidden;
    };
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      trail.dispose();
    };
  }, [trail]);

  useFrame((_, delta) => {
    if (hiddenRef.current) return;
    const pending = pendingRef.current;
    if (pending) {
      pendingRef.current = null;
      trail.addTouch(pending);
    }
    trail.update(delta);
  });

  const onMove = useCallback((e: ThreeEvent<PointerEvent>) => {
    if (hiddenRef.current) return;
    const uv = e.uv;
    if (!uv) return;
    // Copy values so the stored point doesn't alias r3f's (possibly reused)
    // Vector2 instance by the time the next frame flushes it.
    pendingRef.current = { x: uv.x, y: uv.y };
  }, []);

  return [trail.texture, onMove];
}
