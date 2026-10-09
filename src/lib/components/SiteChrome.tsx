import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Github, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ThemeToggle } from "../theme/ThemeToggle";

const links = [
  { to: "/projects", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/stack", label: "Stack" },
  { to: "/resume", label: "Résumé" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = useLocation({ select: (location) => location.pathname });
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const resize = () => {
      if (window.innerWidth >= 800) setOpen(false);
    };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
      window.removeEventListener("resize", resize);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="nav-inner">
        <Link to="/" className="wordmark">
          <span className="monogram" aria-hidden>
            h.
          </span>
          <span>
            Huzaifa Shahid<span className="wordmark-role">Product builder</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
              activeProps={{ className: "nav-link active", "aria-current": "page" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <Link to="/contact" className="nav-contact">
            Let’s talk <ArrowUpRight size={14} aria-hidden />
          </Link>
          <motion.button
            ref={toggleRef}
            type="button"
            className="icon-button menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.92 }}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </motion.button>
        </div>
      </div>
      {open && (
        <motion.nav
          id="mobile-menu"
          aria-label="Mobile"
          className="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onBlur={(event) => {
            if (!headerRef.current?.contains(event.relatedTarget as Node)) setOpen(false);
          }}
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
              activeProps={{ className: "nav-link active", "aria-current": "page" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          ))}
          <Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>
            Contact
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </motion.nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <div>
          <Link to="/" className="footer-name">
            Huzaifa Shahid<span className="accent-dot">.</span>
          </Link>
          <p>Useful software. Thought through.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Huzaifa-Shahid-6ll" target="_blank" rel="noreferrer">
            GitHub <Github size={14} aria-hidden />
          </a>
          <a
            href="https://www.linkedin.com/in/huzaifa-shahid-596bb2361/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={14} aria-hidden />
          </a>
          <a href="https://x.com/Huzaifa_shd" target="_blank" rel="noreferrer">
            X <ArrowUpRight size={14} aria-hidden />
          </a>
          <a href="mailto:huzaifa.shd@gmail.com">
            Email <ArrowUpRight size={14} aria-hidden />
          </a>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <span>© {new Date().getFullYear()} Huzaifa Shahid</span>
        <span>Made with care. Still making things.</span>
      </div>
    </footer>
  );
}
