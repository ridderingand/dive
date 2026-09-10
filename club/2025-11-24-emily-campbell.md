---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: PEDzBT-jNmI
slug: 2025-11-24-emily-campbell
source_type: descript
source: descript://Emily Campbell
guest: Emily Campbell
host: Ridd
title: "AI UX Deep Dive"
published: 2025-11-24
duration_min: 43
generated: 2026-09-10
generator: dive-club-ideas
---

## [00:00:00] Emily's model for designing AI products

[00:00:00] 

In one of the most popular episodes yet, Vitali Friedman talked about what's next for AI design patterns, and in that episode, he frequently referenced Shape of ai, which is an incredible database of AI design patterns. So I wanted to get straight to the source and go deep with the creator.

Emily Campbell, who's the VP of Design at Hacker Rink, and she's gonna teach us in this episode how to design great AI experiences because she studied these products more than just about anyone that I've ever seen.

[00:00:31] **Speaker 5:** you know, if we think about our traditional, like software interaction patterns, historically it's been us as designers or product people making a guess about what somebody needs to do and then putting that out there as some. Piece of software, some service that they use. And then, you know, 99% of the time we're at least a little bit wrong.

[00:00:52] **Speaker 5:** And so we wanna learn faster. And so the whole iteration loop of creativity has been around us trying to represent what somebody else is trying to [00:01:00] do, render that intent, figure out how wrong we are, learn, and then improve it. And there's always a lag. And what's happened now with AI entering our world is the people using our products actually get to interact with the the system itself.

[00:01:16] **Speaker 5:** With the system itself. And so the way that we think about what then does our software need to do? What do our interfaces and our interactions need to enable? It's how do we help them communicate their intent to the model, figure out if the model understood their intent effectively, and then adapt to their needs.

[00:01:35] **Speaker 5:** And so the designers really now guiding that relationship, that experience, helping the user. Get the right context, the right input to the model, and then guard the model, , to meet the user's needs and constraints and so on. And so it's like we've almost shifted from designers in the loop to now this like human in the loop model.

[00:01:55] **Speaker 5:** And so this is what I've been using to define and start to pocket [00:02:00] the patterns that I'm seeing emerge into categories that help me then translate that to like the user experience. So, um, you know, first we've got what I've been calling Wayfinders and these are the things that help me understand how to get started.

[00:02:14] **Speaker 5:** So these are really important during onboarding, but we also know that there's a continuous onboarding inherent in these experiences. As AI is getting to know you, it opens up new ways to interact with it that maybe wouldn't have been there or wouldn't have made sense. To introduce early on. And so like for example, if I pop over into this shape of ai, which is where I've been cataloging all of the patterns that I'm seeing, some of the examples of wayfinders are like being able to see a sample gallery.

[00:02:43] **Speaker 5:** Like, how are other people using this ai? What prompts are they using? Can I actually go in and see how they got to this result so that I can then try and get to this result and then have a starting place where I can move forward? And then once I've got that, [00:03:00] we need to help you build a prompt. Prompt building is really hard.

[00:03:03] **Speaker 5:** It's actually one of the most limiting aspects to interacting with ai because how much do you say? Are you saying enough? And there are things that are happening now that are like, maybe you've seen the pattern where AI can actually improve your prompt for

[00:03:18] **Speaker:** Yeah,

[00:03:19] **Speaker 5:** right. So I've been calling these tuners, . These include things like having preset styles. Yeah. Being able to say like, here's a prompt that I, here's kind of what I'm thinking that I wanna do. And then having AI say back to you, okay, this is what I actually understand this action to be. Is this right?

[00:03:37] **Speaker 5:** Should I take this? Or do you wanna modify it before you move forward? The user is now working with the model to make sure the model understands their intent before they even submit their initial prompt. , And there's all sorts of reasons for that we can get into.

[00:03:51] **Speaker 5:** Um, but you know, this is what, this is why this, this flow has been so fascinating to me because it helps us understand that what we're doing is not just building software [00:04:00] for humans. We're actually building a meeting place between a human and something synthetic, something else, and then helping to guide that experience to be.

[00:04:12] **Speaker 5:** Positive to be efficient, to have low friction and low cost on both sides.

[00:04:17] **Speaker 5:** What I'm providing is a framework that I use to interpret what I'm seeing, to try and work backwards, develop the language that I can use, my team can use so that we're all kind of starting with a common, common language, a common understanding, knowing it's going to evolve.

[00:04:32] **Speaker 5:** So this model of like, I come in, I've got some intent, I submit it, I figure out how close I got to it. I continue to see it work through a workflow or iterate through multiple versions of something, and I just spend a lot of time iterating over time. What's happening is that's building my trust, that the AI understands my intent, that I'm building an understanding of its capabilities and its, , functionality.

