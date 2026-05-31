import sys

def main():
    memory_path = '.agent/memory.md'
    with open(memory_path, 'r') as f:
        content = f.read()

    new_content = content.replace('## Next Action\n- Phase 1 — Home: build the first 5 home sections with purposeful GSAP scroll animations, transitions, pinning/parallax, and kinetic typography.\n- Specifically, let\'s build:\n  1. Hero section with parallax and kinetic typography.\n  2. Intro / About Us summary (multi-generational appeal).\n  3. Featured Collections preview (cotton suits, lehengas, shawls).\n  4. Bridal Special feature (matched to groom outfits).\n  5. Reviews / Testimonials (4.0★ from 108 reviews).',
'''## Completed Items
- Phase 1 (Batch 1) completed: Created HeroSection, StorySection, CollectionsPreviewSection, BridalSection, and ReviewsSection with GSAP animations.
- Applied `overflow-x-hidden` to layout to prevent horizontal scrollbars from GSAP animations.
- Fixed `<a>` tags in GSAP components to use locale-aware `<Link>` from `@/i18n/navigation`.

## Next Action
- Phase 1 — Home (Batch 2): Build the remaining home sections, or proceed to Phase 2 (SEO pages) if Home page is considered fully complete. Need to evaluate how many sections are needed for the Home page.
''')

    with open(memory_path, 'w') as f:
        f.write(new_content)

if __name__ == '__main__':
    main()
