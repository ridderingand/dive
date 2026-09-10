---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: zJf0UeCwQqE
slug: 2025-11-14-geoffrey-litt
source_type: descript
source: https://web.descript.com/f58dae5a-c495-4843-afc2-0409e9717db1/0ae3f
guest: Geoffrey Litt
host: Ridd
title: "Designing Malleable Software at Notion"
published: 2025-11-14
duration_min: 53
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] 


## [00:00:00] Geoffrey's background in design

[00:00:00] **Geoffrey:** my first job outta college, I was doing engineering and design at a education tech startup. And, you know, we, we did typical SAS stuff, right? We would sit in our office and try to imagine what our users wanted and ship them software that they like. The problem is we were shipping to thousands and thousands of schools across the country, and I had never been a teacher or, you know, worked in a school, right?

And what I found is, man, it is so, so, so hard to really know what's gonna be good. No matter you can, you can do all the tricks in the book, go visit and do ethnography. You can do youth trusting all the time. You can hire former teachers to be on your team. And yet I found it was just really, really difficult without having been.

In my user's shoes in a really substantial way. And so this was, this was kind of plaguing me. Why are we making these choices for all users? And then I started noticing this really interesting pattern where sometimes you would ask users, you know, what do, what do you think of our product? And they would say, oh, I actually don't use your data reports.

I just export the data to Excel and do it myself. And [00:01:00] we're like, huh, okay. That kind of, that burns a little bit. Tell us more. And they would show us these, these crazy spreadsheets. They were like really ugly. You know, maybe had bugs, but they would do exactly what that user wanted them to do, right? They would like organize the data differently.

They would use different colors that fit their schools colors, whatever. And I started thinking, man, it's so cool that a random principal at some school can actually, in some sense build their own software tool that works for them, rather than having us dictate every little decision. 

When you're in your own spreadsheet, like the default is that you have the control over everything, right?

Um, and it's sort of a flip of the typical SaaS model. And so I just couldn't get that idea outta my head of like, why can't more people build software tools for themselves in their local context? 

The rest of my career since then has kind of been like a really, really long rabbit hole on, um, being obsessed with that question.

So, um, I ended up going to grad school at MIT to do research on how do we enable people to do this with better tools and interfaces. Um, [00:02:00] I worked at a independent research lab called In Can Switch, where we also explored that through research prototyping, um, very kind of, uh, out there ideas around this stuff.

And then now I'm at Notion, you know, where, uh, the company mission is to do exactly this. So that's kind of been my, my journey.

[00:02:15] **Ridd:** Can we dig into some of the experiments that you were doing at Ink and Switch and how that continued to shape these ideas that you have?


## [00:02:21] His experiments at Ink & Switch

[00:02:21] **Geoffrey:** Sure, I'll tell you about a couple of them. one experiment that we we built is called Embark. And Embark was this idea of, you know, when you do travel planning, um, you have all of these apps that you tend to use. Like, you might use Google Maps, you might have calendar events, you might have a Notion Doc or an Apple Note where you're like thinking through what you want to do.

Um, you have your email where your flights live, and there's all these apps, right? And, and in, in isolation, each of the apps can be pretty nice. But there are all these ways in which they fail to combine and work together with one another. That tends to be really, really frustrating. So for example, like why doesn't your weather app know that you're gonna be in London next week?

Like, why is it that you have to manually [00:03:00] select that even though it's it's in your email? Right. And I think this is an example of where, um, when we think of apps as the unit of software and there are these teams each focused on their little part of the problem. You get really good solutions for the parts, but you don't actually get the composition of parts that works for your problem that you're trying to solve.

people have tried to build the mega travel app. It turns out most of them are terrible because it's hard to build really good versions of all those parts. And every trip is different. So like your business trip to conference and my, you know, week long vacation with my family just have kind of different needs, right?

And so we thought, we tried to think about like how could we build a futuristic software operating system where when you go on a trip, software just kind of feels like it works for that trip for you and you get to mold it around your trip. what we landed on, somewhat surprisingly, actually, was starting with just a note, like a document, sort of like a notion document actually.

you just start writing stuff, like write your plans just like you would, you know, normally. But then our idea was you could start pulling in bits of functionality into your note directly. [00:04:00] So instead of going to look up the weather, you just type weather in your note and magically the weather forecast appears in.

It knows where you're going 'cause it's in your note. Right. Same thing with like routing and maps. And so, we imagined the system called Embark where you could do all this stuff from within a document. It's like document centric computing. And then we used it to go on a bunch of trips ourselves, which was really cool.

And we, we learned a lot and iterated from that. And, we never released it as a product, but we wrote a, a really in-depth essay explaining the thinking and showing the demos. you know, adding can switch. That was sort of our methodology is like, by avoiding the needs of shipping to users today, we had a little more freedom to imagine like, what should this thing really feel like if we think a decade out?

Yeah.

[00:04:38] **Ridd:** I wanna get into what it looks like to close the gap between like decade long ideas and practical next steps for today's interfaces. But maybe to set the stage for that type of discussion. Can we just continue your story a little bit? You're what, only like a couple months into notion, right? I think the answer is for why that was attractive are probably pretty clear.

It's literally just the box of Legos that you get to shape [00:05:00] and assemble. But can you talk a little bit about your motivations for joining and then also just the nature of what your role will look like there?


## [00:05:06] Geoffrey's role at Notion

[00:05:06] **Geoffrey:** One thing that I was really excited about joining Notion is that, a lot of the things that I care about around malleable software aren't things that any one application, so to speak, can easily solve. There are more platform level things that really require thinking of like a new operating system or a new fundamental way that we think about software.

And those shifts don't happen very often, they, they last a decade or more. And what I, what I realized was, I think we're, we're in a time of such volatility right now with AI just kind of forcing everyone to reimagine how things work, that there's actually gonna be a serious platform shift over the next few years.

I think everyone feels it coming. There's. The, the tectonic plates were shifting and I felt that timing wise, that was a really unique opportunity that's not necessarily gonna come around again anytime soon. And I wanted to find a place where I could, help take advantage of these shifts to enact the values that I want in the software that I use.

And, I think Notion is in [00:06:00] really good position to be competing for being one of those platforms. it already is a really successful product and it is a platform where people build on top of it, but it also has this really interesting new AI angle that's growing and kind of changing how we think about the product.

