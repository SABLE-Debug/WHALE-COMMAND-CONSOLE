# MOBIUS — Handoff Prompt

Paste this entire document into a new Claude Code session in a fresh repo. It gives the new Claude full context about the brand, the business model, the skills library, the visual identity, the technical infrastructure, and what to build first.

---

## 0. WHO THIS IS FOR

You're picking up the MOBIUS project from a separate repo (`SABLE-Debug/WHALE-COMMAND-CONSOLE`). The operator wants to either continue building MOBIUS here or fork specific components. Your job is to:

1. Read every section of this doc before acting
2. Pull source files from the reference repo where directed
3. Ask one clarifying question if the operator's intent is unclear, then act

Default to action over questions. The operator runs in wartime mode — make reasonable calls, ship, adjust.

---

## 1. WHO MOBIUS IS

**Brand name:** MOBIUS  
**Operator base:** Akhanya, Cape Town (SAST timezone)  
**Brand mark:** Two interlocking ribbon loops forming a Möbius-style infinity silhouette. White ribbon on void-black background. Photographic 3D hero render + vector flat silhouette for icons.  
**Tagline frame:** "Not a logo. The system."  
**Voice:** Brutalist. Monastic restraint. Short serif sentences with one italic phrase per paragraph. No marketing fluff. (See full rules in section 6.)

**Personal stack:**
- PPL trading school (daily practice)
- The5ers / prop firm trading (cashflow practice)
- MOBIUS (the agency / studio — the main business)
- Target lifestyle: 30–60 min/day by Month 6 through full automation

---

## 2. WHAT MOBIUS SELLS

**Pivoting from:** "AI operating departments for med spa rollups" (original AKHARA positioning)  
**Pivoting to:** "Brand & AI Operating System for AI-native Series A/B startups"  

The pivot is mid-decision. Operator is running a 7-day test to confirm SaaS-niche traction before fully committing. Current console still references both positioning in places.

**Offer:**
- Setup: $30–60K, 14-day brand system delivery
- Retainer: $5–15K/mo for ongoing design + AI content production
- Term: 6-month minimum, month-to-month after

**ICP (current target test):**
- Series A / B AI-native startups, $5–30M ARR, raised in last 12 months, 10–50 employees, technical founders, no design team

---

## 3. THE OPERATING MODEL — "Path E"

The chosen growth path is "Path E — Surgical + Public Mirror":

- **5 hyper-researched audit Looms per month** (6 hours of research per Loom)
- **2 public audit essays per month** (named or anonymized, published on owned channels)
- **First close target: 5–6 weeks** ($15K MRR + $7.5K setup, Executive tier)
- **6-month target: $45–60K MRR** stacked across 3–4 clients
- **Lifetime target: $100–500K MRR solo** as the public corpus drives inbound

Why Path E over higher-volume cold outbound:
- Same first-close speed as volume play
- Compounding asset (the corpus) reduces workload over time
- Bounded downside, asymmetric upside
- Achieves the stated 30–60 min/day lifestyle target by Month 6+

Reference paths A/B/C/E live in `index.html` Chapter 05 of the source repo. Read them for the full math.

---

## 4. THE VISUAL IDENTITY

**Status:** The original AKHARA aesthetic (void/bone/gold/serif/monastic) is being deprecated. The new MOBIUS aesthetic is "Editorial × AI-native × Premium dark mode × Organic 3D × Neon gradient accents."

**Reference brief:** `design/CLAUDE_DESIGN_BRIEF.md` in the source repo contains the full design system spec. Pull it directly:
```
https://raw.githubusercontent.com/SABLE-Debug/WHALE-COMMAND-CONSOLE/main/design/CLAUDE_DESIGN_BRIEF.md
```

**Quick token reference:**

| Token | Value | Use |
|---|---|---|
| `--void` | `#050404` | Primary dark background |
| `--ink` | `#0E0D0B` | Surface (cards) |
| `--bone` | `#F2EDE4` | Primary text on dark |
| `--smoke` | `rgba(242,237,228,0.55)` | Secondary text |
| `--peach` | `#F4A977` | Warm accent / CTA |
| `--gradient` | `linear-gradient(135deg, peach → coral → electric → mint)` | Illustrations only |

**Typography:**
- Display serif: Editorial New (or PP Editorial New, or Migra)
- Body sans: Geist (or Söhne, or Inter)
- Mono: Geist Mono (or Söhne Mono, for tags + labels)

