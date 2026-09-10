---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: 628c4YuxAEM
slug: 2026-08-18-patrick-morgan
source_type: descript
source: descript://Patrick Morgan
guest: Patrick Morgan
host: Ridd
title: "Prototyping Enterprise Products"
published: 2026-08-18
duration_min: 54
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] 


## Why Patrick created the prototyping playground

**Speaker 3:** I think like many product designers, at the turn of this past year, I was doing a lot of prototyping, primarily just like making artifacts with Claude, and those are great. They were useful, but they had some, you know, fundamental problems, most of which being they're, you know, fast, but they're disconnected from anything that was kind of in our actual product.

They didn't persist anywhere. They weren't c- like, I couldn't build on them over time, and the same was to be said for, you know, the other designers on my team. They were likewise getting some value from doing them, but they didn't live anywhere that we could collectively get more benefit from them. And then on the flip side, I had also looked into, like, should I be prototyping more in production?

That's also a, you know, a hot, hot button topic. And the more I looked into that with our particular type of product, we're, you know, a big enterprise cybersecurity app, and there are just too many eng constraints for me that got in the way [00:01:00] of even if I could prototype there, it was just gonna be very, laborious to be able to do it there, and it would slow me down too much and not really facilitate my design workflow in the way that I needed it to work.

So I tried to aim for something as a sweet spot in the middle, which is like, could I centralize these prototypes so that we could build on them collectively as a team and kind of get that compounding benefit over time, uh, but while preserving all of that flexibility that I wanted from just like the open-ended prototyping ability?


## Prototyping playground demo

**Speaker:** I wanna get into the different phases of development and how you actually brought this thing to life, but maybe just to give people watching an idea of what you made, how it works, can you just run us through a quick demo and kinda paint the picture of what does this set of tools actually help you accomplish as a designer?

**Speaker 3:** Yeah, let's do it. So as a product designer, very often we are branching off of a surface that already exists in the product. So for context, I work for a company called Sublime Security. We're an [00:02:00] email security company. The main view in our app is this list of emails that are coming through your organization that we've highlighted for you as being potentially malicious.

So I've curated these, what I call blueprints, which are just these production faithful reference screens that you can jump off of for a design process. Here's, you know, the example of that view that we'll end up using here in a second. And the way that I would start a new project is I just talk to, to Cursor here, and let's do it.

So, hey, I want to create a new prototype. This prototype is going to be based on the messages list view blueprint, specifically the needs remediation view. Uh, this will be for a dive club demo prototype, and all we need to do is just set up the prototype with that view, and then we'll iterate from there.

**Speaker:** Okay, so while that's [00:03:00] loading, these blueprints, have you recreated like the full front end in a separate sandbox environment? Is that what those are? So they're just kind of starting points that someone can reach for?

**Speaker 3:** They are starting points. I've gone through a process of not fully recreating them exactly, but being able to port them over from production as these kind of snapshots of specific views that I want the agent will work

we got this done. It set up our new prototype here, Dive Club Demo. Click in here. This is just our, detail page for our prototype where our, our views will collect over time, and it's just pulled this one messages list view in here for us to begin from, which is great. now what I'm gonna do is I'm gonna have it-- I'll just speak it out, actually. Okay, great. So now that we have that view, I want you to set up a canvas so we can start to view these, , new iterations visually. And then I also want you to, uh, run a [00:04:00] design critique on this messages list view, specifically focusing on the filters.

We want to kind of put those through the lens of our design principles and understand where there might be areas for improvement that we can work on. We'll get it going again. This is a good time to maybe bop over to the design principles. So these are written by us, by our team. They're pretty lightweight. They're not super, specific in terms of like exact execution or anything. They're higher level principles, but because these live in the repo here alongside the prototypes, the agent can reference them in this way to be able to use them as a tool for design.

So it did some work. It did-- It set up this, uh, canvas for us. So here's our canvas. Woo-hoo. We've got our, our critique doc laid out here, and we've got our one view that we've pulled in that was just a direct fork of the existing view. So let's take a [00:05:00] look at what it said for its, its critique and see if we agree with it at all. All right. One line verdict: "Filters give analysts real control, but they bury the task-shaped narrowing behind a system-shaped menu and restate the cue definition as if it were something the user chose." So it goes principle by principle, kind of breaks down what's working, where it's breaking, and it gives it a rating.

So like, all right, mixed, mixed rating on keeping users in charge. Major issue with showing only what's needed, which I think I would, I would agree with. This is an area that has been, uh, sorely under-resourced for quite a while. Leading with value, also not doing so great. Layering depth intentionally, you know, we could be a little bit better, and so on and so forth.

So give me this little scorecard, and I have it write out some, some how might we prompts to kind of spur our next step, which is to do some divergent exploration. So now what I want you to do is I want you to [00:06:00] create some variants on how we might address the how might we statements that came out of that audit. We want to do this in low fidelity, and I think I'm looking for, you know, between three to five different variants that might address some of those issues.

Ask any follow-up questions if you need more clarity before beginning.

**Speaker:** That's always what my prompts look like too. It's like a three-second gap and I'm like, "Actually, a-ask more follow-up questions too."

**Speaker 3:** Yeah, you never know.

**Speaker:** I feel seen.

