---
name: inbox-triage
description: Use when the user pastes an inbox dump (emails, DMs, slack threads) and asks to sort or prioritize. Returns four buckets — reply-now, reply-later, archive, unsubscribe. Drafts the reply-now responses in AKHARA voice. Refuses to read the inbox for the user beyond what they provided.
---

# inbox-triage

An inbox is not a to-do list. Treating it as one is how operators lose entire mornings to other people's priorities. The triage skill imposes structure: every message gets a bucket, four buckets cover everything, and only the smallest bucket touches today's work.

## The four buckets

Every message in the dump gets exactly one classification.

**1. Reply-now.** Replying in the next 15 minutes unblocks someone or captures time-sensitive value. Two conditions, both required.

Examples:
- A qualified prospect asking for the proposal.
- A current client with a billing or operations question.
- A warm intro that goes cold if it sits.

**2. Reply-later.** Worth replying to but not today. Goes in a queue with a specific later-date.

Examples:
- A cold connect that responded to outbound.
- A vendor with a non-urgent question.
- A community thread you want to engage with.

**3. Archive.** Information that does not need a reply. Read once, file, done.

Examples:
- Newsletters you actually read.
- Confirmation emails.
- Cc'd FYI threads where you are not on the hook.
- Receipts.

**4. Unsubscribe.** The sender does not respect your time. Two strikes and you're out.

Examples:
- Marketing emails you didn't opt into intentionally.
- Newsletter you haven't read in 3 issues.
- Sender who has previously been triaged to archive twice with no useful content.

If you cannot classify a message into one of the four, the bucket is reply-later by default. Do not invent a fifth.

## The decision tree

For each message, in order:

1. **Does ignoring this cost the user money in the next 24 hours?** → reply-now.
2. **Does ignoring it cost relationship damage in the next 7 days?** → reply-now if the message is a single specific question; reply-later if it's a longer ask.
3. **Will replying in 48–72 hours produce the same outcome?** → reply-later.
4. **Is there a reply needed at all?** → if no, archive.
5. **Is this from a sender you do not benefit from hearing from?** → unsubscribe.

## Drafting reply-now responses

For every message classified reply-now, draft the reply in AKHARA voice (see `house-voice`).

Constraints:
- Under 60 words.
- One paragraph, ideally.
- No "Hope you're well."
- Sign with first name only.
- Always include the next step, never "let me know if any questions."

## Output format

```
Triage of [N] messages received [date range]:

REPLY NOW ([count], handle in next 15 min)
1. [Sender] · [Subject snippet]
   Reason: [why now]
   Drafted reply:
   ---
   [60-word reply in AKHARA voice]
   ---

2. [...]

REPLY LATER ([count], queue for [specific day/time block])
- [Sender] · [Subject] · [Why later, 1 line]
- [...]

ARCHIVE ([count])
- [Sender] · [Subject] · [Why no reply needed, 1 line]
- [...]

UNSUBSCRIBE ([count])
- [Sender] · [Reason]
- [...]

Time estimate:
- Reply-now block: [X] minutes
- Reply-later queue: [Y] minutes when you process the queue
```

## On reply-later

Reply-later messages should not sit in the inbox. Move them to a dedicated queue (a folder, a label, a separate document). The inbox itself stays at zero after triage.

Reply-later queue gets processed in batch — once per day, at most twice. Never let it grow past 20 items. If it does, the system is broken: too many messages are sliding to "later" when they should be "now" or "archive."

## On the unsubscribe bucket

Use generously. Unsubscribing is not rude — it is mutual respect. The sender's metrics improve when uninterested readers leave; your inbox improves when noise leaves.

For senders that don't honor unsubscribe links, use a rule: auto-archive on receipt. Three months of auto-archive without you missing them confirms the unsubscribe was right.

## On the "this might be important" trap

Most "this might be important" messages are not. The trap is the asymmetry — you fear the one in twenty that *is* important and use that fear to justify reading all twenty.

The fix: if a message is genuinely important, the sender will follow up. Real important messages bear repeat reading. Marketing fluff does not. Let the followup be your filter.

## On meeting requests

Meeting requests in the inbox get triaged separately. Three rules:

- **Specific agenda + name on it you recognize:** reply-now with a calendar link or a proposed slot.
- **Vague "let's chat" with no agenda:** reply-later, with one-line ask for the specific topic.
- **Vague + sender unknown:** archive, unless they follow up with specifics.

Never accept a meeting request that does not have a specific agenda. Unspecified meetings are unspecified work, which is unbounded work.

## On group threads (Slack, group DMs)

Group threads have different triage rules:

- **You are tagged or named:** treat like a personal message — apply the four buckets.
- **You are not tagged but the thread is in your area:** scan, do not read in full. If a decision is being made and your input matters, jump in. Otherwise, react and move on.
- **Generic "FYI" channels:** read once a day max. Mute the rest.

If you are spending more than 30 minutes a day in group threads where you are not tagged, the channel set is too broad. Cull.

## When the inbox dump is huge

For an inbox of 100+ messages:

- Triage from newest to oldest. The most recent are most likely to be live.
- Apply the buckets at speed — 5 to 10 seconds per message, not 30.
- Bias toward archive. When unsure, archive. If it mattered, it will resurface.
- After 30 minutes of triage, if not done, take a break. Decision fatigue erodes triage quality.

## The brutal version

Inbox zero is not a virtue. It is a side effect of treating messages as exhaust from other people's plans rather than your own. The four-bucket triage is the only sustainable model. Apply it daily. Process reply-now immediately. Batch the rest.

The inbox does not deserve your morning. Your morning belongs to the whale.
