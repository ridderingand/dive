---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: 4Efpw6Drl8s
slug: 2025-03-01-aashman-goghari
source_type: descript
source: https://web.descript.com/4be36888-b3cb-4ecd-adb7-c928066ddf52/2eaed
guest: Aashman Goghari
host: Ridd
title: "Tackling complex design challenges at Palantir"
published: 2025-03-01
duration_min: 59
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] 


## [00:00:00] History of Palantir's product offering

[00:00:00] **Aashman:** It's almost a 20 over 20 year company now, um, started, you know, around 2003 in the wake of 9 11, mostly specifically for like government use cases. And I think the idea was essentially that, Okay.

[00:00:13] There is a data integration problem as with pretty much everything like you and I have one of these but think of like banking or something But like I would love to be able to see all of my finances in a single place And I think the same applies to pretty much any other Data heavy concepts or workflows and I think in the case of the government the idea was Have a single place where you can actually integrate all these various disparate data sources and then take investigative actions on them.

[00:00:36] And so I think Palantir Gotham, which is kind of the initial flagship platform, was born out of that and that was kind of roughly the life of Palantir for about 10 years, where it was like this government program, government software, working closely with various government agencies, and it was actually funded by In Q Tel, like CIA's kind of venture arm, and so there was always that relationship from the outset.

[00:00:56] but then around maybe like 2014, 15, is when kind of the [00:01:00] initial seeds of foundry began to, be kind of planted. And that involved essentially just backend engine that like munges data really well. I think this is what's interesting about Foundry is that it really is kind of like, you know, this like Ferrari engine without the chassis, uh, around back then.

[00:01:16] And it was, it was made to essentially solve a lot of most likely kind of technically complex problems that I don't even fully understand. , but essentially Foundry was this like multi purpose.

[00:01:26] Like data integration through analytics platform. You can almost think of it as like a data operating system. the funny thing about that one was it was not really clear, like where it may get used and it kind of became this like almost like. application agnostic thing that you can really put any sort of data into clean transform process and then derive decisions and insights out of.

[00:01:48] And I think the decisions part is quite important because it's not just a simple kind of tableau or analytics layer. Like you can be a data analyst, but you can also be like writing back into the system. It really is operational. [00:02:00] And I think like that's around when Palantir as we know it today. was hardened, 

[00:02:04] And so, yeah, I think that's roughly what I would maybe say is like the gist of the company. It's really just data OS for any type of organization, regardless of size or industry, and should allow you to take any sort of this unstructured disparate information and like make sense of it. 

[00:02:23] **Ridd:** Helpful context. I am very excited to get. Quite nerdy in this conversation. It's going to be a lot of fun. Maybe we could start with your early journey. And I actually recently interviewed Amar Reshi, who was at Palantir. And one of the things he talked about how he really appreciated the level of autonomy that designers were given on day one.

[00:02:47] So maybe you could just start by talking about like, what was your early experience like when you joined? Wow.

[00:02:56] **Aashman:** Amar was one of my interviewers, so he, he was the one with a few people to tell me [00:03:00] that up front and I kind of didn't believe it till I experienced it. And I think it was completely true. And some more, um, in my first few months, I was actually on this team called BD design, um, which essentially is.

[00:03:12] a set of designers who work directly with the customer or like deeply embed with different customers. And so I was out here just kind of, you know, going directly to various customer sites and working with them on their products. And I think that's one of the interesting things about Palantir is a lot of the product is built in the field for a quite a bespoke use case and then slowly generalized and brought back to the core platform.

[00:03:36] And I think what you get from this is like, you're not solving a problem for a thousand different types of users in one go. You're really just like building this like highly bespoke perfect thing and then worrying about kind of how to kind of bring it back. And this requires a lot of like first order thinking, problem decomposition, um, systems thinking, workflow diagramming, and frankly like the boundary between being a designer or a [00:04:00] product person or a developer is quite blurry in these scenarios, especially when you're with a customer.

[00:04:05] They're going to ask you any sort of question, regardless of your job title. And I suddenly have to like, speak SQL, even though I've never really like, done it. Um, and that's when you kind of realize that like, you need to be able to kind of embrace the entirety of the platform and its capabilities, regardless of which team you're on or which product you're currently representing.

[00:04:23] That's kind of how my first few months were. I was working within the healthcare industry. And . It was just fun to see like how they were solving a lot of the same problems on various different sides of this like, you know, the domain the healthcare domain and you're really like Looking at massive amounts of data that is hard to read, hard to parse and needs to be a visualized, be like tangible, like you should actually be able to like filter it, do things to it, get to insights.

[00:04:50] and I think learning all of that on the job was definitely quite unique. going back to your, I guess, speaking about like autonomy specifically. It's kind of most [00:05:00] visible in the fact that we have only like 40 ish designers and, you know, we have maybe, I believe, 2, people right now. A little less than half is the product team.

[00:05:10] and by product team, I mean, essentially everybody who builds the core Foundry and Cortham platforms and Apollo as well. and I think if you think about this ratio, what this really means is like, we really do have like, large swaths of UI or product that a single designer is owning, from day one, it really isn't really about like your seniority, which by the way, we do not have levels per se, we kind of have like new hires, industry hires and leads.

[00:05:36] And that's about it. And, you end up kind of owning pretty much a whole app, in your first six months. And that comes with, you know, all the complexity, you need to suddenly internalize What this app is for, it could be something like a time series analysis product, which allows you to first understand like streaming and data density and, you know, all these like, like kind of derived properties and [00:06:00] all sorts of different like ontological concepts, and then apply them suddenly to interfaces and it's like, it's just been six weeks. Yeah,

[00:06:09] **Ridd:** Is it pretty common that the new hires would start off embedded on these teams in the BD platform, or is

[00:06:17] **Aashman:** no, so that's actually less common. And I would say that I was definitely in a bit of an outlier. I think, at that stage, because of foundry not being mature enough, we were spending more time in the field, putting together like exactly what the user needed. With a kit of parts that we had and by kit of parts You can imagine some sort of like workflow builder or website builder application Powered by a strong data model and back end that is also designed and built in foundry that used to be a bespoke need back then because everyone had their own custom workflows and Obviously you need a designer to like Figure out information, architecture, concepts, hierarchy, you know, layout, all that stuff, including even visual design.

