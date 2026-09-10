---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: jEEbjiC4JE0
slug: 2026-07-08-meaghan-choi
source_type: descript
source: descript://Meaghan Choi
guest: Meaghan Choi
host: Ridd
title: "Designing Claude Code (and what's coming next)"
published: 2026-07-08
duration_min: 54
generated: 2026-09-10
generator: dive-club-ideas
---


## [00:00:00] Meaghan's beginnings at Anthropic

[00:00:00] **Speaker 13:** So I joined late 2024. This is, back when no one even knew outside of, like, probably the core tech industry what Anthropic was. Like, everyone was so focused on ChatGPT and OpenAI at the time, and Anthropic was primarily an API business it didn't really have a consumer arm. There was, like, a Claude app, but it just hadn't had its takeoff moment yet.

[00:00:18] **Speaker 13:** And so when I joined, I remember people asking me, "Where are you going?" I'm like, "Oh, I'm going to Anthropic." They're like, "What's,

[00:00:23] **Speaker 4:** What's, what's that?

[00:00:24] **Speaker 13:** What's that? Never, never heard of her." I was really excited because I spent a lot of my career working on developer platforms and in emerging tech specifically, and I just feel like when you are building in, like, the tech research area or, like, new tech, developers are the most innovative and the most critical of everything that you'll ever build.

[00:00:41] **Speaker 13:** So you get to see, like, the real use cases live of what you're inventing. Maybe about three or four months into my time at Anthropic, someone had, like, demoed this, like, weird CLI pipeline of having Claude edit your code directly. Took, like, 45 minutes. It was [00:01:00] so slow. It required, this extraordinarily complex setup of, like, setting up, remote workspace, downloading all these scripts, like, doing all this, like, local dev that was extremely heavy, and then it could kind of sometimes write good code, sort of.

[00:01:15] **Speaker 13:** But I remember seeing it and I was like: Holy crap, that's so cool. I gotta try it. So I did, and I got in touch with the people who were demoing it, which was Boris and Adam and Kat and a few other folks internally. They were doing it as an experimental pod. They didn't have a designer because they're like, "We don't need a designer in the CLI."

[00:01:32] **Speaker 13:** I think I DM'd my manager. I was like, "I think this is gonna be big. I wanna design moonlight for this." My manager's like, "Sure, go ahead. Go do it." and that's kinda how I got started, and I never stopped.

[00:01:41] **Speaker 3:** I love that the expectation would be like, "Well, we don't even need a designer. It's a CLI." Which I think actually probably would've been my reaction even like a year and a half ago. It wouldn't have been obvious to me where a designer would slot in. So where did you slot in? Like, what were some of the things that you even were looking for in terms of like the challenges or opportunities that were [00:02:00] unique to designing within the terminal?


## [00:02:01] What makes designing terminal UX unique

[00:02:01] **Speaker 13:** I think there's actually a lot of design of the terminal that's like the invisible thinking that goes behind building a product. That's one that I think I expect and hire for at Anthropic, and I think has been the long unsung hero of product designers everywhere, is like the mental model, the interaction model, like the base primitives that compose how you think about what you're interacting with.

[00:02:23] **Speaker 13:** So there's a lot of that that goes into it. And then the ultimate form factor of the CLI that made it usable was a chat. So you, there was so much to design in that back and forth in between the chats, that made it feel more warm, more delightful, that communicated the statefulness of it, I have actually designed for CLIs before. This wasn't my first time doing it. That's why I knew that it would need the help. And I was like, wow, this is gonna be fun. Like the challenges and constraints of designing for a CLI make it a very innovative space to play actually.

[00:02:48] **Speaker 3:** Okay, let's talk about that then, because I'm sure there were a ton of evolutions that were happening as you're getting usage and playing with it internally. So help us understand what [00:03:00] design looks like at a CLI level. Like, what were some of those iterations that you were doing and the role that design played?

[00:03:06] **Speaker 13:** So I would say some of them are just like how you communicate the tool calling and statuses. Like it's the exact same kind of design thinking that you would have on a UI, except the verticalization of how messages stream. You can't scroll or jump back in the same way. Like everything scrolls together in a CLI.

[00:03:23] **Speaker 13:** So as things render in, you have to really think about where it's loading, how much information that you're showing. Because you're serving developers, they have very specific expectations of the CLI actually, that you want it to be extraordinarily information dense. Like you would show more in a CLI than you would ever probably show in like a GUI, like a graphical interface, because there's no such thing as progressive disclosure, so it's just disclose. Especially in the early days when the models weren't as good, we're like, "Oh, we gotta show people what it's doing because we're not sure if it's gonna go off the rails a little bit." and then keyboard shortcuts are massive, I would say.

[00:03:55] **Speaker 13:** Like there are power tools like Figma and other places where they do consider keyboard heavier, but like the [00:04:00] primary way you interact with a terminal is keyboard shortcuts. I distinctly remember we had this huge debate for a very, very long time between myself and some of the engineers about what the shortcut should be for modes.

[00:04:11] **Speaker 13:** Like if you've ever done plan mode or auto mode, what we call it, and then what the keyboard shortcut is, and if we have to change the UI so that you know what mode you're in. there was a few iterations there, but the biggest debate was actually the keyboard shortcut to do it, because it needed to be fast, but it couldn't overlap with any existing shortcuts in the terminal, which there are many of

[00:04:30] **Speaker 3:** Yeah, I was about to say, like, you're building in a space where there's simultaneously so much muscle memory, but then, the core concept of what Claude Code was, was fundamentally novel. Probably even stretched some engineers in the beginning. Like, were there, mindset shifts that you were designing for in those early days?

[00:04:47] **Speaker 3:** Like, how'd you even get people comfortable with what a CLI could do

[00:04:51] **Speaker 13:** I think the biggest hurdle to overcome was making it feel like a chat you could go back and forth with, ' CLIs kind of have that where you, like, print and then [00:05:00] it, like, you send a command, it gives an output, sends a command, it gives an output. And so we leaned into that a lot to, like, anchor the paradigm.

[00:05:06] **Speaker 13:** But I think the fundamental shift was actually it reading your entire file base and then writing to it as well. And those are, like, the two big mechanical differences that helped make Claude Code effective. Like, I think the most magical moment that you always see people have with Claude Code is when it actually makes an edit for you with the context of everything that it knows about where you're working already.

[00:05:28] **Speaker 13:** And you have to remember this is back in the era where everyone was, like, copying and pasting parts of their files into, like, a chat and then copying and pasting the output back into their files. And we all knew the pain of that. So seeing it happen in front of you without having to do that is, like, the moment that people realize, like, "Holy crap, this is something amazing.

[00:05:45] **Speaker 13:** Like, this is gonna change how we work." And so we were optimizing a lot for that first feeling, actually.

[00:05:50] **Speaker 3:** The, the first feeling for me was I remember I was watching Dan Holick use Claude Code, and he was the one who introduced me to it. I don't even remember when this was, but maybe last fall or something like that.

[00:05:59] **Speaker 3:** And you, you [00:06:00] type Claude, and then you get that full screen, and you had the giant orange box.

