---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: V-jd3v9P-Ps
slug: 2026-06-02-nyc-live-ramp-panel
source_type: descript
source: https://web.descript.com/9b9e97fc-5579-4a07-84cf-6e38378f913d/7fcb0
guest: Meaghan Choi, Dan Shipper + Bradley Ziffer
host: Ridd
title: "LIVE in NYC fireside (Ramp Panel)"
published: 2026-06-02
duration_min: 36
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] **Speaker:** Uh, three amazing guests who have all given wonderful workflows, and we're gonna go a little bit deeper here and talk about the different things that people are observing in the industry, how the way that we work is changing some of the best practices that are still kinda actively being discovered inside of our orgs.

And I'm gonna try something a little bit weird. Haven't really prepped them at all, at all. And I'm gonna ask us to put on these hypothetical consultant hats. Not so hard for you, Dan, but, you know, maybe, maybe over here they're a little bit new. And, uh, we're gonna just help people think about different avenues for transformation, right?

Like, if we wanna grow as builders, as orgs who are leveraging AI to, you know, the fullest capabilities and really rethinking from first principles how we operate, what is that going to entail, right? And so talking, Megan, with you earlier, uh, something that I learned is that Megan does a lot of on-sites with teams [00:01:00] teaching these design orgs how to make the most of Claude and building and using AI.

And so I'd like to start with you, and we can put on, again, this not-so-hypothetical consultant hat, . And think about, you know, you talked about, like, this 201 level course almost that you're putting people through. So when you think about the transformation that you're hoping to have design orgs see, what are some of the main mile markers on that journey that you would look for?


## [00:01:27] 2 ways design orgs need to evolve

[00:01:27] **Speaker 2:** Yeah. I think I met a few folks today actually who attended like some previous talks back when cloud code was less popular, and I think the theme of 2025 and like for orgs first getting into this is like let your designers get access to your production code base. That's like the starting point of this conversation.

It is been a very gatekept, and for a lot of good reasons, for security, for privacy, for like your ability to understand that you're making these changes. It's been segregated for a while, but it's so, so, so important now that these tools are available and like the more information [00:02:00] access they have, the better you'll be able to build to get access to that production code to go through the process, process of shipping to production because the closer you are to what your end users see, the closer you have to like influence the product.

The second, and this one is deeply uncomfortable for a lot of designers, is in the same way that we're asking our engineers to let us in and help us code, you need to be more comfortable letting go of design. And that means that a lot of features can go out without you. A lot of the time it's actually very possible for people to get a V1, a V2, even a V3 out there and have it be pretty good and have it be pretty aligned with your design system.

And, you know, you build the automations in place so that there's the right checks and balances, but I think it like goes both ways. And so those are like the two big milestones that I often see. And I think it's crazy if you think about it that like we all want access to that production code base, but when it comes to having our engineers design for us, the initial reaction is like, "Oh my God, I don't wanna do that."

But it's so important I think to like shift your mindset a little bit and [00:03:00] like recognize that we're all kind of have like this new ability to build. 

[00:03:04] **Speaker:** All right. Let me push on that for a second because I've talked to quite a few especially larger teams, but not even massive teams where they're very intimidated by getting designers into prod, and there's this story that you can tell around, "Well, if we just make a separate repo and a playground, then designers are coding," and that's, you know, the 80/20 value.

What would you say to that leader? 

[00:03:24] **Speaker 2:** I was just like, then you're maintaining two repositories. If you ask any engineer if they ever wanna fork their code base and maintain two versions of the same thing, they will always tell you that's a terrible idea because you have to maintain two things, and they're always gonna be out of date.

Also, part of being in the production code base is having access to all the tools that your organization is building into that code base because you bet your engineers are also on this journey learning with us, and they're scaling themselves. It also gives you access to the actual data endpoint so that when you're logging and you're doing data queries, you can actually see what's happening.

There's so much built into a real code base that you just can't replicate in a sandbox that it's just... You just really need access [00:04:00] to it to really experience the power of what it's like to build a product that your users end up using. 

