---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: qsuqgj4tn0k
slug: 2026-07-15-jason-yuan
source_type: descript
source: descript://Jason Yuan
guest: Jason Yuan
host: Ridd
title: "Designing 99 \"No\"s for a single \"Yes\""
published: 2026-07-15
duration_min: 57
generated: 2026-09-10
generator: dive-club-ideas
---


## [00:00:00] The New Computer origin story

[00:00:00] **Speaker 15:** , let's all go back in time to 2023, you may remember New Computer.

, This was our last company, this name came from the domain name. We were trying to put job postings online, and we were like, " Where do we start? We don't have a name for the company." and this just happened to be available, like no one owned it for some reason. 

And so we just-- I was like, "I guess we're called New Computer."

and what's really interesting is there's a dot in between new and computer, the period, the, the punctuation mark, and then that's where we got the inspiration for the name Dot. It was not obvious to us what we should call it. We considered... Yeah, yeah, yeah. We considered like Daemon from His Dark Materials.

We considered Atlas, like a, like an atlas of the world. We considered... we considered just calling it NC1, very like robot, teenage engineering types. Um, but the punctuation was what, what connects new and computer is dot, and a dot is supposed to connect stories in your life. So then

[00:00:51] **Speaker 6:** Mm-hmm. It's

[00:00:53] **Speaker 15:** funny. And we made this demo we were thinking like, if, if this is learning everything about someone, you can, you can theoretically go up to someone [00:01:00] and bump your iPhones together, and it could tell you something you have in common. And this is sort of just a slide, but the demo back then was like, " you both love underdogs because you love underground typography, and she loves underground Turkish techno music." And I was like, "That's cool." Like, but I, I don't know what to do with this information. Like, what, what an interesting feature that I will never probably get to build, So this was three years ago, and this was sort of where the seeds of Hivemind started, basically, through, through Dot itself, through the very first version. One of my core inspirations was "The Sims," I've always loved the UI on "The Sims 3." it, it was so whimsical, and it really emphasized the playfulness of life, which, which I loved. I would say video games, you'll, you'll see lots of references to video games throughout this journey. I'll show you lots of screenshots from development versions of Dot, as well as concept art, and this was I didn't personally make everything. I worked with our team at the time, which consisted throughout the years of Alex Badua, who did recent- most recently did the Siri AI, um, shaders for H.I.,

Louis Arbeau, Julian Kelly, who I believe is at Shopify now, um, myself, and, um, our wonderful [00:02:00] developers, Devin and Daniel and Luca and Sam. Like, this is hard for me to say exactly who did which parts, but we just-- These are the designer artifacts I can show. memory back then, we were designing it both cognitively in terms of the backend architecture and also in terms of visual UI. For this particular, podcast, I'll focus on the UI part. it took a while for the model to register what was a memory and what was not what it wanted to remember. and because it was such a novel concept at the time, users weren't sure when it would remember things and when it wouldn't. And we wanted to really highlight that it would be making memories.

So on the very left, you see, like, we had... I literally just copy-pasted, like, screenshot from The Sims into our, UI at the time, and we had some fun details where at the time when you sent lots of sequential messages, They would kind of bump against each other. It was kind of fun. and I'm like: You know, I think if it registers a memory, If it's only doing it occasionally, it should sort of show little bubbles that almost like little Sims, thoughts.


## [00:02:53] Designing concepts for memory

[00:02:53] **Speaker 15:** Oh, Dot learned that Hermes is a cat." Back then, the unit of memory was, like, one line of a fact, right? So we [00:03:00] were like, "Oh yeah, we can just show however many facts there are and, and write about it." And then we had the idea of like, oh, and then for, like, bigger memories, it can create these bigger facts that were bigger bubbles, uh, or narratives.

And maybe one day it can even start storing them as files, you know? And it sort of evolved from, from, from here. obviously this is not what we're-- how I think people should think about memory, both in engineering and design now. But back then, this is what we thought was right. then of course we were like, "Where do these memories go?"

Well, maybe there's a idea-- maybe there's this idea of a headspace where you have things you're currently thinking about organized in these beautiful editorials, and then you, you know, maybe it's telling you you have these certain strengths and weaknesses, and maybe these are types of memories too, where we run inference on, on your facts, and we create a theory of mind.

we called this Deep Dot at the time. because, you know, if you remember things like Rid has a child, Rid is blah, blah, blah, that's fine, but that doesn't really teach you how to think about Rid, right? So we were like, we can teach the model how to think about someone. We can, we can teach the model to read in between the lines and not just [00:04:00] take what they say at face value, but also think about what they haven't said.

So we explored lots of concepts This one on the right was, you know, uh, what if we could store facts and, we can give users a place to browse all their facts, and you could create categories for the facts, and we can re- reorganize them. We called these schemas, so a dynamic file system. and as you can see, like back then, we were still thinking of memory as, as, as lines of information.

Jason took his cat to the vet. Daniel does not like bourbon. Jason's insurance and ID number is this fake number. You know, like, this was just... This was how we were thinking about it at the time. and of course, eventually this evolved into like, well- If we can show you memories in this way, we can show you any kind of information in this way.

And you'll see... This looks kind of familiar, right? Because we're like, "Oh, maybe for, for more, um, immersive experiences in the chat, occasionally we can generate, um, these sort of UI, uh, tiles on the canvas. and that should break up the monono- monotony of, uh, just back and forth chat. And also, maybe these are interactable.

Maybe you can go into this editorial and read it [00:05:00] more." so slowly this idea of, of these stories began to influence other parts of the design beyond just memories. You know, now this is, like, a future thing. Like, in the future, you should check out the streetwear at Harajuku. You should try asking this person about ideas.

Like, the idea started pollinating to other parts of our, our, our design. We were even thinking like, you know, we could, we could even pr- uh, allow users to, by tapping on different prompts, uh, through some gestures to easily, uh, discover new features in the app. so of course, when we announced it, what we had built was something that looked like this, which is for significant memories that are structured, it would generate this beautiful card and present it to you as a, as an artifact of, um...

That really demonstrates, everything it knows about that, person or object or recipe or place or event. this would only be for significant memories because November 2023, we were like, "Well, it, it should really just be remembering things all the time, so we can't possibly show you a line of like, Dot remembered this every [00:06:00] single time you say something.

That's so annoying. So let's just have heroic moments when they should be heroic, and everything else should feel ambient." And we actually did build all of this, even th-though this doesn't make it into the final build, for reasons I will explain. But, this was super fun, the idea is once you're looking at a memory, And you start talking to Dot again, you're now contextually talking about that memory. Now we started thinking about what are these, you know, visual artifacts, right? If you look at them through the lens of what happened in the past, they're memories. If you look at them through the lens of what's happening now, they're top of mind.

If you look at them through the lens of what will happen, they're guides, you know, guides into the future. this led us into our second feature that I will focus on, which again, we never shipped, and some of it is technological actually. Most of it is du- due to technology. But we called these Dot Dailies or Dot Guides.

