#!/usr/bin/env node
/**
 * Vocab (TONES / VARIANTS / SIZES / RADII / SPACE) lives only in packages/ui.
 * Apps must import from @sd/ui — redefining these arrays is drift and fails CI.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SKIP = new Set(["node_modules", ".next", "dist", ".turbo", ".git"]);
const EXT = /\.(tsx|ts|jsx|js|mjs)$/;
const FORBIDDEN = /^\s*(?:export\s+)?const\s+(TONES|VARIANTS|SIZES|RADII|SPACE)\s*=/;
// Allowed only under packages/ui (canonical) — and this guard script itself is not scanned in apps

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (EXT.test(name)) out.push(p);
  }
  return out;
}

const appsDir = join(ROOT, "apps");
const files = walk(appsDir);
const hits = [];

for (const f of files) {
  const rel = relative(ROOT, f);
  const lines = readFileSync(f, "utf8").split(/\n/);
  lines.forEach((line, i) => {
    if (FORBIDDEN.test(line)) {
      hits.push(`${rel}:${i + 1}: redefines ${line.match(FORBIDDEN)[1]} — import from @sd/ui instead`);
    }
  });
}

if (hits.length) {
  console.error("Vocab drift (locked enums must come from packages/ui):\n" + hits.map((h) => "  - " + h).join("\n"));
  process.exit(1);
}
console.log(`no-vocab-drift: ok (scanned ${files.length} app files)`);