**Speaker 3:** before I build... Oh, okay, it wants me to pick an actual number. I can't just say three to five. Okay. let's do five variants for coverage. They should each be a different structural bet, yes. Uh, for the priority how might we's, I leave it up to you. You can pick. Scope of each frame, keep it, focused, but I do want to see table results as well, not just the filters, so that I can contextualize in that way.

And [00:07:00] yes, please add an exploration section on the canvas so that I can compare these on that screen

**Speaker:** Do you ever have moments where you just step back and you're in awe of how much your design practice has changed on a daily basis? Like, just watching you work is hila- we would've found this hilarious two years ago

**Speaker 3:** Absolutely. I would have found it hilarious in this December of last

**Speaker:** Yeah, probably. Yeah, yeah


## How AI workflows are impacting Patrick's work

**Speaker 3:** I was very much still just like in 95% of the time in December, and now I'm almost never in Figma. so it has been a very fast shift to the extent where like, I'm finally at the point where I have like enough built to where I feel like I can kind of step back and take a breather and like actually think about it rather than just forging full steam ahead into this unknown territory.

**Speaker:** How do you think it's impacting both the quality and the quantity of your work?

**Speaker 3:** Quality and quantity. So quality, I think it's impacting quite a bit, but in some ways that people might not expect. Like enterprise [00:08:00] cybersecurity, the tools are never gonna be like the sexiest looking thing that are gonna get a lot of likes on Twitter un- unfortunately. but there's really a lot of like systems design type of stuff that needs to go into building that type of tool, especially at the kind of scale that we operate at.

and so doing that kind of work in like a static environment detached from the code was always way harder than it probably needed to be, because you're think- trying to think through like a ton of different combinations of states that are just hard to grok until you actually get something in some form of code to be able to understand whether your, your idea even makes any sense at all.

so there's just from that lens, like the kind of systems thinking that it's enabled me to do and the exploration has been like a huge improvement for my work. Uh, and before I could make all these like high fidelity screens in here, the initial iteration of this was only like [00:09:00] really sketchy lo-fi looking prototypes that helped our team a lot just think through the states that we needed to cover for this kind of app.

**Speaker:** That actually brings up another quick question. How are you setting up the data? Like, is it just generating a bunch of UI based off of, like, the patterns in the database? None of this is hooked into actual production data, is it?

**Speaker 3:** No, not hooked into production data at all. It's all mock data, just that lives in the context of the prototype. it is based originally, like with this view, let's say, this is kind of our recreation in the prototype environment, and so there is an associated data object that lives kind of along with this screen that powers the experience and is modeled on, you know, the actual data model that our front end uses.

So it translates back and forth very easily, but it is all just local mock data in the shape that production expects.

**Speaker:** I totally assumed that these would be screenshots. These aren't screenshots. That had a hover state to it

**Speaker 3:** These are not [00:10:00] screenshots, and that's, uh, actually a very important part of this workflow, uh, is that all of these are interactive. The reason that that's really important for my workflow here is, like, you can now see that I have my five variants that it created.

It created one with definition outside, whatever that means, task first toolbar, persistent applied state, side panel, very different, and some kind of queue with suggested filters, I guess. But often I'm, I'm using this as a surface to kind of see what the agent is doing, and then I'm using the annotation tool, in this case in Cursor, but you could do the same in Claude Code or, or Codex if you wanted.

And you can just annotate directly on these because they are rendering the actual code itself. So I don't have to, like, jump into this view to give it feedback, but you

**Speaker:** Yeah, it's cool

**Speaker 3:** So it's done some simplification of removing some of the additional [00:11:00] kind of quick filters that we do This has some kind of additional Set up. Not really loving that. I'm gonna say that this is probably gonna be, uh, a hard pass from our engineering team entirely shifting the, the filters to a, a left panel.

So let's just say, for instance, that, we like this one, this task first toolbar, but maybe we want it to do a little more iteration. We'll just give it some feedback. So this direction is looking fruitful, but I'm a little bit confused about the naming of the view and sort of the understanding of the filters that are applied at the top level that generate this view before we apply these additional filters.

So can you take another stab at, um, iterating on this variant to address those issues?


## Improving divergent exploration with AI

**Speaker:** Are you able to see clear ways that you've iterated on your personal process of just seeing the three to five different options with AI? 'Cause it feels like that's become [00:12:00] such a key part of how AI-enabled designers are operating today, and yet it is possible to just consistently get nonsense. And so I'm wondering, like, uh, have you tweaked the way that you think about prompts or structure or, like, how have you grown this muscle of having AI explore on your behalf?

**Speaker 3:** if I'd be doing this in, in real life, I would've spent more time upfront here on sort of like this critique and setting up what I really wanted it to explore. You know, we k- we kinda just YOLO'd this here to get some results quick. But I would be really dialing in like specifically where I wanted it to focus, and then I would be probably having it before it actually generates any UI here at all.

I would just have it describe these potential approaches to me in text, and I would review it that way because it would be quicker for me to grok like, " That seems directionally right, that seems directionally wrong." And I would have it iterate that way first, and [00:13:00] then once we've narrowed it a little bit and I've sort of vetted each concept slightly, then I would have it generate the UI that we would look at. So it made some, some updates here. Uh, again, would I roll with this in real life? Probably not. But the, the gist is, you know, you're able to kind of do this divergent exploration in this low fidelity, which is still using our actual, you know, production fidelity com- UI under the hood, and then just sort of overwriting it with our handwritten font and making it grayscale to make it more obvious where we're at in the, in the design process.

