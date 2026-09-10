---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Meaghan Choi, Dan Shipper + Bradley Ziffer
host: Ridd
title: "LIVE in NYC: What makes an S-tier AI designer"
youtube_id: V-jd3v9P-Ps
url: https://www.youtube.com/watch?v=V-jd3v9P-Ps
published: 2026-06-02
duration_min: 40
tags: [ip/dive-club, ai-creative-tools, ai-agents, design-engineering, prototyping, vibe-coding, code-as-material, design-tools]
flags: [coded-prototypes, prototype-feedback, inflight-relevant]
source: 2026-06-02-nyc-live.md
source_type: descript
slug: 2026-06-02-nyc-live
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Dive Club LIVE at Ramp HQ (NYC) with Double Diamond. Published YouTube ≈ demos half only (~40 min). Companion fireside (Ramp Panel, ~36 min) now on disk as `2026-06-02-nyc-live-ramp-panel.md` (Descript: https://web.descript.com/9b9e97fc-5579-4a07-84cf-6e38378f913d/7fcb0). Arc: Meaghan Choi (Anthropic) demoes Claude Code designer workflows (worktrees, `/prototype` HTML skill, PR+screenshot/recording review, Claude-in-Chrome self-verify, polish via Claude-in-web, automated merge/PR finish, scheduled adversarial front-end audit) → Dan Shipper (Every) demoes Codex Native Apps (agent-in-the-loop doc editor Proof, Inbox Sweep, Monologue) → Bradley Ziffer (Ramp design engineer) reframes agent tooling as fun: Slack-bot harness → Third Brain → Age of Empires–skinned game UI that prioritizes work, ships PRs+Slack, embeds browser drawing, and surfaces teammate agent prototypes. Fireside: Ridd puts consultant hats on — design-org mile markers (prod codebase + letting go of design), polish vs big-picture time allocation, Dan's CEO/exec fluency signal, AI-fluency definitions for designers, learning muscle, skill-sharing (pair shadowing / Slack agents / Cody), value-prop shift of design. Core claims: multi-agent design work needs isolation (worktrees) and review via coded artifacts not chat transcripts; agents should self-verify in the real UI; "everyone can ship ≠ everything should ship"; agent loops apply beyond code; fun/game UI can be a legitimate agent surface; org AI fluency starts with what the CEO is doing. Why it matters: live frontier of S-tier AI designer practice from Anthropic, Every, and Ramp on one stage — coded prototypes as the review unit + org-transformation fireside.

**ASR maps (both halves).** Demos raw (`2026-06-02-nyc-live.md`): speakers labeled **Speaker / Speaker 2–7** (no real names in labels). Map: **Speaker 4 ≈ Ridd** (host; ASR also "Rid" / "Michael Rittering"); **Speaker 5 ≈ Meaghan Choi** (ASR said "Jared" once in Ridd's thank-you — treat as Meaghan); **Speaker 6 ≈ Dan Shipper**; **Speaker 7 ≈ Bradley Ziffer**; **Speakers 2–3 ≈ Double Diamond co-hosts Jon Falcone / Chase Goulet**; opening Ramp DPM ≈ Elizabeth. Panel raw (`2026-06-02-nyc-live-ramp-panel.md`): **Speaker ≈ Ridd**; **Speaker 2 ≈ Meaghan** (Claude Code / Anthropic / on-sites / prod-code access); **Speaker 3 ≈ Bradley** (Ramp design eng, Cody/Inspect Slack bots, 7/10 care frame); **Speaker 4 ≈ Dan** (Every CEO, Codex Native / Mailroom). Confidence high from content + demos crosswalk; panel ## section headers match Granola. Prose cleanup: Megan→**Meaghan**, Cloud Code→**Claude Code**, Riddering/Rittering→**Riddering/Ridd**. Timecodes trusted (Descript published compositions). Panel clock starts at 00:00 independently of demos.

**Inflight evidence (flags):** (1) Meaghan demos: `/prototype` skill → N HTML options → pick/implement → **PR with screenshot/recording** as the review surface; Claude-in-Chrome **self-verify**; Claude-in-web polish PRs; Slack-connected PR finish (~00:09–19 demos) → `coded-prototypes` + `prototype-feedback`. **Panel strengthens:** designers need prod codebase access (not a playground fork) + comfort letting go of design / shared polish responsibility (~00:01–09 panel) → `coded-prototypes` + `inflight-relevant`. (2) Dan demos: Codex Native Apps — agent iterates in-app browser on docs/inbox (~00:21–26 demos) → `coded-prototypes`. **Panel:** CEO/exec fluency + Slack-agent knowledge transfer / Mailroom (~00:10–29 panel) → `inflight-relevant` + `ai-agents`. (3) Bradley demos: Slack bots + harness; agent builds prototypes; PR ready + Slack to requester; prototypes openable/remix (~00:30–39 demos) → `coded-prototypes` + `prototype-feedback` + `inflight-relevant`. **Panel:** Inspect/@Cody public Slack patterns; desk Loom prompt walkthroughs (~00:29–32 panel) → `inflight-relevant`.

## Takeaways (Granola)

Source: Granola "Editing NYC Dive Club Live" Takeaways (primary gold). Related "Editing Meaghan Choi" is Claude Code solo ep — keep separate. Evidence strength = demos vs panel (panel clock).

- **2 ways Meaghan thinks design orgs need to evolve**
  - designers need to get access to production code base — *strongly evidenced in PANEL* (~00:01–04): starting mile marker for orgs; reject separate playground repo (two repos always out of date; miss org tools + real data endpoints). *Also strongly evidenced in demos* (~00:06): early Claude Code era, designers lacked prod access; she lobbied eng teams.
  - designers need to be comfortable letting go of design in the same way that engineers are being forced to let go of code — *strongly evidenced in PANEL* (~00:01–03): features can ship V1–V3 without the designer if checks/automations exist; discomfort is the point. *Demos adjacent only:* she no longer reviews Claude transcript outputs, reviews PR+recording; "everyone can ship ≠ everything should ship."
- **Now that designers can code it's easy to spend too much time polishing vs. spending time thinking about big picture ideas**
  - Meaghan got feedback that she was spending too much time on polish work — *strongly evidenced in PANEL* (~00:06–10): Ridd frames polish trap; Meaghan: eng feedback that polish PRs weren't wise use of time while Claude isn't good at design; "Is it worth polishing something that's not gonna be here six months from now?"; shared polish responsibility with eng. Bradley (~00:06–07): early polish time sinks; 7/10 out of box means you got time back. *Demos adjacent:* hundreds of tiny polish fixes via Claude-in-web / eng squash-into-one-PR complaints.
- **When Dan measures the AI fluency of an org the first thing he looks at is "what is the CEO doing?"** — *strongly evidenced in PANEL* (~00:10–11): main signal = what CEO / exec team is doing in the tool all day; AI working groups = lip service; leading indicator is leadership literally opening Claude Code and making something. *Not in demos.*
- **What AI fluency looks like as a designer** — *strongly evidenced in PANEL* (~00:15–21)
  - how fast can you learn and how quickly can you proliferate it throughout an organization — *Bradley PANEL* (~00:16–18): cut noise; learn → act → proliferate at terminal velocity; Ramp research auto-scheduled so he can synthesize deeply.
  - great systems thinking (turning 15 things that solve 15 problems into 4 things that solve 30 problems) — *Bradley PANEL* (~00:16–17): exact framing.
  - Dan Shipper has 2 buckets — *Dan PANEL* (~00:18–21):
    - Systematizing and automating (building internal tools to help everyone / harness non-designer design work now that competence is cheap)
    - Using that extra time to create things nobody has ever created before (curious, playful, multidimensional; "I'll just go make a little app for that")
  - *Demos show practice (Codex Native Apps) but not this fluency framing.*

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | Open / Double Diamond | Ramp DPM Elizabeth welcomes; Jon Falcone + Chase Goulet (Double Diamond) housekeep: demos then fireside; first Dive Club live at Ramp HQ NYC; Ridd intro. | inferred |
| 00:03 | Ridd frame | Craft "shot with a bazooka" last ~6 months; Dive Club = designers never stop learning; Inflight / feedback in AI world. Introduces Meaghan Choi via Joel Lewenstein (Anthropic head of product design): futurist who shapes where design is going. | inferred |
| 00:06 | Meaghan: access + Claude Code | Dream was designers on Claude Code; early days CLI-only, designers lacked prod codebases — she asked eng to give access. Practical Anthropic-internal workflows; CLI diehard but desktop app can do the same. Excalidraw open-source practice repo. | takeaway |
| 00:08 | Worktrees + multi-Claude | Always start in a worktree (`claude --worktree`) so parallel Claudes don't conflict; Opus 1M context + fast mode when available. | inferred |
| 00:09 | `/prototype` skill + PR review | Slash prototype skill (Claude-built): N HTML options (default 5) → preview/iterate; Claude picks first + explains; research online (or Slack/Docs/BigQuery in prod); implement best; **put up a PR with a screenshot/recording** — she reviews the PR artifact, not the transcript. Loop until done; always auto mode. | takeaway |
| 00:12 | Three tenets | (1) LLMs not good at design yet → human stays in craft/decision loop. (2) Hand off non-coding work to Claude, not just code. (3) Everyone can ship ≠ everything should ship — need systems that scale. | inferred |
| 00:14 | Polish + merge automation | Claude-in-web for hundreds of tiny polish fixes (sometimes squash to one PR / auto-approve CSS). Never sits in CI to merge — Claudes finish PRs; simplify/code-review skills; commit-push-PR; Slack DMs reviewers / stamp channel. Claude-in-Chrome self-verifies front-end. | takeaway |
| 00:16 | Adversarial design routine | Scheduled Claude Code routine scrapes front-end changes; checks Slack/Meet/Docs for designer involvement; if none, drafts adversarial redesign PR + DM eng (turned off auto-DM — Claude bad at design). Build for next model, not just today's. | inferred |
| 00:19 | Dan intro → Codex Native Apps | Ridd: Dan Shipper / Every; media+product hybrid; Codex as daily driver. Codex Native App = agent-in-the-loop in-app browser applied beyond front-end to email, docs, whole computer. | inferred |
| 00:22 | Proof + Monologue + After Automation | Proof = Codex Native doc editor; add agent, loop on doc; Monologue (monologue.to) voice→doc; published piece *After Automation* (every.to/p/after-automation) written this way — expand paragraphs in-agent. | inferred |
| 00:24 | Inbox Sweep | Client-side Inbox Sweep (open source / Every GitHub): emails→cards; drafts with full computer context (Slack, Notion); approve/ask/archive → inbox zero. Every hiring senior product designer. | inferred |
| 00:27 | Bradley: agents everywhere, no shared brain | Finder / chat surfaces talk but don't talk to each other. 48h-ago workflow: Claude Code / Codex / etc. fragmented. Ramp: everyone has a Slack bot aggregating tools; harness engineering = stop agent repeating the same mistake. | inferred |
| 00:31 | Fun + Third Brain + AoE skin | Fun last felt in RPG games. Coworker built Third Brain (Electron/React/SQLite prioritizer) — helpful, not fun. Remix: Open Age of Empires assets → game UI over work queues (brand, fruit project, office floors, reflection, desk recordings behind Okta). | inferred |
| 00:35 | Game workflow + PR/Slack | Open app → prioritize cards (review, interview prep, Ramp dinner) → agent already prepared PR + Slack message for a request (Meaghan-like). Built-in browser for drawing; agent can "have fun" / new thinking state from mic. Jason's bot brain → Pixel makes prototypes; prototypes open in browser / remix. Optimize work AND have fun. | takeaway |
| 00:40 | Break → fireside | Jon: 10-min break; fireside next (not in demos raw; see panel companion). | inferred |
| Fireside: 00:00 | Consultant hats open | Ridd: deeper industry observations; hypothetical consultant hats for org transformation; Meaghan does on-sites teaching design orgs Claude/AI — ask for mile markers on that journey. | inferred |
| Fireside: 00:01 | 2 ways design orgs evolve | Meaghan: (1) let designers into production codebase — was gatekept; closer to end-user = more product influence. (2) be comfortable letting go of design as eng lets go of code — V1–V3 can ship without you if checks exist. Pushback on playground-only: two repos always out of date; miss org tools + real data. | takeaway |
| Fireside: 00:04 | Future of design engineering | Bradley: not everyone becomes "design engineer"; care + intention once 7/10 is free out of the box; more room to care (perf, menu UX rage-quit details). | inferred |
| Fireside: 00:06 | Allocating time / polish trap | Ridd: can open worktree and polish forever — slippery slope. Bradley: early polish takes long; skills self-written by Claude; 7/10 means you got time back. Meaghan: lean Claude Code team; trust designers to prioritize; "Is it worth polishing something that's not gonna be here six months from now?"; eng feedback she spent too much on polish PRs; polish is shared responsibility. | takeaway |
| Fireside: 00:10 | Org AI fluency → CEO | Dan: first look = what is the CEO / exec team doing? AI working groups = lip service; best orgs have leadership in the tool all day (not outsourceable); spend time getting leaders to open Claude Code and make something. | takeaway |
| Fireside: 00:12 | Dan workflow evolution | Opus 4.5 + GPT 5.3 moment (Nov/Dec 2025): shipping PRs without knowing codebase; Claude Code as local work OS vs sandbox agents; Proof built between other work; Inbox now "perfect"; whole day in Codex/Claude Code. | inferred |
| Fireside: 00:16 | AI fluency as designer | Bradley: how fast you learn + proliferate; systems thinking 15→4 solutions; Ramp research auto-on-calendar; be selfish carving deep product understanding. Dan two buckets: systematize/harness cheap competence + make things never made before; curious/playful/multidimensional. | takeaway |
| Fireside: 00:21 | Keep learning + design for future | Meaghan: only search+coding solved; treat work as 1% / next 99 yours to shape; hold two truths — ship excellent today AND believe today's products are wrong; observe lived tool use (four terminals). | inferred |
| Fireside: 00:25 | Sharing skills internally | Meaghan: isolating talking to Claude 8h — monthly design pair/shadow. Dan: skill libraries go stale/personal; Slack agents + public prompting more solved; Mailroom (Dan+Codex email) for agent↔agent handoff. Bradley: Inspect/@Cody public Slack; Cody teaches agents/humans; album/songs; desk Loom prompt walkthroughs into channel. | inferred |
| Fireside: 00:34 | Value prop of design shifting | Meaghan (personal, not company): models may do most fundamental design by EOY; keep systems/brand taste; personalization needs fixed vs flexible UX decisions; builders go deeper into harness/identity primitives as UI layer gets solved. Close + applause. | inferred |

## Notable Quotes

- **00:06** — **Meaghan:** "every single time I talked to an engineering team, I'd be like, 'Please, just give your designers access to this.'"
- **00:08** — **Meaghan:** "if you're multi-Clauding, use worktrees."
- **00:10** — **Meaghan:** "No one ever writes their skills by hand anymore. If anyone tells you they do, they're lying."
- **00:10** — **Meaghan:** "I actually don't review the outputs anymore of Claude in the transcript. I'm typically reviewing a PR that Claude put up that has a recording of the feature it implemented."
- **00:12** — **Meaghan:** "Claude, tragically, and most LLMs are not good at design yet. … you should still very much be in the loop for the craft and the decision-making."
- **00:13** — **Meaghan:** "just because everyone can ship doesn't mean not everything should ship."
- **00:21** — **Dan:** "I've been calling Codex Native Apps, and that has just, like, totally changed how I work."
- **00:21** — **Dan:** "you can apply that to, like, all of the work you do on your computer. So not just when you're developing, but doing your email, doing your documents"
- **00:31** — **Bradley:** "Really all it is, is, 'Hey agent, stop doing the same thing twice. Stop, stop making that mistake.'"
- **00:37** — **Bradley:** "it already put it together for me in a PR, and sorta like how Megan described it, it, it was ready to go, and it sent a Slack message to him."
- **00:39** — **Bradley:** "it's great for us to optimize our work. I do. It's important. But I also think it's great for us to have fun."
- **Fireside 00:01** — **Meaghan:** "let your designers get access to your production code base. That's like the starting point of this conversation."
- **Fireside 00:02** — **Meaghan:** "in the same way that we're asking our engineers to let us in and help us code, you need to be more comfortable letting go of design."
- **Fireside 00:08** — **Meaghan:** "Is it worth polishing something that's not gonna be here six months from now?"
- **Fireside 00:10** — **Dan:** "The main thing that I always look at is what is the CEO doing?"
- **Fireside 00:16** — **Bradley:** "how can you simplify all the way down from, you know, we have, uh, 15 things that solve 15 problems to we have four things that solve 30 problems."
- **Fireside 00:18** — **Dan:** "how do I use these tools to make something that no one has ever made before?"

Panel attributions inferred from ## markers + role content (Speaker 2=Meaghan, 3=Bradley, 4=Dan); high confidence — no low-confidence quotes included.