[00:04:56] **Speaker 5:** And so I can go deeper and that's where moving right in [00:05:00] my flowchart head, the actual interactivity with AI goes so much deeper than the surface and all of our conversations about like, you know, Hey, are we overusing the chat bot? Or, you know, what are the other services that we should be thinking about?

[00:05:13] **Speaker 5:** , If we abstract away from software for a moment and we think about like, what if I wasn't hiring AI to do something, what if I was hiring a person to, you know, generate, , a draft of all of this user research that I just dropped into its window? Well, I don't necessarily expect my to just give this to a human I've never worked with and then have them come back and give me a good result.

[00:05:36] **Speaker 5:** If I'm getting to know somebody, my first step is, Hey, why don't you take a few of these and come back and show me what you've done and then we'll go a little bit deeper. Let me verify , your work upfront. And so, you know, when we're first getting started with some AI product, we're using the interface a lot.

[00:05:51] **Speaker 5:** We're directly saying, Hey, this is what I want you to do. And then we're verifying that it actually understood it. And so we spend a lot of time here and the chat [00:06:00] interface is a very useful way of doing that because conversation carries a lot of data. Like you and I, we don't know each other that well, but we could get to know each other really efficiently by just talking and, um, having you tell me about your history and you know, me sharing my screen and all these crazy flowcharts I keep in my head. It's a very efficient way of building and understanding, building a shared context, a shared language that you can branch off of. But as we start to get to know each other, we start to communicate in more nuanced ways. We start to communicate through context. So, you know, you might, make a face as I'm presenting something and that tells me that, oh, okay, what I'm saying is really boring or really interesting, or it.

[00:06:41] **Speaker 5:** we're starting to pick up on inferred cues of interactivity that we might even be unconscious of. Our user interface kind of goes away. And so there's this skew morphic aspect to AI interaction and that even just at like these surface levels, as we're thinking about the design, we shouldn't just be thinking about [00:07:00] what is the right set of buttons or fields or forms or whatever.

[00:07:04] **Speaker 5:** We're also thinking about, hey, how quickly can we get to a place where the AI is actually able to get to that deeper contextual understanding of the human and then start to show its understanding and let the human say, no, actually it's this. Okay, cool. And then eventually I can kind of get outta the way and let the AI go and do its thing.

[00:07:25] **Speaker 5:** And that's what we see here, is that these become really important upfront. I'm gonna tune, I'm gonna prompt, I'm gonna give some input, but over time the AI starts to pick up on my logic and my job actually becomes more like. Observing, collaborating, overseeing, verifying, and maybe at some point even completely stepping away and letting AI run autonomously.

[00:07:50] **Speaker 5:** The very notion of an individual user's ability to tell some model, no, you don't understand what I'm trying to get at, actually do this instead. I [00:08:00] don't need to wait for a design team to gimme a call and do great discovery and go and ship it through the agile process and then release it and invite me to their webinar.

[00:08:08] **Speaker 5:** I can just do it. And so as we talk about like all this stuff with generative UI and, and all the amazing ideas that that brings about, we're kind of already there in a subtle way. People can directly interact with the program that they're using. And that to me, like alone. Is revolutionary.

[00:08:25] **Speaker:** Where that leads me then is I naturally start thinking about, okay, well then how do the deliverables that we even associate with the professional role of UX designer change? You know, it's, there's a tangibility to that user interface level that almost provides a level of comfort.

[00:08:41] **Speaker:** 'cause it's like, yeah, I know what I bring to the table. There's these boxes and annotations and flow charts. And by exposing more of the system and letting users interact with the system and mold and shape it, it gets a little bit more hazy in my mind of like, what did designers even own? How far do we go into that [00:09:00] system?

[00:09:00] **Speaker:** If we have ideas for how to improve the system and how users interact at that level, what does that deliverable even look like? What are we creating? And I don't know, I have more questions than answers still at that level.


## [00:09:14] Emily's catalogue of AI patterns

[00:09:14] **Speaker 5:** So I started documenting these patterns in the fall of 2023. And what I was already noticing is that there were some places where things were starting to converge, , but there were more places where things were divergent, and that's kind of still the case.

[00:09:32] **Speaker 5:** , when we think about things like taste, like how do you, we, we keep talking about designers need to have their own taste. You develop taste, not just by having a sense of your own aesthetic and your own conviction and opinion, but also by sampling. As much as you can to understand what works and what doesn't and why, because some things work in some cases and some work in others and they aren't inter always interchangeable.

[00:09:56] **Speaker 5:** And so like one of the framings that I've used [00:10:00] recently is like, , having great taste isn't just knowing that food is good. It's knowing whether or not it needs a little more salt. And the only way you can know that is if you've sampled it in all of its different variations over salted, under salted with this side dish with this wine.

