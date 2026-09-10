---

type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Pablo Stanley
host: Ridd
title: "Designing creative tools (v0 and more)"
youtube_id: dJ0nj1ajShc
url: https://www.youtube.com/watch?v=dJ0nj1ajShc
published: 2026-07-21
duration_min: 52
tags: [ip/dive-club, design-tools, ai-creative-tools, ai-agents, prototyping, creative-process, design-engineering, craft]
flags: [prototype-feedback, coded-prototypes, inflight-relevant]
source: 2026-07-21-pablo-stanley.md
source_type: descript
slug: 2026-07-21-pablo-stanley
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Pablo Stanley (designer-builder; Vercel / v0) walks Ridd through two creative tools he built — Effecto (canvas design tool with agents, shaders, and HTML/Tailwind as the LLM-native substrate) and a collaborative agent workspace (Discord/Slack-like channels where humans and agents share threads, sandboxes, and PR review) — then the identity crisis of not dogfooding a canvas tool because he no longer designs that way, how historic artists (Rembrandt, Rivera, Warhol, Sol LeWitt) frame AI delegation, the two builder roles emerging at Vercel (prototyper vs make-it-real), how he prototyped v0 design mode as one gigantic production-code PR that engineers cherry-picked into shipping, Loom-as-storytelling for getting teammates excited and frictioned, and protecting craft with a hand-made Pixelbots weekend when his brain treated AI like a drug. Core claims: match the canvas to the language LLMs already understand (HTML/Tailwind beat a forced 3D shader world); agent work in the “black void” isolates collaboration unless agents join the human conversation; prototyping volume in code replaces Figma artboards — and most of that code never ships; AI sycophancy needs human friction (Slack, Loom, preview links); use AI to amplify curiosity, not replace thinking. Why it matters: rare BTS from someone who both ships design-tool product (v0 design mode) and builds side tools that anticipate the industry — while naming the creative and junior-designer knowledge-transfer costs of agent workflows.

Speaker labels in the Descript source are normalized here: **Speaker 2 → Pablo Stanley (guest)**; **Speaker 5 → Ridd (host)**. Timecodes and section markers are trusted from Descript (no ±30s caveat).

**Inflight note:** Prototyper archetype: high volume of shareable coded ideas (v0 / HTML canvas).

## Takeaways (Granola)

