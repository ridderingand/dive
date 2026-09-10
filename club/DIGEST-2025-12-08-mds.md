---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: MDS
host: Ridd
title: "The creative process of an OG designer"
youtube_id: K_7ECqNlTtE
url: https://www.youtube.com/watch?v=K_7ECqNlTtE
published: 2025-12-08
duration_min: 48
tags: [ip/dive-club, creative-process, visual-design, vibe-coding, craft, taste, tool-bending, ai-creative-tools]
flags: [coded-prototypes, inflight-relevant]
source: 2025-12-08-mds.md
source_type: youtube-captions
slug: 2025-12-08-mds
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

MDS (Matt D. Smith / Shift Nudge) walks Ridd through the Figma file and coded tools behind the all-new Shift Nudge site — a creative-process deep dive, not a shipping postmortem. Arc: identity struggle of redesigning your own brand (portfolio-hard) → wide visual exploration that deliberately left “MDS-looking” territory (cream layouts, pixel logos, dither nostalgia, editorial mosaics, many unshipped heroes) → pixel-icon rabbit hole that unlocked the Mosaic motif → vibe-coded bitmap/mosaic tool in v0 (~135 iterations; hover/click variants; Unsplash API; photo↔pixel toggle) refined in Cursor with WebGL + lazy-load toward ~120fps → production restraint: sharp geometric icons + Swiss/typography-first timeless system, mosaic kept as interactive energy without owning the brand → Figma to ~85–90% then finish (hover, mobile menu, diagonal animation) in code; layout diagrams for Claude to lock React/Tailwind context. Core claims: don’t one-shot a site with AI — vision + iterative exploration; tool-making is part of the creative process; end goal guides curiosity when stuck; energy from play transfers to the finished site; adjectives/conviction filter decisions better than doom-scrolling references. Why it matters: clearest OG-designer window into exploration volume, coded-tool motif discovery, and timeless-vs-trendy judgment in the Club backlog.

**Source caveat:** YouTube captions fallback — Descript full composition exhausted (teaser-only). Timecodes ±30s; weak diarization (`>>` markers; speakers inferred as **MDS** / **Ridd**). ASR/name notes: host “Rid” = Ridd; “Vzero” = v0; “SIF type face” ≈ serif; “TT Furs Noya/Neya” = TT Firs Neue (pronunciation bit); “mind sweeper” = Minesweeper; “University of Redacted” as spoken. Quotes keep caption wording.

**Inflight evidence (flags):** MDS builds a bitmap icon / Mosaic explorer in **v0**, prompts for control-panel params + six divergent hover effects, iterates ~**135** versions, then ports into **Cursor** (WebGL rebuild from four SVGs, lazy-load placeholder, Unsplash route) as the artifact he plays with and ships from — not a Figma handoff. Figma stops ~85–90%; hover states, mobile menu, diagonal animation refined in code. — `coded-prototypes` + `inflight-relevant`. (Ignore host Inflight sponsor read ~29:16 — Ridd’s ad, not MDS’s workflow.)

## Takeaways (Granola)

From Granola Editing Notes "Editing MDS" (source_meeting_id from Granola query 2026-09-10; date ~2025-12) Takeaways (primary gold):

