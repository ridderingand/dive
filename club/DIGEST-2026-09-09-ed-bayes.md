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
source_type: youtube-captions
slug: 2026-09-09-ed-bayes
generated: 2026-10-19
generator: dive-club-ideas
schema: 1
---

## Summary

Ed Bayes (design lead for Codex and ChatGPT Work at OpenAI; ~2 years at the lab, research then product) walks Ridd through designing coding-agent products when models move faster than interface patterns can settle. Arc: Codex product history (async web task tool → CLI / IDE extension → agent-first desktop) and the "6 months out" framework → information-architecture bet (agent chat on the left; code review secondary; "command center" for multi-task / multi-repo) → how interaction patterns evolve past a model-capability threshold → team structure around personas not features (Codex + ChatGPT Work surfaces) → spectrum of dynamic / GenUI interfaces (editorialized vs model-driven) → three prototyping phases (Figma → shared playground with API → "vibing in prod" on a branch) → eval-driven design (golden set of ~10–20 prompts, skill-level design language, Bitter Lesson scaffolding) → Friday demos and a designer who had never coded opening ChatGPT via Codex → role of design as painting a vision and bringing people along (coding optional) → hiring traits (low ego / high trust / high agency; weekends building; senior unicorns + early-career natives).

Core claims: assume model capabilities get dramatically better in ~6 months and build for that world now — that forced the agent-first, non-IDE desktop bet when peers were going synchronous/terminal; patterns from six months ago (left sidebar, priority across parallel tasks) are already being stress-tested; GenUI work moves from pixel specs to skills + evals, and over-scaffolding washes away on new model releases; the most effective designers communicate relentlessly, not only ship the best prototype; Ed does not think designers need to code. Why it matters: a concrete OpenAI-side case of designing agent products under capability uncertainty, with a reusable prototyping + eval loop.

