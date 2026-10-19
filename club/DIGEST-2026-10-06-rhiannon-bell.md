---

type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Rhiannon Bell
host: Ridd
title: "How Google designs for AI at scale"
youtube_id: owVbQwM2Zfc
url: https://www.youtube.com/watch?v=owVbQwM2Zfc
published: 2026-10-06
duration_min: 50
tags: [ip/dive-club, ai-impact, design-systems, prototyping, ai-agents, product-strategy, craft, collaboration]
flags: [prototype-feedback, coded-prototypes, inflight-relevant]
source: 2026-10-06-rhiannon-bell.md
source_type: descript
slug: 2026-10-06-rhiannon-bell
generated: 2026-10-16
generator: dive-club-ideas
schema: 1
---

## Summary

Rhiannon "Rhi" Bell (VP of UX for Google Search, per the YouTube intro and the Notion episode page) explains how Google designs for AI at scale. Arc: her path (small town in Wales, an access course, self-taught HTML/JavaScript, ~10 years of agency work incl. agency.com and TBWA with a move to San Francisco, the BBC, 5 years at Zynga, NerdWallet, advising incl. Thumbtack, then Google Ads) → turning Ads design from a service role into a strategic driver (Performance Max) → the shift to Search ("the Great Search Shift", ~four years ago) and how AI Mode was born (users appending "AI" to queries; Robbie Stein; AI Overviews first codenamed "Magi" in Labs) → AI Overviews design decisions (color-extraction branding dropped, chat attached to results too clunky at first) → on-ramps for AI (familiarity, no friction, latency as a design constraint, wayfinding) → data and research → how AI reshapes design practice at Google (designers building their own tools, demo slams, a Viz QA auto-rater, a "Rhi and Robbie" review agent) → what top designers look like (systems thinking + pixel craft + technical depth) → the old vs new product designer (prototypes over static mocks) → designing at Google's scale (everything has a knock-on) → team structure → dynamic component systems for AI → skills that matter → closing line that AI is "an amazing gift."

Core claims: familiarity beats novelty when you introduce AI into a deeply habitual product, and latency is a design constraint as much as an engineering one; the designers thriving combine systems thinking, pixel-level craft and enough technical foundation (Swift/React-level familiarity, data-viz tools) to prototype; "I'm looking at more prototypes than like mocks" now; Google encourages bottom-up AI adoption (monthly demo slams, a program started ~18 months ago with basic prompting access, Antigravity as the tool used inside Google); pilots include a Viz QA auto-rater, review-feedback summarizing, and a "Rhi and Robbie" agent that predicts whether a presentation will pass review — "apparently it's like 75% accuracy… maybe it's 80% now" (as spoken; Descript places the figure right after the review agent, not the auto-rater as the caption pass had it); for AI-driven UI the open design problem is dynamic component systems — a longer "leash" for AI within human-defined rules, still with a human in the loop. Why it matters: concrete Google-scale evidence for prototype-first design and AI-assisted internal tooling.

Speaker labels in the Descript source are already named (**Rhi → Rhiannon Bell, guest**; **Ridd → host**). Timecodes and section markers are trusted from Descript (no ±30s caveat); HH:MM:SS seconds are interpolated between Descript's 60s timecodes (within a few seconds). Name/ASR notes against the Descript text (disclosed, not silent): Zynga, NerdWallet (00:04:47), Thumbtack, Antigravity, Robbie Stein and **Viz QA** auto-rater (00:23:20) are spelled as such in Descript — NerdWallet is now confirmed as spoken; "Rii and Robbie agent" (00:32:11) → Rhi and Robbie agent (per Granola); AI Overviews' Labs codename is "Magi" / "Magi Open" in Descript (00:14:57) — Granola show notes say "MajorEye"; spelling unconfirmed; "fabicon the fab" (00:35:45) still unresolved (Granola: "fabric con"/Fab); section title "Rhiannon's desing journey" → design. Granola note errors vs source: the Granola recording note lists her as "Director of Design, Google Search"; the YouTube intro (not part of the Descript composition) and the Notion episode page say VP of UX for Google Search — this digest uses VP of UX. Granola says AI Mode launched "as its own tab in 2024" — Rhi says "last year in 2024, I think" (00:16:11) and hedges; treat the year as unverified.

