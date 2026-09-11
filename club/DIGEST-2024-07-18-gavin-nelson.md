---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Gavin Nelson
host: Ridd
title: "Prototyping, interaction design, and SwiftUI"
youtube_id: tPI-jc3RYQo
url: https://www.youtube.com/watch?v=tPI-jc3RYQo
published: 2024-07-18
duration_min: 57
tags: [ip/dive-club, prototyping, design-engineering, craft, design-tools, creative-process, code-as-material]
flags: [coded-prototypes, prototype-feedback, inflight-relevant]
source: 2024-07-18-gavin-nelson.md
source_type: descript
slug: 2024-07-18-gavin-nelson
generated: 2026-09-11
generator: dive-club-ideas
schema: 1
---

## Summary

Gavin Nelson (product designer, Linear; ex GitHub Mobile; known for icon craft + SwiftUI prototypes) on mobile interaction design and prototyping in code. Arc: icon→product path → what makes a strong mobile designer → physics-based touch interactions + discoverable power gestures → inspiration (Things, Netflix) → stock vs custom components → Linear ramp → **two prototyping phases** (early interaction validation vs late production-indistinguishable) → sketch/Figma/code fluidly → **internal TestFlight index of all prototypes** → storytelling + targeted feedback → SwiftUI learning (Origami ceiling → code) → ChatGPT as teacher not ghostwriter. Core claims: higher fidelity is exponentially more useful; never again preface a janky Figma transition with "better in production"; prototype code is spaghetti on purpose as a communication tool. Why it matters: canonical Inflight-shaped mobile episode — coded prototypes as the review artifact.

**Inflight note:** Ships an internal TestFlight with an index of every prototype (~00:31); hands production-indistinguishable coded prototypes for real feedback instead of Figma story decks (~00:24–00:32); prototypes focus feedback better than static frames (~00:39).

**ASR note:** Speakers **Gavin**, **Ridd**. Swift UI → **SwiftUI**; Chat GPT → **ChatGPT**; Times New Roman. Timecodes trusted (Descript).

## Takeaways (Granola)

### INTERACTION DESIGN
- No hover states but you do have touch gestures
- "Physics-based interactions" — interfaces that fit the physical world because you interact with fingers
- Make powerful interaction patterns discoverable: always a visible way to do the same action (swipe/long-press ≈ right-click/keyboard shortcuts)

### PROTOTYPING
- Early: when the interaction IS the design — low-fi overall with higher-fi interaction prototype
- Later: make it as indistinguishable from production as possible
- Gavin prototyping almost exclusively in code now
- Higher fidelity → exponentially more valuable
- People underestimate how fast 0→small working code prototype can be
- Ships a TestFlight internally with all prototypes (index page)
- Prototype code is a mess on purpose — communication tool, hardcode APIs; production is a separate skill
- Never again: "this Figma transition is janky, better in production"
- Moved to SwiftUI out of frustration with Origami

### SWIFTUI
- "Hitting wall of knowledge" / ceiling — kept inventing progressively harder-to-code ideas

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Icon origin | High-school pixel curiosity → vector craft → freelance network grown from sharing, not career-forcing; skills transfer to product. | descript-marker |
| 00:03 | Icon→product | Visual craft + iteration habits transfer; product as bigger problem-solving frame. | descript-marker |
| 00:04 | Mobile designer | Touch input changes the craft; short sessions, quick interactions. | descript-marker |
| 00:06 | Physics interactions | Physics-based feedback (inertial scroll rubber-band); swipe discoverability with visible fallbacks ≈ shortcuts/right-click. | takeaway |
| 00:13 | Inspiration | Things by Cultured Code; Netflix "no right to be this crafted"; apps that get out of the way. | descript-marker |
| 00:17 | Stock vs custom | GitHub leaned stock/a11y; Linear brand-first then platform defaults; start stock, customize when problem demands. | descript-marker |
| 00:19 | Linear ramp | Joining craft culture; learning product/context alongside interaction craft. | descript-marker |
| 00:23 | Two prototype phases | Early: low-fi shell + hi-fi interaction test. Late: fastest path to production-indistinguishable artifact you can hand someone. | takeaway |
| 00:28 | Sketch / Figma / code | Fluid tool switching; code almost exclusively for prototyping now; TestFlight index of prototypes; spaghetti OK. | takeaway |
| 00:35 | Mobile "hover" | Physics/gestures replace hover polish; velocity-aware modal dismiss. | takeaway |
| 00:36 | Storytelling | Brian Lovin / GitHub lesson: sell the team; prototype + context beats static story. | descript-marker |
| 00:40 | SwiftUI journey | College CS base → Origami ceiling → SwiftUI; never preface janky Figma transitions; ChatGPT as teacher. | takeaway |
| 00:44 | Origami vs code | Either fine; code travels further toward shipping apps. | descript-marker |
| 00:46 | ChatGPT learning | Isolate the stuck point; "teach me" not paste-and-build; watchOS honeycomb grid aha. | descript-marker |

## Notable Quotes

> "I wanted to be in an environment where I could just do that… never felt like if I was trying to communicate an interaction and I had to preface it with like, this Figma transition is a little janky. It'll be better in production." — Gavin (~00:41:44)

> "One of the things I've actually done at Linear is I ship a little, just internally, a little TestFlight app that has all of my prototypes in it… the very first page of the app is just an index." — Gavin (~00:31:31)

> "People underestimate how fast it can be to go from zero to a little working code prototype." — Gavin (~00:31:03)

> "When you have that prototype that may be just entirely spaghetti code… it creates this very high fidelity thing that's indistinguishable from production. That's like the universal language of getting feedback." — Gavin (~00:24:47)

> "Make sure there's always a visible way to do the same action." — Gavin (~00:09:15)
