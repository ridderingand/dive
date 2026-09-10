---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: RO9KwjKIrXI
slug: 2024-09-04-henry-modisett
source_type: descript
source: https://web.descript.com/8f4aaa2b-d7b8-4210-90c8-d059d805d254/3edf3
guest: Henry Modisett
host: Ridd
title: "Designing a unicorn AI startup"
published: 2024-09-04
duration_min: 50
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] 


## [00:00:00] Perplexity's origin story 

[00:00:00] **Henry:** So I worked with two of the co founders. Previously, we worked together at Quora and when they started the company, so their background being in machine learning and AI, they started building stuff, trying to figure out what they wanted to do. They were very much just exploring the technology, um, specifically LLMs.

And at one point, I think just sort of checking boxes, they, they, someone was like, we should have a designer and I'm pretty sure I'm the only designer that they'd ever met. So I got lucky, they knocked on my door, uh, and I came in just really as a consultant just to kind of help them get some interfaces, put together.

They weren't really sure how design worked. but they knew that they needed some help. This was in an era for me where I was doing a lot of zero to one consulting and had been doing my own startup.

what I, what I really, really learned very strongly was regardless of what you build, you need to make it really easy for yourself to build. And so the first thing I did was build a component library for them. We didn't know what the product was going to be. We didn't know how it was going to work, but it probably needed buttons.

It probably needed like [00:01:00] a grid. I need a type system, a color system. And so I built all that out, not only in a way that, you know, you could compose a product once a day if you want it to, but also in a way that would be very easy to change that system. So if we did need to change the colors, we didn't, you know, swap out a typeface.

So I built all this for them in react as, you know, kind of the first thing, not knowing what we were going to build. And then that like let us go through a lot of very quick evolutions. the first product being. An exploration around natural language to SQL generation. and then eventually we were able to combine, an LLM with a search engine API, just to see what would happen.

And naturally we're just asking questions just to see what it could do. And in the crappiest version of that, it was the most important piece of software I've ever used. Like I'm being dramatic, but having worked at Quora and thinking about how people get information a lot and what it means to ask a question and get an answer and how basically the status quo is, , it could be [00:02:00] really slow.

It could take forever. It could never happen. And so the idea that you could just get your answer and you could type in anything and it would get respond. I mean, that's the, that's the beauty of like the chat. experience around at LLM is that no matter what, it will always say something instantly, even if it's wrong.

So getting that working was a definitely a personal like aha moment that, gave me a lot of conviction.

Hey, if we can get this thing to be good every single time people use it and we can, you know, get the, get people to know about it, then how could this not be an important product? We started going fast. We went from discord bot prototype to crappy react app.

and then we tweeted it and we didn't do a launch strategy. We, you know, we did everything wrong. The brand was like something that I put together in, in a few hours. There was no go to market plan. It was just like, get something working and share it. So we built that. We tweeted, it kind of went viral. and then we built a second app. that searched only over Twitter. And what was cool is it was like significantly [00:03:00] better than Twitter search. And, and Jack Dorsey retweeted that. So that went viral. So we were just like pumping out these essentially tech demos.

but what we noticed is that like people kept using it, it was definitely, you know, not really a product, we were just trying to show that, that it could be done and it could be done quickly, but we noticed the traffic didn't really stop.

and then that was sort of the beginning from my perspective that we knew that we should really try to capitalize on this.


## [00:03:24] Why Henry started by building a component system

[00:03:24] **Ridd:** It's interesting to hear you talk about the component systems as one of the first steps, because I think there is this like sentiment change happening right now that I'm noticing where people are kind of becoming anti design systems and the pendulum swinging back. And we kind of throw the baby out with the bathwater a little bit.

And it's like, no, we can't think about components. And it's like, no, you actually prioritize components because you didn't know what you're going to 

[00:03:47] **Henry:** like Ivan from notion said, Oh, we don't have a design system. I think I know what he means by that, but I don't know what he means. Cause there's no way your engineering team isn't writing reusable code. Like [00:04:00] otherwise they're not doing a good job. So I am assuming he means like in Figma, which yeah, sure.

I mean, that's probably a waste of time, but you gotta make, I mean, surely when you're making a button in the code, you don't want to rewrite that every time and you don't want it to be like, you don't want people to go to add different typefaces and different parts of the product. So if that's true, like you've got a design system, right?

I mean, we're just, it's just like semantic, it's just a semantic argument and it's not a very important one. The most, you know, because you, you need the product to feel like coherent and then you also need to make it easy for your engineering, you know, engineering, how could you not write reusable code?

The whole point is to go fast. The whole point is to make your life easy and not reinvent the wheel. the ground truth is the code, because that's what users interact with, right? I wanted to make it really easy for myself to build new features. I think there's like a very kind of clean distinction between interactive elements and features.

And I wanted to just give myself a toolbox so that not knowing exactly what the product would be [00:05:00] or how it would work, And make it very easy to assemble that product experience. Like, you know, there's stuff that you absolutely need. You need buttons. You need to be able to put text on the screen. You need, blocks of color and things like that.

So any startup that I've built over the last couple of years, like that's always the first thing I built. because that lets me go fast and lets me kind of like tinker and not be like stuck in the, you know, specific thing.


## [00:05:21] Henry's strategy for positioning Perplexity

[00:05:21] **Ridd:** Okay. So let's keep going in the story. Then you have this raw set of technology demos. It's very clear that something is there and now you're kind of responsible for helping everyday people build an affinity with perplexity. So can you talk a little bit about your strategy for the creative direction for perplexity as a whole?

And also like, what did it take to consumerize this brand?

