# 0004: shadcn/ui over Mantine / MUI

## Decision

Use shadcn/ui — copy components into `apps/web/src/components/ui/` rather than installing a component library.

## Context

We want a themeable component set we can read, modify, and own, without being tied to a library's release cadence.

## Alternatives considered

- **Mantine** — comprehensive, but theming locks you into CSS-in-JS and upgrades can break component APIs.
- **MUI** — same trade-off, heavier runtime.
- **Headless UI / Radix bare** — fewer batteries; you'd reinvent what shadcn already gives you.

## Consequences

- ~24 files in `components/ui/` we maintain ourselves — small and readable.
- Theming via CSS vars in `globals.css` (HSL), not JS config.
- To add a primitive: `pnpm dlx shadcn@latest add <name>` from `apps/web/`.