[00:06:04] **Speaker 3:** That broke my brain a little bit 'cause I, I, I had never even... My-- I had no CLI experience at all. And seeing that, where I'm like immediately, "Whoa, what's happening? Like, where am I? This is very different."

[00:06:15] **Speaker 13:** I think that was actually probably the most fun thing I ever designed in the Claude experience, the Claude mascot. Beloved, fun, incredible, generated by Claude actually, which I think is a really nice touch. I think it's really important that you feel a little bit of warmth from these tools.

[00:06:31] **Speaker 13:** You don't wanna be super, super detached with them. And also, I think like Claude on its own has a very unique personality that makes it delightful to work with, in my opinion. And so I wanted to really represent that visually. I love ASCII art. I think it's so fun. There was this deep period of .nfo files or info files, if you remember back in the era of software development, where like you would have to download all these...

[00:06:58] **Speaker 13:** You would have to script to download a lot of [00:07:00] apps, and a lot of them would include these like incredibly artistically drawn ASCII arts, like things that you couldn't even imagine. And at the time I was like, "Yeah, I wanna bring this into our app." Like, I think this would be really, really fun. And we did a ton of exploration with the brand team actually on like all the backgrounds that you see now, like all the animations that you see now to really like make a world that feels like you're in the computer with Claude.

[00:07:23] **Speaker 13:** And I think that's the vibe that we're trying to go for.

[00:07:25] **Speaker 3:** It reminded me of the old, like, aim away messages. Did you ever do those? Where I, I would do the same thing. I would take the blocks, and I would make little scrolling patterns and, like, art drawings. So it was like this was my little home, was just my little dots on my aim away message.


## [00:07:39] Designing the new Claude Artifacts

[00:07:39] **Speaker 3:** Okay, I wanna keep drilling into your reality as someone who is designing but isn't slinging pixels around nearly as much as I have, at least in, in previous roles in my career. And another release that stood out to me was this Artifacts release, where you kinda break it down and you realize, well, okay, the inputs can be anything and the outputs are, like, [00:08:00] completely non-deterministic.

[00:08:02] **Speaker 3:** What is the role of design in a feature process and, and, uh, release like that? So Give us a little bit of a behind-the-scenes for Artifacts and what that was like.

[00:08:11] **Speaker 13:** I think there was a really strong kind of emerging culture of people wanting more than just a transcript as an output, like something shareable, something visual. We've like learned a lot over the years that it's not just like text that people want, but there's like a ritual visual, you know? We're all designers, so we understand that.

[00:08:29] **Speaker 13:** And, Claude is really good at coding, like excellent at coding. And so as that is emerging, there was a pattern of folks, and I used to do this in my workflow as well, of constantly asking Claude to generate HTML files for them, 'cause it's fast, it's snappy, it gets something like put together. Claude's really good at making it, and then it's really quick to iterate on top of actually.

[00:08:47] **Speaker 13:** And if done right, you can also share it, which was a big part of it. We would start earlier starting to take screenshots of these files. Afterwards, just like send HTML files to each other so you could review it.

[00:08:57] **Speaker 3:** I text HTML files way too much

[00:08:59] **Speaker 13:** which is [00:09:00] crazy. Like it's crazy that we're sending each other HTML files. It's actually 

[00:09:02] **Speaker 3:** Yeah. I didn't even know you could. I was like, I literally asked Kyle, I was like, "I have this HTML file." I was like... I just didn't even think that iMessage supported it. He's just like, "What are you talking about? Drag it into iMessage." And I did it and hit enter, and I'm like, "No way." Now I do it all the time

[00:09:13] **Speaker 13:** Right, right. But if you're sending someone an HTML file, it's like, didn't we invent the internet? Like, why are we,

[00:09:18] **Speaker 3:** Yeah.

[00:09:18] **Speaker 3:** It feels 

[00:09:19] **Speaker 13:** why are we doing this right now? And maybe like this kind of highlights the workflow. It's like, wow, a lot of people were doing it.

[00:09:23] **Speaker 13:** I was doing it. Can we make this something that's easier to use so you don't have to ask Claude to do it, so Claude does it automatically? Oh, what are we doing with it afterwards? I actually wanna send it to someone or share it with someone. I want it to be live and iterable. So as we were using it, as we build it out, we start to uncover the features that we want out of we're using it, and we build it into a product.

[00:09:41] **Speaker 13:** We're like, I most commonly use these for prototypes and when I'm iterating on design. Our data scientists most commonly use it to make dashboards. Our engineers use it to make tech specs or to visualize PRs or do research or design docs for the code bases. And then you wanna send it to someone, so let's host these.

[00:09:58] **Speaker 13:** Let's make them shareable so that [00:10:00] anyone can access them. Oh, I actually wanna be able to send an older version but keep working on it. Oh, let's add version control for these so that you, can share s- and pin a specific version, or you can share the latest version so they're live. So a lot of the way that we kind of iterate on these is we build for ourselves, we test for the broader adoption, and then we add features that we find useful, and it ends up being useful for a lot of people.

[00:10:21] **Speaker 13:** Or we get feedback from other folks on what else is useful to them, and we build it in, and we end up with a product. And the interesting part of that is some people might not consider it traditionally design, but I do. Like, what is the shape of this? It wasn't called Artifacts to begin with. We weren't even sure what it would be like.

[00:10:36] **Speaker 13:** We were just sending HTML things. We didn't really care about the name or the packaging at the beginning. We cared about the workflow. And the deeper we went into it, the deeper we're like, how do we fit this into someone's mental model so it's not something that they have to learn, it's just something they get or have?

[00:10:48] **Speaker 13:** Or is it important for people to learn what it is so they know how to use it? And those workflows are really where the design comes in. The UI part of itself is extremely simple because in my goal, we're trying not to [00:11:00] invent new UI. We want it to feel so natural that it just becomes intrinsically part of your workflow.

[00:11:04] **Speaker 13:** There's a designer here on the Claude code team whose mantra is excellent, and he's like, "We're designing tools for people to get work done. The moment you notice the tool is the moment we failed." Like it should be totally out of your way, and I think that's a great way to design productivity tools.

[00:11:17] **Speaker 3:** let's help people imagine how they could use Artifacts. So can you talk a little bit about, you mentioned sharing prototypes. What's that workflow look like for you? What are you trying to accomplish?

[00:11:25] **Speaker 13:** So I'd say like a standard way I would use artifacts is, I'll get a feature request from a team for like some design support, and as opposed to me doing any design work, I'll just get Claude to generate an artifact or, I'll ask them to generate an artifact of what they should be, or sometimes I'll just tell them to use Claude Design to generate that as well, and then to send it to me and I'll review it.

[00:11:45] **Speaker 13:** And then I will get my Claude to iterate on that artifact if it needs any feedback or I'll DM them the feedback directly. And then we kind of have a live version of like where we started and where we're trying to go. And then Claude can actually ship that final version. And because it's [00:12:00] baked into your code base, once it feels mid-fidelity, I actually ask Claude to build it based off of our actual components.

