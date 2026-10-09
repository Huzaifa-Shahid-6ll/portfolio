import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Huzaifa Shahid" },
      { name: "description", content: "The thinking behind my AI products and interfaces." },
      { property: "og:title", content: "About — Huzaifa Shahid" },
      { property: "og:description", content: "The thinking behind my AI products and interfaces." },
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
        <div className="page-shell py-20 md:py-28">
          <p className="eyebrow">About me</p>
          <h1 className="page-heading mt-5 max-w-4xl">I care about what happens after the demo.</h1>
          <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
            <div>
              <p className="text-2xl font-semibold tracking-tight">I'm Huzaifa Shahid.</p>
              <p className="mt-3 text-lg text-text-muted">
                AI product builder. Curious about the details.
              </p>
              <Link to="/contact" className="text-link mt-6 inline-flex">
                Get in touch <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-text-muted">
              <p>
                A useful product has to hold up when the input is messy or a task goes wrong. That's
                where I spend my time: the workflow and the next step the interface gives you.
              </p>
              <p>
                My work includes Orbit, an AI workspace with memory and tool permissions, and Errby,
                a learning partner that asks you to explain what you know. I'm also exploring
                haircut planning with TAYPR and practical agent tooling with SkillTube.
              </p>
              <p>
                I like small, clear interfaces. But the work behind them can be complicated,
                especially keeping private data private and knowing when the user needs to step in.
              </p>
              <p>
                These projects are at different stages. Each page makes its current stage clear so
                you can see what's there today.
              </p>
            </div>
          </div>
          <section className="mt-20 border-t border-border pt-12">
            <p className="eyebrow">Working together</p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-8">
              <h2 className="section-heading max-w-2xl">
                A product idea, or a workflow that needs a rethink?
              </h2>
              <Link to="/projects" className="btn-secondary">
                Explore the work <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
