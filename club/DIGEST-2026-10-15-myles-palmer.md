---

type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Myles Palmer
host: Ridd
title: "Building Custom AI Tools at Metalab"
youtube_id: eWTXkbZxAQo
url: https://www.youtube.com/watch?v=eWTXkbZxAQo
published: 2026-10-15
duration_min: 56
tags: [ip/dive-club, design-tools, ai-agents, design-engineering, creative-process, code-as-material, prototyping, tool-bending]
flags: [prototype-feedback, coded-prototypes, inflight-relevant]
source: 2026-10-15-myles-palmer.md
source_type: descript
slug: 2026-10-15-myles-palmer
generated: 2026-10-16
generator: dive-club-ideas
schema: 1
---

## Summary

Myles Palmer (design director at Metalab) gives Ridd a behind-the-scenes demo of Oodles, Metalab's internal tool for generating interactive, parametric design tools from a prompt. Arc: what Oodles is and the idea of "rules and systems" as a design method → how it works (skills, router, engine, control panel; self-learning lessons) → live demos (a pixelated type tool, the "/newtool" flow that returns a plan, a marbles tool) → how the AI's plan response was designed → pushing quality (glass marble ~v67, procedurally generated variations tagged with the Google Vision API, blue/red review) → how much is still crafted by hand (code-first, Figma as the place for visual design, token sync and a drift checker) → design vs making product, in-house vs agency → the ROI of Oodles (Windsurf) → his history with systems (Tumblr themes, Conditional Design, the 2016 Ivy Park site) → how Oodles started and grew (1,296 commits since 31 May, domain skills, a lessons log, Oodle Studio with publish) → side projects across Metalab → role and curiosity.

Core claims: Oodles is a system that builds tools — roughly 25–30 skills, a router, an engine and a control panel — and it learns by harvesting lessons from tools built; the AI's response is a product surface worth designing (plan, controls, closest reference, remix, suggested additions); the gap between "something you can use" and "something many people on different projects can use" is all design decisions; Figma is still the place to do great visual design but not to make product ("two different things"), and Figma↔code token sync plus a drift checker is a real workflow that became client work; the most powerful thing a designer can do right now is have side projects. Why it matters: a concrete agency-side example of design-in-code and tool-making as a design craft.

Speaker labels in the Descript source are already named (**Myles → Myles Palmer, guest**; **Ridd → host**). Timecodes and section markers are trusted from Descript (no ±30s caveat); HH:MM:SS seconds are interpolated between Descript's 60s timecodes (within a few seconds). Name/ASR notes against the Descript text (disclosed, not silent): Ridd says "Miles" (00:43:46, 00:52:41) → Myles; "MetaLab" → Metalab; "Oodle Studio" (Descript, 00:42:16) is the app name as spoken; "dap-gui" → dat.GUI (00:37:32); "Sarah" (Ridd's question about who assigns exploration, 00:43:46) surname not given. The Conditional Design Workbook authors are rendered "Luna Maurer, Jonathan Pukey, and, uh, Ralf Roeters" (00:33:51) — Luna Maurer as transcribed; the other two are likely Jonathan Puckey and Roel Wouters (unverified). Metalab side-project names as transcribed: Enri (asset-dump / parallax tool, dog website), Lorenzo ("Bencho" interactive components), Natalie (room-measuring app; also the first pattern tool), Adam (baby-tracking app), Marcus (low-fi prototyping tool), Mac (Windsurf designer). Granola vs Descript: Granola's "60–70 tools" is confirmed ("there's only, like, 60 or 70", 00:10:19), as are the Ivy Park 2016 site (00:34:26), "31st of May" (00:41:11) and 1,296 commits (00:40:51). Granola show notes also mention a Vast (space company) engagement and award nominations — not present in the Descript composition (likely cut or recording-only), so not asserted. Windsurf and Mozilla Firefox are named aloud while shown on screen.