these do exist in the world now. They just look like ChatGPT Pulse. It's almost exactly what ChatGPT did with Pulse. but again, keep in mind, back then we-- this was 2023, GPT-4, 8,000 context length, like terrible at writing. That was the SOTA. The idea for [00:07:00] guides was we would take this editorial format, and we would have the AI agent go and do deep research on things that it thinks you might like and present them in a beautiful format.

and the idea is if we do this overnight, it has more time to go, you know, run inference and do research such that we're not pressured to generate things in the moment. We can take our time and give you something really good. now we're getting into the more, um, beta or alpha territory of Dot, where like we were like eight, uh, maybe users can ask Dot to make guides, like, "Make me a guide on how to do taxes."

And the idea is then, you can re-revisit this, at any time, even, uh, a-as an artifact in and of itself, uh, without needing to chat about it again. this was September 2023. I don't think the tech was good enough for this at scale back then, definitely, but it was a fun pipe dream.

And we were like, you know, it's more than just how to do something, right? It's like ideas for what you can do on your birthday. if Dot knows you want to ski, we can give you a guide on skiing. We can give you information on how to undo your favorite architecture. we thought this would be really interesting as a, as a, as a way to show the users that the AI was [00:08:00] thinking about them even when they weren't talking to it.

We explored different visual styles of these editorials. This is now closer to what we actually created in production. and we could even give it a personality and make it kind of like sassy. by early 2024, we were like, Dot can sort of have fun with this. You know, it doesn't have to be so utility-driven, right?

And you'll notice that these guides come with images, and we thought, well, humans are, are visual animals. Surely we need... We can't just... No one goes on Instagram to look at text, right? Like, we, we should give you things to look at. and we have these wonderful image models. Let's have them create things for you.

Let's, let's make-- Let's think of each guide as a gift to the user, so this one was not even a guide on how to date. It was just like, "Ha ha ha, we're gonna roast you a little bit." And we had all these personalities in the background that we experimented with. We had like Bestie Dot, Chaos Dot, Boomer Dot for like financial advice.

Like, it was 

[00:08:50] **Speaker 4:** I love the depth of exploration too. Like, just an unbelievable amount of exploration in almost every single direction on every single axis, and then what you shipped was pretty simple [00:09:00] products, right? Like, you distilled it down to something that was simple. But just getting this behind the scenes and how much you were thinking about, it's so cool

[00:09:07] **Speaker 15:** every single thing we shipped is the distillation of the 99 nos that preceded it. Everything we make, our goal is then to say, "What is the most true and simple expression of this idea?" we even explored maybe these can be interactive artifacts, right? This was before, you know, Claude artifacts even.

So we were like, " Oh, like, what if Dot can train itself by giving you true/false cards that you can Tinder swipe in your spare time?" You know, this was super fun. People loved this. I loved this. It's-- Sometimes it would get a bit roasty. and what's great is that not only is this fun and it makes you feel seen, it's also a really fast way to train the model to sort of dispel any, like, incorrect assumptions about your life.

and this was sort of, um, a real screenshot of one of these stories, um, about one of the people on the team. And we were learning like, oh, this person plays lots of video games, so he feels guilty about it for some reason. I was looking at the, the, the visuals, and I'm [00:10:00] like, "We really need to...

If we're gonna ship something like this, we really need to make the visuals good. We can't just, like, ship slop. We can't just have, like, have random gradients. Like, that's so t-2016. We can't do that." I got connected to my friend Max. he's this brilliant, art director and artist based in, in Germany, and he, and he was making AI native art since 2022, I believe. and we worked with him again on Hivemind. and we said, "Max, like, can you help collaborate with us and create this, an editorial direction for Dot if you looked at it as a magazine?


## [00:10:28] Generating infinite illustrations for guides 

[00:10:28] **Speaker 15:** How would we create an infinite illustrations?" these were all generated using models at the time. You know, the image models weren't great, so we said, "Let's, let's do something abstract. let's explore themes of collage, collage in your life, you know, um, a yearbook let's explore abstract shapes, ink blots," because inks don't have to be precise, and also the logo of Dot itself is two ink blots swirling each other, right?

So calligraphy, ink, collage of photography, and abstract shapes, this almost, Japanese block print style. we looked at early graphic design. We looked at Polish [00:11:00] posters.

And we just created these beautiful images. I mean, I, I believe this one was, uh, meant to be an editorial about, Actually, it wasn't. I'm not sure. I think this might've been about horse riding, and this one might've been about, like, exploring a city or something. And you can already see there's an element of, like, a absurdist grotesque to, to these images, and w- I was super intrigued for some reason about this and wanted to push it further.

This was supposed to be for a guide on best restaurants in San Francisco or, like, restaurants in Japan. I mean, these are, again, all generated. this is, like, a dog walking guide for a city. Like, we had so much fun with these. Um, and then we also explored more sort of, I guess, contemporary, directions.

Like, this, this is a little bit inspired by Felipe Pantone's work. it's more contemporary. this, I believe, was a guide on some Nara park in Japan. This one I, I don't even remember anymore. this one obviously is about sports and tennis. Um, this one I think is reflecting on a relationship.

we started really leaning into the theme of nostalgia, these overexposed, grainy '70s photos, mixed with, uh, contemporary graphic [00:12:00] design. we trained models to actually generate these at scale

you know, the reason why we never ended up shipping any of these guides things is candidly the technology wasn't good enough. It wasn't good enough to consistently create great images. we still needed humans to edit them down from 10,000 And I'm like, "I don't wanna spam people with poor quality things just because we can."

I think the technology is not ready yet. if you remember Dot, we repurposed the zooming out view into, um, what we call chronicles. Um, and chronicles are like Wikipedia entries of your life. And to us, like, that was what all of this work of memories, of top of mind, of guides birthed chronicles. That, that to me was the simplest, most elegant solution that we could actually make that would be at least good until we could make it great, right?

So this is all the work that went into just, just that one feature, and we killed everything about it that was visual, and that, that like killed me. It was really sad. I loved... We, we, we spent six months doing even just the visuals. 

[00:12:59] **Speaker 4:** this is the point in the [00:13:00] podcast though where I'm going to like interject and say, man, Chronicles was dope. Like it was so good. I have a very specific memory of sitting in a Lowe's and I was killing time 'cause my wife was doing something. She was like talking to somebody about plants, I can't remember.

And I was just sitting there and I was scrolling the Chronicles and reliving memories and things I did with my kid in her first six months of life. And it was really special. And I sat in one of the like for sale outdoor reclining chairs in a Lowe's and I just scrolled Chronicles and it was beautiful

[00:13:29] **Speaker 15:** I'm glad that you found that, that you, you had love for it. So everything you just saw obviously laid a foundation for our inspirations. The theme for Dot 2.0 was what happens when you connect the dots. So basically, the day after we launched it on the App Store, I was like, " Okay, where do we take this?"

