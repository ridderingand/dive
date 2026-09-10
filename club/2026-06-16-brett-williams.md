---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: Xxiq2phvwOA
slug: 2026-06-16-brett-williams
source_type: descript
source: descript://Brett Williams
guest: Brett Williams
host: Ridd
title: "How a Visual Designer Became a Builder"
published: 2026-06-16
duration_min: 50
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] 


## [00:00:00] Brett's journey with building

[00:00:00] **Speaker 7:** I've been a designer Specifically more just like a visual designer for a really, really long time. I don't know how old you are, Red, but I mean, I've been doing it since, gosh, for 15, 20 years, something like that. So, obviously like the discourse around, um, designers learning to code or, or recently like designers learning to build and just bypassing code altogether has sort of been an unavoidable conversation if you're like me and you're like religiously on X, right?

So, I've tried to internalize this a little bit. I would never consider myself to be a really, really great visual designer, but I've certainly put in the time and the effort to grow in that category, and I've been very protective over that.

Not that I'm scared of being replaced, but just like, uh, the d- I guess the cultural devalue of design, and I saw that kind of coming with the introduction of like AI, and that's sort of taken over everything, and it's really distracted people from what we used to value and love in a product and in the process.

So I've been rather outspoken about it, I feel like, maybe to an annoying degree, maybe not, about just protecting the art and the craft of [00:01:00] design. And so maybe that's why I haven't, up until recently, really dove into that sector of, of my work and have kind of abs- abstained from even playing around with, you know, coding tools and things like that.

but yeah, it's like when so- when you just keep seeing the same thing over and over and over and over again, day in and day out for months, and at this point it feels like years, you know, I finally was like, uh, maybe there's something I'm missing, right? Maybe, maybe I'm looking at this completely wrong, and maybe there is something for a visual designer like me, uh, that I can leverage tools like this to actually not like just replace what I do or like, or simplify it down or dumb it down or, or whatever, but actually like enhance what I do and allow me to enter into eras of this work that I really haven't been able to enter into up until this point, both for myself and for my client work.

And so, yeah, a month or so ago, I dove into it for the very first time. I had played around with like Bolt and Lovable and these sort of like, you know, text app tools a bit on a very light level. Never launched anything, never even got close [00:02:00] to launching anything. At the most it was like I put in a prompt, saw the output, was like, "Eh, that's kinda garbage."

And then, you know, I went back to Figma, right? Like I'm a huge Figma guy. That is the world that I live in for all of my client work. But yeah, it wasn't until a month ago that I really dove into, Claude and all these other tools And really saw what they, what they were, I, I guess different in the way that I looked at them before.

And so I'm very new to this. Um, this is not something that I've been like trialing forever. you'll hear it in this conversation, like I don't really know how to talk about these things. I struggle with terminal, I struggle with GitHub, I struggle with understanding all these concepts, but I'm doing it, right?

And, uh, and then I finally w- got to the point where I actually released a product and, you know, lo and behold, it was a lot easier than I thought. and it wasn't as scary. It wasn't, you know, it was, it was so much fun. It was like, uh, the, the addiction really, it was like the most satisfying experiment,

[00:02:50] **Speaker 14:** I think it's that perspective that I'm so excited to tap into, 'cause it's really easy to bring on somebody who's a design engineer who, you know, got a CS degree from Waterloo, and they're like [00:03:00] kind of a designer, but also, like, they totally know their stuff, right? And so to be able to capture the journey from somebody who basically...

My understanding is you have, very little of any technical background at all. You are literally just a visual designer. You just made the jump to like, yeah, you can call yourself a builder. You launched a really polished Mac app over the course of, you know, a month and a half, two months, whatever it is.

So I wanna capture that story, 'cause my hope is that you and the way that you talk about it and the lessons that you learned can inspire a lot of people. So where did you even start?

[00:03:30] **Speaker 7:** Yeah, I mean, I wanted to pick something that I naively thought was going to be a very simple thing that I could, like, not one-shot, but, like, get there relatively quickly, within, like, a week or two. but I wanted to push myself. I, I, I didn't even quite understand the difference of, like, building a browser app, a Mac app, or a mobile app.

I didn't know what all that entailed, right? All those things I didn't understand, but I wanted what I wanted for myself, number one. And I remember just telling my wife," I didn't really have any expectations other than the fact that I wanted to just see it through [00:04:00] and see that I could do it.

I didn't really know what was gonna be around every single corner, at all, but I was gonna keep pushing through and get to actual, like, distribution and people using it and, and update-- making updates for them and just seeing how all of that even works, right? I just put one s- one foot in front of the other.

Um, I didn't plan anything out. I didn't, uh, have to understand everything at the start. I just took one step at a time, the way Claude obviously teaches you is, is at your level, and you can kind of, you know, direct it to down to, like, distill it down to, like, my ignorant first-time, like, level of knowledge on this. So it did a really good job of that.

But, yeah, I wanted to pick something that I could use personally that I also thought maybe there was a gap in the market. And so I, yeah, landed on Gather, which is a, you know, I would call it, like, a collection app where you can collect design resources and inspiration, and now I'm getting into, like, bookmarks from X and things like that. Kind of just a collective repository of things that you enjoy that, you know, whether you're a designer.

We-we're building a house right now, so my wife is using it Like, she's creating [00:05:00] collections for every room and update-- and uploading inspiration for those rooms. So you can use it for more. It's more than just design, but it's primarily a designer's tool. and it's a Mac app.

[00:05:08] **Speaker 14:** Where'd you start? Like, once you realized what you wanted to build, did you jump into Claude? Did you, design a lot of it in Figma first? Like, what were some of those first few steps?


## [00:05:18] Where Figma still fits in

[00:05:18] **Speaker 7:** So I thought that if I were to ever use AI, in this way, I would inevitably start in Figma since that's where, again, like my mind was at, was like, you gotta start with a good design first. I actually, in this case, just jumped straight into Claude. I didn't quite know about Electron. I didn't know any about frameworks or anything like that to build apps.

So I, I first just started prompting Claude on like just getting the technology down on what I need to be able to use and what accounts I need to create. Like how do I-- how does authentication work? How does emails work? Like I've never used Resend in my life. Like all these tools I've never used. I have no exposure to it whatsoever.

