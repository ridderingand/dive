---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: MHcJpGYawqk
slug: 2025-09-26-escha-vera
source_type: descript
source: https://web.descript.com/0ec7f6ce-37c1-4699-8cc1-ea742cfb805b/dc570
guest: Escha Vera
host: Ridd
title: "Designing Perplexity’s Comet browser"
published: 2025-09-26
duration_min: 54
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] 


## [00:00:00] How Escha got to Perplexity

[00:00:00] **Escha:** I left E-script and I kind of felt like maybe my career is over. I had spent so, so long on one product that I kind of left feeling like I did myself a disservice by doing that.

and I felt un unhirable for whatever reason,

so I spent, I spent like a year just talking to CEOs and other companies, startups, like trying to figure out what I wanted to do, if I even wanted to stay in the AI space, or if I kind of felt like it was time to distance myself and just go back to the regular grind. and I didn't really find anything that felt good.

Like either I got bad answers to questions I had about ethics or just like the way that they were approaching the integration of AI into their tooling or whatever it was, or they didn't have answers. And that made me uncomfortable.

so I know or Sole, I know him early on from from DS script. I reached out to him and asked him if there was any companies that he knew that was kind of looking for someone or someone that might be a good fit for me. and that's [00:01:00] why I got connected with Daylight as well. but he had just sent me an, an intro email with Henry of like, Hey, founding designer to founding designer, y'all should know each other. and that was like a year before I joined, so we just had some casual correspondence at the time. Henry was focused on building up the brand team and I said, Hey, whenever you're focused on product, hit me up, let me know. about a year later after kind of spinning the wheels on Daylight stuff, working on, on the os, and working on Motif, reached back out to Henry, he was ready and looking for product designers. I got all the right answers, the questions that I wanted surrounding like ai, how it's used, Just like all of these gritty details that I care about a designer who's like putting my name behind the products that these companies are pushing out. and I asked Henry, Hey, like, do you know what I'll be working on?

Like, is there any research I should be doing? Like is there anything I can get started on like ahead of my actual start date? And he was like, yeah, [00:02:00] maybe, maybe some desktop stuff. And I was like, okay, well I don't know what that means. That doesn't really mean anything. I've been doing desktop stuff forever.

So it's, it's whatever. I guess I'm going in blind. and the day I joined was the day they announced comment.

[00:02:13] **Ridd:** Wow.

[00:02:14] **Escha:** I didn't even know about comment until I woke up, started working, saw the announcement on Twitter, and I was like, oh, that's really interesting. My first meeting with Henry, he was like, Hey, so I started like very early stages of this browser thing. but do you just want the keys to like own this? so that was very cool. It was very, I mean, just so honored to, to be handed, a product like that. 


## [00:02:37] Creating the Comet design system

[00:02:37] **Ridd:** maybe we can just continue on with the journey a little bit. You used the phrase, being handed the keys. It's a pretty big deal. What the heck was that first month like? That's a big time ramp up process. Like where do you even start as a new designer, new team, and Oh yeah.

You've now inherited this massive product that has this whole hype cycle attached to it on Twitter.

[00:02:56] **Escha:** from the outside looking at perplexity, it's a very [00:03:00] polished product. I mean, it has some cortex, has some bugs, there's some UX things that could be better, but, but overall, it feels not like 20 designers are designing it. It feels like a small team. there's a lot of just continuity and consistency.

So my first instinct was, all right, I'm gonna go through Figma files and find this design system. I'm gonna find the pieces that I could use to just start roofing on ideas. Quickly found out there, there is no design system, at least in Figma. maybe this has commonplace, but I've never worked anywhere that operated like this.

But code is law that the design system is, is in the code. a lot of the designers here are actually contributing directly to front end. so that was, that was interesting just kind of realizing, okay, there are Figma files, but everyone's kind of just making their own components as they need to fulfill a design. you know, everyone has taste and just like common sense and they can pull from what is on the web, but it's really like screenshotting and then [00:04:00] like making the component based on what's on the web.

and that's probably fine for perplexity core. Because it's, it's a web-based product. Comet has a, has overlap between c plus plus code and the web, and it's two different teams. And the web team kind of has what they need and they have the, the, the sort of infrastructure they need to be able to build out front end UI'S But the c plus plus team didn't have anything. they needed mockups. they needed pixel perfection. They needed prototypes. and so I started by just making a design system.

Like I, I, I made it for myself because I needed something to quickly iterate, on the c plus plus and like the, the core browser chrome pieces. and the team kind of saw that and was like, Hey, this is sick. Like we could totally use this for perplexity. So that kind of exploded.

Uh, the, the scope of that from a comment design system to a perplexity design system that kind of has. Continuity between the two, they're literally the same system.

[00:04:59] **Ridd:** And is this Figma? [00:05:00] Is this code, is it both?

[00:05:01] **Escha:** it's both.

So it was majority of, like, my work was, was in Figma, working primarily with Chio, who's kind of one of the all stars here, on front end and just design and taste in general. so I worked a lot with him on the front end side implementing changes to the web-based design system. so just like making small improvements. But it was a really cool process because it was just me and Shori

just making the calls and pushing the code. working at Perplexity is kind of like that, like consistently. most of the time when I ask what if. What if perplexity or comment could do this? And most of the time the answer is cool. find the time, find the bandwidth, make sure you're managing yourself, but just do it. you'll hear the words like phrase high autonomy, high ownership, high responsibility, high impact. and it couldn't be more true, the design team in general is just given so much trust, to not just propose a design solution, but to actually [00:06:00] help implement the thing. 

