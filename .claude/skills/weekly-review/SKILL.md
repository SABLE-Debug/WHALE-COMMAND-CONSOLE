---
name: weekly-review
description: Use on Friday or end-of-week for a structured retrospective. Three sections — what shipped, what slipped, what to drop. Refuses to be a vague journaling exercise. Produces a delta — specific things that change next week based on this week's evidence.
---

# weekly-review

Most "weekly reviews" are journaling. They feel productive and produce nothing. A real review is a delta-generator: it ends with specific changes to the system based on this week's evidence. If the review does not produce a change, it was decoration.

## The contract

Friday evening, 25 minutes. Three sections, in this order:

**1. Shipped.** What landed. Specific. With links or references where applicable.
**2. Slipped.** What was on the stack but did not land. With one-line cause for each.
**3. Drop / change / hold.** The decisions for next week based on the evidence.

Then stop. No "lessons learned" essay. No "I feel..." section.

## Section 1 — Shipped

List every concrete artifact that exists at end-of-week that didn't exist at start-of-week. Be ruthless: an artifact must be **shipped**, not in-progress.

What counts:
- PRs merged, not just opened
- Looms sent, not recorded but unsent
- Posts published, not drafted
- Calls held, not scheduled
- Money received, not invoiced
- Documents signed, not sent

What does not count:
- "Made progress on X."
- "Started Y."
- "Had conversations about Z."

If the shipped list is fewer than 3 items, that is the review's first signal — something structural was wrong this week. Name it in section 3.

## Section 2 — Slipped

Every item from Monday's stack (or the week's stated goals) that did not ship gets one line:

```
[Item name] — [cause]
```

Causes fall into one of five categories. Use these exact words:

- **Underestimated.** The work was bigger than the time budget.
- **Blocked.** External dependency stopped progress.
- **Reprioritized.** A bigger thing came up; this got bumped on purpose.
- **Avoided.** The user could have done it but chose other work that felt easier.
- **Forgot.** Honest oversight.

The category matters. **Avoided** is the only one that requires a specific change in section 3 — the others are normal slippage.

## Section 3 — Drop, change, hold

This is the only section that matters. Three lists.

**Drop.** What stops next week. Things that are no longer worth doing. Each gets one line explaining why.

Examples:
- "Cold DMs to single-location med spas — 0% reply rate for 2 weeks. Drop, refocus on tier 1."
- "Buffer scheduling for Twitter — no engagement, no return on time. Drop the platform."
- "Daily standup with myself — adds friction, no information value. Drop the ritual."

**Change.** What continues but differently. Specific changes to method, timing, or scope.

Examples:
- "Audit Looms — move recording from afternoon (fading) to 9am (sharp). Two attempted this week, one landed. Recording in sharp window may close the gap."
- "Proposal turnaround — drop from 48 hours to 24 hours. Two prospects went cold waiting. Worth testing tighter."

**Hold.** What is working and continues unchanged. Worth naming explicitly — it builds confidence in the system.

Examples:
- "Three-whale daily stack format — held for 4 weeks, ship rate 67%. Continue."
- "AKHARA voice constraints — every post landed in budget. Continue."

If "change" or "drop" is empty for two weeks in a row, the review is becoming decoration. Push harder.

## Inputs you need

Gather in one batch:

1. **The week's stated outcome.** From Monday's `morning-stack` if it exists.
2. **What landed.** The user provides; you do not invent.
3. **What stalled.** The user provides; you ask for the cause for each item.
4. **One thing that surprised the user.** A leading question — surprise is the source of most insight.

Refuse to write the review without the user's actual report. This is not a creative-writing exercise — it is a system-update exercise.

## Output format

```
Week of [Mon] – [Fri]
Stated outcome: [from input]
Actual outcome: [one-line honest assessment vs. stated]

SHIPPED ([count])
- [item] — [link/reference]
- [item] — [link/reference]
- ...

SLIPPED ([count])
- [item] — [cause]
- [item] — [cause]

DROP
- [item] — [why, ≤ 20 words]

CHANGE
- [item] — [from X to Y, why, ≤ 20 words]

HOLD
- [item] — [why it's working, ≤ 15 words]

Surprise of the week:
[1 sentence — the thing that didn't go as expected, good or bad]

Next week's whale candidate:
[The single most leveraged thing for next Monday's stack]
```

## On the "honest outcome" line

The single most important line in the review. Compare actual to stated. Examples:

- **Stated:** 3 Looms shipped. **Actual:** 1. → "Missed by 2/3. Cause: misallocated time to research instead of recording."
- **Stated:** 1 client signed. **Actual:** 1 signed + 1 in proposal. → "On target. Pipeline is healthier than the close suggests."
- **Stated:** Ship the website. **Actual:** Shipped but bugs visible on mobile. → "Half-shipped. Counts as slipped — bugs are part of the deliverable."

Be brutal here. Self-flattery in this line breaks the rest of the review.

## On dropping

Most operators do not drop enough. The system accretes. Posts, rituals, tools, lists, follow-ups — all stay forever unless explicitly removed.

Force one drop every week. Even if nothing is failing, find the one thing that has the least return and remove it. This keeps the system lean.

If you genuinely cannot find one drop in a week, you are either undertaking too little (system not pressured) or not looking honestly. Push back.

## On the cadence question

The weekly review works at weekly cadence. Some users try daily reviews and they become noise. Some users try monthly and the signal arrives too late to change behavior.

Weekly. Friday afternoon, before the weekend opens up. Take it seriously.

## The brutal version

A review that produces a feeling but no change is a luxury. A review that produces a change — even a small one — compounds. Five years of weekly changes equals 260 system updates. That is the deliverable.

The review is the change. Everything else is journaling.
