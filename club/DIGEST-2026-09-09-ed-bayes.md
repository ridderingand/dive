---

type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Ed Bayes
host: Ridd
title: "Designing 6 months into the future at OpenAI"
youtube_id: WSwjkVMEGMU
url: https://www.youtube.com/watch?v=WSwjkVMEGMU
published: 2026-09-09
duration_min: 47
tags: [ip/dive-club, ai-agents, prototyping, design-tools, ai-creative-tools, product-strategy, vibe-coding, career-growth]
flags: [prototype-feedback, coded-prototypes, inflight-relevant]
source: 2026-09-09-ed-bayes.md
source_type: descript
slug: 2026-09-09-ed-bayes
generated: 2026-10-19
generator: dive-club-ideas
schema: 1
---

## Summary

Ed Bayes (design lead for Codex and ChatGPT Work at OpenAI; ~2 years at the lab, research team first, then product) walks Ridd through designing coding-agent products when models move faster than interface patterns can settle. Arc: Codex product history (async web task tool → CLI / IDE extension → agent-first desktop) and the "six months out" framework → information-architecture bet (agent chat on the left; code review secondary; "command center" for multi-task / multi-repo) → how interaction patterns evolve past a model-capability threshold → team structure around personas not features (Codex + ChatGPT Work surfaces) → spectrum of dynamic / GenUI interfaces (editorialized vs model-driven) → three prototyping phases (Figma → shared playground with API → "vibing in prod" on a branch) → eval-driven design (golden set of ~10–20 prompts, skill-level design language, Bitter Lesson scaffolding) → Autopilot → Goal, Friday demos, Sites links, and a designer who had never coded opening ChatGPT via Codex → role of design as painting a vision and bringing people along (coding optional) → hiring traits (low ego / high trust / high agency; weekends building; senior unicorns + early-career natives).

Core claims: assume model capabilities get dramatically better in ~6 months and build for that world now — that forced the agent-first, non-IDE desktop bet when peers were going synchronous/terminal; patterns from six months ago (left sidebar, priority across parallel tasks) are already being stress-tested; GenUI work moves from pixel specs to skills + evals, and over-scaffolding washes away on new model releases; the most effective designers communicate relentlessly, not only ship the best prototype; Ed does not think designers need to code. Why it matters: a concrete OpenAI-side case of designing agent products under capability uncertainty, with a reusable prototyping + eval loop.

Speaker labels in the Descript source are normalized here: **Speaker 2 / Speaker 5 → Ed Bayes (guest)**; **Speaker 3 / Speaker 4 → Ridd (host)** (labels switch at ~00:23:00, a second recording segment). Timecodes and section markers are trusted from Descript (no ±30s caveat); HH:MM:SS seconds are interpolated between Descript's 60s timecodes (within a few seconds). Name/ASR corrections against the Descript text (disclosed, not silent): "Cloud Code" → Claude Code (competitor context, 00:00:44); "codecs" → Codex (00:31:06); "write panel" → right panel (00:03:21); "ID extension" → IDE extension; "off Broad" → off prod (00:23:37); "dock Vodo" → dogfood (00:16:49); "Compose" → composer (00:29:03); "work in progress challenge" → channel (00:25:20). Ed Bayes pronunciation per Granola: rhymes with "days". Granola vs Descript: typed takeaways say "core these = command center" (typo for thesis) — Descript confirms "the core thesis of the product was we wanted to build a kind of command center for your agents" (00:02:12). Granola's Sites mention is now confirmed by Descript: "we have this feature called Sites" — ask ChatGPT for a link and it deploys a local prototype to a URL with access control (00:24:58). Autopilot → Goal evolution at 00:20:59. Engineering partner named in Descript: Philip (eval harness, 00:19:19); designer named: Tarek (model/reasoning slider, 00:26:50).