[00:12:06] **Speaker 13:** And so it no longer becomes just an HTML artifact, but a shareable prototype that then we check into the repository as well. And so it like grows as we get more sophisticated in a feature that then eventually becomes a pull request. 

[00:12:19] **Speaker 3:** Is there like a fidelity cap on what, like, you know, is it an approximation of what you're trying to build? Uh, is that like the ceiling where it's more useful early stage? Or like I'm trying to figure out exactly how that would fit into I'm actually trying to ship something

[00:12:34] **Speaker 13:** I think the benefit of it being in an HTML artifact is that it's so fast to iterate on, and when you're in the early stages, you really wanna get those iteration loops in. And then once you have the right shape of it, I think it's easy to switch from an artifact because Claude is aware of it into a PR.

[00:12:51] **Speaker 13:** That's kind of the transition I go for. So we're going from like early ideation and feedback to a decision, make it a PR so that you can just ship it when you feel like it's ready.

[00:12:59] **Speaker 3:** [00:13:00] the way that I would send Figma files, like it just didn't really work. Like if I'm trying to send it to like an exec member, I could never get them to go into the canvas or anything like that. But now I'm like, I could have created... It's not even a prototype.

[00:13:12] **Speaker 3:** It's almost like an interactive report that includes a prototype. M- now I'm like, man, could you even build different ways for them to like express what they like or different intent pieces and then capture all of that? And like, it's kind of exploding what I think about this workflow in terms of the designer's job of visualizing ideas, sourcing opinions and, and, uh, ideas from the rest of the team, and then like tightening that loop as much as possible.

[00:13:36] **Speaker 3:** I can see how this would be a big, big

[00:13:37] **Speaker 13:** It's almost like a mini microsite and decision log in itself. Like often I will ask Claude to actually pull the data or pull any research I have from like our BigQuery, Slack, any docs that we have on this and like summarize it at the top and then put a goal that we're trying to accomplish. Churn out like three to four versions of the design.

[00:13:58] **Speaker 13:** If it's more complex, I'll ask [00:14:00] it to break out actually the different work streams that we need to work on and then put proposals for there. And then I will ask Claude to review its own work in the artifact and like leave comments for me so I can see it, and then I'll start iterating on there. The interesting thing is I often have multiple artifacts in one of these.

[00:14:18] **Speaker 13:** Like I'll have an overview one, and then I'll have side ones for all the iterations on the overview one I wanna do, and then I tell it to send it all back to the main artifact. And that 

[00:14:25] **Speaker 3:** Are these separate links or is it like a table of contents almost?

[00:14:28] **Speaker 13:** they're separate links, but they can link to each other if you 

[00:14:30] **Speaker 3:** Oh, cool. 

[00:14:31] **Speaker 13:** And so I'll ask Claude like, "Hey, like I wanna do a deep dive on like the entry points," let's say.

[00:14:35] **Speaker 13:** Let's like prototype five different entry points. I like option A. Mark that I chose option A and leave a link there to the old artifact so if anyone's curious that I did the exploration, they can like see the decision log that I made

[00:14:46] **Speaker 3:** Dang, that's crazy. This is like a whole set of design challenges in itself in terms of just thinking about the artifact journey that you wanna create for people

[00:14:54] **Speaker 13:** And I think the beautiful thing about artifacts and probably the challenging part of it is that it's so open-ended. Like, [00:15:00] because it's truly anything, it can be anything that you want it to be

[00:15:04] **Speaker 3:** My brain's racing right now. I'm like, I'm like, I'm like 80% having this conversation and then 20% thinking about what I'm gonna do right afterwards. Because something I was doing literally last night was I am building on top of the GitHub API, and it's a little-- I, I know maybe a good chunk of the metadata that I would be able to have available from that, but there's so much that I don't know too.

[00:15:24] **Speaker 3:** So I just sent Claude, I was like, "Go do a research report effectively, and given this set of goals, what is all of the re- relevant metadata that I should consider using?" But I didn't want that as a block of text, so I had it make it into HTML, and then I had it build like each piece of metadata as a multi-select, so I could just click and then get like a, okay, like, you know, these are the seven things that I've selected, and you can feed that back as context into Claude.

[00:15:49] **Speaker 3:** But what I really wanted to do was to send that to two other people and be like, "Go through and let me know which pieces of metadata speak to you. Like what would be the most compelling [00:16:00] thing that you would wanna see on a user profile?" And then to be able to like compare the results and then have like a version history within that.

[00:16:05] **Speaker 3:** And y- yeah, very limiting when you're doing like the standalone HTML, but I did that wrong. Like I should have been using artifacts for

[00:16:12] **Speaker 13:** Yeah, And it makes them just, like, infinitely more capable and shareable. I think the sharing is really the big part. And, like, we're gonna layer more on top of it. We're, like, so early in this journey and a lot more is coming. So you can just imagine all the things that you would really feel like you wanna do, we also feel like we wanna do, and, it's kinda there.

[00:16:27] **Speaker 3:** Yeah. 

[00:16:28] **Speaker 13:** about it. 

[00:16:28] **Speaker 3:** That's the smirk of somebody who already has the next version built but definitely cannot talk about it yet.

[00:16:32] **Speaker 13:** Yeah, it's exciting. I, I really like it. You know, I never thought we'd go back to HTML as, like, the main form factor for code and the main framework we use, but it's pretty powerful. It's pretty great. Speed means a lot.


## [00:16:43] Why Claude Tag is the next big Anthropic product

[00:16:43] **Speaker 3:** Okay, so we talked about like the social layer of artifacts a little bit, but assuming there's more on the bone in terms of how you work specifically and the ways that you're collaborating with the models. been there, I mean, like a year and a half. We were joking before this about how it feels like we're aging in dog years.

[00:16:59] **Speaker 3:** So [00:17:00] like a year and a half worth of reps brainstorming with Claude is almost an eternity at this point. And so when you're working on maybe early stage, more ambiguous, meaty problem spaces, what are some of the ways that you've evolved how you collaborate with the models?

[00:17:15] **Speaker 13:** Man, I am like constantly having both existential, personal kind of big brain thinky discussions with my Claudes, and then also very tactical execution work. And the beauty of how we now work here is that it's all together, so I don't really have to code switch in between those two, which is I think our old way of working.

[00:17:35] **Speaker 13:** It's all kind of built in together, and I have like one Claude channel that's like my regurgitated brain in Slack. I actually do it all in Slack. It's crazy. It might be like a crazy workflow, but most of my work is done in Slack. Yeah. 

[00:17:47] **Speaker 3:** Whoa, I didn't see that coming

[00:17:49] **Speaker 13:** Yeah, if you see the Claude Tag launch, and I think this is like a big one that, uh, we can chat about a little bit more.

[00:17:53] **Speaker 13:** A lot of my both thinking and execution work is all done there, and I'm generating so much ideas, and I'm [00:18:00] going back and forth with Claude at a high level and a lower level of execution. 

[00:18:03] **Speaker 3:** Okay, pause. Let's talk about CloudTag then, because I did not expect you to be interfacing predominantly in Slack. So give us a little bit of context for what the heck that is. I remember seeing it on Twitter, but it didn't immediately... Like, uh, it was clear that it killed a bunch of startups, but it wasn't immediately clear what it unlocked.

