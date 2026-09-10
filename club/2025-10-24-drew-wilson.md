---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: 6gmih5JChrQ
slug: 2025-10-24-drew-wilson
source_type: descript
source: descript://Drew
guest: Drew Wilson
host: Ridd
title: "Design’s Github Moment"
published: 2025-10-24
duration_min: 59
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] 


## [00:00:00] Why Drew is starting Opacity

[00:00:00] **Drew:** what I do now, which is design and engineering is not only something that I do for work, but it's also like a hobby. And it's what I like to do for fun. the idea of getting to build a software workflow the way that, you know, I would like it to work and the way that I think would be the better way for it to work, is super fun and, uh, motivating because not only am I building something that I think other people will dig, but I'm gonna like it, right?

I have this idea of what the ideal workflow can be for building software, I'm trying to. meld the opacity vision with what that is, right. I'm not just building a software tool and seeing, maybe it works, maybe it doesn't. I have this idea of like, here's like, I think the best way I can work.

Having been a designer for almost 30 years, engineer for almost 30 years and doing management for like the last 15. and working with teams and having my own teams working on teams, I feel like I've got a good idea of how this stuff can work and I just wanna make the tool [00:01:00] that enables that.

[00:01:01] **Rid:** what part of it's broken to you? when you look back on your experience, where does the pain exist that you're then using as the entry point to this workflow and kind of reimagining things?

[00:01:11] **Drew:** if you're just a designer, it's super motivating and super fun to be finished with your design. Nothing's ever totally finished, but you know what I mean? Like, you're, you're delivering it and you're like, my gosh, it looks so good. I can't wait to see if it turns out the way I hoped.

Uh, and that's a very fun feeling. but if you have the unfortunate circumstance to also be an engineer, you know that most of the work is in engineering. It is not in design. And by most, I mean, not necessarily Headspace, but I mean, the length of time spent building the thing, uh, is mostly engineering.

And so when you get a design that's just literally the starting point, you haven't even actually done any real work yet. It's just a pretty picture. if you are an engineer designer, the pain happens as soon as you finish the design because you, [00:02:00] you have this designer and you're being like, yeah, it looks so good.

And then this overwhelming feeling of dread, of like, oh my gosh, I haven't even started. Now I gotta build the whole freaking thing. And it's just a horrible feeling and I'm just sick of feeling that feeling. and so that's one of the main, , reasons I'm building opacity, is to get rid of that feeling.

[00:02:21] **Rid:** I like that you used the word workflow because that's something that I've been gravitating towards so much recently. Like we're not even talking about features like this is this opportunity and time where we can kind of just fundamentally reimagine the workflow for how software gets built and how we interact with people and at what points along that journey.

So then when you kind of imagine this potential future where all these problems go away, what do you believe about that future that then is influencing the very specific product strategy decisions that you are making? Early stage with opacity.

[00:02:53] **Drew:** we're at a point technically, and we have been for a while technically, where there can be a single source of truth, there is [00:03:00] no separation between design and engineering. That's how it is today. And the tools that exist today continue to further that gap between those two disciplines.

Like Figma, for example, has dev mode, like in the tool, in the sales process, they say y'all are separate. but I don't think it should be that way. I don't think it technically has to be that way. Just we don't really have any tools yet to give us a single source of truth. So we no longer have designers, editing and manipulating this source of truth over in their design tool.

And the engineer's doing the same thing in their source of truth in the code. And then this person's trying to keep in sync with that. And that person's trying to keep in sync with this. And they're always separate. and they're never the same companies will spend their entire lifecycle trying to get them to be in sync, but they'll never be in sync.

And so it's a massive waste of manpower, woman power, and it's a massive waste of creativity as a, and money. Uh, and, and we can just get rid of that. And I think that it will be gone. And I'm hoping that opacity is the way that that will happen. I think in the [00:04:00] future we'll have a single source of truth and it's not gonna be this double split thingy going on.

[00:04:05] **Rid:** what does that look like from a workflow standpoint? Then if both people are working in the same source of truth, like, can we just go a little bit deeper?

[00:04:12] **Drew:** It can be explained pretty easily technically. If you take a look at, let's say Figma, 'cause everybody listening to this is working in Figma, uh, which is a great tool. if you're working in Figma, you're clicking and drawing boxes and, and rectangles and adding drop shadows. behind the scenes what's actually happening is there's GL code that is rendering what a drop shadow is, what a stroke is, what a box is, the size, everything.

Right? And so there is actually a single source of truth in that tool. There's the code and the display of that, right? But the major drawback is that Figma decided to build their canvas, not in like CSS browser technology. They built it in WebGL. So I mean, it's kind of browser, it runs in the browser, but it's not the do.

Right? Uh, which is what products use software products use the dom. And so [00:05:00] now that is essentially just a pretty picture. It's totally useless. you can't really have it also be the dom. and so there's a bunch of tools that have been built to like, oh, let's inspect it with AI and then like we can copy out the React and you can paste it in over here.

But that is, that is still furthering the gap. 

[00:05:15] **Rid:** it's a bandaid. 

[00:05:16] **Drew:** yeah, if you ever copy and paste instantly, you have two sources of truth. So that will never work. Um, to get to this feature where there's a single source of truth.

Figma already did it. Y'all, if we just had WebGL browsers, you who would have a single source of truth, but we don't. and so there needs to be. A single source of truth where a designer can draw things on a canvas, but it's actually creating, you know, this underlying dom object, actual browser code, CSS driven code.

And then the engineers just grab those things. They're not copy and pasting, they're grabbing the actual code and referencing it from their code files. And you can do that through NPM packages. So you are going to Remove the code from the canvas and put a state, an MPM package in a particular state.

And [00:06:00] you call that a version like version one, right? And then the engineers pull that down in their code base. They're not manipulating it. They're never changing it, they're never actually interacting with that code. They're just displaying it and then maybe passing in some props to change how it displays, right?

But it's all coming from this, canvas. And then you update it and you create a version two, right? Or a version 1.2 or whatever. Uh, and they update the package. The way that engineering has always worked and works today, nothing changes about that flow. And for the designer, there's still drawing on a canvas.

Nothing changes about that flow, it's just now we have one source of truth.

[00:06:34] **Rid:** How do you think that impacts the way that designers collaborate with engineers then?

[00:06:38] **Drew:** There's a couple answers there, and I think like the longer term answer is, you know, what is a designer and what is an engineer? 


