# Project evidence inventory

Research snapshot: 9 October 2026. Internal editorial reference for the portfolio.

Scope: every visible project folder under `G:\ONGOING PROJECTS`, including nested Hack Club work and the video-production folder. Portfolio and SlopMonster are covered by other agents. Dependency/build folders, environment files, credentials, private media, and unrelated account data were excluded. This is repository research, not a fresh runtime acceptance test of these projects.

## Editorial decisions

- Strong original project candidates: **Errby, SkillTube, TAYPR, Listing Desk**. Their remotes use the portfolio owner's GitHub account, and their source contains substantial product work. Describe the actual development stage alongside the product purpose.
- Additional original experiments: **Boundary, Orbit, PaywallLab, Trimly, Starbie**. Avoid presenting prototypes, scaffolds, or starter hardware as launched products.
- **Coachingo and Courtingo** have substantial application code but remotes under other accounts. Their presence in this workspace supports a work sample; it does not establish sole ownership, client identity, employment, or a specific personal contribution.
- **MiroFish and build-your-own-x** are upstream clones/resources. Exclude them from owned project counts and case studies unless a separately evidenced contribution is found.
- No measured business impact, user counts, revenue, school outcomes, or hardware completion was established. Marketing targets and example data are not results.
- A configured Git remote establishes a repository address, not public access. Only Errby's public GitHub page and Courtingo's public website were successfully fetched during this research. Other fetch failures leave visibility unverified.

## Errby

**Purpose:** An AI learning partner for learning through explanation. The learner teaches a curious character, works through misunderstandings, and can revisit saved practice.

**Concrete features:** Chat-first learner flow; streamed opening replies; pasted notes and bounded PDF/DOCX extraction; private saved documents; searchable conversation history; exact source excerpts; validated learning evidence; retry/cancellation handling; interactive graph visuals in the latest local commit.

**Stack:** Next.js, React, TypeScript, Tailwind, Clerk, Supabase/Postgres, OpenRouter, PDF.js, Mammoth, Zod. Node/PGlite/Playwright checks exist.

**Stage:** Development/hackathon prototype. README explicitly leaves school/pupil pilots, human lesson approval, and production acceptance open. No measured learning gains or public app deployment was established. README architecture text contains a historical contradiction about original-file persistence; use current document feature/source evidence rather than that older paragraph.

**Evidence:** `Errby/README.md`; `Errby/package.json`; `Errby/docs/SETUP_STATUS.md`; `Errby/src/app/learn/chat-entry.tsx`; `Errby/src/app/learn/chat-visual.tsx`; git `6e60f9f` (interactive graph visuals), `493c629` (documents/history).

