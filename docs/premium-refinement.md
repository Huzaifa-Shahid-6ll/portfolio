# Portfolio refinement — 9 October 2026

The direction remains a quiet product portfolio: generous spacing, system typography, neutral surfaces, a restrained blue accent, and motion attached to an interaction.

## What changed

- Search projects and pages from the navigation or Cmd/Ctrl+K. The existing shadcn Command and Dialog provide grouped results, keyboard selection, focus trapping, and focus return.
- Explore the Orbit, SkillTube, and TAYPR workflows on the homepage. shadcn Tabs supply the keyboard and panel relationships; Motion Primitives supplies a short content transition. The output cards are explicitly labeled workflow illustrations.
- Read case studies with on-page anchors, an explicit development-stage summary, and expandable build notes. Main problem and approach content stays visible. Animate UI provides the Radix accordion primitive.
- Project filters use the existing shadcn ToggleGroup while retaining the shared spring selection indicator.
- Darkened faint text in the Errby, TAYPR, and PaywallLab illustrations.

The local Apple and shadcn skills informed the implementation. The composition and web interface skills guided the component boundaries and accessibility review. SlopMonster was reused for copy checks; the previously documented unavailable rival-family cleanse remains unavailable.

## Libraries and provenance

The [complete Shoogle catalogue](shadcn-library-directory.md) records 434 current registry names and homepages, with installation templates in the companion JSON. Directory inclusion does not establish a free license or compatibility.

Actual integrations use shadcn/ui, Motion Primitives, and Animate UI. The shadcn CLI inspected registry source and previewed changes before installation. Existing controls were preserved. Animate UI's umbrella Radix import was adapted to the scoped dependency already installed in this repository. No new runtime dependency was needed for this refinement.

Motion Primitives uses MIT. Animate UI uses MIT with a Commons Clause condition; use within this website is permitted under its stated application allowance. Its original components cannot be sold or redistributed as a component product. Full notices are retained in [third-party-ui-notices.md](third-party-ui-notices.md).

A public copy at `public/third-party-ui-notices.txt` accompanies the deployed assets.

## Verification

- Production client, SSR, and Cloudflare worker builds passed.
- TypeScript, targeted ESLint, formatting, and whitespace checks passed.
- `node scripts/check-ui.mjs` checks exact accordion value matching, multiple selection, visible initial server content, and semantic headings.
- All 14 content routes returned 200 with one server-rendered H1. The missing-project route returned 404 and the sitemap contained 14 absolute URLs.
- SlopMonster scored 5/5 for main content extracted from each server-rendered page. The verified project-count exception applies only to the homepage/catalogue. Alternate walkthrough panels use the same editorial checks; they are not included in this server-rendered snapshot.
- Browser checks covered walkthrough tabs and arrow keys, filter counts and focus movement, case-study anchors, accordion keyboard interaction, next-project navigation, and 320/390-pixel layouts without horizontal overflow.
- Command-menu checks covered both keyboard shortcuts, grouped results, search aliases, empty state, navigation, Escape, focus return/trapping, and mobile fit.
- Final hydrated Lighthouse snapshots scored 100 for accessibility on the desktop homepage and 390-pixel mobile catalogue, with zero failed audits. These are snapshots, not a complete site or performance certification.
- Reduced-motion handling was checked in source. The MCP browser could not emulate that preference; physical preference switching was not tested.

Visual records: [desktop walkthrough](premium-walkthrough.png) and [case-study reader](premium-case-study.png).

Parallel checks exhausted the host's paging capacity. After stopping the preview server and limiting worker concurrency, serial build and type checks completed successfully. No machine settings were changed.

The registry installer updated unrelated Radix packages while resolving its dependencies. The original lockfile was retained and `npm ci --ignore-scripts` restored its exact dependency set. TypeScript, lint, SSR assertions, and the production build passed again against those locked versions.

After restoration, the mobile catalogue filter, command search, Escape, and focus return passed again. The hydrated mobile Lighthouse snapshot still scored 100 for accessibility with zero failures.

The production build still reports a shared JavaScript chunk above its warning threshold (about 571 kB before gzip). Physical-device behavior and PDF pagination were not tested. At the initial refinement stage, these were local commits; no deployment or push had been performed.

## Generated artwork, background, and typography

The project covers now use eight images produced with the built-in image generation tool. Each subject follows its project's purpose; shared studio lighting and materials keep the collection consistent. They are labeled "Concept artwork" rather than presented as product screenshots. The generated transparent geometric mark replaces the header monogram and supplies the favicon. Full prompts and asset paths are recorded in [generated-artwork.json](generated-artwork.json).

Covers retain their original dimensions and are encoded as WebP (about 70–167 kB each). Cards load lazily; the homepage and case-study hero images load eagerly. No image-processing dependency was added to the application.

The hero uses Magic UI's static [Grid Pattern](https://magicui.design/docs/components/grid-pattern), found through [Shoogle](https://shoogle.dev/directory). It fades behind the heading, follows the theme, ignores pointer input, and is hidden in high-contrast modes. It has no animation or additional runtime dependencies. Its MIT notice is retained with the other component notices.

Typography pairs [Manrope](https://fonts.google.com/specimen/Manrope) headings with [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) body text and controls. Latin variable WOFF2 files are served locally with swap and preload, totaling about 54 kB. Missing glyphs fall back to the system stack. Original SIL Open Font License notices accompany both files in `public/fonts/`. Font sources: Google's Fonts CSS service and the [Manrope](https://github.com/google/fonts/tree/main/ofl/manrope) / [Source Sans 3](https://github.com/google/fonts/tree/main/ofl/sourcesans3) source directories.

Final verification passed: production build, TypeScript, targeted ESLint, existing accordion SSR assertions, and whitespace checks. Browser review covered the homepage, catalogue, and SkillTube case at desktop and 390 px, loaded font faces, all eight covers, the logo, and overflow. Dark mode was checked and restored. The hero grid has no animation, is hidden from accessibility, and ignores pointer events. The emitted production assets include all font and image files. The dependency manifest and lockfile remain unchanged. [Catalogue preview](generated-artwork-preview.png).
