# Kohinoor Trends - Memory

## Current Phase
Phase 0 — Foundation

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

## Next Action
- Configure Unsplash image domain in `next.config.ts`.
- Update `config/site.ts` with the "Kohinoor Trends" branding.
- Define custom HSL palette and typography in `globals.css` and `layout.tsx`.
- Install `gsap` in `apps/web`.
- Build a responsive `SiteHeader` (Navbar) and a new `SiteFooter` component.
- Generate stub pages for all routes linked in the Nav/Footer (e.g., `/collections`, `/bridal`, `/about`, `/contact`).
- Update translations in `messages/en.json` and others to match the routes.