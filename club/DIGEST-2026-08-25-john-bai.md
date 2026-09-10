---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: John Bai
host: Ridd
title: "The Grok Bot design journey"
youtube_id: E-VxnQO73s4
url: https://www.youtube.com/watch?v=E-VxnQO73s4
published: 2026-08-25
duration_min: 48
tags: [ip/dive-club, prototyping, design-tools, ai-agents, creative-process, product-strategy, feedback, design-engineering]
flags: [prototype-feedback]
source: 2026-08-25-john-bai.md
source_type: descript
slug: 2026-08-25-john-bai
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

John Bai (Cursor designer; first NY design hire) walks Ridd through the design journey behind Grok Bot — from the company split between making Cursor more accessible vs. shipping a fresh consumer product, through wide ambient/notch/mascot explorations, to landing back on chat as the right agent UX, onboarding concepts that teach value before the empty state, and Cursor's high-fidelity prototype crit culture. Core claims: iMessage-like chat was the early "secret sauce"; Figma remains John's sketching/storyboard layer before Sand/Grok Bot builds prototypes; onboarding should be sized by concepts introduced (not step count) and must make value clear before action paralysis; Cursor designers do not share one process; fundamentals and product-market-fit loops beat tool fluency when hiring. Why it matters: a rare behind-the-curtain on how a design-forward AI agent product was explored, unshipped, and shaped under Cursor's culture — with working prototypes, brand iterations, and consumer-facing choices (including ditching Cursor componentry).

Speaker labels in the Descript source are normalized here: **Speaker 2 → John Bai (guest)**; **Speaker 3 → Ridd (host)**. Timecodes and markers are trusted from Descript (no ±30s caveat).

## Takeaways (Granola)

- Grok Bot split the company (redesign Cursor like what ChatGPT+Codex did vs. create new product)
- Consumer-fication → having chat feel like iMessage was the secret sauce that made them know they were onto something
  - deciding to not use Cursor's components
- Why John still starts in Figma most of the time
- How John thinks about designing onboarding concepts for Grok Bot
  - his principles for great onboarding too
