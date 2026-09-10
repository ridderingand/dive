---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: nPyxVMd1LIA
slug: 2026-03-19-kris-puckett
source_type: descript
source: descript://Kris Puckett
guest: Kris Puckett
host: Ridd
title: "Becoming an AI-native designer"
published: 2026-03-19
duration_min: 53
generated: 2026-09-10
generator: dive-club-ideas
---

.​[00:00:00] 

--​

​


## [00:00:15] Kris's journey building Epilogue

[00:00:15] **Kris:** the goal had always been to design my own and build my own software.

And like I had had this. Dream for like 20 years, to be honest. I got my first iBook G four in 2005 and I thought it was so cool that people made their own software, but you have to know how to code. And that was one thing, like back in college, it was a freshman and I was like, I'm gonna go learn how to code Mac apps.

OS 10 was the thing that we called it. Then you had to learn a bunch of different programming languages, like as an objective orienting programming language, which I did not understand what that meant when I was a freshman in college. So I went to Barnes and Noble, like any goer does, and you're like gonna go to the books book section.

They have all these like PC books and on the very bottom right corner with like 10 books on, you know, developing Mac [00:01:00] software. And I didn't understand a single thing that they were talking about. And so I was like, oh, I'll take a course, I'll take like a CS 1 0 1 course and it was all very engineer math heavy things that I don't naturally gravitate towards.

And I kind of convinced myself like, I'm not good at doing this. Like I'm I, this is not for me. I'll just focus on other things. But that dream had kind of always been there of like, oh, how cool would it be? And then the iPhone came out and, and the app store came out and I was like, I want to be someone who makes these things.

And so I constantly would try, like whether it was Treehouse or other courses to learn Swift or other programming languages to kind of help get there. And I just never really clicked. Uh, and I'm not entirely sure why, but what ended up happening this summer, I was using one of my favorite tools, called Perplexity, been using it for a few years and I was using it in ways that they had never really intended it to be used, which was like I would create spaces for each book that I was reading. I love physical books. I've always been a big reader and I love being able to ask questions about the books and like big pen and paper person [00:02:00] and physical things.

But then you miss out on the power of like the digital. What ends up happening is I fill out my notebooks and then I forget what questions I had or I wouldn't actually follow up and look 'em up. So I was actually on an airplane flying and I was reading a book and I had so many questions about it and I'm using perplexity spaces to create individual little libraries for the questions I'd have.

But you can't add quotes and you can't add notes and it doesn't link together. And I thought it'd be so cool if like the books that I was reading, they'd all link, in some way and I can kind of keep track of it. Good reads never really like hit it for me. The design is unfortunately like not my jam and then it's not really built for what I was trying to do either, which was like a private version of me just asking questions.

And so I wanted a, a way to do that and I just. It kind of clicked like cloud code had just come out. Why wouldn't I try to do this? So I actually started building an a book reading app in Cursor, and I was running into so many brick walls, like it really wasn't at the time built [00:03:00] for developing iOS apps. And so cloud code had come out and then saw on Twitter a bunch of people like raving about how much better it was for this specific type of like creative flow. So I gave it a shot and what I ended up finding was I could build my ideas through that so much more effectively than I ever could before.

And I was able to get started on this journey.

[00:03:23] **Ridd:** Talk to us a little bit about how you got momentum, like going from, I wanna build this thing. There's so many different paths that you can take in terms of where do you start, how much do you try to like plan it all out upfront or just take little baby steps? Like what were some of the learnings that you encountered on this journey of going from an idea that previously you were incapable of bringing to life to, you know, we're looking at this thing on the screen here and it's beautiful.

[00:03:49] **Kris:** Oh yeah, thanks. it actually led to a pretty fundamental shift in my creative process, and I realized how much I was like self-limiting my own creative work by the [00:04:00] phrase, like, I don't know. And I was constantly like waiting and I wasn't sure what I was waiting for exactly, but there was this like need for permission.

And what I found just working with Cloud Code was mostly that I don't need to have flushed out plans. I don't need to actually have like the perfect spec docs or pr d docs to get. Cloud code to start working. I think probably the more hot take I would have here is that I ended up finding that cloud code was a really effective like co-conspirator in this process, like co-creator with me.

That there are times that in epilogue, the app that you're seeing here, where it would spit out a piece of UI that I probably would not have designed on a canvas that way myself. But I actually really liked the initial thought and so then I could just start like reshaping what it was doing until it was something that I loved and I was proud of, and I thought like this was more representative of the vision.

So what I ended up doing was realizing I could just ask questions. So in terms of like getting started or getting the momentum, I think it's pretty easy to get momentum going when you start seeing progress happen pretty quickly. [00:05:00] But for example, this is a, I'll come back to this welcome sheet in a little bit, but on the library grid that we see here.

This was really, really like fun to get set up because I had never done anything like this before. I'd never worked with APIs before. I barely knew what an API was, to be honest. And so in order to get an iOS app or any app to pull book covers from books that you would like to search for or read in your library, you have to connect it to some source of information that is up to date.

And in our case, it's Google Books, API. And so, for example, if you were to search for the Odyssey, you would get a ton of different results, but I wanted this specific cover and so I'd be able to filter through the results to find what I'm looking for.

Connecting the service, like getting momentum. The minute that I was able to tell cloud code, like I don't know how to do this, I literally just need you to connect this service somehow, it would walk through the steps. Okay, you need to go to Google Books, you need to go to the API, you need to create a key, copy the key, do the thing, let's make it secure.

