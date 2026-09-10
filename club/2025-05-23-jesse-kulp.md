---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: G5SC7Ft0J0E
slug: 2025-05-23-jesse-kulp
source_type: descript
source: https://web.descript.com/28facb44-ec7b-4d90-9e78-696a904de400/50de5
guest: Jesse Kulp
host: Ridd
title: "Designing Google AI Studio"
published: 2025-05-23
duration_min: 54
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] **Jesse:** I've been at Google four and a half years. Coming up on five years. I was toiling away on the internal tools. So we were building developer tools internally for Google DeepMind, who are the, the model developers who build the latest and greatest of the Gemini model family. So I had some exposure to the AI world, even pre-chat GPT, right?


## [00:00:19] How Jesse got the opportunity in Google

[00:00:19] **Jesse:** That was about three years ago. I've been working on AI tooling for even before that. I mean, open AI has been around for more than three years, but it became that aha moment for everybody in 2022. I was already toiling away about 15 months ago. An opportunity came my way internally. We brought in a new VP from outside from Microsoft, who was looking to bring together a new suite of products.

[00:00:44] And at the way Google works, like many big companies, it's sort of like let a thousand flowers bloom. We have lots of different teams working on similar ideas, similar products. We have something called the Gemini app, which is a consumer app, which is kind of our version of GBT. [00:01:00] We have something on the other side called Vertex AI Studio, which is an enterprise product.

[00:01:04] But what, what we were looking to carve out was kind of this middle tier, which became Google AI Studio but the idea was to build a. A tool for, uh, developers who wanted to build using the Gemini API, but they wanted a surface, a UI surface, to come in and try out the latest and greatest, most experimental models coming out of DeepMind and have a place to see how it works.

[00:01:28] Tinker around with some of the API parameters, which we call run settings. get a feel for which models work best, and then build something with it. And as you probably know, there are many tools out there that are doing similar things, but we felt and still feel that because we're Google and we have this very large ecosystem of tools, the full stack from infrastructure all the way to the UI layer, we can offer the best possible experience with the best possible models.

[00:01:54] And so the opportunity was there, uh, for Google and then luckily for me, they found me, I [00:02:00] found them. It kind of happened by happenstance, but it, it became, uh, a nice opportunity to grow into something that's become. A really big important part of the Google AI strategy.

[00:02:10] **Ridd:** I mean, it's cool now to see the humble beginnings because you're operating at like crazy scale. Everything's growing so quickly. So from that initial moment, you know, you've been handed the keys, where the heck did you start?


## [00:02:21] How Jesse got started on AI Studio

[00:02:21] **Jesse:** You wouldn't even believe when we first started, we had a suite of tools. We were called ML Developer, and we were trying to create this little portfolio of tools for people who were building with ai. and it was, again, the profile was not just any developer. it was a very specific type of application.

[00:02:36] So a small startup who didn't need compliance at all of the enterprise type capabilities, but somewhat a little bit more sophisticated than just the pure consumer. There was this sort of this middle tier, that profile has now grown into AI enthusiasts and people we call vibe coders. People who are.

[00:02:54] Product managers and designers and non-developers, which has become a larger and larger segment of the [00:03:00] audience, we realized there are people who want to learn, experiment, and even build, whether it's games, applications, production use cases for businesses that are actually functioning businesses.

[00:03:13] And they needed a place to start. And maybe they had some exposure to Google and had used Google products in the past, but in some cases they had not. They had really had never tried Google products beyond, Google search or maybe Gmail, but in terms of like using it for AI purposes or using Gemini in any way was completely foreign to them.

[00:03:33] And OpenAI became like the iPhone, right? It became the aha moment for the mainstream consumer. Everybody knew about it and it became the def facto. tool that everyone thought about and everyone wanted to use. So we had, like, from just a pure business perspective, we had to think like, how can we define our brand?

[00:03:52] Google is already obviously a very well known brand, but in this particular space, we were playing catch up. Even though Google has been a leader in the [00:04:00] AI space for more than 10 years. I mean, uh, DeepMind has been part of Google since 2016, I believe, and the roots of AI go way back in Google.

[00:04:09] But like all of a sudden we were pressed into this team. We were less than 10 people trying to figure out like, how do we commercialize this? Or what, what is our role? Like what is, what is this product that we're trying to offer? Are we the top of the funnel into the Google ecosystem? Are we trying to monetize this and make money?

[00:04:26] Are we just trying to show off the latest and greatest? there was a lot of discussions about where are we and what are we trying to get out of this? And it was not clear at all at the beginning.


## [00:04:35] Initial research for AI Studio

[00:04:35] **Ridd:** Given that level of ambiguity. Can you talk a little bit about like the research component? Like what were you trying to do to even learn what you needed to figure out in the early days?

[00:04:45] **Jesse:** So it is an interesting question. We did not have a traditional researcher on the team. I personally took time last summer, a year ago, roughly. To do a series of interviews with startups and people who we thought were our target audience, and we [00:05:00] went through our logs.

[00:05:01] We looked for our heaviest users. We reached out to them and tried to find, what are you using this for? How, why? What is the value that this is provided? Are you using this because it's free? Because there's a free tier, because of the long context window, because it's Gemini, because someone told you about it.

[00:05:18] Like what's the real value here? And I don't think we had a clear idea and we really did not have a strong set of data points to help connect this storyline, this arc. We had a bunch of hypotheses as to why we thought this could work and where it was going, but none of this had really been proven in fact.

[00:05:35] And we didn't, we didn't know exactly which direction to take this in, so we just had to trust our instincts a little bit and trust some of the signals we were getting from some of these touch points that I mentioned and let that guide us to the next step, whatever that may be. And it was, it was an iterative process for sure.

[00:05:52] **Ridd:** Did anything come out of those conversations that meaningfully shaped the way that you were thinking about the product opportunity?

[00:05:58] **Jesse:** we got a lot of like, your [00:06:00] product sucks. I mean, it was like pretty like blunt, honest feedback. People were like, the, the platform sucks. I can't find it. I don't understand the product positioning. I mean, it was very blunt feedback about if you were coming from outside of Google and you did not, were not familiar, it was not clear what were the, like, as I mentioned, there was a consumer product, there was an enterprise product, and then there was this developer tool that sat in between.

