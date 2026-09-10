---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: GgP9LEAY1PA
slug: 2024-10-23-joel-lewenstein
source_type: descript
source: https://web.descript.com/165237f1-4028-4c11-9c61-0e7abf01cfcd/c16f9
guest: Joel Lewenstein
host: Ridd
title: "Pursuing ambitious design ideas"
published: 2024-10-23
duration_min: 47
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] 


## [00:00:00] Building for the future as well as today

[00:00:00] **Joel:** Prior to here, I was at Airtable, uh, spent a couple of years there. So I just like. Really incredible, interesting growth, lots of hard problems. then the AI revolution hits, I was working closely with some of the folks who are, working on the AI, our AI products at Airtable.

And like, because of the form factor of that product, you know, our first foray was like, A cell that is powered by one of these LLMs can ingest data from another cell, do something and spit out a value in the cell. Really interesting, constrained design problem, a billion dollars of GPU condensed into, you know, 400 pixels or something.

And I had this feeling, I was like, man, like AI is capable of so much. I wonder what it's like to work on a product with no holds barred, everything can be AI from the ground up. No assumptions. And. Found my way to Anthropic. now that I'm at Anthropic, there's a bit of a grass is greener thing where I'm like, wow, Airtable has all of this data, all of this structure, all of these existing workflows, like think of what you could do with all of that data.

So we're all coming out this problem from a different, angle and it's kind of, there's pros and cons to everything, but [00:01:00] it's been a wild year. you know, I think AI is, is in the middle of this S curve and different people will tell you different places on the S curve, but we're, we're kind of trying to do.

Two things at once. on the sort of, higher end of the S curve, the, the asymptote there, we think nearly everything about. Our relationship to computers is going to change in the next, number of years. And like that number is really small. Like if you read Dario, our CEO's, machines of love and grace essay, he thinks AGI is coming, you know, in a single digit number of years.

so we're trying to, to be there when that happens to build product, to build experience that is ready for the most radical change to computing since, you know, Xerox PARC. on the other hand, we're trying to. Build a product that people want to use today. And these models, despite being sort of in the early phases of their, maturity can provide a lot of value to people if you know how to do it.

And many people don't. And so we're sort of doing this, like we had this phrase at air table, raising the ceiling or lowering the floor. We're kind [00:02:00] of trying to do both at once. and that leads to just a lot of fun, a lot of chaos, a lot of, uh, Trying to figure out as we go, and sort of, uh, do, both tracks simultaneously.

[00:02:10] **Ridd:** That seems to be the consistent tension whenever I'm talking to people who are like deep in the AI space is you have to build for today, but it's like, how do you do that when you know that everything fundamentally is going to change and having one foot in each camp, I have to imagine creates a totally unique set of problems for 

[00:02:29] **Joel:** I think as with many slash all design problems, like, You just have to state your assumptions and you have to be dialed into the right problem before you start. And so we have the luxury of having a big enough team and enough different kind of a portfolio of bets that, we can be pretty explicit.

We can say like, this is a set of ideas that we think provides value today to our enterprise customers. We expect to see usage. We expect to see revenue. Then we have teams initiatives that are much more [00:03:00] like this won't be ready for X months or X years, or we're, uh, it's a solution to search of a problem.

We don't even know if this is going to be useful yet, but we're exploring it because we, we feel there's a lot of potential. I think the only danger spot is if. You're not honest with yourself or with your team of like, do we expect people to use this today? I do think though, like there's so much hype in this space and there's so much excitement, I think merited excitement for what the future holds I think people sleep a little bit on how exciting it is Provide value today.

one of the, most tenured designers on our team, Kyle Turman has this great phrase. They say, even if the models never got better, even if quad three was it, quad 3. 5 was it for all time. There's probably still like years of design work left because they're just all these things that the model can do that people don't know.

how to get, it just is, it's opaque. It requires this like dark art of [00:04:00] prompting. You have to understand all of these different concepts and technical ideas, and so there's a lot of like. Interesting design problems. Like, yes, we're doing floor lowering and ceiling raising, but they're both fascinating and they're both, hard, interesting, new, deeply technical problems.

So I like them both.

[00:04:18] **Ridd:** Something that you said to me earlier was you said some things that seemed true about the AI space six months ago, don't seem so true anymore. Can you unpack that for us?

[00:04:27] **Joel:** Everybody who wants to do design on AI, um, myself included. Sees all of these chatbots and is like, I'm not going to do a chatbot. We're going to move beyond the chatbot. And then you like sit with these models.

You, uh, you try things, you push, you experiment. I think there's something like deeply, deeply profound about language as a communication medium with computers that these chatbots in a seemingly simple UI have really captured. And I think it is. It's actually quite difficult to, [00:05:00] get that much value and to, and to provide that much sort of, uh, flexibility and power with different UIs.

There's definitely more out there. I've come to distinguish in my head between language as a lowercase I interface as a communication medium and, , chatbots as, or chat as a series of bubbles back and forth between two entities. I guess I'm like, I'm long language in a way that I wasn't previously.