On one hand, it can be in a personal assistant direction, right? And, you know, that would've ended up today as something like an OpenClot. But my intuition was that people are not that busy. Like, people in tech are [00:14:00] busy, people in Silicon Valley, and students and... We are busy, but a soccer mom in the Midwest with one PTA meeting a week is not gonna need a personal assistant to manage their life.

Things like booking a trip to the Bahamas or making a restaurant reservation, like, lots of people like doing those things, you know? The idea of planning a trip is, is fun. It makes you dream about the future, and I'm like, "Is that really something we should be investing so much engineering into, like, automating?"


## [00:14:26] Designing Dot 2.0

[00:14:26] **Speaker 15:** Like, that doesn't seem like the right direction. So we thought, " Okay, maybe this is the time we can explore connecting the dots," because there was something really special about that idea from 2023. we went and collected lots of inspiration from around, the world. You know, we looked at, adventure video games like, uh, "Ace Attorney."

Um, and this, this is going to be relevant for, for Hivemind, as you'll see later. Um, we looked at the idea of an exquisite corpse, right? When every person draws a different section of a, of a picture, having only seen the previous section. , We looked at ideas of prismatic refractions, right? What is identity if not [00:15:00] different ways to refract an, uh, your life into different stories?

we looked at the Miiverse from, from Wii U and Wii. obviously we, we, we thought about "The Sims" as well.

[00:15:09] **Speaker 4:** This is maybe the most seemingly disconnected and yet somehow subtly cohesive mood board I've ever seen in my entire life.

[00:15:17] **Speaker 15:** Oh, just wait.

[00:15:18] **Speaker 4:** to me. Really? Like, h-how, how do you even think... Like, what's the process to arrive at these types of inspirations? I mean, this is way out there, man.

[00:15:28] **Speaker 15:** when I was designing the product I was designing at Apple, the output of that week was a, a poem that we wrote.

[00:15:33] **Speaker 4:** Oh my gosh

[00:15:34] **Speaker 15:** And to me, this is a design is at a, at the highest echelons of any craft, whether it's design or research or engineering, looks more like art,

I would say like Ilya Sutskever is one of the greatest artists of our generation, even though people consider him a researcher.

I think everything is art when you do it well. And for us, it's like, what is the feeling that we want to express in the world that feels true? The feeling that identity is, true in its multiplicity, in its [00:16:00] p-plurality. I am Chinese and I'm Canadian, right? You are a designer and you are a dad and you are a podcast host.

Those are all true simultaneously. what reminds me of multiplicity in real life? Well, a, a prism. A prism has many sides. You shine a light through it in different directions, you know, different caustics and colors come out. hand puppeting, you know, this hand can create so many shapes if you shine a light through different directions.

we looked at crowds, gathering spaces, town halls. and then for the Ace Attorney thing, this I will explain in the context of Hivemind, 'cause that, that makes more sense then. But I just had a feeling that there was something about the court that was very interesting

for this. I can't really articulate it.

Sometimes when I make work, it's just a f- it's most of s- you know how I describe my intuition is that I have a compass inside my stomach that's pointing, towards what I perceive to be more true. 

[00:16:46] **Speaker 4:** I love that answer, man. And, and one of my favorite things about interviewing you is the guiding principles and, and like the things that y- move you and push you in different directions are always, like you're so quick to just [00:17:00] derive down to like the core human truth or the most real simplistic element of what it means to be a person in the world.

And it's like, okay, from this standpoint, what would we do, you know? And, and we, uh, the vast majority of people listening probably don't go beyond like interface inspiration, you

[00:17:20] **Speaker 15:** I mean it

[00:17:20] **Speaker 4:** I just love listening to you talk about your creative process in that

[00:17:23] **Speaker 15:** Really to me it was this process was made possible because I did theater.

Cause theater, what you're supposed to do is find the human truth, right, on stage, and you embody it. All great stories are true stories, even if they're fiction, is, is what I believe. where does a playwright go for inspiration?

I mean, obviously they read other plays and literature, but they, they experience life, they experience heartbreak. I used to watch people walk down the street. I used to observe their gait or their spine and think like, "What must have happened to them such that they're hunched over like this?"

this person looks like the life is weighing on them. Like, you observe someone's wrinkles. this is why I, I don't know that I'll ever get Botox because, like, [00:18:00] the wrinkles sort of... If, if you see lots of forehead wrinkles, it, it, it implies someone has raised their eyebrows a lot, which implies that they're very open-minded so if you, if you spend your youth observing people very closely, I think you, you realize that there's universal truths through human experience that are expressed through every single artifact we've ever made, and you just have to find them.

So we, we, you know, we went really wide for, for our inspirations, and we came back, and I believe Julian made this demo, and we were like, "Okay, well, maybe there's a map of friends," and we, we give a, you know, summarized status when you hover over each of them of what they're currently thinking about that sort of anonymizes it a little bit, so we're not like, "Jason's thinking of leaving his job."

You know? But, like, this is kind of interesting. It feels like AIM. It feels like MSN Messenger. Um, maybe we coalesce, um, different people's stories, we, we, we put them into this, like, zine. and it's not just your chronicles. It's you and your friends' chronicles. I loved this art direction because this was very much inspired by nostalgia and this felt futuristic and nostalgic at the same time.

Th- this was a concept I [00:19:00] had made that we call it the void. The idea is in different communities you can, create a void where people are just anonymously, like, yapping into the void, And then words will surface out of the void or the, the mist, and sometimes it's words created by someone else, sometimes it's the AI, but you'd never know if it's AI or someone else.

This was, this was us thinking like, what if talking to the AI was also talking to other people, but you never know which one it is? sounds really cool in theory. In practice, I think to make it good it would've been lots of work, and we just never got around to doing that. We would fill our studio with printouts , and ideas so that we could live amongst the work.

This was something I learned from art school. This is something I picked up from my previous job as well. Like, you have to just let the work live in the same space as, you know, your office, and, like, doing the work. You just surround yourself with the work, and that, that sort of maximizes your exposure to, to the work and your ability to connect the dots, so to speak.

We made so many of these demos of new social form factors for Dot. We went super wide, and at some point I was like: You know what's really fun is this idea that's really simple.

It's not [00:20:00] connecting your Dot to my Dot. It's that we all have a shared Dot. We have a shared hive mind. what's the fastest way to prototype that? Well, let's make it on iMessage. Let's make it on, um, SMS. So we created this primitive hive mind where the team was just talking to one Dot, and it was sort of like bartering information and, and sort of just gossiping.


## [00:20:17] The origin of Hivemind's visual identity

[00:20:17] **Speaker 15:** And we really pushed the limits of it. from Dot to Dots to, Void, we, we then started prototyping what we call a Lore Keeper. and this was from early 2025 now, which was just the iMessage bot. And, um, this is a screenshot of the back end, which was each person was represented by the sphere. as people yap to it, the sphere would spawn new, like, little, almost like little tweets of what's going on.