**Link:** [Public repository](https://github.com/Huzaifa-Shahid-6ll/Errby), successfully fetched as a public GitHub page. Do not imply all local changes are on the public branch.

**Public-copy direction:** “A learning partner you teach. Explain an idea, work through its questions, and return to the sources behind your practice.”

## SkillTube

**Purpose:** Converts English YouTube tutorials or pasted transcripts into private, editable, portable agent-skill files.

**Concrete features:** Source preflight and credit quote; caption/transcript acquisition; optional selected-frame analysis; durable generation worker with explicit stages and recovery; manual skill/reference editing; section regeneration; ZIP export containing `SKILL.md`; signed purchase webhooks that grant credits; manual guidance for placing exported files in an agent project.

**Stack:** Next.js, React, TypeScript, Clerk, Drizzle/Postgres, pg-boss, OpenRouter, yt-dlp, FFmpeg, Docker; Lemon Squeezy checkout/webhook integration.

**Stage:** Active implementation with private-beta operations/release gates. Local ZIP discovery in Codex was recorded, but generated-skill task-use acceptance and Claude Code runtime verification remain open. Export is not automatic installation or proof of useful execution.

**Evidence:** `skilltube/README.md`; `skilltube/docs/PRD.md`; `skilltube/docs/OPERATIONS.md`; `skilltube/docs/AGENT_HANDOFF_VERIFICATION.md`; `skilltube/src/worker.ts`; `skilltube/package.json`; git `562e3ba` (console redesign), `89f1368` (YouTube reliability merge).

**Remote:** `https://github.com/Huzaifa-Shahid-6ll/skilltube`. Public visibility was not verified by the web fetch. No public app URL established.

**Public-copy direction:** “Turn a tutorial into an agent skill. Review the source, edit the instructions, and take the files into your next project.”

## TAYPR

**Purpose:** Helps adults choose a realistic haircut and carry clear instructions to a barber.

**Concrete features:** Guided multi-view photo capture; reference images/text goal and lifestyle input; three recommendation roles; feasibility and uncertainty explanations; maintenance/growth guidance; illustrative previews; comparison; Barber Card; saved sessions; optional reminder and follow-up; bounded sandbox commerce flows.

**Stack:** Expo, React Native, TypeScript, Expo Router, Convex, Clerk, RevenueCat, Cloudflare R2-compatible storage, PostHog.

**Stage:** Private Android-first development. README records repaired emulator smoke checks, while physical Android release testing, legal/vendor admission, and full visual-AI/paid-pipeline approval remain open. iOS release certification is deferred. Do not claim store availability, accurate facial inference, or guaranteed haircut results.

**Evidence:** `taypr/README.md`; `taypr/docs/PRODUCT_BRIEF.md`; `taypr/docs/ARCHITECTURE.md`; `taypr/convex/results-contract.ts`; `taypr/convex/previews.ts`; `taypr/package.json`; git `959d70c` (previews/results/barber cards), `13a3c8a` (lifecycle checks).

**Remote:** `https://github.com/Huzaifa-Shahid-6ll/taypr`; README says repository stays private. Do not expose a repository/source CTA without verifying visibility.

**Public-copy direction:** “Choose a cut you can explain. Compare realistic options and take a clear Barber Card to your appointment.”

## Listing Desk / bol uploading workflow

**Folder:** `bol-build-handoff`; package name `listing-desk`.

**Purpose:** A private workflow for preparing Amazon.nl product families as Dutch marketplace listings for the Netherlands and Belgium.

**Concrete features:** Product-family workspace and filters; URL/CSV/XLSX import flows with mapping/conflict review; evidence-based identity and primary-variant choice; draft editing and independent NL/BE overrides; encrypted setup credentials; capped generation accounting; durable media jobs and owner review; image/video preparation; publication previews, dry runs, and reconciliation.

**Stack:** Next.js/React/TypeScript web app; Node worker; PostgreSQL; workspace domain packages; FFmpeg/FFprobe; configured AI/media provider adapters.

**Stage:** Substantial local implementation. README explicitly says real extraction adapter acceptance, production storage/provider verification, and live marketplace publication remain gated. It is not proof of an operating seller business or automated production publishing.

**Evidence:** `bol-build-handoff/README.md`; `bol-build-handoff/package.json`; `bol-build-handoff/docs/RELEASE_VERIFICATION.md`; `bol-build-handoff/apps/web/lib/products.ts`; `bol-build-handoff/packages/publishing/index.mjs`; git `bbe5709` (listing management application).

**Remote:** `https://github.com/Huzaifa-Shahid-6ll/bol-uploading-os`; public visibility not verified. No public app URL established. Keep operational details and private product media out of public copy/screenshots.

**Public-copy direction:** “From product data to a reviewed listing. A workspace for Dutch copy, media, and separate NL/BE publication previews.”

## Coachingo

**Folder:** `coachsync`.

**Purpose:** Coaching discovery, lesson booking, and coach operations.

**Concrete features:** Coach discovery; athlete/parent booking; messaging; schedules; student/attendance/program management; progress views; payments/reporting; calendar integrations; exports. Source includes a scheduling engine with date/time-zone handling and booking capacity/conflict inputs.

**Stack:** Next.js 15, React 19, TypeScript, Tailwind, Supabase, Stripe, AI SDK, Google integrations.

**Stage:** Substantial application with deployment configuration, CI/self-check commands, and many domain modules. Fresh full runtime acceptance was not performed. README explicitly retains a real-device verification gap.

**Evidence:** `coachsync/README.md`; `coachsync/package.json`; `coachsync/src/features/scheduling/engine.ts`; `coachsync/src/features/export/engine.ts`; git `75c8822` (public journey QA fixes).

**Links/attribution:** README configures `https://coachingo.com`; web fetch did not confirm availability. Remote is `https://github.com/acquisitionaztech-bit/coachsync`, not the owner's personal account. Use neutral contribution wording; do not claim founder/sole developer, name a client, or invent the role.

## Courtingo

**Folder:** `courtbookingdashboard`.

**Purpose:** Court booking and sports-club management. Current product-marketing context calls it Courtingo; avoid inventing a different brand.

**Concrete features:** Court/time reservations; tenant-scoped booking data; coach assignments; memberships; real-time booking management screens; utilization/churn analytics screens; Stripe and SMS integrations; public marketing routes and prerender tooling.

**Stack:** React 18, Vite, React Router, Redux Toolkit, Tailwind, Supabase, Stripe, Twilio, Recharts/D3.

**Stage:** Substantial application and public marketing site. Marketing documents contain aspirational targets and unsourced time-saving promises; exclude these from portfolio results. No new end-to-end booking/payment test was performed.

**Evidence:** `courtbookingdashboard/docs/PRODUCT_MARKETING_CONTEXT.md`; `courtbookingdashboard/UBIQUITOUS_LANGUAGE.md`; `courtbookingdashboard/src/services/bookingService.js`; `courtbookingdashboard/package.json`; git `8412ed2` (operations-cockpit homepage).

**Links/attribution:** [Public website](https://www.courtingo.com/) successfully resolved with the Courtingo title. Remote is `https://github.com/reyanischilling/courtbookingdashboard`. Neutral contribution wording only until individual role is confirmed.

## Boundary

**Purpose:** Demonstrates guarded developer-agent tools when repository text contains forged maintainer instructions.

**Concrete features:** Immutable task policy; synthetic virtual repository; permission/resource preflight; guarded read/check/propose tool path; exact stored patch review; single-use decision binding; idempotency/cancellation/reset; provider orchestration; local API endpoints and SSE event streams.

**Stack:** Next.js, React, TypeScript, AI SDK, OpenRouter provider, Zod, Node test runner.

**Stage:** Backend stages 0–5 exist; workspace UI is explicitly future Stage 6. Controlled synthetic fixtures only, loopback deployment only, ephemeral single-process sessions. No real host filesystem/shell tool or live-provider smoke established.

**Evidence:** `boundary/README.md`; `boundary/docs/boundary/STATUS.md`; `boundary/src/boundary/executor.ts`; `boundary/package.json`.

**Links/attribution:** No `.git` directory or evidenced public URL found. Treat as local experiment. Safe copy: “Testing what an agent may read, propose, and change—before a patch reaches the repository.”

## Orbit

**Purpose:** Personal AI operating-system experiment with persistent memory, tools, scheduling, and user-supplied model keys.

**Implemented foundations:** Memory retrieval/compaction primitives; agent/executor and proxy transport; BYOK encryption/release; dashboard/API contract; Telegram/Discord/Slack adapter foundations; MCP/tool permission primitives; scheduling skeleton; Docker and Tauri shell configuration.

**Stack:** TypeScript pnpm/Turborepo workspace; Next.js; Hono; Mastra; Inngest; Supabase/Postgres; Turso/libSQL; Redis; LiteLLM; Tauri.

**Stage:** README says Layer 1 private beta, not production-ready. Hard budget caps and audit-chain writer are not implemented; many services rely on injection or local fallbacks. Do not promote aspirational persistent autonomous behavior as fully integrated.

**Evidence:** `orbit/README.md` status matrix; `orbit/packages/memory/src/retrieval.ts`; `orbit/packages/agent/src/agent.ts`; `orbit/package.json`; git `7814692` (implementation update).

**Remote:** `https://github.com/Huzaifa-Shahid-6ll/orbit`; public visibility unverified. An intended MIT license is mentioned, but README reports no root license file; avoid an unqualified open-source/license claim.

## PaywallLab

**Purpose:** Planned monetization-evidence and experiment workspace for subscription-app teams.

**Implemented foundations:** Public landing release candidate; authentication-entry/session work; Hono health/OpenAPI and safe request logging; persisted idempotency; private-storage session foundation; waitlist; diagnostic MCP shell; synthetic workflow scaffolding; local database/identity foundations.

**Stack:** Next.js, Hono, TypeScript, pnpm/Turborepo, Supabase/Postgres, Kysely, Trigger.dev; Python statistics package foundation.

**Stage:** README explicitly says early scaffold, incomplete product workflows/integrations/statistics. Latest commits add session lifecycle persistence/revocation, but this does not establish the full SaaS workflow. Describe it as “in development” or an architecture experiment.

**Evidence:** `Paywall-lab/README.md`; `Paywall-lab/apps/api/src/app.ts`; `Paywall-lab/apps/api/src/idempotency.ts`; `Paywall-lab/apps/web/src/SessionLifecycle.tsx`; git `e97582f` (session wiring), `0411996` (persistence/revocation).

**Remote:** `https://github.com/Huzaifa-Shahid-6ll/Paywall-lab`; no verified public app URL.

## Trimly

**Purpose:** Guided haircut decision and barber communication prototype.

**Concrete features:** Photo input; comparison/results; plain-language and barber instruction modes; barber-card sharing; haircut dates, reminders, and post-cut feedback; credits/entitlements and RevenueCat policy helpers.

**Stack:** Expo/React Native, TypeScript, NativeWind, Convex, Clerk, RevenueCat, PostHog.

**Stage:** Generic starter README is superseded for product understanding by `docs/product`. Launch-readiness report explicitly retains store purchase, webhook, device, and legal/privacy gaps. Do not claim launch readiness. Similarity to TAYPR suggests related exploration, but a rename/successor relationship was not established.

**Evidence:** `trimly/docs/product/trimly-prd.md`; `trimly/docs/qa/final-launch-readiness.md`; `trimly/convex/barberCards.ts`; `trimly/app/post-cut-feedback.tsx`; `trimly/package.json`.

**Remote:** `https://github.com/Huzaifa-Shahid-6ll/trimly`; no verified public app/store URL.

## Hack Club: Starbie and Terra

**Starbie:** A new KiCad learning project under `Hack Club/Half Life/Starbie`. README says the goal is learning PCB design and it has just started. The Half Life mirrored journal describes a motion-controlled desktop digital pet, but records no entries. KiCad schematic/project/PCB files and library welcome material exist; no fabricated board or working device was established.

**Evidence:** `Hack Club/Half Life/Starbie/README.md`; `JOURNAL.md`; `Starbie/Starbie.kicad_sch`; git `64534d6` (KiCad welcome pack). Remote: `https://github.com/Huzaifa-Shahid-6ll/Starbie`. Best treated as “learning KiCad” in an experiments list, not completed hardware.

**Terra:** Empty directory at inspection. No portfolio project can be described from current evidence.

## Hidden Economics of Daily Life

**Folder:** `yt channel`. This is editorial/video-production work, not an application repository.

**Concrete work:** Channel strategy, idea/competitor registers, evidence-backed episode research, scripts, narration/caption alignment, timed scene manifests, thumbnail options, and CapCut production packages. Two episode folders concern free returns and free-shipping thresholds.

**Stage:** Free-returns episode metadata says `capcut_ready`; free-shipping episode says `partial_blocked` awaiting narration-dependent production work. Neither establishes public publication or audience results.

**Evidence:** `yt channel/channel_data/channel_strategy.json`; each episode's `episode.json`. Private media was not opened or copied. No public channel URL, upload URL, subscriber count, or verified publication was found. If included, describe research/storytelling practice without a “watch” CTA.

## Excluded resources and supporting storage

| Folder | Evidence | Treatment |
| --- | --- | --- |
| `MiroFish` | README/upstream remote `https://github.com/666ghj/MiroFish`; upstream commit messages | Third-party multi-agent simulation project; exclude from owned work. |
| `build-your-own-x` | README/upstream remote `https://github.com/codecrafters-io/build-your-own-x` | Third-party learning-guide compilation; exclude from owned work. |
| `listing-desk-private-media` | Folder name and listing-workflow documentation | Supporting private storage, not a separate product; content excluded. |
| `.pi` | Agent/tool working directory | Excluded tooling, not portfolio work. |
| `SlopMonster` | Assigned to copy-research agent | Copywriting reference/resource; do not claim its authorship. |
| `portfolio` | Current implementation workspace | Reviewed/changed by main agent. |

## Publication safeguards

Keep screenshots synthetic or scrubbed. Do not copy sibling `.env` files, credentials, private uploads, logs, account names, provider costs, internal approval documents, or private media into `public/`. Link only to verified accessible destinations. Prefer a short prototype/development label to unsupported claims that a product is live. Code presence shows implementation, not customer usage, financial impact, accuracy, or independent release certification.