And so to take a really concrete example, you know, we have this product called artifacts, we put, um, you know, documents in this right pane, so you can sort of produce these assets and actually like see what you're making. We recently launched a small thing where you can highlight a part of that artifact and say like improve this and then you can give Claude instructions for what you want.

I don't like this paragraph. I'd like it to be More interesting. I'd like you to pull in more of the of the thesis of this essay, whatever that's not chat necessarily, right? You're sort of you're more in a document editing modality but it is It is the free [00:06:00] form expression of ideas unconstrained by an enum that an engineer sort of put into a code base.

I think that's just, deeply human and probably going to be a feature of these, interactions for a long time, even if the sort of the, uh, The rectangles on screen start to look different than a chatbot.

[00:06:19] **Ridd:** I love the distinction. And I think at the end of the day, sometimes it's just like designers love novelty, like we want to push past chat because we just don't want to do the same thing that the people before us did,

[00:06:29] **Joel:** . Yeah, it's funny. We've been doing a lot of thinking about, the future, obviously. And sort of thinking, again, looking at Dario's essay and thinking like, okay, if you believe the hypothesis that In two, three, four years, these models will be able to do complex reasoning, um, solve problems that like groups of people have never solved before.

Take independent action, reflect on its own thing, whatever. what is the way to give it instructions? What is the way to give this like [00:07:00] incredibly powerful, thoughtful, problem solving entity? the problem, the challenge to go solve, and, you know, we, we make sketches and mock ups and, and vision assets, and it's funny because it's, it's still probably giving it instructions in a few sentences in English, or your language of choice, the difference is right now the sentence you can give is like, Please summarize this PDF and put it in an email in the future.

It will be, please use your understanding of human biology to, develop three novel hypotheses for the cause of Alzheimer's and propose a laboratory experiment, and apply for FDA approval for this experiment. Right. So like, it's still a chat in the sense that like you're writing words and the, the AI is doing stuff.

It's just that like the doing stuff becomes. unthinkably large. And there's all sorts of design problems in there, right? Of like, what involvement should the user have as this powerful [00:08:00] thing is operating sort of in the background.

[00:08:02] **Ridd:** can we go a little bit deeper into that because I do think as an outsider, I look at a lot of the innovation in this space and sometimes it does kind of feel like, you know, a bunch of tech demos or solutions and searches of problems. So how does. Working with AI shaped the way that you explore different design and product ideas, especially when you're operating kind of at this fringe, maybe even post the next order of magnitude jump in the technology.

[00:08:33] **Joel:** Yeah, so I think solutions in search of a problem is such an interesting phrase. I think it's generally felt to be, derogatory pejorative. Like people say that as a sort of like, you shouldn't do that. And certainly like the sort of capital D design school would say, understand user problems, like start anchor there, you know, any good design, design crit starts with like, here are the user problems.

what endures, right? Like that is the [00:09:00] technology changes, but people's problems stay the same. I've come to see solutions in search of a problem as like, not a dirty word at all. I think as long as you just lean into it and you, again, clarity, stating assumptions, knowing what you're doing, saying like, look, there's something, there's the germ of something here and we're going to explore it.

I think the only thing that really, really matters. Is that eventually the problem and the solution link up together. So you're solving a real problem for a real person, but I've come to be pretty agnostic as to like, which end you start from. And this made me uncomfortable. Um, when I started for sure, we're a very like prototype heavy culture.

We're a very explore things out of our own passion and intuition. culture. This comes from our researchers, from our engineers, from our designers. And my sort of like, capital D design brain would see all these prototypes. And I'm like, but what's the user problem and give me a user journey.

And I, I've had to sort of quiet that a little bit and just, not to [00:10:00] be too cheesy, but like, it's the Justin Timberlake line from the social network. It's like, we don't know what it can be. We just know that it's cool. And like, not all of it is going to be useful, but I think there is something deeply valuable to just sitting with something that is, you know, cool and compelling and, and you can see the germ of something and then I have a diagram in my head of like, you know, a double diamond design process and sort of like tendrils coming out from the solution end and eventually finding their way to the product or to the, to the problem end. I think that's okay.

[00:10:31] **Ridd:** What a fun environment to work in too. Like, I personally have not been in that type of team yet, but like, it looks really cool. Cause it's like so typical that the things that you would be working on would be derived from user problems or top level business objectives and everything at the end of the day, kind of flows top down, whereas you almost are like sitting on this, Kind of a little bit chaotic bubble of technical innovation where you have to respond to the [00:11:00] new things, even just to stay alive.

[00:11:02] **Joel:** It's unlike any other place I've worked. Every other place, code gets written because there's a PRD, and the code delivers the, the requirements that the PRD sets out. I have many analogies for AI, but, but the, the one that resonates the most for me right now is It's like watching a child grow up.