[00:10:14] **Speaker 5:** And only then do you actually have the true taste of saying, Hmm, it just needs a little bit more of something and I know what that something is. And so I started to just catalog everything I was seeing for myself. So I had started, so this is this table inside of my notion, and I've got a whole bunch of these that are just a mess of stuff. Anytime I see some new product pop up. Um, if it looks interesting, if it looks like, oh, there's, there's something to this that I, I haven't seen, I just throw it here and then every week I go through 20 or so of these, and I start to catalog everything I'm seeing. This is currently my desktop. These are all clips that I've been capturing, [00:11:00] so here's an example of a product I recently went through. Have you heard of this? Co-founder, co-founder dot co. I think

[00:11:06] **Speaker 4:** No, no.


## [00:11:08] Walking through AI pattern inspirations

[00:11:08] **Speaker 5:** so, their whole thing is they create workflows. They genive. Styled workflows through plain language instead of building them out like you would with like the N eight N product or Zapier and so on.

[00:11:25] **Speaker 5:** So you come in and you add your Gmail and it immediately starts to give you context about you. I thought this was fascinating. Like this was

[00:11:36] **Speaker:** Oh, this is

[00:11:37] **Speaker 5:** never cool. Isn't this cool? I've never seen another product go about it this way. A lot of times when companies are onboarding you in, they get your information and then they just start asking you questions 'cause they're trying to build context about you.

[00:11:49] **Speaker 5:** But what they've done is they've inverted that and said, this is what I think I know about you. Let me just prove to you that I'm good at what I'm doing at step one of onboarding.

[00:11:59] **Speaker 5:** And [00:12:00] so I put in my URL and it just immediately starts to spit stuff back. Then it connects to Gmail. Okay, cool. I do that with Notion. I've done that with chat GBT. I'm thinking this is gonna allow me to like pull up a doc from my notion and then connected to a workflow. No man, it immediately told me how I email so it took information from my actual inbox and then just created a sample email in my voice, and then I can edit this. So right off the bat, it's going through that iterative loop where it's saying, based off the content and context you've provided, this is how I can serve your needs. Is this accurate?

[00:12:42] **Speaker 5:** And if not, let's figure that out as soon as possible before we go any deeper into this relationship. Like I am hooked. I'm already hooked in this onboarding process because now. I wanna know what's behind this. I wanna know how you can , keep up this context layer and then, um, it, it does [00:13:00] this through the calendar.

[00:13:01] **Speaker 5:** It explains its memory and then it puts you out into the actual workflow builder and you describe what you wanna do in plain language. And again, going back to this idea of like there's a dysmorphic aspect to this new interactive language, this is how I would interact with somebody that I was interviewing to be a personal assistant, right?

[00:13:22] **Speaker 5:** I wouldn't expect them to go out and email my accountant or my best friend in my voice before I had a chance to see their work. You know, Hey, how do you interpret this? Um, by the way, I don't sign off that way. I actually prefer to sign off this way, but this AI is already doing it. And so it's emulating that human experience of show me your work.

[00:13:42] **Speaker 5:** Let me build trust and then I'm gonna give you more things to do and then I'm gonna give you more context and more data. And that allows me to. Essentially like grow with the AI's context of me, like grow in that, that depth of interaction as opposed to it taking [00:14:00] all of this time to get set up and then hitting me up with a, Hey, go and fill out five forms about your personal tone of voice.

[00:14:06] **Speaker 5:** No, man. Go to my email. My email contains my tone of voice. , 

[00:14:09] **Speaker:** It's such a simple mental model, but hearing you kind of create this mental picture of, as a designer, you are creating a meeting space facilitating this interaction between the user and then it's kind of weird to say, but like a real person, like an assistant, and what would you do?

[00:14:24] **Speaker:** How would you facilitate that interaction? There's all clarity about that, that I, I really appreciate actually.

[00:14:30] **Speaker 5:** it's also important for us to think through this because it helps us understand the risk associated with it as well.

[00:14:35] **Speaker 5:** , I have a 10-year-old son who had downloaded this app that I thought was about K-pop demon hunters. And the next thing you know, he's running into my room. Crying because the main person in K-pop demon hunters was trying to date him. And it was just this wake up moment for me that the incentive model of these products is to get data about you and to build a [00:15:00] relationship of trust so that it can go deeper and deeper into your ecosystem and into your world. Now, in a business context, that's really great. Oh my gosh, I suddenly have this personal assistant that totally understands how I schedule my meetings and I don't need to go and tell it.

[00:15:15] **Speaker 5:** It just knows that's a, a remarkable step forward. But when you translate that onto a consumer use case, when you translate that into a situation where somebody who's looking for a little bit of warmth or a little bit of information, , starts to find this model that really gets them. You can end up in some really dark places too.