[00:06:56] Now we have much better tools. Foundry is much more mature. [00:07:00] And so the stuff you can do out of the box is so much stronger that you don't really need to kind of like send a designer directly to this place and have them build that like end use app. Um, an example could be. Let's just say like a manufacturing company has a factory floor, and each person on the factory floor has an interface that allows them to kind of scan a part and mark it as like good or bad.

[00:07:24] Quite a simple interface, um, but back in the day you would have to kind of Figure out exactly the UX, go to the factory floor, shoulder surf with the guy and be like, Oh, this is what you're doing. This is what you're holding when you're doing this work. This is the resolution of your screen. Now it's like much more easy to kind of just like deploy an app out of the box that we call maybe, you know, Template B of like, you know, triaging app or inboxing app and you just kind of deploy that app.

[00:07:50] As long as the anthology is sound, you can customize it just enough so that it makes sense for the constraints of that user, so, because of that, , we don't kind of send designers directly into [00:08:00] the field for one direct use case, but instead have them represent the product.

[00:08:05] They're still good in the field, and they still work with customers. but now you're kind of representing the product team more so than kind of representing the like business development team, 

[00:08:14] **Ridd:** It's fascinating because you truly are having to account for like an almost unprecedented amount of use cases. And to do so with the least amount of software created possible, I'm sure is like one of the core challenges of being a designer in this environment. 


## [00:08:31] Building a "product building" product

[00:08:31] **Aashman:** I kind of see this internally, maybe more as a joke, but like, It really can be used for anything. Like, theoretically, you can build all of Airbnb on Foundry. Like, we have the backend infrastructure to allow that level of application to exist.

[00:08:45] And we have an app builder that would let you actually, like, build something, obviously not nearly as beautiful and usable, but still would functionally achieve a lot of the same workflows. And we do have, you know, data pipeline [00:09:00] applications that allow you to, like, view the lineage of all the data that's, like, passing through.

[00:09:03] We have an IDE application within Foundry that lets you actually code these transforms and these data pipelines if you're the data engineer. I think what's interesting is that the core product that we're building is a product building application in itself, and is the thing that allows you to spawn n new units of software.

[00:09:23] Um, and so I think to your point about, like, In as little software as possible. I actually don't think that's true. it's almost like front end is cheap. It's, it's just this thing that like, you can emit as much of as you need. , in my world, like, and this is maybe a bit of a segue now, I'm like, not speaking for Palantir as much as just myself, 

[00:09:41] but I believe that like, like bespoke artisanal software , should be all around us.

[00:09:46] Think about like Costco coffee versus like small batch coffee. Like, which one is more valuable and fun? You know, there's a reason for which is the one you prefer. I want small batch bespoke software that's like made just for me and my use case. This is [00:10:00] vaguely what Palantir is kind of achieving when it comes to like, you're an energy company and you need to understand a thousand sensors emitting tons of gigabytes of data per second and you need to kind of understand.

[00:10:12] There is no other template out there that helps you understand it. We're just gonna need to build this for you. And it's not a dashboard. It's not a read only view that's just like, oh, yeah, like things are going up, things going down, something bad, press red button. It's not that. It's like right back based.

[00:10:26] That's entirely like Multistep workflows, inner loops, outer loops, people are making artifacts in this stuff. Um, people are like collaborating on this stuff, there are security concerns. So, I think like, at the end of the day, the most powerful part of Foundry is that it actually enables The existence of any of these things, and hopefully in the future, if we do the developer experience, right, it would allow anybody to build on top of the foundry, like developer platform and really start crafting these artisanal apps for their org, for their companies on their own with relative [00:11:00] ease. 

[00:11:00] **Ridd:** I think I'm probably going to summarize a little bit more than I normally do for other episodes and just give you the opportunity to be like, okay, let's make sure that everyone understands where we're at. So we have BD where the designer is like really embedded on the team. That's where you started.

[00:11:17] And then we also have Gotham, which is kind of how Palantir started, which is more of like the, kind of the government contract origin story. And now we have Foundry, which is like this very open ended kind of like dev tools platform on steroids and you're a design lead on Foundry now. Do I have it correct?

[00:11:36] **Aashman:** Correct. Yeah, and I would be remiss if I didn't add Apollo in there. It is definitely a smaller zero to one product right now, but I did spend a chunk of time on that as well


## [00:11:45] What it's like to be a designer on Foundry

[00:11:45] **Ridd:** Okay, cool. So now I want to add a little bit more clarity in terms of like, what the heck are you designing on Foundry? So is there some kind of like an example project that we could talk through to [00:12:00] understand what it's like to be a designer in that world?

[00:12:04] **Aashman:** yeah, I think foundry, I can maybe energize to like the Adobe creative suite a little bit where, you know, there's like seven or eight marquee apps. Um, and you kind of become an expert in each like, you know, there's not that many people who are like, Oh yeah, I'm like a Adobe Premiere expert and Photoshop and Illustrator.

[00:12:21] It's like you kind of become like one or two pipe, like one or two workflows become your, your domain. So you're like a raster imaging guy or like a motion design person. so I think Foundry also has these personas. You have like the data integrator. You have the data analyst or you have the data scientist.

[00:12:38] So my point is there's like many different like categories of people who use and play with data and they range from slightly technical to like extremely technical. Now, one of the projects that I worked on on Foundry was around making the data integration story clearer.

[00:12:53] as you can imagine, Foundry is Pretty much just an empty shell when you first land on it and you need to hydrate it [00:13:00] with data and the more information you give it the better it gets and as such that's kind of step one. So I spend a lot of time working on exactly what type of data integration. We need to provide what type of different sources people are going to connect from and what are the first few steps people take when they are actually bringing this raw data and like starting to clean it, transform it, join it and turn it into what we call the ontology, which is essentially a kind of an object aware like data model that helps you make sense of the nouns and verbs in your organization..

[00:13:33] **Ridd:** What have you learned about designing effective new user experiences, especially when your product out of the box is that empty shell that you were talking about?

