import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";
import { ProjectGrid } from "@/lib/components/ProjectGrid";
import { ProjectVisual } from "@/lib/components/ProjectVisual";
import { homepageProjects } from "@/lib/content/projects";
import { ProductWalkthrough } from "@/lib/components/ProductWalkthrough";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Huzaifa Shahid — Product Builder" },
      {
        name: "description",
        content:
          "Useful software. Thought through. AI products and the interfaces around them, by Huzaifa Shahid. Explore Orbit, SkillTube, Errby, TAYPR, and Listing Desk.",
      },
      { property: "og:title", content: "Huzaifa Shahid — Product Builder" },
      {
        property: "og:description",
        content: "AI products and the interfaces around them. Explore the work of Huzaifa Shahid.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main id="main" className="flex-1">
        <section className="home-hero" aria-labelledby="hero-title">
          <p className="hero-intro">Huzaifa Shahid · AI product builder</p>
          <h1 id="hero-title" className="hero-title">
            Useful software.
            <br />
            <span>Thought through.</span>
          </h1>
          <p className="hero-description">
            I build AI products and the interfaces around them.
            <br className="hidden sm:block" /> An agent workspace. A learning partner. A better
            barber brief.
          </p>
          <div className="hero-buttons">
            <a href="#work" className="btn-primary">
              Explore the work <ArrowDown size={15} aria-hidden />
            </a>
            <Link to="/contact" className="btn-secondary">
              Get in touch <ArrowUpRight size={15} aria-hidden />
            </Link>
          </div>
        </section>

        <section className="page-shell" aria-label="Featured project: Orbit">
          <Link to="/projects/$slug" params={{ slug: "orbit" }} className="block hero-project">
            <ProjectVisual slug="orbit" />
          </Link>
          <div className="hero-project-meta">
            <p className="hero-project-name">
              Orbit <span>A personal workspace for AI that remembers.</span>
            </p>
            <Link to="/projects/$slug" params={{ slug: "orbit" }} className="text-link">
              Inside the build <ArrowUpRight size={14} aria-hidden />
            </Link>
          </div>
        </section>

        <section id="work" className="page-shell home-work" aria-labelledby="work-title">
          <div className="section-top">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title" className="section-heading">
                Different problems.
                <br />
                Same attention to detail.
              </h2>
            </div>
            <p>
              Active builds and prototypes.
              <br />
              The thinking behind each one.
            </p>
          </div>
          <ProjectGrid projects={homepageProjects} />
          <div className="section-action">
            <Link to="/projects" className="btn-secondary">
              All projects & experiments <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
        </section>

        <ProductWalkthrough />
        <section className="approach-section" aria-labelledby="approach-title">
          <div className="page-shell approach-grid">
            <div>
              <p className="eyebrow">How I work</p>
              <h2 id="approach-title" className="section-heading">
                The details are
                <br />
                the product.
              </h2>
              <p className="approach-lead">
                A useful product has to hold up when the input is messy or a task goes wrong. That’s
                where I spend my time.
              </p>
              <Link to="/about" className="text-link">
                A little about me <ArrowUpRight size={15} aria-hidden />
              </Link>
            </div>
            <div>
              <div className="approach-item">
                <span>01</span>
                <div>
                  <h3>Start with the actual task.</h3>
                  <p>
                    A tutorial needs to become a file. A haircut choice needs to reach a barber. I
                    work backwards from what someone needs to do.
                  </p>
                </div>
              </div>
              <div className="approach-item">
                <span>02</span>
                <div>
                  <h3>Make the next step clear.</h3>
                  <p>
                    Keep the evidence beside the decision. Show what an agent is about to change,
                    and give people a way to review it.
                  </p>
                </div>
              </div>
              <div className="approach-item">
                <span>03</span>
                <div>
                  <h3>Stay for the awkward parts.</h3>
                  <p>
                    The interrupted reply. The missing transcript. The form on a small screen. They
                    deserve the same care as the first demo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-close" aria-labelledby="contact-title">
          <p className="eyebrow">Have something in mind?</p>
          <h2 id="contact-title">Let’s make it useful.</h2>
          <p>Tell me what you’re building and where you’re stuck.</p>
          <Link to="/contact" className="btn-primary">
            Start a conversation <ArrowUpRight size={16} aria-hidden />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
