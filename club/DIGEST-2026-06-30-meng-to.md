---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Meng To
host: Ridd
title: "Codex superpowers for designers"
youtube_id: SznrOQYiahg
url: https://www.youtube.com/watch?v=SznrOQYiahg
published: 2026-06-30
duration_min: 36
tags: [ip/dive-club, ai-creative-tools, design-tools, ai-agents, vibe-coding, craft, creative-process, tool-bending]
flags: []
source: 2026-06-30-meng-to.md
source_type: descript
slug: 2026-06-30-meng-to
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Meng To (Design+Code; Aura) returns ~16–18 months after building Dream Cut with Cursor + Sonnet 3.5 — an app he never shipped because quality gaps outran the then-young stack — and walks Ridd through going all-in on Codex as the center of design, planning, writing, and shipping. He demos a local markdown “Notion” he built so agents can work on files on disk (cloud Notion AI doesn’t), shows preset image prompts (e.g. flat design → perspective mockup) and contextual generation from article blocks, and argues designers must build their own tools because off-the-shelf ones are never enough and building surfaces new design moves. Workflow shifts: plugins + skills in Codex; skills as taste/style-guide prompts to stay ahead of AI-slop baselines (Inter, purple gradients); screenshots (and Cmd+Cmd) as the default prompt; ~10,000+ prompts per shipped project; 0% of code written by hand now (was 95%); GPT Image 2 → HTML for Aura’s ~5,000 templates; video-as-animation-vocab; design.md as the designer’s style guide for strong models; light agents.md / memory / runbook.md so project defaults don’t pollute every prompt; parallel agents and “allergic to loading states”; GPT 5.5 Extra High vs medium vs Cursor Composer 2.5 for depth vs speed. Core claims: knowledge + iteration volume is the moat; the last 10% is taste and your own starting points (past fonts, Figma, HTML); start from you so the model stops producing slop; agents replace the old team roles if you open the plugin/library/prompt stack. Why it matters: rare live tour of an AI-native designer who both ships product (Aura, Dream Cut iterations, local tools) and names the craft discipline that still sits with the human.

Speaker labels in the Descript source are normalized here: **Speaker 5 → Meng To (guest)**; unlabeled **Speaker:** / **Speaker 2 → Ridd (host)**. Timecodes and section markers are trusted from Descript (no ±30s caveat).

## Takeaways (Granola)

