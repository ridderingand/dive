---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: rRljig2AS0g
slug: 2025-06-27-emmet-connolly
source_type: descript
source: https://web.descript.com/cd3560ea-4d6d-481f-beb5-3f52e047e3ba/d2ec5
guest: Emmet Connolly
host: Ridd
title: "Transitioning into the next era of design"
published: 2025-06-27
duration_min: 59
generated: 2026-09-10
generator: dive-club-ideas
---

## [00:00:00] The backstory of Fin

[00:00:00] **Emmett:** Intercom is a 10-year-old thousand person company, more than 10 years old. and then like for a lot of companies, you know, I guess the short and pithy version is chat, GPT happened, or, put more accurately, I suppose.

[00:00:13] this moment arrived in the tech industry when it became slowly and then suddenly and quickly apparent to, to people at different speeds, that this was gonna signify a real big change.

[00:00:23] When chat GPT arrived, like, it was kind of like a daunting realization over the course of a weekend. A lot of people talking to each other on Slack going, holy shit, have you seen this? What do you think it means? And really it did not take long for us to understand that this was gonna be a big deal for us.

[00:00:38] I guess in part it's, 'cause we've been trying to make the bot conversational bot thing happen for several years, you know, and we had been working with machine learning, creating bots, and we'd actually had a partnership with open ai, which I guess helped us even before chat, GBT. That meant that we could very quickly like take what their API that they made available.

[00:00:57] And I think within three to four weeks of chat, [00:01:00] GPT coming out, we released a bunch of AI features that were like, when you're in the intercom inbox, you can rephrase or make longer or shorter or more formal or whatever your response, right? Very basic stuff. It helped us kind of get our beak sweat and realize like what was possible.

[00:01:16] We then partnered with Open ai and on the day that they shipped GPD four, that was the day that the first version of Finn launched. Finn being intercom's customer service agent, right? So I guess since then until now, it has been a story of both kind of us internally and the world at large as well.

[00:01:37] Slowly realizing more and more and more. Yes, this is actually important. This is actually the new thing. And I guess for us at Intercom has slowly turned into this thing where we've realized that Finn. It's bigger than Intercom. And so there's been this kind of remarkable story of the last couple of years of fin being incubated within Intercom.

[00:01:56] And, and I guess what we might see in other places, but I haven't seen a whole bunch [00:02:00] of yet, which is a true AI native, AI first kind of new startup and new product emerging out of a, you know, legacy SaaS, business. And I think that's something we're pretty proud of actually at Intercom. a lot of companies have been, I think, quietly trying to figure out what this new wave means for them.

[00:02:18] We have been trying and, you know, lots of false starts and mistakes and so on. But I think we're finally at the point now where we can confidently say that we , products that we're really, think is compelling and that we really think is like a prime contender . In a really hot space. And I mean, that's the last thing I'll say is like there's a certain degree of fortune and circumstance to this and I guess, you know, fortune favors the people that are there waiting for it to arrive.

[00:02:42] And we've had a lot, gotten a lot of value for more than 10 years of working on that problem within Intercom. But then you're gifted like manna from Heaven almost this new technology that gives you so many new ways of tackling the.

[00:02:54] Problem. and just the opportunity to be at the cusp and the cutting edge as well of [00:03:00] figuring out what this kind of new era of software development is. So it's been a, you know, exciting, intense, fun challenging, uh, period of figuring out a lot of things at the product level, the company level, the strategy level, the design level, or all sorts of things.

[00:03:17] Yeah, it's been a blast.

[00:03:18] **Ridd:** honestly, I kind of just have to tip my cap to what you all are doing because this type of paradigm shift is the exact opportunity that other startups needed to disrupt the incumbent.

[00:03:28] That is intercom, that's kind of had the the primary grip on this space for so long, and yet you all had the courage to proactively disrupt yourselves. It's cool to see.

[00:03:37] **Emmett:** we spent a lot of time over the years at Intercom, you know, writing and speaking and stuff like that. About, Product and strategy and how to run a company and so on. And I, I guess in that sense, have, uh, maybe fancied ourselves as students of, of strategy here.

[00:03:51] And then suddenly, you're right, the moment comes along, you're like, oh shit, we are the ones about to be disrupted

[00:03:56] **Ridd:** Oh yeah.

[00:03:56] **Emmett:** I've put all that disruption theory to test and, [00:04:00] um, uh, dust off your Clayton Christensen and and so on. But it's put us in a very interesting strategic position. 'cause, you know, uh, I, I'll take the compliment, but we aren't the biggest incumbent in the space either.

[00:04:11] There are much larger companies, especially, you know, that, that sort of larger markets. Than us. And at the same time, yes, because customer service is like such a no-brainer for AI to, to completely change the game. You've got this, whole cohort of eager young upstart y Combinator, startups who are absolutely ready to snap at our heels and, and disrupt us.

[00:04:36] And so yeah, it was that dis disruptive suped, uh, mentality that I think we had to adopt.

[00:04:43] **Ridd:** All right, so let's go a little bit deeper then, because something that you said to me earlier was you talked about how you spent. Basically two years steering this tanker towards an AI first company. What were some of the other design challenges that you had to figure out during that journey?


## [00:04:57] AI Design challenges 

[00:04:57] **Emmett:** I guess the primary one was making fin work, [00:05:00] right? And figuring out what the dynamics of actually making that system work were. when we shipped the first version of Finn. We kind of outta the box. I'm, the numbers are approximate, but roughly right here outta the box, we were getting an average of a 24% resolution rate.

[00:05:17] That is every time Finn was saying, I think I know the answer to this and trying to do it, it was get getting it right that that amount of times, right. that was a great start. For some teams that is like a game changing kind of, um, uh, number already. That is basically what you get when you point your docs, uh, to Finn and let it slurp them up and learn from them.

[00:05:36] There's so much more you can do to train and onboard and educate Finn on how your team works, what they know. Give it the capabilities to, take actions in other places, right? So there's all of this kind of un hobbling that you have to do in order to give it the ability to drive that resolution rate up and up, figuring out what those things are, and, and the answer is, it's a combination of lots of [00:06:00] different things, but figuring out what those things are has been a key part of the challenge.

[00:06:05] And really over the last two years, I think our average resolution rate has gone from. 24% to 60% today. That's again, the average kind of out of the box. So train fin, and on average are getting that some customers are getting way higher. What we kind of thought was maybe theoretical a couple of years ago has been proved to be a reality. So the core design challenges all along will be. How do we help as many people as possible get up to that level? What you realize you have to actually build is a whole application for training.

[00:06:36] Fin. You think about fin and you think, oh, it's a simple little, agent that has some, back and forth chats with you and a relatively simple surface area. But in the background is everything that requires you to train. Fin with everything that's known about your company. Everything, anyone who's great on your team would know about everything, about your product.

