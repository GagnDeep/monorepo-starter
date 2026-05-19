# 0003: Better-Auth over NextAuth

Better-Auth has a smaller surface, native TypeScript, no provider lock-in, and a Drizzle adapter that maps cleanly to our schema. NextAuth (v5) is heavier and its session model is harder to extend.

Sessions: server via `lib/auth-session.ts` (`getSession`, `requireSession`), client via `lib/auth-client.ts`.
