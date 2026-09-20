# Locked design — styling-discipline

Agents style through **props only**. If a look is missing, extend `packages/ui` — never invent CSS values at the call site.

## Prop vocabulary (interactive)

| Prop | Values | Default |
|------|--------|---------|
| `variant` | `solid` \| `soft` \| `surface` \| `outline` \| `ghost` \| `link` | `solid` |
| `tone` | `neutral` \| `brand` \| `success` \| `warning` \| `danger` \| `info` | component-specific |
| `size` | `1` \| `2` \| `3` \| `4` | `2` |
| `radius` | `none` \| `sm` \| `md` \| `lg` \| `full` | theme / `md` |
| `highContrast` | boolean | `false` |
| `fullWidth` | boolean | `false` |
| `loading` | boolean | `false` |

Structural: `leftSection`, `rightSection` on Button.

## Layout (spacing is props)

Use `Box`, `Flex`, `Stack` with space scale `0`–`9` for `gap`, `p`, `px`, `py`, `m`, …

Do **not** write `p-4`, `gap-3`, `mt-6` in apps. Those map to inventable values; the scale props are the only spacing API.

## Tokens

Semantic only: `bg`, `fg`, `muted`, `border`, `surface`, `brand`, `success`, `warning`, `danger`, `info` (+ soft/fg). Space and radius scales live as CSS variables.

## Hard bans

1. CSS files outside allowlist
2. Arbitrary Tailwind: `bg-[#…]`, `p-[13px]`, `w-[320px]`, …
3. Raw hex/rgb in `apps/**`
4. Freestyle spacing/color utilities in apps — use layout + tone props
5. New looks = new/extended variant in `packages/ui`

Borrowed from: Dub monorepo/tokens, Radix closed API + scales, Mantine defaultProps/sections.

## Vocab ownership

Enums live in `packages/ui/src/lib/scales.ts` only. Kitchen sink imports `TONES` / `VARIANTS` / `SIZES` / `RADII` / `SPACE` from `@sd/ui`. App-local copies are forbidden (`pnpm guard:vocab`).
