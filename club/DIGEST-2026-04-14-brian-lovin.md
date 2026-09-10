---

type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Brian Lovin
host: Ridd
title: "How to level up with AI as a designer"
youtube_id: dvEwb1Ajkwo
url: https://www.youtube.com/watch?v=dvEwb1Ajkwo
published: 2026-04-14
duration_min: 55
tags: [ip/dive-club, ai-creative-tools, prototyping, design-tools, ai-agents, design-engineering, career-growth, vibe-coding]
flags: [prototype-feedback, coded-prototypes, inflight-relevant]
source: 2026-04-14-brian-lovin.md
source_type: youtube-captions
slug: 2026-04-14-brian-lovin
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Brian Lovin (Notion design; Shuri side project) walks Ridd through leveling up with AI as a designer: why treating Notion's early app-builder like a classic Figma project failed, building an internal prototyping playground to feel models in the medium, the 6-month obsolescence cycle of harnesses/prompts/skills, an inverted toolstack (wide explore in Paper/Conductor, last-mile polish by hand in Cursor), prompting as steering upstream tokens (Simon's "simpler and dumber"), demystifying agents ("AI is not magic" — grep/sed/awk), and why title boxes (designer/PM/engineer) are the career trap. Core claims: jump into the medium instead of mocking agent UX in Figma; design at the boundary of the current model and its harness; every ~6 months prior craft assumptions go irrelevant — stay curious, not tribal on tools; write more code yourself for fit/finish while agents handle the rest; roles are blurring — ship good software for real people. Why it matters: a practice-level map for designers who need to level up with AI in 2026 without waiting for Descript-perfect transcripts — playgrounds, toolstack metaf, prompting, and career shape in one pass.

**Source caveat:** YouTube captions fallback because the Descript project is missing (Drive search exhausted — only the Fall 2023 Campsite founder project exists for Brian). Timecodes are ±30s; no diarization — speakers inferred from content (Brian = guest stories at Notion / Shuri / Tokyo; Ridd = host questions / ads; captions sometimes render host as "Rid"; guest manager name corrected Max Stoiber from ASR "Stoening"). This is the Spring 2026 "How to level up with AI as a designer" episode (yt `dvEwb1Ajkwo`), **not** the Fall 2023 Campsite founder episode.

**Inflight note:** Half of AI product work can't live in Figma; designers build/ship outside the canvas.

## Takeaways (Granola)

