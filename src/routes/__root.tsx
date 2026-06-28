import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState, type ReactNode, type RefObject } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav, SiteFooter } from "../lib/components/SiteChrome";
import { MotionProvider } from "../lib/anim/MotionProvider";
import { LenisProvider } from "../lib/anim/LenisProvider";
import { BootLoader } from "../lib/components/BootLoader";

const PixelTrail = lazy(() => import("../lib/components/PixelTrail"));

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1 flex items-center justify-center px-4">
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
          "I build AI-native products, AI agents, SaaS systems, and mobile/web apps that turn messy workflows into polished software.",
      },
      { name: "author", content: "Huzaifa Shahid" },
      { name: "theme-color", content: "#176D33" },
      { property: "og:site_name", content: "Huzaifa Shahid" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&family=Press+Start+2P&family=VT323&family=Silkscreen:wght@400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
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
  const pixelTrailSourceRef = useRef<HTMLDivElement>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <LenisProvider>
        <div ref={pixelTrailSourceRef} className="relative min-h-screen">
          <MotionProvider />
          <BootLoader />
          <GlobalPixelTrail eventSource={pixelTrailSourceRef as RefObject<HTMLElement>} />
          <Outlet />
        </div>
      </LenisProvider>
    </QueryClientProvider>
  );
}

function GlobalPixelTrail({ eventSource }: { eventSource: RefObject<HTMLElement> }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 mix-blend-difference">
      <Suspense fallback={null}>
        <PixelTrail
          gridSize={50}
          trailSize={0.08}
          maxAge={250}
          interpolate={5}
          color="#ffffff"
          gooeyFilter={{ id: "site-pixel-trail-goo", strength: 2 }}
          className="h-full w-full"
          canvasProps={{
            eventSource,
            eventPrefix: "client",
          }}
        />
      </Suspense>
    </div>
  );
}
