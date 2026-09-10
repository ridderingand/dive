---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: IfPK0LwbX_0
slug: 2026-05-26-andy-madrick
source_type: descript
source: descript://Andy Madrick
guest: Andy Madrick
host: Ridd
title: "Why AI changed design handoff forever"
published: 2026-05-26
duration_min: 53
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] 


## [00:00:00] Designing the Make with Notion modal 

[00:00:00] **Andy:** at Notion, we have our Make with Notion conference every year, where we announce certain features,

the in-product touchpoint for that is always a modal, we announce everything via this big modal that you see on the top left, um, that announces, you know, all the features that we, that we are excited about this year. And at Notion, I don't know if it's so much a rite of passage, but it's like, who wants to build this modal?

there's a ton of eyeballs on it. Ivan, is very involved, which is so cool 'cause, like, I, I started on this a month after I started at Notion, and then I got to work with Ivan, like, every day, and it was awesome.

[00:00:33] **Ridd:** What does it take to actually go from zero to this modal that is celebrated and that everybody's gonna see?

[00:00:39] **Andy:** we have this modal. You know, this is what we ended up getting to, uh, our final most polished version. We were really excited about it. We thought it had a lot of visual, like intrigue. you know, Make With Notion is really exciting.

Ivan was talking with Alan Kay, two heroes of mine, at the same place. But to get started on this, we just jammed on a lot of [00:01:00] different iterations. And for me personally, what was really nice is I was working with a really great PM who's also named Ivan here at Notion, and he was able to kinda triage a lot of this stuff for me, and I got to just build.

So I started out just creating a bunch of different iterations, right? So I, I have this guy, but then I have like a million different ones in parallel, jamming on all of them. more or less fidgeting, uh, you know, in tandem. 

[00:01:24] **Ridd:** Are these mock-ups? Like, are you doing this in Figma or are you building, prototyping these?

[00:01:28] **Andy:** so this is, this is all in Figma. so my workflow is, I do a lot of pixel pushing in Figma still. I'm showing you slides right now because I'm a bit of a control freak. And so when it comes to, like, crafting things like this, I'm pretty fast in Figma still.

I'm actually migrating more and more toward my initial prototypes or my initial explorations being in code. But at this point, this was like September of 2025, I'm still doing a lot in Figma. So I do all these iterations in Figma, and then instead of just sharing [00:02:00] like Figma links with a bunch of people, I create this prototype in our prototype playground, which is like a very lightweight version of our Notion code base, where I, I just mock these up in code, and now I have a bunch of different versions that I can send out to, whoever is interested in seeing this.

So it's a lot easier for sharing, right? Like, I have this all in one space. Let's click through. I can just send a URL to folks, and they can look through this. What happened from here is start deciding what they like, what they don't we started to find that this was the motif that we started to gravitate towards, right?

We have the nosy faces on the left with some kind of asset on the right, and we're like, "Okay, we're getting close to what we want." So I go in Figma, refine it a little bit, and then I go back into our prototype playground, and I create an additional prototype that uses that motif, and then I allow other people to edit this however they want.

So instead of someone giving me feedback on a, on [00:03:00] a Figma file, I'm able to, like, allow a certain level of customizability here, and then different folks at Notion are able to go in, click around, you know, change the titles, change the, the, the number of assets here, change the section headers, whatever, and then they can take screenshots and send it back to me.

And then we're all, like, co-designing together. But it's kind of like, uh, you know, the home screen on, on your iPhone, where you can drag stuff around and drop stuff how you want it to be. But at the end of the day, you're still, like, on Apple's rails, and it's still like, "Okay, I'm in this, world that's a little curated and opinionated."

[00:03:38] **Ridd:** I love this because I was just talking to a designer who is having so much difficulty collaborating with content teams again, because when it was in Figma, somebody could just click and just edit the text. And for a content designer, there's so much value in being able to write within the context of where it would exist, and yet they're doing everything in code now, and so they didn't have this.

Uh, really, really cool what you built here.

[00:03:59] **Andy:** [00:04:00] building this was, was really pretty simple. I took the Chrome from our, sidebar, and I was like: "Hey, we need to make these text inputs that are linked to the, the content on the screen." And I think at the time I was using, um, Composer 1.5, or maybe it was Composer 1 at the time, and it handled this like no

[00:04:19] **Ridd:** Wow, that's cool. I have not seen something like this before, but it makes total sense to me

[00:04:24] **Andy:** Oh, cool. Nice. Um, so then, like, we got feedback from Ivan, uh, CEO Ivan, and he said... I was jamming with him one day and he's like: "Make it feel like a video game." And he started pulling things around, and we got into Figma, and he's like: "I want the nosy faces to be off the scree- like, off the modal. Like, I want this to feel like I'm playing a video game and I got, like, a prize or something like that, and make it really exciting."

So then it's like, okay, a little bit back to the drawing board, but, but that's, that's like the fun part of this, right? We took all these pieces, moved them around a little bit. and then I was thinking [00:05:00] about like, how would I, how would I animate this? And what would it look like and feel like? for me, I'm showing this screenshot because I still like doing a little bit of animation in Figma.

I don't do a lot, but like I said, I'm a control freak, I feel like Figma still gives me a little bit of an ability to control things in a deterministic way. So I did a little bit of prototyping in Figma, like very little. I never make click-through prototypes in Figma, but I will make really simple things like this.

It's like, well, if this face does that, then the text moves like this. And for someone like me who's been using Figma for years, this is a lot of the time can be faster than code, I've been doing front end for, let's say, 10 years. When I started doing this, Figma was still a lot faster.

