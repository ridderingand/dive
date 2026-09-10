---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: j_ytmrYU_zc
slug: 2026-08-11-kyle-zantos
source_type: descript
source: descript://Kyle Zantos (2)
guest: Kyle Zantos
host: Ridd
title: "The latest AI design workflows"
published: 2026-08-11
duration_min: 51
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] 


## HTML workflows

**Speaker 3:** All right, so the first thing that I have pulled up here is an HTML artifact, which I know you've been working with a lot too lately. But yeah, I don't know, maybe six weeks ago, eight weeks ago or something, I think the first thing I saw about it was Tariq from Claude Code, uh, from Anthropic, uh, mentioning that he was using HTML artifacts way more, than just straight .md for everything.

And I was like: Oh, that's really interesting. And truthfully, I just-- I hadn't dealt with straight, standalone HTML docs before. And so I, I was real- as I, started investigating more and more, like, what can I do with this, my agents started to do stuff that I didn't even ask them to do, and I was like: "No way, you can do that?

That's sick." so where that led to is what I've been doing lately is making these HTML artifacts that are conversation artifacts with my agents kind of. So in this case, with my portfolio, and this is a flow I've been doing a lot more lately, I chained together a few skills.

So in this case, I did a couple different ones of [00:01:00] Emil Kowalski's skills. He's been putting out a bunch lately that are really cool, um, and work really well. And then I added, I think, one from Jakub Kreiel. I'm probably not saying his last name correctly. Sorry, Jakub. what I'm telling the agent is, " Do an audit," in this case on my portfolio, "with these three skills," and I name all of them. " You act," and I'm starting in this case with Fable, "you act as the orchestrator and the r- like, quality control reviewer and send out Opus 4.8 sub-agents to execute these audits. As each skill does it, like compile the results, but at the end of it, compile it all, remove the duplicates, and then present me an HTML doc that has all the proposed changes and then options for me to approve, deny, or discuss them, 

and then have a way at the bottom to copy all of what I put in here and just paste it right back into my session with Claude."

**Speaker 4:** This is sick. I do something similar, only just way [00:02:00] less cool. This is really, really, really awesome

**Speaker 3:** What's so cool too, th-this example doesn't have it because this is more on static, like visual design stuff, but when I do it with motion, I'll do the same thing, but I'll have it give me the current version and the animation of it, and then the proposed version and the animation. And so that, especially as you're like building more of the descriptive vocabulary around animation and stuff, it becomes so helpful to look at the propositions visually and, and, and then, and be like, "Oh, no, not that.

That's terrible. I hate that." Or just like, "Yes, but add this other thing." Or, or, "I really like what you did in number two on like number six that's in a totally different area of the app or the site or whatever that I'm working on, but grab the technique that we used in, in the second point of this doc so just visualizing everything from your agents has been huge.

**Speaker 4:** Okay, quick question. So I see, like, part of it is code block, there's screenshots. Presumably these are all just [00:03:00] screenshots, right? And so the animation then, is it, is it actually, like, building the CSS and rendering that there? 

**Speaker 3:** Yeah, So is dynamically rendering a visual of any type of format just based off of what it thinks you want to accomplish or h- the best way to review it?

Yeah, basically the best way to like-- What I'm always telling it is give me the closest possible representation of the real thing. It's okay, like especially, you know, we were talking about this, we've been doing some work in Swift and macOS native and stuff, and that is like not gonna be identical. But my directive is always give me the closest possible representation of the thing so that when I say, "Yeah, that's a good idea.

Implement that," I'm doing it from a, not best guess, but like I can tell that this is the direction we wanna do, and if there's a little bit of fine-tuning after that, then it's just an easy like dial kit thing to like, oh, throw those parameters in there so I can tweak it just exactly how I want.

**Speaker 4:** And so then I presume there's just a big copy button at the bottom, and it's just taking in all... Oh [00:04:00] my gosh, look

**Speaker 3:** Look how many there are.

**Speaker 4:** Oh my gosh

**Speaker 3:** I mean, it's amazing because it, yeah, like look... Okay, here we go. This list is actually pretty reasonable, like coming out of it, because it has all of the context since it built this and has this file. So that's what's great about it too, is that I actually paste back something not nearly as huge as

looking through 

that 

whole 

list. 

**Speaker 4:** answer list with whatever you've typed up. Okay.

**Speaker 3:** but it's like, man, like look at how many things I was able to address in one autonomous run. I set this prompt up from the beginning and then did nothing, and just came back an hour later and had this whole thing to approve, deny, or discuss

**Speaker 4:** I'm excited to use this for animations, man. I also use Emil's skill pretty frequently, and sometimes it'll change something and I'll be like, "I, I think I understood what it changed, but I'm not sure." And then it's like it'll just type it out in text. I'm like, " It's not a great way to understand what changed about an an- animation.

It's just like the bullet point that Claude would [00:05:00] give you. A before and after, that's what I want, right? Like the before and after is what I

**Speaker 3:** the before and after is huge. That especially, especially with the animation stuff while I'm still, again, like I'm still learning the vocabulary for all of that. And so if you're like a much more experienced design engineer and do a lot more with motion, maybe seeing it in text is enough and you're like, "I know exactly," you know, if you're really accomplished, like, "I know exactly what you're talking about.

I don't have to imagine it. I get it, and yes, that's what I want." But if you're still getting used to all this stuff and still kind of transitioning into that world, I get the vaguest sense from Claude's description, especially these days. so yeah, seeing the before and after is like massive. 

It's, 