**Source + YouTube offset:** Descript composition (Copy to clipboard export, checked complete: 00:00:00–00:52:00 timecodes, continuous every 60s, ends on the sign-off; composition 52:44). All timecodes in this digest are Descript edit-time. **YouTube = Descript + offset**: Descript 00:00:00–00:04:17 → **+0:57** (cold open + intro); 00:04:17–00:22:42 → **+2:26** (Paper + Framer reads at YT ~05:10–06:40); 00:22:42–end → **+3:00** (Dive Talent Network read at YT 25:09–25:41); YouTube adds a Dive Radio plug after the sign-off (YT ~55:44–56:06). Spot-checked against YouTube auto-captions (`eWTXkbZxAQo` en-orig): "it is a set of skills, about 25 or 30" D 00:02:49 → YT 00:03:44; "make sure that 20 out of the 100 have speckles" D 00:18:17 → YT 00:20:44; "the most powerful thing that any designer can do right now is have side projects" D 00:44:51 → YT 00:47:49. Quotes below carry the computed YouTube time.

**Inflight note:** Evidence for `coded-prototypes` / `prototype-feedback` / `inflight-relevant`: Oodles generates interactive tools from a sentence and the plan gives "designers things to react to" (00:09:30); Metalab is "always like dialing up prototypes at low fidelity… annotating them and handing them off to clients" (00:49:10); he designs in code and prints components back to Figma with token sync and a drift checker (00:19:54–00:22:50); tool shells auto-update across all tools (00:40:07), multiplayer canvases (00:38:04), and Oodle Studio adds one-click publish (00:42:47). The tool is Metalab-internal, not a review/preview-link product, but it is directly relevant to code-as-design-material and prototype sharing.

## Takeaways (Granola)

Source: Granola note "🤿 Dive Club — Myles Palmer" (`671afa24-7fe2-4f8d-9b3f-98bc3569c963`, recorded 2026-10-12, updated 2026-10-15). Provenance: no Ridd-typed Takeaways or Description in this note (private notes hold only editing/cut instructions, which are not catalogued because they reference client-confidential material); the list below is the Granola-generated summary of the recording (kept verbatim, weighted as inferred). A separate pre-call note "Ridd <> Myles Palmer" (`9d589585-83d1-40ad-96af-088858a504c3`, 2026-08-31) exists and was not ingested. Title/Intro/Show Notes/Subject Line options live in Notion (ship kit), not here.

**Granola summary Takeaways (generated, expanded)**

- Myles has always gravitated toward rules and systems over hand-crafting, and AI made that instinct supercharged
  - "I've always been obsessed by using rules and systems to make design rather than like crafting things myself. And with the power of AI, I was kind of like, oh, this is the perfect circumstance for it."
  - His earliest web experiments (Tumblr, 2012) were already about giving people constraints and letting them generate the design on the other side
  - The Ivy Park site (2016) was a procedural video generator that was never the same twice: all content dumped into a bucket, experience generated on the fly
  - He stopped coding around 2017-2018 when React arrived and felt locked out. AI gave him back the ability to "play at the system level and create things that make other things"
  - This archetype (systems thinker, not pixel-pusher) is increasingly well-suited to the current moment
- Oodles is not just a tool, it's a system that builds tools, and it self-learns over time
  - At its core: ~25-30 domain skills, a router, an engine, and a control panel
  - Skills detect intent (2D, physics, 3D) and apply domain knowledge: "In the past when I've done 3D, I learned that actually if I do this one step, it crashes. So avoid doing that."
  - Functional skills know how to tap into specific capabilities (mic reactivity, camera, gyro, etc.)
  - Self-learning loop: "Of all the tools built in the last month, what did we learn? Where did people trip up? What went wrong? How can we use that to improve further tools?"
  - 1,296 commits on the Oodles GitHub repo. Started May 31. Just Myles and Claude committing every day.
  - ~60-70 tools built so far. Now has multiplayer, real-time sync, auto-publishing, and a standalone app (Oodles Studio) so designers never need to touch a terminal or GitHub
- The design of the AI response itself is a product decision, not an afterthought
  - When Claude returned too much information early on, Myles redesigned the output: "I can't parse this, I need a simpler way to get through this information."
  - The plan response now includes: tool name, controls, where it will live, a closest existing reference, a remix option, default inclusions, and suggested additions
  - It also asks: "What are some ideas? If you had this idea yourself, what would some stuff that you would be adding that you think is fun?"
  - This came within the first 2 weeks of building, through trial and creation rather than extensive back-and-forth
  - The gap between "something you can use" and "something a bunch of different people on different projects can use" is enormous, and it's all design decisions