API's, never connected an API to anything. So, and then I didn't know like how was I gonna integrate OpenAI into that. No clue at all. I got all that kind of figured out [00:06:00] first loosely so that I gave it some sort of direction, and then I had it just kind of scaffold out, you know, build me a prompt that had it in different phases.

I'm more like the way that I work in AI, and again, I'm not speaking at this from an expert level 'cause I've only been using it for a month, but the way that I personally like to work is like one little thing at a time. I'll start with like the big phases of like, hey, let's just get the back end built, then let's get the front end built.

Let's not get into like all these other complex features yet. Let's one thing at a time. And then once phase one's built, then I just drill into phase one, each element one by one, fine-tuning what a dropdown looks like, what a filter, you know, set looks like, what, what the, what the tabs look like. You know, and I, I like to, I like to really like get into the nitty-gritty details of every little thing.

I don't like to just create one sweeping prompt to do everything 'cause then I have to go back and tweak it and troubleshoot and debug it and all that sort of stuff. So I just went bit by bit and I spent, gosh, probably over 100 and something hours building Gather, which, uh, some people nowadays are like, they're looking at like, "I could do this in an hour."

But, I spent [00:07:00] like, I-- on every, every edge case you could think of, right? And every, every type of like-- I, I, I went through so many iterations of everything. I redesigned the app from the ground up multiple times in various different styles, aesthetics, all sorts of stuff. But, yeah, I just started with Claude.

I just had it educate me on what the heck I should even be doing and what I should be building and how I should be building it, and then just kind of took its lead and set up GitHub and kind of went from there.

[00:07:23] **Speaker 14:** So at what point did Figma come into the process?

[00:07:25] **Speaker 7:** uh, I w- like there's a saying, I forget who said it, but it's like the last 20% of building an app with AI is like 80% of your time. Like I got to like-- I built the app relatively fast, but Figma came in in the last like 20% where, I was experimenting with just like even down to just like what a button looks like.

And, you know, I had to-- I, I wanted to do this sort of like skeuomorphic button where the, where the stroke was like a gradient and then the infill was like, was like another gradient, but like they didn't-- just Claude wasn't understanding like that I wanted the stroke to be a gradient, so I had to instruct it like, "Hey, here's the [00:08:00] exact..."

You know, I started with CSS. So I st- I went into dev mode with Figma. I built, I designed out the asset, copied the CSS, and just fed that into Claude. and it just nailed it. Then I later on was like, "Oh, there's something called an MCP." I don't even know what it stands for. I don't know how it works, but I started using that.

but yeah, it was really the last 20% of like really getting into like everything's built, now it just looks like crap, so I need to get it to not look like crap. So that's where Figma came in, but I really didn't use it as much as I thought I would. Like I would love to be able to say I leveraged Figma a lot, but I really didn't.

Like I, I knew what I wanted, I knew how to describe it. there's obviously some cases where Figma was helpful, but I just, I feel like I did a decent enough job of describing exactly what I wanted from like using design language like strokes and like, you know, opacity and all these sorts of things that like people normally probably wouldn't use.

And so, I think I was able to direct it good enough without Figma, um, for the majority of it, which was a surprise to me.

[00:08:56] **Speaker 14:** can you talk a little bit about the parts of the process where Figma was most [00:09:00] valuable? Like, where did you see a lot of value in reaching for the tool?

[00:09:04] **Speaker 7:** it was more-- most helpful in previous versions of the app where I went a lot more like into very unique kind of styles and aesthetics. Like a lot of the stuff I share on X is like very kind of like skeuomorphic in nature, like metals and, and shininess and shimmer and things like that.

This app has gone through many evolutions before it was released, so it was a lot more helpful there versus like there's not a lot I could point to in the app today that I can say, "Yeah, Figma was super helpful in this." Um, that was the surprising part to me, and it feels really wrong of me to even say that out loud, you

[00:09:38] **Speaker 14:** to say, can you imagine three months ago saying that?

[00:09:40] **Speaker 7:** No, dude, like there really... I can't-- I'm look- I'm sitting here looking at the app and I'm thinking, "What did Figma have in this?" Now again, there was some things in the past a- around just certain UI elements that it just was not getting it right. And I did leverage, like I said, the dev mode in, in Figma and copied the [00:10:00] CSS to get button styles and things like that absolutely correct, and it was mind-boggling how easy it was, I like to know that I can leverage that if I need to.

But the way, the, the style direction that I went in for this app didn't really warrant using Figma all that much. I used screenshots a lot. Um, I think maybe for this top bar, I used Figma a little bit to kind of show the position of it. But really, honestly, man, like I-- 99% of this is Claude and me kind of very much directing it.

Not just me putting in a prompt and it-- Claude spitting out the perfect thing. Don't get me wrong there. It's me be- being very, very specific on what I want in describing that.


## [00:10:40] Maintaining control while building with AI

[00:10:40] **Speaker 14:** Okay, let's talk about that piece a little bit because I think there's still a category of designers who associate working with AI with, like, the loss of control and prefer that direct manipulation, and it's almost like you can't get that working with the model. So what's your relationship with, like, the level of control that you have in [00:11:00] Figma versus in code?

[00:11:01] **Speaker 7:** I mean, obviously you have all control in Figma, goes without saying. and I, I like that for a lot of, a lot of things, especially like client work. But when I'm doing a tool for me where I can do really whatever I want, I will say I was very, very, very, I can't overstate it enough, very surprised on the level of control you actually have in Claude.

I wasn't using Claude Design. I wasn't like-- I never-- I have yet to use it. I don't really know how it works, but I wasn't pointing and clicking on things and saying like, "Move this here." I was just using generally like the Claude code, um, web platform to, to do this. But again, it comes down to like, obviously you have to know what you should do, right?

And then you have to be able to describe how you should do it. you go through many iterations, of course, like it rarely gets it right the first time. I was shocked by-- I guess then that was the biggest shift, right? Is like I thought of Claude as like you put in a prompt, you get something out, and you have to live with it, or you have to go back and forth, and it's like playing the lottery, where it's like you may, it may nail it or it may not.

I didn't really look [00:12:00] at it in the sense of like, I could tell Claude exactly what I want as long as I know how to describe it, and it'll actually output that. It may not output it the first time or the second time or the third time, but it'll eventually get there. that was the biggest eye-opener for me was the control piece and being able to...

