# 0002: libsql / Turso over Postgres

## Decision

Use libsql (SQLite-compatible) via `@libsql/client` and Drizzle ORM, hosted on Turso in production.

## Context

The starter optimizes for zero-setup local dev: `pnpm install && pnpm dev` should work without Docker, services, or remote credentials.

## Alternatives considered

- **Postgres (Neon/Supabase/RDS)** — richer types, true concurrency, but requires Docker locally or a remote dev DB.
- **Better-sqlite3** — fast local SQLite, no production story; you'd swap drivers when shipping.

## Consequences

- One driver covers local file (`file:./local.db`) and edge-replicated prod (`libsql://...`).
- Limits: no JSONB/array types, single-writer semantics, weaker concurrent-write story.
- If you outgrow SQLite, migrate — Drizzle abstracts the SQL.