[00:06:01] **Ridd:** How far did you go into the design system direction, especially as I'm sure there's probably some pressure to ship real screens quickly given the amount of surface area that you have to take on. So I'm interested in that intersection point, like where's the sweet spot, where the design system is contributing toward the output and tempo of what you're building versus over architecting something, getting kinda lost in the sauce a bit.

[00:06:28] **Escha:** most of, like what is in the design system in Figma is just the core atoms of components. A text component that's used inside of a button component, list item components, which have an icon component, you know, just like

building up the atoms of the core component so that we don't actually have to componentize the bigger pieces.

Those can be just left alone and be flexible and like up to the discretion of the designer to make it work. just establishing principles and the logic for like padding and spacing depending on the surface area. So there's like [00:07:00] surface area logic that's just, you know, baked into auto layout within Figma. so it was really just the, the whole point was setting up. Components that can just, any designer can easily use without having to remake it every time. having a source of truth for that instead of having to dig around design files to try and find something. and just providing the guidance for how to put a design piece together.

Like for me personally, I put padding into the components themselves so that when you're laying out the design, you don't have to worry too much about, the distance between a piece of text and, a button below it. You're, you're gonna get that padding for free baked into that component. And it's gonna be divisible is of eight, sometimes four or two for like a micro unit, but 8, 16, 24, 30, 2 40, we don't really have to even think about that. It's just baked into the system. Obviously doing that work on the coating and the engineering end as well. making sure that tokens are named the same, really doing our best to make it a one-to-one [00:08:00] so that even a new engineer could come in, look at a design in Figma, being able to inspect it enough to see what components are being used, what color variables are being used, and then use the design system on their end to put it together.

And they don't even have to worry about padding. They get all that for free. there's also another piece of that, which is like prototyping code. I'm personally still trying to figure that out, like what's, what's the best way

to, to do that? I've tried so many prototyping tools they're all okay. most of them are geared towards mobile interactions. Pretty much all of them are okay for like transitions or states, but aren't great for like complex user flows in a desktop environment.

so what I've found kind of just is working the best right now is Claude Cursor and Claude,

[00:08:47] **Ridd:** Can you go a little bit deeper on that part of the process for you?

[00:08:49] **Escha:** so far the process is putting together key screens in Figma using Claude or Chris, her to kind of describe the thing I'm trying to prototype. Using those [00:09:00] screenshots to actually build the initial front end. it's not perfect, but it's either close enough or It's easy enough for me to go in and fix the HTML and CSS or something to,


## [00:09:12] Prototyping in code

[00:09:12] **Escha:** to actually get that right. and that's been really helpful for flows that require text input, dealing with a, a suggestion list as, as a, with type ahead, also just figuring out like quirky ways of, of getting things closer the engineers. for instance, the landing screen for onboarding within comet with the sort of rotating planning. that should probably be a 3D object. and it will be eventually, but press for time, press for resources, I ended up using Perplexity Labs to, to make that, I basically just took a a branded texture for the planets that we had, made a version of it that was seamless. used perplexity labs to just describe like, Hey, I want a spinning orb in the middle of the screen on a white background. Add a button to be able to like, swap out the texture, add some controls so I could play with [00:10:00] lighting, and add a button to export a 360 degree video.

and, and that was that. And I just exported that video and cropped it. And that's literally what ended up being put into production. And I did that. It took like two minutes. it's kind of hacky, I guess, but it, it works and I'm constantly learning. what the boundaries and what the limits are for, for these tools. Like kind of working within the tool to figure out where the edges are and doing my best to like try and push that. but once I feel like I've kind of dropped that or built the skill and into how to, how to communicate with the tool to get what I want, then it's like, okay, well what other tools can I put into this workflow to actually do even more than what I'm limited to within this one thing?

[00:10:43] **Ridd:** That's the key word that I keep coming back to is workflow. for the first time in a long time, it does feel like there are many different tools that we can pull from and stitch together into this workflow to create an artifact that previously, I think about those like planets that you made.

They're [00:11:00] beautiful, right? That would've clearly set outside of my box of potential deliverables as a designer a couple years ago, there's just no way I, I wouldn't be messing with that type of artifact, and yet it was really special, right? Like the amount of times that I saw that celebrated on Twitter in the week that you released it, I lost track and it's so cool to hear that that was you just saying, you know what if you know and just hacking something together.

[00:11:25] **Escha:** I can't take full credit for making that texture, right? Like I, I kind of took what we were working with and, and edited it and manipulated it in order to work for that context. But it's kind of one of the, the beautiful things about perplexity, again, I'm probably gonna say this a lot, the the brand team is so good

it's all just the design team.

Like the separation between the brand team and the product team is, a waist high wall. There's so much collaboration and communication between the two teams. Like I'm contributing a lot on the brand side even though I'm just a product designer. but having the opportunity to, to work with brand designers in that way, [00:12:00] instead of it just being like a handoff, Hey, we need some marketing materials, but

[00:12:03] **Ridd:** Mm-hmm.

[00:12:03] **Escha:** pinging the, the brand Slack can be like, I'm working on this thing.

Does anyone have any assets? Does anyone have any ideas? Does anyone have bandwidth to jam with me on this?

[00:12:12] **Ridd:** I mean, that's the dream. I finished interviewing fee and was immediately like, man. I wonder what it'd be like to have a fee to work with, because I'm sure that I would look like a better designer as a 

[00:12:22] **Escha:** It's amazing firsthand. It's, it's incredible. fee is a godsend.

[00:12:26] **Ridd:** Let's talk about the onboarding a little bit. That was one of the things that I wanted to dig into because it's so creative, art direction, everything. Obviously the brand team played a role too, but talk to me about that process. Like where did you even start thinking about what is the best way to onboard users?

