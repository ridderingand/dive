---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Derek Briggs
host: Ridd
title: "Scaling craft at Shopify"
youtube_id: r4IW73e6tE4
url: https://www.youtube.com/watch?v=r4IW73e6tE4
published: 2026-11-03
duration_min: 48
tags: [ip/dive-club, craft, design-engineering, ai-agents, design-systems, taste, code-as-material, career-growth]
flags: [coded-prototypes, inflight-relevant]
source: 2026-11-03-derek-briggs.md
source_type: descript
slug: 2026-11-03-derek-briggs
generated: 2026-11-03
generator: dive-club-ideas
schema: 1
---

## Summary

Returning guest Derek Briggs (first on Dive Club 2024-01-18, "Creating a culture of craft", as Clerk head of design; since then head of design at Hypermode, now a principal-level IC at Shopify) on raising craft at Shopify scale. Arc: Clerk → Hypermode (acquired) → recruited by Carl Rivera and Cynthia Savard; "founding designer type" pulled into a ~300-person design org → top-down permission: Tobi's "design is the differentiator" memos give permission, not orders — the people succeeding "just take it and run" → shop.com carousel teardown (SVG displacement-map liquid-glass button; merchant logo settles last; rating counts up; all card-item motion keyed to one variable, reverses on drag at 60fps; canvas-rendered blurred ambient video background; deliberate stagger order; rewritten from Swiper to Motion's carousel/ticker) → his Shopify movement system: signature ease-out cubic-bezier(0.2, 0.8, 0, 1) @ 400ms reads as ~200ms but keeps a "soft close drawer" tail; 1,000ms ease-out spring with 800ms of settling; bounce into free air, soft-stop against hard surfaces (Sidekick input vs sidebar); "when in doubt, ease out" — plain CSS → IC over management: build trust first, leave teams with the tools and reasoning, not just a better artifact → design engineering at scale: extract skills/systems/markdown so "greatness accidentally happens"; but designers should still spend time on the artboard — agents only reproduce what has happened before → data pipeline to design against: scheduled Codex automations overnight pull product APIs; morning-coffee review of conversion, criticality, proposed ideas and pre-prepared PRs; ask the agent "what should I measure?"; living agent profile distilled from long conversations → caring less about code quality since Astra; curate AGENTS.md nuggets instead; codebase is the most important context → design engineer is "maybe the most important role out there right now"; Alvish + Joe Bell (Operate) as the ideal vision + feel pairing → scaling via skills (Emil Kowalski's skills as "enterprise level deployment of taste"); don't hire tons of DEs, deploy them horizontally through markdown → hiring: AI should make you 10x better, not do 10x more work; hunger; newer designers have no old habits to break.

Core claims: at a company with PMF you can afford quality others can't; long easing durations can still read as 200ms; impact as an IC = showing, not telling, then leaving systems behind; ship nothing without data on whether it met its goal; DE taste scales through skill files, not headcount.

**Evidence (coded-prototypes / inflight-relevant):** ~00:05:00–00:10:00 carousel rebuilt in code as the artifact to rally designer + engineer ("you have to show what's possible… the artifact", ~00:39:00–00:40:00); ~00:33:00 agents "pre-prepare PRs" he reviews and presents to growth/product partners; ~00:23:00–00:24:00 skills/markdown deployed to designers' and engineers' agents. Not `prototype-feedback`: no WIP preview/review-round workflow discussed.

**ASR / name notes (disclosed):** "Toby" → Tobi (Lütke); "Alfish" (Ridd, 00:41–00:42) → Alvish; "Cloud Code" (00:31) → Claude Code; "Py" (00:31) left as spoken (likely the Pi harness, unverified); "0.2.801" → cubic-bezier(0.2, 0.8, 0, 1) per Granola summary; "Operate" = Operate CRM (Granola Show Notes); "Context" = internal podcast (Carl + Tobi). "Astra" / "Opus 5.5" as spoken. Timecodes are Descript edit-time (trusted; seconds interpolated between 60s markers). 

**Source + YouTube offset:** Descript composition 3f34e350-2d57-43af-aed1-75c732830995 (project 3d69e34f-e15f-4b49-a1ea-e398d35b4683; markdown export, checked complete 00:00:00–00:47:00, ends on sign-off at ~00:47:32). All timecodes in this digest are Descript edit-time. **YouTube = Descript + offset**: Descript 00:00:00–00:04:40 → **+0:48** (cold open + Ridd intro at YT 00:00–00:48); 00:04:40–00:26:47 → **+2:28** (Framer MCP + Jitter MCP reads at YT ~05:28–07:08, "Now on to the episode", cut in just before Ridd's "can we talk a little bit about…" lead-in to shop.com); 00:26:47–end → **+3:00** (Dive Talent Network read at YT ~29:15–29:49, before "Derek's personal workflow"); YouTube adds a Dive Radio plug after the sign-off (YT ~50:32–50:58). Offsets measured from YouTube auto-captions (en-orig, yt-dlp, fetched 2026-11-03) aligned to the Descript words (~8,500 unique 5-gram anchors; per-minute medians +47–49 / +146–150 / +178–184 s), cross-checked against all 11 YouTube chapter starts (e.g. "Leveling up the quality of shop.com" YT 07:16 = D 00:04:48; "Derek's personal workflow" YT 29:50 = D 00:26:50; "What Derek is hiring for" YT 47:30 = D 00:44:30). Header mile markers below use the chapter-derived Descript times. Quotes carry the computed YouTube time.

## Takeaways (Granola)

Source: Granola note **"Editing Derek Briggs"** (`6fa2c3d7-d787-49fa-9143-81949b319e75`, 2026-11-02 07:36 EST, updated 08:16 EST) — recorded in Ridd's **Inflight** Granola account by mistake (not the Dive account); no folder. Ridd's typed private notes = highest weight; Granola-generated clip detail below them. Show Notes / Description belong to the Notion ship kit and are recorded here only for provenance.

**Ridd's typed Takeaways:**

- Sweating the details on the shop.com carousel
- He built a custom easing movement system that everyone could use at Shopify
- How to make an impact as an IC working at a company the scale of Shopify
- Creating systems for greatness to happen
- How Derek creates a data pipeline he can design against
- Derek thinks design engineer is the most important role right now

**Ridd's typed Description:** shop.com carousel details · custom movement/easing system · scaling impact as a principal IC · systems for greatness to happen · custom data pipelines to uncover opportunities · why design engineer is the most important role today · what Derek looks for in design candidates.

**Ridd's typed Clips:**

- The craft details Derek added to the shop.com carousel (Descript ~00:04:45–00:10:00)
- The movement system / easing curve he built for Shopify (~00:11:00–00:17:00)
- How Derek sets up his data pipeline for his morning coffee (~00:31:00–00:33:00) — *can skip the part about aligning with product partners* (~00:33:20–00:33:45)
- Alvish and Joe example (his initial clip) — the ideal pairing for quality (~00:40:20–00:41:20)

**Granola-generated clip detail (lower weight, checked against Descript):** SVG displacement map for liquid-glass button; canvas ambient background video; logo settles last, rating animates up, staggered entry/exit; all card motion on one variable, reverses on drag; Swiper → Motion. Ease-out cubic-bezier(0.2, 0.8, 0, 1) @ 400ms reads as 200ms ("soft close drawer"); ease-out spring 1,000ms with 800ms settle; bounce into free air, soft stop against hard surfaces; "when in doubt, ease out" — CSS only. Scheduled Codex automations overnight; morning review of conversion/criticality/ideas; ask "what should I measure?" Alvish = visual taste; Joe = how good it can feel in code.

**Show Notes (provenance only):** shop.com · Operate CRM (Alvish and Joe Bell) · Emil Kowalski's skills: https://emilkowal.ski/skill

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00:00 | YouTube cold open + intro (YouTube-only) | Not in Descript: YT 00:00–00:48 = cold open (Derek: "Design is now the differentiator because anyone can come up with an idea and ship it…") + Ridd intro ("raising the bar as a principal designer at Shopify"). Descript 00:00:00 = YT 00:00:48. | inferred |
| 00:00:00 | Catching up on Derek's journey | Header. Clerk → head of design at Hypermode (Kevin Van Gundy), acquired → Carl Rivera + Cynthia Savard recruit him to Shopify despite "founding designer type"; ~300 designers, multi-thousand engineers; with PMF you can invest in quality others can't afford. | descript-marker |
| 00:02:20 | Top-down permission for craft | Tobi + Carl's "Context" podcast; "design is the differentiator" vs people just prompting; Tobi's weekly memos share vision and give permission — those succeeding "just take it and run." | inferred |
| 00:04:40 | Ads (skippable; YouTube-only) | Not in Descript. Framer MCP then Jitter MCP reads at YT ~05:28–07:08. Offset steps +0:48 → +2:28. | inferred |
| 00:04:48 | Leveling up the quality of shop.com | Header. shop.com = all Shopify merchants; new homepage carousel shipped fine but "more opportunity for polish"; side project, not an initiative. | takeaway |
| 00:06:50 | Carousel craft details | SVG displacement-map liquid-glass button; merchant logo settles last; Swiper → Motion carousel/ticker; rating animates up; card-item motion tied to one variable, reverses on drag; 60fps. | takeaway |
| 00:08:40 | Ambient canvas + stagger | Canvas renders each video frame blurred behind the carousel as ambient light; deliberate stagger order in/out; same info, more delight — "care more." Ridd: separates you from everyone who's now "an animator with AI." | takeaway |
| 00:11:00 | Derek's custom movement and easing system | Header. Admin redesign movement system; cubic-bezier(0.2, 0.8, 0, 1) @ 400ms reads as 200ms; "soft close drawer"; 1,000ms ease-out spring with 800ms settle; car-braking rollback analogy. | takeaway |
| 00:14:00 | Bounce vs soft stop | Hard surface → soft stop (sidebar, avoid table text-wrap shifts); free air → subtle spring (floating Sidekick input). "When in doubt, ease out" — just CSS. Ease-in/out ~800ms for toasts. Ridd: updating his rules, "Derek starter kit." | takeaway |
| 00:18:19 | Making an impact as an IC | Header. Chose not to manage; jumps across teams to the most important problem; a day or two building trust first; leave teams with tools/reasoning; "less and less leadership needed" with AI. | takeaway |
| 00:21:30 | Automations surfacing opportunities | Loops on how customers use things propose ideas when something isn't converting; "obsessed with things not being good enough." | inferred |
| 00:22:50 | Systems so greatness accidentally happens | No dedicated DE role at Shopify yet; extract skills/systems/patterns into markdown deployed via skill packages "to where greatness accidentally happens." | takeaway |
| 00:25:00 | Spend time on the artboard | Contrarian: agents only do what they've learned; innovation is what's never happened; designers should own output quality, not their agents. | inferred |
| 00:26:47 | Talent Network ad (skippable; YouTube-only) | Not in Descript. Dive Talent Network read at YT ~29:15–29:49. Offset steps +2:28 → +3:00. | inferred |
| 00:26:50 | Derek's personal workflow | Header. Start from customer problems + North Star; pull analytics/usage/testing; loops on newly shipped work. | descript-marker |
| 00:29:23 | Building your data pipeline to design | Header. LLMs can build the tracking you want as a temporary experiment; "be ruthless" — never ship without success data. | takeaway |
| 00:30:50 | Morning-coffee review | Scheduled automations in Claude Code / Codex (Codex for analysis, Claude for code); daily review of criticality — usually "let it bake"; ask "what should I measure?"; agents pre-prepare PRs. (~00:33:20–00:33:45 partner alignment = skippable per Ridd.) | takeaway |
| 00:34:30 | Living agent profile | Summarize long agent conversations into themes → update profile so future agents don't need the same questions; artifacts to leave with teams. | inferred |
| 00:36:06 | Caring less about code quality | Header. "Hand-chiseled code" for years; Astra moment; care about codebase consistency (most important context), not wrapper divs; curate AGENTS.md nuggets. | descript-marker |
| 00:38:06 | Why Derek thinks design engineers are the most important role | Header. Tastemaker blending design vision + engineering speed; carousel v1 was model-built, his version shows what's possible. | takeaway |
| 00:40:20 | Alvish + Joe Bell | Operate: Alvish (visual taste, became technical) + Joe (how good it can feel in code) = ideal quality pairing. Ridd pushback: there aren't 100 Joes. | takeaway |
| 00:42:51 | Scaling impact through systems | Header. Hand DE approach as files to other areas' agents; Emil Kowalski's skills = "enterprise level deployment of taste"; don't hire tons — deploy horizontally through markdown. | descript-marker |
| 00:44:30 | What Derek is hiring for | Header. AI should make you 10x better, not 10x more work; what do you do with freed time; hunger; newer designers lack old habits; HTML Dog origin story; close. | descript-marker |
| 00:47:32 | Radio plug (skippable; YouTube-only) | Not in Descript. Dive Radio plug after the sign-off (YT ~50:32–50:58). | inferred |

## Notable Quotes

Descript edit-time (seconds interpolated); YouTube time = caption-located phrase (auto-captions), Descript = YouTube − offset.

- **00:04:05** (YT 00:04:53) — **Derek Briggs:** "It's, him sharing kind of his vision of where he wants things to be and giving you permission to go do it."
- **00:12:53** (YT 00:15:21) — **Derek Briggs:** "it still operates at visually 200 milliseconds. But if you watch the end of it, it just has this, what, what my team calls soft close drawer."
- **00:16:12** (YT 00:18:40) — **Derek Briggs:** "when in doubt, ease out."
- **00:24:17** (YT 00:26:45) — **Derek Briggs:** "so that those skills can then just be deployed through our skill packages throughout our designers and our engineers to where greatness accidentally happens."
- **00:25:24** (YT 00:27:52) — **Derek Briggs:** "agents are capable of doing what they've learned to do, and innovation happens in what has never happened before."
- **00:32:33** (YT 00:35:33) — **Derek Briggs:** "maybe you don't even know, like, what you wanna know. You should be asking, 'What should I measure?'"
- **00:38:37** (YT 00:41:37) — **Derek Briggs:** "I think that that role is still, maybe the most important role out there right now."
- **00:43:35** (YT 00:46:35) — **Derek Briggs:** "And that's enterprise level deployment of taste"
- **00:44:58** (YT 00:47:58) — **Derek Briggs:** "It's really important to me that folks are not using AI to do 10 times more work. It's important to me that it's making them 10 times better."