And so, um, I was just really excited to participate in that and, you know, hopefully help have, uh, help nudge the world of real software towards why I want it to be.

[00:06:22] **Ridd:** When you daydream about the future of a product like notion on the other side of this platform shift, what are some of the things that come to mind?

[00:06:29] **Geoffrey:** Well, you know, it's funny bringing it back to, um, my work and switch. Like a lot of what we explored was this document centric computing, as I mentioned, and. Notion, in my opinion, is the best incarnation of document centric computing that's out there. And when, what I mean by that is like, you don't go to Notion and see a blank box where it says, says like build an app.

because the reality is actually most people don't wake up in the morning wanting to build apps. People just wanna get stuff done, right? if you listen to actually the notion origin story of Ivan and Simon talking about how it came about, [00:07:00] I think some of their earlier explorations looked more like build any app and they sort of pivoted famously to this more document centric model, which I think is really, the right way to go about this.

And so, um, when I data ream about the future of notion, there's a lot of things that I've explored in my research work that I think could make sense in notion. So for example, you know, when you plan a trip in Notion, what if somehow that document came alive with all the tools you need to plan that trip, living in that document, you know, really thinking about how can we.

Um, take things that currently require hopping between different applications and gluing things together and manually, like copy pasting stuff and bring it all into one place. That's, that serves as kind of a, a context, hub, so to speak, for like, whatever you care about in your work or in your life can be in that one place and you can work with it right there.

[00:07:48] **Ridd:** This isn't really a question, but something I've been thinking about recently is how you know naturally. Tech as a whole has this cycle of bundling and unbundling, and it kind of feels like we're entering potentially [00:08:00] the greatest bundling ever because so many of these products get to outsource a heck of a lot of functionality to the general models, and everybody can kind of do everything.

And so all of a sudden it's like where you sit in the value chain and the quality of the core, like not to use the word wrapper, but like shell for all of this functionality matters so much. And so in that world, gosh, I think I kind of agree. Like all arrows kind of do point toward a document in some ways.

[00:08:31] **Geoffrey:** the value of having all of your context in one place has never been more clear. it was always valuable, but with ai, we just see now, oh man, the more this thing knows about everything I care about, the better it can work for me now. You know, I think there's some nuance there.

Like, um, the reality is no one application I think can or should, like, fundamentally have every feature and all of your data in there. There, there has to be kind of this bridging to other pieces of [00:09:00] software and, you know, um, I think there's a lot of, room for interoperability and stuff like that, I'll, I'll give you an example. Like with with Notion, my first week at the company I was, introduced to the value of Notion ai, which we use a lot internally, right? And basically 80% of my onboarding questions I had, I just go to Notion ai and I ask, and it searches our internal notion workspace, which is obviously like really well organized.

All of our slack, you know, it can search the internet. And that combination of notion Slack, internet is like an insane repository of context. Like most questions can be answered that way. And so I think it really just, um, yeah, highlights the value of context.

[00:09:38] **Ridd:** Can you talk a little bit about your role? I'm particularly interested because your background is pretty wide, like you can wear a lot of different hats. 

[00:09:45] **Geoffrey:** this is the first time in my career that I've ever had designer as technically part of my title. You know, I, I have a software engineering background. I did a PhD in computer science, which is pretty technical, right?

But I think what I really care about is, the conceptual design of software, like getting the primitives right, making things that [00:10:00] work well. you know, there's famous Steve Jobs quote, right? Design is how it works, not just how it looks. And I think, um, I'm less of a visually oriented designer, and I'm more interested in thinking about designing toolkits that enable people to build stuff for themselves.

And that's a really deep and interesting design problem to me. And so, technically my title is design engineer. I was telling you before this call, you know, I don't think, um, what I do is that similar to what a lot of design engineers do, I'm not an expert at, crafting every detail of an animation or, you know, um, pixel perfect visual design isn't, isn't where I live.

It's more, um, how do we thoughtfully design this box of Legos so that. People can build stuff and they know what the Legos can do and it feels like they always fit together seamlessly. In some ways, that's almost closer to designing a programming language than designing a typical application. You have to think, um, very, um, abstractly about building blocks and how they might be used, but you also have to think really concretely about are they actually gonna fit together and make sense?

I, I, that [00:11:00] tension is just, I think we're all of the interesting problems that I care about they live.


## [00:11:04] Exposing structure in system design

[00:11:04] **Ridd:** It actually leads me to something that I saw in your writing that I liked, that I wanted to ask about, which you talk about the importance of ex exposing structure. I'm just gonna read the quote. You say, good design exposes systemic structure and trust that people will figure out how to use it. So given your interest in the systems and primitives, can you share a little bit more about your thinking there and how it connects to this vision?

For more malleable software,

[00:11:28] **Geoffrey:** that quote comes from blog post titled The Nightmare Bicycle, and I wanna share the story of the Nightmare Bicycle. 'cause I think it's. I think this story is really against the grain of common wisdom in Silicon Valley design, but it's really important. So there's this book that I adore called Changing Minds by Anti Desa.

it's published a couple decades ago, I think. And it's, it's about how to teach kids to think about deep problems in a computational environment. It's, it's not really a design book, it's more of an education book. And one of the ideas in the book, um, he, he talks about how he has this nightmare about this bicycle where instead of having [00:12:00] numbered gears where you can shift one to 3, 4, 5, there are these buttons that's like gravel mode, downhill mode, uphill mode.

Like, I don't know, I'm just making set up now, but like crossing the railroad mode. And the reason this came out is that some product manager or designer said, hold on. People don't understand numbers, people don't understand math. Like you gotta tell them what it does and put it on the, put it on the tin.

Right. Um, teach them to use the thing. The problem with this way of thinking is. What do you do when you want to go uphill on grab? You don't actually know what these buttons do exactly. There there's no coherent structure that you see. You just see these modes that magically are supposed to do a good job in some situation.

So you have no general framework. And you know, what do you do if you're chain falls off? Like how do you repair it? You don't even know what's going on there. Right? And what this hasa points out is actually humans are pretty damn smart and kids can figure out what gears do. Maybe they're not thinking about it as numbers and math, but you just feel it and you learn, oh, okay, like when I do this, it gets harder to pedal and that has [00:13:00] this effect.

