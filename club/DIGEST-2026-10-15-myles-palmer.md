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
source_type: youtube-captions
slug: 2026-10-15-myles-palmer
generated: 2026-10-16
generator: dive-club-ideas
schema: 1
---

## Summary

Myles Palmer (design director at Metalab) gives Ridd a behind-the-scenes demo of Oodles, Metalab's internal tool for generating interactive, parametric design tools from a prompt. Arc: intro and the idea of "rules and systems" as a design method → live demos (a "new tool" flow that returns a plan, a pixelated type tool, a marbles tool) → how the AI's plan response was designed → pushing quality (glass marble v67, procedurally generated variations tagged with Google Vision) → how much is still crafted by hand (code-first, Figma as the place for visual design, token sync and a drift checker) → in-house vs agency design → the ROI of Oodles → his history with systems (Tumblr themes, conditional design, the 2016 Ivy Park site) → how Oodles started and grew (about 1,300 commits since 31 May, domain skills, a lessons log, Oodles Studio with publish) → side projects across Metalab → role and curiosity.

Core claims: Oodles is a system that builds tools — roughly 25–30 domain skills, a router, an engine and a control panel — and it learns by harvesting lessons from tools built; the AI's response is a product surface worth designing (plan, controls, closest reference, remix, suggested additions); the gap between "something you can use" and "something many people on different projects can use" is all design decisions; Figma is still the place to do great visual design but not to make product ("two different things"), and Figma↔code token sync plus a drift checker is a real workflow that became a client offering; the most powerful thing a designer can do right now is have side projects. Why it matters: a concrete agency-side example of design-in-code and tool-making as a design craft.

Speaker labels are not in YouTube captions: Myles Palmer = guest, Ridd = host. Name/ASR corrections (disclosed, not silent): "Miles Palmer" (captions, intro and several mid-episode spots) → Myles Palmer (per Granola and the YouTube title); "Met Lab" → Metalab; "oodles" is as spoken (Oodles/oodles; singular "an oodle"); "Sarah" (the person who assigns exploration at Metalab, ~00:46:47) surname not given; "Luna Mara, Jonathan Puki, Ral Lutters" (~00:36:49, designers behind "conditional design") are ASR renderings — the Conditional Design group is not named in the captions; left unresolved; "DAT GUI" is dat.GUI. Granola vs captions: Granola takeaways mention an Ivy Park site from 2016, 1,296 commits since 31 May and ~60–70 tools — the captions confirm the Ivy Park site (00:37:21), "31st of May" (00:44:10) and 1,29x commits (00:43:37) but I did not search the captions for the exact "60–70 tools" figure. Granola show notes also mention a Vast (space company) engagement and award nominations; I found no mention of Vast or "Artemis" in the published captions (likely cut or recording-only), so they are not asserted here. Several client projects are shown on screen (e.g. Windsurf, Mozilla Firefox) — the captions only carry the audio.

**Source caveat:** YouTube captions only — no Descript export for this episode in this run (Descript needs a signed-in browser). Re-digest from Descript when exported.

