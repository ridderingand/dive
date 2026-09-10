---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: dJ0nj1ajShc
slug: 2026-07-21-pablo-stanley
source_type: descript
source: descript://Pablo Stanley
guest: Pablo Stanley
host: Ridd
title: "Designing creative tools (v0 and more)"
published: 2026-07-21
duration_min: 52
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] 


## [00:00:00] How Pablo built his own design tool

[00:00:00] **Speaker 2:** I'm showing, uh, Efecto, which is, yet another design tool that nobody needs that I, that I wanted to make. And, my idea was, uh, I, I wanna make a, a design tool where, little robots are actually there with you in the canvas, and you collaborate with the robots.

And this was before Figma decided to do this. I was like, " What is going on? Why don't we have agents on the canvas?" So, like I created my own, like a little tool for that, and I was kind of on vacation and then I was like, "Ah, let me make this thing." actually this started not as a, as a design tool but a, like more as an effects tool. Like, uh, with shaders and mesh stuff all the ASCII stuff that now everybody is like, uh, if you don't have a tool like this, you're not making it

[00:00:48] **Speaker 5:** Yeah, this is

[00:00:49] **Speaker 2:** the

[00:00:49] **Speaker 5:** aesthetic of AI right now.

[00:00:50] **Speaker 2:** Uh, yeah, exactly, with the theater and just like all this stuff. So I did this like, uh, last year I was trying to do it with layers. Like how can we do [00:01:00] this with layers?

Uh, how can we add text and stuff? And then I was like, " Dude, I need a canvas. I need to zoom out and actually add stuff." And then I went down the rabbit hole of turning this ASCII thing into, well, this design tool. so yeah, this is, uh, like a, pretty much just like any other like, uh, Framer, Figma, Sketch, where you have the layers on the, on the left, uh, you have, uh, properties panel on the right, and then you have canvas, you know? And everything is code. So that's something that I wanted to do, like part of the challenge was like, uh, a, like everything is actually code.

And it's very opinionated because I, I wanted to make it in a way that, uh, what LLMs, what is their default? Which is usually HTML and using divs and using, Tailwind classes. Uh, so I was like, "Okay, uh, that's usually what, uh, LLMs love doing, so I am going to do a tool that just uses that."

So like for example here, uh, all the classes here, like by the default is that you can actually use like, uh, [00:02:00] Tailwind classes. I don't know if, uh, this is visible there.

[00:02:02] **Speaker 5:** Totally. I love that you brought that in line too. That's a nice little detail

[00:02:05] **Speaker 2:** Yeah, it's just like a, uh, like whatever depends on what you are, uh, uh, selecting, then the tools are inline. for example, this is an image, so it just like, uh, gives you like a what is it going to be the fit, if it's going to be, uh, cover, contain like a, like a, uh, and also, uh, opacity if it is a box, then it gives you like a what is the, the background color of the, stuff in the, like how is it going to be the padding and all that stuff, and all the controls that you would expect having here on the canvas.

but also like for example, here it has a padding that is, uh, that is something you would expect from, Let me actually change this to, the light theme. I prefer light theme. I don't know what it was in li- on dark theme. like here, all the controls are, like I was saying, it's all Tailwind.

It has an agent, like I was calling it Jules.

and then here you can connect it to your own, for example, if you want to use your own, uh, CLI agent, you can do it too, like, uh, [00:03:00] with your terminal, or just use the one that is internal, and you could say-- you can click on anything and then just, like, ask it, like, uh, make a variation, you know, for example.

It all creates it in the canvas, so it duplicates it, and then it's going to make a variation. I, I don't, I don't remember, I don't know how this is going by the way. Hopefully it's working. Uh, I should have checked before jumping into this.

Hey, look, it's, it's changing. So you can see it's just framing the changes as they're happening. And since, again, since the canvas is actually a reflection of the code, it's-- you can just, like, see it live happening, you know? by the way, yeah, I kept the shaders, so you can see that this thing is also still the-- all the effects, all the shaders are still-- are, are there. and also something that I did, again, before Figma was doing any of this, I was also doing animation stuff. Like, uh, I think I went down the rabbit hole of just like, "I wanna build my own design tool that does it all."

So you go to animation, and then you can just, like,

[00:03:54] **Speaker 5:** You have full timeline.

[00:03:56] **Speaker 2:** but the, the timeline is, is I, I was like, I don't want to deal with, [00:04:00] uh, key frames. I, I really like, uh, how animation is done by other tools like, uh, uh, what is it called? There's an animation tool Jitter, yeah, exactly, where

[00:04:09] **Speaker 5:** that's my favorite tune

[00:04:10] **Speaker 2:** it's actually, it's more about you're editing the animation, you're not editing the element. Uh, so like for example here,

let's see if the AI... There you go. So like, uh, now the AI made all this animation for you. and then you can just like edit almost like shapes, you know? Like all these things you can, "Oh, I want it to be a little bit snappier or a little," so it lasts a little bit less, you know? So you can just like, uh, select any of this and now it's, it's still too slow, so it's almost like, uh, editing rectangles, you know?

Now it's a little bit snappier. You can also do, uh, stagger just like a, a, like a subtle staggering, you know? So, so that way everything is 

[00:04:46] **Speaker 5:** How long did you spend on this? I mean, 'cause y- you've built so many full features, but also there are a lot of little interactions and thoughtful details, and this is quite impressive. What are we talking here?

[00:04:56] **Speaker 2:** couple of months, uh, I think. Uh, it's weird because I [00:05:00] spent a very long time trying to make this thing effect, uh, uh, effects. I spent a solid month and a half this all works in shaders, and it works in 3D, and I was trying to make it work in 3D, you know?