And now I know I can use that in all these situations and it's not that difficult. And when the design of a bike exposes that structure, people pick it up and they learn to use it for a lot of situations. when you look at software, I think this is, um. A lot of software looks like the Nightmare Bicycle to me.

it's teaching people these very specific bits of functionality and it's not teaching them deeper structures that they can use to do more, more stuff themselves. And so, that's one of the things that excites me about Notion as a product actually is that Notion does expose a lot of structure. And, it's a product that I've used for many, many years for all sorts of different stuff in my life.

You know, planning many different kinds of projects, keeping track of books that I've read a lot of things. And the reality is, you know, it takes really thoughtful design to get people to the place of understanding, but once they get there, you've really empowered them much more. And so that's just a design philosophy that I find really exciting.

[00:13:48] **Ridd:** What do you think it takes to maintain some level of simplicity given that overarching objective, then?

[00:13:55] **Geoffrey:** Well, I would say. That's how you get simplicity. So the [00:14:00] bicycle, the nightmare bicycle has a million buttons. Your bike that you use probably has one or two knobs with numbers on it, and there actually is deep simplicity there. I think that's what true simplicity is when you expose the fundamental structure and let people take advantage of it.

I think there is a challenge of how do you get people to the place of virtuosity with those structures? Um, what's the on-ramp look like? You know, do they need, some examples to start? do they need like some structured education around how to use these things? And, it may be the case that on day one, the Nightmare Bicycle is like quote unquote easier to use.

But I think, you know, Don Norman has a great book called Living With Complexity. lesser known than his most famous one, but he talks a lot about, I think he talks about instruments like, um, you know, the, like a piano, right? A piano is actually a very simple design in a way. You can't just walk up to it and play it.

It takes a lot of actual skill to play that thing. But, one, one phrase that I like is like, designing for the 40th hour of use. real simple I think is when someone's invested that full-time week and they feel empowered and comfortable. Not the [00:15:00] first minute.


## [00:15:00] Designing AI Chat Interactions

[00:15:00] **Ridd:** If my brain naturally goes towards like AI chat as a primitive, that you see everywhere that I actually have been using a notion much more. Even just the other day I had this behavioral shift where I was trying to find good leads in a database of a few thousand, and I just turned to chat and I said, here's my criteria.

Create a list. Here's how you want me to format it. And I was like, oh my gosh, this is so much different, but it's better, you know, it's better. And yet it's like kinda the perfect example of this tension that you're talking about where it's like the, the chat itself is exposing the raw system and yet, um, you know, we've talked a lot about even on this show of just how that has all of its own complications and you know, what the heck do I do with this blinking cursor?

That kind of a thing. So. I dunno, how do you even think about that in terms of like so many designers are working through how to create systems to enable users to collaborate with AI effectively and trying to think about the level of UI that needs to exist in that world. Do you have any thoughts there?

[00:15:59] **Geoffrey:** I think you're [00:16:00] hitting on something really real, which is that I think you're totally right that AI chat is actually a very power user interface. People think that it's like a simple consumer interface, but actually it is in some ways, I think you could say, yeah, it's like a good bicycle that shows you the gears, like you're just talking to the raw machine for the most part, and if you're really virtuo and you know how to get good results.

You can get really, you can go really far towards crafting the, the details of how you work with this thing. And you don't need to be like technically minded or anything. I think you can read lots of posts on the internet, you know, people on Reddit who figured out great workflows for using ai. I think the flip side is, yeah, it's a lot harder to learn when you don't have the buttons to click.

Like the question of how to use this thing is not very easy to on ramp into. And I think that's something we think about a lot with Notion AI actually is once you figure out the workflows that work for you, it's insanely powerful and I use it every day. Um, but yeah, it's true. Like when you see a text box and I'm blanking cursor and this machine that is somewhat intelligent [00:17:00] but somewhat dumb and it's really hard to know the difference.

Um, especially if you don't spend all day tinkering with these things. I think, in some ways that's a fundamental challenge. And another thing I'll add is I think chat is often a good interface, but it's often very limiting. Two things that are really important is you need to be able to point to stuff.

So when we have a conversation, I can point to things and we can have shared attention on some artifact. Um, and I think that's something we think about a lot at Notion. You know, you have a chat and a shared artifact, right? So how do you ergonomically work with that? Just like people talking and pointing and it goes both ways.

By the way. I need to point things out to the ai, AI needs to point things out to me. and the other piece is just text I think is a really limiting, data abstraction for visualizing information. we have a whole field of graphic design, right? And, um, I think natural language text is really good for human to AI input, especially with voice.

It feels really good. But for the AI coming back to us, you know, I think we can be much more creative with nont textual representations and data visualizations. And this is not a new idea. Like [00:18:00] when I ask Siri what the weather is today. It shows me a weather forecast card with like a sun icon, right? And so I think that's the sort of thing that gets me really excited is pushing into that direction further.

What sorts of imagine, you know, I ask Chat GPT or notion like how much money am I gonna have when I retire? I wanna get back like an interactive chart that I can mess with myself, not just like a number, you know.


## [00:18:22] The potential for canvas-based UIs

[00:18:22] **Ridd:** How, how much ex exploration have you done with Canvas based UIs for ai? Because that's kind of where I naturally go for this. Like even when you're talking about like the spatial context, I, I almost want to be able to like Figma comment style, tap on things, and then push it to the ai, but then have them maybe like have the model generate something that is visual, like you're saying, but maybe it's alongside it and maybe I can branch, you know, it's like that is in so many ways, like the ultimate power user interface.

It has so much potential. I get so excited about it, but part of me is like has this little bug in my brain where I'm just like, am [00:19:00] I vastly overestimating the amount of complexity that an average user wants when interacting with ai?

[00:19:05] **Geoffrey:** I love that provocation canvases aren't something that I've personally explored, but I think they are very promising. And I think some, some work that I've seen, there's this project spell Burst by our mutual friend, Tyler Engert, who, worked with some folks at Stanford on this. And they basically had this canvas where you could work with AI to make these, uh, these kind of animated, sketches and processing.

and you could create variations and alternatives of existing ones that kind of branch out on this canvas and have this tree of exploration. Um, and it's, I think it's very powerful to have a visual way to represent that thought process and see it unfold in space in some ways. You know, people do this in Figma all the time, right?

