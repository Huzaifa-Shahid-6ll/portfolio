import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const META_DARK = "#08100B";
const META_LIGHT = "#176D33";

/** Read the theme that is actually applied to <html> right now. */
function currentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* storage may be unavailable (private mode) — ignore */
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  meta?.setAttribute("content", theme === "dark" ? META_DARK : META_LIGHT);
}

function prefersReducedMotion() {
  return (
    typeof matchMedia !== "undefined" &&
    matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Toggle light/dark with a circular reveal that grows from the click point.
 * Uses the View Transitions API where available; falls back to an instant
 * swap when it isn't (or when the user prefers reduced motion).
 */
function toggleTheme(event: React.MouseEvent<HTMLButtonElement>) {
  const next: Theme = currentTheme() === "dark" ? "light" : "dark";

  const startVT = (document as Document & {
    startViewTransition?: (cb: () => void) => { ready: Promise<void> };
  }).startViewTransition;

  if (!startVT || prefersReducedMotion()) {
    applyTheme(next);
    return;
  }

  // Origin of the reveal = the toggle button's center.
  const rect = event.currentTarget.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  const transition = startVT.call(document, () => applyTheme(next));
  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 520,
        // Stepped easing → the reveal grows in chunks, on-theme with the pixel UI.
        easing: "steps(14, end)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  // Mount-gate so the icon reflects real state without a hydration mismatch.
  const [mounted, setMounted] = useState(false);
  const [, force] = useState(0);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && currentTheme() === "dark";

  return (
    <button
      type="button"
      onClick={(e) => {
        toggleTheme(e);
        // Re-render so the icon flips after the class changes.
        requestAnimationFrame(() => force((n) => n + 1));
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`theme-toggle ${className}`}
    >
      <Sun className="theme-icon theme-icon-sun" size={16} strokeWidth={2.25} aria-hidden />
      <Moon className="theme-icon theme-icon-moon" size={16} strokeWidth={2.25} aria-hidden />
    </button>
  );
}
