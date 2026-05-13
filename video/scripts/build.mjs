#!/usr/bin/env node
// End-to-end builder: voiceover → render → mux.
// Usage: node scripts/build.mjs <agent-id> [--no-vo]
// Output: video/out/<agent-id>.mp4

import { spawn } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { mkdir, copyFile, readFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const args = process.argv.slice(2);
const agentId = args.find((a) => !a.startsWith("--"));
const skipVo = args.includes("--no-vo");

if (!agentId) {
  console.error("Usage: node scripts/build.mjs <agent-id> [--no-vo]");
  process.exit(1);
}

const run = (cmd, cmdArgs, opts = {}) =>
  new Promise((res, rej) => {
    const p = spawn(cmd, cmdArgs, { stdio: "inherit", cwd: ROOT, ...opts });
    p.on("exit", (code) => (code === 0 ? res() : rej(new Error(`${cmd} exited ${code}`))));
  });

const runCapture = (cmd, cmdArgs) =>
  new Promise((res, rej) => {
    const p = spawn(cmd, cmdArgs, { cwd: ROOT });
    let out = "";
    let err = "";
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (err += d));
    p.on("exit", (code) => (code === 0 ? res(out.trim()) : rej(new Error(err || `${cmd} exited ${code}`))));
  });

const outDir = resolve(ROOT, "out");
await mkdir(outDir, { recursive: true });

const voicePath = resolve(ROOT, "voiceover", `${agentId}.mp3`);
const renderPath = resolve(outDir, `${agentId}-visual.mp4`);
const finalPath = resolve(outDir, `${agentId}.mp4`);

// 1. Voiceover
if (!skipVo) {
  console.log(`\n[1/3] voiceover · ${agentId}`);
  await run("node", ["scripts/voiceover.mjs", agentId]);
} else {
  console.log(`\n[1/3] voiceover · skipped (--no-vo)`);
}

const haveVoice = existsSync(voicePath) && statSync(voicePath).size > 1000;

// 2. Determine duration (frames) — match voiceover length + 2s outro, or default
let durationSec = 14;
if (haveVoice) {
  const probe = await runCapture("ffprobe", [
    "-v",
    "error",
    "-show_entries",
    "format=duration",
    "-of",
    "default=noprint_wrappers=1:nokey=1",
    voicePath,
  ]).catch(() => null);
  if (probe) {
    const d = Number(probe);
    if (Number.isFinite(d) && d > 0) durationSec = Math.ceil(d) + 2;
  }
}
const fps = 30;
const frames = durationSec * fps;
console.log(`[2/3] render · ${frames}f @ ${fps}fps (${durationSec}s)`);

const propsPath = resolve(outDir, `${agentId}.props.json`);
const { AGENTS } = await import("../src/agents.ts").catch(async () => {
  // ts not directly importable; read JSON-like fallback by parsing the TS file
  const tsRaw = await readFile(resolve(ROOT, "src/agents.ts"), "utf8");
  const match = tsRaw.match(/export const AGENTS[^=]*=\s*(\[[\s\S]*?\n\]);/);
  if (!match) throw new Error("Could not parse agents.ts");
  // eslint-disable-next-line no-new-func
  return { AGENTS: new Function(`return ${match[1]}`)() };
});
const agent = AGENTS.find((a) => a.id === agentId);
if (!agent) {
  console.error(`Unknown agent: ${agentId}`);
  process.exit(1);
}

const { writeFile } = await import("node:fs/promises");
await writeFile(
  propsPath,
  JSON.stringify({ agent, voiceoverUrl: null }, null, 2),
);

await run("npx", [
  "remotion",
  "render",
  "src/index.ts",
  `agent-${agentId}`,
  renderPath,
  "--props",
  propsPath,
  "--frames",
  `0-${frames - 1}`,
]);

// 3. Mux audio over video (or copy if no voice)
console.log(`[3/3] mux · ${finalPath}`);
if (haveVoice) {
  await run("ffmpeg", [
    "-y",
    "-i",
    renderPath,
    "-i",
    voicePath,
    "-map",
    "0:v:0",
    "-map",
    "1:a:0",
    "-c:v",
    "copy",
    "-c:a",
    "aac",
    "-b:a",
    "192k",
    "-shortest",
    finalPath,
  ]);
} else {
  await copyFile(renderPath, finalPath);
}

console.log(`\nDone → ${finalPath}`);
