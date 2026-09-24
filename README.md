# styling-discipline

Monorepo for **variant-first UI**: agents and humans style via component props, not new CSS files.

## Rules
- No per-component / page CSS modules.
- Allowed stylesheets: `packages/tokens/src/tokens.css`, `apps/web/src/app/globals.css` only.
- Call sites may use Tailwind utilities via `className` for one-offs.
- Prefer locked variants (`tone`, `variant`, `size`, `radius`, …) over inventing values.

## Apps
- `apps/web` — kitchen sink at `/` showing every primitive × variant.

## Packages
- `@sd/tokens` — CSS variables + Tailwind theme bridge
- `@sd/ui` — variant-rich primitives (`cva`)

```bash
pnpm install
pnpm verify
pnpm dev
```

## Gates

```bash
pnpm hooks          # install Lefthook pre-push (after clone)
pnpm verify         # mechanical rules (also runs on pre-push)
pnpm discipline     # replace-don't-layer heuristics (PR CI)
```

Push is blocked until `pnpm verify` passes. PRs also run discipline checks — see `docs/PR-DISCIPLINE.md`.