[00:04:06] **Speaker:** All right, Bradley, I'm gonna go to you for a second here. As the resident design engineer, this person who's been kind of bridging and seeing both sides of the table for a while now, in this world where many more designers are shipping, touching production, doing things in GitHub that they may or may not fully understand, how is this shaping what you think really solid design engineering collaboration looks like?


## [00:04:31] The future of design engineering

[00:04:31] **Speaker 3:** I don't know if it's so much that we all need to become design engineers or designers or whatever box or label you want to put on things. Um, I think it's more about what does it mean to put care and intention into something? Like Megan's saying, we can probably get to a place where 7 out of 10. We're at a 7 out of 10, [00:05:00] like out of the box, a thing you wanna do, an idea that you have, we can get it 7 out of 10, and anyone can do it, and that's actually great.

Um, but that just means you have more room to care and put love and intention and thought into the things that you build, and, um, I think that, that, that's what it, in my mind, is about. Sure, it's like you should understand this, uh, this animation you're putting out and, uh, what it means to be performant on the web and, uh, what it means to, , not make me rage quit your app because you have like a, a, a menu and then another menu, but when I go a little bit outside the boundary of that second menu, it like closes the menu, and I'm like, "Ugh."

You should care about those things, but that is all just care. Just you care. It's just you caring, and now you have maybe hopefully a little bit more time to care.

[00:05:51] **Speaker:** Okay, I wanna touch on the little menu thing because I think it's exists in this box of responsibilities that all of a sudden have [00:06:00] kind of fallen potentially on designers' plates.

Like even speaking from my own experience, that's something that previously I would make a linear ticket, I would add polish, and then I would make a comment and be like, "Please, this is really important," right? And then mostly get ignored for the next like quarter. And now I don't even make the linear ticket.


## [00:06:15] Allocating your time as a designer

[00:06:15] **Speaker:** I just open up a new work tree and start working on it. And it's empowering, but also the slope is slippery because I can find myself just polishing and polishing and polishing and polishing. And so given the new capabilities, I'm curious, how do you think about allocating your time as a designer who all of a sudden may or may not feel like you can shoot lightning out of your fingertips with the deploying code and pushing to PRs and stuff like that?

[00:06:40] **Speaker 3:** Sure, in the beginning, it takes a long time to, to do these things and to put that care and craft in because you haven't done it before. You've never done it before, and maybe you just stumbled upon like, uh, John Falmouth's tweets, and you're like, "Wow."

Shout out. Uh, I should, I should do that. And then you take that tweet and you give it to [00:07:00] Claude. 

[00:07:01] **Speaker:** Come on, man. This is hitting too close to home. 

[00:07:02] **Speaker 3:** You give it to Claude, and then you maybe you just hope it works, or maybe you ask why does it work? And hey, next time, can you make a skill out of this? Can you make a skill?

And, and you don't even write the skill. It just makes the skill. Um, so I don't know. I don't think it's at, uh, uh, uh, maybe in the beginning it takes a long time. We start to spend a lot of time polishing things, but, um, I, I think that the what are you doing? If, uh, you can get to seven out of 10 like this, you probably got a lot of time back.

You just maybe don't realize it. 

[00:07:36] **Speaker:** All right. There's a bunch of things I'm gonna put a pin in. One is the seven out of 10. One, Dan, I'm coming to you for more organizational transformation. But really quickly, I'd love to hear from you this idea again of like everybody can code as much as they see fit. You have an engineering background, and yet you're leading design of a, you know, coding product.

Like how do you think about the allocation of your work, and maybe have [00:08:00] you seen a shift over the last even couple models? 

[00:08:03] **Speaker 2:** Yeah. We're a very lean team on the Claude code side, I would say. And so I think I just like, I really trust the designers on my team to prioritize themselves and transparently.

Sometimes that looks like not prioritizing polish, and I think that's okay. There's a few truths that I hold in my head as we're working that I think really help guide how I see prioritizing should ship. Part of it is because we're working at a lab, and so our job is to be like researching at the frontier.

And so one thing I like to encourage the team to think about, and this is like an ethos in the Claude code and team and like their product team at Anthropic is like Is it worth polishing something that's not gonna be here six months from now? Like, we're so early in this journey right now that we actually don't know what the final shape of these products are gonna be.

