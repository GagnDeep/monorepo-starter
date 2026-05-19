---
description: Fill a translation key across all locale files
---

Given the key `$ARGUMENTS` (dot path like `home.title`):
1. Read `apps/web/src/messages/en.json` to get the source string
2. For each other locale file in `apps/web/src/messages/`, translate the value and add it under the same key path
3. Run `pnpm check:i18n` to confirm parity