**Speaker 4:** know what it makes me wanna build now? Like, I have this picture in my head where you could have the before and after of the animation, but then you have a single scrubber underneath it, which has the full easing curve, so maybe it's over, like, 1,000 milliseconds, but then you see how they compare. Did you build that?

**Speaker 3:** Claude has literally done that for me sometimes, even without me asking yet. It's, it's been on like apps that I've worked on that already had DialKit in it. [00:06:00] So I think while it's making it, kind of references it or something. It's like, "Oh, I'll actually just throw in some sliders in there for you to like..."

When I say like I'm, I'm still in kind of the fine-tuning stage, trying to find exactly where it is. At times it is intuited, "Oh, it might be nice if you had some sliders in there to like really do the small

tweaks." So this is the kind of stuff that's like, I mean, now as I hear myself saying this, I'm like, I need to turn-- Like, I have this as like a, slash command, slash skill, but the animation versions, especially with the sliders and the, the dial part of it, I need to, I need to ratify that into a skill because it is, it is really nice.

**Speaker 4:** you were talking about the moment where you first discovered HTML, and I remember seeing that tweet too.

It didn't register in my brain. Like, it didn't just, I didn't get it at first, I'll be honest. I didn't get it. And then you started sending me stuff, and you're like, "Hey, man, I think this is actually gonna start swallowing how I'm doing some of my prototyping." And I'm like, "What are you talking about?" And then I started trying it, and this was months ago.

Like, you were early on this. I, I will give it to you. You were quite early. [00:07:00] And it's addicting. And, and I actually feel like one of the big opportunities for designers right now is to think about how you can use HTML strategically in your workflow, 'cause you can do anything. I'll share a few of the things that I've been working on recently, slightly more, uh, kind of more rudimentary examples progressing down into things that I, I think are slightly more novel, although we should have went in the opposite order because your, your use case is sick and I'm not gonna be able to top that.

But I think, like, the most basic thing that I started doing with HTML that is, I feel like everybody's stepping stone is, tell Claude, " I'm working on this component. Here's what I'm trying to accomplish. Like, let me prototype it four ways," right? So I was working on this code diff view, for instance, on a, a Mac app, and it's like, you know, just, just show me different things related to the hierarchy.

Pretty easy. And then you can just go back to Claude and be like, "I really like layout number two." And by the way, I'm dictating all of this, so I'll just focus my cursor inside a conductor, and I'll just start talking while I click around and play with it. [00:08:00] And I might say, "Yeah, yeah, I really like layout two, but yada, yada, yada, yada.

Change this, change that." And then show me four more, and I'll do that until I get to the point where it's good.

**Speaker 3:** So you're like free-forming your feedback as opposed to like mine that's like very like segmented like a, a test almost.

**Speaker 4:** I've done yours. I have an example that looks more like yours, but when it's more exploratory stuff, I'm very much so just treating this as a visual that I can then talk over. there are different ways to do that. So like this one is another thing that I was doing, I had this commit chart, and I wanted it to feel like a fidget spinner.

I have no language for what it could be. Frankly, I didn't wanna spend that much time on it. Like I-- this was literally just a little quick add-on thing. So I was like, "Just give me a bunch of different effects and what they might look like." And you pretty quickly realize like, okay, like I hate this ripple one.

It makes, it makes no sense. But I was like, okay, disperse is interesting, and then you zoom in on that and be like, okay, let's just show that six different ways. And I shipped a [00:09:00] really fun little fidget spinner that you wouldn't even know it's in the UI unless you accidentally hover over it, and then it's like, oh, sick.

I shipped that in about five minutes based off of three rounds of HTML prototypes, and then it was just in prod. So this is another example where it's like when you have to feel something, it's a really good way to just feel something a million different directions. I was previously doing that in like static design tools.

It's good for conceptual ideas, but when you have to feel it, it just doesn't cut it. But for HTML, you can, you can dial it in, and then when you get it there, you're just like, "Okay, build that," and it's good

**Speaker 3:** I mean, and it's pretty cheap for the agents to make them too.

**Speaker 4:** So fast

**Speaker 3:** we're still using paper and stuff like that when we're on bigger surface area kind of things. But yeah, when there's motion and, and I need to feel it, prototyping it in HTML is just the speed and, and like low token cost relatively is huge.

**Speaker 4:** here's where I start to play around with different formats. So I was like, "Okay, what if it's not actually about creating something? Help me understand an API." So like I was [00:10:00] building on top of the GitHub API. I've never built on top of the GitHub API. I have a very rudimentary idea of what is possible, the obvious stuff, branch information.

But I was like, "There's probably a lot in there that I don't know." So I was like, "Just create me something I can scroll through and just look at all of the different things that I could, I could pull from." and it would break them into categories for me. So it was like checks and mergeability, and it showed me like all of the different individual components that I might be able to create from it, or like the size and the shape of something.

Okay, how would you want it? Oh, cool, you could break it down by language. I didn't even think about that, you know? and the same kind of thing. I just start dictating, and I just talked through everything that was interesting to me about the GitHub API rendered visually, and then it helped me in-- I mean, think about like this would used to be a conversation that I'd have to have with a developer.

Like in years past, I'd be like, "Hey, man, can we schedule a meeting and talk about the GitHub API and what, how that should inform the

**Speaker 3:** And you're trying to furiously write notes while they just brain dump on 

you. 

Yeah. Yeah 

**Speaker 4:** now it's like, uh, no, I [00:11:00] just created like this visual playground for myself, and it worked amazing.

**Speaker 3:** Yeah, doing it from the education side is, is really cool. I, I made something kind of like this, several months back Someone sent me an article basically, I guess it was an article that had, you know, 12 chapters or something, and I hated the way that the site itself was formatted to read, and so I just made like a repackaging skill that basically does like what you did of like, "I hate how this is.

