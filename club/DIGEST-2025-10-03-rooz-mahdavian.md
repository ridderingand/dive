---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Rooz Mahdavian
host: Ridd
title: "Designing frontier interfaces at Neuralink"
youtube_id: nSOCY59ram8
url: https://www.youtube.com/watch?v=nSOCY59ram8
published: 2025-10-03
duration_min: 52
tags: [ip/dive-club, design-engineering, prototyping, creative-process, craft, ux-research, product-strategy, career-growth]
flags: []
source: 2025-10-03-rooz-mahdavian.md
source_type: descript
slug: 2025-10-03-rooz-mahdavian
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Rooz Mahdavian (design engineer at Neuralink; formerly Apple Watch Faces / Siri watch face intern→FT) walks Ridd through designing **frontier interfaces** — interaction models you cannot know in advance because the device can change them. Arc: Berkeley fMRI dream-reconstruction spark → Apple Watch proactive "drive-by" computer → Neuralink jump (2019) → early iOS implant/calibration prototypes vs closed-loop empathy limits → first-principles BCI cursor (color/depth click ramp → circular reticle; mode switcher; dwell) → can we delete the cursor? → participant learning (parking spot + simulated gravity; ALS voice-fallback gaps; BPS scores rivaling trackpad) → daydream-with-computer / Blindsight vision design space (Atari-fidelity dithering metaphors) → hiring a second design engineer (end-to-end experiments participants can live with for a month; ML↔UI coupling) → body-mapping task as sweat-the-details example. Core claims: frontier = unknown interaction model; closed-loop BCI cannot be empathized via mouse simulation; continuous click feedback teaches co-adaptation; ship usable cursor fidelity before reinventing the wheel; experiments need polish not MVP mid. Why it matters: rare first-principles interface craft episode at the edge of human–computer I/O — mostly craft/UX research, not Inflight coded-review culture.

**ASR note:** FM RI / to RI → fMRI; neur interfaces → neural; CRI → cursor; redle → reticle; DCI → BCI; Blindsight kept (product name); Joinin heading typo in Descript marker. Speakers **Rooz**, **Ridd**. Quotes keep transcript wording. Timecodes trusted.

**Flags:** none. Granola + transcript are frontier UX craft / participant research loops — not coded Figma→preview Slack review culture. Prototyping is real (iOS/Mac apps, interactive tasks) but does not earn `coded-prototypes` / `prototype-feedback` / `inflight-relevant` under vault definitions.

## Takeaways (Granola)

From Granola Editing Notes "Editing Rooz" (source_meeting_id 07b241e0-ab17-471e-abf9-34e387f3e765, dated 2025-10-02) Takeaways (primary gold):