So like, uh, uh, I was actually... Let me see if this is still live. Yeah, this is still live. So you can see that I was working with shaders and actually with an actual canvas, and I was trying to add my own, tools. So I was trying to make it work with the Canvas, meaning that, uh, then I can actually add, uh, text layers here. Hi. But this is all-- this all looks 2D, but it's actually 3D. This is all 3D layers. But the LLM, like I was trying to do everything here, but the LLM gets so confused about this, dude, because I was trying to do, uh, auto layout with this stuff.

You know, I was trying to do Flexbox with this and just like, "Hey, let's, uh, make it, uh, horizontal," like, uh, uh, Command \+ G, but this just breaks so much. Oh man, [00:06:00] look at that. No, no, no, no. It, it was just like a nightmare trying to make this work because the math and everything just is insane for it to work.

And LLMs will just get so confused trying to make this work because it... All of this is not, is not apparent, but this is like actually 3D. It's in, in an actual 3D canvas, in a 3D space and with a flat camera. and because of that, it's not real HTML. I spent so many tokens trying to make this work.

And then once I said like, " Screw this. This is dumb. What am I doing? Why am I trying to force, an LLM to, to understand Effecto this way that is just insane? I'm just going to do it everything from scratch, but now with actual basic HTML." And then that's when I jumped into this, and then it was magic.

Then it was so easy because then suddenly the LLM was using the actual, in the canvas, the actual language that it understands. So I spent a long time on the wrong [00:07:00] direction. I don't know if there's a lesson there. Like, uh, uh, sometimes you go down the rabbit hole, but you need to know when to stop, and when to say like, "Okay, this is dumb. This is not working." the usual commentary and the usual belief is like, "You have to keep pushing, man.

You have to... Whenever, uh, things get hard, you just have to keep pushing." And it's like, no, no, no, hold on. There has to be a moment where you say like, "No, this is dumb." You know? and this actually happened with this too. Like at, at a certain moment, I stopped working in Effecto. I was like, "Okay, this is dumb."

I don't know why am I even doing this? I was building this tool, Effecto, in the canvas and with agents, and it has design systems. Oh, yeah, it has design systems and stuff. And, and, and everything is just like, uh, something that, uh, all of this is fed to the, uh, uh, to the LLM, so it's going to understand then all the, all the settings, all the UI.

It's, it's here, and it's something that the LLM understands. But I was realizing that I was, that I was [00:08:00] building a tool that I was not using. I was not dogfooding this tool, you know? ideally, I should have been using Effecto to build Effecto, you know? I was not doing it. I was just, like, straight up working with the agent,


## [00:08:12] "I don't design like this anymore..."

[00:08:12] **Speaker 5:** Yeah, why not? Why not? What was happening there? What, what was the disconnect?

[00:08:15] **Speaker 2:** Well, the disconnect is that I don't design like this anymore. That's it. Like, I, I don't use the canvas anymore. I use the canvas to draw, to make my comics, to do hand-drawn stuff. doing things here, I was using more, TL Draw. This was the cam- the tool that I was using. I, I don't know, like a...

Oh, you can see that, uh, there is, there's still some old, uh... This, this was kind of like my design tool in some stuff. this was really what all I needed. This, I, I don't know what I was doing here. Oh, yeah, look at that. I was doing a sketch of a dumb thing, I think. for example, this is a, a new thing that I was working on, on, on a new tool, and I was like a, "Hey," like, this is how I want it to look, and

[00:08:54] **Speaker 5:** Oh, I can picture that design. I know what the high-fidelity version looks like. It's cool to see this representation

[00:08:59] **Speaker 2:** Yeah, yeah, yeah, [00:09:00] exactly. So this is like a, yeah, and also like a, like a, a, a very basic, uh,

[00:09:05] **Speaker 5:** ever use Balsamiq in the, in the day? It was like Excalidraw and Bals- or Balsamiq, I don't know how you say it

[00:09:11] **Speaker 2:** I remember about it, but I never, uh...

[00:09:13] **Speaker 5:** This, I used to use this all the time. Like, it was so great, and part of me wonders if this is actually the right type of tool to pair with coding agents. Just ridiculously fast wireframes and that's it

[00:09:25] **Speaker 2:** maybe there, there's a, there's a comeback for a tool like this. Actually, there, there was another one, I think it was called Whimsical.

[00:09:31] **Speaker 5:** Whimsical. Yep. Yep. That's

[00:09:33] **Speaker 2:** yeah, Whimsical. I, I, I, I loved that, that tool too, and I stopped using it, and it was like diagrams, but they also had like kind of a, wireframes.

They had this thing too. Yeah, yeah, hold on. Like, there's a comeback for tools like this because, uh, the LLM already knows. You can tell the LLM, "Dude, this is just a wireframe. This is just to show you the, the flow. but use my design system.

You already know what my tokens are." this is starting to sound

[00:09:57] **Speaker 5:** and I don't even really care about my tokens [00:10:00] in the canvas that much. Like sometimes I do, sometimes I do, but 90% of the time, like I just want a rough approximation, and then I find myself giving the disclaimer back to the models, "Don't use the exact designs from the canvas. Prioritize the design system."

I've made that prompt 500 times

[00:10:17] **Speaker 2:** Yeah, yeah, exactly. Like, a, uh, take this only as a guideline, 

[00:10:20] **Speaker 5:** so you have this moment in time, you have this moment in time. You've been using Teal Draw, you're realizing you're not dogfooding your own product, then what?

[00:10:26] **Speaker 2:** Yeah. it wasn't really for me. Ho- honestly, I was more like, uh, building a tool for, like, people in marketing, I feel like my whole shtick for my whole life has been, like, uh, trying to make design more accessible and more, I don't know, demo- de- democratization of, uh, design in a way.

That was my whole shtick, but at the same time I was realizing, "No, but my, all of my, my actual work is happening in the terminal, and it's happening with these agents," you know?

