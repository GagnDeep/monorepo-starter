# Memory & Context

## Project Constraints
- **Role:** World-class creative front-end engineer and motion designer.
- **Project:** "Stitching Solutions", a women's stitching boutique in Model Town, Patiala.
  - Specialty: Precise stitching (no alterations needed), polite service, on-time (15 days), walk-ins from Ambala/Samana.
  - Reviews: 4.9★ (51 reviews).
  - Hours: Mon-Sat 9:30AM-7PM.
  - Contact: +91 91155 54012.
  - Tone: reliable, fitting-focused, no-fuss.
- **Tech stack:** Turborepo + pnpm workspace, Next.js 16 (App Router), React 19, TypeScript strict, next-intl, shadcn/ui, Tailwind v4, Drizzle (libsql), Better-Auth, GSAP + ScrollTrigger (to be installed).
- **Execution:** Phased execution, advancing the build from where it left off, NEVER restarting/rebuilding what works, NO regression. Do not leave site broken at end of run.
- **Phase 0 Goals (Foundation):**
  - Choose one creative concept and distinctive theme (NOT generic AI gradient).
  - Full custom palette, type scale, font pairing as CSS variables in `apps/web/src/app/globals.css`. Override all shadcn tokens.
  - Install GSAP + ScrollTrigger in web.
  - Build responsive Navbar + Footer.
  - Create EVERY nav/footer route as a stub page under `apps/web/src/app` using `pnpm gen:page <route>` to ensure no 404s.

## Current Phase: Phase 0 - Foundation

## Concept & Theme
**Concept:** "The Perfect Fit" - focused on precision, negative space, structured grid, and elegant geometry reflecting the lack of required alterations.
**Palette:**
- Background: Warm eggshell / soft linen.
- Primary: Deep charcoal or tailored black.
- Secondary: Soft gold or rich earthy ochre for accents (tape measure/thread metaphor).
- Typography: Elegant serif for headings (e.g., Playfair Display or Lora) paired with a clean, geometric sans-serif (e.g., Inter or Geist).

## Next Actions
1. Edit `apps/web/src/app/globals.css` to implement the custom HSL palette and update `config/site.ts` with brand values.
2. Install GSAP in `apps/web` (`pnpm --filter web add gsap`).
3. Build a responsive Navbar (`SiteHeader`) and Footer. Add `fonts` in `layout.tsx`.
4. Create stub pages for Navbar/Footer links (`/about`, `/contact`, `/services`, `/booking`, etc.) using `pnpm gen:page`.
