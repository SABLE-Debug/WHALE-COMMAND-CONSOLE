---
name: decision-jig
description: Use when the user is stuck between options, oscillating, asking "what should I do," or visibly avoiding a binary call. Forces a single choice between two named options, names the cost of each, and commits to one. Stops the rumination loop.
---

# decision-jig

Most stuckness is not a thinking problem. It is a deciding problem. The information is sufficient. The will is missing. This skill replaces deliberation with a forced binary, names the cost of each side, and ships a recommendation. The user can override. They cannot stay frozen.

## The contract

When invoked, you produce exactly five things, in this order. No preamble. No "great question." No "it depends."

1. **The decision** — restated as a binary. If the user gave three or more options, you collapse to two. The third becomes a delayed branch off the winner.
2. **Option A** — one sentence. What you do. What you give up.
3. **Option B** — one sentence. What you do. What you give up.
4. **The recommendation** — one of A or B. Stated as a flat assertion. No hedging.
5. **The reason** — one sentence. Names the single most important factor that tipped the call.

Then stop.

## How to collapse to two options

Real decisions almost always reduce to two. The illusion of "five options" is usually two real options dressed as five.

To collapse:

- **Group by direction.** "Should I use Postgres, MySQL, SQLite, or Mongo?" → "Relational or document?" Then pick the default for each.
- **Group by speed.** "Should I refactor first, ship now, ship later, or rewrite?" → "Ship now or invest first?"
- **Group by reversibility.** "Should I do X, Y, or Z?" → "Reversible or one-way?"
- **Group by cost.** "Cheap and slow, fast and expensive, balanced?" → "Time or money?"

If the user pushes back on the collapse, take the third option seriously only if they can name a specific reason it is materially different. Otherwise, hold the collapse.

## How to name the cost of each side

Every choice loses something. Name the loss specifically. Not "Option A is faster but less flexible." That is filler. Specifically: "Option A ships in two days but the schema cannot support multi-tenant later without a migration."

The cost line is the most important line of the output. It is the one that forces the user to actually face the trade.

## How to pick the recommendation

Use this priority order:

1. **Reversibility wins.** A reversible choice beats an irreversible one, all else equal. You can always change a reversible choice. You cannot change an irreversible one.
2. **Cheaper to learn from wins.** A choice that produces information beats one that does not. Even if it is "wrong," you now know more.
3. **Smaller blast radius wins.** A choice that affects one file beats one that affects ten, even if it is technically inferior.
4. **The user's stated values win.** If the user has said "speed is the thing" five times, recommend the faster option even if the slower is "better engineering."
5. **Default to ship.** When fully tied, the option that ships sooner wins.

If two options tie on all five, the user's gut wins. Ask them which way they were leaning before they asked. Recommend that.

## What never to do

- **Never list more than two options.** The whole point is forcing the binary.
- **Never recommend "it depends."** If it depends, name the variable that decides, then ask the user for it in one batched message.
- **Never hedge the recommendation.** "Probably A, but B is also fine" is no recommendation. Pick.
- **Never list pros and cons in bullet form.** Bullet lists are how people avoid deciding. Use the single-sentence cost line.
- **Never suggest "maybe we should think about this more."** That is the bug this skill exists to fix.

## When to ask one clarifying question

Ask exactly one question, and only if the answer would flip the recommendation. Phrase it as a forced choice:

> "Before I call it — is this a one-time script you'll delete next week, or a piece of the product? If one-time, the answer changes."

Never ask:
- "What are your priorities?" (Too abstract.)
- "What's your timeline?" (Ask for a specific deadline.)
- "What does success look like?" (Ask for a measurable outcome.)
- More than one question. Batch them or pick the most leveraged one.

## Worked example

**User asks:** "Should I use React, Vue, Svelte, or just plain HTML for this landing page?"

**Decision jig output:**

> **Decision:** Build the landing page in a framework, or in plain HTML.
>
> **A — Plain HTML.** One file, no build step, deploys to any static host. Loses: no component reuse if the site grows past five pages.
>
> **B — Svelte (as the framework default).** Component model, lighter bundle than React. Loses: a build step, and a day learning the syntax if unfamiliar.
>
> **Recommendation: A — Plain HTML.**
>
> **Why:** This is a landing page. Reversibility — you can rewrite it in a framework in an afternoon if the site grows. The reverse migration is harder.

End.

## Worked example — the AKHARA flavor

**User asks:** "Should I buy akhara.co now, or wait until the Instagram is bigger?"

**Decision jig output:**

> **Decision:** Buy the domain this week, or hold.
>
> **A — Buy this week.** $1/mo on Cloudflare. Loses: a few dollars a year if AKHARA pivots names.
>
> **B — Hold.** Saves the dollars. Loses: the domain is gone if anyone else registers it. Recovery cost is in the thousands or impossible.
>
> **Recommendation: A — Buy this week.**
>
> **Why:** Irreversibility. The downside of B is permanent. The downside of A is annual coffee money.

End.

## The brutal version

A bad decision made today and reversed tomorrow beats a perfect decision delayed indefinitely. Most of what feels like "needing more information" is needing more courage. This skill provides the courage by removing the option to keep deliberating.

Pick. Move. Adjust.