You have this, like, you zoom out and you see this kind of like trail of art boards and the whole process is just like laid out there in space. And I think that's a very powerful pattern and, I think it applies to both humans creating and co-creating with ai. Both. This is actually a theme that, I think a lot about is, um, one lens that 


## [00:19:55] The Version Control Problem

[00:19:55] **Geoffrey:** I find very powerful is that human AI collaboration is fundamentally a version control [00:20:00] problem.

And what I mean by that is not people think version control. They think, oh, it's like version history or something. But really, when I say version control, I mean the creative process is about exploring different ways of doing stuff and trying things out, hitting dead ends, coming back somewhere, trying something new.

in Figma you can do this in space, in Git, you have tools to like make branches and stuff. there have been some really cool research projects, like a quick post by Eric Ron where he kind of like, um, mashed these ideas up and had variations that you can arrange on a canvas. So you can say like, these are the good ones and these are the bad ones.

And they correspond to like some underlying version control system. And so Even without ai, I think people in all creative fields deserve better version control tools. Um, software engineers have the best ones right now, and more people could use branching and history tools. But then when you're working with ai, it's insanely powerful because the AI mostly does bad stuff, occasionally does good stuff, but mostly does stuff I don't like.

Right? And if I'm in an environment where it's hard to undo or, or suggest or review, that feels terrible. Whereas if I'm in an [00:21:00] environment, um, like coding agents would get, it feels fantastic because 50% of the time, my little alien intelligence shows up with awesome stuff and I'm happy another half I just iterate or I throw it away.

this is a theme that we're thinking about in Notion too, is how do we enable really ergonomic human AI collaboration by having really powerful tools for version control.

[00:21:21] **Ridd:** One of the reasons I like talking to you is you're, you have this database of different experiments or products or things that you're like looking at for inspiration, so I, I guess I'm kind of just curious if there are any others in this topical ballpark that you find interesting or maybe even personal experiments that have kind of shaped the way that you're thinking about this set of software.

[00:21:42] **Geoffrey:** one of the biggest projects I worked on together with a team there was called Patchwork. And Patchwork was basically us playing out this hypothesis that version control is the thing that matters.

And so we built a collaboration environment for ourselves. Our, our goal, which we achieved, was to do basically all of our work at the [00:22:00] lab in this collaboration environment in the browser, you can think of it kind of like a, a notion clone in a way. And we had, you know, markdown, editing, whiteboarding, spreadsheets, all sorts of stuff.

But at the core was this, Idea that it was gonna be really easy to create alternatives and suggest and review. So on any documented patchwork, you can hit a button and get a branch. there's no like weird commands to run. It just happens. That's your private copy off in the corner that you can work on in, you know, isolation, right?

you can send a link to someone so they can review your branch, kind of like a GitHub pull request, but with less ceremony. And then when you feel good about your branch, you can merge it and it can switch. patchwork runs on this data sync library that we developed at the lab called Auto Merge, where the whole point of the library was to help merge together work that had happened on different branches in a nice way, so you didn't end up with these terrible merge complex that you have to fight with.

And so we kind of invested full stack from like that lowest layer of the system all the way up to the thinking about the user interface of like, how do you show branches? [00:23:00] Should they even be called branches, you know? And. We use this every day. It was awesome for like reviewing blog post drafts or essay drafts.

We wrote a lot on it. we also tested the ideas, so there's some ongoing work to test them with kits. So we built a version of patchwork for game development and it's being tested in classrooms right now. can, you know, 12 year olds understand branches? Turns out actually. Yeah, they totally can. oh, and then the last piece, which I haven't mentioned is at some point we were like, wait, AI's a thing.

So we added AI bots that used all this shared branching infrastructure, right? And so, and it was a really, really beautiful fit because we'd invested in this for humans. Then it worked well for AI too. And if you're used to using branches and reviewing stuff, then moving to using AI bots with that isn't a big leap.

That's actually what. We're seeing in coding, every software engineer knows how to use GitHub already. So AI is not a big leap. I think this is the kind of Trojan horse that you need to pull off to really get AI collaboration, right, is get people used to thinking in terms of variations in review for [00:24:00] any kind of work, and then use that for ai.

The last piece I'll mention just to kind of close out the patchwork thing is that this might sound cool and ambitious, but actually this was all, everything I've said so far was just a means to a much crazier end, which is that our idea was that any of these bits of software in patchwork, you should, they should be malleable.

You should be able to live, edit the software from within the software. And so we had all these custom tools, you know, while we were writing essays, we would make up new ideas for tools and vibe, code things, and you could live, deploy them into this platform. But guess what? You need version control there too, because.

If we're using an app, like let's say we're using this podcast recording app and we're, oh, I have a new idea for a feature, and then we like live code it and it breaks. That sucks, right? Like you can't really like live edit software, like you can a Google Doc because it's gonna break a lot. What you need is the ability to like go clone it, try out stuff, and when it feels good, share it with your team.

Same concept, it's just branches, right? So, if you get people used to thinking in version control terms [00:25:00] who are, who are not technical, but just normal document editor of people, that's actually a key building block to getting people to the place of editing their software together with their teams.

[00:25:09] **Ridd:** It's interesting, even just looking at your career and when you started working on this kind of thing, I'd imagine it was mostly through the lens of. Well, you probably have to have some level of development expertise in order to accomplish these, and all of a sudden you had this LLM moment, everybody's talking about it, and you're like, whoa.

The thing I've been thinking about is applicable to literally everybody.

[00:25:29] **Geoffrey:** That's exactly how it feels to me. and, you know, it comes way before me. People have been thinking about this stuff for many decades. Like in fact, the origins of personal computing, Alan Kay has been thinking about this stuff for, you know, since the eighties, right? Um, his, his vision for personal computing was kids are live editing the rules of a video game while they're playing it.

Um, but I think you're, you're, you're totally right. There's, there was kind of this hard question at the heart of the whole thing, which was like, how do you get people to get the fuzzy intent in their head [00:26:00] translated to something a computer can formally understand and run? And it turned out that was just like a really difficult problem that people were biting around the edges with all these, you know, apple script macro recording or programming by example and demonstration.

Nothing really worked. And then Elms came along and boom, all of a sudden, all of these great ideas people have had for decades in this field that, by the way, most people today don't know about. Are suddenly relevant because LMS exist so you can just like start. A lot of what I think about is just taking good ideas that people had that actually work now and making them real