What types of feelings do I want to evoke? How'd you land where you landed?


## [00:12:49] Designing the Comet onboarding

[00:12:49] **Escha:** It was no different than any other typical onboarding like design process at the start. Just figuring out what's the key information that we need to get from the user in order to [00:13:00] make their first experience when they actually get into the browser as good as possible. so that's things like importing profiles from other browsers, starting with a, with history is gonna make your, your answers so much better.

'cause it has all of that context. the initial setup, like what do you want to name this profile? Pick a, pick a theme color. setting the browser as default, which is kind of a tall order and a high ask. The reality is it's a really lightweight action, but, it's not perceived as one.

but it makes a huge difference. And just the retention and the overall quality of your experience trying a new browser. and so just getting those in place, making sure that we don't have too many screens. The more screens you add, the more kind of drop off you have. Although it might be a little bit different with a browser.

Like if you've gone outta your way to like download the browser, you could probably get away with a few extra steps. But I really wanted to keep it like as minimal as possible. once we had that, it's like, okay, well this is kind of boring. I can, play with the styling a little bit, but It feels like product onboarding and I [00:14:00] really wanted it to feel like something special.

Like, like, 

[00:14:04] **Ridd:** like an unboxing moment for 

[00:14:05] **Escha:** yeah, just the idea to put music in

like that, that wouldn't have happened if I didn't just make it happen. the intro sequence with, with the animation and the logo reveal like I wanted it to feel like when you start up a Nintendo 64 game, just like an an old school video game, when you start up and you get the, the production credits before the title screen, I think I was like low key, subconsciously inspired by like genshin impact.

I've never actually played Genshin impact, but while I was working on comet and onboarding, my girlfriend was often like, on the couch just playing genshin Impact and I could just like hear the sounds and the soundtrack or someone pointed this out after the fact, but like the title screen for genshin Impact is kind of evocative in the Comet onboarding.

And I, I see it now, now that it was pointed out. But that was just like a subconscious thing. I think it was mostly, largely just inspired by video games and, and [00:15:00] that experience and kind of wanting to see more of that in product design. and onboarding was the perfect way to do that, whether that's with imagery or animations or music and sound.

[00:15:11] **Ridd:** Yeah, the music was a big deal for me. Like I've been designing for a long time and I've never added music to a flow as a deliverable. But you felt it, like it definitely transformed the entire initial experience for me.

[00:15:24] **Escha:** I think one of the only products that in recent memory that like has something like that is band camp's login screen on iOS, when you're on the login screen, they have this like, really cute, like, Incredibles esque sounding, theme music. and it's been there for years.

Like no one ever talks about it. I've never seen anything else like it. But it was just this like really neat moment. It turned what was or otherwise just very standard, boring login screen into something that had a little bit of delight, had a distinct identity. And I would just love to see more of that.

And, and I think for me, like I'm [00:16:00] passionate about music I know so many producers. I've been in the music scene for so long. I the Comet theme was basically me going to one of my friends and being like, Hey. Make something nostalgic.

that was the prompt for the comment, intro theme. so the title of that track is Waking Up before Everyone Else at the Sleepover, and the wi is still on

[00:16:19] **Ridd:** I love that. 

[00:16:21] **Escha:** and it, it, it fits that so well.

Like the, uh, the producer's name is Neso. I have to, I have to give, give him a shout out. He's

highly slept on, he's so 

[00:16:30] **Ridd:** in the show notes.

[00:16:31] **Escha:** he can nail any genre. and it's been awesome being able to like, pull him into perplexity stuff a little bit. Like all of the sound effects for, the comic game, all done by Neso. some, some of the tracks for the, the, the live stream are either originals from Neso or just like from some of the other producers I work with. but that's where Suno comes in.

Suno like is something that, like, I tried initially when it came out and then I kind of put it off and never touched it again. And then I kind of like, was curious and just kind of picked it [00:17:00] back up saying what else is new? And it's, it's incredible. Like,

[00:17:04] **Ridd:** is so 

[00:17:05] **Escha:** not enough people are talking about how good it is

It's good for specific things that no one is talking about,

remixing vocals or like taking splice vocals, which are often like, not really what you want to use, but it's what's available to you. using that as an input through Suno to actually remix those vocals or change the lyrics or like turning a vocal melody into an instrument. if you have a flow or a cadence and some vocal that you like, it's so easy to like turn that into a saxophone. it's the same with like any other tool. the more you work with it, the more skill you build and, and how to communicate with it in order to get what, what you're envisioning. and we are kind of like working on an EP right now that's like entirely. The result of me generating music, using samples from him, sending it to him, and then he's just making something from scratch, inspired by that. Something that like we would've otherwise never [00:18:00] made if we weren't experimenting with this type of workflow.

[00:18:04] **Ridd:** And it sounds like you have a music background, but a lot of people listening probably don't. Suno is just this mechanism that you can use to express yourself through audio that you otherwise would have no right or ability to do, you know? I think it just goes back to what we were talking about earlier where we're seeing this expansion of the box of what a designer can potentially bring to the table and what it means to truly own the experience.

Right? Like you brought in the video of the planets, you're bringing in this music here, and like all of that is so tied to the feeling that you were able to evoke with comma in the first like 20 seconds. And yet it's not in Figma. It's not in pixels, you know, but you designed it and so cool. So cool.

Can we talk about the invites next? I know that was something that you owned end to ends. I've seen a bunch of 'em on Twitter. What's the story there?


## [00:18:55] Designing generative invite codes

[00:18:55] **Escha:** we decided to do, an invite only rollout initially just to like [00:19:00] stress test everything, to make sure nothing broke with, didn't

