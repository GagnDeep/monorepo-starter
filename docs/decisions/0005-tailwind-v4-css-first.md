# 0005: Tailwind v4 CSS-first config

Tailwind v4 puts theme tokens in CSS (via `@theme inline` in `globals.css`) instead of `tailwind.config.ts`. We follow that. Brand color changes happen in `globals.css` HSL vars — no JS config to keep in sync.

Trade-off: some v3 plugins lag. We don't use them.
