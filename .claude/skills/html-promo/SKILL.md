---
name: html-promo
description: Use when the user wants a promotional video generated from a landing page HTML file. Reads the HTML, extracts headlines, sections, stats, and key claims, and produces a scenes JSON for the LandingPromo Remotion composition. Outputs the JSON in the exact schema the video pipeline expects.
---

# html-promo

This skill is the bridge between "I have a landing page" and "I have an animated promo video." It reads the HTML, identifies the punchy beats, and produces a scenes JSON the LandingPromo Remotion composition consumes directly. The render and mux are handled by `npm run promo` — this skill only produces the JSON.

## The pipeline (so the skill knows where it sits)

```
HTML file → [html-promo skill] → scenes.json → LandingPromo → MP4
```

The skill is step 2. It does not render. It does not call ffmpeg. It outputs a JSON file at `video/scenes/<name>.json`. The user then runs `npm run promo scenes/<name>.json`.

## Inputs you need

Refuse to draft scenes until you have:

1. **Path to the HTML file.** Usually `index.html` at repo root.
2. **Target video length.** Default 45–60 seconds. Cap at 90.
3. **Output name** (optional). Default: derive from HTML filename.

If the HTML is over 4,000 lines (the AKHARA Command Console is), warn the user that you will skim — read only headlines, eyebrow tags, em-bold phrases, stat blocks. Do not attempt to absorb the body prose.

## The scene schema (exact)

Every scenes JSON has this top-level shape:

```json
{
  "meta": {
    "title": "<one-line video title>",
    "subtitle": "<right-corner small text, often a URL>",
    "brand": "<top-left mark, usually AKHARA>"
  },
  "scenes": [ ... ]
}
```

Total scene durations should sum to the target length. Each scene type:

**title** — opening / chapter title with typing effect on the headline.
```json
{ "type": "title", "eyebrow": "/ EYEBROW", "headline": "Headline.", "subhead": "Optional subline.", "duration": 5 }
```

**imessage** — chat-bubble back-and-forth, "you" bubbles are gold, "them" are bone.
```json
{ "type": "imessage", "messages": [{"from":"them","text":"Q?"},{"from":"you","text":"A."}], "duration": 6 }
```

**stat-block** — up to four stats in a grid; supports optional label + headline + caption.
```json
{
  "type": "stat-block",
  "label": "OPTIONAL EYEBROW",
  "headline": "Optional Italic Headline.",
  "stats": [
    { "label": "Pay", "value": "$30K", "suffix": "MIN" }
  ],
  "caption": "Optional italic gold caption.",
  "duration": 7
}
```

**bullet-reveal** — items appear one by one with a gold-left rule.
```json
{ "type": "bullet-reveal", "headline": "Optional headline.", "bullets": ["01 / FIRST", "02 / SECOND"], "duration": 8 }
```

**quote** — large italic pull quote, optionally attributed.
```json
{ "type": "quote", "text": "AKHARA sells departments.", "attribution": "doctrine N°01", "duration": 5 }
```

**outro** — final card with the gold A mark, headline, optional tagline, optional CTA pill.
```json
{ "type": "outro", "headline": "akhara.co", "tagline": "Open for clients.", "cta": "Reply / send the proposal", "duration": 5 }
```

## How to extract beats from HTML

In order of priority, scan for and use:

1. **Page title and meta title.** Source for `meta.title`.
2. **Hero `<h1>` and adjacent `<h2>`.** Source for the opening title scene.
3. **Section eyebrows.** Class hints: `section-eyebrow`, `picture-meta`, `stack-when`, `emp-tag`. Become title scene `eyebrow` fields.
4. **Section headlines.** `<h2>` and `<h3>` inside major sections. Become the body of title/stat-block scenes.
5. **Em-bold phrases.** `<em>`, `<strong>`, `class="em-bold"`, `class="em-gold"`. These are quote candidates.
6. **Stat blocks.** `class="emp-stat"`, `class="stack-row"`, `class="picture-num"`. Stats grids translate directly to stat-block scenes.
7. **Ordered or numbered lists.** Become bullet-reveal scenes.
8. **Italic asides in `class="parens"` or `<i>`.** Often quotable captions.
9. **Pricing or numbers in plain text.** Anything with `$`, `%`, time units, or counts.

Skip: long prose paragraphs, navigation, footers, FAQ blocks, the body of operating checklists, the legal block.

## The structural beats of a good 60-second promo

For a 60-second promo, plan roughly:

1. **0–5s** — `title` scene: brand mark + tagline.
2. **5–13s** — `imessage` scene: 4 bubbles establishing the hook ("What do you sell?" / "Departments.").
3. **13–22s** — `stat-block` or `bullet-reveal`: the core proof — ICP rank, departments list, or revenue math.
4. **22–32s** — `bullet-reveal`: the menu — name the 4–5 departments.
5. **32–37s** — `quote`: the doctrine line that sticks.
6. **37–48s** — `stat-block`: the math (cost, replaced labor, payback).
7. **48–60s** — `outro`: domain + CTA.

Adjust scene count and durations to hit the target length. Never produce a scene under 3 seconds (too fast to read). Never over 12 (too slow to hold).

## Anti-patterns

Refuse to:

- Generate scenes from prose paragraphs without specific claims. Promo videos do not work on vibes — every scene needs a name, number, or claim.
- Include more than 8 scenes in a 60-second promo. Density is the enemy of recall.
- Use the same scene type three times in a row. Vary the rhythm.
- Generate a scene whose text is over 80 characters in a stat-block label or quote. The visual budget caps text length.

## Output format

When invoked, return:

1. The scenes JSON (valid JSON, no comments) ready to save at `video/scenes/<name>.json`.
2. Underneath the JSON, a one-line `WRITE_TO:` directive with the suggested path.
3. Underneath that, a one-line `RUN:` directive with the exact npm command.

Example:

```
{ "meta": {...}, "scenes": [...] }

WRITE_TO: video/scenes/akhara-promo.json
RUN: cd video && npm run promo scenes/akhara-promo.json
```

If a voiceover script is also useful, suggest a script at `video/voiceover/scripts/promo-<name>.txt` and provide a draft (60–90 spoken words, AKHARA voice, see `house-voice` skill).

## Calibration to AKHARA

For the AKHARA Command Console specifically (`index.html`), the load-bearing phrases are well-known:

- "Three whales beat thirty minnows."
- "AKHARA sells departments."
- "The lifetime niche."
- "Catches structural drift before it ships."
- "Memory that does not leave when staff do."
- "Akhanya · Cape Town · PPL + AKHARA + Prop"
- "$292/MO mid-load, $332/MO ceiling. Sub-1% of MRR."

When generating from this file, prefer these phrases for the `quote` and `outro` scenes. Pair stats with the actual published numbers (ICP tier pay bands, agent stats).

## Refusals

Refuse to generate a promo from:

- An HTML file with no headlines or structured sections — there is nothing to promo.
- An HTML file representing someone else's brand without confirmation that the user has permission to promo it.
- A request to generate a promo "in the style of" a named competitor's video — produce in AKHARA style or decline.

## The brutal version

A promo video is a 60-second commercial for a thing that already exists. The HTML is the thing. The skill's job is to pick the 6–8 moments from the HTML that sell themselves, arrange them with rhythm, and hand the JSON to the renderer.

If the HTML is bad, the promo will be bad. The skill cannot save weak source. Fix the HTML first if needed.