get overloaded. It is interesting 'cause that feedback is obviously coming from early adopters and not the lay person or really who the target audience is

for comment.

But, yeah, so we decided we're gonna do invites. We needed an invite system. first thing was like first pass QR code. That's the easiest thing, but it's kind of boring.

everyone has done QR codes. There's been some clever things, but it still just doesn't feel special. and I really wanted to make it feel special.

I wanted everyone to be excited and so I played around a bit and a couple weeks prior we had launched Perplexing Me. Which was just an experiment, like an in-house, like what if idea that turned into a thing, which was just the ability to like upload a profile picture and have it be converted into like a style that is within Perplexities brand.

[00:19:53] **Ridd:** I did it on me. It was cool. I liked the output a lot.

[00:19:55] **Escha:** I thought there was an opportunity to do something there with the invites. So I basically just kind of [00:20:00] took some brand assets that we currently have, either made by fee or other people on the brand team or like the creative ambassadors, who are using midjourney and sharing style codes. So I kind of just spent like a day going through artifacts that we already had going through style codes, going in mid journey and just throwing stuff at the wall, trying to like figure out what could it invite even be if we made it generative. tried a couple things that either didn't end up being scalable 'cause this, that was also important. but I eventually used that as an input within mid journey and eventually got a style of something that I thought was good within brand and was scalable. Took those, brought 'em in a Photoshop, edited them, the composition, the layering, played with blend modes to get like a certain effect that I wanted that I couldn't quite get out of Midjourney or like didn't come to mind when I was in the generative, iteration part. Used those reim, inputted those into mid journey. Got just a subset of what I thought [00:21:00] would've been good fodder for training data.

used c AI to actually make a model. So I played around there, made a, a dozen or so models picked like three that I thought were good, and then used foul AI to actually set up The flow for the generations. So with Fout, you can just take a model code that you generated with C. I ended up using three. You can like blend multiple models together. So I picked out three models, played around with the weights of like how I wanted those models to be weighted against each other. started playing with prompts, kind of like pulled from what I was using in mid journey, but editing it a little bit.

Just again, just learning how foul works and how to talk with it and found a, a prompt that worked there. played a lot with other parameters around how many times it'll run through the model in order to generate the image. there's like a slew of parameters that you can play with.

Spent like a day playing with those. Just seeing what outputs I got, and [00:22:00] making sure that it was scalable over time. Then I went back to the prompt and just found pieces that could either be ized like color, and then just created some color variables that could be

swapped out, like if blue is mentioned, maybe it's turquoise or whatever else in, another version of that prompt. additions in subtractions, including a black hole or, motion. Like some have more motion than others. Some are kind of more liquidized, some are more cloudy. just building a prompt that has pieces that can be swapped or ized. And then just set that up on the engineering side so that it runs through those at runtime and just randomizes that. I stress test this and you can get like up to like 10,000 generations and they. Are all unique, but stay within a level of variance that feels distinguishable and like identifiable as a comet invite. 

[00:22:50] **Ridd:** How much of this workflow did you have any level of familiarity with before? Like had you used these tools before? Had you done large scale generation [00:23:00] before? I mean, you just even listed off a bunch of tools that I'm not even familiar with. So how'd you figure out this out?

[00:23:04] **Escha:** I mean I've been doing just experimentation on my own for a couple of years now. Like on Twitter, I'm kind of, I'm like an, an advocate for ai, but try to be a good example of like how to use it ethically or like just creatively, like, Hey, you can use this and this and this and put them together and use them in different. order within your workflow or whatever. so I had some familiarity with, training my own models, not specifically with civit had used other tools in the past. had used stable diffusion, flux. there's a number of options that I had either tried once or a couple of times just had been familiar with by name as those had come up in my feed or whatever. I had never used foul or civit prior to doing this. and it ended up being the one that that worked.

[00:23:50] **Ridd:** again, this idea of workflows and figuring out ways and tools to unlock new capabilities feels kind of like this whole new frontier for being a [00:24:00] designer. So really, really cool to hear this backstory.

[00:24:02] **Escha:** it's definitely one of the more exciting pieces

about the whole thing in general. Like, not even just perplexity, but just in general designers using ai. that's what's getting me excited looking at the outputs, not as outputs, but as throughputs. either putting it into another tool and then putting it back in, or just constant feedback loop of, of reiterating or remixing an output. Like anything I've ever shared is the result of constant just regurgitating that

flow like dozens of times. Anything I've ever shared has hundreds of parents that led to that result.

[00:24:40] **Ridd:** I wanna zoom out for a second and talk a little bit more broadly about the product strategy behind Comet, the role that design played in that.

It seems like there was quite a bit of autonomy. You're probably making thousands of micro decisions, but were there other core. Strategy decisions that you were wrestling with, or maybe even like an inflection point [00:25:00] in the project that kind of changed where you ended up landing that we could drill into to understand a little bit about how you as a designer wrestle with ambiguity and kinda work your way through some of the more complex parts of the design process.


## [00:25:14] Figuring out who Comet is for

[00:25:14] **Escha:** one that's top of mind at least was just establishing like, who are we building this for? Like

who, who is the user? Like everyone needs a browser. Everyone uses browsers, but who is comment for specifically? Why would you use comment? Comet is for the lay person, at least initially, it's kind of a, a, a strategy thing.