[00:06:55] to analyze what FIN doesn't know, then train it, then to [00:07:00] test those changes and see if it actually works. Then to deploy and you kind of have this iterative circle. So we had to kind of design this, analyze, train, test, deploy. Workflow in the background that actually goes into training fin making that useful and accessible to as many people as we can has been kind of the background design challenge and one of the big fin design challenges.

[00:07:21] **Ridd:** Any specific learnings from that training process and running through those iterations that you think other teams could benefit from?

[00:07:27] **Emmett:** One of the things that we have, I. That we are still trying to figure out is how much control or access is it appropriate to give the user? Right? if you think about fin potentially having like system prompts where you can write a prompt, that fin always understands, we call it guidance in fin and, and, and tasks that Finn can carry out.

[00:07:50] One of the things that we've realized in. Building this action taking capability and trying to make it available to customers is, it's amazing. It's super powerful, but [00:08:00] sometimes you can shoot yourself in the foot with it. So with great power comes great responsibility, and you can actually tank your own resolution rate if you do the wrong thing with an open system prompt.

[00:08:11] So it's kind of a dial you can turn up, you know what I mean? You can just give Finn access to a load of static information. That's easy. It'll do a great job of understanding it and inferring it and cross-referencing from loads of different places to, you know, weave together an excellent answer, but it's still stuck at this level of like informational answers.

[00:08:30] Next, it needs to be able to know, hey rid, you have a specific question about your account and. Finn needs to be able to go and look up your account, the status of it, the level of the tier of membership that you're on, how many projects you've created, whatever, and come back and tell you specific things to you.

[00:08:45] Ah, you've exceeded your limit of accounts created, so you need to upgrade. Do you want me to help you do that? And that last part, then the action taking part is, want me to do that for you, is where Finn can actually go in complete actions with every stage. [00:09:00] Of capability on lock there, you need to give in access to more data and more.

[00:09:04] capabilities and, and therein lies the challenge that gets more and more complicated and more and more fraught or, or dangerous. And so for some of the most, let's say close to the metal, stuff that feels again closest, like, system prompt level control, we are still working directly with our customers to figure out.


## [00:09:24] Figuring out the right guardrails for AI

[00:09:24] **Emmett:** What's safe to give them. We want to give them that access, but we haven't yet been able to make it fully self-serve. an interesting thing I'm interested to figure out in the next six months or whatever it is, is, is that an innate Property of AI systems where ultimately you give people more and more control up to the point where they're controlling the model almost directly themselves and what they want it to do, versus you are putting enough guardrails in it where people can't do, like, make, make terrible mistakes or so on, you know?

[00:09:54] And where does that stop? Will we be able to make this super advanced, almost programmatic? [00:10:00] Control of ai, like F of fin fully self-serve or will you like have self-serve up to a point under some kind of professional services thing that you engage with Intercom's team directly and the team behind fin to like implement for you.

[00:10:15] And obviously you're talking like bigger volume or something like that. But, but I think we're seeing some of that with how our customers are adopting agents already and, and not just us, you know.

[00:10:24] **Ridd:** It's a fun little spectrum that I'm now only seeing for the first time in my mind where most. People like myself included, you know, I'm living at the system prompt level, and then I'm thinking about, okay, how can I tweak this in order to create a user experience that makes sense? And yet you almost have to think about what's the right interface to allow a customer to tweak their own system prompt.

[00:10:45] 'cause obviously you're not gonna expose the entire thing, but if you go too far into, well, well could a UI for everything, then maybe that's too rigid and you're not giving enough control. And so finding the right place on that line. Is quite the design challenge that I'm only [00:11:00] now really appreciating.

[00:11:01] **Emmett:** Yeah. And something I think that separates or creates the opportunity for when is a thin wrapper not enough, right? So this whole like debate over like something is just a thin wrapper around chat GPT or something like that, right? Being this knock. and I think what we're finding is that, you know.

[00:11:17] True AI first companies, and I would count it intercom, uh, uh, modestly among one of those But, but other examples might be, for example, lovable or granola is another great example I think, where it isn't actually like taking a prompt and passing it off, but it's wrapping.

[00:11:33] Not just a killer user experience, but a lot of, um, model improvements in safety around, passing back and forth. You know, and so that's a good kind of non-disruptively area to be in. You know, I mean, Chachi PT recently added some kind of meeting notes type thing, and the question becomes, oh, did um, granola just get sherlocked?


## [00:11:54] Will we have winner take all products?

[00:11:54] **Emmett:** Did they get like, you know, killed overnight? Squash stood on whatever. And I think it's getting harder [00:12:00] and harder because it's like, no, granola's a pretty substantial product actually, even if it seems very simple on the surface. And so, at least that's my hope, but it would be a pity if the end point of all of this is there's just one piece of software now. Like, you know, you interact with your AI and that's it. I hope that's not where we end up, because it wouldn't be as fun, I think, as the alternative.

[00:12:20] **Ridd:** It. It felt like that for a little bit. I think even 18 months ago maybe. When I would play out where this is all headed, a lot of the versions of the world that I could imagine ended in, oh my gosh, are we just gonna have these all-in-one tools that do everything? And I think since that point, I am coming around to this idea of like, okay, there's a little bit more defensibility in the app player than I originally expected.

[00:12:42] And I think that granola is the perfect example of a tool where, yeah, I'm gonna keep using that not only because I like the interface and I like the improvements that they've added, but also there is this. Level of personalization and when you've dumped context into a [00:13:00] tool, the switching cost then becomes extreme to port that over to another tool that doesn't know as much about you.

[00:13:07] And from that standpoint, I would imagine, you know, if I'm using Intercom and it's two years later and in theory who open AI or somebody comes out with like the perfect solution, I wouldn't be so quick to jump because I would be leaving all of that existing context.

[00:13:21] **Emmett:** I'm not so sure for what it's worth by the way, I mean like maybe there will be one piece of, so I go back and forth all the time, which is kind of the fun of riding the wave of the current moment as well is like looking at what's going on and trying to do the impossible thing of predicting where it's gonna go.

[00:13:36] But I mean, my latest kind of jam is using Claude code inside of Cursor on my computer, right? It has made me kind of go, oh, maybe this is the final piece of software. I mean, not that, but it very much feels like it because it is. You know, I started using that setup for Code Generation. Hey, me, maybe this is a slightly better version of Lovable or whatever, but what it made me realize [00:14:00] is you can do anything, anything on your computer through that ui.

[00:14:04] You can tell it to write a script on your computer and run the script that does anything. You can tell it to pull a bunch of stuff through, you know, all done through Cloud code incur, I mean, cloud code in your terminal if you want, I suppose. But it's kind of like having a. Uber nerdy, like Linux CIS admin type person next to you.