[00:13:40] **Aashman:** Yeah. I think overall, My philosophy on onboarding is that when you're designing for somebody who is willing to spend the time and willing to kind of get those economies of scale by first struggling through the learning curve, you just unlock a lot more. And I think I'm almost comfortable, [00:14:00] like following that approach of like, this is not TaskRabbit or, you know, something where in between me downloading the app and me getting value.

[00:14:09] On task drive, it is like 10 minutes, 30 minutes tops, you know, and it's, that's pretty amazing. It's a testament to their team that they've been able to optimize my click path so well that I don't even realize and I have somebody at my house. , and I think in the case of applications where you're literally buying this expensive, powerful Ferrari, and you're going to like use it to do Ferrari things, you know, you're not going to use it to like drive to the coffee shop, you're going to be like taking laps of like.

[00:14:34] a racetrack. And I think like, to me, that allows you to kind of like take more time with the onboarding and add more complexity upfront without really worrying about like walk up usability in its pure sense. That said, we are obviously optimizing heavily for walk up usability. And from like a strategic standpoint, Palantir has is obviously pivoting away from sending tons of people [00:15:00] to your deployment to help you like wire it up and instead allow you to wire it up yourself.

[00:15:04] And this is abundantly clear in the kind of earnings call data where, you know, we're literally starting to see people like time to value is getting down to like days. It used to be months or maybe even years in some cases. These pilots used to take a long time. You need to wrestle with the, you know, the company's IT or you need to wrestle with their C suite.

[00:15:22] You don't even know how many other like skeletons there are. When you enter an org that you need to maybe like deal with before they accept your solution. And I think this has become easier to do now 

[00:15:34] and I think like that is a testament to, design 


## [00:15:37] Balancing power and simplicity

[00:15:37] **Ridd:** also imagine there are instances we have to make decisions that try to strike this balance between abstraction in the name of some semblance of simplicity versus preserving like the raw power of the Ferrari.

[00:15:52] Can you talk about that piece of the design puzzle for a second?

[00:15:56] **Aashman:** Yeah. I think, I think one tool we use often [00:16:00] is like progressive disclosure in these cases. There is some amount of like concealment of like the final thing, where, let's say you wanna, you wanna build a streaming data pipeline That requires something to be live, like the concept of liveness is suddenly very important.

[00:16:15] You don't need to suddenly, like, just because you wanted to build a streaming data pipeline of stock data. Let's say, like, I have a stock ticker, it's updating every millisecond, the price is changing, you know, all these things are happening. And I want to just visualize that and maybe take some actions based on it.

[00:16:28] Now, I don't need to understand throughput and all these concepts of streaming and, like, stream transforms and pipelines to just be able to put that together. I should technically just be able to like do some sort of like connect stream to dashboard workflow and then if There is a problem or a roadblock or additional complexity your configuration needed Click some sort of like advanced button or you know, go one level down and and then play with it And I think that's one approach which is just like slowly disclose What's needed instead [00:17:00] of throwing the kitchen sink at the user's face, right?

[00:17:02] And obviously that's that's easy to say and hard to do because it's easy to conceal something for the first time But for the returning advanced user, they're gonna be quite mad, but that's where you get into kind of you know, redundancy. So to me, the other angle here is you should be able to achieve similar workflows in multiple ways, or at least from multiple entry points.

[00:17:21] So today we have essentially one application where I may do some sort of run or build or some sort of write based action, you know, like a big blue button that like leads to the computer doing a lot of busy stuff. Now that button can either take me directly to The result of my computation, let's say I like filtered some dataset or I can click some sort of view progress button and be sent into a whole new app.

[00:17:47] Which is the only job of this app is to show me the build progress in excruciating detail. That's basically to me like opening the hood of the Ferrari and watching the engine as you're driving it. If that's even possible, [00:18:00] but that's kind of my point. So I think like this is another kind of like escape hatch that's available to somebody who cares or knows or wants to debug.

[00:18:07] And if you don't, that's fine too. You can just hit build, look at the results of your data set, go on with your life. But if you, if you happen to be that, like. Data engineer guy who wants to optimize this pipeline a bit more. You might need to see like the spark build profile or like see exactly what kind of compute is being dedicated to this build.

[00:18:27] mess with those constraints, tinker with it, look at the logs, stuff like that. So I think there's a way to serve both user types gracefully. 


## [00:18:35] The skill of problem decomposition

[00:18:35] **Ridd:** want to go back to something that you said earlier. Then you talked about this idea of problem decomposition, and maybe you could just unpack a little bit more about like what that looks like in practice, especially as you're working through deeply technical problems. And for most designers, it's probably pretty unclear hatches even could exist.

[00:18:56] **Aashman:** absolutely. This, firstly, this is a good one because A, [00:19:00] we call this, internally we say the word decomp a lot and everyone's always confused by it, but yeah, it basically stands for decomposition. And I think it's basically one of the most important designer's life at Palantir than compared to other places.

[00:19:13] And I think, I think this is because there is an abundance, like no shortage of complex problems. And maybe I'll just pick one in Apollo, just cause it's a little more recent, but, um, essentially we have a software that allows you to manage and ship releases. To various environments and now the problem decomposition part here is that you will have a back end developer who will kind of maybe come to you with , some sort of problem statement, which is that users need to be able to reliably ship the same software to 100 different places without, you know, breaking a sweat.

[00:19:49] Now that's a very generic prompt. Um, but then you start breaking it further down and you realize, okay, I need to be thinking about who are the people doing this. Where is this journey starting? [00:20:00] How many verbs and nouns is this person, encountering on the way, you know, like now maybe there's primary concepts like a release.

[00:20:07] Or, uh, or an environment, but then there's secondary concepts like recall, where you can recall a release if it's bad, or maybe like, promotion pipeline. This is another one where like you basically are like moving a release through these stages of like software quality, but it's like initially it's like a dev state, then it's a release candidate, and then it's stable.

[00:20:25] Now these are secondary concepts. So I think the first thing that I would do in terms of problem decom is understand and create some sort of mental taxonomy of all of these concepts. And give them some sort of weight of like, what is the main thing that people care about? And what are these like secondary properties or metadata that they may or may not need to encounter?