[00:05:48] **Henry:** Yeah, for sure. a lot of my, original contribution was just getting to think about like, okay, given how this technology works, what would make it useful for people? Like, how does it actually fit into people's [00:06:00] lives? that led me to try to find a very colloquial framing, which is answers.

it's something that like anyone can understand. It's also something I'm familiar with and thinking about. And so I know, that it resonates conceptually. people need to know things every day, whether you're a high school student or an investment banker, or you're selling an argument in a bar, right?

It's truly very universal. So I think there's sort of a product mechanics answer to your question, uh, which is the product need to be super streamlined. There's a few kind of, you know, consumer product design principles that make a, that make a product actually successful.

Primarily though, it needs to be fast and not just technically fast, but it needs to be cognitively fast. It needs to be like easy to understand, easy to try. You can't make the user do any work, you know, it has to have really good defaults. It needs to just like work perfectly without the user Barely even yet able to think about it.

The market at that time it was just all crazy tech demos.

Nothing was easy to understand. Everything was [00:07:00] really complicated. very AI forward in the framing. more about tinkering and enjoying the, the, the novelty effect that we were all in. Like, Oh my God, these models, they're also cool. They can do different things. there's, There's.

websites where you could run two side by side and see, compare the difference, right? That stuff's amazing, but that's not a consumer product. and so just kind of like knowing the difference helped a lot at the beginning. It's like, okay, you know , we're trying to make up an app that people are going to put on their phones and use every day all over the world.

That's the upside of this technology. It's not, yeah. the technology itself. It's the packaging and the framing and the sort of like meeting people where they are. So there's a product mechanics answer. , and I think there's something in the middle, which is for me, perplexity is a tool that you use that empowers you.

It's a, it's a, like a subway system. It's like a utility. You are using it and getting value out of it. The product should be out of the way. You shouldn't be thinking about the product. You shouldn't be experiencing the [00:08:00] product. You should be getting the value. 

The brand is really, really meant to be pulled back when you're using it. , and a big decision with that is to the extent that we do or do not anthropomorphize the AI. Or even mention the AI. I really don't want people to have to think about AI when they're using perplexity. I want them to think about What do I need to know?

And then just ask for that and then you know, and then you put your phone away for us, it's just kind of been, let's just be really good at answers but we can do it in a way without really talking about AI because the AI is just how it works.

And I don't think people really care how things work. They just want the value. And especially when you're building a free consumer product. It just has to work. It has to be fast. That's pretty much it. 

So then on the brand side, I think brand strategy is a game of contrast. All of the different competitors that we have.

It's a bit of everything, especially at the beginning. It was really like, okay, there's a lot of other startups. How do we distinguish ourselves? Well, do [00:09:00] things differently than everyone else. And at every little detail, not presenting AI company, , going and working with the brand agency that doesn't normally do tech that kind of leads to a different aesthetic outcome?

And also just kind of like investing in brand in the first place, like earlier than, you know, maybe anyone else would have just because, Hey, suddenly it lets us look a lot bigger than we are. It lets us kind of appear a lot more serious than we are. so investing in that sort of facade, I also think like a big part of brand strategy, especially for a startup should be about recruiting.

that's like actually most of the value you get at the beginning. People want to work for something that they're proud to wear, so if you know you're trying to be big and you know you need to hire a lot of people. You have to invest in brand that that's going to pay dividends and then becomes a self fulfilling, prophecy where the product and the company becomes successful because you made a brand that recruited people and there you go.


## [00:09:54] Henry's role as the very first designer

[00:09:54] **Ridd:** I want to talk about the recruiting and people part for sure. But maybe [00:10:00] before we get into that, I'm going to learn a little bit more about your role as the only designer for this chunk of time at perplexity. Were there other ways that your initial role existed outside of the traditional designer box that we imagine

[00:10:17] **Henry:** I think at the beginning, you know, the sort of beautiful chapter that you get to have of being a founding designer is. whatever it takes mentality. I love thinking about product strategy. I love thinking about design. , and I love doing engineering. , I want to figure out why we're, what we're building and why.

And I want to get something working as fast as we can to sort of see if we're onto something. And so I think my, uh, my strength is, is that that era of just rapidly pathfinding and having the skills to do it, you know, where you're getting to an interactive thing really quickly. it makes me happy to, to get something working and to get to share it and see, you know, see somebody try to use it.

so that, a [00:11:00] lot of my job at the beginning was just that like rapid development, of, you know, getting the product experience, working and shaping it. And, I went through, you know, a million revolutions of just, um, Trying something, hating it myself, changing it, you know, sharing it, you know, whatever, just if you get really good at that, you're much more likely to survive.

I think as a startup, because you get to like rule out or double down, more, more, uh, quickly,

[00:11:24] **Ridd:** when you're operating at that much pace in the early days, how much of. Your iterations are inspired by outside feedback versus your own taste and judgment.

[00:11:34] **Henry:** I would say like 90 percent my own taste and judgment. because if you want to build something novel, most people are. going to help you do that. You have to like see something through, you have to have some conviction, you have to have some North star in your head. there's a variety of ways to explore that.

But I think even if you did mock ups or prototype and you got to that North star in that, uh, in that type of tool, you can't [00:12:00] really share it with other people because they're not going to experience it in the real way. and so you're not going to learn that much. I mean, you might get like visual feedback, but that's pretty useless at this stage.

you really want to make sure that you're building a product that is doing something for somebody, there's utility products and then there's entertainment products. If it's utility, it's gotta be useful. It's gotta be so useful that like the alternative looks pretty bad suddenly.