So But thing is that, that I've been feeling lately, man, it's, I don't know. This stuff is, uh, uh, is pretty [00:11:00] isolating. So I built this tool, by the way. Like, uh, this is my most recent tool. More than anything, uh, I wanted to work with agents, but, uh, in a collaborative way because, something that I, that I noticed like, uh, with my team at Vercel and, uh, V0, we all are using, these tools.

You know, we're all using agents, and we're all using them on our side. You know, we're all using them on our terminal, on our computer, we use a, a tool called Gather, and we use, standups and we, uh, on Slack, and we share the things, you know. there's this kind of a


## [00:11:33] How building with AI can be isolating

[00:11:33] **Speaker 2:** disconnect from what you're doing and, and who, who is actually doing it because you, you will go and it's just like, "Hey, we need to work on this."

And then you go with your agent, you know, and you go to the terminal, to the black void and just like, "Hey dude, let's do this." And then it does it, and then you go back to, uh, uh, Slack and say like, "Hey guys, look, I made this."

You didn't make this. Uh, and everybody knows you didn't make this, and it's okay. We [00:12:00] know that you used an agent, but you're presenting it here. You, here's a PR, you know, and everybody's doing this. and then there might be some feedback, "Hey, this is not working," or like, "Hey, we should fix this." So then you will go and grab that and then bring it back to the agent.

It's like, "Hey dude, you embarrassed me. This is not working." no mistakes, you know, at the end. Every, uh, uh, at the end of

[00:12:20] **Speaker 5:** that's what... My pre-prompt for everything is, "Don't embarrass me in front of my engineering colleagues."

[00:12:24] **Speaker 2:** E- exactly, yeah. Like, real engineers are going to see this, I will go and then I will fix it, and I will come back, and it's like, "Guys, I fixed it." Nah, it was the agent. why not just like have the agent there, you know?

So why not, uh, have my agent be part of that conversation and actually see what others are s- saying? Like, a, a lot of the, the planning, a lot of the, this feedback is happening with other humans, you know? But the agents are, like, in isolation in a, in a different place. And the work, the, the collaboration in a way is happening in isolation too with this black void, always a green robot,. let me show you the, the, the [00:13:00] landing page, by the way, like something that I, that I hid is just a little, uh, here obviously because now we can do this.

Also all of this has music.

So I don't know if you-- Do, do you play music, man?

[00:13:11] **Speaker 5:** I do, yeah

[00:13:12] **Speaker 2:** Yeah. Okay, cool. So maybe you have, uh, used a tool like a color selector, uh, like a, or synth paths that like a... So this is in the background, it's actually a synth path. 

[00:13:21] **Speaker 5:** I love that you brought doodles back into it too. 

[00:13:23] **Speaker 2:** Whatever I make, I will like bring doodles.


## [00:13:25] Pablo's new product hilos

[00:13:25] **Speaker 2:** Anyway, let's actually use it. Uh, let me just like, uh, get started just like a Discord or like a Slack, but where agents work with you, you know?

And, and you have, uh, humans working with you, but at the same time, you can just like, uh, talk to agents. this is what I wanted to do, just like, "Hey, can I bring agents to do stuff?" You know? And you can connect like a Claude Code or Codex or Cursor, and they run on your computer, or you can just like, uh, add an agent that runs on, on a sandbox,

so, for example, let's, uh, E-Elo Read, let's call it Elo Read, you can give it instructions, but [00:14:00] really, it's just like a, I don't know, like a system prompt if you wanted to, but, uh, it's already good, you know?

Hey, uh, can you Add a little Easter egg about Dive Club by Red N, or homepage. In the footer, uh, shout-out. let's see what it makes. So, oh, by the way, yeah, so this thing is connected to my GitHub.

Like, it's already connected to my repo, so it already knows. and, uh, here it's g- just going to create a thread, and it's just like, uh, it's coding, you know? It's just like it's running on a, on a sandbox, and it's just doing everything. And I could have, someone else's, , agent at the end be tagged. I could have asked Elory to tag an agent to review its, uh, PR, uh, but I could also at the end ask a- another agent to review the PR. There you go. It, it finished. Uh, let's see. Uh, uh, there you go.

So like, uh, now it, uh, created, uh, this thing. So I can go and it's building the preview, but I can go see the pull request. I can see what was [00:15:00] changed. So, hey, there you go. Uh, there's an Easter egg, a quiet, and I guess it's going to be in the footer.

Yeah, it's on the footer, a TypeScript file. It said dive.club.

[00:15:09] **Speaker 5:** Mm-hmm. Nailed it

[00:15:10] **Speaker 2:** Okay, cool. Uh, so it added that. And what this is just like, uh, this is using Vercel's,

[00:15:16] **Speaker 5:** Yeah, I probably, yeah

[00:15:17] **Speaker 2:** uh... Like, so it's still building it, and over here, the cool thing is that it's actually is looking at the preview from Vercel.

So once it's ready, you can actually just preview it from here, and then you can approve it, request some changes, or even reject it.

[00:15:30] **Speaker 5:** I think a lot of people are feeling this shift, and it-- I think your two tools perfectly exemplify where pr- previously, yeah, you're working with agents, but you're on the canvas. You can kinda like touch and feel things and move things around and directly manipulate 'em and, you know, click and just change that padding just a little bit.

Whereas this is almost like slightly abstracted way of working. You know, it's, dare I say, orchestration.


## [00:15:54] The shift to orchestration

[00:15:54] **Speaker 2:** , it feels weird, you know? Uh, I, I, I've always, taken pride of the things that I, that I [00:16:00] make, that I, that I put, that I put my hands into it, you know? That I duplicated the artboard and then changed things around, you know?

did a sketch first and then I inked it and, and it's just, it's, it, it all feels like it's coming from my hands. So there's a little bit of, uh, pride on that, and then we measure I think wrongly, we measure our, our value or success or, I don't know, by the amount of output or the quality of that output, you are a little bit more artistic like me, how much of that is, is a little bit of you?

Oh, there you go. Like, Let's see. Is it... Hey, look at that. Oh, dude, look at that. There you go. You know what? Let's approve it. approve, bro.