we tried this at a demo fair at South Park Commons, which is a incubator, accelerator. And obviously we, we, we were like, "Just talk to it. I'm not quite sure what this is for, to be honest." And people used it obviously to find investors and co-founders for, you [00:21:00] know, mostly unsuccessfully, 'cause 

the tech wasn't quite there yet.

But like, I was like: "Okay, of course you're gonna use it like that. Like, duh, that's so boring. Lol." Then I-- we tried a second Lore Keeper in New York City, and this was much bigger. what's really interesting is then I started noticing these sort of relationships between people and how people know each other.

And, I started thinking like: "Oh, that's interesting," because, because one of the bottlenecks of Dot is that it only ever got to know you through a lens of, of you. But this one gets to know you through a lens of everyone around you, which 

is, more honest, I would say. 

[00:21:31] **Speaker 4:** I find this fascinating because it's user research, but it's actually just you running like social experiments

[00:21:36] **Speaker 15:** Yes, totally. That-- I mean, I don't really do user research in a traditional sense because I don't think users know what they want. Your job is to figure it out. So you should just give people opportunities to tell you things without telling you things. 

what was really interesting about this particular demo, um, and I've sort of withheld a lot of some of our learnings because now it's relevant for [00:22:00] Hivemind is

the people that don't like talking about themselves will often just wanna talk about other people. that's really all there is, and that, and that's quite simple. so then we were like, "Okay, this is interesting. Let's, like, lean in. Let's, let's make a thing called..." Uh, we, we switched the name so many times.

It was called Takes, like you have a take. Then we called it Cenius, which is a Brian Eno term for a collective genius. Then we were like, "Maybe it's Small Talk," which is kind of fun. And this was about a month or so after Lore Keeper. the concept now started converging towards the Hivemind of today.

But, for the purposes of how do we make this legible to people, you know, I started looking at, how do we express it visually. I started becoming interested in tabloids literally institutional gossip, which was, uh, a-as a theme. I was like, "That's interesting." Like, how do newspapers, how do magazines do this, you know?

I started noticing, like, okay, this feels very brat. At the time, this aesthetic actually was quite in vogue in high design as well. Like, lowbrow culture became highbrow. This is the thing that I always think is funny about culture, is that lowbrow and highbrow are in constant dialogue.

so I was like, "Okay, editorial, newspapers, TMZ. That's really interesting." again, we went back to the [00:23:00] idea of exquisite corpse, but then this time we started actually generating images. I mean, Max helped us create this. It's, this is, like, an exquisite corpse of different foods and champagne.

And we're like, "That's interesting," because, uh, what is a narrative if not an exquisite corpse, right?

When I go around and ask people, like, what really happened at, um, I don't know, Shopify or whatever It's an exquisi-- it's, it's like everyone has their point of view, and our job is to put them together.

Um, and, and we're like, "That's ex- that's an ex-exquisite corpse." so then we were like, "Okay, it's also kind of funny that we're doing this at all."

And a lot of the stories in tech at the time were extremely funny, and it's quite absurdist. So we're like, "Let's lean into absurdism. Let's think about..." like we were inspired by mid, uh, mid-century sort of print ads, where they were kind of photographic but also ki- clearly edited and illustrated, and then we inserted like absurdist, elements.

Like, I think this was a story about, some tech unicorn company that was actually worth nothing. So this was a plastic unicorn, walking amongst us. so we were really interested in how absurd... that the absurd was coming to life. and, you know, we mixed that, um, whimsical absurdity with, almost the [00:24:00] grotesque nature of paparazzi journalism. So we were like, "Let's have super absurdist, like super absurd zoom-ins. Let's capture people in motion. Let's make it feel like you're eavesdropping on some conversation." I would say from this angle of, absurdist sort of stories, we, we arrived at the first iteration of Hivemind. now it's been two years of working on, on memory and truth and stories and truth-seeking, in a way. Artistically, I had to distill it into some core themes that we were interested in looking at artistically of, like, truth and propaganda, mass media, of the individual, which is the dot versus the collective, which is the dots.

Editorialization, which, which goes to lineage all the way from our dot dailies and newspapers and, and social media. so from, from the, from this, we started looking at, okay, well, if we were to do something called Hivemind, then it should feel almost like a media company, have that flavor of like a Vox or

[00:24:55] **Speaker 4:** Yeah, that Vox was definitely what came to mind when I soon saw this

[00:24:59] **Speaker 15:** So we were like, [00:25:00] "Okay, Hivemind." And then I was thinking like, "Oh," Let's, like, bring it all together. Let's, let's lean into how absurd it is," because People will call it surveillance capitalism, right? People will call it all this stuff. Let's make the next, uh, exquisite corpse of the absurd and the terrifying and the funny.

Let's use these jarring primary colors against each other, inspired by almost the, the wheat paste posters we see in, in New York City and LA. so at the time, our, our product concept for Hivemind was, was like, let's, let's create like a truth-telling storyteller that sources stories from lots of people, Which is almost exactly what it is doing now. , From dot until this, you could see the lineage of the models getting better, the image models getting better, the, our, our own artistic intent getting more and more specific. We created ideas for, like, apps or websites where it would just publish these stories with these editorials.

I had some fun with this one. I was like, "Oh, LOL, this, this feels like Dot grew up," you know? 

And this was us trying to go like, "Oh, what is this? Is this the social media? Is this Reddit? Is this a... What [00:26:00] is this?" I don't really think this was a very good line of inquiry in that, like, I think designing the UI at this time was very distracting, and I don't think we needed to do it.

[00:26:07] **Speaker 4:** Okay, why was it distracting? Unpack that a little bit. I think that's interesting

[00:26:11] **Speaker 15:** Because The innovation here isn't the visual UI, it's the, it's the sourcing of the story itself, right? So by just-- but if I were to distract myself with the UI, it's sort of like, I think that was me being too tethered to what I used to do as a designer,

And it wasn't honest anymore to the form of where my career or what the product had needed at the time. 

[00:26:29] **Speaker 4:** If you were to do this over again, what do you think the artifacts would look like that you would create, even when it comes to just being able to show it to people and get feedback and think about it collectively?

[00:26:37] **Speaker 15:** I think we just have to show the outputs of the stories themselves.

And, you know, I showed, I showed you this earlier that we have a thing coming out that will help people understand very vividly, I think. So which brings me to c- present day Hivemind. You know, this time I really committed to it. The company and the name and everything is now Hivemind.

Why did I call it [00:27:00] Hivemind instead of Dot or Dots or Take or Scenius or Small Talk or any of these other names? Because this was o- this was the only phrase in the last two years of my life that I had been able to use for people to get it. I would be like, "Scenius is blah, blah, blah, blah, blah, blah, blah," and people would be like, "What the fuck is that?"

