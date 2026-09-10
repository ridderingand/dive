---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Brett Williams
host: Ridd
title: "How a Visual Designer Became a Builder"
youtube_id: Xxiq2phvwOA
url: https://www.youtube.com/watch?v=Xxiq2phvwOA
published: 2026-06-16
duration_min: 50
tags: [ip/dive-club, visual-design, vibe-coding, ai-creative-tools, prototyping, craft, creative-process, taste]
flags: []
source: 2026-06-16-brett-williams.md
source_type: descript
slug: 2026-06-16-brett-williams
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Brett Williams (longtime visual designer; ~15–20 years; Figma-first client work) tells Ridd how he stayed out of “designers who build” discourse to protect craft — then, about a month before the recording, jumped into Claude and shipped Gather, a polished Mac collection/inspiration app, after roughly 100–150 hours with almost no prior technical background. Arc: pick a personally useful product → learn stack/auth/APIs from Claude in phases → build bit-by-bit instead of one-shot prompts → bring Figma in mainly for the last ~20% (CSS/dev-mode for hard UI) → sweat interaction details (tab bar, shimmer, fan cards, spaces canvas) → Chrome-extension bookmark sync without the expensive X API → treat Claude as a ranked-options collaborator with taste as the brake against overcooking → invent a prototyping.md skill that spits five HTML options → sound design via Artlist then Claude-generated SFX pickers → land on Lucide icons → reframe AI from lottery prompt→output to patient hyper-speed collaborator you direct. Core claims: abstaining from build tools out of craft protectiveness delayed him, but that same low tolerance for low quality is what makes directing AI powerful; Figma was far less central than he expected once he could describe design language precisely; control in Claude is real if you iterate and know what you want; edge cases and blank-slate product thinking are the hard part, not “vibe one-shotting”; leave Claude wiggle room for brainstorming, tighten for pixel polish; taste/judgment decide what *not* to add when everything is cheap; AI still isn’t “good at design” but is good at taking clear direction. Why it matters: rare zero-to-shipped Mac app story from a pure visual designer for anyone still on the sidelines — and a concrete playbook for Claude + optional Figma CSS + HTML option sheets.

Speaker labels in the Descript source are normalized here: **Speaker 7 → Brett Williams (guest)**; **Speaker 14 → Ridd (host)**. Timecodes and section markers are trusted from Descript (no ±30s caveat).

## Takeaways (Granola)