[00:14:23] And you just say to them, and this is how I like publish stuff to my blog, which I used to do through like run the GitHub commands and now I just go into cloud code and you can say, just push the latest post to my blog and it like prepares the GitHub thing and it says, okay, that's done. That's live now.

[00:14:38] So. It's a different way of thinking about using your computer. Not everyone's gonna do that, right? That's the uber nerdy, like end of the spectrum. But again, I think there's gonna be like one of those spectrums and, and one of the interesting things I think is the uber nerdy end of the spectrum is pretty overserved right now because like for the longest time programmers have been like, [00:15:00] Nerdy people that love having like their text editor set up, you know, EMAX versus Vim, and I got my set up just the way I want it. And they want the complexity because, 'cause the complexity like entails power comes with power, right? But what's interesting is. The programming community has like dramatically changed over the overnight almost Right?

[00:15:18] You and me are programmers now and, and, uh, every designer in the world is a programmer. And so I do see the opportunity for more, user friendly, Interfaces to that type of power, you know what I mean? Like access to the control, everything on, on your computer without having to go into something that looks like a very, you know, 1980s hacker, uh, user interface.

[00:15:40] So I think there's tons of opportunity. Is that a thin wrapper? Like maybe, but maybe it's adding a whole bunch of value at the UI layer as well. So I'm interested to see, um, where that goes to.

[00:15:50] **Ridd:** let's talk about that more future state a little bit. So I want to return to the tanker analogy that I like is a picture that you shared. So. [00:16:00] Okay. You're steering the tanker, you're moving towards this AI first world.


## [00:16:04] How the practice of design has evolved at Intercom

[00:16:04] **Ridd:** Are some of the ways that you've had to intentionally evolve the way that the practice of design is performed within an intercom over the last couple years?

[00:16:13] **Emmett:** At a practical level, we reorganized design to be centralized. When it came to the point where re we realized we were gonna have to like go all in on fin and actually do fin and truly invest in it from an r and d point of view, we didn't have the time. Or patients, frankly, to go and do a big reorg and like, redesign, you know, our reporting lines to, to, uh, match how we wanted to do the work.

[00:16:37] So we centralized design, , and not just design like all of r and d really. and we started organizing instead around work streams. Work streams were, areas of effort that we could spin up. Uh, or down for an indefinite amount of time. A work stream would probably be as short as three months, or some of them have been going on, or sorry, three weeks.

[00:16:57] Some of them have been going on for over a [00:17:00] year, I would imagine now, you know, but it means you can, there's 1D RI for a work stream, not a triad. Very, uh, centralized responsibility rather than diffuse responsibility. And the team structure is very cross-functional, so not just r and d people, but sometimes also sales and marketing people pulled into those teams also.

[00:17:18] that is created, a certain amount of chaos is too strong a word, but like, you know, uh, instability or uncertainty or, uh, ambiguity about how we're working. But it has given us, and it has been the only way that we've managed to do what we've done, which is like your, your analogy of steering the tanker, of being able to take parts.

[00:17:38] Of the org and like really properly, 100% put someone's focus or a large group of people's focus on an important thing and be able to like make a decision on a Monday and already be working and shipping even on a Friday, you know, against that goal. you know, something I say quite often is like the start of an

[00:17:57] of innovation is a great time to be a designer. [00:18:00] An S-curve is, you know, we're at the start of an S-curve now, where the beginning of the, of the technology, um. It's slow and then feels like it's advancing quickly. And when you're in the middle, you don't know when it's gonna flatten out.

[00:18:12] That's where we are now. How, how much further is this gonna go? Almost vertically before it flattens out? Think of like the first iPhone you got. The first few were incredible and awesome and every new release was got and then like, what's the difference between the last few? No one really knows, right. Um. That's where we are with AI right now. The start of an S-curve is a great time to be a designer 'cause there is so much to be figured out. We don't know how any of this is gonna be played out. there is so much low hanging fruit. So many big open questions. And we are busy, busy at Intercom because of all these questions I've been talking to you about. What that we've had to figure out about FIN and how agents should work and so on. The other thing about the start of an S-curve is it's not a great time to be stuck or beholden to the old org structure and the tendency to get pulled and [00:19:00] dragged back towards shipping that, and that's why at the start of an S-curve, when there's a lot of.

[00:19:05] The possibility space is wide open. We have many, many futures that could play out from here now, and it's very hard to pick. And so that's why the centralized design team with a lot of optionality is a, is a better structure. Some of the ways the role of the designer has changed at Intercom. Well, we've created a specialist AI designer role. We only have three of them, um, compared to about, I think, 20 product designers we have at Intercom just to get, but these are designers who are like deep in, they're in the AI team. We have an AI team of, I think about 40 ml scientists and researchers, and they work directly with them on.

[00:19:38] Often on the models, uh, you know, on the prompting there's a lot of, looking at the output of the models and eyeballing it and developing an intuition. There's a lot of quantitative, uh, assessment and there's a lot of deep and technical understanding of how the models work. And there's a bit of design as well.

[00:19:55] as in UI design, our product designers are also leaning hard [00:20:00] into, this AI world. we haven't like mandated any, you know, he new requirements or skills. I think it's still very early, but my advice to everyone on the team has definitely been to lean in hard and just experiment. And, and that's what we've been doing really.


## [00:20:16] Product design's goal to ship to production

[00:20:16] **Emmett:** So everyone on the team has taken a goal to ship code to production in Q2. In this current quarter that

[00:20:23] **Ridd:** Oh wow.

[00:20:24] **Emmett:** we're in the middle of, of trying to do that. So we're running workshops that. Helps every product designer get set up with a local dev environment of Intercom and fin, and then helping them using AI assisted tools like Cursor to find something very simple and, and fix a bug or make a copy change or tweak some CSS or fix some padding or something like that.

[00:20:45] Something small, right? But I think that will help us understand like, where's the expectation bar, you know? And it turns out, I mean, by the way, I wouldn't ask people if I, I did it myself, and I was like, okay, well, at the very least, it's, it's actually eminently doable, way easier than I [00:21:00] thought it wa would be.

[00:21:01] I'll tell you something. I wrote about this right on, on LinkedIn and it got like a surprisingly large reaction I have been surprised at the. Wow. How do you get people to do this? Or how do you do this in the first place? maybe a certain amount of this is the culture at Intercom and the way it is open to such experimentation or certainly open to being very AI forward.

[00:21:22] Maybe I get it for free and I'm like doing this on easy mode. The answer is you can just give it a shot and find a friendly engineer. Maybe get a technical designer on your team who wants to champion, this, that, that that's what works really well for us. And then just go and give it a shot. And I think once you try things, you'll find they're a lot more accessible and easy.

[00:21:42] But it is definitely the willingness to roll up your sleeves and experiment and not talk or think about it, but actually just give it a go and do lots of like disposable little experiments. 