## [00:06:45] What's the future of "designer"

[00:06:45] **Rid:** Let's go there. I think that's more interesting than talking about eliminating handoff, like that's table stakes. If we play

this out a little bit, like what's the world

look like in your mind that you're trying to create?

[00:06:53] **Drew:** Handoff fully eliminated. I wanna delete the, uh, need to ever code out a design again from the history of [00:07:00] planet Earth. That'd be great. You can still do it if you want to, but you don't have to. I don't think that an engineer in the future, 10 years, five years from now is gonna look the same or have to be the same, or have to be as smart or as knowledgeable as they are today.

Um, I am majorly enabled by Claude Code, right? I could do so much more than I could ever have done before, and I don't mean it made me a better engineer. It makes me more productive. As a matter of fact, I don't think Claude. Any coding agent I've ever dealt with is really the best engineer I've ever worked with, right?

if you're a very senior engineer, you can easily guide it and see where it's going wrong and help it along, right? So that means it's not smarter than you, it's just faster than you, faster than you'll ever be and could build way more. Right? And so I don't think, engineering is gonna be the same or the engineer profile will be the same.

Uh, going forward. I think there'll be a lot more engineers and I think we're that, folks who never made it up to senior level will be able to be super [00:08:00] productive and build really cool things. and then on the other side, the design side. I think the same thing's gonna happen. it's gonna take a little while longer on the design side because design is not the same as engineering.

For example, engineering, you can have an interview to figure out who's gonna be our next engineer, and you put 'em all up against this coding test and can they do the code or not? There's really one-ish way to do these things. and so it's very easy. That's why you can benchmark these coding tests, try to benchmark AI's, design, taste.

You can't. It's kind of, you know, subjective. People want different looks here and there. it's very different. but there is this threshold. You could tell when something's good, right? And so I think that enables more people to be designers than we'll be able to be engineers. because at some point AI design will get good enough that it's always gonna look good enough.

And anybody can be a designer at that point. Literally anybody, the engineer, the actual designer. You know, the soccer mom, the football dad, they can [00:09:00] all be designers. and I think that is the future that we're going to. And so I think the team dynamic is gonna be very different. This idea of designers and engineers in these two profiles, kind of building everything with the PM in there, delivering messaging messages in between.

I think that's gonna go away. Uh, I think it's gonna be around for a while, but I think eventually it'll go in. I think there will be, even now, teams starting startups, younger teams that will not adopt that model at all. And when tools like opacity come to, into existence and cursor and clog code get even better, it's just gonna be more pronounced.

I think the, the way that teams are built.

[00:09:34] **Rid:** Yeah. 'cause in that world, you just have a much greater percentage of people on a team that are committing code. Maybe the types of code they are shipping is a little bit more archetype driven. Like some people will gravitate towards the backend. Myself, obviously, like I don't plan to go too far outside of, you know, front end and basic functions kind of thing.

Like, I still wanted to design, I would just be doing a little bit more design with, you know, at this like component level. And I guess when [00:10:00] I play that out in my head, I still have a bit of a black box in my mind where I'm like, what is the tool look like that I'm using? Because I, you know, for instance, I've been using a lot of Claude Code and Warp lately.

That's my new jam. I think it's awesome. I mean, I feel like I have superpowers. Like I'm just, I'm just shipping stuff. sometimes it doesn't feel creative, you know, it's not great for iterating it. It is powerful, but I'm. sometimes I'm designing and sometimes I feel like I'm like, I am not really designing still, and it feels like I have to pick these very different paths when I want to contribute to the product, am I gonna enter the code world or am I gonna enter the design world?

And listening to you talk, it feels like you're creating this almost like hybrid middle ground a little bit, but I'm still not a hundred percent sure what that looks like. Maybe in your mind. And then what the touch points are between me as someone who in theory is probably doing more visual exploration of code, getting that to engineers.


## [00:10:57] The importance of components in an AI world

[00:10:57] **Rid:** I'm imagining you probably have to what, get it back [00:11:00] from something like a GitHub back into the canvas. Like can we just go a little bit deeper into like what is that middle ground look like? What are some of the core product mechanics that you're trying to build around?

[00:11:10] **Drew:** coding agents will always work best in the existing coding paradigm we have today where it, uh, understands logic, it uses components and these libraries. And, cobbles give everything for you. And I think that will be the way that AI continues to excel. It's just that a human interfacing with cursor or with lovable or whatever, they don't really need to know or care how that stuff works.

Uh, but it is happening under the hood. And I think that highly systematized way, a framework like React, which has a ton of documentation, and a bunch of examples, and it is a lira that says, here's how you do these sorts of things, is a perfect playground for AI because through LLM, it can in natural language, understand how everything's supposed to work and tie together.

And that's why it excels at that stuff that doesn't exist in [00:12:00] design today. There is no systematized design. The closest thing that we have are code components when you take your designs and turn 'em into front end components. And so I think that that is still going to be the best way for AI to build out designs, but we don't have this giant repository of a systematized way to build a design.

opacity is, is trying to do that. And so to double click into like how it works as you're asking, The designer, if they want a pixel push and they wanna like get all the rectangles perfectly rounded, um, they can in opacity. It's that same sort of canvas tool that you would expect in Figma.

and then it generates whenever you click, you know, publish, it generates these NPM packages or Ruby packages or you know, PHP, whatever you want. And the engineers or the AI in most cases will pull that down and use that in the code base. and designers are pretty familiar with this.

they're familiar with, Figma variable system where you can create variables and you know that if I'm gonna have a [00:13:00] button, I'm gonna make the text a variable so someone can change it later. Right. They can create an instance and change it. Now that in engineering is called. Props you're passing in.

Props is typically what's called properties. So you have like a button text property, and you can customize it. So you pull out the button and you customize the text over here and it shows up here as a different text, right? And so that same thing is how code components work today, and that's how opacity works as well.

As a designer, you are setting up these components and you're setting up the button text, so you can maybe change it around the corners. You make that a prop, right? Um, and then the engineers have access to those props, or AI has access to those props everything. In opacity. Every design and component you create is actually what I call under the hood.

It's called a node. It's similar to a dom object. it describes in object format, the design, how it should show up, you know? that node is that systematized design I was talking about where now there's this one way to describe a design, [00:14:00] that AI can rely on. And so then in the future in opacity, you have this massive community or marketplace or whatever.