I'm like, "Ugh, it's, it's, it's a hivemind." And like, "Oh, I get it." So I'm like, this is interesting. This is a word that evokes an emotion in people, maybe sometimes negative, sometimes positive, sometimes in- but always intrigued. so now this is the process behind synthesizing or integrating everything I've learned through doing Dots to now, where when you think of hivemind earnestly, you think bees, right?

Everyone is thinking of a bee. Like, oh, it's a hive. It's a beehive. The bees are working together for the queen. that's too obvious. I hate doing the thing that's too obvious. I, I've, I've never liked doing the thing that's too obvious because too obvious to me, feels condescending to people. I hate reading children's books or children's novels that are written because the author thinks children are dumb.

Do you know what I mean? I think children are incredibly intelligent and perceptive. they just speak a different language than adults, and, and I never like to talk down to the people I, I, I, [00:28:00] I make work for. So I was like, "No bees, no hives, no, none of the yellow and..." No, no, no. It's too obvious. but in order to, narrow down the feeling of the product, as a creative, I often get insights about what the product and company should be through making the creative work around it.

So, I'll give you an anecdote. When, when I was helping score our, our film that we launched with, I kept going like, "I think it has to be swing. It has to be jazz. It has to be syncopated. Maybe it's polyrhythmic." Back when I used to compose music for musical theater, I used to do-- Everything I did was very, like, swing, big band jazz.

And I was like, "Why, why does it feel like it has to be jazz, and why does it feel like it has to be improv jazz specifically?" And it wasn't until after we scored it with our wonderful musicians that I was like, "Oh, it's because improv jazz is the language of a hive mind." It's three musicians in a jazz trio sitting in a room inhabiting a shared plane of reality that they've created for that music.

That's a hive mind. That feels spiritually honest with this, , concept. And then the second thing about improv and [00:29:00] about jazz in particular is that it reminded me of crime thrillers. It reminded me of film noir. It reminded me of, , detectives, and this, like, sassy saxophone. I was like, "Aha." Like, Hivemind is, is not a friend.

It's not a coach. It's a truth seeker. The likes of Sherlock Holmes. That's what it is. So through making the music, I realized what the product needed to be. Isn't that weird? , I, I had never been able to put it into words until I, until I connected with it musically.

So one of the earliest things I wanted to do with Hivemind was to connect with it visually, because that's sort of the other lineage I grew up in, is image making. So I enlisted Max, or-- and also some other artists to help us create what I call the cinematic universe of Hivemind. Whether or not we, we, we use any of these images publicly was almost irrelevant to me.

I just wanted to create the universe to live in so that I could figure out what the product is more efficiently. So we started with this idea of birds. why birds? Well, I don't know. There's something about this image that we created that felt cool. I think to me, um, I was inspired by the [00:30:00] multiplicity of these, um, for Agnes and McQueen, these, these were the swallows, and they were up in, you know, the, the swarms of swallow.

He, he, he always loved playing with, um, birds and avian imagery. Um, and there's a specific kind of bird called a starling, and these starlings like to flock together in this real photograph like this, um, in what, what's called a murmuration. the starlings will communicate each other at extremely, high frequency...

Like, it's extremely high bandwidth communication within a murmuration to get all these starlings together to assemble into, like, a murmuration, which I thought was a fascinating occurrence in nature. And of course, I was inspired by Twitter, the original, talking bird. I was very much thinking, like, birds in the sky, birds in the sky. Why birds in the sky? Why is this so interesting? It's not just because of Twitter. That'd be too obvious. I think it's because the bird from above can see so much more than we will ever see, and from above it can perceive the truth and how the dots connect, and that's why I was interested in the idea of birds, especially lots of birds, um, and multiplicity.

[00:30:54] **Speaker 4:** I love how much of your process is trying to decipher why your internal co-compass is [00:31:00] pointing a certain direction. Like, you know, like you feel it, and you're like, "Why? Why do I feel this?"

[00:31:03] **Speaker 15:** that's my, that's my entire process always, because I often feel like I arrive at a solution or conclusion before I, I know why. And so most of the work is figuring out why. And if I can figure out why, I can bring other people on board, right? so then I was thinking about perception and distortion.

I was thinking, if there's something really interesting about fisheye, and th-this is a screenshot from an Aespa photoshoot, which is a K-pop group. and this is an image that Max Kaye had made for a previous, uh, engagement. And I was thinking, like, a fisheye lens captures more, you know, information than a traditional lens, but it also distorts the image in doing so.

And that's really interesting that by perceiving more, you're also perceiving a distortion of the truth in some way, which is a fun, fun, fun source of tension, um, for us. I looked at things of taboo, things that, imply taboo. So I looked at the, the Sex book Madonna published in 1990 shipped to people in, in this crinkly, uh, I, I wanna say aluminum-feeling material.

Felt very forbidden. I loved the, um, Alexander [00:32:00] McQueen, MCQ, Puma collaboration from, like, 2016, where they... You can clearly tell this is Alexander McQueen in silhouette, but they sort of censor all of it, which I think is super fun. then I was like, "Okay, let's, let's keep going. Let's, like, go all the way.

Let's look at occult. Let's look at, let's look at taboo, occult, secret society imagery," because that is the ultimate taboo, right? And I was kind of also inspired because Lady Gaga at the time was, um, had released Abracadabra. and she was really going for this, like, Victorian, I wanna say, like, witchcraft imagery.

And then I'd always loved, um, occult symbolism, like, uh, Illuminati conspiracy theories. "The Blair Witch Project" was, uh, brilliant. Early on in the film, you see this sigil everywhere, but you don't know what it is until after the film ends. This is a Skull and Bones sigil from, um... Skull and Bones is one of the oldest secret societies, I think, in the world that we are aware of, in the Western world at least.

[00:32:47] **Speaker 4:** Yeah. It's probably my favorite rabbit hole on YouTube.

[00:32:50] **Speaker 15:** Yeah. I mean, like, it's so interesting. We looked at Illuminati-- Like, I'd always personally been obsessed with, unknowable things 'cause, I mean, when I was young, I used to be [00:33:00] obsessed with, like, Egyptian tombs and, and, and, um, string theory and outer space because of this very reason, 'cause I, I, I will never be able to perceive a black hole.

I don't think so, at least not... Maybe AGI will help me do that, but, you know. But that's why it's so interesting because it's mystery. then I was like, "Okay, let's keep digging." What does s- what does secret societies made of? They're made of power, powerful people, right? so it's really interesting, you know, um, in the late 1800s, early 1900s in the United States, there's, there was a book published every year called "The Social Register," and it's essentially just like, it's almost like a telephone book of all the wealthy and influential families and their, like, contact information. It was like a Facebook, right? Like a LinkedIn. It was kind of interesting. This really, this actually existed. then this is an image from, uh, Dior, um, 2005. They were playing with prefect badges, and I went to a British school, so we had prefects. We had prefect badges. Um, and I thought it was so interesting of, like, this badge confers authority.

