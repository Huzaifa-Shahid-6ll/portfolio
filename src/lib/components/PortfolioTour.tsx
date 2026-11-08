import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useReducedMotion } from "motion/react";
import { Button } from "konsta/react";
import {
  Component,
  createContext,
  lazy,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import "./portfolio-tour.css";

const PipAnimation = lazy(() => import("./PortfolioTourPip"));
const TOUR_CHOICE_KEY = "portfolio:pip-tour:v1";
const TourRequest = createContext<[boolean, (start: boolean) => void]>([false, () => undefined]);

const stops = [
  {
    target: "orbit",
    title: "Start with Orbit",
    copy: "See how an AI workspace remembers context and shows what an agent can change.",
    pose: 2,
    destinations: [{ to: "/projects/$slug", params: { slug: "orbit" }, label: "Open Orbit" }],
  },
  {
    target: "work",
    title: "Explore selected work",
    copy: "SkillTube, Errby, TAYPR, and Listing Desk show different problems and the decisions behind each build.",
    pose: 3,
    destinations: [{ to: "/projects", label: "All projects" }],
  },
  {
    target: "about",
    title: "Meet the builder",
    copy: "Find the thinking behind the projects, the tools I use, and my résumé.",
    pose: 4,
    destinations: [
      { to: "/about", label: "About" },
      { to: "/stack", label: "Stack" },
      { to: "/resume", label: "Résumé" },
    ],
  },
  {
    target: "contact",
    title: "Make something useful",
    copy: "If there’s a problem you’re working through, tell me what you’re building.",
    pose: 0,
    destinations: [{ to: "/contact", label: "Get in touch" }],
  },
] as const;

function readChoice() {
  try {
    const choice = localStorage.getItem(TOUR_CHOICE_KEY);
    return choice === "skipped" || choice === "completed";
  } catch {
    return false;
  }
}

function watchChoice(onChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === TOUR_CHOICE_KEY || event.key === null) onChange();
  };
  window.addEventListener("storage", handleStorage);
  return () => window.removeEventListener("storage", handleStorage);
}

function serverChoice() {
  return false;
}

class PipFallback extends Component<{ portrait: ReactNode; children: ReactNode }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.portrait : this.props.children;
  }
}

export function PortfolioTourProvider({ children }: { children: ReactNode }) {
  const pathname = useLocation({ select: (location) => location.pathname });
  const homeRequest = useState(false);

  return (
    <TourRequest.Provider value={homeRequest}>
      {children}
      {pathname !== "/" && <PortfolioTour key={pathname} placement="site" />}
    </TourRequest.Provider>
  );
}

