# 0001: next-intl over i18next

## Decision

Use next-intl for internationalization.

## Context

We need a `[locale]`-prefixed App Router site with type-safe translations on both server and client, locale-aware `Link`/`redirect`, and middleware for locale detection.

## Alternatives considered

- **i18next + react-i18next** — predates App Router; requires custom middleware, separate `Link` wrappers, and no first-class server-component support.
- **No library, route-by-route message files** — works for two locales, breaks down at three; loses type safety.

## Consequences

- Translation keys are statically checked against `messages/en.json` (via `AppConfig.Messages` augmentation in `src/global.d.ts`).
- `i18n/routing.ts` is the single source of truth for the locale list — sitemap, hreflang, and middleware all derive from it.
- Don't introduce a second i18n library; the gain from type-safe `t('home.title')` collapses if calls split across two systems.