[00:20:45] And if they do, we can maybe wait a bit before we teach them. so I think those are the things that I bring to the table when talking to the backend developer about the ultimate goal. And the way you do that often is by whiteboarding together. Really just kind of going through these steps, you [00:21:00] know, um, often it's just boxes and words We don't really need that many pictures.

[00:21:03] We can all like have a shared understanding of what things might look like And I think what's most interesting is you do that with a back end dev But you also do that with a customer slash user and then you may do that with some other like stakeholder Who's maybe more product oriented and you'll find that The results are always slightly different and you, as a designer, you kind of, you kind of need to triangulate between these three approaches and either be in the same room and hash it out or understand the delta between these and consolidate it.

[00:21:33] One of the most interesting things I find as a designer in rooms like this is to, you know, you're sitting there and there's like six people arguing about something and they, they seem to be agreeing on some aspect and they talk about it as if it's this like This assumed thing that everybody understands and imagines and then I draw it out immediately on the spot and Screenshare or put on the wall and then they look at the mock of the design and they're like, oh actually like We're all talking about [00:22:00] subtly different things and the difference is actually more than subtle when you bring it down to like the back end layer or the implementation layer.

[00:22:07] It's like to have this information visible at this stage requires so and so API update so just the power of an image as the like uniting thing that like brings disagreement onto one surface is to me like.

[00:22:21] Maybe where the decomp shines the most.

[00:22:24] **Ridd:** You have a pretty wide spectrum of fidelity levels for what that image could look like.

[00:22:27] **Aashman:** Yeah. So I used to do a lot of like whiteboard sketching literally like on, you know, live whiteboards in meeting rooms. And then we got into like remote land. Um, I then briefly spent, uh, Spend time with the concepts, uh, on the iPad. Amazing app, by the way.

[00:22:45] **Ridd:** yeah, that's such a good app.

[00:22:47] **Aashman:** So I would screen share my iPad directly in these rooms of like eight, ten folks and just be like drawing live.

[00:22:54] Um, ever since my Figma skills have just gotten faster than concepts. So I'm like, [00:23:00] I just basically do live Figma. Everyone else's cursors are already on there and we have a blueprint design system that makes it pretty easy to just like plop in the relevant components and like assemble a collage of like roughly what I'm thinking about.

[00:23:13] So in terms of fidelity, I would say it's, it's all like stuff that looks high fidelity, but it's not. And this is a disclaimer that I need to always make when I share these things, um, which is like, Hey, we put this together using existing components, but that doesn't mean it's like ready to ship. 

[00:23:29] **Ridd:** Is there anything else that we should touch on just in terms of like your personal process, maybe even like outside of the meeting rooms? I mean, it feels like you are often being handed these pretty hairy problem, opportunity spaces. , what are you doing to make sense of that complexity and get momentum in the very early kind of onset stages of a project?


## [00:23:53] The importance of asking questions

[00:23:53] **Aashman:** yeah Yeah, and you know, this is something it took a little longer for me to learn than I would have preferred but asking dumb [00:24:00] questions Early and often is critical and I think like it's easy to get intimidated Especially at Palantir where there's you know The subject matter is is complex and and the words being thrown around are heavy and obviously everyone you meet is It's very, very intelligent.

[00:24:14] And so you think, Oh, this is not the right forum to ask this question. It is. You should absolutely just go ahead and get those clarifying questions out, A. And B, kind of find the right partner. Because we have a relatively flat structure, we kind of grow our PMs from within. There's a lot of fluidity in the roles and the titles.

[00:24:33] it's never clear what kind of org chart you're like looking at, and that's fine. Frankly, you shouldn't even worry about that. It's more just like, suss out who cares about this and who has the right instincts to actually , fill in kind of the gaps in your knowledge. There's three kinds of knowledge gaps that I typically find.

[00:24:49] One is domain specific, literally just like, Oh, I've entered this new world of healthcare or manufacturing. Obviously, I need to learn the kind of world they are in, [00:25:00] what they are thinking of, their level of technical. prowess, all of these things. The second one is like the completeness of the actual system.

[00:25:08] Like, I think sometimes I design an interface and it's, it's good enough. It does like 60 percent of the job and the workflow is clean and it demos well, but then I show it to the guy who was about to build it. And he's like, these are the 15 edge cases out of which four, actually not even edge cases.

[00:25:24] These are just like generic cases that you haven't even accounted for. And so I think the completeness part is just like, Being able to, like, poke holes in the system and the concepts up front. And it's really a game of whack a mole, of like, Hey, if I move this thing here, something else is gonna pop out and become a problem.

[00:25:41] So then I have to squash that. And so I think you need to, like, be able to, like, traverse the 5, 000 foot view, 30, 000 foot view. Zoom in and out and make sure that the whole thing works, but also the details work and you're not stuck in these degenerate cases with funky error messages that don't make sense 

[00:25:57] so that's the second one. And I think the third one [00:26:00] is just like proximity to the user flow. or what I would call the golden path. So, this is the opposite of the second one, which is like, worry about edge cases. The third one is like, don't worry about edge cases. Just focus on the golden path and then worry about the like, smaller cases.

[00:26:15] Now, I don't really know if there is some order or like science to this. It's just something that you kind of need to like suss out case by case. Sometimes it's easy, sometimes it's not. But I think these are the kind of three things that I personally try to bring to most projects. , 

[00:26:30] **Ridd:** love the call out between the golden path versus the edge cases, because in my experience, that's like one of the hardest parts of being a designer is knowing when to let edge cases steal from the golden path versus when to say, Nope, we're going to prioritize the golden path here. 

[00:26:50] **Aashman:** In our case, , maybe we're a bit fortunate, we're not building us an app that is used by 3 billion people for one minute a day, or whatever, [00:27:00] you know, like that level. It's more like, it's a hundred people. But they're all PhDs, they're using it 9 to 5, and they're making some crazy stuff on it that's like gonna have more downstream impact than you can fathom.

[00:27:12] And so I think like I have the luxury of being able to sit next to that so called PhD person and just literally bother them and be like, why did you click that? What does this word mean to you? Why are you even here in the first place? Why don't you go do this this other way? You know, like really get down to like that level of conversation.

