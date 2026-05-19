# CLAUDE.md

Claude Code layer for this repo. **Read [AGENTS.md](./AGENTS.md) first** — it's the source of truth for all codebase rules. This file adds Claude Code-specific tooling on top.

## Quick context

Run `pnpm context` before planning anything. It prints the current routes, DB tables, locales, env keys, and installed packages so you don't have to guess.

## Skills to invoke

| Task                                       | Skill                                          |
| ------------------------------------------ | ---------------------------------------------- |
| New UI page or component                   | `frontend-design:frontend-design`              |
| New feature (anything user-facing)         | `superpowers:brainstorming` first              |
| Multi-step implementation                  | `superpowers:writing-plans` → `superpowers:executing-plans` |
| Bug or failing test                        | `superpowers:systematic-debugging`             |
| Before claiming done                       | `superpowers:verification-before-completion`   |
| Implementing tests                         | `superpowers:test-driven-development`          |
| Touching auth or DB                        | `security-review` before committing            |
| Adding Claude/AI features                  | `claude-api`                                   |
| Improving this CLAUDE.md                   | `claude-md-management:claude-md-improver`      |
| Building an interactive demo               | `playground:playground`                        |
| Reviewing finished work                    | `simplify`                                     |

## Slash commands

- `/add-page <route>` — scaffold a localized page.
- `/add-locale <code> <label>` — add a locale and mirror translations.
- `/add-table <name>` — drizzle schema + `data/<name>.ts` stubs.
- `/translate` — fill missing keys across locale files.
- `/check-i18n` — verify key parity across `messages/*.json`.
- `/verify` — `pnpm verify` (typecheck + lint + i18n + build).
- `/context` — print routes/tables/locales/env/packages.

## Pre-approved tools

See `.claude/settings.json` for the allowlist (pnpm scripts, drizzle commands, generators). Add new entries there if a command keeps prompting.

## Optional hook

A `PostToolUse` typecheck hook can be added to `.claude/settings.json` for tight feedback after edits. Ship commented out by default — enable per-developer.

## Memory hints

Save:
- Project decisions — already captured in `docs/decisions/`.
- User code-style preferences (naming, comment density, test structure).

Don't save:
- File paths or conventions — those belong in AGENTS.md.
- Anything reproducible from `pnpm context`.

---

For all codebase rules, conventions, file paths, generators, and workflows — see [AGENTS.md](./AGENTS.md).