'cause you can, make these components you create for free, the base UI library, for example. Or you can make 'em for free or for sale. and if you had thousands and thousands of these UI libraries, AI now will know what taste is, what good stuff is, right? it'll have this massive, base to pull from when creating designs.

Uh, and we'll know how they're similar and how they're different. 'cause they're all built on the same system. so in the future. When it comes to like working together, a designer will still be able to just visually design, but they'll be able to go further if they want. Right. They'll be able to build out that whole design library, right.

that aspect of it. Um, design system and then the engineers as a designer, it could be another tool that you use or you could have an actual engineering team and they'll know how to work with those opacity components. Um, 'cause they already do, because there's nothing crazy or new about them.

[00:14:57] **Rid:** Okay. I wanna speak to a very specific person listening, [00:15:00] which is this person who is like, listen, you talk and you talk about variables, assuming that everybody uses variables, but there's definitely people listening that are slinging rectangles, grouping things, eye dropping, everything. And there's

probably this underlying question, which is like, man, if this is where the world's moving, where's the technical threshold that I have to get to, to even be able to make this jump into this next era of tooling?

[00:15:23] **Drew:** you used to be able to design and you still can your UI using Photoshop. Uh, in some video game UIs, they do use Photoshop because sometimes it's a little easier, than even Figma. Just there's, there's more editing tools there. it's getting less and less these days.

so you used to be able to build a tool like that, which is not even like gl it's like its own proprietary thing. you can design 'em whenever you want and you can, and you can pass it off to whoever you want, but you are going to be creating a, a much slower process and in the future, this idea of, oh yeah, we're gonna raise money, and then we're gonna build stuff for a couple years and then we're gonna launch it.[00:16:00] 

I think it's gonna be gone. and if you are still operating under the mindset that, oh, it's all right if I take a month to come out with this design and expect the team to now redo my design from scratch in code. I think you're gonna find that that's not acceptable anymore. that's probably all right.

You could still design things the way you want. you may just get less customers or clients, um, because they're gonna want that thing to be done. As soon as your last pixel is dropped, they're gonna want it to be ready to be pulled into their code base. And if that's possible, what in the world are you actually offering them?

That's actually valuable. you might be hired as an art director to help direct these things, or maybe you design it all in opacity and someone else comes in and like, you know, adds the variables. But my heavens, it is not that hard to add variables. So if that's the sticking point for you, then, I don't know, just take the 15 minutes it takes to figure it out.

Like it's not that hard.

[00:16:53] **Rid:** yeah, yeah. Even for myself, One of the tasks that I've been chipping away at is like setting up semantic variables, [00:17:00] incorporating like base ui, really making a component library, first class citizen. And I'm doing that for a very early stage product where I'm basically doing all of the design and the value prop used to be with systematization was like, well, I'm gonna standardize things and make it easier for everybody to be on the same page.

It's just me. I still see value in it just 'cause it makes it so much easier to work with some of these new tools. That's been a Flipp man. Like it's just totally different even down to, you know, three to six months ago.

[00:17:28] **Drew:** And that's a dude that's such a good point. Like I, I'm with you. when I was first able to add variables to design components, I think it was Figma was the first one that did that. Um, I was all about it, right? Because that's what I was already doing in code. And so I'm like, yay, finally I can do this in my design tool, but.

There's like no reason 

[00:17:46] **Rid:** What does it mean? 

[00:17:47] **Drew:** have a big team, it it, there's no re what are you gonna get out of it? Figma is like, yeah, you have variables. Like you literally can't export these into any normal format. We make it extraordinarily difficult for you to format. We also [00:18:00] don't supply them via our API.

Uh, and so you can't actually, it's like literally useless other than for the design team to like make designs easier. But that world is old world now. and so this idea of like, why should I add variables? It doesn't really give me a lot if I'm a small team. That is a true statement and there is what is fig MA's real reason for that.

There's no real reason, but. To a tool like opacity. There is a real actual reason because it's what your engineers will use, it's what the AI will use, it's what everything will use, right? And there's this idea of like, ooh, props. It sounds super complex and, and react and everything, but when you're designing a component, like I said, that button component in Figma, and you give the button, you make that be a variable, right?

it could sound confusing, like how do I make it a prop in opacity? There is no idea of like making a prop, this thing, it's just you're exposing the variable you're already using publicly, right? That's all that you do. You just click it and it's now a prop. 


## [00:18:59] Product strategy when the table stakes are high

[00:18:59] **Rid:** I wanna pull back [00:19:00] to product strategy for a little bit because, you know, you're talking about all these things. I'm nodding along because this is also the future that, you know, I kind of see and I'm, I'm excited about and yet, you know, you got a lot of things to build my friends, you know, like the table stakes are high in a lot of different directions.

'cause you're describing the design tool. You're also describing. You know, I guess you can see a world where this starts to feel a little bit git hubby, but more visual, and I don't, you know, we can talk about what that take would be, but there's so much surface area there. So you, as the design founder who has this vision and you're trying to think about, how do I bring this into the world?

How do you think about sequencing and the right entry points to even start to get momentum into this space where there are, you know, big teams and big players?

[00:19:41] **Drew:** it's a massive concern. One thing I do not wanna do is launch a tool that is like, Hey, we do kind of the same thing as Figma, but it's built on the web. CSS thing. Like, that's not what I wanna launch because that's not gonna work because why would someone switch? Um, you have to do the full end to end, and that has to be your V [00:20:00] one.

Uh, because someone has to have the experience using your tool of like, okay, I designed my thing. Like Figma, what the crap is different about it. Well, what the crap is different about is I can actually see this thing working in code right now, right? where I'm trying to insert is into design teams at, you know, any, anywhere from a startup to like a large enterprise, be like, Hey, use opacity and here's what's gonna happen.

You're gonna pull a capacity, you're gonna click our one click import from Figma. It's gonna pull down all your code com, all your design components, and all your variables into opacity. Make 'em one to one. So now with one click, you're in opacity and oh, snap, everything's here. And you now get two things that you didn't have over at Figma.

One. All of that design is now code and it's in code components and your engineers can pull it down at that very second, uh, and start using it two. or this is something we haven't talked about yet in this discussion, but you can now collaborate with your team because in opacity there's this whole PR flow built in.

And you mentioned GitHub and I'm [00:21:00] a huge fan of GitHub. And, uh, engineers dunno how good they've got it for so many years, being able to collaborate, and designers have nothing. So, uh, the ability inside the opacity tool to like make changes and it actually, you know, you don't have to care or know about it, but created a different branch behind the scenes.

