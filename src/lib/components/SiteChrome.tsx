import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "../theme/ThemeToggle";

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { to: "/projects", label: "Work" },
    { to: "/about", label: "About" },
    { to: "/stack", label: "Stack" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" },
  ] as const;
  const linkCls = "pixel-nav-link text-sm font-medium text-text-muted hover:text-accent px-2 py-1";
  const activeCls = "text-accent pixel-nav-link-active";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur relative">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-semibold tracking-tight">Huzaifa Shahid</span>
          <span className="hidden sm:inline pixel-font text-[0.7rem] text-text-soft uppercase tracking-wider">
            / ergatikós
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={linkCls}
              activeProps={{ className: activeCls }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/Huzaifa-Shahid-6ll"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary !py-1.5 !px-3 !text-xs ml-2"
          >
            GitHub
          </a>
          <ThemeToggle className="ml-1" />
        </nav>
        <nav aria-label="Primary mobile" className="flex md:hidden items-center gap-1">
          <ThemeToggle className="ml-1" />
          <button
            type="button"
            className="theme-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={16} aria-hidden /> : <Menu size={16} aria-hidden />}
          </button>
        </nav>
      </div>
      <div
        data-scroll-progress
        className="scroll-progress-pixel absolute bottom-0 left-0 h-[2px] w-full bg-accent"
        aria-hidden
      />
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-full border-b border-border bg-bg/95 px-4 py-4 shadow-[0_8px_0_0_var(--shadow-tint)] backdrop-blur md:hidden pixel-snap-in"
        >
          <div className="grid gap-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="pixel-hover border border-border-strong bg-surface px-3 py-2 text-sm font-medium text-text-muted hover:text-accent"
                activeProps={{ className: "text-accent border-accent" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/Huzaifa-Shahid-6ll"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary !justify-start !py-2 !px-3 !text-sm"
              onClick={() => setMobileOpen(false)}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-soft mt-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Huzaifa Shahid</span>
          </div>
          <p className="mt-3 text-sm text-text-muted max-w-xs">
            AI product builder focused on agents, SaaS systems, mobile/web apps, and automation
            workflows.
          </p>
        </div>
        <div>
          <h3 className="pixel-font text-xs uppercase tracking-wider text-text-soft mb-3">
            Navigate
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/projects" className="hover:text-accent">
                Work
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link to="/stack" className="hover:text-accent">
                Stack
              </Link>
            </li>
            <li>
              <Link to="/resume" className="hover:text-accent">
                Resume
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="pixel-font text-xs uppercase tracking-wider text-text-soft mb-3">
            Elsewhere
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/Huzaifa-Shahid-6ll"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/huzaifa-shahid-596bb2361/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Huzaifa_shd"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                X / Twitter
              </a>
            </li>
            <li>
              <a href="mailto:huzaifa.shd@gmail.com" className="hover:text-accent">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-text-soft">
          <span>© {new Date().getFullYear()} Huzaifa Shahid</span>
          <span className="mono-font">
            Built as a proof-of-work portfolio, not just a profile page.
          </span>
        </div>
      </div>
    </footer>
  );
}
