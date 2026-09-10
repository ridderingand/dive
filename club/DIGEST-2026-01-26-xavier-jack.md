---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Xavier Jack
host: Ridd
title: "How To Vibe Code in 3D"
youtube_id: Y4K5lA1cdZg
url: https://www.youtube.com/watch?v=Y4K5lA1cdZg
published: 2026-01-26
duration_min: 45
tags: [ip/dive-club, vibe-coding, code-as-material, design-tools, creative-process, prototyping, game-feel, tool-bending]
flags: []
source: 2026-01-26-xavier-jack.md
source_type: descript
slug: 2026-01-26-xavier-jack
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Xavier Jack walks Ridd through how the viral Amie launch site came to life (concept → gray-box code prototypes → Blender → Three.js), then live-demos vibe-coding a Dive balloon: SVG → Blender mesh/sculpt/materials → GLB into a Cursor + Vite + Three.js scene → armature + wiggle bones + GSAP interactivity. Arc: Dennis’s “full day of Amie as sky gradients” concept and gray-boxing / Path-clock scroll explorations that never shipped → code-first creative process (Sketch sketches → dirty HTML/CSS/Three.js for energy) → interaction/game-feel before polish → minimal vs immersive sites (Desktop.fm mystery CTA; Three Tools inspector logo) and company-maturity spectrum for going extra → Amie balloon signature via open-source wiggle bones + cover-flow / gene-effect gray boxes → “if you know what you want” vibe-coding 3D → Blender crash course (import SVG, remesh, cloth inflate, Principled BSDF, area/rim lights) → Cursor Vite scaffold, canvas, WebGL vs Three.js → export GLB (no lights — not standardized) → one-shot spacebar spin with wiggle bones. Core claims: strong concept ties micro-interactions together; start with gray-box interaction/flow in code, not polished layout; use the unique advantage of interactive graphics (else ship a video); game feel / interaction feel early; go extra when the moment (launch, campaign, pre-seed) calls for noise; isolate experiments in a new repo and approve feel before production; 3D has different primitives (camera, lights, materials) — learn what’s possible, then prompt well; WebGL is low-level GPU API, Three.js abstracts to scene/camera/mesh; lights don’t round-trip Blender→Three.js reliably; vibe-coding 3D is attainable once you have language + a workable asset. Why it matters: a designer-friendly path from Amie-level craft into Blender + Three.js via Cursor, with concrete primitives and a live balloon demo.

Descript speaker-name correction (export used generics): **Speaker 9** ≈ guest **Xavier Jack**; unnumbered **Speaker** ≈ host **Ridd** — inferred from conversation role (guest walks process/demo; host interviews/reacts). Other numbered Speakers (5, 7, 8, 11) are short affirmations/fragments — likely ASR splits; **low-confidence**, treated as noise unless context clearly matches Ridd. Proper nouns in prose: Amy → Amie; treasure years / Trisha Yes → Three.js; Path (microblogging app); Open Purpose → OpenPurpose; wiggle bones; Vite; GLB/glTF; weight painting; FOV. Quotes keep transcript wording; speaker labels below are remapped from Descript generics. Timecodes and `## [timecode]` markers trusted from Descript (no ±30s caveat).

## Takeaways (Granola)

From Granola Editing Notes "Xavier Jack (vibe code 3D)" (Editing Notes bullets as primary gold):

- Need B-roll of old Amie website from Wayback Machine.
- Consider cutting early casual conversation, go straight to OpenPurpose balloons.
- Show Figma files directly rather than deck presentation.
- Trim Amie section to ~50% to balance with tutorial content.
- Cut Blender vs Spline discussion, go straight to SVG import.
- Focus demo on key moments, cut technical troubleshooting.

Normalized episode gold (editing notes are mostly cut guidance; claims below are searchable episode gold):