**Source + YouTube offset:** Descript composition (Copy to clipboard export, checked complete: 00:00:00–00:46:00 timecodes, continuous every 60s, ends on the sign-off; composition 46:27). All timecodes in this digest are Descript edit-time. **YouTube = Descript + offset**: Descript 00:00:00–00:05:34 → **+0:58** (cold open + intro); 00:05:34–00:23:43 → **+2:27** (Framer + Jitter reads at YT 06:32–08:00); 00:23:43–end → **+3:01** (Dive Talent Network read at YT 26:11–26:43). Spot-checked against YouTube auto-captions (`owVbQwM2Zfc` en-orig): "really it just comes down to helpfulness" D 00:11:07 → YT 00:13:33; "we have to be incredibly thoughtful about where we introduce any latency at all" D 00:19:15 → YT 00:21:40; "AI has like been this amazing gift" D 00:46:03 → YT 00:49:03. Quotes below carry the computed YouTube time.

**Inflight note:** Evidence for `coded-prototypes` / `prototype-feedback` / `inflight-relevant`: "I'm looking at more prototypes than like mocks, static mocks on screens" (00:28:35); "I've been able to build this prototype and try it out myself and show it to a bunch of people, and I have way more confidence" (00:27:35); Figma plugins built with engineers let designers "truly prototype some of these things with real data" (00:33:40); a motion designer built a system that generates shippable code, which engineers checked against latency standards (00:33:57). Not a preview-link/Slack loop specifically, but prototype-with-real-data and demo-slam sharing are the feedback mechanisms.

## Takeaways (Granola)

Source: Granola note "Editing Rhi Bell" (`67d8b52e-7b34-4fc3-81b3-6777f47395a2`, 2026-09-26, updated 2026-10-06). Provenance: the Description list is Ridd's own (private notes) and is the clip/ranking spine; there are no Ridd-typed Takeaways in this note, so the list below is the Granola-generated summary of the recording (kept verbatim, weighted below Ridd's Description). Companion note found, not ingested as takeaways: "Rhi Bell <> Dive Club 🤿" (`8cb0299c-f1e6-413a-b705-fe6c817d6117`, 2026-09-23 recording note with Key Ideas and editing cuts — cut instructions are editing notes, not takeaways). Title/Intro/Show Notes/Subject Line options live in Notion (ship kit), not here.

**Granola summary Takeaways (generated, expanded)**

- The design decisions that unlocked AI Mode in Google
  - AI Mode grew out of data showing users were appending "AI" to their search queries because they wanted AI Overviews
  - "We see that people want AI overviews, they're appending AI to the end of their queries because they want AI overviews. We need to give them a place where they could go."
  - The team first experimented with a chat experience attached to search results, but early versions felt clunky: "the first versions, they aren't gonna be clunky. You're not gonna solve the problems. They're gonna feel a little bit awkward, and they did."
  - They ultimately launched AI Overviews without the chat component, then refined the conversational experience before launching AI Mode as its own tab in 2024
  - AI Mode gave designers a greenfield surface: "design led that… design then sort of have the opportunity to basically think about a new sort of complementary surface to search and have a greenfield space. I mean, you can't ask more than that, really."
  - Early AI Overviews used color extraction from paired images to brand the experience, but this was dropped: "you had some really weird combinations of brown and pink that were just not great"
- How they think about creating onramps for AI
  - The core tension: search is one of the most deeply habitual products ever built. "It's almost like a second sort of set of digits. You just, like, it's come so naturally to anyone to put in a query in a box and search."
  - The design goal is familiarity first: "we want these things to feel familiar to users. We don't want to look at this and be like, what is this?"
  - Latency is treated as a design constraint, not just an engineering one: "if we're really gonna be the most helpful, we have to be incredibly thoughtful about where we introduce any latency at all"
  - That latency constraint shapes motion design decisions: where to draw attention, how to help users wayfind through a new experience
  - A live voice experience taught them a lesson via data: users didn't realize they could talk to it because the design didn't communicate it. "We see that in the data. So now we have to think about, do we communicate to users that this is something that they can talk to you?"
  - The principle: "make sure it's familiar. Make sure we're not adding any friction. Make sure it really communicates very directly what it is and how to use it."