**Source + YouTube offset:** Descript composition (Copy to clipboard export, checked complete: 00:00:00–00:44:00 timecodes, continuous every 60s, ends on the sign-off; composition 44:35). All timecodes in this digest are Descript edit-time. YouTube adds a cold open + intro and two sponsor inserts, so **YouTube = Descript + offset**: Descript 00:00:00–00:04:33 → **+0:55**; 00:04:33–00:24:39 → **+2:31** (Framer + Jitter reads at YT 05:26–07:04); 00:24:39–end → **+3:05** (Dive Talent Network read at YT 27:09–27:44). Spot-checked against YouTube auto-captions (`WSwjkVMEGMU` en-orig): "if you just presume that model capabilities…" D 00:00:54 → YT 00:01:50; "vibing in prod…" D 00:14:05 → YT 00:16:35; "I really don't think that you need to be able to code…" D 00:31:12 → YT 00:34:18. Quotes below carry the computed YouTube time.

**Inflight note:** Evidence for `coded-prototypes` / `prototype-feedback` / `inflight-relevant`: three-phase prototyping ends in "vibing in prod" — create a branch, share it so others "feel it out themself" (00:14:05–00:14:21); Friday demo days evolved the Autopilot jam into Goal (00:22:42); a teammate with no prior coding asked Codex to open ChatGPT locally, create a branch, and make edits (00:24:03); **Sites** deploys a local prototype to a shareable URL so you can "DM someone a link and they can actually like play with it live," with internal aggregators to fork/remix ("links instead of videos") (00:24:58–00:25:20); GenUI backprop demo is a live interactive prototype shown on screen (00:14:37–00:15:10). Link sharing is the feedback loop; not a third-party review product, but directly Inflight-adjacent.

## Takeaways (Granola)

Source: Granola note "Editing Ed Bayes" (`cb79c893-fda7-4918-a941-313afed4afb5`, recorded 2026-09-07, updated 2026-09-09). Provenance: the bullets under *Ridd's typed Takeaways* are Ridd's own (highest weight); the expanded list below is the Granola-generated summary of the recording (kept verbatim, weighted below Ridd's typed bullets). A separate recording note "🤿 Dive Club — Ed Bayes" (`39e24d38-0102-43f1-938f-485d8b792ef0`, 2026-08-31) holds editing-cut instructions only and was not ingested as takeaways. Title/Intro/Show Notes/Subject Line options live in Notion (ship kit), not here.

**Ridd's typed Takeaways** (typed by Ridd in the note's private notes — highest weight):

- designing 6 months out
  - example → moving the chat from the right to the left making it less about seeing the code and more about managing agents
  - core these = command center
- How interaction patterns are evolving as the models get better
- How Ed likes to structure design teams
- 3 phases of prototyping
  - Figma
  - prototyping playground
  - Vibing in prod
- The spectrum for dynamic interfaces (how much editorial design, skill writing, letting model do everything, etc.)
- Role of design → painting a vision of the future and bringing people along

**Granola summary Takeaways (generated, expanded)**

- Designing 6 months out
  - Core framework: assume model capabilities will get significantly better and design for that world, not the current one
  - "If you just presume that model capabilities are going to get better, and you think about where we might be in six months, and you kind of start to build products for that world, that's kind of a good framework to use."
  - Applied this to Codex: moved the agent chat to the left, made it the primary surface, and treated code review as secondary
  - "The agent becomes the primary interface that you interact with. And reviewing the code and seeing the code is important, but it's maybe less important."
  - This was controversial internally at the time: "Should we just build an IDE? I'm not sure, particularly because the models weren't quite there yet."
  - Core thesis of the desktop app: a command center for your agents, supporting multiple tasks and repos at once
  - Patterns that made sense 6 months ago are already being stress-tested: left sidebar architecture, how to surface priority across many parallel tasks
  - "I definitely don't think the patterns today are the final ones we'll land on."