But now these eight-- these coding tools are getting so good that, like, the speed is starting to increase. So, like, at the time, this was faster for me than Figma. but then I'm, I'm starting to sketch out, like, what this animation should look and feel [00:06:00] like, and instead of telling an LLM, "I want the nosy face here to move to the, this pencil nosy to move to the right and shrink and then fade out, and then this will move in."

I've had a lot of success sketching key frames, taking screenshots, and just feeding it to an LLM, and it rocks. compu-computer vision is so good these days, so I start polishing the UI a little bit here, and it's like, okay, we've got a composition we really like.

I'm gonna get into the nitty-gritty even more. I'm gonna show, like, okay, I want the text to move with the nosy faces, and then I'm gonna sh-show, like, okay, this is step one, two, three, but I want them to move in this direction. So again, I'm taking screenshots of this and feeding it to Composer, and then I get really, really nitty-gritty.

I'm

[00:06:47] **Ridd:** this is super granular

[00:06:49] **Andy:** Yeah. I, I mean, like, I think with a lot of this motion design stuff Coding tools are so good at executing it, but you have to be very, very descriptive about what you [00:07:00] want. Otherwise, you're gonna be fighting these things for like hours, and you're gonna be pulling your hair out and going in circles.

So for me, it's like a picture is literally worth a thousand words, and so like I can just do this, make like, okay, here's what Nosey is gonna do at the end. It's gonna come back over here, and I'm gonna label what state this is in. And then, like we, we come out the other side, and we actually have, something that works in code.

This wasn't one shot. It's like you have to refine it over time. But like the animation actually like worked really well. And what was really, really cool is when I, when I go and I speak with, you know, our engineers who are working on this, it's like, how do we translate this from simple like playground code to production code?

all I did was I took the directory that this was in, in the playground, fed it to an LLM and said, "Make this work in production," and it one-shotted it and did it like perfectly.

[00:07:54] **Ridd:** No way.

[00:07:55] **Andy:** was like flawless. Like, uh, like it was so simple. The engineer, [00:08:00] Rob, and I were both like, "This is so sick."

And then I tell Max, our head of product, about that, and he's like, " This is so sick that we can do this, right?" 

[00:08:06] **Ridd:** I feel like that's kind of the dream setup for so many teams, but you kinda-- We're still in this phase where everybody has to build it out of the box right now. But like what you just described where you have like the lightweight prototype playground, I'm assuming it's probably even more than the 80/20 of Notion.

Like, you really get the front end that you can kind of play with, and then that translation step, like if it's anything even close to a one-shot, like what you just described is, it feels like the ideal workflow for teams kinda everywhere, and it's really, really cool to see your process even involving the canvas too, like that full pipeline is neat.

It's neat.


## [00:08:39] Building new collaboration workflows

[00:08:39] **Andy:** we have to build our own workflows for each other in these organizations. giving people the tools to make really strong decisions is the strongest thing for us, right? Like, we as designers, we can do that, right? So we can, we can create these prototypes that give people enough freedom to involve them in the process, but also, like, relying on our own [00:09:00] training as designers to set some rules up there and be, uh, opinionated

we ended up actually, like, we had to hedge, right? And so we had to build three different versions of this because internally we're like, this new modal variant is really sick, but it could be confusing to people. why is it a square? Modals aren't usually square.

Like, we were worried that it might not convert super well. So when it came to ship this thing, we had to be like, "Okay, we need one with three heads. We need one with four heads that doesn't, like, animate as, like, int- interestingly." And then we had, you know, what I call the safe version on the right, where it's like, here's our, our nosy faces and some kind of video playing on the right.

And when it came to ship it, we had like stat sig gates for each one, and we were watching these really intensely, and we shipped all three at the same time, and we were seeing which one would convert the best. And I always love to ask, you, Rid, were to guess which one of these converted the most, like the highest, what would be your guess?

[00:09:57] **Ridd:** really want it to be the one on [00:10:00] the left, but I'm nervous that you're gonna say the safe one

[00:10:02] **Andy:** Well, before I tell you, I want to say like Ivan and then our, our head of product, Max, had a bet and they're like, "Okay, let's bet like 500 bucks on which one's gonna win." And Ivan's like, "Well, we can't bet money. Let's bet like a gift." And they, they both-- So Ivan bet on the one that you bet or on the four head version, and Max bet on the three.

But I, I hate to say that the safe one

[00:10:23] **Ridd:** Yeah, I knew it. I knew it. I, I t- I was just, like, almost dreading the reveal.

[00:10:29] **Andy:** The, the, the thing about it, the thing about it, the-- my hypothesis, look at the size of the buttons, man. Like, one had a huge button, the other had, like, tiny buttons. So we sweat the details on this for, like, a month, right? And then it just turns out, like, this is probably just the size of the button.

If we just made this button bigger, it would've looked better. But yeah, that's, that's that little digression

[00:10:50] **Ridd:** good. Well, I appreciate you giving a little behind the scenes of the workflow, and it's fun to see the full end-to-end process for [00:11:00] a product that I use every day. Like, that's always one of my favorite parts of even doing this podcast. you touched a little bit on, like, showing how you made it so people can, like, edit the content inside of the modal, that kind of a thing.

I'm wondering if maybe there's another layer that we can go into around just given this shift, you know, you talked about how it's a little bit faster to do things on the front end. Now you're moving toward code, maybe starting in code more often. How's that changing the way that you are collaborating with the team when you can't just, you know, hop into a Figma file and spotlight someone anymore?

[00:11:35] **Andy:** if I'm working on a really big, like, reframe, whi-which we're doing right now at Notion. It's like we're rethinking a really big foundational concept at Notion.

