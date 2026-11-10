import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Github, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Popover } from "@base-ui/react/popover";
import { Button } from "konsta/react";
import { ThemeToggle } from "../theme/ThemeToggle";
import { CommandMenu } from "./CommandMenu";

const links = [
  { to: "/projects", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/stack", label: "Stack" },
  { to: "/resume", label: "Résumé" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = useLocation({ select: (location) => location.pathname });
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 800px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <header className="site-header">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="nav-inner" ref={navRef}>
          <Link to="/" className="wordmark">
            <span className="brand-mark" aria-hidden>
              <img src="/images/brand-mark.png" alt="" width={48} height={48} />
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
            <CommandMenu onOpen={() => setOpen(false)} />
            <ThemeToggle />
            <Link to="/contact" className="nav-contact">
              Let’s talk <ArrowUpRight size={14} aria-hidden />
            </Link>
            <Popover.Trigger
              render={<Button clear rounded inline />}
              className="icon-button menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
            </Popover.Trigger>
          </div>
        </div>
        <Popover.Portal>
          <Popover.Positioner anchor={navRef} sideOffset={6} className="mobile-menu-positioner">
            <Popover.Popup aria-label="Site navigation" className="mobile-menu">
              <nav aria-label="Mobile">
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
              </nav>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </header>
    </Popover.Root>
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