- Brett ignored building because he considers himself a visual designer. And now he's hooked.

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Brett's journey with building | Visual designer 15–20 years; protective of craft vs cultural devalue / AI distraction; avoided coding tools until recently. Light Bolt/Lovable play felt garbage → back to Figma. ~1 month into Claude: struggle with terminal/GitHub/concepts but shipped a product — easier and more addictive than expected. Ridd frames the value: not a Waterloo design-engineer, a pure visual designer who launched a polished Mac app in ~1.5–2 months. Brett picked Gather (collections/inspiration; wife uses for house rooms) naively expecting ~1–2 weeks; no plan — one foot in front of the other; Claude teaches at his level. | takeaway |
| 00:05 | Where Figma still fits in | Expected to start in Figma; instead jumped straight into Claude for stack education (Electron, auth, Resend, APIs, OpenAI). Works phase-by-phase then drills UI details (dropdowns, filters, tabs) — avoids sweeping one-shots. ~100+ hours / many redesigns. Figma entered in the “last 20% = 80% of time”: CSS from Figma Dev Mode for gradient-stroke skeuomorphic buttons; later MCP without fully understanding it. Surprised how little Figma he needed once he could describe strokes/opacity/design language. Most Figma value was on earlier skeuomorphic aesthetic versions, not the shipped look. Screenshots + very specific direction ≈ 99% Claude. | descript-marker |
| 00:10 | Maintaining control while building with AI | Designers fear AI = loss of direct manipulation. Brett: Figma = full control (esp. client work); on personal tools, shocked at Claude control via Claude Code/web — not Claude Design point-and-click. Old mental model: prompt lottery you live with; new: describe exactly what you want; may take N iterations but you get it. Claims nothing in Gather was functionally/design-wise out of reach. Ridd: Claude exposes levers Figma doesn’t (e.g. tab-bar icon scale-in). | descript-marker |
| 00:13 | Sweating details + Gather depth | Tab bar: many versions (some apps had none); directed trail/hover/icon pop in plain language, not animation jargon — often one-shot once intent clear. Detail page: shimmer, hover tilt, icon-set hunting; delayed dark mode to avoid doubling bugs. Heavy features under a simple surface: multi-select/drag, bulk collect/tag, mood-board JPEG export, free-flow “spaces” canvas with alignment (Figma-like). Wife estimate ~100–150 hours. X comment “I’ll do this tonight” ignores edge-case work; copying an existing tool ≠ blank-slate. | inferred |
| 00:17 | Building a Twitter bookmarking extension | Always wanted better X bookmarks; API too expensive. Workaround: Chrome extension watches bookmark activity → loads into Gather; handles text/image/threads/quote tweets + mobile-bookmark edge cases. Prompt pattern for unknown features: “I want this — what’s the best way?” → Claude ranks low-risk vs expensive options (often blends). When Claude says “impossible,” experience matters: pointed at another extension’s rounded corners → Claude switched to iframe-on-page approach. | descript-marker |
| 00:21 | Dialing in the finer details | Fan-out collection cards: described stack that fans on hover — Claude nailed shadows/fan day 1–2, never changed. Hidden delight: corner quick-view; font tags with smart fields (name/URL); rediscover mode + unsorted focus-sort hotkeys. Visual craft transferred into code via specificity, not Figma fidelity for every pixel. | descript-marker |
| 00:23 | Strategies for collaborating with Claude | Wiggle-room degree depends on task: new/unclear features → prompt for options/context before build; known polish → tighter. Ends prompts with “did I miss edge cases / better way?” Uses Claude as companion for brainstorming more than as strict executor. Ridd: pixel-perfect when visual/frame-matched; looser for transitions then drill down. Over-engineering risk when “you can do anything”; keep Gather lightweight so art is the showcase; Figma still helped dial card shadows; add→remove features when “having too much fun.” Ridd cites Rio Liu “overcooking” — N proud micro-hovers can make the app feel weird. Taste/judgment separate good products when everything is two-seconds-cheap. | descript-marker |
| 00:28 | Prototyping sound design | First Artlist retro Windows-ish save sound → got annoying → Prototype MD skill asked Claude for ~10 SFX options; put all in settings so users pick; separate trash-add vs empty-trash sounds. Be selective; offer mute. Ridd: sound used to “not feel like my job”; now available UX designers can prototype. Brett limits SFX to save + trash to avoid hog-wild noise. | descript-marker |
| 00:30 | Brett's prototyping.md skill | Inspired by first ~4 min of a Claude-engineer talk. Skill: on “prototype,” emit one HTML file with five options you tab through; pick #N → Claude implements into real tokens/CSS. Used on save entrance effects (fade-and-rise won) and then re-ran across dropdowns/UI. Bare skill prompt — no master prompt. Ridd: HTML as third exploration path beside in-product code/playground and canvas (Paper); cheap interactivity when you lack language for five feel variants; also uses HTML as visual conversation (metadata rundowns, callout questions) + Super Whisper dumps; dummy-content folders for realistic logos/imagery. Brett still browser + terminal Claude; re-teaches “I don’t know terminal” each new context; new appreciation for developers memorizing commands. | descript-marker |
| 00:39 | Strategies for icon libraries | Brett landed on Lucide after fatigue experimenting (also Streamline for design work; Ridd usually Phosphor). Ridd: animated Lucide; first production icon via Quiver API in Paper matching stroke/size library — generate 10, pick one. Brett uses Quiver elsewhere; hasn’t tried icons yet; Paper for shaders/design, not Ridd’s workflow — picking battles, “three miles behind” but will get there. | descript-marker |
| 00:41 | Brett's thoughts on the future of design | Hard zero→one Mac app done; biggest shift: AI as most patient hyper-speed collaborator you direct with taste/judgment on what *and* finite UX/UI — less scared, more hopeful for designers. Still figuring client-work incorporation (higher risk; hire or solo?). Twitter bubble mouthpieces lack taste; the craft protectiveness that delayed him is what makes him powerful directing AI. Control + final 1–5% polish is the exciting unlock. AI still not good at design — good at taking direction; bad direction → bad aesthetic majority of what’s online. Fun enough he wants to rebuild his app library; a month prior he’d have said AI = zero control and Figma is the only control. Takes time/iteration/troubleshooting — but you get a working product. Ridd hopes it pulls sideline designers into shipping. | descript-marker |

