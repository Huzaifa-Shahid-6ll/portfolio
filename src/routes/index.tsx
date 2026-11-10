import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { CommandMenu } from "@/lib/components/CommandMenu";
import { PortfolioTour } from "@/lib/components/PortfolioTour";
import { SiteFooter } from "@/lib/components/SiteChrome";
import { ProjectVisual } from "@/lib/components/ProjectVisual";
import { homepageProjects, projects, site, type Project } from "@/lib/content/projects";
import { ProductWalkthrough } from "@/lib/components/ProductWalkthrough";
import { ThemeToggle } from "@/lib/theme/ThemeToggle";
import "@/lib/components/bento-home.css";

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

const featured = projects.find((project) => project.slug === "orbit");
const showcase = homepageProjects.filter(({ slug }) => slug === "skilltube" || slug === "errby");
const moreProjects = homepageProjects.filter(
  ({ slug }) => slug !== "skilltube" && slug !== "errby",
);

function BentoProject({
  project,
  size = "standard",
}: {
  project: Project;
  size?: "feature" | "standard" | "compact";
}) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className={`bento-tile bento-project bento-project--${size}`}
      aria-labelledby={`bento-${project.slug}`}
      data-portfolio-tour={size === "feature" ? "orbit" : undefined}
    >
      <ProjectVisual
        slug={project.slug}
        className="bento-cover"
        loading={size === "feature" ? "eager" : "lazy"}
      />
      <div className="bento-project-copy">
        <div>
          <h3 id={`bento-${project.slug}`}>{project.title}</h3>
          <p>{project.oneLiner}</p>
        </div>
        <ArrowRight size={20} aria-hidden />
      </div>
    </Link>
  );
}

function UtilityArt({
  asset,
  title,
  description,
}: {
  asset: "stack" | "github" | "about";
  title: string;
  description: string;
}) {
  return (
    <>
      <img src={`/images/bento/${asset}.webp`} alt="" decoding="async" />
      <div className="bento-utility-copy">
        <h3 id={`bento-${asset}`}>{title}</h3>
        <p>{description}</p>
      </div>
      <ArrowUpRight size={21} className="bento-utility-arrow" aria-hidden />
    </>
  );
}

function Home() {
  return (
    <div className="bento-page min-h-screen flex flex-col">
      <a href="#work" className="skip-link">
        Skip to content
      </a>
      <main id="main" className="flex-1">
        <div className="bento-layout">
          <header className="bento-identity" aria-labelledby="hero-title">
            <div className="bento-intro panel">
              <span className="bento-mark">
                <img src="/images/brand-mark.png" width={112} height={112} alt="" />
              </span>
              <h1 id="hero-title">{site.name}</h1>
              <p className="bento-role">{site.tagline}</p>
              <p className="bento-intro-copy">
                I build AI products and the interfaces around them.
              </p>
              <PortfolioTour />
            </div>
            <nav aria-label="Primary" className="bento-rail-nav">
              <div className="bento-rail-links">
                <a href="#work">Work</a>
                <Link to="/about">About</Link>
                <Link to="/resume">Résumé</Link>
                <Link to="/contact">Contact</Link>
              </div>
              <div className="bento-rail-actions">
                <a className="icon-button" href={site.github} aria-label="GitHub">
                  <Github size={17} aria-hidden />
                </a>
                <a className="icon-button" href={site.linkedin} aria-label="LinkedIn">
                  <Linkedin size={17} aria-hidden />
                </a>
                <a className="icon-button" href={`mailto:${site.email}`} aria-label="Email">
                  <Mail size={17} aria-hidden />
                </a>
                <CommandMenu onOpen={() => undefined} />
                <ThemeToggle />
              </div>
            </nav>
          </header>
          <section id="work" className="bento-work" aria-labelledby="work-title" tabIndex={-1}>
            <h2 id="work-title" className="bento-section-title">
              Selected work
            </h2>
            <div className="bento-lead">
              {featured && <BentoProject project={featured} size="feature" />}
              <div className="bento-utilities">
                <Link
                  to="/stack"
                  className="bento-tile bento-utility"
                  aria-labelledby="bento-stack"
                >
                  <UtilityArt
                    asset="stack"
                    title="Stack"
                    description="Tools and technologies I use."
                  />
                </Link>
                <a
                  href={site.github}
                  className="bento-tile bento-utility"
                  aria-labelledby="bento-github"
                >
                  <UtilityArt
                    asset="github"
                    title="GitHub"
                    description="Code, experiments, and projects."
                  />
                </a>
                <Link
                  to="/about"
                  className="bento-tile bento-utility bento-utility--about"
                  aria-labelledby="bento-about"
                  data-portfolio-tour="about"
                >
                  <UtilityArt
                    asset="about"
                    title="About me"
                    description="My work, interests, and background."
                  />
                </Link>
              </div>
            </div>
            <div className="bento-pair" data-portfolio-tour="work">
              {showcase.map((project) => (
                <BentoProject key={project.slug} project={project} />
              ))}
            </div>
            <section className="bento-more" aria-labelledby="bento-more-title">
              <h2 id="bento-more-title" className="bento-section-title">
                More projects
              </h2>
              <div className="bento-pair">
                {moreProjects.map((project) => (
                  <BentoProject key={project.slug} project={project} size="compact" />
                ))}
              </div>
              <Link to="/projects" className="text-link bento-all-projects">
                All projects &amp; experiments <ArrowRight size={15} aria-hidden />
              </Link>
            </section>
          </section>
        </div>

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
            <div className="panel p-6 sm:p-8">
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
        <section
          className="contact-close page-shell panel"
          aria-labelledby="contact-title"
          data-portfolio-tour="contact"
        >
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