**Speaker:** It's so interesting that we almost have to, like, retrofit the fidelity now that we're doing these-- using these tools. It's such a fascinating concept. Like, is that something that you added? Like is-- Was that your starting point, was doing things at low fidelity? Like, I just don't really do much at low fidelity at all anymore, almost 'cause it just-- it's more difficult to do.

So like, did you make that a first-class citizen [00:14:00] intentionally? Like how did you think about the role that you wanted fidelity to play in this product?

**Speaker 3:** Well, I started out in low fidelity simply because, to your question earlier about the initial scope of this project, I knew that I definitely didn't have time or the resources to get it to match our production fidelity fast enough, or right away. So I didn't wanna mislead people by creating something that was, like, almost production fidelity, but not actually production fidelity, and then I end up with this big communication gap of, like, people looking at something very high fidelity, but it's not quite right, and so they misinterpret.

So I wanted to avoid that entirely, and I just opted to be like, "I'm only gonna use low fidelity to begin with and go from there." So these are my earliest explorations. These things were done in Claude with artifacts before any of this existed, and I just pulled them in here. and now I can kind of visualize them on the canvas for you.

But, like, I was having it kind of help me think through how our product processes [00:15:00] emails, and just expose some different ways we might do the configuration. So, like, in this instance, we did, how many different-- Like eight different variants on this kind, five different variants on this one. And I was using those, I was screenshotting them, pulling them back into Figma, getting, you know, people's takes on them using that functionality, and that was just such a slow, laborious loop to kind of go through that even just being able to get these screens in here before I had any sense of, like, the canvas or any of this other stuff was helpful to just have it centralized somewhere, uh, to be able to build on stuff over time.


## What collaboration looks like

**Speaker:** Can you talk to me a little bit about how this fits into the way that you collaborate as a design team? If you get to the point where you wanna share something or loop people into feedback, where are you actually pointing them? What is on that canvas? How are you thinking about that part of the process?

**Speaker 3:** good question. this was an ongoing challenge, frankly, is that, first I needed to figure out how to do deployment of this in [00:16:00] a safe way because we are, we are a security company after all, so we have a pretty high standard for security for our own internal tools. this is the deployed version that is deployed with Vercel. So the way that this all is structured under the hood is that it's built with Vite, Vite sort of acts as a static site compiler more or less, that aggregates all of these React views into a static site that we can deploy.

So from a, just a security standpoint, they were more open to this to begin with because there's no back end, there's no user system, there's like not really anything to be hacked about it. It's just kind of a website. so that was one way that I got around some of the potential organizational hurdles of like, "Oh, designers are like asking to deploy code.

Like where... We don't know about that."

In terms of gathering the feedback, that was an ongoing gap.

So even though I could share a link to one of these prototypes and get someone to look at it and, like, interact with it using, like, just via the [00:17:00] URL, I couldn't collect feedback on it in the way that people were most comfortable with, which is like Figma comments, right? And so only recently did I realize that Vercel actually has a tool that you can use to put comments directly on your deployments.

So it's called the Vercel Toolbar, and so you can just... They have a commenting tool, and I can, you know, open a prototype, or in this case, really anywhere on this surface, I can be like, "Hey, Rid, it's a comment." And, like, this will now appear, and it lives on the design. let's say these are some explorations, so it doesn't really matter if I comment on anything here, but like, " Make the button bigger." the way that this toolbar works is, like, it'll still even adhere to that, even on the canvas.

So in this way, it's covered a lot of the bases that I felt were missing from the just collecting feedback aspect of the workflow.

**Speaker:** Yeah, I felt that too, for this specific workflow even, where it feels like we have [00:18:00] been given superpowers by AI and our ability to build things, but then it feels like all of the collaboration infrastructure has just went back to the Stone Age.

**Speaker 3:** Totally. Yeah.

**Speaker:** I share my stuff?" And like, I have three different ideas, like I want you to pick one.

How do I even do that, you know? So it's interesting to see that you went full loop back to some of those early canvas-based primitives.

**Speaker 3:** Yeah, and, and pretty much right away people were asking for a commenting system.

**Speaker 2:** I'm

**Speaker 3:** And I was like: I'm sorry, but I can't build a comments, commenting system. That's, like, way too complex and for me to build. Like, it's been hard enough to just, like, build all of this other infrastructure, and then as soon as you start to layer on this, like, whole extra surface on top of everything else, and the comments, they need an a- an actual, like, back end of some kind to be able to persist them and stuff like that. So let's just close the loop on this little exploration. And as we mentioned, these are just sort of low fidelity, sort of overwrites on the actual thing.

[00:19:00] So let's just ask it to, like, bring one of these into Hi-Fi, and we can kind of close that loop. All right, this one is looking pretty good to me. I want you to now bring this into high fidelity and put it in a new section on the canvas so that we can clearly see that this is the hi-fi version Honestly, even my workflow has changed so much s- just since the agentic coding harnesses released this, ability to just directly give specific feedback on elements. That was a huge unlock

**Speaker:** that became the industry pattern so quickly,

