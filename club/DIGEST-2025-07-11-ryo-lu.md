---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Ryo Lu
host: Ridd
title: "Designing the future of Cursor"
youtube_id: dsZqOPVQTNg
url: https://www.youtube.com/watch?v=dsZqOPVQTNg
published: 2025-07-11
duration_min: 57
tags: [ip/dive-club, design-engineering, ai-agents, vibe-coding, code-as-material, product-strategy, prototyping, design-systems]
flags: [coded-prototypes, prototype-feedback, inflight-relevant]
source: 2025-07-11-ryo-lu.md
source_type: descript
slug: 2025-07-11-ryo-lu
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Ryo Lu (design at Cursor; ex-Notion) on joining Cursor after a 3-day **v0 → Cursor agent** “future of Notion” prototype changed how he makes software — then shipping concept unification (tab / Cmd-K / chat / composer / agent → one agent) that he ties to Cursor’s takeoff. Arc: sculpting in software vs PRDs/Figma artifacts → systems thinking (unify concepts; serve vibes↔manual spectrum without removing continuity) → IDE as one form factor among Slack/web/mobile/background agents → multi-agent design collapses to to-do/task primitives (chats ≠ tasks) → dogfooding + noise-filtering feedback → code as material; Figma still for exact 2D layout, Cursor for feelable AI interactions → **malleable software / few primitives** over arbitrary generated UI → ryOS (130k LOC vibe-coded personal OS) as idea→reality gap→0 → over-specialization dying; AI releveis field → designers+eng as same puzzle; durable skill = interpreting concepts/language. Core claims: product work is sculpting clay; systems not features; don’t equate chat=task; malleable blocks beat chaos UI; when everyone codes, designers design boundaries/concepts. Why it matters: Cursor systems + coded-prototype culture (Baby Cursor stop/queue shown to people; Ricky Figma→vibe settings) is Inflight-shaped gold. **This is Ryo Part 2 (Cursor), not the Season 4 Notion systems-thinking episode.**

**ASR note:** “V zero” / V0 = **v0**; “real S” / “Rios” / “RyOS” = **ryOS**; “macros” ≈ Mac OS; “ocean” (Kanban joke) = Notion; “Nicholas View” ≈ Notion views; “paralyzable” = parallelizable; “Chad GPT” = ChatGPT; “emax” = Emacs. Speakers **Ryo**, **Ridd**. Quotes keep transcript wording. Timecodes trusted (Descript).

**Inflight evidence (flags):** Future-Notion prototype in v0 then Cursor agent in ~3 days as the design artifact (~01:11); Baby Cursor stop/queue prototype **shown to people** then shipped (~29:32); multi-agent prototypes because AI I/O “you just can’t fake” in Figma (~30:10); pushed teammate Ricky off two weeks of Figma settings mocks into vibe-coding — eng “love it,” designers feel “part of them” (~44:57) — `coded-prototypes` + `prototype-feedback` + `inflight-relevant`.

## Takeaways (Granola)

From Granola Editing Notes "Editing Ryo Lu" (source_meeting_id 387c7e0f-c831-435b-bef1-4d9a64991a4d, dated 2025-07-10) Takeaways (primary gold):