## [00:26:34] Malleable software vs. dynamic interfaces

[00:26:34] **Ridd:** There's a couple related topics that often come up together. On one hand it's more like, you know, malleable or moldable software that is inherently permanent. Uh, actually our friend Tyler, I think he said something along the lines of, it's like moving the furniture around in your apartment in the first month of living there, or something like that.

And then on the other end, there's this idea that comes up, which is like. Well, the models [00:27:00] themselves know what you're trying to accomplish and maybe are actually spinning up potentially even more disposable interfaces on your behalf. So I'm kind of curious, like where do you gravitate toward, uh, do you have any thoughts on what maybe even has a more realistic possibility of being introduced into more general purpose, uh, mainstream tools, like a notion even.

[00:27:23] **Geoffrey:** I'm so glad you asked about this because I think people are very confused about this. And I, I wanna clarify something. So when I say malleable software, I do not mean only disposable software. The main thing I think about when malleable software is actually much closer to what you just brought up with Tyler's point of, yeah, designing my, my, my interior space in my house.

Let's say when I come home, I don't want everything to be rearranged, right? I want it to be the way it was, and if I want to move the furniture or put things on the wall, I want to have the right to do that. And so I think of it much more as kind of, um, crafting an environment over time that's actually more stable and [00:28:00] predictable, not only for myself, but also for my team.

Having shared environments that we all work in together that are predictable is also really important. Right. ironically, actually, in some ways, I think sometimes malleable software results in more stable software because I have more control. So people really far away in some corporate office aren't like pushing weird redesigns on me every day.

I get to kind of organize my own house and keep it the way I want, you know, I think about long lasting software that evolves gradually through use as the primary lens for thinking about malleability. Uh,

[00:28:32] **Ridd:** question on that? So how often do you think that is the user having some level of intent where it's like, Hey, I want to change this, or I wanna mold this, versus the underlying models themselves observing the behavior. Maybe they look at how you're using the AI chat over time. Then you're like, you know what?

Actually, let's make you a corresponding interface because you're trying to accomplish these things frequently.

[00:28:55] **Geoffrey:** Yeah,

[00:28:55] **Ridd:** think that we might fit on that spectrum?

[00:28:57] **Geoffrey:** I think the idea of proactively suggesting is cool because [00:29:00] not everyone is the type of person who tends to think about opportunities like that or notice them. one of the reasons I care about malleability is that I think it cultivates a mindset for people, it's a mindset of agency, of believing that you can change your environments and your surroundings. And if you're a certain type of person, you start noticing those opportunities more, right? And I think the way that starts is by having the opportunity to try something and have it have an effect, and to feel that loop close.

So, you know, I have, I have a young baby now, and when I think about the future of like how I wanna race her, it's like, okay. If she wants to like, I don't know, decorate in her room or something, instead of saying like, no, like we choose how your room decorated. It'd be cool to say like, yeah, you can within these boundaries do that.

Because then that's the kind of thing that encourages people to do more of that behavior, right? And so I think, sure, like proactive suggestions are, are cool. And, I want people to increasingly live their entire lives thinking What can I change? And not like, here is what is handed to me. I just wanna come back to you to [00:30:00] disposable software.

maybe it's a subcategory of malleability. I'm not quite sure. I think it's, there's a time and place I don't think all software is gonna become disposable generated on the fly. And I think there is really value in these quick ephemeral tools. I do a lot of it in my own software engineering practice.

I try to think about. If I have a lot of money to spend on tokens and a lot of time for them to work overnight, like what can I get out of that?

for example, I'll give you one concrete example. I have a project I'm working on to port my personal website to a new framework. And the first attempt at it, I thought, you know, I'm just gonna have Claude write me a script that doesn't, and it kind of worked, but I had to review this really long script and I found it hard to tell if it was really doing what I wanted.

So then I said, can you make me a command center that will walk me through the process of doing this port myself, but visualize the entire process. So it was like this crazy Bloomberg terminal thing that has like two columns up, which is like the old and new website preview running live. And then I click through steps and I, there's a file preview thing too.

And [00:31:00] each step it would say, here's what I'm doing. And then I would see the files appear, and then I would see my, my new website version reload. And I was okay, like I see that that part is done now. It kind of guided me through, right? And it was almost like if I had you do it and then I asked you to explain your work, like that's, you wouldn't just send me the script.

You might like show me a bit and teach me. and that tool, it's a one-time thing just for this one PR essentially. but I was able to economically build that 'cause AI exists. And, I call these tools jigs from woodworking. You know, you make like a tool adjust for the purpose of making one project.

And I think that's also a really cool pattern.

[00:31:31] **Ridd:** like, obviously you built that from scratch, but thinking about something like a jig through the lens of notion, I do think it connects back to what you were talking about with the importance of primitives too, because it's like you have to, even within one product ecosystem, create something that is very composable, and yet the primitives have to be flexible enough to be able to accomplish a lot.

So there's like this compounding familiarity, right? So it still feels like you're using the products, but it feels like you did just spin something up for this one thing that you're trying to attach maybe.

[00:31:59] **Geoffrey:** [00:32:00] yeah, absolutely having the right toolkit can accelerate you so much in building jinx. And not only, it's not just about familiarity, it's also about interoperability, I think. And what I mean by that is if you already have a bunch of existing tools that existing data, I'm not gonna make a new disposable tool if that requires me to totally like migrate all my data or like start over from scratch.

I need my new tool to fit with my existing ecosystem. So one analogy I like is like if I buy a new knife, I can bring that into my existing kitchen. I don't need to like move to a different kitchen to use the new knife. Right? Because in the physical world of kitchens often things just kind of interrupt because we have.

Atoms and things just work that way. Um, in the world of bits, often you, you end up with such silos, and I think one of the greatest sins of typical SaaS software is it makes it really hard to extend your existing universe with new custom tools. In notion that's like kind of the whole system design is built around this idea that when I have a new way I wanna see stuff or Represen present stuff or [00:33:00] work with my data, it's already in this flexible, kind of universal format that I can bring new, new tools to bear upon.

whether that's, you know, new database views, new automations, or even you could go as far as like custom coded tools through the API. Like. It's all gonna work with this one ecosystem.

[00:33:16] **Ridd:** All right, let's zoom out for a second here, because you've been thinking about this whole malleable software thing for a while. All of a sudden, the level of attainability has skyrocketed with the lms. When you kind of think about the vision for where this could all go, like, where are we at on the curve, you know, and, and what's it gonna take for these concepts to actually make it into mainstream products?