It would walk me [00:06:00] through all those pieces. That is a huge, like fuel in the tank for momentum to be like, oh, okay. Oh, I'm doing stuff. I'm doing stuff. And then you see it show up on the screen, you're like, this is wild. Like this is, it's working. I'm literally telling it what to do. And if I get stuck, I can literally just say, I don't know.

I don't know what happened. It's broke. Can you fix it? Like, I don't, I don't know why this is not working.

[00:06:19] **Ridd:** I take a screenshot of whatever I'm looking at, and I just say, now what?

[00:06:23] **Kris:** My screenshot folder is,

[00:06:25] **Ridd:** Yeah, it's bad. It's bad.

[00:06:27] **Kris:** like un unhinged for sure. if anybody was to ever go through it, they'd be like, you have so many Small little pieces of UI that don't make sense.

so yeah, it was easy to get the momentum filled and then the, I don't know, became this really wild like invitation for a deeper conversation of like, if you look at, this is Xcode. If you've never looked at Xcode before, uh, or even if you're used to tools like Framer or Figma, canvas based tools, This does not make it easy to figure out how would you build your app? Like how would you get it into simulator? Uh, there's a play button up here, [00:07:00] that's great, but you have to actually know like where you targeting it to, and then don't even start on like how you actually upload an app to the app store.

on the backend, it's wild. And if I didn't have cloud code walking me through the steps the first time to do it, I would've just never been able to do this.

[00:07:14] **Ridd:** I appreciate the honesty and I, I think that's why I like this story so much is AI in so many ways just allows us to reach further and, and take on more ambitious ideas. And like, this is pretty ambitious. And it's not even just about getting like Google Books working. I mean, even some of the design details that I noticed, like you have these, uh, I think you're using like metal shaders even.


## [00:07:34] Using AI to build metal shaders

[00:07:34] **Ridd:** Like talk to me a little bit about that because that's something that for me, AI has made very interesting all of a sudden where it feels much more attainable to have these interesting motion and, uh, animation effects. Like for somebody who's like, I want to do something like that, literally no idea what to start, how did that part of this process work?

[00:07:53] **Kris:** What I really wanted and like the entire intent to this app is to have this ambient reading companion. And ambient can be like, [00:08:00] 'cause like a wishy-washy word, but it's like it's there but it's not there.

And I kind of wanted a lot of the UI to feel that way. And so the book covers really felt like something that would be a natural way to make it feel like. Kinda alive and with you. Uh, and it wasn't until recently that I was able to get the metal shaders to work. I don't know anything about metal shaders.

So what I did was I used this parametric design technique to be able to pull in one, I had to teach cloud code about metal shaders. So what I did there's a great YouTube video out, uh, around metal shaders, like intro to metal shader.

And I've got this video research agent that I created that summarizes all the copy, pulls it out, and helps me create a skill. And then there's the book of shaders, which is all the copy content in there. And so I would, I read through all that, didn't understand most of it, but I would copy paste it, like selections to it, to the research agent to develop the skill.

So I taught cloud code, like, here's everything about shaders that is available on the internet. Like let's compile it all into one skill. And then [00:09:00] let's take this idea that I have of being able to extract the book cover colors, using Color Cube to create a mesh gradient that we apply a metal shader on top of.

That's literally like how I started this conversation this past week with Claude, it ended up building this. And then I wanted to be able to adjust all of the parameters so I can adjust, um, like color temperature. So make it darker, make it more prominent. I can adjust like the origin. So like where is the shader kind of coming in from?

and all of these pieces just help me fine tune, you know, what exactly I want to see in the shader itself. Then I can copy the parameter values and go back into cloud code and say, okay, I found like the tweak that I want now go ahead and update it and it will update it.

Then I can preview it and then we can make that like the hard coded value. And I've also got like different presets to test out of like what would actually look really good so we can kind of go through and see. I don't really like any of these with the color palette, but that is the general [00:10:00] idea.

And so my process was to like, I don't know how to do something. I don't know. It becomes kind of a superpower 'cause I'm assuming I could work with cloud code to figure it out. LLMs are gonna hallucinate like crazy, you're gonna make stuff up. So I'm constantly also rechecking its information. Like I'm asking it all the time to like grade your own plan.

Did you hallucinate, did you pull from accurate sources? Just because I don't trust 'em, like anybody in this kind of, you know, trusting the, uh, the AI fully is like gonna need to check ourselves on that. But the output I think is pretty solid. I'm really pumped about this. Uh, and another piece of this was that I wanted to make a welcome card.

And again, this is mostly for me at this point. So when I read sometimes dad life, work, whatever I behind on my reading.

And so I wanted a way to like have a little welcome back card. The welcome back card was initially, I'll pull up, uh, I'm sure I've got it here somewhere. This was the initial version of the welcome back card that I designed. So this is like the [00:11:00] iteration process that I would go through, which is tell clock code.

Okay. I wanna create a welcome back card. I want it to have the book that I was most recently reading. I would love it to have a quote that if I have any saved quotes related to the book, those surface. and then call to action, maybe some stats. So this is what we came up with initially, and it's using my ambient amber.

Theme here. So the idea of like epilogue is like you buy a fire cup of tea book. It's very like kind of warm was the, the orange amber glow to it and it looks good. But I kind of thought, wow, I just made this a cool meta metal shader system that looks really good. I'm really proud of, I would love to see that actually on these welcome back cards themselves.

So we kind of kept refining, I had to change some of those parameters specifically for the card and this is what we ended up with and I think it actually looks a lot better. 

[00:11:47] **Ridd:** Maybe even zooming out, since starting to work on this, you're now at Stripe, so having put in these reps, having, you know, leaned into the, I don't know, like what did this process of building epilogue unlock for you as [00:12:00] a designer that you are now bringing into your practice in your day job?