**Speaker 3:** I saw your, uh, your clip with, uh, Nate from Anthropic where he showed that one where it was pointing at things.

**Speaker:** Yeah, that's your next thing to build.

**Speaker 3:** I, I feel like somehow that won't make the, make the top of the list, but,

the spirit of the, of the feature is there

**Speaker:** I mean, it's interesting to see that even, even when you are doing the comments, you're still dictating. J- that's kind of been my experience too. Like, originally the comments came, and it just became muscle memory where like, "I'm just gonna type, you know? This is what I do." And now it's like, [00:20:00] no, I, I just point and talk, man.

That's what I do as a designer. I point and talk. I see things, I point and talk more, and you kind of built an entire tool around it, which is cool.

**Speaker 3:** And I did that honestly intentionally from the start. the UI that we're looking at is really just like a rendering surface. There are no actions that the user takes through this UI. It's designed intentionally to be used in the context of these agentic coding harnesses, where the primary and exclusive, like, interaction is, you know, communicating to the agent. so it made a high-fidelity version. So you can see it took that same structure, it just kind of lifted it into here's how our filters might actually look, and so on. So you can kind of see that general loop of, like, branching off of something, being able to do some lo-fi exploration, and sort of like level it back up into hi-fi.


## Designing the harness for the prototyping playground

**Speaker:** There's like a whole level of design/engineering that exists, I guess kind of at the harness level where it's like, what does this tool even do? Um, it's interesting that [00:21:00] it put it in its own row. So you've obviously given some guidance around, "Hey, here's generally how I wanna think about organizing work."

Can you talk about that level of design? Like what went into making something like this good out of the box versus kind of what you would get as just default functionality from Cloud?

**Speaker 3:** Totally. That's been one of the biggest challenges of this whole environment is that it is a dev environment, but it's built for non-developers. So I kind of have to assume from the start that anything, any feature that I'm building, I cannot assume that the human user will be doing any of it. It's always the agent doing stuff on their behalf.

And so I needed to set up a lot of guardrails from the start to just even help designers just do, you know, the kind of Git workflow. So this is our, like, documentation for the, for the tool. to your point about some, some of these concepts, so like what we're looking at as a canvas, this is like an [00:22:00] official feature that has kind of its own data structure that I defined and I built with the agent, and I defined these terms.

I was pretty unoriginal. I called it a canvas, a frame, a section, and a row. So sorry, Figma, I'm just, uh, copying you in that regard. but yeah, so I, I defined what this object is in the system. I define how the structure should work and sort of lay it out for the agent in terms of understanding what this thing is, how to use it, how to structure these sections and organize frames within it.

This is all opinionated from my personal workflow. Like even when I'm working in Figma, I would structure my handoffs in this kind of way. It was very like storyboard style kind of organization, I suppose. so here you can see like here's the canvas data structure. It's just a JSON file that sort of organizes the frames.

It's not pulling any of the frames into the [00:23:00] context of the canvas. It's sort of just pointing at all of your other, React views that you've, you've built or the documents in this case. that's kind of the, the, the level that I've been working at is sort of like code architect, platform architect, coming up with these objects, defining them, working with the agent to make sure it understands what it is and how to use it, and then making it as natural as possible for, for the human user to just ask for a canvas, and then the agent knows what that is and, and how to set it up.

**Speaker:** It's cool 'cause it's kind of the ultimate exercise in systems thinking. Like, there were many versions of this tool that you built that were very cumbersome and confusing for your team to use. The only way that you were gonna get this adopted at a high level is if it was just stupid simple

**Speaker 3:** one of the very early choices, so I've got this whole section about guardrails. It's like this is a bunch of different features that work together to make sure that when another designer is using Design Studio and [00:24:00] they say, "I want to create a prototype about XYZ," the agent knows not only like what a prototype is and how to make one, consistently, but also like who the person is, where they're allowed to build, what scope is approved for them to build in, all that kind of stuff.

So that's a combination of stuff that is frankly just like 100% DevOps basically, that

**Speaker 2:** Mm-hmm.

**Speaker 3:** is just there in the background making sure that things work the way that people expect. one major choice that I made on that front is that you'll notice that, every contributor has their own folder effectively, and so that's one of the main ways that the agent scopes the work.

So what I wanted to facilitate for people is like, I want to give you a safe space to prototype in and kind of just go wild and like whatever you do in your folder, it's kind of open range. I've given you a lot of tools to like dial in certain types of work, but you can just [00:25:00] design totally from scratch in a prototype as well.

but if you are working on something that is gonna impact other people's work, that requires a higher level of review and more of a typical kind of dev workflow where we want to make sure that what you push isn't gonna break stuff for other people. So my rule is you can, you can break your own stuff, but you can't break other people's stuff.


## How handoff is changing

**Speaker:** Can you talk a little bit about the handoff piece? Like, let's say you get that high-fidelity prototype, it's dialed in, then what?

**Speaker 3:** So we are, you know, in the process of figuring this out collectively as a team. for the most part, what I'm recommending now is that this is just another internal repo within the company, and the engineers can pull that repo, and they can have the code locally on their machine, and they can point their agent at it.

So the last thing that I might do in here in this, uh, you know, demo prototype that we're, we're working on... Oh, I guess I don't have to annotate anywhere specific for this. I'll just say, "Hey, this prototype is looking pretty [00:26:00] good. We want to prepare it to do a design handoff. So I just want you to kinda summarize the most important things to pay attention to in this file for the engineer and their agent."