It's as wide a net as possible, like Comet is for your parents. It's for the person who gets a new laptop and they just install Google Chrome without thinking about it because they've never really tried anything else. Or they're not, someone who's coming from ARC or DIA they might be coming from Edge or Chrome. and so that, Influenced a lot of the early decision making, on just what does comment look like. part of it was [00:26:00] it's chromium, it's a chromium build as most browsers are these days you, you're, you're either chromium or you're Firefox it's like basically impossible to make your own at this point. apple is, is an outlier with Safari, so it's chromium. So we got a lot of Chrome and chromium stuff for free. And then it was a decisions on like, okay, well what do we change? I think there's a ton of room for improvement across the board, but like, how far do we want to go in making it novel versus familiar? And a lot of these, like early revs of the early days of the product are leaning far more on the familiar side. so like we'll get feedback that like, hey, I was expecting comic to be, you know, something crazy or some, something that I've never seen before. but I installed it and it just kind of looks like Chrome. for better or for worse. Some, some people are like, uh, why isn't it different? And other people are like, Hey, this is great.

I don't have to learn something new. Everything is where I, expect it to be. that helps kind of push the AI use cases and the assistant a little bit more

[00:27:00] as being the one thing to really focus in on or try there's a bit of a learning curve in even figuring out what I would use the assistant for.

What can the assistant even do? so by making the Chrome and the browser experience a little bit more on the familiar end, we have more bandwidth. the user to be able to focus in on those things instead of doing what, what ARC did. I mean, I use ARC still. it's hard to move away from sidebar tabs like that changed my life fundamentally. ARC started that, but ARC also did a bunch of other stuff that kind of scared users away. It

kind of hurt their, their ability to grow their market share. some things felt a little bit arbitrary. Some things again, I think are brilliant. but it adds cognitive load to the user when they're just trying to try a new browser that I think we were trying to avoid initially. When I was talking about the, the decision to make it a rollout with Inspi only, and that meaning that our initial users are probably going to be power users or [00:28:00] people who are tech adopters, majority of feedback is you need vertical tabs.

[00:28:05] **Ridd:** There's a dissonance there.

[00:28:07] **Escha:** it'll be interesting and we're already starting to see as we open up invites to like we're getting more lay people in. As time has gone on and we're ramping up for, for general launch, that feedback is starting to dwindle a little bit just because there's people who have never used vertical tabs and so they, they don't understand like the value of that, so they're

not really asking for it. But it is interesting. Now, if you look at any other browser that you should probably consider using offers vertical tabs at this point.

I think Chrome is the only one that doesn't, ironically,

[00:28:39] **Ridd:** Maybe we could drill into just the AI piece then. So a lot of the decisions that you are making as far as the chrome go, they're affording you the ability to pursue at least an element of novelty there.

So could we talk a little bit about some of the design directions? What were you exploring and how'd you arrive at what ultimately shipped?


## [00:28:58] Designing the core AI UX

[00:28:58] **Escha:** there's an agent's [00:29:00] team on the engineering side, and they're coming from places where they have so much experience and that are ready that like a lot of those decisions or the, the way the technology works was not really up to me. It was up to me to make it usable. and to like help find the use cases to then provide feedback to improve the agent, to be able to do those things. I mean there's, there's like the, the, the surface area question on like, where does this live? What does it look like? How do I engage with it? And kind of approached it as a, as a hidden extension. it's just a sidebar. there were explorations of that being a, a floating window. potentially we'll still explore doing some of that stuff, even still like as, as an option. So you can kind of undo it from the sidebar. but the sidebar was just the easiest, quickest thing to do. And then there were deeper questions of like, is it tab based or is it window based? if I'm going between tabs, does the assistant follow me or does it refresh? And is it kind of like a [00:30:00] new assistant per tab? if we did the window based stuff, it's like, okay, well now we gotta make sure that, like clearing out the thread. intuitive and makes sense and is something that you would do. Because what I found is that people wouldn't clear the thread. the way perplexity works in a thread, that's where the context builds. And so if you start asking questions that are totally unrelated to that thread, it'll start getting confused 'cause it'll feed in that stuff.

And so like starting a new thread is important in perplexity, there's opportunities to, to like change that the way that it works. So that, that's less important. But that was something that we had to tackle. wanting to make it easy to like compare between a Windows laptop and a MacBook. Like I should be able to go to Windows and go to apple.com, go to the pages for those laptops and have comment. Tell me like what's the best value, like, which one should I actually buy? One way of doing that is by making it window based. So I could open up Apple, ask the question, switch over to Windows, ask the same question.

It has the [00:31:00] context that I was asking this from Apple, and then that happens. the other way of doing that where it's tab based, it's like, okay, well in order to do that, then we actually gotta be able to mention tabs, or we gotta make the agent smart enough to look at your open tabs so that you don't even have to like be explicit or verbose in your question or whatever you're trying to get out of it. the combination of like classifiers and in inference and also just knowing to like, check your history, check all tabs that are open, decide what's relevant, and give you the right thing. so that was a bit of just trial and error, like having a gut feeling that it should be window based, trying it out. Realizing that it has, pitfalls, it's kind of confusing sometimes. and ended up going towards tab based, which was not my first instinct. Like, that's not what I thought I wanted until we tried it and then realized that there's other ways, whether that's functionally how the agent works or introducing mechanisms like mentioning [00:32:00] tabs to be able to make those things work. I see the browser as the first step towards an OS or an an agentic os. Like it would be so cool if Comet could also look at what's on your computer or act on other first party apps that are installed on your computer, not just web apps that you have open and a tab, kind of gets into the, to the MCP realm, where I could sling Slack and Notion and comet together all using their native apps to enable different workflows. if it's tab based, that means you're doing a query, per on that tab, that query lives within the context of that tab. so also exploring like, okay, well what if we had like a command center? What if we had like