And I could just go into Figma and redesign every single screen and, like, get feedback on that. But I found that it's so much faster to just spin up a crude representation of Notion with an LLM [00:12:00] that allows people to click around and feel all these new proposals that we're making. So the bigger the feature, the more likely I am to start in code.

But if it's a smaller thing, like a modal or polish, visual polish or something like that, I find Figma to still be really helpful. And like, personally, I'm long on Figma because you can just directly manipulate everything with your hand, you know, your mouse, but I still feel like it's an extension of me rather than like feeding an LLM or writing some front-end code.

And so if it's a tight feature or visual polish, like I said, I'm gonna get into Figma, sketch something out, and then share that with the team. But like I said, if it's something really big, like we'll just sketch out, like have an LLM sketch out all these different flows, and then we can evaluate and, work through those together essentially.

the collaboration part of things, it's more about like... And, and, and this is a question that's come up a lot lately you really have to suss out what the people you're working with, like how they want to work with you. [00:13:00] And there's no one-size-fits-all answer. if I'm working with an engineer who really doesn't wanna work on the front end, and, and this person just is obsessed with doing the deep dive on the back end and making this thing ef-efficient and performant, I now have the skills using these tools to do most of the front end and then ship PRs that I can get really high quality reviews from these folks on and kinda share the work in that way, right?

Like these titles are kind of breaking down a lot. But if I'm working with a team and they have bandwidth to just fly on the front end, I can build a crude prototype or even like quick Figma mocks, and then we go in and we can iterate on the code together and like even take screenshots and redline stuff.

And then sometimes like the, the source of truth is, it- it's kinda like floating out there, and it's more like, "Well, we wanted to, you know, polish this thing. We didn't put it in Figma, but it looks good in code, so like w- let's take a screenshot, and that's our source of truth."

And I think you'd be surprised [00:14:00] how many Figma files in Notion are just screenshots of the product and then like a little chunk of it is, you know, a new Figma frame over the top. So, 

[00:14:09] **Ridd:** I, I did my share of screenshotting prod and drawing something over it, but also I'm a bit of a control freak when it comes to a design file too. So I was almost always had like, this is the source of truth or at least a really good representation of what is in prod, and it's neatly organized, and I would almost feel this, this lack or FOMO when I knew that a piece of the design was not up to date with what is in prod.

And now that has just completely went out the window. Like, there's basically no documentation that lives in the canvas. The only time is like I'll use like the paper Chrome extension to just like copy a component from prod and paste it in. Like, yeah, maybe you can kinda get there, but The source of truth has entirely shifted to production code, and my canvas is now the messiest that it has ever been in my entire career.

And it was [00:15:00] freaking me out for a little bit, but I totally settled into it now, where it's like, ah, I just don't really care what's in the canvas anymore.

[00:15:04] **Andy:** That's what everyone says when you're, when you're applying to a job as a designer. It's like, what is the number one skill we look for? Dealing with ambiguity, right? Like, how do we live in this world where everything's changing and how the roadmap might be nebulous, and we might be like grasping at different, you know, objectives and things like that.

And I think to your point, I, I honestly want you to teach a lesson on how to use paper 'cause I'm following your journey with that, and I'm like, I feel like I'm in the Stone Age sometimes. But, uh, yeah, you just have to be cool with, you know, looking at the thing that users are gonna actually see and obsessing over that artifact and making sure whatever form of, like, iteration on that takes, like make sure that is gonna be 100%, right?

and that like Figma and these mocks, they're just reference tools at the end of the day, and so they have to be accessible by your team, and they have to know what they're [00:16:00] looking 

[00:16:00] **Ridd:** I know the answer is it depends, but I wanna go a little bit deeper just to understand how often you as someone... Your job title is just designer, right? Like, you're not a design engineer or anything. Okay. So given that, how often are you actually responsible for some element or some piece of the front end that is shipping on a given feature?

Like, is code just a better prototyping tool? Are you owning it, the front end at all? Or, you know, how often is it just pure mocks? Like, 'cause I'm kind of experiencing that too right now, where it feels like every single project has to be completely ad hoc, where I message the engineer and I'm like, "How do you wanna work on this one?"


## [00:16:36] Owning frontend vs. owning mocks

[00:16:36] **Ridd:** 'Cause we're all just kind of figuring it out. So can we get one level more specific in terms of how the concrete deliverables change for you project to project, and roughly what the spread is?

[00:16:48] **Andy:** For the majority of our projects, I would say our engineers take things to 80%. some will go 100% if there's bandwidth, but I think that what I've found, [00:17:00] my personal workflow here at Notion, is I think our engineers will wire thing up, everything up, make it very performant, make it actually work, but then it, it looks like, uh, uh, we call it like the Temu version of the product, right?

Where it's like it's not 100% there. And so what we can do is parallelize the work, where I can come in and make itty-bitty PRs for just visual polish and finish that last mile, right? These LLMs are not very good at the last mile of design, and that's still, like, our superpower.

It needs to be our superpower. our engineers will bring it all the way, like, up to 80% to 90%, and then, you know, working at a company like Notion, we re- where we are obsessed with craft and taste and delivering a very, like, uh, well-boxed tool, well-packaged tool. That's up to us as designers to just own the outcome, is what we say here at Notion.

Like, it's just on us. if it's not gonna get done, then someone, someone has to do it, right? [00:18:00] And I think we have no excuse anymore to not be responsible for those changes that we wanna see. and, and at the end of the day, these artifacts are extensions of us. I'm on a tangent now. But like, these digital artifacts are extensions of our work and our practice, and we have the ability now to just own how that gets delivered.