- Avoid one-shotting a website with AI; specific vision + iterative exploration
- Pixel-icon rabbit hole → Mosaic tool; exploratory work unlocks core motif
- End goal guides curiosity; when stuck explore another component/nav/icon system
- AI iteration: generate variants → pick direction → request more variations
- Layout diagrams for Claude; get systems 85–90% in Figma; finish refinement in code
- Mosaic tool ~135 iterations; lazy load + WebGL toward 120fps

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Cold open / setup | Ridd: learned more visual design from MDS than anyone. MDS reframe: redesigning Shift Nudge = invent-the-universe problem; walks Figma full of unshipped ideas + mosaic tool in v0. | inferred |
| 01:12 | Brand = identity struggle | Stopped trying to build in code first; returned to branding assets/PDF graphic play. Personal-brand site as hard as a portfolio: cool design + “who am I?” | takeaway |
| 02:43 / 03:00 | Ads: Raycast + Genway | Skippable sponsor reads. | inferred |
| 04:14 | Wide exploration | Went cream / far from “MDS look”; Command-D scatter — monospace, floating vs stuck nav, pixelated logo / dither nostalgia — not designing the site yet, laying options. | inferred |
| 07:28 | Mosaic idea + kill criteria | Mosaic/pixel plugin play; full-screen editorial testimonials. Strong composition killed: too much personality / time-piece vs Shift Nudge as timeless typography-layout-color school. | inferred |
| 09:08 | Pixel icons that never shipped | Fun pixel icons (hours on a Figma icon in a square grid); proud but unused — identity fear / “how will I feel in 2 years?” | takeaway |
| 11:20–12:51 | Unshipped heroes | Volume of directions; retro grid + modern floating nav + big pink shadows; MDS hates these never saw daylight; still second-guesses timelessness. | inferred |
| 14:53 | Coded screenshot / v0 mosaic tool | Screenshot of a **code-built** version (distance/speed/duration/count). Bitmap icon builder in v0: 24×24 canvas, 4×4 blocks, clickable Minesweeper-style cells, PNG + code-snippet export — none of those icons shipped; tool-making *is* the process. | takeaway |
| 17:51 | Control panels + AI taste loop | Pre-AI: CSS/JS throttles (speed, bounce, cubic-bezier). Now: “give me a slider…”; save hover-effect list as Command-D; prompt for five vastly different hovers → pick → more like that. Scatter/avoid-cursor effect ≈ what shipped. | takeaway |
| 21:45–23:20 | Mosaic as fidget / v135 | Image→pixel mosaic; photo↔pixel toggle; FPS meter for canvas/WebGL (~120 target). Version **135**; copy out of v0 into Cursor for production. | takeaway |
| 24:17 | Hacky → API superpowers | Comfortable HTML/CSS/light JS; AI unlocks Unsplash API route “for fun”; kids max every slider. Could become mosaic-avatar product — started from pixel icons. | inferred |
| 27:03 | Curiosity > one-shot | End goal beats blank-prompt syndrome across AI tools. Tools produce what you ask; one-shotting a site = sloppy prompt / plagiarism-of-a-screenshot. Hammer ≠ dream home. | takeaway |
| 29:16 | Ad: Inflight | Skippable host ad — not MDS’s claim. | inferred |
| 29:53 | Timeless vs play | Liberty to hover for ~20h doesn’t transfer to deadline teams; when AI fights you, put it away and build structure/components. Fun energy transfers to the experience; boredom reads as sterile. | inferred |
| 34:08 | Prod mosaic engineering | Days on Lighthouse/lazy-load; rebuilt mosaic to accept **four SVGs** → WebGL; icon-mode vs photo-mode props; placeholder then bounce-when-ready. Stuck → left into sharp geometric icons. | takeaway |
| 36:07 | Timeless direction ships | Full typography/layout/color, heavily gridded Swiss; strip trendy gradients; keep mosaic as interactive accent. Sharp static → pixels feels intentional. Site in React (doesn’t “know” React); Figma 101 gated course hosted on same stack. | inferred |
| 39:19 | 85–90% Figma → code | No full DS/variables when he’ll build it himself; Tailwind class names in code; mobile menu designed in code then screenshot→Figma; hover states (leading arrow, diagonal pattern component) iterated in code — 3–4× time, filtered by “polished timeless.” | takeaway |
| 42:51 | Diagrams for Claude | Drew layout diagram so Claude/Cursor locked offset-column responsive behavior; slash-system page to knock out components; light-mode color tests. | takeaway |
| 45:00 | Advice: vision + adjectives | Techy / classical / blobby / sharp-no-radius — adjectives filter forks. Don’t drown in references mid-project; conviction of what excites you > oneshotting Stripe.com-of-the-day. | takeaway |
| 47:00 | Close / stack | Curtain-pull thanks; sponsor stack read. | inferred |

## Notable Quotes

- **00:05** — **MDS (inferred):** "It's almost like how do you create a peanut butter and jelly sandwich? It's like, well, first you have to invent the universe"
- **00:04:32** — **MDS (inferred):** "you're trying to make a cool design and you're also struggling with your own identity while you're doing it. … So, you're like, who am I?"
- **00:08:45** — **MDS (inferred):** "My vision for Shift Nudge is like the modern interface design school that's sort of like built on these timeless principles of typography, layout, and color"
- **00:15:24** — **MDS (inferred):** "These are just square color blocks. I could build all of these with just CSS and I wouldn't even need to use any images."
- **00:17:51** — **Ridd (inferred):** "tool making is part of your creative process too … Having that as a knee-jerk reaction is kind of a superpower"
- **00:19:11** — **MDS (inferred):** "sometimes you have to say like, okay, generate all these parameters as modifiable variables in a control panel versus like hard coding every single one of them."
- **00:23:11** — **MDS (inferred):** "I'm on version 135. Like how many prompts, you know?"
- **00:28:28** — **MDS (inferred):** "they will produce slop if you're trying to oneshot a website, which is a sloppy prompt."
- **00:28:31** — **MDS (inferred):** "it's like a hammer. You're not going to swing a hammer and accidentally build your dream home."
- **00:39:46** — **MDS (inferred):** "I will only get it to, you know, I don't know, 85 90% complete and and then I'm just like I'm adding class names"
- **00:42:51** — **MDS (inferred):** "This is a diagram I made for Claude where I'm like, dude, look at look at what I'm talking about here, man."
- **00:46:17** — **MDS (inferred):** "having that conviction of what just excites you and what you really like regardless of how it's going to be received … figure out how can I wield them to bring out my vision"