[00:18:20] **Speaker 3:** So why is that a big deal, and, and why do you think that designer's gonna be using that more?

[00:18:25] **Speaker 13:** Yeah. So I think Claude Tag is a really hard concept to wrap your head around transparently. Like, we had a lot of challenges internally, and we're still trying to work through exactly how to explain it to people, because it's one of those products, somewhat similarly to Claude Code, that I think you have to use in order to really feel.

[00:18:41] **Speaker 13:** But it takes a little bit of hurdle to get to a point of making it useful. In the same way that it takes a lot to convince a non-engineer to download a CLI tool and be in the terminal to be working, and yet we've seen a lot of people do it now. I think Claude Tag has a similar kind of leap. The way to look at it is it's an, an entire paradigm shift in how [00:19:00] you work with Claude.

[00:19:01] **Speaker 13:** So today, you're working with Claude as a tool. You're giving it direction, and then it's following that direction, giving you a feedback. It's like in and out, in and out, in and out. And it's all single player, it's all just you, and it's all very session-based. Like, you spin up one Claude, you spin up another Claude, they're kind of separate from each other.

[00:19:16] **Speaker 13:** Yes, there is like empty files, but it's a little bit like, it still feels like everything's quite separated, and as you mentioned, sharing is a problem. What Claude Tag introduces is you're not working with a bunch of different Claudes. You're working with Claude, a single Claude, actually. And not just you working with a single Claude, but everyone in your organization is working with that Claude

[00:19:37] **Speaker 13:** man, how do I describe this?

[00:19:38] **Speaker 13:** I think it's hard because, like, the human mind is limited to, like, what we can comprehend, but this is like a Claude that works differently than a human. Like, you got, kinda gotta let yourself take that leap and realize like, oh, Claude can have thousands of simultaneous conversations while you as a human can probably have four or five.

[00:19:52] **Speaker 13:** And so it's having those thousands of simultaneous conversations, and it's all operating on a shared org knowledge and a shared memory layer.

[00:19:59] **Speaker 13:** it [00:20:00] also has access to its own set of tools. As opposed to being limited to your own user MCPs, your organization can give Claude its own credentials so that it can have its own GitHub access, its own, like, Google access, its own, like, Asana access.

[00:20:13] **Speaker 13:** And so it can take actions as it needs to be configured as a member of your organization. And so what that looks like is as I'm working with Claude on one feature, it will pull in all the knowledge of all the engineers working on it in a different channel or in a different documentation or in a different code base.

[00:20:28] **Speaker 13:** All the PMs that go to market, like all the other pieces that are organizationally happening, it knows about, but it also knows that I'm working on the design side of it. So when we're riffing together, it's giving me feedback and direction on what design could look like and how it relates to all the other pieces that are going on in the organization as well, without need- me needing to be in like 30 different meetings for it to happen I just like hold all this in my head. Like, Claude's holding it in my head for me, and it's,

[00:20:51] **Speaker 13:** it's so proactive as well in a way that our existing Claudes are. It, like, runs infinitely for everyone. And [00:21:00] so as updates are happening in other channels, sometimes I'm talking, it's like, "Oh, hey, so and so just made a decision here about something you were asking about.

[00:21:06] **Speaker 13:** This is how you can update your thinking," or, "This is something that you should talk to them about because it's slightly different from how you see it." And so it just, like, makes it so much faster to have these, like, big discussions And then on the ship side of things, because it's so proactive, because it's so integrated, a lot of my PRs are written actually through Slack right now.

[00:21:24] **Speaker 13:** Is that a crazy thing to 

[00:21:25] **Speaker 13:** say? 

[00:21:25] **Speaker 3:** crazy. Yeah,

[00:21:26] **Speaker 13:** is that like a crazy thing to say? 

[00:21:28] **Speaker 13:** I can actually share, I put together like some screenshots of what it looks like, like some examples that I copied and pasted with a little bit of redacting into what some of my conversations with CloudTag look like. We had a lot of discussion on this because it is a new mental model. We don't want you to think that this Claude, which is user segmented, is the same as, like, this organizational Claude because it's so open. Like, there's a little bit there. Like, we want people to shift how they're thinking about how they work with this Claude.

[00:21:54] **Speaker 13:** The crazy part is we use Claude Tag to build Claude Tag, so it's very meta. like I was using Claude Tag to update Claude [00:22:00] Tag, and it was, it's aware that it's Claude Tag. I've had some crazy conversations with Claude where I'm like, "Do you know you're Claude?" Like, "What do you think this should be because you are Claude Tag?" And then it'll go through, if the creator, it'll go through its transcripts of like Anthropic or Anth, that's what we call ourselves, using Claude Tag and be like, "Oh," like, "this is what I think it should be because this is all the feedback I'm getting in the feedback channel about myself that it's managing."

[00:22:22] **Speaker 3:** Dang, that's trippy

[00:22:23] **Speaker 13:** It's so crazy. but this is an example of me. I have a Megan Claude channel. I keep it open 'cause one really beautiful thing about this is actually you learn a lot from seeing how other people are working with their Claudes. Sometimes I'll just say like, "Hey, Claude, Did you see what Boris was doing in his channel?

[00:22:37] **Speaker 13:** I want that. Give me the exact same thing for everything." So it's like very social in that way. I know there's a lot of challenges of like sharing skills and workflows. This is one where you can literally just say, you can see someone else's workflow and be like, "I want it." And because Claude did that workflow there, it already knows it.

[00:22:50] **Speaker 13:** It's, it'll just bring it to you. You just have to ask it to do it.

[00:22:52] **Speaker 3:** Yeah, you're not even like pasting a screenshot or anything. You can literally just reference

[00:22:55] **Speaker 13:** I'll copy and paste. Yeah, I'll copy and paste the like DM link or the like open [00:23:00] link and I'll be like: "I want this. Can you do this for me,

[00:23:01] **Speaker 3:** Dang, that's cool. 

[00:23:02] **Speaker 13:** So this is a message I sent to Claude. This is an example of like some of the nitty-gritty UI details that I want fixed that I now just have Claude do.

[00:23:08] **Speaker 13:** So I was like: "Hey, there was a drop shadow there. Uh, there wasn't meant to be one. Remove it." Right? Super easy fix.

[00:23:15] **Speaker 13:** Claude on it. Finding-- Because it has access to our repositories, it's finding the page and the styling. It removed it for me, pushed a new branch, opened a PR, post a screenshot to the PR. That's something that I have a preference to, so I ask Claude, whenever you're making UI changes, put a screenshot in the PR so I can see it.

[00:23:31] **Speaker 13:** one thing I also did, this is something special about Claude Tag is it also learns about you over time. So what you're seeing here is actually an iteration of me working with Claude and the preferences I have, which is always draft a PR, but make it a draft PR, not an open PR, so it doesn't trigger CI.

[00:23:44] **Speaker 13:** And then always put a screenshot of the before and after in the PR description, so that I can see what it looks like before I open it. So Claude generated this PR for me. I clicked the link. I was like: "Yeah, it looks good. Now open the PR and merge it." And then the crazy part is it made sure CI was passing It [00:24:00] posted in the stamp channel to get a review from my engineers and then it told me when it was merged.

