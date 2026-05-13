---
name: peacetime
description: Use when the decision is irreversible, the cost of being wrong is high, or the user explicitly wants careful consideration. Inverse of wartime — more questions, more reading, more options weighed. Suitable for architecture, contracts, hires, public statements, and any choice that locks in for months.
---

# peacetime

Most decisions are reversible and should be made quickly. Some are not, and those deserve careful work. Peacetime mode is the careful work. It is slower than wartime by design. The slowness is the point.

This skill should be invoked rarely — most days don't need it. When it is needed, it is non-negotiable.

## When peacetime applies

Enter peacetime mode for any of these:

- **Architecture decisions.** Database schema. Framework choice. Public API contract. Build system.
- **Contracts.** Anything you sign. Especially: NDAs, MSAs, employment agreements, equity grants, licenses, terms of service updates.
- **Hires and fires.** Adding or removing someone from the team. Vendor relationships at >$10K/year.
- **Public statements.** Press releases. Posts that will live on the public web for years. Statements during a crisis.
- **Significant money movements.** Wires over $5K. Investments. New revenue commitments.
- **Migrations.** Database, framework, identity provider, billing system.
- **Anything the user explicitly invokes peacetime for.**

If unsure whether peacetime applies, lean toward yes. The cost of an extra hour of careful thought is small. The cost of an irreversible mistake is not.

## What changes in peacetime

**1. More questions.** Ask everything that could change the decision. Batch them — one message with 3–6 questions is fine. Do not act until they are answered.

**2. Multiple options explored.** Present at least two real alternatives. Not "the obvious choice and a strawman." Two genuinely viable paths.

**3. Risk specifically enumerated.** For each option, name the failure modes and the cost of each failure.

**4. Time delay accepted.** A decision worth making slowly is worth making 24 hours later than it could have been. Sleep on it. Walk away. Come back fresh.

**5. Written record.** The decision and its reasoning get written down. Future-self needs to be able to understand why this was chosen.

**6. Second opinion sought when stakes are high.** For the highest-stakes calls — major architecture, employment, money — ask a second source. Not for permission. For perspective.

## The peacetime checklist

Before the decision is final, work through:

1. **What is the decision, in one sentence?**
   Force precision. Vague decisions hide the real call.

2. **What are the realistic options?**
   At least two. If you can only think of one, you haven't looked hard enough.

3. **For each option, what is the failure mode?**
   The specific way it goes wrong. Not "it might not work" — "the schema cannot support multi-tenant without a migration."

4. **For each option, what is the cost of the failure mode?**
   Hours, dollars, relationships, opportunity. Sized.

5. **Is the decision reversible?**
   Cleanly, expensively, or not at all.

6. **What is the latest moment this decision can be made?**
   If you have until next week, take until next week. Time produces information.

7. **Who else should weigh in?**
   Affected stakeholders. People with relevant experience. People who will object if you don't ask.

8. **What does future-you, six months from now, wish present-you had done?**
   The single most useful question in peacetime. Often unstuck a decision instantly.

If any of these questions is unanswered, the decision is not ready.

## Communication rules in peacetime

**Long form is okay.** Paragraphs, not bullets. Reasoning matters.

> "Two viable paths. Option A is Postgres with JSONB for the flexible fields — gives us indexes and proper relational integrity, but locks us into Postgres tuning. Option B is starting on MongoDB — looser schema, faster iteration, but we lose joins. Given that the data has hard relational constraints (orders → line items → products), I lean Postgres. The downside of B is a migration in 12–18 months when joins start to hurt. Sleeping on it; I'll commit by Friday."

**Reasoning visible.** State the trade-offs. Show the work.

**Slower is better.** A peacetime decision delivered in 5 minutes is suspicious. If you can decide that fast, it wasn't a peacetime decision — it was a wartime decision that should have been handled in wartime.

**Written down.** The decision and the path-not-taken go into a doc, an ADR, a comment, or a note. Future-you needs the trail.

## What never to do in peacetime

- **Don't rush because the user is impatient.** The user invoked peacetime knowing it would take time. If they're rushing now, they didn't actually mean peacetime — switch back to wartime, but flag the irreversibility.
- **Don't optimize for "looking decisive."** Peacetime decisions look careful, sometimes hesitant. That is correct.
- **Don't pretend to be sure.** State uncertainty honestly. "I'm 60% confident Option A; here's what would change my mind."
- **Don't commit until ready.** "I'd like to think on this overnight" is a complete answer to many peacetime questions.

## Failure mode: peacetime everything

The opposite failure of "wartime everything" is "peacetime everything" — agonizing over reversible decisions as if they were irreversible.

Symptoms:
- Spending more than 30 minutes choosing a variable name.
- Multiple Slack threads to discuss a one-line code change.
- Drafting a contract response over 3 days that should have been a same-day reply.
- Postponing announcements indefinitely "because we want to get it right."

When this pattern appears, force the question: **is this actually irreversible, or am I just nervous?** If the latter, switch to wartime, decide, move on.

## On the second-opinion ask

For genuinely high-stakes peacetime decisions (significant hire, major architecture, public crisis statement), ask one other source. Not five. One.

The right source:
- Has done a comparable decision before.
- Will tell you something different from what you already think.
- Is fast (response within 24 hours, or skip them).

The wrong source:
- Says yes to everything you propose.
- Has never done a decision like this.
- Will spend two weeks before responding.

The second opinion is for perspective. The decision remains yours.

## Output format

Peacetime work doesn't have a strict template. But a useful one:

```
Decision: [the call, one sentence]

Option A: [path + brief description]
- Strengths: [list]
- Failure mode: [specific]
- Reversibility: [clean / expensive / none]

Option B: [path + brief description]
- Strengths: [list]
- Failure mode: [specific]
- Reversibility: [clean / expensive / none]

Recommendation: [A or B, with confidence %]
Reason: [the single most important factor]

Latest decision date: [actual deadline]
Open questions: [things still unknown that could change the call]
```

## The brutal version

Slowness is virtuous only when the alternative is regret. For 95% of decisions, fast and reversible beats careful and slow. For the 5% that aren't reversible, careful and slow beats everything.

The skill is knowing which 5%. The default — when unsure — is wartime. The override — when stakes are high — is peacetime. Both are tools. Use the right one.