[00:06:22] But that product positioning was not clear at all. It was not clear for search engine optimization. People were running searches for Google AI Studio landing in the wrong place. They couldn't find it. They couldn't find the API key, the documentation, all the other pieces that we were trying to build out a platform for developers, but even for AI enthusiasts, people that just wanted to see what GEM and I had to offer.

[00:06:46] there was no clear path to get there. And when they got there, they really didn't like what they saw. It did not, it felt very much like this fragments of, of products. And it had not been put together as one cohesive product, which was, again, like [00:07:00] it was part of the UX goal or part of our, mission was to bring these pieces together to create a more holistic product, but to also take in all this feedback.

[00:07:09] I mean, the harsher feedback is generally the stuff that's the most actionable, right? So we could hear this feedback, And that really drove a lot of the early, product excellence, if you wanna call it that, where we were, we were moving very fast.

[00:07:21] We were being pushed to move at high velocity and Google Deep. We were not part of Google DeepMind at this point, so they were pushing us 'cause they wanted to release. New experimental models every 2, 4, 6 weeks. Right. On a regular cadence, how do you keep up with that pace while you're also trying to build out functionality, make improvements, Very hard to do that with like a skeleton crew under very tight timelines. 

[00:07:46] **Ridd:** Are there specific ways that that type of environment stretched or grew you as a designer?

[00:07:51] **Jesse:** I was the only person, the only UX person there, right, for a year. So I had to literally do everything. things that were UX related, as I [00:08:00] mentioned, doing research, um, doing the design work, trying to do visual design, doing some marketing materials, doing things that were really outside of my skillset, outside of my comfort zone, but also thinking about product strategy.

[00:08:13] **Ridd:** Can we touch on the product strategy piece a little bit? Because the more that I'm listening to you talk, like my perception is you're basically given this really broad, big important opportunity space. You have competitors that are moving really, really quickly and you're kind of just tasked with, Hey, figure it out.

[00:08:31] Oh, by the way, here's some research and like, the product mostly sucks right now.

[00:08:35] **Jesse:** Yeah.

[00:08:35] **Ridd:** it out. I would imagine it didn't take you very long to come up with, you know, ideas and strategies for what you can try, how things can be improved. But then you touched on that interesting piece where because of the nature of where the product sits in the overarching ecosystem, you gotta bring a lot of different people along for the ride and and loop people into that strategy.

[00:08:57] Talk to me a little bit about that process.


## [00:08:59] Managing stakeholders at Google

[00:08:59] **Jesse:** [00:09:00] good part about it is that you have a seat at the table and you're my ideas and, and all of us were on the early team. We had access to the decision makers and we could influence decisions and we could throw ideas out there. And there was really no, nothing that was off limits.

[00:09:15] Um, because we were really thinking very broadly and there were a lot of different scenarios of where this product could go and, and where we could land with this. The downside to it, however, was that there were a lot of cooks in the kitchen and there was not a lot of data to support these decisions. So anyone could come up with any sort of idea.

[00:09:32] And it wasn't necessarily wrong. We didn't have anything to prove. We had a north star but there was nothing that definitively proved or disproved some of these concepts.

[00:09:42] And so anyone could come in, whether they were on our team or they were a customer. You, it's very easy to overreact if someone posts something on Twitter or LinkedIn or any, social media outlet. If they speak really loudly or angrily, like you have a tendency to kind of overreact to this one data point where in fact it doesn't [00:10:00] necessarily represent a majority or multiple data points.

[00:10:03] And so, but like, because they say it in a very harsh way or an aggressive way, it's very natural to kind of over index on that one person's comment. And I think it, it took some discipline on our part, on the team's part to, to try to think through all the feedback you're getting from very senior leadership within the company, but also what you're hearing from people who are using the product regularly and then our own team who's using it every single day and we're living and breathing this.

[00:10:30] you have to find some way to filter these different layers of feedback into making, good decisions, but also decisions that scale, right? Like it can't just be like, here's something that works today. It has to be something that's gonna make sense. 

[00:10:43] **Ridd:** Can we talk a little bit more about that piece? Because it's one of the more fascinating components of this. and opportunity space is things are accelerating and three to five years feels like an eternity. And so how did [00:11:00] that kind of futuristic lens influence the way that you thought about the underlying system for AI Studio?


## [00:11:05] Thinking about scalability from the beginning

[00:11:05] **Jesse:** the truth is working in, in tech in general, but AI in specifically, there's no way to forecast, that far into the future. I think we all know that, but you have to be thinking about decisions that are scalable. For example, we are creating a studio with these different modalities. So there's different models that do different things.

[00:11:21] Some are text based, some are image based, some are video based and audio based. the amount of models, but the capabilities of the models are gonna only increase. So you're thinking about, as a consumer, you don't really care about those, you just wanna.

[00:11:34] Show me what it can do. I, I, I wanna ask a question and I wanna have the model respond in a certain way. generate an image that does this, or a video that does this, or let me go input an image and you can react to that. How do we make this really simple and easy to use and easy to understand for someone who has never used these type of products before?

[00:11:52] we cannot totally forecast what's coming next, but we know that there's gonna be iterations of all of these things. So [00:12:00] if you don't think about something that's going to scale and allow for iteration to become, like what eventually is now becoming more of a playground environment, the whole thing is gonna break down very quickly because We don't want to be shipping just these little, uh, fragments of products like features, individual features that don't connect to something that people are like. I actually get value from this. There's some utility for like, okay, great, it's cool, but if, if that's all that you're gonna get from people seeing like, how does this impact me?

[00:12:29] When apps started appearing on the iPhone. Like in the app store. If you remember the early days, these apps were coming out and they had no utility. They were cool.

[00:12:36] I think people liked them, but they weren't things that were gonna actually change productivity or efficiency or anything that you did on a daily basis. It was only after several iterations and more people started building apps and the, the ecosystem started to mature a little bit. We got to a point where it was like, okay, I can kind of see a use case where this is actually useful for me.

