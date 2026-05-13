---
name: thumbnail-brief
description: Use when the user needs a cover image or thumbnail and wants a prompt for Krea, Midjourney, or Runway. Produces a precise prompt locked to the AKHARA palette and aesthetic — void black, bone, gold, monastic, serif. Refuses neon, fantasy, generic stock-style outputs.
---

# thumbnail-brief

A thumbnail is the entire post for 80% of viewers. They never see the caption. They see the thumbnail and decide. The job of this skill is to produce a prompt that returns a usable image on the first or second generation, not the fifteenth.

## The fixed visual grammar

These are non-negotiable. Every AKHARA visual must hit all of them:

- **Background:** void black (`#050404` or near-black with subtle deep-navy undertone). Never pure black, never grey, never white-as-primary.
- **Primary text/accent color:** bone (`#F2EDE4`) for text, gold (`#C9A84C`) for accent. One accent per image.
- **Lighting:** single-source, off-camera, warm. Suggests a window in an unfurnished cathedral, late afternoon. Never ring light, never neon, never multi-source.
- **Mood:** monastic. Empty space, quiet, deliberate. Never busy, never cluttered, never "social media energy."
- **Typography (when present):** Fraunces (serif italic, 300 weight) for headlines, Geist Mono uppercase for tags. One typeface per image.
- **People (when present):** silhouetted, partial, or back-turned. Never face-front grinning. Never stock photo people.
- **Texture:** matte. Slight film grain acceptable. Never glossy, never plastic-y, never overly clean digital.

## The prompt structure

For Krea / Midjourney / Runway image generation, produce prompts in this order:

```
[Subject] [in/with/at] [setting], [lighting], [mood/composition keywords], [palette keywords], [style keywords], [aspect ratio + quality tags]
```

Each segment is short. Specific nouns over adjectives. Never describe what NOT to include — generation models do not handle negatives well.

## Approved subject library

Subjects that fit the AKHARA aesthetic — start from these, vary as needed:

- An empty operating console in a darkened room, gold light from one window
- A single serif letter `A` carved in dark stone, gold leaf inlay
- An open ledger on a bone-white linen tablecloth, gold pen beside it
- A figure in dark wool, back to camera, looking at a wall of documents
- An old-world brass key on a void surface, single warm light
- A column of incense smoke rising in a dark chamber, gold-lit from below
- A staircase of dark marble disappearing into shadow, single bone-colored runner
- A leather-bound book open to a page of serif typography, partial gold border
- A high-ceilinged empty room with a single low bench, light falling on the bench
- A monastery cloister at dusk, void shadows, gold trim on the stonework

Avoid: faces, modern offices, computers visible, "tech aesthetics," graffiti, urban scenes, water (unless very dark), forests, fire as primary subject.

## Worked example prompts

**For a post titled "Three whales beat thirty minnows":**

```
Three large stone whales carved into a dark cathedral wall in profile,
single warm gold light from a high arched window,
deep shadow, matte stone texture, void-black background,
bone-colored highlights, gold leaf accents on the whale eyes,
Renaissance fresco style, low-saturation,
9:16 portrait, 4k, film grain
```

**For "The Vault":**

```
A heavy bronze vault door in a dark monastic chamber,
single overhead warm light, gold trim on the door wheel,
void-black floor and walls, bone-colored caption tag in the corner,
shallow depth of field, museum lighting,
1:1 square, 4k, film grain
```

**For an agent intro thumbnail (the Scout):**

```
A figure in long dark wool coat, back to camera, holding a brass magnifying glass,
standing in an interrogation room with bone-colored documents pinned to the wall,
single warm light from above, void shadows, gold magnifier rim,
cinematic still, 35mm film aesthetic, low contrast,
9:16 portrait, 4k, film grain
```

## What to refuse

Refuse to generate prompts for:

- **Neon, cyberpunk, "AI aesthetic" lighting.** Off-brand.
- **Faces of real people you cannot verify consent for.** Use silhouettes or partial figures.
- **Logos of other companies.** Trademark risk and irrelevant.
- **Anything explicitly "in the style of" a living artist** without their permission. Use art movements or eras instead ("Renaissance fresco style," "Dutch Golden Age portrait," "Caravaggio chiaroscuro").
- **Cartoonish or 3D-render aesthetics.** AKHARA is photographic, not animated.

## Aspect ratios by destination

- **Instagram feed:** 1:1 (square) or 4:5 (portrait, better reach).
- **Instagram story / reel cover:** 9:16.
- **LinkedIn post:** 1.91:1 (landscape) or 1:1.
- **Twitter/X header:** 3:1.
- **YouTube thumbnail:** 16:9.
- **Krea/Midjourney V6+ default:** match the destination, do not upscale.

## Iteration guidance

When the first generation misses:

- **Too bright?** Add "deep shadow, low-key lighting, void background."
- **Too colorful?** Add "monochromatic, desaturated, low-saturation palette."
- **Subject too central?** Add "negative space, asymmetric composition, subject in left third."
- **Looks AI-generated?** Add "film grain, 35mm, analog photograph, slight motion blur."
- **Faces look uncanny?** Replace face with silhouette or remove face entirely.
- **Wrong era feel?** Specify the era: "1920s," "Renaissance," "Edo period," "Victorian."

Limit yourself to three iterations on a single prompt. If iteration four still misses, the concept is wrong — change the subject, not the modifiers.

## Output format

When the user invokes this skill, return:

```
Concept (1 sentence):
[The image idea, briefly]

Prompt (paste into Krea/Midjourney/Runway):
[The structured prompt]

Aspect ratio:
[match destination]

Iteration notes (if first gen misses):
- [adjustment 1]
- [adjustment 2]
```

## The brutal version

A great thumbnail is not the highest-effort generation. It is the one that fits the grammar so tightly that any viewer recognizes AKHARA before they read the caption. The grammar is the brand. Hold it on every image, every post, every time.

Consistency beats variety. Always.