## Notable Quotes

- **00:00** — **Brett Williams:** "I've been a designer Specifically more just like a visual designer for a really, really long time."
- **00:00** — **Brett Williams:** "I've been rather outspoken about it, I feel like, maybe to an annoying degree, maybe not, about just protecting the art and the craft of design."
- **00:02** — **Brett Williams:** "it was a lot easier than I thought. and it wasn't as scary. It wasn't, you know, it was, it was so much fun. It was like, uh, the, the addiction really, it was like the most satisfying experiment,"
- **00:07** — **Brett Williams:** "there's a saying, I forget who said it, but it's like the last 20% of building an app with AI is like 80% of your time."
- **00:08** — **Brett Williams:** "I feel like I did a decent enough job of describing exactly what I wanted from like using design language like strokes and like, you know, opacity"
- **00:11** — **Brett Williams:** "I was very, very, very, I can't overstate it enough, very surprised on the level of control you actually have in Claude."
- **00:11** — **Brett Williams:** "I thought of Claude as like you put in a prompt, you get something out, and you have to live with it, or you have to go back and forth, and it's like playing the lottery"
- **00:12** — **Brett Williams:** "I could tell Claude exactly what I want as long as I know how to describe it, and it'll actually output that."
- **00:12** — **Brett Williams:** "there was no part of this, of this app that I was not able to build exactly the way I wanted it to build."
- **00:17** — **Brett Williams:** "I feel like it's much easier to copy a tool one for one than like start with a blank slate,"
- **00:19** — **Brett Williams:** "When you say like, \"I want to do this. What's the best way to do it?\" That's where I would start with every new feature that I wasn't quite sure if it was possible to do or not"
- **00:24** — **Brett Williams:** "you have to use Claude as like a companion, right? That's like it may know stuff that you don't know. It may think of things that you may not think of, right?"
- **00:25** — **Brett Williams:** "It's really difficult not to over-engineer, right?"
- **00:27** — **Brett Williams:** "that's where it comes down to taste and judgment"
- **00:27** — **Ridd:** "there's a, a Rio Liu tweet where he talked about overcooking an app that I think about all the time"
- **00:31** — **Brett Williams:** "when I tell you to prototype something, I want you to just prototype, like, five different options.\" But, like, putting in- put it into one HTML file"
- **00:33** — **Ridd:** "It's, it's almost kind of becoming this third way of exploring for me."
- **00:42** — **Brett Williams:** "the most patient collaborator that you could ever have that builds at such hyper speeds that like humans could ever build at."
- **00:44** — **Brett Williams:** "ironically it's like the thing that has stopped me from getting into Claude is actually gonna be the thing that makes me most powerful with it"
- **00:45** — **Brett Williams:** "I don't think that AI is-- It's still not good at design, but it's good at taking direction."
- **00:46** — **Brett Williams:** "a month and a half ago, I would not have thought that at all. I would've thought that you have zero control. Like, that's the whole problem with AI is that you don't have control over anything, and that's where Figma comes in."