## [00:12:03] Building workflow tools with AI

[00:12:03] **Kris:** in the process of building this app and doing this, I kind of found that like, I actually don't need permission. Like I, I can just go build my ideas. I didn't realize how powerful that was until I started seeing like, I have a app in the app store now.

It's not like. Super successful by any metrics, but it's been great for me. And so like success, I guess we could define it very differently, but it has taught me a lot that I don't need permission to build my ideas. I don't need to worry about forgiveness. Like that's a weird power dynamic. And in terms of like the work and how it's showed up in my role, I think especially at Stripe, it's helped me, just kind of take a little bit more like initiative and risks and chances or like I'm putting myself out there, I'm creating these things, whether it's I dunno skills for Claude for the team or any way I can kind of fill the gap.

But mostly internally it's just built a lot of confidence that like if I'm stuck on something, I don't know, it doesn't have to be a door that's shut, it can be easily a handle that I just turn and like walk through to figure it out. And I know that I have like these [00:13:00] other resources like Claude to kind of help me.

[00:13:02] **Ridd:** You mentioned the building skills for the team, which I think is kind of interesting because so often in this show, you know, what building with AI looks like is, is building, you know, maybe a one-off design tool or some kind of a creative pattern generator.

And those are all amazing. But I, I thought it was interesting that you pointed permissionless building almost more on like internal processes, ways of working, moving the needle in those ways.

[00:13:27] **Kris:** the easy thing to use AI right now for is to generate. ideas to build something like a product, an app, website, whatever it is. And it's, I feel like it also just does really well on Twitter. Like there's a lot of fun in it. It's fun internally. Uh, I think every company that's doing a lot of design stuff right now, they all have their internal tools they're building that are like, we built our own prototyping tool that, you know, teams are using and like, that's all really cool.

There are other massive unlocks to me for AI around workflows around like how, whether it's content [00:14:00] design, things that you wouldn't see organization like analysis. So these cloud code skills, you can, I mean you can create anything that's repeatable pattern you can create a cloud code skill for. And so I try to find ways to fill in the gaps of like, if there are people that are kind of struggling with.

Time management, you can create a skill for that. Like there's so many different pieces of it that it doesn't have to be super technical, in order to take advantage of cloud code. And I think that's the one thing that I am trying to like help any team or designer that I talked with or work on on this because I think we're still so early.

I'm sure a lot of your guests that you have on, and I've watched a lot of the, I mean, I feel like every episode, I think we are all very early in the AI phase and we all feel like this is all very normal. I think there's a very large amount of people out there that are still, like their usage of AI is, well, I talked to Chad CPTA couple of times where I asked some questions and it has completely like, not even scratch the surface of what's possible, whether it's building an iOS app or building a way that you would, organize your day, like cloud code can do so much more for us.

[00:15:00] So a great example too was like, I created this. Process for pulling out all of the tasks that have to be done, whether it's through Google Docs or like all the different pieces of cps because our context is so like large now, like if you're in a large organization, you have like Google Docs, linear tickets, if you use Linear or Jira or whatever management system.

All that stuff is so spread out and all the communication is so spread out, but you can connect it to cloud code to have it pull and compile all those things into a single like unified source. Or even personally for me, like I started using Linear to have cloud code update its own statuses. So I had cloud code A, create all the projects.

B, take my like brain dump that I had of here's everything I want epilogue to do, let's go and like build a bunch of tickets. It wrote all the tickets for me, and now I'm able to just have it go through the tickets every morning before I start my day. Like I come down, I can get it fired up on a couple of things, then I can come back, see what's done, review it, knock it off the backlog like.

Cloud to can do a ton of those pieces that take a ton off of our, mental load so we can focus on the work that [00:16:00] we really want to be doing. Uh, and I want to help teams unlock those pieces.

[00:16:04] **Ridd:** all right, so let's play a little role play then. I'm coming to you, I'm a designer. I'm maybe leading design at a startup. There's like four of us and you know, a team of 40 total, you know, smaller company. Basically, my usage of AI is I've just started making like a pattern generator in lovable, and I use chat PT chats to ask questions, and that's about it.

I don't have anything repeatable or system level implemented, and honestly, I don't really even know where to start. How would you help me take those first few steps?


## [00:16:38] How to start building systems with AI

[00:16:38] **Kris:** That's my, and that's my favorite too. 'cause the, like, I don't even know where to start, is The greatest starting point. And it is so simple and like you're gonna, people are gonna hate this. you just have to tell it. I don't know where to start. And like it will help you. so cloud code, for example, has an ask tool question, ask question tool.

and it is built into the system, but it will, like, if you ask it, I want you to ask me a bunch of [00:17:00] questions. I'm gonna tell you who I am, tell you what I do. I want you to ask me a bunch of questions, help me figure out where you can help me. It will do that and it will spit out a handful of, maybe a couple generic ideas, but it'll probably spit out two or three that will switch something on your brain of you're like, I, I had no idea I could do that thing.

I didn't know that was a possibility. Let's explore that. And then you start digging into it and all of a sudden you're like two hours into a five second question that you typed in and you're building out these like new systems. And so the primitive, the foundational piece is, I don't know, is actually a great place to start I'm a design lead at a startup. I've got four people that you know I support and here's what I do. Here's my general day. Help me figure out where you can help me. It will change how you interact with this tool faster than it using lovable will and like not a knock on lovable or any of those other tools.

Like they're really fun for creating visual artifacts and creating the actual output. But in terms of understanding and unlocking new ways of working for you, it's starting with that [00:18:00] foundational piece. Uh, and then if we wanted to get more tactical of like other things it can do I think a lot of times we don't think we've got repeatable patterns.

