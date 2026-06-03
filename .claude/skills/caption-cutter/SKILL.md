---
name: caption-cutter
description: Use when the user pastes a long caption and asks to compress it. Targets under 30 words, single hook, one number, no hashtag spam. Different from noise-cancel because it preserves the hook regardless of length, and applies Instagram-specific format rules.
---

# caption-cutter

Long captions are a confession. The author was not confident the hook landed, so they kept writing in case one of the later lines saved it. The fix is to find the one line that lands and delete the rest.

## The contract

Input: any caption, any length.
Output: a caption of 30 words or fewer, in the AKHARA four-line shape, plus a brief note on what was cut and why.

If the input has no salvageable hook, say so. Do not invent one. Push the user to provide the underlying claim, then re-draft.

## The cut order

Apply in this sequence. Stop when under 30 words.

**Cut 1 — Hashtags.** Strip all but the three best. Branded only. If there are no branded tags, strip all and ask the user which three to add.

**Cut 2 — Emojis.** All. AKHARA does not use emojis in captions.

**Cut 3 — Call-to-action filler.** "Link in bio," "DM for more," "Tag a friend who," "Follow for more," "Save this for later." Cut every instance. The post earns saves and shares by being worth them, not by asking.

**Cut 4 — Throat-clearing openers.**
- "Let's talk about..."
- "Here's something interesting..."
- "I've been thinking a lot about..."
- "You know what's wild?"
- "PSA:"
- "Reminder:"
- Any opening that delays the hook by even one word.

**Cut 5 — Hedges and modifiers.**
- "Kind of," "sort of," "a bit," "really," "actually," "literally," "basically."
- "I think," "I believe," "it seems," "in my opinion."

**Cut 6 — Compound sentences with "and".** Split into two short sentences. If you cannot fit both in the budget, cut one. The stronger one wins.

**Cut 7 — Lists past three items.** Captions that list four+ items are blog posts in disguise. Pick three. Or move to a carousel.

**Cut 8 — Repetition.** If a claim is made twice in different words, cut the weaker phrasing.

**Cut 9 — Closing pleasantries.** "Hope this helps!" "What do you think?" "Drop a comment below!" Cut.

After cuts 1–9, if still over 30 words, you have one claim too many. Pick the strongest. Cut the rest.

## What to preserve at all costs

Even if it pushes you to the edge of the budget:

- **Specific numbers.** "$30K/mo" or "fifteen people." Numbers are the saves.
- **Specific names.** Cities, products, people (if they consent). Specificity is the share.
- **The hook line.** The first six to eight words. Everything else is negotiable. This is not.
- **The voice-defining phrase.** If one line sounds *especially* AKHARA — short, italic-able, gold-em-able — keep it.

## Output format

```
Before: [word count]
After:  [word count]
Cut:    [percentage]

Caption (cut):
[the 4-line, ≤30-word output]

Visual note (if applicable):
[1 line]

Tags (best 3):
[#AKHARA, etc.]

What was cut and why:
[2-3 bullet points naming what you removed and the rationale]
```

The "what was cut and why" section is critical. It teaches the user the pattern so the next caption arrives shorter.

## Edge cases

**The caption is already under 30 words.** Verify it matches the four-line shape and has a real hook. If yes, return as-is and note "no cuts needed." If no, restructure without cutting.

**The caption is a multi-slide carousel script.** Refuse to cut to 30 words. Carousels need the 30-word rule per slide, not for the whole. Refer to `script-doctor` for carousel structure.

**The caption is a thread / multi-post.** Refer to thread guidance: each post in a thread still earns its 30-word cap. Cut each independently. Threads of more than 5 posts get diminishing returns; recommend collapsing to a single post + one follow-up.

**The caption is for a different platform (LinkedIn, Twitter/X, Threads).** The 30-word rule does not apply. LinkedIn captions earn 80–120 words. Twitter is 280 characters. Threads is 500 characters. Adapt the format to the platform but keep the cut order.

## Worked example

**Before (118 words):**
> "Hey everyone! 👋 I just wanted to share something I've been thinking about a lot lately. You know how everyone in the agency world is always talking about scaling their team and hiring more people? Well, here's the thing — I think there's actually a better way. Instead of building a big team, you can build small AI-powered departments that replace 15 to 65 hires per client. Crazy, right? It's been a game-changer for the kind of work we do at AKHARA. If this resonates with you, drop a comment below or DM me to learn more! Don't forget to like and follow for more content like this! 🚀✨ #business #ai #marketing #agency #scaling #startuplife #entrepreneur"

**After (24 words):**
> "Three whales beat thirty minnows.
>
> One Sovereign client replaces 18–65 hires. The math, not the hustle.
>
> _AKHARA sells departments._"

```
Tags: #AKHARA #akharadepartments #sovereign
What was cut:
- Throat-clearing opener ("Hey everyone! I just wanted to share...")
- 5 emojis
- "DM me to learn more" CTA
- 7 generic hashtags
- The hedge ("I think," "actually")
- Closing pleasantries
```

## On voice fidelity

The cut version must sound *more* AKHARA than the input, not less. Indicators:

- More declarative, less interrogative.
- More numbers, less adjectives.
- More italics on the closer, less exclamation.
- Zero emojis.
- Three tags or fewer.

If the cut version sounds *like the original but shorter*, you cut filler but did not reach voice. Apply `house-voice` skill on top.

## The brutal version

Every word over 30 in an Instagram caption is a vote of no-confidence in the first 30. The user keeps writing because they don't trust the hook. The fix is to trust the hook — and if you can't, replace the hook.

Length is rarely the problem. Conviction is.