- No two designers at Cursor have the same design process

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | How Grok Bot started | Company split: make Cursor accessible to non-technical users vs. start fresh; Cursor brand felt too technical; top-down mandate to try something new. Early Grok Bot was a pared-down Cursor Glass with iMessage-like chat — that accessibility signal was internal secret sauce. Design divergent paths: polish engineer build vs. explore differently; they later converged. | takeaway |
| 00:03 | Going wide with design explorations | John questioned three-pane chat; explored ambient OS-native forms (task list hover, Mission Control multi-agent spaces, notepad→agent). Leadership lukewarm on backgrounded UI. Process: half-baked visual tests; keep what has legs, scrap the rest. Starts in Figma, not Cursor — need visual conviction before briefing the model. | takeaway |
| 00:07 | Early Grok Bot mascot explorations | Notch concept + "little guy" mascot from cursor/hex logo → eyes, cute, pixely/halftone. Figma for visual conviction before code. Novel interaction concepts (app halo, assign bot to app). Built notch prototype ("Sand") using Sand itself — product building its own ideal form. | descript-marker |
| 00:10 | When John realized chat was the right UX | Using the notch as main Sand UX: hard to keep context when UI dismisses into notch. Chat/three-column still right for a fleet of task-defined agents despite industry "leave chat" discourse. Personified worker narrative still primary for Grok Bot; app-first approach less appropriate. | takeaway |
| 00:12 | Personification and agent identity | Early builds lacked faces (initials in a circle); teammates naming agents and uploading avatars seeded default character. Notch's value was partly the character. Still customizable avatars in shipping Grok Bot. | inferred |
| 00:13 | Pushing past basic chat UX | Not ready to abandon novelty: Clippy-esque corner character, ask-about-any-window. Explorations as opposite of Cursor-as-precision-instrument — motion, delight, throwaway concepts. Expect to throw them away; early phase is ripe for that. | descript-marker |
| 00:16 | Team forming and strengths | Five designers sprinting by the end (Peng, Keith, Tyler, Mamuso + John). John on novel forms; others polished final shell; brand team heavy on naming/identity (placeholders: Astra, Dot, etc.). Organic staffing by interest/corner of the app. | descript-marker |
| 00:17 | Onboarding concept explorations | Placeholders made it fun while name unknown. Concepts: persona lookup + meet your agents / assemble a team; single tailored agent via Google connect + motion as "AI thinking" time-buy; Dot — explain how the app works with illustrated bots on their own computers and autopilot tasks. | takeaway |
| 00:20 | John's prototyping workflow | Figma for storyboards/animation concepts → feed to Sand/Grok Bot; later skip Cursor and generate options in-browser. Brand Space Invader-y avatars generated into onboarding. Agents operating Figma kill tedious layout/variant work. Figma still useful as sketching tool — counter to "AI shops quit Figma" assumption. | takeaway |
| 00:22 | Principles for onboarding UX | John's Cursor tenure ≈ designing onboarding. Story upfront is immense; you get one–two first impressions. Size onboarding by concepts introduced, not steps. Skip-to-empty-composer causes action paralysis — better to teach capability first. Engaging clarity beats skip buttons. Buzz example: too many concepts at once. | takeaway |
| 00:25 | Shipping onboarding shape + cuts | Core three beats that shipped: team of agents (named tasks), computer use/artifacts/timing/group chats via motion, automation. Cut: deep personalization/integration upfront (trust not established); voice mode copycat (wrong placement — users didn't know what to ask). Final: multi colorful bots → one computer (three felt cluttered) → tools → create first bot. Onboarding = communicate value, then carry it through the product. | inferred |
| 00:29 | Consumer UI vs Cursor componentry | Debates: reuse Cursor components vs. consumer direction — looking like Cursor would attract the same audience and repel the rest. Crit jams on streaming text, computer-use interactions. Culture of unshipping removed complexity. Internal PMF signals applied to final product. | takeaway |
| 00:31 | Design culture at Cursor | No two designers share the same process/tools application (paper, Figma-first, code-first). Maya: no Figma — only Vercel prototype link. Every idea backed by a working interactive prototype for crit; high-fidelity bar; static mocks don't cut it. John's Figma work is mostly throwaway assets/storyboards feeding models — the shareable artifact is the prototype. Don't be precious; sandcastles wash away; seeds (hex guy with eyes) can still land in brand. | takeaway |
| 00:35 | Traits John looks for in designers | Fundamentals > tool count / model optimization speed. Ability to ship and run product-market-fit iterative loops. You can build anything — not everything is worth building. Less clever idea volume; more "would someone else want to use this shape?" | descript-marker |
| 00:37 | Interpreting feedback and data | User research + quantitative/qualitative data inform roadmap; timeline noise vs. thoughtful power users (e.g. Brian Lovan — DM'd for screenshots → bot → Notion for team). Data: fewer than five bots regularly; auth friction; character resonance. Expand form factor when patterns emerge (iMessage/WhatsApp hacks). | inferred |
| 00:39 | John's personal Grok Bot use cases | Gather scattered identity/docs (green card paperwork from inbox/leases); persistent research bots (StreetEasy near ACE/blue line, stack-ranked); Figma tedium + cross-app pipelines (Slack → Notion → Figma). Excited that users invent directions he didn't plan. | descript-marker |
| 00:42 | Ridd's use cases (close) | Fantasy football GM bot; InFlight QA agent (daily job → tickets → Cursor agent); fixed a bug from phone in Newark baggage claim. Closing thanks; John: "It's been a blast." | inferred |

## Notable Quotes

- **00:01** — **John Bai:** "most of the team felt like it just contained way too much baggage. You know, the Cursor brand, while very, you know, respected and beloved, probably felt too technical for any non-engineer to want to even download and try."
- **00:02** — **John Bai:** "AI pills users are very used to that streaming text, that thinking state, you know, most everyday, uh, people that use messaging tools, uh, find iMessage, WhatsApp, Messenger most comfortable to interact with. and I think that initially was kind of that secret sauce"
- **00:05** — **John Bai:** "you test out a concept, and if it feels like it has legs, you should flesh it out further. But, you know, if it doesn't, then maybe scrap it altogether and, and don't waste your time."
- **00:06** — **John Bai:** "I wouldn't say I start with Cursor, immediately. I think there still is the need for me to visualize it so that I know how in turn to communicate the concept back to Cursor"
- **00:10** — **John Bai:** "as I was using it, it became clear this is still the right way for us to interact with, a fleet of what are essentially agents carrying out tasks that are defined to them ahead of time."
- **00:15** — **John Bai:** "you need to go into it expecting to fully throw them away, but to try it and to have fun with it."
- **00:24** — **John Bai:** "people will go through onboarding steps if it's engaging and it makes the value of what you're onboarding onto abundantly clear upfront."
- **00:25** — **John Bai:** "If you skip the onboarding flow, you're dropped into an empty state with just a blank composer, which is not a good place to be."
- **00:25** — **Ridd:** "I like that you defined the size of onboarding by not the amount of steps, but the amount of concepts that are being introduced."
- **00:30** — **John Bai:** "if we're going to go in this more consumer direction, being like Cursor will make this product feel like Cursor and will attract the same audience"
- **00:31** — **John Bai:** "there's probably no two designers on the Cursor design team that has the same process and has the same application of tools in their process."
- **00:33** — **John Bai:** "every idea is backed by a prototype, a working prototype that not only you can pre-present to, you know, on the big screen during a crit, but you can share the link and everyone else can interact with it"
- **00:34** — **John Bai:** "a static mock kind of doesn't cut it anymore. maybe that's for the better there because then, you know, you don't spend time polishing a turd."
- **00:35** — **John Bai:** "I think you just can't be precious about your concepts anymore"
- **00:36** — **John Bai:** "we're in a time where you can build anything, but not everything is worth building."
- **00:36** — **John Bai:** "it's much less about, you know, how many ideas you have, how clever your ideas are, but do they take the shape that somebody else would want to use?"