I have a six year old, a three year old, and a four month old, and there's this just magical experience of being a parent, especially for your oldest, where they figure out a problem for the first time. I mean, it can be as they've never managed to, open the box of ice cream cones before, and then they do.

Or they're learning to read, or they're making these logical connections between things that you've never seen. And critically, you've never taught them. A six year old just started kindergarten. So he's out in the world a lot. And he comes back with these Insights about things that my wife and I didn't teach him.

And we'll ask something, you know, we'll, we'll be present with him. And then I'll turn to my wife and be like, did you know [00:12:00] he could do that? And she's like, no, this is amazing. And that really is what it feels like sitting on top of these models. Like our just astounding research team is like pushing the state of the art.

These models are rolling off the, the assembly line. We're all poking and prodding and we're like. Huh, I didn't know it could solve this level of problem before, or like, whoa, got really poetic and philosophical on a topic that it used to be pretty, like, dry about, like, what does this open up? What are things that we weren't thinking of before?

How does this expand our aperture? Like, you need to just drop assumptions because, like, I mean, Entity this this thing that is like growing and maturing and changing next to you. So there is a level of reactivity and openness and presence to it That doesn't exist. I think in more declarative software universes.


## [00:12:55] Departure from defined user journeys

[00:12:55] **Ridd:** Another element of designing AI products that I'm kind of curious to hear you talk about is this [00:13:00] departure from very defined user journeys and flows where you're dealing with this much more fluid product service area, kind of infinite degrees of freedom. How does that impact the way that a design team like Anthropic shows up?



[00:13:16] **Joel:** Most existing software is, is something like Being on a train or a subway, right? There's like, there's a series of stops. You can define the journey ahead of time.

you could map the entire space. You could say it's the, New York city Metro map, right? It's like, there are only 47 stops in this system. I know how you get to each one. I see designer portfolio presentations in which people literally map out every page that exists, right? I think the current paradigm of chats, chatbots is more like, Being dropped in the middle of a field with no map or trails you can do Anything and you have just the number of degrees of freedom you have is Almost literally infinite in [00:14:00] that it's language based.

this is like both the astonishing power and opportunity of LLMs it's also like pretty intimidating if you are not, an experienced hiker to push this metaphor to a breaking point. I think the, the challenge of a design team working in this space is to provide just enough wayfinding and pathways that people feel comfortable.

To not lock them into like a monorail system. And so, there's existing, patterns that work here, you know, suggestions, templates, ways of guiding people. Interestingly, you can take the state, that a user's in, right? You can look at a chat and a, and a document that they're writing. You can then run another model working in the background, look at that state and say, like, What do you think this person might want to be doing?

do they seem like they're in exploring mode? Are they trying to produce a document? do they seem stuck? Like you can actually ask another instance of Claude, does this user seem stuck? And then [00:15:00] you can give them guidance, light guidance, heavy guidance, cow paths that maybe like guide them gently, big roads with barriers where you're like, You seem pretty stuck here.

We're going to like funnel you down this path. So at least you get somewhere. And then for the people who feel really comfortable, there's always, walking through the field in a direction that, that no one has asked you to go down.

[00:15:21] **Ridd:** Do you have any other thoughts on just Even coming from your background with Airtable, these really tech heavy, powerful products, like what have you learned about just bringing the right level of abstraction or metaphors to people to take something that is super powerful, maybe complex, maybe intimidating and turn it into something that makes sense.

[00:15:42] **Joel:** Ultimately you have to speak the language of users and user problems. And so, , I think that the journey, uh, in my years at Airtable was basically, At the start, we have this like, database, this kind of like flexible, visible, visual database.

eventually we added automations and we added these kind of like customizable [00:16:00] dashboards and apps. And so you have a model view controller, architecture there. And I think there is no doubt in the world that like a flexible , MVC software platform, Is valuable to people, but we saw time and time again through user research, through like growth numbers, et cetera, , that doesn't make sense to people.

Like people aren't looking for a quarter inch drill. They're looking for a quarter inch hole or something. Right. Like, like you have to speak. In that language, and we started to see a lot more, excitement and understanding and growth and revenue at Airtable when we started sort of packaging these things into solutions and saying, like, Okay, here are all these raw materials, here are all these pieces.

here's the thing that actually solves your problem. You are a product manager. The problem that you face is keeping track of your team's work. You just want to believe that this set of tools can be put together. Into, a piece of software that lets you track your team's work. We're going to actually do all that assembly for you, hand it to [00:17:00] you, and then let you customize from there.

another, analogy that we use a lot at Airtable that I, that I really like, and I think is very applicable to Anthropic, um, is Lego pieces. you can think of like Legos as being sort of this infinitely expressive, modular, composable set of things. That, you can decide, basically, like, how does that show up to a person deciding whether to, like, buy Legos.

I think there's sort of three levels of it. You just take a bunch of raw Legos and dump them out on the table, and you're like, It can do anything, I promise. Uh, that's probably where we started. I think that is deeply intimidating. the temptation is probably to like, build that Titanic that took 16, 000 pieces and 42 hours to put together, and show you're like, Look, this thing is actually so, so, so powerful.

