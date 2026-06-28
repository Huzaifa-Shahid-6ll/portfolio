import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import type { LenisOptions } from "lenis";
import { ReactLenis, useLenis, type LenisRef } from "lenis/react";
import { gsap, registerGsap, reducedMotion, ScrollTrigger } from "./motion";

function useReducedMotionPreference() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(reducedMotion);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setShouldReduceMotion(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return shouldReduceMotion;
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const shouldReduceMotion = useReducedMotionPreference();

  const options = useMemo<LenisOptions>(
    () => ({
      anchors: true,
      autoRaf: false,
      lerp: shouldReduceMotion ? 1 : 0.085,
      smoothWheel: !shouldReduceMotion,
      stopInertiaOnNavigate: true,
      syncTouch: false,
      prevent: (node) =>
        Boolean(
          node.closest(
            "textarea, select, [contenteditable='true'], [role='dialog'], [data-radix-scroll-area-viewport], [data-lenis-prevent]",
          ),
        ),
    }),
    [shouldReduceMotion],
  );

  useEffect(() => {
    registerGsap();

    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis ref={lenisRef} root options={options}>
      <LenisScrollTriggerBridge />
      {children}
    </ReactLenis>
  );
}

function LenisScrollTriggerBridge() {
  const lenis = useLenis();
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    if (!lenis) return;

    registerGsap();
    const updateScrollTrigger = () => ScrollTrigger.update();
    const unsubscribe = lenis.on("scroll", updateScrollTrigger);
    ScrollTrigger.refresh();

    return unsubscribe;
  }, [lenis]);

  useEffect(() => {
    if (!lenis) return;

    const raf = requestAnimationFrame(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });

    return () => cancelAnimationFrame(raf);
  }, [lenis, pathname]);

  return null;
}