[00:12:59] **Ridd:** I mean, it's challenging [00:13:00] because the utility is tied to relevance, but you're designing for an almost infinitely wide spectrum where it's impossible to predict all of the different use cases. So maybe you could share a little bit about how you thought about that set of design challenges, , when anything is possible, how do you even communicate what is possible when you are kind of setting AI studio up to be the almost front of house for these models?

[00:13:27] **Jesse:** believe it or not, people did come in with a little bit of a mental model of like what to expect not in all cases, but if they, if they had seen some product before, they were like, okay, Gemini, okay, Google. Like, you know, Google has a very strong reputation.

[00:13:39] Generally the expectations are very high, so They're not gonna give us the same amount of latitude that they might give to a startup. So there's still the quality of the model, the quality of the user experience and the product experience has to be somewhat high just to meet people's expectations.

[00:13:54] the true star of the show is the model itself, right? And so we are just trying to facilitate [00:14:00] the, showing the bottle in a, in a way that is. Clear, easy to use, but useful. but also exciting. And it opens up in your mind of the, the, this world of possibilities that like if you're a developer and you want to build using one of these models, using an API, you can start to envision a used case if you don't have one already, where I see a demo of something, I could see something by just typing a couple simple prompts and it will trigger an idea in your head that you could actually go and build on your own without us walking you through that.

[00:14:31] And that, that's a creative process that in any individual can have where you see something, it reminds you of something else, or it says, you know what? I can see the pain point. I can see, just like any entrepreneur would go through when they're trying to come up with an idea for a business, they try to see like, what is a problem space, what is the pain point?

[00:14:48] What, who's not solving that? It's not necessarily a different way of doing things, but now you can use a chat bot or a model or AI in some way to expedite things that are being done [00:15:00] manually today. you could this long context window.

[00:15:02] So you could take these huge documents and put them inside the chat and within seconds get a quick summary, right? So you're synthesizing thousands of pages of, you know, a whole book or a document and get quick responses within seconds that would've taken that human hours, days, weeks in some cases. And then like you, as you probably like Notebook, LM came out and actually we took this one step further, which is one of our partner teams and was like, we can not only synthesize this information, but we can turn this into a conversation that's actually very digestible.

[00:15:39] And so that took. What we were trying to do to a even a step further. So like you can consumerize this 

[00:15:45] **Ridd:** I want to go super deep into like your process, how you're making these decisions, and maybe there's even an example of, of something that you were wrestling with during that first year or so, some kind of a design decision [00:16:00] where we could use that as a lens to understand how you are practically dealing with this ambiguity and what it looks like in your practice to explore different solutions, figure out the right path forward.

[00:16:11] Is there something that comes to mind that we could use as kind of a launching point for that area of discussion?


## [00:16:15] Dealing with ambiguity in the design process

[00:16:15] **Jesse:** I will tell you there was a lot of self-doubt initially because I had no thought partner, no one to bounce this off of. I did not have another designer there for, so you're trying things. A lot of this was new to me. I had never seen or, or built a product quite like this, as I said, we were moving very fast.

[00:16:32] So high velocity did not have a lot of time. I didn't have a sounding board to go to, to say, does this make sense? Does this look right? Does this work? as a designer, as most designers, you really wanna make something great and you want it to have a nice polish and a nice finish that makes that, that looks really put together. But maybe you don't have the time or you don't have all the details in front of you to think about, like, what is the final version of this product look like?

[00:16:59] [00:17:00] Really, we're just trying to get this out by a certain date, working in teams and working in groups like I, I, I don't think I even, Appreciated until I had to go through this myself, like how lonely it can feel, and not having that thought partner, having someone to tell you this doesn't look right because you're so deep into it.

[00:17:17] You're looking at the details so closely I think Jeff Bezos made this comment, uh, years ago that there are, there are. Reversible decisions and irreversible decisions. And the ones that are irreversible, you have to spend a lot of time thinking about. But the ones that are reversible, which is the vast majority of get it out there, put it out into the market, let users react to it.

[00:17:36] You can always tweak it, iterate it, and make it better. that was the, uh, the path that we ended up having to, to go and, and me as a designer, it was like all of these things, branding, coloring, look and feel, tweaking the color palette, but to even just like the building out features to doing some of the interaction details.

[00:17:53] **Ridd:** Let's talk about the visual piece then, because I think a lot of people listening hear Google and they associate material[00:18:00] 

[00:18:00] **Jesse:** Yeah.

[00:18:00] **Ridd:** you know, a lot of prebuilt things and rules that you had to follow and that kind of a thing. So how does this work for you as someone who's going zero to one inside of Google?

[00:18:09] How much flexibility was there? How'd you think about the visual language?

[00:18:13] **Jesse:** Yeah, that's a good question. for those who are not familiar, Google has Google material, which is a company-wide, uh, set of guidelines that most external facing products align to in some way. There are other design systems that live within Google Cloud has its own version and there's many others.

[00:18:30] There are accessibility concerns and other factors that have to be steps that you have to go through if you are an external facing product to make sure that you meet these things like contrast ratios and accessibility standards. But we were kind of in the middle where yes, we were. Trying to create a design system and a component library and a color palette and all these things that aligned to Google material, the latest version of Google material.

[00:18:55] But we were not really confined to any one design system. And [00:19:00] because we were moving so fast and trying to tweak some of the components that had already been created, we were given, or we took, I guess some sort of liberty to do things our own way. It wasn't perfect, it was a little messy. it was freeing in a sense of like, you didn't feel totally constrained by a design system.

[00:19:17] But I can't say like a design system can be very helpful for you because it does give you some level of guardrails. It does give you where you can and cannot go. And if you don't have another person there, to bounce those off, at least you can refer to like the, the, these are the the parameters that I have to work inside of.

[00:19:36] And yeah, we are Google product. We do wanna meet the Google standards, and we do. Wanna share some look and feel. But we also we didn't wanna be an enterprise product. we wanna have a very modern and clean look and feel to it because that's what we thought.

[00:19:50] Yes, it's a developer tool, but that's what we thought. People using our product, that's what they're gonna expect. I was given that freedom. I don't think there were people around me that were totally [00:20:00] familiar with how that whole process worked.

