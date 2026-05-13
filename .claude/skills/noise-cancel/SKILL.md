---
name: noise-cancel
description: Use when the user pastes copy and asks to "clean this up", "make it tight", "rewrite this", or "kill the fluff". Strips AI-tells, marketing throat-clearing, hedges, and filler. Returns a brutalist version that says the same thing in significantly fewer words.
---

# noise-cancel

Most writing is fifty percent filler. Marketing copy is seventy percent filler. AI-generated copy is eighty percent filler. Your job is to delete the filler without losing the load-bearing meaning. The result should feel uncomfortably short to the original author and obviously better to a stranger.

## What counts as noise

Categorize and cut.

**Hedges** — kill all of these:
- "I think," "I believe," "in my opinion," "it seems," "it appears," "kind of," "sort of," "a bit," "somewhat," "rather," "fairly," "quite," "pretty much," "more or less," "to be honest," "if you ask me," "to my mind."

**Throat-clearing** — kill all of these:
- "Just wanted to," "I wanted to reach out," "hope you're well," "hope this finds you," "in today's fast-paced world," "as you know," "as I mentioned," "to be clear," "let me start by," "before I begin," "first off," "long story short," "at the end of the day," "needless to say."

**Marketing fluff** — replace or cut:
- "leverage" → "use"
- "utilize" → "use"
- "robust" → describe what it does, or cut
- "streamline" → "shorten," "simplify," or be specific
- "elevate," "empower," "unlock," "transform" → cut
- "best-in-class," "world-class," "industry-leading" → cut, you do not need to claim it
- "cutting-edge," "state-of-the-art," "next-generation" → cut
- "synergy," "alignment," "ecosystem," "paradigm" → cut, rewrite
- "scalable solutions," "innovative approach," "strategic partnership" → cut, name the thing
- "tapestry," "delve," "intricate," "myriad" → cut, AI-tells
- "comprehensive" → "complete," or cut
- "seamlessly" → cut

**AI-tells** — specifically:
- "It's important to note that" → cut, just state the thing
- "It is worth mentioning" → cut
- "I'd be happy to" → cut, just do it
- "Certainly!" "Absolutely!" "Great question!" → cut
- "I hope this helps!" "Let me know if you have any other questions!" → cut
- "In conclusion," "To summarize," "Overall," → cut, the conclusion is the conclusion
- Paragraphs that begin with "Moreover," "Furthermore," "Additionally," → cut the opener
- "Step-by-step guide to..." → cut "step-by-step guide to," keep the noun

**Compound qualifiers** — kill:
- "really very important" → "important"
- "absolutely essential" → "essential"
- "completely unique" → "unique" (or, more likely, cut "unique")
- "totally free" → "free"

**Empty intensifiers** — kill:
- "very," "really," "actually," "literally," "basically," "essentially."

## What to keep

- Specific numbers. Always.
- Specific names — products, people, places.
- The verb at the heart of each sentence.
- Cause-effect chains. ("Because X, Y.")
- Anything that would be different if it referred to a different company.

If a sentence could be pasted into any other company's copy with the name changed, it is noise. Cut it.

## The three-pass method

Pass through the text three times. Each pass has one job.

**Pass 1 — Cut.** Delete every word from the banned lists above. Do not rewrite yet. Just delete. The result will be ungrammatical in places. Fine.

**Pass 2 — Re-stitch.** Fix the grammar from Pass 1 with the smallest possible adjustments. Often this is just changing a comma to a period, or merging two sentence fragments.

**Pass 3 — Compress.** Look at every sentence. Can it be said in fewer words without losing meaning? Replace abstract nouns with concrete ones. Replace gerunds with verbs.

If after three passes the text is not at least thirty percent shorter, you did not cut enough. Run Pass 1 again.

## Output format

Return two blocks:

**Before** — the original, unchanged, for reference.

**After** — the brutalist version.

Then one line: word count before → word count after, and the percent cut.

> Before: 312 words. After: 118 words. Cut: 62%.

If the cut is under thirty percent, do another pass before delivering.

## Edge cases

**Legal copy** — do not cut. Show the original back. Note that legal copy is not a noise-cancel target.

**Quoted speech** — do not change quoted material attributed to a real person. Cut around it.

**Creative writing** — fiction, song lyrics, poetry — has different rules. Refuse to noise-cancel creative work unless the user specifically asks for it and confirms they want compression over voice.

**Technical writing** — keep precision over compression. A precise sentence that is long beats a short sentence that is wrong. Cut filler, keep nuance.

## Worked example

**Before (87 words):**
> "I just wanted to reach out and say that I think we should probably consider scheduling a meeting at some point in the near future to potentially discuss the various strategic opportunities that may be available to us in terms of leveraging our combined synergies to unlock new value-creation pathways. It would be great to hear your thoughts and feedback on this whenever you have a moment to spare. Let me know if this is something you'd be interested in exploring further."

**After (16 words):**
> "Meeting next week to discuss a partnership? Reply with a time that works. Topic: shared distribution."

> Before: 87 words. After: 16 words. Cut: 82%.

## When to refuse

Refuse to apply noise-cancel to:
- Anything legally binding.
- Anything where the author specifically said "preserve the voice."
- Anything translated from another language — the original voice may be the right voice, and what looks like filler may be required register.

## The brutal version

If you are scared the cut version sounds too direct, the cut version is correct. Filler exists because writers are scared of sounding cold. Cold beats unread.
