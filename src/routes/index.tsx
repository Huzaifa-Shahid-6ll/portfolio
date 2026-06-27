import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";
import Dither from "@/lib/components/Dither";
import { ProjectCard } from "@/lib/components/ProjectCard";
import PixelCard from "@/lib/components/PixelCard";
import { homepageProjects, projects } from "@/lib/content/projects";
import {
  registerGsap,
  reducedMotion,
  gsap,
  ScrollTrigger,
  SplitText,
  PIXEL_STEPS,
} from "@/lib/anim/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Huzaifa Shahid — AI Product Builder" },
      {
        name: "description",
        content:
          "I build AI-native products, AI agents, SaaS systems, and mobile/web apps that turn messy workflows into polished software.",
      },
      { property: "og:title", content: "Huzaifa Shahid — AI Product Builder" },
      {
        property: "og:description",
        content:
          "AI-native products, agents, SaaS systems, and mobile/web apps. Building Orbit, Trimly, Hermes-style workflows, and more.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const capabilities = [
  {
    title: "AI Agents & Workflow Automation",
    items: ["Multi-step agent workflows", "Tool use and structured outputs", "Verification and approval points"],
  },
  {
    title: "SaaS Products & Dashboards",
    items: ["Auth, billing, data models", "Operator dashboards", "Analytics + experimentation"],
  },
  {
    title: "Mobile Apps",
    items: ["Expo / React Native", "Auth + subscription flows", "Camera + media workflows"],
  },
  {
    title: "Frontend & Product UX",
    items: ["Next.js / React / TS", "Tailwind design systems", "Calm, scannable UI"],
  },
  {
    title: "Backend & Systems Thinking",
    items: ["Node / Bun / Hono", "Structured data + memory", "Pragmatic architecture"],
  },
];

const process = [
  "Understand the real workflow.",
  "Turn the workflow into product logic.",
  "Design for clarity and trust.",
  "Build the smallest useful version.",
  "Polish states, edges, and details.",
];

const lightDither = {
  waveColor: [0.09, 0.43, 0.2] as [number, number, number],
  backgroundColor: [0.97, 1, 0.97] as [number, number, number],
  colorNum: 3,
  pixelSize: 5,
  waveAmplitude: 0.08,
  waveFrequency: 1.7,
};

const darkDither = {
  waveColor: [0.96, 1, 0.97] as [number, number, number],
  backgroundColor: [0.03, 0.06, 0.04] as [number, number, number],
  colorNum: 3,
  pixelSize: 6,
  waveAmplitude: 0.06,
  waveFrequency: 1.35,
};

function useDarkThemeApplied() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));

    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return isDark;
}

function HeroDither() {
  const isDark = useDarkThemeApplied();
  const settings = isDark ? darkDither : lightDither;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-[0.22] dark:opacity-[0.3]"
    >
      <Dither
        waveColor={settings.waveColor}
        backgroundColor={settings.backgroundColor}
        colorNum={settings.colorNum}
        pixelSize={settings.pixelSize}
        waveAmplitude={settings.waveAmplitude}
        waveFrequency={settings.waveFrequency}
        waveSpeed={0.025}
        enableMouseInteraction={false}
      />
    </div>
  );
}