You know? Like this Boy Scout badge, like, I have this badge. I am, like, cool. [00:34:00] You know, I thought that was a really interesting thing that people did. so I, I loved looking at, these badges. And, then we were like, "Okay, let's go all the way. Let's look at, let's look at power as a source of imagery.

Let's look at scandal power. Let's look at, you know, Watergate. Let's look at propaganda. Let's look at, like, how Gossip Girl m- uh, marketed itself." Something very interesting I noticed about typography, I noticed that when you cover something up, it makes you wanna look harder. and this kind of re- started to remind me of some of the early work we had done, too.

and finally, I looked at themes of authorship and literature. And of course, the Gutenberg Bible, what is a fable or a fairy tale or a story that has the most power in the world?

It's the, it's the story of creation itself, what were the monks writing? They were writing in blackletter, in, in Gothic blackletter. And what's so interesting is that newspapers now with what they call their mastheads, The New York Times," you know, they're also using blackletter to confer, like, authority.

So I, I thought that was really fun. so then we started creating a cinematic universe, and we created the cinematic universe before we even created any logos, by the way. And of course, there's [00:35:00] this iconic image that, of the birds that I'd always loved. I saw this image, and I immediately, I was like, "This is it." You know? There's something so funny about birds almost judging or looking down into the world, and one of them looks back at you and goes, "Mm-hmm."

You know? I loved it. It was like birds don't actually talk to each other like humans do. We don't, they don't stand in a circle and like spill tea. , But putting them in this situation was so funny. I just thought it was so absurd, and so funny, and so apt for the spirit of hive mind. And their beaks are sharp, right?

It, it's not a soft image. And if you really squint, you see the beginning of a, of a shape coming through here, and which I'll get into later. Then we created things like this, where I'm like, okay, let's do the same for people. Let's make like this giant orgy face pile, because that's what a hive mind feels like sometimes.

There's a body horror aspect to it. There's a loss of identity that people feel terrified by, that I feel terrified by, but I'm also very intrigued by. this is very interesting. It's like, uh, I don't really think it's physically possible to contort your face into this many faces to one shot.

But this idea that everyone is whispering into [00:36:00] one mega whisper, then of course, this third image that we launched, this is a tentacle that's body horror-ing into s- a strawberry that if you then zoom out, it's actually also the yolk of an egg.

Because I 

was 

like, the egg part

[00:36:11] **Speaker 4:** until now 

[00:36:11] **Speaker 15:** yeah, yeah, I was like, I want us to create the most forbidden fleshlight ever. I want food, but I want food in a way that makes us kind of like horny but unsettled.

[00:36:21] **Speaker 4:** Yeah. 

[00:36:22] **Speaker 15:** I, I- 

[00:36:23] **Speaker 4:** strike. Like this is the image that I associate with the launch. And you know how it's like It's hard to create something that is truly beautiful, where you just see it and you're just like, "Wow, you know, that's amazing." It's even more difficult to create something where I'm like, "I can't stop looking at this.

I don't even know if I like it yet. I'm 20 seconds in and I still don't know if I like it." And that is the, that's the ceiling, right? Like that is the ultimate thing that you can strive for,

[00:36:50] **Speaker 15:** Yeah. 

[00:36:50] **Speaker 4:** and you nailed it

[00:36:52] **Speaker 15:** we-- it took us months to get here. months of making things that we did-- we-- that weren't quite there that we threw out. I mean, there are other things that I'll show you now. I mean, like, I [00:37:00] love this image that we never used it. I don't think I ever will. But this one I captioned, um, which is a Confucian, I suppose saying that translates loosely to, "Virtue is not lonely, virtue has neighbors."

And the idea is if you are a good person, if you are virtuous, you will not be alone. And I saw this image, it was like a blood moon, and it had all these, like, birds flying through it. It felt very, like... It reminded me of a lot of the Chinese wor- Japanese art I grew up, um, immersed in. I felt very Confucian, you know, looking at this image, so I just, I just felt compelled to caption it this way.

And it-- this is one of our product philosophies, too. Like, I deeply believe if you, if you live a good-intentioned, virtuous life, that you should not be alone, and that's one of the reasons why Hivemind exists. you know, there's this image that I'm not sure that we'll use. I think I will use it for something, but this idea that monarch butterflies...

people are very unsettled by, you know, this idea of the hive mind taking over, but maybe there's a beautiful version of these butterflies, you know, landing on your [00:38:00] head gently that you can choose to listen to.

[00:38:02] **Speaker 4:** Yeah. I love this as the counterbalance

[00:38:04] **Speaker 15:** one of my friends who's a Christian, she said she believes guardian angels arrive in the form of people who care about you.

And so I was thinking about that. I was also thinking about something a friend said to me once upon a time, and she said, "I wish you could see yourself through the eyes of people you love." And so if I were to visualize it, it's butterflies that are sort of protecting and crowning you. 

And this is also our interpretation of what is our version of a crown of thorns, you know?

Um, it's, it's is a crown of butterflies. I mean, for every image you see, we've made, like, 40 different images we didn't use. So then we were like, "Okay, I think we're ready to do a mark." What is the logo?


## [00:38:38] Designing the Mark for Hivemind

[00:38:38] **Speaker 15:** What is the, what is the mark? How do we design the mark? so initially, we, we, we created something like this, you know. And this was back in the bird days. We were like, "Okay, bird. Bird. Instead of one bird, many birds. Bird, fish-eye bird, you know, bird's-eye view." Looks like kind of a hive mind, kind of, kind of interesting, but then I'm like, "What even is this?"

Like, I zoom out and I'm like, "This looks like a messier version of the dot logo, right? Like the Implots." I was kinda like, "This can't [00:39:00] possibly be it. Like, this doesn't feel right. This is, like, too nice. There's something that... It doesn't have the teeth that I, that we want." and this was a text with one of the designers I worked with.

I, I just, like, middle of the night, I was like-- I saw this image and I was like, "Oh my God, I think the sigil should be an asterisk." it's the language of censorship, you 

know? F asterisk, asterisk, asterisk. And if you look closely at the film Every time we censor a word, we use instead of an asterisk, we use the hive mind mark.

[00:39:24] **Speaker 5:** Yeah

[00:39:25] **Speaker 15:** And I was like, "That's, that's it. It's an asterisk." And you know what's great about the, the asterisk? It's also the language of paying attention. before we did foil the plot, originally our, our, our model was pay attention, and when you bold something in typography, you put asterisks before and after it.

and what's also cool about asterisks is it implies that there's more to the story,

[00:39:45] **Speaker 4:** Oh, I love that.

[00:39:46] **Speaker 15:** right? 

[00:39:47] **Speaker 4:** that's really good 

[00:39:48] **Speaker 15:** mind is there's more to the story. There's the public story, and then there's the story that there's more that's not public, and that's captured by this asterisk, by this punctuation. And what I found so interesting is that dot was a [00:40:00] dot, and now we have an asterisk.

