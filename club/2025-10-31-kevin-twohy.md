---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: zNUx4OpTj1U
slug: 2025-10-31-kevin-twohy
source_type: descript
source: https://web.descript.com/0b35f5ed-3e0c-477f-a0e6-32c3647d7493/55375
guest: Kevin Twohy
host: Ridd
title: "Designing the first ever tabletop game console"
published: 2025-10-31
duration_min: 39
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] One of my favorite designers is Kevin Towy, and he gave me a glimpse of a new project that he designed recently called Board, and right away I, I knew that I had to turn this into an episode because it's one of the most unique products that I've ever seen. So here's the one minute video that he sent me so you can see for yourself.

Guys wanna play a game? How about something a little different or maybe a lot different? It's called board, a revolutionary new way to play games together, face to face. A big, beautiful screen for everyone to gather around. That's not a tv, and that lets you play. Physical game pieces. See, board knows what each piece is and what it does, which means that you can do things like this and this and that.

Aw. Wanna run a chaotic kitchen where everyone has to work together? Yes. Zap Space Rocks with a [00:01:00] Mega Beam no help. Rescue Tiny Travelers. Board comes with all these games included and ready to play fun, fresh, A rich. Games you can't play anywhere else. Games that bring people together, sharing experiences that were never possible before with friends, with family, face to face.

So what do you say, ready to play.

pretty cool, right? So this episode is the complete behind the scenes everything from designing the operating system to creative direction, to prototyping with physical devices. It's about as fun as it gets. So let's dive in.

[00:01:38] **Kevin:** I worked on this other big hardware project called Mirror for several years, and it's the same founder who started Mirror, who started board. So we have done a large scale hardware project before and have worked together for years. So that was kind of my entry point in, and I actually had been, watching what this company, the company had explored many [00:02:00] ideas, some adjacent to this, some not, and kind of broadly under the banner of like human connection and, we all know what devices and screen time are sort of like doing to our social bonds and what are various ways we could use technology to bring people together.

That that's would kind of be the broad, overarching theme of what they were exploring. So I had been sort of observing that at arm's length. And then once they narrowed in on, okay, this is roughly what we're going to do, that's kind of where I, I came in and mainly came in. And maybe this is like a, maybe this is a good entry point to some of the shape of like designing a project like this, but I initially came in very focused on the operating system.

it runs Android, very, very low under the hood. But the, just like any game console you use, it has its own operating system that you kind of like navigate around to do various things outside of the gameplay that's like, this sort of thing. And this, this, if I zoom out, this is basically like the.

[00:03:00] Entire board os or a decent slice of it, and there's a lot of background blurs going on, so it's really chugging on this. I also, I know you have a lot of like, um, super duper Figma experts, uh, on the pod. I am committing every figma sin in the book. So like there's no design system. All of board is designed in including all the merchant brand and everything is in one single Figma file.

So everyone, everyone loves that. but yeah, the operating system, which that's where the kind of ui ux product design piece is the most heavy. it's an interesting kind of inside out paradox because that's actually the part of the system and the part of the experience that you kind of want the user to see the least and kind of matters the least.

You want them to enjoy the gameplay, and then there's the whole journey up until the point where they actually get to sit in front of a game. So let's say like. The marketing, the website, the commercial, the checkout experience, the delivery experience, the unboxing experience, all of that is completely, upfront and before the user even gets to any of these [00:04:00] like settings, interfaces or anything like that.

So I only mentioned that because this is where I started and was kind of my entry point to the product and the experience, and I kind of got hooked in once I saw a little spark of, of how it could be great. 

[00:04:14] **Ridd:** So then how wide did your spectrum of scope span then?

[00:04:18] **Kevin:** essentially got as wide as it possibly could. this project, more than probably anything I've worked on in the past had. The broadest scope. And I basically touched, you know, every inch, every pixel of the final product and like physical experience. And that kind of happened a little bit over time as I got, obsessed with things and dragged into things.

And if there's a little corner that needs exploring, I kind of can't help but walk through the door. I'm kind of going as far as I can within my skillset. And then when I cross over that threshold where I need some. Special expertise, say like 3D modeling, et cetera. Bringing in those specialists to, to help with it, like identifying them, briefing them creatively, being the one who [00:05:00] like holds the kind of like overarching creative story.

