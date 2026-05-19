# 0003: Better-Auth over NextAuth

## Decision

Use Better-Auth with the Drizzle adapter.

## Context

We need email/password + OAuth, sessions readable from both server and client components, and a schema we own.

## Alternatives considered

- **NextAuth (Auth.js) v5** — larger surface, harder-to-extend session model, opaque DB schema.
- **Clerk / WorkOS** — fast to integrate, but pulls auth out of the codebase and adds a vendor.
- **Lucia** — deprecated; not a forward path.

## Consequences

- Auth tables (`user`, `session`, `account`, `verification`) live in `db/schema.ts` and migrate alongside app tables.
- Server reads: `lib/auth-session.ts` (`getSession`, `requireSession`). Client reads: `lib/auth-client.ts` (`useSession`).
- To add OAuth: set provider env vars and uncomment `socialProviders` in `lib/auth.ts`.