[00:16:44] **Speaker 5:** Beautiful

[00:16:44] **Speaker 2:** you go. It approved. You, you didn't hear, but there was a little music.

Oh, nice.

[00:16:48] **Speaker 5:** Love the confetti too. 

[00:16:50] **Speaker 2:** yeah, a 

[00:16:50] **Speaker 5:** think this is a hilarious microcosm of what it's like working with AI too, as an aside, where it's like you're doing a thing, you're doing a thing, and then it's like, oh, a new thing to review, [00:17:00] and then you go over here and you review it, and then maybe another thing to review, and it just feels like I'm playing Whac-A-Mole with the agent,

[00:17:04] **Speaker 2:** A lot of our work is becoming more like a, orchestrating manager, like directing of these things, you know?

and it's weird because, I've been having this, uh, like kind of a crisis where it's like, is this even me? You know, is this even mine, you know? what is this if I'm not making it with my own hands, if I'm not actually, drawing the rectangle, if I'm not writing the code, if I'm not a, I don't know, like a placing the things by myself and trying different things.

And I feel, it's a different way of creating, it, it requires to think a different part of your brain, you know?

And you could argue that managing, directing is not not as creative. And that's, that's how I feel, you know? Because I have seen stuff that I did, like years ago, and, like I, I can show you. Like I- I'm going to show you like a gorgeous... I, I, I was seeing like a, uh, this thing, and I was like, "Dude, this was [00:18:00] like so good."

Like, uh, I, I made this page and this video, and it was all done... I mean, it was done in Webflow, you know? But, uh, it was all done with care, you know? And a- actually, this, these images are AI. So there was still AI, you know? The images are, these are not real people. but, uh, and this is, well, that's really me.

But, A, all the, the, the screen recording, how, uh, the animations happen, all of this was done, like, uh, the separation from the background from this, yeah, I used AI to separate it a little bit just to fill in the blanks, you know, and to separate this photo. but all of the rest of those things, like they were made in a way, like actually making it, you know?

And, and I feel like I don't-- I haven't done stuff like this. Like, this feels more creative than this thing. I, I don't know, like now this feels robotic in comparison to that. Like, this feels like, uh... Because I, I had the help from AI, you know, to make this, and I was directing it what I wanted, but I didn't make this in Figma.

I didn't put [00:19:00] this in Figma. I was like, "Dude, like, uh, let's do a grid. Here's a..." I think I did a, a TLDR draw of what I wanted to do this. And then it's like, "Dude, like just put some cars, man, with the image." And I made a bunch of images, so just use one of those images and then, uh, put some of tho- uh, uh, let's talk about these things here.

So a, a lot of those decisions were also making a collaboration, you could say, with the but I was, like, delegating a lot of that thinking also to it, which is, I feel is, is not great. If I continue on this path where I'm delegating a lot of the creation to the AI, I feel like I'm going to become dumber.

I'm going to become a worse designer.


## [00:19:38] What designers today can learn from historic artists

[00:19:38] **Speaker 2:** But at the same time, you could say the argument against this, a lot of artists, didn't make it themselves. They would teach others to actually make it. Like they, they will have a specific way of doing things, and then they will have, students, actually make it.

Like, Diego Rivera would do this. A lot of his murals, he didn't actually [00:20:00] paint at all. Like, uh, even I, I'm, I'm pretty sure that Michelangelo did this. Like, uh, he had painters, like, actually doing it. He was directing other painters doing it, you know? And he had the sketches and everything. He got the idea.

he had the vision. Like, uh, also Rembrandt, he actually... Some of the paintings from Rembrandt, he didn't paint them. He would actually direct students to make this. Andy Warhol wouldn't even hide it. He would just call it the factory, you know? He was like, "It's a factory and I'm not making it.

I'm just signing it at the end." You know? And but it was all, you could say, his direction, his judgment, at the end it was his signature at the end. It was his, I don't know, his reputation too. I don't think this is new, you know? It, it just, uh, it's accepting that using AI, like how much of that, creation you want to give it, and at what point do you want to give it where you feel, "I am at that level.

I'm so- I'm at that level of Andy Warhol. I'm at the level of Rembrandt, where I will give these AI agents the ability, [00:21:00] the agency to do it for me with my direction," you know? I don't know if you, you know this artist, , Sol LeWitt. Uh, he did a lot of, uh, minimalism But he used these things called, uh, drawing instructions. Uh, do, do you know about this?

[00:21:12] **Speaker 5:** No, I don't. No

[00:21:13] **Speaker 2:** this guy was the original prompter, you know? Because this is how he would do it. He, he, he believed that, uh, uh, ideas are, are kind of a machine, you know?

And, and a machine that creates art, and this was what he would give to a museum, you know? Just like, "Hey, uh, on a wall surface, any continuous stretch of wall, just use a hard pencil and put a lot of points around at random, and then make all those lines connect to each other." And that is what he will make, and then at the end he will say, "That's my art.

I- that's, that's my art." Yes, I only gave the instructions, but even when he was dead, some of his instructions were still being used, and he w- they were still being said as, "This is a Sol [00:22:00] LeWitt." You- I- imagine that. Like, uh, there's another one that is like, uh, about like, uh, uh, like, uh, doing four inches for four hours.

Let's... Yeah, this one. Within four adjacent squares that each, uh, four-by-four feet, uh, you will pay these draftsmen, uh, $4 an hour. I don't know. He had a thing for four, you know? It was like, "Hey, let's, uh, four inches long with four colors," and then he would create a stuff like this, where it's like a, it's all lines, you know?

And he didn't make it, but he wrote the prompt, and this was in the '60s, by the way. It's so cool

[00:22:32] **Speaker 5:** that's cool. Because I, I-- That's the thing is like, am I atrophying muscles as a designer? Yeah, in some ways I have to be. There's no way that I'm not. But then every once in a while, like I will have an idea that I would not have pursued in like two years ago, three years ago, you know?