And for me that was, you know, somewhat of a new experience and acting both as the hands-on product designer and working with engineers to figure out like the nitty gritty of how all these things are supposed to behave. But also basically acting as the creative director for the entire project and making sure what we're showing on the web and what we're showing in packaging all sort of like rhymes visually and clicks together.

Uh, and I really enjoy that type of role. there's certain moves I think you can pull off or that, that really thrive in that type of setup. That's a bit harder to do with a larger team. Don't get me wrong, I wish I had a larger team, but.

There are certain things that just click when you're, working on the detailed interface design and helping produce the video commercial and designing the packaging I steal this phrase from our friend Mike Smith about brand moves and being able to figure out those moves as you go, as opposed to being forced to kind of define all the moves up [00:06:00] front.

Some of the moves that I think we kind of came to actually came fairly late in the game and came through, like figuring out photography and figuring out how to show the product visually. and then that comes through and translates to the web. so if you think about like the product, it's a huge digital game board, so.

You would think, uh, that's the hero. That's kind of the anchor. And the physical pieces are sort of like play the secondary role. They are very like nice and visual and cute, but at some point we had the realization, oh, okay, the pieces are the hero. They're the hero of the story and they're the hero of the marketing because they are the part that's the most unique, that's the most different from either like playing games on an iPad or playing games with the console.

but they also can be like the hero of a marketing story. So we always have to bring those front and center. one of the things that we, and this is not even a final version, but we iterated on over and over and over, is how do you show a game and one of the things we were trying to avoid, both in terms of the physical digital interaction on the [00:07:00] device and on web and basically everywhere, is try to avoid visual tropes that lean towards, say, like the app store Coming up with a design principle that pretty much all the time when we show a game, we show the game art and we show the pieces together and they sit together as a family. And you know, if you see like the final web design, we're using the pieces like very heavily as a, a brand element. And that's kind of what I mean about the pieces becoming the hero and then folding that back into the brand and folding it back into even like the printed material that goes into the, uh, into the device box.

So yeah, this was just a fun kind of carousel interaction that allows you to go through the games, but you can see literally the pieces are like front and center and sit in front of the game. Art.

[00:07:40] **Ridd:** When you were first brought in to start working on some of the OS level, DASHBOARDY types of design, did any of this exist? Like did, was there any brand elements? How much were you working with? I.

[00:07:53] **Kevin:** No, there was nothing. So you can see these are some like very early, um, or here is a good example of actually where it was like [00:08:00] medium fleshed out. And essentially we were trying to map out the development scope. So what is all of the software we're going to build outside of the games? And in order to do that, I basically created wire frames of that entire scope and we were sort of go going back and forth between like rough PRD and interface designs.

So these are all just, like I said, wire framers. There's no brand, there's no colors, there's no nothing. And right around this time we started kind of kicking off the brand explorations in parallel. But you can see here, you can get quite far and I can talk about prototyping and stuff. But I was doing a lot of prototyping on the physical device and on the physical device when the spatial and like ergonomic aspect is most important, meaning here, I'll play this video.

So things like figuring out the keyboard and like how big are things, how far away are they are, when did your hands get tired? What [00:09:00] looks too big?

Doing it on a physical display that's the same size and this is actually Figma running on the Android device, which is really fun. I could literally have, I'd be working on my computer here and I have the board over here and I can just look over and see the changes in real time.

[00:09:16] **Ridd:** Oh, very cool.

[00:09:17] **Kevin:** Oh, beautiful. And then The other fun hardware software prototyping aspect is just figuring out how the onscreen touch soft controls relate to the physical controls. There's three buttons on the device, basically like a home button and volume up. Volume down. And you want those to like click together well with the onscreen controls.

So here I'm gonna show basically simulating the device button clicks, interacting with the Figma prototype.

So that was a super fun prototyping exercise. I've talked about this a little before, but, and this is a, a pro tip for anyone prototyping hardware stuff. These little controls that I have here, I got off Etsy and [00:10:00] they essentially, it's essentially a keyboard. The, the OS recognizes it as a keyboard and you can send, uh, any keystroke you want, you can reprogram them.