so yeah. The answer to your question is, most of the time, for me, I'm picking up the last 20, or let's say five to 20% of, the front end work. And I'm not doing a lot of building features from scratch. I'm not building a lot of wiring things up, but I am doing a lot of animation, a lot of visual design, and just anything that an LLM can be really good at if I'm very descriptive and have the language to tell it what to do

[00:18:51] **Ridd:** So is it safe to say then that if your process is going to start in code, given something larger where you want to have an LLM just scaffold a bunch of different [00:19:00] concepts, all of that is going to be throwaway. That's not going to be much of a handoff. At some point, you're just going to be like, "Okay, this is what we're going to do."

The engineer's going to probably start from scratch, and then you're going to come in again at the end. Does that feel correct, or is there situations where that doesn't apply?

[00:19:16] **Andy:** I think that's it exactly. But, but I, I wouldn't say that necessarily that, that initial, like scaffolding work, the big prototyping that you're doing, like even if it's a massive prototype, I, I think like the, the cl- classifying that as throwaway work I don't know. It might be a misnomer because at the end of the day, like, I don't think I'd want anyone to build, the app I use every day just one-shotting it with Claude, right?

I would want a very thoughtful team of engineers to, like, do what they do and go to town on it. And then, the, the work that I put together, it was just a different medium of putting something on the canvas


## [00:19:52] How to sequence work with engineers

[00:19:52] **Ridd:** I kind of wanna hang out here for a second 'cause this is so top of mind for me. I know we're going really deep, but it's so-- it's challenging. Like, I'm experiencing this too, where there's just so [00:20:00] many different sequencing ideas to play with and, like, when do you insert yourself and what do you own and who actually ships the thing?

And 'cause I'm right now, like, before we jumped on this call, I have a Temu version of something, and I'm doing the exact same thing that you're describing. Like, I'm probably the last, like, maybe 15%, and I'm owning everything about the front end. I'm gonna be the last person that touches this code too. Like, before this goes out the door, I'm the one that's owning every single piece of the UX, how it feels, how it looks, and I love that.

That is a little bit more cut and dry for me. Where it gets trickier is, you know, yesterday I'm doing a prototype where I'm gonna introduce an entirely new visual primitive that doesn't exist in the code, and I have no idea if it's even gonna be good. That's the whole point. I'm prototyping to explore it.

I wanna send it to people. I wanna have them use it, record themselves playing with it, and give me feedback. then it gets a little bit trickier because I can get 80% of that prototype wired up using the production code base perfectly, but then there's, like, one schema level change and one or two little mutators that have to [00:21:00] be added, and I don't really want to go down there if I don't have to.

I'm just trying to make a quick prototype. So now I'm making something that is maybe 50% mock data. Feels real enough, but, like, it's obviously not production ready. But the visuals are pretty good, you know? Like, the engineer definitely does not wanna have to start over on this. And so now we've kind of flipped the sequencing a little bit where it's like, "Hey, I've built the scaffold.

It's good. Can you just get the data layer to work on the back end?" And there's so many different pros and cons, and it just keeps changing. But I don't know how much you're, like, experimenting with that type of stuff, but it's, it's really changes the process depending on when and how you insert yourself when you're playing in code.

[00:21:43] **Andy:** selfishly, I'm curious has that been resolved? Like, how do you like working together?

[00:21:47] **Ridd:** I think it goes back to what you were saying, where you almost have to message the engineer, have an understanding of who they are too, and just be like, "How do you wanna handle this thing?" You know? And, and I, I don't have a good answer yet. [00:22:00] I'm, I'm actively exploring a lot of things, which is why I was kind of seeing what you're thinking about.

'Cause I'll give one other shift that I've noticed in my own practice, and you can tell me if this resonates or sparks other ideas too. But like, when we are building a smaller feature that the goal is to actually put something out the door, most of the time, like, if it's just front-end code, like it's, it's good, you know?

Like we're not-- it's not hard to make good UI-based code. As soon as it touches anything else more strategic is where it gets iffy. I've sent some PRs where the engineer is like, "The fundamental premise of how you built this is wrong." Like, I-- "Why am I looking at a code diff right now?

Like, the fundamental approach that you took is wrong, and it doesn't matter how many little cla- Claude and Codex reviews you had, this is wrong." So now more of the review is actually shifting to planning mode rather than the code itself, where I will like go through a planning mode, get an idea of what I wanna do, and then I'll just send that as an MD file.

The engineer will review that. If the [00:23:00] plan looks good, it-- he can mostly trust that like this is going to not destroy things, you know? Like I, I... Everything else is designed at this point. That-- I, I'm starting to do that a little bit more, but this is why I was bringing it up and why I'm talking way more than I normally do, 'cause like I'm, I'm really trying to figure this out right now, 'cause I don't know what to

[00:23:18] **Andy:** we're all in this state where, you start talking about this, I'm like, "Gimme, gimme. Like, gimme this information. I w- I wanna steal these, I wanna steal this." one thing that I've found personally is, like, what I'm gonna tell an LLM to do, like an agent to do in our production code base, I don't know, a lot of the language that I need to use to get it to do the right thing for me, right?

[00:23:40] **Ridd:** うんう う

[00:23:43] **Andy:** these, like, agents can be really good at acting as translation layers. So like I could build something that, like, just absolutely sucks in production code base, but man, it looks so good.

And then what, what I've found is like we can do that, [00:24:00] and then an engineer can build like the actual feature. And then instead of throwing away all the work that we did, it's like have an agent be like, "Okay, I have this feature. I built it. I'm a designer. It sucks, but, but it looks so sick." And then we have a engineer's feature that's like so performant, but it's the Temu version of this.

