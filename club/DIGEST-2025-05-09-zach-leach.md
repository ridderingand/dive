---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Zach Leach
host: Ridd
title: "Principles for designing a great AI product"
youtube_id: UwkSAfcQje4
url: https://www.youtube.com/watch?v=UwkSAfcQje4
published: 2025-05-09
duration_min: 46
tags: [ip/dive-club, ai-creative-tools, prototyping, design-engineering, creative-process, product-strategy, vibe-coding, code-as-material]
flags: [coded-prototypes, prototype-feedback, inflight-relevant]
source: 2025-05-09-zach-leach.md
source_type: descript
slug: 2025-05-09-zach-leach
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Zach Leach (design at Gamma; core team came over together from Optimizely with John/Jess and others) walks Ridd through principles for designing a great AI product — Spring 2025 Deep Dive. Arc: Optimizely era → COVID remote uncertainty + bumpy acquisition landing → core product folks leave with an idea about sharing ideas / a new medium → six months building a video-chat "lobby" with collaborative outline (fart sound-effect investor lore) → dump video, pivot to write-like-a-doc / present-like-a-deck → that linear HTML/node medium lands just as LLMs arrive and pipelines beautifully into deck generation → design the familiarity/novelty middle ground (nested cards, export/PDF for non-tech CEOs, doc typing vs drag-resize boxes) → investors push vertical focus; Gamma stays broad; user research surfaces "it made a webpage" → webpage product → **beautiful by default** as core principle (AI images inherit deck theme colors/style) → AI principles: forgiving, clear before large mutations, more context as a design deliverable (card/paragraph/cursor/recent writes; future: business/state moat), strategically give users something to do while generating (theme picker "look over here" component — removed once decks got fast), more options/variations (fun + training data; Suno-adjacent), encourage rabbit holes → creation-flow iteration: single prompt → outline intermediate → chat Q&A abandoned for setup page → deliberately slow generation for the wow moment → AI as many experimental "doors" to unify later; "AI tourism" will fade → **Inflight-shaped gold: unorthodox design team codes/prototypes, closes bugs, ships; Cursor on real codebase; Figma prototypes fail for non-deterministic open-ended AI (customer can type anything); CodeSandbox/StackBlitz + Bolt/Lovable coded prototypes; three full AI-image-flow code prototypes to "find the fun"; share working prototypes on Slack for feedback** → Optimizely DNA: emoji rating after every deck gen → internal model leaderboard / mix models per component (outline vs deck vs images) vs PowerPoint/Google locked stacks → Midjourney style refs for rebrand/empty states; Claude shared project for JD writing; ChatGPT deep research → paste into Gamma; Replicate for upscale/bg removal → future role: faster prototypes + AI research/analytics (ask Metabase) + tools that know the design system; Gamma expands beautiful-by-default beyond presentations (sites/docs/maybe video-audio). Core claims: new mediums need familiarity hooks; context is a first-class design deliverable; AI UX principles beat sparkle icons; coded prototypes beat Figma for non-deterministic products; find the fun before shipping. Why it matters: canonical AI-product design playbook from a shipping Gamma designer — principles + Inflight-shaped coded-prototype culture in one episode.

ASR/Descript speaker & proper-noun normalization: Descript labels **Zach** (guest) and **Ridd** (host). Prose cleanup: optimizing / Optimizely; Meet Town / Butter (remote collab tools of the era); dock → doc; LMS / LMS → LLMs; HML / HMLI → HTML; beautiful by the fall → beautiful by default; meta face → meh face; Clot → Claude; chat JT / chat t / TPT → ChatGPT; Bold / Boldin / vault / Boulder → Bolt; lovable → Lovable; Code Sandbox → CodeSandbox; Stack Blitz → StackBlitz; Mid Journey → Midjourney; Mease → Metabase; GA → Gamma; Johnny Chen (Maven all-hands Gamma anecdote) kept. Quotes keep transcript wording. Timecodes and section markers trusted from Descript (no ±30s caveat).

## Takeaways (Granola)

From Granola Editing Notes "Editing Zach Leach" (2025-05-07) Takeaways (primary gold):

