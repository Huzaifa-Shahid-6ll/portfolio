import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import TextType from "./TextType";

const bootLines = [
  "handshake accepted",
  "assembling pixel surface",
  "warming agent console",
  "loading portfolio runtime",
];

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function BootLoader() {
  const lenis = useLenis();
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    setReduceMotion(reduced);

    const exitTimer = window.setTimeout(
      () => {
        setExiting(true);
      },
      reduced ? 900 : 3300,
    );
    const removeTimer = window.setTimeout(
      () => {
        setVisible(false);
      },
      reduced ? 1100 : 3950,
    );

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (!visible || typeof document === "undefined") return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    lenis?.stop();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      lenis?.start();
    };
  }, [visible, lenis]);

  if (!visible) return null;

  return (
    <div
      className={`boot-loader ${exiting ? "boot-loader-exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Huzaifa Shahid portfolio"
    >
      <div className="boot-loader-grid" aria-hidden="true" />
      <div className="boot-loader-frame scan-sweep">
        <div className="boot-loader-topbar" aria-hidden="true">
          <span>LOADER://HUZAIFA_OS</span>
          <span className="inline-flex items-center gap-2">
            <span className="status-dot status-pulse" />
            RUNNING
          </span>
        </div>

        <div className="boot-loader-stage">
          <div className="boot-loader-copy">
            <p className="pixel-font text-[0.68rem] uppercase tracking-[0.18em] text-accent-strong md:text-xs">
              boot sequence
            </p>
            <div className="mt-3 flex justify-end overflow-hidden text-right">
              <TextType
                as="h1"
                text="hey, greetings"
                typingSpeed={reduceMotion ? 1 : 72}
                initialDelay={reduceMotion ? 0 : 520}
                pauseDuration={1400}
                loop={false}
                showCursor={!reduceMotion}
                cursorCharacter="█"
                cursorClassName="boot-loader-cursor"
                reverseMode
                className="boot-loader-greeting pixel-font"
                aria-label="hey, greetings"
              />
            </div>
            <p className="mt-4 max-w-md text-right mono-font text-sm text-text-muted md:text-base">
              entering the workshop after a small premium pause
            </p>
          </div>
        </div>

        <div className="boot-loader-terminal" aria-hidden="true">
          {bootLines.map((line, index) => (
            <span
              key={line}
              className="boot-loader-line"
              style={{ animationDelay: reduceMotion ? "0ms" : `${820 + index * 210}ms` }}
            >
              <span className="text-accent">&gt;</span> {line}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
