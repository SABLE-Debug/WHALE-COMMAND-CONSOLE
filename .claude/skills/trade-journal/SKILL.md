---
name: trade-journal
description: Use after closing a trade in the The5ers / prop firm context. Produces a structured post-trade reflection — setup, execution, rule violations, lesson. Refuses to be a feelings dump. Refuses to record trades where the user can't name the entry rule that triggered. Template — calibrate the [TODO] sections to the user's actual trading rules once.
---

# trade-journal

A trade journal is not a diary. It is a feedback loop. Most traders journal feelings and never improve. The signal lives in the structure: what was the setup, did you follow your rules, what does the outcome say about the system or about you.

This skill enforces the structure. It refuses to record trades that cannot be diagnosed.

## Calibration block (fill in once, then this skill works for every trade)

**[TODO — operator calibration:** Replace the sections below with your actual trading framework. Examples:

- **System name:** [e.g., "PPL FX – breakout-of-asia-session"]
- **Approved setups (with conditions):** [list, e.g., "Setup A: London open break of Asian high, with structure on H1, RSI < 70"]
- **Position size rules:** [e.g., "0.5% account risk per trade, capped at $250"]
- **Entry / stop / target rules:** [e.g., "Entry at break, stop at swing low, target 2R"]
- **Time-of-day rules:** [e.g., "Only between 03:00 and 11:00 SAST"]
- **Cooling-off rules:** [e.g., "Two losses in a row = stop for the day. Three losses = stop for the week."]
- **Daily loss cap:** [e.g., "2% of account; hit it, you're done"]

Once filled, this skill scores each trade against those rules. Until filled, the skill operates on generic best-practice rules and flags every trade as "calibration pending."
**]**

## The journal entry shape

Every trade gets an entry with these fields, in this order:

```
TRADE — [date · time · pair · direction]

1. Setup name: [from approved list, or "UNAPPROVED"]
2. Why this setup, in one sentence:
   [What you saw that matched the rule]
3. Entry: [price]   Stop: [price]   Target: [price]
4. Position size: [% account risk]   Dollar risk: [$]
5. Outcome: [win / loss / breakeven]   R-multiple: [+2.3R / -1R / etc]
6. Rule check:
   - Setup matched approved list? [Y/N]
   - Position size within bounds? [Y/N]
   - Entry within X pips of plan? [Y/N]
   - Stop placed before entry, not after? [Y/N]
   - Held to target or stop, no early exit? [Y/N]
   - Time-of-day rule observed? [Y/N]
7. Rule violations (if any):
   [list]
8. Lesson:
   [One sentence. The thing future-you needs to know.]
9. System update (if any):
   [Specific change to rules based on this trade.]
```

## On rule violations

The journal's primary job is naming violations. Common ones:

- **Trade outside approved setup list.** "Felt right" is not a setup. Mark UNAPPROVED. These are the trades that train bad habits even when they win.
- **Position size override.** Risking more "because the conviction is high." Conviction is not a sizing input.
- **Stop moved after entry.** Almost always a sign of rule failure. The stop is the contract with future-you. Moving it breaks the contract.
- **Early exit.** Taking profit before target or stopping out before stop. Often because the trader is uncomfortable with the unrealized PnL. Unrealized PnL is information, not pressure.
- **Revenge trade.** Re-entering after a loss without a new setup. The 1.5 setup that wasn't there before the loss is not there now.
- **Time-of-day override.** Trading outside the approved window because "the setup looked good." If the setup is good outside the window, the window rule is wrong — update the system, do not break it once.

## The lesson, in one sentence

The lesson section is one sentence. Not a paragraph. Not feelings.

Bad lessons:
- "I should have been more patient." (Vague.)
- "I'm going to do better next time." (Not a lesson.)
- "Markets are tough today." (Externalizing.)

Good lessons:
- "Setup A failed because I entered before the H1 close confirmed."
- "I sized up because I'd lost the previous two. That's revenge, not conviction."
- "The breakeven was actually a +1R that I bailed on. I'm uncomfortable holding past 30 minutes."

Specific. About the trader's behavior or the setup. Actionable next time.

## The system update

If the lesson reveals a rule that should change, capture it.

Examples:
- "Setup A — require two H1 closes above the break, not one."
- "Position size — cap to 0.25% on Mondays. Three Mondays in a row have been red."
- "Time-of-day — pause from 09:30 to 10:00 SAST. London open and US pre-market overlap is producing whipsaws."

Updates accumulate. Review weekly. Roll them into the calibration block.

## What never to include

- **Feelings without behavior.** "I felt anxious" is not a lesson. "I felt anxious and exited 30 pips early" is.
- **Speculation about other traders.** "The big players were selling." You don't know.
- **News explanations after the fact.** "The trade lost because of the surprise CPI print." Maybe. The system either accounts for news risk or it doesn't. Diagnose the system.
- **Self-criticism without a specific behavior.** "I'm a bad trader." Not useful.
- **Self-praise without a specific behavior.** "I'm crushing it this week." Not useful.

## Weekly aggregation

After a week of entries, aggregate:

- **Trade count:** [N]
- **Approved setups vs UNAPPROVED:** [%]
- **Rule-violations per trade:** [avg]
- **Win rate (approved only):** [%]
- **Avg R (approved only):** [R]
- **Lessons that recur:** [list the patterns]

If unapproved trades win at a higher rate than approved trades for three weeks in a row, your system is incomplete — there is a setup happening in the wild that you haven't formalized. Capture it.

If violations are consistent (e.g., always exiting early), the violation is a system problem, not a discipline problem. Fix the rule (e.g., add a "partial exit at +1R, runner to +3R" rule).

## On the prop firm context (The5ers, FTMO, etc)

Prop firm rules add hard constraints:
- Maximum daily loss
- Maximum total drawdown
- Required win rate or hit-rate for payout

The journal entry should flag if a trade brought you within 25% of any of these limits. Especially daily loss. The risk of failing the challenge from one tilted day is the single largest career risk for a prop trader.

If a trade breaches the cool-off rule or daily loss approach, mark it RED and write a 2-sentence root cause. RED entries are reviewed at end of week, every week, no exceptions.

## On the lifestyle frame

The PPL school + The5ers prop frame in the AKHARA Command Console targets 30–60 min/day of trading by month 6. The journal is part of that 30 minutes — roughly 5 minutes per trade, capped at 20 minutes/day total.

Journal entries longer than 5 minutes are doing too much. Cut to the structure.

## Refusals

Refuse to write a journal entry for:

- A trade where the user cannot name the entry rule. The whole point is rule-following; an entry without a rule is unjournal-able. Push back: "Which approved setup was this? If none, mark it UNAPPROVED."
- A trade taken outside trading hours. Same reason.
- A trade where the user wants to record only the win and skip the rule-check. The rule-check is the value.

## The brutal version

Most journals are useless because they record what happened without diagnosing why. The trader stays the same. The journal that scores rules, names violations, and updates the system is the one that compounds.

Five minutes of structured journaling beats fifty minutes of feelings every time.
