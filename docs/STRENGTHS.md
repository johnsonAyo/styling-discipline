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

The system is product-led and deliberately warmer than a generic monochrome SaaS kit:

- **Warm ivory canvas** — quiet, editorial space without the severity of pure white or near-black
- **Aubergine brand surfaces** — decisive navigation, framing, and calls to action
- **Lilac information accent** — focus, orientation, and product hierarchy without blue-default drift
- **Soft operational colour** — warning, success, and booking states stay legible without becoming loud
- **Product proof first** — real-looking workflows, restrained copy, generous spacing, and purposeful depth

Structure remains grounded in Dub + Radix Themes + Mantine: closed props, semantic tokens, and reusable primitives. Marketing pages use the same system instead of introducing page-level visual exceptions.