Look what we can build. I think that's a mistake too, because nobody wants the actual Titanic. They want, I'm going to strain a metaphor again. They want a boat that is like exactly the boat that they want, right? They want it to be colored blue on the outside. [00:18:00] They want four steam stacks instead of three.

So the trick is to find the middle where you're like, here is. A couple different shapes of boats. You can take on and off the pieces that sort of like make sense to you. Like we, we brought you three different steam stacks, two different hulls, and like three different sails. We've kind of made like the, the medium fidelity pieces.

Now you can click these together and make something that feels really good to you. Eventually you learn how to customize kind of like all the way down to the, the brick by brick level. So it's finding that middle ground, I think, and, and speaking in User needs language and not technical capabilities language.

[00:18:39] **Ridd:** I love that analogy. It even makes me go back to the example you were just talking about, where you can. Ask another instance of Claude where this user might be feeling stuck and like thinking about not only finding that middle ground, but potentially making it dynamic to the situation that that user is experiencing right then.

It's like such a fun [00:19:00] set of design opportunities to think about. Like it totally breaks away from the set number of screens and flows that I would just typically think about design artifacts as, but it's really exciting.




## [00:19:14] Example of designing with AI as a material

[00:19:14] **Joel:** I have a fun story there. So, so we were working on a feature that basically does this, right? Like it looks at a chat. it says here are three next steps we think you might want to do. the designer working on it, Samin, um, she brought it to Crit. She shows it. It's kind of like the, the UI, the rectangles are like, Pretty straightforward.

It's little suggestion chips that appear underneath the chat. She showed some examples. You're like, that's pretty good. Like, that makes sense. Those are good next steps. We should think about, you know, when and how to roll this out. And the crit was sort of tailing off just because it was good.

Like there wasn't a lot to say. And then someone was like, can you show us the prompt that you used to ask this other instance of Claude to make the right suggestions? And she brings up this prompt. seven page prompt with like [00:20:00] all of these instructions and examples and little tweaks and like the art of prompting is like this dark art.

And she had just, she had iterated, I think she said like 75 or a hundred. There's like hundreds of iterations, trying different combination of prompts, looking at it, seeing if it made sense all to get this thing that Was just elegant and simple for a user. And so this was another sort of like big awakening moment for me.

Uh, switching into the AI world is prompting is part of the design process and designers need to know how to do it. And I was just, someone now teaches our design team basically like. How to do prompting, uh, internally because it is, it is so, so critical to the end product that you're delivering to people.

[00:20:49] **Ridd:** what have you all learned about the dark art that someone listening to this could just apply or make it a little bit more practical when they're kind of, you know, making their own [00:21:00] foray into this world where maybe they're not working with these models every day.

[00:21:03] **Joel:** The meta advice is just try a lot of stuff. Like everything in AI land. There's not a really, Exact set of steps to go through to perfect something. Claude knows how to write prompts for itself. It knows what a good prompt looks like. So if you get yourself halfway there on this tool, you can then ask an instance of Claude.

There's a button in the UI that just says like, improve this prompt with Claude, you give it the prompt. It will actually iterate and get itself to something that is even better. Then you can like run through your examples again. It's really iterative. It feels like a design process, to be honest.

You try something that feels close. You sit with it. You're like, I don't feel like this is right. You nudge. I mean, the, the actual concrete changes that you make, there's like best practices, right? There's like, ask Claude to be in a role. You are an expert product reviewer. You are a marketing genius, using examples.

There's like sort of a bit of a template from there. It is tweaking [00:22:00] individual words. I've seen cases where like. The difference between giving instructions in lowercase and all capitals actually is what makes the 

difference. 

so it really, I think is, is much like design. I couldn't, I couldn't give you like a seven step process to make a good UI more like try something, sit with it, nudge, sit with it again, stress test in a different scenario, iterate, go back to your first one, compare and contrast, it really is like a, an exploration iterative journey.


## [00:22:27] The backstory of designing Claude Artifacts

[00:22:27] **Ridd:** I want to transition a little bit and get into some of the specifics of the products that you're designing and working on. And maybe to start, I wanna learn a little bit more about how you all are working as a team. So maybe can you share a bit about the backstory behind something like Claude Artifacts and how that came to life?

[00:22:43] **Joel:** Absolutely. Claude Artifacts is, an amazing example of some like real, Company values. And so the two things that it showcases really nicely are how we work with research and how we, we prototype. And so, the idea, started. On our [00:23:00] research side, and in the course of like using it a bunch for this research, they kind of got frustrated that every time it wrote code, they had to copy and paste that code into a code editor, go back to a browser. Hit refresh. It was just like this clunky loop. So they were like, wait, this is HTML. I'm using Claude in a browser.

Why don't I just render this? In a sidebar so that I can just have quad, give me HTML and I can see the HTML right to the side. They built that prototype. we have a meeting internally where basically, anyone from the company can come and demo something that they think is just compelling. So we're back to the earlier point of like, it just has to be cool.