I think it's not that hard to come to that conclusion, but you have to sort of see the end state of what you're, you know, you have to have some vision for what that is and you have to have the conviction to see it all the way through. I think getting feedback halfway through often isn't actually that helpful unless you've got the shared vision.


## [00:12:39] Henry's skill as an engineer 

[00:12:39] **Ridd:** Can you share a little bit more about your background with engineering? You've mentioned code a couple of times now, like when you are sprinting at this North star, especially in the very early days, how much are you writing code versus exploring and design tools or something else?

[00:12:52] **Henry:** I've always worked as a designer, but most of my jobs I've written UI code. It helps me think more [00:13:00] clearly when I'm working in the environment that users are actually going to use, right?

It helps me kind of like build this sort of empathy quicker. , thinking through the sort of the flows, the hover states, , the details like, okay, when you load up your browser and it's in this weird size, does it still make sense? Because everything's so dynamic, I get sort of bored , in like a static representation of that.

It's missing all the details that really matter. I would say at this point I'm kind of uncomfortable in like a static tool. Obviously I'll do things like color exploration or I'll do like napkin sketches, like, okay, here's some gray boxes that kind of.

Set the grid or, you know, here's some layout options like that stuff is obviously way faster, but anything that's, uh, interactive or, , meant to be the real thing. I'm more comfortable in code. It's just kind of, I guess how my brain works. , and then the nice thing is like that when I get the design, right?

Well, we're done.

[00:13:56] **Ridd:** You're done.

[00:13:57] **Henry:** Yeah. Or, or I find a [00:14:00] bug on the site. I go fix it. I Have like a emotional attachment to the product, right? Where it's like, this is my thing. I made this and I lose sleep overnight if it's not good because I'm the only one that can make it better.

I think that's an important feeling to have in a startup. It's sort of like a live or die mentality. And when you're the one writing the code, you know, it's just you like, so I'll show somebody and they'll, find a bug and I'll be like, I'll be hurt. I'm like, I made that bug.

But I can fix that. I'm empowered. It's just sort of like the, combination of empowerment and accountability. There's like a lot of love that comes through, I think in the product because of that.

[00:14:36] **Ridd:** It reminds me of something that Dan Lasavita said, one of the co founders of play, he talked about how the more abstracted you are away from the end product, the less accountability you feel. So it's interesting to hear you talk about the flip side of that.



[00:14:50] **Henry:** Yeah. No, that makes sense. The challenge of being a designer is always sort of maintaining that empathy and trying to remember what it's like to sort of see this and use this for the first [00:15:00] time, right?

You want to like clear your head a little bit, go outside and come back and look at it again or try it again. and I think, I think it's so much easier for me to get to that when I'm working on it in code.

[00:15:11] **Ridd:** not just sprinting at this vision for what the product can be. You also are kind of designing like the process and the design culture at perplexity from the ground up. And something that you said to me that I thought was pretty cool. You said the whole thing is a passion project and how I wanted it to work.


## [00:15:28] How Henry is shaping the way design operates at Perplexity

[00:15:28] **Ridd:** How is that reflected in the way that design operates at perplexity?

[00:15:34] **Henry:** I've always felt like a fish out of water when I've been on a team that like sort of has like a very rigid process. I worked on a gmail a long time ago, but at that time we were, we're using Photoshop and the process was everyone needs to explore five versions of every idea they have and we would like print out all of our ideas and like put them on a board.

And you know, everyone would huddle and give feedback. At the time I felt there was a lot of things wrong with [00:16:00] that specifically because Gmail, it's really hard to make decisions about an email product, without like actually using it. It's a dynamic system.

you know, so if you're trying to evaluate like even a basic thing, like what's the unread indicator look like until you try it and maybe like miss an email that was important to you, you can't really be confident in the, tiny UI decision, let alone like any deeper product mechanics. The next thing I did was I worked at Quora, which had a very strict design process in a different way where , every designer was coding, like we were writing Python at the beginning.

And that also led to a certain type of person working there and, there was sort of like a collective limitations of our skills and our, you know, our strengths. I mean, it certainly led to something special, but. my feeling coming out of all of that was I want to just build a collective of different types of people rather than have a dogma around process or skills.

I think there are a lot of companies will feel like this is the sort of ideal designer, for like, this is how they're [00:17:00] supposed to think on our product. And I'd like to flip that upside down. I want to bring in people that do think different ways that have different backgrounds. And sort of create a culture of like cross pollination.

What I'm trying to do is essentially take the, type of person who would be a founding designer.

So someone who's like very versatile, has the grit to sort of see things through, has the sort of ability to plant flags and have conviction about an idea, and then, and then the ability to sort of communicate and evangelize. And so these people are very independent , and sort of self motivated, , and versatile.

And so if you get a bunch of those people, well, then you've got like kind of an interesting team. The joke I like to use is it's like, you're, you know, the ocean's 11, like heist montage. You're putting together a squad and they all bring some kind of totally different skill, but it's like the sum that.

That leads to the heist. so I think the process that I've tried to build around that is one of, a bit of decentralization. I really care first and foremost that we go really fast. And so thinking about all [00:18:00] the ways in which a design team can slow down a company and trying to just like get rid of that, over exploration over, sort of critique and debate and talking.

over sort of a session on visual design. whereas instead we, we don't have like a fixed critique on, you know, every week or anything like that. we talk much more about like product mechanics, thinking about like, well, how's it going to work? And, you know, I, like I'll, any project I'll try to just write in notion and write a doc, say, here's the vision, here's how it should work, let's start building.

Everyone has a lot of ownership and everyone gets to ship a lot of things.

