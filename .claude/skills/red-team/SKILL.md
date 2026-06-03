---
name: red-team
description: Use when the user asks "what could go wrong", asks for security review, asks to break or stress-test a design, or before any irreversible action. Adversarial mode — assumes the system is being attacked, abused, or used by someone hostile. Names specific failure scenarios, not generic risks.
---

# red-team

Most reviews ask "does this work for the happy path?" The red-team review asks "what does this look like when someone is trying to make it fail?" Different question. Different answers.

## The four threat models

Run each pass independently. Do not combine.

**1. The hostile user.** A real person trying to abuse the system on purpose. Looks for: input that bypasses validation, multi-step exploits, race conditions on shared resources, ways to consume free resources, ways to escalate from a low-trust state to a high-trust state.

**2. The careless user.** A real person who isn't trying to break anything but will hit edge cases by accident. Looks for: missing inputs, duplicate submissions, browser back-button states, network interruptions mid-action, two tabs open at once, slow connections that cause timeouts.

**3. The bad actor with credentials.** A user with legitimate access who exceeds their scope. Looks for: missing authorization checks, IDs from other tenants accepted because the user is authenticated, data leakage through error messages, audit log gaps.

**4. The dependency turning hostile.** An upstream service that misbehaves — silently returns wrong data, times out, returns 500, returns truncated JSON. Looks for: missing retries with backoff, missing timeouts, no validation of upstream response shape, no circuit breaker, no graceful degradation.

Most outages live in #4. Most security incidents live in #1 and #3. Most support tickets live in #2.

## Specific things to check

**Input handling**
- Long strings. Strings with null bytes. Strings with newlines. Strings that are valid JSON but unexpected shape. Emoji. Right-to-left text. Combining characters. Zero-width spaces.
- Numbers: negative, zero, max-int, NaN, Infinity, scientific notation.
- Dates: pre-epoch, far future, leap seconds, DST transitions, timezone-aware vs naive.
- IDs: integer overflow, ID guessing, ID enumeration via response timing.
- Uploads: zip bombs, polyglot files, files with double extensions, files larger than memory.

**Auth and access**
- Can a user impersonate another by changing one ID in the URL?
- Are admin endpoints accessible to non-admins if they know the URL?
- Do reset-password flows leak whether an email exists?
- Are sessions invalidated on logout? On password change?
- Are JWTs validated with the correct algorithm? Is `alg: none` rejected?

**Concurrency**
- What happens when two requests modify the same row simultaneously?
- Are unique constraints enforced at the DB or only in code?
- Are background jobs idempotent? What if they fire twice?
- Are payment flows protected from double-charges?

**Money flows specifically**
- Can a user with $0 balance trigger a $100 action by racing two requests?
- Are refunds and chargebacks reconciled with internal state?
- Are price computations done server-side, never client-side?
- Are discount codes single-use enforced at the DB level?

**Data exfiltration**
- Do errors include stack traces in production?
- Do API responses include fields the client doesn't need?
- Are file paths logged with user input?
- Do search endpoints return results from other tenants if filtered cleverly?

## Output format

Report findings as a numbered list. Each item:

1. **Severity** — Critical / High / Medium / Low.
2. **Scenario** — one sentence, specific to the threat model.
3. **Proof** — the exact request or sequence that triggers it.
4. **Fix** — the smallest change that closes it.

Do not pad with "good job on the rest." If there are no findings, say none in one line and stop.

## When to refuse

Refuse the red-team if:
- The target is someone else's system without authorization. Mention the legal and ethical line. Suggest scoping to the user's own systems or to documented bug bounty programs.
- The request is for offensive tooling rather than defensive review. Decline.
- The user wants to evade detection of malicious activity. Decline.

Red-team work serves defenders. The frame is "find it before they do." If the frame is "help me become them," that is a different request and not this skill.

## Calibration to AKHARA

For AKHARA's stack specifically, the red-team pass should focus on:

- **Make.com webhooks** — are they signed? Are they rate-limited? Can a leaked webhook URL drain credits?
- **Claude API keys** — are they in `.env` and gitignored? Are they scoped? What is the monthly cap?
- **ElevenLabs API** — is the voice ID public? Can someone with the page source clone the voice?
- **Cloudflare Pages deploys** — is the deploy hook secret? Can someone trigger a deploy of arbitrary content?
- **HubSpot CRM** — what fields are syncing? Are notes encrypted? Are deals visible to staff who shouldn't see them?
- **PayPal flows** — are invoice IDs guessable? Is the email used for receipts identical to the operator's primary email?
- **Audit Loom URLs** — are they unguessable? If the link leaks, what does it cost?

For each, name the worst case that fits inside one paragraph.

## The brutal version

Red-team is not paranoia. It is asking the question every defender wishes they had asked six months earlier. Do it before the launch. Do it before the migration. Do it before the public post. The cost is a half-day of imagination. The cost of skipping it is whatever the worst case turns out to be.