So I have these in like dozens of configurations. One, lemme see if I can even get this on camera. Yeah. So this one has a knob in a button. This was, I was working on a coffee machine a couple of years ago, and so you can prototype out like different control schemes. And in this case we were pretty set with the control buttons on the hardware, but not exactly on how they interact with the software.

So that's a fun way to prototype hardware stuff using just a Figma prototype.


## [00:10:33] What Kevin has learned about designing hardware products

[00:10:33] **Ridd:** I would imagine most people watching this, myself included, have never dabbled in hardware, and that each time you are taking on one of these projects, you're learning a bunch. You're probably still making some mistakes. Even. Even the great Kevin makes some mistakes every once in a while. So now that you've kind of run this playbook a few times, what are some of the things that you're learning?

Like why was this approach different, or what were some of the ways that you were pulling from past experiences that shaped the way that you approached this project?

[00:10:58] **Kevin:** Starting with what's [00:11:00] similar, what's similar than, you know, to things I've worked on in the past or I guess uniquely with Mirror, there's a similar shape to the kind of magical trifecta that makes it work, which I would say is the intersection of hardware, software, and content, meaning the hardware form factor and the software that you build for it, and the content that fits into that.

All have to click perfectly. And if you do that well, you can create like a truly magical experience that even one of those legs of the stool coming off doesn't really work. So in the mirror example, it was the, the reflective display, the sort of like heads up, data layout of the interface and the way we filmed the content in like a black box studio.

So it was completely seamless and the illusion is complete. You can see yourself and the trainer sort of overlaid. And in this case, it's obviously like the form factor of the board, the OS level software. And when I say content, I'm really meaning like the games and those have to click together perfectly.

there are some tricky intersections you can imagine between the [00:12:00] operating system and the games. you want each game to have its own unique personality. And like I'm sure lots of UI designers here have geeked out on, like, remember the original Xbox menu or the menus in Halo.

So you want them to have their own unique personality that fits with the game. there are places where the os intersects with the game. Like, I need to connect my headphones while I'm in game. So figuring out those sort of, touch points can be a challenge.

So I think that's, that's just a similarity with like past mirror projects. other interesting quirks with hardware and software that I think people sometimes don't realize. it's common for a lot of these devices now to be connected to the internet. So you can always OTA them and you think, okay, well, we'll fix this later and then we'll OTA it onto the device, which is fine.

But, and this is getting into like nerdy details, but everything that exists in the operating system up until that OTA point you'll live with forever, because they're gonna be flashed onto units. They're gonna be sitting in someone's house. They gave it the next Christmas. So. That first cut of the operating system that [00:13:00] basically like loads up the OS image.

Everything that's in there that you have to lock quite early on, you'll never be able to change and those get flashed onto, you know, units at the factory. So that's an interesting kind of like point of committal. 

[00:13:13] **Ridd:** Which I would imagine there are quite a few of, right? Like the hardware is going through iterations

too during this point, or was it pretty much nailed down? it's not like you can continually iterate and just kind of chip away at this type of a product. So I'm kind of curious like how did that changes the design process?

[00:13:29] **Kevin:** with a product as complex as this, there are so many different drop dead points for changes, obviously, like the industrial design and materials of the physical hardware of the board device. Those types of things need to get locked first. Then things like the pieces, so you know, as you saw in the video, but these are just 3D, you know, 3D prints.

But the physical pieces, these also have, you know, long lead times in terms of the CAD and the design and the colors and the materials that have to be locked, you know, further in advance. But [00:14:00] even things that, you know, you might not think about, like printed materials that are gonna go into the box. Like, and, and you have to source those.

It's not just, we're gonna print 20 of them, we're gonna print thousands of them have to go source the paper and the materials and make sure we can have enough, you know, yield and those need to be locked, far in advance. And that, that creates some interesting dependencies on.

You know, we might think we can change things like, you know, copy and names and things on the website right up until launch. But a lot of these things are like printed in a physical printout that's already gotta be, the artwork had to be locked at the factory like a month ago, so that's already like baked in.