Like you don't have to know what, what the ultimate future of it is. So they bring this thing. There's designers, there's product people, there's engineers, there's researchers there. One of our product designers named Michael sees it and is like, this is a big deal.

Like for the first time, it, it feels like Claude is, is making something for you. There's some like [00:24:00] usability, benefits here, which is like, it sucks to see a huge document rendered in line. You have to sort of like tease apart Claude's commentary and the document. So there's just like a basic usability thing.

But I think what Michael identified. Was something sort of more profound about the feel of it, which is that it feels like Claude is, is making something for you. we want Claude to feel like the best collaborator, the best creative partner you've ever had.

and creative partners give you drafts. They take feedback on drafts. There's a dialogue, there's a conversation. I think Michael noted that this was really profound. He then built another prototype, shared it with the company. that prototype got noticed by Dario, the CEO, who was basically like.

This rules, we should ship this. Then we're off to the races. I can't talk about the specifics, but there are also prototypes riffing off of Michael's prototype that push this idea even further to the limit. again, they're just [00:25:00] cool. We don't know what to do with them yet. Some of them are like low on the S curve.

Some of them are radically high on the S curve. I think largely how we work is we have a phrase like seeing is believing, you can, Talk about AI and you can write about AI and you can code, but there's something just so powerful about seeing a working prototype and feeling the like dynamic kind of stochastic nature of it.

And just saying like, wow, hearing this described, I don't know how excited I would have been, but seeing a website get rendered in real time, iterating on it and seeing it change in front of you. It just, there's something like. Magical about it and prototypes really help sell that.


## [00:25:40] How designers contribute to strategy through systems thinking

[00:25:40] **Ridd:** So you're currently hiring. I want to talk about that a little bit. And I read the job description and the first responsibility line says that designers should contribute to the strategic direction of our tools. I'd like to hear you talk a little bit more about what does that look like to you, especially for [00:26:00] a very technical product like 

[00:26:02] **Joel:** that is a really good question. I think it's helping us see what's possible. Use visual storytelling, use prototypes, mock ups, my old boss at, at, uh, Airtable, Chad Thornton would say provocations, kind of like challenge people's assumptions with visual assets and start to help us see might be possible as ways to achieve , our strategy or The problems that we want to solve.

I think if product and product management can give a really clear problem to solve, design's role in, in shaping strategy is to Explore a vast solution space and understand like, here are a bunch of different ways we can solve this.

I think what they also do, probably uniquely or semi uniquely in an org. It's just keep the whole picture in mind and keep this sort of like holistic product experience in mind. And I think Best features are the ones that solve multiple problems at [00:27:00] once that are simple abstractions that can grow into ones that solve future problems.

And so part of shaping strategy, I think is, is proposing a solution that is not just, let's take artifacts as an example, because we just talked about it. there is a user problem, which is that it's hard to write documents with Claude because it takes up your entire screen. You can't actually see Claude's commentary, et cetera.

You You could hand that to a designer and say like, could we solve that problem? Asterisk narrator. That's not what we did here, but you can imagine that as a way , of solving a problem, you could find 10 different solutions that would solve that problem. Some of those solutions. Are the seeds of a new concept, a new abstraction, a new thing that you can build on, and I think it's designers jobs to see that and advocate for it.

So, you know, to paint stupid ends of the spectrum, you could just have a collapse button that takes long documents and hides them in the chat. That would be like a local solution to a problem, but it is not a sort of Compounding abstract concept that you can build off of a primitive in the [00:28:00] product.

bringing things in the side panel. Might seem like a obvious solution. And I think it's designer's jobs to say like, Hey, there's a future here. Like if we do this, here's what this opens up for us in the future. we could help you write code better. We could visualize code. Um, maybe one day there's multiple files.

Um, maybe one day you're doing dynamic editing with, with artifacts and actually like, engaging both in the chat and in the document. And I think like. Finding the right solution, but also finding the solution that becomes One of the Lego pieces, one of the building blocks, is how strategy is shaped.

[00:28:33] **Ridd:** Yeah, I could see how that's really important in an open ended AI native product, like finding that building block that unlocks an entire new area of exploration. That's a cool way to we've been talking a lot about product. I want to zoom out a bit and talk about the org a little bit, because something you said to me is how org design is a design problem. So I'd love to hear you talk a little bit more about that. And maybe you could share some of the design considerations that are [00:29:00] top of mind for you right now.




## [00:29:01] How Joel thinks about org design 

[00:29:01] **Joel:** I think matching people to problems is, critical. I think in my head, I used to think of that as a coach during a basketball coach, during a timeout, sort of like diagramming plays, right?

