import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "../theme/ThemeToggle";

export function SiteNav() {
  const linkCls =
    "text-sm font-medium text-text-muted hover:text-accent transition-colors px-2 py-1";
  const activeCls = "text-accent";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
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
          <Link to="/projects" className={linkCls} activeProps={{ className: activeCls }}>
            Work
          </Link>
          <Link to="/about" className={linkCls} activeProps={{ className: activeCls }}>
            About
          </Link>
          <Link to="/stack" className={linkCls} activeProps={{ className: activeCls }}>
            Stack
          </Link>
          <Link to="/resume" className={linkCls} activeProps={{ className: activeCls }}>
            Resume
          </Link>
          <Link to="/contact" className={linkCls} activeProps={{ className: activeCls }}>
            Contact
          </Link>
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
          <Link to="/projects" className={linkCls}>Work</Link>
          <Link to="/contact" className={linkCls}>Contact</Link>
          <ThemeToggle className="ml-1" />
        </nav>
      </div>
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
            AI product builder focused on agents, SaaS systems, mobile/web apps, and automation workflows.
          </p>
        </div>
        <div>
          <h3 className="pixel-font text-xs uppercase tracking-wider text-text-soft mb-3">
            Navigate
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/projects" className="hover:text-accent">Work</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/stack" className="hover:text-accent">Stack</Link></li>
            <li><Link to="/resume" className="hover:text-accent">Resume</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="pixel-font text-xs uppercase tracking-wider text-text-soft mb-3">
            Elsewhere
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://github.com/Huzaifa-Shahid-6ll" target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/huzaifa-shahid-596bb2361/" target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a></li>
            <li><a href="https://x.com/Huzaifa_shd" target="_blank" rel="noreferrer" className="hover:text-accent">X / Twitter</a></li>
            <li><a href="mailto:huzaifa.shd@gmail.com" className="hover:text-accent">Email</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-text-soft">
          <span>© {new Date().getFullYear()} Huzaifa Shahid</span>
          <span className="mono-font">Built as a proof-of-work portfolio, not just a profile page.</span>
        </div>
      </div>
    </footer>
  );
}