what are we doing otherwise? We're trying to make software for humans out in the world. And I want to feel like I, and I made a lot of stuff and I got to share a lot of things with , with the world, with my friends. I want anyone that has a chapter on our team to sort of walk away with this like mountain of work that they can share.

Look at all the stuff I did. You know, I'm, I'm maybe exhausted, but I'm proud.

[00:18:54] **Ridd:** Okay. So I want to go pretty deep on this velocity at all costs [00:19:00] mentality. You listed three categories, spending too much time on debating designs, exploring designs and visual design. And maybe we could even just touch on each individually to figure out what actually needs to happen to ensure that you're not spending too much time on these.


## [00:19:16] How design at Perplexity makes decisions quickly

[00:19:16] **Ridd:** So for debating, you mentioned the documents. My assumption is that Maybe there is a level of top down vision that is required to ensure velocity without over debating things. Is there more to that strategy?

[00:19:31] **Henry:** I think first and foremost. You have to have a very clear decision making structure, right? People need to feel like they know who makes decisions and designers on a project need to feel like they know that they can make a decision or they know that I can make a decision and that's the end of it.

you know, it doesn't need to get like approval from a bunch of different people. Like, you know, the organization needs to set up, be set up in a way where like decisiveness is valued because the, you know, uh, the alternative is [00:20:00] death. If it's a question of user experience, the designer on the product needs to just decide, and if they want help or feedback, build a brain trust for this problem. And I expect everyone to do that, right? You know, you shouldn't work in isolation, but you should be able to know when you need help.

or when help would be actually helpful, right? Like a lot of times feedback is actually not that helpful. It's pretty easy to spot when you know that something could be better. And on, on a micro level, I think, there's a lot of little decisions that we make all day.

And Most of them don't matter that much. And so it's better to just go with your first decision, your first gut and get it out the door. The real answer is if you're so obsessed with going fast, then whatever you did last week that you don't like, you can now fix it this week. It's not like you're just leaving all this, you know, half thought through stuff in the dust. It's a constant iteration. and especially with a product like ours where the user experience is completely non deterministic. Every time you use it, you get a different thing, you [00:21:00] get a different outcome.

Right? And so it's really important for me to get anything working and then just kind of obsess over it. Like you're like molding clay or whatever, until you feel like it's good enough and then, and then you're done. , and then if it's not good enough, you can make a new one next week. it's not that hard. So as long as you've invested in the, pace of creating, right.

[00:21:20] **Ridd:** How do you create a culture where you actually do go back and improve things though? I've heard a lot of leaders talk about this and then what ends up happening is you don't explore as much as you can. You cut corners on some visual design And then you move some like linear tasks into a fast follow bucket and then you never look at them again.

And you do that 15 times over two quarters. And the next thing, you know, you have a little bit of like a Frankenstein product where you feel it in aggregate. Especially as a consumer product where you're competing against other interfaces that have really, really high bars.


## [00:21:50] Maintaining quality while prioritizing velocity

[00:21:50] **Ridd:** How do you ensure you don't end up in that place when prioritizing velocity at all costs?

[00:21:54] **Henry:** The first answer to your question is it's not always worth going back. And that's something designers have to accept. [00:22:00] Like, not everything needs to be perfect. there's like, not every surface area is, is equal. Like, there's power laws everywhere. it's okay that the settings page in mobile web isn't as good as the one in the iPhone.

there's a bit of like a, sort of a welcome to reality, value. we have to chase. ROI in terms of like what are we actually going to make great? Because then you get to spend that right like if you if that's the culture Then you can be like look This experience needs obsession And we are going to go back and we're going to work on it until it's ready I get to play that card because i'm Otherwise quite thoughtful about you know, like if I said that about everything everything's important every little corner needs to be perfect Well, it'd take us forever to build anything You And I also would kind of not have the credibility, right?

But if I'm like, okay, most of the time, this isn't that important. And, you know, I think obviously there's a minimum bar, right? And the way you get to that minimum bar is with a good component library. It should be really hard to make something that looks shitty. it should be hard to program something that looks shitty.

so there's like [00:23:00] that level of, you know, I don't want to, I don't want to ship anything bad, but, whether it's a dropdown menu or a modal. those are things that you could debate and I think you should a little bit, but you should go with your gut. And if you want to change it later, you can I think , the hack that I have and that our team has is if you have designers that code, this just happens.

I'll go back and fix things or make things better just because I have an hour it's not like a process problem. It's just like an empowerment problem. or if you have design engineers that sort of have those values, like whatever it is, right? If you build a culture where people really feel like this is their baby and they lose sleep when it's not as good as they want it to be, this stuff just happens.

It doesn't need to be part of the process. It's embarrassing if it's not good. Right. That's how I feel. if you, if you let that happen, if you create that culture and empower those people, and also of course, as a leader, I want to reward people for doing that.

I've all the time, someone on my team will just go in and make some little thing really nice, [00:24:00] unprompted. And then, so I want to make sure that they're acknowledged for that because that's what I would have done. that's the hack. Like if you have designers that code or you have design engineers that care and feel empowered. Then this kind of thing actually just happens automatically.

[00:24:13] **Ridd:** I love the distinction between a process problem versus an empowerment problem, because I think you're right. I've worked in different types of environments where when I am into the code base, I can spin up my own PRs and just fix things. I do it because I want to. And I take a deep level of pride in a little interaction or fixing a hover stage or some kind of an overflow bug where when I'm removed from the code and I have to go through engineers.

It puts more pressure on the initial release. Cause I know that I'm going to have to effectively resell all over again, someone else on why they should take the time to do this versus what, you know, they're being expected to work on that week.

