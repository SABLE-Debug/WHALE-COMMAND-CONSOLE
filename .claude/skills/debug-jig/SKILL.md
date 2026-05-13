---
name: debug-jig
description: Use when the user is stuck on a bug, has tried multiple fixes without success, is "trying things" reactively, or describes a problem as "weird" or "intermittent". Forces a bisection protocol — formulate a hypothesis, design a test that distinguishes it from alternatives, run the test, update the model. Stops the spray-and-pray loop.
---

# debug-jig

Most debugging time is wasted on trying things, not learning things. This skill replaces reactive trying with deliberate bisection. The goal of each step is not to fix the bug — it is to remove half the possible causes.

## The contract

When invoked, you do not propose a fix. You propose a question and the experiment that answers it. After the user reports the result, you propose the next question. The fix comes at the end, not the start.

## The four-step loop

Repeat until the cause is isolated.

**1. State the symptom precisely.**
- What happens. What was expected. The exact error message, copied. The exact input. The exact environment.
- Strip "sometimes" and "weird" — replace with specific conditions. "It fails only on inputs with a leading zero" is useful. "It fails sometimes" is not.

**2. List the suspects.**
- Brainstorm 5 to 10 places the bug could live. Use the threat archetypes: the input, the parser, the business logic, the storage layer, the response, the client.
- Force breadth. If all your suspects are in one file, you are not looking broadly enough.

**3. Design the bisection.**
- Pick the experiment that, regardless of outcome, removes the most suspects.
- The right experiment splits the suspect list roughly in half.
- It must be reproducible — same input, same environment, same result.
- The expected outcomes must be distinguishable in advance. "It works" vs "it doesn't" is binary; that is good.

**4. Run and update.**
- Execute the experiment.
- Note the result, even if it is what you expected.
- Cross off the suspects it ruled out. Add any new ones it revealed.
- Loop.

When the suspect list is one item, you have found the cause.

## The cardinal rules

**Do not skip step 3.** "Let me just try X" is the spray-and-pray pattern. Every "try" without a hypothesis is wasted time, because you cannot interpret the result.

**Do not change two things at once.** If the bug disappears, you cannot tell which change fixed it. Change one variable per experiment.

**Do not trust your memory.** Write down each experiment, what you expected, what happened. The bug is in the gap between expectation and reality.

**Do not stop at the first plausible cause.** Confirm with a second experiment that the cause you found is *the* cause, not a coincidence. Reproducing the bug by re-introducing your suspected cause is the gold standard.

**Do not "fix" without understanding.** A fix that makes the symptom disappear without explanation will reappear in another form. Find the cause. Then fix.

## Standard bisections

For common bug shapes, the bisection is templated:

**Intermittent failures.** Suspect: race condition, environment variation, caching, time-of-day. Experiment: run the same test 100 times. If failure rate is 100%, it is not intermittent — your reproduction was incomplete. If it is 10%, look for shared state.

**"It works on my machine."** Suspect: environment differences. Experiment: containerize the failing scenario. If it still fails, it is the code. If not, diff the environments — versions, env vars, timezone, locale, file system.

**"It used to work."** Suspect: a recent change. Experiment: `git bisect`. Identify the commit that introduced the failure. Read it.

**"The fix doesn't work."** Suspect: cached artifact, wrong branch deployed, build did not run. Experiment: print a unique marker from your "fix" code and verify the marker appears at runtime. If it does not, the deployment is the bug.

**Off-by-one errors.** Suspect: boundary conditions. Experiment: test with n=0, n=1, n=many, and n=max. The bug lives at a boundary.

**Performance regressions.** Suspect: an N+1 query, a missing index, a synchronous call that became asynchronous, a hot loop that grew. Experiment: profile before and after. Compare flame graphs.

## Tools to reach for first

In priority order:

1. **Print statements.** Always allowed. The fastest tool. Add markers at suspected branches.
2. **Bisect.** Whether by git, by feature flag, or by commenting out half the code. The fastest way to halve the suspect list.
3. **Diff.** The diff between a working state and a broken state contains the cause. Find it.
4. **Logs.** Read them in chronological order. The cause precedes the symptom.
5. **Debugger.** Useful when the bug is local to a function. Less useful for distributed or async bugs.
6. **Profiler.** For performance issues only.

A debugger is not always better than a print statement. The faster tool is the one that ends the loop sooner.

## When the bug is your model, not the code

The hardest bugs are not in the code. They are in your understanding of how the code is supposed to work. Symptoms:

- You have tested every hypothesis and the bug still reproduces.
- The code does exactly what it says, but the result is wrong.
- You think the framework is buggy.

When this happens, the bug is in the docs you skimmed. Re-read them. Or build a tiny isolated reproduction with no framework and verify your assumption directly.

The framework is almost never buggy. The exception proves the rule.

## On reaching out

Stop solo-debugging after 90 minutes without progress. At that point:
- Describe the symptom and your bisection log to a colleague or back to the user.
- The act of explaining often reveals the cause. (The "rubber duck" effect is real and free.)
- If the explanation does not reveal it, the colleague's first question often does.

Do not be precious. The time spent stuck alone is more expensive than the interruption.

## Stop conditions

End the debug session when:
- The cause is identified and the fix is in place, with a regression test added.
- The bug is intermittent and rare enough that the cost of further investigation exceeds the cost of monitoring. Add an alert; move on.
- The cause is in a system you cannot fix (an upstream service). File the issue; add a workaround; move on.

## The brutal version

Debugging is a search through a possibility space. The cardinal sin is wasting steps on possibilities you already know are uninteresting. Every experiment must shrink the space. If it does not, do not run it.

The fastest debugger is the one with the smallest suspect list at every step.