- Built future-of-Notion prototype in v0 then Cursor agent in 3 days — “completely changed me”; 130k LOC personal site via vibe coding
- [AI] Product development is now like sculpting clay — build in software vs PRDs/Figma artifacts; tell AI the block type then chisel
- [Random] Systems thinking at Cursor — unify users/bugs/feedback/codebase into agent; tasks ≠ chats → separate to-do primitive
- [AI] Malleable software and primitive systems — don’t impose one preference; design adaptable blocks for AI to wield dynamically
- [AI] Future isn’t dynamically generated UI — arbitrary UI = chaos; malleable software instead
- [Career] AI levels the field for younger designers — knowing how to interact with AI relevels
- [AI] When everyone codes — designers/architects increasingly “just designing”

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Joining Cursor | Cursor reached out pre-agent (tab→chat→composer arc); Ryo stayed at Notion until multi-year plan slipped; built future-Notion in **v0** then **Cursor agent** in ~3 days (feature-flag menu, 3D globe views, real data) — “completely changed me”; software as sculpting vs PRDs/Linear/Figma; jam → first Cursor ship. | takeaway |
| 04:41 | Unifyмент unify concepts | First ship: tab, Cmd-K, chat, composer, composer-agent → **all agents**; default everyone to agent; biggest reason for takeoff since Feb; people literally couldn’t find agent before. | descript-marker |
| 06:18 | Systems not features | Consume users/bugs/feedback + actual code; unify don’t delete; layers of one concept; serve vibes↔full-manual spectrum with escape hatches/continuity (“make the circle big”). | takeaway |
| 09:31 / 11:43 | Cursor for everyone | Open-project/clone/SSH gates out non-coders; same agent, different feel — not “Cursor for designers”; IDE is one form; Slack/web/phone/background agents = same thing, pick up mid-flow. | inferred |
| 15:32 / 16:26 | Multi-agent → to-dos | Hard AI + invariant concepts; month on spin-up/manage/review/merge agents → “to-do list all over again”; chats ≠ tasks (long-running vs one-shot habits); agents need task memory beyond context window; cursor.com/agents list view as universal on-ramp. | takeaway |
| 21:24 | Design ops at Cursor | Weekly problem picks + ambient signal + personal projects; build Cursor with Cursor + “Baby Cursor”; dogfood to learn model limits (o3 vs Gemini) and push tool fixes. | inferred |
| 23:23 | Feedback filtering | Absorb Twitter/Slack/reports like training data; direction/concepts matter more than isolated solution asks; dynamic priorities across present/future/resources. | inferred |
| 26:40 | Personal process | Code is material → Cursor default; Figma still when exact 2D/pixel layout iteration beats code; AI interactions must be prototyped in code (“can’t fake” I/O); stop/queue from Baby Cursor prototype shown to people then shipped. | takeaway |
| 31:09 | Fluid / malleable UI | Can’t design static one-state mocks for everyone; don’t impose preference; design low-level architecture + configs/defaults; personalization as soul at scale. | takeaway |
| 34:37 | Primitives not chaos UI | Designers go up a level — containers/patterns that translate across Cmd-K/chat/editor/web/mobile; AI reconfiguring forms OK; **arbitrary generated UI = chaos**; few durable primitives; AI wields adaptable blocks. | takeaway |
| 38:53 | ryOS | Accidental OS from soundboard → window/menu → multi-app architecture with agent; text editor + chat writing into it; **idea→reality gap toward zero**; ~130k LOC solo vibe-coded in 1–2 months. | takeaway |
| 42:22 | Team structure | Over-specialization dying; knowing how to interact with AI releveis field (17yos vs slow big-tech); Ridd: Inflight hiring math shifted (designers = frontend capacity). | takeaway |
| 43:57 | Eng collab | Ricky (Notion DS) spent ~2 weeks Figma-perfecting settings → Ryo: vibe-code it; eng love designers-as-builders; pre-Ryo Cursor had no designers (built for themselves); designer role = untangle concepts so paths converge (five things → one). | takeaway |
| 48:40 / 50:57 | Durable skills + HCI | Interpret world/concepts; roles were archaic alignment layers; clarifying language/concepts is big part of job; interface → closer to how you think (Neuralink-adjacent belief). | inferred |

## Notable Quotes

- **00:01:11** — **Ryo:** "I first went to V zero, I made a little prototype... And then I played like a couple rounds there and I was like, stuck... So I just downloaded the app. I got cursor... I did that for like three days and then I, I built this whole prototype of like the future notion."
- **00:02:16** — **Ryo:** "that completely changed me."
- **00:04:07** — **Ryo:** "now it's almost like sculpting. You get something, then you poke at it"
- **00:05:13** — **Ryo:** "all of these things are the same thing. They're all agents. Then we merge all of them into one concept."
- **00:17:27** — **Ryo:** "oh shit, that's to-do list all over again."
- **00:29:32** — **Ryo:** "for all of those I just use cursor build, build it out, see how it feels. one example is the, like the stop and queue interaction... that started just from like a prototype in Baby Cursor. I showed it to people. People were like, oh, cool. And then we built it."
- **00:30:30** — **Ryo:** "You just can't fake them."
- **00:36:06** — **Ryo:** "I don't think it's like arbitrary generating UI that say even the creators of the tool cannot control or cannot predict is a good thing. It just creates more chaos."
- **00:41:34** — **Ryo:** "one of the reasons I joined Cursor is I want the gap between having an idea and it becoming reality, getting that closer to zero."
- **00:42:00** — **Ryo:** "most of it in like one or two month right now. It's like 130 K lines of"
- **00:43:00** — **Ryo:** "the over specialization that we had over the last 10 years or so, just complete does not make sense anymore."
- **00:45:09** — **Ryo:** "What are you doing? Like, let's just like try vibe coding it"
- **00:47:17** — **Ryo:** "Instead of building five things, maybe we should just build one thing. It's just one thing that has like n or like a million different ways to see it"
- **00:52:16** — **Ryo:** "clarifying. Concepts and ideas that are supposed to be the same into like their simplest form that doesn't change"