[00:33:35] **Geoffrey:** So one frame on this question is where are the bottlenecks now?

[00:33:40] **Ridd:** I like that.

[00:33:41] **Geoffrey:** Coding and technical ability was the bottleneck before, and now we see it opening up. I think the, the other bottlenecks are now infrastructural more. The entire way that we build and distribute software was built around an old assumption that most people can't code.

you know, if you look back at the earliest history of [00:34:00] software, actually most software started out custom. So like, as a company, you would hire a dev shop to build software for you. And then at some point they realized, man, like dev time is really expensive. And actually wait, there's like 10 companies that have the same need.

We're just gonna package up, I guess at the time it was like a floppy or something and sell it to you. And holy shit, we have great margins on, you know. The 11th cd, uh, floppy disc that we sell, right? And we've kind of played out, I think many decades of that way of thinking. And in some ways it's gone really far.

Like, um, if you have an iPhone, you can't make software for the iPhone. On the iPhone. it's become very difficult, even if you can code to distribute software. So you have to go through app stores, which, are designed for the needs of big corporations, right? You, it costs money to distribute, you have to pass a lot of like, checks around like guidelines and security and all this stuff.

And there's, there's good reasons for all that stuff. Protect consumers and, you know, solve real problems that companies have shipping, but that's not an appropriate mechanism for you to share some weird [00:35:00] little tool that you made with your friend, right? so I think the, the thought experiment we have to do is when everyone's constantly editing their tools and making new tools, how do we share those?

And this is what I explored a lot and it can switch. And why I'm really excited about notion, which is that notion is one answer to that notion at its core is a platform where you make custom tools for yourself and your team and you share them with each other. And when you ship a new tool that you made a notion to your company, it doesn't have to go through some app store, right?

It's literally, it just feels like sharing a document. Another analogy is like when you make a new spreadsheet tool for your company, like in Google Sheets, you don't ship through an app store, you just like send a link around, boom. You have a new tool and the editor for that tool is available to everyone using the tool.

That's like the fundamental conditions that are required to enable malleability and I think Notion has that, that foundation. And so, we will have to see how far that plays out. My, view of the long term would be that eventually we should have every layer of computing built around that new assumption.

So whether it's operating systems, app stores, the [00:36:00] platforms we live in every day to do our work. Are gonna have to grapple with that, that reality.

[00:36:04] **Ridd:** Yeah. It's interesting to think about where value and usage accrues. In a world where more of the software we're experiencing is malleable, there's like a real pull towards the OS level in my mind.

[00:36:17] **Geoffrey:** I agree. And I would question like, what do we mean by os? So when I think of operating system, you can define it in a systems sense very technically of what an operating system is. For me, as a more design oriented person, I think of it as what are the fundamental concepts and metaphors that people think with when they use a computer.

today a lot of that's defined by the desktop operating system, but also, you know, the browser defines some of it. And even when you live a lot of your computing life in a particular. App that sort of can become an os. I think the, the term OS is overused, but it actually does apply to certain platforms that you really kind of learn to think in terms of their concepts.

And so, I agree with you that I think general platforms with primitives are gonna have an advantage in this new era. Yeah.


## [00:36:59] How the role of designer changes

[00:36:59] **Ridd:** [00:37:00] let's play this out a little bit. So, how does all of these changes change the role of designer and the way that we think about deliverables in a world where the interfaces we're designing, you know, they're, they're changing and much more fluid.

[00:37:13] **Geoffrey:** One of my favorite inspirations for this is, um, Christopher Alexander. I think he's somewhat famous among software designers, but he is an architect who believed that everyone could design their own house.

[00:37:24] **Ridd:** Hmm.

[00:37:25] **Geoffrey:** he wrote this very famous book called A Pattern Language, which, and, and it's sort of paired with this other book called A Timeless Way of Building, where he leaves out this philosophy around, if you look at ancient European towns, they were not all built by like a developer, And yet they look beautiful, really, really beautiful, and everyone loves these old European towns. It's like you can feel there's something there that's like very deeply beautiful, he dedicated his life to this problem. And his belief about how that happened is that there was this set of patterns in any local context that people [00:38:00] used to make stuff or to design houses.

In this case. And normal people would be steeped in that set of patterns and they would know, oh, like, you know, we use this color brick here and oh, like we do townhouses that look kinda like this. But then they would adapt that to their specific site, their specific needs as a family, and they would just make stuff for themselves.

You would not have any cookie cutter copy paste, but you also wouldn't have total chaos. It would be patterns. the role of Christopher Alexander as an architect or designer isn't to design your house. It's to design a set of patterns and teach you that set of patterns and then you go design your house.

And he actually did this, like, he, wrote this whole book about how he and his team went to Mexico and helped a bunch of families design their own houses. And they developed a pattern language for that local environment and worked with the families to teach 'em enough architectural thinking so that, that they could then make their own choices and, I absolutely love that way of thinking about the role of a designer because I think, it does a better job dividing the line between what users know best and what designers know best. There is a role for design expertise, but it's more [00:39:00] about designing the system and then teaching the user to do it the actual design themselves.

[00:39:06] **Ridd:** Can we go all the way back to the beginning of your career then with your education startup and you're designing this software that teachers are using? What are some of the changes that you would make if you were following this idea of focusing on patterns rather than the constrained software itself?

[00:39:24] **Geoffrey:** So one idea I have there is very often, um, in schools, they would have some strategic priorities, right? That is really the things they care about, and they're gonna map those to metrics that are what they're measuring to. It's, it's like, in some ways similar to working at a company, you know, different KPIs, but might be, you know, we want students to feel engaged at school and we're gonna run quarterly surveys to see how they feel about that.

I think we, we thought of this as like, can we make five dashboards around key topics that a lot of schools care about that are awesome? I think now with the tools that are available, I'd wanna flip it more to build your own dashboard. So what are the building blocks we can give you? It's on you to decide what you care about and [00:40:00] kind of decide how you're gonna measure it and how you can use our tools to achieve that.

We need to educate you around what tools are available. And also we can educate you around things that we're experts in, like, you know, statistical analysis so that you don't draw mistaken conclusions, for example, um, or, you know, benchmarks against national data that we have. But ultimately the ball's in your court, like it's your school.

