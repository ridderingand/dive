---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Glenn Hitchcock + John Pham
host: Ridd
title: "Design engineering deep dive with Vercel"
youtube_id: U9X2tgPYcNk
url: https://www.youtube.com/watch?v=U9X2tgPYcNk
published: 2024-04-11
duration_min: 42
tags: [ip/dive-club, design-engineering, code-as-material, prototyping, collaboration, craft, design-tools, feedback]
flags: [coded-prototypes, prototype-feedback, inflight-relevant]
source: 2024-04-11-glenn-hitchcock-john-pham.md
source_type: descript
slug: 2024-04-11-glenn-hitchcock-john-pham
generated: 2026-09-11
generator: dive-club-ideas
schema: 1
---

## Summary

Glenn Hitchcock (product design, Vercel; ex Sketch) and John Pham (design engineer, Vercel; joined as software engineer) on how design engineering works as a formal third arm of Vercel's design org (~6 DEs alongside Brand/Creative and Product Design; design team ~20 in a ~400-person company). Arc: craft + taste at the design↔engineering niche speeds process — static Figma markup → quick jam → John builds → proper critique from someone with aesthetic taste → **John: prototyping easing/keyframes in Figma is wasted effort**; target medium (Chrome/Safari) has different quirks; designer ships ~5 static frames, DE builds in code and **sends a preview link**, sometimes scaffolding a playground so Glenn controls animation variables without being blocked → **no handoff**; first sketch is up for debate → Figma stays a soft source of truth (desktop/mobile/tablet, not a Bible) → primitives yes, systemizing every view no → role lines: designers-who-coded inform taste but aren't expected to ship code day-to-day; **DEs' primary artifact is code**; small features DE may own end-to-end and John jumps straight into the browser → skill spectrum (3D/math, shadcn/ui systems, interaction/a11y, marketing psychology) → multiplicative reuse even on marketing (Contentful-editable layouts; "How systematic can this be?") → DE creative direction via modular Contentful types → continuous WIP collab (messy Figma comments welcome; **open Slack channels + targeted asks for Bezier/copy**) → Maggie Appleton chop-quote: shared artifact waiting on tooling → DE as temporary title toward **builder** → opposite growth paths (John: handoff→collaboration taught design *why*; Glenn: Sketch/Xcode fidelity → SVG/a11y/perf translation) → Kathy spun DE pillar so polish doesn't drown under feature scale → craft as differentiator when tech makes building easy → homepage restraint (narrative > mousetrap bells) → hire for fun/pushed-axis portfolios + creativity in FE, not copy-of-someone → **design execution gap**: picture it but can't fully execute yet; narrow that gap = builder. Core claims: code (not Figma keyframes) is the right prototype medium; preview links + playgrounds close the designer↔DE loop; no-handoff culture + Slack WIP drops are the collab system; DE title is a bridge toward builder. Why it matters: early Inflight-shaped Vercel episode — coded prototypes as the artifact, preview-link feedback, Slack prototype drops, explicit Figma-easing waste claim.

**Inflight note:** John: wasted effort to prototype easing/keyframes outside the target medium (~00:06:00–00:06:21); Glenn's ~5 frames → jam → code → **preview link**, playground so Glenn tunes variables without blocking on John (~00:06:56–00:07:14); no handoff — first sketch fully up for debate (~00:07:26–00:08:04); John jumps straight into code (browser box faster than Figma) for small features (~00:12:37); code is the DE's primary owned artifact (~00:11:38); open Slack channels for visual WIP posts + targeted specialist feedback (~00:20:54–00:21:31).

**ASR note:** Speakers **Glenn**, **John**, **Ridd**. Corrections: Vercelle / Versal / for sale → **Vercel**; Versailles Ship → **Vercel Ship**; Glen (implied) → **Glenn**; Rano / Rauno on Henry → **Rauno** (Freiberg); Xon engineers → **design engineers**; Shad CNUI → **shadcn/ui**; Macless → **macOS**; Daryl's gin → **Daryl Ginn**; Red → **Ridd**; Rufus Overcome refresh → **Vercel.com refresh** (ASR garble). Timecodes trusted (Descript). Granola-weak (Notion scratchpad while editing; no Granola Editing note).