And so is your time better spent on that future-looking thing where it requires deep thought and kind of like a lot of thinking, and like Claude [00:09:00] can't do that yet, and it requires like a really big canvas to explore, or is it better spent on like those 30 tickets? I actually got some great feedback at one point from my engineering team that I was not spending my time wisely pushing these PRs.

They're like, "Yeah, you're helping the polish work," but right now Claude isn't good at design, so I am doing a lot of manual look over it, and it wasn't just like a great use of my time. And so I think it's hard to internalize that as a designer 'cause it feels like now you can do it all, and it feels like it's all on your shoulders and your responsibility to maintain that polish.

But w-we like-- In the same way that now that we can do it all, so your engineers should be able to do more too. Like, it's a shared responsibility to care about that polish and about that care. And so it's not all on you. You can still bug your engineer to do polish on features in the same way that your engineer can now bug you to implement something on the front end.

Like it's, it's all of us and we're all in it together. 

[00:09:46] **Speaker:** Yeah, I like that a lot. I've felt that myself where it's just so easy to knock out a little task, feel good about it, and then immediately just jump to the next polish ticket, and you can kind of all of a sudden like six hours are gone and things look great.[00:10:00] 

But then you're kinda like, "Did, did I work on the highest leverage thing?" And I think it hits on this idea of, you know, you kinda really have to be self-aware around not only how you're working as an individual but how the org is operating. And so maybe Dan, if I can toss it to you,


## [00:10:15] How orgs need to transform with AI

[00:10:15] **Speaker:** when an org comes to you and says- Dan, we know AI is a big deal. We don't feel like we are evolving as quickly as maybe we should. Can you just help us get to that next milestone? Where are some of the main opportunities that you look for or signals that you would use to get a sense of, like, where someone's at?

Like, if you're gonna get this org to the next level, what does that typically look like when you're wearing that consulting hat? 

[00:10:42] **Speaker 4:** The main thing that I always look at is what is the CEO doing? Mm. And maybe more broadly, what is the executive team doing?

Because I think for the first, you know, three years of AI, there was a lot of lip service paid to, "Yeah, we ha- we gotta [00:11:00] have AI," or whatever, but it was always like, "And we'll do an AI working group." And, um, generally that has not worked. Um, and the organizations that seem to do the best are the ones where the leadership team is, like, in the tool all day, and that's the only way that you'll c- you'll have an intuition for how to manage a team who's in the tool all day, and it's not outsourceable.

So that's-- we spend a lot of time with leadership teams actually just being like, "Okay, literally open Claude Code and make something." And they l- they love it, but a lot of them are kind of afraid or don't really wanna do it. But I think that's, that's one of the big leading in- indicators to me. 

[00:11:37] **Speaker:** You're a pretty good prototype for what it looks like to be the leader who lives with the tools and has hands in the clay pretty much all day, is what I'm assuming.

So maybe we could zoom in on your workflow for a second. And if you kinda put, you know, you today up and then over here is you maybe, I don't know, three, six months ago, something like that. I'm curious in terms of how you are interfacing with the models on [00:12:00] some of these more, you know, ambiguous creative opportunities, where do you see the biggest deltas in terms of how you are working, what language you're using, tools, skills, anything like that?


## [00:12:11] How Dan Shipper's workflow has evolved

[00:12:11] **Speaker 4:** I mean, I, I think there, there was this big moment that happened in, I wanna say, November or December of 2025 when Opus 4.5 and GPT 5.3 came out. Um, or yeah, 5.3. It was, like, this moment that I think a lot of us f- for us at Every, like, we had been using Claude Code for about-- We've been using it for about a year and, and had not been, have not been looking at code for about a year.

So at that point it was still pretty risky and people were like, "Are you, are you fucking kidding me? You're, you're not looking at the code?" Um, a- but w- I, I think we could see that that's where it was going, and we were willing to deal with some of the, like, weirdness of that. , And for me, uh, because, you know, I'm, I'm writing and I'm in meetings and I'm like doing [00:13:00] all this stuff, like I don't-- I like to vibe code, but I'm not gonna do any serious engineering.