function Home() {
  const orbit = projects.find((p) => p.slug === "orbit")!;
  const others = homepageProjects.filter((p) => p.slug !== "orbit");

  const heroRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  // Tier 1 — hero boot-in: the headline decodes character-by-character (terminal
  // type-on), then the eyebrow / copy / CTAs / chips snap in on a mechanical stagger.
  useEffect(() => {
    registerGsap();
    const el = heroRef.current;
    if (!el || reducedMotion()) return; // content already visible by default

    let split: SplitText | undefined;
    const ctx = gsap.context(() => {
      const title = el.querySelector<HTMLElement>("[data-hero-title]");
      const tl = gsap.timeline({ defaults: { ease: PIXEL_STEPS } });

      if (title) {
        split = new SplitText(title, { type: "chars" });
        gsap.set(split.chars, { opacity: 0 });
        tl.to(split.chars, { opacity: 1, duration: 0.5, stagger: 0.012, ease: "steps(1)" }, 0.05);
      }

      gsap.set("[data-hero-item]", { opacity: 0, y: 8 });
      gsap.set("[data-hero-caret]", { opacity: 0 });
      gsap.set("[data-hero-chip]", { scale: 0.6 });
      tl.to("[data-hero-item]", { opacity: 1, y: 0, duration: 0.4, stagger: 0.07 }, 0.18)
        .to("[data-hero-chip]", { scale: 1, duration: 0.3, stagger: 0.03, ease: "steps(4)" }, ">-0.1")
        .to("[data-hero-caret]", { opacity: 1, duration: 0.1 }, ">-0.05");
    }, el);

    return () => {
      split?.revert();
      ctx.revert();
    };
  }, []);

  // Tier 2 — orbit flagship "shadow-drop": the pixel box-shadow snaps into place
  // as the panel enters, so the flagship feels physically set down.
  useEffect(() => {
    registerGsap();
    const el = orbitRef.current;
    if (!el || reducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: PIXEL_STEPS,
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SiteNav />
      <main id="main" className="flex-1">
        {/* HERO */}
        <section
          ref={heroRef}
          className="relative isolate overflow-hidden scan-sweep border-b border-border bg-bg"
        >
          <HeroDither />
          <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
            <p data-hero-item className="pixel-font text-xs uppercase tracking-[0.18em] text-accent">
              AI Agents · SaaS Products · Mobile / Web Apps
            </p>
            <h1
              className="mt-5 font-bold tracking-tight text-text"
              style={{ fontSize: "clamp(2.75rem, 5.5vw, 5.5rem)", lineHeight: 1.0 }}
            >
              <span data-hero-title>
                I build AI-native products that turn{" "}
                <span className="text-accent">messy workflows</span> into polished software.
              </span>
              <span data-hero-caret className="pixel-caret" aria-hidden />
            </h1>
            <p data-hero-item className="mt-6 max-w-2xl text-lg text-text-muted leading-relaxed">
              I'm Huzaifa Shahid, a product-focused developer building AI agents, SaaS
              systems, automation workflows, and mobile/web applications.
            </p>
            <div data-hero-item className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">View work</Link>
              <Link to="/contact" className="btn-secondary">Contact me</Link>
            </div>
            <div data-hero-item className="mt-10 pt-6 border-t border-border">
              <p className="mono-font text-xs text-text-soft uppercase tracking-wider mb-3">
                Currently building
              </p>
              <p className="text-sm text-text-muted">
                Orbit, Trimly, Hermes-style workflows, and AI-native product experiments.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["AI agents", "SaaS systems", "Expo / React Native", "Next.js", "Hono", "TypeScript", "Product UX"].map((t) => (
                  <span key={t} data-hero-chip className="pixel-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ORBIT FLAGSHIP */}
        <section className="border-b border-border bg-surface-soft">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="pixel-font text-xs uppercase tracking-[0.18em] text-accent">
                Flagship project
              </span>
              <span className="h-px flex-1 bg-border-strong" />
            </div>
            <div
              ref={orbitRef}
              className="border-2 border-accent-strong bg-surface"
              style={{ boxShadow: "6px 6px 0 0 var(--shadow-tint)" }}
            >
              <div className="px-6 py-3 border-b-2 border-accent-strong bg-accent-soft flex items-center justify-between">
                <span className="mono-font text-xs uppercase tracking-wider text-accent-strong">
                  orbit.app · personal AI OS
                </span>
                <span className="inline-flex items-center gap-2 mono-font text-xs text-accent-strong">
                  <span className="status-dot pixel-blink" aria-hidden />
                  Active build
                </span>
              </div>
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-3 p-6 md:p-10 border-b md:border-b-0 md:border-r border-border">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight">{orbit.title}</h2>
                  <p className="mt-3 text-xl text-text-muted">{orbit.oneLiner}</p>
                  <p className="mt-5 text-base leading-relaxed">{orbit.summary}</p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      to="/projects/$slug"
                      params={{ slug: "orbit" }}
                      className="btn-primary"
                    >
                      View Orbit case study
                    </Link>
                    <Link to="/contact" className="btn-secondary">Contact me</Link>
                  </div>
                </div>
                <div className="md:col-span-2 p-6 md:p-8 bg-surface-soft text-sm">
                  <MetaRow label="Type" value={orbit.type} />
                  <MetaRow label="Status" value={orbit.status} />
                  <MetaRow label="Role" value={orbit.role} />
                  <div className="py-3 border-t border-border">
                    <p className="pixel-font text-[0.7rem] uppercase tracking-wider text-text-soft mb-2">Focus</p>
                    <div className="flex flex-wrap gap-1.5">
                      {orbit.tags.map((t) => (
                        <span key={t} className="pixel-chip !py-0.5">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
            <SectionHeader eyebrow="02 · Selected work" title="A small portfolio, on purpose." />
            <p className="mt-2 text-text-muted max-w-2xl">
              Four projects I'm building or refining. Curated, not exhaustive.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {others.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
            <div className="mt-8">
              <Link to="/projects" className="btn-secondary">See all projects</Link>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="border-b border-border bg-bg-soft">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
            <SectionHeader eyebrow="03 · Capabilities" title="What I actually do." />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c) => (
                <PixelCard key={c.title} data-reveal className="pixel-panel p-5">
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-text-muted">
                    {c.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </PixelCard>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
            <SectionHeader eyebrow="04 · Process" title="How I build." />
            <ol className="mt-10 grid gap-3 md:grid-cols-5">
              {process.map((step, i) => (
                <li key={step}>
                  <PixelCard data-reveal className="pixel-panel p-4 h-full" gap={4}>
                    <div className="pixel-font text-accent text-sm">0{i + 1}</div>
                    <p className="mt-2 text-sm leading-snug">{step}</p>
                  </PixelCard>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* STACK PREVIEW */}
        <section className="border-b border-border bg-bg-soft">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
            <SectionHeader eyebrow="05 · Stack" title="Tools I reach for." />
            <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
              <StackBlock title="Frontend" items={["Next.js", "React", "TypeScript", "Shared CNUI"]} />
              <StackBlock title="Mobile" items={["Expo", "React Native", "Clerk"]} />
              <StackBlock title="Backend" items={["Node / Bun", "Hono", "BetterAuth"]} />
              <StackBlock title="AI & Agents" items={["Mastra", "LangGraph", "Vercel AI SDK"]} />
              <StackBlock title="Spec-Driven Development" items={["BMAD Method", "GitHub Spec Kit"]} />
            </div>
            <div className="mt-8">
              <Link to="/stack" className="btn-secondary">Full stack</Link>
            </div>
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 grid gap-10 md:grid-cols-3">
            <div>
              <SectionHeader eyebrow="06 · About" title="Builder, not a template." />
            </div>
            <div className="md:col-span-2 space-y-4 text-base leading-relaxed">
              <p>
                I focus on AI-native products: software where AI isn't a feature bolted on, it's the
                way the product works. The interesting work is in the workflow, the trust model, and the
                small details that make a system feel reliable.
              </p>
              <p className="text-text-muted">
                Current focus: Orbit, Trimly, Hermes-style agent workflows, and AI-native SaaS
                experiments. I care about leverage, real workflows, and product thinking over hype.
              </p>
              <Link to="/about" className="btn-secondary mt-2">More about me</Link>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section>
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 text-center">
            <p className="pixel-font text-xs uppercase tracking-[0.18em] text-accent">07 · Contact</p>
            <h2 data-reveal className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Let's talk.</h2>
            <p className="mt-4 text-text-muted max-w-xl mx-auto">
              Open to AI agent workflow work, SaaS product builds, mobile apps, product UX, and
              technical collaboration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="btn-primary">Contact me</Link>
              <Link to="/resume" className="btn-secondary">Resume</Link>
              <a href="https://github.com/Huzaifa-Shahid-6ll" target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-3 border-b border-border">
      <p className="pixel-font text-[0.7rem] uppercase tracking-wider text-text-soft">{label}</p>
      <p className="mt-1 text-sm">{value}</p>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div data-reveal>
      <p className="pixel-font text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function StackBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div data-reveal className="pixel-panel p-4">
      <h3 className="pixel-font text-xs uppercase tracking-wider text-accent">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}