Like you're not taking the shots, but you're sitting next to the player and you're like, okay, my sense is that the best shot is from like the wing. Well, like, what do you think? Do you want to try that either? It works or doesn't. You come back, you can look at the whiteboard. You're like, okay, we're going to like, try a different play. I've actually come to a different, a different, Coach metaphor here, which is, it's much more about building the right lineups and finding the right matchups and just putting people in a situation to succeed. And it's much less like, play by play, and it's much more given the state of play, given the score, given the competition, I'm going to like put these three people together on the court, five people in this analogy, and sort of like, see what happens, like, see if they are the right fit for this situation, this problem.

I actually find this pretty fun. Like it's, when I did this with, with Chad at [00:30:00] Airtable, we literally like had a figma of all of the teams, all the projects and all of the designers. And you just sort of like. Reorgs are, no laughing matter and you want to like, be careful with them, but in the safe space of, of sort of manager, uh, exploration, you're like, you know, it would be interesting if you took This guy's technical chops, this person's user empathy, and this person's kind of like craft and you threw them at this problem.

Oh, you know what? And there's like an eng manager there. Who's like really loves user problems. I think that combination could work. There's this kind of like, magical chemistry dynamism thing That is really fun to create as a manager.

[00:30:36] **Ridd:** I have a smile on my face just cause I can see how much you're lighting up even talking about it, which is, it's always super energizing to hear when someone gets genuinely excited about the thing that they're doing. Maybe a different way to learn more about how you're showing up as a leader is, you know, other different things from your experience, maybe Cora, maybe an air table that you're kind of taking with you into this new [00:31:00] opportunity and using it to shape the way that you're thinking about what the design org can be, because in many ways you're given this blank slate.

I mean, you could literally do anything in terms of how you want this to be set up and function. And so. What past experiences are shaping how you want to approach this new campus?

[00:31:18] **Joel:** Yeah, that is a great question. I'm a huge believer in, product designers being deeply embedded in product teams.

And there's always a spectrum of sort of. Centralized design teams versus deeply embedded ones. I really like deeply embedded product designers. I think, it builds relationships with PMs and engineers. it gets you just like really close to actual user problems. And so the most successful teams I've been on, I think are. You know, you, you spend a majority of your time deep in your product headspace, deep with the user segment that you're going for deep with your PM. and then you're, you're talking to designers basically for, for crits, for sort of like team rituals, et cetera. But, , people come to our crits with [00:32:00] pretty fully realized ideas that are solving their problems.

And then a lot of what we're doing in crits is, your general sort of Quality, , and feedback loops, but also sort of squaring circles and trying to find connections and saying you seem like you're exploring this idea. I see this connection over here. Can we sort of talk through what the implications are there?

I think that leads to better work and, better cross functional relationships than a team that is primarily internally focused on the design team.

[00:32:31] **Ridd:** You talked about crit. Can you just kind of give us an overview of like, what are the rituals that you've put in place and different things that kind of structure the way that these different product teams operate?

[00:32:43] **Joel:** Despite what I hope is a, strong reputation and a strong sort of like, um, presence in the world, we are like small and scrappy team. And so, the analogy that I've used is, The research team feels like a 200 year old Harvard research lab with [00:33:00] just like these just astonishing, geniuses working on these hard, hard, hard technical problems.

Our product org generally feels a bit more like a YC startup that has gotten like exclusive access to that research, but is like not a 200 year old institution with all of the like maturity there, and so my answer to you is going to be like, Um, we do a couple crits a week. we do crits kind of within product and then we, we just started actually doing a joint crit between brand and product.

Another sort of part of the design org that we're really excited about is trying to be, um, just in lockstep with, with brand. We have some pretty, Big messages. We're trying to communicate to the world, our brand team, led by an amazing person named Everett. they're thinking about communicating to all of these different audiences.

And then we really want to translate those messages, those values, that safety mission into the product. And so we have a dedicated crit just for the places where that overlaps. So just for. Login [00:34:00] screens, onboarding flows, brandable moments inside the product, sort of copy. Um, so we're really trying to like, lean on that relationship and not let, as I've seen other teams kind of like drift there.

We have an interesting culture of, Slack notebooks. I think this comes from our research origins. I'm not positive. most employees at Anthropic have a dedicated public Slack channel called Joel notebook or Ridd notebook, which is basically just like a stream of consciousness for whatever you're thinking about.

It can be work in progress. It can be things you found in the world. It can be provocative documents that you want to sort of toss in the ether and see what people think. it's a really ritual that I've never seen anywhere else, but I'm, I'm completely addicted to now. and so our designers are often posting, just like really interesting, challenging stuff.

a prototype that they hacked together at an evening cause they were inspired and then woke up the next morning and it looked like a disaster. And they're [00:35:00] like, I'm just going to put this here. I don't think it's good, but I want to just I don't want it to just like totally disappear into the dark. Eight times out of 10, it disappears into the dark. And two times out of 10, somebody notices it and is like, wait, the connection to this other thing. I just talked to this researcher. This is a great cross org pollination thing. The researchers have notebooks, the designers and engineers have notebooks and we're in each other's notebooks.

And so you'll post something and a researcher will say Interesting. I just tried a new model that turned out to be really good at this particular thing. I wonder if we could pair that with this UI and make something interesting and then vice versa, that the direction goes as well.