**Brand mark assets** in source repo:
- `icon-180.png`, `icon-512.png`, `icon-1024.png` — apple touch icons, void bg
- `design/mobius-mark-light.png` — white mark, transparent bg
- `design/mobius-mark-dark.png` — black mark, transparent bg
- `design/mobius-mark.svg` — vector source

---

## 5. THE SKILLS LIBRARY (32 skills)

Custom Claude Code skills calibrated to MOBIUS's voice and operating principles. Each is a markdown file with YAML frontmatter at `.claude/skills/<name>/SKILL.md`.

**One-command global install on the operator's machine:**
```bash
git clone https://github.com/SABLE-Debug/WHALE-COMMAND-CONSOLE.git /tmp/mobius-source
bash /tmp/mobius-source/.claude/install.sh
```
This copies every skill to `~/.claude/skills/` globally. Skills then work in any Claude Code session.

**Full skill list:**

| Skill | Triggers |
|---|---|
| `ship-it` | "ship", "just do it" — brutalist execution |
| `senior-dev` | non-trivial code — staff-level judgement |
| `code-archeologist` | unfamiliar codebase — map before touching |
| `migration-plan` | schema/framework migrations — reversibility checkpoints |
| `debug-jig` | stuck bugs — forced bisection protocol |
| `red-team` | "what could go wrong?" — adversarial threat-model |
| `brutal-review` | reviews — verdict-first, severity-ranked |
| `red-pen` | before sending anything outbound — hostile-reader self-review |
| `icp-filter` | rank prospect lists by AKHARA/MOBIUS ICP |
| `proposal` | one-page proposal in house voice |
| `pricing-floor` | refuses underpricing, holds the price floor |
| `cold-outreach` | first-touch DM/email, three-line structure |
| `objection-handler` | canonical responses to prospect objections |
| `house-voice` | all MOBIUS-facing copy, banned-word list |
| `audit-loom` | 5-beat audit Loom script + shot list |
| `instagram-post` | single IG post in house voice |
| `caption-cutter` | three-pass cut to under 30 words |
| `thumbnail-brief` | Krea/MJ prompts in brand aesthetic |
| `script-doctor` | review any video script |
| `html-promo` | landing page HTML → scenes JSON for video promo |
| `morning-stack` | top 3 daily actions, leverage-ranked |
| `weekly-review` | Friday review with drop/change/hold |
| `inbox-triage` | sort inbox dump into four buckets |
| `meeting-prep` | one-page brief with the ask |
| `noise-cancel` | strip AI-tells and marketing fluff |
| `decision-jig` | forces binary call to stop rumination |
| `wartime` | high-decision, low-question mode |
| `peacetime` | careful mode for irreversible calls |
| `socratic` | coach via three targeted questions |
| `cape-town-day` | three-track daily plan (MOBIUS / PPL / Prop) |
| `trade-journal` | post-trade reflection structure |
| `ppl-debrief` | post-PPL session debrief produces drill |

Read each skill's `SKILL.md` directly at `https://github.com/SABLE-Debug/WHALE-COMMAND-CONSOLE/tree/main/.claude/skills/`.

---

## 6. HOUSE VOICE (the writing rules)

Every piece of MOBIUS-facing copy follows these:

**Banned words (replace or cut):** leverage, utilize, robust, streamline, elevate, unlock, empower, seamlessly, cutting-edge, synergy, comprehensive, delve, tapestry, "I'd be happy to," "Great question," "It's worth noting that"

**Sentence patterns:**
- Flat declarative: "MOBIUS sells systems."
- Two-clause contrast: "Most studios sell hours. MOBIUS sells systems."
- One-noun reveal: "The cost is not capital. It is conviction."
- The trio: "Researches. Drafts. Ships."
- The rule: "Three whales beat thirty minnows. Always."

**Hard rules:**
- Short sentences. Most under 15 words.
- Concrete over abstract. Numbers, names, time. Always.
- No throat-clearing. Start at the point.
- One italic accent per paragraph. Maximum.
- Sign emails with first name only.

Full ruleset in `house-voice` skill.

---

## 7. THE TECHNICAL STACK

### 7a. Video pipeline (Remotion + ElevenLabs + ffmpeg)

Location: `video/` in source repo.

**Two video formats supported:**
1. **Agent intros** — `video/src/AgentIntro.tsx` — one composition per agent
2. **Landing-page promos** — `video/src/LandingPromo.tsx` — 6 scene types: title, imessage, stat-block, bullet-reveal, quote, outro