Um, but at, uh, when that stuff came out, when O-Opus, Opus, uh, 4.5 and, uh, 5.3 came out, I was like shipping PRs to our products and I was like: Holy fucking shit, this is crazy. Um, so I think there-- that, that has been a big shift because the, the, uh, the models are just much smarter. They're much more independent.

They don't do as many dumb things. And I think we've also figured out, like CloudCode, you guys like c-created this... I, I think a lot of people had, uh, models of what does an agent that does work for you look like? And prior to CloudCode, there was like the Devons of the world or, or, or even Codex. The original Codex was, uh, it was like you have a sandbox agent in the cloud.

And what, what was really special about CloudCode when I first tried it is like, no, no, it's just on your computer. [00:14:00] It has access to all the things that you have access to, and that just opens up this whole new territory. And I think, uh, as that has started to catch on and as the models have gotten better, it, it has become this new work operating system in a way that I, I think is really, really special.

And, uh, so, so the big power-ups are, yeah, I can, you know, that, that app proof, like I just made that in between all the other stuff that I do. Um, I have shipped PRs to like pretty much every one of our products but don't really know the code base. Um, sometimes me shipping PRs is actually really bad. So, um, s- it's, it can be, it can be annoying.

Your mileage may vary. Um- , like I said earlier, I, I struggle mightily to respond to emails on time, and I'm now just perfect and it's cr- it's cra- that's really crazy. Like, all the things that I would normally procrastinate on, I just, it just gets done. , And you know, I, I [00:15:00] have a lot of, I have a lot of thoughts on, you know, just generally what happens to experts and expert workflows and, and where, where to spend time.

But I, I think the-- my whole day is very different because I'm just in Codex or Claude Code all day, and I use all, I do all my work in there. 

[00:15:16] **Speaker:** I wanna talk about this phrase AI fluency, which feels like it's probably the next buzzword, buzz phrase. And let's just, like, increase the fidelity of what that could look like, what good looks like inside of an org.

And I'm gonna start with you two because you shamelessly plugged your designer roles. And let's imagine that somebody is somehow inspired by your pitch and they wanna join, right? And maybe we fast-forward six months, and my question is, like, what does good look like, right? Like, what is a behavior that they would be doing on a regular basis that would get you to point at them and say, "Yeah, that, that is what AI fluency looks like.

That is what we were looking for when we [00:16:00] were putting this design role out there"?


## [00:16:02] What AI fluency looks like as a designer

[00:16:02] **Speaker 3:** If in six months I can look at you and say that you have found a way to cut out all of the noise and truly think about What, what matters most, right? It's learning. How fast can you learn? What is the iteration of you learning and then acting upon that?

Um, and then what, what do you do with that learning and how do you proliferate it throughout like an organization that is now at like terminal velocity, where everyone is doing things and putting things out? Um, there's this, this, this idea that, um, you know, we can't-- uh, alignment doesn't exist. I agree with this, by the way.

Uh, but the, the cost of alignment is, is quite high and the cost of redundancy is low because we can kind of clean stuff up. Uh, but I think if in six months you are the one who is, um, able to understand across your, your whole [00:17:00] product, um, very deeply, right? Um, how you can simplify all the way down from, you know, we have, uh, 15 things that solve 15 problems to we have four things that solve 30 problems.

Uh, I think to me that means that you're leveraging the tools because I think the reason that we don't get to that today, or we do now, but we've never gotten to that, is because we spend a lot of time doing administrative work or, um, figuring out how to set up calls with researchers and, uh, since we did shamelessly plug, uh, Ramp, my time-- I've, I've been at Ramp for four months now and, um, my first week I met with the research team and I've never scheduled a research call my whole time at Ramp.

Every week, four of them pop on my calendar and they tell me exactly what I need to talk about and they know what I'm already working on, and I just go and I just show up and I just get to learn from customers, and I get to hear about what they do and what they care about and what resonates in their world.

Um, and then I get to [00:18:00] apply that across the entire organization because, um, I don't have to read all those docs. I can just synthesize them and, and I can understand and, and look very deeply at, um I don't know. What comes next? Where are we going? Um, I think that's AI fluency to me. Just, just carve out more.

