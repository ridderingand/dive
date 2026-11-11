---
type: episode-digest
ip: dive-club
class: interview
status: ingested
show: club
guest: Tom Johnson
host: Ridd
title: "The most insane portfolio of 2026"
youtube_id: 6j0S1-Qg6g0
url: https://www.youtube.com/watch?v=6j0S1-Qg6g0
published: 2026-11-11
duration_min: 53
tags: [ip/dive-club, portfolios, ai-impact, vibe-coding, tool-bending, creative-process, game-feel, taste]
flags: [coded-prototypes, inflight-relevant]
source: 2026-11-11-tom-johnson.md
source_type: descript
slug: 2026-11-11-tom-johnson
generated: 2026-11-11
generator: dive-club-ideas
schema: 1
---

## Summary

Tom Johnson (https://x.com/tomjohndesign; personal site https://www.tomjohn.design/; White Knuckle case study https://www.tomjohn.design/content/whiteknuckle; the YouTube description lists him as a staff designer at Vercel, which is not said anywhere in the Descript cut) walks Ridd through the portfolio he built as a playable 3D isometric game, then through the camper-route app it spawned, and uses both to work through what it means to be a designer when agents do the making. Arc: "I've never liked my design portfolio" (best portfolios are true representations of the designer; he'd been hiding behind a wall of logos and finally took his own "show your personality" advice) → it did not start as a game: draggable cards + Dialkit easings → radial zoom layout (his wife: "not that interesting") → dark isometric space with his truck and camper, built with Three.js and assets reused from his Pilgrimage game → a town, a movie theater he used to drive past in Milwaukee, a library-gallery with a tuxedo, a rideable bike, "Welcome to Tom Johnville" → navigation was the hardest design problem (visitor vs character; click anywhere and the character plays catch-up; onboarding was cut after user-testing friends) → what the models were good (controls, assets) and bad at, and why a month of visual-style work in Pilgrimage made the portfolio possible → 3D overlaps heavily with product design (occlusion, performance, camera as an entity) → White Knuckle: Highway 120 into Yosemite, a one-shot Claude simulation of his camper, a Facebook-group response, four weeks later a world-simulating route and campsite-shade tool built on the portfolio's truck and camper → identity: output used to be the canvas decisions; he lost the "breadcrumbs", so he built a skill called Gretel and publishes raw prompts as the case study ("Oh, I'm still a designer") → Ridd's "geometry tests / geometry proofs" line → building a media studio inside the app for social video → "a designer is much more noticing the things that are wrong than making the things that are right" → AI-generated White Knuckle logo ("Did I design that?"), speed and parallel agents, "creative director with cards dropped on the desk" → public prompts, no more prompt engineering, wiggle room for happy accidents → close on a new batch of designers who will build whatever they imagine.

Core claims: a portfolio should show the person, not a wall of work; games and 3D are product design in disguise (navigation, affordance, onboarding); an experiment with no purpose can seed a real product ("if I had not done this ridiculous thing in my portfolio, I wouldn't have this crazy app"); agents erase the visible trail of design decisions, so log the prompts; taste shows up as noticing what's wrong; the output is what matters, not prompt craft.

**Evidence (coded-prototypes / inflight-relevant):** the whole portfolio and White Knuckle are built in code with Claude, no canvas handoff (portfolio ~00:03:00-00:06:00; Tom saying his time now goes to making the real thing ~00:40:23, after describing Figma-era canvases and week-long prototypes ~00:39:30-00:40:37); Ridd reviews agent output as a "creative director" and asks the agent to whip up a quick HTML page with a proposed before and after for him to review ~00:42:12-00:42:31; Tom's skill logs every vibe-coded session's prompts into a shareable record (~00:26:31). Not `prototype-feedback`: no preview-link / WIP review-round workflow discussed (his user-testing of onboarding with friends at ~00:06:48 is feedback on a live site, not prototype review).

**ASR / name notes (disclosed):** speaker labels are unreliable (Speaker 11 = Tom, Speaker = Ridd; see raw header). "Red" (Tom, ~00:51:25) → Ridd; "Mike" (Tom, ~00:34:53, "Mike, am I the designer?") is probably ASR for "Like"; left as in the export, unverified. "my cloud tell me" (~00:39:18) → Claude. "Dialkit" and "Three.js" as spoken in Descript (YouTube captions have "3JS"); "Pilgrimage" is Tom's own 3D game (spelled as in Descript and Granola). "Gretel" spelled per the Descript transcript, the YouTube chapter title and Granola (YouTube captions say "Gretle"). "Tom Johnville" per Descript and Granola (YouTube captions say "Tom Jungle"). "ientity" in the Descript marker / YouTube chapter 25:16 is a typo for identity (left as the chapter reads). "BaseDash" and "Conductor" as spoken. The YouTube-only cold open says "Verscell" (caption ASR) for Vercel. Timecodes are Descript edit-time (trusted; seconds interpolated between paragraph anchors).

**Source + YouTube offset:** Descript project 1989fd74-e20d-4d3d-be16-e2c400b579fd ("Tom Johnson – auto-edit v29 (2026-11-04)", unfiled), composition "Tom Johnson · Episode" 20b642fc-0260-4b72-92e9-51bd7f27590f (53:02; markdown export checked complete 00:00:00-00:53:00, ends on "happy to be here"). The project is not in the Deep Dives/Fall 2026 folder and carries several other compositions (clips, "Hook ideas", "ZZ Tom Johnson (order 66 experiment)", a 73:05 raw); this one was chosen because it is the only full-length episode cut and it aligns with the published video end to end (continuous offsets, final line at YT 55:42 = 00:53:00 + 2:42; YouTube is 56:11 = cut + 3:09 of inserted audio ads + 0:44 cold open/intro + 0:23 Radio plug). All timecodes in this digest are Descript edit-time. **YouTube = Descript + offset**, measured by matching ~190 Descript paragraph starts against yt-dlp auto-captions (offset constant to +/-2 s inside each range): Descript 00:00:00-~00:02:06 → **+0:44** (cold open + Ridd intro at YT 00:00-00:44; Descript 00:00:00 = YT 00:44, "I've never liked my design portfolio" caption at 00:46); ~00:02:06-~00:25:00 → **+2:09** (Paper + Framer MCP ad reads at YT ~02:50-04:13, cut in after Tom's "...when I was in Milwaukee"; "Now, on to the episode" at YT 04:13; spot checks: "Where did it start then?" Descript 00:02:20 = YT 04:28-04:30, "It's called White Knuckle" Descript ~00:15:03 = YT 17:23, "Gretel" line Descript 00:24:55 = YT 27:04); ~00:25:00-end → **+2:42** (Dive Talent Network read at YT ~27:09-27:43, cut in after Ridd's "Oh, dude, that's so good"; spot checks: Ridd's geometry line Descript 00:27:33 = YT 30:15, "a designer is much more noticing..." Descript 00:30:32 = YT 33:14-33:15, "who cares what it said" Descript 00:48:07 = YT 50:48, "tip the cap" ≈ Descript 00:51:21 = YT 54:04-54:06). Chapter cross-check: the YouTube chapter times equal Descript markers + 2:08 up to 25:16 and + 2:42 afterwards (e.g. 4:28 = 00:02:20, 17:08 = 00:15:00, 26:54 = 00:24:46 + 2:08, 30:41 = 00:27:59 + 2:42, 50:02 = 00:47:20 + 2:42), within 1 s of the measured offsets. Captions were available at ingest. For per-clip YouTube times, remap each quote individually.

## Takeaways (Granola)

Source: Granola note **"Editing Tom Johnson"** (`a2f3ccaf-aec6-4aff-8e9c-e8b910d84c24`, 2026-11-10 21:18 EST, updated 23:23 EST) in Ridd's **Dive** Granola account, folder "Dive Club Recordings". Ridd's typed private notes = highest weight; Granola-generated detail below them. Show Notes / Description / Title / Intro / Category / Subject Line belong to the Notion ship kit and are recorded only for provenance.

**Ridd's typed Takeaways:**

- Best portfolios are true representations of the designer behind them
- Learning 3D taught him how to make a product for his RV that can become a business for him. He's doing things he never thought were possible for him. Really technical and heavy engineering stuff.

**Ridd's typed Description:** how Tom (accidentally) turned his portfolio into a game · how experimenting with 3D leveled up Tom as a designer · how Tom built a modeling tool for his camper journeys · why Tom built a skill to show his prompts in case studies (the list ends on an empty bullet).

**Ridd's typed Clips:**

- Show the person behind the work, and the personalities; the best portfolios are true representations of the designer behind them (Descript ~00:00:00-00:01:16).
- How Tom's 3D led to him building a new product for his camper (Ridd: "kinda around ~16-17 min mark is the meat"; Descript ~00:15:00-00:21:50). Basically a hype message, "crazy stuff that all started with what if I could build a camper in my portfolio"; Ridd loves Tom's line about using one tool to bring it over and solve it in another; his own "lot of designers making custom tools, never seen anything like this" (~00:22:34) could be spliced in.
- Ridd note: "I FORGOT TO HIT RESUME ON THE TRANSCRIPT" in the Granola recording between roughly 7 and 23 minutes, so the relevant content has to be found in Descript, not Granola (this digest's Descript timings cover that window).
- Tom's case study format + the skill that shows your prompts alongside design directions (Descript ~00:24:02-00:27:41); include the "I'm still a designer" part and Ridd's geometry line.
- Designer is noticing things that are wrong vs. making what's right (prompting vs. direct-manipulation ideas) (Descript ~00:30:32-00:33:27).

**Ridd's typed Show Notes:** Tom's portfolio case study; White Knuckle.

**Granola-generated detail (lower weight, checked against Descript):** verified in Descript: the draggable-cards → radial layout → isometric truck-and-camper → town evolution; click-anywhere navigation with the character catching up; Highway 120 / Yosemite simulation, the Facebook-group response, four weeks of building ("over the last, what? Four weeks"), 13 data sets varying by state, shade simulation for campsites; Gretel and the raw-prompt case study; the "I'm still a designer" and geometry lines; the AI-generated White Knuckle logo ("Make 50", danger-sign unlock, knuckles was a bad idea); parallel agents ("eight tabs going in Conductor"); public prompts and wiggle room for happy accidents. Not found in the Descript cut (left out here): "2 to 3 weeks → 25 minutes" (Descript has only Tom quoting Claude's "two to three weeks" estimate, ~00:39:18, then a cut) and "20 minutes while an agent runs" (Descript reads "The compression for getting an idea out there is like, ... an hour if it's a big idea"). Attribution: "Claude slop" (~00:33:49) is Ridd's phrase, not Tom's.

**Related Granola note (provenance only, not Takeaways):** "🤿 Dive Club — Tom Johnson" (`3408a21a-3ccd-4563-b0fc-03988b1c034d`, 2026-11-04 recording, Dive account). Ridd's typed Editing Notes there: trim about 4 min of coworking-space backstory; about 26-27 min is too much context but keep the core camper context; cut the remapping-tunnels part (too in the weeds); delete everything related to Vercel (to avoid their PR process). Those cuts are already reflected in the Descript composition (no coworking story; Vercel is not spoken in the Descript cut; only a short tunnel-clearance passage at ~00:17:29-00:18:00 remains). The generated hook options in that note are ship-kit material and are not copied.

## Mile Markers

| Timecode | Topic | Key claims | Gold |
| --- | --- | --- | --- |
| 00:00:00 | YouTube cold open + intro (YouTube-only) | Not in Descript: YT 00:00-00:44 = cold open (Tom: "if I had not done this ridiculous thing in my portfolio, I wouldn't have this crazy app" and "I could build that now") + Ridd intro (Tom's portfolio, a question about what it means to be a designer today). Descript 00:00:00 = YT 00:44. | inferred |
| 00:00:00 | Why a game portfolio | Header. Never liked his portfolio or the fixation on portfolios; the best portfolios are true representations of the designer; hid behind a minimal wall-of-logos site; motivation was "just do something fun"; told portfolio-review requesters to show their personality and make it a playground, needed to take his own advice. | takeaway |
| 00:01:16 | What he made, and that it never started as a game | Orientation: a game with buildings populated by memorable things (a movie theater from Milwaukee); "it literally did not start as a game." | inferred |
| 00:02:06 | Ads (skippable; YouTube-only) | Not in Descript. Paper and Framer MCP reads at YT ~02:50-04:13. Offset steps +0:44 → +2:09. | inferred |
| 00:02:20 | How it started: case study | Header. Draggable cards with Dialkit easings → radial zoom layout (his wife: "not that interesting"; didn't scale) → dark isometric space with his truck and camper using Pilgrimage assets → a town, a library-gallery with classical music and a tuxedo, a rideable bike. | descript-marker |
| 00:04:21 | Navigation is the hard design problem | Is the visitor the character, or Tom? Click anywhere like a website and the character plays catch-up so it never feels slow; 3D controls (zoom, rotate, first vs third person), hover chips, showing doorways; it made him "appreciate designers". | inferred |
| 00:06:38 | Onboarding and user-testing a portfolio | Built a 4-5 step onboarding that taught the game; friends didn't want it; removed it. | inferred |
| 00:07:05 | What the models were good (and bad) at | Header. Claude was good at wiring controls to cameras and generating assets from photos of his office; the consistent style came from a month of visual work in Pilgrimage, ported over ("don't fork this repo, but kind of fork it"); buildings are Three.js assets with a shader, characters rendered as sprites. | descript-marker |
| 00:10:21 | What impression should a portfolio give | "Are you a game designer now?" No: the representation he wants is a person who wants to have fun; propaganda-poster "Welcome to Tom Johnville"; if you're an agency you'd do it differently, but for "click my link and know who I am", have fun. | takeaway |
| 00:12:17 | Break every new tool | When a new tool comes out his first reaction is "let's break it": Webflow, Figma, now Claude; look for the edge of where you can be creative. | inferred |
| 00:13:44 | Do the learnings carry over? | Header. Ridd asks whether the experiment translates to real product work. | descript-marker |
| 00:13:55 | How working in 3D levels Tom up as a designer | Header. A year ago he'd say little overlap; now "a massive amount": occlusion, performance, the camera treated like a cursor or device; assets, trees and rabbits reused from Pilgrimage. | descript-marker |
| 00:15:00 | White Knuckle | Header. Built the camper rig to see what models can generate; Highway 120 into Yosemite: his camper nav says he can make it, he doesn't believe it, so Claude simulates the rig on a 3D map; a Facebook group of campers asks him to build it; four weeks later an app built on the portfolio's truck and camper. | takeaway |
| 00:17:00 | "If I had not done this ridiculous thing in my portfolio" | The portfolio experiment seeded the product; real turning radiuses (46 ft behind him), tunnel approaches, he could literally destroy his house if he gets a tunnel approach wrong. | takeaway |
| 00:18:03 | How Tom builds White Knuckle | Header. Prompts Claude in the evening and reviews in the morning; a full world-simulating generator with interchanges, procedurally generated bridges and parking lots, truck pin length and hitch types, brake overheating with ambient temperature; 13 data sets that vary by state (open LiDAR in some states, not New York). | takeaway |
| 00:20:26 | Satellite-to-campground model and shade | Generates a realistic 3D campground from satellite imagery to check fit and shade by time of day for his wife's booking. | takeaway |
| 00:21:16 | One tool leads to another | "It all started because of this weird idea of what if I put my camper in my portfolio"; solve in one tool, bring it into another; the woodworking-tools analogy. | takeaway |
| 00:22:13 | Ridd: the furthest I've seen a designer go | Custom tools of this weight, a product that couldn't exist economically two years ago; "the first person maybe on planet Earth" with the ability, motive and time. | takeaway |
| 00:23:08 | How this is shaping his identity as a designer | Header. Designer identity used to be tied to canvas output and visible decisions; working this way he lost the ability to show the decisions. | descript-marker |
| 00:24:02 | Lost breadcrumbs / Gretel | Header. Prompts are the "rough stumbling around on the canvas"; he is making a skill called Gretel because he lost his breadcrumbs; couldn't answer "did you explore this?" on a project he coded alone. | takeaway |
| 00:24:46 | Adding prompts to your case studies | Header. The White Knuckle case study is just the prompts used along the way: "Right here. That's the prompt I sent"; "Oh, I'm still a designer"; the skill dumps a decision log for any vibe-coded tool, shareable as context for other models. | takeaway |
| 00:25:00 | Dive Talent Network ad (skippable; YouTube-only) | Not in Descript. Talent Network read at YT ~27:09-27:43. Offset steps +2:09 → +2:42. | inferred |
| 00:27:01 | Perceived value of an idea; the geometry line | Ridd: you can lose perceived quality when an agent just runs overnight; "we have all of potentially the right answers for the geometry tests but we don't have the geometry proofs anymore"; Tom: not every decision needs showing, only the ones you're proud of. | takeaway |
| 00:27:59 | Building a custom video tool for shorts | Header. A media studio inside White Knuckle generates social scenes with chosen camera shots instead of sloppy phone screen recordings; "am I a designer now? Am I doing media?"; portfolio has a static "pro" mirror of every game page. | descript-marker |
| 00:29:36 | Ridd's prompts look like Tom's | Ridd: best prompts are now "This looks messy over here"; "Am I a designer?" worry. | inferred |
| 00:30:32 | Noticing what's wrong | Header. a designer is much more noticing the things that are wrong than making the things that are right; hotel and app examples; prompting is a design exercise ("no, not that"); models are "unbelievably bad at like making something that's fun to use" (the initial loading modal); he lacked the vernacular for 3D character rigging. | takeaway |
| 00:33:27 | How our design workflows are changing | Header. Ridd: he no longer tweaks a bad component by hand, he prompts "show me 10", then 10 more, like two and four, and picks; "dare I say taste... I don't wanna be the taste is the moat kinda person." | descript-marker |
| 00:35:20 | The AI-generated logo: "Did I design that?" | "Make 50" logos for White Knuckle; knuckles was a bad idea, danger signs worked and a yellow semantic colour became the brand; glad he didn't spend two hours exploring knuckles; Ridd: proud of the quality, less proud of the process. | inferred |
| 00:38:27 | Designers used to be faster than everyone | Waiting weeks for dev gave designers time for "down and to the right" exploration, much of it spent "because we have time"; the compression is now "an hour if it's a big idea"; "sweet baby child Tom" dragging things without Flexbox; his time now goes to making the real thing. | inferred |
| 00:40:50 | Identity when AI makes | Header. Pride in Figma speed ("you're fast in Figma"), now "Oh, I gotta drag the box?"; bigger-picture decisions across the whole app; Ridd: edge cases as a prompt, a quick HTML before/after for his creative-director review, and permission to focus on what matters. | descript-marker |
| 00:42:52 | Parallel agents and the creative-director trap | Ridd: eight tabs going in Conductor, cards to review dropped on the desk, worry about atrophying problem-solving muscles; Tom: less understanding of how data and rendering are implemented than if he'd done it by hand (BaseDash charts as the contrast). | inferred |
| 00:46:00 | Theater actors vs TV | The analogy for losing the raw, live act of designing; the scale is bigger but more disconnected; the process still exists, only the output and the decisions along the way are showcased very differently. | inferred |
| 00:47:20 | Prompts in public | Header. Ridd wants Tom's skill public; Tom on why people are precious about prompts ("who cares what it said"); Ridd: no more prompt engineering, his insecurity is the wiggle room he leaves for happy accidents. | descript-marker |
| 00:50:21 | Close: stretching further than anyone | Ridd thanks Tom for putting the prompt journey in public; Tom: a new batch of designers will start careers without story-point limits and "I could build that now"; Ridd's sign-off at ~00:52:29. | inferred |
| 00:53:02 | Radio plug (skippable; YouTube-only) | Not in Descript. Dive Radio plug after the sign-off (YT ~55:44-56:07). | inferred |

## Notable Quotes

Descript edit-time (seconds interpolated between paragraph anchors, +/-3 s); YouTube time = Descript + the offset for that range (cross-checked against auto-captions on most).

- **00:00:14** (YT 00:58) — **Tom Johnson:** "when I have seen the best portfolios, they are true representations of the designer behind them. Like, I can see their personality"
- **00:01:11** (YT 01:55) — **Tom Johnson:** "I wanna see the, the person behind the work, not necessarily just the work. I needed to take my own advice there"
- **00:02:14** (YT 04:23) — **Tom Johnson:** "it literally did not start as a game. I wasn't like, "Let's make a game with my face in it.""
- **00:05:20** (YT 07:29) — **Tom Johnson:** "It made me appreciate designers quite a bit because there's so much that is Not intuitive from a, from a flat interface designer."
- **00:12:20** (YT 14:29) — **Tom Johnson:** "when, when a new tool comes out in the market, my first reaction is like, let's, let's break it."
- **00:14:07** (YT 16:16) — **Tom Johnson:** "And now having done this, there is a massive amount of overlap."
- **00:17:14** (YT 19:23) — **Tom Johnson:** "if I had not done this ridiculous thing in my portfolio, I wouldn't have this crazy app"
- **00:21:16** (YT 23:25) — **Tom Johnson:** "it all started because of this weird idea of what if I put my camper in my portfolio."
- **00:21:23** (YT 23:32) — **Tom Johnson:** "You start realizing I can do that with one tool, I can bring that over and I can solve it in another tool, and they just beget new ideas."
- **00:22:34** (YT 24:43) — **Ridd:** "A lot of designers making custom tools. I've never seen anything like this."
- **00:24:55** (YT 27:04) — **Tom Johnson:** "I'm calling it Gretel, 'cause I've realized in working I've lost my breadcrumbs."
- **00:25:58** (YT 28:40) — **Tom Johnson:** "it's literally the sloppy prompt that was around this image shows some kind of a rough approximation of like what I was thinking when I'm going back there."
- **00:26:22** (YT 29:04) — **Tom Johnson:** "As soon as I did this, I was like, "Oh, I'm still a designer.""
- **00:27:33** (YT 30:15) — **Ridd:** "it feels like we have all of potentially the right answers for the geometry tests but we don't have the geometry proofs anymore"
- **00:30:32** (YT 33:14) — **Tom Johnson:** "I think that a designer is much more noticing the things that are wrong Than it is making the things that are right."
- **00:32:11** (YT 34:53) — **Tom Johnson:** "unbelievably bad at like making something that's fun to use."
- **00:34:46** (YT 37:28) — **Ridd:** "My God, I don't wanna be the taste is the moat kinda person, you know?"
- **00:35:51** (YT 38:33) — **Tom Johnson:** "Did I design that?"
- **00:37:20** (YT 40:02) — **Tom Johnson:** "I'm so glad I didn't spend two hours exploring knuckles because it was just a waste of time."
- **00:41:19** (YT 44:01) — **Tom Johnson:** "But now I'm like, "Oh, I gotta drag the box?""
- **00:43:29** (YT 46:11) — **Ridd:** "I feel like I'm, like, a creative director that's just getting, like, cards to review just, like, dropped on the desk instead of, like, immersing myself in a problem."
- **00:48:07** (YT 50:49) — **Tom Johnson:** "Who cares if you had grammar or you know, typos? It doesn't matter because the AI will be able to understand it, and, the final output is what matters."
- **00:48:30** (YT 51:12) — **Ridd:** "There's no prompt engineering anymore."
- **00:48:58** (YT 51:40) — **Ridd:** "I leave increasingly large amounts of wiggle room for happy accidents and seeing things that I don't expect than I used to."
- **00:52:10** (YT 54:52) — **Tom Johnson:** "And now I look at them, I'm like, "I could build that now.""
