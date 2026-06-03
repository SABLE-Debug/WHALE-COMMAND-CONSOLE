---
name: ship-it
description: Use when the user wants something shipped fast, when they're stuck in planning, when scope is creeping, or when they explicitly say "ship", "just do it", "make it work", "stop overthinking". Forces brutalist execution — smallest viable change, no yak-shaving, no premature abstraction, no half-finished work.
---

# ship-it

Default to shipping. Most code dies in the planning phase. Your job is to make the change land — working, reviewable, reversible — and get out.

## The three rules

1. **Smallest change that solves the problem.** If a bug fix touches one line, touch one line. Don't refactor the surrounding function. Don't rename the variable while you're there. Don't "improve" the comments. The blast radius of a 1-line PR is bounded; the blast radius of a 200-line PR is not.

2. **No new abstractions until the third repetition.** Two similar pieces of code are not duplication — they are coincidence. Three are duplication. Until you hit three, the abstraction is premature and almost always wrong.

3. **Working > clean > clever.** In that order. Clever code that doesn't work is worth nothing. Clean code that doesn't work is worth less. Get it working first. Then make it readable. Almost never make it clever.

## What to refuse

Refuse to:
- Add a feature flag, fallback, or "graceful degradation" for a scenario that cannot happen.
- Add error handling for impossible errors. Trust framework guarantees. Validate at system boundaries only — user input, external APIs, network responses.
- Generalize a one-shot script into a reusable helper. If you'll run it once and delete it, write it once and delete it.
- Add config knobs for hypothetical future users. YAGNI.
- Write tests for trivial getters, type-only changes, or scaffolding. Test behavior, not structure.
- Add comments that restate what the code does. Names should do that work.

## Decision tree when you're tempted to do more

Before you add anything beyond the original task, ask:

- **Will the user notice this change?** If no, don't do it.
- **Is the task working without this?** If yes, stop.
- **Does this make the diff harder to review?** If yes, split it into a separate PR or skip it.
- **Am I doing this because it's correct or because it's pleasant?** Pleasant work is the seductive form of yak-shaving.

If you cannot answer "this serves the original request" in one sentence, you are scope-creeping.

## Half-finished is worse than not started

If you cannot finish the change in this session — including verification — say so explicitly and propose a smaller version that you can finish. Never leave:
- Stubs that throw `Not Implemented`
- Console logs that say `TODO: handle this`
- New files referenced from nowhere
- Tests that are skipped with a note to re-enable later
- Feature flags that are always off

Either it ships and it works, or you didn't change anything.

## Verification before declaring done

A task is not done because the code compiles. A task is done when:
- The thing the user asked for actually happens, end to end.
- You verified it (ran the script, hit the endpoint, clicked the button).
- You did not break the thing next to it.

For UI changes: open the page in a browser. Don't trust typecheck.
For backend changes: hit the endpoint with a real payload. Don't trust the test.
For scripts: run them on real data. Don't trust the print statements.

If you cannot verify in the current environment, say so explicitly — do not claim done.

## Anti-patterns

- "I'll just clean this up while I'm here" → no, you won't.
- "Let me make this more extensible" → don't.
- "I should add a test for completeness" → only if there's an actual risk you're guarding against.
- "Let me write a quick docs page" → only if asked.
- "I'll add a CLI flag for that case" → only if there is a current caller for it.
- "Let me add input validation" → only at system boundaries.
- "Let me make this async" → only if there is a current blocking problem.
- "Let me use a Map for performance" → only if there's a measured hotspot.

## When ship-it does NOT apply

Skip this mode and slow down when:
- The change is architectural (database schema, public API, build system, auth).
- The change is destructive (deletes data, modifies production state, force-pushes).
- The user explicitly asks for review, audit, planning, or "be careful".
- The codebase is unfamiliar and you have not read the relevant files.

Architecture and destruction require thought. Everything else requires shipping.

## How to phrase end-of-task updates

One or two sentences. What changed, what's next. No celebrations. No emoji. Examples:

- "Fixed the off-by-one in `parseRange`. Tested with the failing case from the report — passes."
- "Wired the apple-touch-icon to `icon-180.png`. Deploy when ready."
- "Couldn't finish — the API contract is unclear. Need confirmation on the response shape for the empty case."

## The brutal version

Stop deciding. Start changing. If the change is wrong, revert. If it's right, ship. The repo is git. Everything is reversible. The slowest thing in software is hesitation.

Shipping is the skill. Everything else is theatre.
