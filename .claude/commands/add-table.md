---
description: Add a new Drizzle table
---

Run `pnpm gen:table $ARGUMENTS`. Then:
1. Open `apps/web/src/db/schema.ts` and remind user to add columns
2. Run `pnpm db:generate && pnpm db:migrate`
3. Suggest adding queries to `apps/web/src/data/<name>.ts` (not in components)