- Intern project at Apple: Siri watch face
- "Frontier Interfaces" — no idea what the interaction model will look like; device can change the model
- First-principles cursor design (color clicks → outer radius reticle)
- Applying gravity to a cursor / parking spot
- Daydreaming with a computer / Blindside vision

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Berkeley spark | Freshman-year Berkeley fMRI: reconstruct movie frames from brain signal; nap → "see" dreams. Filmmaker impulse: show images in the mind directly. Early neural-interface fascination + computers as mind→experience tools. | descript-marker |
| 01:42 | Apple Watch / Siri face | College intern on Watch Faces (~1 year post-launch); project → Siri watch face. Proactive "drive-by" computer while checking time. End-to-end concept→prototype→live-on-device loop; returned FT. After Neuralink demo July 2019, jumped late 2019 from one frontier interface to neural. | takeaway |
| 03:53 | What "frontier" means | No idea what interaction model will look like; historically input mechanism (light pen, cursor, multitouch) defines the computer. Neural interface can read intent higher in the stack than hand→pixel decomposition — device can change the model. | takeaway |
| 05:44 | Early Neuralink design | Heavy iOS prototyping: download app, connect implant, calibrate. Blank-canvas Apple energy — but too few constraints; hard to empathize with motor-disability closed loop. Open loop (imagine/observe without outcome) you can feel; closed loop you cannot reliably simulate (mouse friction/pressure leak into the sim). Needed Mac app for daily computer use outside lab. | descript-marker |
| 10:56 | First-principles cursor | Cursor = 2D focal point of intent; typical apps get rich subconscious sensory stack for free. Participants lack friction/pressure/sound — must bring feedback into the cursor. v1: magical takeover transition; continuous color (blue/orange mix) + depth/tilt mapped to click probability — visible, predictable, teaches co-adaptation despite 100–300ms decoder latency. | takeaway |
| 17:08 | Cursor evolution | Interaction space grew (scroll, drag, zoom). Signal quality drop → support dwell. Circular reticle (outer radius collapses with click probability) easier than color; see-through; mode switcher via slam-to-rail. Tradeoff: mode switching vs perfect model that needs no UI. Walk the ladder to usable cursor fidelity before deleting the wheel — highway is existing computer use (work, expression, communication, fun). BPS: first participant ~9.5; later ~10.38 vs Rooz trackpad ~10. | takeaway |
| 22:40 | Delete the cursor? | Excited rung: delete cursor for "interact with this point" intents; keep for direct manipulation. Next: no mode switch — cursor mitosis into two points for zoom; model learns drag intent. Quick-switch gets ~90% there functionally; magic is reading raw intent. | descript-marker |
| 28:13 | Participant learning | Voice as early fallback; ALS participant (can't speak) forced redesign of every voice-assuming edge. **Parking spot**: shoot cursor bottom-right to lock; gravity well; gesture (dot pattern) to retrieve. First two participants loved it more initially. Gravity failed for eye-tracker user (movie watching = huge velocities; focused push couldn't escape) → gesture mode. Mac sleep when cursor still too long. Goal: incredible experience each step; data toward optional cursor-delete world. | takeaway |
| 34:46 | Daydream / Blindsight | Personal north star: visual imagery / show feelings not tell; "daydream with a computer" when articulation is the bottleneck and models act in one frame. **Blindsight**: stimulate visual cortex from glasses — early fidelity like Atari not PS5; design knobs + dithering metaphors for low electrode count. Neuralauts (participants) change everything once they report feel. Nolan back to school / job story moves Ridd. | takeaway |
| 40:11 | Hiring design engineer #2 | 10+ daily users, hundreds of hours/week. Role: raise bar on daily experience + climb unexplored ladder rungs end-to-end. Need experiments participants can live with ~a month (not one hacky session); most won't pan out. Optimize for *feel*; polish experiments so dead ends aren't MVP mid. Tight ML↔UI coupling (labels tied to what's on screen); offline-only analysis dead end for UI — must build fully interactive. Wide stack; shoot shots as well as you can. | descript-marker |
| 46:07 | Body mapping / sweat details | Body-mapping task: rendered 3D arm + guidance; first thing before cursor calibration — explore which imagined motions feel intuitive *and* decode well; choose mapping for cursor control. Example of sweating details on experimental tasks that set the whole journey. | descript-marker |

## Notable Quotes

- **00:01:42** — **Rooz:** "my interim project was what would go onto become the Siri watch face."
- **00:04:09** — **Rooz:** "what that really means to be like a frontier interface is one that you have no idea what the actual interaction model's gonna look like."
- **00:07:29** — **Rooz:** "it is not something that you can imagine well enough for that to be useful."
- **00:08:56** — **Rooz:** "closed loop is extremely hard because you ultimately cannot experience. the neural interface directly."
- **00:11:14** — **Rooz:** "the cursor is the focal point of that experience."
- **00:13:53** — **Rooz:** "we want the experience of that to be at least visible and much more importantly to be predictable."
- **00:22:51** — **Rooz:** "can we delete the cursor?"
- **00:27:55** — **Rooz:** "the reason like not to reinvent the wheel in this case is just because the wheel is how you get on the highway"
- **00:29:56** — **Rooz:** "the final thing we landed on was this thing called the parking spot"
- **00:31:00** — **Rooz:** "when the cursor goes inside this parking spot, it's almost like it falls into a hill."
- **00:36:14** — **Rooz:** "you can sit down on a computer basically. And… daydream with it."
- **00:37:17** — **Rooz:** "we are working on something called Blindsight"
- **00:39:37** — **Rooz:** "We call them like the neural knots, uh, 'cause like astronauts"
- **00:43:22** — **Rooz:** "the thing we optimize most for is feeling when it comes to what it's actually like to use the interface."
- **00:45:45** — **Rooz:** "the mentality of like an MVP can sometimes be quite self-defeating"
