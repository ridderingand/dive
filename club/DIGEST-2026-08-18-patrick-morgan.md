---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Patrick Morgan
host: Ridd
title: "Prototyping Enterprise Products"
youtube_id: 628c4YuxAEM
url: https://www.youtube.com/watch?v=628c4YuxAEM
published: 2026-08-18
duration_min: 54
tags: [ip/dive-club, prototyping, design-tools, ai-agents, design-engineering, creative-process, feedback, product-strategy]
flags: [prototype-feedback]
source: 2026-08-18-patrick-morgan.md
source_type: descript
slug: 2026-08-18-patrick-morgan
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Patrick Morgan (product designer at Sublime Security) walks Ridd through Design Studio — a custom prototyping playground he built so enterprise designers can branch from production-faithful "blueprints," explore divergent lo-fi variants on a shared canvas, annotate with Cursor, collect Vercel Toolbar comments, and hand off to engineers' agents. Core claims: Claude artifacts were fast but disconnected and non-persistent; prototyping in production was too constrained for a big cybersecurity app; the sweet spot is a centralized Vite/React sandbox with mock data shaped like production, intentional low-fidelity overwrites, and agent-first harness design (canvas/frame/section/row, per-contributor folders, methods as on-demand skills). Why it matters: a rare end-to-end blueprint for an agent-native internal design environment — canvas feedback, fidelity hacking, production-port agent loops, and brand tools that graduate from prototypes — for teams that cannot (or should not) prototype in prod.

Speaker labels in the Descript source are normalized here: **Speaker 3 → Patrick Morgan (guest)**; unlabeled **Speaker → Ridd (host)**; **Speaker 2 → brief affirmations** (treated as Ridd / secondary mic noise). Timecodes and section markers are trusted from Descript (no ±30s caveat).

## Takeaways (Granola)