Be, be, be selfish. Be selfish. 

[00:18:23] **Speaker:** Okay. So we have systems thinkings, the importance of internal workflows, um, something I've been feeling a lot recently too. Dan, I'm curious to hear from you. You know, you, you've-- Let's say you find the senior product designer in this room. Six months from now, what would get you to the point where you're like 10 out of 10 hire?

[00:18:37] **Speaker 4:** Overall, when I think about people who are, who are experts at, at what they do and i- in, in AI, w- I, I sort of split up... And, and we can say maybe a designer specifically. I split it up, but I think this applies just as well to en- engineers or, you know, product managers or whatever.

I split it up into two buckets. One is, um, because these tools make it, make [00:19:00] competence cheap for everyone, there's this whole, there's this huge glut of people doing design work in every that are not designers. So a good designer is going to figure out how do we u- how do we make systems to harness that design work and use it rather than, like, be like, "No, that sucks," or, uh, "We, we can't use it," right?

But that's actually hard. There's a lot of systems to build on that side. Um, and then the, the other thing, the other bucket is, , how do I use these tools to make something that no one has ever made before? And, uh, the first one is, you know, there's all this r- there's all this routine work that I can, I can sort of automate, and I can harness the routine work that all the other people in the organization are doing, and then there's all this other stuff I can do that was just-- would just never be possible otherwise.

So, um, and, and I think the kinds of people that like to do that are very curious, they're very playful. The, uh, the kinds of people I love to work with are multidimensional. Everyone inside of Every is like, [00:20:00] you know, Kieran, who, who runs Quora, our email agent, was like, uh, he's, you know, super technical, but he was, uh, a composer and a baker before this, like professionally.

Um, and I think that kind of person, n- all these tools are just this amazing playground, and you can... W- what I love is when the design team's like, "Yeah, I'll just go, I'll just go make a little app for that." And like, you know, it, and it, it-- often it's an, it's a little internal tool or something like that.

But sometimes it's like, you know, the, um, that, that graphic I showed you with the, uh, the Zeno's paradox graphic. Like, I just pulled Daniel, one of our designers, in, like, the day before because it was r- something got fucked up, and I, I just needed someone to do it, and, like, we just got it done. And it's really good.

Um, so there's real- there's like, s- there's something about working super fast on new things and being, like, really excited about that and using the tools to harness what is now possible and, like, [00:21:00] push it to a level that w- wouldn't be possible otherwise. 

[00:21:03] **Speaker:** I wanna return to something that Bradley said, but maybe I'm gonna have you talk to it because I, I know you've been thinking a lot about how to learn as an individual with the models.

Because a lot of what you're talking about is like, you know, being curious, trying things, making sure that you're continuously improving as an individual. And so I, I'm curious, when you think about your journey as somebody who's constantly tinkering with these models, how have you been able to grow the muscle of making sure that you are learning as you use these tools?


## [00:21:32] How to keep learning as you use the models

[00:21:32] **Speaker 2:** We're also hiring, in case that wasn't clear. Um, but I think Like, we are so early. I cannot emphasize this enough to everyone here. We have really only solved two use cases, and the use cases of everything that can be solved right now, search and coding. There's so much else out there that to assume or to think that we're, like, anywhere close to the end right now is like, we're just not.

We're [00:22:00] just so far away from that. And so, like, I operate every day imagining, like, thinking in the world, like, this could all be obsolete. Like, every pixel I push, everything I'm trying today could be obsolete next week, depending on the next model that comes out, depending on, like, the next innovation that comes out.

And I think that belief that, like, there's nothing really that I-- that you need to, like, hold too dear, and you need to be willing to update your belief system constantly, lets you be very exploratory in the different directions that you're going, but also, like, leads to you wanting to learn more different directions.

Like, I think that's truly how we need to be living today because we're just so early on. And so once you, like, embody the idea that we're like, like, we're so not near the endpoint right now, we're like 1%, and we all have the power to shape the next 99, it becomes like an opportunity. It becomes exciting, actually.

