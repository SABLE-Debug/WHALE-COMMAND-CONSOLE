# AKHARA · Skills library

Custom Claude Code skills built for the AKHARA operating system. Each skill is a self-contained markdown file with frontmatter that tells Claude when to invoke it and how to behave once invoked. Each is capped at roughly one thousand words.

Skills do not change Claude's underlying intelligence. They lock in *your* operating principles — voice, taste, decision frame — so Claude applies them consistently across sessions instead of you re-explaining every time. The output looks elite because the principles encoded are elite, not because the model changed.

## Installation

Two ways, depending on scope.

### Per-repo (already done)

These files live in this repo at `.claude/skills/<name>/SKILL.md`. Any Claude Code session opened in this repo will see them.

### Globally available (any session, any repo)

Copy the skills you want to your user-level skills directory:

```bash
mkdir -p ~/.claude/skills
cp -r .claude/skills/<skill-name> ~/.claude/skills/
```

After copy, the skill is available via `/<skill-name>` in any Claude Code session on this machine.

To uninstall: `rm -rf ~/.claude/skills/<skill-name>`.

## Shipped — first batch (7 skills)

| Skill | When it triggers | What it does |
|---|---|---|
| `ship-it` | "ship it", "just do it", "make it work", scope creep | Smallest viable change. No yak-shaving. No premature abstraction. No half-finished work. |
| `senior-dev` | Non-trivial code, schemas, dependencies, design choices | Staff-level judgement — what NOT to build, when an abstraction earns its weight, what future-you will regret. |
| `brutal-review` | Reviews, audits, "tell me what's wrong" | Verdict first. Findings ranked by severity. No padding, no nits, no politeness tax. |
| `house-voice` | Any AKHARA-facing copy — posts, proposals, scripts, emails | Forces the AKHARA voice. Banned-word list. Sentence patterns. Surface-specific rules. |
| `audit-loom` | "Draft a Loom for [prospect]" | Five-beat audit Loom script + shot list, 90–180s, sized for AKHARA outbound. |
| `noise-cancel` | "Clean this up", "make it tight", "kill the fluff" | Three-pass cut. Strips hedges, AI-tells, marketing fluff. Targets 30%+ reduction. |
| `decision-jig` | Stuck between options, "what should I do", visible oscillation | Forces binary. Names the cost of each side. Commits to one. Stops rumination loops. |

## Roadmap — pick what to build next

Each will be the same shape: one markdown file, capped ~1000 words, deep context, real strategy. Tell me which to prioritize.

### Coding / shipping

- `red-team` — Adversarial review. What breaks this? What's the worst case? Who exploits it?
- `code-archeologist` — Deep dive into an unfamiliar codebase. Map before touching.
- `migration-plan` — Schema or framework migration plans, ordered for reversibility.
- `debug-jig` — Forced-bisection debugging protocol. Stops the "let me try this" loop.

### Business / strategy

- `icp-filter` — Given a target list, ruthlessly rank by fit and effort-to-close.
- `proposal` — Tight one-page proposal in AKHARA voice. Auto-fills price floor.
- `pricing-floor` — Refuses underpricing. Calibrates against the "departments not hours" frame.
- `cold-outreach` — First-touch DM/email in house voice. Subject-line discipline.
- `objection-handler` — Library of common prospect objections with house-voice replies.

### Creative / content

- `instagram-post` — Single post in house voice. Hook, claim, number, line break, done.
- `caption-cutter` — Compresses captions to under 30 words without losing the hook.
- `thumbnail-brief` — Generates a Krea/Midjourney prompt for cover art that matches AKHARA palette.
- `script-doctor` — Reviews any video script for pacing, beats, and the one cuttable line.

### Daily ops / max output

- `morning-stack` — Top 3 actions for today. No more, no less. Based on current state.
- `weekly-review` — Friday review template. What shipped, what slipped, what to drop.
- `inbox-triage` — Sorts an inbox dump into reply-now / reply-later / archive / unsubscribe.
- `meeting-prep` — Pre-meeting one-pager: their context, my goal, three questions, one ask.

### Meta / thinking modes

- `wartime` — Switches mode: fewer questions, more decisions, full ownership.
- `peacetime` — Inverse: slow, careful. For architecture and irreversible calls.
- `red-pen` — Reviews your own draft as a hostile critic before you send it.
- `socratic` — Forces the user to answer their own question by walking them through the steps.

### Personal — Cape Town life

- `trade-journal` — Post-trade template for the PPL/The5ers practice. Rules, lessons, drawdown.
- `ppl-debrief` — Weekly school debrief. What was tested, what was missed, what to drill.
- `cape-town-day` — Daily standup template for the Akhanya base. AKHARA / PPL / Prop.

## How to invoke

Three ways:

1. **Typed slash command** — `/<skill-name>` at the start of a message.
   `/ship-it fix the parser bug`
2. **Automatic** — Claude invokes the skill when the description matches your request.
   "this proposal is bloated, clean it up" → triggers `noise-cancel`
3. **Asked explicitly** — `Use the audit-loom skill to draft for Brookside Med.`

## Authoring conventions

If you want to add or modify a skill, the format is:

```markdown
---
name: skill-name
description: When to use this skill. Specific triggers. Single paragraph.
---

# skill-name

[Body, capped at ~1000 words. Deep context, real strategy, anti-patterns, examples, refusal cases.]
```

The `description` field is what Claude reads when deciding whether to invoke. Keep it specific — vague descriptions cause the skill to fire too often or never.

The body is loaded into Claude's context once the skill is invoked. Treat it like Claude's job description for that mode. Be brutal about what to refuse.

## Why these are not on the public internet

The skills above are calibrated to the AKHARA operating system — the voice, the ICP, the agent roster, the price floor, the lifestyle frame. Generic skills would not move the needle. The reason no public library has these is that skills only compound if they encode personal judgement, and personal judgement is not shareable.

If you fork these out of context, the words will work and the calibration will not.

## The brutal version

Skills are not magic. They are a way to make Claude stop drifting from your standards across sessions. The leverage is in shipping the first seven, using them for a week, deleting the ones that do not pay rent, and writing the next ones based on what you actually keep asking for.