[00:14:38] **Ridd:** Okay. I kind of wanna zoom out and get the lay of the land for a second.


## [00:14:41] Project scope and overview

[00:14:41] **Ridd:** Like all the different things that we're talking about. What was the timeframe of this project? I know you're kind of coming up to launch. This is basically the long way. How long have you been working on this? And just ballpark, how is that allocated between the different types of Initiatives, whether it's the OS or more brand creative design, that kind of thing.

[00:14:59] **Kevin:** so [00:15:00] I've been working on board for a little over a year, start to finish. And so this stuff, is actually almost exactly about a year ago when we're starting to flesh out basically like the surface area of the operating system. And then there were certain things we know like we're gonna have this number of games roughly split across these game types and sort of audiences.

And it definitely did not follow a sort of water fall-ish path where let's work on the software for this period, let's work on the brand for this period. It actually pretty early, the work streams are going in parallel and we're basically working on the operating system, the games, the brand, the pieces, the physical digital interaction, and starting to figure out things like packaging and printed material.

From the beginning for that entire year and going in like tighter and tighter loops and getting them to click together more. I would say the core brand, the, [00:16:00] absolute minimum brand basics, which I would say I would define as like the logo and the two typefaces we worked at this firm called Mythology to Produce.

They had produced a couple of our big photo and video shoots, uh, for Mirror, which I can talk about. That's actually like a really key part of the creative process for this project was the photo and video assets. They produced that shoot for Mirror and they produced, uh, one of our commercials for board and they also did the logo and pick the typefaces.

So that process took a couple months and from after that, I think. All of the process of figuring out kind of the brand moves. Like I, I mentioned every time I say brand moves, I'm copying Mike Smith so you can, send him a nickel. But figuring all those out and exploring the web, I didn't even mention web, all kind of happened in parallel in these tight loops.

And you'll figure something out in the operating system that we can bring to the web or vice versa. so it was kind of in that loop over the course of a year. And in these past few months, [00:17:00] getting down to that kind of like, okay, it's go time. We have to finalize things and get them ready to ship. I think there's a certain class of products that basically have no MVP, there's no real like smaller crappier version of it that you can use to validate, is this any good?

You can validate certain parts of it, like you can validate that the OS is usable and you can validate that people think the commercial looks nice, but in terms of the whole thing, is it a good product that kind of has to be done altogether? And it kind of has to be the final version. Games are sort of like that.

The, the halfway version of it just does not work Mirror was a little like this too, but certainly for board It's not like on month three necessarily. We could have something in our hands and say, this is great, this is really coming together. It's like each piece of it is at like 30% of fidelity, and it might not be until quite late in the process when you have something in your hands and can say like, okay, this is feeling good.

And I, I totally remember the moment that that happened [00:18:00] for board. And it's like a very exciting feeling to see all of those, those threads clicking together.

[00:18:04] **Ridd:** I would imagine there's probably some relief involved too. 'cause you don't a hundred percent know if some of the decisions that you're making along the way are correct yet.

[00:18:11] **Kevin:** Completely. I, I've actually started to notice this on my projects that a good sign that you're onto something that I personally am onto something is I'll wanna show it to my wife. My wife kind of like, knows what I'm working on, kind of.

But, you know, it's, it's very separate and I'll notice that instinct, like, okay, she's gonna think this is pretty cool and I'll like bring it in. And so it was actually like, pretty recently before I brought this to my wife and said like, let's play. Not just like, Hey, look at this. Look at this cool little interaction.

Look at this demo. Like, let's play the game. So this is us playing a game. This might be my favorite game. It's definitely one of my favorites. It's called Strata, and this is a prototype, but I just remember feeling this transition from, [00:19:00] okay, I'm so aware of every single state and every single little quirk and what she's supposed to understand to like, we just start playing the game and having fun and like smiling and laughing and it just feels so good to have something that you worked on all these pieces of, and it's just fun.

And that's, what I was getting at with the MVP. Like imagine how much effort and pain you can go through to design the whole operating system. And then all these pieces need to be designed and created and it needs to be put in a box and shipped in the marketing website and the video shoot.

