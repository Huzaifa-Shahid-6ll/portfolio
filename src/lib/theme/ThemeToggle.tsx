import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const initialDark = document.documentElement.classList.contains("dark");
    setDark(initialDark);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", initialDark ? "#101113" : "#fafaf9");
    const preference = matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      let saved = null;
      try {
        saved = localStorage.getItem("theme");
      } catch {
        /* Storage is optional. */
      }
      if (!saved) {
        document.documentElement.classList.toggle("dark", preference.matches);
        document
          .querySelector('meta[name="theme-color"]')
          ?.setAttribute("content", preference.matches ? "#101113" : "#fafaf9");
        setDark(preference.matches);
      }
    };
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);

  return (
    <motion.button
      type="button"
      className={`icon-button theme-toggle ${className}`}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={{ scale: 0.92 }}
      onClick={() => {
        const next = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", next);
        try {
          localStorage.setItem("theme", next ? "dark" : "light");
        } catch {
          /* Storage is optional. */
        }
        document
          .querySelector('meta[name="theme-color"]')
          ?.setAttribute("content", next ? "#101113" : "#fafaf9");
        setDark(next);
      }}
    >
      {dark ? <Sun size={17} aria-hidden /> : <Moon size={17} aria-hidden />}
    </motion.button>
  );
}