[00:24:51] **Henry:** for sure. And, and that's, and that last thing you said is where it all dies, right? Even if you work with an engineer who's like, Oh, a hundred percent, I'm with you, that's totally worth fixing or making [00:25:00] better. But then they're like, but my boss is telling me to work on this other thing and like, I have to do it.

, and like I said at the beginning, sometimes that's totally right, right? We all have to have the sort of strategic taste to know what's worth spending time on. , but I think a lot of the lack of polish is just so easy to fix as long as you made it easy to fix from the beginning.

[00:25:18] **Ridd:** Even coming full circle to where we kind of started this conversation, which I didn't plan to at all, but like with Notion, right, we have this whole dialogue that's happening right now about, well, Notion doesn't have a design system. And the fact is like. Yeah, but they hired exclusively designers who can code in the early days.

And that's a big part of what makes that possible and allows it still to be a highly crafted product. So my question is given all of this context and way of thinking and way of working, how intentionally have you hired designers who can code in the early days?

[00:25:48] **Henry:** So for the maybe first six months of the company, I was doing everything myself. Product design, I did the brand, well, and my, my claim to fame. is I got to be the before brand and, on the under consideration [00:26:00] blog before we did a rebrand.

So I got to be on the, the before section. , so, but, but, you know, trying to compensate for what I felt like , I was lacking hired a brand designer fee. Who's a genius and he's just so happy and you can see it coming through and his work. that was mostly what I was thinking for a while. It was just like, okay, what am I not good at and how can I compensate for that?

Just to like balance myself out, start balancing the team out. , but as we were becoming more successful, knowing, that it would be harder and harder for me to find the time to do IC work, I definitely wanted to basically replace myself. and so I did hire a designer that codes. Cause actually for most of the history of the company, no engineer even knew how to write CSS. I tried to take vacation once and it was a disaster. It was like a way for me to solve the problem of how front end gets built, without having to hire two people. Right. I could hire a designer and we could hire a front end engineer.

, I happen to know another designer that codes, and so it's like a, an easy win. I do believe in that impact. However, the reality is most designers have not [00:27:00] written production level code. They've not had to solve weird bugs in Safari.

And they don't know how to do code reviews. And, and all the stuff that Is important. You know, we're going to, we are part of the engineering team. We have to play by the rules and follow the processes. And so I think it's a lot to ask, , to find designer that, that has done that before or is comfortable in that.

, so there's a whole spectrum of like sort of engineering capability, right? All the way down to like prototyping and tinkering and, and, and even just curiosity.

[00:27:28] **Ridd:** I wanted to get into specifics on how you work as a team. And something that's clear, listening to your talk is that there is like no one process or way of doing things at perplexity. So maybe I can even create a little bit of a spectrum. To give you an opportunity to talk about how you work.


## [00:27:44] Contrasting designing Perplexity Pages vs. the voice interaction on mobile

[00:27:44] **Ridd:** So on one end is perplexity pages and on the other is the voice experience on mobile. Can you use these as examples to highlight the different ways that you design and ship products at perplexity?


## [00:27:56] Designing the mobile voice interaction

[00:27:56] **Henry:** yeah, for sure. The functional North star voice [00:28:00] is like predetermined, right? If I said we're going to build voice to voice, everyone's like, okay, I know what you mean. There are lots of challenges to getting it to that north star in terms of engineering, in terms of like sort of the details of interaction design.

And so I really think of that as like a brand and interaction design problem. And so, okay, what's our best process for figuring out that? Because we already know how it's going to work. It's not complicated. And so to me that's like the perfect candidate for prototyping. And also a key component of it is going to be animation.

So , we're going to use after effects or some way to sort of practice and explore animations and that's kind of how I like to start everything off, right? Okay, If you came to me with that, okay, we're going to work on this project. Then we go through like, okay, how do we, how are we going to do it?

Like who, you know, who's got the right skills? What are the right tools? , do we have everyone we need internally to do this, it's like, if we're going to take it on, I want to nail it and I want it to be special. Because, if you start to like, Lose that live or die aspect of every project.

I [00:29:00] think you kind of lose the zeitgeist of the company, the designer that worked on it, his name's Gunnar. He did prototype a bunch of animations and after effects. He, , went through some iterations in, in Figma and, and, uh, in prototyping kind of like, how do you get into this and how do you get out of it?

How does this fit into the product and how does it connect to the existing concepts, right? Like, is it sort of like a. A layer over all of our other concepts. Is it a total like different product experience?

It's disconnected. , and one of the interesting hard problems is do we do push to talk or voice activated and this is something that we did debate a lot and we had to actually build to sort of feel the difference. I've always felt that voice activated is really frustrating. , and having to learn like a keyword that you say, you know, Hey, Hey, perplexity, 

in the end, that feels slow.

The product needs to operate at the speed that you can think. It's a lot easier to just tap something and start talking. It's a lot faster to do that. You don't have to learn anything. There's less room for error [00:30:00] to getting into the experience.

And so that was the process is just trying out these things and sort of validating or invalidating some of that. And Gunnar made some cool animations and, that was it. 


## [00:30:09] Creating Perplexity pages

[00:30:10] **Henry:** total opposite. We didn't even know if it would work. We didn't know if it was possible. And so it started with the basic vision of what if anyone could make a website about something without knowing anything about it?

, and all they had to do was give it a title. And the only way to kind of See it through would be to start prototyping and start seeing if it would even work in, in the most low fidelity way possible.

