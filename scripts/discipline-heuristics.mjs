#!/usr/bin/env node
/**
 * Cheap signals for "replace don't layer" / failed-attempt cleanup.
 * Exit 1 on hard hits; print WARN for soft hits.
 * Full judgment still belongs on the PR (docs/PR-DISCIPLINE.md).
 */
import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { basename, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SKIP = new Set(["node_modules", ".next", "dist", ".turbo", ".git"]);

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

function gitDiffNameStatus() {
  try {
    const base = process.env.DISCIPLINE_BASE || "origin/main";
    for (const r of [`${base}...HEAD`, "HEAD~1...HEAD"]) {
      try {
        const out = execSync(`git diff --name-status ${r}`, {
          cwd: ROOT,
          encoding: "utf8",
          stdio: ["ignore", "pipe", "ignore"],
        });
        if (out.trim()) return out;
      } catch {
        /* try next */
      }
    }
  } catch {
    /* no git */
  }
  return "";
}

const hard = [];
const soft = [];

const files = walk(join(ROOT, "packages")).concat(walk(join(ROOT, "apps")));
const byStem = new Map();
for (const f of files) {
  if (!/\.(tsx|ts|jsx|js)$/.test(f)) continue;
  const base = basename(f).replace(/\.(tsx|ts|jsx|js)$/, "");
  const key = base.toLowerCase().replace(/(new|old|v2|v3|copy|tmp|temp|backup|fixed|final)$/i, "");
  if (!byStem.has(key)) byStem.set(key, []);
  byStem.get(key).push(relative(ROOT, f));
}
for (const [stem, list] of byStem) {
  const suspects = list.filter((p) =>
    /(new|old|v2|v3|copy|tmp|temp|backup|fixed|final)/i.test(basename(p))
  );
  if (suspects.length && list.length > 1) {
    hard.push(`twin paths for "${stem}": ${list.join(", ")} — keep one, delete the other`);
  }
}

const diff = gitDiffNameStatus();
for (const line of diff.split(/\n/)) {
  const m = line.match(/^A\s+(.+)$/);
  if (!m) continue;
  const a = m[1];
  if (/(New|Old|Copy|Temp|Backup|Fixed|Final|V2)\./i.test(a) || /[-_](new|old|copy|tmp|temp|v2)\./i.test(a)) {
    hard.push(`added layered filename: ${a}`);
  }
}

let changedFiles = [];
try {
  const out = execSync("git diff --name-only HEAD~1...HEAD 2>/dev/null || true", {
    cwd: ROOT,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  });
  changedFiles = out.split(/\n/).filter(Boolean);
} catch {
  changedFiles = [];
}

const MARKER =
  /\/\/\s*(temp|tmp|fallback|hack|old way|keep for now|do not remove|layered|try\s*2)|\/\*\s*(temp|fallback|old implementation)/i;

for (const rel of changedFiles) {
  if (!/\.(tsx|ts|jsx|js|mjs)$/.test(rel)) continue;
  const abs = join(ROOT, rel);
  if (!existsSync(abs)) continue;
  if (MARKER.test(readFileSync(abs, "utf8"))) {
    soft.push(`${rel}: leftover attempt marker — delete dead paths`);
  }
}

if (soft.length) {
  console.warn("discipline WARN (soft):\n" + soft.map((s) => "  - " + s).join("\n"));
}
if (hard.length) {
  console.error(
    "discipline FAIL (replace-don't-layer heuristics):\n" +
      hard.map((s) => "  - " + s).join("\n") +
      "\n\nSee docs/PR-DISCIPLINE.md"
  );
  process.exit(1);
}
console.log("discipline-heuristics: ok");