[00:21:53] **Ridd:** I mean, I saw the screenshot of everyone enthusiastically talking about their first pr, and it's cool, right? Like I remember where I was sitting the first time I [00:22:00] shipped a polished pr. It feels good. And so to be able to give that moment and even dedicate the resources where you have like the workshops to help people get environments running, and that's the blocker, right?

[00:22:09] Like the code piece is not hard, it's just can you get an environment running?

[00:22:14] **Emmett:** Man. I will tell you, a lot of people have said to me, or people have even emailed me about that thing. That's why I'm surprised at the, and they're like, it feels so good to ship to production. It actually, like, it's such a dopamine hit and I think it's a little bit, the Plato's cave analogy where like you're looking at the shadows and flickers of reality on the wall.

[00:22:33] That's like a little bit what it's been like for designers who are like designing in Figma and then someone else takes their work and makes it real and then it goes to the users. And it's very hard sometimes in design to get access to users. We all talk about it, but it's a hard thing to do. And very few product designers go out there and like spend the day with customers and Feel that thing, feel the reward, or feel the pain of someone using their product. And I think it's [00:23:00] the same, even just shipping something to production. You're like, I did a thing actually, it was different before and now everyone sees it my way. And there's some tangible feedback loop I think that has been kind of missing and a little bit neutered about the design process.

[00:23:15] And I think Really having skin in the game is a super important thing for designers. And the more you can get close to what's shipping to users or close to the customers, I guess. I mean, we always say it's a truism, but interestingly shipping code has been, has had that byproduct, you know, and then suddenly you've got this pride feedback loop that kicks in.

[00:23:34] You know, I can, we can fix. Polish, features, you know, and so that's where I hope it goes from here is that everyone ships to production. We get to learn, and then people go, okay, I'm starting to learn like what the level of complexity. Oh, it's not just adding a period where one was missing, it's changing some padding.

[00:23:52] It's not just changing padding. And now we do have designers at the adding features. Level of what they're building and shipping. So what's [00:24:00] going on there? What's going on is the designers are nibbling away, right from the kind of P three quality bug fixing quality of life thing, but they're nibbling away.

[00:24:09] And some of the more pioneering designers are even starting to develop their own front end features. At the other end of the spectrum, those same designers or other designers are also like vibe, code, prototyping and lovable and and so on, right?

[00:24:23] And they're building these commonly, I think, throw away like 70% their prototypes like better than a wire frame, but doesn't quite look like our product and isn't finished. But it's, you know, it's a good fast way to get going. Think about those two things. Think about design, like performing this pincer movement almost on what they're doing.


## [00:24:41] Designers owning the frontend

[00:24:41] **Emmett:** They're vibe coding, throwaway prototypes. But more and more, I think you can imagine like that getting hooked up to your actual design system. Those prototypes becoming more and more realistic and maybe even being like the first draft build that you might hand off to engineering to actually go, you know, it's got a few react components or [00:25:00] something.

[00:25:00] but probably over time, taking more and more of that as well and and building more and more finished prototypes. And again, from the other end to doing your p threes, then your P twos, and actually building features. I see a possibility of a future where designers, where those trends meet in the middle, and designers are essentially writing from scratch or iterating in production.

[00:25:23] full aspects of the front end, end code and, and possibly even ultimately the entire front end experience that would dramatically redraw the role of what it is to be a designer, right? And it would redraw the relationship between designers and engineers. Like we have this very jagged frontier of handoff right now, and everyone tries to get away from handoff in design, you know, in a sense.

[00:25:46] while at the same time doing it in a very like, detailed way. but it's a hard part and it's a very lossy part of design. Often, frankly, design are doing their best to like, draw everything out to hand off to an engineer who's like [00:26:00] less visually, uh, oriented, let's say, than a designer might be.

[00:26:04] You know what I mean? Less interested in all of the details and there's just a bit of a bit of a frustrating loop to get the details right, you know? , I think the front end backend like distinction would be a way better. Interface point between designers who have the capability to code a lot of that front end and engineers who are gonna manage the much more complex engineering challenge of the back end.

[00:26:25] I'm not gonna be totally naive. There's some front end security and all this kind of stuff, man, the agents are gonna get good enough to code front ends. Uh, I, I'm, if you think about it, one of the very finest. Training Corpus in the world is view source of H-T-M-L-C-S-S and JavaScript.

[00:26:43] It's the ultimate open source data resource. So if these bots can do anything, anything in the world at all, it's right. Great, great front end code, including that's like advanced and secure and performant and accessible and all these kind of things. So. I mean, I'm not, I'm not vying [00:27:00] for this.

[00:27:00] I'm not leading an incursion into, uh, engineering's territory, but I will make one more point. Okay. Which is, which is this, um. If you go today to the Open AI careers page and you look up, um, one of their roles, which is, forward embedded engineer. Have you ever, have you heard of this phrase, forward embedded engineer before?

[00:27:20] **Ridd:** have not, no.

[00:27:21] **Emmett:** Okay. So Forward Intercom has this concept now as well. I'll, I'll try and explain what it is. Here's the thing we and many other people have learned when you're building these AI agents, I was talking before about like there's a frontier of like complexity where you're, you're giving people a very sharp blade, right?

[00:27:38] And they might nick themselves at these blades, this blade, if they're not careful, they, if you give them too much control over what the agent can do, they might inadvertently make a mistake and like tank their resolution rate or something like that.

[00:27:49] So when we're dealing with new customers, we have realized that like a little bit of handholding, especially for some customers who are coming saying like, we have a large volume of que [00:28:00] queries that we want fin to answer. Some of them are very complicated. They're dealing with advanced systems like issuing refunds or something.

[00:28:07] Something like that. So we get in there and in a kind of a professional services style way, we help them set up fin. In a way that's exactly right for them. Right? So you have this dynamic a lot now with companies like Intercom, other companies we're competing with do this as well, and companies like OpenAI where you have this role of forward deployed engineer that goes into the business and embeds in the business with them and finds out what it is that they need and helps them get it set up.

[00:28:34] And it's a way of managing the, at least the phase we're in right now with these AI agents that like high level of complexity of integrating with them. Here's what's interesting. Go to their website, look up the job listing, and there's something there in the job description that says something along the lines of, as a forward deployed engineer at OpenAI, you will embed with customers, understand their problems, synthesize them into solutions, research how to do it, and propose [00:29:00] solutions that solves their problems.

[00:29:01] And I'm looking at that going, holy shit, this a designer, like you're describing the role of a designer, right? So these are engineers going to do. Exactly the role of a designer and using their coding skills to solve these design oriented problems. You know, so I think we, designers should a, make no apologies for using our design skills and adopting coding skills to also solve, but look, there's a fluidity to the role.

[00:29:25] So we should like embrace and accept and welcome, you know? so