a surface area that's just focused on the agent that doesn't have to live within a tab? It can be its own thing. where I could schedule. Queries or run many queries at once and be able to manage those, string them [00:33:00] together. Uh, still being able to at mention tabs or do anything, engage with stuff within the browser itself, but not being locked down to like, okay, I've gotta have a tab open on a webpage in order to use the assistant.

[00:33:11] **Ridd:** I wanna go back to the switch between like window based to tap based and how that.

ended up going against the initial instinct. Were there any other places in the design process where you ultimately advocated for something that was a little bit different than what you originally thought?

[00:33:29] **Escha:** that's certainly like one of the biggest ones that I low-key feel bad about. You know, it's like the kind of thing where like I thought through this thing, I came out with this opinion and I was able to back that up with why, and I felt confident that like, this is the thing to try. And then it, ended up not being the right answer and I was

like, oh my God.

[00:33:48] **Ridd:** I am like three days from having a very similar thing where I sent us down like a two week rabbit hole that was just in retrospect wrong, and I totally thought it was right. So I get it. It's like one of the [00:34:00] hardest parts about being a designer. I,


## [00:34:01] Whether or not to have a new tab page

[00:34:01] **Escha:** something you've just touched on or mentioned is just the, the new tab page. should we even have a new tab page?

Like what are, what are the, what are the benefits of actually having a surface area show up when you hit new tab versus like arc, which is like a spotlight model.

Uh, there is no new tab page, it's just search. have done explorations on both of those. still doing that. Like still like open to how far can we push this and, and what is the north star here? but ultimately decided let's start with a new tab page that gives us. A branded surface area. have some branded really cool widgets, like a try, assistant widget, which just like does a random agentic query just to like a quick one click way to like get you to a magic moment to maybe plant a seed of like, oh, this browser can do something I didn't think was even possible. or the, Comet game, which is kind of like the offline equivalent, for Comet, but having an entry point for that, recent sites, like that's [00:35:00] pretty valuable. an entry point into like perplexity proper and your whole perplexity account in your library. So like it just made sense to start with a new tab page, for all of those reasons. But. probably doesn't make sense in the long run. Like there's, probably a better solution. and so just like not, trying to feel too bad that we have a new tab page right now, and even though we don't really want one 

[00:35:22] **Ridd:** There's kind of this spectrum of decisions that I have in my brain where on one hand you have some of the lower level visual component details that it sounds like you're kind of just owning. You feel the autonomy to just make that call, ship it, and we'll figure it out. And then on the other end, there's these really meaty strategic decisions like windows versus tabs for the agent.

And then there's this messy middle ground in between. And I'd kinda like you to help me make sense of that messy middle ground a little bit. Specifically as someone who's on a new team, you know, like you're still kind of even figuring out how to work with these people a little bit. how do you think about [00:36:00] the right level of collaboration versus just making the call?


## [00:36:04] Making key decisions as a designer

[00:36:04] **Ridd:** When do you strategically bring people along for the ride loop in key stakeholders, and what does that look like in your practice?

[00:36:11] **Escha:** initially it was constant. I was constantly bugging everyone.

but it was, it was like a, it was just part of the onboarding process for a, a new team, like just trying to figure out where things are, if we have a preexisting. Pattern or a solution for this particular problem? Have we thought about this? just trying to get a sense of like how the team thinks. what, are their answers to this thing? And just like, why did they answer it that way? And learning so that over time I don't have to bug them. I can be confident that I know what they would say or I'd know what their approach would be. and so it's kind of gotten less and less, at least for me personally, as I've matured within the team and have a better sense of answers to those questions that might come up. it's also maybe a, a bit of an [00:37:00] anomaly because I was the only one on comment. there's Gunner who's like on, on iOS and, and mobile and he's like the, the king of mobile. there's shori who's like, owns most of the agent and like core perplexity answer stuff. people who are tackling enterprise, people who are more around spaces. so everyone's like, kind of has their specialty in a surface area that's quite broad. and I started and I was the only one on common at this point. We've hired two extra designers, to help me. So that's been great. so we have someone on mobile helping me with comment, so iOS and Android. someone just started to also help me with desktop stuff.

it's kind of like opening the doors again. Like I'm pinging them all the time. Like, Hey, tell me everything I did wrong. help me second guess all of these decisions. while also trying to give them all of the context of like how we got to where we are and why we made those decisions and where we still want to improve.[00:38:00] 

And, now we're having a lot more sinks, a lot more jam sessions, which is fun and very cool to see and very exciting. and it's helping ease some of my anxiety feeling like I have to make. A decision or the right decision. I am a designer. I suffer from decision paralysis. I wear the same thing every day because I don't want to deal with that in my real life 'cause it's my job. 

[00:38:23] **Ridd:** it's an impressive feat to own that many decisions across that large of a surface area. You do have a pretty awesome background. You know, you designer at script, right? Is that correct? Yeah, so you had the first designer at DS script. you mentioned like motif and daylight, so it's not your first rodeo in terms of everyday tools.


## [00:38:46] Lessons learned on previous design systems

[00:38:46] **Ridd:** So are there lessons learned or maybe principles that you find yourself pulling from based off of your experience designing these other tools while working on Comet?

[00:38:57] **Escha:** I've just been, I've been doing design [00:39:00] systems my entire career. I kind of like got introduced to the concept of design systems when I was working at a UX firm. my main client was Microsoft. This was in like 2008, 2009. So like I helped establish the design language for Metro. What, like turned into Windows eight or Windows phone, or the Xbox, the Surface tablet. I kind of like was able to work with those teams to establish a, design system that can live across all platforms. uh, Microsoft, like that huge thing was accessibility. And so that was just ingrained in me early on in my career of like how important that is and how, how important design systems are or systems design is. And at the time they were like, design systems were PDFs. they were not things that you could use. They were things that you would reference. and everywhere I've been since then, I've mostly been a, a lone wolf. I've been like, I was the only designer at DS script until like [00:40:00] 2022.