It becomes fun. And like, it be-- And like, everyone's next 99 is gonna look so different from each other because the [00:23:00] power of these tools lets you be so customized that I think it just gives you the opportunity to learn and focus on the areas that you want to learn and focus on. And so it just, it just becomes fun and interesting.

Like, learning for the sake of joy, I guess, is part of it.


## [00:23:16] Designing for future use cases

[00:23:16] **Speaker:** Can you talk a little bit more about what it's like in your position where you, you really are having to operate in the future, right? Like, you're designing for maybe the next model release or the next six months set of use cases. How does that change your daily, weekly practice of design?

[00:23:34] **Speaker 2:** Probably in two fundamental ways. The first is that I think because we are, of course, still shipping products today and we want our users to have a good time, we need to be able to hold two truths in our heads simultaneously. The first is that we want the products that we ship today to be excellent and as good as possible.

We wanna serve people. And then we also have to believe that the products we have today are wrong, and we can rethink them from the ground up. And so you flip back and forth in between these two all the time. [00:24:00] And so when I'm looking at the future, I constantly imagine what is annoying to me today What do I not wanna do any more of?

I'm building for myself as much as I'm building for you all. And what does my team complain about? What-- Like, when I talk to people, what are things that they don't wanna be doing more of? And also, what are the things that they do wanna be doing more of? And not just the people who are talking and showing it, 'cause I think it's very easy to talk and show, but when you observe people's lived experiences of how they're using these tools, like, what do they look like they're enjoying doing, and what are the parts that, like, aren't fun?

Like, if you were to tell me last year that people were, like, having four terminal windows open, I would've been like, "That's crazy." Like, who, who wants to live that way? And then we saw our team do that. And so I think a lot of it is, like, through your observation and your experience, and then building, like, based off of, like, the peers around you.

So it's actually a lot of fundamentals. Like, you, you hear this like, wow, that's design. Well, yeah, 'cause these core design skills are still extraordinarily important in our day and age, and, like, you can keep building on that foundation. You just can test new things faster now.


## [00:24:59] Strategies for sharing skills and learnings internally

[00:24:59] **Speaker:** Okay. [00:25:00] So there's this thing that I'm experiencing where I'm interfacing with these models.

I'm figuring out the thing that I don't want to happen twice, right? And I have Claude or Codex, um, make a skill, right? And then you just kinda dump it into this black box, and you hope that it helps everybody. And the entire process of collaborating on top of the learnings that we're all having as individuals has been largely opaque for me.

And I know that you are operating in orgs where you're, you're taking that set of problems pretty seriously. And so maybe really quickly, can we go down the line? I'm kind of curious, what are you seeing or doing or experimenting or having success with in terms of making sure that the learnings that you're having as individuals are propagating to the rest of the org and benefiting the larger team?

[00:25:45] **Speaker 2:** I do think it's very isolating working with these models. Um, let's just all admit it. Like, if you spend eight hours of your day talking to Claude, you haven't talked to another person, and it can kinda feel a little strange. Uh, we're also, as I mentioned, very early in this journey, so a practice that we have that we're doing on the Claude code [00:26:00] team is to pair for a while.

What a concept, pairing with another person. 

[00:26:05] **Speaker:** Is, is that even legal? 

[00:26:06] **Speaker 2:** Yeah. Like, how often do you wish you could work with another designer on a project and you can't? Well, what we do is, uh, we'll schedule an hour. We'll shadow each other. You'll just literally work on a thing that you're already working on.

You'll see what another person does, 'cause it's actually really hard to explain your workflow to someone. When I was trying to do this demo, it was, like, really hard for me to come up with what I'd talk about. Um, but if you just watch them in their actual workflow, they'll do things that, like, you don't even realize that, that they don't even realize are special, that they're learning 'cause they just did it so many times now.

And then, uh, we do those every month. We cycle through the design team. It's still a little bit of a newer practice, but the engineering team has been doing it for a while 'cause pair programming is pretty common. And it just helps you learn from each other. Like, we are all experts to learn from right now, and it also builds, like, a, the really important camaraderie of working on a team.

So that's something that we've done, and it's been quite successful, actually. 