We do. We're just not great at identifying them. And so that's another piece that I think Claude Code can help with, where you're like, here's my day, here's my calendar, here's like where I spend most of my time. What am I missing? But what am I missing? Piece is like a great question to ask because at their core, LLMs are just pattern matching and so they are fantastic at very quickly identifying patterns.

Even though the human brain is an unbelievable, like the greatest pattern match in history, we still have these gaps. And so you can use AI to become this mirror. That's like reflecting back at you. Some things that you might be missing about yourself and your work and where you're at. One thing that LLMs I don't think do really well at is like creative exploration, but you can teach it to do divergent thinking very quickly and that is a huge unlock for teams as well.

So like, you know, the standard for designers right? Is crazy. Eights like, it's such a [00:19:00] fun, maybe not anymore. Maybe that's like a age I'm showing in my age. But you used to like,

[00:19:04] **Ridd:** Honestly, we knock it. I think it's still cool.

[00:19:05] **Kris:** think it's cool. Like it, it plays, I mean, I dunno about you like the idea is you used to draw like on a whiteboard or a piece of paper.

Like if you don't know what crazy eights are, you draw like four boxes. You take one idea and then you try to like just quickly like. Create variations through that. LMS would actually be really good at that. You just have to kind of communicate like that's what you wanna do. Um, so there's things you can do to like teach that.

But I think foundationally people don't love this advice, even though it's the best advice forum, which is if you don't know where to start, you just start typing Like that blinking carrot is this invitation for you to just tell it like, I don't know. I don't have any idea how you work. Here's how I work.

Like what can we do together? And I guarantee you'll get some interesting ideas. And if you were to follow up and say, that's cool, it's super surfacey, let's go deeper, then it really starts digging in more and more. The more context you give it about your work and what you're trying to accomplish, the better the output will be.

And really you just need a little bit of gas in the tank to get [00:20:00] started. And then the next thing you know, you've got like this full iOS app that has like a bunch of LLMs integrated into it and it's doing like metal shaders, like that's just, it's a wild entry point.

[00:20:09] **Ridd:** kind of lighting up whenever I make you put on your consultant hat, so I'm just gonna keep leaning in here and I'm gonna give you another, not a hypothetical. This is very much so my situation in a workflow that I've been experimenting with more recently, which is having Claude, maybe I have, you know, an area over here, I'm building something, but maybe I want to explore visually, some permutations of a component or something on a canvas, and actually have it kind of work on things in the background.

And I'm, I'm finding myself in this situation where I have this prompt pretty often where it's like, Hey, I have this thing. Can you just basically, I wanna say crazy eights, like, can you just help me see this different ways? Like, I just wanna see this differently. And, and it even ties back to something that you were mentioning earlier where you were like, maybe you don't, you know, love that first thing that Claude created design wise, but it helped you, you know, see something slightly [00:21:00] differently and took you in a direction you wouldn't want to go.

I am finding that as a value proposition with ai, like repeatedly. Now my question is. how do I invest in that type of prompt that I keep going back to the well on, which is like, Hey, help me see this differently. how do I push past the thing that I have and, and broaden my horizons for what this spectrum of possibilities could be? Is that an opportunity to build some kind of a skill or, or just anything that I should be doing to A, raise the ceiling for that moment, and then also B, allow me to take that step more efficiently.


## [00:21:31] Creating skills with AI

[00:21:31] **Kris:** Yeah, 100%. That's a great, great call out. Skills are at their core, just instructions. So if you've seen online people talk about skill files, uh, skills.md, and they're files that Anthropic created and then now I think are a standard across, the other frontier models like Gemini and Chacha, PT and the others.

And it's just a markdown file. It's just text and all it is is it's a set of repeatable specific instructions that augments what Claude Code can [00:22:00] do. You can call the skill up. So for example, if I go into mine right now, I've got a handful of skills in here. So I've got like, uh, this liquid glass skill that I made, the liquid glass skill I had to create because it was a repeatable problem, especially early on in this. So I made the very stupid decision of making an app that was specifically for me and I was really excited about iOS 26. I was like on the fence about liquid glass, to be honest.

When it like was announced, I was mostly excited about some of the foundation model things that Apple was doing. So the on-device LLMs called like the Apple Foundations framework. And in order to test that out, well the idea was what if I could use that to help some of the things I want to do for epilogue.

And so when I started working on this and iOS 26 came out. Cloud code did not have access. Like all the information around liquid glass and how to do these patterns properly was not available yet. Apple's developer library, Apple's [00:23:00] like knowledge base is all in JavaScript. LLMs don't read JavaScript very well, so if a page is entirely in JavaScript, LLMs have a really hard time.

Like I can't just paste the link to Apple's developer docs and it reads it. It really struggles. And so what I had to do, like I kept pasting. I even, I think in my clipboard, there's like some liquid glass principles that I was constantly re pasting over and over. And this is one of 'em around different shapes to use, like how to use it.

and so I was always doing these things when skills came out and allowed me to offload all of the information that we had spent a ton of frustrating conversations, together cloud code and I to get the nav bar, to do the liquid glass thing and to have custom icons and. All these pieces, I can now teach it how to do that.

And that's what a skill is. And so the skill is loaded when I mention liquid glass. 'cause you can tell cloud code in, in the foundation, file the Cloud MD file to be like natural language associated to things. So I don't have to always invoke the [00:24:00] skill. So I don't have to do the forward slash command to get my skills up.

I can just tell that I'm working on liquid glass and it will pull the skill up to be able to understand the information. So for you or for anyone else that's doing these repeated patterns, a skill is a great way to do that. And the best part about skills is that you don't actually have to know how to create a skill because there's a skill creator built in.