But now I feel like I can do literally anything that I can think of. And so I have a concept that is novel, and then I execute it, and yeah, maybe I one-shotted it. But I don't actually care because it was the idea that was novel. [00:23:00] But it starts... It gets so muddy because for every time I'm doing that, maybe it's five other times where I'm like, "Hey, show me a variation.

Actually, show me six variations," and then I just pick one, 

[00:23:09] **Speaker 2:** which is something that I, that I'm pretty sure that Warhol did too. It was like, "Guys, I don't know." Like, he would just be directing the silk screening, and he will be just like, uh, "Here's a photo that I took. Now enlarge it and put it there and, and paint it and do it in multiple variations.

We're going to select some of them, and then I'm going to put my signature at the end." It w- I mean, he also did it in a way that was kind of a, counter against just, like, art, you know? He was saying like, "Hey, look at this thing that is just repetitive and that is, th- that you could argue that is not art, and I'm going to tell you it is art."

Who decides what's art, right? but you could say that a, a bigger example to what we're going through is, like, Rembrandt. a lot of his paintings, it wasn't him who painted it. And still there's historians and, people in museums who don't know which ones are actually his.

Like, where's his sketch, [00:24:00] you know? but this was the deal. The deal was he would teach students how to paint like him. So at the end, there was a student who got some knowledge out of it, you know? there was, there was a kind of a, I don't know, a transfer of that knowledge to those students, and those students, like Diego Rivera too, he would teach them how to do murals, and then at the end, those artists would be able to create their own murals too, with that style or with a similar style, you know?

So, there was this transfer of knowledge, that was happening too, and maybe, yeah, at the end, the credit was going to the artist, to Diego Rivera or to Andy Warhol or to Rembrandt, But those artists were able to get something in, which is something that I feel we're losing with, junior designers.

Because that's something also you would do with junior designers, right? You would hire, a junior designer who is still, like, learning, and you will teach them, like, "Hey, this is how we use our system. This is how we use our tool. This is how..." Like, they will try something, and then you will try to guide [00:25:00] them on how to do that.

I feel like that we're losing that, because now we're delegating instead of to junior designers, we're delegating these kinds of things to the LLM, to those things that-- And we will guide the LLM to do this. "No, no, not like that. Not that purple gradient, bro."

And then you start manually g-guiding this thing to create an output that is okay, you know? And that is doesn't have all that AI slop. But all that knowledge that you might have and all that judgment and filtering that you will do as a, a potentially a, a more, a designer that has had some years under your belt is not going to a junior designer anymore.

It's just going to another model. And I'm pretty sure these models are learning from this stuff too, so next time they're going to not make those mistakes anymore. But then, what's going to happen with, junior painters, the junior designers, the, the artists who are still learning and who are there, trying to be mentored? what could happen is that they could use AI as their mentor, and then that's, that's where I think we're going, , where those who [00:26:00] are going to prevail are g- are going to be those who just, like, use the tool in a way that transforms, new creations and that don't just delegate everything to the tool, but actually come with curiosity, come with, maybe an idea or maybe just a question, and then they use this infinite machines to just, amplify those ideas or take them in different directions.

and I feel I'm, I'm excited about that. I feel like it might already be happening and we're not noticing it, and I'm pretty sure that this is happening with younger, people. 

[00:26:34] **Speaker 5:** we say AI native too. That's the funny thing. It's like we'll be like, "Well, now I'm AI native." It's like, "No, you're not AI native. You're a millennial." The AI native person is 18 years old, and they've literally grown up in this, and they're gonna fly by all of us.

[00:26:45] **Speaker 2:** exactly. Yeah. In the '80s, when h- hip hop started, it was criticized and music made with synthesizers, I mean, now we accept like hip hop as just like one of the top, styles of music, types of music, you know?

And, and [00:27:00] electronic music is the same, you know? But there was a time when we would question that, and artists would question that. "This is not real music. You're just using samples from other musicians, and you're mixing them up, and you're supposedly creating something new, but you're not. This is not real music.

Oh, you're using-- you're not using a, an analog real instrument. You are, delegating the sounds to a machine that is just like synthesizing sound, so this is not real music, man." a lot of us that, that are our age, we question AI. I question it. I question myself using it, you know?

I, I use it all the time. I, I would be dumb not to use it honestly. But at the same time, I, I still have that, uh, old thinking where I, I question. I was like, "Oh, I, I don't know if this is real," you know? A, a lot of my writing on this is very... I want to stay positive, but at the same time, my, my negative side comes. It's like, uh, I need to, I need to work on that. I need to talk to my therapist about that. 

[00:27:56] **Speaker 5:** maybe for a second we could actually talk to the younger designer who is [00:28:00] listening, who is curious, who wants to go all in on this way of working, who views AI as a tool, as an instrument, and yet they don't have a bunch of reps under their belt.

They don't have the surrounding environment and encouragement that comes from a place like Vercel that is very AI pilled. So

can we just zoom in on parts of your workflow and what your day-to-day work looks like working on these models? Maybe we could use, you know, one of the recent releases. I know you just did like design mode and V0 ton that went into that.

Like help us understand how you are collaborating with these models on a daily basis, what it looks like to explore different ideas,


## [00:28:41] Behind-the-scenes of Pablo's workflow

[00:28:41] **Speaker 2:** I use this terminal Ghosty.

I use Claude and then dangerously skip permissions. I'm like, "Don't ask me questions, just, just I'll let you cook," you know? So, something that I do also is I use agents, and which is, it creates a tool, it creates a list of the things. right now I'm just in my root [00:29:00] folder, but from here I can just ask it anything.

So it's really just a chat, you know?

[00:29:04] **Speaker 5:** Help us imagine a type of kickoff session that you would use when you're working on like a meaty project at Vercel. This is the black void, right? We're just looking at the black void. You don't even have a visual of the product surface area that you are working on. you even start? How do you even point it correctly? 