[00:27:28] And I almost don't, don't even call it like user research at that point, because it's more just like, like, I'm just like trying to be best friends with this one person, um, and

[00:27:37] **Ridd:** You're like an account executive almost at that point.

[00:27:39] **Aashman:** Except I only know, I only care about the design part and not whether or not they pay us money, you know, and I think that's, that's kind of the interesting part of the, the like user side.

[00:27:49] So I think if you do more of that, these priorities become, they kind of become clearer through that process, you know, of like this edge case was only visible. [00:28:00] to us internally because of the scale of the data we were hosting. It's not even a problem for our user because they have three environments and we have two hundred.

[00:28:09] So maybe let's stop designing for that, you know? So I think it's like going, basically just seeking the truth really helps like winnow out all the, unnecessary edge cases and then focus much more on the ones that are truly going to be blockers. When you work with developers, they come up with these cases immediately.

[00:28:25] They have this amazing systems thinking way of just like looking at your design and immediately talking about the three things that are like missing from it That will result in a funky state and I think that is its own great exercise But I like to balance that against the user side as well But it's like yes Obviously we can spend all day ideating the thousand ways in which this can go wrong Or we can just find the two ways in which this will go wrong and design for those 


## [00:28:52] What good systems thinking looks like

[00:28:52] 

[00:28:52] **Ridd:** well, on that note, I have multiple unread emails in my inbox, like right now from people who are [00:29:00] trying to figure out what good systems thinking looks like and how to grow that muscle. And I'm wondering if I can just outsource that question to you. 

[00:29:09] **Aashman:** the typical things I find or failure modes I find are like Not zooming out of the problem that's been given to you.

[00:29:15] And maybe we can just use a simpler example, like, I don't know, like Uber or something. not simple, but, you know, at least user friendly app that everybody knows, consumer space. And, let's just sort of break down the Uber app through a systems thinking context. What are the main primitives of this app?

[00:29:31] The rider. Or the passenger and the driver. These are two things, two sides of the coin. And there's the actual route or the destination. And really these are kind of the three main primitives. Then there are like sub primitives, like the number of the car, the destination, like the estimated time, maybe the type of Uber, X versus XL, what have you.

[00:29:53] We're already creating a mental model of all of these things. So that's kind of one type of system that you're creating, literally just a taxonomy or mental model of like, [00:30:00] what are the main objects, sub objects, what are their properties, are there many to many relationships, many to one, one to many?

[00:30:07] That's important, right? Like when I call my Uber, it's one to many. It's me and 50 cars, one of whom will be my ride. Then it Goes from that to one to one and remains that way until the ride ends and there's a life cycle attached to it where it's like this thing has a timestamp of like The moment me and the driver are now aware of each other's names, details, locations, and the moment the ride ends, that is severed again.

[00:30:32] So there's a life cycle aspect. So I think if I were to do like a systems breakdown, one system is the actual nouns, verbs, objects, primitives, whatever you want to call them and how they relate to each other. The second system is much more transient or like time based. This is typically what people call the user journey or the user flow.

[00:30:49] But it's not just the user journey. There is like the user journey and the computer journey, if you will. And both are actually traversing this thing together. But it's like, if you ask me, how was my Uber ride, I would [00:31:00] be like, I was the passenger, I called it, I then waited for it, I got in, I drove, and I got off.

[00:31:06] Those are maybe the milestones of my Uber journey, right? If you ask the rider, it's slightly different, but it's similar enough. But if you ask the computer, , what was the computer journey for like the uber backend or whatever crazy algos they had, they would be like, Oh yeah, we had to run a matching thing for somebody here and somebody there, optimize it based on so many conditions, including pricing, geography, what have you.

[00:31:29] And then we had to like turn on this essentially like security switch, which allowed the rider and the passenger to know. A lot of information about each other, which is like obviously quite scary from a security perspective. And then we had to toggle that switch off in a way that will prevent them from ever meeting again, which is also a security issue.

[00:31:48] And this is a crazy complex story from the engineer's perspective. And so I think being able to draw both these journeys together will make it easier to design for technical spaces. And [00:32:00] B, actually, I don't know if this is the right way to put it, but like empathize with the computer a little bit, and see how, your human concepts such as wait time and like, I don't know, estimated time of arrival actually like are derived and how you can actually design for , those lags or delays or errors or whatever.

[00:32:20] So anyway, that was the second one. I think, roughly speaking, there is the system or the data model. The second is like the timeline or the story from the computer and the human's perspective. And the third one, I think, from a problem decom perspective, is the domain. Just knowing the domain is critical after a certain point.

[00:32:39] And this is, again, easy when it's an Uber, right? You've taken one, I've taken one, we can empathize with each other ad nauseum. This is not true when I'm designing some sort of hospital interface for a doctor who is every night or a nurse who is every night submitting some amount of information about, diagnostics or available beds or throughput or [00:33:00] something.

[00:33:00] And so I think understanding these words, concepts, what's going through the user's mind when they're doing it, you know? What are the other tabs on their computer? Are the other tabs, like, GitHub and VS Code, or are the other tabs Slack and Asana? Um, that's gonna change the data density I design for.

[00:33:16] That's gonna change the, like, , what we were discussing earlier about, like, the progressive disclosure. Like, I can maybe throw more information at you if you already know a lot of, , computer science terminology, for example. so I think like, obviously user empathy is really what it boils down to, but I think shoulder surfing being, being friends with this person, learning that domain, like I became really into manufacturing just like by mistake, or I became really into like drug development.

[00:33:43] I was just like reading books about it , and then COVID hit after that. And I was like, wow, like. Everything I've learned about like drug development is suddenly like really topical and valuable and I think this happened because of just like deeply embedding with the domain 


## [00:33:55] Collaborating with backend engineers

[00:33:55] **Ridd:** I have a smile on my face because just listening to you talk, like it's [00:34:00] so clear that you have put in the time collaborating directly with backend engineers.

[00:34:05] **Aashman:** Yeah, oh, yeah, I love them I must say that's like one of my favorite parts of the job is just like like being able to Honestly, articulate my own problems. Like, you know, I think it's like two it's almost like slightly different versions of the same language, like Spanish and Portuguese or something, but it's like we're both talking to each other in this like similar ish language, but we can't get into the nuance together.

