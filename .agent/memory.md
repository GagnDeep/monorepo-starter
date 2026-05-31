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
- Phase 1: Home page development (Batch 2)
- Built 5 additional GSAP-animated sections: `process-section`, `testimonials-section`, `gallery-preview-section`, `faq-section`, and `location-section`.
- Extracted hardcoded copy into `en.json` and `es.json`, using `useTranslations` hook.
- Ensured Tailwind styling aligns with semantic tokens mapped in `globals.css` instead of undefined CSS variables.

## Verified
- `pnpm verify` passes (typecheck, lint, i18n, build).
- Frontend rendering, custom styling, Unsplash images, and GSAP ScrollTrigger timelines visually verified via Playwright screenshots (`home-process.png`, `home-testimonials.png`, etc.).

## Next Action
- Begin Phase 2: SEO pages. Flesh out the 15+ routed pages (About Us, Services, Gallery, Contact, etc.) with unique metadata, semantic headings, and detailed localized content in batches of ~4 per run.
