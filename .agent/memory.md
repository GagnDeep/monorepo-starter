# Memory

## Chosen Design Tokens & Art Direction
- **Concept**: "Global Threads, Custom Elegance" - A sophisticated blend of traditional Indian vibrancy (deep magenta, wine, rich gold) and modern, clean international editorial layouts.
- **Color Palette**: Deep Wine/Magenta as primary, warm sand/off-white background for light mode, deep charcoal/dark wine for dark mode.
- **Typography**: Playfair Display (headings for elegance) + Inter or Manrope (sans-serif for readable UI/body).

## Completed Sections/Pages
- Phase 0: Initializing foundation.
  - Custom palette and type scale injected into `apps/web/src/app/globals.css`.
  - Next.js fonts `Playfair Display` and `Manrope` integrated globally in `apps/web/src/app/[locale]/layout.tsx`.
  - `GSAP` and `@gsap/react` installed in `apps/web/package.json`.
  - Responsive Navbar and Footer constructed in `apps/web/src/components/site-header.tsx` and `apps/web/src/components/site-footer.tsx`.
  - Stub pages created under `apps/web/src/app/[locale]/(marketing)`: Home, About, Contact, Services.
  - Translation files updated to include keys for 'Mutiyar the Fashion Studio' brand context.
  - Verified UI rendering and links with Playwright visually.

## Open Issues / Next Actions
- **Next Action Phase 1 (Home)**: Start building the ~20 home sections in batches of 5 per run with purposeful GSAP scroll animations, transitions, pinning/parallax, and kinetic typography. Ensure no generic AI aesthetics.
