import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";
import { site } from "@/lib/content/projects";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Huzaifa Shahid" },
      {
        name: "description",
        content: "Talk to Huzaifa Shahid about a product or a workflow you want to build.",
      },
      { property: "og:title", content: "Contact — Huzaifa Shahid" },
      { property: "og:description", content: "Tell me what you're working on." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [draftOpened, setDraftOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const body = `From: ${name} <${email}>\n\nWhat I'm building:\n${String(data.get("building") ?? "").trim()}\n\nWhat I need help with:\n${String(data.get("help") ?? "").trim()}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    setDraftOpened(true);
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SiteNav />
      <main id="main" className="flex-1">
        <div className="page-shell grid gap-14 py-20 md:grid-cols-2 md:gap-20 md:py-28">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="page-heading mt-5">
              Let's make
              <br />
              something useful.
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-text-muted">
              Tell me what you're working on and where you're stuck. I'm open to product builds and
              technical collaboration.
            </p>
            <a href={`mailto:${site.email}`} className="text-link mt-8 inline-flex break-all">
              {site.email} <span aria-hidden="true">↗</span>
            </a>
            <div className="mt-12 border-t border-border pt-7">
              <p className="eyebrow">Elsewhere</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <a href={site.github} target="_blank" rel="noreferrer" className="text-link">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-link">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
                <a href={site.twitter} target="_blank" rel="noreferrer" className="text-link">
                  X <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="panel space-y-6 p-6 md:p-9">
            <h2 className="text-2xl font-semibold tracking-tight">Start a conversation.</h2>
            <p id="email-draft-help" className="text-sm leading-relaxed text-text-muted">
              This opens a draft in your email app. Review it there, then send.
            </p>
            <Field id="name" label="Your name" autoComplete="name" required />
            <Field id="email" label="Email address" type="email" autoComplete="email" required />
            <Field id="building" label="What are you building?" textarea rows={3} />
            <Field id="help" label="What would you like help with?" textarea rows={4} />
            <button
              type="submit"
              className="btn-primary w-full"
              aria-describedby="email-draft-help"
            >
              Open email draft <span aria-hidden="true">↗</span>
            </button>
            {draftOpened && (
              <p role="status" className="text-sm leading-relaxed text-text-muted">
                Your email app should open with a draft. If it doesn't, email{" "}
                <a className="text-link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>{" "}
                directly.
              </p>
            )}
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  textarea,
  rows,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  autoComplete?: string;
}) {
  const className =
    "mt-2 block w-full rounded-xl border border-border bg-bg px-4 py-3 text-base text-text transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          required={required}
          className={`${className} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          autoComplete={autoComplete}
          pattern={id === "name" ? ".*\\S.*" : undefined}
          className={className}
        />
      )}
    </div>
  );
}