Figure out what you care about. Design the interface that prioritizes the metrics you care about. I think is how, is how I would go about it now.

[00:40:25] **Ridd:** I am trying to envision this dashboard now, and I think it's natural to go to this place of, well, you gotta have good defaults as a way to teach people what something can be. And I'm like, well, is the defaults basically the product that you would make to begin with? And is that just like the new way of thinking about it, where the product design is more or less a set of defaults and then you have the building blocks and systems around it?

Does that feel, does that resonate?

[00:40:55] **Geoffrey:** Totally resonates. I think it's, it's like 70% of the way there and there.

[00:40:59] **Ridd:** Get me the [00:41:00] other

[00:41:00] **Geoffrey:** Yeah. first of all, absolutely this totally resonates it really fits what I think of as malleable software, which is, if not everyone's starting from scratch every time. It's more that you, you start somewhere that someone else already thought about and then when you want to tweak, you can.

Right? And so I think, I would mostly say it the way you did there. There's one issue though, which is that when you get a big piece of software handed to you, it's not always clear how to go about changing it. And in fact, like if you're not as familiar with the building blocks already, you might not even think about what you would change.

I think, you know, you see this like people who are more familiar with the creation of software as a process tend to have stronger opinions as users, right? And so I think, this is relevant for notion, if you clone a big notion template, that's a really useful piece of software, then you have an idea for something you wish it could do, how do you actually enact that?

And this is where I think AI can play a really key role, which is that, um, so a, it can be your dev for you, so to speak, and help you make the changes, when you wanna make them. But I think there's a much deeper thing too, which is can AI help you learn [00:42:00] about the permanence and help teach you to actually be creative and virtuo in arranging them in your head to do new things for you?

Because ultimately, the really best tools are only gonna come if you actually are becoming fluent in the Primis, right? And so I think part of that is, thinking about ways to use AI that don't just feel like automation and. Getting as far away from the details as possible and are closer to like working with the AI and it's teaching you how to do it yourself and unblocking you so that you are actually developing these deeper thought patterns.

[00:42:34] **Ridd:** I like that it almost feels like you have to loosen the grip on time to value as a core measuring stick for some kind of like a new user experience. Because as you were talking, even I was changing the picture in my head from. One set of defaults to, maybe there's a little bit more of a lengthy onboarding where the AI is learning about someone, and you can see it like pulling from [00:43:00] maybe, you know, I don't know, three or four different sets of defaults and it's actually like shaping your product for you.

In the beginning you can see it changing. All of that is interesting, but it's like, you know, it's gonna take more time, but maybe that's actually a good thing.

[00:43:12] **Geoffrey:** This is a fascinating tension, right? I think the reality is some users want to get to value immediately, and if you force them into a slow process, they're, they're just gonna leave. 'cause they're not invested. On the flip side, I think it's funny to imagine, like, imagine you work with a design consultancy and you're invested.

You're like, I wanna make the best app. And you show up to their office and you're like, you're ready to go. And then they just say, here you go. And they just give you the software that they made yesterday and they kick you out. You would be like, what? Like, I, I wanted you to like at least ask me like one question about what I want.

Right? And I think when you imagine how we expect that process to go, it's like, oh, I think this is gonna take a few weeks. Where like in the first meeting, we're just gonna talk about what I need and you're gonna understand me. Maybe you'll come back tomorrow with like some sketches on a napkin of like ideas and I'm gonna have an opportunity to like guide you towards one of them.

Right. and the [00:44:00] reason I'm going through that process is because I believe that it's worth it to have something custom for me. And that time is worth it. So I think, there's a spectrum there and maybe some of it's gonna be resetting expectations around how this stuff happens. computers are often really bad at reading the room. am I in a rush just trying to get this done? Do I want to go deep and make a beautiful thing? I think better understanding of how the user feels on that spectrum is something that we need to think about.

[00:44:23] **Ridd:** I wanna take a hard left because you had a tweet that I loved recently, and you talked about your practice of coding like a surgeon. So I'd love for you to just unpack that. What are some of the things that you're thinking about? How have you evolved the way that you work with some of these new AI tools?

[00:44:42] **Geoffrey:** Yeah. So coding like a surgeon, intentionally weird tagline, right? What I was reacting to is, I think there was a bit of a, a strand in the discourse around AI right now that goes something like, oh, every IC is becoming a manager, right? Because oh, you're gonna have all these agents and we're all gonna be like living manager life, which is [00:45:00] like, you're on Slack constantly, like talking to your reports and like unblocking them and stuff.

I've been thinking about, you know, two things I find frustrating about that worldview. One, I don't really wanna do that

[00:45:10] **Ridd:** Yeah, it sounds terrible.


## [00:45:11] Coding like a surgeon

[00:45:11] **Geoffrey:** Sounds not like there, there's a reason I'm not a manager, right? And, and that's a personal preference thing. But two, I'm not convinced that that's actually a path to producing my best work, even as AI gets better, you know, maybe at some point.

But I think given the current capability set, AI is really, really useful to me, but that's not how I want to use it. And so the idea of coding like a surgeon is very simple. A surgeon does the damn surgery. They don't like sit in some admin office while someone else does the surgery. They are in there.

I don't really, you know, want to get into like gory details, but like they're doing stuff, right? They're, uh, and they have assistants in the room who are helping them live, lots of auxiliary parts. They have prep that happens before they walk into the room. 'cause their time is really valuable.

They're, you know, probably not spending a lot of their time on like less leveraged [00:46:00] things because they have such specialized expertise. But in a way they're like a high level individual contributor at the core is how I see it. And a lot of people have quibbles, like I've, people have responded to the tweet being like, no, you didn't quite like get how syringes work.

And it's like. I, I don't mean this in a super literal sense, I just mean how do we think of AI as a way to leverage our time better and stay connected to the work and doing it ourselves, but having prep work done for us, having tools in the moment, helping us do it so that we can really focus on the stuff we love to do and do less of everything else.

And that's, you know, how I'm trying to use coding agents for my core work that I care about today, which is like when I show up, sit down at my desk in the morning and work on a feature, I want to be prepped with like a brief on all the code I'm gonna be touching today, how it works, what the, what the traps are.