What I like is a lot of space and just a like almost slide level. I can digest everything in just these bites." Like exactly that you, the way you have here. I've only used it a few times since, but the style of just like, "I wanna consume information differently than it's presented to me via just cheap HTML documents," is the best.

**Speaker 4:** I'll show you one other that I thought was pretty cool, which is inspired by Rafael Schad, who was the founder of Cron, and that was acquired by Notion. And I interviewed him, like, two years ago, and he said [00:12:00] something about how he had a Figma file where he put every single toast, dialogue, error notification, every single thing that the system would say, and he had a single file where he would look at all of them together and, like, write the copy and make sure that they were all good.

And I was so inspired by that 'cause it was always an afterthought. It was always a thing that I let slip through the cracks.

A lot of manual work to do that in Figma, but my God, you can one-shot that in Claude and it's perfect. You just give me every system dialogue, and so I can now see it, but I can type

**Speaker 3:** That's what I was gonna ask you. I was unsure of this one. You were like, "I still just talk through it," and I was like, "I hope you added inline editing."

**Speaker 4:** it's so great. Like you can al- think about how cool this would be for like a content team too. 

Like this might not even be my job. You could build a UX writing, ecosystem, send that off to the team, and they just do it, and then you get a prompt back.

**Speaker 3:** I had no idea how much standalone HTML documents could do. That was just a complete blind spot for me as a designer turned

builder. 

**Speaker 4:** We're [00:13:00] talking like a few months ago. Actually, time's going pretty fast. You were early. Maybe it's six months ago by now, I've had the exact same journey where I was like, "What do you mean I can use HTML? Oh, cool. I can just make quick mock-ups."

But then you realize, no, you can literally do anything and build any type of tool

quickly

**Speaker 3:** it's been huge. I'm sure there's gonna be that many more, like, examples of this that hopefully people that watch this come up with their own unique use cases 

for 

**Speaker 4:** Yeah, you should send it to us on Twitter because it's hard to think of them sometimes.

**Speaker 3:** Yeah, I mean, in almost all of it, like I think in both of our examples, we always stumble upon these processes and tooling and workflows and all that stuff, not from whole cloth, just like sitting back in a chair and just like imagining what we might be able to do.

Like it's always solving parts of our own process or things we're trying to accomplish, which is the best way for us and for most people. So yeah, I'm sure there's other people with different contexts that will find really interesting use cases for this that I'd love to see.

**Speaker 4:** Well, you were quite early in the design community on the HTML front. [00:14:00] I'm wondering if there are other things that you're thinking about. Like, what are you early on and tinkering with now that I'll be playing with a couple of months from now?


## Exploring with node-based tools

**Speaker 3:** This is an app that's in beta made by the folks at the Internet Development Studio in Pike Place, Seattle. so a guy named Jimmy Lee, uh, owns it and runs it with, um, some partners, and I've been working out of there almost last month or so, which has been great.

Like, it's a co-working space, but everybody, you know, there's folks from Blue Sky there, there's folks from Vercel and Anthropic and bunch of other stuff along with the people actually from InDev. There's a bunch of solo builders and people at these companies. Everyone's working on their own things, but everyone's working in the web and app development space.

so it's been really great, but I, because of that, was turned on to this, this tool called Terminal Graph that, Kaden Williams is the main dev on. But it's essentially, like, a big graph that you can put anything on here dev related.[00:15:00] 

So terminals, notes, browser windows, file editor, image viewer, video player. it has all kinds of stuff that are basically, like, exposing a lot of dev native surfaces, but instead of it just being, like, behind a terminal, also tons of terminals and everything, but this allows you to see everything.

What I wanted to get going was a process that I could repeat where whenever I'm looking for variations from, like, a whole new design direction on something, maybe it's a brand new app. In this case, I'm redesigning, the NFL Pick 'Em app that I made for my friends that we used last year, but I want, like, a, a completely fresh, UI and I'm making it native too.

So I'm starting from scratch in some ways. and so I have a really... I don't have anything specific in mind visually, so I'm using this as the test case. But basically, whenever I want variations, what I've been finding is that I'm, I've just kinda gotten tired of, " Come up with five variations [00:16:00] and maybe use this skill to do it."

And maybe those start to become kind of predictable, and I've kind of seen the patterns enough times, and it's not giving me anything inspiring or, refined enough. Like, there's too much obvious, like, " you shouldn't have even shown that to me. There's too, there's too many errors on this or too many things I'd have to correct to even have a good conversation about what I like and what I don't like."

this process is kind of trying to help refine the outputs from an autonomous loop. So basically what this is, this is my regular terminal that has Claude up, and there's an MCP and CLI within terminal graph that it uses. This is, like, a visual layout of the brief that we have for making these revisions.

For making these variations and the different skills that it's gonna invoke along the way. It's not connecting to these nodes. You'll see the connectors over here. But it's for me to be able to see visually. But basically what it does is when I trigger the build from here, it goes and [00:17:00] sends the general prompt through this whole pipeline, so I'm getting five variations with totally different styles to them, and then it's going through audits using particular skills that we've identified to use.

Then it puts the review into a doc here, and then it goes to the next run, so the agent sees the review, makes adjustments, corrections, refinements, whatever, based on the last review that was done by an independent sub-agent, edits things on the second version, and then the same thing happens again And gets through to the third version.

So what you're seeing right now is still this is a very, like, work in progress pipeline, because now what I have to do is basically find where in this process it feels like it's not making enough difference that I want. Like between here and here, there's some changes that you see. It's not a ton, but I think I'd like better refinement between those.