- Gray-box the main interaction/flow in code first (basic shapes + animation) before polish — concept and interaction feel beat early visual fidelity.
- Game feel / interaction feel is the unique advantage of interactive graphics (vs video); nail liveliness early, even when UI/copy stay low-fi.
- Vibe-code 3D when you know what to ask: Blender SVG→mesh→sculpt→materials → GLB into Cursor/Three.js; WebGL is the low-level GPU API, Three.js gives scene/camera/mesh — lights usually reconfigured in code because they don’t standardize across tools.

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Amie backstory + strong concept | Xavier: Amie site started on Twitter (hand-tracking experiments → Dennis DM). Dennis’s concept: one full day of Amie visualized as sky gradients (sunrise → midday → sunset). Strong concept ties micro-interactions together; don’t get stuck only in micro-UI. Ridd: matches Dennis’s “close my eyes and see the site” story from an earlier interview. | descript-marker |
| 00:01 | Gray-boxing + tools | “Ray boxing” (game term): strip detail — basic shapes, animation, interactions for first communication. Tools: prototypes in code (often plain HTML/CSS + Three.js background); own component library only to start fast and capture energy — not fancy frameworks. | inferred |
| 00:03 | Path clock + Sketch → code | Inspiration: Path app clock-on-scroll (+ Dynamic Island era). Process: concept → quick Sketch visuals (feeling/states, not layouts) → dirty code (export images, animate wrappers). Scrollbar-expands concept explored hard, never shipped to prod — cut so it wouldn’t steal attention from the product; Xavier posted a video on Twitter for traction / “creativity ego.” | inferred |
| 00:05 | Flow jamming + Three.js skies | After cutting the clock: jam general flow — sections, gradients/layouts, low-fi sky-in-a-box vs full-bleed background, how to show features + parts of day. Background skies in Three.js. Abstract motion questions (layers split vs stay together). Ridd notes movement/transitions were high-fidelity while visuals/copy stayed low-fi — liveliness nailed early. | takeaway |
| 00:07 | Why interaction-first | Xavier’s path: Photoshop web → Three.js because Cinema 4D wouldn’t run → motion graphics in code → realized interactive graphics’ full potential is interactivity (else use video). Strength = interactive graphics; maximize that unique advantage. Concept first, then how things feel in interaction; even on minimal sites, design the interactive piece deeply. | takeaway |
| 00:09 | Minimal vs immersive | Trend: less full-screen immersive scroll (still popular — e.g. Ettal / Amie-esque), more contained motion in a section. Motion still differentiates clean-but-standard from special. Xavier: motion is “almost my language”; new Amie is super minimal and he appreciates it. Shows own playful mystery waiting-list site (job: get word out) and Three Tools (Three.js inspector) — plain page + satisfying small 3D logo interaction. Going all-out (Amie) can still be the right move for views/talk. | descript-marker |
| 00:12 | Noise, maturity, campaigns | Ridd: launch Amie captured design Twitter/tech for a month; higher-conversion minimal site wouldn’t have gone viral the same way; second site mini-viral partly by juxtaposition. Xavier: design = knowing how to make noise; many discovered Amie because of that site. Correlation: how far animation goes ↔ company maturity (mystery pre-launch fidget → creative recruiting → enterprise predictable). Still room for micro-campaigns at big brands (Xavier’s HBO/Spotify/etc. 3D marketing sites; Shopify Edition as talent/speech vehicle). | inferred |
| 00:15 | Amie balloons + wiggle bones | Higher-fidelity prototyping + UI interactions; rabbit hole of framing the app (inflatable / frost plastic) via Blender → Sketch compositions — went nowhere until late. Signature: open-source **wiggle bones** (game real-time smooth motion without pre-baking) — armature/skeleton, weight painting → Amie logo as interactive balloon in the skies (OpenPurpose branding already had balloons). Ridd: favorite internet fidget toy. Production help shout-out: Adrian and Thomas (cover-flow feature strip). Bottom “gene effect” suck-into-Amie-logo: gray-box into a box first. | descript-marker |
| 00:19 | Isolate 3D experiments | When the site got complex: new repo, approve gray-box feel (no final content/colors), slowly add 3D model, only then merge to final. Ridd: Claude Code one-shots feel world-conquering, but 3D still sits “over here” — is this vibe-codeable? Xavier: if you know what you want, yes — demo will show knowing what to ask. 3D primitives differ (camera, lights, materials); once you know what’s possible, prompting works. | descript-marker |
| 00:21 | Blender: SVG → balloon mesh | Live demo: Dive balloon. Blender crash course — import SVG (drop-in), scale/rotate/center, convert curve→mesh (spacebar ≈ command-K), edit mode extrude thickness, Remesh (sharp → quads for sculpting), duplicate collection as backup before destructive apply, sculpt cloth→inflate, Subdivision Surface smooth, Principled BSDF + area light + rim/back light, metallic/roughness (roughness = mirror→diffuse), transparent film + high-contrast look for nicer stills. | descript-marker |
| 00:28 | Cursor + Vite + canvas | Open Cursor: scaffold basic Vite + vanilla JS (simple public/assets + source; not Next). Strip template counter/content. Prompt: canvas + Three.js, fixed full-window. Canvas = required HTML element to render WebGL/WebGPU — nothing deeper. Ridd ships PRs daily; vibe-coding “absolutely addicting.” | descript-marker |
| 00:30 | WebGL vs Three.js | WebGL = low-level browser API to talk to the GPU (clear screen, draw triangles). Three.js abstracts to OOP: camera, scene, mesh (any renderable object). Analogy: even lower-level than raw JSX vs React. Bare minimum Three.js needs: scene + camera + renderer — then add a white box mesh (geometry + material) to prove the pipeline. Approachable once demystified. | descript-marker |
| 00:33 | GLB export + lights in code | Duplicate export collection (no lights), export GLB/glTF to public with “active collection only.” Cursor loads `/…glb`. Why hide Blender lights: no proper standard between 3D apps; glTF tries but lights aren’t standardized — bring geometries and reconfigure lights/camera (FOV, intensity) in Three.js. Helpers removed; model lands. | descript-marker |
| 00:37 | Interactivity + wiggle bones one-shot | Ridd: can we one-shot click/spin given a Blender asset? Xavier: for wiggle bones — add armature (single bone → extrude chain), parent with automatic weights so mesh follows bones, re-export GLB, paste wiggle-bones library link to Cursor (not popular enough for the model to know), keep oriented bone as root. Move root → smooth follow. Prompt: spacebar rotates root 360° on Z via GSAP. Works; ceiling is high with years of tweak intuition — feels as natural as HTML/CSS to Xavier. Ridd: first time 3D feels attainable via vibe-coding + AI research for Blender methods. | descript-marker |

