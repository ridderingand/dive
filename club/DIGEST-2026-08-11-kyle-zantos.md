---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Kyle Zantos
host: Ridd
title: "The latest AI design workflows"
youtube_id: j_ytmrYU_zc
url: https://www.youtube.com/watch?v=j_ytmrYU_zc
published: 2026-08-11
duration_min: 51
tags: [ip/dive-club, design-tools, ai-creative-tools, ai-agents, prototyping, creative-process, design-engineering, vibe-coding]
flags: []
source: 2026-08-11-kyle-zantos.md
source_type: descript
slug: 2026-08-11-kyle-zantos
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Kyle Zantos (designer-builder; contracts with Output and Primary Studio) and Ridd trade the latest AI design workflows: HTML conversation artifacts that audit with skills and present approve/deny/discuss UI, cheap HTML for exploratory variants and "feel" motion, node-based Terminal Graph pipelines that run autonomous variation→review→refine loops, Ridd's Supercut MCP for video-as-handoff to Claude, when *not* to invest in personal tools (HTML skills ate the custom widget), Fable as a brainstorming partner that insists on better UX ideas, and how both have dropped plan-mode / custom tooling in favor of cheap visual planning before big builds. Core claims: standalone HTML docs swallowed a huge chunk of prototyping and tool-building; agents need touchable surfaces (frame IDs, video frames, MCP/CLI); being early to AI is no longer a differentiator — owning design *and* frontend implementation is. Why it matters: a dense, practice-level catalog of 2026 AI design workflows from two people who ship them weekly — skills, MCPs, eval loops, and the career shape of a design engineer without the craft-only baggage.

Speaker labels in the Descript source are normalized here: **Speaker 3 → Kyle Zantos (guest)**; **Speaker 4 → Ridd (host)**; **Speaker 2 → brief affirmations** (secondary mic / short yeses). Timecodes and section markers are trusted from Descript (no ±30s caveat).

## Takeaways (Granola)

No Takeaways were recorded in the Editing Granola note (Description / Show Notes are editorial hints only — not pasted as takeaways). Gold below leans on Descript markers and inferred claim splits.

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | HTML audit docs with skills | Kyle chains Emil Kowalski + Jakub Krehel skills; Fable orchestrates Opus sub-agents to audit (e.g. portfolio), dedupe, and present an HTML doc with approve / deny / discuss + copy-back into the Claude session. Inspired by Tariq (Anthropic) preferring HTML artifacts over straight markdown. | descript-marker |
| 00:02 | Motion before/after in HTML | For motion work, same pattern shows current vs proposed animation so Kyle can judge visually while building descriptive vocabulary — text bullets alone are weak if you're still learning motion language. Closest possible representation of the real thing before saying "implement that." | inferred |
| 00:04 | Autonomous approve/deny run | One prompt → leave for an hour → return to a full approve/deny/discuss list; paste-back is smaller than the raw audit because the doc already holds context. DialKit-style sliders sometimes appear unprompted for fine-tuning. | inferred |
| 00:07 | Exploratory HTML + dictate feedback | Ridd's baseline: ask Claude for four layout variants (e.g. code diff hierarchy), dictate free-form feedback while clicking, iterate until good. Segmented approve/deny vs free-form talk-over are different modes for different stages. | descript-marker |
| 00:09 | Feeling motion in HTML | Commit-chart "fidget spinner" — explore effects (hate ripple, zoom disperse), ship in ~5 minutes after three HTML rounds. Static tools fail when you must *feel* interaction; HTML is cheap/fast enough to dial feel then "build that." | inferred |
| 00:10 | HTML as API education playground | GitHub API explorer: scrollable categorized surface of what you can pull (checks, mergeability, language breakdown) — replaces scheduling a developer brain-dump. Kyle's parallel: repackage long articles into slide-like HTML for preferred digestion. | inferred |
| 00:12 | UX writing environment in HTML | Inspired by Rafael Schad (Cron→Notion): one-shot every toast/dialog/error into an editable HTML surface for copy consistency; could be a content-team UX writing ecosystem that returns a prompt. Standalone HTML was a blind spot for designer-turned-builder Kyle. | descript-marker |
| 00:14 | Terminal Graph variation pipeline | Beta from Internet Development Studio (Jimmy Lee / Kaden Williams): graph of terminals, notes, browsers, editors. Kyle's WIP pipeline for NFL Pick 'Em redesign: five style-different variations → skill audits → review doc → agent revises → V2/V3 with injectable hint text between stages. Goal: hit "solid" before human taste assessment, not intern-level fix lists. | descript-marker |
| 00:19 | Visual eval loop + agent builds the graph | Ridd maps it to Codex image eval loops he wants for UI. Setup: Kyle voice-dumps outcome + Terminal Graph docs with MCP/CLI already plugged in — agent creates/arranges nodes; no manual node-wiring tax. Browser nodes for V1/V2/V3 expose where reviews are too weak. | inferred |
| 00:24 | Supercut MCP as video feedback | Ridd: Supercut ≈ better Loom; MCP mirrors transcript to frames so Claude parses rambling video feedback (6–7 min, ~15 notes). Accuracy ~80%+; wrote it off, now uses it constantly. One-shot InFlight inline-image editor from a ~1 min cropped Supercut of Conductor's pattern. | descript-marker |
| 00:27 | Paper frame + Supercut handoff | Old-fashioned canvas states + annotations + selected Paper frame + supercut "engineer handoff" talk-through → "Build this." Theme: give agents touchable surfaces (frame ID, Paper MCP, video) so talk and code refer to the same thing. | inferred |
| 00:29 | When to invest in a personal tool | Line: quick HTML/skill vs real product. Ridd built a beautiful DialKit-like local approve/discard/tweak widget — then HTML + skills made it obsolete. Graveyards of such tools; don't invest if big platforms will absorb it. | descript-marker |
| 00:32 | Self-improving product via session video | Decimals talent platform: 40-min silent-ish Supercut of Ridd reviewing/sharing candidates → Fable/MCP pulls wishes into tickets + UX audit. Sileo's "self-improving products" rant aged well. Kyle parallel: 25-min VP design brain-dump → Jira-formatted tickets on first run. | inferred |
| 00:35 | Brainstorming UX with Fable | Fable cuts through assumed CLI-install constraint for InFlight onboarding: auto-create a PR that installs InFlight and use the PR as the onboarding billboard for engineers. Insists across turns; visual explainer in Paper → team freaks out. | descript-marker |
| 00:38 | Workflows that disappeared | Kyle: less custom tooling (HTML ate it); less granular flow manipulation; still uses compound engineering + slash goal carefully. Ridd: almost no plan mode since Soul 5.6 / Opus 5 era. Split stack: Anthropic for creative/design brainstorming; Sol/Codex for hard technical one-shots — why Conductor's dual-model groove is sticky. | descript-marker |
| 00:40 | 0→1: cheap HTML before the real app | Kyle blank-page strategy: HTML ideation → nudge in Paper → then build; old path of 70–80% hi-fi Figma → v0 on a full React app is "laughable" inefficiency (prompt-wait loops). Ridd: stay in HTML/Paper longer for UX/flows (not polish); aim for a "Build this" handoff. Design version of engineers' 70% planning. | descript-marker |
| 00:45 | Career shape: design engineer | Being early to AI is less differentiating as tooling ramps flatten. Enjoys eng implementation on Output + Primary Studio work; wants to own frontend of what he designs — "play the songs I write," not hand Lady Gaga a demo. Growing comfortable with "design engineer" as feet in both rooms (vs craft-only association with Jay/Emil/Jakob). | descript-marker |