- Patrick renders prototypes on a canvas so he can spatially compare and give feedback with Cursor annotations
- Patrick has AI prototype in low-fidelity

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Why the prototyping playground | Claude artifacts were useful but disconnected from the product, non-persistent, and not shared across the team. Prototyping in production hit too many eng/security constraints at Sublime. Sweet spot: centralize prototypes so the team compounds, while keeping open-ended flexibility. | inferred |
| 00:01 | Blueprints + live demo start | Sublime is email security; main surface is a malicious-email list. Blueprints = production-faithful reference screens (ported snapshots, not full frontend rebuilds) that designers branch from. New prototype created via Cursor from the messages list / needs-remediation blueprint. | descript-marker |
| 00:03 | Canvas + design-principles critique | Asks agent to set up a canvas and run a design critique on filters through team-written design principles living in the repo. Agent returns principle-by-principle scorecard + how-might-we prompts. Principles are lightweight/high-level so the agent can use them as a design tool. | descript-marker |
| 00:05 | Divergent lo-fi variants on canvas | Prompts 3–5 structural bets (settles on five) addressing how-might-we's, low fidelity, with table results for context, plus an exploration section on the canvas to compare. Practice has shifted from ~95% Figma in December to almost never in Figma. | takeaway |
| 00:07 | Quality/quantity impact for enterprise systems | Quality gain is systems thinking: static Figma detached from code made multi-state enterprise UX hard to grok; code prototypes unlock exploration at scale. Early versions were sketchy lo-fi that still helped the team cover states. | inferred |
| 00:09 | Interactive renders + Cursor annotations | Not screenshots and not production data — local mock data modeled on the production data shape. Interactive code renders matter so Patrick can annotate variants directly in Cursor (same pattern works in Claude Code / Codex) without jumping into each view. Spatially compares five structural bets on the canvas and iterates via annotation feedback. | takeaway |
| 00:11 | Growing the divergent-exploration muscle | In real work: dial critique focus first; have the agent describe approaches in text before any UI; vet directionally, then generate. Lo-fi still sits on production-fidelity UI under the hood — handwritten font + grayscale overwrite signals process stage. | takeaway |
| 00:13 | Low-fidelity as intentional first-class citizen | Started lo-fi because he lacked resources to match production fidelity and wanted to avoid the communication gap of "almost prod" that misleads reviewers. Early Claude artifact explorations (config variants) were screenshot→Figma for comments — a slow loop; centralizing even without canvas helped. | takeaway |
| 00:15 | Deploy + collaboration / feedback gap | Vite aggregates React views into a static site; Vercel deploy (no backend/user system) cleared security hurdles for a security company. Sharing a URL got interaction but not Figma-like comments until Vercel Toolbar commenting on deployments. Canvas + comments close the collaboration loop AI build speed had left behind. | descript-marker |
| 00:18 | Point-and-talk / rendering-surface UI | UI has no user actions — intentionally a rendering surface for agentic coding harnesses; primary interaction is talking to the agent. Annotation/point-and-talk unlocked iteration. Closes loop by lifting a chosen lo-fi variant into hi-fi on a new canvas section. | inferred |
| 00:20 | Harness design: canvas objects + agent docs | Dev environment for non-developers: assume the agent does everything. Defined canvas / frame / section / row (Figma-inspired) as opinionated data structures + JSON that points at React views/docs. Platform/architect work so asking for a canvas is natural for humans. | descript-marker |
| 00:23 | Guardrails + per-contributor folders | Guardrails (mostly DevOps) teach the agent what a prototype is, who the person is, and approved scope. Each contributor gets a folder: break your own stuff freely; higher review when impacting others. Adoption required stupid-simple defaults after cumbersome early versions. | descript-marker |
| 00:25 | Agent-native design handoff | Engineers pull the internal repo and point their agent at it. Handoff = summarize what the engineer/agent should build, context, and what to ignore — redesigning for the engineer's agent, not only the engineer. Sibling production repo lets the agent cross-check "does this match production?" | descript-marker |
| 00:27 | Duplicate frontend / prod vs prototype languages | Fear of duplication fades: agents are excellent translators between production constraints and prototype freedom. Production conventions that prevent breakage don't serve design; prototype env should optimize for prototyping trade-offs. | inferred |
| 00:29 | Agent loop porting production components | Wrote an agent loop to analyze each production component and reconstruct it for prototyping — rip out form/prod-only logic. First attempt shimming production without enough direction produced unusable slop; restart with rebuild-from-scratch guidance. | descript-marker |
| 00:31 | Journey: start small (Jan 27 genesis) | First commit: scaffold to co-locate a couple HTML lo-fi prototypes with one other designer. Then: Figma plugin to screenshot→canvas for comments; canonical prototype-creation script + agent rule; agent rule that updates its own rules when docs go stale; design-systems browser so brand + product could share the env. One tension at a time. | descript-marker |
| 00:35 | Next: closed loops, sketch-to-code, methods | Stitching doc → lo-fi explore → hi-fi is new. Wants sketch-to-code (old design-technologist workflow). Personas/context pages as foundational design context. "Methods" (critique, exploration, handoff) = on-demand skills; Agents.md routes product vs brand vs environment work and always loads contributor scope. | descript-marker |
| 00:39 | Docs as the shadow app | Markdown docs under the hood orchestrate the agent; they also teach humans the language (prototype, blueprint) to ask correctly. Doc primitives = standardizing layer between human intent and agent action. | inferred |
| 00:41 | Advice for teams starting out | Don't jump straight to hi-fi; months of sketch-looking prototypes still added huge value. Start by centralizing team prototypes. Environment should be 100% custom to your team's tensions — treat it as a product design problem. | descript-marker |
| 00:43 | Positioning: designer who builds | Multidisciplinary path (frontend → product design → cybersecurity). Headline: "Patrick is a designer who builds." Not repositioning as engineer or design engineer — code is the medium whether writing it, mocking in Figma, or the messy middle with agents. | descript-marker |
| 00:45 | Portfolio + brand tools graduated from prototypes | Personal site (Claude Code then Codex) birthed a generative feature-image tool for articles — tool-building as the path to the end state. Internally, brand/creative uses Design Studio "Tools" (prototypes that graduated): self-serve OG/image generators built by brand designers; product design tools could follow the same path. Distance from production is a feature for divergent/security-safe exploration. | descript-marker |

## Notable Quotes