Like there was nothing, there was no part of this, of this app that I was not able to build exactly the way I wanted it to build. which was again, a complete eye-opener, game changer for me. I can honestly say that there was no piece functionally, feature-wise, complexity-wise, technically-wise, like design-wise that I wasn't able to do.

[00:12:29] **Speaker 14:** And obviously like in Figma you have 100% of control of the visuals. But I do think working with Claude gives you the ability to control different levers that are not exposed inside of Figma. Like I was playing around with this tab bar up at the top, and the way that you're scaling the icon in. Like there's actually a lot of different ways to scale that icon in, right?

[00:12:50] **Speaker 7:** are, yeah

[00:12:51] **Speaker 14:** I, I, like talk to me a little bit about like, like that level of detail and, and anywhere else in the app that you wanna highlight too. Like where do you feel like you were really sweating the [00:13:00] details with Claude, and did you learn anything along the way around the best ways to do that even?

[00:13:04] **Speaker 7:** Yeah, I mean, the tab bar was certainly one piece of it. I spent a good amount of time, and I, I did so many different versions of this tab bar, and there was versions of this app that didn't have a tab bar at all and had a completely different way to navigate it. Now, I can honestly say the icon, that was just something that I knew that I wanted.

I didn't quite... I'm not an animation guy, so I didn't quite know all the terminology around, like, how do I direct Claude to, like, pop this in in this exact way and sort of have, like, the trailing, I think that's what you call it, like the trailing, like, active hover background, whatever you want to call it.

I don't even know what it's called. Um, but I knew I

[00:13:39] **Speaker 14:** way, I just use skills.

[00:13:40] **Speaker 7:** Yeah, and like I know, I knew I wanted that, and honestly, I think that was, like, when I directed Claude that I don't remember it taking more than one time to get that right once I got there. Obviously, I built by default a basic tab bar that just worked normally.

It actually had no icons. And I was like, "Hey, I want the active tab icon to show." Okay, [00:14:00] cool. Now I want it, the, now I want the tab to kind of trail to go from tab to tab to tab, where you can visually see it moving. And oh, now I want the icon to pop up to animate in in a certain way. So it was just, like, very-- that, that was kind of the language that I used.

I didn't, I wasn't very technically, like, correct when I was describing exactly what I wanted. that was a fun piece. And again, like nothing's perfect in this app. I don't, I've never even clicked... This is a, what you're seeing here is a dev version of it, so there's certain things that you don't see in the app, like the bookmarks.

this view right here was a view that I spent a lot of time experimenting with, getting it right, like getting the right feeling, 'cause I wanted it to feel different than the masonry grid or anything like that. I want it to feel like it's its own kind of aesthetic based on the artwork that you're looking at, right?

So I spent a lot of time on this page, 

[00:14:46] **Speaker 14:** Dude, the shimmer. The shimmer is so nice. Oh, and the hover tilt. That is a really

[00:14:51] **Speaker 7:** you got-- So, uh, these are all like, uh, these are, I guess, old concepts, but I'm like, "You know what? This is kind of a, kind of a fun app. I'm gonna do whatever the heck I wanna [00:15:00] do," you know? So yeah. So when you, when you load it in, it gives a cool, like little like, you know, shimmer across it. but yeah, I spent, I spent a, a considerable amount of time on this 'cause I felt like this was one of the most key pages, um, with where these elements go, what they look like, down to even like, gosh, like I went through so many icon sets trying to figure out which icon set works the best, and then, um, troubleshooting all of that.

I didn't wanna incorporate dark mode in the beginning 'cause I knew every change that I made would have to be like duplicated. And so once I introduced dark mode, that introduced a whole other level of bugs and things I had to t- I had to retest everything, right?

There's actually a considerable amount to this app that people don't quite like realize, multi-select and how that works, be able to drag and multi-select.

Like all these things down here with being able to bulk collect it, you know, bulk, add them to collections and bulk tagging, and then like you can even create this like you have this like little thing down here where you can click in and it creates a mood board. It like puts it all into a JPEG so you could like share it with somebody else.

Um, [00:16:00] and then like you get into spaces, right? Which to my knowledge, Gather is the first app to do this. There might be other apps that's like does something similar but not, they're not necessarily collection apps. But like this introduces a whole other world there are certain things about this app I knew once I, once I added the initial feature, it was just gonna open up a whole other can of worms.

And so this was another one of those features where like I wanted to be able to have a free flow canvas, kind of like Figma, where you can like arrange these and be like, yeah, like, you know, if you're creating a new brand, like, do you wanna be able to see I like these colors and I like these logos and I like these, these patterns or textures or whatever.

So being able to add, you know, different things here. There was a lot I had to work through with even down to like alignment lines and distri-

[00:16:40] **Speaker 14:** Yeah, how long did it take to do that stuff like that? Like, there's a lot-- I mean, this is a, there's a lot of features in

[00:16:45] **Speaker 7:** There is a lot. It doesn't look like a lot. Yeah, I mean, like I said, it took me probably, oh, I guessed, I guessed initially 75 hours, and I asked my wife, I was like, she goes, "Oh, probably close to 100, 150." So, it was a lot. Like you, you don't-- That's the, that's the thing is like I, I [00:17:00] said that in a comment on X at one point, and somebody was like, "Ha ha, like I, I, I'm gonna do this tonight."

And I'm like, "It's kind of convenient for you to be able to say that, because I've already worked through all the edge cases." It's like I think, like I feel like it's much easier to copy a tool one for one than like start with a blank slate,

[00:17:16] **Speaker 14:** Yeah, agreed

[00:17:17] **Speaker 7:** from scratch and then like have to think through all these edge cases and everything.

Like there's so much to this, especially once you introduce dark and light mode and all these different media types now with you have video, then you have... Like I'm right now, for example, one of the most interesting things that I've accomplished that I would not have thought I could accomplish, and it's not out on in production yet, but is incorporating X books- bookmarks, Twitter bookmarks into this without using the API.


## [00:17:42] Building a Twitter bookmarking extension

