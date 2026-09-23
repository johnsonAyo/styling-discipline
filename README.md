# DriveTrack

DriveTrack is a scheduling and lesson follow-through workspace for independent UK driving instructors. The repository retains its original **variant-first UI** discipline: agents and humans style through component props, not new application CSS.

## Rules

- No per-component / page CSS modules.
- Allowed stylesheets: `packages/tokens/src/tokens.css`, `apps/web/src/app/globals.css` only.
- Call sites may use Tailwind utilities via `className` for one-offs.
- Prefer locked variants (`tone`, `variant`, `size`, `radius`, …) over inventing values.

## Apps

- `apps/web` — the Next.js marketing and product application. The first implemented slice includes `/`, `/features`, `/privacy`, and `/terms`.

## Packages

- `@sd/tokens` — CSS variables + Tailwind theme bridge
- `@sd/ui` — variant-rich primitives (`cva`)

The confirmed product and engineering contract lives in [`SPEC.md`](./SPEC.md).

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
