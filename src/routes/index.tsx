import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";
import { ProjectCard } from "@/lib/components/ProjectCard";
import { homepageProjects, projects } from "@/lib/content/projects";

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
    items: ["SvelteKit / React / TS", "Tailwind design systems", "Calm, scannable UI"],
  },
  {
    title: "Backend & Systems Thinking",
    items: ["FastAPI / Node", "Structured data + memory", "Pragmatic architecture"],
  },
];

const process = [
  "Understand the real workflow.",
  "Turn the workflow into product logic.",
  "Design for clarity and trust.",
  "Build the smallest useful version.",
  "Polish states, edges, and details.",
];

function Home() {
  const orbit = projects.find((p) => p.slug === "orbit")!;
  const others = homepageProjects.filter((p) => p.slug !== "orbit");

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SiteNav />
      <main id="main" className="flex-1">
        {/* HERO */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
            <p className="pixel-font text-xs uppercase tracking-[0.18em] text-accent">
              AI Agents · SaaS Products · Mobile / Web Apps
            </p>
            <h1
              className="mt-5 font-semibold tracking-tight text-text"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.75rem)", lineHeight: 1.0 }}
            >
              I build AI-native products that turn{" "}
              <span className="text-accent">messy workflows</span> into polished software.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-text-muted leading-relaxed">
              I'm Huzaifa Shahid, a product-focused developer building AI agents, SaaS
              systems, automation workflows, and mobile/web applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">View work</Link>
              <Link to="/contact" className="btn-secondary">Contact me</Link>
            </div>
            <div className="mt-10 pt-6 border-t border-border">
              <p className="mono-font text-xs text-text-soft uppercase tracking-wider mb-3">
                <span className="status-dot mr-2 align-middle" aria-hidden /> Currently building
              </p>
              <p className="text-sm text-text-muted">
                Orbit, Trimly, Hermes-style workflows, and AI-native product experiments.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["AI agents", "SaaS systems", "Expo / React Native", "SvelteKit", "FastAPI", "TypeScript", "Product UX"].map((t) => (
                  <span key={t} className="pixel-chip">{t}</span>
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
                ★ Flagship project
              </span>
              <span className="h-px flex-1 bg-border-strong" />
            </div>
            <div
              className="border-2 border-accent-strong bg-surface"
              style={{ boxShadow: "6px 6px 0 0 var(--shadow-tint)" }}
            >
              <div className="px-6 py-3 border-b-2 border-accent-strong bg-accent-soft flex items-center justify-between">
                <span className="mono-font text-xs uppercase tracking-wider text-accent-strong">
                  orbit.app · personal AI OS
                </span>
                <span className="inline-flex items-center gap-2 mono-font text-xs text-accent-strong">
                  <span className="status-dot" aria-hidden /> Active build
                </span>
              </div>
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-3 p-6 md:p-10 border-b md:border-b-0 md:border-r border-border">
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">{orbit.title}</h2>
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
                <div key={c.title} className="pixel-panel p-5">
                  <h3 className="font-semibold">{c.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-text-muted">
                    {c.items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-accent mono-font" aria-hidden>▸</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                <li key={step} className="pixel-panel p-4">
                  <div className="pixel-font text-accent text-sm">0{i + 1}</div>
                  <p className="mt-2 text-sm leading-snug">{step}</p>
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
              <StackBlock title="Frontend" items={["SvelteKit", "React", "TypeScript", "Tailwind"]} />
              <StackBlock title="Mobile" items={["Expo", "React Native"]} />
              <StackBlock title="Backend" items={["FastAPI", "Node", "Postgres"]} />
              <StackBlock title="AI & Agents" items={["LLM APIs", "Tool use", "Structured outputs"]} />
              <StackBlock title="Product" items={["UX flows", "PRDs", "Analytics"]} />
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
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Let's talk.</h2>
            <p className="mt-4 text-text-muted max-w-xl mx-auto">
              Open to AI agent workflow work, SaaS product builds, mobile apps, product UX, and
              technical collaboration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="btn-primary">Contact me</Link>
              <Link to="/resume" className="btn-secondary">Resume</Link>
              <a href="https://github.com/huzaifashahid" target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
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
    <div>
      <p className="pixel-font text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}

function StackBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="pixel-panel p-4">
      <h3 className="pixel-font text-xs uppercase tracking-wider text-accent">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}
