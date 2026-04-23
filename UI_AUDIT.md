# UI Audit — Gabriela Mitrana Portfolio

_Scope: app-level source under `src/` (pages + app components + global CSS + Tailwind config). The shadcn/ui library under `src/components/ui/` is **excluded** — it's vendored and should not be edited here._

---

## Executive summary

The codebase has a well-defined design-token foundation: a typography scale in `tailwind.config.ts` (`display` / `h1`–`h4` / `body-lg` / `body` / `body-sm` / `label` / `meta`), a section-spacing scale, HSL-based semantic colors (`primary`, `muted`, `accent`, `destructive`, …), a radius scale (`--radius`, `--radius-image`, `--radius-card`, `--radius-pill`), and two shadow tokens (`--shadow-card`, `--shadow-card-hover`). When the code uses these tokens, the UI is uniform.

The issues cluster around **three patterns of drift**:

1. **Tokens defined but unused.** `--shadow-card`, `--shadow-card-hover`, `--radius-card`, `--radius-pill` are declared in [src/index.css](src/index.css#L37-L43) and never referenced. In their place, inline shadow strings like `shadow-[0_2px_10px_rgba(2,8,23,0.06)]` and `shadow-[0_2px_10px_rgba(2,8,23,0.08)]` appear in case studies.
2. **Near-duplicate values spread across case studies.** The three case-study files were copy-pasted from a common template, then edited independently. As a result, the same "insight card", "stat card", "image container", and "process step pill" exist in 2–3 slightly different forms (e.g. `rounded-xl` vs `rounded-2xl`, `md:p-8` vs `md:p-10`, border opacity `/40` vs `/60` vs `/70`).
3. **Inline arbitrary values where a token exists.** `FullBleedBanner` uses six arbitrary `text-[1.1rem]` / `text-[1.3rem]` / `text-[0.95rem]` sizes even though the Tailwind `fontSize` scale covers them. `Index.tsx` re-implements the `.editorial-link` utility with a different `underline-offset-8` instead of the canonical `6px`.

There is also **one outright bug**: [src/pages/case-studies/AgentsMonitoring.tsx:423](src/pages/case-studies/AgentsMonitoring.tsx#L423), [427](src/pages/case-studies/AgentsMonitoring.tsx#L427), [431](src/pages/case-studies/AgentsMonitoring.tsx#L431) use `text-l`, which is **not a valid Tailwind class** (Tailwind goes `text-sm` / `text-base` / `text-lg`). Those three labels are currently rendering at browser default, not at the intended size.

The highest-impact, lowest-risk pass here is: fix the `text-l` bug, extract a shared `CaseStudyCard` / `ProcessDiagram` / `StatCard` primitive so the three case studies stop drifting, wire up the already-declared shadow and radius tokens, and migrate `FullBleedBanner` off arbitrary font sizes.

---

## Detected design tokens (de-facto)

### Palette (in actual use)
| Source | Value | Usage |
|---|---|---|
| Token | `hsl(var(--background))` (#FFFFFF) | body, cards, video frames |
| Token | `hsl(var(--foreground))` (~#020817) | body text, stat values, headings |
| Token | `hsl(var(--primary))` (same as foreground, ~#0F172A) | Button primary, link hover, "Status:" labels |
| Token | `hsl(var(--muted-foreground))` (~#64748B) | secondary text, eyebrows, metas |
| Token | `hsl(var(--muted))` (~#F1F5F9) | card backgrounds via `/30`, `/40`, `/50`, `/80` opacities |
| Token | `hsl(var(--accent))` (~#F1F5F9) | project-detail and stat-card backgrounds via `/30`, `/50` |
| Token | `hsl(var(--border))` (~#E2E8F0) | borders via `/40`, `/60`, `/70` opacities |
| **Inline literal** | `#22c55e` (Tailwind `green-500`) | LatencyChart — "good latency" semantic ✅-color, 6 occurrences |
| **Inline literal** | `#f97316` (Tailwind `orange-500`) | LatencyChart — "slow latency" semantic warning color, 6 occurrences |
| **Tailwind utility** | `purple-600` (#9333EA) | Navigation + Index hero gradient end-stop |
| Inline literal | `rgba(2,8,23,0.06)` / `rgba(2,8,23,0.08)` | ad-hoc tinted shadows, repeated 5× |
| Inline literal | `rgba(0,0,0,0.2)` | LatencyChart drop-shadow filter |

**Observation**: there are no `--color-success` or `--color-warning` tokens. The green/orange literals in `LatencyChart` are semantic colors (good vs slow) that belong in the token layer.

### Type scale
**Tokenized** ([tailwind.config.ts:25-36](tailwind.config.ts#L25-L36)): `display`, `h1`, `h2`, `h3`, `h4`, `body-lg` (1.125rem), `body` (1rem), `body-sm` (0.9375rem), `label` (0.75rem), `meta` (0.8125rem).

**Off-scale values found in source**:
| Value | Where | Nearest token |
|---|---|---|
| `1.1875rem` (19 px) | [src/index.css:85,89](src/index.css#L85) (`.case-study-prose`) | `body-lg` (1.125rem / 18 px) — **1 px off** |
| `1.1rem` (17.6 px) | [src/components/FullBleedBanner.tsx:28](src/components/FullBleedBanner.tsx#L28) | `body-lg` (1.125rem) |
| `1.3rem`, `1.35rem`, `1.6rem` | [FullBleedBanner.tsx:28-29](src/components/FullBleedBanner.tsx#L28-L29) | none — new sizes |
| `0.95rem` (15.2 px) | [FullBleedBanner.tsx:37](src/components/FullBleedBanner.tsx#L37), ProcessStep bullets ×3 | `body-sm` (0.9375rem / 15 px) — **0.2 px off** |
| `1.05rem` | [FullBleedBanner.tsx:37](src/components/FullBleedBanner.tsx#L37) | between `body` and `body-lg` |
| `1rem`, `1.1rem` | ProcessStep pill ([duplicated 3×](src/pages/case-studies/FirstRunExperience.tsx#L33)) | `body` (1rem) |
| `text-3xl font-bold` | Stat-card values (3 case studies) | Off the h-scale; these should probably be `text-h3` or a new `stat` size |
| `text-sm`, `text-xs`, `text-lg` | LatencyChart, BeforeAfterSlider | Tailwind defaults, not mapped to the design type scale |
| **`text-l` (invalid)** | [AgentsMonitoring.tsx:423,427,431](src/pages/case-studies/AgentsMonitoring.tsx#L423) | **Bug** — should be `text-lg` |

### Spacing scale
Tailwind default 4-based scale is in use (`gap-4`, `p-6`, `py-8`, etc.). Plus custom section tokens (`section-sm` 4rem, `section` 6rem, `section-lg` 8rem, `hero` clamp). All uses are on-scale. No off-scale margin/padding literals found.

### Radius scale
- Defined: `--radius` (0.5rem → Tailwind `rounded-lg`), `--radius-card` (2 px), `--radius-image` (4 px), `--radius-pill` (999 px).
- In actual use: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`, `rounded-[var(--radius-image)]`.
- **Unused tokens**: `--radius-card` and `--radius-pill` are never referenced. `rounded-full` is used instead of `rounded-[var(--radius-pill)]`.
- **`rounded-2xl` is a new tier** introduced in AgentsMonitoring/RevampDataService for "premium" frames (video chrome, iteration wrappers). If intentional, it should be tokenized; if drift from `rounded-xl`, it should consolidate.

### Shadow scale
- **Defined but unused**: `--shadow-card: 0 1px 2px rgb(0 0 0 / 0.04)`, `--shadow-card-hover: 0 12px 32px -8px rgb(0 0 0 / 0.12)`.
- **In use instead**:
  - `shadow-[0_2px_10px_rgba(2,8,23,0.06)]` — 2 places ([AgentsMonitoring.tsx:129](src/pages/case-studies/AgentsMonitoring.tsx#L129), [343](src/pages/case-studies/AgentsMonitoring.tsx#L343), [FullBleedBanner.tsx:21](src/components/FullBleedBanner.tsx#L21))
  - `shadow-[0_2px_10px_rgba(2,8,23,0.08)]` — 3 places (ProcessStep pill, all 3 case studies)
  - `shadow-sm`, `shadow-lg`, `shadow-xl`, `shadow-2xl` — Tailwind defaults (LatencyChart, ImageMagnifier, BeforeAfterSlider, RevampDataService video chrome).

Five distinct ad-hoc treatments where the codebase already has two named tokens waiting to be used.

---

## Issues by category

### 1. Typography

**1a. `text-l` bug — three instances.**
[AgentsMonitoring.tsx:423,427,431](src/pages/case-studies/AgentsMonitoring.tsx#L423) — `<p className="text-l font-semibold mb-2">`. `text-l` is not a Tailwind class; these labels currently render at default size with no Tailwind font-size applied. The neighboring "Results" stat cards in the other two case studies use `text-sm font-semibold` ([FirstRunExperience.tsx:157](src/pages/case-studies/FirstRunExperience.tsx#L157), [RevampDataService.tsx:177](src/pages/case-studies/RevampDataService.tsx#L177)).

**Proposed fix**: `text-l` → `text-sm` to match the other two case studies.

**1b. `FullBleedBanner` uses six off-scale font sizes.**
[FullBleedBanner.tsx:28-29, 37](src/components/FullBleedBanner.tsx#L28) uses `text-[1.1rem]`, `text-[1.3rem]`, `text-[1.35rem]`, `text-[1.6rem]`, `text-[0.95rem]`, `text-[1.05rem]` via arbitrary values. The design system has `body-lg` (1.125rem), `body` (1rem), `body-sm` (0.9375rem), and the `h3`/`h4` responsive heads.

**Proposed fix** (conservative — preserves the responsive intent):
- Headline small-size → `text-h4 md:text-h3` (currently 1.1rem → 1.3rem; tokens give 1.125rem → 1.375rem, very close)
- Headline large-size → `text-h3 md:text-h2` (1.375rem → ~1.75–2.25rem responsive — a bit larger; flag for review)
- Bullet small → `text-body-sm` (was 0.95rem, token is 0.9375rem)
- Bullet large → `text-body` (was 1.05rem, token is 1rem)

**Ambiguity to confirm with you**: the banner headline was clearly sized to sit between `h3` and `h2`. If you want a new `banner-sm` / `banner-lg` token rather than mapping to `h3`/`h2`, tell me and I'll add them. Otherwise I'll map to the existing scale.

**1c. `.case-study-prose` is 1 px off the scale.**
[src/index.css:85-89](src/index.css#L85-L89) — `font-size: 1.1875rem` for `p`, `li`, `ul`. Token `body-lg` is 1.125rem. Visually indistinguishable (1 px).

**Proposed fix**: change `.case-study-prose p, li, ul` to `@apply text-body-lg` (or just `font-size: 1.125rem`) to consolidate on the token.

**1d. `Index.tsx` re-implements `.editorial-link` with a different offset.**
[Index.tsx:63-68](src/pages/Index.tsx#L63-L68) — `underline underline-offset-8 decoration-1 decoration-muted-foreground/40 hover:decoration-foreground` — matches `.editorial-link` ([index.css:79-81](src/index.css#L79-L81)) except `underline-offset-8` (32 px) vs the canonical `underline-offset-[6px]`.

**Proposed fix**: replace with `className="text-sm font-medium editorial-link"` so every in-copy link picks up the same treatment.

**1e. Tailwind default sizes used where the design scale exists.**
`text-sm`, `text-xs`, `text-lg`, `text-3xl`, `font-bold`, `font-semibold` appear in `LatencyChart`, `BeforeAfterSlider`, and the three case-study stat cards. This is **not a hard error** — the tokens are a superset of the Tailwind defaults — but a strict "use only the design scale" policy would migrate these.

**Proposed fix**: this is a judgment call. My recommendation: leave `LatencyChart` / `BeforeAfterSlider` alone (they're one-off bespoke components) and migrate only the repeated stat-card values (`text-3xl font-bold`, `text-sm font-semibold`) to the design scale since those recur in 3 case studies. **Ask before I touch these.**

---

### 2. Color

**2a. Hardcoded semantic colors in LatencyChart.**
[LatencyChart.tsx:49,71,98,135-136,202](src/components/LatencyChart.tsx#L49) — `"#22c55e"` (good) and `"#f97316"` (slow) appear six times each as inline hex. No `--success` / `--warning` token exists in [index.css](src/index.css).

**Proposed fix** (requires your ok — this *adds* tokens; I won't do this without explicit approval since you said "never delete/rename tokens without confirmation" and I want to apply the same rule to adding them):
1. Add to `src/index.css`:
   ```css
   --success: 142 71% 45%;       /* #22c55e */
   --success-foreground: 0 0% 100%;
   --warning: 24 95% 53%;        /* #f97316 */
   --warning-foreground: 0 0% 100%;
   ```
2. Wire through `tailwind.config.ts` `colors.success` / `colors.warning` (mirroring the existing `destructive` pattern).
3. Replace all 12 occurrences in `LatencyChart.tsx` with `hsl(var(--success))` / `hsl(var(--warning))`.

If you'd rather keep these as one-off literals in `LatencyChart`, say so and I'll leave them.

**2b. `purple-600` in two places for the name-gradient.**
[Navigation.tsx:26](src/components/Navigation.tsx#L26) and [Index.tsx:41](src/pages/Index.tsx#L41) — `bg-gradient-to-r from-primary to-purple-600 bg-clip-text`. Same gradient, two copies. Not broken, but if you ever change the brand gradient it lives in two places.

**Proposed fix**: introduce a `--brand-gradient-end` color (purple-600 hex) or an `.text-brand-gradient` utility in [src/index.css](src/index.css) and use it in both places. **Ask before applying.**

**2c. `rgba(0,0,0,0.2)` in LatencyChart drop-shadow.**
[LatencyChart.tsx:207](src/components/LatencyChart.tsx#L207). One-off, inside a `filter:` string. Low priority.

---

### 3. Border opacity drift

`border-border` tokens are used with three different opacities across image and card containers:

| Opacity | Where |
|---|---|
| `/40` | [RevampDataService.tsx:158](src/pages/case-studies/RevampDataService.tsx#L158) (video chrome) |
| `/60` | [AgentsMonitoring.tsx:106,115,149,153,332,395](src/pages/case-studies/AgentsMonitoring.tsx#L106) (insight cards, side images, iteration frames) |
| `/70` | [UseCases.tsx:87](src/pages/UseCases.tsx#L87), [AgentsMonitoring.tsx:129,199,343](src/pages/case-studies/AgentsMonitoring.tsx#L129), [FullBleedBanner.tsx:17,21](src/components/FullBleedBanner.tsx#L17), ProcessStep pill ×3 |

**Proposed fix**: consolidate to two tiers:
- `/60` for "subtle" (large frames around images and videos)
- `/70` for "visible" (pills, small chips, screenshot containers)

Move `/40` → `/60`. This is visually the same but stops the scale from growing.

**Needs your call**: is the `/40` in the video chrome intentionally softer? If yes, keep it and flag as "intentional variation" in the audit.

---

### 4. Shadows

**4a. `--shadow-card` / `--shadow-card-hover` declared but unused.**
See "Detected design tokens → Shadow scale" above. Meanwhile, case studies use 5 ad-hoc `shadow-[…]` strings.

**Proposed fix**: either
- **(A)** Delete the unused tokens (but this violates the "never delete tokens without confirmation" rule — **I will not do this without you saying delete them**), OR
- **(B)** Start using them: map the two recurring inline shadows to the existing tokens.

Since the existing tokens' values don't exactly match the inline shadows, a cleaner option is **(C)**: keep the tokens, rename them to reflect intent, and add two new tokens that match the inline shadows. **This is a token-file change — I want you to pick A, B, or C before touching anything.**

**4b. ProcessStep pill shadow duplicated 3×.**
The 0.08 variant lives inside a copy-pasted component. When the ProcessStep is extracted (see §5 below), this collapses automatically.

---

### 5. Cards & repeated components — the big one

**5a. `ProcessStep` / `ProcessArrow` duplicated across 3 case-study files.**
Byte-for-byte identical components appear in [FirstRunExperience.tsx:20-41](src/pages/case-studies/FirstRunExperience.tsx#L20), [RevampDataService.tsx:26-48](src/pages/case-studies/RevampDataService.tsx#L26), and [AgentsMonitoring.tsx:186-207](src/pages/case-studies/AgentsMonitoring.tsx#L186). Same pills, same arrow, same inline SVG.

**Proposed fix**: extract `src/components/ProcessDiagram.tsx` that accepts a `steps: { title: string; bullets: string[] }[]` prop. Replace all three inline copies. This collapses ~66 lines of duplicated code **and** removes the hidden risk of future independent drift.

**5b. "Project Details" cards — already consistent, but copy-pasted.**
`p-4 bg-accent/50 rounded-lg` + `<p className="font-semibold text-primary">Status:</p>` + `<p className="text-muted-foreground">…</p>` — 4 cards × 3 case studies = 12 literal copies. All currently identical; extraction is a code-hygiene refactor only.

**Proposed fix**: extract `<ProjectDetails items={[{label: "Status", value: "…"}, …]} />`. Low risk since all copies are already uniform.

**5c. "Stat card" drift.**
| Case study | Classes | Label | Value |
|---|---|---|---|
| FirstRunExperience | `bg-accent/30 p-6 rounded-lg border` | `text-sm font-semibold` | `text-3xl font-bold text-foreground` |
| RevampDataService | `bg-accent/30 p-6 rounded-lg border` | `text-sm font-semibold` | `text-3xl font-bold text-foreground` |
| AgentsMonitoring | `bg-accent/30 p-6 rounded-lg border` | **`text-l font-semibold`** (broken) | **missing value entirely** |

**Proposed fix**: extract `<StatCard label value>` and use in all three places. The Agents version will get back its value slot (currently has no number because metrics are still being collected — that's intentional "in progress" messaging, but the styling bug is not intentional).

**5d. "Insight card" (icon + body) — class-order drift, values identical.**
- AgentsMonitoring:296-307 uses `p-6 bg-accent/30 rounded-lg border border-border`
- RevampDataService:110-121 uses `bg-accent/30 p-6 rounded-lg border border-border`

Identical rendering, different class order. Flag only; no fix needed (or extract into `<InsightCard icon title body>` alongside `<ProcessDiagram>`).

**5e. "Showcase frame" drift (the `rounded-2xl bg-muted/40 border border-border/60 p-6 …` wrapper).**
Two variants:
- [AgentsMonitoring.tsx:332](src/pages/case-studies/AgentsMonitoring.tsx#L332) — `md:p-10`
- [AgentsMonitoring.tsx:395](src/pages/case-studies/AgentsMonitoring.tsx#L395) — `md:p-8`

Same component role (premium image frame), different large-breakpoint padding.

**Proposed fix**: normalize to `md:p-8` (the more-common value in the codebase at that size tier) and extract as `<ShowcaseFrame>` if you're up for the refactor.

**5f. Pill/chip pattern — two variants.**
- Project tag chip ([UseCases.tsx:85-90](src/pages/UseCases.tsx#L85-L90)): `rounded-full border border-border/70 bg-muted/50 px-3 py-1 text-meta uppercase tracking-wider text-muted-foreground`
- FullBleedBanner label ([FullBleedBanner.tsx:21](src/components/FullBleedBanner.tsx#L21)): `rounded-full border border-border/70 bg-background/60 px-5 py-2 text-meta font-medium uppercase tracking-wider text-muted-foreground shadow-[…]`

Same "eyebrow pill" role, different background, padding, and shadow. Arguably intentional ("banner pill is more prominent") — **asking you to confirm**.

---

### 6. Image treatment

Three distinct image-in-container patterns:

1. **Hero / card-link image** — `overflow-hidden rounded-[var(--radius-image)] bg-muted … border border-border` ([Index.tsx:74](src/pages/Index.tsx#L74), [UseCases.tsx:101](src/pages/UseCases.tsx#L101)). Consistent. ✅
2. **Inline case-study screenshot** — `rounded-lg` alone. ([FirstRunExperience inline images](src/pages/case-studies/FirstRunExperience.tsx#L91), [RevampDataService quick-fixes](src/pages/case-studies/RevampDataService.tsx#L130)). Consistent. ✅
3. **Competitor / iteration screenshot** — `rounded-lg bg-background border border-border/70 shadow-[0_2px_10px_rgba(2,8,23,0.06)]` ([AgentsMonitoring.tsx:129,343](src/pages/case-studies/AgentsMonitoring.tsx#L129)). Consistent with itself. ✅

No cross-pattern drift. This category is in good shape.

---

### 7. Buttons, inputs, links

**7a. Buttons.**
Single source: shadcn `<Button>` via [src/components/ui/button.tsx](src/components/ui/button.tsx) + `class-variance-authority`. Used consistently with `variant="ghost" size="sm"` (mobile nav) and the default variant at `size="lg"` (hero CTA). ✅ No drift.

**7b. Inputs.**
None present in the app layer (no forms wired up). N/A.

**7c. Links.**
- In-copy "View My Resume" link — see §1d, drift.
- Editorial `.editorial-link` utility — consistent where used.
- Anchor-like links in `Contact.tsx` use `transition-colors duration-300 group-hover:text-primary` — different hover treatment from the rest of the app (which uses `hover:text-foreground`). **Flag only** — intentional "contact card hover" is plausible.

---

### 8. Iconography

Single library (lucide-react). Sizes used: 14 px (`h-3.5 w-3.5`), 20 px (mixed `size={20}` prop and `h-5 w-5` class), 32 px (`h-8 w-8`). Reasonable 3-tier scale.

**Minor drift**: [Navigation.tsx:64](src/components/Navigation.tsx#L64) uses `size={20}` (prop), [Contact.tsx:56](src/pages/Contact.tsx#L56) uses `h-5 w-5` (class). Same value, two APIs.

**Proposed fix**: standardize on the class form (`h-5 w-5`) — it's the convention used 9:1 in the rest of the code.

---

### 9. Border radius & shadows — consolidated

Addressed in §4 and in the "Detected design tokens" section. Summary of proposed actions (pending your approval):
- Replace `rounded-2xl` → `rounded-xl` wherever it means "premium frame", OR introduce a `rounded-showcase` token if `2xl` is intentional.
- Retire unused `--radius-card` and `--radius-pill` (or start using them).
- Retire or repurpose `--shadow-card`/`--shadow-card-hover`, or map the repeated inline shadows to them.

---

### 10. Empty / loading / error states

`NotFound.tsx` is shadcn default; no custom empty/loading/error patterns exist in the app. N/A.

---

### 11. Accessibility

**11a. Touch targets under 44 × 44 px.**
- Mobile-menu button: `<Button variant="ghost" size="sm">` = 36 × 36 px ([Navigation.tsx:58-65](src/components/Navigation.tsx#L58-L65)). **Below WCAG 2.5.5 minimum.**
- Mobile nav links: `py-3` on text-meta = ~36–40 px tall. **Borderline.**

**Proposed fix**: change the mobile hamburger to `size="icon"` (shadcn default 40 × 40, still under 44 — would also need a height bump) or add explicit `h-11 w-11`. Change mobile nav link `py-3` → `py-4` (16 px vert) to hit ~44 px.

**Ambiguity**: the hero desktop CTA is `size="lg"` (44 px default in shadcn) — that's fine. Only the mobile chrome is below target.

**11b. Contrast.**
Spot-checked the most common pairs:
- `text-muted-foreground` (#64748B) on `bg-background` (#FFFFFF) → **4.84 : 1 ✅** (AA body pass).
- `text-muted-foreground` on `bg-accent/30` / `bg-muted/30` → ~4.6–4.8 : 1 ✅ (tight, but passes AA body).
- `text-muted-foreground/40` (decorative dots in hero) → **< 2 : 1 ❌**, but these are purely ornamental `·` separators so WCAG doesn't require them to meet contrast.
- Gradient headline `from-primary to-purple-600 bg-clip-text` on white → both endpoints pass AA individually ✅.

No text contrast failures flagged.

**11c. Body font size.**
`body: 1rem = 16px` ✅. `body-sm: 15px` ✅ (still ≥ 14 px recommended minimum).

---

## What looks good

- **Tokenization coverage is genuinely high.** Typography, section spacing, and semantic colors are all tokenized. The main gap is at the token edges (shadow, new radius tier, missing success/warning).
- **Button system is pristine.** Single source, no app-level overrides.
- **Iconography** — one library, three well-chosen sizes.
- **Section spacing** — `py-section`, `py-section-sm`, `py-hero` applied consistently across all pages.
- **Color contrast** passes AA across the common text/background pairs.
- **Project-detail card styling** — 12 copies are all identical, showing the shared pattern has been respected.
- **Hero / case-study-index image treatment** — uniform use of `--radius-image`, `border border-border`, `bg-muted` as the placeholder.

---

## Prioritized fix list

**P0 — actual bug**
1. Fix `text-l` → `text-sm` in `AgentsMonitoring.tsx` (three lines).

**P1 — high impact, low risk** (safe to apply in one pass)
2. Migrate `FullBleedBanner` arbitrary text sizes to the tokenized scale.
3. Fix the `editorial-link` drift in `Index.tsx:65` (swap to the utility).
4. Consolidate `.case-study-prose` font-size to `body-lg` (1.125rem).
5. Normalize mobile nav touch targets (`py-3` → `py-4`, mobile hamburger → `h-11 w-11`).
6. Standardize icon sizing to class form (`h-5 w-5` not `size={20}` in Navigation).

**P2 — design-system decisions** (need your input before I touch)
7. Add `--success` / `--warning` tokens; migrate `LatencyChart` off inline hex.
8. Extract a `text-brand-gradient` utility for the name gradient.
9. Decide fate of `--shadow-card` / `--shadow-card-hover` / `--radius-card` / `--radius-pill` (use them or retire them).
10. Decide fate of `rounded-2xl` tier (tokenize or collapse to `rounded-xl`).
11. Consolidate border-opacity `/40` → `/60` in the video chrome.

**P3 — refactors** (larger diffs, should be reviewed carefully)
12. Extract `ProcessDiagram` component (3 case studies → 1 component).
13. Extract `StatCard` component (3 case studies).
14. Extract `ProjectDetails` and `InsightCard` components.
15. Normalize showcase frame `md:p-10` vs `md:p-8` after extraction.

---

## Code-change summary (developer-readable)

### Files in scope for P0 + P1 fixes

| File | Nature | Replacements |
|---|---|---|
| [src/pages/case-studies/AgentsMonitoring.tsx](src/pages/case-studies/AgentsMonitoring.tsx) | `text-l` bug fix | 3 occurrences on lines 423, 427, 431 |
| [src/components/FullBleedBanner.tsx](src/components/FullBleedBanner.tsx) | Typography scale migration | 6 arbitrary `text-[…]` → design-scale tokens |
| [src/pages/Index.tsx](src/pages/Index.tsx) | Link drift fix | Line 65 `underline-offset-8` → use `.editorial-link` |
| [src/index.css](src/index.css) | Case-study prose font-size | Line 85, 89 `1.1875rem` → `1.125rem` |
| [src/components/Navigation.tsx](src/components/Navigation.tsx) | a11y — touch target + icon form | Lines 58-65, 79, 87 |

### Tokens that would be introduced (P2, pending approval)
- `--success` / `--success-foreground` (CSS var + tailwind `colors.success`)
- `--warning` / `--warning-foreground`
- Optional: a gradient utility class `.text-brand-gradient`
- Optional: a named `--shadow-ambient-sm` / `--shadow-ambient-md` to match the inline shadow patterns

### Refactors deferred to a separate pass (P3)
New component files:
- `src/components/ProcessDiagram.tsx` (replaces 66 duplicated lines across 3 case studies)
- `src/components/StatCard.tsx`
- `src/components/ProjectDetails.tsx`
- `src/components/InsightCard.tsx`

---

## Next step

The audit is done. Per the workflow, I'll wait for you to pick which groups to apply. You can say:

- **"Apply P0"** — just the `text-l` bug fix (3 lines).
- **"Apply P0 + P1"** — bug + typography/link/a11y fixes (safe pass, ~6 files).
- **"Apply P0 through P2"** — above + add the success/warning tokens after you confirm the hex values.
- **"Do the full refactor"** — P0–P3 including extracting shared components.
- **"Apply only color fixes"**, **"Apply only typography fixes"**, etc. — I'll slice by category.
- **"Dry run — just the report"** — we stop here.

For anything in P2 that introduces or deletes tokens, I'll still pause for a second confirmation on the specific token values before editing.