You know, we literally started in terminal, with some API calls just to see like what, what would happen, you know, could it generate section titles? Okay. It looks like you can, could it generate section content? Okay. It looks like it can, you know, just going through and just like adding to this stuff. Until it felt like, We were on to something, and it was even worth building an interface for. 

[00:30:54] **Ridd:** I want to go even deeper into the perplexity interface a little bit, because something that you talk about is [00:31:00] this idea of the gravitational pull that is required for a consumer product, which I found pretty interesting.


## [00:31:05] How do you ensure simplicity in a product like Perplexity?

[00:31:05] **Ridd:** So maybe you could share a little bit about. What that looks like for you and also how do you ensure simplicity as the product becomes more and more powerful?

[00:31:15] **Henry:** Okay. So there's this thing called the curse of knowledge. The curse of knowledge is the more you know about something, the harder it is to teach somebody.

, cause it's like, you can't really remember what it's like to not know that thing. And I think that's like If you're a teacher, it's something you have to think about all the time. It's like remembering what it was like before you knew the subject a great teacher can sort of like keep , that channel to the student always.

I also think that's like a big part of being a designer first of all, not caring so much about, The sort of details that people don't even really experience, , either because they're not discerning or because they're just going Clicking on stuff, and they don't really care too much, but also knowing that some of those details really, really do matter and Being able to kind of like, close your eyes and open them again and see the thing you've just been staring at for hours.

Just seeing that [00:32:00] for the first time, trying and imagining what that new user experience would be or that, you know, or that early user or whatever. I think great consumer products, they kind of they have a gravitational pull. Like you, feel like there's no wrong way to use it. You're, you know, you open it up and you just, you know, You could be squinting or you could be drunk.

You're just like falling through it. And there's, there's no, there's no decisions. The user doesn't have to think, or the decisions they have to make are just so obvious and clear. it feels like they're on a guided path, I think that's kind of the high bar of consumer design , is making something that feels so obvious the first time you use it, that you can't really imagine another way.

there's a lot of tactics, I think, to this, first and foremost, don't bother trying to innovate on interaction design because most of the time it's not worth it. most of the time you want to sort of present things that feel familiar so that people feel comfortable trying it.

and if you feel like you need to build some teaching experience, you probably lost, lost the plot because people, and this is very, very consumer [00:33:00] design, like free product It's not the only way to make software, of course. If so, you know, if you make a video game, people paid 60 bucks for it, and there's a tutorial.

they'll learn it. Or you make some complex thing that has like the incentives to learn it. People will learn it. People learn how to use Photoshop. It's really hard to use. Right. So people used to buy manuals, right? So the wet, what I tell my team is like, you have to assume that the user needs to be able to figure this thing out in 300 That kind of forces you into a lot of tradeoffs like if you get into a point where you just kind of put everything on the screen and you're like, oh, the user will just pick which one they want to do.

it doesn't work like that. People will become blind to UI that's not prominent if it's always there. Or if everything has the same prominence and people will feel lost because it doesn't feel like there's a path. So a lot of it is, consumer design needs to feel familiar.

It needs to feel obvious. Now it's really, it's actually quite easy to get that right in your first product. Like are the first version of the product, right? When you don't even have that many features, right? I, you know, I think about medium when [00:34:00] medium first came out, Everyone's like, it's so clean and it's beautiful.

And it certainly was, but it also had no features. So it's pretty easy to do that. with, you know, with good design, right? With good graphic design, good typography, you can, you can make something that feels like that. scaling that is hard. And what's a, what, what our opportunity is given that we have machine learning, um, And AI available to us is we can, we can create kind of infinite experiences.

Based on what the user's trying to do. We can show them a very, opinionated U. I. S. On on demand. So if you're trying to find a coffee shop, we can show you the perfect interface for that. If you're trying to learn about, a math subject, we can show you the perfect representation of that information for you.

We benefit so much from being able to like classify and assemble interfaces on the fly, given like how the technology works, like, you know, as of today, that wasn't really available to us years ago. My product principle is that every day the product needs to get more powerful without [00:35:00] feeling more complex.

And that's like, to me, the sort of pinnacle of elegant software.


## [00:35:05] Perplexity's future with generative UIs

[00:35:05] **Ridd:** given that tech to classify and assemble UIs. When I look at perplexity, I think you all have like the best shot at building a truly generative UI as anyone in the market. And you're already kind of doing this a little bit with the co-pilot stuff. So maybe you could even talk about your vision for where this might head in the product, and how does that impact the way that you design?

Not only the product, but the underlying system today,

[00:35:32] **Henry:** Yeah. So the, the vision is, is I guess, very easy to say and hard to execute. So the vision is no matter what the user wants to see, we should represent that information in its most perfect form. And no matter what the user wants to do in terms of actions, we should represent that action , in the most familiar form and the most like sort of intuitive form.

Let's say I want to know the stock price of Nvidia, I could show you that in Markdown with just text, right? And I could bold [00:36:00] the latest stock price and I could do a bullet list of the history, but it would be a lot better if I showed you a graph that you could then interact with, right?

That's like a much better representation of that information. From an action perspective, , if you want to plan a trip, like I could show you a chat UI and you could say I want to go on a trip here and then it'll ask you what dates and I could type all that out.

But you know, travel websites are like the most A B tested websites ever. Like booking dot com is like masterclass optimization. The UI, you should go learn from them. And also you have to assume that like they're heavily trafficked, right? And so there's an expectation that the users have on how booking flight works and how, booking a hotel works, right?

There's a familiarity that we don't need to let go of, right? We have to, again, like this is the, if you, the trap, it's so easy to fall into of trying to innovate on interaction design. Whereas if you're thinking more, okay, what, what do people do now? And how can I recreate that in a way that's just, you [00:37:00] know, it feels familiar, but maybe it's a little bit more powerful.

