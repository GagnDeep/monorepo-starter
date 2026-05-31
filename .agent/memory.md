# Memory

## Chosen Design Tokens & Art Direction
- **Concept**: "Global Threads, Custom Elegance" - A sophisticated blend of traditional Indian vibrancy (deep magenta, wine, rich gold) and modern, clean international editorial layouts.
- **Color Palette**: Deep Wine/Magenta as primary, warm sand/off-white background for light mode, deep charcoal/dark wine for dark mode.
- **Typography**: Playfair Display (headings for elegance) + Inter or Manrope (sans-serif for readable UI/body).

## Completed Sections/Pages
- **Phase 0**: Initializing foundation.
  - Custom palette and type scale injected into `apps/web/src/app/globals.css`.
  - Next.js fonts `Playfair Display` and `Manrope` integrated globally.
  - `GSAP` and `@gsap/react` installed in `apps/web/package.json`.
  - Responsive Navbar and Footer constructed.
  - Stub pages created under `apps/web/src/app/[locale]/(marketing)`: Home, About, Contact, Services.
- **Phase 1**: Home Page.
  - Implemented `Hero` component with GSAP parallax text reveal.
  - Implemented `AboutPreview` with GSAP scroll-triggered clip-path image reveal.
  - Implemented `ProcessTimeline` component with drawing path animation using `ScrollTrigger`.
  - Implemented `FeaturedCollections` gallery with horizontal pinned scrolling via `ScrollTrigger`.
  - Implemented `Testimonials` with staggered load and positive social proof.
  - Updated `next.config.ts` to allow `images.unsplash.com` to prevent loading issues. Verified unsplash URLs 200 HTTP response.

## Open Issues / Next Actions
- **Next Action Phase 2 (SEO pages)**: Flesh out the remaining routed pages (~4 per run): `/about`, `/services`, `/contact`. Provide them with unique metadata, headings, and actual content using similar elegant GSAP animations.
