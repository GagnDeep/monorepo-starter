# AGENTS.md

Operational contract for this repo. Tool-neutral. Read this first.

## Setup

```bash
pnpm install
pnpm bootstrap     # writes apps/web/.env.local (fresh BETTER_AUTH_SECRET) + runs db:migrate
pnpm dev
# verify: http://localhost:3000 → 307 → /en
pnpm verify
```

`pnpm bootstrap` is idempotent. If `apps/web/.env.local` exists, it leaves it alone and just re-runs migrations. Don't use `pnpm setup` — that's pnpm's built-in PATH installer, not this repo's command.

## Project shape

Turborepo + pnpm workspaces. One app today, room for more.

```
monorepo-starter/
├── apps/web/
│   └── src/
│       ├── app/
│       │   ├── [locale]/                # ALL user-facing routes
│       │   ├── api/auth/[...all]/       # Better-Auth handler
│       │   ├── og/route.tsx             # dynamic OG (ImageResponse)
│       │   ├── sitemap.ts               # locale-aware
│       │   ├── robots.ts
│       │   └── globals.css              # HSL theme vars + @theme inline
│       ├── components/
│       │   ├── ui/                      # shadcn primitives
│       │   └── page-shell.tsx           # standard page wrapper
│       ├── lib/
│       │   ├── seo.ts                   # buildMetadata
│       │   ├── jsonld.ts                # structured data helpers
│       │   ├── auth.ts                  # Better-Auth server
│       │   ├── auth-client.ts           # Better-Auth client
│       │   ├── auth-session.ts          # getSession, requireSession
│       │   ├── env.ts                   # validated env access
│       │   ├── log.ts                   # structured logger
│       │   ├── email.ts                 # transactional email
│       │   ├── rate-limit.ts            # per-IP / per-user limits
│       │   ├── instrument.ts            # tracing/metrics
│       │   └── utils.ts
│       ├── data/
│       │   └── posts.ts                 # DB query functions
│       ├── db/                          # drizzle schema + migrations
│       ├── i18n/                        # next-intl routing/request/navigation
│       ├── messages/                    # en.json, es.json
│       ├── config/site.ts               # brand + URL config
│       └── proxy.ts                     # next-intl middleware
├── scripts/                             # generators, checkers
├── docs/decisions/                      # ADRs
├── turbo.json
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

## Commands

Run from repo root.

| Task                                   | Command              |
| -------------------------------------- | -------------------- |
| Dev server                             | `pnpm dev`           |
| Build                                  | `pnpm build`         |
| Lint                                   | `pnpm lint`          |
| Typecheck                              | `pnpm typecheck`     |
| Format                                 | `pnpm format`        |
| Unit tests                             | `pnpm test`          |
| E2E tests                              | `pnpm e2e`           |
| Full verify (tc + lint + i18n + build) | `pnpm verify`        |
| Check i18n key parity                  | `pnpm check:i18n`    |
| Print repo context                     | `pnpm context`       |
| Generate SQL                           | `pnpm db:generate`   |
| Apply migrations                       | `pnpm db:migrate`    |
| Drizzle Studio                         | `pnpm db:studio`     |
| Dev push (no migration files)          | `pnpm db:push`       |
| Seed dev DB                            | `pnpm db:seed`       |
| Reset dev DB                           | `pnpm db:reset`      |
| Scaffold a page                        | `pnpm gen:page`      |
| Scaffold a locale                      | `pnpm gen:locale`    |
| Scaffold a DB table                    | `pnpm gen:table`     |

## Generators

Prefer generators over hand-rolling — they keep sitemap, i18n, and types in sync.

```bash
# Page: creates app/[locale]/about/page.tsx, adds key, registers route
pnpm gen:page about

# Locale: copies en.json → fr.json, adds 'fr' to routing.locales
pnpm gen:locale fr Français