- Myles uses procedural generation as a creative exploration method, not just an output method
  - Built a script that generated 100-200 seamless loop variations of a single Oodle automatically, saved them to folders, tagged them with Google Vision API for categorization
  - His review process: tag blue (like it, make more like this) or red (don't like it), then feed preferences back as prompts
  - "Make sure that 20 out of the 100 have speckles because I love the speckles"
  - The glass marble Oodle reached version 67 before it felt done. The key detail he chased: particles living inside the shape, which took the most iteration
  - "I love Oodles because it leads to unexpected things." The random button surfaces things he couldn't have imagined
- Myles draws a clear line between making and designing, and between product and craft
  - "I still think that Figma is the place to do great design work. It's just not the place to make product, I don't think. And I think that those are 2 different things."
  - Making great product: how it feels, functions, the technical aspects, marketing, user feedback
  - Great design: "inherently visual. If you start sketching on a bit of paper, that's also fine. But fundamentally, I think great design is always originated from looking at something visual."
  - Iterating toward great design purely through a text box is "just painful. You're just restricted down into this little thing."
  - He showed Mozilla Firefox work as the benchmark: "The level of craft and detail and beauty in all of this stuff, if the team were trying to achieve this straight in code, it's just not there yet."
  - His own workflow: starts in code, pushes to Figma for visual massaging, pushes back to code. Or never leaves code. Figma is still "super handy for that overview and the experimentation around a visual design."
- Figma-to-code sync is a real workflow, not a theoretical one, and drift is the enemy
  - Built a Markdown editor entirely without designing in Figma. All components, atoms, primitives generated and printed back
  - Has a local instance running that syncs design tokens between the codebase and the Figma file in real time. Change either, both update.
  - Built a drift checker plugin: "I can check this component and it will check the codebase against the Figma file, and it will return an audited report for me."
  - The value of printing back to Figma: "Sometimes it is still way faster to come into Figma and make a design tweak. Changing padding, increasing it, and then being able to push that into code and move on."
  - This Figma-to-code sync work has since become a client offering at Metalab
- Side projects are the most powerful thing a designer can do right now, and Metalab is proof
  - Oodles started as evenings and side-of-desk obsession, not a top-down initiative
  - "The most powerful thing that any designer can do right now is have side projects where they're creating something and learning because it feeds back into the work."
  - Henry (interviewing at Metalab, had never seen Oodles): built a parallax asset-dump tool and floating pill social asset tool in his spare time
  - Henry also built a personal website for his girlfriend's dog, complete with a mini-map, running, stick-fetching, and a cap added that morning
  - Natalie built an app for her partner's building company to replace 30-45 minute room measurement sessions
  - Adam built a baby-tracking app now live on the App Store
  - Marcus built a full low-fidelity prototyping and annotation tool for client handoffs
  - Metalab has 3-4 different variations of the same prototyping tool idea, all from different designers running at the same problem independently
  - "I'm a maker. I love to make things and I love to be very tangible with how I create."
- Curiosity as a practice is not abstract, it has a specific shape
  - Myles's default question: "I wonder if I can do this, therefore I should do it."
  - "All of it stems from curiosity. Why did you do that? I don't know, to see if I could. And I think that is my answer to most things."
  - He runs a shared internal site called Field Notes with another designer: guides on GitHub, experiments on Design MD files, learnings on AI and design
  - Won the Artemis Award at Metalab's annual summit (innovation category). Was nominated in 7 of 10 Best of Metalab award categories.
  - Feedback from a colleague: "Miles is obsessed with making things and that makes me want to make things."
  - Did an 8-week engagement with Vast (space company) after a talk: taught their whole design team how to set up Claude Code and get making. By the end, they were building their own tools.
  - "I think it has never been a more exciting and more fearful time to be a designer. And I think both things can be true."
  - His daily frame: "What can I do today to make my work better, to make my colleagues' work better, to help people to find something out?"

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00:00 | YouTube cold open + intro (YouTube-only) | Not in the Descript composition: YT 00:00–00:57 = cold open ("never been a more exciting and more fearful time to be a designer", from D 00:51:56) + Ridd intro (Myles as design director at Metalab; Oodles). Descript 00:00:00 = YT 00:00:57. | inferred |
| 00:00:00 | What Oodles is | Header "What is Oodles?" Parametric tool to make "anything that you can imagine"; obsessed with rules and systems over crafting by hand; controls, presets, randomization, artboards, sharing; Claude "falls into the same trap over and over" making tools (mic, camera, 3D bugs), so Oodles saves everyone that pain; 3D, 2D event and physics (pebbles) examples from a single "/newtool" prompt. | descript-marker |
| 00:02:30 | How it works: skills, router, engine | Header "How Oodles Works." ~25–30 skills + router + engine + control panel; domain skills ("if I do this one step it crashes… avoid doing that"; React Three Fiber over Three.js) and functional skills; self-learning — "of all of the tools built in the last month, what did we learn?" | descript-marker |
| 00:04:17 | Ads (skippable; YouTube-only) | Not in Descript. Sponsor reads inserted at YT ~05:10–06:40 (Paper, then Framer per captions). Offset steps from +0:57 to +2:26 here. | inferred |
| 00:04:17 | Demo: type tool | Takes words + an open-source typeface and redraws letters for a pixelated threshold; export TTF / SVG / timeline animation; deliberately narrow tool; global artboard / color / "New Look" randomization come from shared skills, not the designer's prompt. | inferred |
| 00:06:36 | Demo: new-tool flow and the plan | Header "Building a New Tool." "/new tool… marbles… throw them around the canvas" → skill domain router loads physics + interaction → returns a plan ("Marble Toss"); closest prior tool (Tumble) and remix option; suggested inputs (phone tilt, mic/music, image upload); "what are some ideas?" (slingshot). | descript-marker |
| 00:09:30 | Designing the AI response | Came in the first ~two weeks: Claude returned "a plethora of information" — "I can't parse this"; trial through creation; only "60 or 70" oodles today, creative and product-like (orbital cards, worlds in cubes, grid explorer). Ridd: big leap from something you can use to something many people can use. Oodles hides GitHub and publishing; first Marbles result "pretty rough." | inferred |
| 00:12:50 | Pushing marble quality | Header "Iterating to Greatness." Start from the advanced glass Oodle (refraction, spectral, per-object panel); ~200 procedurally generated seamless loops; particles inside took longest — ~version 67; variation script outputs ~100 versions, tagged via the Google Vision API; blue/red review; "make sure that 20 out of the 100 have speckles." | descript-marker |
| 00:18:49 | How much is hand-crafted? | Header "Code vs. Figma Workflow." Rarely by hand; starts in code, massages in Figma, back to code; Metalab has designers with craft far beyond his — his power is making; Oodles component library in Figma was printed back by Claude — "it really starts in Claude first." | descript-marker |
| 00:20:35 | Markdown editor built without Figma | Markdown editor with local-model AI; every screen, primitive and token generated and printed to Figma, never touched there; local instance syncs tokens both ways with Storybook; drift-checker audits code vs Figma. | inferred |
| 00:22:42 | Talent Network ad (skippable; YouTube-only) | Not in Descript. Dive Talent Network read inserted at YT 25:09–25:41. Offset steps from +2:26 to +3:00 here. | inferred |
| 00:22:50 | Why print back to Figma | Still faster to tweak padding or type size (22px) visually and push to code; Figma for overview and visual experimentation; Firefox work as the craft benchmark — "not there yet" straight in code; Figma "is the place to do great design work… just not the place to make product." | inferred |
| 00:24:47 | Design vs making product; in-house vs agency | Header "Design vs. Making Product." Product = feel, function, tech, marketing, feedback; great design "is inherently visual" — iterating through a text box is "just painful." ~50 designers, transformation work, not kit-of-parts systems; AI is just another input. In-house: design systems' value and eng integration never higher; job shifts to customer value and cohesion. | descript-marker |
| 00:27:52 | ROI of Oodles | Header "Oodles at MetaLab." Currently limited to Myles and a few others; best where parameters can be tweaked and seen (Windsurf gradients/waves — once needed an engineer; Mac saw unexpected directions); "I love Oodles because it leads to unexpected things"; flow state. | descript-marker |
| 00:30:51 | Existential craft question | Header "Creative Identity & Origins." Ridd: doesn't craft anymore — systems for massive options, then "pick and refine"; mixed bag / existential crisis; shares the rules-and-systems instinct. | descript-marker |
| 00:32:20 | Myles' history with systems | 2012 Tumblr themes (fridge-magnet words, type from shapes); Conditional Design Workbook ("every Thursday they… designed conditions that made design"); 2016 Ivy Park site with an engineer — procedural video "never the same thing twice"; stopped coding ~2017–18 when React arrived; AI lets him "play at the system level" again. | inferred |
| 00:36:23 | Where to start: curiosity | Header "How Oodles Evolved." "All of it stems from curiosity" — "to see if I could"; dat.GUI + Three.js / shader sites existed before; inflection: make it as easy as possible for others, only think about the idea. | descript-marker |
| 00:38:04 | How Oodles started and grew | Multiplayer real-time canvases today; began as one-off tools (pattern tool with Natalie); pulled out reusable fundamentals; shell auto-updates so old tools get new versions; second tool type from Conway's Game of Life. | inferred |
| 00:40:51 | Commits, lessons and Oodle Studio | 1,296 commits since 31 May; ~200 issues; lessons log ("a published package can lag its own source"); domain skills via PRs. Header "Oodle Studio & Side Projects": app with chat so designers skip the terminal / Homebrew / GitHub invites; one-click publish to internal infrastructure. | inferred |
| 00:43:46 | Not top-down | Designers autonomous; experiments are "side of desk"; Oodles was an evening obsession; "the most powerful thing that any designer can do right now is have side projects." | inferred |
| 00:45:29 | Figma → component with drift control | Markdown-editor sync work became client work: take something from Figma, generate a component, keep drift in check. | inferred |
| 00:46:16 | Metalab side projects | Enri's asset-dump / parallax tool and dog website; Lorenzo's "Bencho" interactive components; Natalie's room-measuring app for her partner's building company; Adam's baby-tracking app (App Store); Marcus's low-fi prototyping tool for client handoff (3–4 variants at Metalab). | inferred |
| 00:49:47 | Agency vs in-house; role | In-house homogenizes on the most viable path; agency still asks "what else can we do?"; design director: client work and team happiness, plus curiosity and sharing — Field Notes on design and AI. | inferred |
| 00:51:07 | Curiosity wrap + close | Header "The Value of Curiosity." Ridd: this episode shows what curiosity looks like ("I wonder if I can do this, therefore I should"). Myles: exciting and fearful; curious, resilient, adaptable; "focus on what you can do today." | descript-marker |
| 00:52:44 | Radio plug (skippable; YouTube-only) | Not in Descript. After the sign-off YouTube adds a Dive Radio plug (YT ~55:44–56:06). | inferred |

## Notable Quotes

- **00:51:56** (YT 00:54:55) — **Myles Palmer:** "I think it has never been a more exciting and more fearful time to be a designer, and I think both things can be true."
- **00:00:08** (YT 00:01:06) — **Myles Palmer:** "I've always been obsessed by using rules and system to make design rather than like crafting things myself."
- **00:18:17** (YT 00:20:44) — **Myles Palmer:** "make sure that 20 out of the 100 have speckles, 'cause I loved the speckles."
- **00:29:48** (YT 00:32:44) — **Myles Palmer:** "I don't love Oodles because of necessarily like what comes out this side. I love Oodles because it leads to unexpected things."
- **00:44:51** (YT 00:47:49) — **Myles Palmer:** "I think the most powerful thing that any designer can do right now is have side projects, um, and have side projects where they're creating something and learning because it feeds back into the work"
- **00:52:10** (YT 00:55:13) — **Myles Palmer:** "if you try as hard as you can to focus on what you can do today and how you can change today, don't, don't worry too much about tomorrow"