- Why Meng built his own local Notion tool
- How Meng’s workflow has evolved in the last 1.5 years
- How Meng uses GPT Image 2 to brainstorm UI design
- Strategies for [design.md](http://design.md) and [agents.md](http://agents.md) files ([https://design.md](https://design.md) and [https://agents.md](https://agents.md))
- The “last 10 percent” and avoiding AI slop
- Screenshots as the primary prompting tool
- Building in parallel and treating loading states as a signal
- Prompts at scale: 10,000+ per project
- Designers must build their own tools

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | All-in on Codex (vs Cursor era) | Used to live in Cursor; Codex shifts mindset for designers and non-coders — ChatGPT evolution with files, apps, chat, plan, design, charts, HTML/markdown, Slack/Telegram/Discord, continue on phone. First Dive Club visit ~16–18 months ago: Dream Cut on Cursor + Sonnet 3.5 never shipped — quality bar unmet, tech too young. Now: day-scale builds that used to take a week/month, but you need knowledge (MrBeast / 20M-in-six-months analogy). Codex first with thread-first UI; Cursor’s UI now feels familiar; maturity edge to Codex; Composer 2.5 unmatched for speed. Must know model + app + GPT 5.5 medium vs Extra High. No longer opens Figma to design from scratch — all projects + podcast prep live in Codex (talking points → images; article/video → writing with Paul Graham essays + philosophy in agents). Codex as create + store of resources. | takeaway |
| 00:04 | Build your own local Notion | Designers must build their own tools — existing ones never good enough. Demo: local Notion on markdown files; Notion forces online / AI not local. Every new file appears in the tool; prep titles → generate images; preset prompt UI (years of presets) including flat → perspective mockup (first pass = “AI slop,” perspective suddenly better). Presentation draw-on, notes, version history, design history — all local via Codex agents. Ridd: wants content local, doesn’t love Obsidian stickiness; built Mac apps before, hadn’t considered local-in-web. | takeaway |
| 00:07 | Discover-as-you-build | Own-tool upside: use each section as image context with presets (YouTube/article cover) with no typed prompt — context is the file. Not only frustration/local power vs walled gardens — building surfaces new design moves (perspective, turn still → video). Solo superpower: discover while working, no giant upfront blueprint. Whole workflow starts from Codex. | takeaway |
| 00:09 | Plugins, skills, last 10% | Start from plugins that match your workflow: Computer Use, Granola, Canva, Figma, Remotion, Hyperframe, AI voices/avatars — Figma-plugin-class integrations. Skills ≈ prompts / style guides for taste (fonts, anti-slop). Chase trends → become AI slop soon; stay a chess-step ahead of baseline (Inter, purple gradients; soon serif + same AI animations). Only way ahead: spend the last 10%. Memory = years of assets on disk (fonts, Figma, code) as starting point so AI stops making slop — starting point is you. Non-designers: screenshots. | takeaway |
| 00:12 | Screenshots as default prompt | Every iteration thread starts screenshot, screenshot, screenshot. Fastest build input without voice/type. Codex Cmd+Cmd dumps active window into the agent; then type fixes (“top left,” “video timeline”). Product knowledge is the gate — if you don’t know the product, someone else will one-prompt you in three months. Nobody one-prompts Dream Cut after his iteration volume. | takeaway |
| 00:13 | 10,000+ prompts + last 10% features | Ridd guesses thousands; Meng: at least 10,000 each. Video editor redo in a day (ugly but done): search libraries with recording + editing + zooms/resize, then last 10% for features libraries lack (drag/drop, reposition, Apple-inspired dots) — prompted from personality/experience, not library defaults. | takeaway |
| 00:15 | 0% hand-written code; editor stance | Past claim was 95% code by him; now 0%. Live: overlay bug → screenshot + precise report; edge cases AI won’t fix alone. Skill = talk to AI efficiently: screenshot + voice (speak 3–5× faster, more detail than lazy typing). Ridd: padding used to be faster by hand, but parallel agents change the math — allergic to loading states; spinner = spin up another agent. Annotate to point at fixes instead of whole-screenshot narration. Best people are editors; Meng sees himself as editor more than blank-canvas starter. | takeaway |
| 00:18 | GPT Image 2 for UI brainstorm | GPT Image 2 “so good”; Aura ~5,000 templates — most now GPT Image 2 screenshot → HTML. Flow: PRD/article bullets → landing/hero image with taste skill (fonts/colors/system) → sections on demand; also 3D/glass logo, illustration, slides, interior, wireframes. | takeaway |
| 00:20 | Animation via video → prompt | Elegant popup enter: team gives AI a video and asks “How should I prompt this animation?” — skip memorizing library jargon. Ridd parallels shader work: Claude as intermediary to write the prompt. Giant context (sections, pre-prompts, design.md, HTML preview/screenshot/URL) is how you actually use “super intelligent” models (Fable 5 etc.); short “beautiful landing page” prompts waste the model — same result as weaker ones. | descript-marker |
| 00:23 | design.md = style guide for models | design.md = 10–20 years of designer style-guide mastery (colors, type, spacing, radii, surfaces, tokens, a11y language Google standardized) in one markdown file AI can read. Powerful with strong models (Mythos Fable 5); base models won’t fully get it — new designers lost that embedded context, file holds it. Ridd TODO: stop re-listing system each Paper session; wrap as skill / “use the design MD.” | takeaway |
| 00:25 | agents.md, memory, runbook | ~50% of prompts reference another chat/page or whole folder (new iOS from existing Mac folder; “this button in the style of that page”). design.md strong at start; rapid iteration prefers page refs. agents.md auto-read every prompt/new thread/task — Meng keeps it light; prefers screenshots + file refs + remembering design terms. “From now on remember this workflow/design system in memory” → often lands in project agents.md; also runbook.md / workflow.md. Global config agents.md dangerous (every prompt/project); prefer project memory after a decision. | takeaway |
| 00:29 | Model ladder + solo agent team | Start medium (cost/limits/speed); Cursor Composer 2.5 for one-project speed; GPT 5.5 Extra High — best model he’s used this year (aside expensive Mythos) — builds anything you dream. Endless curiosity required; workflow keeps evolving; never worked harder / more parallel projects solo. Design+Code early: travel, tiny content pockets, first video slow → eventually team of editors; today agents are editor/designer/coder/assistant. Stopping point is opening to apps, plugins, libraries, prompts, design.md — “greatest weapon.” Close: annual checkpoint; Sonnet 3.5 then → GPT 5.5 in Codex now; unknown in 12 months. | inferred |

## Notable Quotes

- **00:00** — **Meng To:** "I used to use Cursor all the time but now Codex, is shifting the mindset for a lot of designers and a lot of people who've never done design before or coding before."
- **00:00** — **Meng To:** "It's kind of like an evolution from ChatGPT into something far more powerful. Your brain is on, on your computer."
- **00:03** — **Meng To:** "Used-- It used to be Figma, which by the way, I don't open Figma anymore."
- **00:03** — **Meng To:** "I don't open Figma anymore to build designs or to create design from scratch anymore. I do all of that work in Codex."
- **00:04** — **Meng To:** "designers have to build their own tools because the tools that we have are never good enough"
- **00:05** — **Meng To:** "on Notion, everything has to happen online. The AI is kind of like, it, it doesn't work locally."
- **00:06** — **Meng To:** "the fir- the, the first version looks like this, which is like, as I mentioned before, AI slop. But then you turn into a perspe-perspective mockup, and suddenly it looks so much better."
- **00:07** — **Meng To:** "that's the beauty of building your own tool is be- because you're not only, doing that out of frustration because something is missing."
- **00:08** — **Meng To:** "as you create those tool, you suddenly discover so many new ways to design"
- **00:08** — **Meng To:** "I'm one of those designers who discover as I work, right? I don't plan things."
- **00:10** — **Meng To:** "A skill is, is basically a prompt, sometimes a large prompt. you can think about, what is the best-- like what is the best practice? It's more like a style guide."
- **00:10** — **Meng To:** "if you always chase the trends, you will become AI slob very soon."
- **00:11** — **Meng To:** "the only way you can be ahead is just to, to, to spend that last 10%."
- **00:12** — **Meng To:** "when you have a starting point, your AI will stop making AI slob because your starting point is you, and you are definitely not AI slob because you are unique as a human"
- **00:12** — **Meng To:** "It always starts with a screenshot, screenshot, screenshot, screenshots. See? every single time I start with a screenshot."
- **00:13** — **Meng To:** "How knowledgeable are you of your product, Because if you're not knowledgeable about your product, forget it. You're not gonna do anything meaningful"
- **00:14** — **Meng To:** "At least 10,000 each."
- **00:15** — **Meng To:** "remember at the time I was saying 95% of my code was written by me. Now 0% of the code is written by... 0%."
- **00:16** — **Meng To:** "Part of the skills nowadays is to be able to talk to AI in the most efficient way possible. And one of the ways is just, yeah, take screenshot, use your voice"
- **00:16** — **Ridd:** "I'm allergic to loading states now. If I'm looking at a loading state, it means that I, I need to spin up another agent"
- **00:17** — **Meng To:** "The best people are the editors, right? Because I also think myself as more of an editor than as someone who likes to start from scratch."
- **00:19** — **Meng To:** "nowadays, most of these templates are created from GPT Image 2 screenshot to HTML"
- **00:21** — **Meng To:** "They use a video. They give the AI a video, and they ask the AI, \"How should I prompt this animation?\""
- **00:23** — **Meng To:** "The design.md is basically all of that, sweat, tears, and blood into one markdown file that the AI can read."
- **00:26** — **Meng To:** "agents.md is the file that is always read by, by the AI for every single prompt or any time that you create a new thread or a new task."
- **00:29** — **Meng To:** "GPT 5.5 is like probably the best model that I've used this year without counting the new Mythos and all that stuff."
- **00:31** — **Meng To:** "today you can do everything yourself because your editors are your agents. Your designer is your agent. Your coder is your agent."
- **00:31** — **Meng To:** "And the only thing that's stopping you is you opening to this world of apps and plug-ins and libraries and, uh, prompts and design.md. And if you have that, it's, it's your greatest weapon."
