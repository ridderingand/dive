---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Ian Silber
host: Ridd
title: "What it's like designing at OpenAI"
youtube_id: oM1d9Tau27w
url: https://www.youtube.com/watch?v=oM1d9Tau27w
published: 2026-04-08
duration_min: 45
tags: [ip/dive-club, design-systems, prototyping, design-tools, ai-creative-tools, creative-process, code-as-material, career-growth]
flags: [prototype-feedback]
source: 2026-04-08-ian-silber.md
source_type: descript
slug: 2026-04-08-ian-silber
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Ian Silber (OpenAI design leadership; previously Instagram ~8 years, then Artifact / browser Minecraft×Roblox startup) walks Ridd through what designing inside a research-led lab actually feels like: model-as-product curiosity over pixel craft alone, designing *outside* the pixels (system prompts, model behavior, onboarding via the model), systems thinkers who hunt primitives (skills, composable blocks) instead of one-off features, bottoms-up shipping where a designer’s live Codex prototype can rally a team (math/learning surfaces, writing containers with direct manipulation), and how Codex/Cursor shifted collaboration from Figma/static/video to interactive model-backed prototypes plus an internal data-scientist agent. Rituals (PD Whip WIP channel, crits, emerging design systems / Dynamic User Interface Library), the capability gap between what frontier models can do (Codex-class) and what ChatGPT exposes, Madden’s “11 players on the field” constraint analogy, and hiring signals (curiosity + side-project depth + fundamentals). Core claims: thrive by staying close to the model and productizing capability; prefer tokens/conversation before bespoke UI; best designers intuit which tool (paper → Figma → live prototype); edit/curate as anyone can ship software; balance research-lab experimentality with cohesive systems. Why it matters: a rare inside map of OpenAI design practice — research DNA, prototypes as stewardship, systems primitives, and the capability-gap product problem — for designers who need to work with models as material, not just decorate chat.

Speaker labels in the Descript source are normalized here: early turns use **Ian** / **Ridd**; later diarization switches to **Speaker → Ridd (host)** and **Speaker 2 → Ian Silber (guest)**. ASR often mangles ChatGPT (e.g. “chat PT,” “Tbu,” “che bt,” “tragedy t”); rendered as ChatGPT in claims below. Timecodes and section markers are trusted from Descript (no ±30s caveat).

## Takeaways (Granola)