**Inflight note:** Evidence for `coded-prototypes` / `prototype-feedback` / `inflight-relevant`: Oodles generates interactive tools from a sentence so "designers have things to react to" (00:11:55); Metalab designers "always dialing up prototypes at low fidelity… annotating them and handing them off to clients" (00:52:08); he designs in code and prints components back to Figma (00:22:44–00:25:52); published tools auto-update across projects (00:43:06) and Oodles Studio adds publish and multiplayer (00:41:01, 00:45:14). The tool is Metalab-internal, not a review/preview-link product, but it is directly relevant to code-as-design-material and prototype sharing.

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
| 00:00 | Cold open + intro | "More exciting and more fearful time to be a designer"; intro of Myles (design director at Metalab) and the internal tool Oodles. | inferred |
| 01:01 | What Oodles is | Rules-and-systems background; a tool to make "anything you can imagine"; control types, presets, randomization; Claude tends to fall into the same trap when asked to make tools, so Oodles adds structure. | inferred |
| 03:36 | How it works: skills, router, engine | UI changes per tool; ~25–30 skills (domain knowledge such as "this 3D step crashes, avoid it"); self-learning: "of all the tools built in the last month, what did we learn?" | inferred |
| 05:09 | Ads (skippable) | Paper and Framer sponsor reads. | inferred |
| 06:44 | Demo: type tool | Takes an open-source typeface and applies threshold/pixelation; a narrow, prescribed tool vs a broad one; global artboard/color capabilities come from shared skills. | inferred |
| 08:49 | Demo: new-tool flow and the plan | It looks up skills, then returns a plan; asks about closest prior tool, remix; suggests mic/music/image-upload inputs the skill knows it can support. | inferred |
| 11:55 | Designing the AI response | Iterated the plan output after Claude returned too much information ("I can't parse this"); done in the first ~2 weeks through trial; a tool others can use is a design leap beyond one you can use. | inferred |
| 15:03 | Pushing marble quality | First marbles result was rough; glass marble reached v67; particles inside the shape took longest; procedural scripts generate ~100–200 loop variations, tagged via Google Vision; blue/red review loop; "20 out of the hundred have speckles." | inferred |
| 21:14 | How much is hand-crafted? | Old-fashioned by hand vs AI; Metalab designers with deep craft; Oodles component library lives in Figma, but often "starts in Claude first." | inferred |
| 22:44 | Markdown editor built without Figma | All components, atoms and primitives generated and printed back to Figma; local instance syncs design tokens both ways; drift-checker plugin audits code vs Figma. | inferred |
| 25:18 | Talent Network ad (skippable) | Dive Talent Network sponsor read. | inferred |
| 25:52 | Why print back to Figma | Source of truth at component level when designs originate in code; faster to tweak padding or type size visually then push to code. | inferred |
| 27:24 | Figma for design, not product | Firefox work as benchmark of craft; "great design is inherently visual"; text-box-only iteration is "just painful"; making product and designing are different things. | inferred |
| 28:57 | In-house vs agency | ~50 designers at Metalab on many projects at once; design-system value and design/engineering integration have never been higher; in-house skills shift to defining value and cohesion. | inferred |
| 31:04 | ROI of Oodles | Best where parameters can be tweaked and seen (e.g. the Windsurf project); the value is unexpected outcomes and flow state. | inferred |
| 33:41 | Existential craft question | AI as "mixed bag"; a systems-and-options workflow ("pick and refine"); Ridd shares the same rules-and-systems instinct. | inferred |
| 35:16 | Myles' history with systems | Taught himself to code; Tumblr themes (2012); conditional design; the 2016 Ivy Park site (procedural video, never the same twice); stopped coding ~2017–18; AI lets him "play at the system level." | inferred |
| 39:28 | Where to start: curiosity | Intimidating end state; start with dat.GUI/Three.js shaders; "it all stems from curiosity." | inferred |
| 41:01 | How Oodles started and grew | Began as tools made outside the tool; multiplayer today; tools auto-update when new versions release; fundamentals pulled out of repeated needs. | inferred |
| 43:37 | Commits, lessons and Oodles Studio | ~1,29x commits since 31 May ("a lesson… a published package can lag its source"); Oodles Studio lets designers use it without Claude Code or a terminal and hit publish. | inferred |
| 46:47 | Not top-down | Designers are autonomous at Metalab; side projects feed work; Oodles started on evenings. | inferred |
| 48:25 | Figma → component with drift control | A client offering that came out of the sync work. | inferred |
| 48:56 | Metalab side projects | Henry's parallax asset-dump tool and a dog website; Natalie's measuring app; another designer's baby-tracking app; a low-fidelity prototyping tool for client handoff. | inferred |
| 52:39 | Agency vs in-house; role | Agency thrives on new problems; design director: client work, team happiness, field notes on design and AI. | inferred |
| 54:13 | Curiosity wrap + close | Curiosity as the trait teams look for; "focus on what you can do today"; Radio plug (55:45). | inferred |

## Notable Quotes

- **00:00:00** — **Myles Palmer (inferred):** "I think it has never been a more exciting and more fearful time to be a designer. And I think both things can be true."
- **00:01:01** — **Myles Palmer (inferred):** "I've always been obsessed by using rules and system to make design rather than…" *(cut at block boundary; Granola carries the full sentence)*
- **00:20:44** — **Myles Palmer (inferred):** "that 20 out of the hundred have speckles cuz I love the speckles."
- **00:32:38** — **Myles Palmer (inferred):** "I don't love oodles because of necessarily like what comes out" *(cut at block boundary)*
- **00:47:52** — **Myles Palmer (inferred):** "designer can do right now is have side projects um and have side projects where they're creating something and learning because it feeds back into the work." *(opening words cut at block boundary)*
- **00:55:14** — **Myles Palmer (inferred):** "hard as you can to focus on what you can do today and how you can change today, don't don't worry too much about tomorrow" *(opening words cut at block boundary)*