[00:29:29] **Ridd:** fluidity to the roll. And also like a land grab is almost the picture in my head right now.

[00:29:34] You know, like adapt or die kind of.

[00:29:36] **Emmett:** Do you think engineers wake up every morning going, I can't wait to close in three P three bugs right now? I think they don't, right. I think they don't want to do, like I, I think that's less interesting than a lot of the stuff that they.

[00:29:50] **Ridd:** I agree.

[00:29:51] **Emmett:** Get outta bed in the morning to do now, like designers don't either, but it will be a lot easier for designers.

[00:29:56] And I'm only, by the way, the P three bugs framing is a very, I'm trying to [00:30:00] like, almost minimize what this actually means, you know? But like, that's where we are today. it's only a land grab if it's not a mutually beneficial setup. Right?

[00:30:09] Use the titles perhaps, you know, is a healthier place to start from. Uh, I know that's trendy as well. Like there's a lot of that, you know what I mean? We don't do UX design anymore and I'm, I think that's awesome. but I also think it might, and I, there's no shade intended in what I'm about to say at all here at Think it's maybe.

[00:30:26] Thinking small a little bit because like, I think that, that, that's a great change to make, but it's a simply one little ratchet

[00:30:35] **Ridd:** Yeah, it's incremental.

[00:30:36] **Emmett:** that are gonna happen of much bigger and more important ones than like titles and, and, and things like that. So, let's say a couple of weeks ago, um. Lenny's podcast came out with this, this survey and it was like, uh, designers, 24% of designers are like, I can't remember, like miserable or not, not optimistic about the prospects of AI and their role or whatever.

[00:30:58] It was like 1% [00:31:00] above the others. And yet everyone was like, oh my God, designers are

[00:31:03] **Ridd:** Hug your designer.

[00:31:04] **Emmett:** with us and so on. And I'm like, it's interesting. I mean, that is one way of looking at things, but there is a much more, agency minded, if you'll pardon the pun, where like the, the individual can have their own agency, uh, uh, way of taking this.

[00:31:18] I think there's a whole, there's big opportunity to have a whole bunch of fun and ride the wave of the changing roles, and I think that's a way better mindset than the, like, hunker down and, and see what kind of a storm is gonna blow over us here. Uh, a much healthier mentality.


## [00:31:35] Comparing to the shift from print to web design

[00:31:35] **Ridd:** Agreed, and I see the latter mentality quite a bit, and you can tell that there's a very large and very real chunk of the market. For design right now that is feeling a little bit uneasy that, yeah, AI and code-based responsibilities introduce all these new opportunities, but at the cost of what really matters in design and if there's this pressure, you know, the UX [00:32:00] piece is, yeah, it's, it's, it's flippant and easy to make that change, but for a lot of people that's.

[00:32:05] The richness of design and it feels like it's gotten getting squashed down. I'm curious if you have anything to say to those types of listeners. 'cause I'm sure there are people listening to this right now that feel some of those emotions. Right.

[00:32:16] **Emmett:** You know, I wouldn't poo poo it or I wouldn't dismiss it or, or anything like that. Like, that's all valid. And I guess like different people came to design with different, Motivations. You know, some people are, I guess like have this notion of themselves as being extremely craft oriented, and that's their self identity.

[00:32:34] And maybe they see like a, a wider definition of design as being a, like a, a threat to that or whatever. as someone who's been in the tech industry for a while now, I personally, I feel like I can get to be more excited than scared or intimidated by the change that are coming because I've seen changes like this happening and I do see that a lot of people in tech have not. We had a very stable, unusually stable decade in tech there and in the tech industry. [00:33:00] and so this is very different for a lot of people who have experienced that.

[00:33:03] in those early days of the web there were, you know, these print designers and younger web native designers, I guess you would call, call 'em, which I was one. the print designers, I mean, had an amazing experience. I learned a huge amount from them and seeing their work. But you could see, you could look at their work and you could tell.

[00:33:18] That was a print designer versus like a more native web designer, and you can look at work from that period. Some of it, by the way, is what, like the charm of the work from that period is from these like super rich detailed like image mapped images that had to be sliced up into a million different like overlapping table views and so on.

[00:33:37] But over time the web found like its more native expression of what it wanted to be, which was a more like rigid, I guess, kind of sense of layout. And I just feel like we will start to see a similar mindset shift either you among designers in this era of adapting and adopting a, an AI first mindset.

[00:33:59] I think no [00:34:00] matter whether you are a woodworker or a web designer or whatever, like you gotta know the grain of your material. You've gotta understand like what it wants to do and what it doesn't want to do and things like that. 

[00:34:10] **Ridd:** Well, this opportunity, there's opportunity even in a similar way, tying it back to what you were talking about with Finn and Intercom and proactively disrupting yourselves. That same type of alpha exists at the individual level right now. The assumption that like, this is not going away.

[00:34:24] You know, there have been bubbles and the people that have leapt on crypto for instance, fell on their face. I don't think this is that. And there's an opportunity here where when you can be quick to adopt these new technologies, be the ones that are playing with the new material. Man, you can put yourself on a different type of career trajectory.

[00:34:43] Like right now, there is that opportunity because yeah, maybe tying it back to your print versus web native parallel, this is that level of a transition and it's happening right now.

[00:34:55] **Emmett:** Yeah. Or, or bigger, potentially. Yeah. Yeah. And I mean, uh, [00:35:00] the thing is, it, it still looks dumb or broken in parts today, or it still looks, well, it's good for the first 80% and then it falls down or whatever, you know? But again, if I look at like a lot of the output of lovable, right?

[00:35:13] often aesthetically, but even like. culturally almost, it reminds me of like a GeoCities or the MySpace aesthetic, right? Everything is a little bit like there's a Starfield background and it's lasers and kind of fun and kind of disposable, and it lives on this like URL called. Electric, toothbrush, whatever, lovable, just like you used to have like geocity slash soho slash uh avenue or whatever, you know, but you wouldn't look at those dumb old Starfield websites like, um, with animated under construction gif. I go. Oh, the web is silly and not going anywhere. You have to be able to look at that and go, where did the web go from there? You know, or likewise, I will say I, I worked at Google in the, you know, air early stages of Google through their kind of adoption of, of design as a thing.


## [00:35:59] The value of being optimistic about the future

[00:35:59] **Emmett:** And, [00:36:00] at the time that I joined, I mean, Google was a search box and that was what it was notorious for. And you could look at Google and go, wow, that's a very plain form, as plain a web form as you can get. But from that, like very simple starting point, flourished a whole suite of apps and products and Ajax and mapping and online cloud storage and all this kind of stuff.

[00:36:22] So from very like toy like, or humble or simple beginnings or. You know, I guess what I'm, the analogy I make there is I look at the Google single prompt input UI from 2004 and the chat GPT UI from 2024, and I'm like, both of those are just the nascent beginnings of something massive and it's all gonna go somewhere different from here as well.