well then, yeah, you're just making a form with date pickers and, uh, drop downs and. we may be dynamically generating that perfectly for you based on your preferences, but the user doesn't need to think about any of that, you know, people know what to do with a date picker and it feels familiar and it feels real, it feels precise, , so, things like that will show you the right UI for the thing you're trying to do.

That's the vision, and I think from a design perspective, it helps to be thinking about it more conceptually. Like I just explained it to you, and I think you get it. If I went and tried to mock up all these outcomes, it would take me forever.

And it doesn't really help me convince you to build it. It doesn't really help everyone kind of understand what it is. It's a lot easier to just be like, here's the plan to represent that with like a thesis and, and, you know, maybe some use cases and a few napkin drawings, and then just get into the code.

So our process changes into, you know, designers are thinking about this [00:38:00] experience, but they're not communicating it with mockups. They're communicating it with guidance and, and those, that guidance can be represented with just like ideas and conversation and, Maybe a few basic mock ups, but, that's how the process changes.

It becomes much more of a collaborative end to end product crafting process, rather than like design, handoff to engineering, and then something's working, right? Because you cannot design all the cases. You have to, just explain what the user's gonna get, and what the vision for the product experience is, and And then, you know, you and the engineers, you build it together in a very collaborative conversational process.

[00:38:38] **Ridd:** So you're marching toward this world with seemingly infinite interface combinations in the short run. You're not quite there yet. So how do you organize and keep track of the different templates or visual artifacts that represent the States? Cause it, to me, it's like the more that you [00:39:00] exponentially increase These combinations, the more difficult it is to even keep track of what our product can become.

How do you deal with that tension moving forward?

[00:39:10] **Henry:** It is a UI systems problem, right? So I'll give you an example. we're designing a UI. For what we call entity comparison. So if you have two entities and the user wants help picking between them or three or five or a hundred, we need an interface for that. And those entities could be dog breeds or movies or restaurants. the interface actually for all of those is doesn't need to be different. And so we designed that and we test it on use cases that we can think of, but then at some point you just have to trust that it'll work for all the other ones that you didn't think of and be okay with that.

Like part of part of designing a product like this is being okay with percentage outcomes. Sometimes it's going to suck, right? and we have this in a, in a very basic sense right now, the LLM is writing markdown. It has the choice on which markdown elements to use. [00:40:00] And sometimes it does wonderful formatting and sometimes it vomits out this awful thing and, and there's no amount of CSS I can write to fix it. But I accept that and, and, you know, try to squash that percentage down by, you know, getting to the root of the problem. You're building the system, you're giving it tools to use, and hoping that it works most of the time. That's the best you can do.

[00:40:22] **Ridd:** I want to zoom out from perplexity a little bit and talk about how designers can identify opportunities, leverage AI in their own products that are probably lagging in terms of making use of this new technology and something that you said that stood out to me was you said products are going to go through a period of transition.

Where they move in and out of generative experiences.

[00:40:45] **Henry:** Yeah.

[00:40:45] **Ridd:** What do you think this is going to require other designers to think through once their company all of a sudden kind of becomes an AI company?

[00:40:54] **Henry:** If I could wash away everyone's anxiety, I would. And I think there's anxiety in a bunch of ways, right? There's [00:41:00] anxiety about what does it mean for design and designers? can we be replaced?

You know, there's, there's sort of conversation around that. But I think, what we have available to us basically new tools to solve problems , that we didn't have before. You have the ability to like change how a lot of things are represented on the interface that you wouldn't have been able to do before.

I think like for example, before we had even built login perplexity worked in every language, which is just because of the nature of LLMs. it wasn't that hard to, to sort of get that working. It was, it was more work to build login. and, 10 years ago, it, that would have been an insane effort, like a huge expensive thing to internationalize the product and, and, and everything.

it's like, if you understand what's possible and you also understand deeply what your product is trying to do and what your users are trying to do, , you'll find that there's actually like all these shortcuts available to you that weren't before, in terms of like the product experience. I also think.

this is like an age for startups to disrupt bigger companies that are sort of stuck in how they operate, , [00:42:00] stuck in how their product works. And I think, you know, there's an opportunity to just like , take a really popular product and make it feel faster or more powerful or more magical. and you can sort of rapidly get yourself there and then present like a really kind of crazy alternative to a popular thing.

I don't see. Any reason why that can't happen all over the place. So I I would love for everyone to sort of see the world that way right now. I think it's very exciting I I do think there will be a lot more smaller companies building challenging things 


## [00:42:31] How Henry learned what's possible with AI

[00:42:31] **Ridd:** And I hope that a lot of those companies are led designers using cursor AI or something like that. A lot of it does feel like it works backwards from this understanding of what is possible from a technological standpoint, perhaps more so than ever before in the history of making product. Can you share a little bit about your process for figuring out what is possible with these models now that you've had to really, really ramp [00:43:00] up on this space? And I'm not going to let you say, well, I just experimented. You have to get more specific than that.

[00:43:06] **Henry:** there's two important things to understand. One is, yeah, what's possible. But also what's useful or what's fun. Nobody gets to sort of think about one thing anymore. You have to think about the whole point of the product.

You have to think about, well, how does it fit into people's lives? Because if you really believe in something, you're more empowered than ever to build that. But you have to believe in something. You have to believe that like, this thing I'm building would be useful, even if it's just for me and my friends.

, or this thing would be really fun if it worked, and I'm going to make it work. That's the most important thing. Understanding the technology, I don't think you need to understand that much. You don't need to go read papers on archive. There's a lot of tech demos out there.

