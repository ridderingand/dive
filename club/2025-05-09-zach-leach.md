---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: UwkSAfcQje4
slug: 2025-05-09-zach-leach
source_type: descript
source: https://web.descript.com/c85170cc-1cae-411d-a2ea-453d5c733ba4/a32b4
guest: Zach Leach
host: Ridd
title: "Principles for designing a great AI product"
published: 2025-05-09
duration_min: 46
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] 


## [00:00:00] The Gamma origin story

[00:00:00] **Zach:** we worked at optimizing together for a long time. we were riding the Wave, man. We were like, this thing is, you know, a big company, you know, a lot, a lot of interest and the number one ab testing platform. And there was like probably three or 400 people at the time.

but there was sort of a core group, you know, in the product area who worked really, really well together. you know, so many cool things got made out of that, and so many cool moments to work together. it really was about the people when this whole thing started, right?

I mean, you gotta think about the context. Like Optimizely was, you know, this was like 2021 or 2020 or something. So it was like sort of Covid started happening and then. You know, there's a lot of uncertainty in the market and a lot of our customers optimize their kind, like, I don't know, you know, and then we started doing the remote thing and that was weird.

and really when it all kind of felt like, the, I say the catalyst really was like the sort of the acquisition. and it was, uh, you know, it was a bumpy landing, I think after that a little bit. you know, we're kind of like getting our footing again, trying to see what it's like working for, you know, you know, these [00:01:00] new owners and a lot of leadership changes and stuff.

And we started just thinking about next steps, I think. when the wind kind of falls outta your sails, you're sort of like, where do we, what, what do we do now? You know? So it was a little bit of a lull. And then you, the conversation started happening. And really for me it was, it was John and the potential of working with somebody like Jess and just, just, it's really came down to the people and, and we had nothing.

I mean, there's no, we had just an idea, you know, about just like how we could, help people share ideas, you know, and, and making this new medium. And then the funniest thing is that's totally not what we did at first, right? Because, because you think about it, like, everybody's remote and Zoom was like blowing up, right?

Everybody was doing like, there was like butter and like, um, I think it was called like Meet or something, meetup or Meet Town. There's all these like different toys and things that, you know, people were coming up with to, to get while everybody's remote to work together. so we came up with this idea of like this sharing ideas in kind of a shared meeting space almost.

We called it the lobby. It didn't really have a product name. There was no [00:02:00] product. But there was just a tremendous amount of prototyping this, this thing. And it still works, actually it's internally, we can still get to it. But, for six months we built this like video chat app. And it was, it was the weirdest time, and it had like sound effects. It was like a fart sound effect. I remember an investor was like, oh, I think something's wrong with the trumpet. 'cause he kept putting the farts out. It didn't sound like a trumpet. It was like, anyway, so through that we sort of, of evolved. We're like, okay, so we're gonna meet in these lobbies, right?

We're gonna have like an meeting, well, maybe we need an agenda and maybe the agenda is like an outline. So we built an outline, and then there was like this shared collaborative outline. And so everybody's in the lobby. You could see each other, you could see each other's cursors. And then you're all typing in this agenda.

And then you go one by one. And then we're like, well wait a second, maybe we're gonna share like a Google doc, we're gonna share a webpage. And it's part of the outline. And so you can start to see where we're like, maybe this is actually a presentation tool, right? So you've got different slides, which could be webpages or Google docs or whatever they are.

And then this [00:03:00] outline and then the shared meeting space. and eventually we totally dumped all the video stuff and we're like, let's just build this, this presentation tool. and at the time there was no, there's no AI or anything. And so we kind of set out to say, let's just come up with this new medium that is about, you write it like a doc and you present it like a deck.

So it just looks beautiful by default. You know, you type it out, just like a doc. And it's important to, to kind of understand like this medium because when AI happens, it actually makes a lot of sense because. imagine a doc and it's all, it's all linear, right? So we're building this, we're building this like, new medium it's gonna be the sort of a linear thing.

And then LLM started being a thing, right? And you're like, okay. And if, if you know how they work, they're sort of these, you know, prediction engines were what they were at the beginning. And so they're really good at like, sort of linearly predicting what's gonna come next. And so they work really well for our medium, it was this, this moment where we realized like what we had been building for like, I that 0.8 months, this dock that turns into [00:04:00] a deck actually just works really well for LLMs and you can just like, pipe it in and say, keep going, keep writing this slide deck basically.

it's like a node based kind of h tm, L based sort of format. it actually worked really well. Now, back then, of course, LMS were not as good as. As it were now. And, and there was a lot of trepidation, I think, about trusting it, about bias, about quality, about all sorts of stuff. and it was a big leap of faith, I think, to to say like, yeah, we're gonna let this thing, write a deck on behalf of customers and we're gonna prompt it and it's gonna, make good stuff.

[00:04:31] **Ridd:** I want to go into all of those challenges, but maybe first I want to double click on what it's like. Trying to design a new medium, you know, because I would imagine it's tricky where, you know, on one side you have this feature, rich Google Doc and everything that people expect out of a doc. And on the other side you have slides, which is, you know, pretty, cemented mental model for people where that is very much so the language of business.


## [00:04:55] What it's like designing a new medium

[00:04:55] **Ridd:** So how do you as a designer, figure out the right middle [00:05:00] ground and where to pull from familiarity versus where to create something new? What was that process like for you?

[00:05:05] **Zach:** Yeah. That, that middle ground is, is the trick, right? Because if you wanna say this thing does slides, it kind of needs to still feel like slides. But if you also want to say we're leaving slides behind and it's a new way to make slides and, and presentations, um, you know, you can't take too far.

I leap. Right? I think that we started maybe a little too unstructured, maybe a little too, a little too far from slides.