That's been a new way that I've been thinking about it too, is that I'm no longer really handing off designs just to an engineer. I am pretty much preparing the design to be reinterpreted by the engineer's agent, and then the engineer will steer it from there

**Speaker:** Yeah. Uh, it's a great way to think about it. I feel like I've just been making that shift recently for myself too. I'm like, "What's the best way to even do this?" Like, I, I've been rambling on super cut videos more recently just 'cause I'm like, "You don't even have to watch this. Just, just you feed it to your agent," you know?

**Speaker 3:** in this case, it makes this very simple design handoff doc, which, you know, we only have one screen in here, but it's like, "Hey, take a look at this. This is like what you wanna build from, and don't miss these couple things. Here's a little bit extra context if you need it. Here's some things to ignore."

So very high level. This is something I'm actively [00:27:00] working on trying to figure out, we've only recently reached this point where like the level of fidelity that we can get in this tool is so close to what we want in production that it makes sense to kind of just translate back and forth. I would say that my process even these days for when I'm reviewing high fidelity screens in a surface that already exists in the product, I'm very often asking like, " does this match production?"

And because I have the production code base pulled as a sibling repo to this repo, the agent knows where to look. It'll go look in production, it'll check if it actually matches production, and then it'll update if not. So like I just am constantly cross-referencing of like, "Let's go look at production and see what production does, and then bring it back into, to the prototype."

And I imagine the engineers can, can do the same in the opposite direction.

**Speaker:** I've actually started doing that down to the last week myself, 'cause I, I, for similar but also different reasons, I'm having difficulty [00:28:00] prototyping quickly in prod.

**Speaker 3:** mhm

**Speaker:** I was like, "Man, I just... Let's just make a duplicate set of components," and I'm trying to figure out what are the best ways to,

**Speaker 3:** Mm-hmm

**Speaker:** like, make sure that it can consistently port at a, you know, perfect-- It just has to be perfect.

It has to literally be perfect. And so far, it's been pretty good. quite good, where I've had so much fear around duplication in the past, where all of a sudden now I'm like, "I don't actually care. I'm down to duplicate literally everything and just play in front-end land," 'cause the agents are basically able to execute and bring it back over to the pro-production folder system perfectly.

**Speaker 3:** that's 100% where I'm at. I feel like in the past, if you would've told me, I would've had the same reaction as you. I'm like, "What? You want me to maintain this whole separate thing?" It was just, you know, the scope of that is insane if you're an actual human that's doing it. But for the agent, the agent can do it.

It doesn't care. They're incredibly good translators. So if you just think of like production as one language [00:29:00] of code that has its own set of constraints and semantics that are necessary for like a production app at scale, they deserve to be that way. It should be that way. But those, many of those conventions don't serve the design process because they do things that intentionally make it hard for like the app to break, which you want in production, but you don't necessarily want in, in prototype land, um, and vice versa.

I want the code to be sort of like focused on what it needs to be best at. The prototype environment should be best at prototyping and make some, uh, trade-offs in terms of, things that you might want in production and vice versa. what you're looking at here, this is the process that I went through.


## How Patrick built a system for porting production frontend

**Speaker 3:** To your point with porting components, I wrote what is effectively an agent loop, I guess, technically. I know that's very trendy, loops. and I had it go through this process where it went one by one through all of these components, and it l- looked at the production code base, it analyzed the component, and it [00:30:00] sort of reconstructed it in the prototype environment.

In many cases, like it didn't need to change much, like it's very close. But for instance, stuff like form controls, let's say, there's a whole bunch of form logic type of stuff that you need in production that you just do not care about and just get in the way in, in a prototype environment. So I had it rip out that stuff.

I also, the first attempt that I made at, getting it to port things over, I didn't give it specific enough direction and it was basically trying to like shim the production components and not change them to like make them really solid for prototyping, but like just kind of do these hacky workarounds around literally everything.

And it went on this crazy rabbit hole and made just a ton of slop that I couldn't use at all. So I had it like change its approach and, go back to building from, from the start.

**Speaker:** I feel so encouraged seeing this. I really do. Like, I drafted a [00:31:00] tweet this morning basically explaining what I was doing and trying to get somebody on the internet to tell me it was a bad idea. 'Cause I have this little thing that's in me that's like, "Don't duplicate stuff." But it kinda feels like it's a good move.

So seeing the success that you've had and the fact that you've built this whole system on top of it is actually very validating and timely for me. And you've definitely taken it multiple steps further though. So I guess a question I have is, can we help people understand what the starting point was?

you're showing so much stuff. You've been working on this, I think, for like six-plus months maybe, right? And you're super far. So at some point, I, I do wanna help a listener who is inspired and wants to do this internally understand what those first few steps might look like and where you drew the line in terms of like, yeah, this is a releasable utility that will create value for my team.


## What steps to take for your own team

**Speaker 3:** I come prepared to, to share the journey, 'cause it was definitely... If I even showed myself this, January or [00:32:00] February, I would've been like, "That seems ridiculous. There's no way I can do, can do all of that on top of my regular job of actually just making the designs that, you know, the company needs to ship for our customers."

