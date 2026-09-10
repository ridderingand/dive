---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Joey Banks
host: Ridd
title: "Strategies for design systems and flying in Figma"
youtube_id: avzV2Uzdoe4
url: https://www.youtube.com/watch?v=avzV2Uzdoe4
published: 2023-05-04
duration_min: 43
tags: [ip/dive-club, design-systems, design-tools, craft, career-growth, collaboration, creative-process, feedback]
flags: [prototype-feedback, inflight-relevant]
source: 2023-05-04-joey-banks.md
source_type: descript
slug: 2023-05-04-joey-banks
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Joey Banks (design systems at Webflow; ex-Twitter design systems; ex-Figma designer advocate; author of widely used iOS Figma kits) walks Ridd through shipping and maintaining design-system craft in Figma — May 2023 Deep Dive. Arc: fear of publishing the first iOS kit (half-million+ downloads; production trust; start small with recreatable primitives) → origin story (screenshot/AirDrop/rectangle-mask workflow → bring real iOS components into Figma to finish the last 10%) → blank-canvas / first-Lego problem; WWDC prep as yearly refactor+add cycle → component properties as variant-reduction + design↔eng naming alignment → props vs full-variant matrix tradeoff (maintenance vs glanceable states; docs/examples must carry the load) → docs: keep tagline/descriptions in Figma, deep docs external → career: Scoot (only designer) → Type 1 diabetes diagnosis at 23 → Verta Health (fell in love with design systems + Figma 2016) → Twitter (first full-time DS role; 300+ designers; relationships as service model; Figma teaching) → Webflow (~7 months in): catch Figma libraries up to coded production components; Figma→Slack version stream + EightShapes Specs for eng inspect → one DS for designer/dashboard/marketplace; split light vs dark libraries; one page per component → day-to-day is communication, pattern consolidation, ahead/behind flexibility; John Doman screw→nail metaphor → weekly office hours for early WIP partnership → #1 Figma mistake: not planning multi-platform library scale early; sibling/local-component two-way cycle → shortcuts + FOMO filter (love the work vs tangential AI tooling; 2023 "year of the button" / soft skeuomorph return) → Dive Club Level Up with Figma course pitch. Core claims: design systems succeed as relationships and service, not siloed Figma production; optimize consumer designer experience even when maintenance cost rises; component properties win when naming/docs replace the old full-state canvas; plan library splits early; push local explorations upstream. Why it matters: a concrete Figma DS playbook (kits, props, library org, eng handoff plugins, office hours) from someone who built community iOS kits and ran systems at Twitter and Webflow.

ASR/Descript speaker & proper-noun normalization: Descript labels **Joey** (guest) and **Ridd** (host); `##` section markers present and trusted. Prose cleanup for summary/mile markers (quotes keep transcript wording): tap bar → **tab bar**; ion properties → **icon properties**; fig's / Figma s → **Figma's**; combin. (truncated) → combinations; New Eight Shapes / eight shapes → **EightShapes Specs** (Nathan Curtis); s geomorphic / s Geomorphic → **skeuomorphic**; "available within production, but we didn't have a lot of things available in." → available in **Figma** (truncated). Scoot, Verta Health, Webflow, Twitter, WWDC, Jordan Singer / Diagram, John Doman kept as spoken. Timecodes and section markers trusted from Descript (no ±30s caveat). Duration: raw frontmatter `duration_min: 43`. Descript project (notes only): https://web.descript.com/30f992d7-da66-46e4-9346-cac8d62f8779/f774c

**Inflight evidence (flags):** (1) Webflow uses **Figma to Slack** so Figma version history posts to a public Slack channel — eng/design stream of library updates (~00:19). (2) Favorite weekly practice: office hours where designers share what they're working on at the start of a design phase so DS can partner early, modify patterns, or build missing components (~00:28). → `prototype-feedback` + `inflight-relevant`. Skip `coded-prototypes`: Webflow had coded production components ahead of Figma and Joey's work was catching Figma libraries up to code / EightShapes inspect — not an explicit shift to sharing coded/live-preview artifacts as the review surface. Figma kits / DS craft alone does not earn coded-prototypes.

## Takeaways (Granola)