we have a few different features that are interesting and, and that feel very not like slides, like you can put, they're called nested cards. you know the document is made of cards and you can sort of put a card inside a card and for a slide tool you're like.

Why would I put a slide inside a slide, you know? as the product evolved and as we sort of found our way, we realized giving people little hooks and little anchors, little affordances to sort of still ground in familiarity, but also push a little bit on what the medium could be.

So a lot of it is just learning and, talking to people, and [00:06:00] giving people these little, these little ledges to kind of, hang onto something like export, you know, is like, sure, we could make a new medium and we could say like, this is the future, but we sort of still have to play nice with like the rest of the world, right?

you know, some, CEO e somewhere at maybe not a Super Tech forward company isn't gonna necessarily want to have a gamma link. They're gonna want. Like a PDF or whatever, right? It's kind of an older, older school kind of, kind of vibe, right? So we still have to operate in sort of reality, while still finding the right things to push on the sort of guiding light here was writing it like a doc, right? And being able to just have that familiarity of you're not dragging, an image in and resizing text boxes and making sure things fit right and flow right. you're just gonna type it out, right? And you're just gonna kind of say, you know, put a heading in pull, put bullets in and, build out stuff, you know, in a very sort of traditional way.

And then when you press the present button, it's gonna look like a great slide deck, right? you know, when you say like, there's a new medium for kind of sharing ideas, people make all sorts of interesting things, right?

it is sort of presentation focused, [00:07:00] but people make, you know, web pages, people make, all these sorts of different artifacts. people do note taking, people make, you know, leave-behinds for sales. Um, there's just so many different, little education has been a big thing too, like learning courses and stuff like that.

And so you get to see what people make and it's, it's super fun and interesting. And, so much of what we do at Gamma is, is listening to people, listening to customers and understanding their needs and, and, trying to, deliver kind of things that.

makes sense and work with a broader picture, but, but still can speak to kind of some familiarity. 

[00:07:31] **Ridd:** I feel like a lot of product teams right now are dealing with this kind of open-ended nature of their product. As soon as you incorporate ai, 'cause it can kind of do everything and you've have that element, but then you also have a product to begin with, that was very open-ended and so you're kind of operating at a whole different level in terms of just how wide the spectrum of possibilities is.


## [00:07:52] Building a very open-ended product

[00:07:52] **Zach:** it's funny 'cause our, our original investors were like, no, you should like, focus on a particular vertical, right? You guys should [00:08:00] focus on salespeople or focus on, education or like, whatever it is. But like you should build, I think that's very common sort of advice, right? It's like build one use case out and build it really well.

And we're like, no, we're gonna build this crazy broad thing that can kind of do anything. and I think it served us well ultimately, sort of, you know, going, going maybe against convention here. I think the trade off is we've been able to find our, our sort of customer and find people that, that have gotten tremendous amount of value out of it.

but the trade off is like, is it bespoke enough? Is it sort of, of sharp enough to work in these specific cases? the future has revealed itself, so to speak, and we can start to build some of those really, really cool like specific cases. webpages, you know, is an interesting sort of concept for us too.

Like we did, we originally were gonna do this sort of new medium, and presentations were kind of the, the core of it and maybe some documents. and I was doing user research and people were like, oh, it made a webpage for me. And we're like, you, but it said presentation. Like, what, what, what do you mean?

And it turns out like people were like, this would be really cool webpage. Like maybe I can make this my website. Maybe [00:09:00] we can. I can host this or whatever. And so we started this whole process of building out an entire, webpage product, which, which is, we're still working on it, but, but I think people have really, found it very useful and found like, spin up a website really quick and a website that you just type like a doc and not have to like, fiddle with anything that just looks good by default.

Like that's, that's huge. AI can, can play into that and you can just basically have AI write your webpage linearly, like a, like a doc. So, 

[00:09:24] **Ridd:** That brings up something that I wanted to ask you about specifically the role that AI plays in kinda the customization flow. 'cause I, I could see an obvious spectrum that I'm sure you're probably wrestling with as a designer, where on one hand you have just, you know, power and customization in the other, you have these guardrails to make sure that people can't make a really, really crappy webpage.


## [00:09:43] Core principle of "beautiful by default"

[00:09:43] **Ridd:** You know, so how do you think about that tension and, how do you think about the design strategy for where you all wanna fit onto that spectrum and how does that ultimately take shape in the interface?

[00:09:54] **Zach:** it starts with principles one of the core principles we have here when we're doing sort of anything is, uh, it's [00:10:00] beautiful by the fall, right? So we actually think even if you don't really use ai, it should still be beautiful by default, but it definitely applies to, to AI and, and when you use, AI generation tools, within Gamma, um, so what it really means is like, you sure you can, say for AI image editing or AI image generation, you can make an AI image.

and on one hand, we could say, make it whatever style you want or make it look, you know, whatever kind of tone or vibe or, or theme, of the image that you want. But actually what we've done is we've sort of said, well, because the deck has a theme, we're gonna automatically sort of apply the colors and the vibe of your theme of the deck to the image, right?

So by default, that image you make is informed by the theme of the entire deck. And so you'll get the same color tones, the same illustration style, the same photography style, like whenever it happens to be for that deck. Images are just one example of us saying we give it sort of the ability to be beautiful by default.

that's not to say you couldn't [00:11:00] break out of it and like, and like go in and say like, no, I want it to be like kind of crazy. ultimately people that use Gamma are going to kind of make, whatever they wanna make. but we really, really strived for like, logical defaults, defaults that just like work and look good and, you don't have to like, think about it too much.

A lot of our customers, aren't designers, right? they're people who are like, I just want to make a presentation and have it kind of look good. , And I think that's really what we try to deliver with AI by, you know, giving it the ability to just make stuff that looks good by default.

