---
name: code-archeologist
description: Use when the user opens an unfamiliar codebase, joins a new project, or asks "how does this work?" Maps the architecture before touching anything. Reads the git log, the entry points, the data shape, and the recent changes — in that order — before proposing any modification.
---

# code-archeologist

Most bugs introduced into unfamiliar code come from assuming. Junior engineers read the function they're modifying. Senior engineers read the system that function lives inside. This skill enforces the senior pattern.

## The order of operations

Do not skip. Do not reorder. The order matters because each step calibrates the next.

**1. The README and top-level layout (5 min).**
- Read `README.md`. If it lies, note that — and read the code anyway.
- `ls` the top-level. Identify: source directory, test directory, config, build files.
- Identify the language and framework from package files (`package.json`, `pyproject.toml`, `Gemfile`, etc).
- Identify the entry point. For services: the main process. For CLIs: the bin script. For libraries: the public exports.

**2. The git log (10 min).**
- Last 20 commits. Whose names recur — those are the maintainers.
- Recent commit messages. What has changed in the last month? Major refactors? Migrations? Hotfixes?
- The file you intend to modify: its last 5 commits. Why did each one happen?
- Files that have changed in lockstep with your target. These are the coupling. Modify them together or you break things.

**3. The data shape (15 min).**
- Find the database schema (migrations, models, `schema.sql`). Sketch it on paper or in a note.
- For each table relevant to your task: list the columns, the nullability, the unique constraints, the foreign keys.
- Find the API contracts (OpenAPI, GraphQL schema, type definitions). Map the inputs and outputs of the endpoints near your task.
- Note any field that is `JSON` or `TEXT` storing structured data — those are landmines.

**4. The entry point to your target (20 min).**
- Trace from the user-facing entry point to the function you intend to modify.
- For each layer (controller, service, repository): read the file. Note the patterns.
- Identify the unit of testing — does this project test controllers? Services? End-to-end? You will write tests in the same style.

**5. The function itself and its callers (15 min).**
- Read the target function, top to bottom, no skimming.
- Read the function above and below it in the file.
- `grep` for callers. If under ten, read each one. If over ten, sample five — first, last, three random.
- Read existing tests for the function. If none, that is a signal.

**6. The recent failures (5 min).**
- Search the issue tracker for the file or function name. Are there open bugs? Closed ones with surprising fixes?
- Search the logs (if accessible) for errors involving this code.

Total: about 70 minutes. Most engineers skip this and spend three hours debugging instead.

## What to write down

A short note in the scratchpad. Three sections:

**Map.** Bullet list. The four to seven boxes that make up the system at a high level. One sentence each.

**Patterns.** The two or three idioms this codebase uses that you must match. ("Repositories return `Result<T>`. Controllers throw. Errors flow up.")

**Sharp edges.** Anything that surprised you. ("The `users.deleted_at` column exists but is never checked outside the auth layer." "The `Order` model has both `status` and `state` fields and they are not synonyms.")

After the change, update this note. It becomes onboarding material for the next person.

## When you find smell

You will find code that smells. Bad names. Duplicated logic. Outdated comments. Dead branches. Resist the urge to clean.

The first contribution to a new codebase should be the smallest one that solves the stated problem. You have not yet earned the right to refactor. Refactors before understanding are how senior engineers break things in their first month.

The exception: tiny renames that fix obvious typos can be fixed in a separate PR, after your task lands.

## When the README lies

Common case: the README describes the system as the maintainer wishes it were, not as it is. Symptoms:
- "We use Postgres" but `config.yaml` says SQLite.
- "All routes require auth" but you find a public endpoint.
- "Tests run on every commit" but CI is red and ignored.

When you spot this, do not trust the README on anything. Read the code as ground truth.

## When the code is large

For a codebase over 100K lines, full read is impossible. Instead:
- Focus the archaeology on the slice relevant to your task.
- Use `grep` and call-graph tools to expand outward as needed.
- Skim only the file headers in unrelated directories — they tell you what lives where.

## Patterns to look for

Codebases tend to fall into archetypes. Identify yours fast:

- **Layered (controllers/services/repositories).** Conservative. Modify within layer boundaries.
- **Domain-driven (bounded contexts, aggregates).** Modifications often cross multiple files. Read the aggregate root carefully.
- **Functional/pipeline (data flows through transformations).** Side effects are isolated. Modify a transformation, not the pipeline.
- **Spaghetti (no clear pattern).** Move slowly. Add tests for any function you touch. Leave it slightly better than you found it.
- **Framework-driven (Rails, Django, NestJS).** The framework's conventions are the architecture. Match them.

## Refuse to modify when

- You have not identified the entry point.
- You cannot describe the data shape on paper.
- You cannot name three other files that will be affected by your change.

If any of these is true, you are not ready to modify. Read more.

## The brutal version

A senior engineer's first hour in a new codebase looks like nothing — they are reading. A junior's first hour looks productive — they are typing. The senior ships the change cleanly that afternoon. The junior ships a regression by tomorrow.

The archaeology is the work. The typing is the easy part.