[00:17:42] **Speaker 7:** Like I've always wanted to build a Twitter bookmarking app 'cause I hate the bookmark experience on X. but the API is so incredibly expensive that it keeps everyone from doing it. But I figured out a way to build a Chrome extension. It watches your activity in Chrome. When you bookmark something, it's automatically loaded into Gather.

And but then you like, you open that up, [00:18:00] then you have all these various different tweets, tweet formats. You have text-only tweets, you have texts with images, you have threads, you have quote tweets, and incorporating how all of that works in here. And then you have the edge case of like, well, what if I bookmark something on mobile?

How is my extension going to get that and put it into Gather? Well, I had to, I had to problem solve that and ha- figure out how all that works. And it just, it just, you just keep going, and it just figures it out, and you're like, dang, man, like there's nothing that-- It seems like there's nothing that it can't do or can't figure out a workaround for.

Um, so that's kind of the next

[00:18:31] **Speaker 14:** Pause, pause, pause. I'm gonna ask, like, a ridiculously specific question here, but

going from the point of, " I want to do this," I would imagine you don't even know if it's possible. Like, literally, what did you prompt Claude? Like, how did you start that very specific project?

[00:18:44] **Speaker 7:** I would just basically tell it what I want it to do, and then I would, I would hope that it could tell me, "Hey, yes, I can do it." Now, I will say there was a couple of cases where it didn't. Uh, it, it actually said, like, "That's not possible," or whatever. And [00:19:00] luckily, like, this is where experience comes in, because as an anecdotal example, right?

Like, I wanted my Chrome extension to look a certain way and, you know, I wanted it to have rounded corners or whatever it is. And it comes back and says, "Actually, the, you know, Chrome is, limits you to this." But I, I, I was aware of another extension that did something similar, and I'm like, "Well, they're doing it."

So I fed that back into Cloud, and it was like, "Oh yeah, you're right. They're doing it this way. They're actually putting an iframe on top of the page. Let me do that." So there, it, it's like you do have to have some knowledge in order to get over some of those obstacles. I feel like with Claude, one of its, one of its strengths, and, and I'm not saying this is exclusively Claude, I'm sure Codex does and everything else, but it's very good at like kinda ranking your options of being like, "Hey, here's like the lowest risk, like least expensive option. Here's some of the downfalls that might occur for it, from it.

here's the most expensive option, the most instant option," let's say just for these books, bookmark thing, right? So it is really rather good at like giving you options by default. When you say like, "I want to do this. What's the best way to do it?" That's where I would start with every new [00:20:00] feature that I wasn't quite sure if it was possible to do or not, including like especially the bookmarking thing, 'cause I would never have thought to create a Chrome extension for that.

and so yeah, that's, that's where I would start. Be like, "Hey, I wanna do this. What's the best way to do it?" And they would usually give me three, four, five, six options, rank them in order. it would have its recommended option. Sometimes it would blend. It gives you a, like a last option that's kind of a blend, right?

And then you just kind of pick and choose which, which you want, and you have the full context of it, 

[00:20:25] **Speaker 14:** Okay, I wanna drill into more visual details because you were being humble in the beginning, but I do think you are a world-class visual designer, and so there's this gap that you have to close, right? Like, you have the skills in Figma, but, like, can you bring them to life in code? And I think there's a lot of little details that maybe people wouldn't even notice at first.

and one thing that stood out to me was, like, the multi-select, and you have this double border effect where you have, like, a light inner and a dark outer, which is like, it's, it's really nice, right? It's really, really nice you're able to, you're able to nail that. Even down to, the shadows on this [00:21:00] branding card.

Like, how'd you-- Just talk about shadows even. Like, how did you dial in


## [00:21:05] Dialing in the finer details

[00:21:05] **Speaker 7:** Dude, that's honestly one of my favorite pieces of this, and I would be lying to you if I said that, like, I, directed the shadows at all on that. It was literally, it got it the very first time and I had never changed it. Like, I told it I wanted collection cards at the top. I went through so many versions of that particular collection card, but it, it got the fan thing right away.

I said, "I just want a stack of cards that, like, fan out when you hover over it." And it got that really, I'd say like day one or day two of building this app, and I

[00:21:35] **Speaker 14:** Can you hover over, hover over it let's, so that people can see?

[00:21:37] **Speaker 7:** Yeah, so when you hover over it, it fans out. Even goes like, things that would bother me, like it goes behind the text, but I'm like, it's kinda cool, right?

It's like, it's very natural and, and, and raw. I use that throughout, so if you go to collections, you know, it's the same sort of thing. Um, but that's one of my favorite pieces of the app and something that nobody, no other collection tool really does. and then like, there's even like little things.

[00:22:00] Again, this is where you really, like you can hover over in the bottom right-hand corner and it pops open. Oh, I haven't figured out the video thing yet. But it pops open the image in like a quick view, right? Things you would never notice. one, one of the cool things I like, I like to save fonts. So if you go down here to tags and you actually type in font, it actually like is smart enough to give you fields so you can like type the font name, the

[00:22:23] **Speaker 14:** Oh, wow

[00:22:24] **Speaker 7:** URL, all that good stuff.

And you can see I need to fix that bug, um, 'cause the, uh, the dropdown is not working with dark mode. there's so many things that, again, like you really have to use the app to, to discover. Like one of my favorite things is like the rediscover mode, where it's like you wanna just kinda sort through things and you wanna be able to go through quickly and like, "Hey, I wanna skip this one.

I wanna add this one to a collection, you know, I wanna add this one to trash," and it's just kinda cool, little cool things. Or like, if you go to unsorted, you have this focus sort button down here, and so you can quickly-- I only have one collection right now, but you can just use your hotkeys to like [00:23:00] add it to collections, right?

To quickly sort through everything. so yeah, there's all kinds of things like that that you don't see on the surface until you really use the app that I thought that was a lot of fun to build and think through, 

[00:23:10] **Speaker 14:** How often are you intentionally leaving wiggle room for Claude? Like we've talked a lot about how you can very clearly articulate your intent at this final 1% of polish. Are you ever kind of that, almost like that, uh, slot machine mentality? Like do you ever lean into that or not so much?


## [00:23:29] Strategies for collaborating with Claude