And if you want to kind of break out of that, have at it. But, but it's, it's easier to make something that looks good. It's harder to make something that looks bad in Gamma. And that's kind of the, the guiding principle, 

[00:11:39] **Ridd:** are there other guiding principles that you're kind of turning to on a regular basis as a designer?

[00:11:43] **Zach:** obviously we all know like AI is non-deterministic, right?


## [00:11:46] Principles for designing AI products

[00:11:46] **Zach:** You're gonna get what you're gonna get out of it. And so being forgiving I think is, is really important. being clear like what's gonna happen before it's gonna happen, so a great example is like if you wanna edit your, deck, with ai, and it's gonna do some massive manipulation.

It's gonna like move [00:12:00] all these cards around and like really reshuffle stuff like, should we let you know before it goes and does that? Right? Like, how much of that do we wanna bubble up before? And then how much of that do we wanna let you undo and really sort of work with it a little bit. we had a principle around suggestions and being able to like. giving you a suggestion that's just gonna work nice and, and work well and, and, and be beautiful.

I've really found that giving just LMS and giving the models just more context, is always gonna turn out usually better. let's say you're again, doing like an image in Gamma, it's cool if it knows like what the theme is and maybe the, the name of the deck, but if it knows like what the card is or if it knows what paragraph it's connected to, You actually can say, you know, let's say I have like. a deck about dogs or whatever, right? And it's like different breeds and it knows like, here's a, a paragraph for each breed. Like it'll know, I'm not just gonna make a dog, gonna make a dog of this specific breed in, in this specific part of, of the, of the card.

And so kind of giving it more context and letting it kind of run with stuff is actually been really cool. That's not really a principle, but, um,

[00:12:59] **Ridd:** of that as like a core [00:13:00] part of the design deliverable now?

[00:13:01] **Zach:** yeah, I mean, I think you have to, we have this AI image chat, uh, which lets you basically say, here's an image. What do you wanna do with it? Right? Like, change the lighting or, add whatever to this image, or put a hat on whatever the shark, whatever it might be.

and I was trying to think, what can we tell the ai? Like what can, what context can we give it to help you, basically predict or know better what it should do? Right? And so I was thinking like maybe a context would be cool if it knew like, what you've recently written or, where your cursor was or like what you recently deleted or something, right?

Like how much of this can we sort of feed into it? and then you kind of have to design that. You have to just kind of say like, like, here's this interesting kind of data that we can pipe in. and then it's about prototyping it a little bit, right? Like, what's actually gonna come out of that? How is it actually going to work if you do feed in all this stuff and it kinda.

what's it gonna spit out? 

[00:13:51] **Ridd:** it's only partially relevant, but it reminds me of this tweet that I saw. It might have been from Jordan Singer. I'll have to double check and I'll, I'll put it in the show notes. But it was basically like, more [00:14:00] AI products should have your clipboard

[00:14:02] **Zach:** Yeah,

[00:14:03] **Ridd:** of the context that you're feeding the ai, and that kind of was an eyeopening moment for me.

It's like, oh wow. You know, I wouldn't have thought of that, but you're right. Like that is part of what it looks like to design these products now.

[00:14:13] **Zach:** the more it knows, the better. Right. And, and I think where we're headed, is a future in Gamma where not only does it know what this deck is about or what this card is about, but it knows like about your business.

It knows about like what you're doing, it knows about you. do this quarterly business report, whatever, like with, with three different customers every quarter, like. I already know what the format is, I already know like kind of about them, and then maybe it knows those previous stacks and it knows, oh, the last two quarters, here's the data for that.

Right. Let me do a quick summary card for you. Right. So, as the context windows get bigger and as you can sort of experiment and, and add more context, things are only gonna just kind of be smoother and easier and, and, and smarter, you know, in, in something like Gamma where, it's gonna kind of know a little bit more about you, about your business and about kind of what, what things should look like and how things should feel.

[00:14:58] **Ridd:** It's cool to think about it like, it's almost like a [00:15:00] zooming out from just pure solving problems as a designer, but like a way that you can create real value for a company, especially in an early stages, is actively thinking about, okay, how can we design a system where context can become a long-term moat for our product?

Act.

[00:15:14] **Zach:** just recently we're, we're thinking about how, you know, all your AI images can, live in sort of a, a, a commonplace, right?

And you can maybe reuse those. And I saw chat, GPT just released like the library thing for their image generator and smart, right? It's like, you're using this for work and you wanna just kind of capture everything and hold onto everything. And again, they're building state, I mean, they get it too.

[00:15:33] **Ridd:** I wanna drill into the specific product applications and how you're thinking about ai, and maybe we could even look at that creation flow. Like you said earlier on, it does feel like a pretty obvious use case for ai. I'm sure it didn't take you long to imagine how that could play a really big role, but how have you iterated on that flow there?

Any big sweeping changes where you've learned something or maybe shifted the way that you even think about how to leverage [00:16:00] AI effectively, where you've made some changes?


## [00:16:03] How Gamma iterated on the creation flow with AI

[00:16:03] **Zach:** Yeah. So the first thing we ever did was just a single prompt, and this is like in a very prototype E world. Again, it was like, there was no chat GPT at this point. It was like, there were very, very, very basic models. It was like, make a deck on this topic, right?

And it would take like a minute or like, it was just like really slow. first thing you see is you need more guidance, right? But the real breakthrough is when we realized like, you know, maybe we can provide it an outline or maybe it can make an outline, right? Mm-hmm. And so one of the really cool things in Gamma and, think one of the real breakthroughs we had in AI is like the ability to say, start with an outline or start with a topic and then generate an outline.

