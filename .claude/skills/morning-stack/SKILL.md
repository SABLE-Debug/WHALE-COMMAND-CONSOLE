---
name: morning-stack
description: Use when the user asks "what should I work on today" or wants a daily plan. Produces exactly three actions — no more, no less — ranked by leverage. Refuses to make to-do lists. Refuses to include maintenance work as a top-3 item unless it is genuinely blocking.
---

# morning-stack

Most daily planning fails because the planner confuses "list of things to do" with "plan." A list does not prioritize. A plan does. This skill produces a daily plan — three items, in priority order, each tied to the week's outcome.

## The contract

Exactly three actions. Output in this order:

**1. The whale.** The single highest-leverage action. The one that, if it is the only thing you do today, the day still counts as a win.

**2. The dolphin.** The next-most-leveraged action. Often related to the whale. If the whale stalls, this is the fallback that still moves the week forward.

**3. The minnow.** The smallest action that maintains hygiene — an email, a follow-up, a billing check, a personal admin. Never strategic. Always under 30 minutes.

Then stop. No fourth item. No "stretch goal." No "if time allows."

If the user asks for a fourth, refuse. The three-item cap is the discipline.

## Inputs needed (gather in one batch, never iteratively)

Before producing the stack, you need:

1. **The week's outcome.** What does Friday look like if the week was a 9/10? Specific. Not "make progress on outbound."
2. **Yesterday's status.** What landed yesterday, what didn't, what's blocked.
3. **Today's calendar.** Meetings booked. Energy windows (when is the user sharp vs. fading).
4. **The current bottleneck.** What is the single thing slowing the whole system down right now.

If the user has not provided #1 (the week's outcome), refuse to plan. Ask for it first. Without a week-outcome, the stack is guesswork dressed as planning.

## How to rank

Use this priority order, applied in sequence:

**1. Reversibility of progress.** Actions whose progress sticks beat actions whose progress evaporates. Writing the proposal sticks. Reading an article does not.

**2. Compounding.** Actions that make future actions cheaper. Writing a script that automates a recurring task. Recording an audit Loom that gets reused.

**3. Bottleneck-clearing.** Actions that unblock other people or systems. Replying to the prospect who is waiting. Approving the design that is holding up the build.

**4. Deadline pressure.** Real deadlines, not invented ones. If something is due today and not done, it is the whale by default.

**5. Energy match.** Hard cognitive work in the user's sharp window. Admin in the fade window. Reverse this and the day collapses.

If two actions tie on the first four, energy match breaks the tie.

## What is NOT a top-3 item

Refuse to include:

- **"Catch up on email."** Email is the minnow at best, and only if a specific reply is blocking someone else.
- **"Plan the rest of the week."** Planning is not the work. Doing is the work.
- **"Read [book / article / newsletter]."** Read in evening hours, not daily-stack hours.
- **"Brainstorm ideas for X."** Either brainstorm with a specific output target ("draft 10 hook options") or don't brainstorm.
- **"Set up [tool / system / new process]."** Tool setup is yak-shaving. Allowed only if the current tool is the bottleneck (rare).
- **"Take a course."** Not a daily-stack item. Schedule weekly.
- **"Exercise" or personal habits.** Important but not the work. Calendar block, do not stack.

## Output format

```
Today — [Day, Date]
Week outcome: [restated from input]

🐋  Whale (priority 1, est. [X] hours, window: [time block])
[Specific action, named outcome, defined "done" state]
Why this: [one-line rationale tied to week outcome]

🐬  Dolphin (priority 2, est. [Y] hours, window: [time block])
[Specific action]
Why this: [one line]

🐟  Minnow (priority 3, est. 30 min or less, window: [time block])
[Specific action]
Why this: [one line]

What you're explicitly NOT doing today:
[1-3 items the user might be tempted to do but shouldn't]
```

The "explicitly NOT doing" section is critical. It pre-empts drift.

## Worked example

```
Today — Tuesday, May 14

Week outcome: 3 audit Looms sent to tier-1 prospects, 1 reply.

🐋  Whale (3 hours, 9am–12pm)
Record + edit audit Loom #2 for Brookside Med.
Done state: MP4 in Drive, link in HubSpot, DM drafted to prospect.

Why this: Tier-1 reply rate hinges on volume × specificity. Loom #2 is the volume side; specificity is locked.

🐬  Dolphin (90 min, 1:30pm–3pm)
Research and write the opening-line angle for Loom #3 (Skin Spirit).
Done state: 3 candidate angles in notes, the strongest one pasted into the script template.

Why this: Tomorrow's whale is recording #3. Today's dolphin is the research it depends on.

🐟  Minnow (20 min, 8:30am or 4pm)
Reply to the PE intro that came in Sunday. Two-line note + calendar link.

Why this: A warm intro decays if it sits for >72 hours.

NOT doing today:
- Editing the website (not blocking; do Friday).
- Reading the Sam Altman piece (evening only).
- "Quick" call with [contact] (no specific outcome; defer).
```

## On energy windows

Default assumption: most operators are sharp 9am–12pm and 4pm–6pm; faded 1pm–3pm and after 7pm. Whale work goes in sharp windows. Minnows in fade. Dolphin can flex.

If the user has stated different windows (e.g., night owl), match those. Do not impose a standard.

## On three days of the same whale

If the same whale repeats for three days without landing, escalate. Either:
- The whale is too big — split it.
- The whale is wrong — re-pick.
- The user is avoiding it — name the avoidance, ask why.

A whale that does not land in 3 days is a symptom. Diagnose.

## The brutal version

Most days die from too many priorities. Three is enough. Three is honest. Three forces the question "what am I actually trying to do this week" — the question that planning is supposed to answer.

If you cannot pick three, you do not have a week yet. Build that first.
