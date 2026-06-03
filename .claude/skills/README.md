# AKHARA · Skills library

Custom Claude Code skills built for the AKHARA operating system. Each skill is a self-contained markdown file with frontmatter that tells Claude when to invoke it and how to behave once invoked. Each is capped at roughly one thousand words.

Skills do not change Claude's underlying intelligence, usage limits, or pricing. They lock in *your* operating principles — voice, taste, decision frame, what to refuse — so Claude applies them consistently across sessions instead of you re-explaining every time. The output looks elite because the principles encoded are elite, not because the model changed.

## Installation

### Per-repo (already done)

These files live in this repo at `.claude/skills/<name>/SKILL.md`. Any Claude Code session opened in this repo sees them automatically.

### Globally available (any session, any repo on your machine)

From the repo root, run:

```bash
bash .claude/install.sh
```

This copies every skill in `.claude/skills/` to `~/.claude/skills/` on your machine. After install, invoke any skill via `/<skill-name>` in any Claude Code session.

To uninstall one: `rm -rf ~/.claude/skills/<skill-name>`
To uninstall all: `rm -rf ~/.claude/skills`
To force reinstall: `rm -rf ~/.claude/skills && bash .claude/install.sh`

## The full library — 31 skills

### Coding / execution (6)

| Skill | Triggers |
|---|---|
| `ship-it` | "ship it", "just do it", scope creep — brutalist execution |
| `senior-dev` | non-trivial code, schemas, dependencies — staff-level judgement |
| `code-archeologist` | unfamiliar codebase, "how does this work?" — map before touching |
| `migration-plan` | schema/framework/dependency migrations — ordered, reversible |
| `debug-jig` | stuck bugs, "weird" or "intermittent" — forced bisection |
| `red-team` | "what could go wrong?", security review — adversarial threat-modeling |

### Review / critique (2)

| Skill | Triggers |
|---|---|
| `brutal-review` | "review this", audits — verdict-first, severity-ranked |
| `red-pen` | before sending anything outbound — hostile-reader self-review |

### Business / strategy (5)

| Skill | Triggers |
|---|---|
| `icp-filter` | prospect lists — rank ruthlessly by AKHARA ICP |
| `proposal` | qualified prospect needs a proposal — one page, AKHARA price floor |
| `pricing-floor` | quoting, scoping, discounting — holds the floor, refuses freelance pricing |
| `cold-outreach` | first-touch DM/email — three-line structure, banned openers |
| `objection-handler` | prospect objections — canonical AKHARA-voice responses |

### Creative / content (5)

| Skill | Triggers |
|---|---|
| `house-voice` | any AKHARA-facing copy — banned-word list, surface-specific rules |
| `audit-loom` | drafting a Loom for a prospect — five-beat 90–180s script + shot list |
| `instagram-post` | single IG post — 30-word cap, three tags, AKHARA voice |
| `caption-cutter` | long caption needs compressing — three-pass cut |
| `thumbnail-brief` | Krea/Midjourney prompts — locked to void/gold/serif aesthetic |
| `script-doctor` | review any video script — five-beat audit, cuttable lines |

### Daily ops (4)

| Skill | Triggers |
|---|---|
| `morning-stack` | "what should I work on today?" — three actions, leverage-ranked |
| `weekly-review` | Friday review — what shipped, what slipped, what to drop |
| `inbox-triage` | inbox dump — four buckets, drafts reply-now responses |
| `meeting-prep` | 24h before an important meeting — one-page brief with the ask |

### Filter / cut (1)

| Skill | Triggers |
|---|---|
| `noise-cancel` | "clean this up", "make it tight" — strips fluff, AI-tells, hedges |

### Meta / thinking modes (5)

| Skill | Triggers |
|---|---|
| `decision-jig` | stuck between options — forces a binary call |
| `wartime` | sprints, deal closes, demo prep — high-decision, low-question mode |
| `peacetime` | architecture, contracts, irreversible calls — careful, multi-option |
| `socratic` | judgement questions in disguise — coaches via 3 questions |
| `red-pen` | (listed above under review) |

### Personal — Cape Town life (3)

| Skill | Triggers |
|---|---|
| `cape-town-day` | morning standup — three-track plan (AKHARA, PPL, Prop) |
| `trade-journal` | post-trade reflection — rule-check structure |
| `ppl-debrief` | post-PPL session — debrief produces the next drill |

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

Word budget per skill: under 1020 words in the body. This forces focus and keeps the load on Claude's context window small enough that multiple skills can compose.

## Skills that need your calibration

Three skills include `[TODO — operator calibration]` blocks that need your actual numbers/rules once. They work without calibration but will be more useful once filled:

- `pricing-floor` — confirm or update the floor prices once you've validated them.
- `trade-journal` — fill in your actual trading system rules (setups, sizing, exit rules).
- `ppl-debrief` — fill in the actual PPL curriculum name, current module, and coach's recurring notes.

Open the file, find the TODO, edit once, save. Done.

## What's not yet in the library (deferred to v2)

If after a week of use you find a recurring pattern not covered, add it. Candidates I considered and deferred:

- `case-study` — turning a closed engagement into a public case study
- `referral-ask` — the language for asking a happy client for an intro
- `firing-client` — how to end an engagement that's draining the operator
- `team-onboarding` — when AKHARA grows past solo and adds a teammate
- `pricing-raise` — the language for raising prices on existing clients
- `loom-edit` — post-recording edit notes (vs `script-doctor` which is pre-record)

These are real but speculative. Build them only after the first month confirms the gap.

## Why these are not on the public internet

The skills above are calibrated to the AKHARA operating system — the voice, the ICP, the agent roster, the price floor, the lifestyle frame, the Cape Town base. Generic skills would not move the needle. The reason no public library has these is that skills only compound if they encode personal judgement, and personal judgement is not shareable.

If you fork these out of context, the words will work and the calibration will not.

## The brutal version

Skills are not magic. They are a way to make Claude stop drifting from your standards across sessions. The leverage is in shipping the first batch, using them for a week, deleting the ones that do not pay rent, calibrating the ones that do, and writing the next batch based on what you actually keep asking for.

Install. Use. Delete. Calibrate. Repeat.
