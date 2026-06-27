import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Huzaifa Shahid" },
      { name: "description", content: "Let's talk. Open to AI agents, SaaS, mobile, and product work." },
      { property: "og:title", content: "Contact — Huzaifa Shahid" },
      { property: "og:description", content: "Open to AI agents, SaaS, mobile, and product work." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    if (!name || !email) {
      setStatus("error");
      return;
    }
    // No backend wired yet — open mailto as a graceful fallback.
    const body =
      `Building: ${data.get("building")}\n\n` +
      `Need help with: ${data.get("help")}\n\n— ${name}`;
    window.location.href = `mailto:hello@huzaifashahid.com?subject=${encodeURIComponent(
      `Portfolio contact from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("success");
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SiteNav />
      <main id="main" className="flex-1">
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-4 md:px-6 py-16 grid gap-10 md:grid-cols-2">
            <div>
              <p className="pixel-font text-xs uppercase tracking-[0.18em] text-accent">Contact</p>
              <h1 className="mt-3 text-5xl font-semibold tracking-tight">Let's talk.</h1>
              <p className="mt-5 text-lg text-text-muted leading-relaxed">
                I'm open to conversations around AI agents, SaaS products, automation workflows,
                mobile apps, and product-focused development.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {[
                  "AI agent workflow work",
                  "SaaS product builds",
                  "Mobile app development",
                  "Frontend / product UX work",
                  "Technical collaboration",
                  "Product idea exploration",
                ].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent mono-font" aria-hidden>▸</span>
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pixel-panel p-5 space-y-2 text-sm">
                <Row label="Email" href="mailto:hello@huzaifashahid.com" value="hello@huzaifashahid.com" />
                <Row label="GitHub" href="https://github.com/huzaifashahid" value="@huzaifashahid" />
                <Row label="LinkedIn" href="https://www.linkedin.com/in/huzaifashahid" value="huzaifashahid" />
                <Row label="X / Twitter" href="https://x.com/huzaifashahid" value="@huzaifashahid" />
              </div>
            </div>

            <form onSubmit={onSubmit} className="pixel-panel p-6 space-y-5" noValidate>
              <Field id="name" label="Name" required />
              <Field id="email" label="Email" type="email" required />
              <Field id="building" label="What are you building?" textarea rows={3} />
              <Field id="help" label="What do you need help with?" textarea rows={4} />
              <button type="submit" className="btn-primary w-full">Send message</button>
              {status === "success" && (
                <p role="status" className="text-sm text-success">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="text-sm" style={{ color: "#B91C1C" }}>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Row({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div className="flex items-center justify-between gap-3 py-1.5 border-b border-border last:border-0">
      <span className="pixel-font text-[0.7rem] uppercase tracking-wider text-text-soft">{label}</span>
      <a href={href} className="text-accent hover:text-accent-hover">{value}</a>
    </div>
  );
}

function Field({
  id, label, type = "text", required, textarea, rows,
}: {
  id: string; label: string; type?: string; required?: boolean; textarea?: boolean; rows?: number;
}) {
  const cls =
    "w-full bg-surface border-2 border-border-strong px-3 py-2 text-sm focus:outline-none focus:border-accent";
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5">
        {label} {required && <span className="text-accent" aria-hidden>*</span>}
      </label>
      {textarea ? (
        <textarea id={id} name={id} rows={rows} required={required} className={cls} />
      ) : (
        <input id={id} name={id} type={type} required={required} className={cls} />
      )}
    </div>
  );
}
