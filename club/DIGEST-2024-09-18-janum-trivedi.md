---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Janum Trivedi
host: Ridd
title: "What makes a software product feel great"
youtube_id: xpu-c7a9Zws
url: https://www.youtube.com/watch?v=xpu-c7a9Zws
published: 2024-09-18
duration_min: 47
tags: [ip/dive-club, design-engineering, prototyping, craft, game-feel, creative-process, code-as-material, taste]
flags: [coded-prototypes, inflight-relevant]
source: 2024-09-18-janum-trivedi.md
source_type: descript
slug: 2024-09-18-janum-trivedi
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Janum Trivedi (Airbnb design engineer; ex-Apple UIKit/SpringBoard, Netflix iOS refresh, The Browser Company / Arc download animation) on what makes software **feel** great. Arc: Arc physics-modeled download animation → Apple fluid interfaces apprenticeship → Netflix refresh (shared transitions, 200-line color extraction, craft moved core metrics) → Airbnb free-electron prototyping / proof-of-concept role → design mostly in code not Figma → interruptibility / retargeting / rubber-banding → Wave spring library → shaders as escape from “rectangle paradigm” → start by building tiny things. Core claims: tune springs per interaction (don’t over-standardize); craft is product quality with measurable impact; prototyping in code reveals what’s wrong faster than mocks. Why it matters for Inflight: he designs and prototypes **in code**, ships demos/POCs as the bridge between ambitious design and engineering — coded-prototypes gold (less Slack-preview loop than Mariana/George).

**Evidence (coded-prototypes / inflight-relevant):** ~00:00–00:03 Arc animation built as coded physics prototypes; ~00:20:14–00:22:49 Airbnb: prototyping/demos/POCs in code; almost never in Figma (“Photoshop” for rectangles); first job with no prod commits but heavy coded prototypes; ~00:09:12 Netflix: nine months jamming designs *and* prototypes then shipping. prototype-feedback not set — buy-in was hallway demos / leadership trust, not Slack/preview review loops.

**ASR note:** Speakers **Janum**, **Ridd**. ASR: John/Jonathan → Janum; Dustin Sonos → **Dustin Senos**; Browser Co → The Browser Company; Sigma → Figma; Shabam (SpringBoard colleague). Timecodes trusted (Descript). Granola-weak (interview note only, no Editing Takeaways).

## Takeaways (Granola)

Granola-weak: interview note found (Ridd <> Janum, 2024-08-14) but **no Editing Takeaways / Potential Clips**. Usable bullets inferred lightly from episode spine / Descript markers:

- Model motion with real physics/velocity when Bezier timing sits in the uncanny valley (Arc download)
- Leave a “tuning” step for springs/curves — per-interaction constants beat rigid animation standards
- Craft can move core business metrics (Netflix refresh A/B); sell feel as product quality alongside stability/performance
- Design/prototyping in code reveals seams you miss in mocks; shaders escape the rectangle paradigm when ready

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Arc download animation | With Dustin Senos: fire-and-forget physics prototype; quadratic/velocity per frame; drive shadow/squash from state. Gold: coded-prototypes. | descript-marker |
| 00:04 | Apple UIKit / SpringBoard | UIKit frameworks → SpringBoard; iPad pointer + gesture porting; learned fluid springs from world-class eng. | descript-marker |
| 00:08 | Netflix refresh origin | Make app feel alive vs vending machine; ~9 months with Ben Johnson + Adam Bell; design + build. | descript-marker |
| 00:10 | Immersive surfaces | Artwork→detail shared transition; hero color matching = ~200 lines of extraction/tuning, not blur hack. | inferred |
| 00:12 | Buy-in at Netflix | Eng-led culture; director/VP budgeted experiment + A/B; few reviews — hallway demos + trust. | descript-marker |
| 00:14 | Tuning > standards | Don’t standardize spring constants; final tuning step (change 0.02, try again); tailored feel. | descript-marker |
| 00:15 | Craft metrics | Refresh A/B: core metrics substantially green; craft ≠ vanity — investing in feel = people liking the product. | inferred |
| 00:19 | Airbnb role | Arc: eng → 50/50 Netflix → ~30% BrowserCo → Airbnb design engineer: prototypes, interaction, POCs as glue. | descript-marker |
| 00:21 | Free electron | ~10–12 similar roles; designs in code not Figma; playable prototype shows what’s wrong. Gold: coded-prototypes / inflight-relevant. | inferred |
| 00:23 | Why not SwiftUI | Needs fluid/custom/never-drop-a-frame; UIKit + Core Animation + Wave; sometimes Metal shaders. | descript-marker |
| 00:25 | Feel great ladder | Fire-and-forget → interruptible → retarget with momentum → rubber-band beyond 0–1; keyboard hit-testing while animating. | descript-marker |
| 00:29 | Wave library | UIKit/SwiftUI weak on velocity retention; Wave = retargetable springs (Pop lineage); labor of love. | inferred |
| 00:32 | Shaders | Per-pixel GPU programs; escape rectangle primitives (ripple, Siri-like edge, SDF terrain); Book of Shaders. | descript-marker |
| 00:37 | Demos / curiosity | 30–40 Wave demos; Dynamic Island metaballs; nerd-snipe build loop. | inferred |
| 00:40 | AI / Cursor | Doesn’t use Cursor/Copilot much; supports tools that help people learn/create; shaders = final boss, start smaller. | inferred |
| 00:42 | How to start | Build tiny: box on screen → tap to move; no laid-out path; taste/glass gap; last 10% is half the value. | descript-marker |

## Notable Quotes

- **00:01:30** — **Janum:** "this is actually kind of like a high school physics problem… We know where we want this ball to land."
- **00:14:51** — **Janum:** "in the design process, you have this final step at the end called tuning that I don't think people… really talk about."
- **00:17:18** — **Janum:** "it really objectively empirically showed that craft does affect the business."
- **00:18:20** — **Janum:** "feel is product quality… just like stability… performance… They're all in the same bucket."
- **00:22:33** — **Janum:** "most of the time I'm designing and creating interfaces and prototypes, like in code."
- **00:22:49** — **Janum:** "once you actually like have something that you can play around with. You intuitively know what's wrong with the thing."
- **00:26:17** — **Janum:** "you actually want to maintain the momentum of these interactions… retargeting."
- **00:40:25** — **Janum:** "shaders… they're like the final frontier… the ultimate escape hatch."