## Notable Quotes

Speaker labels remapped from Descript generics (**Speaker 9** → Xavier; **Speaker** → Ridd). Attribution confidence is inferred from role; short numbered-Speaker fragments omitted.

- **00:01** — **Xavier:** "when there's a really strong concept, I think that really ties things together."
- **00:01** — **Xavier:** "I call it Ray boxing, and that's how they call it in games. So I remove a lot of the detail I just use basic shapes and basic animation and the interactions."
- **00:02** — **Xavier:** "for a long time I've been prototyping with codes for some really specific things."
- **00:03** — **Xavier:** "it's just like, let's make something really fast, but where we can get the, the energy."
- **00:04** — **Xavier:** "Then from there I jump back , to codes. And again, I'll do it so dirty and ugly."
- **00:04** — **Ridd:** "this is a really interesting concept and you spent a decent amount of time exploring it, and yet I've never seen it before. 'cause it didn't make it to prod."
- **00:04** — **Xavier:** "you can always make a video and put it on Twitter."
- **00:07** — **Ridd:** "That movement in between sections and that last concept you shared was really high fidelity… you were pushing on that and like making sure that you're nailing down just the, the liveliness of the site pretty early."
- **00:08** — **Xavier:** "the full potential of doing something interactive or with Trisha Yes, is to add a lot of interactivity. Otherwise you might as well just use a video."
- **00:08** — **Xavier:** "I can do interactive graphics, so that's my strength… why not use this unique different advantage to the maximum"
- **00:08** — **Xavier:** "the main thing, it's how do things feel in terms of interaction"
- **00:09** — **Ridd:** "the importance of motion is still it. It just is the way to differentiate between something that feels clean, but standard and then something that feels like really, really special."
- **00:10** — **Xavier:** "it's, it's almost my language, you know?"
- **00:12** — **Ridd:** "that launch website. Everybody saw that website, everybody clicked through that, like it captured design Twitter and honestly like all of tech for a good month"
- **00:13** — **Xavier:** "knowing how to make noise and how to make people talk about something"
- **00:14** — **Xavier:** "even if you're a big brands, it's makes sense to have these specific moments where you can be fun and like, it doesn't need to be only about information and conversion"
- **00:16** — **Xavier:** "game feel, or I call it interaction field when it doesn't have to do with games"
- **00:18** — **Ridd:** "I've spent so much time clicking the Amy balloons in the skies."
- **00:18** — **Xavier:** "sometimes I would also get stuck playing with it."
- **00:18** — **Ridd:** "they were one of my favorite fidget toys on the internet were these balloons."
- **00:19** — **Xavier:** "I first did a prototype only with gray boxing, so I made it go into a box."
- **00:19** — **Xavier:** "I started a new repo and I just did this. And we approved this before we moved, uh, forward"
- **00:20** — **Ridd:** "I feel like I can basically take over the world with Claude Code and just five coding in one shoting things… And yet this still, again, it just kind of exists like over here for me."
- **00:20** — **Xavier:** "I think if you know what you want. Yes. when we do the demo, you'll see because I know what to ask"
- **00:21** — **Xavier:** "you have a camera, you have lines, you have materials. So it's different primitives than with, websites or apps."
- **00:30** — **Xavier:** "in order to render WebGL or Web GPU in an HTML websites, you need a campus element. There's no more than, there's not more."
- **00:30** — **Xavier:** "WebGL is a low level API to use, the graphics cards from a browser."
- **00:31** — **Xavier:** "three J yes. Abstracts all of that into an object oriented way."
- **00:31** — **Ridd:** "it almost kind of feels like the difference between writing like raw JSX versus using like React."
- **00:32** — **Xavier:** "scene and the camera and the renderer. That's the basic things you're gonna need if you want. Do render something with treasure. Yes."
- **00:35** — **Xavier:** "there's no proper standard between 3D software… lights are definitely not standardized."
- **00:36** — **Xavier:** "we all wish that there would be a workflow where you could just make something in Blender and somehow export it and that it would export it one to one to three Js. But the reality is that you need to. Just bring some geometries and kind of reconfigure things manually most of the times."
- **00:41** — **Xavier:** "it feels as natural for me as HTML or css"
- **00:41** — **Ridd:** "for the first time… it's just feeling so much more attainable for me to learn these different tools and technologies, not only with Vibe coding, but even just having AI help me do research"
- **00:41** — **Ridd:** "you can already feel that the ceiling is so incredibly high when you're working with these different tools."