[00:15:36] **Speaker 5:** And so, coming back to this mental model here, what happens at the interface and the context that we shared affects things we can't see. And then even further, it's like what happens when these agents start interacting with each other within their own content and their own context and their own languages, which is actually happening now in research labs, synthetic stuff, interacting with synthetic stuff. How do we design for that?

[00:15:58] **Speaker 5:** So [00:16:00] you said earlier we have more questions than answers. Like I think we have to because we are at the very early phases of a. Massive transformation and how we share this digital world, which is our world essentially really isn't a digital physical barrier anymore. How do we share that with synthetic stuff,

[00:16:20] **Speaker:** well, I kind of wanna just tap into your perspective as somebody who, gosh, I mean, you're putting a lot of effort into keeping up to date with everything that's happening and studying these patterns and what's working and what's not working and some of the trends and how we're evolving the way we think about interface design with all of these crazy capabilities that we're so wrapping our head around.

[00:16:42] **Speaker:** What are some of the things that you find interesting or some of the more sophisticated patterns where you're like, oh, you know, like , that's something worth double clicking on or leaning further into.

[00:16:54] **Speaker:** And if it looks like us just doing a bunch of screen sharing and popping through examples, I think that would be [00:17:00] amazing.


## [00:17:00] AI pattern deep dive

[00:17:00] **Speaker 5:** Anything that gives humans control.

[00:17:03] **Speaker 5:** And particularly gives humans control who aren't super technical. That's the most interesting thing to me right now because that affects, first of all, just how do you help non-technical people from getting completely subsumed. And actually it's not even just non-tech. Like how do you help people not get subsumed by these models?

[00:17:24] **Speaker 5:** And then how do you help them feel like they're the ones always in charge? So in this like tuner category, um, a couple that stand out. So I mentioned the prompt enhancer, removing the sense that I always need to have the answers when I'm starting to interact with ai. I can come in and I can say, Hey, what do you wanna create? And I can just give a really high level overview and then if I hit enhanced prompt, it actually writes essentially a PRD for me. So Repla and Bolt and Cursor and like their planning mode, um, they are all starting to emulate this idea that you don't need to necessarily be the product manager [00:18:00] for ai.

[00:18:00] **Speaker 5:** Your job is to just say, this is what I'm looking for. But AI's gonna say, Hey. Let me just show you what I'm going to do before we go any further. Number one, so you don't waste your time and tokens on something that's actually not what you're looking for, but also, hey, if you wanna modify this or if you wanna do this again, it gives that agency over to that person who's like, okay, I actually know what a good prompt looks like.

[00:18:24] **Speaker 5:** Now I don't need to go and follow some influencer on LinkedIn and buy their, you know, prompt workbook. I can literally just go to this course, I can just go to the model. , We're seeing this with like, this is Flora Fauna ai and they built this really early on into their, , their nodes and it's, it's brilliant because again, when I'm in this creative mode.

[00:18:45] **Speaker 5:** The idea that I would leave this creative mode that I'm in to go into some analytical go and like construct the perfect prompt. It doesn't make sense. Instead, meet me where I'm at. That's the, that's the human experience part of this. Just kind of give me enough for me to [00:19:00] run with it and then we can keep iterating and move it to where you wanna go.

[00:19:03] **Speaker 5:** So that's one that's really, really interesting to me. Um, these parameters, I don't know if you've seen these start to pop up. , This idea that I can like adjust the temperature on something is really fascinating to me. So like, if I am in 11 Labs, for example, I can describe some sound and then I can actually say, I want my prompt to highly influence the outcome.

[00:19:25] **Speaker 5:** Or I want you to just kind of use this as a general nudge, and then I want you to run with it and go and create something out of it. Um, midjourney was one of the first products too. To start to introduce these in the interface. So I can say, Hey, I want this to have a lot of variety or a little bit of variety, a lot of the mid journey stylization or my personal stylization, or keep it , pretty low key. So these are all examples of parameter selectors that I've been collecting over the whatever year and a half or so that I've [00:20:00] had this folder. And you'll notice some of these are like, they're not literal temperature sliders. They'll just give you these defaults. , But others are like, , this one's really interesting.

[00:20:10] **Speaker 5:** So this one's Airtable. So if I'm having AI like generate, um, some prompt that's gonna roll through my table, then I wanna, I wanna generate the prompt and then it's gonna auto fill it down the table. I can go beyond just saying, here's what I want you to go and do. I can actually say, Hey, I want you to have some variability in this.