Maybe I'll see a draft that the AI did for me overnight, sketching out how the coding could go. Um, maybe some ideas for me. all the bugs that were there in the prototype yesterday have been fixed for me overnight. I didn't have to do that part. [00:47:00] And now I just get to go play and be creative and do that, that.

That three hour sprint, that really is like what I love to do and what I'm uniquely like positioned to do as, as me with my human skills.

[00:47:13] **Ridd:** It really resonates because I'm someone who is very excited about how, like, coding with AI has unlocked me as someone who kind of, I mean, a decent understanding of code, but I, I, most of the syntax has escaped me over the years, and all of a sudden it's like, wow, you know, I can really participate. That being said. Sometimes it feels choppy. Like it's really difficult for me to get into a flow state coding. And so that I think was maybe why your post

[00:47:39] **Geoffrey:** hundred percent,

[00:47:40] **Ridd:** because I don't know if I've cracked that

[00:47:43] **Geoffrey:** hundred percent. And, and you see this tooling spectrum around these different ways of working. Like when I'm coding consideration, I use Cursor because Cursor is a product that's committed as their philosophy to this interactive fluke with the human. They prioritize latency and visibility. cursor Tap Complete is really snappy and helps me stay in flow.

Coding agents [00:48:00] not so much. It's more choppy and, um, feels more like delegation. And so I do use them. But, I try to be very mindful of how these different tools play different roles in my creative process. Because, like you said, being in flow is a really important part of getting to good work for me.

I think sometimes people have this really mistaken view of the creative process where they imagine, like if you're making ceramics, these people would think you can just say like, oh, I want a pot that like, looks like that. And then a robot to go make it and looks, it comes out. But no, like when you do ceramics, you're like feeling the clay and like you're in a feedback loop, right?

And like, you're, you're, you're shaping something. And as it takes shape, you're responding to the way it is now and quickly acting with your hands. And there's this, very magical, creative thing that anyone who does creative work has felt at times where you're kind of like in this loop and things are just clicking somehow, and I don't wanna lose that.

I think, um, losing that would not allow me to do my best work.

[00:48:57] **Ridd:** Yeah. I mean, it's like the friction drives the thought [00:49:00] and so much of what we try to do at a system level is eliminate friction, but at what cost? Hmm. Before I let you go, I want to tap into your experience as someone who really is able to kind of straddle the, the fence here of design and engineering. You have the rich coding background, you're working with these tools, you're pushing things forward. So do you have any lessons learned or tips for designers who are not as far on that journey?


## [00:49:27] Advice for designers trying to become more technical

[00:49:27] **Ridd:** Maybe they've just started dabbling in Cursor or Claude code. They're actively trying to invest in this part of their practice as a designer, but still feels kind of early. Anything you wanna share with them before I let you go?

[00:49:40] **Geoffrey:** I think the thing I would say is something that applies to me too, which is that when I'm using AI tools, I'm always trying to think about how can I be picking up stuff as I go and learning from this experience and getting more in the details faster using the AI rather than staying away from the details.

And I think it requires active effort to use AI tools in this way, but it is absolutely [00:50:00] possible to do it. So, concrete example, maybe when I ask Claw to do some things, sometimes they'll say, give me the plan and then I'll go do it. And then if I get stuck I'll ask you for help. And I'm doing that intentionally because that's forcing me to go through the friction of actually learning what's going on here and Maybe I'll have it do stuff I already know how to do, but for stuff that I don't know how to do, I'll do it myself. Right. And I think for anyone on any point on the technical spectrum, there's always new stuff to learn, always new things to pick up. we have the best learning machines ever invented now, but they happen to also be cheat on your homework machines at the same time.

And so every day we get to make a choice. Are we gonna cheat on our homework? Are we gonna get better? 

[00:50:37] **Ridd:** Something I've been very aware of recently is the difference between when I'm using cursor and cloud code in default settings where I have to approve everything. You know, like cloud code out of the box kind of slows you down in a way that maybe, I don't know, maybe that's how it ends with Flow State, but it is, that's learning mode for me.

You know, like I'm trying to get a little bit more intentional about, okay, you know what, I'm, I'm actually gonna read this, [00:51:00] like I'm, I'm gonna try to make sense of this. Maybe ask a follow up question and then I'll hit approve rather than sometimes in Cursor it's a little bit easy to kind of just start scrolling more quickly down the chat history.

[00:51:11] **Geoffrey:** Yeah, that's funny. I mean, I would even push further on that and say, so yes, a proven commands is one way, but can we do better? Right? So maybe it just goes and does the whole thing and then it comes back to you with some learning experience. It knows your context, it knows how much you know, and it's gonna try to teach you how this thing works.

So what if it like, puts together a 10 minute video teaching you how it works with interactive diagrams and then quiz questions that you have to answer to check for understanding, right? Like, why aren't we doing that? I mean, it's that sort of stuff is on the edge of current capabilities, but I think it's absolutely doable and. We should be demanding really, really good explanations of what the AI did that bring us along as humans. And I think, you know, that's a very under-explored area

[00:51:52] **Ridd:** Wow. I hadn't really thought about that before and I immediately, the picture in my brain was almost like [00:52:00] TikTok style, you know? Like, just make it as engaging as possible. Show me what you did and have me participate in that ideation process. That is very, there's so much in that

[00:52:10] **Geoffrey:** and there are, there are simpler versions of it too. Every time I review a code pr, now, whether it's one by a human or an ai, I ask AI for help reviewing it. So I'll say, tell me what's basically going on here. Gimme an overview. What file should I read in what order? What are some things that I should look out for?

You know, AI can help us be more critical with our thinking, not less.

[00:52:28] **Ridd:** Which I'm sure that you are in the throngs of experiencing that notion onboarding to a very large code base.

[00:52:33] **Geoffrey:** This is a huge thing for me. Onboarding disco base, like it is very, in my first months at the company, it's really useful to me to actually learn how the damn thing works, uh, rather than just like have everything done for me. Right. So, um, it's both like a huge accelerant and like a bit of a, dangerous crutch if I don't use it the right way.

I think.

[00:52:52] **Ridd:** Well, Jeffrey, you've left me with a lot to think about. I really appreciate you coming on and taking the time today to share some of the things that are rattling [00:53:00] around in your brain and. Congrats on the role at Notion. Very excited to see what you bring into the world.

[00:53:05] **Geoffrey:** Thanks so much. Great to talk to you.

