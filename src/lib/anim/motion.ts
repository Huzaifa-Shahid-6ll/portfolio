import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

let registered = false;

/** Register GSAP plugins exactly once, client-side only (SSR-safe). */
export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, SplitText);
  registered = true;
}

/** True when the user has asked the OS to reduce motion. */
export function reducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Pixel-native easing. Motion here is "percussive, not fluid" (per nothing-design):
 * stepped curves read as mechanical / retro-game, never smooth-swoosh.
 */
export const PIXEL_STEPS = "steps(6)";
export const PIXEL_STEPS_FINE = "steps(10)";

export { gsap, ScrollTrigger, SplitText };