- Behind the scenes of two design tools Pablo built
- The moment Pablo realized “I don’t design like this anymore”
- What designers today can learn from historic artists about AI
- The two types of design builders at Vercel
- How Pablo helped build design mode for v0
- How Pablo gets people excited about his ideas with Loom
- Protecting your creativity in an AI world
- AI is isolating and Pablo built something about it

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Effecto: agents on an HTML canvas | Vacation side project: design tool with robots on the canvas (before Figma did agents). Started as shaders/ASCII effects → full Framer/Figma-like layers + properties + canvas. Opinionated substrate: everything is code — HTML, divs, Tailwind — because that’s what LLMs default to. Inline contextual controls; agent “Jules”; connect internal or CLI agent; live variations framed on canvas; Jitter-like animation editing (edit the animation as shapes, not keyframes). | takeaway |
| 00:05 | Wrong rabbit hole → HTML pivot | Spent ~1.5 months on 3D shader canvas + fake Flexbox; LLMs confused, burned tokens. Lesson: know when to stop (“this is dumb”) vs push-through mythology. Restarted on real HTML — “then it was magic.” Later stopped Effecto entirely: built design systems and agent feeds he wasn’t dogfooding. | takeaway |
| 00:08 | “I don’t design like this anymore” | Disconnect: he doesn’t use the canvas for product work anymore — canvas for comics/hand-drawn; product ideation in TL Draw. Rough wireframes may be the right pairing for coding agents (Balsamiq / Whimsical comeback); Ridd: 90% of the time he wants rough approx + “prioritize the design system” disclaimer to models. Effecto was more for marketing / democratizing design than for his own terminal-agent workflow. | takeaway |
| 00:11 | Building with AI is isolating | At Vercel/v0 everyone uses agents alone in the terminal (“black void”), then presents PRs on Slack/Gather as if they made them. Feedback happens with humans; agents stay isolated. Ridd’s pre-prompt: “Don’t embarrass me in front of my engineering colleagues.” Pablo’s question: why not have the agent in the conversation seeing what others say? | takeaway |
| 00:13 | Hilos: Discord/Slack for humans + agents | Second tool: channels where you talk to agents (Claude Code / Codex / Cursor on machine or sandbox), connect GitHub, create threads, run work, tag agents to review PRs, preview Vercel builds, approve / request changes / reject. Live demo: Easter-egg footer shout-out for dive.club. Ridd frames the two tools as canvas direct-manipulation vs orchestration. | takeaway |
| 00:15 | Orchestration crisis + Whac-A-Mole review | Pride used to come from hands-on craft (duplicate artboard, ink sketches). Measuring value by output quality feels wrong when you’re directing. Review UX as microcosm: interrupt → review → another review = Whac-A-Mole. “A lot of our work is becoming more like an orchestrating manager.” Identity: “is this even me / mine?” if you’re not drawing the rectangle or writing the code. Delegating too much thinking → fear of becoming a worse designer. | descript-marker |
| 00:19 | Historic artists as AI frame | Diego Rivera, Michelangelo, Rembrandt directed students; Warhol called it the Factory and signed at the end. Not new — question is how much creation you give AI and at what level you feel “I’m at that Rembrandt/Warhol level.” Sol LeWitt: ideas as machines that create art; drawing instructions to museums in the ’60s — “the original prompter.” | takeaway |
| 00:23 | Knowledge transfer vs junior designers | Rembrandt/Rivera students still learned craft; that transfer is lost when judgment goes to the model instead of juniors (“not that purple gradient, bro”). Prevailers will use tools with curiosity to amplify sparks, not fully delegate. Ridd: you’re not AI-native — the 18-year-old is. Pablo parallels hip-hop/synth criticism; still questions himself while using AI constantly. | takeaway |
| 00:28 | Daily workflow: Ghosty + TL Draw + ask questions | Terminal Ghosty; Claude with “dangerously skip permissions” (“I’ll let you cook”). TL Draw for type scales / palettes as direction artifacts — design system already in repo so skip hi-fi. Early ideation: collaborate / brainstorm, ask the model to ask questions; avoid screenshots if still ideating. Stage-dependent: typography bug ≠ open debate. | descript-marker |
| 00:31 | Two types of builders on product teams | Classic role walls blur in the actual work. Type 1 — prototyper: wild volume of ideas in code (Pablo + Tom John once committing more than most eng after Claude Code); most never ships — draft PRs replace Figma artboards. Type 2 — make-it-real: cherry-pick prototype into shippable, performant, non-breaking PRs (usually eng). | takeaway |
| 00:34 | Prototyping v0 design mode | Annotations (point at node: “make it bigger”) + design mode (layers/blocks list, contextual menus, inspector) — much borrowed from Effecto’s inline toolbar. Built as one gigantic PR because the whole system had to exist to explore; prototype still more advanced than shipped (sidebar/interactions unshipped). Engineer cherry-picked contextual menu etc. into reality. | takeaway |
| 00:37 | Prototype on production, not sandbox | Prototypes on top of production codebase — real tooling, real agent, real projects. Draft PRs + tests as safety. v0 power: connected to real GitHub/codebase, not static artboards that invent happy paths and miss edge cases from real data/components. | inferred |
| 00:39 | Human friction vs AI sycophancy | Terminal isolation → “AI psychosis” rabbit hole: model always agrees → monster nobody wants. Humans supply needed friction. Share thinking on Slack/Loom; share Vercel preview links so teammates click and find breakage. Design-mode project had its own Slack channel; PM/eng pushback (“this kind of sucks”) → fix loop. | takeaway |
| 00:42 | Loom 201: respect time, tell a story | Nobody wants a surprise 10-minute tag. Keep short; if long, the length must earn a story — why present this, where it came from. Sketch/map walkthroughs (Charlie-from-Always-Sunny conspiracy board) to guide people to a still-conceptual vision, not only finished polish. | takeaway |
| 00:44 | Protecting creativity: Pixelbots by hand | ~10k pixel-character combinations made by hand in an unfamiliar pixel tool — no AI. Brain kept reaching for AI “like a drug” / wanting to build a pixel-art tool instead of making art. McLuhan: we create tools, then tools shape us. Socrates feared writing would erode memory — right that thinking changed, wrong that it made us dumber. Danger: delegate too much and stop forcing thought. Use AI to expand ideas, magnify curiosity, amplify a spark into a star. | takeaway |

## Notable Quotes