[00:20:02] And I tried to get as much guidance as I could, but I also took advantage of the fact that there was no strict guidelines being imposed, at least at that time on what we could and could not do.

[00:20:12] **Ridd:** Were there specific things that you were doing to kind of distance yourself aesthetically from more of a traditional enterprise product?

[00:20:19] **Jesse:** we went through several different UI refreshes, trying different ideas, when you get into look and feel, it is somewhat subjective.

[00:20:27] There's not necessarily a right or wrong answer and everybody has an opinion. We would do very senior level reviews with people who did not have any design background, but I don't think anyone needs a design background to have an opinion on how something looks or how it feels. truthfully, like the UI piece of it was not necessarily the most important, uh, area that we were focusing on at that time.

[00:20:50] Right? It was more the API. So we felt like, okay, well we'll just try some things and see what works. We iterated many different [00:21:00] times. In 15 months we've done three UI refreshes and changed substantially. Uh, just in the last couple months, we literally redesigned every single component. And the look and feel has changed pretty substantially since our team took it over.

[00:21:16] And, I mean, I don't know, you know, people can see the iterations. I have all the, and just we're talking like 15 months, like the iteration between where we started and where we are now. It's pretty substantial. And I think in six to nine months there'll probably be significant changes from where we are today just because we, we have more resources available.

[00:21:35] I think we have a little bit more focus on the UI and the polish, but also we, we feel like it's important enough that we continue to iterate and get it right because it was really like, let's try to make this look as good as we can and make this, Match what we think our, our target audience would want to see.

[00:21:52] But yes, definitely not enterprise, but it's not pure consumer either. So there were just sort of a lot of, it's not this, it's not this, it's not this, [00:22:00] but there is no line, right? I mean, it's always just the next iteration.


## [00:22:04] Advice for dealing with design feedback

[00:22:04] **Ridd:** You've mentioned the feedback piece a few times now, so maybe just for one second, I wanna step outside of the story and give you an opportunity to talk to someone who maybe has felt in a similar situation where, you know, they're just wrangling a bunch of different opinions. Maybe a lot of them are actually contradictory. that you've learned through this process that you think other designers could benefit from?

[00:22:25] **Jesse:** I mean, what what is most painful to me when you're going through a process like this is like, there is a design process where it's like, there's a discovery phase where it's like we brainstorm, we have lots of ideas, it's blue sky, everything is in bounds, right? And you can try all sorts of different ideas, but as you get closer, like you have to funnel this down where like you can show it to different designers, different teams and everything is, is, is fair game.

[00:22:51] As you get closer towards a release date though, you need to narrow the feedback and narrow your stakeholders who are giving you that feedback. This has happened now [00:23:00] multiple times where literally we've gotten three days before code complete and some external stakeholders, someone from another team or someone else has jumped in with like this red flag feedback cannot do this.

[00:23:12] This is just like a, this is a launch blocker and now again. Why is this coming up right now? It's not that the feedback is wrong or not worth considering, but like the timing does matter, right? Like there there was, there's a time and place to give broad, like game changing feedback or like if we're changing the entire system, if you're getting down to like three days before, to me that, that's a breakdown in process, right?

[00:23:36] Like where either that person should have been giving feedback much earlier or someone should have flagged this and, and if it's really getting down to three days before, and in some cases it's just that people don't pay attention until they absolutely have to. And then when it's a getting to a release date, there's sort of a go no go decision.

[00:23:54] And then they ha they focus in on these details. As a designer, that makes your life [00:24:00] extremely, uh, stressful as you could imagine. And when I, I spent many late nights. With us, three other developers, and we were just you know, I had spent all this time in Figma mocking up all this stuff and then we were trying to build this out.

[00:24:12] And the truth is, is like we had to do so much of it on the fly. So many color changes and interaction details that were just being worked through in the moment. even though we tried to discuss this stuff ahead of time, some of that stuff you cannot predict. But the feedback piece that I was talking about, there is a respect factor where like if people wa they care and they wanna give feedback and it's, it is, it is structured, constructive feedback, that's great, but you have to set some sort of guidelines to your stakeholders to say, look, this is when I can take this feedback, this is when I can act on it.

[00:24:47] Once we get down to that, those very last few days, it's not really fair to me or to anyone in this process if, you know, if you. Are gonna start dropping this, this stuff. So like, setting those [00:25:00] expectations, setting those boundaries and asking people to respect them. 

[00:25:03] **Ridd:** yeah. You're putting your finger on one of the most challenging things as a designer where like, how do you create enough urgency that actually gets someone in leadership to give you the feedback that you need when the stakes are not? Go or no go, you know? And like the amount of times that I've been in that situation where I put something, maybe I'll drop a loom in Slack or something and you know, I get feedback, great.

[00:25:24] I start acting on the feedback. I actually have a whole concept that is feeling pretty good. Engineers are looped in and then like the, you know, CEO swoops in five days after everyone else and gives like, oh, hey, yeah, you know, I got a chance to look at this. It's all wrong. You know, like I've definitely been in that situation before and it's pretty painful.

[00:25:42] **Jesse:** I learned just to work backwards with this, like identify the people that you absolutely have to have on board and make sure they're involved in this process early on. They're aware of the end goal, they're aware of the steps that you're gonna take to get there, and they are involved in the checkpoints along the way, so there's no surprises.[00:26:00] 

[00:26:00] And then everybody else is sort of a nice to have and you're, and we welcome that feedback and I'd like to hear different voices. Some cases it's marketing people, some cases it's product people, it's developers, it's other designers. On other teams, it could be a design system person. That's all great, but those are people who are not gonna block a launch or something like that.

[00:26:21] And then, of course, try to inform the decisions as much as possible. Like to explain how we got here, what, what, what drove this decision. If there's certain constraints that maybe are not obvious to other people, whether they be design system related or some technical consideration that forces us to do this one way or another.

[00:26:40] **Ridd:** let's talk a little bit more present because it sounds like you've had pretty significant changes going from first designer. Everything's moving a million miles an hour, to all of a sudden there's like real heat intraction around this product team is growing significantly. Usage is growing significantly.