And so you have a PR button, you create a pr and then your design team members can go in and review all your changes down from like the very, you know, did I change the transparency? Did I change, you know this, the corner radius, it shows you everything visually as well as, List it out, and then you can approve that pr you can comment on all the same sort of things you can do in GitHub.

Once you approve it, it gets merged in and a new version package is created. so that whole flow, end to end has to be done and ready. And so that's what we're working on right now. So, we're pretty close. Uh, the next major thing for us to do is to, redesign, opacity in Opacity. Um, and as we do that, we'll be going through and using the [00:22:00] tool bunch and, you know, find all the issues and everything.

And if we could design opacity, which I had already designed in Figma, in incompleteness, if I can design that from scratch in opacity itself, and then take those NPM packages and use them in opacity itself, uh, that's gonna be, we're golden. 

[00:22:19] **Rid:** Have you started that process yet?

[00:22:20] **Drew:** I, I've done it a a few different times, but we're in, in the middle of making like larger architectural changes.

So you just delete that crap and then you gotta do it again. So we're almost at the point now where we're gonna be ready to do it. I'll be, uh, live streaming that as I do it. 

[00:22:35] **Rid:** Nice. I mean, I'm excited about that. I've been making a point to design in-flight while using in-flight for every single checkpoint, just to get feedback on what I'm working on. And sometimes the level of inception is too much, like it actually

is like a little bit aggressive. So I feel for you at times.

I'm sure it's gonna be a little bit trippy.

[00:22:53] **Drew:** Yep. A hundred percent. Yeah. And I, I've been working on another tool to help me build faster. 'cause I like [00:23:00] building with AI and it's been super fun. but there's like some limitations to building with ai, one of them being that it can't see what it's doing. So I've been a big fan of Claude Code.

I use Cursor, and then when Claude code got a little better, I started using that directly in VS. Code. And that's all I use now. and yeah, I love it, but it can't tell what the crap is doing. Like the most common thing that ends up happening when I work with ai, it's like, all right, just log some stuff to the browser, log it.

I'll copy the logs and I'll paste it back in and be like, alright, I see what's wrong, then I'll try to change it. We'll log more and copy and paste. I'm like, why the heck are you doing this? There should be, it should just have a browser. And so, um, I built this thing over the last 10, nine or 10 days called Loop, to help me build opacity faster.

And it is a new IDE, To work with, uh, AI and it uses your cloud code account and then it has a browser built into it and it automatically sends and receives [00:24:00] between the AI chat and the browser, those console logs, as well as it has much terminal views in it. So the server side can send and receive server logs to the AI so it can run as continuous loop.

Additionally, it has Chrome MCP tools built in, so it knows about the Chrome browser and it can use all the dev tools in there including taking screenshots. So it can be like, oh, I see what's on there. I see what's wrong, blah, blah ba. 

[00:24:24] **Rid:** Wow. 

[00:24:24] **Drew:** see what's on there. I see on its own. it's really cool. And uh, we launched that in a little bit here, a couple days.

[00:24:30] **Rid:** 10 days, huh? You're, you're quite the hacker.

[00:24:32] **Drew:** Well, hey, been doing it for 30.

[00:24:35] **Rid:** yeah. No, it's cool. I mean, you're, you're talking, I'm like, man, I would use that tomorrow. Like, the amount of the amount of screenshots that I paste into warp right now is absurd.

[00:24:45] **Drew:** Going like, why has nobody done this yet? 

[00:24:48] **Rid:** it's absurd. I have another, you know, maybe slightly philosophical question about the future of design as it manifests in the future of our tools, and there's the spectrum that I have in my head where on one end we [00:25:00] are really leaning into the ceiling of what the models can become and a lot of quote unquote design, which maybe is more slinging around components.

Who knows? That's happening with natural language and the AI is, is, is kind of leading the charge a little bit. And on the other end of the spectrum, we have complete direct manipulation where we have, you know, toolbars everywhere and all these different controls for everything that you'd want to do. When you think about the future of opacity, how do you think about where you wanna fit on that spectrum?

[00:25:28] **Drew:** no, it, it is definitely a good point. I myself am, you know, more like I want all the introspection, because I'm an engineer and I like that kind of stuff, and I wanna direct ai. I don't think everyone's that way, and I don't think that's gonna be the most common thing, especially going forward.

I think people are gonna be like, I don't freaking give a crap. Just do whatever you want. Just make it work.

[00:25:47] **Rid:** when

the baseline is good.


## [00:25:49] Iteration \> Prototyping

[00:25:49] **Drew:** Yeah. Yes, absolutely. and I think that's where it's gonna be. And so for opacity. From the beginning, I've decided I don't want to play in the prototyping tool space.

What [00:26:00] so ever. Like that's being done to the nines. People are doing a great job. I don't wanna do it at all. I'm concerned more about the, not the zero to one, but the one to n So the evergreen software, like the actual company and the reason AI falls down on its face so much for folks trying to build something is that one shot things incredibly well and you're like, oh my gosh, look at all this.

And then the pain starts because they're like, no, no, no, no, no, no. Put the thing over here. No, no, no, no, no. You just change that button to this color. Make. Put it back. And it's at that point when you're trying to like direct it visually where you want. 'cause most people, all they care about is they want it to look a certain way and work a certain way.

They don't care about how, And that is like a more visual way to work. Um, and so we don't really have those tools yet. Cursor is not that, clog code is not that. and, uh, and even lovable and et cetera, those prototyping tools, they're not that because you can't say, here's what's in my mind.

Here's the [00:27:00] look I want. Stick to this, please. Uh, you need something like a design system. and so opacity essentially is a way to make design systems really easy, right? Uh, visual components. Um, and so building with opacity means you're defining what this stuff should look like. And so when you ask opacities ai, Hey.

Can you make me a toast component or a button or a form? It will stick within your design system. And then you can also change a creativity slider. So it can go a little outside of those bounds, but it's gonna stick with what you've got. And so that way as you're building with it, it's gonna be like a true design or engineering partner.

It's never gonna like throw something on the screen that's like, where the heck did that come from? You know?

[00:27:41] **Rid:** You're reinforcing my growing belief that design systems are just gonna be the foundation of almost everything in terms of how we design and explore software in the future.

[00:27:51] **Drew:** in the populace, there's this idea that a design system means it's not creative and. I can understand that in the way the design systems are [00:28:00] used in that we design something in Figma, the engineers code it out. Now it's coded.