[00:23:29] **Speaker 7:** I do in different formats. Like if it's something, if it's a new feature that I don't quite know how I want it or how Claude will implement it, I'll usually like prompt back and forth with Claude to like get some context around what it might do and the options that it might sift through. I don't like to just like wait for the build process, then have to debug it and all that sort of stuff.

I, I'd rather like Claude describe what it's going to do first. There's certain things though that like I just know what I want, right? And I, I, I like to leave wiggle room on [00:24:00] everything. It's just the degree of which I leave wiggle room depends on what it is that I'm doing. that's kind of the fun in this, right?

Is like you have to use Claude as like a companion, right? That's like it may know stuff that you don't know. It may think of things that you may not think of, right? And so I do like to leverage Claude a lot in like thinking for me and brainstorming and theorizing on ways to do certain things more than, more than the opposite.

I don't like to just be like, "This is exactly what I want. Do-- don't do anything else different." But again, like I'll-- if I do direct it, I'll usually end the prompt by saying like, "Let me know if I missed anything or if there's a better way to do this, or maybe I haven't thought of some edge cases, like consider those."

And, and so yeah, I, I don't know. I would say I leave it a pretty high degree of, of margin for Claude to do what it thinks is right, and then I'll just review it and change it if I need to,

[00:24:47] **Speaker 14:** Yeah, I think that's probably my answer too, where it's, it kinda just depends on what the output is. Like, if the output is visual, a lot of times I'm like, "Build this exactly," like pixel perfect, you know, match the selected frame kinda thing. [00:25:00] Like, I do still work on the canvas all the time. If the output is a little bit more transition based, I am also not an animator.

Like, I'm, I'm trying to get better at interaction design, but a lot of times I'll just describe something very loosely and, and see. Like, it's super helpful to just see something and then

[00:25:15] **Speaker 7:** Drill down.

[00:25:16] **Speaker 14:** than, you know, do that and then I'll drill down from there. Exactly. there's a lot of actually clever page transition things that are happening in the way that, like, the grid fades back in. H- how-- Is that stuff intentional? Like, did you get a lot of that out of the box? Like

[00:25:28] **Speaker 7:** I didn't got, get a lot of that out of the box. I mean, that was something that, like, this is where as a designer, you're a designer, but you have, like, the world at your fingertips with these apps. Like, you can do anything. It's really difficult not to over-engineer, right?

Like, I still wanted this to feel very lightweight, very like, very pleasant, not, not too much in the way. I really wanted the art to, like, be, the showcase of this app. So I didn't wanna do too much. But like, figuring out how subtle I want things or... Like, I would like, shadows on the cards was something that I leveraged in [00:26:00] Figma 'cause I just couldn't quite get it right.

like it would either be too drastic or not enough, and then figuring out the right shadow for like, well, some, some cards have like a light gray background. How are those gonna work on there? And of course it doesn't-- Like, you can even see this card over here is kinda like, seems like it's floating in space, but you kinda have to.

At, at the end of the day, you can't account for every situation, make everything look perfect. but no, the way the cards load in, like even last night, I was figuring out like, you know, when you save an image, like what that should look like. Before it had like a shimmer and a pop and then, you know, I was like, I wanted to kinda drill that, kind of condense that down into something more subtle.

And then, I picked my pop sound, but like maybe somebody else doesn't like the sound, so I went and, actually went into settings and it was like, uh, you know, I asked Claude to give me like 10 or so different sound effects. So you can actually go through and like pick... But again, like Eagle app is the app that I used previous to Gather.

It's a very similar collection tool, but their feature set is like massive. And you can tell it's like an app that's been around forever and they just don't know what else to do with it, but just keep adding new features. So [00:27:00] I was very, very cognizant on like not adding too much, but adding the right kind of things.

And so again, that's where it comes down to taste and judgment and like all the things you hear about, like that are obviously significant when building products and the things that are gonna separate good products from bad. but that is, that is a struggle where it's like, I can do this in two seconds, so should I do it or should I

[00:27:18] **Speaker 14:** Shoulda, yeah,

[00:27:19] **Speaker 7:** and how you like, how you go about that. And I'll add things in, then I'll remove it because I feel like, okay, that was a little too much. I was having a little too much fun there. Let me dial

[00:27:26] **Speaker 14:** a slippery slope, man. Slippery-- I, I, there's a, a Rio Liu tweet where he talked about overcooking an app that I think about all the time, because it's like in isolation, every single thing that I do, it's genuinely so fun to dial it in to a degree that I can-- I'm just like deeply proud of this tiny little hover state that maybe 1% of people are gonna experience, and then you do that N number of times, then you're like, "Whoa, why does this app feel weird?"

You know? Uh, it, it's, it is the danger of leaning into this moment in time where we kinda do get [00:28:00] superpowers. Really quickly, talk to me about the sound design piece. Are those generated? Did you get that? Like, how'd you think


## [00:28:05] Prototyping sound design

[00:28:05] **Speaker 7:** don't even know. So I, I actually went on-- So at, at first, at first, well, maybe it's, maybe that's not the r- maybe that's not the right answer. At first, I actually picked my own sound. So I, went to artlist.com, I think it's called, found the sound that I liked, uploaded it. It was kind of this like old retro like Windows 97 sound or something.

But then I'm like, that's just... The more I started to save images, the more I'm like, that kind of gets annoying after a while. I need something more subtle. So like last night I was like, you know, I said, told Claude and I used my Prototype MD, um, skill, and was like, "Hey, can you prototype me like 10 different sounds to use?"

And I could click through them and actually test it out and save an image and that sort of thing. And then it, it gave me the, all the options, right? And I picked one, but then I was like, well, I should actually allow the user to pick. So I was like, just, you know, forget it. Just upload all of them to the app into a settings panel and then do it that way.

And then I was like, well, now I need a, now I need a sound for trash. And so I did the same thing for trash, and I wanted a different sound for like when you're adding a [00:29:00] image into the trash can and when you're emptying the trash can. And it did that. It gave me both options for all of them, like at various different levels.

So yeah, that was-- I don't know if they're actually AI generated or not. They just came from Claude. I don't know where they came from. I assume they're free to use, but I don't actually know. So

[00:29:16] **Speaker 14:** prototyped sound before. I don't know why I haven't.

[00:29:19] **Speaker 7:** It can be overdone, yeah. You have to be, you have to be, I think, selective with when you do it, and also give the option to turn it off, I think. Um,