## Notable Quotes

- **00:01** — **Kyle Zantos:** "present me an HTML doc that has all the proposed changes and then options for me to approve, deny, or discuss them, and then have a way at the bottom to copy all of what I put in here and just paste it right back into my session with Claude."
- **00:04** — **Kyle Zantos:** "I set this prompt up from the beginning and then did nothing, and just came back an hour later and had this whole thing to approve, deny, or discuss"
- **00:05** — **Kyle Zantos:** "the before and after is huge. That especially, especially with the animation stuff while I'm still, again, like I'm still learning the vocabulary for all of that."
- **00:09** — **Ridd:** "when you have to feel something, it's a really good way to just feel something a million different directions. I was previously doing that in like static design tools."
- **00:11** — **Ridd:** "now it's like, uh, no, I just created like this visual playground for myself, and it worked amazing."
- **00:12** — **Ridd:** "You could build a UX writing, ecosystem, send that off to the team, and they just do it, and then you get a prompt back."
- **00:13** — **Kyle Zantos:** "I had no idea how much standalone HTML documents could do. That was just a complete blind spot for me as a designer turned builder."
- **00:18** — **Kyle Zantos:** "I didn't wanna keep telling it to fix stuff like you would tell like a, an intern. let's hit the bar of solid and then I'm working from what I like and don't like"
- **00:21** — **Kyle Zantos:** "I did not manually create any of this stuff. All I did was talk into this terminal and the MCP and the CLI"
- **00:23** — **Kyle Zantos:** "there is no barrier for entry of like, you need to learn how to connect nodes. You, you don't."
- **00:26** — **Ridd:** "I one-shotted that from a supercut video"
- **00:28** — **Ridd:** "I'm treating it exactly the same as handoff. I'm just giving it an additional four minutes of context of what I want to accomplish"
- **00:29** — **Kyle Zantos:** "we're continuously trying to describe and, like, put something into the agent's hands, quote-unquote, or, or make it something they can touch"
- **00:29** — **Ridd:** "It's so much faster to just do it in HTML quickly, and actually this should just be a skill"
- **00:36** — **Ridd:** "Never in a million years would I have considered that, 'cause I, I didn't even know it was possible."
- **00:38** — **Kyle Zantos:** "one of the things was building a lot of custom tooling. the HTML shortcut, like, takes care of so much of that."
- **00:39** — **Ridd:** "I just don't use plan mode really anymore."
- **00:42** — **Kyle Zantos:** "like the ideation happened like in v0 on top of like a full React web app, which is like now just like laughable. It's like, that's so inefficient."
- **00:44** — **Kyle Zantos:** "we're basically describing the design version of that, which is like visual planning in a way."
- **00:46** — **Kyle Zantos:** "If I am primarily designing something, like, it makes all the sense in the world to me to own the front end. Of course. If I'm the one designing it, why wouldn't I own that?"
- **00:46** — **Kyle Zantos:** "I have no interest in being a songwriter that writes for Lady Gaga and just, like, hands her a demo of me doing the song, and then it becomes something virtually unrecognizable by the end of it. I want to play that song that I wrote."
- **00:47** — **Kyle Zantos:** "I'm actually becoming very, very recently a little bit more comfortable with the term design engineer."