Can you keep all the functionality of the engineer's version and give it all the styling that I have here? And I think that can get you so much closer than I think, like our intuition says it would. Because like all of a sudden, like it just is-- it doesn't have to translate anything. It already has the front-end code.

It just has to apply the right, values to the right things. And so like even on the Make with Notion model that we did, that was a totally different code base, right? Like Notion doesn't use Tailwind or ShadCN, but the code base I built that in used both. And this was like six months ago with, I think it was [00:25:00] Opus 4 or 5.

It crushed it. It did it in one shot. So like

[00:25:04] **Ridd:** surprising. I wouldn't have expected that.

[00:25:06] **Andy:** I mean, at the end of the day, it's CSS and JavaScript and- Opus in particular and Claude in general, really, really great at front end. Composer, really great at front end, right? Like, and they're only getting better every day.

one of the reasons why I've really enjoyed using Cursor is 'cause their harness is like incredible. And I just know if I, if I have Composer do a front-end feature, I'm like ultra-confident that it's gonna do a really good job at that, right? Rather than me hacking in like Claude code and trying to like vibe my way to the right thing.

I think there are these tools where you can kind of use them as scaffolds, and like there's a bunch of pre-work that already went in there that I can just kind of steal from and, you know, vibe with essentially.

[00:25:47] **Ridd:** the first time somebody's actually said that to me, where maybe the harness from Cursor is making front end a little bit easier. So I'm just sitting with it as somebody who, yeah, I used Cursor six months ago, but I, I'm [00:26:00] still in Conductor, which I know you have, uh, you've recently abandoned me and went back to Cursor.

So it's just hard to keep up today.

[00:26:07] **Andy:** In your conversation with Brian Loven, he was very astute and said, "We cannot get tribal abou-about these tools," right? "We just have to use the right tool at the right moment." I'm still driving with Conductor every now and then. I think it's an amazing tool.

But I think, for the past month or so, one of the designers at Notion here was like: "Have you tried Cursor 3.0, Cursor Glass?" I was like: "No, dude, I am a, a Conductor lifer. Like, I'm never gonna churn." And then I open up Cursor, and I'm like: "Holy shit." And like, of course, like Rio made it. Like, the, the team over there is just, like, so good.

Composer is such a fun model to jam with. And then, you know, they have work trees, they have multi-agent workflows. something about Cursor that I'm loving these days is plan mode. So I have like, whatever model, make a plan, creates an MD file, and [00:27:00] then it renders it really, really beautifully, and it even includes things like mermaid charts and things like that, where I'm like: "Oh, as a visual person, this is a beautiful representation of what you're going to

[00:27:11] **Ridd:** Yeah, that's cool

[00:27:12] **Andy:** And it's all in one frame, right? I've got my browser window, my terminal there. If I wanna run it in the cloud, I have a VM there, and I can just shut my laptop, go do my thing. I know Conductor's working on the same thing. as a designer, seeing Cursor just absolutely, like, they're cooking with gas over there.

Like, it's really, really sick, and like, I feel like we have, beautiful tools to create beautiful tools, and I think that that is like a, a feedback loop, and it's always inspiring to see, like, people who are creating these things are so creative and interesting, it just adds another layer of inspiration for what we're doing.


## [00:27:47] Owning the last mile

[00:27:47] **Ridd:** We talk about the last mile piece?

maybe the last mile is as big as 20%, which in that case, that's a lot, you know,

[00:27:53] **Andy:** Mhm, mhm.

[00:27:55] **Ridd:** the design really the front end, like that's a lot. So I guess I'm kind of [00:28:00] curious, when you are prompting, I'm assuming there's some-- you're actually like getting into the code and writing CSS in Cursor.

I would also assume there's still a decent amount of prompting too. So in the prompting category, how much of this... I guess there's like this spectrum, right? On one end of the spectrum is you are creating granular diagrams in Figma to describe exactly what you want, like you were showing with the modal animation.

On the other end is allowing for a little bit of wiggle room with AI, where maybe I'm intentionally going to not be as descriptive because I kind of just want to see what comes out. How often are you moving between different parts of that spectrum? How do you think about landing the plane on some of the finer front-end details right now?

[00:28:46] **Andy:** when I started using Conductor, I got really freaked out because I was not looking at code twenty four seven, right? And I think this is part of their mission, right? They want people to not use, to, like, not write [00:29:00] code. Cause I was writing a lot of front-end code before Conductor and still just working in Cursor and doing, you know, tab complete, all this, all these different manual coding methods.

But now, like, if I'm doing the last, let's say, 20 to 15% of a feature, I let the LLM build it, and I get it to where I want it to be, and I'm not trying to fight it and do a bunch of stuff manually while it's working. And then once it gets it to where I want it to be, I just look at a lot of diffs. "Okay, what did it do here?

What did it do there?" And some of the advice that I tell a lot of folks who are asking about these exact kind of workflows is like, your PRs as a designer and not a, an engineer who's got all the training of an engineer, your PR should be very, very small and manageable if you're not comfortable reviewing the code yourself or writing the code yourself.

And I think the rule of thumb here is that if you are expecting someone to put more time into reading something [00:30:00] like a PR than you put into making it, there's a mismatch of, of,

[00:30:04] **Ridd:** it's good

[00:30:05] **Andy:** work being performed, right? And that goes for like writing docs and stuff too. I wanna finesse the shit out of this five-line PR.