And like what if it's not fun? Then that's the whole ball game. It's like it has to be fun. that's kind of what I was getting at with the, the idea of something that kind of has no MVP. But yeah, this is kind of a fun moment and even just seeing people, I don't know, play the games and get like this huge smile on their face is really, really satisfying.

One last thing on this. one sort of design principle for board and for the physical digital interactions is to try to focus on things that [00:20:00] cannot be done with touch. And it really can only be accomplished or experienced through that like unique combination of physical digital interaction.

And I can give a few examples of things like that, but this Game Strata is one of those where. it's a puzzle game and it evolves like the x and y axis obviously, but also the Z axis you can see, and the board knows how tall those pieces are. And when a piece is resting on another piece, you're building these structures.

There's a little point in scoring system, but it's just a game that cannot be played on a tablet 'cause you don't have that third dimension. So that's sort of one of the design principles of most of the games that I think are really great. And it goes back to that principle of like hardware, software, and content.

All three of those clicking together in an interaction that cannot happen through touch or cannot happen through a board game that doesn't have like the software piece.

[00:20:51] **Ridd:** How big of a role did you get to play in the game design itself?

[00:20:54] **Kevin:** all of these games, we worked with a range of like great game studios [00:21:00] from, big established studios down to like smaller, like independent game designers.

There are a few of the games that I worked on directly, mostly on sort of, uh, I would say the more user experience ish aspect or interface aspect of the games. Strata is one of them. That's why this one is like near and dear to me. Uh, but the vast, vast majority of the game design and development work, board has, uh, some game design folks on staff, and then we worked with those like third party publishers to create the, the game titles.

yeah, so here is an example of like working directly on this game, strata, figuring out the states of what we call like the turn box and how you explain the scoring system to users. And it definitely gets quite, quite meta, like working on it directly in Figma. And then I'll go over and see the prototype.

[00:21:49] **Ridd:** Yeah.

[00:21:50] **Kevin:** That was obviously slowed down, [00:22:00] but you know, one of the things that I can definitely say learned through this process or picked up from great game design is timing and sequence is so critical. This happens, then this happens, then this happens. And if you do too many things concurrently, the player can't learn.

So for this game, you know, figuring out how to sequence things in the right way so that even the turn order and the scoring system becomes more obvious. And you don't have to explain everything through a bunch of tutorials.

oh, so this is, uh, yeah, this is where it gets very meta. this is watching a video of gameplay remotely and then working on updating the interface in my office and then seeing the updated interface on the device here. This is kind of a quirky prototype.

[00:22:47] **Ridd:** Man,

your job's fun.

[00:22:49] **Kevin:** It is fun.

Can you tell I'm having fun?

[00:22:52] **Ridd:** Yeah, this is cool. I've never seen anything like this before.

[00:22:55] **Kevin:** It is so fun. And so there's a lot of, um, that kind of loop [00:23:00] from, the live production game back into Figma, back into the game. And you, you know, you really do need to see it and see the kind of like spatial layout on the device.




## [00:23:09] The vision for Board

[00:23:09] **Ridd:** Zooming all the way out from a more product business strategy standpoint, what's the vision here? Like you rolled out with what, like 12 ish games roughly? Is the vision for board to have kind of control, everything's gonna be in-house? Is there opening it up?

Like, what's the future vision for something like this?

[00:23:28] **Kevin:** The vision is for it to become a platform like a game console, like, you know, any of the other game consoles on the market where third party developers can build games on board and take advantage of that. Unique, piece sensing technology so that they can build, games, that harness that mechanic, the physical digital interaction mechanic.

So there will be new games coming out that will get delivered to, you know, the board store. we hope that, you know, third party developers join [00:24:00] in and, and build great, great games just like they do for like the major game platforms.

[00:24:04] **Ridd:** Is there a game that you've been imagining in your own mind over the course of working on this for a year

[00:24:08] **Kevin:** once your brain is unlocked to some of the fun types of like physical, digital interactions that are possible. it's just really fun because just like with touch interfaces and, and, and or desktop interfaces and the stuff that we work on, some of the fun innovations are just not totally obvious from the start.