[00:20:32] **Speaker 5:** So, for example, if you're developing a product and, , I don't know, maybe it's like an internal tool or maybe you're creating personas out of user data, like that's a use case I'm really fascinated by is how do you convert analytical data and translate it into something that I can interact with? Like what is the specter of this person, the digital twin of some data footprint that exists in my analytics somewhere?

[00:20:54] **Speaker 5:** Well, I might want to have this be, you know, pretty varied. Like I want different [00:21:00] personalities. I want the, I want it to be true to the data, but then in terms of coloring in the rest of the box, like please create a really colorful set. Or maybe I really just want you to stay true to the data and not try and give me other variability.

[00:21:12] **Speaker 5:** , I can start to control that inside of the interface. And so it basically takes this idea like in, again, instead of having to write the perfect prompt up front, I can convey just enough intent and then have AI tell me, okay, this is what I think you're saying. I can communicate kind of directionally where I wanna go, and then I can give it some guidance 

[00:21:31] **Speaker:** the rep lid example is so interesting to me because I think a lot of the times I'm looking at sliders and I'm trying to figure out what the differences are between the options, but I haven't seen it presented like this where you have almost like the feature list, where it's really clear what is changing from each option.

[00:21:47] **Speaker 5:** Yes. Anything that can give that kind of context Here, I'll give you one more example. Just being able to select a model. So there was this whole bruhaha when chat GBT five dropped, and instead of being able to [00:22:00] select from the broad assortment of models, they introduced an automatic model router, which has now taken on.

[00:22:06] **Speaker 5:** Um, it's, it's still gonna find it in a lot of these products.

[00:22:09] **Speaker 2:** Mm-hmm.

[00:22:10] **Speaker 5:** How do I know what model to choose? Like if I am working with, um. Some, maybe I'm working with text, maybe I'm working with images. Like Crea does a really good job with this of just telling you. Hey, use this model if you're looking for human accuracy and photography, but if you are producing, , more like generative artwork, that's a little more analog, maybe use this other model.

[00:22:35] **Speaker 5:** So that's really interesting to me too, is just how do we help people see the stuff that they just, just don't know because they're not reading all of the eval reports coming out of these labs, you know?


## [00:22:45] Baking trust into an AI UX

[00:22:45] **Speaker:** One of the topics that I was hoping to get your take on is just the category of trust and transparency as we're working on more agentic systems even, and I'm curious if there are certain patterns [00:23:00] or trends that you are seeing

[00:23:01] **Speaker 5:** AI can only serve my needs if it has access to my content. I'm only gonna give it access to my content and my context and who I am and who I know and how I interact with them if I trust it.

[00:23:11] **Speaker 5:** It's almost like the new usability becomes how quickly can you build trust in a, um, legible way so the user knows, okay, something's happening that I can understand. And so this is like my high level. We wanna be able to show that the AI can meet the user's needs. The user gives us data. So like really solid onboarding.

[00:23:33] **Speaker 5:** You get a little bit of data immediately that context is derived by the ai and it's able to return something a little more personal or a little adaptable to them. The better this adaptive experience is, the more they trust it. And so it's a combination of like how the model performs, but also it's wrapper, the experience and the the interface and so on.

[00:23:52] **Speaker 5:** So some of the patterns that stand out to me, this is this category of governors, which is where you see a lot of trust. And then I've also got these literally [00:24:00] trust builders. Um, so I'll just talk about a couple of these that I'm seeing. Um, we've all become pretty accustomed to this idea of seeing stream of thought, extreme of thought consciousness.

[00:24:12] **Speaker 5:** This is, this is the number one thing, um, that I'm paying attention to right now because it's changing really fast and it's changing subtly. For example, when I, when you used to use chat GBT, like it would just say something like, Hey, I'm thinking I'm, I'm searching and now I'm thinking, and now I'm searching for something else.

[00:24:32] **Speaker 5:** And then, um, the same week that GPT dropped, that, uh, OpenAI dropped Atlas, they moved all of this logic into an inline place inside of the actual interface.

[00:24:43] **Speaker 5:** So it's actually not just saying, Hey, this is what I'm doing, but it is telling you upfront , in actual like words, this is what I'm doing, this is where I'm looking, this is what I'm learning. Again, if we abstract it to that Scrum Morphic lens, , like if I hired an intern, you. Before [00:25:00] I trust that intern, I wanna see it.

[00:25:02] **Speaker 5:** I wanna see their work. So I'm gonna meet with them daily. Hey, show me what you were working on. Show your work. Okay, interesting. I see that you did this. Listen, let me talk to you a little bit about, you know, border radii or something. I'm gonna teach you something, then go back out, come back to me, show me that you learned it.

[00:25:18] **Speaker 5:** But after I've seen that a few times, I'm gonna start stepping away. So when you think about like these adjunctive browsers, like chat, BT Atlas, before I start get to a point that I'm gonna just let AI run wild inside of my life, I need to make sure that it's doing something legible. That it's doing something good.