- What it's like designing as a part of a research lab
- Importance of system thinking
- They have an internal data scientist
- How AI tools like Codex are changing the practice of design
- The best designs understand when to go to which tools
- OpenAI's dynamic interface library
- Madden’s “11 players on the field” analogy for current technical constraints
- Great designers can solve problems and react to technology

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Journey: Instagram → Artifact → OpenAI | Eight years at Instagram; left for Artifact (Kevin/Mikey) — browser Minecraft meets Roblox creator marketplace; game scope sprawls like AAA. ~Year in, GPT-4 era hit; founder (AI background) said it changes everything. Head of product at OpenAI (prior coworker leading ChatGPT) recruited Ian + designer independently, then the eng team — eight people joined as a unit; Friday game mechanic → Monday OpenAI trenches. | descript-marker |
| 04:18 | Research-lab DNA vs consumer product | First all-hands sinks in: rate of progress / where models are going. Biggest difference vs Instagram: research-led environment — OpenAI started as a lab; ChatGPT launched as a low-key research preview. Mission-driven, far-forward; company approaches product through that lens. | takeaway |
| 05:48 | Thrive as designer next to research | Work = figure out what models are good at, wrap in a product people understand. Designers stay close to the model: play, find breaks, tweak behavior. Curiosity > hard technical bar. Model as the product; ask “can we do this without pixels / with tokens / in conversation?” before bespoke UI — new material to work with. | takeaway |
| 07:35 | Designing outside the pixels (onboarding) | Example still experimental: traditional ChatGPT onboarding (tour, account, questions) vs giving the model context that the person is new — let the model handhold / explain features instead of static copy. Designers spend less time in Figma, more on system prompt / model behavior; quick prototypes by changing context and watching friendliness/clarity shift. | descript-marker |
| 10:06 | When UI vs model — writing container | No formal principles yet — mostly intuition. Text isn’t end-all. Writing is a huge ChatGPT use case; classic pain = copy-paste that still includes “let me know if you want this shorter,” plus tedious “change paragraph 2” loops. New writing container: chat still works for longer/shorter, plus select/delete/targeted edits (direct manipulation). Mix of model behavior (when to show) + UI; build as system of blocks the model can eventually compose per task. | inferred |
| 12:29 | Traits of best systems thinkers | Users fluidly hop contexts (trip packing → boss email → research). Best systems thinkers ask how a feature *extends the system*, not only the one use case. Hunt underlying primitives so build-once improves everything else — e.g. skills as emerging primitive; deepest abstraction humans *and* models can reason about when/how to use. | takeaway |
| 14:10 | Stewarding ideas → ship | Starts with prototype (anyone: eng/design/PM/research). Best path: designer idea → Codex/live prototype with real model responses (not just clickable). Math/learning surfaces: designer saw LaTeX as archaic for learning, prototyped interactive responses, team rallied to harden/expand/ship. Tons of bottoms-up; empower ideas, then edit so it fits the system and ships the right things. | descript-marker |
| 16:13 | AI tools shift design practice | Join era (~2.5 yrs ago): Origami / playground API for technical designers; traditional-tool designers less able. Then Cursor (still a bit inaccessible) → Codex-class tools that do real work — idea expression matters more. Effort to hook design system so prototypes aren’t random UI; connect prototyping ↔ production ↔ Figma. Reviews become interactive (play, ask questions, see model behavior). Internal data-scientist agent: any designer can query real usage/use cases at scale. | takeaway |
| 18:49 | Choose the right tool — depth vs breadth | Industry still evolving when to use live coded prototype vs paper sketch / whiteboard / wireframe / Figma. Best designers intuit which; easy to obsess on one live prototype when the idea is wrong. Want better tools for wide exploration (hundreds of ideas); stay flexible on depth vs breadth. Design↔eng hybrid era swinging back after specialization; skillset and where you work shifting. | takeaway |
| 21:55 | What still makes a great designer | Fundamentals unchanged: problem, who for, try ideas, converge; craft, taste, interaction patterns. New: work with something that shapeshifts daily + new expression tools. Instagram/Facebook parallel: Quartz Composer → Origami upleveled designers who embraced interaction/feel; same shift now with Codex/Cursor. Content is part of the design (unlike Instagram’s UGC shell) — partial control via model behavior between “no control” and full control. | inferred |
| 25:03 | Rituals / intentionality after scale | Still “holding on for dear life,” but more intentional. Establishing design systems (didn’t really have one while moving fast). Dynamic User Interface Library: design things the model can interpret — first-principles systems/tools for this way of working. Process day-to-day fluid (Figma ↔ Slack prototypes). PD Whip channel: designers drop prototype/video WIP for easy reaction. Crits for idea-building; design reviews still being figured out. Traditional PM+eng pods; get to a playable early version before polishing; ship only what extends the system cohesively. Bad systems thinking = blinders on shipping your thing while similar work exists nearby — Ian’s job is connect/do fewer things that pull together. Stay flexible: tomorrow’s capability may rewrite interaction. | descript-marker |
| 30:06 | Dynamic interface library | Design so it renders natively everywhere, stays interactive, adds AI-native value (not just prior UI). Forward: model understands/composes components without every surface handcrafted — not there yet, soon. Components stack for designer + engineer + model. Future designer role = editor/director/curator (camera analogy: anyone can photograph; craft/taste still matter). Job not going away — people recognize good vs bad software beyond “does it work.” | takeaway |
| 32:47 | Capability gap + Madden analogy | Capability gap: models (e.g. Codex) can already do a lot (tokens, time, skills, computer use) vs what people do in ChatGPT today — recent split. Designers must expose capability and give tools for real work; ChatGPT still limited vs Codex. ChatGPT ~3–4 years old vs early computers’ trajectory. 30 for 30 Madden episode: chips couldn’t put 22 players on the field — Madden refused until 11-per-side possible; then endorsed. Faith that six–twelve months fix today’s falls-downs; context windows may feel archaic later. Balance: design for today’s bits (can’t put 11 on the field yet) *and* push vision for what should become possible. Leadership: still figuring how much generative/future exploration vs execution — need fluid flip-flop. | takeaway |
| 37:54 | Culture + designer as both | Very fast; update thinking quickly; evolve with tech underfoot — not two years ahead, running with advancements. Exciting: figure it out, turn the crank, iterate. Great designers do both: package new tech *and* insist “it needs to be good at X / here’s ideal”; extend process to what tech can’t do yet but should — push with eng/research. | takeaway |
| 39:53 | Hiring signals | Excited by up-and-coming energy. Still: don’t need AI background, need curiosity — but enough maturity now that play/experiment signal matters (what’s good/bad/where to push). Respect deep side-project passion. Need product-design fundamentals + curiosity + time spent playing + ideas for where to push. Fortunate seat: not only react to tech — help shape capabilities into people’s hands. | descript-marker |

