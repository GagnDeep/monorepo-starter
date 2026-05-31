# Kohinoor Trends - Memory

## Current Phase
Phase 1 — Home (Batch 1)

## Overview
Building a portfolio-defining, jury-worthy website for Kohinoor Trends, a women's ethnic and bridal boutique in Sector 17, Chandigarh (Established 1998).
Specialties: cotton suits, lehengas, shawls, bridal collections matched to groom outfits, all-age range.
Rating: 4.0★ (108 reviews).
Hours: 11AM-8:45PM daily.
Contact: +91 172 270 2061.
Tone: traditional, trustworthy, multi-generational.

## Design Decisions
- Palette: Deep maroon/red and rich gold, complementing traditional Indian bridalwear.
- Typography: Playfair Display for elegant serif headings, Inter for clean readable sans-serif body.
- Motion: GSAP for fluid, intentional, physical, weighted motion.

## Completed Items
- Initialized `.agent/memory.md`
- Configured Unsplash image domain in `next.config.ts`.
- Updated `config/site.ts` with the "Kohinoor Trends" branding.
- Defined custom HSL palette and typography in `globals.css` and `layout.tsx`.
- Installed `gsap` in `apps/web`.
- Built a responsive `SiteHeader` (Navbar) and a new `SiteFooter` component.
- Generated stub pages for all routes linked in the Nav/Footer (e.g., `/collections`, `/bridal`, `/about`, `/contact`).
- Updated translations in `messages/en.json` and `messages/es.json` to match the routes.

## Completed Items
- Phase 1 (Batch 1) completed: Created HeroSection, StorySection, CollectionsPreviewSection, BridalSection, and ReviewsSection with GSAP animations.
- Applied `overflow-x-hidden` to layout to prevent horizontal scrollbars from GSAP animations.
- Fixed `<a>` tags in GSAP components to use locale-aware `<Link>` from `@/i18n/navigation`.

## Next Action
- Phase 1 — Home (Batch 2): Build the remaining home sections, or proceed to Phase 2 (SEO pages) if Home page is considered fully complete. Need to evaluate how many sections are needed for the Home page.
