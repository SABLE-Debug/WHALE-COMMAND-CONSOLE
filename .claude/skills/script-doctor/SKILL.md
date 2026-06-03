---
name: script-doctor
description: Use when the user has drafted a video script (Loom, reel, carousel, presentation) and wants it reviewed for pacing, beat structure, hook strength, and cuttable lines. Returns a beat-by-beat diagnosis with one specific cut, one specific add, and a verdict on whether to re-record.
---

# script-doctor

Most video scripts fail in the first ten seconds. Specifically: they fail because the speaker thinks the viewer owes them attention. The viewer does not. The script doctor's job is to make every second earn the next one.

## The five-beat test

Every short-form video (under 3 minutes) must hit five beats. Run the script through this checklist:

**Beat 1 — Hook (0:00–0:05).**
Is there a specific claim, question, or observation in the first five seconds? Not "Hey guys, today we're talking about..." — a concrete statement that creates curiosity.

**Pass:** "Your contact form has been silent since Tuesday."
**Fail:** "Hey everyone, welcome back to the channel."

**Beat 2 — Stakes (0:05–0:15).**
By the 15-second mark, does the viewer know what they lose by not watching? Stakes can be financial, status-based, or curiosity-based.

**Pass:** "That silence is costing you fourteen thousand a month."
**Fail:** "I want to share something I've been thinking about."

**Beat 3 — Substance (0:15 — most of the body).**
The middle. Specific information, math, examples. No abstractions. Every sentence carries something.

**Pass:** "AmSpa's published recovery rate for unanswered inbound is sixty-two percent. At your AOV of two-forty-five..."
**Fail:** "There are a lot of different ways to think about this..."

**Beat 4 — The fix (≈ 75% of runtime).**
A specific, named action or solution. Not "you need to think about this." A thing they can do.

**Pass:** "The Closer answers every inbound in under ninety seconds, twenty-four hours a day."
**Fail:** "There are tools out there that can help."

**Beat 5 — The micro-ask (final 10 seconds).**
One next step. Specific. Reversible. Never "subscribe and like" as the main ask.

**Pass:** "Reply with `send it` and I'll drop the implementation note."
**Fail:** "Anyway, let me know what you think!"

If any beat fails, name it and propose a specific replacement line. Do not generalize.

## Pacing rules

For a 120-second script:
- Hook: 5 seconds.
- Stakes: 10 seconds.
- Substance: 60–75 seconds.
- Fix: 15–20 seconds.
- Ask: 10 seconds.

For a 60-second reel:
- Hook: 3 seconds.
- Stakes: 5 seconds.
- Substance: 30–35 seconds.
- Fix: 10 seconds.
- Ask: 5 seconds.

If the script's pacing is wrong (e.g., 40 seconds of intro, 20 of substance), the cut is the intro. Always.

## Word density

Spoken English averages 150 words per minute at normal pace, 130 wpm at AKHARA's monastic pace. A 120-second script is roughly 260 words. If the draft is over 300 words, it will rush. Cut to fit.

When counting, ignore stage directions and shot notes. Count only spoken words.

## Lines to cut on sight

Strike these from any script:

- "Hey guys" / "Hey everyone" / "What's up"
- "Welcome back to the channel"
- "If you're new here, subscribe"
- "Don't forget to like and follow"
- "Smash that like button"
- "Without further ado"
- "Long story short"
- "At the end of the day"
- "I just wanted to" + anything
- "I hope you found this valuable"
- "Alright, see you next time"

Each one costs 1–3 seconds of attention with zero return. Cut.

## Lines to add on sight

Many scripts lack:

- **A number.** If the script has no specific number, add one. Even an estimate beats nothing.
- **A name.** If the script generalizes, add a specific brand, person, or location.
- **A timestamp.** "Tuesday at 8 PM" lands harder than "the other day."
- **A consequence.** Not "this is important" — "this is costing you X every week."

## The diagnostic output

When invoked, return:

```
Beat audit:
1. Hook (0:00–0:05): PASS / FAIL — [reason]
2. Stakes (0:05–0:15): PASS / FAIL — [reason]
3. Substance: PASS / FAIL — [reason]
4. Fix: PASS / FAIL — [reason]
5. Ask: PASS / FAIL — [reason]

Word count: [actual] / [target for runtime]

Single biggest cut:
[The exact line to remove, with the seconds saved]

Single biggest add:
[The exact line to insert, with the seconds it earns]

Verdict: SHIP / RE-CUT / RE-WRITE
- SHIP: 1 or fewer FAIL beats, word count within 10%
- RE-CUT: 2 FAIL beats OR word count over budget
- RE-WRITE: Hook fails OR 3+ FAIL beats
```

## On energy and delivery (out of scope for this skill)

Script doctor reviews the *script*, not the *performance*. Do not comment on the speaker's energy, eye contact, or pace of delivery. Those are notes for a director, not a doctor.

If the user asks about delivery, refer them to: speak 15% slower than feels natural, pause at every period, never trail off at end of sentences.

## On carousels and multi-slide scripts

Carousel scripts (LinkedIn, Instagram) follow the same five beats, distributed across slides:

- Slide 1: Hook (≤ 12 words).
- Slide 2: Stakes.
- Slides 3–5 (or 3–7): Substance, one beat per slide.
- Penultimate slide: Fix.
- Final slide: Ask.

Each slide must work on its own — a viewer who swipes only the first two slides should still leave with the hook and stakes.

Cap: 7 slides for Instagram, 10 for LinkedIn. Beyond that, the format is wrong — should be a video or a longform post.

## On long-form scripts (3+ minutes)

For scripts longer than 3 minutes, the five-beat structure repeats — each "chapter" follows hook/stakes/substance/fix/ask. Add internal hooks at each major section to keep retention.

Average watch time on a 5-minute video is 90 seconds. The script must work even if 60% of viewers leave by the halfway point. Each chapter should land its key insight independently.

## When to recommend a re-record vs. a re-cut

- **Re-cut** if the issue is structural — wrong order of beats, slow pacing, draggy intro. An editor can fix in post.
- **Re-record** if the hook fails outright. No edit fixes a bad first line.
- **Re-write** if more than three beats fail. The script is broken at the concept level, not the execution level.

## The brutal version

A great script doctor saves more time by cutting than by adding. Most drafts are over-written because the speaker is hedging against the viewer not understanding. The viewer does understand — if you give them the chance.

Cut the throat-clearing. Cut the recap. Cut the "as I was saying." Trust the viewer. Lead with the punch.