even like things in our world, like pulled a refresh and things like that, like someone came up with that, it's like, okay, you nailed it. That was a novel idea. No one had done that before. I'll show a couple examples, uh, of what I mean,


## [00:24:39] Video Is Here

[00:24:39] **Kevin:** this is a little sizzle that shows. Uh, some of the like unique physical, digital piece interactions. I'll just play this really quick. [00:25:00] 

So what I was gonna get at with that is once your brain starts to work in that way, you come up with little ideas. So I actually, since I'm not a game designer, I don't really come up with game ideas. I almost come up with like little interaction ideas of that would be fun just from feeling you feel certain things that just feel really good.

Like I'll show an example from like these ones, from this is a spy, uh, sort of like a spy puzzle ish game that you go through different levels in different cities, but these types of interactions feel really good even

here [00:26:00] where you're, um, using the piece to get a little viewport that shows up elsewhere on the screen. So I think the hope is that there's dozens of these, you know, innovative types of interactions, that other developers will come up with that we haven't even thought of yet.

[00:26:14] **Ridd:** Can we zoom back into the operating system?

What were some of the main design decisions that you were really wrestling with there? Like, given the vision, I now understand the importance of nailing the operating system because you're not just designing something that has to work for this moment in time, but this is what makes the core system extensible to capture that future vision.

Like what were the meaty parts of this that you were really thinking through? And also maybe even at a high level, I'm kind of curious, I've never designed anything close to an operating system for a piece of hardware like this that probably, you know, you kinda almost have to assume kids are gonna use too.

So how do you

even think about the visual language and the different types of, of patterns and what levels of familiarity to capture? I'd love to just go really deep into this part of the design process next.


## [00:26:56] Designing the operating system

[00:26:56] **Kevin:** Yes, definitely has to be something that kids can use. Of [00:27:00] course. what I'm showing here is settings. So that's only one part of the operating system. And obviously for any good game console, you don't really wanna be spending any time in settings. But things like the out of box, which, you know, this is like a really important part of device setup.

I guess one design principle was really trying to do anything we can to not lean into design tropes that are pervasive on like tablets, for example, when we don't have to, or if there's an opportunity to make it better. And one thing. As an example that was more challenging than I thought at the beginning was text entry.

We don't really want people to be typing a lot all the time, but there's certain things we have to do. We have to get the device connected to wifi, things like that. And you know, I mentioned the like underlying base operating system is Android and if you slap the Android keyboard on top of one of these like very designed screens, you can imagine, it just really like breaks the [00:28:00] experience and it's like, oh wait, it feels like I'm using a huge Android phone.

and you know, it's literally huge. Like it spans the entire width of the device. So we decided early on, like we have to build the keyboard. And building a good keyboard is, maybe I shouldn't say harder than it seems, but it's extremely hard it needs to be responsive. You need to design all of the alt states of each key.

You need to design the press state and the release state. So I'll show like, you know, literally building the keyboard out and each of these is its own little guy.

[00:28:33] **Ridd:** you kind of sandbagged your Figma file a little bit. Like you're obviously a very organized human.

You got all your props going, your variance.

[00:28:39] **Kevin:** there are some areas that are organized, uh, more organized than others, then this is the numb pad interface. And This was some early prototypes of the keyboard, just trying to get those kind of states down. And you can see it's not quite there. Like the latency is too high.

Testing keyboard. you know, [00:29:00] there's other things where you actually don't want the keyboard to be super large, for example.

like when it's invoked in settings. to talk about two different design principles at once. Really trying to like, keep the sense of depth and let the game artwork show through. Like right now I'm actually, this is showing four levels nested deep into like a settings hierarchy, but you can still see the game artwork back here and it kind of, it flows through and even the colors flow through to like show through these UI pans.

That was another kind of like design principle, use depth and use the game art. but here you actually don't want that keyboard to go, you know, full width just because you would lose all the context of this other stuff. So designing like a mini version of the keyboard that's still large enough for, fingers to type on, all those kinds of like UX challenges.

And part of what informed this design approach is that all of these things need to exist in quote unquote settings, but the vast majority of them also need to be invoked from [00:30:00] inside of gameplay. So things like this, I'm inside a game and I need to be able to pull, I need to reconnect to wifi, for example, or adjust the display brightness.