[00:29:27] **Speaker 14:** that's another example though of like the type of design that is now available to designers. Like previously, those level of decisions, I mean, there's a reason I didn't have sound in any products that I have made up until about a year ago,

[00:29:39] **Speaker 7:** Oh, for

[00:29:40] **Speaker 14:** didn't feel like my job, you know?

But now all of a sudden it's like, well, yeah, this is part of the UX. Like this is UX design, you know, and it's available to me, and I can just do it, and I can prototype it. How cool is that?

[00:29:54] **Speaker 7:** Yeah, I wouldn't have a clue. I mean, I wouldn't have a clue how to do any of this, but let alone add sound effects into certain actions and stuff. But it nails it [00:30:00] every single time. You just gotta pick out the sound or it'll pick it out for you, and you can select options. And so yeah, that was one of those things where I don't have sound all throughout the app.

I only have it when you add a new photo in and when you add something to trash. I've kind of stopped it there. But, you know, you could definitely go hog wild with sound and it'd be kind of annoying at a certain point, but,


## [00:30:15] Brett's prototyping.md skill

[00:30:15] **Speaker 14:** All right. Tell me a little bit about this Prototype MD skill concept that you were working through

[00:30:19] **Speaker 7:** I actually was watching a-- I think it was a Claude engineer. Some people watching this might have even watched the same thing. I actually didn't watch the whole thing. I watched, like, the first four minutes. I bookmarked it to watch later. But the first four minutes that I watched was like, "Yeah, one thing that we do..."

And, uh, some people watching this will be like, "This is so old news. I've already seen on my tweet." It's like, "I've been doing this for, like, a year or two again." But I'm like, "I'm new to this. I just started this, so..." But I'm still gonna share it 'cause it's super helpful for me. now when I do anything, when I add anything into the app, that's why I was having so much fun last night redesigning everything.

Or not redesigning, but just refining everything. Was like, I created a, an MD skill file that was like, "Hey, you know, Claude, when I, when I tell you to prototype something, I want you to just prototype, like, five different options." But, like, putting in- put it into one HTML [00:31:00] file that I can just open up from Claude, and I can tab through the dif- the different options.

And so I can actually probably share how this looks. So this is an example of one of the HTML documents. So, like, Claude will just spit out a link to this, and you just put it in your terminal or wherever, wherever you're using this at. And this is, this is, like, the format that I've set up. So you, you always have-- I always have five options. Of course, you can do more if you don't really care too much about your tokens.

but this was an example of last night I was troubleshooting some of the, uh, new save, like, entrance effects, is what this is called here. So when you, when you save an image into the app, like, what it actually looks like. So, like, the first one I can click, you know, this is like a fade and rise, which is ultimately what I ended up going with, right?

But then you have, like, your spring and pop, and then you have your, your develop, and then you have your kind of shimmer, right? Um, and you have, like, this one, which I think was just too much. But this is an example, and then I'll go back to Claude and be like: "Hey, I really liked one, like, number one," and then it would just implement it.

But, like, it would, it would, it would obviously not implement it in this exact [00:32:00] style. It would actually, like, take your tokens and your CSS and, like, put it into your style. So it's actually kind of fun to see, like, how does this actually translate to my app, um, and everything that it did. But this is an example of, like, what I do now before doing any kind of UI work.

And I actually just, I just discovered this yesterday. So I went through everything in my app, down to drop-downs, and went through everything and, and ran it through this prototype skill and came up with way better UI

[00:32:27] **Speaker 14:** Oh, cool.

how specific d- like, do, are you describing anything about what these options should be? Nice.

[00:32:34] **Speaker 7:** no, no. Absolutely not. I said I just want, I, I didn't wanna prototype the way a card en- enters into the, into the gradebook after you save it. and then I'll have to say like, you know, I just do the, you know, just prototype it and it references my skill file and knows exactly what to do.

And of course, you can be way more directive with it. I, I, I was very much like, "Just create me a skill that just prototypes five examples." Like I didn't think, I didn't have this big long like master prompt or anything like that. But this alone [00:33:00] right here, like I don't know how I didn't know to do this before, but completely changed the

[00:33:04] **Speaker 14:** I don't think you're that far behind for what it's worth. Like, I think HTML is kinda having a moment recently. I've started using re- HTML just in the last, like, month and a half

[00:33:12] **Speaker 7:** Yeah. It's just helpful to be able to really quickly see all these things side by side and have it in, in one file. 

[00:33:19] **Speaker 14:** It's, it's almost kind of becoming this third way of exploring for me. Like, sometimes I explore in code, and I'll just generate something that is a part of my product, or maybe I'll spin up like a slash playground route. I do that a lot, especially when I'm working inside of a web app. Or I'll generate things, uh, I use paper, but like on the canvas, right?

But all of a sudden, there's like this middle ground where HTML's awesome. Like it's, it's awesome 'cause you can play with the interactivity, it's cheap and quick to make. You can really quickly see things that, again, like you, Like, I would have a hard time describing five different ways that an interaction should [00:34:00] feel

[00:34:00] **Speaker 7:** Oh, absolutely. Yeah

[00:34:01] **Speaker 14:** Like it's kinda, it's not, there's not a lot of language, at least in my brain that, that, uh, I could reach

[00:34:06] **Speaker 7:** You and me both.

[00:34:07] **Speaker 14:** like exactly. So like all the time I'll be like, give me five." Three of them will be horrendous, and then one and two will be interesting. I'm like, "Okay, actually just give me like three more like number two," and then play with it there, and, and almost have like this little back and forth.

I even down to like five days ago, I've started using HTML not even just for prototyping, but for my actual conversation with Claude. Like when I'm trying to figure something out, I will tell it to just create me like a visual answer in HTML, and then I will just read this webpage and just start...

Like I u- I dictate everything. So I'll, I'll just start Super Whisper, and I'll just start reading and talking about it. And I have it specifically bake in like open-ended questions or things it wants me to weigh in on as these little like blurbs, uh, almost like a Notion style call-out, and [00:35:00] then I'll just, I'll just talk, dump the most raw, messy prompt you could possibly imagine, and then my cursor's just focused in Conductor, and I'll hit Option Spacebar again, and then it just dumps this paragraph.