But I know where I can go in [00:18:00] here to affect those changes. Like here, you see this hint text. Anything written here, I can add any kind of instruction or, double check prompt or whatever in here, and that will then get injected into this part to create the third version. or tell it to actually review with this skill, actually do another pass invoking this other visual skill that tends to, you know, produce more, varied results or refines it more from this specific lens or whatever it is.

What will come out of this is a blueprint that I can use for any project that I'm working on that I want ideation. but the whole point is I set a process in motion to get variations and stuff. By the time it says I'm done, what I'm looking at at the end has a lot more of the things that normally I'm waiting for round one to happen, then I say, "Fix this, fix this."

I didn't wanna keep telling it to fix stuff like you would tell like a, an [00:19:00] intern. let's hit the bar of solid and then I'm working from what I like and don't like, not just like this is an obvious poor visual design decision.

**Speaker 4:** I was feeling this actually doing the Backyard Designers thing. Like, there was the evaluation loop that happened whenever I would create an image, and you could see Codex do it, where like create images, and then had a separate reviewer and come in and be like, " No, it's, you know, it doesn't hit here." Or, and then it would take like three, and then pick one and why, and it was really interesting to watch, I kinda was leading me to similar places where I'm like, man, I want this for my UI output too, because I'm doing the same thing all the time.

It's helpful, it's net helpful, but I'm doing a lot of granular like, come on, really? Like, why did we do that again? Where it does feel like with the proper... I mean, what you have almost is like a little visual eval loop 

**Speaker 3:** Yeah, exactly. Yep 

**Speaker 4:** that's kinda cool. That's kinda cool. it's still a little bit daunting to see all of this.

So like, I'm glad, I'm glad you're showing the Node base stuff, 'cause I'm [00:20:00] very green on Node base. I just, I haven't quite figured out like how it fits and where it fits and when I would use it. So talk to me a little bit about when you think you might reach for something like this, and then also what did it actually take to set up?

Like, where are you actually spending the time to create something like this?

**Speaker 3:** ideating the same way that we always do. So the good news is I didn't do any of this. I did not manually create any of this stuff. All I did was talk into this terminal and the MCP and the CLI, so it communicates to the CLI and then does the manipulations to the It can create all of this stuff, and then once it created everything, then I was just like, "Okay, just arrange it in a way that visually is stacked, you know, one, two, three, four, five in a horizontal pipeline so that I can just see the flow."

so from a setup standpoint, I was not super, super prescriptive and granular about what nodes to connect to where, which, like, tools [00:21:00] and windows to put in, in which spots. I still did the same thing that we've always been doing, which is just, like, voice dump, what do I want and why do I want it?

Which is basically what I was describing to you, which is like, I'm tired of telling Claude to do dumb little edits on, on variations for me to actually be in a place of, okay, now I can assess the idea and not have to, like, either tell you to fix these 10 things before it even feels like I can really assess it, or just having to imagine that or whatever.

So I told it the outcome that I wanted. I gave it the doc site, from Terminal Graph. I had the, the MCP and the CLI plugged in already, and it did everything else. So the good news is, is like your intimidation factor of like, ah, nodes and like all that is like, oh, no, this, this is kind of like you having your agents visualize what the API is in a different way that makes it, like, understandable to you.

While all these little things, like I don't, I don't quite understand [00:22:00] exactly how every pipeline is interconnected and every node, every connector and stuff, but I can pretty easily visually understand where in the process. And that's why I have all these browser nodes showing the HTML of V1, V2, V3, because then instead of having the black box of like, I told you to go through all these iterations, now I see V3, but I don't know what happened along the way.

And seeing it visually like this, especially while I'm developing this pipeline, lets me find like, man, review between one and two, the review is too weak. I need to have it do like a three-layer review process before it goes into steps two and three, 'cause it's just not catching enough stuff.

**Speaker 4:** Yeah, it's interesting. I, I had definitely put most of the node-based use cases in more of the visual brand marketing kind of thing, connecting tools, but hadn't considered this use case, and it's something that I do every single day where it does [00:23:00] kind of feel like if you get the system dialed in once, you can just use it all the time.

And I would use something like this. So, maybe you are early on this. Maybe this is another one of those HTML moments for me where I'm like, "Doesn't quite make

**Speaker 3:** again, "

with, with 

**Speaker 4:** kinda get it now."

**Speaker 3:** the fact that you can just tell your agent what you want to accomplish and then say like, "Do it through the TerminalGraph tools, and here's the doc site," there is no barrier for entry of like, you need to learn how to connect nodes.

You, you don't. You, you just, you just tell the agent, and the documentation and, and the CLI and MCP are powerful enough to do this for you, and then whatever want to iterate on, you know, you, you just go back to your main terminal. But that's also like then you can say build in checkpoints for me to put feedback of inject this also into the baked in prompt that's between V2 and V3. Also take my directions into account that I drop in here. So again, there's just like more [00:24:00] and more...

I feel like I'm just thinking differently of like, yeah, it's like an eval. It's like a visual eval that us not being in the code, we can make more complex tooling and flows like this and autonomous runs that we still get to manifest and tweak and control basically the 

same 

way 

that we're used to 

**Speaker 4:** On the topic of kind of just rambling and dumping with our voice and making things happen, can I share a workflow that I've been doing a lot more over the last few weeks? 

**Speaker 2:** please


## Why Ridd is using the Supercut MCP more now

**Speaker 4:** Okay, so do you use Supercut for video? What I remember them launching months ago was their MCP, but I didn't quite understand how it would fit into my workflow. I've started using it recently, and it's kind of awesome. So the TLDR basically is that Supercut is just a better Loom, but they have an MCP that does a really good job of mirroring your transcript to the individual frames and then making it so that Claude can parse that.

