---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Andy Madrick
host: Ridd
title: "Why AI changed design handoff forever"
youtube_id: IfPK0LwbX_0
url: https://www.youtube.com/watch?v=IfPK0LwbX_0
published: 2026-05-26
duration_min: 53
tags: [ip/dive-club, prototyping, design-tools, design-engineering, ai-creative-tools, collaboration, feedback, craft]
flags: [prototype-feedback]
source: 2026-05-26-andy-madrick.md
source_type: descript
slug: 2026-05-26-andy-madrick
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Andy Madrick (designer at Notion; previously Tome/Lightfield) walks Ridd through how AI-era tools changed design handoff — from Figma-first pixel craft into code prototypes that teammates can edit, screenshot, and ship with. Arc: Make with Notion conference modal (Ivan + Alan Kay stage energy; parallel Figma iterations → prototype playground URLs → content/PMs edit titles/assets in-product rails and send screenshots back) → CEO Ivan “make it feel like a video game” → keyframe screenshots fed to Composer for motion → playground directory one-shot into production → three modal variants A/B’d (safe version won; button size hypothesis) → big reframes start in crude code Notion clones; small polish stays in Figma → engineers take features to ~80–90% (“Temu version”); Andy owns last ~5–20% (animation, visual polish, itty-bitty PRs) → agent-as-translation-layer: designer-looking code + engineer-performant Temu → keep eng functionality, apply designer styling → Cursor/Composer harness + plan mode vs Conductor → last-mile prompting: small manageable PRs, let LLM land then review diffs → surprise room with Claude (jelly bean factory Artifacts) then restrain → no shortcut to taste; recreate interactions (Linear sidebar) to learn easing/breakpoints; default undecorated then add flourish that helps users → Craft at Speed course (visual eye + ship an artifact) → Tome collapse to 12 people / only PD: three-hour daily crit with Henry Liriani + Alex Cannon forced first-principles articulation (“graphic design theater”) → Notion talent-dense row (Cole Bemis, Brian Lovin, Cathy collab habits, Ken Chen one-fix clarity; Ivan taste+eng, Simon on tools).

Core claims: designers must build opinionated collaboration systems (editable prototypes on rails) because Figma-link feedback broke for content teams once work lives in code. Handoff is no longer mocks → eng; it’s parallel polish on the last mile plus agents that merge designer look with engineer substance. LLMs crush execution if you’re granular (screenshots > thousand words); taste, restraint, and recreating interactions are still the practice. Titles are breaking down — titleless designers own outcomes in code.

Why it matters: concrete Notion workflow for prototype feedback loops with non-designers, last-mile ownership numbers (5–20%), and a clear taste curriculum when AI default output is a jelly bean factory.

Speaker labels in the Descript source are already **Andy** (guest) and **Ridd** (host) — no Speaker N remapping. Timecodes and section markers are trusted from Descript (no ±30s caveat).

## Takeaways (Granola)