And it's almost like you get this intermediate step to sort of really hone in what you wanna say. And before the deck gets generated, before you have to like, take in all of this information of all the different cards and all the content on the cards start with this sort of skeleton. and we're always trying to figure out how, detailed right the outline should be.

Should it [00:17:00] be able to have images? Should it be able to have layouts, right? Like, like what is this sort of proto deck, so to speak? and where we've kind of landed right now is you can start with a topic or start with a prompt. It'll generate an outline. You can tweak the outline and sort of say, add in a few kind of bullet points or cards or whatever.

and each of the sort of steps, the outline becomes an individual slide. and you can even say things in the outline use images about this or whatever. and from that outline, then you get sort of the, the, the full, the full deck generation. So, so early on it was a single prompt. We realized, an outline or something like that would be really useful so you don't have to wait for the whole thing and you can sort of tweak it.

and then, so that worked pretty well. we also started with a chat interface too. It was sort of like a back and forth, like, what's the deck about? Would you like me to add these? How would you like this? It was a lot of questions. we iterated away from that and met with something a little more straightforward, a little more like a setup page versus like a, like a chat interface.

and that was really around, kind of being able to expose different features, and being able to sort of do things like change image [00:18:00] models and really, really dictate some more kind of specific, settings around how wordy do you want it to be? What's your audience? What's the tone? things like that.

And so where we are now is you can sort of start very simply with the topic. generates an outline and then you can choose to sort of dig into the outline, really tweak the settings. and then it generates the whole deck really fast. we actually slow it down. And this is a, this is a.

Secret gamma, lore. there is this wow moment where people go from the outline to the deck and you can see it in user testing and watch people use it. They're always like, wow, it looks, so good. Or they see it generate and they see it type in and they're just like, there's this moment where they're kind of mesmerized just watching it type in.

I think it was maybe like a year or two ago when, all the models started getting really, really fast for the text models and it was like too fast. And customers were like, what's happening? And it kept scrolling and just like you, you sort started to lose that wow moment, right?

And so we, we slow it down a little bit. but we are gonna have an API soon, which will, which will give you full speed and, uh, not necessarily have to have to go super, super slow, but [00:19:00] it, it's, it's just fast enough for you to like, kind of follow along and read it. We really dial it in, you know?

[00:19:05] **Ridd:** It's funny 'cause here I was thinking that maybe we were gonna talk about how you're handling all of these different like loading pages and the time that you have to account for when the AI is generating things and you're totally doing the opposite.

[00:19:16] **Zach:** Well, well actually we, we, we used to have to do that, in fact, the component is still called like, look over here or something, right? This 

[00:19:23] **Ridd:** That's 

[00:19:23] **Zach:** like, because it was like, it was like in in the code, it was in React. I, um, I called it that because there was this like loading screen and all this kind of stuff.

Like, like just wait 30, 45 seconds or whatever. Now Dex can generate so fast. when we first built this thing, we were like, okay, so maybe there's something we can give the customer to do. Like maybe they can set some settings. And so we threw the, the theme picker in there, right?

And we were like, it was a full screen kind of moment. You get to pick your theme and, and do all this stuff. and we got rid of that because, we don't need anymore. so finding the right things to like pause on, you know, and finding the things to skip over.

[00:19:54] **Ridd:** It's a really neat idea though. Pausing on the theme. I mean, I get that you don't need it anymore, but I'm even thinking in my head like, you know, [00:20:00] I'm working on an AI product right now. There's a couple times where, you know, it can sometimes take 10, 12 seconds and I'm like, I wonder if there's actually a very lightweight task that you can present at that moment as kind of the look over here moment.

It's

[00:20:13] **Zach:** Yeah. 

[00:20:13] **Ridd:** solution. 

[00:20:14] **Zach:** I think I did some analysis on it and people would spend up to 30 seconds, like even, even after the deck was done, people would spend like 30 seconds just like clicking through 

[00:20:21] **Ridd:** Hmm. 

[00:20:22] **Zach:** things and, and, and understanding the themes. And, and also it's an opportunity to, to introduce the concept of themes, right?

Like, oh, we have these, these things and, and sort of here's how they work and, um, here's some that we offer. 

[00:20:33] **Ridd:** Anything else that we're not talking about in terms of lessons that you've learned or ways that your thinking has evolved that's now informing this gamma on the principles of designing for ai?

[00:20:44] **Zach:** give you more options, give you more variations, I think was something we kind of discovered. you know, especially in some of the image stuff, like being able to kind of give you stuff to pick from.

we're working a feature right now that lets you sort of pick variations of cards, variations of slides, and it just feels fun. I mean, I think, [00:21:00] ultimately what I ask myself when I'm kind of doing this stuff is like. Is this, is this fun to do? Like, is this a fun thing or does it feel like work?

You know? And I think AI can really make things fun. another principle that I wrote was encourage rabbit holes or something, right? Where you should be able to kind of follow your creativity, right?

And you should be able to kind of go explore and it should feel fast and fluid and you should be able to say like, I had a paragraph about this. Or like, oh, had an image about this. Or, or, or you're just kind of like moving as fast as you can sort of think it, it kind of reacts and stuff.

And, Like, you're allowed to go down this rabbit hole and then you can pull back out and be like, that was weird, like, at me, let me start over, you know, or, or whatever.


## [00:21:35] Ridd's first Gamma experience

[00:21:35] **Ridd:** I remember the first time that someone presented a gamma in our all hands at Maven uh, it was Johnny Chen and he like had like kind of the tidy part of the presentation above and then he scrolled. On the presentation, it was like this big full screen goofy gif, and it was kind of, you know, it broke my mental model for what a presentation was in that moment where like it wasn't this 16 by nine box with three [00:22:00] bullet points.

