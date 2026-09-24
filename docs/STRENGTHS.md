# Strength extract — Dub · Radix Themes · Mantine

Studied remotely (raw GitHub + docs). No clones.

## dubinc/dub — structure + semantic tokens
**Steal:** `packages/ui` + shared Tailwind/themes; CSS variables for `bg-*` / `border-*` / `content-*`; `cva` + defaults.
**Avoid:** raw palette leaks (`blue-500`) and open `className` freestyle at call sites.

## Radix Themes — closed prop API (the bar)
**Steal:** same axes everywhere (`size` 1–4, `variant`, palette `color`/`tone`, `radius`); layout primitives with **enum spacing** (`gap="3"`); Theme defaults; treat freestyle CSS as a smell.
**Avoid:** assuming Tailwind at call sites is safe — Radix docs warn it fights a closed system.

## Mantine — defaults + structural props
**Steal:** theme `defaultProps`; `leftSection` / `rightSection`; `fullWidth`; `loading`.
**Avoid:** Styles API / `classNames` CSS escapes.

## Locked for this repo
Props: `variant` · `tone` · `size` 1–4 · `radius` · `highContrast` · `fullWidth` · `loading` · sections.
Layout: `Stack` / `Flex` / `Box` space `0`–`9` only.
Guards: no stray CSS; no arbitrary Tailwind / hex in apps.


## Visual language (2026 restyle)

Opinionated look borrowed from product systems, not generic Tailwind kits:

- **Vercel Geist** — near-black solids, gray materials, 6–12px radii, soft elevations, focus rings
- **Linear** — tight tracking, indigo accent for focus/info, dense control heights
- **coss ui (Cal.com)** — production-dense patterns on modern primitives

Structure still from Dub + Radix Themes + Mantine (closed props). Look is no longer “basic shadcn blue button.”
