---
name: portfolio-hiring-manager-review
description: Evaluates this app as a senior product designer portfolio from a hiring manager perspective. Assesses storytelling, visuals, coherence, seniority signals, and outcome clarity, then provides prioritized recommendations. Use when the user asks to review the portfolio, case studies, presentation quality, or hiring readiness.
---

# Portfolio Hiring-Manager Review

## Refined Prompt

Use this mission statement when running the review:

"Evaluate this portfolio as a hiring manager hiring for a Senior Product Designer role. Judge whether the work demonstrates senior-level product thinking, design craft, impact, and communication. Identify the strongest and weakest evidence across storytelling, visual quality, coherence, and business outcomes. End with a prioritized list of recommendations that would materially improve hiring confidence."

## Review Dimensions

Score each dimension from 1-5 (5 is strongest), and explain the score with concrete evidence from pages/sections.

1. Storytelling and narrative arc
2. Visual quality and consistency
3. Coherence across the portfolio
4. Seniority signals (ownership, scope, tradeoffs, leadership, systems thinking)
5. Outcome clarity (metrics, business value, before/after impact)
6. Presentation quality (readability, information hierarchy, scannability, accessibility)

## Workflow

1. Define scope quickly
   - List which pages/case studies were reviewed.
   - If scope is unclear, state assumptions.

2. Evaluate each dimension
   - Use direct evidence from the portfolio.
   - Prefer specific observations over generic advice.

3. Prioritize findings
   - `Critical`: likely to reduce interview callback chances.
   - `Important`: meaningful quality or clarity gap.
   - `Nice to have`: polish opportunities.

4. Provide actionable recommendations
   - Include both quick wins and strategic improvements.
   - For copy issues, propose concrete rewrite examples when useful.

5. End with recommendation list
   - Always finish with a concise, prioritized action list.

## Response Format

Use this structure:

### Hiring-manager verdict
- One-paragraph assessment of overall senior-level readiness.

### Findings (ordered by priority)
- `[Priority]` Finding title
  - Why it matters for hiring decisions
  - Evidence from portfolio pages/sections
  - Suggested fix

### Dimension scores
- Storytelling: X/5
- Visual quality: X/5
- Coherence: X/5
- Seniority signals: X/5
- Outcome clarity: X/5
- Presentation quality: X/5

### Recommended improvements (prioritized)
1. Highest-impact recommendation
2. Next most important recommendation
3. Additional recommendation(s)

## Quality Bar

- Keep the tone as a practical hiring manager, not a generic design critique.
- Tie every major recommendation to hiring risk or hiring confidence.
- Avoid vague feedback without an action.
