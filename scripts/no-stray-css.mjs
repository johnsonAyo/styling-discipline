#!/usr/bin/env node
import { readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const ALLOW = new Set([
  "packages/tokens/src/tokens.css",
  "apps/web/src/app/globals.css",
]);
const EXT = /\.(css|scss|sass|less)$/i;
const SKIP = new Set(["node_modules", ".next", "dist", ".turbo", ".git"]);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (EXT.test(name)) out.push(relative(ROOT, p));
  }
  return out;
}

const found = walk(ROOT);
const stray = found.filter((f) => !ALLOW.has(f));
if (stray.length) {
  console.error("Stray stylesheets (not allowed):\n" + stray.map((s) => "  - " + s).join("\n"));
  console.error("\nOnly these are allowed:\n" + [...ALLOW].map((s) => "  - " + s).join("\n"));
  process.exit(1);
}
console.log(`no-stray-css: ok (${found.length} allowed stylesheet(s))`);