So another cool thing about the fact that this is just a code repository is that I'm able to just look back in the actual code history of what were the major milestones of this project. So you can see that my first commit, the genesis of this project, was January 27th, But basically all I did was I set up the initial scaffold just to be able to pull in those couple low fidelity prototypes, HTML prototypes that I mentioned. And that was it. It was literally me, one other product designer. I was like, "Can we get our work to live in one place together?"

And that was it. then I kind of went along this journey where all of our work was happening in, in Figma, and so I could still make these prototypes, but I didn't really know how to share them yet, to your question earlier. I definitely didn't have a way to get feedback on them. So the next problem I [00:33:00] was trying to solve for myself was like, "Okay, well, how do I close that loop of like, I'm, I can make the prototype over here and I can kind of deploy it, but how do I get feedback?"

So I, I ended up building a Figma, plugin, uh, in an afternoon where it would just screenshot my, my prototypes and pull it back into the Figma canvas so that people could comment on that image, which was fine. It, it sort of served me at the time. I don't use it anymore, but like this whole process has just been like, " Oh, well, I'm feeling this tension about our workflow.

What, what can I do to solve that?" And kind of taking the next step. then you can see I, I started-- as I started working in here a little bit more, I started to realize these repeatable patterns about what setting up a prototype meant, what pieces went into that. And I was able to kind of make a canonical version for the agent to have them be able to do it in one command.

So now whenever I ask an agent to make a prototype, there is a, an agent rule that gives it some guidance, but there's also just [00:34:00] a script under the hood that that rule references, so it makes sure that the creation of the prototype is the same every time. Like it runs the script and it generates it that way.

other things like catching agent rules before they go stale. That was something that as I was evolving the environment and writing the rules and then evolving the environment some more, I'm like, "Oh God, my docs are out of date, like as soon as I push them." And then the rules are wrong, and then the agent doesn't use the, the environment in the right way.

And so I had to write a rule so that the agent could update its own rules. then I needed to bring in the design systems and as soon as I started to try to think about not only building this environment, but also enabling product design prototyping, and then at the time the big push was How can I make this tool useful for our brand team too, so they can prototype and, and ship some tools?

I had to get really clear on like what do I even have from a design systems perspective in this environment to work with? And so I had to work through that [00:35:00] problem, so I made that whole design systems section of, of the app just so I could browse what was available and make sure I understood what was in the code.

so we can kind of go on down the list, um, but it was really just one step at a time, like from that very earliest version of get a couple HTML prototypes in the same place all the way to, to what you see today.

**Speaker:** Fast forward to today, like what are some of the opportunities that you kind of have circled in your mind right now in terms of where this could grow and expand?


## What opportunities Patrick is focused on next

**Speaker 3:** I think the main things that I've been focusing on, all the document stuff that you're, that we were showing, that's very recent. and trying to do that closed loop of like this process of starting from a document, being able to capture the context the agent needs, sort of going through the exploratory lo-fi phase, leveling it up into the hi-fi phase.

Like I've had those pieces, but like really stitching them together is new territory for me and, and continuing to evolve [00:36:00] pretty quickly. I'm also looking at other tools that I can give for people to like capture and express their design intent. Like I would love to have something in here that enables people to sketch a little bit more.

Like I really love the idea of like sketch to code. Like that's how I used to work when I was a design technologist at the start of my career. we would sit down together as a team, we would do a sketching session on paper. I know, long lost art. And then I would go straight into the browser and I would prototype the code, 'cause that's all I really needed to get started.

So I'd love to do stuff to enable more of that type of workflow. and then I think some of the things like continuing to pr- provide this high level guidance around design principles. we have a new page that we're working on that's just like context on our personas, who our users are, stuff like that, that like provides that foundational design context that can live together with your prototypes and inform them in this way.

I think there's untapped potential there as well.

**Speaker:** [00:37:00] Even just for skills, you know? Like, I still haven't solved, even in our small team, like how do I surface skills in a way that is helpful and people actually see it, you know?

**Speaker 3:** Right. Yeah, at the moment I'm calling them methods, not skills, because I, I haven't technically structured them the way that the official skills documentation says to do it, but they are basically skills. Uh, so I have the ones that we looked at, the design critique, how to do explorations, how to do a handoff.

here's kind of the j- the broader agent rules system. we have these couple different entry points into sort of like the agent rule system that we have. We've got the Claude MD of course, but that mostly points at the agents MD, and then same with the cursor rules and the GitHub copilot instructions.

They're all kind of just pointing at agents MD, and then that gives this context on what are the rules that should always load with every task, and there's really just four. So I, I run it through this system where it looks at this one first, which is about the different [00:38:00] systems that we have in place. Is it a production prototype?

Is it a brand prototype? Or are we just working on the environment itself? And depending on which of those pathways you want to go down, it routes to different instructions. So it'll look at the conventions based on that route. If you're going down the product prototyping route, it'll go, you know, further into, you know, what that workflow is, what it, what it should do.

And then it always loads this bit about the, the contributor's scope, and that's all about just making sure the agent works in the bounds that we've, told it to work in, so you don't get conflicts and things like that. And then all of these other rules are just on demand. So like those ones that we showcased with the methods, that's just on demand.

So when I ask for it, it'll go look for it.

So that's the general structure.