[00:26:56] So what are the specific ways that [00:27:00] your role has evolved as this thing has kind of taken off?


## [00:27:03] How Jesse's role has evolved with scale

[00:27:03] **Jesse:** This second year, we have more resources. We have a little bit better idea of who we are and who our users are.

[00:27:09] there's a little bit more pressure, but we have the, the opportunity to focus a little bit more on Polish, both on the, the UI and on the design system. We've kind of built our own design system. I think we know a little bit more about how to delegate roles and how to play to certain people's strengths.

[00:27:24] we've restructured the team a little bit to bring in different skill sets, uh, not only within the design team, but within engineering and product as well. That's helped us form a team that's a little bit more focused on execution, but also on product excellence and quality as well. I think it's gonna help us, but it's also now digging into like the next set of problems, which is gonna be like, there are certain workflows that we know, like we kind of have a better sense of like how they work.

[00:27:51] And so I personally have demoed the product hundreds of times. Just in the last couple weeks I've heard so much feedback from different users. Kind of have a better [00:28:00] sense of like, where are the real pain points that we may be missing? It's like, it's very easy as a designer to be like, I, I'm focusing on the ui.

[00:28:07] 'cause that's the most visible thing and it's what people see and they react to, but it may not represent, the biggest pain point that they feel. And I think it's like when you talk to people, it actually either as someone who uses the product yourself or watches someone else use it, you can kind of see some pain points that exist maybe below the surface, like a creation.

[00:28:27] You're trying to create an API key. There's a, there's a workflow creation have this documentation site we're trying to integrate into the product, building out a platform. How do we get people to take that next step, right? Like we want to introduce them, they come to our product, they're trying out these models, they're exploring, they're exploration phase, right?

[00:28:45] So what is the CUJ? What is the journey that they're after? What are they trying to accomplish? And how do we get them from point A to B2C? Are they there just to explore and see what's available? If that's it, like that journey is a little shorter and more compact, but we wanna make sure that it's [00:29:00] really, fulfilling for them.

[00:29:01] They are able to see what's best. If you're looking to build and like actually use these models for some, like production use case, maybe the documentation or some of the usage and billing pricing and these other details matter a lot more to you. We need to get you to a place where you can take action on these things and get started on like whatever your ultimate goal is.

[00:29:23] But those are different use cases for different types of users. So we need to make sure that we've thought through those level of details. Last year, I would say we wouldn't, we would not have been thinking along those lines. It was just like, I. Let's get it out there, right? Let's get as much out there as we can and let the, let the market react to us and tell us what's good and what's bad.

[00:29:43] Now it's a little more refinement, right? It's a little bit more nuanced, and I think you're getting a little more into the weeds, but that's getting to the real heart of the matter, right? Like, what's really working well and why, and what's really not working? Why, where can we differentiate?

[00:29:59] Right? [00:30:00] And I think like in this world, the models, they matter a lot. We look at these leaderboards, we look at like, who has the best models? I think those are all gonna sort of even out and they're gonna commoditize a little bit. And what's gonna really differentiate is the user experience is gonna be, which product do I like, do I enjoy using?

[00:30:19] Which one gets me to get value and accomplish my goals quickest and easiest. 

[00:30:24] **Ridd:** You know, when you are just getting things out the door as fast as you can and running a bunch of experiments, I would imagine your hit rate is not a hundred percent. So is there some kind of a design decision that maybe you were even wrestling with at that time that just like didn't work out that we could kind of point at or some set of learnings where you're like, okay, the course of this year, I have now realized why.

[00:30:48] Maybe we was looking at that a little bit wrong in the beginning, but now I see the right path forward.

[00:30:53] **Jesse:** There were clearly things that didn't work or didn't work well. Patterns, uh, you know, little things, [00:31:00] components that we tried, many things that went out the door and just the reaction was flat. Like, it just, it didn't land well and it wasn't the reaction that I was expecting.

[00:31:12] But there were a few other things that I really didn't even think were big deals at all, and were became very popular and people liked them. They found them useful. So there's always gonna be, you know. Some unexpected things in both directions, I think you can't anticipate exactly what people are gonna love and what they're gonna hate, and like what makes sense for you.

[00:31:29] but that's the exciting thing about doing this. I mean, you kind of get a chance to, to try things and if it doesn't work, you have a chance to improve upon 


## [00:31:37] Figuring out the right patterns for AI

[00:31:37] **Ridd:** Can we talk about the patterns piece for a second? Because I am kind of curious how you thought about pulling from what in a, you know, small time sample size seems to at least be working versus trying to find ways to specifically differentiate from the competition. You mentioned open AI and how you kind of wanted to, you know, stand out in some [00:32:00] ways, but I find that tension really interesting for this space specifically because we converged on precedent and patterns really, really, really quickly. Like to the point where sometimes I'm kind of like. Is this actually right or is it all just moving so fast that we just locked in in like the first nine months? You know? So how did you think about that problem space as a designer?

[00:32:21] **Jesse:** It is really easy when you work at a company like Google you almost get like, uh, filled up with these ideas of like, you've been working with a design system or a certain framework for so long that right and wrong seems to be like defined by Google material. Whatever you, you've been using for quite a while.

[00:32:38] That's why it's really important to bring in fresh eyes, fresh voices, people who are coming from somewhere else. Literally every week we were looking at different products that were coming out, that were doing similar things to us, and you could see like, it was very easy, like immediately like visceral reaction.

[00:32:53] I like that. I like that pattern. That makes sense. I can see why they did that, or, or the reverse like that doesn't make any sense. I don't know [00:33:00] why they're doing that. that's just for a fact. There's no actual utility to what they're doing. with what we're trying to do, I was trying to be as independent as I could with making decisions and trying to be as nimble as I could.

[00:33:10] We had a lot of PMs with a lot of, opinions and a lot of feedback from the marketplace and a lot of developers reaching out to us who were instantly saying, like, this, I don't like this. Or, have you guys seen what so and so is doing? And then, yes, you go look at that and you make comparison. But we did have our own style, our own look and feel.

[00:33:27] It was still within the Google family, but we were not totally constrained by that. So I felt like it was a good mix of both. we weren't trying to play copycat necessarily to what other people were doing. but there were enough influences around us, both internally and externally to give us ideas and give us some data points as to like, why is this better?