[00:35:36] **Ridd:** That is so cool. Like I will totally steal that. I, it decreases the bar for like, what is shareable in a really, Really, really drastic way. Like there are so many times where I was thinking of things, especially, you know, different prototypes that maybe are like not anywhere near the roadmap, but I still think they're cool.

And it's hard to dump that in a public channel because it almost feels like you [00:36:00] are distracted. Where if it's my own notebook, it's a safe space. Really, really cool.

[00:36:06] **Joel:** That's totally right. If you're going to adopt it, I'll, I'll then give you the dark underbelly of it, which is, it creates a lot of bright, shiny things, in a sort of like largely positive, but sometimes distracting way. And like we, we talked about the fun part of prototype culture and solutions in search of problems. The not as fun part is like, we're a small org, we need to focus, we need to prioritize, we need to deliver things that are shipping fast and solving real problems. the more tendrils that are sneaking out of the solutions in search of a problem end of the spectrum, the more discipline you need at the other end to say That's so cool.

It's not for right now. I think the cross pollination and the inspiration is 100 percent worth it, but it, um, it increases the burden of focus discipline saying no, which again, if you think of us as like an early stage product startup, that is, uh, discipline that we, that we need.

[00:36:59] **Ridd:** Anything else that [00:37:00] we're not talking about in terms of just how you approach your practice as a design leader or different ways that you are actively trying to bring the best out of the designers on your team?




## [00:37:10] The importance of psychological safety

[00:37:10] **Joel:** I'm just an enormous believer in psychological safety. As a necessary precursor to risk taking if you look at like a lot of the things we've talked about, solutions in search of problems publicly posting things that you don't know are good yet trying to do both ambitious future looking work and near term tactical work. It's creatively risky to put this stuff out in the world and in, in even in an organization, the size of ours. And so, I am a huge believer in. People needing to feel secure and comfortable in who they are as designers, and that largely comes from just, People management, the practice of people management and the culture that we're, that we're building.

And so, we put, Kim Bost is, uh, another design leader on the team. Um, she and I both just spend [00:38:00] a lot of time talking about individuals and talking about the situations that they're in, what their form of genius is. Are we bringing that genius out? Ways big and small that, like, they're not bringing their best and, we're working to just create the space, create the, the, the environment that each person feels that they understand their own genius, that they're in a position back to staffing where that genius can be brought to life.

Expressed and that, when they trip, because they inevitably trip, the net is pretty close and mistakes are, because they tolerated, but like welcomed and encouraged and you learn from them in a supportive environment and you sort of pick yourself back up. I was lucky enough to have this in my kind of first true design manager in Rebecca Cox at Quora.

She was just like, move fast and make a bunch of mistakes. I was, maybe employee 10 at Quora and, uh, everyone was shipping production code at that time. We're all in this room. It's like the two founders, my boss, Rebecca, who was [00:39:00] essentially, a pseudo co founder and, you know, seven engineers and me, I pushed a change.

To, uh, to production that took down the website. And I didn't know how to fix it. Like I didn't even know what I'd broken at some point, Adam, the CEO stands up like in this tiny room, takes off his headphones and in like a fairly stern voice was like, Someone needs to get the site back up right now. Someone did all fine. I was like, well, I'm going to get fired. Like that was it like good two weeks. Like it's been fun. Literally like that hour, Rebecca's like, we're going for coffee. We walk, she lets me vent. She lets me feel bad. And then she was like, if you're not breaking the site, you're not pushing enough.

This is a good sign. This is a sign that you are like trying stuff, moving quickly in the line of fire. That's about code. But I think that. Ethos is something that I really care about. I want designers taking big swings, being in the thick of [00:40:00] decision making. That is going to mean missing some swings Back to the coach analogy, like that's what management is here for.

That's why you're there to understand it, to like deal with the emotional fallout. The emotions of high stakes jobs are very real. I think people, deserve to not only deserve to be treated as like whole people and supported in that way, but the work gets infinitely better if you, if you, uh, treat people that way.

[00:40:25] **Ridd:** Something else I know you care a lot about too is the interview process. You went as far as to call it sacred to me, so can you talk a little bit about why and then like how does that shape the way that you structure this process?

[00:40:38] **Joel:** Where we've landed both at Airtable and at Anthropic is something that doesn't maybe look all that different from other processes, but I think in some small ways, some lessons learned, especially at Airtable , have shaped it.

So one thing that Chad and I used to talk about a lot is, do you give away the answer key? The question that every candidate has is What are you looking for? Like, do you want [00:41:00] case study A or case study B? And we debated for a long time, like, is it bad to answer that question of sort of like, Almost literally, like, what is your rubric?

And I just come down strongly on the, like, you should give candidates your rubric and let them like, give it their best shot. And so this was manifested very recently in that we just hired our first design engineer. And as I was understanding the sort of the scope of the role, side note, the diversity of skills and creative talents that come under the umbrella of design engineer right now.

