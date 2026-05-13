# AKHARA · Video pipeline

Programmatic agent showcase videos. Remotion for the visual layer, ElevenLabs for voiceover, ffmpeg for the final mux.

## One-time setup

```bash
cd video
npm install                 # installs Remotion + deps (~200MB)
cp .env.example .env        # then paste your ElevenLabs key + voice ID
```

You also need `ffmpeg` and `ffprobe` on your PATH (`brew install ffmpeg` on macOS).

## Make a video

```bash
npm run video scout         # voiceover -> render -> mux -> out/scout.mp4
```

Available agent IDs: `architect`, `closer`, `operator`, `strategist`, `conductor`, `scout`, `editor`, `producer`, `voice`, `vault`.

### Skipping the voiceover

If you want to render the visuals only (no API call):

```bash
npm run video scout -- --no-vo
```

The output will still be `out/scout.mp4` but silent.

## Voiceover scripts

Plain text per agent at `voiceover/scripts/<id>.txt`. Edit freely. Two are pre-written (`scout`, `architect`); add the rest as you go.

The build script auto-sizes the video duration to match the voiceover length plus a two-second outro, so longer scripts produce longer videos.

## Iterating on the visuals

```bash
npm run studio              # Remotion Studio at localhost:3000 — live preview
```

Pick `agent-scout` (or any other) from the sidebar. Edit `src/AgentIntro.tsx` and the preview hot-reloads.

## Style tokens

Match the Command Console palette:

- `--void`  `#050404`
- `--bone`  `#F2EDE4`
- `--gold`  `#C9A84C`
- Serif: Fraunces (italic 300 for headlines)
- Mono:  Geist Mono (uppercase, 2–6px letter-spacing for tags)

## File map

```
video/
  package.json              # deps + npm scripts
  .env.example              # ElevenLabs config template
  .env                      # your real keys (gitignored)
  remotion.config.ts        # Remotion encoder settings
  tsconfig.json
  src/
    index.ts                # registers RemotionRoot
    Root.tsx                # one composition per agent
    AgentIntro.tsx          # the reusable scene
    agents.ts               # all 10 agents' data
  scripts/
    voiceover.mjs           # ElevenLabs API caller
    build.mjs               # voiceover -> render -> mux orchestrator
  voiceover/
    scripts/<id>.txt        # voiceover scripts (edit these)
    <id>.mp3                # generated audio (gitignored)
  out/<id>.mp4              # final videos (gitignored)
```

## Adding b-roll from Krea / Runway

Drop your generated clips into `video/broll/<agent-id>/` and reference them from the AgentIntro scene with Remotion's `<Video src={staticFile('broll/scout/clip01.mp4')} />`. Easiest pattern: layer them as muted background under the existing UI, with `opacity: 0.25` and a void overlay.