export function PortfolioTour({ placement = "home" }: { placement?: "home" | "site" }) {
  const home = placement === "home";
  const [startOnHome, setStartOnHome] = useContext(TourRequest);
  const navigate = useNavigate();
  const savedChoice = useSyncExternalStore(watchChoice, readChoice, serverChoice);
  const [dismissed, setDismissed] = useState(false);
  const [step, setStep] = useState<number | null>(home && startOnHome ? 0 : null);
  const launcher = useRef<HTMLButtonElement>(null);
  const stepHeading = useRef<HTMLHeadingElement>(null);
  const reducedMotion = useReducedMotion();
  const panelId = useId();
  const headingId = `${panelId}-heading`;
  const progressId = `${panelId}-progress`;
  const open = step !== null;
  const current = home && step !== null ? stops[step] : undefined;
  const complete = home && open && !current;
  const seen = savedChoice || dismissed;
  const showInvite = home && !open && !seen;

  useEffect(() => {
    if (home && startOnHome) setStartOnHome(false);
  }, [home, startOnHome, setStartOnHome]);

  const finish = useCallback((choice: "skipped" | "completed") => {
    setDismissed(true);
    try {
      localStorage.setItem(TOUR_CHOICE_KEY, choice);
    } catch {
      // The tour also works when storage is unavailable.
    }
  }, []);

  const close = useCallback(() => {
    if (home) finish(complete ? "completed" : "skipped");
    setStep(null);
    launcher.current?.focus();
  }, [complete, finish, home]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      if (
        event.target instanceof Element &&
        event.target.closest("[role='dialog'], [role='menu'], #mobile-menu")
      )
        return;
      event.preventDefault();
      close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [close, open]);

  useEffect(() => {
    if (!open) return;
    const target = current
      ? document.querySelector<HTMLElement>(`[data-portfolio-tour="${current.target}"]`)
      : null;
    stepHeading.current?.focus({ preventScroll: true });
    target?.setAttribute("data-portfolio-tour-active", "");
    target?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" });
    return () => target?.removeAttribute("data-portfolio-tour-active");
  }, [current, open, reducedMotion]);

  const portrait = (
    <img className="portfolio-tour-portrait" src="/images/pip/ink-guide.svg" alt="" />
  );

  return (
    <div className={`portfolio-tour-launcher${home ? "" : " portfolio-tour-launcher--site"}`}>
      {showInvite && (
        <p className="portfolio-tour-invite">Meet Pip, your guide to this portfolio.</p>
      )}
      <div className="portfolio-tour-launcher-actions">
        <Button
          inline
          rounded
          type="button"
          ref={launcher}
          tabIndex={!home && open ? -1 : undefined}
          aria-expanded={open}
          aria-controls={open ? panelId : undefined}
          onClick={() => {
            if (open) stepHeading.current?.focus({ preventScroll: true });
            else setStep(0);
          }}
        >
          {!home && <img src="/images/pip/ink-guide.svg" width={24} height={24} alt="" />}
          {home ? (seen ? "Replay tour" : "Take the tour") : "Meet Pip"}
        </Button>
        {showInvite && (
          <Button inline rounded type="button" onClick={close}>
            Explore on my own
          </Button>
        )}
      </div>
      {open &&
        createPortal(
          <section
            id={panelId}
            className="portfolio-tour-panel"
            aria-labelledby={headingId}
            data-lenis-prevent
          >
            <div className="portfolio-tour-header">
              <div className="portfolio-tour-art" aria-hidden="true">
                {reducedMotion === false ? (
                  <PipFallback portrait={portrait}>
                    <Suspense fallback={portrait}>
                      <PipAnimation pose={home ? (current?.pose ?? 5) : 1} portrait={portrait} />
                    </Suspense>
                  </PipFallback>
                ) : (
                  portrait
                )}
              </div>
              <div>
                <p className="portfolio-tour-progress" id={progressId}>
                  {current
                    ? `Pip · Step ${step + 1} of ${stops.length}`
                    : home
                      ? "Pip · Tour complete"
                      : "Portfolio guide"}
                </p>
                <h2 id={headingId} ref={stepHeading} tabIndex={-1} aria-describedby={progressId}>
                  {home ? (current?.title ?? "Thanks for exploring.") : "Hi, I’m Pip."}
                </h2>
              </div>
            </div>
            <p className="portfolio-tour-copy">
              {home
                ? (current?.copy ?? "You can revisit the work or replay the tour any time.")
                : "Want to see how it all fits together? I can walk you through the portfolio."}
            </p>
            {current && (
              <div className="portfolio-tour-links">
                {current.destinations.map(({ label, ...destination }) => (
                  <Link key={destination.to} {...destination}>
                    {label}
                  </Link>
                ))}
              </div>
            )}
            <div className="portfolio-tour-actions">
              {!home ? (
                <>
                  <Button
                    inline
                    rounded
                    type="button"
                    className="portfolio-tour-primary"
                    onClick={() => {
                      setStartOnHome(true);
                      void navigate({ to: "/" }).catch(() => setStartOnHome(false));
                    }}
                  >
                    Take the tour
                  </Button>
                  <Button
                    inline
                    rounded
                    type="button"
                    className="portfolio-tour-skip"
                    onClick={close}
                  >
                    Close
                  </Button>
                </>
              ) : current ? (
                <>
                  <Button
                    inline
                    rounded
                    type="button"
                    disabled={step === 0}
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </Button>
                  <Button
                    inline
                    rounded
                    type="button"
                    className="portfolio-tour-primary"
                    onClick={() => {
                      if (step === stops.length - 1) finish("completed");
                      setStep(step + 1);
                    }}
                  >
                    {step === stops.length - 1 ? "Finish tour" : "Next"}
                  </Button>
                  <Button
                    inline
                    rounded
                    type="button"
                    className="portfolio-tour-skip"
                    onClick={close}
                  >
                    Skip tour
                  </Button>
                </>
              ) : (
                <Button
                  inline
                  rounded
                  type="button"
                  className="portfolio-tour-primary"
                  onClick={close}
                >
                  Done
                </Button>
              )}
            </div>
          </section>,
          document.body,
        )}
    </div>
  );
}
