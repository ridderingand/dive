---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Lewis Healey and Kylor Hall
host: Ridd
title: "The trick to AI prototyping with your design system"
youtube_id: CqMZTg7L-wE
url: https://www.youtube.com/watch?v=CqMZTg7L-wE
published: 2026-01-02
duration_min: 53
tags: [ip/dive-club, design-systems, prototyping, ai-creative-tools, design-tools, tool-bending, vibe-coding, collaboration]
flags: [coded-prototypes, prototype-feedback, inflight-relevant]
source: 2026-01-02-lewis-healey-kylor-hall.md
source_type: youtube-captions
slug: 2026-01-02-lewis-healey-kylor-hall
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Lewis Healey and Kylor Hall (Atlassian Design System) walk Ridd through how they scaled AI prototyping across a huge org: pre-coded Figma Make / Replit templates that hardcode the chrome AI always botches (top nav + sidenav), "recipes" as pasteable code blobs for smaller pieces (Rovo chat, dark mode), guidelines.md that translates Tailwind/shadcn mental models into Atlaskit components (lozenge ↔ badge), sticker-sheet / computer-vision calibration to teach the model how it actually sees screenshots, adoption via Looms + a 500-person Replit master class + AI Builder Week + a Slack group-DM bot for inactive users, and maintainability by generating templates from the frontend monorepo so design-system changes deploy into prototyping instead of five vibe-coded docs drifting apart. Core claims: start from good production-ish code, not empty prompts; document for the LLM's memory (not only humans in design reviews); meet the model where it was pretrained (Tailwind) then remap; prototypes beat static designs in design-review demos; design-system work is becoming an AI-native adoption discipline. Why it matters: the clearest enterprise playbook yet for coded prototypes + design-system fidelity at scale — Inflight-shaped sharing culture included.

**Source caveat:** YouTube captions fallback (Descript Drive search exhausted). Timecodes ±30s; no reliable diarization — speakers inferred (Lewis = adoption / Figma-Make / Slack-bot stories; Kylor = Cursor / monorepo / guidelines generation; Ridd = host / ads). Name mangling: Lewis→Louis, Kylor→Kyler/Kyla/Kylo/Carlo/Carla, Atlassian→Elastian/Alassian, Atlaskit→Alask, Replit→Replet, Rovo→robo. Host often "Rid".

**Inflight note:** Pre-coded templates + recipes = coded prototypes PMs/designers ship; design reviews reward live prototypes over static Figma; Slack bot drives enablement feedback at scale.

## Takeaways (Granola)

