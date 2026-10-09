# Portfolio redesign

The subsequent [premium refinement](premium-refinement.md) adds the Shoogle registry research, community components, and updated verification record.

The portfolio now uses system typography, neutral light/dark surfaces, and a restrained blue accent. The opening Orbit illustration leads into four selected projects, with the full catalogue and experiments on `/projects`.

## Design and implementation

- Applied [Emil Kowalski's Apple design skill](https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md), saved at `skills/apple-design/SKILL.md`.
- Added the free Motion library for interruptible, critically damped filter transitions and immediate control feedback. Context7 supplied current Motion, React, and TanStack Start documentation.
- Removed the blocking boot sequence, smooth-scroll interception, and decorative WebGL effects from the active shell. Existing effect source and local performance patches remain in the repository.
- Built responsive HTML/CSS product illustrations. Every preview is labeled as an illustration; no private product media was copied.
- Added native email validation and an honest email-draft handoff. The contact form has no delivery backend.
- Kept keyboard navigation, persistent theme choice, and resume printing. Reduced motion, reduced transparency, and increased contrast have separate CSS accommodations.

## Project and copy evidence

[Project inventory](project-inventory.md) covers every sibling folder, including nested hardware work and video-production research. Eight source-backed projects appear in the catalogue. Upstream clones and repositories without a verified individual contribution are excluded from personal case studies. Development stages stay explicit; no customer results or launch claims were invented.

[Copy record](portfolio-copy.md) documents the SlopMonster editing passes and per-page lint results. All 14 rendered pages scored 5/5. The rival-family cleanse could not run because a suitable CLI/model was unavailable; this step is recorded as incomplete.

## Verification

- Production client, SSR, and Cloudflare worker build passed.
- Full TypeScript check and targeted ESLint checks passed; changed files are formatted.
- All 14 content routes returned 200 with server-rendered headings and a main landmark. An unknown project returned 404. Sitemap returned 14 absolute URLs.
- Actual browser checks covered project filters, mobile route navigation, Escape dismissal/focus return, themes, and 320/390-pixel layout widths without horizontal overflow.
- Contact checks covered invalid email, whitespace-only name, and preservation of sender details and special characters in the draft URL. Native email delivery was not tested.
- Final desktop Lighthouse accessibility snapshot scored 100 with zero audit failures. Earlier navigation audits reported best practices 100. Localhost canonical URLs cannot establish a production SEO score.

During verification, an existing corrupted installed `@types/node` declaration was restored from its exact locked package version. A legacy `TextType` effect cleanup was adjusted to return void, allowing the full type check to pass.

PDF pagination and physical-device testing remain outside these checks. Changes are local; no deployment or Git history rewrite was performed.
