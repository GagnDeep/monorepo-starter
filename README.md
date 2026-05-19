# monorepo-starter

Production-grade Next.js starter that's ready on day one. Batteries included: i18n, SEO, auth, DB, UI — wired together and documented for both humans and AI agents.

## Stack

- **Monorepo:** Turborepo + pnpm workspaces
- **App:** Next.js 16 (App Router), React 19, TypeScript strict
- **i18n:** `next-intl` with `[locale]` URL segments
- **UI:** shadcn/ui + Tailwind v4 (CSS-first) + lucide
- **DB:** Drizzle ORM on libsql / Turso
- **Auth:** Better-Auth (Drizzle adapter)
- **Validation:** Zod + react-hook-form
- **Quality:** ESLint, Prettier, lefthook

## Getting started

```bash
pnpm install
pnpm bootstrap    # generates apps/web/.env.local with a real secret + runs migrations
pnpm dev
```

Open <http://localhost:3000> — it redirects to `/en`.

`pnpm bootstrap` is idempotent and safe to re-run. It won't overwrite an existing `.env.local`.

> Note: avoid `pnpm setup` — that's pnpm's built-in PATH installer, not this repo's command.

## For agents / AI tools

This repo is optimized for AI agents. See **[AGENTS.md](./AGENTS.md)** for the operational contract: setup, commands, generators, workflows, contracts, and don'ts. Claude Code users: also read **[CLAUDE.md](./CLAUDE.md)** for skill and slash-command pointers.

## For humans

Every common task (add a page, add a locale, add a DB table, change the brand, wire auth) is documented step-by-step in [AGENTS.md](./AGENTS.md). Architecture decisions live in [`docs/decisions/`](./docs/decisions/).