[00:34:27] And that's where my like drawing comes in. So I draw and the engineer kind of talks over it. And those are some of the most fulfilling, , partnerships 

[00:34:35] **Ridd:** anything that comes to mind in terms of how you've grown Planteer in terms of like how you foster those relationships with backend engineers and communicate more effectively. 

[00:34:46] **Aashman:** so I never like not ask questions up front like even if I'm in a new space new room Maybe I'm junior or out of whatever I'm still gonna just be like forgive me for the dumb question and ask it and I think that goes a long way just to [00:35:00] like format of asking, instead of asking it like a, like, you know, an asshole, you can just say it a bit nicely.

[00:35:05] and I think that's, that's critical. But overall, in terms of growth, I would say the reps, the reps really matter the most. I think, when you design similar ish interfaces across various domains, across various technical competencies for different users. And with slightly different like technical, like power, um, you kind of, you kind of realize that like a lot of these things can be broken down into kind of a catalog of like workflow types or archetypes, you can think of.

[00:35:35] , I'm on my like 10th, inbox view and it's like this inbox view comes with a list of notifications which are transient where if I act on them, they disappear versus an inbox view where like I act on it and like remains. So that's a case management view, right?

[00:35:49] And they look the same. It's just like stuff on the left preview on the right. Click on the thing, take an action. But the state machine is very different because the notification, the moment I click it, it's [00:36:00] gone, it's disappeared, it's transient and that has implications on the API. Whereas if I'm doing a case management work, let's say I'm like a lawyer or a law firm, now I have an inbox item called Get Ashman's Visa to Spain.

[00:36:13] And that's going to live for like one month till I get my visa and it's going to have like States of like, okay, visa in process, visa delivered, visa waiting, whatever. And so I think even though these things look the same, um, once you start breaking down them, breaking them down into kind of these typologies or archetypes, you can start to apply them regardless of domain.

[00:36:32] , and I think that's the thing I learned maybe like two, three years in and has been very, very useful for me ever since. 


## [00:36:38] How data models impact your design process

[00:36:38] **Ridd:** There's a density to this conversation that I so appreciate, but again, I kind of want to like double click on things just as a way to really help it take root for people. So I want to return to like the data model piece. Specifically, do you have any. Tips or mental models or just general advice for someone who maybe hasn't spent [00:37:00] that much time thinking about the way that the data model impacts their design process.

[00:37:05] **Aashman:** Yeah, I think before I do that, I just have a disclaimer, which is. It's a privilege to have these problems to design. Like I interview a lot of people and I look at a lot of portfolios and, you know, obviously I'm not out here asking for Palantir shaped projects because there's a finite number of those.

[00:37:22] Like, I'm more than happy to look at your like design for a calculator app. And get to why you made a certain decision and use that to understand whether you're going to be a good candidate for Palantir like that's, that's completely fine. But going back to my point, I think it's just that there really isn't that many of these complex data model issues out there.

[00:37:42] Like even if you think about, let's say I'm designing a food app, concepts are already clear. Like there's already a lot of stuff that's optimized. E commerce, like, you know, the gig economy, all of these, all of these applications come with like predefined templates and like, you kind of don't [00:38:00] really need to like rebuild from the ground up.

[00:38:02] The place where this gets novel and interesting is A, in the enterprise, where you're designing something for something. crazy bespoke, where, , it's this industry that has not really encountered technology in its full form yet, for whatever reason, there are many of them, Y Combinators out here trying to get all of them.

[00:38:20] , but I think fundamentally, the idea is like, okay, if you're in one of these Complex domains or industries, then the data model topic suddenly becomes important. It's like, what are the actual things that the people who use the software think about on a daily basis? Again, I'm sorry to keep talking about the verbs and nouns, but really is that like if you can articulate a, what the nouns or the primitives of your business are and be the actions you can take on them in a holistic way that you're already halfway there.

[00:38:50] And then you just need to kind of stack rank them of like which of these are more important than the other and like for example, like as a Rider of uber I want to [00:39:00] ride to my destination That's like far more important than you know, I want to sit in a Camry and not a Corolla And so I think like to me creating these narratives or and I like to put it as a sentence Some people don't like to me like if your thing doesn't work as a sentence that with like a subject verb and object Something's wrong with your like mental model.

[00:39:19] Um,

[00:39:20] **Ridd:** I like that.

[00:39:20] **Aashman:** if you start to do those types of things, you can start to pressure test if you've got the concepts right. And I think Apollo is a great example here because it really was a novel platform. Um, maybe I can do a quick summary of what Apollo is. So it is essentially, Internal tool originally, actually, which was used by Palantir to deploy all of our software to the various disparate environments and deployments landscapes out there.

[00:39:47] And that includes, we have Palantir software running on like the edge. So like a satellite or a drone or a submarine, but also a data center, also the basement of a bank and there really isn't any software out there that lets you in a few [00:40:00] clicks Manage the deployment of the same package to these 50 disparate locations reliably, securely, and predictably, right?

[00:40:09] And so I think when we were designing that, that's when we were suddenly, reckoning with so many new concepts that had never been, like, in one place before. That was really interesting from, like, a design decomposition perspective. And I think I went back to kind of the The release management one where like I have a release, let's say iOS for simplicity.

[00:40:30] Now, before, before it actually goes out to the billion users, it goes down, it goes out to like a subset of hundred K users and it like sits there for three months. In the like release candidate state and then it gets bug fixed and then it gets shipped to prod or production Now this is a promotion pipeline and your releases are being promoted through this pipeline and as such The noun we have now is a release the verb is like promote or recall So it's like move up or move down now when I [00:41:00] recall It's going to have massive second order effects on many other releases because this release has 50 dependencies Which by the way is a secondary primitive, but also a noun, right?

[00:41:10] So I'm just out here like underlining the words that are like, you know The data model versus just words that are like filler grammar And so I think if you can start to articulate all of these As actions on objects, , and the ramifications of each of those actions, you suddenly get like an end to end user story or computer story and you can start to like, then design the interface around that. 