Now if we wanna like change the design, it can't be too wild of a change. 'cause then they're gonna have to recode everything. 

[00:28:11] **Rid:** Mm-hmm. 

[00:28:12] **Drew:** why it's not creative. it has nothing to do with anything else other than that one thing. And the reason for that is we're talking about man hours, woman hours. We're talking about spending money to recode something when it already works.

Why the crap would we do that? Just change the design slightly. Don't change it massively. Well, if you didn't have two sources of truth, all that goes completely out the window. And it doesn't matter how crazy you change your stuff because you have these components that are automatically created for you.

And so the whole recoding it thing goes away. and so design systems can be as creative as you want and you don't have to feel like. You can't work outside the box you already made for yourself.

[00:28:52] **Rid:** Can I push on that a little bit? Because I want to, I wanna be sure I understand your vision for how this components can [00:29:00] work in a system like this, because. you talked about the value of like not having to rebuild something, but there is also the value from a system standpoint of this standardization where it's like, yeah, well this component is also used in these three other places.

So it's not that you can't change it because it creates unnecessary work, but you can't change it because it also is like not going to just work out of the box with these other places. So it's like that's a value proposition of design systems, which I don't actually think is as relevant in an AI world.

That's more enterprisey in my mind. You know, it's like, don't mess it up. We're trying to create a system where you can't mess it up. Whereas there's this other value of design systems that has felt like it's increasing in, dialogue that I'm seeing over the last even six months, which is like, okay, we need more semantic structure for these models to be able to interpret in order to effectively create designs on our behalf and wield style guides and things like that.

And maybe by separating those out. You're a little bit more focused on the ladder, like, do we need more flexibility in components too? Does that even make, I am not even sure if there's a [00:30:00] question there. It's like I don't want to let you get away too easily. Basically, with that last answer.

[00:30:04] **Drew:** I don't know what kind of component we could take here, but if you're, if you're gonna say like a table row or something like that, right? and you have this component and it gets used in multiple places, you can feel free to go as bananas as you want in a world where you don't have to recode the thing.

you work at a place that is using this table row of multiple places, so you gotta be mindful, uh, you can't, you know, delete all this, you know, all these individual data tabs or something like that outta there. 'cause then what the heck are people gonna use? So you have to be mindful of that, but I don't think that's really the restriction that we've had to date. To date. We've had the restriction of, okay, our taper row looks like this and it's made up of like 20 divs and it's wrapped in this way and that way, and this way. We don't really wanna change that structure 'cause we've coated it all. So if you're gonna change stuff, it's gotta keep the same structure.

But the CSS can change, the colors can change, maybe the padding, you know, we can make it look pretty different, but the structure's gotta stay the same.

[00:30:56] **Rid:** makes sense.

[00:30:56] **Drew:** That goes away with opacity. You could totally [00:31:00] change the internal structure, the divs, everything. You just want to maintain the props. That's all you care about.

As long as they can continue to pass in the same bits of data, with the same contracts, the same prop names, maybe, you're good. you can change the underlying, the internals of it. You can change everything about how the CSS works. Everything about how the divs are structured, absolutely everything you can change.

Uh, and so you can get it looking very different, and still maintain that contract that you have with the engineers and with your, with your system.

[00:31:29] **Rid:** If that makes sense. I like drawing the line between cosmetic changes and foundational changes

[00:31:33] **Drew:** it's kind of on the designer, whoever's in control of that, to decide how it looks, right. and so you'll have more control there. You just have to maintain, uh, the contract.

As a matter of fact, in opacity, when you create props, you add your props, as I mentioned before, you're just basically making, exposing a variable you're already using as public and then you can actually deprecate. And so what that does is, in the TypeScript files that we generate, it will deprecate those props, meaning that the IntelliSense of the IDE, the [00:32:00] person's using the engineer, so the, like the VS code or whatever, they have this thing called IntelliSense that will, when you hover over, uh, a variable or a proper something, it'll have this little window that pops out and it describes everything about how that is.

It will deprecate it. So I have like line crossed out. It'll do all that cool stuff for you. Um, so that way regular human engineers and also AI engineers know when to not use something or if this is no longer supported, all those hints are already like, built in, which is really cool. And it just, just further showing that like you really can change a lot, in the past or even today.

The reason we don't do it is just because of van hours.

[00:32:35] **Rid:** right now the line exists between your high fidelity vector and actual front end code, there's a, there's a line in the sand that's drawn between roles basically, and it's very clear that designers or you know, whatever, that more visually inclined builders, if we wanna refer to it that way, are going to leapfrog that line pretty far and start owning most, if not all of the front end.

Like [00:33:00] for someone that is listening to this, who they don't want to become a full stack engineer, they want to. Keep being a professional designer and be paid to think through the UX of complex products, and they're willing to do whatever it takes to secure their spot in this new world. Like how far do they go?


## [00:33:18] The new technical threshold for designers

[00:33:18] **Rid:** Like how far into the front end, how far into the coase, where is that new line in your mind where you're just like, yeah. You know, if you, if you got to this point, like I think you could probably be a UX designer who's dabbling in code, and this is where we would start to get a little bit more technical, where it's like totally fine.

Like, you gotta be more engineering minded to succeed in this area.

[00:33:37] **Drew:** Yeah, I think in the past the advice has always been if you're a designer and you wanna take things to the next level and be even more productive and valuable in your craft. Learn engineering, so that way you understand how this stuff works. Because ultimately you're building software ui, that is actually built using code.

And if you don't understand how code works, you, you're gonna have a very limited [00:34:00] view of, the best way to build this design, which I think is true. it just helps to know engineering a ton. But I don't think you'll have to, because we're telling engineers now, don't worry about known react, just use ai, you know, 'cause it's true, it's gonna know it way more than you will.

and there's no reason to. There's no reason to. So starting now, I don't think it makes a ton of sense for a designer to have to understand front end engineering or code because they're probably not ever gonna be using it in the future. and if all you care about is the design and the, the, you know, the UX of the thing.

Something like opacity is exactly what you want because you're not just delivering your clients a picture, you're delivering them working code that you've already worked through. You've already added the events to, you've already prototyped it in opacity.

And so you've already got it all working and now you're delivering frontend engineered code, uh, to your clients 

[00:34:56] **Rid:** it? 

[00:34:56] **Drew:** so you can continue to only care about design.