And so I'm giving a lot more of my feedback that previously maybe I would've done in something like agentation, I'm just doing it via video, where I'll have [00:25:00] Claude generate something, and then I'll just ramble in a video sometimes for like six, seven minutes. I'll just dump it with like 15, especially early stage when I'm doing like a new build on something, I'll just give it like 15 pieces of feedback.

**Speaker 3:** but what's like, what's the 

accuracy that you're hitting? 

**Speaker 4:** Way higher than you would think. Way higher. We're

talking 80,

**Speaker 3:** incredible 

**Speaker 4:** You gotta, you have to try it. Like it, I wrote it off for so long because I was like, "There's no way that this is good." It's actually pretty good, and it's good for different types of things. So I'll share like two use cases.

I literally just did this today. I was in Conductor, and I really like how, Conductor has this, inline image thing, so you can, type and then add more images like this. I love that, and I miss it in all my other tools, and I'm building something in InFlight where I want to allow that type of functionality, and previously I would've probably just had like an attach file button and add images like you do in GPT, but I want this.

And so what I did was I just recorded a Supercut that was a minute [00:26:00] long of me. Literally, I, I did the crop tool, and I just showed this component. And then I just used it and explained all of the different states and the general UI and like functionality. And then I just pasted it in here, and we had a, a little tiny bug, but, And then Claude just starts building. Like it says, "The video's ask was build our editor to be like that."

**Speaker 2:** Quoted too 

**Speaker 4:** And it kinda worked. Like this is-- I literally just built this a few hours ago, and it basically one-shotted this. I had to tweak the alignment where the chip was, like, down about four pixels, but it even took the supercut style and updated it to match our tertiary buttons, which is exactly what I would've done anyway.

And I freaking built... Like, like, look at this, man. It just exists. I one-shotted that from a supercut video

**Speaker 3:** I think I would've just assumed that, that it wouldn't be accurate enough, that it wouldn't, like, [00:27:00] pull the feedback from it well enough. did you need to install any

packages or 

anything? Like, is it using FFmpeg or anything 

like 

that?

**Speaker 4:** It's all just through their MCP.

That's literally it. So I'll do it for specific stuff like this, but then you know what I've started doing is actually channeling back to, like, how I would work a while ago. I actually have been doing a lot more designs in Canvas recently. I don't know.

I was doing a lot of greenfield thinking, and I kinda used a, I used a lot less AI for like a few weeks actually, and I just kinda did things the old-fashioned way. It felt good. It felt slower, but I g- still used all of our ideation tactics that we were using. I was spinning up all kinds of HTML prototypes, but the actual designs I, I mostly did myself.

So I got to the point where I was like, "Okay, I have the core states for this page. I have it all, like, laid out." It's a little rougher than I would've done in Figma, but it's like the same general idea. So now my prompt to build something like this would be, " Hey, Claude, look at the selected frame." So I have the selected frame here.

have some annotations for [00:28:00] context. And then I made a supercut of me just talking over the designs like I would for an engineer for, like, handoff. I'm treating it exactly the same as handoff. I'm just giving it an additional four minutes of context of what I want to accomplish, and then I'm giving it the paper URL so it can get all of the, like, the code.

I'm giving it the supercut so it gets all of my context, and then I just say, "Build this," and that's it. 

**Speaker 3:** Yeah. 

**Speaker 4:** And it 

**Speaker 3:** that's super cool. Especially 'cause it's just like you're giving enough surfaces for the agents to, like, touch. so through the paper MCP and stuff because, you know, you select the frame and then you talk about it, it's giving that identifier to the agent. And so that's-- I feel like that's kind of a theme too of a bunch of the things, the tooling and the flows that we're using.

we're continuously trying

to 

describe and, like, put something into the agent's hands, quote-unquote, or, or make it something they can touch so that the touch identifier of exactly this thing, and you can see all the code and what it is that I'm talking about, and my

talking about it, [00:29:00] that combo is-- seems like a theme in a lot of the

stuff we've been 

building.

**Speaker 4:** Yeah, I think that's really well said actually 

**Speaker 3:** How do you decide when you're gonna invest in a, personal tool or a, a helper or utility or something?


## How to decide when to invest in a personal tool?

**Speaker 4:** I think one line for me is the, is this a quick HTML thing or anything else? Because I actually spent quite a bit, like I built this local tool, so it kind of looked like a, kind of like a dial kit agentation style, like overlaid on top of your UI, and the whole idea was to create a UI to visualize the different variants that Claude would build for you.

It was exactly what you built, where you could kind of say like, "Approve this one, discard this one, or tweak this one," and then bundle it all up into a prompt. It was awesome. It felt good. It was really, it was a high quality tool. But then you realize like, I don't even need this. Like I, I can...

It's so much faster to just do it in HTML quickly, and actually this should just be a skill It's funny, I didn't even, I hadn't thought about that in a long time. Like the very first HTML thing that you showed, [00:30:00] I built that as a local widget that would talk to 

**Speaker 2:** Yeah. Yeah. Yeah. 

**Speaker 3:** I'm sure it 

was beautiful. Yeah. 

**Speaker 4:** Oh, it was so beautiful. It's could not be more

**Speaker 3:** Yeah.

Yeah. There's our-- We both have graveyards, I think, of, of a bunch of things like that. But What I like about some of the stuff that you're showing me that it's reminding me Cause like as time goes on, you know, we talk about this with regularity, like again, are the big tools just gonna absorb this and build this in and make it native anyways?