[00:36:45] **Ridd:** The way that I kind of like to think about it is. That moment in time with the videos and some of the early generative AI stuff where everything had like six fingers and you had Will Smith eating the spaghetti, you know, every new use case of [00:37:00] AI has to cross through that spaghetti moment. And then at that point in time, there are two types of people.

[00:37:06] There are the people pointing and saying, Look, he has six fingers or there's people being like, oh my gosh, this is kind of goofy, but can you imagine where this is gonna go soon? And those cycles are condensing and they're getting shorter and shorter and shorter, and man. There's no time to point and laugh at the sixth finger, you have to start imagining, and I think that's like that level of agency that you're talking about here, where it's like, what can this be?

[00:37:30] How can I be early on this? And man, it pays dividends.

[00:37:34] **Emmett:** I do think that getting more technical actually is, uh, again, at the start of an S-curve is an advantage. 'cause you can just like dig in and experiment yourself and then realize like ways in which this actually sucks for everyone. And you're a designer and you can make it better, but you have to get in there and understand those pain points a little bit, first of all, as well yourself to see.

[00:37:53] Those opportunities.


## [00:37:54] What are the durable skills in the world of AI

[00:37:54] **Ridd:** Let's zoom out for a second and maybe we get to the plateau of the S-curve. Things start to [00:38:00] settle, become a little bit more predictable. I kind of wanna have you talk about the role of design, and it is a little bit hypothetical in nature, but in that world. What are the durable skills, like what are the most successful designers doing to really make an impact at a company like Intercom in your mind?

[00:38:20] **Emmett:** Just jump in. Be willing to take, like to learn, be a self-led learner.

[00:38:24] Being a self-led learner is probably the most important, like characteristic and being willing to, toy and play with the role. And, the other side of it, I think is how, like, you know, the, Identity crisis perhaps in design from the last few years. Uh, it's been kind of interesting to see. So the apple brought out the liquid glass stuff right.

[00:38:45] and it's such like an interesting kind of milestone. 'cause in a way it is like. Apple just did what Apple does and like what designers everywhere have been trying to do, or, you know, a certain cohort, at least of designers to like take this level of [00:39:00] attention to detail and craft and dial it up to such a ridiculous degree that like, it's a crazy amount of resources and effort and willingness to push.

[00:39:10] And in that regard, it's kind of a spectacular achievement. So it feels like that, craft dialed in craft version of design where it's all about aesthetics and detail and showing the value of your work through an almost inordinate. Stupid amount of detail to include in the thing, like the precision and craft being demonstrated that way.

[00:39:33] And like Johnny, ive talks about this in a beautiful way. Do you know what I mean? Like seeing that someone else in the world cared enough to do that thing. I'm not denigrating it, but it does seem like the wrong version of design right now. Or the very like craft oriented end of the design spectrum compared to the problem solving oriented end of design.

[00:39:53] And I think that design has had this very like. Maybe not split because it's not different factions, but a very broad [00:40:00] sense of what is designed like, is it a very UI craft oriented thing or is it a very like deep systems problem solving oriented thing? The answer of course is that it's both. but the craft folks, I think sometimes to their, Detriment fail to take into account what does the world care about? What does the business care about? What really makes a difference? What's gonna really make design valued in the company? And not just be a little bit of a like, well, my design buddies think that the work I do is cool, right? So there is in reality a spectrum there of how people think about their work.

[00:40:35] Meanwhile, on the other end, there's probably a dearth of appreciation or sophistication. in the craft and how the importance of really putting that level of detail and care into the problem solving work that you ship matters as part of the overall thing. I would hope that we would get to a place where these things can be married, and this is not like, contrary to how I see some people think about it.

[00:40:59] We have [00:41:00] to learn. Coach that pulls me further away from the craft. I'm like, no, it doesn't. It gives you a tool to better engage with the craft. Your craft is not drawing pictures of the real thing. Your craft can become the real thing. Your craft doesn't have to be red lines describing the distances.

[00:41:15] It can actually, like you can play with the responsive layout and the speed and movement and things like that, and you will always be able to produce something better yourself if you're building it more directly than building a. An abstract representation of it. So like I think the absolute weapon designers of the future are the ones that can marry both and see that like going in a more technical direction is actually in a sense also bringing you closer to the craft side of things.

[00:41:42] But at the same time, this is not gonna be craft for craft's sake. It's gonna be craft for, you know, a business oriented problem solving customer value. Point of view. , I think that's what we've been trying to do in design for a long time. There's always been these little subgroups that value one or the other.

[00:41:59] And there [00:42:00] probably should be, there will be room for sub-specializations in future. But another thing that is, I think a truism at the start of the an s-curve is there's a lot more, space for generalists than specialists. We will get back to a place where specialists have their place, but I think for now.

[00:42:17] While we're figuring out what the hell is going on here and what the new rules are, and what the new handoff points are and what you're supposed to do. And so like it will always favor people who are willing to be, be more generalists. You know,


## [00:42:29] How the product development process changes

[00:42:29] **Ridd:** all right. I have another kind of zoomed out hypothetical for you. maybe we could talk about a project lifecycle for a second, because. In a world where designers kind of take control of the front end, how do you think that changes the product development process and the way that we collaborate engineers?

[00:42:47] And I'm particularly interested even in the sequencing within that process.

[00:42:51] **Emmett:** The process looks different. Remember I was describing to train fin you go through this analyze, train, test, deploy kind of loop, right? And a few weeks ago [00:43:00] we launched the analyze part of that, the kind of final keystone in that, in that process. So this is kind of essentially reporting that helps you understand in an AI.

[00:43:10] enriched way. What are all your customers talking about? What are they struggling with and what are the big opportunities for you to go and train, fin and make it better? Right. Okay. So that, I'm just giving you the intro to like AI infused reporting. Think about it that way. Right. how do you approach a product like that?

[00:43:26] In the old days rid, we would've come up with some jobs to be done. You would've started to wire frames, you would've mocked things up, made sure, you know, yeah. And probably gotten to like almost a very appealing looking high fidelity stage. You might've done some like early user studies to validate those things, and then eventually you'll get to a, a pro stage in the design.

[00:43:46] Where you feel like you, you can start to build and it won't be a lost cause and so on. And there's like, you know, people talk about the double diamond and all sorts of processes, right? Leading up to this. For our, analyzed product, we took a very [00:44:00] different, uh, approach because it was an AI first product we couldn't have done.

[00:44:04] What I just described there, the kind of linear approach, because we didn't know what shape of data was actually gonna work. You know what I mean? We didn't know, across all of the different customers. let's say, so an an aspect of of analyze is topics. We automatically analyze what everything your customers are talking about.

