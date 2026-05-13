#!/usr/bin/env node
// Builds a landing-promo video from a scenes JSON file.
// Usage:
//   node scripts/build-promo.mjs                          # uses scenes/akhara-promo.json
//   node scripts/build-promo.mjs scenes/my-promo.json     # custom scenes file
//   node scripts/build-promo.mjs --no-vo                  # skip voiceover even if script exists
//
// Voiceover (optional): place a script at voiceover/scripts/promo-<name>.txt
// where <name> is the scenes file basename (e.g., promo-akhara-promo.txt).
//
// Output: out/promo-<name>.mp4

import { spawn } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { mkdir, writeFile, readFile, copyFile } from "node:fs/promises";
import { resolve, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const args = process.argv.slice(2);
const skipVo = args.includes("--no-vo");
const scenesArg = args.find((a) => !a.startsWith("--"));
const scenesRelPath = scenesArg ?? "scenes/akhara-promo.json";
const scenesAbsPath = resolve(ROOT, scenesRelPath);

if (!existsSync(scenesAbsPath)) {
  console.error(`No scenes file at ${scenesAbsPath}`);
  process.exit(1);
}

const name = basename(scenesAbsPath, ".json");
const voiceoverScriptPath = resolve(ROOT, "voiceover/scripts", `promo-${name}.txt`);
const voicePath = resolve(ROOT, "voiceover", `promo-${name}.mp3`);
const outDir = resolve(ROOT, "out");
const renderPath = resolve(outDir, `promo-${name}-visual.mp4`);
const finalPath = resolve(outDir, `promo-${name}.mp4`);

await mkdir(outDir, { recursive: true });

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

const loadEnv = async () => {
  const envPath = resolve(ROOT, ".env");
  if (!existsSync(envPath)) return;
  const raw = await readFile(envPath, "utf8");
  for (const line of raw.split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
};

// 1. Optional voiceover — only if script file exists and we haven't been told to skip
let haveVoice = false;
if (!skipVo && existsSync(voiceoverScriptPath)) {
  console.log(`\n[1/3] voiceover · promo-${name}`);
  await loadEnv();
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const voiceId = process.env.ELEVENLABS_VOICE_ID;
  if (!apiKey || !voiceId) {
    console.log("       skipped — ELEVENLABS_API_KEY or ELEVENLABS_VOICE_ID not set in .env");
  } else {
    const modelId = process.env.ELEVENLABS_MODEL_ID || "eleven_turbo_v2_5";
    const stability = Number(process.env.ELEVENLABS_STABILITY ?? 0.45);
    const similarity = Number(process.env.ELEVENLABS_SIMILARITY ?? 0.85);
    const text = (await readFile(voiceoverScriptPath, "utf8")).trim();
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify({
        text,
        model_id: modelId,
        voice_settings: { stability, similarity_boost: similarity },
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error(`ElevenLabs ${res.status}: ${body.slice(0, 400)}`);
      process.exit(1);
    }
    await mkdir(dirname(voicePath), { recursive: true });
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(voicePath, buf);
    console.log(`       wrote ${(buf.length / 1024).toFixed(1)} KB`);
    haveVoice = true;
  }
} else {
  console.log(`\n[1/3] voiceover · skipped (${skipVo ? "--no-vo flag" : "no script at " + voiceoverScriptPath})`);
}

if (existsSync(voicePath) && statSync(voicePath).size > 1000) {
  haveVoice = true;
}

// 2. Render
console.log(`\n[2/3] render · LandingPromo from ${scenesRelPath}`);
await run("npx", [
  "remotion",
  "render",
  "src/index.ts",
  "LandingPromo",
  renderPath,
  "--props",
  scenesAbsPath,
]);

// 3. Mux audio if present
console.log(`\n[3/3] mux · ${finalPath}`);
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