[00:24:05] **Speaker 13:** So after me sending the DM, reviewing the output, I didn't do anything else. It was done. It was all done for me.

[00:24:11] **Speaker 3:** What the

[00:24:12] **Speaker 3:** heck, 

[00:24:12] **Speaker 13:** It's crazy.

[00:24:13] **Speaker 3:** Okay, w-what, what percentage of code that you are shipping is just happening like this right now? And is there like a trend? cause this is obviously like a very low-level visual change that makes sense to me. Like give me a lay of the land a little bit in terms of just how big a part of your workflow this is.

[00:24:27] **Speaker 13:** I would say more than half of my code is done like this

[00:24:31] **Speaker 3:** What the

[00:24:31] **Speaker 13:** And it's, it's not like... This is, I think, the simplest example of it. Sometimes I'm doing like full overhauls. Like I have one, and this is me directing it. I have some that are just automatically running right now. So for example, I have a job that, does cleanup that like every Monday it'll just show me cleanup, and then it'll spin up a bunch of PRs for me like that, and I'll just review the before and afters, and then I'll just try to merge them.

[00:24:52] **Speaker 13:** like this example I think is even not as forward-looking because I had to ask Claude to do the design change. But very often now Claude is proposing [00:25:00] based off of work that has merged in the past for me, or work that is forward-looking, or discussions that are happening in Slack between people at Anthropic about what the UX should be.

[00:25:10] **Speaker 13:** I'll have Claude signal those to me, and then I'll look into them, and then Claude will typically generate a PR for like proposals for what it could be. And it's not just PRs. I can show some other workflows. So this is another one where, uh, it needed a little bit bigger of an overhaul, and so I was like: Oh, like you need-- Let's clean up this page. There's a bunch of different states here. We had an advanced section. I wasn't sure what it should be.

[00:25:31] **Speaker 13:** I had a Figma link of what, we were brainstorming different architects of it, so I just linked it to Figma


## [00:25:35] When Meaghan still uses Figma

[00:25:35] **Speaker 3:** Quick, give us a little bit of context on that Figma link. How far are you actually going in Figma right now?

[00:25:40] **Speaker 13:** This one was mostly around, like, ordering stuff around. I went through, like, four or five different orders of, like, should these configs be in this order? And it's faster for me personally to do it in Figma. I think the designers internally actually we debate about this sometimes because some people still use Figma, and we all use it at different stages.

[00:25:57] **Speaker 13:** Some people don't use it at all. For me, I [00:26:00] use it when I know I'm faster. Like when the iteration I know I wanna do, I'll be faster doing it with like auto-layout and stuff in Figma. it's a speed thing

[00:26:07] **Speaker 3:** When are you faster in Figma? Like, go a little bit deeper there

[00:26:10] **Speaker 13:** Uh, well, for this one specifically, there's like-- we had like 30 different settings, and I wanted to know if it would look better collapsed and what order they should all be and what hierarchy they should be.

[00:26:19] **Speaker 13:** And with auto-layout, it's really easy to move things around actually myself. And so I put up three versions in this Figma link actually, and I had one that highlighted as like recommended. Part of the reason I also was in Figma for this one, is because we didn't have anything like advanced, and so I wanted to have a reference for Claude to know what the advanced pattern would look like, 'cause it's a new one that we're introducing

[00:26:40] **Speaker 4:** Okay.

[00:26:41] **Speaker 13:** Very simple, though. so it added a collapsible advanced section It's making all these changes on how everything works. It's putting up a draft PR. I, like, really trust Claude at this point. I actually kind of wait until it's done. It put up a before and after for me, so I clicked into it. And then the really interesting part that I love is that there was some [00:27:00] gaps in my design, so it made a call.

[00:27:01] **Speaker 13:** Like, it made a design call on its own. It's like, "Hey, I made a decision because your designs didn't include it, and I think it's better." Actually, it says, like, "If you want me to match the mock-up, I'll do it, but I think my call was better." And it was right. It was, like, so right. I was like, "Oh, wow.

[00:27:15] **Speaker 3:** happened to me a few times in the last week where it says, "One call I made, I saw this discrepancy. It felt like you were pushing me this way, but if we went this way, I think it'd be better for X, Y, Z reasons." And I read it and I'm just like, "Damn.

[00:27:26] **Speaker 13:** Right.

[00:27:27] **Speaker 3:** It's, it's right."

[00:27:28] **Speaker 13:** So imagine Claude doing that not just with the knowledge of your design patterns, but with all the decisions that are making on the architecture of how things work and all the product and go-to-market decisions that are happening. For example, I was doing this at one point, and the team had decided to rename a feature, and it just like, "Oh, by the way, everyone decided to rename this, so just as a heads up, I'm gonna update the copy here as well."

[00:27:48] **Speaker 13:** And it's like, 

[00:27:48] **Speaker 3:** Ah, man, that's so cool. That's so cool

[00:27:51] **Speaker 13:** And then I looked at it, I was like, "Hey, like, should we pull out this specific setting? 'Cause I think it might be important to pull out." So these are like the kind of discussions I'll have with clouds, like, "Do you think I should do this?" I actually [00:28:00] don't know.

[00:28:00] **Speaker 13:** I'm asking to figure it out, and it has an answer for me why. Because it's one of the most touched controls, so it's pulling from our data and it's saying, "Hey, actually, I think it's important that you keep it in here because it's a config that people use based off of usage patterns." And it has that 'cause it has its own access to all of our, like, data logging.

[00:28:17] **Speaker 13:** Put together a prototype for me so I could click into it. Looked into the proto- prototype, opened the PR, made sure CI passed, all good to go, merged

[00:28:25] **Speaker 3:** Okay, I have questions. I think the first one is actually, I know that there is somebody somewhere that is looking at this and they're like, "She's, she's just outsourcing her thinking to the models. We don't even think anymore. We just let the models do whatever we want. That's not design." What would you say to that person?

[00:28:45] **Speaker 13:** There is so much design work to happen that needs to happen right now that what you're seeing is everything that I believe I can offload because the models are capable enough right now so that I can spend my time on like the [00:29:00] really, really hard, gnarly problems that need deep design thinking. I think we're all in an era right now, especially if you're working at one of the labs or one of the companies that have really adopted this fast-paced shipping, where you're just-- it's hard to keep up with everything that's going out right now.

[00:29:14] **Speaker 13:** And so these few examples you see are the examples of how I keep up actually, and how people at Anthropic are keeping up, because we're finding ways to automate the parts that can be automated so we can spend a lot of time on like the really hard design thinking problems that we're working with. Like for example, a really hard thinking problem that's part of it is like how do we explain to people that this is an organization's Claude?

[00:29:36] **Speaker 13:** It's one Claude that your entire organization works with. It's not just your Claude. Will people want separate access in a specific channel, and how do we let them configure that so that you still have the power of Claude knowing everything about the rest of the organization, but it's not breaching any security restrictions that you might explicitly have in your organization?