You can tell CLO code. I wanna make a skill and it will ask you what do you want to do for the skill? And you will be able to tell it. So for you, your repeated patterns that you're trying to do. And then it will come up with a plan and then we'll output the skill.

And then you can actually have it review its own work. Like what would take this skill to be like an A plus based on the intent that you heard me say and like give it yourself a grade. And then it'll usually come back and it'll say like, maybe a B almost, I feel like is like pretty humble about it. So you're like, okay, cool.

Like I don't want B work, I want a work like Clyde, we have no B players on my team. And then it will refactor it a little bit, give some thoughts of like what it could do that'd be more advanced. [00:25:00] And then you have a skill and it hot loads, which means you don't have to like log out of Claude to use it the minute that the skill is installed in the folder, it's good to go.

And so anyone could do that. Like if you have repeated patterns that you're doing, often you can do that if there are like code or prompts that you want to do. so less instructions and more just like every day I'm around this time doing this specific prompt. You can create a loop, uh, that I think is just forward slash loop.

And these run prompts or slash commands on a recurring interval. So you can tell it like how often you want to do specific things and that will run a specific prompt for you. This is different than a skill where a skill is like a set of instructions and a skill can include prompts in order to, to accomplish the thing.

But this is really meant for just like you have a prompt, like my prompt for every morning is I want you to review my health metrics, look at my HRV data and tell me like how unhealthy I am and it will come back or like tell me my energy levels and that's a prompt that I could use [00:26:00] on a loop if I want.

I've got other systems that I use for that, but 

[00:26:03] **Ridd:** you've opened up the new rabbit hole now, which is more of the personal side of things, which I think is really interesting and Something that I'm enjoying in this, in this conversation is that it's, you know, we're, we're, we're broadening outside of maybe what I would typically give an answer of in terms of what it looks like to be an, you know, like an AI native designer.

You know, it's like, well, no, there's just so many different opportunities that you can leverage this stuff if you just know what tools are available and, and, and know how to ask the right questions. And so you've mentioned loops. I have no loops in my life. I have really no idea what this could even unlock.

So keep going a little bit more into like, how are you identifying opportunities to use AI in your personal life


## [00:26:43] Using AI to level up your personal life

[00:26:43] **Kris:** I just go on these walks and I'm like thinking about my life and I'm thinking about, I'm a dad, I've got two kids. Like I want to be a good husband. I wanna be a good father. Like, I want to be in the best possible shape I can be.

I wanna like create everything in my head. All these like swirling pieces. And the thing that AI has [00:27:00] really helped unlock is that instead of, telling my wife the same repeatable things over and over and over, uh, like, oh my gosh, I just wish I could like, make an iOS app. I can walk through, go on a walk, brain dump and then ask cloud code.

Like, okay, here's everything I just was, I've been thinking of in this last hour. Where can we get started on? And to your point or your question around like, what does it mean to be AI native in this? I feel like it's mostly just. We could take the cliche route of like, this is what AI native is right now.

Like I really wanted a really nice blur and I wanted a nice card open for truncation and I spent ridiculous amount of time figuring out how I wanted this to look, even like the more, less animation to feel ultra polished. So I spent a lot of time with cloud code polishing this. That is definitely one aspect of being like an AI native designer.

Not everyone in their life is going to be interacting with this. Like chat surfaces are only going to be more and more prominent despite, I think what others might say in this space. I really believe [00:28:00] we are talking right now, and that is the only way the humans, outside of like the written word, mostly communicate some nonverbal communication written word.

But for the most part, like you get together with friends and family, you have a dinner, everyone's talking. And so I, I just fundamentally think like that is the easiest ingress for people to work with LLMs, so that's not going anywhere. So AI native has to be beyond just like I made a really cool shader where I made this like dither effect that every other person is making. I was doing that today and then I was like, oh my gosh, this is like, why am I doing this? Like, there's a hundred of these that are way better than what I'm making right now. So I'll let someone else do that and just borrow and like give them credit. to answer your question, like I mostly think through the friction points.

Personally, I am not unique as a person. every problem that I've had has been experienced by thousands and thousands and billions and billions of people in history. Like it's just not special. And so if I'm having this problem, I've gotta figure it out. And then probably other people are as well, or maybe it's not like a huge tam of like people that want a reading app.

There's probably [00:29:00] other people that would want something like this and so I could share that and like that would feel cool to put this out in the world and see what happens.

[00:29:05] **Ridd:** it comes down to problem solving at the end of the day, you know, which is why I, I guess, again, I'm like so grateful to be a designer into today's era because it's just all of a sudden it feels like there's whole new categories of problems that are worth solving, where it's like, yeah, technically we could have solved anything at some point, you know, but it just wasn't worth it, you know, like it was just too much of an investment or like, it didn't make sense.

E even down to like your permissionless building thing, I think one way that my brain takes that is like, maybe I am somebody that felt. More permission to build. But I also, on the flip side of that is like, I was always worried about like wasting time or not, you know, not doing high ROI activities. At the end of the day, somebody's employing me.

Where now all of a sudden it's like, actually I can go really, really far in three hours to figure out if this is even worth doing, you [00:30:00] know?

And, I don't know. There's not even a question in there. Yeah. But it's like,

[00:30:03] **Kris:** No, no. I,

[00:30:04] **Ridd:** that mental model shift.


## [00:30:05] Kris's explorations with OpenClaw

[00:30:05] **Kris:** I, I love that I deeply connect with that, the fact that I can experiment and explore so I've got open claw and I have. My Mac Mini and I did that and I feel like a little bit of a tool saying that, but I like, I love it.