NOT FOUND — no Editing Granola note located for this episode.

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Cold open: DS for the LLM | Design-system work used to be programs/people/design reviews; with AI it's "can we document what we care about so it's in the model's memory at all times." Anyone with any tool can ship — DS remit blew up. | inferred |
| 00:47 | Intro / Atlassian AI prototyping | Lewis Healey + Kylor Hall; goal = augment PMs/designers/content designers to create **coded prototypes** that look Atlassian. Early pilot ignored DS → users immediately demanded Atlassian fidelity → templates born. | inferred |
| 01:33 | Pre-coded chrome templates | Abstract template hardcodes topnav/sidenav (elements AI usually gets wrong). Agents (Figma Make, Replit) are better at *editing* existing code than generating chrome from scratch — nav error rate ~50% → near zero. | inferred |
| 04:36 | Why chrome fidelity matters | People burned 2–3 hours pixel-perfecting shell; customers get distracted when chrome is wrong. Content can be rough; pre-coded template + DS instructions = hybrid baseline for product-specific forks (roadmap, etc.). | inferred |
| 05:23 | Ads: Raycast + Genway | Skippable sponsors. | inferred |
| 06:55 | Template UX + config object | File lives in Figma Make as duplicateable coded scaffolding + on-page education. Config constants + copyable "switch logo" commands beat freeform prompts that pull stale pretrained Jira logos. | inferred |
| 10:00 | Bake engineer knowledge in | Prompt dumps failed (theming, feature flags undocumented). Bake defaults engineers know by heart into templates so non-engineers iterate fast; prototypes used for demos + design reviews — want cutting-edge / future-baked. | inferred |
| 11:31 | Recipes | Code blob + instructions for smaller inserts (Rovo chat box, dark-mode default) without duplicating a whole template — UX of non-technical users using code. | inferred |
| 13:02 | Origin: docs dump failed | First try = upload full Atlassian docs → truncated, wrong mental model (human docs ≠ machine). Shift to guidelines.md instruction files (MCP later); teach model to think Tailwind then remap to DS components. | inferred |
| 15:19 | Tailwind → Atlaskit translation | Per-component "if you see these Tailwind classes → this React DS component" (lozenge/badge). Prefer DS + tokens first, Tailwind for gaps. First guidelines fully vibe-coded during pilot (300 people waiting); ~5k-line llm.txt ~90% vibe-coded then centralized. | inferred |
| 17:37 | Cursor + token tables | Industry models don't know Atlassian tokens — build explicit maps. Full llm.txt verbose (~5k lines); prototyping settles on ~2–3k succinct subset; expose ~20–30 components not 100+. | inferred |
| 21:24 | Benchmark + sticker sheets | One-shot screenshot accuracy ~50–60% on instructions alone; higher with hybrid template. "Printer calibration sheet" idea: put primitives on a page, ask model to describe/prompt them — meet computer vision where it is; improved heading/text fidelity. | inferred |
| 23:43 | CV limits → user training | Bounding-box prompts show complex screenshots truncate (miss lower sidenav); icon tiles lose color. Training: break screenshots into sections; zoom for small components — influences enablement more than just codegen instructions. | inferred |
| 26:47 | Ad: Dive Talent | Skippable. | inferred |
| 27:32 | Adoption at 11k-employee scale | Build-it-and-they-won't-come. Multi-format 101 (Looms + written + 3-min UI tour). AI Builder Week (tools-down, president-mandated); 500-person Replit master class — "aha" that filtering interactions impossible in Figma take 5 min in Replit/Make. | inferred |
| 31:19 | Slack group-DM bot | Channels ignored; DMs get replies. Bot (Cursor → Replit dashboard) group-DMs inactive users via design-ops leads → survey feedback on gaps without manual hundreds of DMs. | inferred |
| 32:49 | Prototypes win design reviews | Leaders share prototypes top-down; static designs get less excitement/commentary than functional prototypes on Looms — virality + daily use across IC and leadership. | inferred |
| 34:20 | Maintain from monorepo | Templates live in DS packages as lint/typecheck-passing code; theme changes break + redeploy to Replit. guidelines/examples generated from structured component offerings (80% use cases, AI-clean examples) — stop documenting in 5 drifting places (atlassian.design, atlaskit, llm.txt, MCP, prototyping). | inferred |
| 41:10 | Can't crawl the public site | Poor success asking AI to read atlassian.design; automate content the model needs; handle edge cases explicitly. | inferred |
| 41:55 | DS → AI-native adoption | Both ~3.5 years on Atlassian DS. Adoption night-and-day: programs/culture → put truth in LLM memory; align naming (lozenge, appearance vs variant) toward industry pretrained vocab. Lewis: Figma-plugin → Figma → adoption → lead design technologist AI pillar (scope spiral from Figma Make tool lead). | inferred |
| 45:43 | Future: AI-native design system | Looking 3–5 years; keep iterating fidelity + distribution automation. (Closing stack read.) | inferred |

## Notable Quotes

- **00:00** — **Guest (inferred):** "With AI, it's a lot more about like, okay, how do we document this so that it's available in the AI in the LLM's memory at all times"
- **01:33** — **Lewis (inferred):** "how do we augment product managers, product designers, content designers to essentially create a coded prototype of their idea"
- **03:50** — **Guest (inferred):** "okay let's just code the topnav let's just code the sidenav"
- **05:23** — **Guest (inferred):** "pre-coded template with design system instructions"
- **10:46** — **Guest (inferred):** "we might use them for demos and design reviews"
- **11:31** — **Guest (inferred):** "we've created this thing called recipes where they are … a code blob with some instructions"
- **22:10** — **Lewis (inferred):** "What if I just put a bunch of things on a prototype and just said, describe it to me. How would you describe this?"
- **30:34** — **Lewis (inferred):** "I can't do this in Figma this is too hard. … in Replit, in Figma Make, I can do it in 5 minutes"
- **33:35** — **Kylor (inferred):** "the good demos in our sort of design reviews appear to be the prototypes"
- **33:35** — **Kylor (inferred):** "if you come in with just a static design … if you come in with a prototype, like people will actually get a little bit excited"
- **42:40** — **Guest (inferred):** "Can we just tell it exactly what we care about? Can we tell it exactly what it needs to do?"