# Table: adds drizzle schema block + data/<name>.ts query stubs
pnpm gen:table comments
```

## Workflows

### Add a page
1. `pnpm gen:page <route>` — scaffolds page, translations, sitemap entry.
2. Fill in copy in `messages/en.json` first (source of truth), mirror to other locales.
3. Ensure `generateMetadata` calls `buildMetadata({ title, description, path, locale })`.

### Add a locale
1. `pnpm gen:locale <code> <label>`.
2. Translate values in `messages/<code>.json`.
3. `pnpm check:i18n` — must pass.

### Change brand
Edit HSL vars under `:root` (and `.dark`) in `apps/web/src/app/globals.css`. Update `siteConfig.brand` in `config/site.ts` for the OG image.

### Add a shadcn component
From `apps/web/`: `pnpm dlx shadcn@latest add <name>`.

### Add a DB table
1. `pnpm gen:table <name>` — schema block + `data/<name>.ts` query stubs.
2. `pnpm db:generate` — writes SQL to `src/db/migrations/`.
3. `pnpm db:migrate` — applies to `local.db`.

### Add translated strings
1. Add the key under the right namespace in `messages/en.json`.
2. Mirror in every other locale file.
3. Read with `useTranslations('ns')` in client components, `await getTranslations('ns')` in server components.
4. `pnpm check:i18n`.

### Add structured data
Import a helper from `@/lib/jsonld` (`organization`, `website`, `breadcrumb`, `article`) and render `<JsonLd data={...} />` inside the page or layout.

### Add auth-protected logic
- Server: `import { requireSession } from '@/lib/auth-session'` — redirects if unauthenticated.
- Client: `useSession()` from `@/lib/auth-client`.
- Never call `auth.api.getSession` directly outside `lib/auth-session.ts`.

### Add a server action
1. Create the action in the same file as the component (`'use server'` at top of fn) or under `app/[locale]/<route>/actions.ts`.
2. Validate input with Zod.
3. Call into `src/data/<name>.ts` for DB access — never query Drizzle directly from the action.
4. Wrap mutations with `requireSession` if user-scoped.

### Add an API route
1. Create `app/api/<name>/route.ts`. Routes outside `[locale]` are fine here.
2. Validate query/body with Zod.
3. Use `lib/rate-limit` for public endpoints.
4. Read env via `lib/env.ts`.

### Add a DB query
1. Live in `src/data/<table>.ts` — one file per table.
2. Export typed async functions. Accept primitives, return rows.
3. Components and actions import from `@/data/...`, never `@/db` directly.

## Contracts

- Routes live under `app/[locale]/` (except `api/`, `og`, `sitemap`, `robots`).
- Metadata goes through `buildMetadata` (from `lib/seo`).
- User-visible strings live in `messages/*.json`.
- Env access goes through `lib/env.ts` — never `process.env.X`.
- DB queries live in `src/data/`, not in components.
- Sessions go through `lib/auth-session.ts`.
- Server components by default; `'use client'` only for state/effects/browser APIs.
- Imports use `@/...` (alias to `apps/web/src/`).

## File map

| Want to edit…             | Go here                                            |
| ------------------------- | -------------------------------------------------- |
| A user-facing route       | `apps/web/src/app/[locale]/<route>/page.tsx`       |
| Page metadata             | call `buildMetadata` from `@/lib/seo`              |
| Brand colors              | `apps/web/src/app/globals.css` + `config/site.ts`  |
| Translations              | `apps/web/src/messages/<locale>.json`              |
| Locale list               | `apps/web/src/i18n/routing.ts`                     |
| DB schema                 | `apps/web/src/db/schema.ts`                        |
| DB queries                | `apps/web/src/data/<table>.ts`                     |
| Env schema                | `apps/web/src/lib/env.ts`                          |
| Server session helpers    | `apps/web/src/lib/auth-session.ts`                 |
| Client session            | `apps/web/src/lib/auth-client.ts`                  |
| OG image                  | `apps/web/src/app/og/route.tsx`                    |
| Sitemap routes            | `apps/web/src/app/sitemap.ts`                      |
| shadcn components         | `apps/web/src/components/ui/`                      |
| Page chrome               | `apps/web/src/components/page-shell.tsx`           |
| Generators / checkers     | `scripts/`                                         |
| Architecture decisions    | `docs/decisions/`                                  |

## Verification

```bash
pnpm verify   # typecheck + lint + check:i18n + build
pnpm test     # unit
pnpm e2e      # end-to-end
```

Manual smoke (after `pnpm dev`):

- `/` → 307 → `/en`
- `/en` and `/es` render translated copy.
- `/sitemap.xml` lists every (route × locale) with `hreflang`.
- `/og?title=Hello&locale=en` returns a 1200×630 PNG.
- `/en/sign-in` → create an account → row visible in `pnpm db:studio`.

## Don'ts

- No competing libs: no i18next, no Prisma, no NextAuth, no Mantine/MUI.
- No routes outside `[locale]` (except `api/`, `og`, `sitemap`, `robots`).
- No `process.env.X` outside `lib/env.ts`.
- No hand-rolled `<head>` metadata — always `buildMetadata`.
- No hardcoded user-visible strings — use translations.
- No new `drizzle()` clients — import from `@/db`.
- No DB calls from components — go through `src/data/`.
- Don't commit `local.db`, `.env`, `.env.local`.
