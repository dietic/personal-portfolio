---
applyTo: '**'
---

# Personal Portfolio – Development Instructions

These instructions are tailored to this repository and should be followed when making changes.

## Project Snapshot

- Project: personal-portfolio (Next.js 15 App Router)
- Domain: https://diegohq.dev
- Deployment: Vercel
- Locales: en, es (next-intl)
- Analytics: Vercel Analytics (privacy-friendly, no cookie banners required)
- Contact: Static (no form)
- Projects source: `src/locales/{en,es}.json` (no CMS planned)
- Accessibility target: General best practices; no specific WCAG target committed

## Architecture Overview

Stack (from package.json):

- Next.js 15.5 (App Router, Turbopack) + React 19
- Tailwind CSS v4 + tailwindcss-animate + tw-animate-css
- next-intl for i18n, next-themes for dark/light
- CRUCIAL: shadcn/ui (Radix UI primitives) via components in `src/components/ui/*`
- Framer Motion for micro-animations
- Embla Carousel for project screenshots

Key directories:

- `src/app/[locale]/` – localized app shell and homepage
- `src/components/blocks/*` – page sections: hero, aboutMe, techStack, projects, contactMe
- `src/components/shared/navbar` – top navigation with theme + language toggle
- `src/components/ui/*` – shadcn/ui-based, tokenized components (button, card, tabs, dialog, etc.)
- `src/locales/en.json`, `src/locales/es.json` – translation dictionaries
- `public/*` – images used by the portfolio (project screenshots, logos, avatar)

## Modules & UX Contract

Simplicity, speed, premium feel. Each section must clearly answer: “What is this and what can I do here?”

1. Navbar

- Displays logo, theme toggle (☀️/🌙), and language toggle (EN/ES)
- Anchors must match section IDs: `#home`, `#about`, `#skills`, `#projects`, `#contact`
- Active link highlights on scroll; mobile menu animates in/out
- No console logging in committed code

2. Hero (Home)

- Greeting, name, role, localized description using `t.rich` for highlighted technologies
- Tech badges row (React, Next.js, Angular, TypeScript, Tailwind, PostgreSQL)
- Primary CTA: scroll to Projects; Secondary CTA: scroll to Contact
- Right-side profile image with subtle animated accent layer

3. About Me

- Localized title with rich highlighting, subtitle, headline, and story paragraphs
- “Current Project Stack” sub-section is optional; keep copy concise and benefit-driven

4. Tech Stack

- Four categories (Frontend, Styling, Backend, Tools)
- Each skill shows level badge (basic/intermediate/advanced), experience chip, and short description
- Animations should be subtle and performant (Framer Motion variants already set)
- Levels and copy must come from locales (no hardcoded strings)

5. Projects

- Source of truth: `locales/{en,es}.json → projects.projects[]`
- Shape: `{ id, name, description, technologies[], imgs[], url }`
- Carousel per project over `public/{img}.png`; clicking image opens `url` in a new tab
- Subtitle must be localized via `projects.subtitle` (avoid hardcoded text)

6. Contact

- Availability card (animated dot), plus three contact rows (Email, Phone, Location)
- Labels localized via `contact.*` and `common.*`; values (email/phone/country) can remain literal
- Consider moving values to locales later if format varies by locale

## i18n Rules (next-intl)

- All user-facing strings must come from `src/locales/*` (use `useTranslations()`)
- Use `t.rich` for inline styling (e.g., colored spans); never concatenate raw HTML
- Keep key parity between `en.json` and `es.json` (no orphan keys)
- Dates/numbers: keep human-friendly plain text (no additional heavy libs)

## Styling, Tokens, and A11y

- CRUCIAL: Use shadcn/ui primitives and the components under `src/components/ui/*` as the base for all UI.
- Use the CSS variables defined in `src/app/globals.css` (e.g., `--primary`, `--title`) mapped via Tailwind theme tokens.
- Prefer the `cn()` helper for class merging; avoid ad-hoc class concatenation.
- No hardcoded hex colors; use semantic color tokens (primary/secondary/title).
- Ensure contrast ratios are acceptable in both light and dark themes.
- Images must include descriptive `alt` text; interactive elements must be keyboard accessible.

## Monitoring & Analytics

- Use Vercel Analytics.
- Add `<Analytics />` in `src/app/layout.tsx` inside `<body>`.
- Verify analytics in the Vercel dashboard after deploy.

## Content Management

- Translations: Update both `en.json` and `es.json` for any text changes
- Projects: Add images to `/public` and reference by basename (no extension) in the `imgs` array
- Logos/Favicons: Located in `/public`; update `src/app/layout.tsx` `<link rel="icon" />` if favicon changes
- Metadata/SEO: Configure in `src/app/layout.tsx` (`export const metadata`); add OpenGraph images later when available

## Performance

- Use `next/image` for all images (already in place)
- Keep animations lightweight; avoid layout thrash (use transforms/opacity)
- Turbopack is enabled for dev/build; avoid unnecessary large dependencies

## Commands

- `pnpm dev` – start dev server (Turbopack)
- `pnpm build` – production build
- `pnpm start` – run production server
- `pnpm lint` – run ESLint (strict)

## Code Standards

- Components: PascalCase; files/folders: kebab-case under feature directories
- TypeScript: no `any`; keep props typed (see interfaces under block components)
- CRUCIAL: Prefer shadcn/ui primitives; extend variants with `class-variance-authority` when needed.
- No `console.log` in committed code; prefer minimal, purposeful logging only during local dev
- Keep sections responsive from 360px and up; test mobile navbar and project carousel

## Quality Gates (pre-commit)

1. Lint passes: `pnpm lint`
2. Build compiles: `pnpm build`
3. No unused imports, TODOs, or stray logs
4. English and Spanish locales updated together

## How to Add a New Project (Checklist)

- Add screenshots to `/public` (PNG); keep names short (e.g., `my-app-1.png`)
- In `src/locales/en.json` and `es.json`, append a new object to `projects.projects[]`
- Include: `id`, `name`, `description`, `technologies` (lowercase tokens), `imgs` (basenames), `url`
- Verify in the UI: images load, carousel navigates, badges render, link opens in a new tab

## Decisions & Defaults (confirmed)

- Deployment: Vercel
- Analytics: Vercel Analytics (privacy-friendly)
- Contact: Static contact info (no form)
- SEO/Social: Improve SEO later; no social preview image yet
- Projects data source: Locales JSON (no CMS planned)
- Accessibility: General best practices, no formal WCAG target specified

## Known Gaps To Fix Next

- Integrate Vercel Analytics in `layout.tsx` (`<Analytics />`).
- Improve SEO metadata: canonical URL and `alternates.languages` for locales.
- Add `sitemap.xml` and `robots.txt` (locale-aware if needed).
- A11y polish: ensure external links use `rel="noopener noreferrer"`; review alt texts and focus states.
- Localize any remaining hardcoded strings (e.g., the "TECH STACK" label in Projects).

## Golden Rules

- CRUCIAL: Use shadcn/ui components and design tokens consistently.
- CRUCIAL: Keep it simple, fast, and responsive.
- CRUCIAL: Localize every user-facing string.
- CRUCIAL: Reuse UI primitives and design tokens; no inline hex colors.
- CRUCIAL: Avoid regressions: run lint/build before asking for a review.