## Notable Quotes

- **00:04** — **Ian Silber:** "from day one. It was just so, such a different place. I remember very distinctly my first all hands."
- **00:05** — **Ian Silber:** "the biggest difference, is working in a research led environment"
- **00:05** — **Ian Silber:** "much of our work is, figuring out what the models are good at. Then trying to wrap that in a product that people can understand and can use."
- **00:06** — **Ian Silber:** "You don't have to be like technical to work here. but I think you have to be really curious"
- **00:06** — **Ian Silber:** "what can we do this without pixels? Can we do this with tokens? Can we do this with, uh, the model itself?"
- **00:09** — **Ian Silber:** "how can we let the model do the work? versus trying to kind of write a bunch of static kind of explanation of what this thing is."
- **00:09** — **Ian Silber:** "designers working on this are hopefully spending a lot less time in Figma or whatever like tool you use to draw pixels and more time really thinking about how you interact with this thing and the fact that the model really is like the core product."
- **00:10** — **Ian Silber:** "We don't have principles. We probably should. I think it's more, I guess at this point, a little bit intuition."
- **00:12** — **Ian Silber:** "the best systems thinkers are thinking not just about their feature, but how does this feature, like, extend the system."
- **00:14** — **Ian Silber:** "so much of it starts with the prototype or design."
- **00:15** — **Ian Silber:** "now with Codex or whatever tool you wanna use, you can build real versions of this that aren't just Clickable prototypes, but are actually like live, model responses"
- **00:15** — **Ian Silber:** "that's another thing that's like, I think different at OpenAI is just tons of bottoms up stuff."
- **00:17** — **Ian Silber:** "instead of a Figma prototype or, uh, a static thing, or even like a recording of a video, it's like very interactive. I can go and, and just, top round and I can play with it."
- **00:18** — **Ian Silber:** "we have an internal, agent that we use, which is like a data scientist. any designer working on something can ask questions, well, how do people actually use this?"
- **00:19** — **Ian Silber:** "The best designers, I think will understand and intuit when to go to, to which one."
- **00:20** — **Ian Silber:** "there's like this depth and breadth thing that we need to figure out and, and not swing too far one way"
- **00:25** — **Ian Silber:** "I'm still holding on for dear life"
- **00:25** — **Ian Silber:** "We have a whole system called the Dynamic User Interface Library. which, Allows us to design things that the model can then interpret."
- **00:26** — **Ian Silber:** "we have a channel, for example, that we call PD Whip, which is like, designers just work in progress and you just throw stuff in there. it's gotta be prototype or video or something."
- **00:28** — **Ian Silber:** "how do we put out things that are experimental and early and going to change, that's like the research lab nature, but then, do you do that in a way that, for the things that truly matter, feel cohesive?"
- **00:31** — **Ian Silber:** "your job's gonna be more and more about kind of helping edit and direct and curate I don't think like the, the job of a designer is going away anytime soon."
- **00:32** — **Ian Silber:** "One thing we think a lot about is the capability gap"
- **00:35** — **Ian Silber:** "there are not enough bits to do that. it's technically not possible to put 22 players on the field. We can only put 10 total. and he was like, come back to me when that's possible."
- **00:36** — **Ian Silber:** "if you go too far ahead, you can't put 11 people on the field. So like you can't design the game at that"
- **00:38** — **Ian Silber:** "things are changing underneath your feet all day long. And it's very exciting."
- **00:39** — **Ian Silber:** "Great designers can both say, oh wow, we have this new technology. Okay, cool. How do we, how do we package that up? But then I think other designers, or other times our designers are thinking about, Well, actually it needs to do this."
- **00:40** — **Ian Silber:** "you don't need a background in AI to like come work here. You have to be curious about the technology"
- **00:41** — **Ian Silber:** "I've always respected people that will go deep on some side project or get really passionate about some idea."
