---
name: red-pen
description: Use before sending anything significant — a proposal, a post, a cold email, a long DM, a public statement. Reviews the user's own draft as a hostile reader. Names the line they will be embarrassed by tomorrow, the claim that won't survive scrutiny, the sentence that will be quoted out of context.
---

# red-pen

Most operators send things they would not send tomorrow. The reason is asymmetry — when you write, you optimize for the case where the reader is generous. The red-pen asks: what does this look like to a hostile reader, a tired reader, a reader who is looking for a reason to discard you?

This skill is self-review under the assumption that the reader is not on your side.

## The contract

Input: a draft of anything outbound.
Output: a list of specific lines that should be cut, edited, or fortified, with the exact reason.

Not a rewrite. The user owns the rewrite. The red-pen names the problems.

## The four hostile readers

For every draft, mentally pass through all four. Each finds different things.

**1. The cynic.** Looking for sales tells, AI generation, hype. Triggers: "leverage," "synergy," "transform," "best-in-class," any phrase that sounds like a press release.

**2. The bored skimmer.** Reads the first line and the last line. Triggers: weak opening that doesn't hook, weak closing that doesn't ask.

**3. The legal-minded reader.** Looking for promises that could be construed as guarantees. Triggers: numbers without "projected," claims about results, anything that could be screenshot and challenged.

**4. The dunk-tweeter.** Looking for a sentence to mock out of context. Triggers: any line that, separated from the rest, sounds embarrassing, naive, or self-important.

Pass the draft through each. Flag what each would find. The user decides which to address.

## Specific things to flag

**Lines that sound like they could be by anyone.**
> "We are committed to delivering exceptional value to our clients."
Flag: generic. Could be any agency. Cut or replace with a specific.

**Lines that promise without "projected."**
> "You'll see a 40% lift in inbound conversions."
Flag: legal exposure. Add "projected" / "based on comparable engagements" / "conservative estimate."

**Lines that quote-tweet badly.**
> "I'm building the future of medspa marketing."
Flag: looks ridiculous out of context. Reframe.

**Lines with AI tells.**
> "Let's delve into the intricate tapestry of operational excellence."
Flag: triggers cynic. Rewrite in human voice.

**Lines that hedge after a strong claim.**
> "AKHARA sells departments. I think. Maybe. We'd love to chat if you're open."
Flag: undercuts the claim. Either commit to the claim or remove it.

**Lines that are over-confident without proof.**
> "AKHARA is the only company solving this."
Flag: provable false on inspection. Soften to "AKHARA approaches this differently than..."

**Lines that explain too much.**
> "The way this works is that we use Claude API combined with Make.com and ElevenLabs to create..."
Flag: operator is showing the kitchen. The customer wants the meal. Cut the implementation detail.

**Lines that apologize.**
> "Sorry to bother you" / "I know you're busy" / "Sorry for the long email"
Flag: signals weakness. Cut.

**Numbers without sources.**
> "Studies show 87% of users prefer..."
Flag: which studies? Add source or cut.

**Lines that name competitors by name.**
> "Unlike CompetitorX, we..."
Flag: invites comparison shopping. Avoid.

## The two-pass method

**Pass 1 — Find the problems.** Read top to bottom, marking everything the four hostile readers would catch. Don't fix yet. Just mark.

**Pass 2 — Sort by severity.** Rank the markups:
- **Critical:** Legal, reputational, or factually wrong. Must fix before send.
- **High:** AI-tell, generic phrasing, weak hook. Should fix before send.
- **Medium:** Slight redundancy, soft hedge. Fix if time.
- **Low:** Stylistic preference. Note only.

Deliver the sorted list. User decides what to address.

## Output format

```
Red-pen review — [piece type, e.g., "cold email to Brookside Med"]

CRITICAL ([count])
- Line: [exact quote]
  Problem: [which hostile reader would find this]
  Fix: [specific change]

HIGH ([count])
- [...]

MEDIUM ([count])
- [...]

LOW ([count])
- [...]

OVERALL VERDICT:
[SHIP / FIX-AND-SHIP / REWRITE]
- SHIP: 0 critical, ≤2 high.
- FIX-AND-SHIP: 0 critical, ≤5 high.
- REWRITE: any critical, or 5+ high.

ONE LINE THE PIECE NEEDS:
[If the piece is missing a defining sentence, name what kind of sentence it needs. If the piece already has one, name it as the load-bearing line and tell the user not to weaken it.]
```

## On the load-bearing line

Every good outbound piece has one sentence that does most of the work. The red-pen identifies it.

For a cold email: the observation in line 1.
For a post: the hook.
For a proposal: the diagnosis.
For a Loom script: the cost number.

If the load-bearing line is weak, no amount of fixing the rest will save the piece. Push the user to rewrite the load-bearing line first, then everything else.

## On things the red-pen will NOT flag

Do not flag:
- Stylistic preferences that match the author's voice.
- Verb choices that are slightly unusual but work.
- "Imperfect" grammar that is intentional (sentence fragments, comma splices used for rhythm).
- Length, unless it is genuinely excessive for the format.

The red-pen exists to catch lines the author will regret. It is not a style guide enforcement tool.

## On the user's reaction

When the user pushes back on a red-pen flag ("that line is fine, it's my voice"), the red-pen's job is done. The flag was raised. The user decides.

Do not argue. Note the override and move on.

## Worked example

**Input (cold email):**
> "Hi Sarah, hope you're well! I came across your profile and wanted to reach out. I think there might be some synergy between what we're doing at AKHARA and what you're building at Brookside Med. We're a cutting-edge AI agency that helps medspas leverage automation to unlock new revenue streams. Would you be open to a quick chat next week to explore how we could potentially collaborate? Looking forward to hearing from you! Best regards, Marcus"

**Red-pen output:**

```
CRITICAL: 0

HIGH (5):
- "hope you're well" — generic opener, banned by house-voice.
- "I came across your profile" — AI cold-email tell.
- "synergy" — marketing fluff.
- "cutting-edge AI agency" — generic, also AKHARA does not pitch as AI agency.
- "leverage automation to unlock new revenue streams" — three AI-tells stacked.

MEDIUM (2):
- "quick chat" — vague ask, no specific outcome.
- "Looking forward to hearing from you" — banned close.

LOAD-BEARING LINE:
This piece has none. There is no specific observation about Brookside Med. The whole email is generic and could be sent to any prospect.

VERDICT: REWRITE. Start with cold-outreach skill. The current draft cannot be salvaged with line edits — it has no foundation.
```

## The brutal version

The red-pen is the cheapest insurance against future cringe. Five minutes of self-review prevents the 5pm Monday email that you remember at 3am Friday. Run it on anything you can't take back.

Future-you is the toughest reader. Edit for them.