It was like, whoa, you can kind of get creative here. So I get it. I think you guys are already leaning into that and probably it was a big part of what influenced the latest rebrand as well.

[00:22:09] **Zach:** Yeah. Yeah. Trying, trying to get a little fun, a little whimsy. Um, but again, keeping it, keeping it a little buttoned up, I think, too. , And then speaking to imagination. a lot of the imagery in the art direction is like this kind of, you know, surrealist sort of like, like a little bit of a double take on everything.

You're kinda like, what is this all about? You know? and it's about that, that notion of imagination and kind of like. Funness and openness and, and then there's an airiness to it too, I think, which came out really well. 


## [00:22:34] Is AI integrated or just a feature?

[00:22:34] **Ridd:** my brain typically thinks in spectrums, which is kind of just how I operate. So you have this fun and buttoned up axes, but I would imagine another one that you've probably been thinking a lot about is, you know, is AI more of like a feature or is it the product itself and integrated through every single part.

So maybe you could touch a little bit on how you've approached that set of opportunities as a [00:23:00] designer, and ultimately like how it manifested in the interface.


## [00:23:02] Thinking of AI at a system level

[00:23:02] **Zach:** very early on we didn't have nearly as much conviction about it as we do now. Right. And so we know kind of like, I mean, we, we, we went for it, but it was also like. Is this gonna work? You know, and so a lot of what we have in the product is experimental, we'll, we'll add in like a, like an auto complete thing. We'll add in like a, you know, an image editor, we'll add in like a deck editor, right? And so I think where we're at right now is, is sort of, there's a a lot of little kind of doors, so to speak, that, that lead into AI features.

and all of them sort of have a little bit of a different vibe, you know, use different models and different kind of heuristics a little bit. And one of our big goals is to really try to unify a lot of that, right? Like, like what does it mean, what's the overall vision kind of for, for AI as, as a whole in Gamma, right?

and there's a very simple question of like, do we say ai? You know, like do you just say it? or not, is it just sort of the product, right? 

[00:23:54] **Ridd:** Yeah, 

[00:23:55] **Zach:** I think early, yeah.

[00:23:56] **Ridd:** sparkle icons in so many different levels of the product than at what point [00:24:00] do you even

[00:24:00] **Zach:** Yeah, yeah. And. 

[00:24:02] **Ridd:** that? 

[00:24:02] **Zach:** Yeah, it's sort of like, it is like, at what point, is AI gonna be just such a part of what we do that you don't need to call it out anymore? I do think that there, that we're gonna get to a world, we're just like, most products are just gonna be products and we're not gonna say ai, but I also think right now there's a little bit of AI tourism, right?

There's a little bit of people who are kind of looking for that kind of thing. as, you know, products evolve and as things change, it's, it's, it's gonna be less about, oh, this thing has AI just like, it just does what it does.

But then it kind of raises other questions of like, is there one sort of unified kind of, you know, experience to use the AI tools in Gamma? Is it, is it a chat? it simply just a generator?

Is it lots of little kind of, contextual help pieces? I don't really know yet. but um, I can say that our image chat has done, has done really well. And I think there is something about sort of being able to chat with your whole. Deck, that's very compelling to me. it raises all sorts of other hairy problems.

Like [00:25:00] how do you know what it can do, like what happens when it doesn't do what you thought it was gonna do? 

[00:25:05] **Ridd:** I wanna zoom out from the product for a little bit and talk a a bit about how you all work. And think I want to use a quote from Grant, the CEO as the entry point,

[00:25:16] **Zach:** Okay.


## [00:25:16] What makes Gamma an unorthodox design team

[00:25:16] **Ridd:** he said if you were the generation before, you'd easily be at 200 employees. So I'm curious, what about the way that you all work allows Gamma to operate at a fraction of the headcount?

[00:25:28] **Zach:** I think we're a little bit of a, of an unorthodox design team, although maybe this is changing a little bit in, in sort of the industry. But we're a design team who is, is quite capable of, with regards to like coding, prototyping, you know, building actual, stuff like we close bugs and we like ship stuff, right?

Like, not huge stuff, but like, you know, we can, fix things in the product and more importantly, like we can prototype, custom builds of the product and, and share with customers and get feedback on those things. And so, as a design team, we're like pretty capable, with sort of that kind of stuff.

And, [00:26:00] and now that AI has come along, It is really kind of amazing where I can go in and I can have a way better understanding the code base if I'm trying to prototype something out for a customer. Like, recently somebody wanted me to add like an option for analytics in the dashboard. I'm like, let me just see if Cursor can just go do this.

Do you know what I mean? Like, like I seriously think to myself, how many bugs can I as a designer just go fix by just asking cursor to do it? Like, it's kind of mind blowing, but like That's true. That's like very true.

[00:26:25] **Ridd:** hasn't done it yet, it's a lot.

[00:26:27] **Zach:** Yeah. It's like, it's crazy, right? So but then as far as like the whole company goes, We're really believers, I think here. Uh, you know, it's cool being able to see a new model come out and, and we put it in the product like immediately and just, you know, all the, remember deep seat came out and the whole world was like, uh, was on fire about like, like this new model or whatever, and like, we tried it out and, and it turned out like, yeah, it's like pretty match our customers, right?

Like ultimately we can put a new model in and then we get feedback immediately about, if the deck is good, if the images are good, like we, we can, we have a very sort of, strong qualitative kind of measuring qualitative too with, [00:27:00] with regards to like the, the rating system and everything.

And so, we're always trying new stuff out. we have great partnerships with a lot of model providers too. And, and, and it's always exciting to, to talk to them and, and help kind of, either guide what they're gonna do or, get access to something that, that can really be transformative to, what we do here.