[00:29:55] **Speaker 13:** How do we let you know the difference in between giving Claude access [00:30:00] as an entity in your organization versus just using your own user auth MCPs, which MCPs are already kind of hard to understand. Like how do we make that distinction between you? So those are the really important pieces that we spend a lot of time thinking on that we won't offload because it's about the user-model relationship and behavior.

[00:30:17] **Speaker 13:** And like these design polish pieces or some of these updated ones are like really easy ones to offload

[00:30:22] **Speaker 3:** But you're still doing a lot of that design work and even your own internal brainstorming by having back and forth with the models, right? 

[00:30:28] **Speaker 13:** Mm-hmm.

[00:30:28] **Speaker 3:** Okay, let's talk about that piece then. Like you talked about like the gnarly problems. You also said like the existential conversations. So like what you just showed, in my opinion, would be like very execution-driven work.

[00:30:40] **Speaker 3:** Let's just get rid of all the P3 things at scale. And I'm sure there's a lot of people listening who that's kind of their usage of AI, and they haven't really taken steps toward more of the, how do I get Claude to accelerate my thinking on like the big picture stuff? So like, know [00:31:00] it's a little bit wishy-washy what these back and forths look like, but for people who are not moving in that direction at all, like help us understand what your practice looks like when you are collaborating with Claude on some of these really, you know, the, the, the ambiguous, gnarly problems.


## [00:31:17] Working through ambiguous design problems with AI

[00:31:17] **Speaker 13:** I think there's two pieces to this. The first one I would say is that tactically, there's a skill set that designers are learning to develop, some already have and some don't, that is kind of an inverse of how you see the design role have been historically, where there's a huge school of thought that design is all around owning the quality and polish of everything, and everything has to be quality and polish.

[00:31:42] **Speaker 13:** And I think it's really important to have that, but it doesn't have to be all of your time. And so knowing when to use these tools for execution and offload, and knowing when you need to go deep and do the thinky work is a skill set. And I think that's one that I see people doing wrong. Like, you might be asking Claude to do execution when you, [00:32:00] you sh- should actually be asking Claude to do the early thinking the execution is wrong, like the shape of the execution is incorrect.

[00:32:05] **Speaker 13:** And Claude is not good today at telling you if your idea is wrong. It'll just execute on the thing that you ask it to do. And so there's a responsibility on you as a designer, which I think is a really important skill set to have to know, is this the right shape of product or should I be discussing with Claude the shape of it and not the execution of it?

[00:32:24] **Speaker 13:** Like the mental model and the primitive rather than how it looks to someone. And that's a really big part of design that I think people often overlook. first you need to be able to recognize that as an individual. Once you recognize that, I think when you are working with Claude on the more initial side of things, I tend to have my explorations be a lot more amorphous.

[00:32:49] **Speaker 13:** Like there's not a specific output I'm trying to get with Claude. I'm like only having a discussion. I say like, "Hey, I'm thinking about an idea and I'm not sure where it should go. Let's keep it open-ended." Like I'm [00:33:00] working with Claude as if I would be working with like a product partner almost, that I want to go wide with me in like our exploration process.

[00:33:09] **Speaker 13:** but I'm also asking it to pull in all the knowledge that it has already from research, from data, so that we can make informed decisions forward. And then a process like that might look like, "Hey," example of something? Like I'm trying to make, I don't know, dumb it, like a weekly meal planning app with me and my husband.

[00:33:25] **Speaker 13:** What does a meal planning app need? Like what are all the parts of the meal planning workflow? you need to order, you need to like have the ingredients. You need to like know what food you wanna cook at home. You need to know when you wanna go out. Like it'll propose the entire workflow for me, not from a design perspective, but from almost like a functional product perspective.

[00:33:45] **Speaker 13:** And then sometimes I'll be like, "Hey, like what is a meal planning app actually?" And like I'll have these existential crisis like, is it an app? Is it just actually like a workflow? Like do I even need a UI for this or can it just be nothing and I just ask you to do this? And then [00:34:00] sometimes Claude will be like, "I think you like apps so you should have one, but your husband doesn't like apps.

[00:34:04] **Speaker 13:** You can just text him what happens at the very end." It's like those kind of discussions that you have that you would typically prompt yourself as a designer that you can prompt with Claude now and have like a, that brainstorming partner with you. So that's where a lot of it goes. And then that thinking isn't as visual as you think it is though.

[00:34:21] **Speaker 13:** Like sometimes I'm making mind maps with Claude or like tables with Claude, but I think a lot of it is just like conceptualizing the pieces

[00:34:26] **Speaker 3:** There's another thing I wanna talk about that is you've kind of talked around it a couple times, where you mentioned how a lot of people, like there's this school of thought where design is like things have to pass through us to go out the door, and we're the ones that uphold the, the bar for craft and quality, and I get how working at like the tempo that you're working at, maybe that is actually impossible.

[00:34:48] **Speaker 3:** But it also does feel like it is directionally where a lot of this stuff is headed as lines get a little bit more blurry in terms of who owns what, and Claude helps everybody do everything to an [00:35:00] extent. So one of the things that you mentioned last time we talked was how you thought designers needed to be more comfortable letting go of design.

[00:35:08] **Speaker 3:** And I think we've seen like a couple examples here of what that kinda looks like. But why is that even necessary? And are there times even where that has felt uncomfortable for you?


## [00:35:20] Getting comfortable releasing control of polish

[00:35:20] **Speaker 13:** Oh, absolutely. I think in the ease of, of Anthropic, we're very experimental, and we're so early in this exploration of like the shape of the product. Like I say this all the time, we're 1% in this journey of like what the shape of AI should be. And sometimes knowing when it needs that craft and polish or knowing when just the shape of it is actually what you're trying to test is really important.

[00:35:41] **Speaker 13:** And so you might launch something or test something that looks terrible, but what you're actually testing is the underlying mental model of the shape of product. And I don't think it's worth polishing that thing actually, because it might not even make sense. You might have to rewrite it because it's actually not the right shape of what it needs to be.

[00:35:58] **Speaker 13:** And those are the [00:36:00] times where I think actually spending a lot of iteration on that polish isn't a good use of time. And I expect the designers on my team to know when something needs to be polished and when it doesn't. that experimentation of mental models doesn't require that high of craft, and it's better done actually in speed in the open-end iteration as opposed to spending a lot of time polishing something that's actually the wrong, full wrong shape

[00:36:19] **Speaker 3:** Yeah, that makes

[00:36:19] **Speaker 3:** sense. 

[00:36:20] **Speaker 13:** The second part about handing it off is I tend to find the more we can share responsibility of what we think quality looks like in our product and not be the gatekeepers, but educate and kind of delegate around us so that both our engineers and product partners feel that quality is something that they own and drive too.

[00:36:38] **Speaker 13:** You wanna like- lower the floor and raise the ceiling for everyone to be design shepherds a little bit, or quality shepherds. And so lowering the floor looks like making it so that anyone can feel empowered to say, "I think this is the right quality," and you teach them why it is or not, or Claude actually teaches them if you have good automations in place and good design system files in place to teach you what good [00:37:00] looks like.