- How interaction patterns evolve as models improve
  - Before a certain model capability threshold, users need to verify changes themselves, so the interface has to expose more
  - Once you pass that threshold, you can start to abstract the interface away
  - Developers were early adopters and got comfortable with agents editing local files; non-developers are now being brought along
  - Safety and control patterns (approving actions like sending emails) are a key design challenge for the broader rollout
  - "The developers got early, and now I think the rest of folks are kind of getting onto now as well."
  - The shift from IDE-style (code on the left, assistant on the right) to agent-first (agent on the left, code review secondary) mirrors a broader shift in who the product is for
  - ChatGPT Work is the "universal interface for getting work done," analogous to how ChatGPT became the universal interface for asking questions
- How Ed structures design teams
  - Organizes around personas, not features: "Less around features and kind of like narrow parts of the pie and trying to give designers like a broad scope."
  - Example: a designer focused on the developer persona might work on code review one week and onboarding the next, but always holds the full developer lifecycle in mind
  - Prevents dropping the ball on a persona when shipping new general features
  - Encourages at least one UXR session per week, internal or external, with users who are newer to agentic products
  - Weekly team ritual: "What's the good, bad, and the ugly of the product at the moment?" Forces people to stay close to external signals (Reddit, Hacker News, Twitter, quantitative data)
  - Surfaces covered: Codex desktop app, CLI, IDE extension, ChatGPT Work on desktop, web, and mobile
- 3 phases of prototyping
  - Phase 1: Figma. Polish the interaction, bring it to critique, stress test it.
  - Phase 2: Prototyping playground. Build a fake local version, pipe in the API, test how responses actually feel. "We'd have a shared codebase and we'd basically build this fake version to test out interactions."
  - Phase 3: Vibing in prod. "You'll create a branch and you can just do the most kind of insane out there idea that you like." Share the branch link directly, no video needed.
  - A designer on Ed's team who had never coded before used Codex to open ChatGPT locally, create a branch, and make edits: "I don't know what happened, but like here we are and I have my amazing prototype."
  - Sites feature now lets designers deploy a prototype to a URL instantly and DM the link: "Links instead of videos, remixing instead of starting from scratch."
  - Friday demo days are the forcing function for sharing these prototypes across the team
- The spectrum of dynamic interfaces (how much to editorialize vs. let the model do everything)
  - Two camps in GenUI: highly editorialized (low latency, low variance) vs. fully model-driven (high flexibility, higher latency)
  - On core ChatGPT, latency has to be extremely tight. On Codex desktop, users skew power user and tolerate a longer generation time.
  - Ed's approach: define a design language at the "skill" level rather than speccing out pixels. Reference tokens, best practices, and let the model fill in the rest.
  - "Instead of speccing out the pixels, you basically move to the skill level and you define a design language within the skill."
  - Eval-driven process: create a golden set of 10 to 20 prompts, run outputs, identify failures, tweak the skill, repeat.
  - Scaffolding is temporary: "Any kind of scaffolding that you do, like over-scaffolding, some of the things that I just talked about will kind of get washed away with new model releases."
  - With each new model release, re-test everything. You may be able to remove scaffolding entirely and start fresh.
  - Early backpropagation visualization prototype: fully model-generated, interactive, lets users adjust learning rate and click inline elements to trigger follow-up responses.
- The role of design: painting a vision and bringing people along
  - "You're painting a vision of the future and bringing people along. There aren't many other functions that do that."
  - The most effective designers on Ed's team are the ones who communicate relentlessly, not just the ones who build the best prototypes
  - One designer on the team jokes that he "basically spends most of his time arguing in Slack," which really means putting forward ideas and rallying people on threads
  - "You can have the most compelling prototype in the world, but if you can't convince anyone to build it, then it'll just sit on your desk."
  - Ed does not think designers need to code: "I really don't think that you need to be able to code to be a designer."
  - A quick scribble shared in Slack can be just as effective as a week-long branch prototype, depending on the idea
  - Communicating across functions (research, engineering) requires empathizing with their lexicon and framing ideas in ways that bring them along, not just solving the user problem