I can speak to also, how Mid Journey really helped us in our, rebrand. We used the style def and personalization stuff to do a lot of our art direction, and it's been super helpful, right? Because as a team now we're like, we want an image for like an empty state. Well, we have like a style graph for it.

We kind of have, you know, all this stuff and we can kind of do some image generations and not have to kind of go back and forth necessarily with like, does this feel right? And, and like, you know, who's gonna go illustrate this? Like, we can generate stuff that feels very high quality and very on brand and, and, and sort of very consistent because of some of the tools that Midjourney has.

So, 

[00:27:52] **Ridd:** I want to go down the like code prototyping

[00:27:56] **Zach:** Mm-hmm.


## [00:27:57] The importance of a rating system

[00:27:57] **Ridd:** really quickly, you mentioned something about the rating system. Can you [00:28:00] explain what that is for people?

[00:28:01] **Zach:** Yeah. So every time you generate a deck, uh, at the bottom, you basically get a, uh, sad face, a, a meta face, you know, and then a smile and a happy face. Uh, and it's this like very lightweight, very, low touch, little, little way to just see like, you know, was this good or was this bad? And, and what we can do is basically, you know, ab test models, we can, we can put a model out to 10%, put over 50%, and then, you know, we have enough volume that we can just basically say like, was this getting more, smiley faces or not for, for this given model?

we have kind of a leaderboard internally. Like, oh, this thing is like the new top, the top dog, right? So, 

[00:28:37] **Ridd:** cool. 

[00:28:38] **Zach:** we're not Google Slides, so we're not stuck on, uh, Google model.

We're not PowerPoints, we're just stuck on the Microsoft models, right? We kind of like pick and choose. We we're sort of in a, in a great spot to just literally figure out what's the best model to deliver to our, to our customers, what's the best model for generation? And just do that. Like, we're not, we're not, our hands aren't tied that capacity.

So [00:29:00] I think if you, 

[00:29:00] **Ridd:** layer. 

[00:29:01] **Zach:** yeah, so if you look at like, you know, PowerPoint's gonna always have to use the co-pilot model, you know, and Google's always gonna use Gemini and like, we can be like, well, actually the outline works best with this model, and then the generation works best with this model and the images work best with this model.

So, so like, we're just, we're just out here trying to give people the best, stuff possible. And the ratings work for decks and they work for, for images. and so we have sort of a little bit of a competition going on internally, but, uh, yeah, TPT.

[00:29:27] **Ridd:** sense. I mean, this is something that I'm kind of noticing in a lot of these interviews with people who are designing AI products is there's always some mechanism to like a quantitative reaction to any of the AI output.

[00:29:40] **Zach:** Yeah.

[00:29:41] **Ridd:** even for myself, I'm like listening to you talking.

I'm like, huh, okay. How can I introduce something like that?

[00:29:45] **Zach:** Well also we all come from Optimizely, so we're, so we're like, we're like very into kind of like measuring stuff and making sure that, we do really care about, we do a tremendous amount of data collection. And, and, and as far as like analytics and the product and like what, you know, you can look at. what's [00:30:00] working well, what's not working well, and, and, and designers too are empowered to kind of do some of that analysis, you know, and go, go understand where are things, where are things falling down?

And, and like what's, what sort of some of the problem areas 

[00:30:11] **Ridd:** I wanna talk about the technical piece now,

[00:30:14] **Zach:** Sure.


## [00:30:14] Zach's technical background

[00:30:14] **Ridd:** from our previous conversation, it's not just you too. Like a lot of the designers at Gamma are more technically minded, comfortable getting into the code and maybe even just as like a quick context piece, like how much of a technical background did you have before Cursor and, and this whole AI wave.

[00:30:31] **Zach:** I learned React at Gamma. I I was just reminded that actually recently like, Hey, Zach, remember when you didn't know React? I was like, oh, yeah. but you know, I've always had a little bit of technical background. Um, you come in and you're kinda like, well, I can kinda like write HMLI kind of know CSS and kind of get by.

But as soon as you're like, let me just ask chat GPT about this thing, like, if you have any kind of you know, desire to wanna learn and to grow and, and to like understand this stuff. Like the tools are out there now, right? You can get into, chat JT or Clot or whatever and [00:31:00] just, and just ask questions.

And then more importantly, operating on the real code base has been a real game changer, right? Because you can just ask questions, not in the abstract, but like How does this button work? Or what does this do? Or like, why isn't this loading? Right. but we also have a lot of design engineering support too, right? So we have design engineer who helps us do a lot of prototyping and, and can work through that stuff. And, and ultimately it's about like being able to deliver the vision and to the engineers in a really clear, put together way that that feels real.

But also being able to test that with customers and being able to make a prototype That's, that's testable. It's like really hard to sort of imagine what a Figma prototype of this thing would be.

Right? You could make in Figma like. Very specific screens and very specific flows. But when you put it in the hands of a customer who can like, make anything they want, they can make as many cards as they want. They can type whatever they want, they can do, you know, all of this different stuff.

the prototype becomes so much more real and so much more, more alive and you can really see where things, break or, or, or work really [00:32:00] well, when you kind of get in front of people in a real working way. we, we use a ton of, of Code Sandbox and Stack Blitz. I've played with both a lot too.

just trying to like, make stuff and make little prototypes. Like for some of the AI generator stuff I just made like a bolt prototype and I'm like, lemme just do this. You know, lemme just see what this would feel like. I wish Bolt had the ability to have some notion of our design system. I think that'd be really cool.

'cause right now it's it doesn't know about our company kind of speaks to our, that last. Thing we're talking about, which is like, if it knew more about who you were or knew more about your company, knew more about, what you're trying to do. Like, I think, that would be even, even cooler, but we'll see if that happens.