Like it's, it's, it's exactly like what I've always wanted Siri to be and more it lives in iMessage, although, uh, Matt Smith and I were texting today and, and he got me all hooked up on Telegram, so now I'm doing that and iMessage, but it's not the point. The point is, one of the challenges though, is that like I want to get into like elite shape.

I've had some health problems over the last year and like things are getting better, but I'm using my Apple Watch for all the metrics and I want to see how these things are resolving and how the pieces are interplay and all this stuff.

The biggest problem though is that you can't directly connect like my Apple Health data to the Mac Mini because I have different iCloud accounts on them. 'cause I'm not a lunatic and I have like separation of spaces. So my [00:31:00] open claw setup has its own Apple id and there's not really a great way to share healthcare data.

You can however, make a local network and share 'em between there, but you have to have an iOS app that's running, that sends the syn in the background. So in two hours yesterday with Cloud code, I built this entire app that does it. Uh, and I'll show you the simulator for this. this builds.

Anyway, the idea is like you'll see a very janky app on the screen and when. You see it like, it's not anything to, to be proud of, but it works and it works for me specifically. And that is like, all that matters. And so the permissionless building, like I literally can just say start sharing and it will on my phone.

It won't do this here. Well, it'll ask me. Yeah. So everything that's in Apple Health that is tracked now gets sent three times a day to my Mac Mini, uh, on a local area network. And it works. [00:32:00] And that's great. So in terms of like the permission of this building, like I'm able to in two hours build this. Okay, I have this idea.

I tell cloud code about it. Like, this is what I need to have happen, make some linear tickets. It makes linear tickets for me on this piece, and they can go through, work, through the backlog. I'll triage everything, mark everything complete, and I'm on my way. 

[00:32:20] **Ridd:** this is kind of like your interface for open claw is this like, look, talk me through the setup 'cause and I guess I'll share like where I'm coming from is I'm the person who has like 50 different open claw bookmarks and I haven't taken a single step. And at this point I don't even know like, is it hype?

Is this something that I should be leaning into? How do you think about it? And maybe you could talk to the majority of us listening, who I'm assuming are also on the fence.

[00:32:47] **Kris:** Yeah. Uh, I don't think it's hype, so I definitely don't go towards hyperbole. I'm not like ultra skeptical. I tried it because it actually solved a huge problem I was having, so I would. was already [00:33:00] using cloud code locally. every day I'd have a terminal window open. I would screenshot my daily health briefings or like health metrics.

I would send it to it, and then it would analyze it, and then it would look at my calendar and it would look at my to-do list. And it would say like, here's where we're at today. But it's all local.

And if I wanted to ask it a question about something, if I wanted to help keep track of something on the go, I couldn't do it. And like I could use the Claude Mobile app to start a new Claude Code session remotely and try to do that. But they didn't really mix, not until like two weeks ago where there was really like a great way for us to like bridge between being on the go and there.

So when Open Claw came out, it was like this incredible moment of like, this is everything I've ever wanted in an ambient assistant. And like, I really want that. I want to be able to fire off questions about research. I want to be able to just take things off my brain. I just have pen and paper stuff everywhere. Ideas, maybe you're like that too. I think the creative piece of us is like, so many things I wanna do, I can just tell my shadow facts. That's what I call it. The, the instant to go [00:34:00] build my, like, here's what I wanna do, here's, I wanna take the tackle. So is it hype?

no, it's just you have to have maybe more measured understanding of like what it will do and like what it can do for you. but right now, like I talk to it all the time to the point where my wife will jokingly like, Hey, you should tell shadow facts to, to add this to your to-do list. And it's like, oh, that's a good call.

I'll do that. But the point is like, it's helping me do the things I wanna do, like live the life.

Linear is an interface mostly for me to tell shadow facts like I want to build and I've all these like projects, things I'm working on. Uh, I did like a deep audit of all the things that were bothering me with epilogue. So I would do a voice transcription to Shadow Facts, and then it would create all the tickets for me.

And then I could have my local Claude instance go through these tickets and start programmatically, like knocking them off one by one. And so we were able to, you know, a week ago, like power out all of these longstanding issues that I've had. Um, but this is the way that I can keep track of all the work in flight where it's at, and then also have just like the help I need and [00:35:00] Shadow Facts is the one that does that, like through iMessage.

And so it's helping me kind of tackle all those pieces.

[00:35:06] **Ridd:** Like you said earlier,

it does feel like we're just in the first inning with all this kind of stuff, and yet that little piece there where you could literally just be on a walk and you have ideas and execution plans. Maybe you are having a back and forth with Claude and you know, voice mode or whatever, or just dumping, and then it literally is turning it into tasks and then working on your behalf, like on a separate device.

I dunno, there's all the cliches about the, the 10 x engineer and everything, but like, I get it, you know, like the, the, the delta between, I'll use designers because most people listening probably are designers, like the delta between a designer and an org, who is kind of just not scaling yourself.

I'm not even sure what the, how do you even refer to it versus the person that, you know, literally could be doing and exploring and accomplishing 10, a hundred times more. It feels like that gap is widening


## [00:35:57] Positioning yourself with AI in today's job market

[00:35:57] **Kris:** I think especially on like the hiring manager side too, like [00:36:00] talking with either like early stage folks or people that are like looking for new roles and they're not engaged in this space, like it is a little bit of a flag. Plato has a great quote where he says that beware the barrenness of a busy life.

And so, like, I worry a little bit that the idea of just doing more and more and more and more and more like, yes, it enables that I do not like having agents run autonomously. I do not like having. if you're in cloud code, the dangerously skip permissions world where you can, like there's a little prompt that you put in that cloud can just go and do a bunch of crazy stuff and you're skipping permissions as in like, it might delete all your files.