[00:26:54] **Speaker 4:** There's no great solutions yet. Like, we have, we have an internal skill library, for [00:27:00] example, but then it's always like- Is this skill up to date and should I download it and, or should I just make my own? And skills turn out to be pretty personal in a lot of ways.

And so you can download it, but then you have to customize it for yourself anyway. There's a, there's, there's something that needs to be solved there, I think. The, the thing that feels the most solved right now for this kind of thing is actually just Slack agents. We have a lot of those. Um, some of them are things that we build internally, and it's just like, you know, a Claude, Claude code on a, on a Mac Mini r- uh, like, connected to Slack.

Or we also use this thing called the Victor, um, which just raised a bunch of money. We also have our own, um, agent, a- agent that we're building. And, uh, the th- the really interesting thing about doing that, especially if your organization enforces, and we, we don't enforce this, but we highly encourage people to use it in public channels, is you get to see other people prompting.

And that is a surprisingly intimate thing right [00:28:00] now. Um, y- you're kind of like, "This is, this should be between me and my AI," you know? And so I think that's a really interesting way to s- to spread stuff, because w- what you do is you, you get, um- People will have ideas, like you said, people will have ideas that you never would have thought of, and they will do things that you never would expect.

And then that just like seeds something in your brain and you're like, "Oh, I'm going to do that." So I think, I think that's really cool. And also, if you have multiple agents in, uh, in your workspace, they actually share things really easily and really quickly, and that's also really cool. So one of the things I have is, um, I built this like little thing called Mailroom that gives my Codex an email address, and it's-- but it's, it's, it's on my email.

So you know how Gmail has like the plus format? So it's like Dan \+Codex, and there's like a little string, and Codex just knows to check that email. And then the agents that we have in Slack know that that's my Codex's email, so they just like email stuff that I need to do to that Codex, and then it just does it, and [00:29:00] I get it.

Um, and that's like another interesting... Agents are so fast at sharing things, and I think that, that solves a lot of this problem once you start getting it to work. 

[00:29:09] **Speaker:** What about you, Bradley? What about, uh, collaboration, knowledge transfer, things like that? 

[00:29:13] **Speaker 3:** I mean, I think I, I would harp on the, the s- the Slack bots.

Um, when I, when I joined Ramp, like seeing people, that was only four months ago, seeing people, um, use Inspect in public channels, in every public channel. Something's broken, um, immediately somebody's on it. They just tag Inspect. Uh, in fact, like, uh, there's even a funny, um, funny instances where like someone will say like, "Oh, this thing should be different.

Something's wrong." And then, um, uh, there's, there's like a, a, a pattern where someone will come in and like drop a link to something, and this, in this case, it's like they just @Inspect and they don't say anything else, and it just reads the context of the thread and you see, you see it work, and, um, that's interesting.

When I [00:30:00] joined Ramp, um, I, I kind of felt silly because I was talking to a bot for a really long time, and his name's Cody. And I was like, "Wow, people here are so nice. He's just so generous with his time." Yeah, I just I-- So like, he just anonymous PFP, and I was like, "Okay, cool." Um, he'd tell me everything, and, uh, he, he's, he's, he's speaks naturally.

He's all lowercase. Uh, and, um, and then, and then, uh, when I realized he was a bot, oh, I felt like a crisis. But, uh, I, I then started to see him evolve actually in front of my eyes. I started to see him, um, have a blog. I started to see him teach other agents how to, to work and then how to teach their humans how to work.

Uh, I started to see him innovate on patterns where it was like, oh my gosh, we have now everybody wants a Slack bot. Everybody wants Cody. Oh, that's kinda unsafe, [00:31:00] uh, by the way. Uh, and Cody's like, "Oh, don't worry, I got it. I saw this, and I'm gonna fix it." Uh, and then he helps us fix it. And then, um, this is what's crazy to me.

Um, I learned something. I learned something great from, from Cody, um, and from the people building him. Uh, a- and I touched on this. There, there's a lot of noise, right? And, and one of the most important things I learned was like now we have new ways to cut through that. I saw Cody drop an album In our Slack about everything he was doing.

