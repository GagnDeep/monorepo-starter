# Memory

## Phase 0: Foundation
- **Status:** Completed
- **Site:** YAVA DESIGNS (Sector 22C, Chandigarh)
- **Completed Items:**
  - Defined custom color palette (champagne, deep brown, soft neutrals) and typography (`Inter` sans, `Playfair Display` serif) in `apps/web/src/app/globals.css`.
  - Installed GSAP + `@gsap/react`.
  - Configured `next.config.ts` for Unsplash images.
  - Updated `apps/web/src/config/site.ts` with brand name and info.
  - Built responsive Navbar and Footer (`site-header.tsx`, `site-footer.tsx`).
  - Added localization stubs for `collections`, `custom-stitching`, `shipping`, `about`, `contact` in `en.json` and `es.json`.
  - Maintained `(marketing)` group pages (`about`, `contact`) to avoid regressions and created new stubs for the rest.
- **Open Issues:** None.

## Phase 1: Home (Batch 1)
- **Status:** Completed
- **Completed Items:**
  - Built the first 5 sections of the home page: `HeroSection`, `IntroSection`, `CollectionsSection`, `StitchingPromoSection`, and `ReviewsSection`.
  - Implemented GSAP scroll-triggered animations and reveals for each section.
  - Sourced and verified premium imagery from Unsplash.
  - Updated English and Spanish localization keys for all new text content on the home page.
  - Assembled sections into `apps/web/src/app/[locale]/page.tsx`.
  - Verified flawless production build, zero layout shift, and 60fps animations.
- **Open Issues:** None.

## Phase 1: Home (Batch 2)
- **Status:** Not Started
- **Next Action:** Continue building the remaining sections of the home page (approx. 5 sections per batch) focusing on purposeful GSAP choreography, parallax effects, and kinetic typography. Ideas include: featured fabrics, the tailoring process step-by-step, FAQ, Instagram feed, etc.
