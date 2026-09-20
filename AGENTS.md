# Agent rules — styling-discipline

Goal: an agent who has never seen this repo can ship UI that looks correct **without inventing CSS values**.

## Non-negotiables

1. **No new CSS files** outside:
   - `packages/tokens/src/tokens.css`
   - `apps/web/src/app/globals.css`
2. **No arbitrary Tailwind** — never `bg-[#…]`, `p-[13px]`, `w-[320px]`, `text-[14px]`, etc.
3. **No raw hex/rgb/hsl** in `apps/**`.
4. **Looks come from props** on `@sd/ui` — `variant`, `tone`, `size`, `radius`, `highContrast`, `fullWidth`, `loading`, `leftSection`, `rightSection`.
5. **Spacing comes from layout props** — `Stack` / `Flex` / `Box` with `gap` / `p` / `px` / `py` / `m` as `"0"`–`"9"`. Do not sprinkle `p-4` / `gap-3` / `mt-6` in apps.
6. Missing look → **extend the primitive in `packages/ui`**, never page-level styling.
7. Prefer defaults. Only set a prop when the default is wrong.

## Locked vocabulary

| Prop | Values |
|------|--------|
| `variant` | `solid` \| `soft` \| `surface` \| `outline` \| `ghost` \| `link` |
| `tone` | `neutral` \| `brand` \| `success` \| `warning` \| `danger` \| `info` |
| `size` | `1` \| `2` \| `3` \| `4` |
| `radius` | `none` \| `sm` \| `md` \| `lg` \| `full` |

Read `docs/DESIGN.md` and `docs/STRENGTHS.md` for why.

## Before you finish

```bash
pnpm verify
```

That runs CSS allowlist + arbitrary-value guard + typecheck + build.

## Single source of truth (no vocab drift)

`TONES`, `VARIANTS`, `SIZES`, `RADII`, and `SPACE` are defined **only** in `packages/ui` (`lib/scales.ts`) and exported from `@sd/ui`.

- Apps (including the kitchen sink) **import** them — never redeclare `const TONES = [...]` (or siblings) in `apps/**`.
- Extending the vocabulary means editing `packages/ui` (and component `cva` maps), not copying arrays into pages.
- `pnpm guard:vocab` fails the build if an app redefines these.

## Push & PR gates

- **pre-push (Lefthook):** runs `pnpm verify`. Push is blocked until mechanical rules pass. Do not use `--no-verify` to ship.
- **PR CI:** re-runs `pnpm verify` and `pnpm discipline` + `pnpm discipline:ai` (heuristics + Gemini).
- **Judgment:** every PR must satisfy `docs/PR-DISCIPLINE.md` (replace, don't layer; delete failed attempts; name root cause).

## AI discipline gate (no human) — Gemini, same as Ralph

- `pnpm discipline:ai` reviews the diff against replace-don't-layer and **exits 1 on FAIL**.
- Uses **`GEMINI_API_KEY`** (fallback `GOOGLE_API_KEY`), model `GEMINI_MODEL` or `gemini-flash-latest`, endpoint `generativelanguage.googleapis.com` with `x-goog-api-key` — same as Ralph.
- Local: auto-loads `~/Desktop/AI Projects/ralph/apps/api/.env` when the key is unset. Optional override via `.env` (see `.env.example`).
- Pre-push (lefthook) runs `verify` + `discipline` + `discipline:ai`.
- PR job `discipline` runs heuristics + AI. Repo secret: **`GEMINI_API_KEY`**. FAIL blocks merge; no human gate.