So you really want them to be very modular and portable and work the same way from within a game as they do from like the core operating system.

[00:30:17] **Ridd:** We've covered a lot of ground, but there's a ton to show, and I kind of want to just create as much space as needed for you to just walk us through what is most interesting. So are there any other details that we haven't covered that you're particularly proud of?


## [00:30:29] Figuring out the creative direction

[00:30:29] **Kevin:** One of the things that I think. It shows up across the project and presented itself several times, was basically just trying to get creative with the constraints presented to us.

Certain things that just like can't be done with the hardware or the operating system that we're working with and figuring out ways to kind of like either mask those or use them to our advantage. I'll show this, this is like a, a crappy early prototype of it, and, and a good example of like letting the moves reveal themselves to you.

So this game, [00:31:00] mka, and you can even see it here, 


## [00:31:02] Second Video Here

[00:31:02] **Kevin:** it just ended up being like a very beloved game. And I think everyone who plays it really enjoys it. Here I'll show this, meet Mka. The adorable pattern lives inside your board. Moka comes with a toy bag. Magic wand watering can brush and dryer to take care of your virtual pet feed wash brush.

So Moka ended up becoming kind of this like hero character and somewhat of a mascot for the brand. And this little animation is basically designed to get around like a boot litter issue where we, we might need to wait several seconds on this logo image and came up with this animation that's kind of timed to it.

And it's even modular, so it can be extended to different lengths. So that's kind of a, you know, many examples like that where we tried to come up with a creative design solution that like turned a shortcoming into something fun. And the real version of this that was, professionally animated and better than I could do has sounds that go with it.

And that's what shows up when you first boot up the device [00:32:00] and while it's like beginning to scan for wifi and download things. So that's like a fun little brand moment.

[00:32:05] **Ridd:** there specific examples that you wanna show in terms of how you helped. To flesh out these brand moves. I mean, it feels like there's just so much going on that in the creative direction. So maybe we could even just talk a little bit about some of the clear ways that you're able to see this evolution in your understanding of the brand and the different ways that it would manifest, or, again, to borrow Mike's language, like the, what are some of those moves that you kind of started to assemble over time?

[00:32:31] **Kevin:** I actually think figuring out the pieces are the hero was like a really key unlock in figuring out what some of the moves could be and how the content could extend out into marketing and the web and things like that. So at some point around that time, 


## [00:32:47] Here's Another One

[00:32:47] **Kevin:** I started just playing with the 3D models of the pieces in some of the image and video models and just trying to create these little scenes.

[00:33:00] This, by the way, I should say, is not that AI cannot do this. This is done by a professional character animator in 3D guy named, uh, John Hutton. that intermediate step like really helped our process to be able to create a version like invo that has its quirks, it has its little AI problems, but you can see it and it makes you smile.

And that like gave us the confidence to say, in this case, like the CEO would say, you know, I love this. We have to make it. And now I have like another problem for myself, but many, many cases where I would yeah, use some of these new creative tools or AI assisted tools to create a storyboard or a rough reference that we can look at and say, okay, this is worth doing.

As opposed to just like a little sketch or we don't know if it's gonna be any good. 




## [00:33:53] How Kevin uses AI tools

[00:33:53] **Ridd:** Can we just, can we go like one level deeper there like. getting into specifics, what tools are you using? Like what are the steps [00:34:00] that you're taking? Like if you have a rough idea in your head, then what? Because I'm sure somebody is listening to this who is in that place, but doesn't have that muscle memory of like where to turn from that point.

[00:34:11] **Kevin:** totally. I mean, it depends on what the output needs to be and I love, uh, visual electric RIP for this reason because it just allowed like a great interface to all the models and was very visual and maps how I think, I hope someone, picks up that baton. But typically for video stuff I was using like the VO and cling models from within Visual Electric.