**Setup once on operator's machine:**
```bash
cd video
npm install
cp .env.example .env  # paste ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID
brew install ffmpeg
```

**Run a video:**
```bash
npm run video <agent-id>       # agent intro
npm run promo <scenes.json>    # landing promo
npm run studio                 # live Remotion Studio
```

### 7b. Command Console (`index.html`)

The flagship brand artifact. ~4,700 lines of editorial HTML. Single self-contained file. Acts as both the operating doctrine and the primary brand asset.

**Chapters:**
- 01: Hero + cover
- 02: ICP ranking (5 tiers)
- 03: Employees (10 AI agents)
- 04: Stack (tools)
- 05: Paths to MRR (A, B, C, E)
- 06: Outreach (the audit Loom)
- 07: Lifestyle
- 08: Workload
- 09: Overhead
- 10: Operating checklist
- 11: Niche doctrine
- 12: Automation (skills, scheduling, dispatch, custom apps)

Live URL: `https://sable-debug.github.io/WHALE-COMMAND-CONSOLE/`

### 7c. Skills library

`.claude/skills/<name>/SKILL.md` plus `.claude/install.sh` for global install.

---

## 8. AUTOMATION DOCTRINE

**Trade money for time, not the opposite.**

Four layers of automation, applied in order:

1. **Skills** — the 32-skill library above
2. **Scheduling** — `/loop` skill, session-start hooks, cron
3. **Dispatch** — Claude Code agents with MCP tool access (GitHub, Slack, HubSpot, Gmail, Drive)
4. **Custom apps** — when a sub is too expensive or doesn't fit, Claude builds it

**Build-vs-subscribe decision matrix (3 tests):**
- Is the work objectively hard? (cryptography, timezone math, audio) → subscribe
- Can Claude Code build the MVP in a day? → build
- Does the sub own data you'd want to take? → lean build

**Held sub stack:** Claude Max ($200) + Claude API ($60) + ElevenLabs ($22) + Make.com ($9) + Cloudflare ($1) + LinkedIn Sales Nav ($99 during outbound months) = **$292/MO mid-load**, $391/MO with Sales Nav.

**Build candidates (Claude builds these in ~1 day each):**
1. Custom Loom recorder (replaces $15/mo Loom)
2. Lightweight CRM (replaces $50/mo HubSpot upgrades)
3. IG/LinkedIn scheduler (replaces $15/mo Buffer)
4. Audit Loom dossier builder
5. Proposal generator + PDF export (replaces $25/mo DocuSign)
6. Daily KPI dashboard
7. akhara.co/mobius landing page

**Composio integration** is the unlock layer — connects Claude to 100+ APIs (Gmail, LinkedIn, Crunchbase, Hunter.io, Apollo, Stripe, etc.) so I can drive systems without manual handoffs. Operator should sign up at composio.dev and wire keys.

---

## 9. CURRENT STATE — WHAT'S BUILT

In the source repo (`SABLE-Debug/WHALE-COMMAND-CONSOLE`) on `main`:

- ✅ `index.html` — full Command Console, V15.0, with Path E + Chapter 12 Automation
- ✅ `icon-180.png`, `icon-512.png`, `icon-1024.png` — MOBIUS infinity mark, void bg
- ✅ `design/mobius-mark.svg` + light/dark transparent variants
- ✅ `design/CLAUDE_DESIGN_BRIEF.md` — full design system spec
- ✅ `.claude/skills/` — 32 skills + `install.sh`
- ✅ `video/` — Remotion + ElevenLabs + ffmpeg pipeline
- ✅ `avatars/` — 4 compressed JPGs for the Sovereign agents (Scout, Editor, Producer, Voice)
- ✅ GitHub Pages serving the live console at `https://sable-debug.github.io/WHALE-COMMAND-CONSOLE/`

**Pending / not yet built:**
- ❌ Krea hero ribbon render (operator to upload to `design/mobius-hero.jpg`)
- ❌ Portfolio one-page site (Claude Design output → integration)
- ❌ Audit Loom intro/outro card templates in new visual style
- ❌ Composio integration + `run-pilot` skill
- ❌ Domain decision (stay on akhara.co or migrate to mobius.co)
- ❌ 7-day test execution against SaaS niche
- ❌ Sequential build of the 7 sub-replacement apps

---

## 10. NEXT MOVES (recommended priority order)