[00:29:20] **Speaker 2:** one of the things that I use is, for example, I use, uh, TL Draw a lot. I use it to just like a, a, for example, this was for, design system thing that where I was trying to just like, uh, put together like how to, display the different fonts and how type scales and also like the palettes, how to display the UI for this.

and since I'm already working on the repo and in the repo, there's already a design system, I don't feel like I need to go into high fidelity as much, because, uh, a lot of that stuff like the fonts, the spacing, all of those are already rules in the design system.

with the agent, all I need is just like a direction of what I want to do. So this will be artifacts that I would give, for [00:30:00] example, an agent just like, "Hey, I'll write a prompt, uh, just like, uh, uh, what I want, what is the, the, my success criteria of what I think it should do.

I would also ask it to, to ask me questions too. Sometimes I wonder if giving it a screenshot is, is too... If, if I'm still on the ideation part, I wouldn't give it a screenshot, and I would use it more as a collaboration tool where it's like, "Hey, I have this idea.

What do you think we should do?" You know? And then it would come with some ideas and, "I have this idea. I'm thinking it should be like this, but what do you think?" You know? So then it will give me some options. Sometimes it will validate my idea, which makes me feel really nice. 

[00:30:39] **Speaker 5:** just repeating it back, it sounds like the, the vast majority of the chats or new sessions that you are doing with AI, it-- you're not jumping right into like an execution. It is very much so I kinda wanna work on this. Maybe you have some preliminary thoughts.

What do you think? Like that question, you said it twice. Is that something that you're asking most of the time? Sometimes?

[00:30:57] **Speaker 2:** It depends. Like some stuff is just, the [00:31:00] typography is wrong, it should be this size. And you don't need to, let's debate about this." You know? It is, uh, there's a bug, this is not working. it, it depends on at what stage you are. If you are, for example, here, I think I was really just starting, you know?

I had an idea of like how this should look, but like a, a one little heading and, and I want a dropdown, you know, uh, with a search, which I didn't make. But I, I just described that. I didn't need to draw it, you know? Uh, so in, in that case, I would sometimes just start like, "Let's plan it." No, actually not even plan it.

let's just collaborate. Let's, uh, let's do brainstorming, you know, in a way. and also ask it to ask you questions is really good because then it will ask you things that you didn't even think about.

[00:31:44] **Speaker 5:** I wanna get a bit more context for how you're working at Vercel. So like on this spectrum from, you know, sealing of one line Tailwind fixes all the way to shipping full-blown features, like how much of the front end are you actually owning as a designer?


## [00:31:58] The two types of builders on product teams

[00:31:58] **Speaker 2:** There are different, uh, [00:32:00] types of, builders or makers or people collaborating in, product development teams, I think. and I don't feel it's the same as designers and UX designer and the copywriter and the PM and the front engineer and the back end engineer. I don't feel those division- I, I feel those divisions are getting blurred, you know? And, and, and those types of roles are... I don't know if they're going away. It's just like There's so much, uh, uh, org stuff that has happened for years that I don't think they're going away.

But actually in the actual work, those things kind of disappear. And, and it's more about, like, who is prototyping. That is one that I think a lot of designers are doing that, and maybe PMs. And prototyping as in, like, "I have this idea. let's put it together and let's, uh, let's test it out," you know?

Uh, and it could be just a wild idea, and you do a lot of those. Prototypers are, I think, making a lot of weird stuff or trying a lot of different things. [00:33:00] So to your question, how much of the code you're doing, I think I'm in that area where I do a, ton. You know? I will put a lot of code in our GitHub.

That doesn't mean that all of it gets shipped though. Somebody shared a screenshot. I don't know if it's still the same, but at least in that moment, I was the one putting more code in. Like after Claude Code, it was me and then another designer, uh, uh, Tom John, uh, who is also working in, in v0.

So the two designers, we were even making more code even more than other software engineers in our code base. We were putting more code out there. How much of that was actually shipped? Not a lot. And, and that's because we were just trying different ideas. You know? We're like, "Hey, what if we, do the composer that animates in?

What if the homepage has more stuff? What if the homepage is just cleaner and Zen-like? What if the sidebar has this, and what if the sidebar has that?" all of that stuff, like now it's [00:34:00] happening in code, so it's kind of like, instead of having a ton of artboards and Figma files, now it's happening all straight in code, and you're having a ton of, PRs and different things that you tried that are in draft mode or maybe ready for review, but they're never reviewed.

I feel like that's kind of a good place for us to be, and, and PMs. Then there's the ones who, perfect that code. They might take that code and then cherry-pick some of that stuff to turn it into a PR that is actually going to be shipped.


## [00:34:32] Behind-the-scenes of building v0

[00:34:32] **Speaker 2:** For example, this is another one that I shared that is, uh, um, what is it called? It's, uh, annotations and then design mode that is over here. So annotations I added in a way that it's like, "Hey, you just want to, instead of, uh, having to describe something, it's like, hey, uh, make it bigger."

You know? So now I didn't have to say, "Hey, the hello world, the hello, I don't know, span in the heading, let's make that bigger." I can just point at it and say, "Make it bigger," you know? So, and then the annotation is here, so it's [00:35:00] actually attached to the node and it's doing that. So, and then another one is, well, design mode.

And design mode is more just like a more here, but, uh, actually just like, uh, using the things that you would expect. Actually, a lot of the stuff from Effecto, after I

[00:35:14] **Speaker 5:** was just about to say, there's that, there's that, uh, contextual little menu there at the top. It's cool

[00:35:18] **Speaker 2:** yeah. Like, uh, also the layers list, uh, which is more like a, the blocks and the, uh, elements list, uh, the nodes on the left, and then you can rearrange and you can move around and yeah, like contextual, uh, menus depending on what you have selected. all of that stuff I built it in a gigantic PR because, like, this...