And then Claude will spin up another HTML. a couple examples. One is I was trying to design this card, and the hardest part about the card was not even necessarily the UI, it was thinking about what metadata can I even reach for? 'Cause it was like, I'm just...

It's like a more technical product. A- a- And I was just having a hard time wrapping my head around, like, what do I have available to me? Like, help me think about how I can communicate things. And it just created this rundown of all of the metadata and then, like, a tiny little visual mock-up of how I could use each one.

And it gave me, like, three times as much as what was in my head and sparked all of these ideas. And then I take it and I'm like, "Okay, let's, let's, like, prototype over here," you know? it-- I feel like I'm just barely scratching the surface of how I wanna use HTML. I think it is the thing right now [00:36:00] that I'm most excited about in terms of where I see opportunity to improve my own process.

[00:36:04] **Speaker 7:** Dang, especially since Claude can't do image generation. It try-- It like, it's funny that it is pretty creative the way that it tries to use text in like a visual way. Like it does that sometimes with me. I'm like, "Okay, that was helpful." But like I've never thought about leveraging like an open-ended HTML canvas to be able to visualize things.

That, that's, that's, uh, that's amazing.

[00:36:24] **Speaker 14:** Another little pro tip is the value of having a single folder of dummy content, and then you just tell Claude to use that in the prototypes, and you get realistic imagery. Even when I'm generating things in Paper, I'll like-- I have a folder of SVG logos 'cause I use a lot of like Figma, Lovable, V0, Claude logos in my own product.

And then I have, um, a folder for like the landing page that has a bunch of mock-ups and faces. And so I just say like, "Hey, design with that." 'Cause otherwise it'll only give me the, the pr- or it'll like, it'll use like a heart emoji for Lovable. But if I say, [00:37:00] "Use these folders from the landing page," then all of my prototypes become more realistic.

[00:37:05] **Speaker 7:** dude. Yeah. I, it's, it's just, it's just so evident we're just all, all of us, regardless of how experienced you are, are just scratching the surface of this thing and still figuring out how to, like, use everything at our disposal. It's, yeah, I, I feel like every day I have a new epiphany and I'm like, "Holy crap," game changer after game changer idea, and I don't know.

It, it's, it's, it's super exciting and it's also very distracting. But, you know, I like, I'm trying to keep up with client work and I'm like, but like in between projects, I'm like, I'll award myself like 10 minutes to build in, in Claw. I haven't used Conductor. I don't know how any of that works, 'cause there's still like a world of products in A- I haven't-- I don't use agents even, like, and now it's like Loops is the big thing.

Like I don't, I don't know. I, I'm, I, I, I'm one s- one, one step at a time. I'm very comfortable in Claw. I'm

[00:37:47] **Speaker 14:** us- are using, like, the Claude desktop app right now, or are you using Claude Code in the terminal, or

[00:37:54] **Speaker 7:** just the browser and yeah, terminal. Yeah, I use the

[00:37:57] **Speaker 14:** Yeah. 

[00:37:57] **Speaker 7:** The amount of times I have to prompt Claude, "Hey, please give me [00:38:00] the correct, like the command to open this locally."

'Cause I don't n- I'm not even interested in memorizing the commands. Like, so I'm trying, you know, I-- and every time I start a new context window, I have to start with the basics of like, "Hey, I don't know how terminal works. You need to tell me very specifically how to do everything." 

[00:38:15] **Speaker 14:** sometimes I, uh, I am screen sharing for an engineer who's helping me, like, debug something. And it's the most uncomfortable experience because in front of an engineer you have to be in terminal and then, like, realize like, oh, I, I don't actually use any terminal commands. Like, I don't type Git pull or, uh, a- anything.

Like, I just describe every single thing, and then I wait for the spinner for Claude to do it

[00:38:39] **Speaker 7:** but dude, I'm like, I- it, it opened my eyes to be like, how do developers memorize all this stuff? You know, I'm like, there's so much here and so many things that I've encountered that the commands were so big and there's so many different ones. I'm like, I would have no-- Like, where do you go to to find this stuff, to like learn this stuff?

Thank goodness, like it's all just there in Cloud [00:39:00] Forest. But it really, it gave me a new appreciation for developers and that they would just know how to do all of this.


## [00:39:06] Strategies for icon libraries

[00:39:06] **Speaker 14:** This is random, but what icon library did you land on?

[00:39:08] **Speaker 7:** I think I landed on Lucid I had most of everything that I

[00:39:12] **Speaker 14:** that link. I literally, right before this call, I was like, "Maybe I should play with Lucid," 'cause I'm working on a, a new Mac app actually. And I was like, "Man, should I..." I always use Phosphor. I use Phosphor icons for everything. I'm like, "I should branch out, man. I should branch out." And so I, I just was like, "I'm gonna try Lucid."

[00:39:29] **Speaker 7:** honestly, I haven't found an icon set that I, that I love. Um, I see all kinds of icons in other products, I'm like, "I wish I knew what icon set they were using." there's probably a way to figure it out, but yeah, I just use the basics like Foster. I use Streamline icons for all design work.

I landed on Lucid 'cause it, I, I, I was tired of experimenting. I'm like, "This works for now."

[00:39:48] **Speaker 14:** Yeah. They have a, they animated, like they had built in animations, which is

[00:39:51] **Speaker 7:** Do they? I didn't know

[00:39:52] **Speaker 14:** Yeah, there's like a, there's like an animated Lucid library that I found where I'm like, "I think I'm gonna play with that." Fun fact, I [00:40:00] actually in the last few days, for the very first time, generated an icon that I used in production. And I'm kinda feeling like we're close to being able to point at an exist- 'cause I'm using the Quiver API in Paper. So I have Claude generate through Quiver on the Paper canvas, and I can point it at the existing icon library and then say, "Hey, match that style." Like I want 16 pixels, I want like roughly 13 to 14 pixel vector inside of the bounding box, and I want 1.2 pixel stroke.

make it all consistent, you know?

[00:40:35] **Speaker 7:** yeah

[00:40:35] **Speaker 14:** and then it can just generate like 10 options for an icon, and then I just pick one. In the same way that you're doing with the HTML, and I'm like, I wonder, if I was starting an app from scratch today, it would be very tempting to try to generate