- Eval-driven design in practice
  - Start by getting crisp on the user problem, then write out 10 to 20 "hero flows" you want to nail
  - Run the interaction against those flows repeatedly. Where does it fall apart?
  - Common failure modes in the GenUI prototype: drawing SVGs instead of icons, straying from the token system, inconsistent 3D library usage
  - Scale up with an eval harness: generate a large number of outputs, review by hand, identify patterns
  - "First, just like really getting crisp on like what's the problem you're solving, and then finding a way to like test it in like a verifiable and scalable way."
  - Risk of over-prescribing fixes: you can cap what the next model generation could do. Stay flexible and re-evaluate with every model release.
- Traits of designers making the biggest impact at OpenAI
  - Low ego, high trust, high agency: these three travel together and can't really be separated
  - Genuine curiosity about the mission, not just the hype: Ed asks "Why do you want to work on AI? Is it because it's the hot thing, or do you actually care about the technology?"
  - Younger designers who are native to this new way of working bring "unbounded ambition" and don't see the constraints that more experienced designers have internalized
  - "Not really seeing or understanding the limits of what's possible, I think, is a really exciting profile."
  - Building in spare time is a strong signal: "What are you doing on the weekends? It's such an exciting time to build."
  - Two hiring profiles Ed looks for most: senior, high-agency, product-focused designers who can be trusted to go build; and early-career designers who are native to this era and prototype first
  - Screening for humility: look at how candidates present work (collaboratively, low ego), and dig into values and mission alignment directly

Description (same note; clip/ranking spine after Takeaways):