[00:34:58] **Rid:** I never thought about it that [00:35:00] way, but you're right. Like the pushback on people who have no idea how code works is, again, like in a vector based

tool. They're slinging rectangles and they're making something that makes absolutely no sense in CSS land. Like it's just not feasible for X, Y, Z reasons. But if you are using a tool that is DOM based. If you made it, then it's real, like you don't actually have to understand anything.

That box is already checked. I've never thought about that before. You're right.

[00:35:27] **Drew:** it's that idea of the canvas being the same as the production environment In Figma, it is not that way, nor will it ever be that way. however, in other tools besides opacity uh, I think even framer, uh, uses react. the canvas you're using is the production environment.

It's a browser rendering, HM and CSS. And so it will look one-to-one, and that's a benefit. Like I remember, uh, Figma would often talk about, we made our canvas best, we made our canvas faster, we made our canvas faster. But in the world of real software products, you don't necessarily want that.

If there's some [00:36:00] slowdown with the way that you're deciding to rendering stuff based on your CSS properties. You wanna see that. Before it goes into production. and so it's not actually necessarily a benefit to make anything faster in the canvas. Uh, if you're doing a dom brace, canvas with the idea of everything in here is gonna go into a dom base product.

[00:36:20] **Rid:** I've definitely

created my share of lags from using the Figma to framer plugin, where all of a sudden I'm like, yeah, maybe I should turn on that blur a little bit.

[00:36:29] **Drew:** yeah. That's the thing is like you put all this crazy stuff in Figma and then you put it in code. You're like, this is like 

[00:36:34] **Rid:** maybe the 10th and the 11th layers on this shadow could go, like, I probably don't need those.

[00:36:38] **Drew:** that there illustrates, like, I'm a big fan of Figma and what they've done for design. but I just don't think that they built, nor did they desire to build a software development or a software design tool. You can do that in there, but you can also build, you know, design a poster for your lost kitten.

Do floor plans for your next next house. design the UI for like a video game. you [00:37:00] could do all those things in Figma. It's a general design tool and it's great at it. It has this killer vector system. The new stuff with, Figma draw that like Raji and stuff are working on is super killer, like making Illustrator even more accessible 'cause you're already using the tool.

and so I don't think it needs to ever go away. I just think that it is not built for software design. full stop.


## [00:37:21] How to differentiate yourself as a designer

[00:37:21] **Rid:** Okay. Then let's talk a little bit more about the future of the role, because if I combine a few different things that you are talking about, you're talking about this idea that. One. I mean, the models are just gonna get better and better at design. Like it's scary to think about how good the baseline for AI output will be even 18 months from now.

That's an eternity, you know? So maybe that's variable number one. Variable number two would be, I think we're gonna have a world where high quality components that you can sling around on a canvas based UX are gonna be way more accessible. 'cause the reality still is like the best libraries. Like, yeah, [00:38:00] maybe you have some charity project where someone's like recreating them in Figma, but it's like not easy to just start messing around with Shazi end, you know, for me. And so you can see how this type of environment gives designers access. I mean, maybe you even have future community plays in mind where it's like, yeah, I could pull from thousands of libraries of components that are all exceptionally high quality and the AI is so good at using them. My question then is like, how does a professional UX designer differentiate themselves in that world?

Like, what are the traits that I could bring to the table maybe two years from now that would get me the really sought after jobs when I get this level of fidelity and interactivity and polish effectively out of the box?

[00:38:43] **Drew:** you could do that exact same thing you're describing with templates, uh, going back 20 years, right? There's always these templates that you could, that you could create for WordPress or for Squarespace or for framer, and people still encourage and people still make businesses.

Building templates today, [00:39:00] Shopify templates, et cetera. And so you can get going, bam, right away. Sign up for Shopify, click buy on the template, I'm done. Right? You could do that already, but still people are paying to have custom Shopify sites built. just the nature of being a person is you want to be a unique snowflake and you wanna show that you are different.

and so you want your website and business to look a little different. And of course there's gonna be the people that are fine with templates. There'll always be those people. And maybe, I don't know, maybe it's the majority of people, but I think there's always gonna be, especially as a company gets larger, there's always gonna be a desire to differentiate themselves.

And so the only way to do that is to go out and find somebody to help you do that. Now, I don't know if that means that person is gonna build something a hundred percent from scratch, like zero pixels on the screen, drawing every pixel themselves. 

[00:39:48] **Rid:** Gray rectangle number one.

[00:39:50] **Drew:** Yeah, I mean, we don't technically even do that today.

I mean, you used to do that if you're in like, Photoshop version two and below where you would've to like literally draw everything. Now it's like the tool [00:40:00] creates the drop shadow for you, you know, creates the, the gradation from thick shadow to like transparency. You don't have to do that anymore.

Like, so a lot of it is kind of done for you. but I don't know when there is a proliferation and there will be a proliferation of really well designed components that Theis are just gonna use out of the gate. And you can just like pick and choose a style you can natural language described and the band there, it all is, and they could even tweak it.

So it's totally unique to you technically. where do you fit in as a designer? I don't know. I think you're gonna be the ones building those components. I think you're gonna still be hired to be the person maintaining the opacity file or the whatever file. Right? there's still gonna be engineers.

They're gonna be employing AI and they're still gonna be designers. They're gonna be employing ai, but realistically, there's gonna be a lot less. But maybe that's fine because there's gonna be a lot more companies, because it's gonna be so much cheaper to start a company. There's gonna be a lot more companies, so maybe everyone's just gonna be going instead of like one large company with everybody.

It's gonna be a bunch of smaller companies and that's where everyone goes. I don't know.

[00:40:56] **Rid:** That's kind of my thesis actually for all where this all heads. 'cause we [00:41:00] only, we

stopped the conversation about, well, you need less designers. And also I, I do think you can make the argument that the space for design differentiation is shrinking. It's becoming more important, but it is shrinking because even the templates that you were talking about, they were five out 10, you know, a good one was five out 10. We're all getting close to a world where the defaults are gonna be seven outta 10, eight outta 10. Like we got a little, little head space left for design to truly come in and create something that is actually unique, but. I think that desire for unique, hopefully a hundred Xs, just because it's so much cheaper to make software and everybody wants to build something and everybody wants to be unique and there's room for design to slot in.

In that world, maybe that means more designers are fractional. That's kind of part of the thesis for me as well, but definitely kind of where I see things going.

