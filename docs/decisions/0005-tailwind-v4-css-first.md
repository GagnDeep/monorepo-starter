# 0005: Tailwind v4 CSS-first config

## Decision

Use Tailwind v4 with theme tokens in CSS (`@theme inline` in `globals.css`) — no `tailwind.config.ts`.

## Context

Tailwind v4 moved configuration into CSS via `@theme`. Brand colors, font families, and spacing live alongside the rest of the stylesheet.

## Alternatives considered

- **Stick with v3-style `tailwind.config.ts`** — familiar, but you'd maintain config in two places.
- **Wait for plugin ecosystem to fully catch up** — most v4-compatible already; holdouts aren't deal-breakers.

## Consequences

- Rebranding is one file: change HSL `--background` / `--foreground` / `--primary` under `:root` and `.dark` in `globals.css`.
- Some v3 community plugins lag — we don't use any.
- Don't create `tailwind.config.{js,ts}` — v4 is CSS-first by design.
