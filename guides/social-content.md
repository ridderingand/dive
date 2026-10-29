---
name: dive-social-content-guide
description: >-
  Use whenever creating, picking, editing, scoring, or writing hooks for Dive
  Club social content (X clips, posts, email hooks, compilations). The living
  Dive guide to hooks, clip structure, and the 0-100 clip score.
---
# Dive social content guide (living, v0, Oct 2026)

The Dive-wide reference for social content. Refine it as data comes in, and log changes at the bottom.

## Ground rules
- Dive clips post on X only (@ridd_design). They don't go on IG or TikTok.
- Score structure only. Guest fame or reach is deliberately left out.
- The tape is podcast tape, so hooks can't be custom-written. Improve them by choosing the start point and reordering lines so the strongest claim leads and the clip ends on the payoff.
- Source material is Tommy Geoco's content pack at /workspace/clipzip/ridd-pack/ (files 13, 15, 21, 24, 28 and 31 matter most). Scoring data is in /workspace/clip-rating/ (README.md, clips.csv, score.py).

## Clip score, 0 to 100
Hook, 50 points:
- Claim specificity: 15
- Makes sense cold, with no context: 10
- Curiosity without withholding the payoff: 10
- Time to point: 10
- No résumé or origin opener: 5
- Cap: a banned opener or a withheld payoff limits the hook to 20.

Body, 40 points:
- One clear turn: 12
- Payoff bigger than the promise: 12
- Ends within about 2 seconds of the payoff: 6
- Self-contained: 10

Format, 10 points:
- Can be reordered or opened cold.

In Descript, name clips "(NN) Title" with the score first so they sort best to worst.

## What the data says so far
Based on 26 X clips, normalized against the median of the prior 30 days of video. Spearman ρ≈0.30, so treat it as directional.
- Strongest predictors: makes sense cold, one turn, time to point, and specificity.
- Ending within 2 seconds of the payoff showed about zero effect so far.
- "Welcome to Dive Club" or résumé openers do worst, at about 0.2 to 0.3x normal impressions. Never open on the intro.
- Launch and news posts are outliers (one scored 56 but got 3.9x), so tag and judge them separately.
- The X API has no watch time or completion data. An X analytics export would improve validation.

## Quick checklist before posting
1. Does the first line make a specific claim a stranger understands?
2. Is there one idea and one turn?
3. Does it get to the point within a few seconds?
4. Does it end on the payoff, with no trailing wind-down?
5. Is it free of intros, résumés and sales pitches?

## Refining
- Once there are 40+ clips, refit the weights monthly against normalized X performance, moving any weight by at most 5 points.
- Record each change below with the date and the reason.

## Change log
- 2026-10-28: v0 created from Tommy's pack and the first 26-clip validation. Guest pull was removed per Ridd.