- **00:00** — **Pablo Stanley:** "I wanna make a, a design tool where, little robots are actually there with you in the canvas, and you collaborate with the robots."
- **00:01** — **Pablo Stanley:** "everything is actually code. And it's very opinionated because I, I wanted to make it in a way that, uh, what LLMs, what is their default? Which is usually HTML and using divs and using, Tailwind classes."
- **00:06** — **Pablo Stanley:** "Screw this. This is dumb. What am I doing? Why am I trying to force, an LLM to, to understand Effecto this way that is just insane? I'm just going to do it everything from scratch, but now with actual basic HTML."
- **00:06** — **Pablo Stanley:** "Then it was so easy because then suddenly the LLM was using the actual, in the canvas, the actual language that it understands."
- **00:07** — **Pablo Stanley:** "sometimes you go down the rabbit hole, but you need to know when to stop, and when to say like, \"Okay, this is dumb.\""
- **00:08** — **Pablo Stanley:** "Well, the disconnect is that I don't design like this anymore. That's it. Like, I, I don't use the canvas anymore."
- **00:08** — **Pablo Stanley:** "ideally, I should have been using Effecto to build Effecto, you know? I was not doing it."
- **00:09** — **Ridd:** "part of me wonders if this is actually the right type of tool to pair with coding agents. Just ridiculously fast wireframes and that's it"
- **00:10** — **Ridd:** "I find myself giving the disclaimer back to the models, \"Don't use the exact designs from the canvas. Prioritize the design system.\" I've made that prompt 500 times"
- **00:11** — **Pablo Stanley:** "And then you go with your agent, you know, and you go to the terminal, to the black void and just like, \"Hey dude, let's do this.\""
- **00:12** — **Ridd:** "My pre-prompt for everything is, \"Don't embarrass me in front of my engineering colleagues.\""
- **00:17** — **Pablo Stanley:** "A lot of our work is becoming more like a, orchestrating manager, like directing of these things, you know?"
- **00:18** — **Pablo Stanley:** "If I continue on this path where I'm delegating a lot of the creation to the AI, I feel like I'm going to become dumber. I'm going to become a worse designer."
- **00:20** — **Pablo Stanley:** "Andy Warhol wouldn't even hide it. He would just call it the factory, you know? He was like, \"It's a factory and I'm not making it. I'm just signing it at the end.\""
- **00:21** — **Pablo Stanley:** "this guy was the original prompter, you know?"
- **00:25** — **Pablo Stanley:** "all that knowledge that you might have and all that judgment and filtering that you will do as a, a potentially a, a more, a designer that has had some years under your belt is not going to a junior designer anymore. It's just going to another model."
- **00:26** — **Ridd:** "No, you're not AI native. You're a millennial. The AI native person is 18 years old, and they've literally grown up in this, and they're gonna fly by all of us."
- **00:28** — **Pablo Stanley:** "I use Claude and then dangerously skip permissions. I'm like, \"Don't ask me questions, just, just I'll let you cook,\""
- **00:33** — **Pablo Stanley:** "instead of having a ton of artboards and Figma files, now it's happening all straight in code, and you're having a ton of, PRs and different things that you tried that are in draft mode or maybe ready for review, but they're never reviewed."
- **00:35** — **Pablo Stanley:** "it would be weird to just do this, for example, first, and then do the, the layers list and then do, like a lot of that stuff you need to do the whole thing, you know?"
- **00:36** — **Pablo Stanley:** "I was the one prototyping this, and then engineer will be the one cherry-picking stuff and actually making it a reality"
- **00:38** — **Pablo Stanley:** "you end up just creating the happy path, you know? Or just the static path because you're not testing and you're not finding out the things that, uh, usually happen when you're testing th- the thing with real data or with the real tools and with your real components"
- **00:39** — **Pablo Stanley:** "this thing that will always say, \"Yeah, yeah, let's build that,\" that will always agree with all your terrible ideas, then, uh, you go build a monster that nobody wants"
- **00:42** — **Pablo Stanley:** "nobody wants to suddenly see, being tagged on a video that is 10 minutes long"
- **00:45** — **Pablo Stanley:** "at every turn, man, my brain wanted to use AI. It felt like a drug, you know?"
- **00:45** — **Pablo Stanley:** "we create our tools, and after that, the tools, shape us too."
- **00:47** — **Pablo Stanley:** "we need to use it in a way that expands our ideas. It magnifies our curiosity. It allows us to go deeper, but also broader, where suddenly maybe that thing that was like a little spark in your brain suddenly can be amplified into a gigantic star that is full of fire"