I was at OpenTable before that, and I was working on the restaurant product. I was the only designer on the restaurant product. The whole rest of the team was on the website or brand, or like the iOS app.

Everyone wanted to work on the iOS consumer app. It was the, it was the shiny thing when like seven was first introduced. but I was like, oh no, I wanna work on the thing that makes the company money. I wanna work on like the hard problem. but I ended up being a lone wolf. I was like the only designer on that product. And then kind of took it to, to detour pre d script. Was the same thing. then we kind of like sold assets to, to Bose and kind of turned that into dsri, spun that off as its own tool. 'cause DSRIP was an internal tool that we made for Detour. so I've just been alone for so long that I didn't actually even have designers to riff on.

I was like working with a CEO in the way that I would work with designers. and so I just gained a lot of muscle in being able to like, make those decisions or set myself up with a [00:41:00] framework that can scale no matter what the product is or what the surface area is. and that's. Proven, really valuable for me.

Like I, I mentioned like in the beginning of this, that like when I, I stayed at DSRIP for so long that I felt like I did myself a disservice that I didn't like grow. There was a period of time where I felt stagnant being in the same place for so long. just kind of growing within a, a industry area within a product, but not like growing as a designer. but after that, like post that joining perplexity, joining a design team, realizing that like I was just building skill and muscle that whole time, that's kind of like what enabled me to hit the ground running with Comet on my own for the first couple of months.


## [00:41:42] How Escha thinks about designing AI experiences

[00:41:42] **Ridd:** Do you have any frameworks or rules of thumb or something like that? As it relates to integrating AI into a tool. 'cause you've been thinking about that a lot too. I mean, descrip is doing a ton with AI way before it was cool. So I'm curious if anything comes to mind on that front.

[00:41:57] **Escha:** AI and tooling is interesting because it's [00:42:00] so early. We're we're figuring out the patterns out the gate, like first thing that we did was chat, like support style, like chat interfaces and prompts. Both I think are problematic. They're less than ideal for. Being usable. They're an engineering approach. It's a headless ui. It's so powerful, but it requires so much upfront to learn how to use it and what's possible. and it leads to a blinking cursor problem for new users and lay people. It's just like, well, I got this blank input. What, what the hell do I do with this? Like, what can I even do with this? and so with DS script, prompting and chat was treated like a second class citizen. it was custom instructions instead of prompt what you want. It

was like, do you really know what you want? Cool, go for it. Otherwise, here's an interface. Here's sliders and dropdowns and a description [00:43:00] to help you choose what you want. But just like all of these features. Like generate clips, for instance, as an example of a feature within ts script, you can take a podcast and you can generate clips for social media. you could do that with a prompt. You could just tell it to do that. But what we ended up doing was building an interface.

So feature is clip, generate clips, make clips. When you open that up, it shows you just like, okay, how long do you want these clips to be? Choose a slider. how many clips do you want? Is there a certain topic that you want to focus on? What's the format? Like? Is this for Instagram or TikTok or Twitter?

Like, there are questions that we can get answers to upfront just with a general user interface that actually on the backend starts to build that prompt. But it, the user doesn't need to know what the prompt is. either like it's secret sauce and we don't want you to know or. It's just, it's overkill.

It's, it's information you don't really need to know. If you're not interested in [00:44:00] learning how to be a prompt engineer, it just happens in the background under the hood. And if you want, you can customize it. You can hit the custom instructions button and, and add your own prompt on top of that. But that in general was, the approach with DS script was, productizing the ai, whether it's by feature and not calling it ai or if it is AI not leading with a prompt or chat, but leading with getting information that we need through an interface to actually give you a good result.

[00:44:31] **Ridd:** How applicable is that approach to designing the product going to be for comma, especially as y'all have laid the foundation for a truly agentic world that also accounts for an infinitely larger spectrum of possibilities because you're not just editing something, you're doing literally anything in a browser.

So can you talk a little bit about some of the challenges or thinking behind what future interfaces look like as you're designing [00:45:00] this more agentic world?

[00:45:01] **Escha:** one is just the problem of discovery and education on what Comet can do, or what Comet can do for you, like personally and uniquely for you. and so one approach to that is just a, a query library. Like we've got a set of dummy queries or like just basic queries that everyone has that we know will work. The idea is maybe those plant seeds of ideas, like you, you read this, this query in the library, you're browsing it. You see that it falls under a category of like email, And just using that as a mechanism to plant seeds of what Comet can do. Then there's another layer of that, which is personalized queries. Actually, if you import your browser data or you have, you've used comment and you have a history, you have bookmarks. we're able to generate personalized queries for you that are specific and unique to you as another way of just helping plant the seeds of ideas. Like all of these are gonna work.

You can just click [00:46:00] the try and comment button and it'll work. Or you could hit save and save it as a shortcut if it's something that you like, see yourself doing repeatedly. But I've often just found it. Useful as a springboard of like, oh wow, shit, I didn't know Comet could, do that.

I don't want this query specifically, but let me edit it.

Like let me save it and then edit that shortcut and now I've got my own thing. future version to that could be being able to share those queries, making your comet query profile public so people could like see that and learn from. that's one piece on like the discoverability. Then there's usability in terms of actually being in the product in real time, capturing you at that moment. So we can do that with like zero suggests when you click into the omnibox or the assistant, input. We know what site you're on, we already know, like we have a good idea of what. Makes sense to do on a major domain. For instance, like eventually all of this will just be AI and inferred and generated.

