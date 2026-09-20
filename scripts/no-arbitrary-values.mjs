#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SKIP = new Set(["node_modules", ".next", "dist", ".turbo", ".git"]);
const TARGET_EXT = /\.(tsx|ts|jsx|js|mjs|css)$/;
// Tailwind arbitrary values + raw colors in app code
const ARBITRARY = /(?:class(?:Name)?\s*=\s*(?:\{`|["'`])[^"'`]*\[[^\]]+\]|[a-zA-Z]-\[(?:#|rgb|hsl|[0-9]))/;
const HEX_IN_APPS = /#[0-9a-fA-F]{3,8}\b/;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (TARGET_EXT.test(name)) out.push(p);
  }
  return out;
}

const files = walk(ROOT).filter((f) => {
  const rel = relative(ROOT, f);
  return rel.startsWith("apps/") || rel.startsWith("packages/ui/");
});

const hits = [];
for (const f of files) {
  const rel = relative(ROOT, f);
  // tokens + ui internals may use scale classes; still ban arbitrary brackets in class strings
  const src = readFileSync(f, "utf8");
  const lines = src.split(/\n/);
  lines.forEach((line, i) => {
    if (line.includes("no-arbitrary-allow")) return;
    if (/\[&/.test(line) || /data-\[/.test(line) || /aria-\[/.test(line)) return;
    if (/\[[^\]]*\]/.test(line) && /(?:className|cva\(|cn\()/.test(line) && /\[(?:#|[0-9]+px|[0-9]+rem|rgb|hsl)/.test(line)) {
      hits.push(`${rel}:${i + 1}: arbitrary value`);
    }
    if (rel.startsWith("apps/") && HEX_IN_APPS.test(line) && !line.trim().startsWith("//")) {
      hits.push(`${rel}:${i + 1}: raw hex in apps`);
    }
  });
}

if (hits.length) {
  console.error("Arbitrary / raw value violations:\n" + hits.map((h) => "  - " + h).join("\n"));
  process.exit(1);
}
console.log(`no-arbitrary-values: ok (scanned ${files.length} files)`);