[00:41:32] **Ridd:** I feel a little bit of conviction because I'm working on a new project right now, and I still haven't nailed down some of the core pieces of language and so like even talking with engineers like I don't know what the core nouns and verbs are, and yet I still have a lot of UI created. 

[00:41:47] **Aashman:** And I will say, by the way, that it's not a linear process, like it's completely fine to just emit. Tons of boxes and not be sure about like what goes where and why and that's that's that's kind of to me the generative [00:42:00] phase And that's that's actually one of the things I love to do is just like make the wildest vision Version first frankly without knowing how the technology works like in my mind speaking of Apollo actually Ironically, the best Apollo is like, no Apollo, like you should not need a software to shepherd your releases from your computer to the target.

[00:42:20] the computer should do that. Like if you define the constraints well enough and don't even think about AI, like even just in a pre AI world, if you design your constraints well enough, design these pipelines and these rules and policies. It should just flow and it should just ping you when you're needed.

[00:42:36] It's like, Oh, like I tried everything as a machine and now I need human help. And then you get a little notification on your iPhone and maybe you just like slack it, you know, and Apollo could just be like a chat interface at that point. But instead it's, you know, obviously this like massive enterprise app with like many tabs and low padding.

[00:42:54] , but I think like overall that's, that's kind of where I would start. So going back to your project, I think [00:43:00] it's, it's. Totally fine to kind of go from both ends of the spectrum and then like meet in the middle And that's when these like nouns and verbs start to harden. I guess. .


## [00:43:09] What Palantir looks for in design candidates

[00:43:09] **Ridd:** You mentioned the hiring piece. I want to touch on that briefly. Like, let's say someone's listening to this. They're inspired. They want to join your team, but they have exactly zero enterprise design background.

[00:43:21] **Aashman:** Yeah,

[00:43:22] **Ridd:** in their portfolio that would make you confident that they could succeed at Palantir?

[00:43:27] **Aashman:** so this is quite a common scenario obviously I think firstly it's completely fine Like I think we already we get a lot of people who have four projects And one of them is a dashboard and it has some charts and they're like, this is the Palantir project. It's like, no, I do not. We've got that figured out.

[00:43:45] Like we've got, we've got dashboards figured out. We don't need the 55th histogram design. Like we are good. I think what we need is somebody to be able to talk about , the data that led to those charts. And what happens if I filter that [00:44:00] chart? And what happens if I, you know, hover on this thing? Or if it happens to be a billion rows instead of a hundred rows?

[00:44:06] Or like, how does your table work? Can I group by? Can I sort? So like, basically, if there isn't that much to work with, I'll go deep. And I'll ask like highly specific questions about state machines to understand if they've really thought about the details. Because often I'll just see like A tab with a table, and let's say, let's just use RAM as an example, beautiful app, has lots of tables, nice ones, and I think like, simply speaking, it's a table, cool, , doesn't look like much, but there's a lot of nuance in there, you know, there's like, certain things they allow, certain things they don't, some types of sorting and filtering are good, some are not, That's opinion.

[00:44:41] And I think that type of opinion being built into just a generic table is actually enough to talk about for half an hour, whatever the interview length is, and gives me enough signal on whether you, A, are like thinking thoroughly about the system, and B, interrogating the actual data and the structure of the information that's being presented.

[00:44:59] And [00:45:00] it's not just like a UI exercise of like, Cells and columns and rows. so, I mean, I just picked the table as a simple example because, you know, there's, there's so many of them. But, let's say the designer doesn't even have a desktop app in their portfolio. They just have like some mobile app. That's fine, too.

[00:45:16] Like even if it's a calculator app or a weather app, there's so much that you can, you can kind of derive second order complexity questions out of anything. Like even the weather app, if you just keep scrolling, there's like so much more in there. There are 50 ways to show feels like. There are so many ways to visualize highs and lows.

[00:45:34] There's like a visual design angle. There's a typography angle. There is like the systems angle of like which information do I show where there is the like usability angle of what you said of like do I even care about feels like and wind direction or do I just want to know like what if my weather app was just like wear a sweater today like that's all it said like no temperature no color nothing all it says is Just a picture of the outfit I should wear like that's the weather app and that's a conversation I'm willing to [00:46:00] have for half an hour of like, hey, I made this insane weather app at the media lab at MIT I just assumed that somebody there would make an app like this and And I would happily discuss it.

[00:46:09] You know, I think that's fascinating to have a weather app That's just like gaslighting you into wearing the right clothes. Anyway, I think I got I lost track 

[00:46:17] **Ridd:** No, no. It's good. It's good. It's, it's, it's like, , even some of the action items that I'm kind of taking out of this is maybe there is an opportunity for designers to stand out by. Proactively getting incredibly deep into one portion of a set of designs in order to demonstrate their ability to communicate that level of specificity and where the micro decisions existed and why, and in doing so, that maybe would speak more to what you were looking for than even the holistic presentation of the entire project.

[00:46:51] **Aashman:** Yeah. And I would say that that's more out of necessity, like just to be clear, like it would be really nice and ideal if you also had [00:47:00] a more holistic platform level project. But the reality is that , not every 21 year old is going to A, have access to a platform level design problem and B, have worked at that job long enough to have designed it,

[00:47:13] So, I think it's unfair to be, to somebody out of school, to be like, where is your foundry? You know, why don't you have like six years of RAMP UI? Um, so I think, I think to me it's like It's completely fine for you to show, show us , your college portfolio. And if it's not about the details and micro interactions, it could be about the user, empathy.

[00:47:35] I would be more than happy to spend 20 minutes going about, Oh, we were trying to design a UI to book classes. You know, every college student has an app that's like. Class booking UI for my college. Cause the current one sucks. Cool. Sounds good. I mean, even though this has been built 10,000 times, I'm down to discuss this.

[00:47:54] Now it's not about the fact that it's just like yet another like booking UI. It's more about like, what are [00:48:00] the nuances? That makes this booking UI different from the one at five other universities. And maybe it turns out that there's a, there's a sudden, certain like, like weirdness in the calendar, or like, there's a, like, for example, I went to RISD our first year.

[00:48:15] We didn't have any sort of classes. We just had to, they just told us what we would do. We would do these three types of studios the whole year. You don't pick anything. You just go show up eight hours a day and come back. Now the class booking UI there is very different from like somebody at Brown, up the hill, who were just spending half their days in this tiny little calendar app trying to pick the right classes and, you know, trade offs and stuff like that.

