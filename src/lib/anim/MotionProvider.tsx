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
    if (reducedMotion()) return;

    // Wait one frame so the freshly-navigated route DOM is in place.
    const raf = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        if (!els.length) return;

        gsap.set(els, { opacity: 0, y: 10 });
        ScrollTrigger.batch(els, {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.4,
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