If so, I shouldn't spend time on it. but also what I've noticed, I've been getting a lot more technical, like I mean, that's always kind of been like you and I have been pretty parallel. 

I think I 

jumped headfirst into this pool a little bit ahead of you, but only a bit.

**Speaker 4:** Parallel's doing me a lot of credit 

**Speaker 3:** cl- close to Parallel.

but, but

**Speaker 4:** I've been one month behind you, and it's been

a little speedboat that I've just hitched my rope 

onto. 

**Speaker 3:** Yes. Uh, what I like about when I, when I talk to you about what you're doing is that I think [00:31:00] you keep reminding me I need to not 

assume how good it might be or might not be at this thing that I want it to do. Like the video thing. I wouldn't have thought to screenshot-- Like, like I would send, if we were working on a product together, and like when we were working on the Dive Club OS thing back in the day, we might take a video of ourselves walking through, "So here's what I did.

I'm not sure about this part. Let me know if you like the, the way that this is flowing and the output like this," blah, blah, blah. And granted, that was less visual, but it's m- easier to imagine on a visual plane. Sharing that same thing with an agent of exactly the same thing I would send to a fellow designer or my engineer doesn't occur to me nearly as often as I think it should.

Which sometimes it's like, yeah, it's not there yet. But that's also been, like, a thing that I, I've started taking a list of things I assume that the models are gonna be able to do soon, but maybe can't quite, that when a new model comes [00:32:00] out, I've just started this now, I haven't, like, I haven't used it much except for a little bit on Opus but like a, "Hey, double-check if, if it can do this now."

'Cause I-- You can feel when it's like, we're not far from this being the case. And then sometimes it's not even a tool or a feature that anybody calls out. 

It's 

just, oh, it can process video quite well now.

**Speaker 4:** You wanna hear a video 

use case that'll probably blow you away a little bit is So I've been working very closely with the team at Decimals to build the platform that powers the talent network. I would share my screen, but it's all a bunch of sensitive information, so I can't. So you'll just have to bear with me here.

But what I end up doing is I'll do these either reviewing a bunch of people applying or I'll do like a share list. So, you know, later tonight I probably have, uh, I don't know, like s- eight or nine companies that it'll surface people that I'll should share with them, and I'll kinda go through and create like a little list and hit the share button.

And the platform is evolving a ton. And so what, in the early days this guy Ed would do is he would ask me, "Hey, can you just [00:33:00] make a supercut of you using the product?" And sometimes I would do it and he would go through it, but also like it's, like, takes forever to watch, right? So we started doing it less.

But then Fable came out, and all of a sudden it got really, really good at parsing long videos using that supercut MCP. And so now what I do is when I start this review process, which maybe it'll take me like 40 minutes for a session, I'll record the entire thing on supercut, and sometimes I'm not even talking at all.

Most of the time I'm not talking at all. But every once in a while I'll be like, "Ah, you know, I, I wish I could do this," or, "This isn't quite working the way I thought it would be." it'll pull out all of those, automatically turn it into tickets for them, and then also just do a general UX audit based off of watching me use the product to suggest improvements and ways to enhance my workflow.

And the speed that they've been able to ship is increasing so rapidly, and everything's kicked off by me just handing the supercut of my last session, and then it just starts, which is crazy, man. Like [00:34:00] so much of this stuff is gonna be happening automatically in the future. I remember Sileo coming on like two years ago to a podcast, and I asked him something, some silly question about, you know, what are you thinking about that you think other people are gonna have more top of mind, you know, a year from now or whatever.

And he just went on this rant about self-improving products. And I remember almost checking out halfway in the answer. I'm like, "What the hell are you talking about, dude?"

And he was so spot on now in retrospect. Like he, he freaking nailed it, because what we're doing with Decimals is kinda self-improving.

We just need this one middleman of, "Hey, just record yourself." But that's not gonna be a 

**Speaker 3:** Yeah. Yeah. a contract that I'm on now, I'm literally just today and yesterday building out the same, here's a 25-minute, brain dump of changes to be made to a, a whole component library from the VP of design. Now we need to chop that up into tickets for Jira in the proper format that the company uses for everything, and it did a [00:35:00] remarkable job on the first run.

I'm, like, doing some tweaks now, but the layer that in this case isn't quite right, but, but for other things, the layer of and also run an audit pass from an agent, like using a skill, 

just 

observing the way that I'm 

using the app, I love that. That's super solid.

**Speaker 4:** we're rethinking the in-flight onboarding because we're kinda, yet again, creating just a totally new version of this product. It's probably V5 at this point.

I'm excited about this one though. But I was just having a brainstorming session with Fable, which is unbelievable for brainstorming.


## Brainstorming UX ideas with Fable

**Speaker 4:** Like, Fable's crazy. It really, really is good. I was talking through what I thought were constraints, and then it, it basically like kinda cut me off, and it's like, "No, no, no, what are you-- You don't actually have to do it that way. Like, you should do it this way instead. The entire onboarding should revolve around a bot-created PR, and that's how you, that's where you surface your education and all this stuff."

And I'm like, " Never in a million years would I have considered that," 'cause I, I didn't even know it was possible. It didn't make sense to me. [00:36:00] I actually told it, " No, we don't need to do that. We can do it this way," the way that I was familiar with, that honestly wasn't even that great. And then it brought it back up like two turns later, and it's like, "Hey, I know you dismissed this, but seriously, like, let's talk about how this would work because actually I think it is a better way to do this."

