---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Jeff McAvoy
host: Ridd
title: How to get animation super powers with Rive
youtube_id: 3FUyZXwMX9c
url: https://www.youtube.com/watch?v=3FUyZXwMX9c
published: 2023-11-14
duration_min: 43
tags: [ip/dive-club, design-tools, craft, tool-bending, design-engineering, creative-process]
flags: []
source: 2023-11-14-jeff-mcavoy.md
source_type: descript
slug: 2023-11-14-jeff-mcavoy
generated: 2026-09-11
generator: dive-club-ideas
schema: 1
---

## Summary

Jeff McAvoy (Rive + Webflow educator; Rive Flow) gives a live masterclass on interactive Rive animation for the web. Arc: demo reel (cursor-tracking login character, currency text-at-runtime, voice-reactive, viewport-reactive third-eye, scroll submarine that keeps animating when paused unlike Lottie) → Rive editor 101 (design vs animate; timelines + state machine; inputs boolean/number/trigger; listeners; layers for parallel states) → advanced form file walkthrough (bones, blinks, kickouts via trim paths, butterfly speech-bubble pattern, surfing in/loop/out with reverse playback for file size) → runtime: inputs driven by JS; **Slater** AI code companion + Rive docs copy-paste boilerplate → "designer pretending to be a developer"; start trigger→boolean→complexity → Webflow hookup (Slater single-script body code vs embed) → easy mode = iframe/share embed (listeners inside Rive only) vs hard mode = runtime inputs → encouragement: start tiny; Rive hiring demand; designers can add motion without being animators. Core claims: state machines + runtime inputs unlock product-grade interactive motion; Lottie freezes on scroll pause, Rive can keep sub-motions alive; AI writes JS, you wire inputs. Why it matters: motion/tool craft episode for marketers & product sites. **Inflight no** — Rive/Webflow animation craft and runtime JS; not Inflight design-review-via-code / prototype-feedback culture.

**ASR note:** Speakers **Jeff**, **Ridd** (Descript trusted). Corrections: Slator → **Slater** (Edgar Allen); Rifle website → **Rive Flow**; arrive → **Rive** where mangled. Timecodes trusted (~43m). Granola-weak.

## Takeaways (Granola)

Granola-weak: no Editing Takeaways note found.

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00:00 | Rive animation examples | Cursor-tracking login character: hover speech bubbles, typing kickouts, shades on filled level, submit surf loop; mesh on bitmap for faux-3D; runtimes let other page elements drive Rive | descript-marker |
| 00:01:21 | Runtime text, voice, blend states | Currency converter: form input + JS math updates text inside animation; voice-reactive via audio→value; Slater challenge: shape states in blend driven by number input | inferred |
| 00:02:38 | Viewport-reactive + loading dog | One animation resizes with viewport (third eye pops in; eyes track cursor independently) — no dual files + show/hide; loading dog: JS count-up + hover interactivity + trim-path bar drives tail-wag amplitude | inferred |
| 00:04:14 | Scroll submarine vs Lottie | Scroll-% drives scene but water/lights/propeller keep moving when scroll stops — Lottie would freeze; listeners + easter eggs along the way | inferred |
| 00:05:28 | Rive editor basics | Artboard + familiar design tools; simple hover demo: group origin freeze + rotate; design mode vs animate mode (state machine + timelines) | descript-marker |
| 00:07:15 | Inputs, listeners, transitions | Idle vs hover-on timelines; boolean hover input; pointer enter/exit listeners; conditions + transition duration + exit time 100% so rotation completes | inferred |
| 00:10:38 | Mental model + state-machine layers | Ridd: middle ground Figma↔After Effects; timelines = states (even single key), state machine = spatial logic; layers = parallel entry states (e.g. color-change loop alongside hover) | inferred |
| 00:13:32 | Advanced form: layers & kickouts | Rocking + blinks on own layers (offset blinks); typing trigger kickouts L/R; splash dots = synced trim paths on multi-path shape | descript-marker |
| 00:17:23 | Butterfly speech-bubble pattern | Idle scales bubbles to 0; login vs password loops; play animation then reverse (speed −1) to save keys/file size; exit time 100% before return to idle | inferred |
| 00:20:50 | Sunglasses + surfing states | Sunglasses boolean when field non-empty; surfing = in → hold loop → reverse out; conditions on transitions gate progress; surfing true/false set at **runtime code** | inferred |
| 00:24:24 | Runtime JS + Slater intro | Listeners stay inside Rive; inputs exposed to runtime; Slater AI chat beside code; Jeff had little JS before Rive — docs + AI; "designer pretending to be a developer" | descript-marker |
| 00:26:31 | How to prompt AI for Rive wiring | Start console.log on hover to prove connection; AI good at JS, weak at Rive runtime (copy-paste instance setup from docs); then wire input.fire / boolean.value; only 3 input types | inferred |
| 00:30:05 | Boilerplate mental model | Copy Rive instance boilerplate every time; AI builds functions per input (boolean or .fire trigger); state machine preview = runtime behavior | inferred |
| 00:31:58 | Connecting Slater to Webflow | Slater hosts code + single-script body hookup; page-scoped files; personal snippet cheat sheet → upcoming community library | descript-marker |
| 00:34:48 | Easy mode vs hard mode | Hard = runtime inputs + JS; easy = iframe share embed (listeners inside file only); Framer integration easier — Jeff teaching Webflow because unclear; no Webflow Interactions needed | inferred |
| 00:37:05 | Community remix + encouragement | Creative Commons community embeds/remixes; start overwhelmed → first trigger-fire rush → add complexity; companies hiring Rive; designers can add motion without being animators; Twitter + Rive Flow | inferred |

## Notable Quotes

> "I often say I'm a designer pretending to be a developer" — Jeff (~00:25:57)

> "I don't actually have to know JavaScript all that well… I can rely on AI tools" — Jeff (~00:25:28)

> "There's only three input types… number, boolean, or trigger." — Jeff (~00:31:05)

> "if you stop on a Lottie, it would just be frozen… this can continue to have parts moving around" — Jeff (~00:05:00)

> "This is definitely hard… Advanced mode." — Jeff on runtime JS (~00:34:52)

> "you don't have to be an animator to come into it… just add motion to your existing designs" — Jeff (~00:40:10)

> "there's a way to create something that nobody's ever seen before" — Jeff (~00:40:24)
