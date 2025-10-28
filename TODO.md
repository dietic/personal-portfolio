# Portfolio TODOs — Recruiter/Agency Focus

Goal: Optimize this site to attract tech recruiters and position Diego as a "software developer agency" delivering real business outcomes. Tasks are grouped by priority and include concise acceptance criteria.

## P0 — High-impact improvements (do next)

- [ ] Integrate privacy-friendly analytics (Vercel Analytics)
  - Why: Understand traffic, top pages, and conversions without cookies.
  - Accept: `<Analytics />` added in `src/app/layout.tsx` (root); dashboard visible in Vercel.
  - Note: Alternatives for later: Plausible/Umami. Start with Vercel Analytics.

- [ ] Localize all remaining hardcoded strings
  - Scope: "TECH STACK" heading in `projects.component.tsx`, any leftover labels/placeholders.
  - Accept: All UI strings sourced from `src/locales/{en,es}.json`; key parity maintained.

- [ ] Strengthen project case studies (impact-focused copy)
  - Add 2–3 bullet points per project: problem → contribution → outcome (numbers when possible).
  - Accept: Each `projects.projects[]` item has outcome-driven description (e.g., "↓30% ops cost").

- [ ] SEO essentials per locale
  - Add canonical + language alternates; improve meta descriptions.
  - Accept: `src/app/layout.tsx` exposes `metadata` with `alternates.languages`, better description per locale.

- [ ] Accessibility pass (quick wins)
  - Add `rel="noopener noreferrer"` to external links; ensure alt texts are descriptive; verify focus states.
  - Accept: External links updated; project images use meaningful alt; keyboard nav works for navbar/carousel.

## P1 — Brand and conversion

- [ ] Add Services section (agency angle)
  - Cards: Frontend Engineering, Design-to-Code, Performance & A11y Audits, Frontend Architecture, Staff Augmentation.
  - Accept: New block in `components/blocks` with localized copy, brief outcomes, CTA to Contact.

- [ ] Add social proof (testimonials/logos)
  - Accept: Optional block with 2–3 testimonials or company logos; hide if none yet.

- [ ] Add “Ways to work together” CTA row
  - Options: Project-based, Part-time retainer, Hourly consult; CTA scrolls to Contact.
  - Accept: CTA buttons with anchors; localized labels.

- [ ] Improve Hero copy for agency positioning
  - Accept: Short, benefit-driven subheadline (e.g., "Ship polished web apps faster and safer"), kept in locales.

- [ ] Contact polish (no form, but clearer actions)
  - Add “Copy email” button, “Schedule intro call” link (if you have Calendly later).
  - Accept: Buttons present; still static for now.

## P2 — Technical polish and performance

- [ ] Lighthouse audit and fixes
  - Accept: Scores ≥ 90 for Performance, A11y, Best Practices, SEO on both locales (mobile + desktop).

- [ ] Bundle size sanity check
  - Add Next bundle analyzer; ensure large libs are not over-included.
  - Accept: Report exists; avoid unnecessary dynamic imports; keep icons tree-shaken.

- [ ] Image strategy review
  - Accept: All images via `next/image`; sizes set; `alt` improved; unnecessary PNGs removed or compressed.

- [ ] Add sitemap and robots
  - Accept: `/sitemap.xml` and `/robots.txt` available; locale-aware URLs included.

- [ ] Add 404 page (localized)
  - Accept: `app/[locale]/not-found.tsx` with localized copy and CTA back to Home.

## P3 — Content depth and reuse

- [ ] Per-project "Details" slideout or mini-page
  - Accept: Optional route or dialog showing screenshots, architecture notes, tech choices, and impact metrics.

- [ ] Structured data (JSON-LD)
  - Person/Organization schema with `sameAs` (GitHub/LinkedIn), `url`, `jobTitle`.
  - Accept: JSON-LD script added in `layout.tsx` per locale.

- [ ] Centralize contact values (optional)
  - Keep static values, but consider moving to locales for future format changes.
  - Accept: Either documented decision in instructions, or values moved to locales.

## Code health and DX

- [ ] Update instructions with decisions
  - Accept: `.github/instructions/personal-portfolio.instructions.md` reflects: deploy on Vercel; analytics = Vercel Analytics; contact remains static; projects stay in locales; no special a11y target.

- [ ] Pre-commit hygiene (optional)
  - Add Husky + lint-staged for `eslint --fix` and prettier.
  - Accept: Committed hooks running locally; CI remains optional.

- [ ] Remove stray assets and dead code
  - Accept: Unused images (e.g., older variants) reviewed; remove or archive if not used in locales.

## Implementation notes (concise)

- Analytics: `import { Analytics } from '@vercel/analytics/react'` and add `<Analytics />` inside `src/app/layout.tsx` `<body>`.
- i18n: Use `t.rich` for inline emphasis; keep key parity across locales.
- SEO: Provide `metadata.alternates.languages` and better `description` by locale; add canonical.
- A11y: Ensure focus styles, descriptive `alt`, and `rel` on external links.
- Services/Testimonials: Keep copy concise, benefit-driven, and localized.

---

If you want, I can immediately implement P0 items (analytics, i18n sweep for Projects heading, SEO essentials, a11y fixes) and submit a quick PR for your review.