NOT FOUND — no Granola Editing Takeaways page for Joey Banks.

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Shipping the iOS kits | 500k+ downloads; fear because kits land in others' production / design reviews; trust = organization + craft; started small with components he could recreate accurately; maintenance of accuracy across dozens of components is ongoing. | descript-marker |
| 00:01 | Why the kits exist | Screenshot → AirDrop/save → mask rectangles over phone UI was frustrating; polished feature mocks on blurry inaccurate chrome; goal = finish last 10% by recreating iOS components inside Figma. | inferred |
| 00:02 | Blank canvas / first Lego / WWDC | Hardest part is starting: one switch/button nests into the full iOS model. First kit (iOS 13): start with primitives on every screen (status bar, tab bar, buttons, type, color). Each year builds on that file; near WWDC refactor for new Figma features then race Apple's new UI in launch week. | descript-marker |
| 00:05 | Component properties | Excited + scared of full-library refactor. Props reduce 32/64 variants → ~4 while raising state surface; think about end consumer (what they edit/hide). Props name layers like code (label, icon) so eng inspect aligns — design↔eng win. | descript-marker |
| 00:07 | Props vs variants balance | Full variant matrix = every visual state glanceable; props = less production but states invisible → need docs/examples + clear property naming on instance. Balance complex mega-components vs splitting for real use cases; don't degrade consumer designer UX for maintainer convenience. | descript-marker |
| 00:09 | Documentation placement | Docs are a DS superpower. Figma isn't a docs tool and isn't org-wide accessible — keep tagline + component description (+ external doc link for eng) in-file; pour deeper docs outside so design stays in Figma and docs/code live externally. | inferred |
| 00:11 | Career: Scoot → diabetes → Verta | SF Scoot (only designer, Sketch); Type 1 diabetes diagnosis at 23 flipped life → joined Verta Health to help people with diabetes; first Figma ~2016; love of design systems from shipping faster for patients instead of recreating sporadic buttons/palettes. | descript-marker |
| 00:14 | Twitter: celebrity files + scale jump | Twitter got Ohio student closer to SF design culture; opening product Figma files felt like meeting a celebrity. Jump ~100 → ~7k people; joined to learn DS at that scale and apply Figma knowledge to a product he loved. | inferred |
| 00:15 | First DS role / relationships | Always has imposter syndrome. First full-time DS job = responsibility to build components others trust; DS is relationships + service — see usage, shape UI, feed back into system. 300+ Twitter designers; small DS team; lots of Figma teaching (auto layout, props). | inferred |
| 00:18 | Webflow + Slack/Specs handoff | Joined Webflow (~7 mo) to be back in design tools without knowing the product cold. Coded components existed in production; Figma lagged latest auto layout/props — months of production-file refactor. Techniques: **Figma to Slack** (version history → public Slack for eng/design visibility); Nathan Curtis **EightShapes Specs** plugin replaced hand-building every combination for eng inspect. Inflight: Slack drops of library updates. | descript-marker |
| 00:20 | Library org: theme split + one page/component | One DS for designer + dashboard + marketplace. Left single file with light+dark; split libraries by theme so product designers aren't constantly flipping themes. Abandoned category pages → one page per component (categories differ by person; remove find-friction). Light/dark dual-file maintenance ≈ same workload as dual themes in one file; bias consumer UX over maintainer convenience. | descript-marker |
| 00:23 | Day-to-day + ahead/behind | Unexpected job = communication + pattern answers (consolidate lookalike patterns). Stay one step ahead or behind product — never "don't build that, we can't support it yet." John Doman metaphor: swap the screw for a nail — offer a better component for the job without removing designer flexibility. | descript-marker |
| 00:27 | Audit usage + weekly WIP office hours | Audit via a11y/best-component knowledge + UI smell (e.g. radio with only one option → button/link). Constant job on a fast team. Avenues: weekly meeting where designers share WIP at design-phase start so DS can partner early even before a component exists. Inflight: prototype-feedback — early WIP share → DS partnership. | inferred |
| 00:29 | Not just siloed in Figma | Thought DS = all-day Figma production; realized that misses velocity/quality/component surface. Workload comes from relationships across Figma, docs, and eng partnership. | inferred |
| 00:30 | Common Figma mistake: scale | #1 pitfall: build for today only. iOS+web+Android+styles in one file works small; at scale grabbing "the button" is ambiguous. Separate platform libraries + tokens on top early — late cut/paste risks breaks. Match library splits to existing team/platform/file org; don't over-fragment; enable more DS contributors without huge disruptive publishes. | descript-marker |
| 00:34 | Local → sibling → core cycle | Most designers are systems-minded locally. Value in finding local/feature components and pushing upstream. Sibling/product library sits under core, reuses tokens/core components, and feeds local explorations back up — two-way cycle grows the system faster and reuses designer work. | inferred |
| 00:36 | Efficiency + shortcuts | Stay current with Figma features and peer practice (e.g. text-as-components before text styles). Favorites: Option W/A/S/D align; Option V/H center; Shift A auto layout; Cmd Shift A remove. Learned align shortcuts in 2021 after using Figma since 2016. | descript-marker |
| 00:39 | FOMO filter + year of the button | Overwhelm of AI/tooling FOMO: ask whether a new thing helps the work you love or is tangential (still study its design — e.g. Jordan Singer / Diagram). 2023 feels like "year of the button" (camera/reflection/soft skeuomorph throwbacks); inspiring for someone who entered in the flat era and missed skeuomorphic craft — borrow shadow/detail learnings without recreating full textures. | inferred |
| 00:42 | Level Up with Figma course | Dive Club course: beginner→advanced; recorded + live + guests; goal = not be blocked by the tool when every modern component uses latest Figma features. | descript-marker |

## Notable Quotes

- **00:02** — **Joey:** "I think the hardest part, honestly, is just getting started."
- **00:06** — **Joey:** "Component Properties have done an excellent job at bringing designers closer to engineers within the file"
- **00:09** — **Joey:** "documentation is a design system superpower."
- **00:16** — **Joey:** "design systems is about relationships and it's such a service model"
- **00:19** — **Joey:** "we've been using Figma to slack, which allows you to take all of your version history and Figma and post it to a public, slack channel."
- **00:25** — **Joey:** "we're trying to look at people who might be nailing a screw into the wall and just replace that, screw with a nail"
- **00:28** — **Joey:** "One practice that I love is just having a weekly meeting where designers can meet with us and can share what they're working on"
- **00:31** — **Joey:** "not thinking of scale and building for where the company is at today and not planning for where the company might be in two or three years."