**Speaker:** Even at a high level, one of my takeaways from this conversation is the value of having doc primitives interwoven inside of our creative [00:39:00] tools, because it is almost the standardizing layer between human intent and then what the agent needs to be able to, like, see and act on. It's perfect for handoff.

Like, that makes, that makes total sense. I feel like you can run in a lot of different directions with what a agent-enabled handoff doc looks like and how you can scale that and, and make it really, really efficient. There's something here. I feel like even for my own practice, a lot of the context docs that I'm establishing, they're all hidden in nested folders somewhere, and I don't actually see them, and I wanna be able to get back to them, where it's like, no, no, this is actually, like, a key part of the process now is aligning on the doc, sharing said doc, getting feedback on said doc

**Speaker 3:** this whole thing that-- this whole diagram that we're looking in, in, at in here it's like this shadow application that's just written in Markdown.

it just lives in, in the app and like this is what allows the agent to orchestrate for the most part. And yet, it doesn't really deserve to be even in this environment, like [00:40:00] exposed necessarily.

But it's all there under the hood the more that the people know about it as well, the better, I think is the hard thing, is like why I really needed to start to get in- into like writing this level of documentation even is like I know how to get the best results out of this tool because I built it for myself.

So like I literally know every possible thing... Well, not every possible thing. It s- it still surprises me, but, uh, I know most of the things that I can ask it to do. And there is, there are no real affordances in this UI to understand like the concept of a prototype and what goes into it, the concept of a blueprint and what it, like what I can ask of it.

the documents, even from that perspective, important for the users because it, it becomes their guide of like what language can I use to communicate correctly to the agent that it will do what I want it to do? and that's even separate from like the agent rules themselves, which are so core, and actually sort of orchestrate the experience on [00:41:00] behalf of the human.

**Speaker:** Before we zoom all the way out, I kinda wanna speak again to that person who's inspired to do something and build some kind of an internal system in their company. Any other piece of advice, tips, or maybe gotchas to avoid that you've encountered through this journey that you think other people could benefit from?

**Speaker 3:** in terms of where to start, I wanted to say that there's so many different ways to get value from prototyping. I think when people hear prototyping, they jump immediately to high-fidelity prototyping, and that's definitely not the way that I think about it or approach it. in my earliest days as a, as a designer and front-end dev, like, it was the responsive web days.

And so, we actually had this, like, library of phones that we needed to test against, test the designs against. And before we would even test or do anything in, like, actual design fidelity, we had this little, wooden phone that you could slot, like, a piece of paper into, so you could sketch on paper in the form factor that we expected the [00:42:00] phone to be.

And that was a really good prototype, 'cause it would, like, just contextualize it just enough that people could understand what we were going for. with this project, for months, the prototypes were low fidelity only, like, only sketch looking, and it still added a ton of value. so I would, like, I think for a lot of teams, even just starting there or just getting your, sort of centralizing your prototyping efforts so that you can start to build on your team's work, like, as a collective is a huge, benefit.

So I would probably start there, what's cool about it is that it is 100% custom to your team and your workflow. this is what works for me and, and collectively, like, my team here at, at Sublime. But your team might look very different, and, like, your process as you sort of discover your little tensions, you just work through them.

It's a product design problem to solve, you know? So that's been great, I think that's probably how I'd go about it.

**Speaker:** Yeah, like you said, it's the, it's a product design problem to solve. Like feel like there's so much weight placed [00:43:00] on internal tools as of late, where it, it kind of felt like a thing that you could, you could punt a little bit, but now it's like, no, no, no. As designers, we kind of are the best equipped people to go find the problems, find the inefficiencies in how we are building, and then just figure out, okay, given the fact that I can build almost anything, what would we create here?

And it's really interesting to see where you landed. I feel like this, in many ways, is the blueprint for the types of systems that more teams are gonna be using.

Let's talk about you then for a second. So one of the other things that you've done in the midst of this window is redesign your personal site too, which I always find is a fun opportunity to kind of reflect on, you know, how do you wanna position yourself? Who am I kind of thing. And this-- you, you, you had this line earlier about how your day-to-day has changed as much this year as it has in like the last 10 years combined.


## How Patrick positions himself as a designer

**Speaker:** And so what did that exercise teach you about how you wanna position yourself in the years ahead? Especially as somebody who, you're doing this amazing thing that's creating so much value internally, but it [00:44:00] doesn't show up in, you know, the sexy little portfolio or the neat, case study that you'd expect of different types of work.

**Speaker 3:** It's a good question, and one I continue to wrangle with. my own career has been pretty multidisciplinary. I started in tech, as I mentioned, as a front-end developer, and then I shifted into product design. I sort of fell into this niche of cybersecurity from then on, for whatever reason, the, the jobs that, uh, kept connecting with me, happened to be in that space, and I continue to work in that space today. And these days, I, I think I still wanna put the emphasis on like, if you, if we look at my new site Like my headline is " Patrick is a designer who builds."

That's pretty much it. Like I don't wanna overstate my engineering skill at this point. I'm not trying to reposition myself as an engineer. I don't even wanna call myself a design engineer necessarily. I just think that code is the medium that I've been designing for all these years, regardless of how I've been doing it, whether I'm the one writing the [00:45:00] code or if I'm designing the mocks in Figma and then someone else is coding it, or if now I'm in some sort of messy middle where I'm just still using code as the medium more than ever.

