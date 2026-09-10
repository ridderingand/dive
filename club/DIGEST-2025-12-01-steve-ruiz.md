---

type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Steve Ruiz
host: Ridd
title: "Is the canvas the future for AI?"
youtube_id: 3SvL0r-Lhh8
url: https://www.youtube.com/watch?v=3SvL0r-Lhh8
published: 2025-12-01
duration_min: 63
tags: [ip/dive-club, design-tools, ai-agents, ai-creative-tools, prototyping, founder-stories, tool-bending, creative-process]
flags: [coded-prototypes, inflight-relevant]
source: 2025-12-01-steve-ruiz.md
source_type: descript
slug: 2025-12-01-steve-ruiz
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Steve Ruiz (tldraw / canvas SDK) walks Ridd through a ~7-year path from fine-art MFA → Cambridge publishing/InDesign → eBooks/HTML-CSS → Framer Classic prototyping as the wedge into product design → Framer education → Play → open-source Perfect Arrows / State Designer / telestrator ink → founding tldraw — then argues the canvas is still early as a product paradigm and a natural home for AI collaborators. Arc: origin (art + analytical day-job imbalance; prototyping as specialization when Origami/early Framer rewarded appetite for complexity) → rapid career (first tech job 2017; working on tldraw by 2021) → pizza/Quora visual-computation obsession → State Designer needing responsive arrows → Perfect Arrows as design-taste expressed in code and as content that designers actually watch → telestrator + pressure-sensitive SVG ink (race-track polygon trick; PhDs in the DMs) → tool-design principles (decision-making tools; safety nets; precision vs breadth; don't force every decision to be precise) → canvas as commodity with text-editor-strength conventions (undo chunks, pinch-zoom origin, group rotate) that must match or feel broken — while tldraw increasingly *sets* those norms → conservative vs deep vertical uses of canvas (workflows, pharma process design, Padlet/HyperCard classrooms, board-game primitives) → canvas beats git history for ideation/compare/branch → Make Real (draw → vision model → working prototype on canvas; Sawyer Hood spark; draw-on-top iteration; Stripe screenshot prompts; pre–vibe-coding virality) → thesis that chat works for people *and* AI, so canvas (already great for human collab) should host AI collab too → early bots fail at coordinates → autocomplete body-horror → teach.tldraw.com box agents → **fairies** as narratively honest framing for low-skill agents (English/Tinkerbell not Irish) → visual multi-agent orchestration (hats/wings for identity; posture for state; summon/orchestrator mode demoed in Lisbon) → metaphor as ideation engine (enchanted ponds as folders; wands/MCP; gift scrolls as AGENTS.md-style context). Core claims: tool design is decision design with reversible compare loops; canvas conventions are non-negotiable commodities with thousands of micro-features; today's familiar whiteboards are an early generation — verticals and AI will look less like Miro; vision models made a hackable canvas the right substrate for visual prompts; multi-agent orchestration is easier to *see* and manage on a canvas than in terminal fleets; fairy metaphor unlocks product ideas in both directions (tech→story and lore→feature). Why it matters: a founder-level playbook for canvas SDK + AI (Make Real → fairies) plus a designer-who-codes origin story that maps tool taste onto open source and agent UX.

Descript speaker disclosure: labels are mostly generic — **Speaker 8** (and one `riverside_steve_raw-synced-video-cfr_…dive club_0147` continuation) remapped to **Steve** (guest: origin, tldraw, fairies); unlabeled **Speaker** / **Ridd** remapped to **Ridd** (host: interviewer; explicit `Ridd` label at ~00:21:22). Brief **Speaker 3** / **Speaker 5** / **Speaker 7** are short acknowledgments (Yeah / Nice / Yep / Oh yeah) — left as low-stakes; not treated as substantive speakers. ASR / transcript wording preserved in quotes (tldraw → "Tera" / "Teal draw" / "teal draw" / "deal draw"; fairies → "ferries" / "ferry"; ChatGPT → "Chate" / "chate"; tldraw.com → "teach do te draw.com"; Diagram → "Diagram"; Sawyer Hood; Lou Wilson; Orion Reed; Max Drake; Nima Cavallo). Timecodes and `## [timecode]` markers trusted from Descript (no ±30s caveat). Low-confidence quote attributions marked when the speaker label is ambiguous.

**Inflight note:** Code-on-canvas / Make Real future — localhost and live demos as the share surface.

## Takeaways (Granola)

From Granola Editing Notes "Steve Ruiz (tldraw / canvas)" (Editing Notes bullets as primary gold):

- Focus on rapid career progression story (7-year journey).
- Emphasize tool design principles and canvas advantages.
- Highlight AI integration as natural evolution.
- Include fairy system as concrete future vision.
- Technical depth on canvas behavior expectations.

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Fine art → publishing wedge | Steve: undergrad + MFA fine art; art writing in Chicago; wife’s Cambridge job → UK studio. Creative careers fragile; legal-research day job didn’t transfer (different laws). Excess analytical energy → close studio; learn InDesign; publishing design job; eBooks as HTML/CSS → web/product design. 2016: specialized product designers building things that work; Origami / early Framer (code left, preview right) as the way in. | takeaway |
| 00:04 | Framer Classic as differentiating factor | Ridd: many admired designers have Framer Classic or Origami origin stories — early tools + appetite for complexity = agency. Steve: make prototyping “the thing no one’s good at”; contract sideways; full-time within ~six months; then startup path. | descript-marker |
| 00:05 | Seven-year sprint to tldraw | Ridd zooms: art → prototyping → canvas SDK company fast. Steve: first tech job 2017; working on tldraw 2021 (~four years into gnarly dev-tooling; startup within five). Role everywhere: designer who prototypes (agency, product, Framer education/content “making more Steves”). Aggressive learning + teaching/workshops forced deeper React/systems knowledge; prototyping = ambitious short loops with quick feedback vs junior ticket slow-roll. | takeaway |
| 00:07 | Pizza / Quora visual computation | Chicago pizza job: square-cut vs pie-cut; order for 11 equal slices → whole kitchen stuck. Years later Quora question becomes popular; seeds lifelong “visual tricks / visual computation.” Coding later reconnects: shadows, splines; COVID-era Play prototyping + Twitter open-source visuals; gap after Framer → obsession with state machines/charts → State Designer app needing arrows. | inferred |
| 00:10 | Obsessing over Perfect Arrows | Graph must feel responsive; can’t pre-draw static arrows. Hundreds of box/arrow size/placement sketches → formalize in code — most complicated coding problem yet; highly subjective; “I know what a good-looking arrow looks like” after 20 years painting. Twitter audience follows the madness; open-source Perfect Arrows — unusual OSS: design answer expressed as code, not a known algorithmic target. Contrast with Framer education content no one watched — arrow threads with GIFs *were* the content designers cared about. | descript-marker |
| 00:16 | Telestrator + pressure ink | Need to draw on screen while phone-mirroring Play demos (no cursor “hand”). Built transparent Electron telestrator (events pass through until shortcut captures; drawings fade). Wanted pressure-sensitive stylus lines in SVG — browser has no variable-width stroke primitive; raster dab/line-segment fakes ugly. Race-track polygon idea (offset left/right by pressure) → months of public Twitter debugging; PhDs in DMs; learn 2D vectors to “make the ink.” | descript-marker |
| 00:21 | Appetite for hard problems → tool principles | Ridd: absurdly hard problems + fast learning + first-principles detail + teaching-as-learning → years inside tool design — what principles for a content series? Steve: all tools are decision-making tools (color picker vs hex). Good tools: safe reversible change; compare options; balance precision vs breadth so speed isn’t killed by forcing every decision to be precise; focus attention on the decision that matters. | takeaway |
| 00:24 | Innovation vs familiarity on canvas | Ridd: tension between improving micro-decisions and matching 1:1 familiarity. Steve: canvas can be commodity/OSS because users import Figma/Miro affordances and expect them to “just work” — but the known thing is *very* complicated. Text-editor undo convention: undo should jump to last pause chunk, not char-by-char — wrong = unusable, not “quirky.” Canvas equivalents: pinch zoom toward pinch origin (not screen center); multi-select rotate together. Toolmaker job: which of thousands of features must be identical vs legitimately different (alignment/justification). tldraw decisions increasingly set norms others copy (ClickUp, InFlight, Autodesk…). | takeaway |
| 00:28 | Canvas still early / deeper verticals | “Most of today’s apps are still conservative uses.” Beyond design-tool production assets: executable design / workflows; pharma canvas where past process is locked and future is editable; Miro’s strength (many use cases) is also a shallow fit — vertical products (onboarding, classrooms à la Padlet/HyperCard, AI-generated student content on canvas) go deeper and stop looking like whiteboards. Multiplayer underexplored; wants board-game starter kit (dice, decks) because select/move/drag/activate + collaborators are shared primitives. Familiar whiteboarding = early generation. | descript-marker |
| 00:32 | Figma/Weavy + code-on-canvas future | Ridd: week after Figma’s Weavy acquisition; more demos feel canvas-native — localhost versions side-by-side, branches, compare on infinite space. Steve: code is great but weak at ideation/compare; multi-agent worktrees still clunky. Infinite canvas for branch/compare/rewind beats git history for iteration count — environment geared to dialing-in decisions. | inferred |
| 00:34 | Make Real and AI demos | Steve presenting fairies at Lisbon AI Conference. Marketing thesis: build cool different things in public; unanswered questions attract builders. Make Real (2023): draw wireframe → vision model as “4,000-year-old senior web developer” → working site *on* the canvas (Sawyer Hood Figma prototype spark). Draw-on-top + empty-box previous-code loop; screenshot style refs (Stripe); UX dial diagrams — pre–vibe-coding first working artifact for many; days of virality; fundraising easier. “If vision models dropped and I hadn’t built tldraw, I would’ve started then” — need hackable canvas for visual prompts. Real-time image-gen-while-drawing demo taught: demos are expensive. | takeaway |
| 00:39 | Canvas as collab home for intelligences | Early-2024 thesis after ChatGPT shock: chat works for people *and* AI; canvas already works for people — should it work for AI? Unique canvas collab properties vs chat/sheets: parallel work without feed distraction; cursor presence; clustering; async comments; easy A/V modalities. Want some cursors to be humans and some AIs sharing the same make/see powers. Prototypes: bots bad at coordinates (chess/checkers Xs wrong; know they’re wrong; still miss). Diagram (Jordan Singer → Figma) hit same wall. tldraw’s lo-fi creative canvas let them still ship entertaining “pointing at the future” demos. | takeaway |
| 00:45 | Autocomplete → teach.tldraw.com → fairy framing | Lou Wilson / Orion Reed autocomplete: predict next three actions from last three — circle→face→line-of-circles→finger-tree body horror. Adapted into teach.tldraw.com: placeable prompt boxes generating tldraw primitives (not just images); cat + candle demo (XML shapes + screenshot → “blows out” candle). Skill level too low to call “virtual collaborators” honestly → ghosts/spirits → **fairies** (cursor-sized, humanoid, not bonded): pick English/Tinkerbell (charming) over Irish (terrifying) / Scandinavian; London-appropriate. | takeaway |
| 00:49 | Why canvas wins multi-agent UX | Vibe-coding five agents: which terminal / which context / who’s waiting. Canvas answers: different hats/wings/colors; visual state (waiting/thinking/working — want all maxed); see what they’re on by cursor position. Lisbon demo: give oversized task → fairy flaps, thinks, summons help, becomes orchestrator assigning tasks — small rules, emergent behavior; eight agents at once. Bad: model doesn’t know text size / stacking. Good: identity, progress, interrupt (“bad fairy”). Thesis uncreative: good for people → good for AI. Team: Max Drake, Lou Wilson, Nima Cavallo — enchanted-pond metaphor = folder/domain agent; MCP as eyes-roll-back / butterfly whisper; fairy gifts/scrolls = leave context files (AGENTS.md energy). Metaphor runs tech→story and lore→feature. Uncharted: multi-human + multi-AI realtime same doc; game-AI state machines (StarCraft/RPG aggro) + LLM inside states. Close: mutual thanks; more Twitter demos. | takeaway |

## Notable Quotes

Speaker labels remapped: **Speaker 8** / riverside Steve id → **Steve**; unlabeled **Speaker** / explicit **Ridd** → **Ridd**. Transcript wording preserved (ASR quirks included). Low-confidence noted where label was ambiguous.

- **00:00** — **Steve:** "creative careers are really, really fragile."
- **00:01** — **Steve:** "I had a lot of like excess analytical, uh, mental energy going on"
- **00:03** — **Steve:** "the really good designers were where they were building stuff that actually worked."
- **00:04** — **Ridd:** "a lot of the designers that I look up to, they have these origin stories that are tied to either Framer Classic or Origami."
- **00:04** — **Ridd:** "you had to have an appetite for complexity back then to be able to learn that"
- **00:05** — **Steve:** "this is gonna be the thing that I'm gonna get really good at, because no one's good at this."
- **00:06** — **Steve:** "my first job in tech was 2017. I started working on Tera in 2021."
- **00:06** — **Steve:** "I learned to code in 2017 and then I was working on some pretty gnarly dev tool type stuff, like within four years"
- **00:11** — **Steve:** "I needed like to come up with a way to draw a arrow between these two boxes."
- **00:11** — **Steve:** *[low-confidence label: riverside Steve id]* "I'm just drawing you know, hundreds of boxes and arrows and combinations of different sizes and placements"
- **00:12** — **Steve:** "there is no answer to this. It's just like, what do I think is a good looking arrow?"
- **00:12** — **Steve:** "I've been painting and drawing for like, you know, 20 years. I go, I know what a good looking arrow looks like."
- **00:13** — **Steve:** "it was kinda like a design answer, you know, but expressed through code"
- **00:14** — **Steve:** "You probably wouldn't obsess over arrows, but if you did obsess over arrows like, and, and you had good tastes in arrows, like this is probably what you would end up with."
- **00:16** — **Steve:** "what I really wanna be able to do is just draw on top of my screen."
- **00:17** — **Steve:** "It's called a telestrator."
- **00:21** — **Ridd:** "you have this appetite for absurdly hard problems that most people would never go down that rabbit hole."
- **00:22** — **Steve:** "I think of all tools as like kind of decision making tools"
- **00:22** — **Steve:** "a good tool will allow you to, to do that to, to very safely make a change and go back"
- **00:24** — **Steve:** "good tool will allow you to kind of focus on the decision that you're making or the work that you're doing… without burdening you with having to make all those other creative decisions."
- **00:25** — **Steve:** "when you use a Canvas product, you, you automatically kind of bring with you tons and tons and tons of affordances that you've picked up by using Figma or by using, Miro"
- **00:26** — **Steve:** "if it doesn't work that way, it's not like, oh, well this text editor just works a little different… It's like, I cannot use this."
- **00:26** — **Steve:** "if you pinch on the canvas. the thing should zoom in or should zoom out, but it shouldn't zoom out towards the center of the screen. It should zoom in to where you're pinching."
- **00:27** — **Steve:** "if you get one of those really important conventionalized, feature's wrong, like, it just is like, well this is not a text editor, is it?"
- **00:28** — **Ridd:** "most of today's apps are still conservative uses of the technology."
- **00:30** — **Steve:** "there's interest in developing those, those different verticals much deeper, in ways that eventually don't really look like whiteboards."
- **00:31** — **Steve:** "the multiplayer canvas experience is like so good and so Underexplored"
- **00:33** — **Steve:** "code great. It's really not good at that ideation stage. It's really not good at making decisions and comparing things together."
- **00:34** — **Steve:** "way easier to do on the canvas than. in a get history or something"
- **00:35** — **Steve:** "the best way to market a tool like this, is you just build with it."
- **00:36** — **Steve:** "we did Make Real, which is where you could draw a website or draw something and then, select it and click this button called Make Real, and it would create a website."
- **00:38** — **Steve:** "for a lot of people, this was their first time making something that works"
- **00:39** — **Steve:** "once the vision model drops, I would've started building teal draw… in order to take advantage of this wonderful technology, you're gonna need a really good hackable canvas."
- **00:40** — **Steve:** "chat works really well for people. it just also works well for, for ai. Canvas works really well for people but uh, should it also just work for ai?"
- **00:42** — **Steve:** "I wanna collaborate with ais on the canvas. I want little virtual collaborators."
- **00:43** — **Steve:** "Is it possible today? And we looked into it and we prototyped and it is not possible today."
- **00:44** — **Steve:** "the Bots were just bad. They were bad."
- **00:48** — **Steve:** "it's extremely shitty but amazing."
- **00:48** — **Steve:** "framing it as like virtual collaborators, like, seems wrong… maybe they're, they're ghosts… Or they could be like, fairies."
- **00:49** — **Steve:** "don't read about Irish fairies bad."
- **00:49** — **Steve:** "it's very hard to re member which agent is doing what. Which agent is which and what context they have."
- **00:50** — **Steve:** "That actually works really well in the canvas because they just look different."
- **00:51** — **Steve:** "I want the agents, the ferries to like self-organize around solving that task."
- **00:52** — **Steve:** "that ferry that you talk to will kind of switch into an orchestrator mode"
- **00:53** — **Steve:** "the thesis isn't very creative. It's just like, well, it's good for people. It'll be good for AI too."
- **00:54** — **Steve:** "what if there was like a pond on the canvas… an enchanted pond"
- **00:54** — **Steve:** "a metaphor is actually work. they work in both directions"
- **00:56** — **Steve:** "how do you do human plus AI plus multiple ais and, and multiple humans collaborating in a single document in real time, there are very few companies… working on that problem"
- **00:56** — **Steve:** "we are in, like massively uncharted territory"
