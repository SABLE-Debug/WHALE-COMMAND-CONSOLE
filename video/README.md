# AKHARA · Video pipeline

Programmatic agent showcase videos. Remotion for the visual layer, ElevenLabs for voiceover, ffmpeg for the final mux.

## One-time setup

```bash
cd video
npm install                 # installs Remotion + deps (~200MB)
cp .env.example .env        # then paste your ElevenLabs key + voice ID
```

You also need `ffmpeg` and `ffprobe` on your PATH (`brew install ffmpeg` on macOS).

## Make an agent intro video

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

## Make a landing-page promo video

Promo videos are generated from a **scenes JSON file** that describes the beats — title cards, iMessage bubbles, stat blocks, bullet reveals, pull quotes, outro. The Remotion `LandingPromo` composition renders them.

```bash
npm run promo                                # uses scenes/akhara-promo.json
npm run promo scenes/my-other-promo.json     # custom scenes file
npm run promo -- --no-vo                     # skip voiceover even if a script exists
```

Output: `out/promo-<name>.mp4`.

### Generating the scenes JSON from HTML

Use the `html-promo` Claude skill — it reads an HTML file (like `index.html`) and writes the scenes JSON in the schema `LandingPromo` expects. See `.claude/skills/html-promo/SKILL.md` for the full instructions and scene schema.

Pattern: open Claude Code in this repo, run `/html-promo`, point it at the HTML, and it writes the JSON. Then `npm run promo`.

### Voiceover for promos

Put the script at `voiceover/scripts/promo-<name>.txt` (e.g. `promo-akhara-promo.txt` matches `scenes/akhara-promo.json`). The build script picks it up automatically.

A starter script for the AKHARA promo is pre-written at `voiceover/scripts/promo-akhara-promo.txt`.

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
    Root.tsx                # registers all compositions
    AgentIntro.tsx          # agent showcase composition
    LandingPromo.tsx        # landing-page promo composition (6 scene types)
    agents.ts               # all 10 agents' data
  scripts/
    voiceover.mjs           # ElevenLabs API caller
    build.mjs               # agent-intro pipeline (voiceover -> render -> mux)
    build-promo.mjs         # promo pipeline (scenes JSON -> render -> mux)
  scenes/
    akhara-promo.json       # default promo scenes for the Command Console
    <name>.json             # custom promos
  voiceover/
    scripts/<id>.txt        # agent voiceover scripts
    scripts/promo-<n>.txt   # promo voiceover scripts (optional)
    *.mp3                   # generated audio (gitignored)
  out/<id>.mp4              # final videos (gitignored)
```

## Scene types (LandingPromo)

The `LandingPromo` composition supports six scene types out of the box:

- `title` — typing-effect headline with optional eyebrow and subhead
- `imessage` — chat bubbles appearing one by one ("you" = gold, "them" = bone)
- `stat-block` — up to 4 stats in a grid with optional label, headline, caption
- `bullet-reveal` — bullets appear one at a time with gold-left rule
- `quote` — large italic pull quote, optionally attributed
- `outro` — gold "A" mark + headline + tagline + CTA pill

Full schema reference in `.claude/skills/html-promo/SKILL.md`.

## Adding b-roll from Krea / Runway

Drop your generated clips into `video/broll/<agent-id>/` and reference them from the AgentIntro scene with Remotion's `<Video src={staticFile('broll/scout/clip01.mp4')} />`. Easiest pattern: layer them as muted background under the existing UI, with `opacity: 0.25` and a void overlay.
