---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Henry Modisett
host: Ridd
title: "Designing a unicorn AI startup"
youtube_id: RO9KwjKIrXI
url: https://www.youtube.com/watch?v=RO9KwjKIrXI
published: 2024-09-04
duration_min: 50
tags: [ip/dive-club, design-engineering, design-systems, prototyping, code-as-material, founder-stories, product-strategy, feedback]
flags: [coded-prototypes, prototype-feedback, inflight-relevant]
source: 2024-09-04-henry-modisett.md
source_type: descript
slug: 2024-09-04-henry-modisett
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Henry Modisett (Head of Design, Perplexity; founding designer; ex–Quora / Gmail era) walks Ridd through designing a unicorn AI consumer product from day-zero React components through generative UI — Fall 2024 Deep Dive / Ep.70 (unicorn AI startup; NOT the later culture episode). Arc: Quora co-founders knock → consultant → first move = React component library (grid/type/color/buttons) before product exists → NL→SQL demos → LLM+search → Discord bot → crappy React → tweet virality (Jack Dorsey on Twitter-only search) → frame as colloquial **answers** not AI novelty → cognitively fast / good defaults / don't anthropomorphize AI → founding-designer whatever-it-takes pathfinding (~90% taste/conviction; mockups can't share the real experience) → **UI code > static Figma**: uncomfortable in static tools; Figma = napkin/layout; interactive/real thing lives in code; ground truth is the code; show someone → they find a bug → emotional ownership ("I made that bug") + empowerment to fix → design culture = Ocean's 11 squad of founding-designer types; kill over-exploration / weekly critique / visual polish sessions; Notion vision docs → build; clear UX decision rights; go with gut, fix next week → quality = empowerment not process: designers who code ship unprompted polish PRs → hire designer-who-codes after ~6 months (no eng knew CSS; vacation disaster) → spectrum: voice (known north star → After Effects / Figma prototype; push-to-talk > wake word) vs Pages (unknown → terminal API calls before any UI) → consumer gravitational pull / stumble-drunk simplicity; don't innovate interaction design; scaling simplicity is the hard part; more powerful without feeling more complex → generative UI: abstract primitives (entity comparison); napkin thesis + guidance then build in code collaboratively — not Figma handoff of all states; accept percentage outcomes → AI anxiety wash: shortcuts/internationalization; trajectory not papers; assume models improve → radio-era prediction: commoditized AI APIs → hardware competes on industrial design → hot take: brand as platform for designer expression, not stenciled guidelines. Core claims: component toolbox before product; ground truth = code; velocity via decision rights + designer-coders; generative UI is a systems/guidance problem not mockup coverage. Why it matters: strongest Inflight gold in batch11 — coded share/review culture, Figma-as-napkin → collaborative code build, and polish-as-empowerment PRs.

ASR/Descript speaker & proper-noun normalization: Descript labels **Henry** (guest) and **Ridd** (host). Prose cleanup: perplexity → **Perplexity**; Ivan from Notion kept; Dan Lasavita / Play co-founder kept as transcript; Fee (brand designer); Gunnar (voice designer); Quora / Gmail / Under Consideration "before" blog kept. Quotes keep transcript wording. Timecodes and section markers trusted from Descript (no ±30s caveat).

**Inflight evidence (flags):** (1) ~00:12–00:14 — works in UI code for interactive/real thing; Figma only napkin sketches / layout / color; uncomfortable in static tools; "the ground truth is the code"; when design is right in code, "we're done"; show someone → they find a bug → hurt/ownership ("I made that bug") but can fix — empowerment + accountability. → `coded-prototypes` + `prototype-feedback` + `inflight-relevant`. (2) ~00:21–00:25 — designers who code make unprompted polish PRs; quality = empowerment not process (vs Frankenstein / resell-to-eng death). → `coded-prototypes` + `inflight-relevant`. (3) ~00:35–00:38 — generative UI: napkin drawings + thesis/guidance then build in code collaboratively with eng — not Figma handoff of all states. → `coded-prototypes` + `inflight-relevant`. Gold: strongest Inflight-shaped share/review-via-code culture in this batch.