[00:33:47] Or why, why does this work? Like, or does this make sense? 'cause the worst thing we could have done, in my opinion. Is start flooding the UI or flooding the product with too many things. I mean, that, that's the, the hardest thing to do as a designer [00:34:00] is to bring in a lot of complexity, but to mask it as much as possible, it's a very simple, easy to use interface, but it still has a lot of complexity there for those who want it. we compare this to like, there is the Tesla driver. They want someone who is, everything is automated and it's an easy car to drive and you don't even have to think about it.

[00:34:21] Some people want the Porsche nine 11, right? They want the manual. They wanna able to control things and they want that feeling of like. I'm controlling this. That's kind of the place where we were trying to get to with AI Studio. We wanted a tool that was like, okay, I'm a do it yourself kind of person. I understand how these things work.

[00:34:38] I want manual controls. I want to be able to make changes to things, see how it impacts model performance and play around with things. If you're just looking to do prompting and doing a chat interface, you can go to Gemini Advance, you can go to chat GPT. There's a million products out there that do that.

[00:34:54] **Ridd:** Yeah, it's definitely a theme that I'm noticing in some of these conversations, just talking to people either working on dev tools [00:35:00] or, um, you know, like Palantir was one of the recent episodes, and it's important to know when your users have a little bit more motivation and are a little bit higher intent and also a little bit more expectations for what they're going to be able to accomplish in the product where, yeah, maybe it doesn't have to actually be so stripped down in the beginning because someone actually is pretty committed to making this thing happen.

[00:35:21] **Jesse:** even internally, uh, notebook LM became a huge success for Google last fall, and that's a partner team comes out of Labs, which is an incubation group that actually our product started in the same place that Notebook and Lab started. That became a smash hit because of, for many reasons, but it, or for its simplicity and its ease of use.

[00:35:39] It does like on its face have more of a consumer oriented, uh, use case. But you could see how. Businesses or developers or other people could use this type of audio in, audio out, chat interface for many different things. And so of course the temptation is to like gravitate towards things that are successful.

[00:35:59] It's like in the [00:36:00] sports world, the team that wins the Super Bowl the next year, everybody wants to copy whatever formula worked for the team that won the Super Bowl, right? No different. When you're building products internally, you know, you see a smash hit, you see something that works, you wanna borrow from it.

[00:36:12] But again, the DNA of the product and the use case and the users, it's a little bit different. And I think if you don't try to understand those nuances about like why is that product successful and who's it successful for and what are the goals that they're trying to accomplish, it's not always apples to apples when you're making those comparisons.

[00:36:32] And if you don't, and even as a designer, like if it's just like, well this power product is popular, let's just take what they're doing. It may not work for you, it may not work for your users. It may not fit for the type of, CJs I keep using that term, but like for the use cases that you're developing for, in which case, it's, it's not gonna work for you.

[00:36:50] Right? And so like it's incumbent upon you and your team to like, make those distinctions to understand like, why this works for them and what would work for you.


## [00:36:59] Looking into the future of AI

[00:36:59] **Ridd:** before I [00:37:00] let you go, I want to have a little bit more of a future facing conversation because you're thinking about this space a lot, and it's already evolved so much over the last year. So when you kind of look into the future, what are some of the, either hypotheses or even just ideas that are rattling around in your brain for where this all might go?

[00:37:19] **Jesse:** not, I'm not breaking any news here that like things are gonna change rapidly in terms of. the barriers of, of who, who we consider a developer is, is already broken down. So anybody can become a vibe coder, an entrepreneur, people that wanna build stuff, whether it's games or applications, business applications.

[00:37:37] The ability to do like one click deployment, to run a few prompts and to create something is now limitless. And I think that that's going to, that the use cases are gonna grow exponentially and it's gonna touch every area of life. Whether you're an artist, a business person, someone who's looking to create things that are more efficient.

[00:37:55] And I think people who don't even consider themselves to be creative will be able to tap into a [00:38:00] creative side of themselves by using these tools because it empowers them with very little effort to get started. Like, it, it, it's, it's shocking what's gonna change is. The amount of, of things that are out there, right?

[00:38:14] It is just gonna grow, like we're today the model is like we, we, we type in a couple things and there's an output, a model of output, and it could be a text response, maybe it's an image, maybe it's a video, but it's still very primitive, right? It is still very much of like a call and response.

[00:38:31] There's not true interactivity. The multi-term conversation still feels very manual and very sort of, it's not very fluid. I think the capabilities of the models to what they can do, what we can put in, what it can put out, the way we can interact with these, it is gonna become within a, you know, a very short period of time These agentic use cases are gonna become things that are like. Living, breathing things that are gonna be a part of our life that people, you know, you started to see it with Alexa and some of the home [00:39:00] assistants, you know, years ago. I

[00:39:01] I think it's gonna become, more ubiquitous and more useful. And, and, and, uh, I think the way that you interact with models is going to, we haven't even really scratched the surface.

[00:39:10] I think we're gonna look back in a couple years, the kind of silly stuff we're doing today and say it's gonna just look like. Child's play, it's gonna feel very primitive compared to where it'll be. And, and that's great. And I think it's exciting to be a caveman, so to speak, right? Like we're sitting here playing around with this stuff.

[00:39:27] It's very exciting to us. it's gonna be like dial up internet was in the mid nineties, right? It's gonna gonna look back and say, how did people ever work with that? I think there's a world and, and, and, and the time span to get there is gonna be much, much shorter. So I think as a designer or as a developer, as someone who works in this space, it's very exciting because, you know, that like, my skills are going to change and what I'm gonna need to do to even, facilitate users interacting with these surfaces is gonna change so much.

[00:39:56] Like I just envisioned this being just a totally different [00:40:00] type of experience within a very short period of time. that's a good thing. I mean, I think that's, uh, that's, that's something for me that's very attractive. Of, I mean, to, to be a part of that.

[00:40:09] **Ridd:** Let's go a little bit deeper on that then. How has being at the forefront of this space shaped the way that you think about where your career's gonna be? I don't know, maybe two, three years from now? how does who you show up as as a designer change in that world?