It might, it's, it can go off the rails, but the idea behind that is people do that so that cloud code can just like run for hours and hours and hours and hours. And that is for sure, one mental model about working with LLMs is that I can just tell you to go do all these things and you do it, and then I just take whatever output you have and I'm like happy with it and I move on.

But I think we're [00:37:00] seeing this even in like Twitter articles for example, where every article starts to sound the same because they're all using AI to write the articles, even if it may be like generically their idea. But there's this like push, I think just to do more and everyone's kind of like.

There's anxiety around that and I want off that cycle. I do not want to be riding that bike race with anyone else because that's not how, like I view these things like they are a force multiplier, but I want 'em to be focused. I want it to be something that I feel is still like authentically me. So that's the one thing I was really proud of with with epilogue, is that even though Claude Code designed all, like I didn't use a Canvas tool to design the layouts or pixels.

I just told it, here's the hierarchy, here's the layout. Let me give feedback. I would give so much feedback until it felt like, yes, this is authentically something like I designed, like I like this. I feel comfortable putting my name on it. I had to be very involved in the loop. And so I want designers to feel like motivated that these tools can [00:38:00] accelerate the things they're doing to help accelerate explorations, to take tasks off their plate that they're not good at doing.

Like you could literally connect Cloud code to Google Docs to like create structures of a document for you that you fill in yourself. I'm terrible at that. I allergic to spreadsheets, cloud code can write and create spreadsheets for me now that I can then, then go fill out. Like here's the generic idea of what I want the spreadsheet to accomplish.

Me sitting down for an hour trying to like figure out how to do it is not effective. Cloud code doing it is effective as long ass my content. So I think the point I'm trying to make before I like go on this crazy diatribe is that it's easy for us right now, I think to have like, oh my gosh, we could just do all the things.

And it's like, yeah, but is it worth doing? And do you feel proud of the output itself, which is why like having linear or these tools kind of keep it in check where I can review, I can go back and I can review each of the tickets, uh, that were being built of like, okay, this is what I wanted to accomplish what we did, and then it's marked as done and I can go in and I can review this specific ticket and show me what this means in the [00:39:00] app.

Did it accomplish what I'm wanting? Is it slower than other people? Yeah. But I feel more proud of the, the output.

[00:39:05] **Ridd:** Were you leaning into this experience or set of skills while in the interview process at Stripe? did you intentionally position yourself as somebody who is comfortable and like really pushing what AI can do and, and bring to the table in your role?

[00:39:21] **Kris:** I mean, we, we brought it up like had conversations for sure. I don't think I shied away from the fact that, there are people in this space who are so much better and smarter at this stuff than I am. And like, I well aware of, like, I feel like I'm ahead, but I pr probably couldn't articulate to you my own skillset very well.

So I tried to be very cautious about like, I love this stuff, the last 10 months using these tools, especially cloud code. Have unlocked a whole new creative way of working for me that actually works better for me than a Canvas does. And so I definitely would articulate that and I would highlight like my own thoughts and methodology and process.

And I have a ton of [00:40:00] opinions on like how AI native experiences should be built and like where we should be indexing and moving towards. And currently right now CPS are, they're not going anywhere. Anyone who says that MCP is dead is like, that's hype. Like that's crazy. But they're gonna change quite a bit.

And we're gonna see a lot more companies leaning more in towards better semantic APIs and C than they will in m ccp, which is a lot of acronyms thrown out if you don't know what the space is essentially like. MCP is a way of just to talk among different layers, but it takes a lot of information like back and forth to accomplish a goal.

So like the context window, the window that AI can hold and think gets filled up very quickly with an MCP. And there's more efficient ways of communicating at times. And so I think the models are gonna start to get more efficient of like which tool that they use and when to do things. So that affects how companies are gonna design their products and like, do your products have an agentic focus to them or is everything readable by an [00:41:00] agent?

Because there's gonna be a lot more agents doing the work for people. So you have to like think through that as a designer. So I definitely would position myself like in inter, you know, conversations, whether it was Stripe or a few others I was talking with around where I was at my skill set or where I thought the industry was going.

Whether or not I'm right or 

[00:41:16] **Ridd:** I don't think it really matters whether you're right, honestly, because the thing that the flip side, like the hiring managers keep coming on is like, they say, well, curiosity is the most important thing. I mean, I, I've heard like 20 people say that over the last six months. I, I don't even ask the question sometimes now because it's like, well, I already know the answer is curiosity.

And so it's like, what does that actually look like? How do you demonstrate curiosity? And to me, a lot of what you're showing, I mean, this is kind of that, right? Like if I'm hiring somebody and you're walking me through things that maybe six months ago I wouldn't even have considered in the box of design, you know, hardly even adjacent design.

But now all of a sudden it's like everybody's becoming a generalist. Everybody's wearing all the hats. And people want [00:42:00] employees who can come in and just make an impact and see problems and solve them and reach for any combination of tools to solve problems. Like we're not just solving problems on. A canvas anymore.

We're maybe not even solving problems in code anymore. We're solving problems at like systems levels and positioning in the market base. You know, it's like, this is curiosity and that's kind of why I was wanting to ask, because I think it's getting a little bit more difficult to put this into a box of like, here's how to prepare for your portfolio, you know?

But if you as a designer can show something like this, like it's a pretty big deal in today's market. You know, like there's a window in time to get a serious leg up by being able to think and act like this.

[00:42:40] **Kris:** yeah. I 100%. I think especially if you're a designer looking for a role right now, which is not what you brought up, like kind of tangentially a little bit, like if you're interviewing and stuff I think the confusion that some people have, they're like, well, I haven't, I haven't built an app or anything with, with uh, AI yet.

