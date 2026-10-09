/**
 * Lightweight capability detection used to gate expensive visual effects
 * (e.g. the WebGL pixel trail). Conservative: any signal of a constrained
 * device or user preference disables the effect.
 *
 * All checks are SSR-safe (no-op until `window`/`navigator` exist), so this
 * can be called during render after hydration.
 */

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Coarse pointers (touch screens). The trail is a mouse-driven effect. */
function isCoarsePointer(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(pointer: coarse)").matches
  );
}

/** Best-effort low-memory / low-core heuristic from the Device Memory APIs. */
function isLowEndDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  const nav = navigator as Navigator & {
    deviceMemory?: number;
    hardwareMemory?: number;
  };
  const memory = nav.deviceMemory ?? nav.hardwareMemory;
  const cores = navigator.hardwareConcurrency;
  if (typeof memory === "number" && memory > 0 && memory < 4) return true;
  if (typeof cores === "number" && cores > 0 && cores < 4) return true;
  return false;
}

/**
 * True when the pixel trail (and similar heavy effects) may run.
 * False on reduced-motion, touch, or low-end devices.
 */
export function supportsHeavyEffects(): boolean {
  return !prefersReducedMotion() && !isCoarsePointer() && !isLowEndDevice();
}