- creating a system for content people to tweak his prototype and send screenshots back to him
- How engineering collaboration changes
- Owning the last mile (5-20% of frontend work)
- Recreating interactions to learn

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Designing the Make with Notion modal | Make with Notion annual announce modal = high-eyeball rite of passage; Andy started ~1 month into Notion, worked daily with CEO Ivan. Parallel Figma iterations (still fast for pixel craft / control freak); migrating explorations toward code. Instead of Figma-link sprawl → prototype playground (lightweight Notion codebase) with shareable URLs. Motif locked (Nosy faces + asset); then made playground editable so teammates change titles, asset count, section headers — take screenshots back → co-design on curated rails (iPhone home-screen metaphor). Ridd: content teams lost in-context text edit when work moved to code; this restores it. Built with Composer linking sidebar Chrome → live text inputs. Ivan: “make it feel like a video game” / faces off-modal like a prize. Minimal Figma animation sketches (never click-through prototypes); keyframe screenshots → LLM (computer vision) for motion — “picture worth a thousand words.” Playground directory → “make this work in production” one-shot; eng Rob + head of product Max both “so sick.” | takeaway |
| 00:08 | Building new collaboration workflows | Orgs must invent their own decision tools: prototypes with enough freedom + designer-set rails. Hedged with three modal variants (3-head / 4-head animated / “safe” Nosy+video) behind stat-sig gates; Ivan vs Max gift-bet on winners; safe won — Andy’s hypothesis = button size, not motif. Big foundational reframes → crude LLM Notion clone people can click; small polish/modals → still Figma (direct manipulation, long on Figma). Collab is person-dependent: if eng won’t touch frontend, Andy ships PRs for high-quality review; if eng flies frontend, crude prototype/Figma + iterate in code with screenshot redlines. Source of truth often floating — screenshot of polished code, not a pristine Figma file; many Notion Figmas are prod screenshots + a frame on top. Ridd: canvas FOMO gone; Paper Chrome extension for prod components; SOT = production. Ambiguity-tolerance as the hiring skill; obsess over what users see. | takeaway |
| 00:16 | Owning frontend vs. owning mocks | Title is “designer” not design engineer. Majority projects: eng wires to ~80% (sometimes 100% if bandwidth) — performant but “Temu version.” Parallelize: Andy lands itty-bitty visual-polish PRs for last mile. LLMs weak at last mile of design — still designer superpower; Notion craft/taste culture = “own the outcome,” no excuse not to ship the change. Most of his time = last 5–20% frontend (animation, visual design, LLM-assisted when descriptive) — not greenfield feature wiring. Large LLM scaffolds aren’t pure throwaway: different medium for putting something on the canvas; still want thoughtful eng to rebuild production, not one-shot Claude for the daily app. | takeaway |
| 00:19 | How to sequence work with engineers | Ridd’s dual modes: (1) ship feature — own last ~15% frontend UX feel before door; (2) explore new visual primitive — 80% prod-wired prototype + mock data / avoid schema+mutators → flip sequence: designer scaffold, eng owns data layer. No universal answer — message the eng “how do you want to handle this?” Planning-mode shift: eng rejecting PRs on fundamental premise → send MD plan for review before code. Andy: agents as translation layers — designer build that “sucks but looks sick” + eng Temu-performant feature → ask agent keep eng functionality, apply designer styling (closer than intuition; already has frontend code). Make with Notion lived in Tailwind/ShadCN playground; Notion prod does neither — Opus still one-shot the port. Composer/Cursor harness confidence for frontend vs hacking Claude Code; Brian Lovin: don’t get tribal, right tool right moment; Andy churned Conductor-lifer → Cursor 3.0/Glass (Rio) — plan mode + mermaid, worktrees, multi-agent, cloud VM. | takeaway |
| 00:27 | Owning the last mile | Last mile can be ~15–20%. Spectrum: granular Figma diagrams (modal animation) ↔ intentional under-specification to see what AI invents. Conductor freaked him out (less 24/7 code staring); for last 15–20% let LLM build to target, don’t fight manually mid-run, then read diffs hard. Designer PRs must be small/manageable if you’re not eng-trained: rule of thumb — don’t ask reviewers to spend more time reading than you spent making; finesse tiny PRs (~100 lines guidance; avoid unreviewed 500-line “I just had fun”). Initial generation: 1000% open to surprise — Claude as collab partner since Tome (evaluate Figma, alternate ideas when teammates busy). Prefer design-system rebuilds over legacy one-offs; Claude Artifacts = “jelly bean factory” (gradients/tags overload) then trim to shippable. | takeaway |
| 00:34 | Pushing past what AI gives you out of the box | No shortcut to taste / high-craft high-velocity practice; AI shortcuts creation but language of visual design still comes from reps. Job with limitless UI = restrained version where form follows function; avoid decoration for decoration’s sake. Boring path: lots of visual design, talk to people you respect about eye/taste (movies, art books). Architecture-school portfolios all looked identical → copied art-book full-bleed restraint instead. Still worth recreating interactions (not static pixel copies): Linear sidebar minimize/reflow — learn easing curves, breakpoints; pass common knowledge through ultra-taste filter. Ridd: also study where best products use *instant* transitions — risk of overcooking every P3 in isolation. Portfolios: stand out by showing best work speaking for itself; default undecorated same-type no-animation, then ask where a flourish helps the user. | takeaway |
| 00:40 | Andy's Craft at Speed course | Craft at Speed: no shortcuts to strong design, but high-leverage moves can take visual from ~40% → ~80% (type, composition; objective-ish principles). Two-pronged: develop visual understanding + put it into practice by building a real artifact (portfolio site or production feature) — not a Claude Code tutorial. Leaves with something shippable; class critique / jazz-band sharing; thick skin for “this isn’t good yet.” Crash course on being a titleless designer at a Notion-like company. | descript-marker |
| 00:42 | How Andy grew at Tome | Tome = highest-taste slide AI tool → collapsed ~80 → ~12, pivoted to AI CRM; founders Henry + Keith still high-taste. Only product designer alongside creative director Alex Cannon + cofounder Henry Liriani (ex Facebook Messenger) — 3 hrs/day in a room. Forced articulation of decisions; “it looked cool” rejected as graphic design theater; dig into first principles. Meta-awareness: uncontain cards, use space not lines, midwit chart — great designers do less. Intense crit: celebrate days vs midnight reworks; vulnerability of feedback = best level-up for any creative. | descript-marker |
| 00:46 | The impact of the Notion design culture | “If you’re the smartest in the room, wrong room” — every Notion room passes. Row: design eng Cole Bemis, Brian Lovin two desks away, talent-dense. Habits: Cathy’s constant bring-people-in collab; Ken Chen one-fix after six months of overthinking. Top-down: Ivan = most tasteful timeless designer *and* extremely good engineer; Simon on bleeding-edge tools. First interview reject → second time “make sure they don’t regret.” Broad ambiguous work across many customer uses = exhausting and magnetic. Close: grateful note-sharing era; Andy will keep stealing Ridd’s ideas. | descript-marker |