[00:41:49] **Drew:** I agree. And I don't know, I think the web and this idea of software design is such a new industry, 30, 40 years old, uh, it's not that old and it was the [00:42:00] Wild West up until 15 years ago. we weren't even sure which browsers we wanted to use. There were so many browsers and you had to like build 'em all.

We weren't even sure what front end tech we wanted to use. It was just the wild West. I mean, that still will always go on, but everyone's landed on React. things are starting to solidify. It used to be hobbyists where the only people doing this, and then 20 years ago that changed. And now there's people who are like, I wanna move up the ladder and become a go from junior designer to senior to then staff.

Like, that's their idea of what it means to build in tech. To me, that's totally foreign, uh, 

[00:42:31] **Rid:** Hmm 

[00:42:32] **Drew:** because I'm, I'm in here for a hobby. I'm doing this no matter what. But it's a regular job now, you know? And so when it becomes a regular job, there's gonna be tons of money pumped into it, which has been, there's gonna be a ton of innovation, which there has been.

And at some point, it's just like any other job. A lot of things are gonna get obsoleted as they get automated. and so just because, you know, pixel designing used to be a thing doesn't necessarily mean it will be a thing. You know, like, I don't know. if you look at Apple, Macs 26 IS 26, you [00:43:00] know, that thing.

Apple used to like set the bar, like the bar that everyone went after, but with this release, they didn't like, they did not come out with the best. they rolled back that, liquid glass so hard. there's like one place where you can find liquid glass and that's like the toggles ever.

Other than that, it's just a hundred percent gone. and it's now like frosted glass, but it's basically just pure white. I mean, you could barely see anything behind it. I mean, they just rolled it back so hard. and now you're stuck in this like. guess it kind of looks good. honestly, it doesn't look very mature.

It does, it looks like a for fun sort of thing. It does not look like the next evolution of design whatsoever. I don't imagine many people are gonna be mimicking it like they used to with everything. and so I don't know, are we at some sort of limit, you know, with uh, how good design can be,

you know, for this particular use case, a desktop machine, a phone, right?

There's gonna be new UIs like vision and you know, the glasses stuff. Like, that'll be totally new and fun. But for what we have, I mean, are we at the limit? I don't Is there a need for us to like, come up [00:44:00] with something new and unique every time other than just it's new, buy it, 

[00:44:03] **Rid:** I mean, even what you were saying about how much we've kind of zeroed in on react, for instance, There's a flywheel that exists with AI too now, where of course we're going to pick the thing that the models are best at because it accelerates our ability to build the thing, which then creates even more demand for people to pick the thing.

And it's like, you could see this loop tightening to a point where there is a level of standardization that pros and cons. Right? I mean, I, I don't wanna be at the top of the scur any more than anybody else does, but we probably are given that perspective, especially as someone who's seen these different cycles, you know, like you have a, a bit more of a zoomed out view.

And I guess I'm interested then in, given the amount of surface area and the size of the swing that you are taking. How does that shape the type of people that you wanna surround yourself? And won't say that you're gonna hire someone that has the title UX designer, but presumably you're gonna hire people that bring the [00:45:00] skill of design to the table.


## [00:45:01] The types of designers that Drew wants to hire

[00:45:01] **Rid:** So then what signals would you be looking for in that type of person that would get you to the point where you're like, yeah, that's the person that I wanna go to battle with.

[00:45:08] **Drew:** for me, building a design tool, one of the prereqs is people gotta understand that space and they have to have lived in that space in, in some capacity. but also it may be counterintuitively, I don't know. they can't just be a designer. there's not really, much space for just a designer on a team where you're building a product.

Uh, that. You know, as a small team, we use ai. you gotta be building stuff. I mean, at this early point, if you're not able to jump in and start writing code and start understanding the code, what are you doing right? there's not a lot of design artifacts, which is crazy.

Like, even if you're a company of the size of Figma, once you design that ui, there's marketing design artifacts. It's not a lot of other design artifacts, you know what I mean? Like the product kind of is what it is. It's not like expanding enormously. They add on these other teams, but I don't know, I kind of feel that way about most teams.

I don't know, like that's why [00:46:00] design teams are always the smaller teams compared to engineering. It's 'cause there's just not a lot of artifacts that come out of the design org, um, that are, that are pure product, right? They're mostly, marketing and that sort of thing, which. If you're running a business is just as necessary.

And honestly, some of the coolest stuff there is when I think of like really well designed stuff. Oftentimes it's marketing stuff that I think of. It's not yes, necessarily ui. Um, so it is not a knock at all on marketing. Probably the most important job in the design org for a business is the marketing stuff.

that's how people know about what you're doing. But, on the UI side, at this point, people's had to understand and have worked in design tool, like for me to work with them. But I'm, I want folks that are engineers, cause that's the bulk of the work.

[00:46:43] **Rid:** For someone listening who's inspired by the things that you're saying, you've done some job of convincing them that this is where the world is headed. And I'm sure there's some subset of people listening that are like, man, I just need to future proof myself. maybe that's even a little bit scary to hear you say some of these things. Is there a practical next step that somebody can [00:47:00] take? Like they're listening to this over the weekend, they open up their laptop on Monday. It feels so big and ambiguous to, become an engineer. Like how, how do you get started? Do you have any advice for people in that position? I,

[00:47:12] **Drew:** you know, up to this point, the idea would be I'm gonna become an engineer. I'm gonna watch these videos on these courses, et cetera, et cetera, and figure out how to become a good engineer. I don't think you have to do that. I think it would be useless to do that because it's gonna take you a couple decades to get to be a really good senior engineer.

there will be no need for you at that point to be a really good senior engineer. You can just be an average engineer and be just as effective, right? there will always be a need for senior engineers. So if you're inclined, please become one. But you don't need to be, you just need to start working with AI and, try to separate in your mind AI as a, uh, political statement and as a cultural thing from the practicality of working with AI to build a product.

if you're afraid of AI or you don't want AI just. Set that aside and be like, this is literally just an LM is not a [00:48:00] scary thing. It's all it knows is what we feed it. Uh, it doesn't come up with things on its own. we're surprised by how it can pull information at seemingly, randomly, but all that information we've, we've already given it, right?

Um, so you don't have to be scared of it. open up claw AI if that's too intense for you. Open up cursor if that's too intense for you, you know, lovable bolt V zero, any of those things, and just start building something that you wish existed, uh, and just see how far you get, start prototyping that thing.