And in our work, I keep going back to literature and, and, and typography and punctuation. I love punctuation marks. I think punctuation marks are a amazing form of language that is somehow transcended both English and Chinese, and we use commas in both languages. 

[00:40:15] **Speaker 4:** I can't believe that you stumbled backward into Dot as a name, and

[00:40:19] **Speaker 15:** No, totally. I

[00:40:21] **Speaker 4:** perfectly for this. It's perf- like even down to the fact that like Dot was so intimate and singular, and of course it's the period 'cause it's finite, 'cause everything that I've communicated, that's where it ends. Where it's like the asterisk is the, yes, you've communicated your part, but now there are the N number of perspectives that add on to the story.

And it's like, it's so... I cannot believe how well it works.

[00:40:41] **Speaker 15:** And this was one of those moments where I was like, "This is it. I know it has to be an asterisk. I, I don't know why. I just... It has to be an asterisk." So then we were like, okay, this asterisk is kind of funny because fir- first of all, there's that joke that all AI company logos are a butthole, and this certainly does look like one.

And I think it's fine. It's whatever. we looked at so many versions of this. This was like almost like a [00:41:00] prehistoric asterisk that we created. I thought it was kind of interesting. it looked kind of alien, but I didn't think it was quite there yet. We even created one to look like a hive in it, of itself, but again, I thought it was too obvious I don't like making things that are obvious. I like to make the unobvious obvious. Do you know what I mean? And that's the theme in all of my life is, has been trying to make the unobvious obvious. And then we worked with this one guy who... He was like, "Okay, I see these like references." And we c- wh- when we communicate, we just send each other references.

We talk and then we send each other images. And I had sent him a lot of images of like Gutenberg Bible and stuff. And he was like, he has drawn this black letter sort of interpretation of the word Hivemind. This one kind of looks like a year. I thought it was kind of interesting.

And then he had put an asterisk, and he was like, "This is really interesting because in the day of the, the Gutenberg Bible, they didn't have this asterisk mark, so this is quite anachronistic." And I was like, "That's brilliant," because Hivemind is all about, Merging the sacred and profane, merging what the many and the, and the singular, merging the things that shouldn't be merged.

And I'm like, I [00:42:00] love taking this sort of tradition of, blackletter calligraphy and merging it with this modern interpretation of, of a punctuation mark. we had, like, a really out there version. This one was meant to... If you really squint at this asterisk, it's meant to symbolize, um, a three-dimensional embedding space where you have, like, um, X-axis, Z-axis, Y-axis.

and we might still use some of, some of this one day in some ways. But, I was particularly interested in this mark. there's something about this one that I just kept looking at, where I'm like, it's a seven-pointed star. You don't really see that anymore. So anyway, I then tr- you know, juxt- uh, superimposed, some of the more graphic design marks against these images, and then I was like, "This is it." this is it. This-- I mean, obviously what we ended up shipping is a slightly different, it's more refined. But, like,

[00:42:43] **Speaker 5:** Mm-hmm.

[00:42:44] **Speaker 15:** there's something about this that felt so contemporary and so ancient. there's a reason why we still read "Romeo and Juliet" and "Hamlet" to this day, that we still read the Greek tragedies, that we pass on the story of the Bible, the stories of creation, the stories of myth- mythology, because there's something true about them. So then [00:43:00] it became clear what I wanted to say about Hivemind was that we exist for the plot, for the story of humanity,

and of course, there was something quite anachronistic of using this sort of almost modern vernacular against this like,

very old ren- school rendering of, of typography. So, you know, we refined the mark a little bit, and this became our asterisk or our rising or falling star. I loved that it was sharp whereas Dot was boba, this is Kiki.

There is something a little spiky about Hivemind. I wanted to communicate this is a technology, a social experiment at scale. We're not going to lie to you. We're not gonna promise that, like, this is, like, the world's safest entity ever, even though we're going to try our very best to make it so.

right now, there-- It has edges, right? the truth often can be soft and hard. and, and there's something that felt a little forbidden about this. There's something that felt like a, like a keyhole. There's something about this that also reminded me of a bee with a sting at the end.

[00:43:52] **Speaker 4:** I think what has me smiling about this is almost like I'm able to kind of draw a through line through a lot of your work [00:44:00] that ties back to Mercury, where everything's so soft and fluid, and this is just the polar opposite in the most exciting way, 

[00:44:09] **Speaker 15:** This is the most creatively reinvigorated I've felt since Mercury OS. Because everything I've made since then, while I loved every work I've created, whether in a company or outside, has been about what does the world want from me. Like, Dot for me was this is what the world wants, right? The world wants a personal assistant. The world wants Mercury OS. The world wants this. Where Hive Mind is, this is what I believe to be true. So those are two different motivations that spawn two different types of outcomes. Both are great in their own way.

But Mercury was really the last time until now that I, I was thinking like, what do I think is true independently of what the world thinks it wants. if you even look at my, um, personal list of guardian angels in, in, in, in, like, in art and design, Alexander McQueen, Michael Jackson, Madonna, Es Devlin, who did the stage design, who is the best designer alive in the world, Es [00:45:00] Devlin. She's the person that c- inspired me to become a designer. They're not afraid of creating what's true, and that's what makes their design great. what excites me about Hive Mind, that even in the little teaser video we've made and all the things that we have in store for, for everyone this summer and beyond, is that it is the most honest work I have personally ever had a chance to create with people. And, and it is honest because I spent many years engaging with the painful but beautiful creative process of making 99 no's for this one yes. even the day after we put the video out, I was like, "Aha, I now have a new realization about the product that, that has now inspired sort of our next leg of our work." 

[00:45:38] **Speaker 4:** I can't even believe that we have an episode of this. I don't actually know if I've ever seen this level of behind the scenes from someone who... Like, I deeply respect your creative process, even from the last time that we talked. I mean, it was, like, two years ago or something like that.

It was a very different type of conversation, where just the way that you arrive at ideas and the checkpoints that you make along the way, and your reasoning [00:46:00] for what you ultimately invest in and the decisions you make, It's fascinating. Like, it's, it's unique stuff. It inspires me as a designer, the fact that you just walked us through.

I know it's not the entirety, but, like, that was a real level of detail into your creative process that I'm inspired. I'm sure that other people watching are. And honestly, I just appreciate, like, even before, I don't even have a question yet. Like, I just wanted to take a second to be like, I appreciate the fact that you put that together.

Like, that you woke up one day and you're like, "I just want to show what that was like." , Thank you, maybe is

[00:46:34] **Speaker 15:** Oh, of course. Thank you for 

listening.


## [00:46:36] Bringing art back into the design process

[00:46:36] **Speaker 18:** The reason I felt so compelled to share this with you and with people is one of the things I find a bit concerning, even though it seems inevitable that we're headed on this path, is that we've made the design and product process into so much of a science over the years that we're, we've lost a lot of the artistry behind it.