[00:37:00] **Speaker 13:** And then raising the ceiling together, meaning I don't think, and it never has been historically only design's responsibility to maintain quality. The most successful organizations feel like it's owned by everybody. And so we need to make sure that we're not pushing the bar on our own, but we're pushing the bar with everyone around us.

[00:37:16] **Speaker 13:** And you do that by giving people that shared sense of ownership over what quality looks like.


## [00:37:21] Workflows for empowering others with design

[00:37:21] **Speaker 3:** What are some practical next steps that designers listening could put in place? Maybe it's like a workflow or a tactic to raise the floor and empower other people on their org to contribute at a higher level when it comes to design and more polished output?

[00:37:34] **Speaker 13:** one that I do, which has somewhat worked, is I'll stack nicer PRs on top of my engineer's PRs in the workflow that you just saw. I actually don't do them manually, I do them pretty automated. Like, once Claude learned that that was a habit I did, it just started doing it on its own, which is crazy 'cause it's very proactive.

[00:37:49] **Speaker 13:** Uh, that's one way because it doesn't slow down the progress and it doesn't erase the work that that engineer does. It kinda gives them an alternative or an iteration on what they did. And typically when they see that, sometimes they'll actually stack or [00:38:00] iterate off of my PR so that it still has the right idea of what they wanted to do, but it, like, is in the right shape of product as well.

[00:38:07] **Speaker 13:** And then I have been experimenting with some workflows where I, like, have Claude understand the things that I think about, who are we serving this for and what are we trying to communicate them? You know, like the basic question, what are we communicating to them? Like, does this align with our design systems?

[00:38:21] **Speaker 13:** Has this gone through a pass with like our content automation? Like, how does this fit into the broader ecosystems of our product? Should this be a product or should it be a feature? Does this need to be named or can it be invisible? Like, there, there's all these things that I'm constantly asking my engineers that, uh, Claude has learned over time that I like to ask.

[00:38:36] **Speaker 13:** And then I'm slowly putting together like an automated reviewer that kind of does this for me and will put up PRs. Or, the interesting thing about being integrated in Slack is it's not always about putting up PRs anymore. Sometimes it'll just send a message to someone and be like, "Hey, Megan thought this about this.

[00:38:51] **Speaker 13:** Like, what do you think? Here's like a prototype that you could play around with to like see what she was thinking about." And so massaging that language is very similar to like just [00:39:00] working with people, And that's really helped. So I would say invest in like how you define your quality and how you up-level it, and then share that as a workflow that anyone on your team can use.

[00:39:09] **Speaker 13:** And don't do it to stop them, although it is important to know when to stop and hold the bar. But try and do it in a way that like is additive and is teaching and guiding rather than stopping, I think.

[00:39:20] **Speaker 3:** So much of what we've talked about today exists outside of pixels, and I think that's kind of what's made the conversation really enjoyable to me. But I gotta imagine still, the vast majority of people that are listening are designing interfaces, right? Like historical B2B products. And even for myself in the last year and a half, I've felt more and more of the value props around the products that I'm making shift towards like, what's the best model to get context through like an MCP and back to Cloud and close these loops and like speed up iteration and that kind of a thing. It feels a little bit uncomfortable to me, to be totally honest, like, like actually quite uncomfortable. I'm like, is this-- we're just accelerating toward this [00:40:00] interfaceless world? And I'm wondering how much you think about that and if you have any ideas around, where does the interface have lasting value and more defensibility when it does kind of feel like you can almost do anything directly inside of a chat now?


## [00:40:16] When do interfaces still matter?

[00:40:16] **Speaker 13:** I've been really toying around with this idea recently, and it's something that I'm slowly developing a strong conviction that the- we're still gonna need a lot of fixed interfaces. So There's two concepts now that UI can fall into. There's fixed and then there's like adaptive or like non-deterministic is kind of...

[00:40:33] **Speaker 13:** And I think there's just so much that needs to be reliably stable that you don't wanna relearn and you don't want to be dynamic, like a login screen, billing, settings. Like there's a lot that actually feels important to keep stable, and I think that UI will be really important. Knowing what should be fixed and what should be adaptive or dynamic is a really important decision for you as a designer to make as you're designing these features, because I think often people will assume that everything should be customized 'cause it can.

[00:40:59] **Speaker 13:** I'm very much [00:41:00] of the opinion that a lot of people don't want everything to be customized. The right things should be customized and adaptive. And then on the adaptive piece, I think it's like, what's that container layer for what is adaptive? How do you express in a visual system that something's adaptive versus something's fixed?

[00:41:16] **Speaker 13:** How do you let users customize it in a way that they understand that they're customizing the tool that they're using or they're customizing the output that they're generating? These are all like really critical workflows to get right. And so I think what I would guide people towards is like, yes, there is gonna be a lot that's non-deterministic, but there is still a lot that should be fixed, and it's your job to figure that out.

[00:41:41] **Speaker 13:** And then in the things that are non-deterministic, how do you make that easy and clear to people?

[00:41:45] **Speaker 3:** Yeah, it makes sense. Ho- honestly, all of the stuff with artifacts is even challenging where I've been drawing the lines thinking about it. Like, I've had multiple instances now where I'm designing, you know, for a, a simplistic example, maybe like a, a search results. But the search results [00:42:00] is natural language based.

[00:42:01] **Speaker 3:** It can basically return anything, and the shape of that is totally tied to the query, where it's like, okay, I don't wanna have an entirely dynamic interface. I wanna probably have, like, a set of components and maybe map that to a system prompt where, like, we're getting repeatable shapes where there's, like, a little bit of familiarity, but Claude can kinda do anything you want with it.

[00:42:18] **Speaker 3:** And, and I guess I thought that we were speed running toward a world where that was how my future Claude interactions would look, where you're having, like, you know, a bunch of different component combos that are maybe giving me different ways of expressing intent outside of just typing it. And now I'm like, man, maybe the artifacts has swallowed that entirely for me, where it's like I'm actually just not even interfacing with Claude inside of the chat. It made me almost even more skeptical about the, uh, level of interfaces that are gonna exist in the future. I don't know. It's, it's an interesting thing that I'm, I'm thinking a lot about. It's like, where, where are we going here?

[00:42:51] **Speaker 13:** I kind of separate my school of thought in between I'm generating a thing that I need to look at and I'm just doing a job that needs to get done. Like, not everything has a visual output to [00:43:00] it. And so I think for the things that are just doing jobs that get done, they just need to be infinitely configurable and work for you.

[00:43:05] **Speaker 13:** But at the end of the day, there's a starting point, and that still needs to be designed so you can know what it can do. Like, there's a lot around, like, teaching people. And then on the dynamic side of things, I do think, yeah, like having these be dynamic is what makes them so powerful. They should be, and we should lean into it and be comfortable with it.

[00:43:19] **Speaker 13:** And where you customize might be on like its visual language or the tool you use to edit it afterwards.


## [00:43:25] Designing with restraint

[00:43:25] **Speaker 3:** Are there other unmapped design challenges that you think that we as an industry are gonna be staring in the face in the coming months and, like, different types of problems that AI is kind of bringing to the forefront as the way that we interface with these models changes?