And so then it's so small and easy to ship that I can review it and know like, "This isn't gonna cause problems." And I give it to an engineer, they're like, "Okay, cool. Stamp, boom, out the door." We have to break the work into like manageable chunks. And like five lines is not very realistic, but a hundred-line PR, that's my general advice of like, don't five code a bunch of stuff and send an engineer a 500-line PR that you didn't even review yourself, 'cause then it's just like an awkward conversation, right?

You're like-- They're like, "Hey, uh, what's up with this PR, man?" And it's like, " You tell me, man. I, I just kinda like had some fun." Um,

[00:30:49] **Ridd:** hitting a little bit too close to home

[00:30:51] **Andy:** no, same

[00:30:51] **Ridd:** now.

[00:30:52] **Andy:** me. I learned these things the hard way,

[00:30:55] **Ridd:** Yeah.

I'm gonna go one level deeper on the beginning part of that [00:31:00] answer, where you talked about how you kinda just get the initial thing onto the page with the model. how much of your goal with that initial thing is exactly what you were picturing in your mind versus do you ever kinda just see what happens a little bit?

Like, is that part of your practice? And, and the reason I ask is because I was looking at your modals with the animation, with the little motion faces. I built something very similar yesterday,

[00:31:24] **Andy:** ーん。 う

[00:31:28] **Ridd:** not as complex 'cause I was able to fade out the edges with a little bit of like a CSS mask, so I kinda got to play on easy mode a bit.

But I didn't really actually have that much in my head. I knew I wanted something to cycle through these logos, but I kinda was like, I just want it to move horizontally and fade out at the edges, and that's it. And I, I very intentionally did not give any more intent there because I kinda just wanted to see, to see if it would take me a different direction.

Is that part of your practice at all? Like, do you think that way, or is it very much so like, "I see the [00:32:00] thing, let's build the thing"?

[00:32:01] **Andy:** That is 1,000% of my process.

[00:32:04] **Ridd:** Okay, cool

[00:32:05] **Andy:** I think a year and a half ago when I was at Tome/Lightfield, that was when I first started using Claude as a collaborative partner, and less so like Claude Code and like the, the, the front end that it's writing, but just like asking Claude questions about, " Hey, I built this feature.

I have it in Figma. What do you think about this?" my favorite thing about working at Notion is you're just surrounded by really creative, super, super articulate people, but sometimes they're not available, and like last year I was like the only designer, right? So I have to like use these tools in a different way.

I love seeing what Claude, which has indexed the entire internet, comes up with and ev- how it evaluates my work. I don't think it's gonna like give me spot on advice every time, but it'll generate a lot of alternate ideas that I'm like, "Oh my God, I never thought about doing it that way." And [00:33:00] then when it comes to your point too about, uh, making something while like having something surprise you and then being like, "Okay, cool."

I think one thing that I've really enjoyed is that, working at a company like Notion, there's a lot of like one-off components and we like made this menu its own kind of thing. Like we made a menu item its own menu item style, but our code base has an entire like really robust menu system. what if we just built that?

Like, and, and, and I'll just ask Claude. I'm like, "Okay, we need to like remake this menu, for instance. I wanna use the design system as much as I can." And it'll put things together in a way that I'm like, "Oh my God, like we had all the pieces here. We were just like using legacy code for so long, and now we have this fresh version of it.

We didn't even have to like do anything." Now it's more performant, it looks better, it's more in line with like what we've been jamming on recently. so like all the way from the, initial sketching version, and this is... I was using like Claude [00:34:00] Artifacts a lot. Like, "Show me what your version of this chart would look like."

And it'll create something with like a million gradients and like a million tags and it looks like, a jelly bean factory, right? And you're like, "Oh my God." But then, you know, we can, we- you can kinda like trim it down to something that you'd actually be comfortable shipping. 

[00:34:18] **Ridd:** I'm totally stealing jelly bean factory. I liked that a lot. Like immediately multiple UIs just popped into my head, then I'm like, "Yes, that's exactly how to describe that." Uh, let's talk about this piece then, because I think creating wiggle room for Claude or whatever Codex is only valuable if you're able to push back what you're gonna get that is generic.

Because it, it can combine things in unique ways, but like it's still going to be generic, it's still going to be boring visually, emotion-wise, kind of almost everything. And so how do you think about that a little bit? maybe we could talk to a designer who is potentially slightly earlier in their career, where the, you know, we used to say like, "Do a bunch of copy work.


## [00:34:56] Pushing past what AI gives you out of the box

[00:34:56] **Ridd:** Make every single visual by hand." And now it's like, well, you don't really do that as [00:35:00] often. And so in some ways, I think maybe I have some concern that we lose the practice of what makes for great visual design and what allows you to be creating things that are, differentiated, show restraint. So, how do you think about the way to consistently push past what AI is gonna give you out of the box?

[00:35:19] **Andy:** is no shortcut to having taste or developing like a high craft, high velocity practice. I think that with AI, we have shortcuts to creating a lot of things, but at the end of the day, it comes back to discovering and learning the language of visual design Through repetitions, understanding like, uh, you said the, you used the word restraint, which is like the perfect word.

we as designers, our job now with limitless UI out there is how do we take it and make a restrained version of this where form follows function and we're avoiding decoration for decoration's sake. And so I think my [00:36:00] boring answer to you is like do a lot of visual design. Talk to a lot of people.

If there's someone you really respect as a designer, ask them about how they developed their eye, about their taste. What are they looking at? What movies are they watching? Like what books, like what art books do they like? I think for me, in a previous life where I was working in architecture, everyone's portfolio looked exactly the same.

It's like hero shot, chunk of text, whatever, and it's because online there's just a bunch of portfolios that you can look at and get ins- inspiration from. And I was like, "I don't want mine to look like that." And I w- at the time I was like taking a painting class in school, and I was looking at a lot of art books.

