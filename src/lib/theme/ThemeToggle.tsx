import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "konsta/react";
import { useTheme } from "next-themes";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const dark = !mounted || resolvedTheme !== "light";
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!mounted) return;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", dark ? "#121218" : "#fafaf9");
  }, [dark, mounted]);

  return (
    <Button
      clear
      rounded
      inline
      type="button"
      className={`icon-button theme-toggle ${className}`}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(dark ? "light" : "dark")}
    >
      {dark ? <Sun size={17} aria-hidden /> : <Moon size={17} aria-hidden />}
    </Button>
  );
}