## Takeaways (Granola)

From Granola Editing Notes "Editing Henry Modisett" (Aug 31, 2024 9:19 PM EDT) Takeaways (primary gold):

- ⭐ Step 1 even before knowing the product: build a component system in React (grid/type/color) — toolbox of interactive elements ≠ full design system; don’t throw baby out with bathwater
- Early Perplexity brand via non-tech agency for market contrast; Henry positioned the product; founding designers = rapid pathfinding + conviction + evangelism
- “UI Code” > static Figma for dynamic products — empathy, emotional attachment, accountability (“I made that bug”); Figma = napkin sketches
- Velocity over exploration/debate/polish; clear decision rights (UX → designer decides); go with gut, fix later — quality becomes empowerment not process when designers can code
- Power laws in UI — chase ROI; obsession only where it matters; good libraries make it hard to look shitty
- ⭐ Consumer simplicity: don’t innovate on interaction design; feel familiar / stumble-through-drunk; scaling simplicity is the hard part; designers as teachers who remember first-time-user eyes
- ⭐ Dynamic interfaces = UI systems problem — guidance not all-state mockups; abstract primitives (entity comparison); accept percentage outcomes
- Didn’t want to anthropomorphize the AI (extra cognitive load); cognitively fast product with good defaults

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Perplexity origin / React first | Quora co-founders → only designer they knew; consultant; first build = React component library (buttons/grid/type/color) before product known; NL→SQL → LLM+search aha; Discord bot → React → tweet (no GTM); Twitter-only search Jack-retweeted; traffic didn't stop. | descript-marker |
| 00:03 | Component system ≠ Figma DS | Anti–design-system pendulum throws baby out; Ivan/Notion "no DS" = probably no Figma DS — eng still needs reusable code; ground truth is the code; toolbox of interactive elements so you can assemble unknown product fast. | takeaway |
| 00:05 | Answers framing / cognitively fast | Colloquial **answers** (universal); product must be cognitively fast + good defaults; market was AI-forward tech demos — packaging/meeting people where they are; utility like a subway — brand pulled back; don't anthropomorphize / make users think about AI. | takeaway |
| 00:09 | Brand contrast + recruiting | Brand strategy = contrast (non-tech agency aesthetic); invest early to look bigger/serious; early brand ROI is recruiting — proud-to-wear self-fulfilling. | descript-marker |
| 00:09 | Founding designer role | Whatever-it-takes: strategy + design + eng; rapid interactive pathfinding; try/hate/share revolutions; ~90% own taste for novel work; mockups/prototypes in tools don't let people experience the real thing — visual feedback useless early; halfway feedback needs shared vision. | takeaway |
| 00:12 | UI code > static tools | Most jobs wrote UI code; thinks clearer in user environment; bored/uncomfortable in static tools; Figma = color/napkin/layout only; interactive/real thing → code; when design is right, ship is done; show someone → bug → "I made that bug" emotional ownership + fix empowerment. Inflight: coded-prototypes + prototype-feedback. | takeaway |
| 00:15 | Design culture / Ocean's 11 | Fish-out-of-water in rigid process (Gmail Photoshop 5-versions boards; Quora all-designers-code Python); want versatile founding-designer types (grit, conviction, evangelism) cross-pollinating; kill over-exploration / critique / visual sessions; Notion vision doc → build; ship mountain of shareable work. | descript-marker |
| 00:19 | Decision rights / velocity | Clear who decides; UX → designer decides (brain trust optional); most micro-decisions don't matter — gut then ship; non-deterministic UX = mold clay after anything works; last week's miss fixable this week if pace is invested. | takeaway |
| 00:21 | Quality = empowerment | Power laws / chase ROI; not every surface equal; good component library = hard to look shitty; designers who code fix polish unprompted in an hour — not a process problem; reward unprompted PRs; resell-to-eng is where polish dies. Inflight: coded-prototypes. | takeaway |
| 00:25 | Hiring designer-coders | Solo ~6 months (product + before-brand Under Consideration); hire Fee for brand; then replace-self with designer who codes (no eng knew CSS; vacation disaster); spectrum of eng capability down to prototyping curiosity — production Safari bugs / reviews are a lot to ask. | descript-marker |
| 00:27 | Voice vs Pages process | Voice = known north star → brand/interaction/AE animation prototypes (Gunnar); push-to-talk > wake word (speed of thought). Pages = unknown → terminal API calls proving section gen before any interface. Process follows uncertainty. | descript-marker |
| 00:31 | Consumer simplicity / gravity | Curse of knowledge; designers as teachers; gravitational pull / stumble-drunk / no wrong path; don't innovate interaction design — familiar; if you need a teach UI you lost; Medium day-1 clean = few features; scaling simplicity is hard; AI classifies/assembles opinionated UIs on demand; more powerful without feeling more complex. | takeaway |
| 00:35 | Generative UI / napkin→code | Perfect representation + familiar actions (Nvidia graph not markdown; booking-style forms not chat); trap = innovating interaction; process = thesis + use cases + napkin drawings → code collaboratively — not all-state mockups / Figma handoff; entity-comparison primitive; accept percentage outcomes (LLM markdown vomit). Inflight: coded-prototypes — napkin+thesis then build in code. | takeaway |
| 00:40 | AI transition / what's possible | Wash anxiety; new tools/shortcuts (multilingual before login); startups disrupt stuck incumbents; believe in useful/fun first; skip arXiv — tech demos show capability; harder = trajectory; assume models improve fast — start building now. | descript-marker |
| 00:44 | AI hardware = radio design era | Pre-2000s radios: solved tech + agnostic content → industrial design was the edge; commoditized AI APIs + natural-language entry → wave of hardware competing on form/function. | inferred |
| 00:48 | Brand as designer platform | Against stencil brand guidelines / protect-the-brand conservatism; logo stable, implementation dynamic across contexts/users; brand should be a platform for creative people to express — cohesion via collaboration, not 10-year freeze. | descript-marker |