Inevitably, what happens if you use those V zero lovable tools, at some point you're gonna be like, well, I can't really get any further in this. I need to like actually dive in a little deeper. The way that you do that is you eject out of those tools. You take your code base and you put it in GitHub and then you use VS code and cloud code or you use Cursor and those will give you a little more fine grain control, uh, the more mature way to build software.

then you could turn that into, uh, a more real product. But be warned that this is all very engineering. if you ever want to go beyond just this little, like let's build a fun little game thing in [00:49:00] lovable, it's very engineering. There is no way as a designer to just like build something like that.

[00:49:04] **Rid:** What's the opacity timeline right now? Give people an idea of where you're at and what some of the next milestones are. We're gonna hold you to

them rigidly too, so any dates will be

[00:49:12] **Drew:** Please do.

[00:49:12] **Rid:** in a YouTube thumbnail.




## [00:49:14] Upcoming milestones for Opacity

[00:49:14] **Drew:** Yeah. Next major milestone for us is to, like I said, for me to redesign opacity and opacity. At that point, I'll be able to start pulling people in into Alpha. So hopefully we're a couple weeks away from that. Let me rephrase a few weeks away from that. the loop tool will be out, um, probably later this week.

when you listen to this podcast, it should be out. You can test out that Alpha Loop is interesting in that. I think it's the first product I've ever built where I never opened up a design tool even once. Um, and I built this purely just with Claude Code and then also with Loop itself a little bit.

and the reason for that is I do want it to look good and look designed and be attractive. It is not right now, but that's all right. I'm going to design Loop inside of Opacity. So [00:50:00] I've already designed Opacity in Figma. I'm gonna redesign it in opacity, but Loop will be the first thing designed for the first time in opacity, 

[00:50:08] **Rid:** we can have a part two little screen share. Heavy, I'd love to see some of that. That'd be fun.

[00:50:12] **Drew:** Yeah, that'd be super cool.


## [00:50:13] How Drew is doing things differently as a design founder

[00:50:13] **Rid:** One final question before I let you go. For context, for people listening, this is not your first rodeo as a founder, design founder, so what are some of the lessons that you've internalized from earlier in your career that are shaping how you approach this startup this time around?

[00:50:28] **Drew:** I had always bootstrapped, never raised money, my whole career, up until 2016, and I raised money for a company that I was already bootstrapping for a couple years, raised a small seed round. A couple years later, sold that to GoDaddy, it became their e-commerce platform. Then I, did a straight up VC backed company.

got into yc. That was a bank that I ran for four years called Letter. and then I, I tried raising it, uh, for another company. It didn't, didn't totally work out. and then for this one, I did raise money, uh, from the get go. And so I raised a pre-seed so that way I could start working on this stuff more seriously.

the approach that I'm [00:51:00] taking, with this one. Is kind of a, a merger between the other two. When you're bootstrapping, you know, you're trying to hold onto every single penny that you have and not spend anything more than you can because you literally can't. You can like maybe go into credit card debt, which I did, in order to fund things, but that's about as much as you can get.

You can, you don't really have deep pockets. and so you're kind of limited. and then on the VC route it's totally opposite. You have as deep pockets as you raise, and then you can spend that as quickly or as slowly as you want and it's all up to you. and so what I did with that one is I went out and built up a team over the course of a year of about 10 to 12 people, which I'm not gonna do this time.

I'm going to just go even slower, uh, in terms of hiring and stuff and not because, uh, I want to over correct for some mistake I made. But because you don't need to, I already have like a bunch of AI agents working for me, and honestly, they're doing so much more than hiring a team of seven engineers. it's insane.

It is absolutely insane. and so [00:52:00] doing things a little differently because of the state of product building today. but very much, we'll be doing like a traditional VC backed company. it's just a better way to go about it, especially today where, if you have more money, you will have more, more eyeballs and, and you'll win.

in most cases, if you have the most eyeballs. I mean, if you go back and you look at, just competitors in general, like even in the off space, If you look at, those that won and that went public, for example, the one that raised more money more quickly won, right? Uh, you can, you can look at, uh, FinTech and see the exact same thing play out.

It plays out everywhere. It's a real phenomenon. It's a real thing. if you wanna win, that's what you gotta do. you gotta be the biggest player in the market. Now, I'm not saying this is the only way to do it. If you don't care about that crap, you just wanna make something for yourself or, you know, just something you think is cool, go for it.

you do not have to do this, but for me, I, I do want to do this. And so that's why I'm taking that route.

[00:52:54] **Rid:** in this space you probably do too. It's a hot space. Just you're gonna be competing

against people that aren't VC-backed, [00:53:00] so,

[00:53:00] **Drew:** Yeah. It would be very difficult to build something like this bootstrapped, at this point in my journey, it'll be identical. but it's, once you know, the launch comes and then afterwards. Having the dollars to pull in the right people because here's the, here's the, brass facts or however you say that phrased

[00:53:17] **Rid:** I don't

know, but it hit me. 

[00:53:18] **Drew:** bra facts, 

[00:53:19] **Rid:** Brass 

[00:53:19] **Drew:** whatever.

I think I,

[00:53:20] **Rid:** tack.

[00:53:22] **Drew:** the golden facts, is that if you have the best investors behind you, you will be able to attract the smartest people because they will see that as being the least risky and the most likely to have a big win. Right? And so if we're all spending eight hours a day, eight to 16 hours a day working on stuff, and we can choose where we work on stuff, we're probably gonna wanna choose the one that we think is gonna have the most impact for the world and also for us personally.

and that happens when you have the best investors. You're able to attract the best team members in there. And that's like you talking about flywheel earlier. It's a flywheel. and so there is literally one [00:54:00] way to go about it. purposely doing it helps you get there.

[00:54:03] **Rid:** I'm excited to follow along with the journey and I appreciate you coming on and sharing a little bit about the vision, where you're at, and it's inspiring. And also I just kinda want this to exist, you know, like this is the way that I want to work as a designer. This is how I want things to evolve and take shape.

I'm excited and I'll be rooting for you. So

appreciate 

[00:54:23] **Drew:** Thanks, man, and and thank you for having me on. It's been super fun talking about this. Lemme just caveat what I said earlier. It does not mean I will be successful in making that stuff happen, but I'm gonna try. I just don't want sound like 

[00:54:35] **Rid:** That's all you can do. It's all you can do. It's all you can do. All right, well, I

appreciate you, Joe.

[00:54:39] **Drew:** All right, you too, man. Thanks again.

