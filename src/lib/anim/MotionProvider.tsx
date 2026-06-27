import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { registerGsap, reducedMotion, gsap, ScrollTrigger, PIXEL_STEPS } from "./motion";

/**
 * Global scroll-reveal coordinator. Any element tagged `data-reveal` ticks up
 * into place once as it enters the viewport — snappy stepped motion, fired once,
 * IntersectionObserver-backed via ScrollTrigger.batch. No parallax, no pinning.
 *
 * Content is visible by default (HTML ships visible); JS only hides-then-reveals
 * when motion is enabled, so a no-JS / reduced-motion / headless render never blanks.
 */
export function MotionProvider() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    registerGsap();
    const shouldReduceMotion = reducedMotion();

    // Wait one frame so the freshly-navigated route DOM is in place.
    const raf = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
        if (progress) {
          gsap.set(progress, { scaleX: 0 });
          ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => {
              gsap.to(progress, {
                scaleX: self.progress,
                duration: shouldReduceMotion ? 0 : 0.12,
                ease: shouldReduceMotion ? "none" : PIXEL_STEPS,
                overwrite: true,
              });
            },
          });
        }

        if (shouldReduceMotion) {
          ScrollTrigger.refresh();
          return;
        }

        const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        if (!els.length) {
          ScrollTrigger.refresh();
          return;
        }

        gsap.set(els, {
          opacity: 0,
          y: (_index, target: HTMLElement) => (target.dataset.reveal === "snap" ? 4 : 10),
        });
        ScrollTrigger.batch(els, {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.42,
              ease: PIXEL_STEPS,
              stagger: 0.06,
              overwrite: true,
            }),
        });
        ScrollTrigger.refresh();
      });

      // Stash the context for cleanup on the same element set.
      cleanup = () => ctx.revert();
    });

    let cleanup: (() => void) | undefined;
    return () => {
      cancelAnimationFrame(raf);
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