I'm like, you don't have to necessarily, you can if you want to. Only like if you're [00:43:00] proud of what you make and there, but you have to demonstrate that you understand these systems and you're like, you're actually building something with them. Whether it is like another shader plugin system, just do something with it to see and explore and be able to, to talk through it and like talk through the process. I would say the thing that is like subtle among hiring managers right now, you look at so many portfolios, you maybe have six to 10 seconds to look at a portfolio truly like you. You know, I know people who are hearing that don't love that 'cause you spend all this time into it. But if you site is on Squarespace and it's a basic Squarespace template, you're probably gonna get passed on even if the content's really good because like there is just not a reality in this world right now where you could not have cloud code chat, PT Gemini, work with you quickly to have a more custom version of your own template.

There's a lot of reasons why someone would just do a, a basic. Webflow template or whatever it is. And that's like not a knock on these companies at all. It's more of a statement of like, we are moving so fast I hate saying this, [00:44:00] like the bar is so high. Like everyone wants the same type of designer, the same shape of designer that if you're not using these tools to differentiate yourself a little bit, like you are gonna get left behind.

And that sucks. Like it's a weird thing to, to view and see, but if you're resistant to change, it is really tough. So curiosity for sure. I could see it being like a little bit of a cliche and they're probably trying to say the nice thing, which is like, if you're not showing that you're invested in where the space is going, it's probably a no, there's probably gonna be companies that would be a good fit for that.

But all of the, the larger tech companies right now, they really wanna see people that are engaged in the space. and there's just like, again, going back to the permissionless building, you don't need permission to do it. You literally, I don't know, as a superpower, like you don't know how, you don't have to know how to create your own website, you.

Literally ask it. Like, I don't even know about hosting. Who should I use for hosting? And it will spit out a bunch of different options that are great, you know, oh, like I can get you set up on Versel right now and you can have a free website and it would take us like maybe an hour and you have like a static landing page that [00:45:00] looks really good and you're like, okay, let's do that.

Let's try that and just see what happens. Like that would be far better than just using the stock templates,

[00:45:08] **Ridd:** everything that you're showing today is such a expression of who you are. You know, like all, all the things that you're building, it's for you, it's systems that are like deeply revolved around like your willingness and excitedness to like improve and, and, uh, grow as like a person in your career.

All that kind of stuff. So it's like, I don't know, your, your website, the side projects, it's the billboard of who you are. You know? Like it's not about a case study or your work anymore. It's like, who are you, you know, what do you wanna put forward? And you can get a pretty, like, you know, we do judge books by our cover, you know, that's the facts.


## [00:45:42] Behind the scenes of Kris's new website

[00:45:42] **Kris:** I'll share this. 'cause you mentioned the website, and this is like, not even two, but I, I literally went through this.

And I found this web gl shader that I really like the, these ocean shaders. So you can like move around. It's, uh, responds to the time of day. So the sun is in the correct position for Denver, um, based on the time [00:46:00] of day, based on like my IP address. And then I just have like, you know, little writing something about me.

I'm also not like looking for a role 'cause I really am like stupidly grateful for the company I work for. So this is just, you can ask questions about me if you really wanted. and then I did like really silly things. Like I had a chance to like, oh, what would it look like to add rain to it? And like, what if it was at night?

Uh, and so, but I, now I want the windows to like respond to the, the reign, you know? So I don't know how to do that. Claude does it. What I have now, the purpose of sharing this is not like a toot my own horn. It's like I could not have done this on the previous platform without a ton, a ton, a ton of custom components that I did not want to design myself and.

I don't think I would've had the output as good, but I had the vision for it. Also, I'm saving like $500 a year on the site and the thing, which is great for me, I'm pretty stoked about that piece. But most importantly, I have something that feels more personal to me because I do think, like I've been saying [00:47:00] this for a little while, like soul is gonna be one of those things that is like, it'll be the word of the year, like this year or next year, is like soul.

We've had quality, we've had craft. But I think what people are gonna be desperate for is more that human side of things, right? They're gonna be longing for this. Either they an era they've never experienced 'cause they're younger of like that MySpace, you know, our MySpace generation where you're like, your MySpace page was deeply personal to you, like in 2004 and three five.

Like my MySpace page was complete, custom, crisp, pocket perfection at that time. And I think that we're gonna want to see that come back and I think people are gonna want more of those like. Your portfolio looks and feels like you. And that would be the hope, right? With what I'm trying to design. So I, there's not a reason not to have that.

So differentiators also like, are you in it or does it look like everything else? Are you using instrument serif and all your stuff because everyone else is doing that. Like, there's so much personality that each of us has that I would love to see that reflected in their design. I'm, I'm on like, such a [00:48:00] stupid soapbox.

I'll get off.

[00:48:01] **Ridd:** No, it's perfect. I, I honestly, like, I can't think of a better place to end it, honestly. Like it's super inspirational and you're like the perfect example of what it looks like to just run at all of these new possibilities and tap into like the creativity that's obviously been inside of you and all of a sudden it's just been unleashed and you're just firing in every direction.

It's beautiful to watch. And Chris, I really, really appreciate you even just demystifying a lot of things for me personally. I'm interested in a lot of the things that you're talking about. I know there's stuff there, I know there's more I can grow, I know I can go further into skills and all these different personal systems and just having somebody kind of break it down has really been, uh, super helpful for me.

Even so, appreciate you taking the time today.

[00:48:41] **Kris:** man. Ray, thanks so much. It's been an honor to be on the, the podcast. I think this is like my second podcast of all time, so beyond. Grateful to, uh, to finally be here with you. Appreciate the time 

