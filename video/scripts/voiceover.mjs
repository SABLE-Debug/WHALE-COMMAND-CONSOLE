#!/usr/bin/env node
// Generates an MP3 voiceover from a text file using ElevenLabs.
// Usage: node scripts/voiceover.mjs <agent-id>
// Reads:  voiceover/scripts/<agent-id>.txt
// Writes: voiceover/<agent-id>.mp3

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const loadEnv = async () => {
  const envPath = resolve(ROOT, ".env");
  if (!existsSync(envPath)) return;
  const raw = await readFile(envPath, "utf8");
  for (const line of raw.split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
};

const agentId = process.argv[2];
if (!agentId) {
  console.error("Usage: node scripts/voiceover.mjs <agent-id>");
  process.exit(1);
}

await loadEnv();

const apiKey = process.env.ELEVENLABS_API_KEY;
const voiceId = process.env.ELEVENLABS_VOICE_ID;
const modelId = process.env.ELEVENLABS_MODEL_ID || "eleven_turbo_v2_5";
const stability = Number(process.env.ELEVENLABS_STABILITY ?? 0.45);
const similarity = Number(process.env.ELEVENLABS_SIMILARITY ?? 0.85);

if (!apiKey || !voiceId) {
  console.error("Missing ELEVENLABS_API_KEY or ELEVENLABS_VOICE_ID — set them in video/.env");
  process.exit(1);
}

const scriptPath = resolve(ROOT, "voiceover/scripts", `${agentId}.txt`);
const outPath = resolve(ROOT, "voiceover", `${agentId}.mp3`);

if (!existsSync(scriptPath)) {
  console.error(`No script at ${scriptPath}`);
  process.exit(1);
}

const text = (await readFile(scriptPath, "utf8")).trim();
if (!text) {
  console.error(`Script is empty: ${scriptPath}`);
  process.exit(1);
}

console.log(`[voiceover] ${agentId} → ${outPath}`);

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

await mkdir(dirname(outPath), { recursive: true });
const buf = Buffer.from(await res.arrayBuffer());
await writeFile(outPath, buf);

console.log(`[voiceover] wrote ${(buf.length / 1024).toFixed(1)} KB`);