## Notable Quotes

- **00:01** — **Andy:** "instead of just sharing like Figma links with a bunch of people, I create this prototype in our prototype playground"
- **00:02** — **Andy:** "instead of someone giving me feedback on a, on a Figma file, I'm able to, like, allow a certain level of customizability here, and then different folks at Notion are able to go in, click around, you know, change the titles... and then they can take screenshots and send it back to me."
- **00:03** — **Andy:** "we're all, like, co-designing together. But it's kind of like, uh, you know, the home screen on, on your iPhone"
- **00:06** — **Andy:** "a picture is literally worth a thousand words"
- **00:07** — **Andy:** "all I did was I took the directory that this was in, in the playground, fed it to an LLM and said, \"Make this work in production,\" and it one-shotted it and did it like perfectly."
- **00:08** — **Andy:** "we have to build our own workflows for each other in these organizations. giving people the tools to make really strong decisions is the strongest thing for us"
- **00:12** — **Andy:** "the bigger the feature, the more likely I am to start in code."
- **00:13** — **Andy:** "these titles are kind of breaking down a lot."
- **00:17** — **Andy:** "we call it like the Temu version of the product"
- **00:17** — **Andy:** "These LLMs are not very good at the last mile of design, and that's still, like, our superpower."
- **00:18** — **Andy:** "most of the time, for me, I'm picking up the last 20, or let's say five to 20% of, the front end work."
- **00:23** — **Andy:** "these, like, agents can be really good at acting as translation layers."
- **00:24** — **Andy:** "Can you keep all the functionality of the engineer's version and give it all the styling that I have here?"
- **00:29** — **Andy:** "if you are expecting someone to put more time into reading something like a PR than you put into making it, there's a mismatch"
- **00:34** — **Andy:** "it'll create something with like a million gradients and like a million tags and it looks like, a jelly bean factory"
- **00:35** — **Andy:** "is no shortcut to having taste or developing like a high craft, high velocity practice."
- **00:35** — **Andy:** "our job now with limitless UI out there is how do we take it and make a restrained version of this where form follows function and we're avoiding decoration for decoration's sake."
- **00:36** — **Andy:** "I still tell people that's a worthwhile exercise" (recreating interactions to learn)
- **00:39** — **Andy:** "the default is like, what does this thing look like with no decoration, with the same size typeface, with no animations?"
- **00:43** — **Andy:** "Henry's word was, uh, it's, it's like graphic design theater. Like you can't do something for the sake of doing it."
- **00:45** — **Andy:** "the midwidth chart of like the really great designers just do less"
- **00:46** — **Andy:** "if you're the smartest person in the room, you're in the wrong room."