And without even fully understanding it, I had Fable then print a visual explainer of how this, this feature would work in onboarding, just like a flowchart, simple stuff, technical considerations, endpoints, that kind of a thing, and I had it printed in paper. And then I went to the team meeting, which was like a few hours later, and I was like, "Hey, I've been thinking about this onboarding flow.

Here's an idea." And I just, you know, Shift\+2 zoomed in on the thing that Fable made, and everyone freaked out. They're like, "This is an unbelievable idea. How did you..." Like, " Good job. You did a great work," you know? " And in my head I'm like, " I don't know. I don't know how to make sense of that, you know?

That's kinda, kinda out 

**Speaker 3:** And yeah, and, and Fable actually kind of made sure that you didn't bypass its good idea that, uh, then your team was [00:37:00] like, "This is amazing." 

**Speaker 4:** 100%. 

**Speaker 3:** an interesting-- W-what did it end up, what did it identify that 

was 

like something that you thought-- What was the constraint that you thought was there that wasn't there? 

**Speaker 4:** I thought that you had to install

In-Flight through the

CLI, and that that was the flow. Every single thing I was thinking about was, hey, to get In-Flight as the feedback layer for your deployment previews, you gotta just go through the CLI. And it's just hard, 'cause some people wanna go through the agent and not the CLI, and you have to go through the plugin, and da, da, It's hard to do that well. Fable was like, "You don't have to do that. Just automatically create a PR that installs In-Flight, have it go to whatever repos are necessary, and then you can use that PR as onboarding itself, because it's basically a billboard that describes the products to an engineer." 

**Speaker 3:** Oh, that's so good.

**Speaker 4:** We've covered a lot of ground. Before I let you go, I'm wondering if we can just do a ping pong of three quick questions that are kind of in this workflow, you know, what the heck is happening to us designers [00:38:00] space.


## Why workflows have disappeared from Kyle's practice

**Speaker 4:** So the first one is, what's something that you were doing a lot all the time the last time that we chatted that has basically disappeared from your practice today?

**Speaker 3:** I mean, one of the things was building a lot of custom tooling. the HTML shortcut, like, takes care of so much of that. like you said, the, the show me the options and approve, deny, discuss, like that whole area would've been a tool, in your case was a tool for a minute, uh, that now we don't have to do.

I think that and then very, very specific... I think I'm less procedural now. I use, I still use the compound engineering workflow a lot, but I'm starting to use slash goal more often too, depending on what the, the thing is. There's been times where it's too long-running, like the goal becomes too big and it gets kinda like, you know, two hours later it's like, "Whoa, okay, I didn't want us to go that far on it."

but yeah, less, granular flow manipulation for plenty of other things [00:39:00] despite me showing a very granular,

uh, version of it with making variations in terminal graph. What about you? 

**Speaker 4:** Dude, I just don't use plan mode really anymore.

**Speaker 3:** Oh yeah, actually that's a good one. 

**Speaker 4:** I think probably the hard line in the sand for me has been

like Soul and Opus 5. I haven't used plan mode since Soul 5.6 came out

**Speaker 3:** Do you like Opus 5? 

**Speaker 4:** I think so

**Speaker 3:** That's

**Speaker 4:** I mean, I'm still kind of, I'm still kind of feeling it out. I think it is a-- I can tell that it's much better than 4.8. Dude, I think

Sol is better than, uh, maybe both of them at, like, technical solve this problem. Like, the amount of times that I've had either Fable or Opus stuck in a loop where I just can't get this stupid thing fixed, and then I take that whole chat or I say, like, "Write up a context doc," and then I send that over to Sol and it one-shots it, that's probably happened 15 times in the last month

**Speaker 3:** Yeah. I've transitioned to that too. Like, the Anthropic models largely are like my, my creative department. It's the brainstorming place, it's the design, you know? creative 

stuff, and then [00:40:00] code execution and stuff I'm really primarily doing with Sol.

**Speaker 4:** It's honestly why I have a hard time

leaving Conductor, kind of. Like, the Codex app is so good. It's amazing. Every time I'm in there, I'm like, "This is just fantastic work." But I really miss that pairing because I, I kinda am in a groove with how I use the models, and it's hard for me to give up having both of them at my 

**Speaker 3:** Yep. Agreed 

**Speaker 4:** All right, another question here. So I think one of the more interesting things that we talked about way back when was you made the, fantasy football app kind of thing, and it was interesting to see how you thought about your, greenfield zero to one, let's just get something onto the paper kinda work.


## How Kyle goes 0 to 1 with AI

**Speaker 4:** How have you seen that part of your practice evolve? Like, what are some of the strategies for going from zero to something that you're reaching for today?

**Speaker 3:** Yeah, that's a great question. I'm a designer that definitely struggles with the blank page. I want to get more of a shape in my head before-- And I don't wanna spend a ton of time on it [00:41:00] because I'm also like, I want it to be fine, develop it, and then do more of the visual language, fine-tuning, tweaking, like after I get a lot of the functionality dialed in.

which is not a revolutionary process, but I think before, like we were doing a lot closer to, you know, 70, 80% high fidelity in Figma or something, and then trying to drop those screenshots from Figma into the agent to, you know, into v0 to build from there. and I'm doing more cheap ideation and the general shape without spending a bunch of time in the canvas.

I might do a little bit of tweaking, like I'll ideate a bit with HTML, then I'll be like, "Okay, throw that into paper so that I can nudge and shift," and accidental shout out to MDS, shift and nudge things into uh, into like the place like, "Okay, this is more like what feels right," and then have that fully built out.

so I think the, yeah, the ideation process is, different now and more HTML exploration [00:42:00] to get a general shape before I build. And there was definitely 

like 

that first episode that we did together, which was, God, not even that long ago. That was like November last year. Um, 