- How Brian approached app builder project like a typical project and why that didn't work
- Every 6 months everything up to that point becomes irrelevant
- How prototyping playground works
- How Brian's toolstack has evolved (writing more code and jumping back into Cursor)
- Brian's thoughts on prompting
- AI is not magic
- Roles are blurring and career boxes are going away

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Cold open: harness + role blur | Design at the edge of what's possible even when it sucks; half of AI product work can't live in Figma — you're designing the harness for agents to do longer work and verify themselves. Obsession with titles (designer vs PM vs engineer) will screw people; boxes are going away — move fluidly between disciplines. | takeaway |
| 01:08 | Joining Notion / design offsite | Pre-close invite to Notion design offsite in NYC; feature-combo jam (AI+chat vs formulas+permissions). Team stunned him with hi-fi Figma prototypes and shippable demos in ~30–60 min — first read on Notion design culture. | inferred |
| 04:00 | App builder as first Notion bet | Early Notion bet: take the next step and let AI write code / generate apps inside Notion. Intense first ~4 months; never shipped app builder as one surface — split and shipped in chunks after the first form didn't work. | inferred |
| 05:10 | Ad: Jitter image-to-video | Skippable sponsor — Jitter image-to-video. | inferred |
| 06:10 | Ad: Dessen codebase prototyping | Skippable sponsor — Dessen one-click prototype-in-codebase + share. | inferred |
| 07:00 | App builder ≠ typical Figma project | Joined ~Jan pre–Claude 3.5 / coding agents; skeptics judged current quality, winners watched trajectory. Treated app builder like a classic design project — Figma chat UIs with perfect previews — but live models were slow, wrong, and clarifying. ~1 month in: stop simulating AI-build-AI in Figma; jump into the medium. | takeaway |
| 08:13 | Prototype playground born | Internal prototype playground: talk to models, feel response latency/quality, test SDKs (e.g. Vercel tool/structured output) in an isolated Notion-shaped codebase. From that moment the whole workflow flipped. | takeaway |
| 09:13 | Design at the model/harness boundary | Two loops: feel the medium yourself; grill harness engineers on why slow/worse/better across models. Designers should sit at the boundary of the current model and the next harness generation — absorb eng brains into design process. | inferred |
| 10:16 | Frontier tolerance / pin-and-wait | Inflight voice interview patterns: could-be-good ≠ good — pin until models catch up. Frontier work means shipping imperfect surfaces users will trial-and-error with their own prompts; quality bar has to flex. | inferred |
| 11:17 | Every 6 months → irrelevant | At Notion (and everywhere): every ~6 months prior work becomes more or less irrelevant. Harnesses that needed elaborate "you are a senior engineer" prompts may not; skills may or may not matter. Inner peace = keep changing; understand *why* agents write code well → sandboxes, faster sandboxes, downstream consequences. | takeaway |
| 13:17 | Playground fidelity spectrum | Playground = big directory of prototypes + 80/20 Notion-ish component kit (sidebar/buttons/dropdowns). Each designer pushes fidelity only as far as needed to prove the idea — sometimes a near-Notion editor with slash commands + live inline AI writing back to the page. | takeaway |
| 15:18 | Touching prod / AI-legible codebase | Barrier to try-in-code is low; most have dabbled. Gradient toward trying things in prod more often; eng pushed to make Notion codebase more legible to AI (skills, CI, review) so non-eng designers don't ship broken/untested code. Napkin / TLDraw / Figma still fine for confusing early sketches. | inferred |
| 17:23 | Collab artifact: Figma URL → deploy preview | Collaboration shift: "check this Figma URL" → "check this deploy preview." Playground = one codebase — poke others' prototypes, yoink interactions, duplicate and riff; design crits still happen, sometimes with a shared shape URL. | takeaway |
| 18:30 | Inverted workflow + last-mile reality | Expected: quick code prototypes → sweat pixels on canvas. Actual: go-wide in Paper via Conductor; sweat details in code — hasn't nudged Figma pixels in months. AI still terrible at last-mile visual/interaction; don't pay tokens to "nudge 4px" — touch the CSS. Alternate path: name Figma layers to match code so paste-frame → Claude Code works. Sweat primitives once; models reuse and extrapolate. | inferred |
| 24:00 | Toolstack metaf: Cursor ↔ Claude ↔ Conductor | Don't be tribal. Path: Cursor last year → Claude Code terminal → Conductor (see code + multitask chat) → back into Cursor when Composer 2 Fast won for front-end pixel polish. Pick best tool per job; at work unlimited tokens, personally optimize tokens/intelligence (Claude Max $200 → bias Conductor+Claude). | takeaway |
| 26:30 | Writing more code again | Has handwritten more code in the last 2 weeks than in the prior 4 months — anti-meta to "nobody writes code." Models still inconsistent / sloppy; dual-model review loops can be cope. Understanding which model/tool for which job = same craft as knowing frame vs group. | takeaway |
| 27:40 | Ad: Dive Talent Network | Skippable — Dive Talent Network / dive.club/talent. | inferred |
| 28:30 | Multi-model plan/review loops | Conductor experiments: Opus plans ↔ Codex reviews (and vice versa on built-in review). Codex often better at catching issues — same reason you design-review with more than one person — but inconsistent. | inferred |
| 30:30 | Prompting = steer upstream tokens | High-quality input tokens steer prediction. Say the thing you want attended ("edge cases," "simpler," "show your boss"). Simon (Notion co-founder) snippet Brian runs ~20×/day: "let's step back… make this simpler and dumber while still achieving our goals." Pre-AI programmers win because they have the vocabulary (durable workflow, queue, parallelization). Bad outputs → often lazy/tired prompts; he stopped late-night prompting. | takeaway |
| 34:30 | Shuri: blank canvas → deep iceberg | Read-it-later / bookmarking side project (focused weekend reading vs Notion attention fight). Dumbest prompt stands up v1 (training data saturation); real work = edge cases (localhost redirects, 10k Wikipedia imports, long docs). Build tests/logging/verification so AI can design around those edges next time. Bug flow: paste user id/email into Claude hooked to Sentry + Supabase + Axiom → replay failure. | inferred |
| 39:51 | Describe end vision, not how you'd code | Hardest mindset shift for a designer who already codes: stop "how would I build this?" → "how do I describe the end goal clearly enough for the AI?" Surface area expands (API/CLI/MCP) more than raw speed. Shuri = weekend antidote to weekday "do more faster"; day pattern: fix-issues skill → plan feature while at work → polish at night. | inferred |
| 43:00 | Tokyo talk: AI is not magic | Core takeaway for designers: AI is not magic. LLMs are opaque, but agents invoke knowable 1970s computer primitives (files, bash, grep/sed/awk). Two paths: ignore what the model does on your machine, or get curious so you can wield it and see where the puck is going. Manager Max Stoiber (captions ASR: "Stoening") nerd-snipes him into Linux/terminal literacy to demystify AI. | takeaway |
| 46:00 | Notion culture: revisit assumptions | Year-plus in: Notion comfortable revisiting old assumptions (does Notion need to look like this?) and leadership encourages bigger "wouldn't it be crazy if" bets — closer to OpenAI/Anthropic YOLO than scared SaaS. CLI + early MCP = make Notion legible to agents so the company can move as models change shape. | inferred |
| 50:05 | Career boxes going away | Responding to Lenny-era "design isn't growing" anxiety: designers must mirror SaaS companies looking hard at their future role. Title obsession is the trap; want designers who ship code to prove ideas, PMs who design around specs, engineers who care about visual systems — people who break made-up walls and ship good software for real people. Stop worrying "I don't know how to code / write a PRD." | takeaway |
| 53:10 | Sustainability / undistractable focus | Post–Sonnet/Opus 3.5 bender (prompting on vacation) hit a wall; predicts another come-down unless a big capability drop. Competitive advantage right now: turn off Twitter and be undistractable for ~2 hours a day. | inferred |