Now I'm kind of like hopping around to the, those different tools to use them more directly. Uh, I even used it for some like packaging concepts, like nano banana and even like GPTs image model is kind of decent at taking. Some rough packaging mockups and say like, apply this to a cardboard box. The size of this is a photograph, but like, I could design this in Illustrator even things like this to create a little [00:35:00] mockup of we were playing with materials and what should the bags be like? And most of this was actually like traditional design, but using, either like nano banana or gpt image model too. Take a, this is like a physical printout, but take a file like this and it knows with some trial and error how to wrap that around a like 3D box.

It's not gonna look perfect, it's not gonna be usable for anything in production. But these projects, like a lot of things, getting a 60% version is so valuable as opposed to like, we're gonna wait for the 3D modeler to do it, or we're gonna wait for a ca file. So I used, you know, those tools for a lot of like intermediate steps on this project.

[00:35:41] **Ridd:** I guess I totally assumed that this was a part of the process that you would've just outsourced to a packaging agency. Like how much of this have you even

done in the past?

[00:35:49] **Kevin:** I guess that's actually, that's a great segue into, how do we use AI in the design process? Basically two ways. One is what I just said, to create rough facsimile [00:36:00] that can give enough confidence to really invest in producing something that might cost money. And the other, for me personally, has been I would call it like tool use.

Meaning I don't know how to use blender, but we've got these 3D files for the pieces and I'm going to use it. Like, I'm going to 

[00:36:15] **Ridd:** open it up and 

[00:36:16] **Kevin:** figure out how to do something. Same with packaging design. I've done a bit before, I've never done anything to this scale and many, many times along the way, I am using, you know, the AI tools to get me across some error or figure out how to do something in the interface.

I don't know how to use. I think this loop is gonna get tighter and tighter. Even in like the coming months I was doing it sort of like brute force where I've got clot over here and obscure print things in Illustrator that I wasn't quite sure how to get right, or I was very nervous of getting wrong and you know, literally show me what button to press.

Here's what I see in the interface. Why is this wrong? Why don't I see the option you're referring to? So I was wading into a lot of tools that I have no business being in. And I think that's like a piece of [00:37:00] advice I give to a lot of designers now is try to embrace that sort of matrix style. I know kung fu mindset and don't listen to that little voice that sort of says, oh, I, well I'm not that type of person.

I don't know how to use that software tool. Just open it up and use the tools available to you to get like one step further. that's what I try to do here. And, and definitely it was like the most ambitious, for packaging. yes mo most people would outsource it to like a separate firm. And there's a lot of.

Packaging details to this because there's the board itself. There's the box that holds the pieces, the bag that holds the pieces. There's the print insert, which I showed you. This is a packaging lockup. And you know, even just experimenting with like getting various versions and folding them up and seeing them and seeing, even seeing them here. Oh, this is fun. For the packaging, the device is like quite large and I don't have a printer that can do this, and it takes a while to get samples and things in various materials. So I was doing a lot of scale mockups and you can see here just kind of [00:38:00] like printing that out and getting a sense of the shape and what's on which side.

Fortunately, my brain cannot, uh, shape rotate like the AI models can. So I really need to like, print this stuff out and see what it, what it looks like in, in like the correct orientation.

[00:38:14] **Ridd:** like this is a very inspiring project. I've already briefed my wife that we're gonna be buying

one. I'm very excited for lunch. it's just cool, you know, like as soon as I saw it, you texted to me and I immediately was like, we have to talk about this. I've never seen anything like this.

And so not just being inspired by the output, but also just the process and the fact that you do kind of have that, I know kung fu mindset where you're just like, you know what, I'm gonna figure this out. I'm gonna bring basically everything to the table, or at least figure out where my gaps are, and then help with that as well, and, and, and find the right people to compliment me. This is a heck of a project, Kevin, and I

really appreciate you taking the time to give us a little behind the scenes today.

[00:38:50] **Kevin:** that means a lot. Thank you. And I feel the same way. And I, you know, there was definitely a point where I realized on my end, like, okay, this has the potential to be [00:39:00] great. And so now I'm in trouble because it, it has to be great. So 

[00:39:04] **Ridd:** you're all in then.

[00:39:05] **Kevin:** I'm all in. I've gotta dig in. I definitely went completely into the deep end on this one and it's been fun.

So I appreciate you saying that.

