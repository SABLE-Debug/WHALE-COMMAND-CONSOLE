---
name: migration-plan
description: Use when the user needs to migrate a schema, change a framework, swap a dependency, or any change that touches many files and cannot be rolled back cleanly. Produces an ordered plan with reversibility checkpoints, dual-write windows where needed, and a "stop if you see X" exit condition at each step.
---

# migration-plan

Migrations fail not because the destination state is wrong, but because the path between states is wrong. The plan is the path. A good plan can be paused at any step and still leave the system working.

## The three migration archetypes

Identify which one you are doing. The plan shape differs.

**1. Expand → migrate → contract.** Add the new shape alongside the old. Move data and writes to the new shape. Remove the old shape. Used for schema changes that cannot be done in a single transaction.

**2. Dual-write window.** Old and new systems both receive writes. Reads continue from old until cutover. Used for swapping databases or major services.

**3. One-shot cutover.** Stop traffic, change everything, restart. Used only when downtime is acceptable and the change is small.

If you cannot place your migration in one of these three, you are not ready to plan it.

## The contract

Output, in this exact order:

1. **The end state.** One paragraph. What the system looks like when this is done.
2. **The archetype.** One of the three above. Justify in one sentence.
3. **The steps.** Numbered. Each step has: action, verification, rollback, exit condition.
4. **The point of no return.** The single step after which you cannot cleanly roll back without data loss. Mark it explicitly.
5. **The total elapsed time estimate.** Wall-clock, including verification.

If you cannot answer #4, the plan is not complete. Keep working.

## Step format

Every step must contain:

- **Action.** What you do. Concrete commands or operations.
- **Verification.** How you know it worked. A query, a metric, a probe.
- **Rollback.** The command to undo, OR the explicit statement "not rollback-able from this step — see step N for forward fix."
- **Exit condition.** The signal that says "stop, escalate, do not proceed."

A step without a verification is not a step. It is a guess.

## Schema migrations specifically

For database schema changes, use the expand-migrate-contract pattern:

**Expand (additive only):**
- Add new columns as nullable, no defaults that lock the table.
- Add new tables. Do not drop or modify existing ones.
- Add indexes concurrently (Postgres) or with online DDL (MySQL).
- Deploy code that reads from both old and new columns, writes to both.

**Verification:** new column populated for new rows, query plans use new index, no errors in logs.

**Migrate (backfill):**
- Backfill the new shape in batches. Batch size: 1000 to 10000 rows. Sleep between batches.
- Monitor lag, locks, and replication delay.
- Idempotent — running the backfill twice must produce the same result.

**Verification:** count of unmigrated rows is zero. Sample comparison between old and new shape.

**Contract (subtractive):**
- Deploy code that reads from new column only.
- After one week of no errors, drop the old column.

**Point of no return:** the drop. After this, the migration is permanent.

## Framework or library swaps

Same archetype, different surfaces. Replace "column" with "module".

**Expand:** Install the new library alongside the old. Build an adapter that exposes the same interface as the old, backed by the new.

**Migrate:** Replace callers one at a time. Run both old and new in parallel, compare outputs in development. Diff log for any divergences.

**Contract:** Remove the adapter. Remove the old library from dependencies.

**Point of no return:** removing the old library from package files. After this, reverting requires a re-install and a re-test of every caller.

## Dependency upgrades

For major version upgrades (1.x → 2.x), treat as a swap. Read the migration guide and write down every breaking change. Map each breaking change to the files in your codebase that will be affected.

If the count of affected files is over twenty, split into multiple PRs by directory or layer.

## Cutover migrations (when downtime is okay)

Rare but real — internal tools, off-hours systems, prototypes. Plan must include:

- The downtime window, in minutes.
- The announcement to users, drafted in advance.
- The rollback path if the new system fails to come up. Specifically: how long to wait before declaring failure and rolling back. Set a timer.
- The smoke tests to run before declaring success.

## Pre-flight checklist

Before executing step 1, confirm in writing:

- A recent backup exists and has been tested for restorability.
- The team is aware of the migration window.
- A monitoring dashboard is open for the relevant metrics.
- An "abort" command is documented and tested.
- The on-call engineer is paged in.

Skip this list, and you will execute the migration solo, and you will discover the backup was broken when you needed it.

## Communication during execution

After each step:
- Post the action taken, the verification result, and the next step.
- If a step takes longer than expected, post that too. Silence breeds escalation.
- If you hit an exit condition, post the exact symptom and stop. Do not improvise.

## When the migration goes wrong

The plan accounts for this. Re-read your own rollback notes. Execute them in reverse order from your current step.

If rollback is impossible (you crossed the point of no return), the recovery is forward — apply the planned fix, then verify. Do not panic-improvise.

If both rollback and forward-fix fail, restore from backup. This is what the backup is for. The lost data between the backup and now is the cost of the migration going wrong. Accept it and move on.

## After the migration

Write the postmortem the same day. Three sections:
- What happened versus what was planned.
- What surprised you.
- What you would do differently next time.

This document is worth more than the migration itself. Save it.

## The brutal version

Migrations are not events. They are weeks. Plans that say "do it Sunday night" are wishes. Real plans have phases, checkpoints, dual-write windows, and the discipline to stop when something looks wrong. The discipline is the skill. Everything else is execution.