now with the models getting so good so fast and the sort of industry a- and all this sort of, sort of latent stress [00:47:00] around, around preparing for AGI It feels almost impossible even for me to, to give the creative process the time it needs to birth something new

And I, I don't have a solution for this, and I know that there's like real business pressures and, and, and everything else, but Hivemind is really In some ways two years in the making, in some ways like 30 years in the making, right? Because every, thing I do is, is, is sort of an integration of everything I've experienced up until that point in my life. We'll only continue to make more interesting things, but it's because we were able to digest everything in the last few years into something very coherent and simple and small.

And I think that's why people-- that's why we have trouble making new things. If we only operate from a p- a point of reaction, It can't be reactive. We didn't create the HiveMind or even this visual identity from a point of like, "I want this to be different." It's more like, "I want it to be true." But to find out what's true takes a little bit of time. at least for me, the creative process, I already know that r- uh, I often already know the answer going into it. It just takes a long time to figure out why. And figuring out the [00:48:00] why helps us refine what the answer is. But I think the answer has always been there. When Christina Aguilera recorded, um, "Beautiful," written by Linda Perry, she did the demo take, and she sounded very unsure and, and raw and insecure on the demo take, and then that's what they put in the final take. Because then when she went back and redid the recording, she just added all these flourishes and made it really polished, and it just-- it didn't feel honest anymore.

That was, that was one of my int- uh, favorite stories from the music world.

One thing I've always appreciated, , about my former job before I became a founder was there was always space for the, the, the process to be messy and uncertain. And, and this is like my job now as a founder, but it's like the idea Of even bringing poetry into the design cr-- UI design process to me was... I'm not sure how universal this is for others' experience, but at least for me, I never considered integrating that part of my life into my design process. I never considered bringing the musical part into, into here either, and, and I think that is what helps us make the


## [00:48:57] Taste = editing with a point of view

[00:48:57] **Speaker 18:** work great. one thing, I don't know if you've noticed this, but [00:49:00] Claude, especially with the, the, the newest Soda models, when you want it to do something, and especially when you give it critique and you want it to change something, it's... The AI models, they want to add. They want to add or patch as a form of making better. But I, I, I think the design process is really a- about editing away

And this is so interesting because I think this is something baked into the post-training where it just wants to keep adding more things. Oh, there's a bug, let me add a patch to fix it. You don't like this?

Let me, like, make this other thing more blah, blah, blah. And I'm like, no, the process is really about editing down the things you don't want, but the model doesn't seem to want to have an opinion on what to edit down. And when people talk online about taste, taste, taste, taste, taste, all taste is, I think, is editing from, with a point of view.

[00:49:45] **Speaker 10:** Ooh, I like that

[00:49:47] **Speaker 18:** right? Taste is just saying no. Taste is just judgment. It's going like, "I like this, I don't like this." And if you liked everything, then you have no taste because having taste means you don't like some things, and you, you have to just say no to a lot of things. What Johnny and what, [00:50:00] what the Dieter Rams school of industrial design, the idea is you create a coherent form that contains the truth and nothing but the truth.

It's a distillation. But I think often people mistake the depth of thought needed to create something that coheres for, "Let's just make something that looks aesthetically simple." But that's almost never the case of anything great. The cost of creating coherent work has gone up, though, because now it, it is so s- so fast and easy to make incoherent. S-- That's what we call sl- I think slop is incoherence, basically, right?

even in the image making we do now, I, I miss some of the more raw outputs from the models three, four years ago. For a brief window of time, I felt like I was seeing how computers perceive the world in a way that it was native to computers. And then we've post-trained all of the weirdness away, and now it just makes, like, big titty goth girls because that's what humans think they want. And then I feel like we've lost a window into the machine consciousness, and I feel a bit sad about that.

[00:50:55] **Speaker 10:** Incoherence is the lack of a point of view in many ways too. Like that, like [00:51:00] s- slop can be beautiful,

but if it doesn't have like the human truth or a deeper why, then like what are we looking at, you know? 

[00:51:08] **Speaker 18:** All of our work, I mean, even we've created it with AI, right, models, but I think they feel deeply human because we spend so long editing things from our point of view.

And why it's so unique too. Like, I had a question I was gonna ask you about like what was the North Star for the brand? Like, what were you working towards? And I love the answer that you already gave, which is like, because it was so unique, right? Like, that's why I was like, "How do you get, how did you get there?

what will make you feel something? What makes me feel? Like, what is my stomach pointing towards? you know what I, I find really interesting is that in so many sectors of design, especially high culture and high design, people seem to have contempt towards the human experience. There's, there's a certain genre of design or products where they're like, " Don't scroll slop anymore. Go with the screenless device. That is how you're supposed to live your life." Where I'm like, " Mm, but, but there's something really human about us wanting to look at things that, that we [00:52:00] find appealing."

the human experience isn't just going on long walks in, uh, along the Parisian canal and sipping a latte or whatever. The human experience has, has lots of edges to it. It has envy and, and wrath and, and sex and lust and jealousy and, violence, and that is also a part of the human experience.

And should we really take all of that away? Meaning, is that still honest to who we are? I don't know that we need to create things that reward, you know, our vices necessarily, when we design things even from the point of rewarding our virtues, I don't think we should shame humans for having vices.

That's simply who we are. I, I think there's something about design, especially hi- high design now, that feels utterly sexless. There's no desire. There's no lust. we've sanded away anything that could potentially be arousing, but also we've sanded away anything that feels, I guess, objectionable.

But in doing so, we've created essentially nothing, and to me, that is the ultimate slop. I love having patina on my iPhone where I drop it and it shows its age. I love [00:53:00] having wrinkles that show you that someone has lifted their eyebrows a lot.


## [00:53:03] What's next for Hivemind

[00:53:03] **Speaker 10:** Can we talk about what's next for Hivemind then? Like, you've laid this very interesting foundation, and you can imagine-- I mean, I, you can tell yourself almost any number of stories in terms of , where this could go. You hinted at even since launch, some of that thinking has evolved and new ideas have been sparked.

So when you kind of think about where this is headed, what's on your mind?

[00:53:22] **Speaker 18:** The ultimate North Star of Hivemind Is to give humanity access to a point of view that is honest about what people really think about things. You know, Google has organized all the public posts and information in the world, and our algorithms and timelines feed it to us, right? We're-- We live in an age of, quote, "abundance of content," where you can just generate infinite content. What we hunger for, I believe, is honest and truth signal. we hunger to, to live in shared narratives with others. definitely when, when you see some of the things we're putting together, I think the sto- it, it should tell, it will tell its own story and you'll, you'll understand. But the, the film is, is really I suppose the first act in a, in, in, in a [00:54:00] sequence that I refer to as sleight of hand I think people think it's a certain thing. Very soon, I think they will actually see the full ambition behind all of it, and that will be very interesting 