[00:44:23] You break it down into topics and subtopics automatically, you get this amazing map of whatever all of your customers are contacting you about, never been possibly before. Super insightful and then useful to go and you, it is telling you what to go and train Finn on to make Finn better, right? couldn't have designed that upfront, so we had to, we had to like almost do the build upfront.

[00:44:44] Get to a point of confidence, I'll explain what that means, and then do a more detailed design phase. So our AI designers worked with our ML scientists and some customers that we partnered with and just got it basically working for them. And this was like a lot of massaging the [00:45:00] data. There's no user interface.

[00:45:01] There's like producing reports for them in spreadsheets maybe, and sharing with them and they're going, oh, that looks good, or it doesn't, or whatever. And understanding. What do we need to do in the backend with the model such that fin can produce for a wide range of different customers, a good kind of topic, subtopic breakdown.

[00:45:19] Then you're like, what does that look like? Do we have like tons of topics or just a few or whatever? And then you can go and start to design your ui. You show that to your customers. Uh, by the way, I'm like. Essentially very quickly. Code vibe, code your ui, you know, with engineers we did it. but it could be a throwaway prototype the way I was describing it as well.

[00:45:38] Anyway, here's the interesting thing. Once we pass a certain threshold of, we figured it out, this is the rough shape of the solution now, then we come and we start to do a lot of like high fidelity. Design work. Then we started to add a lot of like detailed UI styling. And I'm gonna be honest with you that it was kind of nerve inducing because we were a few, couple of weeks out from shipping and we [00:46:00] were still like working on the front end quite heavily.

[00:46:03] You know what I mean? At least from an aesthetic point of view. we actually even brought in your friend Fons man who worked

[00:46:09] **Ridd:** Oh, cool.

[00:46:10] **Emmett:** So Fons worked on this with us. It was a lot of fun. And so it just kind of suggests a different way of, of approaching the work where upfront you're doing a lot of what I would call like material exploration, figuring out the data, figuring out the shape of the data, and sometimes it's like, is it even possible?

[00:46:25] No, we can't come up with good suggestions for what you're supposed to do on that amount of data. Okay. We need a different, approach then, you know, and then you're figuring out roughly what the shape of the solution is in a very rough prototypes. Co-created with customers type way and then you're like productizing that.

[00:46:42] Now maybe that's not a million miles away from how a lot of companies do design, especially if you have great access to a small number of customers. That's the way a lot of small startups do design. but for bigger companies it's harder to do that, I think 'cause there's a predictability that gets yanked outta the whole process there.

[00:46:58] We didn't know what the product was [00:47:00] gonna look like. We knew how it was gonna work, and we actually had higher confidence that it was gonna work great, but lower confidence in like, what's it gonna look like? And so there's just a kind of a different mindset that you have to approach the whole project with, even as a stakeholder internally in the company, you know?


## [00:47:14] How the role of research evolves

[00:47:14] **Ridd:** I mean, it's not a million miles away, but it's still backward, you know, like it is flipped. It is fundamentally flipped. Which then makes me wonder, how does the role of research evolve as the product development process is, is kind of flipping.

[00:47:28] **Emmett:** there has been so much kind of going on at the high level strategy level that a lot of our research has been oriented towards foundational, you know, what's the state of the industry, what are our customers thinking? A lot of that foundational research work to just inform our strategy. So. We are not doing a huge amount of like, let's say user study research.

[00:47:51] And by the way, I think again, we're very early. Depends on where you are with your own product evolution, but like, we're not quite at the like. [00:48:00] Tighten the screws everywhere, optimize everything about fin, you know what I mean? Going in and like hyper optimize everything. I still think there's some fundamental, like, shit we've gotta figure out about how the product works and figure out what are the big things that we got mostly right, but not quite and, and iterate them.

[00:48:15] so I don't think we're really in the fine tuning stage yet. I do think user research is gonna be a really interesting thing to see. To what degree, you know, do interesting products or do reliable agent driven products come in to manage that. 'cause it's always been such a manual, labor aspect of the design process.

[00:48:34] it'll be interesting to see if like something good can happen there that makes that a lot simpler. I. Like automated testing engineers have this idea of lint testing, right? Where they have like a, is there any regression in like, the code changes I just made? And it'll warn you, it would be cool to have something like that automatically built into Figma or whatever tool it is that you're using, that is trained on the experience of hundreds of thousands of users, uh, on [00:49:00] the internet, and how they respond to common patterns and so on, and giving you some warnings about that.

[00:49:04] So that, that might be interesting too.


## [00:49:06] Why Emmett is looking for in design candidates

[00:49:06] **Ridd:** Okay. We've talked about a lot of different changes and a lot of different futures of varying degrees of certainty. But it's quite clear. A lot of things are changing. So how has all of this impacted what you are looking for when considering adding new people to the design team?

[00:49:24] **Emmett:** We have made the decision ourselves to decide to try and in invest in an AI centric future that we believe is coming. Might get the details wrong, but like broadly speaking, I think we'll be correct and so we'll be directionally moving fast in the right place. So, uh, you know, internally in the team today we're like, well, where is everyone?

[00:49:44] And trying to figure out how to get going and what internal supports are needed. But I think for anyone new joining the team, we would certainly want them to be. Philosophically aligned with that and, and ideally like, have some, a demonstration of some evidence that they're already doing that as well.

[00:49:59] There's a certain [00:50:00] amount of, as a, as a, let's say, design leader of facilitating and laying the path and greasing the wheels or whatever for people to go down a path that you want. But ultimately o only to the point where it becomes a. Self-fulfilling thing where people are like, oh, actually this is, I want to, I want to drive myself down this road now.

[00:50:17] You know? That is probably the primary thing, you know, the kind of healthy disregard for boundaries or roles or dogmatism or, or, or whatever would be a, another thing to carry through.

[00:50:27] and then I guess I could say characteristics. I don't know if you can turn these characteristics on or you're just born with them or you acquire them through experience or whatever, but like curiosity drive, A little bit of determination, a little bit of that thing of agency that we were talking about low fear index, I guess, you know, for like, what could possibly go wrong.

[00:50:49] I know people listen to these shows looking for the insider baseball thing.

[00:50:52] I think there's interesting opportunities in design systems right now. So, you know, design systems have had their role and have [00:51:00] been maybe fighting the good fight valiantly for a long time. I think design systems have a really, really big opportunity. To, emerge as an important part of the tool chain in this new world I'm talking about where your design system helps you very quickly build, you know, you're building in lovable or whatever it is with your native design system.


## [00:51:19] Why design systems designers become more important

[00:51:19] **Emmett:** And it's very, and it quickly actually, the design system becomes much more about enablement and building really quickly. I talked earlier about how we are moving to a centralized design team and that has, increase the importance of design ops for us with the centralized design team, there's just a lot more like trains to keep running.