[00:48:38] So I think like proximity to users and talking about like their problems and how that reshaped your Assumptions is also an equally valid and fun, um, interview conversation.

[00:48:50] **Ridd:** when we first talked to you, mentioned spending some time mentoring younger designers at Palantir and you know, we've covered all A lot of ground in this episode.

[00:48:59] So I kind [00:49:00] of just want to have like one final catch all. So are there any other ideas or learnings that you're instilling in other designers to help them succeed at Palantir?

[00:49:12] **Aashman:** Yeah. I mean very practically I manage six designers Um, so that's you know, obviously through that I get a lot of face time and one on one time with them I work directly with two or three of them. So we are actually co designing. We're in the same figma files We spend hours together just literally like You know, doing good old designer stuff.

[00:49:34] Um, and then the other three or four I would say are In other parts of the org, but obviously I'm like well versed in roughly what they're working on. And so with them, it's a slightly different like relationship, 

[00:49:46] About half of it is like, Palantir shaped stuff. Like, org navigation, the autonomy piece, you know? Like, the autonomy is a blessing and a curse. Like, if you are the kind of person who's like, shy, or like, unsure about asking questions up front, or like, you [00:50:00] know, being uncomfortable in like, large Like meetings maybe that's that's something to work on and so it's like okay like as a designer You're like a first class citizen of this meeting even though you may sometimes be the only one and there's like five other technical people saying Technical things all the time and it's very common to only understand like 20 minutes of a one hour call and that's fine Like it's okay to do that and it's okay to just be like hey I literally don't understand half of what you said But this is my question and these are my problems as the UX designer, can we work on it together?

[00:50:32] And you'll find obviously everyone is more than happy and helpful. So I think like a lot of the work is like empowering designers to operate in technical spaces where they may sometimes feel like outliers. I think another piece is, and so that, that, that autonomy piece obviously has other angles too, depending on the profile of the designer.

[00:50:52] But, you know, it's like, again, asking questions early and often, um, like drawing being generative, like it's [00:51:00] better to make 10 things without knowing how it works. Versus making one thing after spending one week reading 10 books and 15 documents and internalizing it Like we don't want academic PhDs We want just like doing and I think creating interfaces No matter how shitty is a much better way to get to the truth than to ideate and use words and like You know kind of talk to people like 10 meetings is not worth it And if you are having 10 meetings Take a picture to each of them.

[00:51:29] Take 10 pictures. Show all 10 of them. Let the work speak for itself. And only speak when the work is unclear. And I think that creates like, that starts to become faster over time. Where like, it used to take me like 4 designs to get to good. Now it takes two and it's the same idea of like how can I like short circuit the iteration process because like I've been there before.

[00:51:50] So that's, that's kind of the like Palantir specific stuff and I think there's a lot more that falls out of it that's, you know, like, hey, like this team operates this way. That team is more structured [00:52:00] but operates blah, blah, blah. And I think those are just like tribal knowledge things. But the, the other thing that I like to focus a lot on and this is maybe.

[00:52:07] Maybe a Palantir thing. I don't know. Frankly, I've only had two jobs. But I think the thing we optimize for are generalists, design generalists. So maybe you can call them full stack designers. I don't know. Obviously, there is no such thing as a designer who's good at all of those things. Like you can, you may be a user research person.

[00:52:27] You may be like a creative coder who like actually loves the CSS and the JavaScript. You may be like a UX decomp person who just revels in the data, the diagrams and you know, the zero to one, or you may be like a visual craft person who just like playing with the drop shadow for like six hours. Like that's fine.

[00:52:45] All of these are good things. My job is to like identify those spikes and let you lean into them. While also creating some level of baseline on the other thing and I think that's something I actually derive a lot of enjoyment from because It's [00:53:00] funny like every time a new hire joins or like somebody, you know, I get a new person They they kind of I ask them that you know What what what do you think are your core competencies and then you watch them like evolve?

[00:53:11] And realize like the difference between what they thought they were and what they actually Or, they just lean really into the one thing that they knew they were amazing at. Like, I had somebody who was just like, been doing graphic design since he was like 8. And you could just tell. Like, you know, you can tell when somebody grew up using like CorelDRAW. That's a different type of designer than somebody who's like a Figma native. You know, and you can kind of, like, start to, like, suss that out. And so we spent more time on, like, typography and just, like, you know, I showed him, like, Paul Rand, and I was like, read these books. and then with another person, it was much more about, like, like, dogfooding the software we actually use and, like, business strategy and, like, you know, like, maybe almost, like, product management.

[00:53:55] Persona. Um, and so for that person, I spend more time talking about, you [00:54:00] know, the actual business and how Palantir is like organizing itself around, obviously, as you know, like the crazy like surge we've had in demand and value. And what does that mean for the business? And I think it's really just depends on their interests and how I can grow them as well.

[00:54:17] Obviously, you have to like balance this against the business needs. That's obviously something that I, you know, it's like, oh, we need X designer and X place, cool, resourcing game. But that's different from the kind of growth conversation that you asked about. 

[00:54:31] **Ridd:** Well, this has been cool. I really appreciate you coming on and you've definitely like 10 X to my knowledge of Palantir and it's really, really interesting. The types of problems that you're dealing with there as a designer, super inspiring stuff and appreciate you taking the time to share it with us today.

[00:54:47] **Aashman:** course, yeah, I feel like I definitely just like spoke too fast and went through a lot of stuff. But hopefully there was something valuable in there for everyone.

[00:54:55] **Ridd:** There's, it was a very practical episode and exactly what I was hoping

[00:54:59] **Aashman:** [00:55:00] Yeah. And I mean, for anybody listening, I think we, we, we love, we love design at Palantir. We really need to have a healthy, strong design org as we enter this like next phase. And yeah, just would love to have tons of new applicants or something, you know, coming out of this.

[00:55:15] **Ridd:** Well, you can check the show notes and I will include your Twitter careers page, that kind of a thing.

[00:55:21] **Aashman:** Perfect. Perfect. That'd be great. 