- How AI is shaping the practice of design at Google
  - Designers are building internal tools, not just user-facing products: "I've created an auto rater of a VizQA. Someone else is gonna do this for us now."
  - Prototyping speed has collapsed: "before, you would sort of have the sense of, oh, I don't know if this is gonna work. Here's a variety of options. Now, I've been able to build this prototype and try it out myself and show it to a bunch of people, and I have way more confidence."
  - Designers are building tools they didn't know existed: "I was trying to build this thing in AI, and I did. And I didn't know what the tool was, I just had AI build me the tool."
  - A motion designer built a system that generates shippable code: engineers reviewed it for latency standards and approved it
  - Rhi runs monthly "demo slams" where designers share what they've built, no matter how rough
  - The program started 18 months ago with basic prompting access, then evolved to: solve a real problem you have day to day, then pilot ideas with senior designers sequestered to brainstorm
  - Examples of internal tools that came out of this: automated VizQA rater (~80% accuracy), agent that pre-reviews presentations against Rhi and Robbie's standards, tool that summarizes feedback from reviews
  - "We live sort of like decades in a week kind of thing. They're just so much more empowered to do things than they've ever been before."
- What we can learn from the top designers at Google
  - The designers who are thriving combine systems thinking with pixel-level craft: "you're thinking about solving through the lens of what a user's experience is gonna be, and you're thinking about it at the level of detail of pixels"
  - They can hold an entire end-to-end flow in their head, including every critical interaction: point of input, thinking steps, response behavior
  - They see design paths through systems: "I see a way for us to solve that problem where we can actually use design to communicate something different and make something portable and scalable and brilliant"
  - Technical foundation matters: familiarity with Swift, React, and UI tech stacks has enabled certain designers to do more than others
  - "If you're an amazing visual designer to boot, that is a killer combo."
  - They're looking at more prototypes than static mocks now: the day-to-day has shifted
  - They can vision 10 years out and bring it back to something shippable
  - They have a "killer instinct" combined with technical depth and visual craft
- What it takes to design at the scale of Google
  - Everything has a knock-on impact: "pretty much everything you do is gonna have a knock on impact"
  - You have to think in systems, not in isolation: "if it's part of a system, we need to think about that, not just in isolation. We need to think about the impact that that will have on the broader system as a whole."
  - Startup designers joining need to reframe their relationship with constraints: "there's a freedom when you're starting something from scratch that you don't necessarily have in the same way within search"
  - The question to ask isn't "what are the constraints" but "what is the problem we're trying to solve here"
  - Scale also means collaboration is a feature: "you get to work with other people. And we still move really fast."
  - Rhi's team structure: content and ecosystem verticals (travel, sports), core search and AI Mode architecture, discovery and Discover feed, search design system, iOS platform, research
- Designing dynamic component systems for AI
  - Google has given AI their search design system and asked it to generate responses based on what it thinks would work, but a human still needs to be in the loop to edit
  - Predictability is a non-negotiable: "you don't want to learn a new interface every time you get a response. You need to know where the answer's gonna be, where your links are, where the content is."
  - The exciting frontier is AI-generated interactive widgets: "explain some mathematical concept to me, and it will create an interactive widget" or "how many balloons does it take to carry a bicycle" with a live interactive result
  - Web results need to be modular and portable: "recognizable as what it is, but portable so that we can modernize it and bring it into AI mode"
  - The system challenge: "how many primitives does a system like Google need. You can have complete coverage with minimal overlap."
  - The goal is to reduce primitives, not add more
- What skills are becoming more valuable for designers
  - Technical understanding of UI tech stacks (Swift, React) has been a meaningful differentiator
  - Systems thinking at scale: the ability to see how a single design decision ripples through an entire product
  - Visual problem solving at the pixel level, combined with product instinct
  - Prototyping over mocking: the ability to close the gap between idea and user quickly
  - Rhi's framing on what stays constant: "the design skill is still there. How you design is different. The tools change. So what I do might change. But hard skills around, can I problem solve? Can I think in a systemic way? All of those things still really matter."
  - Her advice on tools: "choose one or two that you feel like you're gonna be the best starting point. Stick with one and learn that. No one expects you to know all of the tools."
  - On AI as an enabler: "AI has been this amazing gift, and you're gonna do the best design of your life because of it."

Ridd's Description bullets (typed; episode spine):