[00:40:48] **Speaker 7:** To just do them all. Honestly, like I've used Quiv- I've been using Quiver for other things, um, and it's, it's good. I think the things that I'm using it for hasn't really suited the app yet. It's l- like it's a little [00:41:00] more complex line artwork. Why I haven't thought to use Quiver for icons up until this very moment, I don't know.

But that's... Yeah, you've, you-- I've seen your stuff, like you like the, you like the paper stuff. I haven't really gotten into paper that much other than like for design work I use it for some things, like with when I need shaders and things. But like I really haven't used paper in the way you use paper at all, and I feel like there's definitely something there for me.

But like I said, I'm so like, I'm so engrossed in what I'm doing right now. I'm like, "I'll get to that

[00:41:28] **Speaker 14:** Yeah, you kinda gotta pick your battles a little bit,

[00:41:30] **Speaker 7:** always, I'll always be like three miles behind everybody else, but I'll get there, right? Um, that's just the way, that's the way it is, so.

[00:41:37] **Speaker 14:** Okay, let's zoom out real quickly. this has been a heck of a two months and change little window for you where you've done what previously maybe you would-- I mean, it's a hard thing. I'm not even gonna... Obviously, you're able to experience what AI makes possible, and maybe there were t- parts of the process that were just way easier than you thought they would be or way less scary than you thought they would be.


## [00:41:58] Brett's thoughts on the future of design

[00:41:58] **Speaker 14:** But you still did a hard thing. You went zero to one on a Mac [00:42:00] app, and it's good, right? So how has that journey impacted the way that you think about the future of y- and not only the role, but also, like, the value that designers bring to the table?

[00:42:12] **Speaker 7:** The biggest shift for me is going from, AI being a prompt and just build me something tool to like... It's like this like, um, the way that I've been thinking about it is like the most patient collaborator that you could ever have that builds at such hyper speeds that like humans could ever build at.

And you just have to like know how to direct it. And also like taste and judgment, not only in like what to build. But like how to go about it down to just like the finite UX/UI decisions.

it's made me like less scared of the future for designers and more hopeful, I think. Like before I really didn't quite know what to make of it. I didn't... I knew that th-there were certain things at risk. I wasn't quite sure who would be affected and how I would navigate that. Like it's-- I'm always trying to stay like two steps ahead of, of like the industry and [00:43:00] being like, I, I need to prepare for what the future holds, and quite honestly, things are moving at such a fast pace right now, I don't even know what that looks like in a

[00:43:06] **Speaker 14:** Yeah, good luck

[00:43:07] **Speaker 7:** To me now, I'm still trying to figure out how this, how this is in-incorporated into my client work, which is, what pays the bills for me. It's like it's my thing, like that's what I do. This is all, all of this is just for fun for me, right? This is not like I don't rely on this to, to make a living off of.

Like I don't need to build anything. But how do I incorporate this into my client work is like my next question that I'm asking, and what that actually looks like, right? Like that's a much higher risk type of service to offer, and how do I go about that, and can I do it myself? Do I need to finally like scale and hire someone to help me?

it's something that I'm still digesting, figuring out how does this affect the industry, but also like how does it affect me personally? what does my role look like in a year or two or even in a few months? I feel like these tools in the hand of, of a designer and someone with good [00:44:00] taste and good judgment is just crazy. Like, it, it really is crazy. And unfortunately, like if you're just in the Twitter bubble or wherever you're at, you don't see a lot of that. Like most of the people that are like spouting off about these tools don't actually have any of those things.

They're either like, I don't know, just a mouthpiece for AI companies or they're like, they're just like strictly influencers, not, they're not, they're not designers, right? You don't see too many... I know you feature a lot of them on your show, but those are, those are rare. Like they're, they're oftentimes not at the spotlight that they should be at. And so I think that's partly why I have been shy about using it up to this point and why it's taken me so long, ironically it's like the thing that has stopped me from getting into Claude is actually gonna be the thing that makes me most powerful with it, like in that sense of like I don't, I have a very low tolerance for like low quality work.

being able to like leverage all the skills that I've developed at this point to like direct AI in the direction that I want it to go is the [00:45:00] most exciting part about this for me. And it just wasn't something that I was aware of before, and I had really quite, uh, literally underestimated it to a high degree.

[00:45:08] **Speaker 14:** Yeah, I think that's one of my main takeaways from this conversation is the control piece. Like all of the previous hesitations are where you're able to shine now as a builder, and all of that, that final like 1%, 5% details. Everything that you've made that makes the product feel amazing and feel considered, and it's like that's all just been opened up to you all of a sudden, which is so, so exciting.

[00:45:32] **Speaker 7:** maybe it was there all along. Maybe, maybe AI's advanced to the point where it's now, like, it's actually, I don't know, smarter in some way or better at design in some way. I, I don't think, I don't think that AI is-- It's still not good at design, but it's good at taking direction. And as long as you can direct it, clearly and you know what you're doing, and you're making the right decisions, right?

Like, you can be good at directing AI, but you, you may go d- be going down a bad road that, like, isn't very tasteful or isn't very aesthetic or anything like that, which is, again, the [00:46:00] majority of stuff you see online. I don't know. I'm, like, wanting to go back through my entire app library of use- that I use and, like, and just, like, re- rebuild everything, 'cause it's just, it's so much fun, having that level of control.

Which again, just feels so weird and backwards to say, 'cause a month ago, a month and a half ago, I would not have thought that at all. I would've thought that you have zero control. Like, that's the whole problem with AI is that you don't have control over anything, and that's where Figma comes in. you have control.

It just, it, like, it does take time. Like, it takes a lot of time and a lot of iterating and a lot of, like, troubleshooting, but you actually get a working product in the end, which is fun as heck, so.

[00:46:32] **Speaker 14:** I appreciate you coming on and sharing a little bit about the journey, and it is amazing what you built. You've-- You should just be proud, you know? It's cool. Like, I, I really hope that this conversation inspires a ton of people who maybe have either been on the sidelines or loosely tinkering but haven't actually committed to shipping a thing, right?

Like I, I, I'm so inspired by the journey and what you've been able to do, and I'm excited to see what you build next

[00:46:56] **Speaker 7:** Absolutely, man. Thanks for having me on

