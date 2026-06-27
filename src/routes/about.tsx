import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Huzaifa Shahid" },
      { name: "description", content: "Product-focused builder of AI-native software, agents, SaaS, and apps." },
      { property: "og:title", content: "About — Huzaifa Shahid" },
      { property: "og:description", content: "Product-focused builder of AI-native software." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SiteNav />
      <main id="main" className="flex-1">
        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
            <p className="pixel-font text-xs uppercase tracking-[0.18em] text-accent">About</p>
            <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">
              Product-focused builder of AI-native software.
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed">
              <p>
                I'm Huzaifa Shahid. I build AI-native products — software where AI isn't a feature
                bolted on top, it's the way the product works.
              </p>
              <p className="text-text-muted">
                Most of my work sits at the intersection of agents, SaaS, and product UX. I care
                about leverage: tools that let one person move like a team, workflows that remove
                friction instead of adding new dashboards, and interfaces that feel calm under
                real-world use.
              </p>
              <p className="text-text-muted">
                Current focus: Orbit (a personal AI OS for technical founders), Trimly (a
                haircut-decision app), Hermes-style agent workflows, and AI-native SaaS experiments
                like Paywall Lab.
              </p>
              <p className="text-text-muted">
                I'm early-career serious — meaning I take craft, accessibility, and trust seriously,
                and I'd rather ship a small thing that works than a big thing that doesn't.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">See the work</Link>
              <Link to="/contact" className="btn-secondary">Get in touch</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
