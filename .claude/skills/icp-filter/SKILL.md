---
name: icp-filter
description: Use when the user has a list of prospects and needs to rank them by fit. Refuses to treat all prospects equally. Scores by AKHARA's published ICP — PE-backed rollups first, single-location independents last. Outputs a ranked list with the work-to-close estimate per account.
---

# icp-filter

The AKHARA ICP ranking is published in the Command Console. Five tiers, from PE-backed rollups (#1, lifetime niche) down to single-location independents (#5, not worth the cycles). This skill takes a raw prospect list and produces the ranked, defensible version.

## The five tiers, by drop

**Tier 1 — PE-backed rollups (the lifetime niche).**
Institutional capital, multi-state platforms, professional management, quarterly vendor reviews. Pay band: $30K–$100K. Reply rate: 35–50%. Sell cycle: 60–90 days. LTV: highest. Examples in med spa: Ideal Image, LaserAway, Skin Spirit, Milan Laser, SkinSpa NY, dermatology MSOs.

**Tier 2 — Family-office consolidators.**
Three to fifteen locations under one operator family. Sophisticated but slower than PE. Pay band: $15K–$50K. Reply rate: 25–40%. Sell cycle: 30–60 days. LTV: high.

**Tier 3 — Multi-location independents ($5M–$15M revenue).**
Single owner, two to five locations, sophisticated operator. Pay band: $8K–$25K. Reply rate: 20–35%. Sell cycle: 14–30 days. LTV: medium.

**Tier 4 — Aspirational single-locations ($2M–$5M revenue, expanding).**
Single location, owner-operator, planning location two. Pay band: $3K–$10K. Reply rate: 15–25%. Sell cycle: 7–21 days. LTV: medium-low — they churn if growth stalls.

**Tier 5 — Single-location independents (<$2M revenue).**
Solo operator, lifestyle business. Pay band: <$3K. Reply rate: <15%. Sell cycle: variable. **LTV: do not pursue at AKHARA pricing.** Refer them out or decline.

## Inputs you need

For each prospect on the input list, you need (or must infer with confidence):

- **Locations** — count and states. Multi-state matters for tier 1 eligibility.
- **Revenue band** — order of magnitude is enough. $2M, $20M, $200M.
- **Ownership type** — PE, family office, family ownership, sole proprietor, public.
- **Recent capital activity** — fundraises, acquisitions in the last 18 months. PE-backing is the strongest signal.
- **Professional management signal** — do they have a COO/CMO? Quarterly board? Posted KPIs?

Sources for inference (don't ask the user — go find): LinkedIn, AmSpa member directory, PitchBook (if accessible), public press releases, the company's own "Leadership" page.

If you cannot place a prospect in a tier with these inputs, mark them **UNRANKED** and list the missing data. Do not guess.

## The scoring formula

Each prospect gets a tier number and three sub-scores:

- **Fit (1–5)** — how well they match the tier definition. 5 = textbook example. 1 = edge case for the tier.
- **Heat (1–5)** — signals of openness right now. Recent fundraise = 5. Hiring head of marketing = 4. Just rebranded = 3. Quiet = 1.
- **Effort (1–5)** — work to close. 1 = trivial (existing relationship, intro available). 5 = cold, hard, multi-stakeholder. Note: high effort can still be worth it for tier 1.

Composite score: Tier number (lower is better) + (Effort − Heat). So the priority is roughly **low tier number, low effort, high heat**.

## Output format

A markdown table, sorted by composite score ascending (best first):

| Rank | Prospect | Tier | Fit | Heat | Effort | Why it's ranked here | Opening line angle |
|---|---|---|---|---|---|---|---|

Plus a separate section: **Decline** — prospects from the input that are below the floor (tier 5) or that you would refuse on principle (regulatory risk, reputational concern, geographic mismatch). One line each.

Plus a separate section: **Unranked** — prospects with missing data. List what you need.

## Refusals

Refuse to add to the ranked list:

- Any tier 5 prospect. They are below the floor. Underwriting them at AKHARA prices burns cycles for no margin.
- Anyone in cash-only or grey-market niches. The compliance overhead exceeds the deal size.
- Anyone where the operator is known to short-pay vendors or has open lawsuits over services. Check public records.
- Anyone the operator has previously fired AKHARA or a comparable provider. They will not pay.

Refuse to soften the ranking:

- Do not promote a tier 3 to tier 2 because the operator "seems sophisticated." Use the published criteria.
- Do not de-rank a tier 1 because they intimidate you. Tier 1 is the lifetime niche. Pursue.

## Calibration check

Before delivering the ranking, sanity-check:

- The top three should be prospects where one win pays for the next six months.
- The bottom three (of those you ranked) should be prospects you would happily *not* close if a tier 1 came in mid-cycle.
- If your top three are all tier 3 or below, you did not look hard enough at the input. Go back, find the tier 1s. If there are none, push back: this list needs upgrading before it's worth working.

## On "the long shot"

Reserve no more than one slot in the top five for a long-shot tier 1 with low heat. The cost is real — you spend cycles on a 60-to-90 day pursuit with a low-double-digit close rate. The payoff justifies it, but only if you protect against drift. If you spend more than ten percent of your weekly cycles on long shots, you are using "ICP" as a procrastination device.

## What to attach for each top-five prospect

For prospects ranked top-five, the output should include an *opening line angle* — the specific observation that goes into the audit Loom for that account. One sentence, hyper-specific. If you cannot produce this for a top-five prospect, they are not ready to be in the top five — demote them and find a replacement.

## The brutal version

Most lists arrive evenly weighted. Most reality is not. Eighty percent of AKHARA's MRR will come from twenty percent of the targets, and twenty percent of the targets are tier 1 and 2. The filter is the work. Skipping it means working all targets equally and getting paid by the bottom-tier ones, which is the path to a freelance practice, not a department.

Rank ruthlessly. Decline the bottom. Pursue the top.