[00:51:37] We've never had a design ops person 'cause how we've like to run the teams is a lot of responsibility at the individual level and team level and so on. But I think the changing shape of the team means you just need some other ways of running the team. our design managers are becoming much closer to the work now.

[00:51:55] and becoming involved in the work. When you have a centralized team and a lot of people in maybe disparate [00:52:00] tracks of work now, it becomes really important to have the people at the layer above them knowing what's going on with the Product and trying to like, tie it all together and trying to orchestrate it all together so it's not like.

[00:52:12] Disconnected, bunch of 12 different work streams doing their other thing, but actually the important things know about each other and they, they hook up and, and become something like simple and, and considered and so on.

[00:52:23] We've always had a principle around being simple by default and flexible under the hood. You know, how do Intercom is a super powerful and deep tool. How do you keep that like accessible to a broad population of users, but still have that. Um, power that's there if you need to access it. And our catchphrase of simple by default, accessible under the hood has been a very simple way of, of thinking.

[00:52:47] Oh, okay. So, you can kind of, uh, progressively disclose those things and make it accessible. I. Today, I, I've start, I found myself saying, age agentic by design crud under the hood, I think good [00:53:00] design principles and good approaches to design should be relatively evergreen. This isn't a fashion moment that we're, that we're following, so you have to figure out what are the good design fundamentals.


## [00:53:10] Agentic by design, CRUD under the hood

[00:53:10] **Emmett:** And how do you express those same design fundamentals in this new world? So age Agentic by Design Crud under the hood is a, is a cute little extension, Here's an observation I have about our own work. In the last two years working on fin, we built an AI agent fin, and you can talk to Finn and interact with Finn and it can, you know, solve all your customer service queries and so on.

[00:53:30] But if you're a business and you're setting up fin, you still have to log into Intercom and the backend of fin and train and test and deploy. And there's a bunch of SaaS screens to do that. Like crud, screens, create, read, update, delete, you know, web forms. It's the same web forms we've had for like 20 years.

[00:53:45] an interesting different approach we could have taken with, with that completely was to make the training of Finn Ag Agentic, right? Was to make it so that you chat to a teammate version of Finn and you get it to shadow your [00:54:00] calls, or you, you know, upload loads of stuff to it, or you chat to it extensively and it's more like your teammates and so on.

[00:54:05] And maybe that's the direction that. Uh, it will go like, just my observation there is we've built an AI agent, but the back end of it of the agent is not an agent. And maybe it shouldn't be, or maybe it will be. I genuinely don't know. I'm not making some prediction here. But what I am saying is more and more you can break that down at a feature level and you can kind of say, is there an agent way of doing this?

[00:54:27] Or is this better served with an old crud? Kind of, uh, and crud sounds like old fashioned and cruddy and bad and so on. And so I'm not trying to make crud seem bad. , But it might be the case that we're moving to towards the future where a lot of our UIs are age and you end up popping the hood and going down and going, okay, there's actually a bunch of like dials and knobs and sliders and stuff like that that I can tweak with, , if I want to get to it.

[00:54:53] **Ridd:** what you're talking about is literally, the thing that I'm going to end this recording and work on designing later today [00:55:00] is like, how much of a setup flow is crud with predictable UI versus. How much of it is like, well, well, what if you just started talking and had a back and forth?

[00:55:09] And then it automatically translate all of your preferences into these settings behind the scenes and you don't have any ui. And

[00:55:14] **Emmett:** Yeah.

[00:55:15] **Ridd:** that tension is definitely gonna be a theme of the next year or two.

[00:55:19] **Emmett:** and I see this with every AI product I'm using. You know, you start to use AI products and then you start to wonder about it. So the example that I actually just wrote about today, I wrote a blog post about it today, was, , I've been using cursor a lot to like, try and build pro actual proper applications, you know, There's lots of stuff that you learn to do, right? You create a markdown file that has like a to-do list for the things that you want it to do, and you're saying like, always go to the to-do list and update the markdown file to show you, and there's a PRD file and there's all this kind of stuff. So you set up your.

[00:55:50] coding workspace like that, and then there's a terminal and you're like, starting up servers and so on. And I'm like, man, a lot of this could be friendlier. Like there could be some buttons to kill and [00:56:00] start the servers and, you know, there could be friendlier things that would make this easier to work with.

[00:56:06] There could be an actual little checklist of, to, to-do in the sidebar of cursor and I could like see them getting checked off and so on. Now there's something I like about the whole like. Super flexibility of the, of the cursor experience. But like I was saying, you can kind earlier, like you can kind of do almost anything on your computer.

[00:56:25] With that, I've realized, and it's often better to wrap these, Multipurpose, deep, low affordance UIs in something more accessible and more easy. And it's not just so that you don't have to type MPM server start every time, or that that's too geeky and you can't handle it sometimes, even if you know how to do it, it's easy.

[00:56:45] It's easier to click the green traffic light button or something like that, you know what I mean? To start your server. So for all of these things, I think we're gonna figure out like how, you know, how much of that should be agentic versus how much of it should be like more traditional. UI and there are still things, [00:57:00] even with the hard, most hardcore AI tools that I'm using that I'm like, I want a little bit more like traditional UI to come out here and like, you know, I wouldn't mind some, some different ways to do this apart from a single text input, like almost a command line interface, you know.

[00:57:16] **Ridd:** I think it makes me appreciate a lot of the things that you are implementing at Intercom because it's not just coming from this economic place or even solely a pressure to adapt or die, but it's also like you as the longtime VP are getting into the weeds of cursor and exploring and tinkering, and I think it says a lot about who you are as a leader.

[00:57:38] So I, I really appreciate. That mentality and also you coming on and just giving the full behind the scenes of all the different things that you are wrestling with and thinking through and the changes that you're putting in place.

[00:57:50] **Emmett:** Yeah, I mean the last thing I'll say is I'm having a lot of fun with the tech at the moment. I think that if everyone managed to tap into that, uh, I think [00:58:00] design would, um, have a real golden age potentially. 'cause I do think we're on the cusp of an awesome new period for the design industry, but it'll require a bunch of change management and stuff like that.

[00:58:11] And yeah, as I said, I appreciate you and what you're doing here as well. Giving a platform to folks like me to talk about it. 'cause uh, might be a bit intimidating, I get it, but like, we'll definitely get there together. And, things staying as they were, was not, was not gonna be a great long term situation for designers.

[00:58:28] Anyway. There's so many things. You gotta look at our industry or our discipline as a designer as well. There are so many things about how we've been working that could be better, that are only the way they've been. 'cause that's the way they've always been or whatever. So, yeah, I'm, I'm, uh, excited to. Fix a bunch of that stuff and, uh, onwards.

[00:58:46] **Ridd:** Amazing. Well, I appreciate you coming on today, Amit.

[00:58:49] **Emmett:** Thanks Ray.