none of this existed. This doesn't, didn't exist. This didn't exist. Annotations didn't exist. a lot of the sidebar, this is not the sidebar, uh, the inspector panel that I made. This is, we're still working on this. it would be weird to just do this, for example, first, and then do the, the layers list and then do, like a lot of that stuff you need to do the whole thing, you know?

[00:35:59] **Speaker 5:** Especially when you don't know where [00:36:00] you're going sometimes too, like a lot of-- You're still exploring. I find that so tricky where I end up making PRs that are way too big, but then I wanna ship a lot of them 'cause I don't have a big team. But I'm like, "Well, I didn't know how to split it up when I started," you know?

Like, this has replaced me exploring on a canvas

[00:36:15] **Speaker 2:** Yeah. So even these things that, like these things that are like manually you can just like, the gap between the words, the gap between the elements, the padding, all of that stuff, those deserve to be their own PRs, you know? but for me testing it, as you're saying, and for me actually doing it, I had to leave a gigantic PR, a gigantic PR where I was doing it with just design mode that actually is still, more advanced than what is shipped because it has the sidebar here and it has some interactions here that have haven't been shipped.

I was the one prototyping this, and then engineer will be the one cherry-picking stuff and actually making it a reality, it was like, okay, I'm going to cherry-pick this thing and then I will put in reality. I will do the contextual menu and then I will make it a reality.

So [00:37:00] there's that role that is, uh, of the person who maybe, uh, uh, and, and I see that others have mentioned this, that is, that is not the prototyper but is the one that is makes it for real. more on a team and, and this would be a, a software engineer, you know, and this depends on what you're making real.

If it is just like front-end stuff, then it's going to be someone who knows enough of the front end and, and potentially some of the back end to just make it re-real and then so its performance, so it doesn't break, so all the dependencies are there so it doesn't, uh, like you're not introducing something that is going to create a bug that you didn't even realize because you were just trying to make this work.

But while doing that you just like introduce something that is breaking other parts of the, code base that you didn't even know because I'm a designer and I'm a dummy, you know?

[00:37:45] **Speaker 5:** the big prototype that you're making, is that off of production code base or do you have a separate playground repo that you're building off of that the engineer is then

[00:37:53] **Speaker 2:** Oh, no, it's, it's, it's on top of production code

[00:37:56] **Speaker 5:** All prod. Okay, cool

[00:37:57] **Speaker 2:** I also want to be able to be using all [00:38:00] real tooling or real, everything real, you know? There are some things that you could do that is just like on a, like on a sandbox or like in a HTML or whatever when you're just, like, playing around.

I believe at, at least in a tool like this, you want to connect to the, I don't know, to real projects, to the real agent, you know, here, and, and that way you will test it, it the right way. Which is something that a, a PR in a way is just something that is not, uh, at least depends on how the restrictions and the permissions that you have in your, repo, but it's not going to be shipped unless someone else approves it, and then unless it passes all the tests.

So it's okay to just create a PR and then just to be safe, put it on draft, just play around with it and just use the real thing. And that's, that's a part that just makes, a tool like v0 so powerful because you're connecting to, to the repo, you know, you're connecting to the, to GitHub, and you're working on the actual code base, and you're not just working on a static art board we're just mimicking and you're [00:39:00] just like, uh, trying to think of all the edge cases, but at the end it's hard to think of those, so you end up just creating the happy path, you know?

Or just the static path because you're not testing and you're not finding out the things that, uh, usually happen when you're testing th- the thing with real data or with the real tools and with your real components, you know?


## [00:39:21] How Pablo uses Loom videos to share ideas

[00:39:21] **Speaker 5:** There's another implication of how you're building in one big prototype that I'd love to learn a little bit more about, which is like this is immediate release, right? There's so much strategy, there's so many UX decisions, there's so many overarching product decisions that I would imagine a bunch of people had opinions on.

So how does this way of building change the way that you share ideas with the team, uh, get feedback, bring people along from the journey, make sure that everyone's on the same page so you can get this monstrosity of a release out the door?

[00:39:51] **Speaker 2:** You can go into a rabbit hole, like AI psy- psychosis rabbit hole if you're just working with terminal in isolation, [00:40:00] you know? Because you go and, and this thing that will always say, "Yeah, yeah, let's build that," that will always agree with all your terrible ideas, then, uh, you go build a monster that nobody wants, you know?

So, uh, you want to avoid that. But yeah, by having humans bring the friction that we all need, real creation and I don't know. Th- things that, that feel more original are going to come from multiple perspectives having friction and having pushing you, pushing back and pushing you to do, to think differently. And LLMs, they're not that good at doing that. And, and I think, uh, humans, we still, we still have that.

We're, we can be jerks sometimes. You know? That's our superpower, that we can be like, "Ah, that sucks," you know? And it's okay, that it's good to share that stuff and put it out there as like a record a video of your thinking and then ask for, for advice, [00:41:00] ask for feedback, put it on Slack, put it in a Loom.

Share, also share, like now with this thing, the cool thing is you can share a preview link, you know? Uh, like a Vercel preview link, and then people can actually open it and click around and then find the things, and then they could tell you where it broke, you know? that's usually how it works.

We will have a channel, that is specifically for PR reviews, and then we'll have channels specifically for projects. It will-- Like for example, the design mode, project had its own Slack channel, and we're just like talking about it, and we're just pushing our, ourselves, to just like do better, you know?

Because I will put something that's like, "Hey, this is cool," right? And then I will have a PM or engineer or someone tell me like, "Uh, what if we do this? Hey, this kind of sucks." And then you fix it. So like it's all about collaboration and that shared knowledge, 

[00:41:50] **Speaker 5:** I wanna talk about the Loom piece because you've made, like, you've made a heck of a lot of videos, right?

