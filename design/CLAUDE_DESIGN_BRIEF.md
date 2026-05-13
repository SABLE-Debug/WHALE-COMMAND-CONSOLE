# AKHARA — Brand & Design System Brief
**For: Claude Design**
**Pasted alongside 5 reference images (editorial dark, organic 3D, gradient line art, big-serif hero, refined card UI).**

---

## 1. The pivot
AKHARA is repositioning from "AI departments for med spa rollups" to **a premium Brand & AI Operating System studio for AI-native Series A / B startups.** Same engine (productized service + AI agents + retainer). New ICP, new aesthetic.

## 2. Positioning, one line
> A studio that rebuilds the entire brand system of an AI-native startup in 14 days, then runs the AI operating layer on top of it for a monthly retainer. Not a logo. The system.

## 3. The buyer
- Series A / B AI-native startup ($5–30M ARR, raised in last 12 months)
- 10–50 employees, technical founders, no design team
- High willingness to pay, AI-friendly, makes decisions fast
- Distribution: they shop publicly on Twitter, Dribbble, in founder Slack groups

## 4. The offer
- **Setup:** $30–60K, 14-day brand system delivery
- **Retainer:** $5–15K/mo for ongoing design + AI content production
- **Term:** 6-month minimum, month-to-month after

## 5. Visual taste (synthesized from references)

**Northern stars:**
- ZROBIM architects (editorial typography at scale + atmospheric photography)
- Cannabis Lab / C.Lab (organic 3D, glass orbs, soft gradient surfaces)
- Nike ACG (dark, technical, sleek, Japanese-influenced)
- Agent Arcade (gradient line-art illustration + light-mode hero, dark-mode product viz)

**Aesthetic = Editorial × AI-native × Premium dark mode × Organic 3D × Neon gradient accents**

## 6. Palette

| Token | Hex | Use |
|---|---|---|
| `--void` | `#050404` | Primary background (dark mode default) |
| `--ink` | `#0E0D0B` | Surface (cards, sections) |
| `--bone` | `#F2EDE4` | Primary text on dark |
| `--smoke` | `rgba(242,237,228,0.55)` | Secondary text, captions |
| `--peach` | `#F4A977` | Warm accent (CTAs, highlights) |
| `--electric` | `#7B5BFF` | Cool gradient endpoint (illustrations only) |
| `--mint` | `#5BFFC2` | Secondary gradient endpoint (illustrations only) |
| `--coral` | `#FF6B6B` | Tertiary gradient endpoint (illustrations only) |
| `--gradient` | `linear-gradient(135deg, peach → coral → electric → mint)` | Used sparingly in illustrations + key moments |

Gradient is the signature element — never on solid backgrounds, only as line-art / illustration accents.

## 7. Typography

| Role | Font | Weight | Size guidance |
|---|---|---|---|
| Display serif | **Editorial New** (or PP Editorial New, or Migra fallback) | 300, italic-capable | 80–240px on hero |
| Display serif italic | Same family, italic | 300 | Used for second-line accent ("cotta" pattern from ZROBIM) |
| Body sans | **Geist** (or Söhne, or Inter fallback) | 400 / 500 | 16–24px |
| Mono | **Geist Mono** (or Söhne Mono) | 400, uppercase, 3–6px tracking | 11–14px for tags/labels |

Pairing rule: **one big serif headline + one italic serif accent + everything else mono or sans.** Never three weights of serif together.

## 8. Layout principles

- **Generous whitespace.** Editorial breathing room. Never crowded.
- **Asymmetric composition.** Left-third heavy or off-center heroes — never dead-center everything.
- **12-column grid with 8px base unit.** Spacing is always a multiple of 8.
- **Mobile-first.** Every component readable on a 375px viewport.
- **Atmospheric photography.** When images are used, they should feel cinematic — moody, single-source lighting, real environments. No stock.

## 9. Micro-interactivity + animation

These details are the difference between "designed" and "studio-grade":

- **Hover states:** subtle scale (1.02), gentle gradient glow, never bouncy
- **Cursor:** custom dot/blob that softly trails the cursor on desktop
- **Reveal-on-scroll:** stagger fade-in from below (10px Y offset, 400ms ease-out)
- **Page transitions:** smooth dissolves between routes, never hard cuts
- **Big type:** subtle gradient sweep on hover (1.5s, almost imperceptible)
- **3D objects:** gentle float + parallax rotation (CSS or Three.js, lightweight)
- **Gradient line art:** SVG paths with animated stroke-dashoffset for "drawing" effect on viewport entry
- **Buttons:** pill-shaped, soft gradient on hover, inset shadow on press