And the way that these art books like represented the work and the way that they chunked up the grid and like the really restrained text, and it's all about the work, just show the work full bleed. And I was able to create something really just by copying. and so to your point about like we don't like copy a UI pixel for pixel as much anymore, I still tell people that's a [00:37:00] worthwhile exercise.

It, it's less so about, you know, doing a static frame pixel for pixel, but like, the Linear, uh, sidebar, uh, logic is really interesting 'cause if you minimize the window past a certain point, it'll automatically, hide itself and the window kind of, refactors and reflows.

And then as you expand it back and forth, you see its really elegant interaction. And so instead of like remaking that in every instance of itself, how can you like redesign that interaction pattern? And how do you learn from like the easing curve of something

[00:37:35] **Ridd:** Yeah, that's good

[00:37:36] **Andy:** How do you know like what are the break points that they're using?

we have like best practices for all this stuff, but, I think all the great people, all the great designers are taking like this common knowledge advice and, passing it through their filter of ultra taste and like putting something out into the world and, and getting into the nitty-gritty and understanding like the key frames of a certain animation, it still is [00:38:00] worthwhile to me

[00:38:00] **Ridd:** Mm-hmm. No, I like that a lot actually. Like recreating interactions you need the visual design foundation in all worlds, but recreating interactions is one of the best ways to practice. And even as you're talking, it's reminding me, like something that I've started paying attention to more is where are the best products not using any interactions?

Where are instant transitions applied? Because especially, you know, your mental model where you're talking about, you know, I'm working on these bite-sized PRs, which is very much so for me too. Like I basically own every P3 bug, right? And it's like when you're just staring at a single P3 bug, it's really easy to just make that thing immaculate, man.

You know, every little detail is so dialed in and perfect and moves, and it's gorgeous. But then you, you run the risk of zooming out and you realize like every single piece of the interface is overcooked because I've been looking at things in isolation, and now I can control all of those interaction details.

So I'm like, where does Linear skip it? Where do they do just instant transitions cause the [00:39:00] pendulum swung almost too far in the opposite direction. I can feel that for myself, and I'm sure people listening feel that as well.

[00:39:05] **Andy:** that's another thing, like when I'm looking at or doing like a portfolio review and it's a young designer and it's like, it's harder than ever to get a design job these days, and so you've gotta stand out. And I see so many portfolios where I'm like, "Holy shit," like, " You did so much here."

Like, "You've got an animation here, and this button does that, and you've got a whole section on this." And at the end of the day, the best way to stand out is to show your best work. And to show your best work, like, let it speak for itself. the decoration for decoration's sake, no one wants that, right?

Like, I don't need to see an interactive version photo of you on vacation or something like that. Like, just show me what you made last week, micro animations and animations in general, like they're a whole like can of worms and like you could teach a whole class on those, right?

There's books written on them. But I think the default is like, what does this thing look like with no decoration, with the same size typeface, with no [00:40:00] animations? take that and it's like, okay, where could I add a little flourish of delight here, and how does that help the user instead of detract away from like what they're trying to do with this thing?

[00:40:09] **Ridd:** I know you have a course where you're thinking about a lot of these things, everything from like the tooling perspective, but also training this visual eye and all of the reps and everything that's put into, and everything that goes into that process. So before I get to the final couple questions, I'm curious if you could just share a little bit more for people who do wanna go deeper.

Just who's it for, what they can expect to get out of it kind of thing.


## [00:40:30] Andy's Craft at Speed course

[00:40:30] **Andy:** So the course is called Craft at Speed, right? And, and the whole thing is about like, even though there are no shortcuts to becoming a really, really strong designer, there are some really high leverage things that you can learn as a designer or a PM or an engineer, someone trying to get into tech.

there are really high leverage things that you can learn that can train your eye and instantly make something that's like, you know, let's say a 40% on the visual scale to a 80%, right? It's [00:41:00] thinking about typography and composition, all these different things. And it's like there's actually some what I think are objective, principles of good design.

And I'm trying to just like share the knowledge that I've, I've, I've gained over the years into that course. And then when it comes to like learning about these things, the best way to learn them deeply is to actually do them. So rather than like teach everyone how to use Cloud Code, it's like I just show what does my workflow look like on a day-to-day basis.

It's like a two-pronged course of developing a visual understanding and being able to put that into practice, and then using all these skills to actually like create an artifact yourself.

And you'll leave the class with, a new portfolio website or a, you know, a feature that you wanna push to production. And you and I can work on that and jam on that a little bit, and we can talk about these itty-bitty PRs and things like that. And, uh, the whole goal is to just build up the foundation of what it means to be a designer today, and being able to ship High [00:42:00] craft tasteful things using cutting edge, you know, leading edge tools, essentially.

And then, you know, I'm there to give a lot of feedback. We work as a class and, I try to lead critique sessions. I think a lot of folks who aren't designers, critique is really, like, kind of intimidating, right? So I just wanna set it up where it's like, hey, as designers are... One of the things that we can do that's gonna benefit us the most is working as a jazz band, right?

Sharing our work with people, let people take it a certain way, and developing that thick skin so that we can just take the best idea and run with it, no matter where it comes from. And sometimes the brutal truth is like, "Hey, this thing isn't really good yet," but you have the tools, and we can help you get there.

So, yeah, the course does a little bit of like... It's like a crash course on being one of these titleless designers at a company like Notion, let's say


## [00:42:53] How Andy grew at Tome

[00:42:53] **Ridd:** Speaking of transformation experiences, I want to call back to something that you said to me the [00:43:00] last time we talked, where you said how, uh, working at Tome felt like you came out of the other side feeling like a 10X designer. So I'm curious for your own journey, what was that transformation that happened for you?