**Speaker 4:** Yeah, not even a 

**Speaker 3:** like the ideation happened like in v0 on top of like

a full React web app, which is like now just like laughable.

It's like, that's so inefficient. It's like I would start there and then be like, "Now I want to tweak this and try this and try this." And all of it was like, " Okay, do that. Okay, let me see. Okay, tweak this. Okay, do that, then let me see." And it was just so much more like prompt, wait, prompt, wait, prompt, wait, and going wide now cheaply with HTML stuff and then getting into, "Now let's make the

real app 'cause we actually 

kind of have a sketch of what the app will look like," is, is so much better.

**Speaker 4:** I think that's my answer too. And everything that you said I'll plus one. The other thing that I'll add on top of it too is when I was building things, previously I, I was kinda staying away from the big, long prompt, right? I don't write big, long [00:43:00] prompts anymore, but I am doing massive builds, and I wasn't doing that previously.

Like, I will hang out in HTML and Paper land way longer than I was even three or four months ago. Like, three or four months ago, I'd be like, "Let's just get something, you know, let's get the, the, uh, the clay onto the..." I don't know why I keep wanting to say Canvas too. "Let's get the clay onto the DOM, and we'll just kinda mold it and shape it."

It's like, actually, no, that's much slower. Like, it's just much slower to manipulate the real thing than it is to kinda dial it in a little bit. Not visually, I don't really care about visually. Just give me the, the UX and the flows, and I, I wanna make things happen really quickly in HTML and Paper. And then I'll probably take Paper, and like I was showing with the super cut, and I'll just be like, effectively, how can I get to the point where all I have to say is, "Build this," and it'll just do it?

And I wasn't doing that a few months ago at all,

**Speaker 3:** It's really the mirror of, you hear it from the [00:44:00] engineers all the time that are super agentic, like, they're like, "I spend 70% of my time on planning. And before anything is triggered and before any of my agents are building something, I spend the most amount of time planning, and that's where the investment is."

And we're basically describing the design version of that, which is like visual planning in a way. But it's interesting how we've been-- we've kind of shifted that from like, make the clay, make the thing exist for me to like mold and do different things on the potter's wheel was how we were doing it, and now we're like, "Let me just see a bunch of renderings of probably what the, ceramic art will look like once I put the clay on the

potter's wheel."

**Speaker 4:** The, the pendulum swung back to where we were before. last question, and I kinda keep it open-ended, but I'd like to point generally more at, your role, how you're thinking about the future of your career, your place in this industry as this designer, builder, who am I kind of thing. So since the last time we talked, [00:45:00] just what are some of the things that are rattling around in your brain and when you look forward in terms of like, "What's the next couple years look like for me?"


## How Kyle is viewing his career moving forward

**Speaker 3:** Yeah, it's a great question too. I mean, one thing that I've mentioned to you before is like there was a, a period of time that being early to the AI game was an attribute to itself that is becoming less and less true already. Like, so many people have caught up, and it doesn't take all that...

The tooling's so much better now. Like, the, the ramp of, " I haven't really used AI much for design and making that," to like, "Oh, now I use it all the time." There's so much less that you have to learn now than like when I started doing this. so that has made me think more like, " Yeah, what is my shape and, what holes do my peg fit in?"

And like right now I'm working, on a full-time contract with Output, which is a music software company, and working on a new product that they have that is really, really interesting and really excited about and cannot talk about. and I'm also working with, uh, Nick [00:46:00] Pattison and the folks at Primary Studio on another thing I can't talk about, but it's really cool.

But what I've discovered through those is I'm really enjoying the engineer implementation part of the process lately. I don't fully wanna live in one or the other. I don't only wanna be in code and never design , and make, you know, UX decisions and do all those tiny adjustments and stuff.

but I don't, wanna be separated from, like, the real thing. If I am primarily designing something, like, it makes all the sense in the world to me to own the front end. Of course. If I'm the one designing it, why wouldn't I 

own 

that? 

that 

it's insane. I wanna play the songs that I write, you know?

Like, I, I wouldn't-- I 

**Speaker 4:** Ooh, I 

**Speaker 3:** I have no interest in being a songwriter that writes for Lady Gaga and just, like, hands her a demo of me doing the song, and then it becomes something virtually unrecognizable by the end of it. I want to play that song that I wrote. and so yeah, I think, I'm actually becoming very, very recently a little bit more [00:47:00] comfortable with the term design engineer.

I still have not called myself this publicly anywhere and have said, like, "No, I'm a designer and a builder." But some of the work I've been doing lately and sitting between those departments and stuff in, in certain cases, I'm feeling more comfortable 'cause I have meetings with the engineering team, and I have meetings with the design team, and I'm doing things that are both, and man, I like straddling that line.

The version of design engineer that I had thought of before I was thinking of, of Jay Tompkins and Emil and Jakob and all these guys that, like, there was, there was some element of, really high visual craft that I think I always associated with design engineer and that I still think is true in a lot of places. But the definition of, it's almost like design plus engineer as opposed to design engineer, if that makes sense. Like, it's really, really semantic. But having feet firmly planted in both places, feels good, and I like doing it in areas of complexity where technical stuff under the hood, there's a lot to deal with, and there's a lot of being [00:48:00] 10,000 feet above the thing and being right up close to the single grain of sand, that I'm really

enjoying and finding 

myself growing the most in those environments.

**Speaker 4:** Well, I, I find myself growing by talking and learning from you, so I appreciate you coming on, Kyle. This is just becoming a staple. Uh, you know, I- things are changing so quickly that I really like this format. I really like learning from you, so I appreciate you coming on and making the time today.

