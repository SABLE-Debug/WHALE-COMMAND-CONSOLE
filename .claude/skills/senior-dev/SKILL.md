---
name: senior-dev
description: Use when writing or reviewing non-trivial code, designing data models, choosing dependencies, or making any decision that locks in shape. Forces staff-engineer-level thinking — what NOT to build, when an abstraction earns its weight, what the failure modes are, and what future-you will regret.
---

# senior-dev

A senior engineer's distinguishing trait is not "knows more syntax." It is **judgement about what to leave out**. Junior code adds. Staff code removes.

## The five questions before writing a line

Before any non-trivial code, answer these. If you cannot, you are not ready to write yet.

1. **What is the single thing this code must do?** State it as one sentence. If the sentence has an "and," you are designing two things — split.
2. **What is the smallest interface that exposes it?** One function with two arguments beats a class with five methods. Always.
3. **What inputs are real? What are hypothetical?** Code only for the inputs you have. Hypothetical inputs become bugs.
4. **Where does this run? Who calls it? Once or hot?** A function called once a day has different design constraints than one called per request.
5. **What is the failure mode I cannot tolerate?** Be specific — "data loss," "wrong charge to customer," "silent corruption." Then design against *that*, not against "errors" in general.

If the answer to #5 is "an exception is thrown," you do not need defensive code. The framework will surface it.

## When an abstraction earns its weight

Default: no abstraction. The cost of an abstraction is the cost of every future reader having to learn it, plus the cost of every future change having to fit through it, plus the cost of being wrong about the axes of variation.

An abstraction earns its weight when:
- It is used in **three or more places** today.
- The three uses share a **non-trivial invariant** — not just "they all call the same library."
- The cost of getting them out of sync is real (data corruption, security, compliance, money).
- You can name the abstraction in one noun that future-you will recognize.

If you cannot meet all four, write the code three times. The repetition is cheap. The wrong abstraction is expensive — every diff fights it.

## Data shape is the architecture

Code is replaceable. Data shape is not. Spend disproportionate care on:
- Database schemas, especially nullability, defaults, and uniqueness.
- The shape of objects passed between systems (API responses, queue messages, event payloads).
- The set of allowable states. Always ask: which combinations of fields are valid? Encode that. Illegal states should be unrepresentable.

If a field can be `null` and code paths don't handle it, the field will be `null` in production within a week.

## On dependencies

Every dependency is a small bet that the author will keep maintaining their package, that you will keep agreeing with their design, and that their bugs will be cheaper to inherit than to write yourself. Most bets lose.

Add a dependency only when:
- The thing it does is hard. (Cryptography. Timezones. Parsing. Network protocols.)
- It is widely used and stable. (Decade old, used by frameworks you already use.)
- The alternative is hundreds of lines of bespoke code with subtle bugs.

Do not add a dependency for:
- One-liner utilities. Write them.
- Style preferences. Match the existing style.
- "Maybe useful later." Add when needed.

## On errors

There are three kinds of errors:
- **Programmer errors** — bugs. Crash loudly. Don't catch. The stack trace is the documentation.
- **Expected-but-rare errors** — network failures, timeouts, race conditions on a shared resource. Catch where you can do something meaningful. Surface where you can't.
- **User errors** — invalid input. Reject at the boundary with a clear message. Do not let invalid data flow inward.

Catch-and-log-and-continue is almost always wrong. It turns a loud failure into a silent one. The cost is paid in production, by someone else, much later.

## On naming

Names are the only documentation that doesn't rot. Spend on them.

- Variables: nouns. `users`, not `result`. `nextRetry`, not `time`.
- Functions: verbs that state what they return. `getActiveUsers()` returns users. `isActive(user)` returns a bool.
- Booleans: prefix with `is`, `has`, `can`, `should`. `isReady`, not `ready`.
- Avoid `data`, `info`, `manager`, `handler`, `utils`, `helpers`. They mean nothing.
- A name is too short when readers must ask. It is too long when it shouts.

A well-named function with three lines of body needs no comment. A badly-named function with a five-line comment is still badly-named.

## On comments

Default to none. Write a comment only when:
- The code looks wrong but is right (a workaround, a non-obvious invariant, a benchmark-driven choice).
- A hidden constraint is enforced elsewhere and the reader needs to know.
- A behavior would surprise a careful reader.

Never write a comment that restates the code. Never reference the task that produced the change ("for X feature"). Never apologize in a comment ("ugly but..."). If the code is ugly, fix it. If you can't fix it, the comment doesn't help.

## On reading code before writing

Before you change a file, read:
- The function you are changing, plus the function above and below it.
- Every caller of the function you are changing, if there are fewer than ten.
- The tests for the function, if any.
- The git log for the file, last five commits.

This takes ten minutes. It prevents an hour of cleanup.

## The senior tell

A senior engineer's diff is smaller than a junior's diff for the same feature. The senior deleted more than they added. They left the code easier to delete than how they found it. They did not show their work — the work is invisible in the diff.

If your change is large and you cannot defend each chunk in one sentence, the change is too large. Split it.