## Takeaways (Granola)

Granola-weak: Notion episode Scratchpad while editing (no Granola Editing note). Normalized from that scratchpad — do not invent a Granola note:

### Paths into design engineering
- Glenn and John arrived from opposite directions (design vs engineering) — full perspective
- Some product designers "could even be considered design engineers because they code their own solutions" — less a title, more closing the gap

### Collaboration / prototypes in code
- John: "wasted effort" to prototype specific interactions (easing curves) in Figma — do it in the target medium
- No handoff; everything up for debate
- When John was "just an engineer" he lacked design intent — look for opportunities to communicate why, not only specs

### Design engineer artifact
- Expected to code; code is the artifact they own
- Build for scalability/generic reuse even on marketing sites
- Benefits: velocity for future pages; non-engineers configure layouts (Contentful)
- Constant question: "How systematic can this be?"

### Tooling
- On Maggie Appleton's collapse-of-disciplines quote: "I think you're just waiting for the tooling to get there for that to be a reality"

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Why hire design engineers | Craft niche: taste + engineering implementation; static Figma → quick talk → John builds; cuts After Effects waterfall; jam + proper aesthetic critique vs typical developer; close-to-the-bone liberates designers at Vercel. | descript-marker |
| 00:01 | Org chart / three arms | Brand/Creative, Product Design, Design Engineering (~6 DEs); design as central voice not siloed staff; some PDs code own solutions; DE covers dashboard + marketing craft (vercel.com, Next); Guillermo vision down to RIC-level animation/signup polish; ~20 designers in ~400-person co. | descript-marker |
| 00:05 | Prototype in target medium | Fastest workflow: designer static Figma (1–5 frames), skip keyframes/easing — **wasted effort outside target medium**; Figma ease ≠ Chrome/Safari feel; jam then hop into code; John sends **preview link**; complex anim → playground so Glenn tunes variables without blocking. | takeaway |
| 00:07 | No handoff / Figma soft SoT | No handoff vs prior companies' "implement this final"; first sketch fully up for debate; egos out. Figma kept up to date (desktop/mobile/tablet, variables) as soft source of truth / future iteration start — not a Bible telling DEs what they can/can't do. | takeaway |
| 00:09 | Design system line | Primitives (buttons→selects→tables) linked in Figma or code for wide impact; don't systemize every view; eng will surface unthought states; keep a few vision visuals, prefer rolling on new ideas over perfect upkeep. | descript-marker |
| 00:10 | Role lines / code as artifact | Many designers ex-engineers — inform taste, no day-to-day code expectation (2× slower). **DEs expected to code; code is the primary artifact they deliver.** Small (<1 week) features DE may own end-to-end still collabbing; John personally jumps straight into code — browser box faster than Figma. | takeaway |
| 00:12 | DE skill spectrum | Wide niche: 3D/math, shadcn/ui systems, interaction/a11y, marketing psychology/analytics. Hire for traits not copies; weighting design↔eng need not be 50/50. Neglected: accessibility for everyone. Maintainability/scalability = multiplicative not linear; generic enough for marketing↔product reuse. | descript-marker |
| 00:16 | Marketing reuse / Contentful | Common layout language across pages (left→middle→right flows); Contentful so non-DEs edit; visual library from vercel.com refresh; spin pages in seconds without design re-involvement — craft stays, story reshapes. | takeaway |
| 00:18 | Creative direction / systematic | DEs (w/ Rauno) push 2×2 reusable layouts thinking Contentful types; "How systematic can this be?" → future-page velocity + nimble narrative reshape; modular on/off for campaigns. | takeaway |
| 00:19 | WIP feedback / Slack drops | No booked crit — messy half-done Figma welcome; sooner DEs comment the better (avoids lost time). Eng side: **open Slack channels**; post visuals for stakeholders; ping specialists (copy, Bezier curves). | takeaway |
| 00:21 | Maggie quote / shared tooling | Software design+dev same discipline grotesquely chopped; Glenn: building software in different languages; waiting on tooling for shared aesthetic+code artifact → softer titles. Xcode storyboards felt inevitable; Figma inspector ≈ mocking CSS with better UI — why not one shared environment. | takeaway |
| 00:23 | Temporary role → builder | John: DE temporary; digital-native + easier tools → endgame role is **builder** (solve problems, don't wear only-code or only-design hat). Intent→machine→fine-tune intent removes university gatekeeping. AI: designers more code-proficient, eng more aesthetic; Framer as higher-fidelity responsive design. | descript-marker |
| 00:26 | Opposite growth paths | John joined as SWE; Vercel first place he *collaborated* vs handoff — handoff hid design *why*/intent; pairing = free masterclass; designers protect against 100%→70% scope cuts. Glenn (Sketch→Vercel): learn native terminology; care how Figma translates (states, a11y, focus labels, simplify SVG paths for DOM/perf); John's feedback folds into next design pass. | takeaway |
| 00:29 | Spinning up the DE pillar | Informal DEs 1–2y before formal pillar; Stripe/Linear popularized title. Kathy (prior VP Product): look-and-feel is Vercel differentiator; scale loses polish across 100 features — designated people with ownership to hit the bar while product teams ship. | descript-marker |
| 00:30 | When DE craft makes sense | Hand-in-hand with investing in good design; tech made building easy → stand out via feel not just looks. Escalation: high bar is table stakes; landing-page appeal can decide before product exploration; watch whether craft trails into the rest of the product. | descript-marker |
| 00:32 | Homepage restraint / narrative | vercel.com refresh w/ Rauno: platform not just CI/CD; set vision/tone (grid, type) even for legal pages. Restraint vs mousetrap/screwball-scramble — all bells steal attention from messaging; strategic ask "does this have to animate?"; narrative + copy (~90% of UI) over show-off craft. | descript-marker |
| 00:34 | Hiring / portfolios | Differentiator: record of building+designing things that are *fun*; push one axis. Creativity behind FE skills draws the eye; pure implementation less. Text-only portfolios not judged poorly (busy signal) — dig into work links/employers; portfolio ≠ end-all. Don't copy existing DE profiles — bridge the gap + quality in your axis (a11y/anim/visuals). | descript-marker |
| 00:37 | Design execution gap | Picture it in your head but lack skills to fully execute — **once you've narrowed that gap you're a builder**. Early title days; Stripe-ish origin of label; bios will reconfigure — worry less about matching someone else's profile. | descript-marker |

## Notable Quotes

> "It's kind of wasted effort to do it outside of your intended, like, target medium. Because there's always going to be, like, nuances, right? Like an ease in animation curve in Figma might look and feel totally different versus Chrome or inside of Safari." — John (~00:06:00)

> "We'll hop into code. We'll start building it. And then I will send Glenn a preview link… we might scaffold like a playground around it. So now Glenn is able to control all the variables into the animation without being blocked by me." — John (~00:06:56)

> "There's no handoff, versus previous companies where I've worked at… Versus at Vercel, like, whatever first sketch that Glenn draws, all of it's up for debate." — John (~00:07:26)

> "Design engineers are, like, expected to code. Like, that's our primary, like, artifact that we are expected to deliver." — John (~00:11:38)

> "For me, personally, I jump straight into code because drawing a box in a browser is a lot faster and easier for me versus drawing a box in [Figma]." — John (~00:12:37)

> "How systematic can we make this thing? Because it increases the velocity of future pages, but it also increases how like nimble we can be reshaping our story." — Glenn (~00:18:56)

> "Most of our projects are all done in like open Slack channels. So like anyone is able to join… If I'm working on like a visual and I want to get feedback, I'll post it inside the channel." — John (~00:20:54)

> "I think you're just waiting for the tooling to get there for that to be a reality. And then you won't have such hardline titles." — Glenn (~00:22:18)

> "I think it's just a temporary role… I think the final endgame role will just be builder because that's what you're doing." — John (~00:23:27)

> "There's this thing called the design execution gap… there's this thing in your head that you want to build and you're able to picture it but you don't have the skills to fully execute it on yet. Once you've narrowed that gap that's when I think you are like a builder." — John (~00:37:30)