[00:25:35] **Speaker 5:** And so being able to actually show the work upfront, , becomes really important. The idea of planning mode is another one of those. And again, it's not just trust because of the logical side. So, , rept does, I think the best job out of any of the generators at this particular. Pattern. If you tell it what you wanna build before it ever builds something, it'll give you the option of, [00:26:00] okay, I can go and create like a really rough prototype or review my plan and I'm gonna go build the actual thing.

[00:26:06] **Speaker 5:** So it's telling you it's logic. It's saying, Hey, this is my plan of action, like this is, this is how I'm gonna go build this thing. , But it also says like, do you wanna just kind of see where I'm going before I go and spend all these tokens creating this thing? And so you are constantly in the director's chair, you have the ability to go, oh, wait a minute.

[00:26:26] **Speaker 5:** I don't actually want you to do this, or I wanna revise the way you're thinking about this before you actually go in and build out, you know, whatever, this, this web app or this changes to my application, or whatever are. That's how we trust people. And so we should think about that in terms of these, these interactions too. Um, but then there's also, there's other layers of trust because there's the, like, I trust you to go do something on my behalf.


## [00:26:48] Ethical questions with designing for AI

[00:26:48] **Speaker 5:** But this is back to that whole, like we're not just talking about humans designing for humans anymore. We're now designing for a world where humans are interacting with non-humans, [00:27:00] the synthetic stuff. So, uh, patterns like consent. How do you know that something is using your data to potentially build a contextual understanding of you if you are not the person who is directing that thing, and the way we've been approaching it, honestly is pretty bad. Like very few companies do this well, especially these, um, these audio recorders and transcribers, a few of them, like fireflies, sends an email ahead of time with an opt out form.

[00:27:32] **Speaker 5:** A lot of these are, are consent at the moment, so they'll just say like, Hey. We're using this, just so you know, I guess you can choose not to join this interview if you don't wanna be recorded, but that's not really consent. That's, you

[00:27:46] **Speaker:** No, and they just offload it to the user too. Like I basically at this point just assume that every meeting that I'm in is being recorded with granola, which is crazy, right? Like that happens so quickly.

[00:27:57] **Speaker 5:** And then you think about with wearables, , [00:28:00] the limitless pendant originally had this incredible feature where it would only record once it actually heard consent from another person in the conversation. Even if they didn't know you were, you had this pendant and they've removed this by default, it's still available as an option, but they've removed it by default, which I think is, is telling anyway.

[00:28:19] **Speaker 5:** So like there's the, there's the privacy concerns that have always existed, but now that we have this additional thing where we have these models that are constantly collecting data, mapping it to other information about people, if somebody's wearing meta glasses, they know me because I've had photos on Facebook since they launched in 2006.

[00:28:39] **Speaker 5:** And if you come up to me at a party and you have glasses on and you're talking to me, and that data is going back into their models, information about me, where I am, who I'm talking to, what I'm wearing, what I'm drinking, you name it, is feeding back into their models and most likely entering their graph that it can be used to send me advertisements that I never consented to and had no idea was even [00:29:00] like in the ether.

[00:29:01] **Speaker 5:** , And not trying to get like dark, but this is where this like, it's such an incredibly powerful and high agency experience that does all these amazing things, and it's also so dark and bad and scary, and it just points to the importance of us as designers. Just to kind of put a bow on it, like knowing what's below the surface, knowing that when we're designing these great experiences that help the person who bought the AI product go and do something, the data being collected has other impacts that may affect people well outside of that initial experience, but ultimately we are responsible for.


## [00:29:36] Designing for AI at HackerRank

[00:29:36] **Speaker:** I think I want to take this opportunity to zoom all the way out then, because given everything we're talking about and how quickly the world is changing and the stakes attached to the modern practice of design even, how is this shaping the way that you show up as a design leader and the way that you even think about managing and leading and investing into an [00:30:00] org?

[00:30:00] **Speaker 5:** I work at Hacker Inc. And so we help, um, people find jobs. And so you come into our, our platform and you demonstrate your skills and there's a lot of concern about people coming in and cheating, you know, or doing things intentionally or not, that could be seen as, influencing the results in an inferior way.

[00:30:18] **Speaker 5:** And so we were building this AI copilot that essentially could be your personal proctor, like there just to say, Hey, just so you know, like when you switch tabs looking for syntax, it's actually gonna be registered, , in this negative way. And so you might not wanna do it. And the way that we approach this problem was by first saying.

[00:30:38] **Speaker 5:** What does a great experience look like with a real proctor?

