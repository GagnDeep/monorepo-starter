## Summary

<!-- 1–3 bullets -->

## Checklist

- [ ] Translations updated for **all** locales (`pnpm check:i18n` passes)
- [ ] New routes added to `apps/web/src/app/sitemap.ts`
- [ ] Drizzle migration generated (if schema changed): `pnpm db:generate`
- [ ] `pnpm verify` passes locally
- [ ] No `process.env.X` outside `apps/web/src/lib/env.ts`
- [ ] No raw `<head>` / `metadata` objects — went through `buildMetadata`
- [ ] No hardcoded user-visible strings (all in `messages/*.json`)
