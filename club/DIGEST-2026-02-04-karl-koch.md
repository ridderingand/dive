---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Karl Koch
host: Ridd
title: "Tips for New Design Engineers"
youtube_id: 7_VEb9iDW2c
url: https://www.youtube.com/watch?v=7_VEb9iDW2c
published: 2026-02-04
duration_min: 46
tags: [ip/dive-club, design-engineering, vibe-coding, craft, code-as-material, career-growth, job-market, taste]
flags: []
source: 2026-02-04-karl-koch.md
source_type: descript
slug: 2026-02-04-karl-koch
generated: 2026-09-10
generator: dive-club-ideas
schema: 1
---

## Summary

Karl Koch (design engineer at DuckDuckGo; runs Become a Design Engineer) gives Ridd a practical playbook for designers leveling into design engineering under AI: live demos of common LLM code pitfalls (overused `useEffect`, index-as-key lists), browser Inspect as the first debug move before over-prompting, a fundamentals-first learning path (terminal → HTML/CSS before React bootcamps), reclaiming the "front of the front end" as design ownership, then craft examples from Search Assist (clip-path morphing copyright button almost nobody clicks) and his personal site (hover blur cards). Arc: AI deterministic defaults → curated knowledge docs that steer models → DE as curiosity + craft + build logic (generalist middle ground) → Inspect > fight-the-model loops → grow technical muscle without skipping foundations → DDG Search Assist delight on a <1% button → vocabulary to coach AI (clip path, cubic bezier; not everything is a spring) → DE = creativity + craft on the final 10% → job market still wants fundamentals (vibe into prod won't fly at most employers yet) → personal-site 5–10% details → trap: online DE aesthetics ≠ day job (mostly translate intent into fast/beautiful/efficient; animation permission comes after performance is sound). Core claims: LLMs ship working-but-not-best code (effects, index keys); designers win by curating reference docs and knowing what to question; front-of-frontend ownership is back; craft is caring about the unclicked moment; "build with vibes, ship with rigor"; you do not need to be a master animator to be a design engineer. Why it matters: concrete tactics + mental models for designers who want to ship feel/motion/performance themselves instead of raising tickets.

ASR/Descript: "Dr. Go" → DuckDuckGo, "Andre Hy" → Andrej Karpathy, "Carl"/"KARL" → Karl, Ridd "click path" → clip path. Corrected in prose; quotes keep transcript wording. Timecodes and markers trusted from Descript (no ±30s caveat).

## Takeaways (Granola)

From Granola note "🤿 Dive Club — Karl Koch" (no dedicated Editing note; editing-oriented takeaways only):

- Karl’s course content before the engineering-to-design discussion should be cut.
- His screen-share aspect ratio may support a grid with the screen share left of the faces.
- The job-market section around 40 minutes is rambly and should be trimmed.

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00 | AI overuses useEffect | LLMs are next-token deterministic: often ship working code that isn't best. Demo: reactive filter wrapped in `useEffect` double-renders / flashes vs updating state directly. AI loves stuffing everything in effects; React's own "You Might Not Need An Effect" post. Fighting the flash without naming the cause sends the model on a rampage. Fix: give the model the article as a reusable doc/skill and ask "are you sure we need an effect?" | descript-marker |
| 00:03 | Curate knowledge + DE middle ground | Ridd: you don't need to learn everything — curate the right pieces and point at them. Karl: DE mindset ≠ being a full front-end expert (else the role collapses). Combine craft curiosity with build logic; generalist middle ground beats designer-only-on-AI or engineer-only-from-specs. Power-to-the-generalist era. | inferred |
| 00:05 | Index-as-key list bugs | Demo 2: AI defaults list `key` to array index. Index isn't identity — inserts land wrong, deletes hit the wrong item. Unique IDs from real params fix order + remove. Tiny but shows up constantly when you "make a list of X." | inferred |
| 00:08 | Insert / discard motion as design | Ridd notices Karl's add (slide in) vs remove (fade then collapse) intentionality. Karl: even throwaway demos get the extra 10% — treat digital as physical metaphor (push something into a set; "poof" discard). Break it as a design problem: what am I actually doing? Bring humanity to pixels. | inferred |
| 00:11 | Inspect before over-prompting | Broken-UI demo: squished images. Prompting "images look squashed" makes the model resize dimensions; Inspect → `object-fit: fill` → `cover` fixes in one change (edits stick until refresh). Cursor-in-browser helps; terminal/Claude Code / non-Cursor IDEs still need DevTools. Habit trap: always ask AI even when you know the fix → wasted credits + new bugs. Karpathy: model agrees and shrinks 1000→100 lines once you question bloat — two-and-done only if you know to question. | descript-marker |
| 00:15 | Grow technical muscle from zero | Mentoring pattern: people skip terminal/HTML/CSS → jump to React bootcamp; frameworks abstract away how things really break. Karl's Become a Design Engineer course: terminal → interactive pages with motion; meant as a reusable reference repo, not a LinkedIn certificate. Happy path ≠ eight-month syntax bootcamp. | descript-marker |
| 00:18 | Ad: course discount | Post-record note: Dive Club / Karl (KARL) = 10% off Become a Design Engineer; also in show notes. | skippable |
| 00:18 | Front of the frontend is design | Ridd: front-of-frontend is UX ownership now (feel/move/behave), not "eng lands the plane." Karl: ~20 years ago web designers owned HTML/CSS; Facebook-era product/UX/UI specialization split roles; AI is swinging back to generalists — business gets two roles in one; designers get control + accountability ("looks good in Figma" is dead). Jump in, tweak radius, open PR in minutes vs two-week ticket fights. | inferred |
| 00:21 | DDG Search Assist copyright morph | At DuckDuckGo (small team vs Google), craft goes into tiny delight almost nobody uses. Search Assist AI answer pulls images from Wikipedia; legal copyright control is a bottom-right button. Stock component dialog "worked"; Karl unprompted built a clip-path morph (circle → dialog) with dialed easing — fakery, but it feels cared about for the <1% who click. | descript-marker |
| 00:24 | Vocabulary to coach morphs | Designers need words: ask for clip-path animation, circle→dialog morph, prefer CSS over a library (bundle/perf for search). Then tune cubic bezier (easing.dev / design-engineering site tools); drop candidates and feel fast-out vs slow-out. AI springs everything — wrong when the goal is reading copyright, not bounce. More button: subtle state change so expand is noticed without being boisterous. | inferred |
| 00:28 | Creativity + craft = DE | What separates DE from front-end eng: creativity and craft — caring about the final 10% on a button that doesn't need to animate so the rare clicker feels considered (even subconsciously). Designer's mindset toward shipping: build it in the most delightful way possible. | descript-marker |
| 00:30 | Job market still wants fundamentals | Outside work you can vibe-code successfully; most employers won't trust 100% vibe into prod (Intercom mutterings of designers vibe-coding to prod noted as interesting but narrow). Michael Scott / GPS-into-the-lake: blind trust gets you partway. Will narrow as training data kills useEffect-class bugs — still a few years out; grasp fundamentals now. Gap is functional vs delightful (snappy interactions > purple-gradient slap). Ridd cites Karl line: build with vibes, ship with rigor. Karl still vibe-codes heavily; differentiator is design decisions the model won't make. | descript-marker |
| 00:34 | Personal site 5–10% details | Hover cards: take the element image, place in background, blur + enlarge; music cards do album art + fake music bars. Desktop-only delight OK when it's optional. Goal of the site stays hire/freelance/book time — details are discoverable, not upfront noise. Creativity (idea) often outranks craft difficulty (easy CSS). Portfolio hover attention = "why did you put that time in?" interest magnet; Karl stays restrained/minimal. | descript-marker |
| 00:37 | Product permission vs portfolio play | Ridd: easy to obsess hover craft on owned sites (Dive episode cards); harder at day-job product until you can massage states in code — getting that with InFlight. Expression of self moves beyond your corner of the internet when DE skills land in product. | inferred |
| 00:39 | Trap: DE ≠ master animator | Online DE culture overweights beautiful morphs. Day-job energy is mostly translate design intent → functional, beautiful, fast, efficient (search can't afford speed blocks). Permission to go all-out on tiny moments only after surrounding work is sound/performant. Aspiring DEs: no expectation you master-animate everything. | descript-marker |

## Notable Quotes

- **00:00** — **Karl:** "one of the big problems that I've found with AI generally and the code that it produces is it's very deterministic."
- **00:00** — **Karl:** "you end up with is stuff that works, but it doesn't necessarily work in the best way."
- **00:01** — **Karl:** "use effect is a thing that's very react specific. but it's something that. AI just loves to put everything inside if it can find a way to do so."
- **00:02** — **Karl:** "the AI will go on this huge rampage of trying to like, solve the flash, but not understand that it create the flash by just wrapping everything in a way. It didn't need to be wrapped."
- **00:04** — **Ridd:** "I don't necessarily have to learn everything. I just have to do a good job of curating the right pieces of knowledge and inspiration"
- **00:04** — **Karl:** "the idea of the design engineering mindset is you don't need to be an expert."
- **00:08** — **Karl:** "I'm gonna put that time into what the experience feels like just to delete a thing, because that little 10% at the end really matters"
- **00:10** — **Karl:** "if you break it down as a design problem, And try to understand like, what, what am I actually doing here?"
- **00:11** — **Karl:** "Every time I'm trying to think of an animation to get rid of something, just poof it away."
- **00:11** — **Karl:** "sometimes the best place to debug a problem is, is just in the browser."
- **00:13** — **Karl:** "it's very easy to then just always go to the AI to solve a problem."
- **00:14** — **Karl:** "if you don't know to question it, you can end up with bloated repositories"
- **00:16** — **Karl:** "you've just skipped so much important stuff and move straight to a framework. And frameworks are great, but the, the whole reason they exist to is to create a layer of abstraction."
- **00:19** — **Ridd:** "the front of the front end is design. Like that is not an engineering thing anymore."
- **00:20** — **Karl:** "with AI kind of being this leveler of. Giving designers more power and more control over the front end. I feel like we are, we're sort of swooping back into generalist territory"
- **00:21** — **Ridd:** "it looks good in Figma. It's like, nah, that's not an excuse anymore."
- **00:23** — **Karl:** "This is like a tiny little moment where I could just do something more, even though I know nobody's really gonna ever click this."
- **00:24** — **Karl:** "there is just something about that experience that makes it feel like I cared because I did care."
- **00:25** — **Karl:** "understanding a little bit about how it works gives you the right vocabulary to talk about it."
- **00:26** — **Karl:** "another thing I see a lot with these things, especially if you ask AI to build stuff, is it springs everything. Everything's a"
- **00:28** — **Karl:** "the piece that really tells a design engineer from just a front end engineer is creativity and craft"
- **00:29** — **Karl:** "Having the mindset of being someone who cares about that final 10%, like I was talking about a less than 1% clicked button."
- **00:29** — **Karl:** "that for me is the design engineer. It's somebody who. A designer's mindset towards shipping product."
- **00:30** — **Karl:** "in the job space. Like that just won't fly. Like you're not gonna see an employer, being like, cool, you know, I'm gonna trust a hundred percent vibe coding."
- **00:32** — **Karl:** "I still think we're probably like a few years off from that being a thing. So I think it's still a good time now to, to grasp on those fundamentals."
- **00:33** — **Ridd:** "build with vibes, but ship with rigor."
- **00:34** — **Karl:** "I make design decisions that an AI won't make."
- **00:35** — **Karl:** "unnecessary little details… giving people an opportunity to see that little five, 10% of like, oh, I just cared enough to decide to do that."
- **00:39** — **Karl:** "it can be easy to fall into the trap of thinking that being a great design engineer means that you are an excellent animator"
- **00:39** — **Karl:** "Most of the energy we put into stuff in like day-to-day work as a design engineer is a lot less about those kind of crafty details and kind of more about trying to translate design intent into something that is functional and beautiful and fast and efficient"
- **00:40** — **Karl:** "for anyone who is aspiring towards design engineering, it's worth knowing that there won't be an expectation that you have to be this master animator."