[00:43:39] **Speaker 13:** I think a really big one that we're, we're gonna have to reckon with is when you can build everything, should everything be built?

[00:43:46] **Speaker 13:** just because it can build and just because it can be a function doesn't mean it needs to be. It adds a lot of product bloat. It makes it very complex. minimalist design had its place, and I don't necessarily think that's the solution, but I think in terms of like full functionality, [00:44:00] things can be a little bit simpler than they are right now, and not every idea is good or necessary.

[00:44:05] **Speaker 13:** Sometimes adding it is worse. But because it feels so easy to build now, everyone's building everything. So that's a big one that's reckoning through, like having the discernment to decide if it's worth building or not. Not even worth building, 'cause you can just build it, but if it's worth adding to your product, I guess, and launching it.


## [00:44:21] The new shape of designer

[00:44:21] **Speaker 3:** Okay, I kind of want to tie a bow on all this. Like, we've covered a ton. it's just new, right? Like, there's so much new in this conversation that it stretches me in all of the best ways, and I, I think it does produce a lot of these existential questions of like, what the heck is my role moving forward, right?

[00:44:40] **Speaker 3:** And so I'm curious if you have any thoughts around, like, what's the new shape of designer look like that's gonna thrive in the future? We talked about this skill around being able to decipher between whether I should be in execution mode versus shaping mode. Are there other things that you think are going to, separate the best of the best designers in [00:45:00] the years to come?

[00:45:00] **Speaker 13:** I'd say the first skill set is just in the next few years where we're still in the emergent phase of this technology, being very open-minded and curious I think is really useful.

[00:45:10] **Speaker 13:** Like hold your opinions, develop them, and then be willing to let go and update how you think about things, both what your role is, but also your product is extremely helpful 'cause everything's very dynamic. So one of them is just like having fluidity built into you and being able to lean into that ambiguity and be curious and enjoy it and like find a place to start and move forward in spite of the fact that it's chaotic.

[00:45:33] **Speaker 13:** That's a really big one that I think will serve people extremely well. I think it's a hard one because design used to be so structured and processed that it feels like you really wanna cling to that. But I'm urging people to do the opposite, which is like lean into the chaos, develop new ways of working and like continuously update, and I think that will really serve you well.

[00:45:53] **Speaker 13:** So that's a big skill set that I think we need to practice, kind of like let go of the rigid processes and rules as you know it, and just [00:46:00] lean into building good products and you will find your way. the second one I think is just, maybe discernment is just another word for taste, and I'm just gonna like kick myself in the future.

[00:46:09] **Speaker 13:** But I think discernment on what should be built, how to best build it in a way that suits your product and what you're trying to express

[00:46:18] **Speaker 13:** And what role you should play in building it and where that craft should fall is like a big one. Like that's the core builder process right now. It's like if you identify a thing that should be built or an idea, how do you shape it in a way that it will land into your imagination, from your imagination into a product?

[00:46:34] **Speaker 13:** And then knowing when to call it quits and be like, "That was actually bad. Let's not do it." Looking at someone else's and being like, "That's not great, and these are the reasons why." Or identifying something that's really cool and be like, "Yeah, that's great. Let's keep riffing on it." We're like two big shape iterations away, or like one big ex-execution riff away from getting there.

[00:46:51] **Speaker 13:** Like that discernment on like where something is and how it fits in and whether or not to go after it is really important

[00:46:57] **Speaker 13:** and then the third one I think is like feeling full ownership over [00:47:00] finishing the ship. Because this era require-- Like the, the second skill requires knowing the difference in between the shaping and the ex-execution and like when to lean in and what's good.

[00:47:09] **Speaker 13:** Sometimes that execution and polish will come after, sometimes it'll come before, sometimes it comes in between. And owning that loop, teaching your peers around you how to do it, elevating your entire organization, not just design, but everyone around you, is a really important role for design, and you need to feel your responsibility for that in the product, and you need to act on it as well.

[00:47:32] **Speaker 13:** And so those three kind of skill sets, ways of life outlooks are like specifically actually what I hire for on the team and specifically where I've seen people really succeed.

[00:47:41] **Speaker 3:** interesting. I, I feel like in a lot of the conversations that I'm having, each one y- there's like a pull. Like we can't just stay in like the traditional design box that we've drawn for ourselves over the years, right? So you're kind of pulled maybe more into front end and more technical or maybe more toward product.

[00:47:56] **Speaker 3:** And on the surface, like you look at Anthropic and it's like, well, yeah, you're working on the [00:48:00] models, you're designing a freaking CLI, right? Like you would expect the pull to be toward like quote unquote engineering, you know? But everything that you've said this entire conversation, like you're a product strategy expert.

[00:48:13] **Speaker 3:** You know? Like that's kind of what you're bringing to the table right now. There's a slight, at times, hands-offness in terms of what is going out the door, the, the craft, the slinging pixels around. Like it's very much so, like you said, what do we build, what do we not build, and why? And that kind of being almost like the anchor of the core set of skills that is propelling you in your career.

[00:48:36] **Speaker 3:** I don't know if that resonates or not, but that's definitely like kind of what I've been hearing over the last hour.

[00:48:40] **Speaker 13:** It absolutely does. And I think maybe this is something that a few folks in the industry have started talking about a little bit is like maybe as we all become builders, we actually just have archetypes that we lean into and like unique spikes of skillsets that we have, but our unique role doesn't change.

[00:48:53] **Speaker 13:** 'Cause I think the skillsets that you just mentioned, they apply to people who like lean really heavily into front, front end and have a high degree of polish. It's [00:49:00] just like what they're talking about is more at a feature level or more like very vertically deep as opposed to horizontally broad. So I still think those characteristics are important.

[00:49:08] **Speaker 13:** It just depends where you are in the life cycle of a product and what you choose to anchor on. but I think I would expect all designers to be able to flex into the higher and lower level. I think that's where their career is going. Before you could specialize only in one, in one of these. Now I think the idea is that you're developing them equally.

[00:49:24] **Speaker 13:** Like we've expanded the skillset that we want you to be able to do.

[00:49:27] **Speaker 3:** Well, in terms of curiosity being the defining characteristic that comes up on this show, you've definitely dangled a few very interesting threads to pull on for me, and I'm sure a bunch of people listening. So I very much so appreciate you coming on, Megan. You're quickly becoming one of my favorite people in the industry to learn from, and I'm already gonna say it, we're gonna have to run this back on-- I don't know what the timeline is 'cause things too-- change too quickly, but, uh, I really appreciate you coming on today and sharing what you're thinking about and what you're building.

[00:49:54] **Speaker 13:** I'm glad. I'm glad. Thanks. And I would add, like, if there's one thing that really excites me about the design industry right now and what [00:50:00] motivates me to come out and speak with folks and to have these conversations with you, is like to really encourage folks to know we're early. We are all able to shape what we want right now.

[00:50:09] **Speaker 13:** Like, that's the exciting part of it. So participating in this Discord, trying these things out, developing your own opinion is the fun part right now, and we should all be doing it together.