## Notable Quotes

- **00:00** — **Henry:** "the first thing I did was build a component library for them. We didn't know what the product was going to be."
- **00:01** — **Henry:** "I built all this for them in react as, you know, kind of the first thing, not knowing what we were going to build."
- **00:04** — **Henry:** "the ground truth is the code, because that's what users interact with, right?"
- **00:06** — **Henry:** "it needs to be cognitively fast. It needs to be like easy to understand, easy to try."
- **00:08** — **Henry:** "I really don't want people to have to think about AI when they're using perplexity."
- **00:11** — **Henry:** "I would say like 90 percent my own taste and judgment."
- **00:13** — **Henry:** "I would say at this point I'm kind of uncomfortable in like a static tool."
- **00:13** — **Henry:** "anything that's, uh, interactive or, , meant to be the real thing. I'm more comfortable in code."
- **00:14** — **Henry:** "I'll show somebody and they'll, find a bug and I'll be like, I'll be hurt. I'm like, I made that bug."
- **00:19** — **Henry:** "If it's a question of user experience, the designer on the product needs to just decide"
- **00:22** — **Henry:** "there's power laws everywhere."
- **00:22** — **Henry:** "It should be really hard to make something that looks shitty."
- **00:23** — **Henry:** "if you have designers that code, this just happens."
- **00:23** — **Henry:** "It's not like a process problem. It's just like an empowerment problem."
- **00:32** — **Henry:** "You could be squinting or you could be drunk. You're just like falling through it."
- **00:32** — **Henry:** "don't bother trying to innovate on interaction design because most of the time it's not worth it."
- **00:34** — **Henry:** "every day the product needs to get more powerful without feeling more complex."
- **00:37** — **Henry:** "here's the plan to represent that with like a thesis and, and, you know, maybe some use cases and a few napkin drawings, and then just get into the code."
- **00:38** — **Henry:** "It becomes much more of a collaborative end to end product crafting process, rather than like design, handoff to engineering"
- **00:39** — **Henry:** "part of designing a product like this is being okay with percentage outcomes."
- **00:48** — **Henry:** "the brand should be a platform for them to be expressing themselves."