## Notable Quotes

- **00:00** — **Brian Lovin (inferred):** "as soon as you realize you can't design half of this stuff in Figma, what you're really designing is the harness for the agent to do longer things and verify its own work."
- **00:00** — **Brian Lovin (inferred):** "Our obsession with titles is what will screw people over."
- **00:00** — **Brian Lovin (inferred):** "These things are going away. Like all this stuff is getting very, very blurry."
- **07:30** — **Brian Lovin (inferred):** "I kind of approached it like a typical design project." *(app builder / Figma simulation — low confidence on exact wording; captions ±30s)*
- **08:13** — **Brian Lovin (inferred):** "None of this is working. Like I can't keep making Figma mocks to try and simulate what it's going to actually be like to use AI to build AI type things."
- **08:30** — **Brian Lovin (inferred):** "All right, I just got to jump into the medium."
- **11:17** — **Brian Lovin (inferred):** "every 6 months everything that we did before becomes more or less irrelevant."
- **12:30** — **Brian Lovin (inferred):** "I have found a little bit of like inner peace with it's just going to keep changing"
- **17:30** — **Brian Lovin (inferred):** "it just moves from, \"Hey, check out this Figma URL.\" to, \"Hey, check out this deploy preview.\""
- **19:00** — **Brian Lovin (inferred):** "I haven't nudged pixels in Figma in a long time."
- **19:30** — **Brian Lovin (inferred):** "AI is still terrible at last mile fit and finish."
- **25:30** — **Brian Lovin (inferred):** "right now I have no allegiance. I just pick the best thing for the job."
- **26:45** — **Brian Lovin (inferred):** "I've handwritten more code in the last 2 weeks than I did in the last 4 months."
- **32:30** — **Brian Lovin (inferred):** "let's step back and think really hard. How can we make this simpler and dumber while still achieving our goals?"
- **33:00** — **Brian Lovin (inferred):** "I run that I don't know 20 times a day."
- **40:00** — **Brian Lovin (inferred):** "how would I describe my end vision or the end goal in a clear enough way that the AI can do it?"
- **43:10** — **Brian Lovin (inferred):** "AI is not magic."
- **44:00** — **Brian Lovin (inferred):** "some guy in the 70s just like made this thing up and it has stood the test of time. And now these like three little commands are what power like all modern agentic coding."
- **51:00** — **Brian Lovin (inferred):** "you want a designer who can ship code to prove that an idea is good."
- **52:00** — **Brian Lovin (inferred):** "stop worrying about but I don't know how to code. I don't know how to write a PRD. Like who cares? Just like ship the thing and solve the problem"
- **54:30** — **Brian Lovin (inferred):** "the ability to focus and be undistractable for 2 hours a day is like a meaningful competitive advantage right now"