- **00:00** — **Patrick Morgan:** "I was doing a lot of prototyping, primarily just like making artifacts with Claude, and those are great. They were useful, but they had some, you know, fundamental problems, most of which being they're, you know, fast, but they're disconnected from anything that was kind of in our actual product."
- **00:00** — **Patrick Morgan:** "They didn't persist anywhere. They weren't c- like, I couldn't build on them over time, and the same was to be said for, you know, the other designers on my team."
- **00:01** — **Patrick Morgan:** "I tried to aim for something as a sweet spot in the middle, which is like, could I centralize these prototypes so that we could build on them collectively as a team and kind of get that compounding benefit over time"
- **00:07** — **Patrick Morgan:** "I was very much still just like in 95% of the time in December, and now I'm almost never in Figma."
- **00:08** — **Patrick Morgan:** "doing that kind of work in like a static environment detached from the code was always way harder than it probably needed to be, because you're think- trying to think through like a ton of different combinations of states that are just hard to grok until you actually get something in some form of code"
- **00:09** — **Patrick Morgan:** "These are not screenshots, and that's, uh, actually a very important part of this workflow, uh, is that all of these are interactive."
- **00:10** — **Patrick Morgan:** "I'm using the annotation tool, in this case in Cursor, but you could do the same in Claude Code or, or Codex if you wanted. And you can just annotate directly on these because they are rendering the actual code itself."
- **00:12** — **Patrick Morgan:** "I would just have it describe these potential approaches to me in text, and I would review it that way because it would be quicker for me to grok like, \" That seems directionally right, that seems directionally wrong.\""
- **00:13** — **Patrick Morgan:** "I didn't wanna mislead people by creating something that was, like, almost production fidelity, but not actually production fidelity, and then I end up with this big communication gap"
- **00:17** — **Patrick Morgan:** "even though I could share a link to one of these prototypes and get someone to look at it and, like, interact with it using, like, just via the URL, I couldn't collect feedback on it in the way that people were most comfortable with, which is like Figma comments, right?"
- **00:18** — **Ridd:** "it feels like we have been given superpowers by AI and our ability to build things, but then it feels like all of the collaboration infrastructure has just went back to the Stone Age."
- **00:20** — **Patrick Morgan:** "the UI that we're looking at is really just like a rendering surface. There are no actions that the user takes through this UI. It's designed intentionally to be used in the context of these agentic coding harnesses"
- **00:21** — **Patrick Morgan:** "it is a dev environment, but it's built for non-developers. So I kind of have to assume from the start that anything, any feature that I'm building, I cannot assume that the human user will be doing any of it. It's always the agent doing stuff on their behalf."
- **00:25** — **Patrick Morgan:** "my rule is you can, you can break your own stuff, but you can't break other people's stuff."
- **00:26** — **Patrick Morgan:** "I'm no longer really handing off designs just to an engineer. I am pretty much preparing the design to be reinterpreted by the engineer's agent, and then the engineer will steer it from there"
- **00:28** — **Patrick Morgan:** "It doesn't care. They're incredibly good translators. So if you just think of like production as one language of code that has its own set of constraints and semantics"
- **00:32** — **Patrick Morgan:** "basically all I did was I set up the initial scaffold just to be able to pull in those couple low fidelity prototypes, HTML prototypes that I mentioned. And that was it. It was literally me, one other product designer. I was like, \"Can we get our work to live in one place together?\""
- **00:39** — **Ridd:** "the value of having doc primitives interwoven inside of our creative tools, because it is almost the standardizing layer between human intent and then what the agent needs to be able to, like, see and act on."
- **00:41** — **Patrick Morgan:** "when people hear prototyping, they jump immediately to high-fidelity prototyping, and that's definitely not the way that I think about it or approach it."
- **00:42** — **Patrick Morgan:** "for months, the prototypes were low fidelity only, like, only sketch looking, and it still added a ton of value."
- **00:44** — **Patrick Morgan:** "my headline is \" Patrick is a designer who builds.\""
- **00:44** — **Patrick Morgan:** "I just think that code is the medium that I've been designing for all these years, regardless of how I've been doing it"
- **00:49** — **Patrick Morgan:** "because it is its own dedicated space, you can really allow it to, to serve your unique workflow in the way that, w- in the way that you need it to."