Like, you have a lot of reps under your belt, more than a lot of average [00:42:00] designers who have not put themselves in front of a camera like you have. So I know there's, like, this 101 set of advice for what makes a good Loom video, giving the context, talking about the problem, whatever, yada, yada, yada, yada. I wanna ignore all of that.

I want Pablo's 201 advice. Like, what are you intentionally doing to make your videos more compelling,

[00:42:19] **Speaker 2:** nobody wants to suddenly see, being tagged on a video that is 10 minutes long, you know?

And it's like, "Oh, dude, really?" You know? So you, you wanna keep it short, unless if you really need it to be long, then you better be telling a good story, you know? That, that length better worth it, you know? And, whenever I, I realize, oh, this is going to be, like, a longer video, so I would try to tell a story, you know?

Like start with Hey, why am I presenting this? Where did it all come from?" I would try to-- Sometimes I would s- sketch the stuff, For example, here, um, I was, uh, uh, talking about, uh, Robotus,

This is a project that I made some [00:43:00] years ago. and it will tell like, uh, how things came about, you know? Like before it was vectorized, like how it was actually first a sketch. And a lot of it will, for example, like, uh, uh, back in the day I was-- we were building a map and stuff, and I was trying to convince people of an idea, you know? So I made this map, and this was while I was doing the Loom video of this. I was like walking people through this map, and I was like telling them, "Okay, guys."

Like I, I felt like, uh, like Charlie in "It's Always Sunny in Philadelphia," like, uh, showing like all the diagrams and his conspiracy theories. but I would tell them like, "Guys, okay, so we start with this, you know? And then this, uh, from here, this becomes this, and then we get some tokens, and then we get some, uh, prizes for people.

This is going to be tokenized, so only these people are going to be allowed." But I was, I was using like a, first a graphic. my idea there was still very conceptual. I was trying to guide people through this, to this vision, you know? 

[00:43:57] **Speaker 5:** it just points at the fact that you spike in so many [00:44:00] different directions, which I appreciate. Like, you got the UI skills, you have, like, a little bit of code background. You're, you're, you're doing all the technical things, you're living in the terminal, and yet then you have all of this artistic ability and, and the illustrations, and I think it feels sometimes like we're entering this world where everybody is being pulled more technical.

I'm sure a lot of people listening feel that. I know that I do. So maybe before I let you go, one final question I have is how do you think about protecting your creativity as we hand more of our output to the models and we're doing more of the things in code and more of our decisions are at the orchestration level?

Any thoughts on the future of staying creative as somebody who's really built a career on that skill set?


## [00:44:44] How Pablo protects his creativity

[00:44:44] **Speaker 2:** This project, I had never done, uh, pixel art before. I made this, I don't know, like two months ago or three months ago, and I made all the different things to create just like, I don't know, I think it's like 10,000 characters or something or, uh, that you can do with combinations, you know?

And then... [00:45:00] I forced myself to do it by hand. I didn't use AI to do this stuff. so this was like me learning, a pixel art tool that is not Procreate or Photoshop.

that was a challenge for me. It was a challenge for me to understand like how to do this gradients, you know, with this pattern, to just like simulate, uh, shading. at every turn, man, my brain wanted to use AI. It felt like a drug, you know? It felt like I was, I'm hooked to this tool that can do it all. So now my brain, wants to do it that way, you know, wants to use that tool. and instead of, trying to do the pixel art stuff that I wanted to do, my brain kept going to like,

Why don't we create a pixel art tool

[00:45:47] **Speaker 5:** Totally

[00:45:47] **Speaker 2:** with AI and code instead of doing the pixel art? If you do the tool, then you can do later the art." So my brain wanted to do that, I don't know if you ever heard of, uh, McLuhan. He said that,

we create our [00:46:00] tools, and after that, the tools, shape us too. which is great, you know, like, uh, new technologies, change our way of thinking too. I think it was Socrates who was against writing. he was against writing because he thought that writing was going to erode our thinking, our ability to memorize things.

he thought that by putting it in writing, we're just, like, suddenly delegating our thinking to the written word instead of trying to use our brain. Th- this thing goes back for a while. That's why I'm also still very positive and very optimistic about AI, even when I have my own existential crisis bef- a, a lot of the times while using the tools.

At the same time, I am like, "We're going to figure it out." Because back, like, I don't know, thousands and thousands of years ago, we were having this debate where the smartest people were against writing because they were afraid it was going to, dilute our thinking in a way, he was right because w- it did change [00:47:00] our way of thinking but it-- he was wrong in that it was going to just, like, make us dumber, you know? there is a danger in using these tools, I think, because if we delegate too much of, to it, then we're not forcing ourselves to think through.

And this is what was happening with me when I was trying to do the pixel art. I'm being shaped by the tools that I use It s- feels like an addiction because it's so good. I think that you want to be able to force yourself to not delegate all of your thinking to this tool and use this tool the right way. My belief is that we need to use it in a way that expands our ideas. It magnifies our curiosity.

It allows us to go deeper, but also broader, where suddenly maybe that thing that was like a little spark in your brain suddenly can be amplified into a gigantic star that is full of fire 

[00:47:55] **Speaker 5:** I'm so appreciative that you ended on this Pixabots [00:48:00] example, I'm challenged by seeing it even, you know? Because it is, it's so tempting to just use the models, use the models. I don't actually need to think until Claude finishes its response, and then I'll pick up thinking again, you know? And so seeing you do this by hand, embrace the friction, I think it's beautiful, and I find it inspiring.

I'm sure that people watching will be inspired as well. And honestly, Pablo, just thanks for coming on and sharing not only what you've made and how you're working, but also just what it's like, you know, living in this world today and everything that's changing and embracing this, this new way of working.

I super appreciate you and have looked up to you for a while, and just grateful for being someone who is continuously sharing what you're learning and thinking about in this industry.

[00:48:44] **Speaker 2:** Oh, man. Thank you. Thank you. Appreciate you. 