- The design challenges of bringing Codex into ChatGPT
- How Codex thought about their information architecture bets
- Why Ed structures design teams around personas not features
- What it takes to prototype 6 months into the future
- How Ed thinks about the spectrum of dynamic interfaces
- The traits of the designers making the biggest impact at OpenAI

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00:00 | YouTube cold open + intro (YouTube-only) | Not in the Descript composition: YT 00:00–00:55 = cold open (Ed's "slow change in how people build" / "so exciting to be a designer right now", from D 00:23:23 and 00:25:43) + Ridd intro and screen-share teaser. Descript 00:00:00 = YT 00:00:55. | inferred |
| 00:00:00 | Codex history → 6 months out | Research-side coding-agent push; async web Codex (connect GitHub, kick off tasks, get a PR) was well loved while the market went synchronous/terminal (Claude Code named); framework: presume models get better and build products for where we'll be in six months. | takeaway |
| 00:01:09 | Agent-first IA bet | Move chat from right to left; agent is the primary interface, code review secondary — vs the IDE world (code left, extension right). "Pretty opinionated stance": agent-first, "explicitly not an IDE." | takeaway |
| 00:02:11 | Command center thesis | Command center for agents across multiple tasks/repos; controversial internally ("should we just build an IDE?"); underdog swings; models "weren't quite there yet" until December step-changes, then internal adoption skyrocketed (incl. non-technical use cases). | takeaway |
| 00:03:09 | Left-chat polarizing → settled | Ridd: left agent chat felt polarizing / "too abstracted", now the pattern. Ed: a right panel still exists (code review, slides, sheets) but you can live in the product without it; ChatGPT as universal interface → ChatGPT Work as universal interface for getting work done. | inferred |
| 00:04:33 | Ads (skippable; YouTube-only) | Not in Descript. Sponsor reads inserted on YouTube at YT 05:26–07:04 (Framer, then Jitter per captions). Offset steps from +0:55 to +2:31 here. | inferred |
| 00:04:34 | Bringing Codex into ChatGPT | Fit present-day power plus the six-months-out vision into consumer-simple ChatGPT. Gated on model capability: past a confidence threshold you can pare back the interface; before it, users must verify changes (IDE/CLI world). | descript-marker |
| 00:05:36 | Developers early → broader rollout | Developers got comfortable early with an agent editing local files; sandbox protections + case-by-case approvals. Next challenge: bring safety and control to non-developers (e.g. connected Gmail "shouldn't just send emails for you"). | inferred |
| 00:06:51 | Patterns already stress-tested | Ridd: pendulum swung back to "chat's pretty good." Ed: desktop app launched ~six months ago; dev workflows changed dramatically since December; left-sidebar / multi-task priority ("kick off 10 things at once") already stress-tested; "I definitely don't think the patterns today are the final ones." | inferred |
| 00:08:18 | Surfaces + persona team structure | Codex desktop / CLI / IDE extension + ChatGPT Work desktop / web / mobile. Structure around personas not features; design adds value across the whole lifecycle, not last-mile polish; feature owners (Sites, sheets, slides) still own the broader lifecycle. | takeaway |
| 00:10:23 | Non-engineer personas + rituals | Encourage ≥1 session/week with users newer to agentic products (e.g. recruiting, legal); weekly good / bad / ugly of the product; forcing function to stay close to external signal (Reddit, Hacker News, Twitter). | inferred |
| 00:11:49 | GenUI spectrum | Rich model-generated UI is gated on frontend model quality. Two camps: highly editorialized (low latency, low variance — e.g. sports score widget) vs let the model do everything. Codex skews power user, so more latency leeway (~10s) than core ChatGPT. | takeaway |
| 00:13:27 | Three prototyping phases | (1) Figma — stress-test and tear apart; (2) shared mini fake Codex code base with another designer, piping in the API; (3) "vibing in prod" — a branch with an out-there idea, shared so others feel the real product. | takeaway |
| 00:14:34 | GenUI demo: backprop | Screen share: "explain backpropagation visually" → fully model-generated interactive answer; adjust learning rate; click inline elements to trigger follow-ups (continue to gradient descent). | inferred |
| 00:15:15 | Skill-level design language + golden set | Some traditional design (copy affordance) but mostly skill writing: instead of speccing pixels, define a design language in the skill (tokens, best practice) + evals. Golden set of ~10–20 prompts; run, tweak, flywheel; dogfood feedback; handed to an engineer to hill-climb the visuals. | takeaway |
| 00:17:14 | Eval-driven design | Science vs art of design. Get concrete on the user problem; write 10–20 hero flows; failure modes (SVGs instead of icons, straying from tokens, 3D libraries); small N first, then an eval harness at scale with an engineering partner (Philip). | descript-marker |
| 00:19:55 | Bitter Lesson + scaffolding | Over-scaffolding gets washed away by new model releases; re-test on every model; maybe remove scaffolding and start again; North Star: in six months maybe no guidance at all. | inferred |
| 00:20:34 | Autopilot → Goal | Header "Vibing in prod for prototyping." Push designers to put forward their own vision. Autopilot jam: prompt as objective + success criteria; classifier after each assistant turn decides whether to carry on → evolved into the simpler Goal in the Harness/product. Shared at Friday demo days; "probably like a weekend thing" on a branch. | descript-marker |
| 00:23:09 | Who vibes in prod | "Definitely increasing numbers." Three waves (Figma → mini fake prototypes → branch off prod). WIP channels where people who never coded send app links. A designer who had never coded (many use Origami; ex-Meta): asked Codex to open ChatGPT locally, create a branch, make edits — "here we are and I have my basic prototype." | inferred |
| 00:24:39 | Talent Network ad (skippable; YouTube-only) | Not in Descript. Dive Talent Network read inserted at YT 27:09–27:44. Offset steps from +2:31 to +3:05 here. | inferred |
| 00:24:54 | Sites + WIP collaboration | Header "How collaboration happens." **Sites**: ask ChatGPT for a link → deploys a local prototype to a URL with access control; DM links so people play with it live; internal aggregators; fork and remix — "links instead of videos." New lease of life; imagination as the limit. | descript-marker |
| 00:26:35 | Local prototype vs real data | Small self-contained interactions (Tarek's model/reasoning slider in ChatGPT Work) → local React prototype, then hand to engineers. Bigger IA changes need real inventory — "without the kind of water flowing through the pipes, it's hard to reason about." Design systems may need no prototype; Figma still important. | inferred |
| 00:28:03 | What Figma is still for | Explore phase (wide, low-fi, wireframes) and systems — e.g. commenting across browser / slides / documents; composer and sidebar rows where padding and type sizing must be exact. MCPs move Figma ↔ code both directions. | inferred |
| 00:30:13 | Soft skills / vision | Header "Traits of designers having real impact." Ridd: team of ~eight, more ideas than you can build. Ed: tool debate loses the plot — a compelling prototype nobody builds sits on your desk; communicate simply; empathize with research partners' lexicon. | takeaway |
| 00:31:06 | Designers need not code | Contrarian given Codex work: "I really don't think that you need to be able to code to be a designer"; role is painting a vision and bringing people along (professor quote); "arguing in Slack" = rallying on threads; scribbling on a prototype can beat a week-long branch; tools can also distract. | takeaway |
| 00:32:22 | Handoff / eng collab | Not a "slop 8,000 line PR"; rallying cry, then bread-and-butter design review, Figma specs when needed, pairing with an eng partner. Ridd: is handoff skeuomorphic (handing to engineers' agents)? Ed: maybe in 6–12 months, but humans stay in the loop; PM / design / eng trio persists. | inferred |
| 00:35:02 | Leadership values | Header "Ed's leadership philosophies." Culture and values over frameworks; humility (frontier-lab products reach billions); high trust and high agency "can't really go without each other." | descript-marker |
| 00:36:41 | Screening for humility / mission | Asks about mission ("is it 'cause it's the hot thing?"); Ed's path came from AI (AI policy → grad school ML + design → robotics → research products, incl. evals used for 4o); collaborative, low-ego presentation of work. | inferred |
| 00:38:00 | Collaborating with research | Header "Collaborating effectively with researchers." Grassroots, bottoms-up; Codex early team sat across from researchers training the models; Ed started on the research team building training interfaces; JFK "ask not" — designers should get up to speed on ML. | descript-marker |
| 00:40:07 | Weekends + hiring signals | Research + design backgrounds rare and wanted; "what are you doing on the weekends?"; spare-time building as the signal; tough time for early-career designers — publish, open source. | takeaway |
| 00:41:47 | Two profiles | Senior, high-agency, product-focused, humble "unicorns" you can trust to go build + early-career designers native to this era, prototyping first. | takeaway |
| 00:42:51 | Unbounded ambition wrap | Less bogged down; "unbounded ambition"; not seeing the limits of what's possible. Ridd: newcomers think they can do everything — Ed: "And honestly, they're right"; designers now commit backend code. | inferred |

## Notable Quotes

- **00:00:54** (YT 00:01:50) — **Ed Bayes:** "if you just presume that model capabilities are gonna get better, and you think about where we might be in six months, and you kind of start to build products for that world, that's kind of a, a good framework to, to use."
- **00:01:18** (YT 00:02:13) — **Ed Bayes:** "maybe you can move the chat to the left from the right. The agent becomes the primary, you know, interface to interact with. And reviewing the code and seeing the code is important, but it's maybe like less important."
- **00:02:14** (YT 00:03:08) — **Ed Bayes:** "kind of command center for your agents."
- **00:08:14** (YT 00:10:43) — **Ed Bayes:** "I, I definitely don't think the patterns today, are the final ones we'll land on."
- **00:14:05** (YT 00:16:35) — **Ed Bayes:** "it's like vibing in prod you're probably not gonna merge it, but like you'll create a branch and you can just do the most kind of insane, out there idea that you like."
- **00:20:02** (YT 00:22:33) — **Ed Bayes:** "any kind of like scaffolding that you do, like over scaffolding, like some of the things that I just talked about, will kind of get washed away with like new model releases."
- **00:31:12** (YT 00:34:18) — **Ed Bayes:** "I really don't think that you need to be able to code to be a designer."
- **00:31:28** (YT 00:34:32) — **Ed Bayes:** "you're painting a vision of the future and bringing people along. There aren't many other, functions that do that."
- **00:41:02** (YT 00:44:08) — **Ed Bayes:** "one thing I'm just as interested in as kind of professional experience is what are you doing on the weekends? it's such an exciting time to build"