Speaker labels are not in YouTube captions: Ed Bayes = guest, Ridd = host. Name/ASR corrections (disclosed, not silent): "Ed Bayze"/spoken Bayze → Ed Bayes (Granola pronunciation note: rhymes with "days"); "Rid" → Ridd; "chat GBT"/"HBT" → ChatGPT; "codec"/"codeex" → Codex; "chatdy work" → ChatGPT Work; "cl code" → Claude Code (as spoken competitor context); "bit of lesson" → Bitter Lesson (http://www.incompleteideas.net/IncIdeas/BitterLesson.html per Granola Show Notes); "pans today" → patterns today; "Brad" (created a branch) → branch (ASR); "training opinions" → contrarian opinions (context). Granola vs captions: typed takeaways say "core these = command center" (typo for thesis); captions confirm "command center for your agents" (00:03:08). Granola mentions a Sites feature for instant prototype URLs — captions discuss sharing branch links and Friday demos; I did not assert a product name "Sites" from captions alone. Autopilot → Goal feature evolution is in captions (00:25:18).

**Source caveat:** YouTube captions only — no Descript export for this episode in this run (Descript needs a signed-in browser; Drive/Descript search not available without sign-in). Re-digest from Descript when exported.

**Inflight note:** Evidence for `coded-prototypes` / `prototype-feedback` / `inflight-relevant`: three-phase prototyping ends in "vibing in prod" — create a branch, share it so others "feel it out themselves" (00:16:35); Friday prototype shares evolved an autopilot jam into Goal (00:25:18); a teammate with no prior coding used Codex to open ChatGPT locally, create a branch, and ship a prototype (00:26:52); GenUI backprop demo is a live interactive prototype shown on screen (00:16:35–00:18:35). Branch/link sharing is the feedback loop; not a third-party review product, but directly Inflight-adjacent.

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
| 00:00 | Cold open + intro | "Slow change in how people build"; intro of Ed (Codex + ChatGPT Work at OpenAI) and designing/prototyping 6 months out; screen-share teaser. | inferred |
| 01:04 | Codex history → 6 months out | Research-side coding push; loved async web Codex vs market going synchronous/terminal (Claude Code named); framework: presume models get better, build for six months ahead. | takeaway |
| 02:05 | Agent-first IA bet | Move chat left; agent primary, code review secondary vs IDE (code left, assistant right); controversial internally ("should we just build an IDE?"). | takeaway |
| 03:08 | Command center thesis | Desktop as command center for agents across multiple tasks/repos; underdog swings; models "weren't quite there yet." | takeaway |
| 03:39 | Left-chat polarizing → settled | Left agent chat polarizing / "too abstracted"; now the pattern; proud you can live without the right review panel. | inferred |
| 05:12 | Ads (skippable) | Paper and Framer sponsor reads. | inferred |
| 07:16 | Design challenges of agent power | Fit present-day power plus 6-months-out vision; before a capability threshold users must verify changes so UI exposes more. | inferred |
| 08:48 | Developers early → broader rollout | Developers got comfortable with agents editing local files early; non-developers and safety/control (e.g. approving actions) are the next design challenge. | inferred |
| 09:50 | Patterns already stress-tested | Desktop ~six months since launch; left-sidebar / multi-task priority already under strain; "don't think the patterns today are the final ones." | inferred |
| 10:52 | Surfaces + persona team structure | Codex desktop/CLI/IDE + ChatGPT Work web/mobile; structure around personas not narrow features; broad lifecycle ownership. | takeaway |
| 12:58 | Non-engineer personas + rituals | Recruiting/legal and other non-dev personas; weekly good/bad/ugly grounded in external signals; UXR with newer agent users. | inferred |
| 14:30 | GenUI spectrum | Editorialized (low latency, low variance) vs model-does-everything; gated on frontend model quality; power-user Codex tolerates more generation time. | takeaway |
| 16:04 | Three prototyping phases | (1) Figma stress-test (2) shared mini Codex playground piping API (3) "vibing in prod" — branch with out-there idea, share so others feel the real product. | takeaway |
| 16:35 | GenUI demo: backprop | Prompt "explain back propagation visually"; model renders interactive learning UI; skill-level design language + tokens instead of pixel specs. | inferred |
| 18:35 | Eval-driven / golden set | Golden set of ~10–20 prompts; run, tweak skill, flywheel; handoff to engineer for scientific hill-climb; close research/design collab. | takeaway |
| 22:13 | Bitter Lesson + scaffolding | Over-scaffolding washed away by new model releases; stay flexible; re-test and maybe remove guidance when models improve. | inferred |
| 25:18 | Friday demos + Goal | Weekend autopilot branch jam → simpler Goal in product; Friday prototype shares as forcing function. | inferred |
| 25:48 | Who vibes in prod | Increasing share; designer who never coded: asked Codex to open ChatGPT locally, create branch, make edits — "here we are and I have my amazing prototype." | inferred |
| 27:22 | Talent Network ad (skippable) | Dive Talent Network sponsor read. | inferred |
| 27:52 | WIP / collaboration shift | Work-in-progress sharing moved toward coded branches; imagination as the limit. | inferred |
| 29:25 | Determinism + design systems | Nondeterministic medium needs waterlines; design systems and concrete props (composer, sidebar rows) still matter; code↔Figma both directions. | inferred |
| 33:00 | Soft skills / vision | Can't build everything; stakeholder empathy; "painting a vision of the future and bringing people along"; Slack arguing = rallying; napkin scribble can beat a week-long branch. | takeaway |
| 34:01 | Designers need not code | Contrarian given Codex work: "I really don't think that you need to be able to code to be a designer"; role is vision + bringing people along. | takeaway |
| 35:34 | Handoff / eng collab | Vision of where product goes; iterate in Figma or code; consumption/context for eng; blurry design↔frontend line. | inferred |
| 38:08 | Leadership + hiring traits | Low ego, high trust, high agency; mission curiosity vs hype; research+design backgrounds rare and valued. | inferred |
| 43:47 | Weekends + two profiles | "What are you doing on the weekends?"; spare-time prototyping signal; senior high-agency humble unicorns + early-career natives who don't see limits. | takeaway |
| 46:23 | Unbounded ambition wrap | Younger designers right that constraints are often imagined; Ed close. | inferred |

## Notable Quotes

- **00:01:34** — **Ed Bayes (inferred):** "if you just presume that model capabilities are going to get better and you think about where we might be in six months and you kind of start to build products for that world that's kind of a good framework to to use"
- **00:02:05** — **Ed Bayes (inferred):** "maybe you can move the chat to the left from the right the agent becomes the primary you know interface they interact with and reviewing the code and seeing the code is important but it's maybe like less important"
- **00:03:08** — **Ed Bayes (inferred):** "kind of command center for your agents"
- **00:10:20** — **Ed Bayes (inferred):** "I I definitely don't think the pans today are the final ones we'll land on." *(ASR "pans" = patterns)*
- **00:16:35** — **Ed Bayes (inferred):** "it's like vibing in prod. You're probably not going to merge it but like you'll create a branch and you can just do the most kind of insane out there idea that you like"
- **00:22:13** — **Ed Bayes (inferred):** "any kind of like scaffolding that you do like over scaffolding like some of the things that I just talked about will kind of get washed away with like new model releases."
- **00:34:01** — **Ed Bayes (inferred):** "I really don't think that you need to be able to code to be a designer"
- **00:34:31** — **Ed Bayes (inferred):** "you're painting a vision of the future and bringing people along. There aren't many other functions that do that"
- **00:43:47** — **Ed Bayes (inferred):** "one thing I'm just as interested in as kind of professional experience is what are you doing on the weekends? It's such an exciting time to build."
