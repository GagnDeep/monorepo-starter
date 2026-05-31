# Memory

## Completed
- Phase 0: Foundation
- Defined custom palette (Cream, Deep Charcoal, Saffron, WhatsApp Green) and typography (Inter, Playfair Display) in `globals.css`.
- Updated `[locale]/layout.tsx` to include fonts and Footer.
- Built a responsive Navbar (`site-header.tsx`) with GSAP motion and WhatsApp CTA.
- Built a Footer (`site-footer.tsx`) with real (stubbed) links.
- Scaffolded all missing pages (`/services`, `/gallery`, `/privacy`, `/terms`) to ensure no 404s.
- Updated `messages/en.json` and `messages/es.json` with new keys.
- Phase 1: Home page development (Batch 1)
- Built 4 GSAP-animated sections in `apps/web/app/page.tsx` (`hero-section`, `specialties-section`, `about-section`, `cta-section`).
- Configured `next.config.ts` to whitelist `images.unsplash.com`.
- Visually verified component layout, Unsplash image rendering, and GSAP scroll animations via Playwright screenshots.

## Verified
- `pnpm verify` passes (typecheck, lint, i18n, build).
- E2E tests pass.
- Frontend rendering and GSAP scroll triggers visually verified via Playwright screenshots (`home-specialties.png`, `home-about.png`, `home-cta.png`).

## Next Action
- Begin Phase 1: Home page development (Batch 2). Continue building the remaining GSAP scroll animation sections (e.g. Testimonials, Process, Fast Deadline highlights) for the Home page.