I wish I could play it for you. It's actually pretty good. And it is all about the things that we are learning and need to do maybe differently. A- a- and, and then he started posting videos. Somebody gave him Gemini, a nano banana, and, uh, oh my gosh, every day, "How do you do this?" "Don't worry, let me make a song for you."

And it's kinda catchy. [00:32:00] I don't know. It's, it's, it's... Yeah, I think it's the Slack bots for me. And then we have a fantastic, um, design programming, right? Where, um, you know, learning is, is not required, heavily encouraged, uh, but it's starting to take many different shapes and forms, and it's, like, very applicable.

It's like, go learn a thing over here, but you don't actually ever use it. That's not that helpful. Uh, we understand, like, where things are difficult and where we're having trouble, so let's, like, sit in a room. We actually sit in, sometimes in here. Uh, sometimes we have, like, a smaller version of this, uh, if you can believe it.

And, uh, we all sit in there, and, um, Elizabeth here shares her screen, and just... We, we just see it happen. Or I see somebody do something, and I walk up to them with my little microphone, and I go up to their desk, and I, I, I know they use Loom, so I turn the Loom on, and then I connect my Bluetooth, and then I, I connect the microphone, and then I ask you, "Can you show me your prompt?

And can you walk us through it?" And then we post it in the channel, and everybody sees it.

[00:32:57] **Speaker:** It's interesting how-- I mean, this has kind of been a trend even on the [00:33:00] podcast, where there's so much opportunity right now for people who are problem finders, designers, to go and fix things internally.

Like, the, the internal workflows are so ripe. So many opportunities for little tools, solving problems, eliminating inefficiencies. That being said, now for the final question here, I wanna return to the seven out of 10 idea, because it's not just internal tools. Fact is, the models are not there yet. They're not amazing at design.

But every once in a while, Claude will do something on the paper canvas where I'm just like, "Dang, that was pretty good." You know? Almost uncomfortably good. And you can kinda see where this is going. And so given a world where the models are playing an increasingly large part of our process when we're designing the interfaces used by real people on our real product, how do you, Megan, think about the way that the value proposition of design is shifting?


## [00:33:59] How the value prop of design is shifting

[00:33:59] **Speaker 2:** My very [00:34:00] personal opinion, and by personal, I mean it's truly just me, this is, like, not a representation of the company, that I think our models will be good enough by the end of the year or the AI industry in general to do design, most of what we consider very, like, fundamental design work. Um, and so I think there's a few different kind of directions I see this evolving The first is that fundamental systems and brand, those are all subjective tastes that you need to be able to guide and, like, establish, and those have a lot to do with, like, the automations and the systems that you're building.

Those are established. Like, you can prompt into them, but, like, when it's really, really an expert hand, like, crafting it, you can really tell, and I think that will still be very important. And so a lot of work will go into building those systems that help models design and help everyone get access to these.

Uh, the second one, I think, is that we're gonna enter an era where personalization and customization is the name of the game. Uh, you can already see it in all the demos that you saw today where people really love [00:35:00] building custom tools for themselves. But I have a very strong hypothesis that there's limits to how much people wanna customize.

You always need a great canvas. You always need a great starting point. And then we need to have a flexible framework to show people what should be fixed. Like, you don't want your login screen to change every single time you log in, but you might want your dashboard to be flexible as well. And the decision of what to keep fixed, what to be allowed to customize, how you guide people through that, that's like fundamental UX.

So I still think there's gonna be a lot in there in the decision-making, but we're abstracting away from just designing the UI layer into the structural layers of, like, what is fixed and flexible UI into the harness layer of exactly how you interact with the model to, like, the primitive layer of, like, what does it mean to-- for a model to have an identity or the product you have to have an identity.

And I think what we're gonna see is that, uh, builders, designers, engineers in general will end up going deeper and deeper d- down as, like, more and more of this-- these higher levels are solved. 

[00:35:59] **Speaker:** I hope [00:36:00] I can speak for everyone here. Like, it's a fun time to be a designer, and there's just so much to learn.

There's so much to e- evolve and dive into, and I really, really appreciate all three of you joining. I, you know, look up to all of you and the impact you have on the industry, and it means a lot to be able to pepper you with questions. Let's just give them a round of applause. Thanks, everyone.