that's kinda how I, I'm trying to think about it in terms of like designer, engineer, design engineer. I think I'm, I'm just a designer, but my medium is code and I wanna position it that way, and I just like to build.


## Looking at Patrick's portfolio

**Speaker:** As evidenced by all your experiments and everything that I was, I was poking around. It, it's cool, you know? You, you have the nice balance between the... Exactly, like that's kind of stuff, it's like that's a fun detail, you know? And it would've been something I'm sure you probably never would've taken the time to work on if you couldn't only rely on like the creativity scaled with Claude or Sol

**Speaker 3:** I mostly used Claude Code on the first iteration of this site, and then as I've continued to work on it, I've mostly been using Codex. But there are things that emerged as a result of this way of working that just would not have happened any other way. So for instance, I do a lot of writing, as you are aware, [00:46:00] and I wanted to be able to bring over my articles to my website, but I also didn't really wanna have to manage like bringing over feature images for all of them, 'cause that's just kind of a pain in the butt.

And so in this process of building out the, the way that I can, you know, show my writing on my website, I ended up just building a tool to do this generative art that would automatically create some kind of feature image for my article. in the past, like there's no way I would've been able to do this or even thought

**Speaker 2:** That's cool

**Speaker 3:** And you can actually just, because of the way that this is built, like the tool is a part of the code base of my website, and then I, I built this so that I could get a sense of like what the tool was capable of doing. and then because it's in the site, I can just expose it so others can try it if they want and, uh, you know, kind of go from there.

And that's just kind of like a really interesting workflow where it's like in order to design the end thing that I'm aiming at, I needed to design this tool, and then that [00:47:00] tool facilitated the, like the work. And I, I'm noticing that more and more with more designers' workflow.

**Speaker:** Yeah, and that being the knee-jerk reaction is becoming so important, right? It's like, I wanna get to this end state. what tool, what tool can I build to just accelerate that process or get me further than I would've been able to do otherwise? Like, that's kind of the TLDR of this entire episode in a way, which is fun.

**Speaker 3:** And I think while I've done that in my, personal workflow there, that's actually been the, the primary way that our brand and creative team has used the tool that I've designed internally. so if we return to that for a second, we have this whole second area here called Tools, and these, for the most part, are...

You can think of them as like prototypes that graduated. They are still prototypes. They're structured the same under the hood, but these are now tools that are available to people within our org. Mostly this is, these are marketing tools, and they come here and they use these [00:48:00] tools to get brand, aligned assets.

So if we take this one as an example, generating or creating images for OpenGraph, I would say that there's basically no brand designer out there who's like super stoked to just have to do that on a routine basis. So, okay, let's make a tool, like this was built not by me, this was built by our, one of our great brand designers, and she designed sort of these baseline assets that, you know, we would wanna remix, and just exposed this as a tool for the team to be able to self-serve.

And she's done this a number of times. We have, you know, six of them at the moment, and whenever there's a need, we now have this outlet to be able to kind of scale ourselves that way, especially on the marketing side, where that is like such a routine part of the job.

**Speaker:** I love it. So you've built the environment for people to explore more easily. Presumably these all kind of start off as one-off things, and then if there's enough heat [00:49:00] around an idea, it's like, "Okay, let's productize this. Let's bake this into the actual environment itself." That's basically what you're showing here?

**Speaker 3:** Yep, exactly. at the moment, there's no reason that we couldn't have product design tools in here too. It's just that we have, on the product design side, not had as much need to sort of hand off or like workflows that we had to hand off in that way. but there's no reason it couldn't be

**Speaker:** I think it comes back to the systems thinking piece. It's easy for almost anybody to extend. Like even going back to the handoff piece, somebody presumably could be like, "You know what? I'm gonna build a little helper that's gonna maybe visually annotate my work for the agents in a way that we weren't getting out of the box."

And then they could do that and then like feed it back into the rest of the system.

**Speaker 3:** to address the should we prototype in production sort of question, I think once you start to look at like what's possible in this environment, it starts to become more clear, like the p- the bene- the benefits of giving yourself just enough distance.

this would never go into our production, like even close to our production product code base, right? Like it just wouldn't [00:50:00] happen. We'd have to do it some other way. even most of my very divergent explorations, like probably don't want those like too close to the actual production code in a cybersecurity company.

because it is its own dedicated space, you can really allow it to, to serve your unique workflow in the way that, w- in the way that you need it to.

**Speaker:** I'm inspired, man. I feel like I've taken a couple baby steps just in the last week to giving myself at least the foundation, the s- the, the split, right? Like that seam between production and this playground environment. But already, even today, I was on a call where I was presenting a concept, and I wanted to show an older concept that I made, like, three days previously on that same branch, and I couldn't remember what the slug was. And I was like, "Ah, man," you know? But now I'm like, I should just have some kind of a canvas primitive and be able to, with- even if it's just within a branch, to be able to say, like, "Here's my table of contents almost for what I'm working on." You've given me a lot of ideas to run with, so [00:51:00] I appreciate you kind of pulling back the curtain and showing what you've worked on.

And again, like I, I said it before, I'll say it again, it just feels like a blueprint for a lot of teams in a lot of ways. So appreciate you taking the time.