[00:32:38] **Ridd:** All right, so we talked about like the technical piece. kind of want to even return to the beginning of this conversation where, you know, you've been working with this group of people for quite some time now.


## [00:32:48] How working with AI as a material impacts collaboration

[00:32:48] **Ridd:** Like there's a familiarity and probably a really healthy collaboration that you've out and refined over years. Are there other ways that that way of [00:33:00] working has evolved now that you're dealing directly with AI as a material?

[00:33:03] **Zach:** the Gamma's four years old and, and we spent six years at Optimize, so that's like a decade of, of working with like some of the same people, which is, incredibly powerful. I feel like a lot of times. there's just such, so much trust and so much kind of faith and, and, um, and confidence in each other.

It's, it's amazing. I think that that really actually came to a head when we all decided to do this AI thing, right? I mean, you gotta put yourself back in that kind of era where again, there was no chat, GPT, there was, there was nothing. And the models were slow and janky and like, could barely spell stuff correctly.

And we're like, you know what we're gonna do? We're gonna make an A model that generates our slide decks. And it took a lot of faith, , to want to, do that, to want to say like, I believe in this thing. And, and like we all kind of had to trust each other to, to wanna do that.

And, you know, we trusted each other to make the prototypes we trusted each other to, to kind of, make it happen. And. And it was, uh, it turned out pretty good. 


## [00:33:59] When Zach reaches for AI coding tools

[00:33:59] **Ridd:** What about [00:34:00] in your personal process? Like I'm sure you're still doing a lot of kind of open-ended exploration in Figma. sounds like you're actually, you know, out tickets and shipping fixes for bugs and, you know, you're making these functional prototypes in in cursor, like.

[00:34:17] **Zach:** Mm-hmm.

[00:34:18] **Ridd:** How do you even allocate what tools and the medium in which you are working based off of like the project or where you're at in the design process? 'cause I'm sure there's somebody listening and they're like, yes. You know, cursor is so empowering. Uh, but like, when do I use it? You know, like when does an actual professional designer working at an AI company take advantage of these tools versus work a little bit more traditionally?

[00:34:43] **Zach:** I think you could do this. I think if there's traditional designers out there and people who are making figma and stuff, just see what happens. Take your figma, put it in vault and say, make a prototype. Like, I bet you get pretty far, like, you know what I mean? it's pretty good.

Now, it's not gonna be perfect, right? But then you ask yourself, [00:35:00] what do you wanna learn? Right? What are you trying to learn here? Is this something I could put in bold, spend 20 minutes kind of refining, and then go send it to a customer really quick? Like, probably, right? Like, are they gonna care? Are they gonna care?

It doesn't look perfect or like, work perfect, but, but if, if the question you're trying to answer is like, you know, does this work? Can this work? Like, where does this fall down? You could do an figma. Right. But then you could also, you know, take something like Boulder or lovable or whatever make something that feels a little bit more real and try it out and see it for yourself.

if, you know it really works, just share it around, post it on Slack. Like say, Hey, I was just experimenting with this. Here's like a working prototype of this thing kind of working. what do you guys think? 

[00:35:38] **Ridd:** Is there an 

[00:35:38] **Zach:** I,

[00:35:39] **Ridd:** we could use of time where you had some kind of a learning goal or something? You were trying to figure out where you reached for one of these tools? And then we could talk a little bit about like the outcome and what it looked like to iterate from that point.

[00:35:49] **Zach:** we can make a deck and the decks have, images in them, but a lot of times the image is like, oh, it's a little bit off. Or like, oh, this table's weird, or There's missing fingers or whatever. It's, so we wanted people to be able to go in and say, [00:36:00] tweak this image, make this image a little bit better.

What's wrong with it? Lemme tell you, here's kind of what we're gonna change. I could like work all this stuff out and, and try to like, do some Figma stuff and, and talk some customers or it could just like. Half bolt, just like make something, you know, just like to see what happens.

, And I did make an entire prototype of this AI image flow. I actually made three of them in it to kind of iterate on all of them. and it ended up, you know, not really using a whole lot of it, but it was almost just a tool to kind of just like explore and, what I'm looking for is, is it fun, right?

Like, was this thing fun to use? And I could really find the fun easier, with something like Boldin just telling it like, oh, actually like give me four variations. Don't give me one anymore. Or, always make one a little bit more, you know, vibrant or, or like, whatever it might be during the AI image generating experience, And it was just easier for me to kind of like find that fun. And ultimately what happened with it was, I sort of like. You know, it, it gets to sort of his logical conclusion. Like, I can't take this thing any further. And it's kind of answer the questions you wanted to answer and then you, you [00:37:00] use that to inform kind of another design iteration process, right?

Maybe you do it for real in the product or maybe you do it again in Figma and Sharon around the team and, and credit and stuff. 

[00:37:07] **Ridd:** I love, find the fun.

[00:37:09] **Zach:** Yeah.

[00:37:10] **Ridd:** I'm sealing that.

[00:37:11] **Zach:** That's what I try to do. Find the fun in a presentation tool. Yes. 

[00:37:15] **Ridd:** Something that I've even done because I, I use lovable a lot, you know,

[00:37:18] **Zach:** Yeah.

[00:37:19] **Ridd:** similar things and. I found a lot of success in having like ready-made starting points that I then duplicate before I start adding any code

[00:37:29] **Zach:** Mm-hmm.

[00:37:30] **Ridd:** on a specific prototype. So I kind of have like this shell of the product that you're right, like it's probably like 80, 90% fidelity, but it's totally good enough to

[00:37:38] **Zach:** Yeah, 