## 10. Component library required

Build these as a reusable token-driven system (CSS variables + a Tailwind config + a Remotion theme file):

1. **Buttons** — primary (peach-filled pill), secondary (outlined pill), tertiary (text only)
2. **Cards** — surface + 1px subtle border + 24px padding + optional gradient accent
3. **Tag pills** — small mono uppercase, optional dot indicator
4. **Nav** — pill-shaped centered or top-left mono nav with hover-glow
5. **Hero** — big serif + italic accent + atmospheric image right
6. **Stat block** — 4-up grid, big numbers, mono labels
7. **Quote** — large italic serif, centered, gold-em accent line
8. **Footer** — minimal, mono tags, links pill-styled
9. **Cursor follower** — JS component, optional opt-out
10. **Loading state** — soft gradient sweep, no spinner

## 11. Deliverables for Claude Design to produce

In order of priority — each one is independently usable:

1. **`portfolio.html`** — one-page studio landing site (hero, work showcase, services pricing, contact)
2. **`audit-loom-intro.html`** — 1920×1080 single-page that Remotion records as the audit Loom intro card
3. **`audit-loom-outro.html`** — same, for outro card with CTA pill
4. **`proposal-template.html`** — one-pager print-ready, A4
5. **`email-signature.html`** — under 600×200px, embedded-image safe
6. **`social-post-templates.html`** — IG 1:1, LinkedIn 1.91:1, X 16:9 — all sharing the same component
7. **`tokens.css`** — the design tokens file (colors, type, spacing) that everything imports from
8. **`tailwind.config.js`** — optional, for token-driven Tailwind setup

Each deliverable should be a single `.html` file (or paired `.html` + `.css`) using only the tokens. No external CSS framework dependencies unless trivial.

## 12. Copy direction (tone)

Confident, brutalist, no marketing fluff. Reference language:

- "We rebuild brand systems for AI-native companies in 14 days."
- "Not a logo. The system."
- "AI-native studio. Built for Series A."
- "Brand. Then the AI operating layer on top of it."
- "Three deliverables. One retainer. Zero hires."

Pattern: short serif sentence + one italic phrase per paragraph + numbers wherever defensible.

## 13. Constraints + integration

- **Mobile-first responsive.** Test at 375px, 768px, 1280px.
- **Dark mode default.** Optional light-mode variant via `[data-theme="light"]`.
- **No external image hosting.** Use placeholder URLs that I'll swap for self-hosted in the Remotion repo.
- **Each component must work as a Remotion `<AbsoluteFill>` at 1920×1080.** That means: no horizontal scroll, no `position: fixed`, no min-height: 100vh trickery.
- **Tokens file must be CSS variables.** Remotion components will import the same `tokens.css`.
- **Animations:** CSS-only where possible. Reserve JS animations (Three.js, Lottie, etc.) for hero moments only.

## 14. Reference images attached

I'm pasting 5 images alongside this brief. Their roles:

1. **ZROBIM architects** — editorial type-at-scale + atmospheric photo composition
2. **Cannabis Lab / C.Lab** — organic 3D, glass orbs, soft gradient surfaces, card UI
3. **Nike ACG** — dark mode product display, Japanese-influenced label, refined micro-UI
4. **Agent Arcade landing** — light-mode hero with gradient line-art radial
5. **Agent Arcade product viz** — dark-mode gradient line illustrations of product concepts

Aim for a blend: dark mode primary (like 3, 5), editorial typography (like 1), with organic 3D / gradient line illustrations (like 2, 4, 5).

## 15. What to deliver back

For each item in section 11, produce:

- The full HTML/CSS file with inline tokens (or paired tokens.css)
- A 1-paragraph description of what it does + how to use it
- Any third-party libraries it depends on (keep this list short)
- Screenshot/render at desktop + mobile breakpoints

Hand back all of it as a single zip or as a list of files I can paste into a repo.

---

## Workflow from here (so we don't lose track)

1. Operator pastes this brief + 5 reference images into Claude Design
2. Claude Design produces the 8 deliverables in section 11
3. Operator brings the output files back to this Claude Code session
4. I integrate the tokens + components into the AKHARA repo (Remotion theme, portfolio site, audit Loom templates)
5. We refresh the Command Console (`index.html`) with the new visual system
6. Run the 7-day SaaS Brand DaaS test with the new aesthetic locked in

That's the path.