Truly mind bending, but, you know, we ended up like thinking there were these sort of two qualities that we cared about. One was like deep craft, deep interaction expertise. Now there was like systems and scale and, elevating the work of the whole, the whole team as a, as a unit. And so, you know, we put both of them in the job description.

We had all these interviews. Candidates were like, Hey, I can show, interactions I've made myself. I can show design systems I've built. Like, what do you want? than, than. having them guess we were like [00:42:00] the first role, the first person that we're looking for, we deeply care about this craft and this like interaction excellence.

So we'd like 70 percent of your portfolio to be about just like how you view the craft of execution. As a side note, we'd love to see a few sort of systems and scale things, and it just, everyone wins. Like we get a clean look at the skill we care about and the candidate experience I think is much better.

Another thing that we've done another another slot that that we sort of had it at Airtable that I ended up bringing over here is a Generative exercise that's sort of a brainstorming exercise Give someone a sort of fake opportunity And you just sort of like riff for an hour. I think there's a lot of To like about that, one obvious one and one maybe not as obvious one.

one is just, I think ideation is one of the hardest things to screen for in a portfolio review. People are, designers are so good at portfolio reviews now. I mean, it just, the level of care and [00:43:00] craft and storytelling that people put into these narratives is astonishing. And I think you do get a good sense for like their second diamond execution work.

I think what you get less of a good sense of is like, you know, Given a weird, hard, ambiguous problem, side note, like Anthropic is nothing but weird, hard, ambiguous problems. Where do they go with it? and we were open to lots of different ways of exploring. You could be a, like, throw a hundred ideas out in the first 10 minutes and know that most of them are garbage.

You could be a like frameworks person. You could think like. of this problem space, and how do I sort of reason through it? you could be a, I need 10 minutes to myself to just like think, and then we can talk about it. There's lots of ways to like, pass this interview. but that's a skill that I found very difficult to assess through portfolio reviews. The less obvious benefit of it is it's really fun for interviewers. At a scaling company, you're just asking your team to do dozens of interviews a year. And because you want the interview process to be predictable and formulaic in a good way for, for, um, you know, fairness and equity to candidates.

[00:44:00] it can just feel like pretty dry and boring and repetitive for your interviewers. And the generative stuff is really fun. We encouraged our interviewers to like. Get in the mix and throw out ideas, be inspired. I conducted countless of these at Airtable. We had an interview around like, what if zoom wanted to add like a sort of offline community, like meetups feature.

I was constantly surprised by the ideas that came up. I was constantly present with the candidate. I wasn't just waiting for keywords. I was like, Oh, like you're taking this in a direction I didn't expect. Like, let's, let's, uh, let's play with this a little bit. And like, I think that leads to better candidate experience.

And, and I think, uh, uh, better evaluation.

[00:44:40] **Ridd:** All right. Before I let you go, I want to zoom like all the way out because I know you're thinking a lot about some of the longterm implications of AI and its impact on designers and much more than a lot of people who are not so deeply embedded in this space. So super broad question. What's something [00:45:00] that's on your mind right now when you look into the future and imagine where this could be headed?

[00:45:04] **Joel:** I'm a big fan of the jobs to be done framework. And one of the sort of distinctions that's made in that framework is sort of, um, functional jobs and social and emotional jobs. I'm really interested in the social and emotional jobs that, AI can fulfill. there's just such a rich.

Interesting space there that is, that is rich for designers to explore. I think it is very much at the application layer. I know you had Jason on a few weeks ago. I think Dot is exploring this in one of the most interesting ways and really leaning into the things that people need that like people need.

Productivity tools have not delivered. I did user research, with someone a long time ago, whose beloved pet was dying, and they had to decide when to euthanize, and there was this kind of decision of like, You're trading off time with this beloved pet [00:46:00] versus putting them out of their pain.

And they talked to Claude about it extensively every day. They would sort of like a report how the pet was doing. Claude would comfort them and this person was sharing, like, You know, he's looking better today. I think I might have another week. And Claude would say like, I want to remind you that yesterday was one of your low points and like, to not get too excited about this change looking at this pattern, I, I think we're close to this, like, moment , that you will need to cross.

there's so much dialogue about the functional stuff. There's so much economic societal analysis about what happens when AI can Do work. I think as designers we're responsible for that and not going well, but also parts of humanity that are not functional, the parts that are about our personal lives and our emotions and our relationship to ourselves and to the world.

And I think this technology has as much or more potential to be a, a partner there as it does in the more. Kind of [00:47:00] executional productivity space.

[00:47:01] **Ridd:** I can't imagine a more beautiful place to end Joel. This has been so great. Super high time to value. I just had a smile on my face the entire time listening to you. Like it's so clear that you care about this, that you're energized by what you're working on. So thank you so much for taking the time today to share a little bit with us.

[00:47:18] **Joel:** I'm honored to be here. I'm a huge, a huge fan of the podcast. So thanks. Uh, thanks for having me.