[00:37:39] **Ridd:** what 

[00:37:39] **Zach:** exactly. 

[00:37:39] **Ridd:** like 

[00:37:40] **Zach:** Yeah,

[00:37:40] **Ridd:** then you just build a little piece on top of it, like, okay, then I duplicate it again, build a little piece on top of it, and it's, it's become a pretty stable component of my practice now.

[00:37:49] **Zach:** yeah, yeah. And I think Bolt just last week introduced like some new design update thing, and it's actually really good. I was like, dang, I, I like, I was like just messing with it. I made like a recipe app or something and like, [00:38:00] it made like, it like had whole color scheme, like, like really nice. However, I was like, wow, this is like like very decent, you know?

I mean it's, it's like sort of, democratized, but also like very like, oh, like put it together pretty nice, 

[00:38:10] **Ridd:** you've mentioned Code generation and then also using Mid Journey

[00:38:14] **Zach:** Mm-hmm.

[00:38:15] **Ridd:** like empty states, things like that. Any other applications for how you're using AI in your practice?

[00:38:20] **Zach:** we have a shared, claw project that we use for like helping us write job descriptions, which is pretty cool. as we're hiring, we have like a bunch of example ones and we're like, oh, kind of like, start me out with something for, you know, this job or whatever.

that's been cool to, to use and, and it's, it's like such a simple, sort of concept, right? You just like put a bunch of 'em in there and say like, generate another one and, and send like a shared project. Like it's no, by no means is like some fancy tool or anything. It's just like we're all on the cloud project together.

If you can take some topic that you wanna like, share or, or really learn about. I've been using open AI's deep research and then piping that into Gamma, and it is, it's [00:39:00] great. it's very thorough and it keeps the references and I, I wish this was like a thing, you know, like, I wish, I wish GA could do this somehow, because some of the outputs of this is just like so fascinating yeah.

[00:39:10] **Ridd:** using the API that is not public yet,

[00:39:13] **Zach:** No, no, no, no. It's, I totally go to chat t and do a deep research and then copy and paste it in again. Like there's, there's nothing for this yet. 

[00:39:19] **Ridd:** it in 

[00:39:19] **Zach:** Yeah. I'm justing.

[00:39:20] **Ridd:** way to visualize deep research.

[00:39:22] **Zach:** Yeah, but like, and especially if you do like web image searches, it'll like go find the sources and stuff. It's, it's, yeah, it's cool. 

[00:39:28] **Ridd:** cool. 

[00:39:29] **Zach:** I, I might, I might prototype something around this 'cause I, 'cause I really, really think it's cool.

very, very, very nitty gritty stuff. Uh, I use, replicates, I mean their APIs for like image manipulation, upscaling, and um, uh, background removal and stuff like that. 

[00:39:43] **Ridd:** Yeah, it's cool. I mean, just seeing the spectrum of all the different things that you're getting your hands into

[00:39:48] **Zach:** Mm-hmm.

[00:39:48] **Ridd:** know, marketing to much more technical functions. And so maybe before I let you go, we can kind of zoom all the way out because you know, you're really in the weeds in terms of what AI [00:40:00] is capable of today.


## [00:40:01] How Zach imagines the future of his role

[00:40:01] **Ridd:** But if you kind of extrapolate it in your mind a little bit, how does it shift the way that you think about your role as a designer in the coming years?

[00:40:09] **Zach:** if our goal is to, make great tools that are, that are efficient and fun to use, like, I honestly think we're gonna be able to, make prototypes faster, I really hope in the future there's gonna be like better AI tools around user research, and analysis.

We have a tremendous amount of data and. we do a lot of analytics and what's working, what's not working. Like, it'd be so cool to be able to use AI in, in that space too, and understand like some customer sentiment more deeply. I think as, things evolve and as those tools, become reality, a designer's gonna be able to not write a mease query, but go ask Mease like, like, what's been going on?

Like what, what, like where are some problem areas, right? And then go right to something like, like bold or whatever and be able to like prototype something out for that, right? And it knows about your design system knows like what you've been doing. I think we're just gonna be, you know, more empowered and, and be able to make better [00:41:00] decisions.

And, the gamma design team ethos is all all about kind of like being able to deliver. Their vision in their high fidelity way, in a way that really makes sense.

Like, I think we're, only gonna be able to do that better as these tools get better and as we can work on better work with better information. 

[00:41:14] **Ridd:** kind of just

[00:41:15] **Zach:** I,


## [00:41:15] Looking into the future of Gamma

[00:41:15] **Ridd:** ahead into the gamma future, is there anything that you can share about what you're kind of imagining or excited about for where this product can go?

[00:41:23] **Zach:** you know, we found great success in, in presentations and with this medium, but I think the future is gonna be, how do we take that, those learnings and how do we take like the goodness of that AI and, and all the, the ability to make stuff beautiful by default, apply to other stuff, right?

Like, we're talking websites, we're talking maybe docs or, or maybe even, you know, video, audio, whatever it might be. we have sort of hit our stride here for, for presentations and, and it's gonna be very interesting to see like. Like where that goes with with other mediums and other, other formats I should say.

[00:41:52] **Ridd:** Zach rooting for you. Big fan of everything that you're

[00:41:54] **Zach:** Thank you. Thanks. 

[00:41:55] **Ridd:** the time and 

[00:41:56] **Zach:** Sure.

[00:41:56] **Ridd:** the curtain today and just kind of sharing a little bit about how you all work and [00:42:00] also just like the specific challenges that you're overcoming or ways that you're kind of wrangling the ai.

It's, it's definitely shedding a lot of light on what it's like to work on this kind of a product.

[00:42:09] **Zach:** Yeah. Thank you. Thanks. I appreciate it.