When the operator says go, in this order:

1. **Drop the Krea hero render** into `design/mobius-hero.jpg`. Wire it into:
   - `index.html` hero chapter cover (replace or augment current chapter-cropped-title)
   - Loom intro card template (Remotion `LandingPromo` first scene)
   - Social card / OG image (1200×630)

2. **Run the 7-day SaaS Brand DaaS test.** Build the kit:
   - Updated `icp-filter` calibration for AI Series A
   - Brand-audit Loom template (5-beat structure for design audits)
   - SaaS-brand proposal template ($30K setup + $10K/mo retainer)
   - Cold DM templates for LinkedIn / Twitter / email

3. **Set up Composio.** Operator wires the keys at `composio.dev`. Then I build the `run-pilot` skill that automates the entire test pipeline (target list → research → Loom draft → DM send → reply monitoring).

4. **Build the portfolio one-pager.** Operator passes `CLAUDE_DESIGN_BRIEF.md` + 5 reference images to Claude Design. Output comes back. I integrate into the repo.

5. **Build the first sub-replacement app.** My pick: Loom-style recorder, ~1 day. Replaces $15/mo and gives operator a custom-branded video link experience.

6. **Pivot decision at Day 30.** Based on 7-day test reply rates, either fully commit to SaaS pivot (rebrand `index.html` chapter on niche, retarget Path E content) or stay AKHARA med-spa positioning and only adopt the MOBIUS visual rebrand.

---

## 11. HOW TO USE THIS DOC IN A FRESH REPO

If you're picking this up in a new repo, your immediate steps:

1. **Pull the skills library** from the source repo:
   ```bash
   git clone https://github.com/SABLE-Debug/WHALE-COMMAND-CONSOLE.git /tmp/mobius-source
   cp -r /tmp/mobius-source/.claude .
   ```

2. **Pull the brand assets** you need:
   ```bash
   cp -r /tmp/mobius-source/design .
   cp /tmp/mobius-source/icon-*.png .
   ```

3. **Pull the video pipeline** if relevant:
   ```bash
   cp -r /tmp/mobius-source/video .
   ```

4. **Confirm intent with the operator:**
   - Are you continuing the MOBIUS build in this new repo? Or forking specific components?
   - Should the new repo serve a different purpose (e.g., separate product), or be a clean restart of MOBIUS?
   - Domain on this repo: akhara.co, mobius.co, or new?

5. **Read the source `index.html`** for the operating doctrine before writing any copy. Match the voice exactly.

6. **Run wartime defaults** — fewer questions, more decisions, full ownership of reversible calls. Operator prefers velocity.

---

## 12. CONSTRAINTS THE NEW CLAUDE MUST RESPECT

- **Never use AI-tell language.** Run `noise-cancel` discipline on every output.
- **Never commit a duplicate HTML file** (we burned this lesson once).
- **Never break existing localStorage keys** when modifying the console's checklist JS. Migrate, don't replace.
- **Always preserve `akhara-check-*` keys** unless an explicit migration is in place.
- **Avatars must be lazy-loaded + compressed JPG** (not 23MB PNGs).
- **Loader dismissal must always have a CSS fallback** + an early-parse JS trigger + first-interaction trigger.
- **Custom apps go in subdirectories, not the repo root.**
- **No emojis in operator-facing or brand-facing copy.**
- **All MOBIUS copy reads like the existing `index.html`** — short serif sentences, one italic accent per paragraph, banned-word list enforced.

---

## 13. REFERENCE LINKS

- Source repo: https://github.com/SABLE-Debug/WHALE-COMMAND-CONSOLE
- Live console: https://sable-debug.github.io/WHALE-COMMAND-CONSOLE/
- Design brief: https://raw.githubusercontent.com/SABLE-Debug/WHALE-COMMAND-CONSOLE/main/design/CLAUDE_DESIGN_BRIEF.md
- Skills index: https://github.com/SABLE-Debug/WHALE-COMMAND-CONSOLE/tree/main/.claude/skills

---

## 14. FIRST RESPONSE EXPECTED FROM NEW CLAUDE

When the operator pastes this in a new repo, respond with:

1. One-sentence confirmation that you've absorbed the context.
2. One question — the single highest-leverage clarification needed before starting (likely: "Is this new repo for MOBIUS continuation or a different product?").
3. Three concrete next steps you propose, in priority order.

Then wait for the operator's call. Move at their pace.

---

**End of handoff prompt.**