## [00:40:21] How the role of designer will evolve

[00:40:21] **Jesse:** The one thing I would take that I'm very feel very fortunate about is I started working with researchers first. It, like, I was kind of deep in the weeds. Now I'm a designer. I'm not a researcher. I'm not pretending to understand all the things that they do or know by any means, but getting a little taste of that world and understanding like what goes into making the sausage, like what is the process like how, how are these, how are these models made?

[00:40:45] How are they evaluated? How are they trained? How are they fine tuned? Understanding a little bit about what goes on behind the scenes gives me a feeling of Understanding where this could go and like how powerful these models [00:41:00] can be and how quickly you can just make leaps from one step to the next, to the next.

[00:41:04] I, and then again, as a designer, it's, it is like similar to like if you were a musician, you don't wanna play the same style of music your whole career. And if you look at artists who last for decades, their style of music, the type of music they play, changes over the years.

[00:41:19] They don't wanna just keep playing the same songs or the same style of songs throughout their entire life because it gets boring for them. They don't wanna just sing the same song over and over again. Likewise, I think if you're a, a technologist, a developer, a designer, moving pixels on a screen is, , is fine.

[00:41:33] It's, it's a way to interact and to connect with people through a piece of the software, but that's a very transitory surface. I think there's a lot more and deeper interactive ways which we can. Connect with people, models will become more powerful, but the surfaces that we use to bring those models into people's lives is gonna change dramatically as well.

[00:41:53] if I'm doing the same thing I'm doing now five years from now, or even three years from now, I think I would [00:42:00] be disappointed. I don't think the future would've met the moment that I had expected.

[00:42:05] And I, I don't even mean like interacting with my daily life, but I mean, like, if it's still all, uh, UI based interface where that's my main, uh, point of contact with ai, to me would feel like it didn't quite meet the expectations of where I expected it to be. I don't know the exact timeframe. I can't tell you that, but I would expect it to become much more immersive and much more sophisticated, in a very short period of time.

[00:42:28] **Ridd:** I like the music analogy a lot. It's very obvious, and yet I haven't heard that before where I can tell you have this inherent optimism and excitement and I, I think it's admirable because don't know, there's still, you know, some subset of the market where the knee jerk reaction to every new thing is to point at and say, well, you know, it can't do that.

[00:42:48] Well. It's like, yeah, you're totally right. We were also, you know, giving people eight fingers like a year ago and now it's incredible. And so it just kind of seems [00:43:00] silly to point out flaws at this point at the rate of change. now that does bet the question of what does it look like to invest into that future?

[00:43:08] And I think it gets a little bit more murky there,

[00:43:10] **Jesse:** There are people who I know or developer, very smart people who are very deep in technology, who think that AI is a little bit of a bubble that's gonna burst, But I don't think that necessarily, it's just a purely linear path. the stuff that we're doing today, it it, it's possible that like, it gets to a, a, an inflection point and it becomes something, there's a moment of disappointment. Maybe it doesn't quite develop into the things.

[00:43:31] And maybe there's a, a reckoning, a moment of reckoning where we kind of step back. But the foundation is so strong and the capabilities of these models are so powerful. The use cases for just simpletons like us. Like, I don't have a PhD in anything. I don't, I can't tell you, I can't predict the future, but I think just being open-minded and just having exposure over the last three or four years to AI and, and foundational research models, I can imagine use cases impacting [00:44:00] healthcare and finance in every aspect of life. Even again, it may not be perfectly linear. There may be some, some steps that don't quite match, uh, what we thought would, there's gonna be some failures along the way.

[00:44:11] There's gonna be some, danger points I think we're gonna see. And everyone's gonna say, I told you so, right? This, this technology is really not what we thought it was. But you have to expect that has been the case with every other area of technology. I don't see how this would be any different.

[00:44:24] **Ridd:** I'm not gonna hold you to a formal prediction or anything, but I want to double click on that and help people listening. increase the fidelity at which they're able to imagine some of these potential futures. So is there one of those scenarios that you find yourself spending a lot of time thinking about that you find particularly interesting?


## [00:44:42] Exploring future modalities for

[00:44:42] **Jesse:** at the moment it's voice and audio and thinking about different interaction modalities, right? So text was the thing we started with. We quickly moved the image. Now it's audio. And you think about like, um, wearables and all these different ways which you can interact with models or, or interact with [00:45:00] technology.

[00:45:01] I don't know exactly what that next thing is going to be. I think, I could see a place where it, it's none of those things, right? Like there are, there are ways that I could interact with it, just by, by thinking of thoughts and, and having it manifest, in some kind of a UI or some kind of a surface. I, I don't know how, how exactly we would get to that point or what that looks like.

[00:45:21] But I think just to start with. I'm expecting to be able to interact with, AI models the same way I'm interacting with you. Right. Whether it's and, and I or with another human being. And that's just the starting point. Uh, so we're playing a lot with, with voice and vision and touch and sensory experiences.

[00:45:40] So that seems to be like the next phase. I think it would be the natural, but, but there's probably much more to it than I can even imagine at this point. that's where I see it going, where we don't have to necessarily rely on screens and, our phones and our computers to interact with things.

[00:45:56] We can start doing things in a much more natural, sensory way, 

[00:45:59] **Ridd:** [00:46:00] I'll admit I was pretty skeptical of voice as a medium that would really take off and Man, I, I, I was already wrong. Like I, I, I find myself talking into my devices a lot now. Like a lot, some days half of what I will actually put into my computer is dictated, or yesterday I just wanted to walk and think, and I just started a chat with a, a model and just had a back and forth.

[00:46:27] I said, just ask me questions. I don't want you to gimme any advice. Just ask me questions and just help me get to that next thought and that next thought. And I'm getting so much value out of voice as an input, and then AI's ability to help me make sense of it quickly.

[00:46:42] **Jesse:** Yep.

[00:46:43] **Ridd:** it's just, it just became such a big part of my life so quickly and I didn't see it coming.