- They started out building a live meeting product where people could contribute to an outline up front… they didn't start working on presentations at all — realized in process they were really making a presentation tool.
- They're building a new medium that set themselves up perfectly for AI — journey of how much to capitalize on familiarity vs where to deviate; creating a presentation like writing a doc.
- Principles for designing AI products:
  - Beautiful by default (ex: images informed by default from the theme of the deck → feed that in as context)
  - Being forgiving
  - Being clear what's going to happen before it's going to happen (let the user know if changes are going to be significant)
  - Giving more context
  - Strategically giving customers something to do while AI is loading or processing (theming settings page — removed once generation got fast)
  - Give more options and more things to pick from (fun + great training data — Suno moment)
  - Create feedback loops (ex: Gamma's rating system after generating a deck) — use to test models / internal leaderboard / pick models per AI component (outlines vs decks vs images)
- Designers empowered with Cursor — design team capable of coding, prototyping, closing bugs, shipping.
- Figma prototypes don't cut it for non-deterministic outputs.
- Code prototypes help you "find the fun" — entire AI image flow prototype, three iterations.
- Prototyping in Bolt and Lovable (show notes).

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Gamma origin: Optimizely → lobby → deck | Core Optimizely product folks leave after COVID uncertainty + bumpy acquisition; start with people not a product; six months of video-chat lobby + collaborative outline (sound-effect lore); evolve toward shared docs/webpages in the outline → dump video → write-like-a-doc / present-like-a-deck medium (no AI yet). | takeaway |
| 00:03 | Medium meets LLMs | Linear doc→deck format is naturally LLM-friendly (prediction engines); ~8 months of medium work suddenly pipelines into "keep writing this slide deck"; leap of faith to let models write customer decks despite early quality/bias fears. | takeaway |
| 00:04 | Designing a new medium | Middle ground = trick: must still feel like slides without leaping too far; early too unstructured; nested cards as non-slide affordance; give familiarity hooks (export/PDF for non-tech CEOs) while pushing the medium; guiding light = type like a doc, present button → great deck; customers invent artifacts (webpages, leave-behinds, education). | descript-marker |
| 00:07 | Broad product vs vertical advice | Investors: pick sales/education vertical; Gamma stays crazy-broad — finds customers but sharpness tradeoff; user research: people call generated presentations websites → spin up webpage product (type like a doc, beautiful by default, AI writes linearly). | descript-marker |
| 00:09 | Beautiful by default | Core principle even without AI; AI image gen inherits deck theme colors/illustration/photo style as context; logical defaults that just work; non-designer customers; easier to look good than look bad in Gamma — can still break out. | takeaway |
| 00:11 | AI product principles + context as deliverable | Non-deterministic → be forgiving; clear before large mutations (reshuffle cards); suggestions that work/beautiful; **more context always better** (theme + deck name + card + paragraph → breed-specific dog image); AI image chat — design what context to pipe (recent writes, cursor, deletes); future context moat = business/you/prior quarterly decks; ChatGPT image library as state-building parallel. | takeaway |
| 00:16 | Creation-flow iteration | Era before ChatGPT: single slow prompt → breakthrough = outline intermediate / proto-deck → chat Q&A abandoned for setup page (expose image models, wordiness, audience, tone) → topic→outline→tweak→fast full deck; **deliberately slow generation** to keep wow/mesmerize moment when models got too fast. | descript-marker |
| 00:19 | "Look over here" + more options | Former loading component literally named look-over-here; theme picker as productive wait (people spent ~30s even after done) — removed when generation got fast; principle: more options/variations (esp. images/card variants) — ask "is this fun?"; encourage rabbit holes / follow creativity then pull back. | takeaway |
| 00:21 | Whimsy + AI system vision | Ridd Maven all-hands: Johnny Chen Gamma broke 16:9 bullet mental model; rebrand leans fun/whimsy/surreal imagination + buttoned-up airiness; early AI = experimental doors (autocomplete, image editor, deck editor) with different vibes/models — goal to unify; when to stop saying "AI" / sparkle icons; AI tourism fades; image chat strong; chat-with-whole-deck compelling but hairy (capability discovery / failure). | descript-marker |
| 00:25 | Coding design team + Cursor | Unorthodox design team: coding, prototyping, custom builds, **close bugs and ship**; share prototypes with customers for feedback; Cursor → understand real codebase / fix bugs as designer; company puts new models in immediately (DeepSeek moment); Midjourney style/personalization for rebrand + on-brand empty states. Inflight: coded-prototypes. | takeaway |
| 00:27 | Rating system + model flexibility | After every deck gen: sad/meh/smile/happy faces → A/B models at 10%/50%; internal leaderboard; not locked to Google/Microsoft stacks — best model per outline vs generation vs images; Optimizely measurement DNA; designers empowered to analyze where flows fall down. | takeaway |
| 00:30 | Tech background + Figma fails non-determinism | Learned React at Gamma; HTML/CSS baseline → ask ChatGPT/Claude; operate on real codebase; design-eng support; hard to imagine Figma prototype of open-ended AI — customer can make any cards/type anything; **coded prototype becomes more real/alive**; CodeSandbox + StackBlitz ton; Bolt prototype for AI generator feel (wishes Bolt knew Gamma design system). Inflight: coded-prototypes, prototype-feedback. | takeaway |
| 00:32 | Decade of trust → AI leap | ~6 years Optimizely + ~4 years Gamma with same people; trust made the pre-ChatGPT "generate slide decks with janky models" leap possible — trusted each other to make the prototypes. | inferred |
| 00:33 | When to reach for Bolt/Lovable — find the fun | Traditional Figma designers: drop Figma into Bolt, spend ~20 min, send to customer; or Lovable for something more real; **share working prototype on Slack** ("just experimenting — what do you think?"); AI image tweak flow: three full code prototypes to explore — not much shipped but tool to **find the fun** (four variations, more vibrant, etc.) → informs later Figma/product iteration. Inflight: coded-prototypes, prototype-feedback, inflight-relevant. | takeaway |
| 00:38 | AI in practice + future role | Shared Claude project for job descriptions; OpenAI deep research → paste into Gamma (wish Gamma did this); Replicate APIs for upscale/bg removal; future: faster prototypes + AI user-research/analytics (ask Metabase what's broken) → jump to Bolt with design-system context; Gamma expands beautiful-by-default to websites/docs/maybe video-audio. | descript-marker |

## Notable Quotes

- **00:03** — **Zach:** "what we had been building for like, I that 0.8 months, this dock that turns into a deck actually just works really well for LLMs"
- **00:05** — **Zach:** "That middle ground is, is the trick"
- **00:09** — **Zach:** "it starts with principles one of the core principles we have here when we're doing sort of anything is, uh, it's beautiful by the fall"
- **00:10** — **Zach:** "by default, that image you make is informed by the theme of the entire deck"
- **00:11** — **Zach:** "It's easier to make something that looks good. It's harder to make something that looks bad in Gamma"
- **00:12** — **Zach:** "I've really found that giving just LMS and giving the models just more context, is always gonna turn out usually better"
- **00:13** — **Zach:** "what context can we give it to help you, basically predict or know better what it should do?"
- **00:18** — **Zach:** "we actually slow it down. And this is a, this is a. Secret gamma, lore"
- **00:19** — **Zach:** "the component is still called like, look over here or something"
- **00:20** — **Zach:** "Is this, is this fun to do? Like, is this a fun thing or does it feel like work?"
- **00:25** — **Zach:** "we're a design team who is, is quite capable of, with regards to like coding, prototyping, you know, building actual, stuff like we close bugs and we like ship stuff, right?"
- **00:26** — **Zach:** "How many bugs can I as a designer just go fix by just asking cursor to do it?"
- **00:28** — **Zach:** "every time you generate a deck, uh, at the bottom, you basically get a, uh, sad face, a, a meta face, you know, and then a smile and a happy face"
- **00:29** — **Zach:** "the outline works best with this model, and then the generation works best with this model and the images work best with this model"
- **00:31** — **Zach:** "you could make in Figma like. Very specific screens and very specific flows. But when you put it in the hands of a customer who can like, make anything they want"
- **00:31** — **Zach:** "the prototype becomes so much more real"
- **00:35** — **Zach:** "if, if the question you're trying to answer is like, you know, does this work? Can this work? Like, where does this fall down?"
- **00:35** — **Zach:** "just share it around, post it on Slack. Like say, Hey, I was just experimenting with this. Here's like a working prototype of this thing kind of working. what do you guys think?"
- **00:36** — **Zach:** "And I did make an entire prototype of this AI image flow. I actually made three of them in it to kind of iterate on all of them"
- **00:36** — **Zach:** "what I'm looking for is, is it fun, right?"
- **00:41** — **Zach:** "how do we take like the goodness of that AI and, and all the, the ability to make stuff beautiful by default, apply to other stuff"
