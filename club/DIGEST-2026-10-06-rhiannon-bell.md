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
source_type: youtube-captions
slug: 2026-10-06-rhiannon-bell
generated: 2026-10-16
generator: dive-club-ideas
schema: 1
---

## Summary

Rhiannon "Rhi" Bell (VP of UX for Google Search, per the episode intro and the Notion episode page) explains how Google designs for AI at scale. Arc: her path (small town in Wales, an access course, self-taught web design, agency work incl. agency.com and TBWA with a stint in San Francisco, the BBC, 5 years at Zynga [captions "Zinger"], NerdWallet [Granola only; not seen in captions], then Google Ads) → turning Ads design from a service role into a strategic driver → the shift to Search and how AI Mode was born (users appending "AI" to queries; Robbie Stein; AI Overviews first codenamed in Labs) → AI Overviews design decisions (color-extraction branding dropped, chat attached to results too clunky at first) → on-ramps for AI (familiarity, no friction, latency as a design constraint, wayfinding) → data and research → how AI reshapes design practice at Google (designers building internal tools, demo slams, an auto-rater, a "Rhi and Robbie" review agent) → what top designers look like (systems thinking + pixel craft + technical depth) → the old vs new product designer (prototypes over static mocks) → designing at Google's scale (everything has a knock-on) → dynamic component systems for AI → skills that matter → closing line that AI is "an amazing gift."

Core claims: familiarity beats novelty when you introduce AI into a deeply habitual product, and latency is a design constraint as much as an engineering one; the designers thriving combine systems thinking, pixel-level craft and enough technical foundation (Swift/React-level familiarity, data-viz tools) to prototype; "I'm looking at more prototypes than mocks" now; Google encourages bottom-up AI adoption (monthly demo slams, a program that started ~18 months ago with basic prompting access, Antigravity as the tool used inside Google); an auto-rater for VizQA reached ~75–80% accuracy as spoken; for AI-driven UI the open design problem is dynamic component systems — a longer "leash" for AI within human-defined rules, still with a human in the loop. Why it matters: concrete Google-scale evidence for prototype-first design and AI-assisted internal tooling.

Speaker labels are not in YouTube captions: Rhiannon Bell = guest, Ridd = host. Name/ASR corrections (disclosed, not silent): "Rian Bell"/"Rianna" (captions) → Rhiannon "Rhi" Bell; "Rid" → Ridd; "Thumbtac" → Thumbtack; "anti-gravity" → Antigravity; "visa"/"auto rator" → auto-rater, VizQA per Granola (captions render the metric name as "visa"/"VizQA" inconsistently; unresolved); "magi open AI overviews" (~00:19:00) is ASR for an internal codename — Granola show notes say "MajorEye"; neither confirmed, left unresolved; "re and robbie agent" → "Rhi and Robbie agent" per Granola; "fabicon the fab" (~00:38:40) → unresolved (Granola: "fabric con"/Fab). Granola note errors vs captions: the Granola recording note lists her as "Director of Design, Google Search"; the captions intro (00:00:00) and the Notion episode page say VP of UX for Google Search — this digest uses VP of UX. Granola says AI Mode launched "as its own tab in 2024" — captions say "2024, I think" (00:18:37) and the speaker hedges; treat the year as unverified.

**Source caveat:** YouTube captions only — no Descript export for this episode in this run (Descript needs a signed-in browser). The 00:32:31–00:33:32 stretch (AI transformation program intro) was transcribed from the caption blocks at coarse granularity; re-digest from Descript when exported.