[00:46:47] **Jesse:** we have this internal demo channel, and I see it on social media as well. People are just posting demos of like what they can do with these different models. And the range of ideas is just astounding to me. Like just thing, most of it's generating [00:47:00] videos or images and things like that, and, you know, it's just all from prompting.

[00:47:03] But yeah. The, the voice component, as you mentioned, is this, like, it takes so much of the efforts and the, the formality of interacting with things where if you can just talk in your natural language and we have this live API, we were just demoing this or people could talk in their natural language, you can understand them even if they're not native English speakers.

[00:47:22] So it becomes this translation point, right. Well, like in a very literal sense, translation, but like when you can interact with something or someone with your voice or even just with gestures, facial gestures, hand gestures, things like that. It becomes a much more intimate experience, right? And I don't have to sit here and type into a keyboard, which feels very transactional.

[00:47:45] It changes the way that I feel about the technology. And it doesn't even feel like technology anymore, right? Like, it feels like a very human interaction. 

[00:47:54] **Ridd:** Alright, before I let you go, I have a couple kind of left field questions. Uh, the one is, [00:48:00] did you ever play like Madden or any of the video games at any point where you have like all of the skill attributes, right?

[00:48:06] **Jesse:** Yeah.

[00:48:07] **Ridd:** I want you to hypothetically imagine your skill attributes as a designer and you have all of your individual skills and your ratings.

[00:48:16] And when you reflect on the last 15, 16, or so months of working in this space, attribute do you think had the largest skill increase for you and why?


## [00:48:27] Growing as a generalist designer

[00:48:27] **Jesse:** The things I think I do really well, and they were natural to me right out of the bat. I mean, I, I was able to talk to users and get a sense of what they're trying to do, understand their pain points, and translate those into some sort of actionable next step. So put 'em into our roadmap and to build something that was always very natural.

[00:48:44] I feel comfortable talking to people and I, I feel I can understand what they're trying to do to be a generalist. As a designer, you have to be able to do everything. So like, whether it's research, visual design, interaction design, brand design, all the [00:49:00] various things, and even doing some like, vision type of work.

[00:49:03] So for me there was a lot of, I mean, dusting off of old skills, whether it be prototyping skills, some visual design skills, some branding skills, things like that, mark, you know, like that have not been a part of my life or my job in any way for a long time. it's not necessarily things that I've never done, but it's things I haven't done in a long, long time.

[00:49:23] getting those skills refined again, took a lot of effort and took me outta my comfort zone. So I had to get that back.

[00:49:29] **Ridd:** One final question is for anybody listening who's hearing you talk about all these potential futures and all these different modalities and how, you know, we're not gonna maybe be pushing pixels around on the screen and what that actually might look like is totally just a black box for them.

[00:49:47] You know, it's very difficult, even for myself, it's difficult to imagine what that future would look like. Do you have any specific advice or a next step that someone who's motivated but unclear could take [00:50:00] to invest into that future as a designer?

[00:50:02] **Jesse:** Here's the advice I would give to anyone. This was someone my, previous manager gave to me that I thought was really good. He said, we're all, we all have strengths and weaknesses, right? If you were to rate yourself on a scale of one to five on a whole bunch of different skills, there are certain things that you're gonna say.

[00:50:16] There may be three things that I'm a four out of five, maybe a couple things that I'm three out of five. And another thing that I'm a two out of five, and he said, a lot of people spend time trying to get the two to a three, right? You're just trying to, you're a generalist and you're just trying to get to a, a baseline level if you're a generalist, if you're a solo designer working on something, you do, you have to have at least like sufficient level skills to do everything right?

[00:50:39] And, and some of those things are gonna come naturally to you and others are not. And so I, I think to that extent. Get your skills up to a par on all the things that could possibly, so you can at least at a, have a proficiency level of for anything that could come up if you're in a role like I've been in.

[00:50:58] But if you really wanna [00:51:00] stand out and excel, find the things that you're really good at, and there may be just only a couple things and really become excellent at those things because that's what's gonna make you indispensable. And that that doesn't really apply only to this job or this role. I think you could apply this to, to many other things, but there are certain things to, to being a design that you have to have baseline skills.

[00:51:21] And of course, the more things you're good at, the better. But if you can be really excellent at one or two or three things that, and, and you can showcase those things, you can bring them out and bring value to them. That's what's gonna make you. Exceptional. And that's what's gonna make you invaluable to team.

[00:51:38] Now, hopefully you find the right team or the right company that values those things. they don't always align. It's, it's possible that what you're great at is not what they need or what they need is what you're not, not what you're great at, but at least being self-aware enough to know what those things are.

[00:51:52] What are the things that you're good at, where are your weaknesses? And try to keep a, keep a record of them. You know, like turn a [00:52:00] two into a three. Okay. Like I, I'm, I'm a three. I'm, three out of five on these things. But then have something where you can say, IM excellent at this. And, and, and, and showcase that because that's the thing that people are gonna remember about you.

[00:52:12] That's the skill that's gonna take you the farthest.

[00:52:15] **Ridd:** I love that advice and it's totally not intuitive. I think we naturally try to do something about our weak spots, and as you're talking, it was reminding me of something that actually from a long time Google, uh, design leader Chris Abad was talking about, and he was saying how kind of almost in passing he thinks about the people on his team as like, what's their one liner?

[00:52:37] What's like the one thing they're really good at? And I found it so interesting because you can kind of reverse engineer that a little bit. And so, uh, I think you are furthering my belief that actually that one liner and having something that makes you really memorable. Oh, Jesse's really good at this. real value in that. So I appreciate that perspective.

[00:52:55] **Jesse:** Yeah, I mean, that's the thing. That's your calling card. I mean, it is. If we could all have that one [00:53:00] thing, it's gonna be the thing that people remember about you, and it can take, it can take you a long way. I really believe that.

[00:53:06] **Ridd:** Well, Jesse, this has been awesome. Thank you for giving us the backstory. Congratulations on like everything that you've accomplished, all the success. I know we're gonna be releasing this right when, you know Google and IO is in the news and everything. So, a proactive congratulations for everything and uh, thanks for taking the time to share with us

[00:53:25] **Jesse:** Thank you so much. I really appreciate it and appreciate the time. So it was nice chatting with you.
