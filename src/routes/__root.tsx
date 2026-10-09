import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { MotionConfig } from "motion/react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav, SiteFooter } from "../lib/components/SiteChrome";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main id="main" className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md text-center pixel-panel p-8">
          <p className="pixel-font text-xs uppercase tracking-wider text-text-soft">Error · 404</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            This page drifted out of orbit.
          </h1>
          <p className="mt-3 text-sm text-text-muted">
            The page you are looking for does not exist, was moved, or never shipped.
          </p>
          <div className="mt-6 flex justify-center">
            <Link to="/" className="btn-primary">
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="max-w-md text-center pixel-panel p-8">
        <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-text-muted">
          Something went wrong on our end. Try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-secondary">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Huzaifa Shahid — AI Product Builder" },
      {
        name: "description",
        content:
          "Useful software. Thought through. AI products and the interfaces around them, by Huzaifa Shahid.",
      },
      { name: "author", content: "Huzaifa Shahid" },
      { name: "theme-color", content: "#fafaf9" },
      { property: "og:site_name", content: "Huzaifa Shahid" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t;try{t=localStorage.getItem('theme');}catch(e){}if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}})();`,
          }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user" transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
        <Outlet />
      </MotionConfig>
    </QueryClientProvider>
  );
}
