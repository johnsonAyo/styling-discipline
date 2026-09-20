# Discipline gate — replace, don't layer (Gemini, Ralph setup)

## Provider (exact Ralph setup)

| Item | Value |
|------|--------|
| Env | `GEMINI_API_KEY` (fallback `GOOGLE_API_KEY`) |
| Model | `GEMINI_MODEL` or `gemini-flash-latest` |
| API | `https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent` |
| Auth | header `x-goog-api-key` |

Local runs auto-load `ralph/apps/api/.env` when `GEMINI_API_KEY` is not already in the environment — same key file Ralph uses.

CI: repository secret **`GEMINI_API_KEY`** (same name as Ralph).

## Gates

| Gate | Command | Blocks |
|------|---------|--------|
| Mechanical | `pnpm verify` | pre-push + PR |
| Heuristics | `pnpm discipline` | pre-push + PR |
| AI (Gemini) | `pnpm discipline:ai` | pre-push + PR — **FAIL exits 1, no human** |

## Rules AI enforces

1. No parallel / layered implementations  
2. Failed attempts deleted (not commented)  
3. Root-cause replace, not symptom stacks  
4. Minimal residue  

## Setup

```bash
# Local — uses Ralph key automatically if present in ralph/apps/api/.env
pnpm hooks
pnpm discipline:ai

# Or export explicitly
export GEMINI_API_KEY=...   # from Ralph
```

GitHub → Settings → Secrets → Actions → `GEMINI_API_KEY`  
Branch protection: require `verify` + `discipline`.