[00:30:40] **Speaker 5:** What does it look like when I get started? What do I wanna hear? What am I afraid of? If they say something, how could I misinterpret it? What happens if they need to intervene? What types of questions might I ask? Would they be able to answer that question? And so we actually created a service map of what an amazing human-centered experience could look like.

[00:30:58] **Speaker 5:** And then we said, [00:31:00] how do we translate this into software? And so it creates this new framing where we've been building software as a service, and now it's almost like, well design the service first. Then say, how do we translate this to software? So that's one thing that we've been doing is we've just been abstracting a lot.

[00:31:16] **Speaker 5:** And that's, you know, back into this dysmorphic element. , so going through that and actually thinking about the service first and then. Saying, okay, what is the software layer? What is the AI layer? What context do we already have? How can we collect it in the most seamless way? , That's something that we're, we're doing a lot of.


## [00:31:32] Importance of getting into code more quickly

[00:31:32] **Speaker 5:** Another thing is realizing that, the design of that experience is not limited to the interface. The way that the prompt, the actual prompt of the software itself is configured or some feature is going to dramatically change that user experience. Understanding how different types of, or different lengths of context or things shared at certain times affects how the model responds to you and how easily it can adapt to you and give you the right [00:32:00] options.

[00:32:00] **Speaker 5:** You know, that all affects the user experience. So, , we've been trying to get designs into code as fast as possible, not just because of this whole, like, should designers code thing, , but actually more because the model itself is now part of the experience. It's actually a party to the experience. And so we need to understand not just how does the user intersect with this thing we're creating, but how does this third party affect their experience and how do we design for them, or at least design for the user's ability to direct it more effectively.

[00:32:30] **Speaker:** I want to double click on the piece where you talked about how you're trying to get into code a little bit more quickly, because that's a theme that I've been hearing, but I'd like to understand how that is changing the design process and how the way that designers in your org even collaborate with different stakeholders.

[00:32:47] **Speaker:** What are some of the deltas that exist given that change?

[00:32:50] **Speaker 6:** There's a little bit of 

[00:32:51] **Speaker 5:** past is prologue because I don't know that we're that far off from where we were 15 years ago when we didn't have all these incredible prototyping tools. [00:33:00] And so like designers often had to get to a good enough version of something in H-M-L-C-S-S and JavaScript like designers over a certain age can all tell you I have rudimentary C-S-S-H-D-M-L and JavaScript because it was the most effective way for me to communicate my intent upfront.

[00:33:16] **Speaker 5:** And so now we're seeing that be abstracted into these prototyping tools it's imperfect, like, I'm just gonna go ahead and say it. Every single team is operating differently. We have different levels of conviction and understanding.

[00:33:27] **Speaker 5:** And so it's, it really does look different from team to team, but on the teams where we have either a lot more of green space to play with, like, so AI is a little bit more native to the experience or where, um, we have a lot more conviction and understanding about the market and who we're, we're designing for.

[00:33:44] **Speaker 5:** Um, yeah, we're moving pretty quickly into at least some sort of living prototype. And so the tools we're using there we're, are more Figma make, um, lovable. Those are the two that most people are using. Um, and, and just because of the convenience [00:34:00] factor. I was talking to a designer on my team this morning who's working on, um, something for our, our like, uh, AI data product.

[00:34:08] **Speaker 5:** And he got to a point where he was like, it's just so much easier for me to push this into Figma make and then show the engineer, Hey, this is kind of how I'm thinking about this interaction than trying to prototype it. Nobody thinks that that's gonna be the final version. Like we're not even gonna bother going into dev mode.

[00:34:23] **Speaker 5:** But it does create the ability to just convey what you have in your head a lot faster. And so, um, that's where those tools are fitting in, in terms of like actually working within the code base. We're just starting to tiptoe into that. And, and a lot of the reason is that if you're not set up, um, to do that from scratch, individual teams, individual front end, you know, design engineers or front end engineers, working closely with a designer can, can get pretty far.

[00:34:51] **Speaker 5:** Um, but because we work in like an enterprise context with really strict accessibility standards and so on, we wanna move forward together. And so right now we're doing a lot of the operational groundwork to [00:35:00] let us. Be able to move more of design into our actual development tools. So we have a goal of all designers being in cursor by the end of 2026.


## [00:35:07] How AI changes are impacting the way Emily thinks about hiring

[00:35:07] **Speaker:** Given all the uncertainty with workflows and tooling and how collaboration is changing, how does this shift, what you are prioritizing when you're thinking about the types of designers that you want to hire to like, you know, set off on this journey with.

[00:35:24] **Speaker 5:** that's a deep question because it really, again, it, it really depends because design is now important in a lot of different ways. I love it when people come to an interview and can tell me with their eyes lighting up, like, this is something I vibe coded, this is something I'm building.

