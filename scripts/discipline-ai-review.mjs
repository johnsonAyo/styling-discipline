#!/usr/bin/env node
/**
 * AI discipline gate — same Gemini setup as Ralph.
 *
 * Env (Ralph-compatible):
 *   GEMINI_API_KEY   required (falls back to GOOGLE_API_KEY)
 *   GEMINI_MODEL     optional (default: gemini-flash-latest)
 *   DISCIPLINE_BASE  git ref to diff against
 *
 * Local: if unset, loads from Ralph apps/api/.env (same file Ralph uses).
 * CI: set secret GEMINI_API_KEY (same name as Ralph).
 *
 * API: POST https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent
 * Header: x-goog-api-key (exact Ralph pattern)
 */
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models";
const DEFAULT_MODEL = "gemini-flash-latest";

const RALPH_ENV_CANDIDATES = [
  process.env.RALPH_API_ENV,
  join(homedir(), "Desktop/AI Projects/ralph/apps/api/.env"),
  "/Users/johnsonafuye/Desktop/AI Projects/ralph/apps/api/.env",
  join(ROOT, "../ralph/apps/api/.env"),
].filter(Boolean);

function loadEnvFile(path) {
  if (!path || !existsSync(path)) return {};
  const out = {};
  for (const line of readFileSync(path, "utf8").split(/\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i < 0) continue;
    const k = t.slice(0, i).trim();
    let v = t.slice(i + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    out[k] = v;
  }
  return out;
}

function resolveGeminiConfig() {
  let fileEnv = {};
  if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_API_KEY) {
    for (const p of RALPH_ENV_CANDIDATES) {
      fileEnv = loadEnvFile(p);
      if (fileEnv.GEMINI_API_KEY || fileEnv.GOOGLE_API_KEY) {
        process.env.__DISCIPLINE_ENV_SOURCE = p;
        break;
      }
    }
    // local project .env too
    if (!fileEnv.GEMINI_API_KEY && !fileEnv.GOOGLE_API_KEY) {
      fileEnv = { ...fileEnv, ...loadEnvFile(join(ROOT, ".env")) };
      fileEnv = { ...fileEnv, ...loadEnvFile(join(ROOT, "apps/web/.env")) };
    }
  }

  const apiKey =
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    fileEnv.GEMINI_API_KEY ||
    fileEnv.GOOGLE_API_KEY;

  const model =
    process.env.GEMINI_MODEL ||
    fileEnv.GEMINI_MODEL ||
    DEFAULT_MODEL;

  return { apiKey, model };
}

function sh(cmd) {
  return execSync(cmd, {
    cwd: ROOT,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 20 * 1024 * 1024,
  });
}

function resolveBase() {
  if (process.env.DISCIPLINE_BASE) return process.env.DISCIPLINE_BASE;
  if (process.env.GITHUB_BASE_REF) return `origin/${process.env.GITHUB_BASE_REF}`;
  return "origin/main";
}

function getDiff() {
  const base = resolveBase();
  for (const cmd of [
    `git diff --no-color ${base}...HEAD`,
    "git diff --no-color HEAD~1...HEAD",
    "git diff --no-color --cached",
    "git diff --no-color",
  ]) {
    try {
      const out = sh(cmd);
      if (out.trim()) return { cmd, diff: out };
    } catch {
      /* next */
    }
  }
  return { cmd: null, diff: "" };
}

function getNameStatus() {
  try {
    return sh(`git diff --name-status ${resolveBase()}...HEAD`);
  } catch {
    try {
      return sh("git diff --name-status HEAD~1...HEAD");
    } catch {
      return "";
    }
  }
}

const SYSTEM = `You are a strict CI gate. Enforce "replace, don't layer" only.
Return one JSON object, no markdown fences.`;

const RULES = `FAIL if any apply:
1. LAYERING — parallel paths (Foo+FooNew, *-v2, wrappers keeping broken code, commented-out old impl left beside new).
2. FAILED ATTEMPTS — // temp, // fallback, // old way, dead duplicate helpers from this diff.
3. SYMPTOM PATCH — stacked if/else on a broken path without removing the broken logic.
PASS only if one live path remains that solves the task.
Empty/docs-only diffs with no layering → PASS.

JSON shape:
{"verdict":"PASS"|"FAIL","summary":"one sentence","violations":[{"rule":"layering|failed-attempts|symptom-patch","path":"file","evidence":"why"}],"required_actions":["steps if FAIL else []]"}`;

function parseVerdict(text) {
  const cleaned = text
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/, "");
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start < 0 || end < 0) throw new Error("no JSON in model response");
  return JSON.parse(cleaned.slice(start, end + 1));
}

async function callGemini({ apiKey, model }, userText) {
  const url = `${GEMINI_BASE_URL}/${model}:generateContent`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM }] },
      contents: [{ role: "user", parts: [{ text: userText }] }],
      generationConfig: {
        temperature: 0,
        responseMimeType: "application/json",
        maxOutputTokens: 2048,
      },
    }),
  });
  if (!res.ok) {
    throw new Error(`gemini ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("") || "";
  if (!text) throw new Error("gemini empty response");
  return text;
}

const { apiKey, model } = resolveGeminiConfig();
if (!apiKey) {
  console.error(
    "discipline-ai: missing GEMINI_API_KEY (or GOOGLE_API_KEY).\n" +
      "Ralph setup: set GEMINI_API_KEY in env, or keep it in ralph/apps/api/.env (auto-loaded locally).\n" +
      "CI: add repository secret GEMINI_API_KEY."
  );
  process.exit(2);
}

const { cmd, diff } = getDiff();
const names = getNameStatus();

if (!diff.trim()) {
  console.log("discipline-ai: empty diff → PASS");
  process.exit(0);
}

const MAX = 180_000;
const clipped = diff.length > MAX ? diff.slice(0, MAX) + "\n\n[diff truncated]\n" : diff;
const user = `${RULES}

Changed files:
${names || "(unavailable)"}

Diff (${cmd || "auto"}):
\`\`\`
${clipped}
\`\`\`
`;

const src = process.env.__DISCIPLINE_ENV_SOURCE || "env";
console.log(`discipline-ai: gemini/${model} (${clipped.length} chars, key from ${src})`);

let raw;
try {
  raw = await callGemini({ apiKey, model }, user);
} catch (err) {
  console.error("discipline-ai: gemini error:", err.message || err);
  process.exit(2);
}

let result;
try {
  result = parseVerdict(raw);
} catch (err) {
  console.error("discipline-ai: bad JSON from model:\n", raw);
  process.exit(2);
}

const outDir = join(ROOT, ".discipline");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "last-review.json"), JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));

const verdict = String(result.verdict || "").toUpperCase();
if (verdict !== "PASS") {
  console.error("\ndiscipline-ai: FAIL — replace-don't-layer violated. Blocked.");
  const actions = result.required_actions || [];
  for (const a of actions) console.error("  -", a);
  process.exit(1);
}
console.log("discipline-ai: PASS");
