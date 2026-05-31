# Memory

## Phase
Phase 0 - Foundation

## Concept & Theme
- **Concept:** Warm, designer-led, gift-focused boutique experience for "Designlane Heena".
- **Palette:** Warm earthy tones (terracotta, soft beige, rich charcoal) to convey craftsmanship and elegance. Avoid generic AI palettes.
- **Typography:** Classic elegant Serif for headings (Playfair Display), clean Sans for body (Inter).

## Completed Items
- Initialized memory.md
- Updated `apps/web/src/app/globals.css` with a distinctive theme suitable for a designer boutique. Defined custom palette and imported fonts. Overrode shadcn tokens.
- Installed `gsap` and `@gsap/react`.
- Created custom `SiteHeader` (Navbar) and `SiteFooter`.
- Generated stub pages for `collections` and `consultation` routes.
- Updated `vitest.setup.ts` to provide necessary environment variables for tests.

## Next Action
- Move to Phase 1: Home page (Animations and layout sections).
## Learnings
- When adding Google Fonts, consider using `next/font/google` instead of `@import` in `globals.css` to prevent layout shifts.
- When creating new navigation links, ensure they are added to the translation files (`messages/en.json`, etc.) to maintain i18n support.
- Ensure the Navbar includes a mobile drawer or hamburger menu for mobile responsiveness instead of simply hiding links.