[00:35:40] **Speaker 5:** The most important skill is curiosity right now. Uh, curiosity and then followed very quickly by, go get a attitude, you know? So I was curious about something and then I went and learned it and then I got stuck. Cool. I wanna have that conversation

[00:35:54] **Speaker 5:** but the fact that you have the self-direction to say, I am hungry to learn something [00:36:00] new and then I'm gonna go and try and figure it out. That's the most important skillset. So I tell like younger designers , just go build. Just go and find something and go and build it.

[00:36:09] **Speaker 5:** And it's okay if it doesn't really work. It's okay if you would never put your personal credentials inside of it because what you're doing is you're just showing how you can start to shape and mold this clay of this new thing and begin to develop your own understanding. So that's, that's a big part of it.

[00:36:24] **Speaker 5:** , We talk a lot about taste, but again, it comes down to not just having an opinion. So there's a lot of people with great aesthetics who really struggle to translate beyond that aesthetic or beyond the immediate problems that they've had to apply it to. And so. We are spiking on visual design. It's, , it's just a must have, like really strong portfolios.

[00:36:45] **Speaker 5:** There's no excuse not to do the basics. But then beyond that, I just want people who have started to develop their own language of what's working and what's not.

[00:36:54] **Speaker 5:** So someone who can say, Hey, I spent the last week just trying out all these different [00:37:00] products and I wanna tell you why this one worked better than that one. That's another signal that this person has really high agency and can start to see beyond their own lens or their own experience. So, and it gets back to that curiosity piece. , 


## [00:37:11] Why HackerRank is leaning into brand designers

[00:37:11] **Speaker 5:** We're definitely leaning into brand, but particularly brand designers who are thinking about a wider experience because brand doesn't stop at the website or at, you know, a really awesome header, you know, on some social media site. Brand translates into that trust layer. Like what is the personality of AI when you first meet it during onboarding?

[00:37:32] **Speaker 5:** That's brand. , The Poke app from Interaction, I started using that earlier in the summer and it changed my mind about how we think about chat-based interactions because it showed how the personality of a model can represent a company, a company's humor, a company's sense of the world. Like this is not some, some tool that's just trying to bury into my personal data.

[00:37:59] **Speaker 5:** Like [00:38:00] maybe it is, but it's fun and it's gonna try and understand me and like, I like to be around people like that. I like the kind of sardonic humor, so heck yes. I'll give you my money. Um, this was before everybody was getting it down to $1 a month, so I'm a little bummed about that. But like to me, brand designers who are thinking about every single touch point, who are thinking about,

[00:38:20] **Speaker 5:** using the product is part of a community. It's part of like being invited into this vibe club that yes, I do wanna give you my data, I do wanna give you my context because I trust you 'cause I wanna be part of this group that's brand. And so we need brand designers to be thinking beyond, just the canvas in front of them.

[00:38:36] **Speaker 5:** And I guess the last one I'd say is just, just people who are comfortable with ambiguity and are comfortable inviting others into ambiguity. But I feel like that's always been a necessary part of design. Like whenever I have stakeholders telling me this is what we should do, this is my opinion, my next step is great.

[00:38:54] **Speaker 5:** Let's go sketch it out. Let's go do eight ups. I'm gonna go spend 90 minutes with you and we are gonna [00:39:00] come up with as many different ideas for how to approach this as possible. So your voice is at the table. One, people realize pretty darn fast how hard it is to actually come up with viable concepts and play 'em through a journey.

[00:39:11] **Speaker 5:** And so it gives them a deep understanding of view and how you're working. But it also starts to create that shared language and that shared view of like, what are we actually trying to do? What is the actual end game here? It's not your opinion versus mine, it's who is this person we're serving and how can we best serve them?

[00:39:28] **Speaker 5:** And so designers who are comfortable of like inviting people into the mess and holding space for the mess and not drowning in it becomes just a, a superhero capability right now.

[00:39:36] **Speaker:** I love hearing you talk about curiosity because. It's so evident that you're putting it into practice too. You know, you have all of these folders and screenshots and as a design leader too, like, you know, you might be responsible for fewer pixels than a lot of the people who are making these interfaces.

[00:39:53] **Speaker:** And still to say, you know what? I'm gonna play with all of these and develop an opinion on them and even hone my taste. Not [00:40:00] at the interface level, but at the model level and how these more natural language interactions look and what they feel like. And so I've just really enjoyed hearing more about how you think and approach the practice of design and how it's all changing.

[00:40:15] **Speaker:** And just appreciate your perspective. So thank you so much for coming on and sharing it with us today, Emily.

[00:40:20] **Speaker 5:** Yeah. Yeah, no, this was really fun. It's fun to invite people into my own little mess, I guess. 