I mean, we are in an era of tinkering, which is amazing. You know, people are trying out all kinds of stuff and sharing it. Oh, check out the model. It can do this. I built the prototype of that. And these are mostly non designers that are [00:44:00] doing this and they're not thinking about product at all.

They're just showing off the technology. You can get a pretty good understanding of where things are. I think now, I think the harder part is understanding the trajectory. You know, a lot of people will be very dismissive about AI because, it's not good. You know, it can't replace me or, you know, and I don't think it ever will or needs to replace anybody.

I think people are defensive because they feel under threat.

But as I think if you're more looking about like, what, what is this thing capable of and how can I use it and how can I make something with it? That's more empowering. And you know, it's kind of like on us to make companies and products that will make the world better. and I don't, I don't think there's any reason to be dismissive of it.

And you have to just assume that everything's going to get better like really quickly, more powerful, , more capable. And so then if you're really thinking about like, well, it would be really great if such a product could exist. you might as well start building it now, even if it's not perfect yet.

So


## [00:44:58] Henry's prediction for AI hardware

[00:44:58] **Ridd:** hardware prediction that you've [00:45:00] been mulling over. You want to share that with us?

[00:45:02] **Henry:** Before the two thousands, 50 years or 40 years before the two thousands . One of the most popular products that people had was radios let's say from, you know, Dieter Rams up into Sony in the nineties, there was a sort of amazing industrial design competition, cause the radio essentially she's a solved problem from a technological perspective.

And the content sort of was agnostic to the interface, right? any radio hits the same content, anyone can listen to it. And this isn't always true, but it actually, there was an era where design was the edge and people made purchasing decisions because of design form and function. most industries actually like design is table stakes.

It's not like an actual mode. or competitive edge and so my prediction is, well, and I kind of hope that this is a hopeful prediction is that I think with there's sort of a few, things happening right now. One manufacturing is, is easier than ever. you know, all you need to do is WhatsApp chat with a [00:46:00] factory in China and you can get something made.

, but also there's like sort of, because all these frontier AI companies have made API's available, there's essentially like a commodification of basic AI interaction. And The interface into that is actually quite simple, right?

It's natural language. It's like a sort of a universally understandable concept and anyone can do it. so if you have like this sort of, let's say solved technology or at the very least it's sort of like agnostic to the entry point, I kind of think there will be a wave of hardware companies competing on design.

in the way that there was with radios where form and function design competition in the market because the sort of power of the technology is a commodity and the interaction to get into it is actually not complicated you know you don't need to build anything very sophisticated for people to use it and to try it and obviously there's a little bit of this already happening.

But I think if, if, as soon as one [00:47:00] company wins a little bit, it'll just accelerate everything.

[00:47:03] **Ridd:** I like that take because as more of the AI hardware companies launch, it's almost becoming a meme at this point of like, why aren't they hiring fashion designers? Because nothing actually looks good, but it's new and it's, it's the first one. So like, it makes sense. But. I think I agree and maybe it is a little bit of a hopeful prediction because I'm not particularly fascinated with the aesthetics of what is out there today, but

[00:47:26] **Henry:** But that's the thing. If that's all we're evaluating, it would be exciting as a designer to, to sort of see a new market where the competition is all about design. There's just not that many markets, like that. You know, there's, there's like cars and consumer electronics, but certainly not software.

Certainly not what we do. And so you should go look at old radio designs because there's just like infinite of them and they're all so cool and some of them are so weird.

, but they all work the same.

[00:47:54] **Ridd:** before I let you go, there is a question that I like to ask kind of everyone. I'm particularly interested in your take, [00:48:00] which is what's something that you believe about design that you think. A lot of other designers might disagree with. 

[00:48:07] **Henry:** I don't want to create a bunch of brand guidelines, that, you know, because what happens at big corporate brand teams is they create these stencils that they all have to use.

And, it's a very conservative way to think about brand. It sort of, it's all about protecting the brand, right? There's like someone years ago figured out the brand and now the rest of us have to just keep using it exactly as it was defined. And maybe there's a rebrand once every 10 years, right?

That's like how brands operate. And uh, my, my theory is instead you could have a brand, I mean, obviously, you know, the logo doesn't need to change, but. The implementation and the context around all of that, that can be super dynamic. Not only I think is that good for the company, cause it kind of keeps the brand feeling fresh, and also lets it adapt to different contexts.

we have high school users, we have investment banker users, we have users in every country in the [00:49:00] world. Like there's no reason for us to have some big, super tight brand. But also I think I want to do things that are good for the designers on the team. And I think part of that is you're hiring these incredibly creative people.

the brand should be a platform for them to be expressing themselves. You know, we can sort of create a cohesion through collaboration and maybe some, you know, there's details to making it feel like it's all coming from the company, but I think it's okay if every little thing feels like a little bit of that individual too.

it would make me happy. I mean, this comes back to like, well, what do I wish I got to work on I'm certainly not the first person in the world to sort of have this strategy, but whenever I pitch it to a potential brand designer, they're like, that sounds great.

And I'm like, why doesn't it, why, why is it uncommon at the very least? So that's my, I don't know if it's a hot take, but it's something I believe.

[00:49:47] **Ridd:** mean, whatever you're doing is working. So if it was a contrarian take, I don't think that it will be in the future. thank you so much for coming on today and pulling back the curtain a little bit [00:50:00] on the perplexity journey and how you think about. Team building and process. It's been really awesome.

A big fan of everything that you're designing and thanks for taking the time today.

[00:50:10] **Henry:** Thank you.