[00:43:12] **Andy:** So Tome, uh, was the highest of taste product out there on the market. And it was like a slide deck, AI generation presentation tool, um, right when, you know, these tools started coming along, and it was like an 80-person company.

And then, when I joined, it actually collapsed into like a 12-person company, and we pivoted from presentation tools to actually like a totally different, market of being an AI CRM. And so, we still had, you know, our founders, Henry and Keith, who are like bleeding edge, high taste individuals, and we're building this new tool.

And so for me there, like I was the only product designer. We had a really, really excellent creative director, his name's Alex Cannon. And like myself, [00:44:00] Alex, and then Henry, one of the co-founders, Henry Liriani, who, you know, his baby was, uh, Facebook Messenger forever, and then he built Tome. It was just us three in a room every day for three hours talking about the work that we were what that did for me is it forced me to be able to articulate why I made the decisions that I made based when I was creating something. I'm in a room like... Talk, talk about like imposter syndrome. It's like I'm in a room with these heavy hitters, and I make something and they're like, "Why did you choose to do that?"

I'm like, "Bro, it looked really cool." And they're like... I think Henry's word was, uh, it's, it's like graphic design theater. Like you can't do something for the sake of doing it. And so you have to explain the work, and you have to like dig into like first principles. Like, why did you do that thing the way you did it?

And, it made me so much more, like it gave me a meta-awareness of my process. And so it's like, well, I want this to look a certain way. why are you putting everything in a [00:45:00] card? Like uncontain it. Just present the information. Use space instead of lines. all these like very like base level UI tricks that automatically make your work better.

But at the end of the day, it's just like the taking away of all these things that we layer on top of our, our, our work. 'Cause I think a lot of the time it's like if you're in a room with really great designers, you're like you, you wanna overdesign the product I think it's like the, the midwidth chart of like the really great designers just do less, right?

And, so I think like just three hours a day for a year of just like really intense crit. And sometimes I came out of it and I feel so good. I'm like, "Oh my God, like Henry loved my work." I'm gonna go home and I'm gonna have a beer and celebrate. other days, I'd-- it'd be like a five-hour day because I did not, I did not-- I did so bad and I'd be like, "Oh my God."

And I'm at the office till like midnight re- like reworking something. So having those opportunities, like critical feedback's intimidating and scary. Putting ourselves out [00:46:00] there is vulnerable, like, but at the end of the day, it is the best possible thing that you can do as a creative in any field really, uh, to level up

[00:46:08] **Ridd:** maybe as a parting question, I'd love to learn just a little bit more about your experience at Notion, 'cause I, I think you're coming up kinda getting close to a year now. You started working on Notion Meeting Notes. That culture is so incredible, right? Like, I've always looked up to that group of people and the designers and just the quality of product that's come out for years now.


## [00:46:28] The impact of the Notion design culture

[00:46:28] **Ridd:** So are you able to reflect on your journey so far and see ways that being in that environment has continued to grow and shape you as a designer?

[00:46:37] **Andy:** the saying like, if you're the smartest person in the room, you're in the wrong room. And I feel like, like any room I go to in Notion, I'm like, "Okay, I'm in the right room because that person's here and that person's here." And like I, I sit right next to, uh, one of our design engineers, Cole Bemis, and then I got Brian Loven, you know, two desks away, and then I got all these like just the most like talent dense [00:47:00] row over here in the world.

And I think that like just on a day-to-day basis The small habits you pick up from other people. Cathy, our designer, is so, so good at collaborating with other people, and I watch her and how she brings other people into the process at all times. And then, like, Ken Chen He's the best designer I've ever met who can look at something that you've been working on for six months, and you're like, "Oh, I just need it to be perfect," but it's not working. He'll look at it and he'll be like, "Oh, well, that one thing is off. If you do that, the whole thing's gonna be good."

You're like, "Oh my God. Oh my God." And it's just so nice. But, it all starts at the top at Notion, and Ivan and Simon, our co-founders, are like... Ivan, he freaks me out because not only is he the most tasteful, timeless designer at the company, he's also extremely, an extremely good engineer.

And Simon, our other co-founder, is on, constantly on the bleeding edge of using these tools to build different things and things like that. So I came in here, like, [00:48:00] the first time I interviewed here, I didn't get the job. And so the second time I interviewed, I was like, " I'm gonna make sure they don't regret this decision," right?

And so I just try to, like, take everything that I'm learning day to day and put it into my workflow. it's such a wonderful place to be because there's always some new thing we're gonna build, and we have so many customers that, use our product in so many different ways that the possibilities are endless.

it's the most ambiguous place I've ever worked, because of that, we have such broad range of work, and it's, it's just a blast. And, uh, you know, doing something hard every day you go home at night and you're tired and you're like, "Oh my God, like, how am I gonna do this again tomorrow?"

But, like, the work is so interesting and fun that it just keeps you coming back, and you just keep chewing on it more and more.

[00:48:44] **Ridd:** Well, I am grateful that you took the time to come on today and give us a little glimpse into this workflow. It, it's very clear that you think deeply about this stuff, that you care about it, and so it's just, man, we're in a time right now where it's so helpful to riff and experiment, but then [00:49:00] have these moments where we can just kinda like share notes.

"Hey, what are you doing? What's working? What's..." You know? So I really appreciate you kind of bringing your notepad today with us, and, uh, it's great hanging, Andy. Thank you.

[00:49:09] **Andy:** Thank you, Reid. This is, this is amazing, and I'm gonna keep stealing ideas from you, so keep them 