- The design decisions that unlocked AI Mode in Google
- How they think about creating onramps for AI
- How AI is shaping the practice of design at Google
- What we can learn from the top designers at Google
- What it takes to design at the scale of Google
- Designing dynamic component systems for AI
- What skills are becoming more valuable for designers

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00:00 | YouTube cold open + intro (YouTube-only) | Not in the Descript composition: YT 00:00–00:58 = cold open on making search "even more helpful" with AI + Ridd intro (Rhi as VP of UX, Google Search; AI Mode decisions, systems thinking, lessons). Descript 00:00:00 = YT 00:00:58. | inferred |
| 00:00:00 | Rhi's journey | Header "Rhiannon's design journey." Not great at school; small town in Wales; taught herself HTML/JavaScript; access course → confidence; ~10 years in agencies (agency.com, TBWA) incl. a move to San Francisco at 26 (22 years ago); the BBC (Neville Brody name-drop) as first step out of marketing into product; 5 years at Zynga ("I feel like I got an MBA"); theme: seeing where design can make a difference; NerdWallet, advising (Thumbtack), then the call to lead Ads design. | descript-marker |
| 00:05:34 | Ads (skippable; YouTube-only) | Not in Descript. Sponsor reads inserted at YT 06:32–08:00 (Framer, then Jitter per captions). Offset steps from +0:58 to +2:27 here. | inferred |
| 00:05:35 | Google Ads: service role → strategic driver | Header "Leading the Google Ads design team." Design and research were in a service role; "naive optimism"; define an awesome buying experience; ML maturing let designers ask what it enables → goal-based buying (Performance Max); built a fully fledged org. | descript-marker |
| 00:07:29 | Traits for enterprise/Ads designers | Different passion, not different thinking: some love unpacking auction complexity; also hire consumer builders who see enterprise through a consumer lens — make Ads "just like really easy to use." Came out "a little strong" as a new leader; listen first; search is a habit ("a second sort of set of digits"). | inferred |
| 00:10:34 | Helpfulness as the principle | Ridd: designing the golden goose. Rhi: "it just comes down to helpfulness"; focus on the user and everything else follows; maintain what is "sacredly helpful" about Search while bringing it into the future. | inferred |
| 00:12:09 | The move to Search | Header "Moving over to Google Search." Ads buy-side work in production; format work already in partnership with Search (Visual Entity, e.g. Charli XCX); 27 years of evolutions; "the Great Search Shift" ~four years ago — enable browsing and searches with no right answer; four years in the role. | descript-marker |
| 00:14:24 | How AI Mode was born | Header "Designing the role of AI in search." Team already exploring AI experiences before AI Overviews (codename "Magi"); constraints to the team; data showed people appending "AI" to queries — "we need to give them a place where they can go"; design led AI Mode with Robbie Stein as a greenfield complementary surface (own tab "in 2024, I think"). | takeaway |
| 00:16:12 | AI Overviews design decisions | Wanted it to feel new: early designs extracted color from paired results/images to brand it (dropped — hard to maintain, odd brown/pink); "Magi" behind Labs to test at scale; attached chat was clunky in first versions, so launched Overviews without chat and refined toward AI Mode. | takeaway |
| 00:18:21 | On-ramps for AI | Header "Onboarding the masses to AI." Familiarity, simplify; respect your time — latency "there can be none" for SERP and AIO; latency drives motion design and wayfinding; familiar, no friction, communicates directly what it is and how to use it. | takeaway |
| 00:19:46 | Role of data and research | Header "The role of data in informing design." Data + research combined; watching AI Mode ↔ SERP journeys; live (voice) lesson: users didn't realize they could talk to it, so the design must communicate it; short-term wins vs long-term goals. | descript-marker |
| 00:21:48 | AI in the practice of design at Google | Header "How AI is shaping the practice of design at Google." Expansionary moment like learning HTML; Canvas-experience prompt; "I just had AI build me the tool"; a director runs AI learning programs, seminars full; changing icons in prod and fixing bugs; a Viz QA auto-rater; "I didn't even really have to kind of encourage them." | takeaway |
| 00:23:43 | Talent Network ad (skippable; YouTube-only) | Not in Descript. Dive Talent Network read inserted at YT 26:11–26:43. Offset steps from +2:27 to +3:01 here. | inferred |
| 00:23:43 | The new IC profile | Ridd: this sits outside the traditional product-designer lines. Rhi: pushing craft, taste and judgment plus product instinct; surfaces less constrained; hiring more ICs than ever, with real depth. | takeaway |
| 00:25:03 | Traits of top designers | Header "The behaviors of the top designers at Google." Visual problem-solving at pixel level + systems thinking: make web results modular, recognizable and portable into SERP / AI Mode and scalable to other content; designers who hold the whole end-to-end flow (input, thinking steps, response behavior) and are strong visual designers. | takeaway |
| 00:27:11 | Old vs new product designer | Before: "a variety of options" without confidence; now build a prototype, try it, show it to many people; ideas once in 10-year vision decks now ship — "decades in a week"; day-to-day is "more prototypes than like mocks, static mocks." | takeaway |
| 00:28:39 | Technical foundation | Some barrier to entry with tools; familiarity with UI tech stacks (Swift, React) enables some designers to do more; data-visualization tools (e.g. finance); visual craft plus technical depth = "killer combo." | takeaway |
| 00:29:51 | AI transformation program | Header "Inside Google's AI Transformation Program." Started ~18 months ago: access to Antigravity (the tool used inside Google) and prompting; monthly demo slams; don't worry if it's not good; solve a real daily problem; senior designers sequestered to pilot ideas → Viz QA auto-rater, review-feedback summarizing, "Rhi and Robbie" review agent (~75%, "maybe it's 80% now"). | takeaway |
| 00:33:17 | Collaboration with engineers | Header "How design<>engineer collaboration has evolved." Engineering welcomed it (no more "three pixels off" bugs); Figma plugins built with engineers let designers prototype with real data; a motion designer's system generates shippable code that engineers checked against latency standards. (Leads across Google "geek out" together, 00:33:14.) | inferred |
| 00:34:19 | Delight at scale | Header "Shipping delightful interactions in Google Search." Doodles and Delight; robust system to ship ideas fast (Haaland rowers, K-pop Demon Hunters "couch, couch", a fast Dolly Parton turnaround); "fabicon the fab" (cats → paw print); World Cup / Olympics variants — throw flowers, kick a ball, fireworks; principle: delight can't get in the way of getting something done. | descript-marker |
| 00:37:30 | Designing at Google scale | Startup-only designers: understand the problem, not just the constraints; think in systems — a metric fix in one place affects the whole (live entry-point change); everything has a knock-on impact; you get to work with other people "and we still move really fast"; net-new primitives need impact thinking. | takeaway |
| 00:39:40 | Team structure | Header "How Rhiannon staffs designers." Content / ecosystem verticals (travel, sports, partnerships); core search + AI Mode; Discover (feed, creator profiles); search design system (components, tokens); iOS platform team; growth systems (~1,000 promos to consolidate); a large research team. | inferred |
| 00:41:23 | Dynamic component systems for AI | Header "Designing dynamic component systems." Gave AI the search design system to compose responses; human in the loop to edit; predictability — don't learn a new interface per response; a longer "lead" within human-based rules; generated interactive widgets (balloons to carry a bicycle); trying to reduce primitives. | takeaway |
| 00:43:23 | Skills that matter | Header "Career advice for designers." Nothing obvious to drop; process gets shortcut (prototype vs Figma iteration); the skill is bigger than the tools — problem solving, systemic thinking; pick one or two tools and stick with them. | takeaway |
| 00:45:55 | Close | "AI has like been this amazing gift and you're gonna do the best design of your life because of it." | takeaway |

## Notable Quotes

- **00:46:03** (YT 00:49:03) — **Rhiannon Bell:** "AI has like been this amazing gift and you're gonna do the best design of your life because of it"
- **00:28:30** (YT 00:31:29) — **Rhiannon Bell:** "the design skill is still there. How you design is different. the day-to-day, I guess is different because I'm looking at more prototypes than like mocks, static mocks on screens."
- **00:23:19** (YT 00:25:47) — **Rhiannon Bell:** "actually I've created an auto rater for Viz QA. Um, and so like someone else is gonna do this for us now"
- **00:32:09** (YT 00:35:13) — **Rhiannon Bell:** "let me run this presentation through a Rii [Rhi] and Robbie agent to see whether or not it will pass a review"
- **00:33:40** (YT 00:36:41) — **Rhiannon Bell:** "plugins that we've built in Figma, actually enable us to like truly prototype some of these things with real data."
- **00:19:15** (YT 00:21:40) — **Rhiannon Bell:** "we have to be incredibly thoughtful about where we introduce any latency at all."
- **00:11:07** (YT 00:13:33) — **Rhiannon Bell:** "really it just comes down to helpfulness, honestly."