**Inflight note:** Evidence for `coded-prototypes` / `prototype-feedback` / `inflight-relevant`: "I'm looking at more prototypes than like mocks, static mocks on screens" (00:31:28); "I've been able to build this prototype and try it out myself and show it to a bunch of people, and I have way more confidence" (00:30:27); Figma plugins let designers "truly prototype some of these things with real data" with engineers (00:36:38); a motion designer built a system that generates shippable code, reviewed by engineers for latency (Granola). Not a preview-link/Slack loop specifically, but prototype-with-real-data and demo-slam sharing are the feedback mechanisms.

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
| 00:00 | Cold open + intro | Cold open on making search "even more helpful" with AI; intro of Rhi (VP of UX, Google Search) and episode roadmap (AI Mode decisions, systems thinking, lessons). | inferred |
| 00:30 | Rhi's journey | Small town in Wales; struggled at school, found the internet; access course; ~10 years in digital agencies (agency.com, TBWA) incl. San Francisco; the BBC (Neville Brody name-drop) as first step out of marketing; 5 years at "Zinger" (ASR; Zynga per Granola); theme: seeing where design can drive strategy; contracting (Thumbtack) then the call from Google to lead Ads design. | inferred |
| 06:46 | Ads (skippable) | Framer / Jitter sponsor reads. | inferred |
| 08:16 | Google Ads: service role → strategic driver | Design and research were in a service role; mapped the opportunity space; technology maturing let designers think about what it enables; built a full org. | inferred |
| 09:51 | Traits for enterprise/Ads designers | Consumer lens on powerful enterprise tools: make Ads "really easy to use"; look for designers with passion for the problem more than a different mindset. | inferred |
| 12:57 | Helpfulness as the principle | Focus on the user and everything else follows ("it just comes down to helpfulness"); preserve what's deeply loved in search while bringing it into the future. | inferred |
| 14:30 | The move to Search | Partnership with Search, visual experiences, 27 years of evolutions; mandate to think about the next era of search; four years in the role. | inferred |
| 16:33 | How AI Mode was born | Team data showed people appending "AI" to queries to get AI Overviews; "we need to give them a place where they could go"; design led a greenfield complementary surface with Robbie Stein. | takeaway |
| 18:37 | AI Overviews design decisions | Started as a Labs experiment (to test at scale); early designs tried color extraction from images to brand it (dropped: odd brown/pink); chat attached to results was clunky at first, so launched Overviews without chat and refined. | takeaway |
| 20:39 | On-ramps for AI | Search is a habit ("second set of digits"); aim for familiar, no friction, clearly communicated; latency treated as a design constraint → motion design and wayfinding. | takeaway |
| 22:10 | Role of data and research | Data and research combined inform explorations and roadmaps; live voice lesson: users did not realize they could talk to it, so the design must communicate it. | inferred |
| 24:14 | AI in the practice of design at Google | Designers build tools they did not know existed ("I just had AI build me the tool"); internal auto-rater for VizQA; designers empowered to do more than imagined; no top-down push needed. | takeaway |
| 26:18 | Talent Network ad (skippable) | Dive Talent Network sponsor read. | inferred |
| 26:49 | The new IC profile | Roles exist outside traditional product-designer lines; surfaces less constrained; hire senior ICs with depth. | takeaway |
| 28:20 | Traits of top designers | Visual problem solving + systems thinking; keep a recognizable component but make it portable (e.g. into AI Mode); hold the whole end-to-end flow (input, thinking steps, response behavior) in mind. | takeaway |
| 30:27 | Old vs new product designer | Before: "variety of options" without confidence; now build a prototype and show it to many people; "decades in a week"; day-to-day is "more prototypes than… mocks, static." | takeaway |
| 32:00 | Technical foundation | Familiarity with tools and stacks (Swift, React, data-viz) enables some designers to do more; visual craft plus technical depth = "killer combo." | takeaway |
| 32:31 | AI transformation program | Started ~18 months ago with basic prompting access → solve a real daily problem → senior-designer pilots; Antigravity used inside Google; monthly demo slams; outputs: VizQA auto-rater (~75–80%), "Rhi and Robbie" review agent, feedback-summarizing tool. | takeaway |
| 36:08 | Collaboration with engineers | Leads across Google geek out together; Figma plugins let designers prototype with real data; a motion designer's tool outputs shippable code that engineers reviewed. | inferred |
| 37:09 | Delight at scale | Doodles/Fab-style seasonal systems (throw flowers, kick a ball, fireworks); principle: delight can't get in the way of helpfulness. | inferred |
| 40:44 | Designing at Google scale | Everything has a knock-on impact; think in systems; startup designers should reframe constraints as "what problem are we solving"; collaboration is a feature and "we still move really fast." | takeaway |
| 42:48 | Team structure | Verticals: content/ecosystem (travel, sports), core search and AI Mode, discovery/Discover, search design system, iOS platform, research. | inferred |
| 44:21 | Dynamic component systems for AI | Giving AI a longer leash within human-defined rules; human in the loop; predictability; interactive widgets generated for queries; fewer, composable primitives. | takeaway |
| 46:26 | Skills that matter | The skill is bigger than the tools; the process changes but design skill remains; pick one or two tools rather than all of them. | takeaway |
| 49:01 | Close | "AI has like been this amazing gift and you're going to do the best design of your life because of it." | takeaway |

## Notable Quotes

- **00:49:01** — **Rhiannon Bell (inferred):** "AI has like been this amazing gift and you're going to do the best design of your life because of it."
- **00:31:28** — **Rhiannon Bell (inferred):** "the design skill is still there. How you design is different. The dayto-day, I guess, is different because I'm looking at more prototypes than like mocks, static mocks on screens." *(ASR "dayto-day")*
- **00:25:47** — **Rhiannon Bell (inferred):** "actually I've created an auto rator for visa. Um, and so like someone else is going to do this for us now" *(ASR "visa" / VizQA; low confidence)*
- **00:35:06** — **Rhiannon Bell (inferred):** "let me run this presentation through a re and robbie agent to see whether or not it will pass a review" *(ASR "re and robbie" = "Rhi and Robbie" per Granola; low confidence)*
- **00:36:38** — **Rhiannon Bell (inferred):** "plugins that we've built in Figma actually enable us to like truly prototype some of these things with real data."
- **00:21:40** — **Rhiannon Bell (inferred):** "we have to be incredibly thoughtful about where we introduce any latency at all"
- **00:13:28** — **Rhiannon Bell (inferred):** "it just comes down to helpfulness honestly"