But to start [00:47:00] like a good fair amount of it is just hard coded. Like we did the work to figure out what are popular domains, what are popular things to do on those domains? Put those in zero suggests. So when

you're on Notion and you click on the input, you've got a series of like suggestions that are specific to notion that

may or may not be relevant to what you're trying to do at that moment, but will get better over time at inferring that. depending on whether you have an empty document or a document that's filled a document with spreadsheets in it, depending on the actions that you just took prior to that, there's a lot that we could do with AI to infer what might be the next step. What workflow are you doing to suggest an action that Comet can do? then there's like follow ups. if you have a complex query or something that you want to do that's more complex, designing the agent in a way that's not just submit query, get answer, but actually submit, query, see the browser working. see what it's thinking how it's learning in a, a [00:48:00] website, how it's learning how to use that website, and then if it gets stuck or it needs a follow up or something pausing the agent, prompting that you need out your credit card info.

Like, we need your, approval to send this email before it just sends automatically, like put your final stamp on it. or just suggesting follow ups, like, Hey, you did this thing. There's another query. it's similar to a, a zero suggest, but it's actually like a follow up suggest. 

[00:48:27] **Ridd:** Well we've covered a lot of ground.

I appreciate you getting into the weeds of what you're thinking about as someone who's not only designing AI experiences, but really experimenting and tinkering with all of these tools. So, maybe before I let you go, is there anything else that you think designers should be thinking about more when it comes to AI and the role that it plays in our practice?


## [00:48:49] How to use AI like an artist

[00:48:49] **Escha:** Most people think, oh, you just typed something, you just typed what you wanted and hit go, and you got what you wanted, either slot machine mechanic or you just ordered from a [00:49:00] menu. and sure, AI can be that, but it doesn't have to be, it's not inherently that AI is not inherently that limiting. it's actually so open-ended. a lot of what I do is back and forth between Figma, Photoshop, at least like in image generation or art stuff. Like it's a back and forth between traditional tools and midjourney as an example. using my own art. As inputs using my own art to as fodder for a, a model using images from that model as inputs. taking that, the output of that and just continuing to iterate on that and remix that, take that output, put it in as another input along with two other inputs. really not just sticking to type words, hit go, but doing a bunch of what you would normally do as an artist or a creative, and then using that to get variance on something. Maybe it's a hit, maybe it's a miss. Maybe it's, you know, you might spend time iterating and not [00:50:00] get anything, but sometimes you're gonna get a happy accident. Sometimes you're

gonna get something that's like, Hey, that's actually a really cool idea. I didn't think of doing that. Let me go back now and like do something and I might do something in a different way. but like using AI as a springboard for ideas, using AI as a communicative tool, and less as a tool to get around or avoid doing work,

it's less, it's not about how little can you do, it's about how much more can you do because of,

of AI as a tool within your workflow. Whether it's at the beginning, the middle, the end, it's so open-ended and flexible, and becoming increasingly even more with the introduction of, of like MCP as a concept, that I just find really exciting

and trying to like teach people or show people the light that like. Everyone hated Photoshop too. it was very controversial, like Photoshop was in the news 30 years ago because of how controversial it was [00:51:00] to move a horse from a bottom of a hill up to the top of a hill next to a tree to make a good format for a book cover. there was new segments on that

because it was just so radical of an idea like, oh, you're manipulating this photo.

That's so, that's so wrong. while I feel like there's totally valid arguments against ai, there's valid concerns that I don't think we talk enough about or we don't address well enough directly head on. But I also think that a lot of those arguments. they are continuously getting more and more outdated, as the technology gets better, as these models get smaller, as they get quicker.

As you know, like a lot of stuff that the arguments against AI two years ago, three years ago are either no longer relevant or are just less relevant.

And I truly believe that there is great power and opportunity in using AI ethically for good purpose, and solves good [00:52:00] problems I hope people are a little bit more mindful of whether they're deciding. How they feel about AI doing more research on it. Like, I encourage everyone to do your own research. Be curious enough, don't just listen to what you see on Twitter. don't fall into consensus, if you are using ai, just be mindful about the impact.

It, it has just the technology itself or how you're using it keep ethics and, and morals in, in mind. I think all of that is important. just for the longevity in the, the future of this tool. Like there will be bad actors and we need to hold bad actors accountable. It's not the technology that's the problem.

And it's not everybody that's the problem. it's a garden that is ripe for abuse. If, companies that are implementing AI. Aren't mindful enough to be able to prevent those things the, the flood gates are open. It's not going away. We have to

live with it, and I'm just trying to do my best to, guide the ship. I ultimately decided to stay in AI and not back away from it in terms of my [00:53:00] design career in the industry because I felt a moral obligation to be part of moving that forward in a direction that made me feel comfortable.

I couldn't, I ultimately couldn't live with exiting the scene and watching it go down a, a path that I wasn't comfortable with, that I knew that I could have had an, IM an, an impact on.

[00:53:23] **Ridd:** actually I find it very inspiring and for what it's worth, I think you did a really good job of articulating that difference and some of my own frustrations in seeing even the narrative around AI and what it looks like to use the tool as a slot machine, which kind of almost replaces the need for art in a lot of ways, versus using the tools as an artist and tapping into that creativity and raising the ceiling.

And you're doing, you're exemplifying that so well. So I really appreciate you coming on today and giving us a little behind the scenes and sharing some of the workflows and what you're [00:54:00] experimenting with. And I can genuinely say that I am a big fan of your work, both with comment and DS script and everything.

So thanks for the 

[00:54:08] **Escha:** you. Thank you so much. Appreciate it.

