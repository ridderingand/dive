---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: eWTXkbZxAQo
slug: 2026-10-15-myles-palmer
source_type: descript
source: descript://Myles Palmer
guest: Myles Palmer
host: Ridd
title: "Building Custom AI Tools at Metalab"
published: 2026-10-15
duration_min: 56
generated: 2026-10-16
generator: dive-club-ideas
---

Speaker labels in Descript: **Myles → Myles Palmer (guest)**; **Ridd → Ridd (host)**. Markers and [HH:MM:SS] timecodes (every 60s) from the Descript composition (52:44), Copy-to-clipboard export checked complete (00:00:00–00:52:00, continuous). No ±30s caption caveat. Timecodes are Descript edit-time; YouTube = Descript +0:57 (to 00:04:17) / +2:26 (to 00:22:42) / +3:00 (after) — see digest.

[00:00:00] 


## What is Oodles?

**Myles:** so Oodles is, uh, a kind of parametric tool that you can use to make anything that you can imagine. Uh, and so, like the background is I've always been obsessed by using rules and system to make design rather than like crafting things myself. Um, and with the power of AI, I was kind of like, "Oh, this is the, the perfect circumstance for it.

It's the perfect way." Um, and so Oodles at a base level is a design tool, uh, that we can use internally at Metalab, um, all from, from Claude. Uh, and what it does, it is a set of controls, which all you can see down on the right-hand side here, so different control types that do different things. Um, it is, uh, some presets that you can build really easily.

It's got randomization built in. It's got artboard sizes. It's got all of the things you'd expect of a kind of like design tool, including different boards, sharing, frames, zoom, everything. Uh, and the designer never has to think about any of that stuff. All they have to think [00:01:00] about is what they want to be on the canvas.

and the reason that I made it is a lot of our design team were making these tools, but Claude can interpret it in so many different ways, and it falls into the same trap over and over again. And so if you were wanting to do mic reactivity or camera control, or you wanted to have, let's say like a 3D scene, but it was always tripping up over the same bug, my thought was, "Okay, let's save everybody that pain, and let's give them a way to do all of that."

Um, and so now Oodles has spat out to a ton of different tool types. So this is a super 3D one. Uh, it can be more kind of like 2D stuff like this, which we made for an event that we held recently that again, is super quick and easy. or it could be, let's say like this, which is physics-based. Um, so if I just do...

get some more pebbles in there. Let's go for a ton of them. Uh, and I can come down here, and I can change like, [00:02:00] all right, I want those to attract to my cursor now, for example. Uh, or actually, I want to split them so that when I drag through, they all split into smaller sizes. Okay, I want a different color palette.

Like whatever it is, uh, I can have the shapes be more organic, and I can add patterns, tons of different stuff. But this all comes from just a single prompt into Claude, where you say, "/newtool," and you describe what you want, maybe chuck a couple of references. It comes back with a plan and builds it out for you.

**Ridd:** I'm gonna repeat back just so I'm understanding correctly. So you almost built like this underlying system that has individual tools sitting on top of it, like the UI could totally change depending on the tool that you wanna create. Is that...

I'm getting this correct?


## How Oodles Works

**Myles:** Exactly. So, at, at its kind of fundamental level, level to explain how it works, it is a set of skills, about 25 or 30, with a kind of router that sits on top of it, uh, an engine, and a control panel. And what it does is it has [00:03:00] the skills tap in based on, okay, I detect that you want to do a 2D tool or a physics tool or a 3D tool, and it has things that it knows about those spaces to then kind of go, "Okay, well in the past when I've done 3D, I learnt, that actually if I do this one step it crashes and it doesn't render the environment so avoid doing that."

Or use React Three Fiber because it's better than Three.js or whatever it is. Um, and so these kind of domain skills of like expertise areas. There are then like functional skills of like I know how to tap into the bike function. and what it also does is it's self-learned, so the more tools that get built by different people, the more that it starts to learn.

You can harvest lessons from that. So you can say, "Okay, of all of the tools built in the last month, what did we learn? Where did people trip up? What went wrong? How can we use that to improve further tools?" so yeah, it's kind of its own system essentially.

**Ridd:** I'm like trying to figure out what the word even is for what you've built here, 'cause it's like it's not, it, it's not, it's more than just a [00:04:00] tool. It, it's very interesting

**Myles:** Yeah, and, and I think the, most interesting part for me, because it's the way that I think, is I, I love th- making the system, right? Like, I f- I find the tools and the little things to play around with themselves, like, kind of fun, you know? Whatever it is. Like, this one takes a, um, any kind of words that you type in, uh, and it can take an open source typeface, and it can, you know, manipulate it in any way to add this kind of, like, pixelated format.

And you can download that as a TTF font and actually use that on your computer. Uh, or you can get it as an SVG, or you could make a timeline animation. Like, you can do whatever to, like, manipulate these different things, 

**Ridd:** What is the tool constraints for this? Like, what we're looking at here with my name up here. Like, how broad is this specific tool in terms of what it can do and what you've kind of prescribed for it in terms of its abilities?

**Myles:** So this one is, is quite narrow in [00:05:00] its scope. it is essentially a take a typeface and, change its kind of parameters. So whether that's it's tracking its width, and what it's doing is it's, it's not just taking the original typeface and then changing that typeface.

It's almost like taking the letters and redrawing it completely, which is how that it can do the kind of like threshold of, of pixelation and all of that kind of stuff. and this is, is kind of like tied just to that, but you could kind of come in, you can, you can change the background and, and bits and pieces like that.

You can change the foreground.

**Ridd:** another really quick question. So the parameters that we're looking at on the right here, how much of those are dictated by the skill that is tied to that tool versus created by the prompt that the designer implements?

**Myles:** It's a mixture of the two. So the things that the, the Oodles knows about are, let's say for example, color foreground, background, right? Like, it, it knows how to do a art board and to change the colors. So that is gonna be [00:06:00] global to pretty much any tool, right? So even if I come over to say, like this, right?

You'll see this has a, again, it has like an ink setting for me to change the canvassy colors. So that is, like, pretty straightforward. Again, stuff like generating a new look, right? So you see here as I'm clicking New Look, it's changing all the parameters to something random. That kind of functionality, the designer doesn't have to describe.


## Building a New Tool

**Myles:** It's just gonna kinda come back with it. So the way that it works is, uh, let... We can just do this. There's two ways that it works. Um, so I type /new tool, um, and I just say something like, "Create me a tool which takes a load of," marbles and allows me to throw them around the canvas."

and what it's gonna do now is it's gonna go, "Okay, I gotta look up the skills. I'm gonna go..." And it has a series of steps that it comes through, and it comes back with a [00:07:00] plan. So it'll come back with a plan that will say... So you saw there, it just, it just ran skill domain router, right? So this is it running the skill, going through, "Okay, I've r- I've loaded the physics domain, I've loaded the user interaction."

It's picking up all the bits. Uh, and what it does is it comes back with, uh, the plan. You can then select what you want from that plan, uh, and then it gets to work making it. 

**Ridd:** another clarifying question. I know I'm, like, asking this a bunch of different ways. I'm still just trying to make sure I really understand it. So is it, is it picking one of the tools in the array of options that you have that it feels like is the best match, or is it pulling pieces from tools and creating something new?

**Myles:** Closer to the latter, right? So it, it, it knows, it knows what already exists, but it's not like it's trained on a ton of tools. It's like, "Okay, I know the closest thing to this." What it do- what it will do is it will go, "Okay, I think you've made something slightly like this before, and so I can get a little bit [00:08:00] closer."

But you can see here it's come back with a plan, right? It said, "Okay, this is gonna be called..." I'll just zoom in a bit. Um, "This is gonna be called Marble Toss. It's a live canvas of glossy marbles. You can grab it, flick, grab it and flick it around." The controls, I wanna change the s- style or the export options.

There's no Figma where it's gonna live, and then it describes here, "Tumble is a proven tool built the same way, canvas plus 2D physics." Tumble is one, right? And you could see how, like, learnings that you'd had from this might apply to something that's marbles with physics. what it also suggests here is if you'd rather start from a full copy, copy of Tumble, remix Tumble, and that's because you can take an existing one, uh, anybody within MetaLab, and say, "Remix this."

I wanna, like, add things to it. I wanna change things. But otherwise, what it'll do is, okay, here are the things that I'll include by default, and then here's a load of suggestions. So do you wanna add phone tilting? Do you wanna react to mic or [00:09:00] music? Do you wanna have an image upload? And this is because the skill kind of tells it to suggest stuff that it knows that it can do from the control set, and add it on.

And then the final thing that the skill always says is, "What are some ideas?" Like, if you had this idea yourself, what would some stuff that you would be adding that you think is fun? Um, and so, you know, it's saying, "Hey, do a... Add a slingshot." Um, but all I need to do is just say yes. and what that's gonna do is it will now execute that plan and start building it out.

**Ridd:** how much have you iterated on just this response? 'Cause it's perfect. Like, even just the way that you're suggesting ideas and, and helping give designers things to react to. Like, is this a big part of the design process of the tool even for you?

**Myles:** It came quite early on, I think. So wh- when this started, I would say within the first, like, two weeks of me working on this, I kind of... I had done enough varieties of tools, many of which are kind of on the scrap heap now, that when Claude was coming back to me with, like, a plethora of information, I was like, "I can't [00:10:00] parse this.

I need a, a simpler way to get through this information." and so kind of like orchestrating that and getting it there, it took some time, but it wasn't like tons of back and forth, right? It w- it was definitely much more a, like, trial through creation. and so that, that... Like, in terms of how many oodles there are today, there's only, like, 60 or 70, something like that, and they can be, like, stuff that's as simple as this, right?

Which is like, okay, this is like an orbital thing where you can see lots of card, and in some ways you could see how, like, this is much more applicable maybe to, like, inside of a product, right? So whereas we're looking at something like this, this was for, for a, a project where we were looking at can we create worlds within cubes.

We were like, okay, is this, this idea of generating these little worlds that live within shapes, and it was like a creative tool. this for example, again similarly, was much more functional, right? It's like, okay, well, what if a, a website is like [00:11:00] this, and you can click all these things, but you wanna see, well, what if there were more rows or less columns, or what if the cell size was bigger?

You know, it, again, it gives you a really quick way to iterate through interactive designs. and so it can kind of been used for creative tools as well as, like, product experiences. and that's where, a lot of the lessons for oodles to learn from itself have come from, is just chucking every idea at it that I can and seeing what it makes of it essentially.

**Ridd:** There's so many layers to what it means to design a system like this. I think that's like one of my main takeaways right now. Or even when you were dragging the param- parameters, everything looked good. The design of the right panel is intuitive. The text response from the models is even intuitive. Like there's a big leap between making something that you can use versus making something that a bunch of different people working on different projects can use.

And I think seeing the behind the scenes is kind of opening my eyes to all of the little design [00:12:00] decisions that are required for the latter.

**Myles:** Yeah, and I think that's, that's like one of the things that was actually biggest, we work at an agency. We, have designers of all different kind of skill sets and capabilities, and I'm passionate about all of those designers having access to the same level of knowledge and tools that, that somebody else does.

deploying a website isn't something that every designer knows how to do, right? Like being able to publish something and share it with other people. and so the other thing that Oodles does is you never need to think about GitHub. Everything is in a GitHub organization automatically, and you never need to think about publishing, because once something is created...

Oh, look, we got our first version of Marbles. Ooh, that's pretty rough. I mean, it works. I'm not sure those marbles are fantastic, but based on just like literally like one sentence, right? Like create me a tool which does blah, uh, we- we've got something that's got physics and bits and pieces, and we could,


## Iterating to Greatness

**Ridd:** Okay, okay. Well, let's, let's pull on this then because this is probably the experience that so many people have had who are watching this, where they're like, "Okay, I use AI. I [00:13:00] made a thing that I definitely would not have been capable of making before." But the iteration to greatness, especially when the bar is as high as I know it is at MetaLab, like, what would you even do here?

Like, what about this feels off? And maybe even at a high level, talk to me about how you would approach pushing up the quality from this baseline.

**Myles:** for this one in particular, the first thing I would do is I would actually go back to this, right? So you see like how all of... This to me feels like a marble already.

**Ridd:** What is this, dude? This is so cool. I was looking at this earlier. This is crazy

**Myles:** So like all of these things, they, they have like inside of this one, right?

There is like refraction, there's distortion, there's, there's everything that you can kind of do, to go through all of it, and you can add environments and blur them more and change the camera distance. And like th- this one is, is a pretty like advanced Oodle, I would say, particularly with like all of the way that like the [00:14:00] spectral stuff exists.

And also, uh, if the, if there is more than like one set of objects, you get this left-hand panel over here, right? And you can be like, "Okay, I want the, this one here to be a different thing." And you can control all of them individually to

**Ridd:** Bro, this is crazy. This is crazy.

**Myles:** in this instance here, the first thing I do is this, this is a site- little site that I have that Claude made, this is 200 maybe procedurally generated versions from that first Oodle that I just showed, that are like seamless loops.

so the first thing that I would probably be doing is going, "All right. I want that image, and I'm gonna dump it in here." And I would-- Because I, I picked marbles 'cause, uh, I knew this would come up. Um, and I would just go like, "All right, I want them to feel much more like texturally like this," or to have like the translucency and the kind of specks.

and that's one of the things is, it's only ever gonna be as good as you can kind of like prompt it through, right? So I [00:15:00] remember when I was making this one, the thing that I was really keen on was, all of the little dots that are inside. Let me see if I've got one that's got it. Yeah, this one here.

So like these particles that live inside, that's what took me an age to try and get right, and it was through tons of different iteration. I think this, this particular Oodle, this is maybe like version 67 or something like that. And it's, it's stuck there since, right? Like it's not changed. It's got everything.

But it really ha- it has gyro, it has, it has bloom. It's got, it's got everything going for it, and it was just a case of, "Hey, I wonder if I can do that now." So like this is changing the particle color inside of it, but also I can increase the size of it, so it takes up more. I can increase the count. I can make them swirl.

I can make them scale up and down. And it was kind of just combining all of these things, like one after the other, that got it to this

**Ridd:** I'm not just gassing you up because you're on my podcast. I really do think that is [00:16:00] one of the most visually stunning things I've seen AI make. It's unbelievable. Like, the-- what is going on inside of these shapes is really unbelievable. I did have one clarifying question around the page that it generated for you.

You talked about how those were procedurally generated. Is that for any purpose other than just almost giving yourself a mood board to be able to reference? Like, why did you do this, and how often do you do this kind of thing in your own creative work, I guess?

**Myles:** Uh, for this one specifically, it was just because I thought, I wondered if I could. Right? It was,

**Ridd:** Such a good answer.

**Myles:** all the images and videos got sent to like, I think it was the Google Vision API to work out like what is the, categorization of it, and that, that's kind of like what it dumped back to me.

but this was very much like a, can I do this? so the way that I t- I trained like this glass cube one the most was I had this script, and what the script could do is it was a, just a variation generator, and it would output a single [00:17:00] generation, which is what you can see here. It would output the spec of what that single one was, and it would then write that to a folder for me.

Um, so this one here is... It has just made a loop, and you can see that is now... This is static, but, but it would make essentially 100 versions of something, and I'd just leave it running in the background. And when it then had those 100 versions, I would then go into the folder, I would tag it with blue or red.

Uh, if it was red, it meant that I didn't like it. If it was blue, it meant that I liked it. Uh, and I wanted it to be more like that. And so I would generate all of these variations, and whether it was like I wanna look at it for the movement purpose, or I wanna look at it for the, the like, the aspect of the way that it kind of like, looks or is composed, essentially ended up with these folders.

And you can kind of see here, right? Like it builds out different things. and that is how I would then go back to it. [00:18:00] I'd be like, "Okay, I like grid two and I like grid one, but actually grid zero, hmm, the angle's not quite right or it's cropping off," or whatever it was. So this one, right, I love that. So I would prompt it more towards these.

I'd say with the randomization that you do, make sure that 20 out of the 100 have speckles, 'cause I loved the speckles. and by feeding it this, it then became closer and closer. So again, this one, right? This was... I loved it when the background and part of the object matched, because I kind of like how it creates this kind of like see-through nature.

You can't see it too much in that, um, angle. Uh, but there was one that just got generated in the background which had the same thing. 

**Ridd:** there's a rabbit hole that I wanna go down while these

**Myles:** Yeah

**Ridd:** which is 


## Code vs. Figma Workflow

**Ridd:** how often today are you doing things, quote, the, you know, old-fashioned way, where you are making something by hand, be it in code or Figma, you know, dragging pixel by [00:19:00] pixel things around?

**Myles:** pretty rarely f- for me, at least. Um, I spend most of my time, I either start in code, and then push it into Figma, and I'll do a bit of kind of like massaging in Figma and then push it back into code. I will never, never leave code. I will just remain within Figma. It is different for different people at Metalab.

we have some designers that are... They're incredible at their craft, and the way that they can design things is far beyond what I could ever do, right? And what they can create in Figma and the beauty of those designs is, isn't what I could do. But where my power comes from is I'm a maker. I love to make things, and I love to be, uh, very tangible with, with how I create.

and so this way of designing suits me a ton. but one of the things that I try and do, which actually like is done with Oodles, you can see here, right? This is, this is the Oodles component library that exists within Figma, and this is all of the different components that there are, [00:20:00] for Oodles, so down on the right-hand side.

And these have gone through like several iterations, and the way that I would handle that is I would just get Claude to write the components into here. I'd make a slight change, and I'd send it back. And so for like that kind of like small iteration of design, I will come into Figma. But a lot of the time, it really starts in Claude first for me

**Ridd:** But, but did you start these components in Figma or did you just have Claude print them back? Yeah, that's what I

**Myles:** Claude print them back. The same as like, um, this is, this is... This one's a little bit crazier, but like this is a, uh, this was my experiment of can I make something and never use Figma? Um, and so I have a, a markdown editor that I use, uh, which you can kinda see here. Um, and it's just a markdown editor that I built that's got...

It has a ton of different features. It has like AI in it. You can highlight stuff, and it uses a local model and, you know, it can rewrite things and suggest stuff. It kind of knows my tone as [00:21:00] well, so like when I ask it to generate some text like it's doing here, it understands like what kind of way I want it to, to, to phrase things.

Um, it's got split view and focus mode and all sorts of stuff. But I built this out and I, I've never designed this really. I kind of, again, it was like, "Can I make this?" all of these screens here, are entirely generated, like all of these primitives, atoms, like everything. I have not touched any of this stuff in Figma.

It's got slots, it's got all of the panels, it's got the history, everything, tokens. and so sometimes what I will do now for this, this markdown editor is I'm like, "Oh, okay, something's not like super working." so let's say like let's take this file item, right? Like this is this component down the, the left-hand side.

if I wanted to change like the active color, uh, I have the variable set in here. I would... Let's see what it is. Uh, color BG selected. I would come in here and let's just make that like a, a [00:22:00] pinky tone instead. Let's make it more obvious. Let's do that. There we go. Uh, ugly, but super obvious. this, this exists similarly with like a storybook, right? So this is a storybook that exists for this product, and you can actually see this is already updated, and that's because I have a, like a local instance running here which syncs tokens between the code base and between the Figma file.

So if I change it in either, it automatically updates. and so it's always gonna be in sync. But what I also have in here is, this drift checker, where, for example, I can check this component, and it will check the code base against the Figma file, and it will return an audited report for me, in a second

**Ridd:** s- I have so many questions. Now I'm gonna do a rabbit hole inside of my rabbit hole, which is what's the value in your mind of printing things back to Figma and having that source of truth at like a component level inside of Figma when the designs [00:23:00] originate in code?

**Myles:** It's just that sometimes it is still way faster to, come in, in, into Figma and make a design tweak, right? But it is like coming in here being like, "Oh, this padding isn't quite right," you know, changing it a little bit, increasing it or whatever, and then being able to push that into code and move on rather than, than anything else.

And to me, it's a little bit of like a visual... It's just a visual thing, right? Of like, I wanna look at this component here, and I wanna envisage what it's like with, all right, what if you made the, the type size 22 pixels, right? And so this is again, another plugin that I've built, which just... It's just about showing you visual differences, so you technically never need to come into Figma.

But to do that and then see it update across a ton of like screens like this, Figma is still super handy for like that overview and the kind of experimentation, around the visual design, right? 'Cause like it... Looking at this, it's not the best design in the world. Like it's... Honestly, it's like [00:24:00] 10 minutes of time.

but if I look at, you know, the, the level of craft that our designers get on, you know, say something like this, which is some of our design work for, for the newest version of, Mozilla Firefox that we worked with them on. You know, the, the, the level of craft and detail and beauty in all of this stuff, if the team were trying to achieve this straight in code, it's just, it's just not there yet, right?

Like, there's so much creativity involved in still doing all of this explorative work, and this is just one direction that the team did. and so it's great for making, but I still think that the Figma is the place to do great design work. it's just not the place to make product, I don't think. And I think that those are two different things.


## Design vs. Making Product

**Ridd:** Can you go a little bit deeper into what the distinction is there in your mind?

**Myles:** Yeah, in my mind, I think making a great product is about how it feels, how it looks, the impact it's having, the functions, the [00:25:00] technical aspects that go into it, the, you know, the way that you market it, whatever. I think all of those things... User feedback, right, and integrating that into the product. I think all of those things is what goes into making great products, which is what we do at Metalab.

But I think making like beautifully crafted design, which has a heavy influence on a great product, you don't wanna start with zeros and ones and stuck in the boundaries of text instructions or written language. It is a visual thing, right? Like it is inherently visual, and if you start sketching on a bit of paper, that's also fine, right?

But like fundamentally, I think great design is always originated from looking at something visual, and I think iterating towards that just through a text box, at least for us, where we're spinning up new context all the time. You know, as an agency, we have a design department of about 50 [00:26:00] designers. Uh, we're working on a lot of projects at once with a lot of different businesses.

We're not creating these massive design systems where you're kind of like assembling a kit of parts, right? Like we never really do that work. Our work is all about transformation. It's about going from something to nothing. It's all about that jet fuel that really helps a team accelerate. And when you're doing that kind of creative process, just living in, this kind of environment and trying to tweak what your way towards it, it's just painful.

It's, it's not the best place, right? You're just restricted down into this little thing. so I think for us, AI in the design process is just another tool. It, it hasn't replaced anything. It can be used in the same way as, just like drawing pen and paper. It's just another input. It's just another way to express yourself.

whereas I think for in-house, it probably has changed a lot more, right? Like we work with clients, and we see a difference in the way that their design teams now [00:27:00] work, right? Like the value of design systems has never been higher. the integration between engineering and, the design team itself has never been, been greater.

and I see more and more In-house design teams are building their own tools to assemble their own products quicker. And so what I mean by that is if you have a storybook, right, like the one that I just flashed up, but for your product, and you have rules and regulations of like how this should all go together, what it should feel like, the principles, you know, all of that stuff, your job becomes about defining what is the most valuable thing for our customer.

How do we ensure that we have cohesion? How do we make sure that it's working correctly? It becomes about the experience of the product rather than the aesthetic or the design of the product, if that makes any sense.


## Oodles at MetaLab

**Ridd:** You say that, and yet a lot of the aesthetic that you were showing from Oodles is really, really impressive and fresh. [00:28:00] So then can you talk a little bit about the role that Oodles plays in Metalab? Like, when do you think that the ROI for this type of input is highest?

**Myles:** It's a good question. I think Oodles, Oodles at the moment is like limited to me and, and a few other people, right? Like, not everybody is out there using it and going crazy with it. people are doing other really interesting things. But where Oodles comes in is if we're working, say, on a branding project, or we're kind of going like, "Hey," uh, you know, if I think back to...

I'll get an example, right? If we look at the work that we did for Windsurf, for example.

**Ridd:** I love this project

**Myles:** let me get Windsurf up. Oh, apparently Windsurf is gone. No, there it is. Okay. Uh, if we, if we look at the, the, the Windsurf. So Windsurf is absolutely like the optimum tool, uh, or kind of like aesthetic for Oodles to execute upon, right?

[00:29:00] These gradients and these beautiful kind of like wave motifs that the team made are something that suits parameters, right? It is something that suits the ability to tweak those little things and see the way that it changes in front of you. Like just have the team have kind of got mocked up here. And so when this was made, this would take like an engineer to come up with it, to build this tool that could kind of create these production outputs.

but now, you know, I spoke to Mac, the designer that worked on Windsurf, and I was like, "Hey, you could just like chuck this into Oodles and get it all out of the box and play around with it." And we did it with Windsurf one time, and he was like, "Okay, I could see how this leads to things that I hadn't thought of."

And I think that's the critical thing, right? Like I, I don't, I don't love Oodles because of necessarily like what comes out this side. I love Oodles because it leads to unexpected things. And sometimes that's even just me like sitting here and pressing the random button, right? And it's [00:30:00] like some of this is pure trash, right?

In, in this example, like a lot of this is, is bad. Uh, but also sometimes you can do it and as we've just seen with all of these variations that have been made, right? Like these is... This is now like 100 different things or whatever. 28, in fact. Okay, it must have crashed. Oh, it's moved on to videos. Uh, of which it, it's a little buggy.

I haven't ran this for some time. Um, but you get, you get the point, right? Like there's, there is just a volume of stuff here that I can look at that I just couldn't imagine before. And it, and it-- to me, it's like you can get into a flow state with design, and you can get into a flow state in Figma, but you can also get into a flow state with Oodles, right?

Where you're just kinda like, "Oh, what if I now added that?" Or, "Oh, if I do this, what happens?" And it's a very similar kind of feeling. It's just a different space to be doing it in.


## Creative Identity & Origins

**Ridd:** I think that's why I'm asking my question. Like, the, the question behind the question for me is, I've even been thinking about this for my own practice so much recently, [00:31:00] because dude, I don't craft anything anymore really. And it feels weird, but I'm actually happy. I, I think that my output is good, you know?

Like, I'm proud of the work that I'm doing, and yet even yesterday, I mean, I'm just giving myself different types of systems to see massive amounts of options in a given opportunity space, and then I just pick and refine, and pick and refine. And I think the easy way to poke holes in that is like, well, you're just limited to what the out- the out- models can do, you know?

Like, th- there's not really... There's not as much creativity in that, and I'm like, yeah, I totally can buy that logic, and at the same time, every day I end up seeing something that I just don't actually think that I would've been able to think of in Figma. It wasn't in my brain at all, and I ended up going down that path. And so there's such a mixed bag, and I think it's almost causing a bit of an existential crisis when I think about my own creativity, you know? But y- you said the line at the very beginning of this that resonated so deeply with me, where you said you've always been someone that [00:32:00] gravitates towards using rules and systems rather than crafting something yourself.

And I think that is me as an archetype as well, and why I'm having so much fun with this new way of working, and yet you do this. I don't know. I feel a little bit self-conscious almost because this is how I work too. I don't know if that resonates at all.

**Myles:** Yeah, it's 100%. It's the exact same for me, right? Like I, uh, I taught myself to code a long, a long time ago. Um, and you know, something that I did is like, uh, if we look at my, my awful website here that I should probably revive code. Uh, but like the- these things here I got from 2012, right? And this... Uh, let me just zoom in on this and it'll probably be pixelated.

But like, these are two things that I made, uh, 14 years ago or whatever, and they were hosted on, on Tumblr, uh, because I didn't know how to code or

**Ridd:** That's where I started

**Myles:** right? Yeah, I just like, I just make a Tumblr theme and delete the whole thing. Um, and one of them was like, "Oh, what if I could arrange words like on a fridge magnet?

That's funny." Uh, and the other one was, "Oh, what if I could like allow people to make [00:33:00] typography out of different shapes?" And they were these kind of like two strange things. In fact, I think if I go here, yeah, it still works, but it's, but it's obviously content not viewable in your region. Yeah, great. Love it.

Good, good stuff to obviously... I don't know. I must have hosted those on like Image Tag or something, but you know, it's like, oh, add lines or, or whatever. Um, and, and I loved this idea of like, you give people these things and they make the designs out of it on the other side, right? And for me, that like partially came from a thing called, um, conditional design.

Uh, and, and this is, this is incredible unfortunately, uh, that, that a lot of the sites are gone. But, um, there's this incredible book called Conditional Design Workbook. Uh, it was by three designers, uh, Luna Maurer, Jonathan Pukey, and, uh, Ralf Roeters. Uh, and their whole thing was like every Thursday they met up and they designed conditions that made [00:34:00] design.

And so everything was like, okay, every player receives a sticker, and in turn you get that, and you got all of these like interesting things. And so when I saw this, I was like, "Oh, you can make things that generates other things." Um, and that's really where my love started. And so I, I then taught myself to code 'cause I was inspired by this.

But that also then became say for example, this, this project, uh- Zooming again, so terrible. But this, this project here on the right-hand side for Ivy Park. So this was a project in 2016. It was myself and a, an engineer, and it was for to launch Beyoncé's athleisure brand. And what we knew is that we'd have a ton of content, right?

We were like, "We know we're gonna have lots of video. We know we're gonna have lots of imagery," and we knew we'd have music, and we'd have, like, clips. Uh, and this whole site was essentially, all of those things dumped into a bucket, and it generated this procedural video on the fly. It was never the same thing twice.

And what [00:35:00] you could do is you could press and hold the mouse, and it would swap between songs, and it would, like, bring up animations and all sorts of stuff. But again, it was like designing a system around a load of content to create an experience. and so it's been something that's been, like, baked into my own personal practice.

I mean, this, this video here of this really old website, uh, from 2018, um, I remember th- that video is actually a recording of my screen 'cause I built the site out in code, right? I was like, "I'm gonna design this in code as I'm doing it." and this is kind of around the time as well that the web development changed, uh, and React got introduced.

And so I stopped coding in, in like 2017, 2018 or something like that. I was like, "I, I can't build stuff anymore. It's moved to React." but now because of AI... Oh, hello. Uh, but now because of AI, I am able once again to code and to play at the system level and to create things that make other [00:36:00] things. you asked me earlier how I would iterate to get this marbles better.

I dumped in a couple of pics from something else, and, and this is what it's coming back with. So it's a little bit better. It's still... They're not rotating, but it's, uh, it's getting there, and it's still kinda like working its way through that, Not s- not sure I will ship the marble oodles, but, uh, it'll be...

It's, uh, yeah, fun to play around with for sure. 


## How Oodles Evolved

**Ridd:** I wanna go all the way back for a second as it relates to Oodles, because I'm sure a lot of people are inspired. I'm very inspired. you see the end state, and it can be a little bit intimidating. I mean, this is, like, a big thing now. And I, I guess I'm kinda curious if you could talk a little bit about, like, how you started even.

Like, uh, were there inflection points in your own thinking in terms of what this could become? Maybe any advice that you have for people who look at something like this and they're like, "Man, you know, there's an opportunity for me to maybe fill a smaller miles-shaped hole in my own org," and maybe what that could look like or how to [00:37:00] get started, that kind of a thing

**Myles:** I think all of it stems from curiosity. Uh, like I said earlier in this podcast, like y- you asked a question of like, "Why did you do that?" And my answer was, "I don't know, to see if I could." Right? And I think that is my answer to most things, is I am curious naturally, and I wanna try and see what happens.

And so there's always been these, these worlds, right? Of, um, stuff out there that's like a, a controller for JavaScript experiments or whatever, right? Like this is a great one called, um, dap-gui, uh, which, which plugs into to Three.js, and you can kind of like go to like shader websites. and you can use that, and you can play around with shader materials and, and whatever.

And so all of that stuff has kind of been out there before. but the inflection point for me was really a determination of how can I make others able to do this as easy as possible, and only think about the idea. And so when I first started making oodles, it didn't have... [00:38:00] So what it has today is if I open this one up, and let's...

What it has today is like multiplayer, right? So you can come in here and see like two people on a canvas at once. Uh, and this, this might not work 'cause I'm, I'm logged in to the same user profile, so it might, it might be unhappy about this. But let's, let's see what happens. Do that. Yeah. Okay. So you've seen that's updated across the two browsers, right?

So it, it works in real time sync, but it also works if I was like a guest user that came into this space. so it didn't have that back in the early days. It just started as I was making the tools independently outside of, the tool itself. I was like, "Okay, can I just make one thing?" So one of the very first things that we made was, was this. Um, and it still kind of works. Um, but this was one of our designers, Natalie. We were working on a project with each other, where we essentially needed to create patterns [00:39:00] that would go in the background of like some assets. So we'd like cut stuff out, and it would sit on top of this.

and we were kind of like, "Okay, can we make something that allows the team that we were working with to make these kinds of assets in a really easy way?" Uh, and so you can like change the, the different curves and stuff like that. and at this point, you could like download it as an SVG, and we added some base animations and bits and pieces.

And so I was like, "Okay, this is pretty interesting." but the thing that, that was painful was like, well, all of these controls aren't fantastic. if we wanna put an export into this, we're gonna have to do it again. and so I was like, "What of this is reusable?" Like, what do you use time and time again, and always need?

And kind of broke it down to those fundamental parts. and that's what it kind of grew out of, was this one here that we made. and then we were kind of like, "Okay, can I make..." Uh, I think the second one that I maybe made, and is now in this, this, this updated format, because that's one of the other things with Oodles and, and why I can't kind of like go back in time, [00:40:00] is, uh, the shell.

So the control panel, the kind of like presets, the boards, and everything down here, uh, that's automatically updating. So as I release new versions, all the old tools get it. So like although this was one of the very first tools, and again, this was like, okay, we were interested in, uh, like Conway's Game of Life and like different things like that, of like how could we create different kind of like gooey worlds and whatever it was of, of this different stuff.

and so this one was then the second tool type. It was like, okay, what does that, what does that look like? and it was really just a case of like just constantly pulling on the thread. let's have a bit of fun. Fun to me at least. 

**Ridd:** The shift in your, your GitHub chart is pretty indicative of the state of the industry right

**Myles:** But you can see this has 1,296 commits, right? Uh, just on Oodles. and so this goes back, I don't know, I don't know when the, the first one was, but like, yeah. [00:41:00] Okay, let's see if there's a... When's the beginning of this chart? Did I begin it in April? Let's find out. No. Okay. I must have began it just after that.

Yeah. Okay. You can see here, uh, 31st of May. This is probably around... Yeah, I started it in May. But you can see this is just like the amount of commits there is every day. and it's just me and Claude adding stuff time after time after time. it's had issues over its time. It's had almost 200 issues. So like anytime something comes up, I get it to file an issue, and periodically I'll be like, "All right, scan the issues, see if there's anything that we wanna fix."

Um, and this is whether it's like coming up with lessons. So you can h- see here, this is like a lesson, right? And it's learned that a published package can lag its own source at the same version. Verify the artifact, not the source. Whatever that's on about. but it has a whole log of domain skills here.

So this is the changing of like domain camera gesture. That's how it knows how to use the camera [00:42:00] gesture. and this all kind of just gets logged and, and kept over time, uh, simply with pull requests, right? So you can see right now, this is the way that publishing works. So you can see, add instead of shapes.


## Oodle Studio & Side Projects

**Myles:** This is a new, new tool. Um, so this is something that I made in, uh, Oodle Studio, which is the next evolution of Oodles, which is in- instead of you going to Claude Code and, and using it in there, you actually just open the Oodles app, uh, and you have, you know, chat built in. You know, you can create a new tool and describe a new tool just in the same way you use Claude.

the reason to do this is to-- for designers to use Oodles today, they have to go to the terminal. They have to like install some, some home brew packages and bits and pieces. This just makes it a bit easier. but one of the things that it also does is you just hit publish, uh, and that just kind of like publishes it out to an internal kind of like architecture that we have.

Um, so you can see here, this is... I made this one earlier in Oodle Studio. It's deployed it [00:43:00] live to the site, uh, and it was just at the kind of like click of a button. I didn't actually have to do anything as a designer of like infrastructure-wise. so it was just a constant like pull on that thread of Okay, well what about if this happens?

And that's what this newest version is as well. It's like, okay, well, I want it to be really easy for people to use. What's the biggest barrier at the moment is that you have to go to the terminal and install some stuff, and some people don't wanna do that. And I have to invite people to a GitHub repo, and not everybody has

GitHub. Whereas this is, okay, here's an app, just install it, off you go, And, and that's kind of it. They sign

**Ridd:** this feels like lovable level simplicity, which is very cool. another quick piece of context. Was this a top-down investment at Metalab? Like, did Sarah and the team come to you and say like, "Hey, Miles, we want you to start exploring in this area"? Was it entirely yourself? And then if it was, can you just talk a little bit about, like, how the shape of your role has even [00:44:00] evolved?

You know, you're obviously spending a lot of time on this. A thousand commits, you're making a noodles app. I mean, like, what is your job even inside of Metalab? 'Cause it looks like it's probably hilariously different than what it was at the beginning of the year, and maybe you didn't even predict this type of path for yourself.

**Myles:** Yeah, I, I, I think it, it wasn't top-down. I think at Metalab we are generally all the designers are enabled to work and be autonomous and deliver on their projects, and if you're delivering on your project, you are kind of, you know, you, you, you are good. And so all of these experiments and all the other bits and pieces that I or anybody else works on, um, is, is side of desk.

And so Oodles became an obsession of my evenings for a while, right? It was like, "What can I do with Oodles?" And I think the most powerful thing that any designer can do right now is have side projects, um, and have side projects where they're creating something and learning [00:45:00] because it feeds back into the work, and that's what I did.

So I learned a lot from Oodles and making it about how to use AI and how it works in my practice, and I now bring that into other pe- bits of work. For example, um, this, this markdown editor that I mentioned earlier that kind of goes into Figma but also has like a sync with, with Storybook, that is something that we've worked on with some clients now, right?

It's like, how can we take something from Figma, generate a component, and keep drift in check at all times? And that again was a, a kind of like I've always been irritated by Figma and code drifting. What can I do about that? And most of the time I just have Claude in the background and I would every so often check in, I'd throw some thoughts at it, I'd iterate on a new thing, I'd play it out, and then I'd go back to doing what I needed to be doing.

but a lot of it has just been a case of like playing around and finding out, and that is what [00:46:00] everybody is, I think, doing across all of our different projects at Metalab. Um, there's some in- like incredible stuff that people have worked on, that, that I'm kind of like in awe of all of the time. Um, so I'll just pull one up here, for example.

Uh, so one of our other designers, um, Enri, uh, when he was interviewing with us, and he'd never seen Oodles, uh, he, he made this, which was like an incredible kind of like asset dump, right? So this is... If this is gonna load up. It's gonna load. Yeah. This is a similar thing of like, okay, we can just put tons of assets in here, and we can change the intensity of different things and parallax, and again, like grids and columns.

Um, or we can... He made these floating pill ones, if it wants to load, which it doesn't. Yeah, there we go. Like these floating pill ones of like could we use these to make like social assets, for example? Like is this a, a different thing? and this was again, this was just [00:47:00] Enri in his spare time ma- made this.

something else that he made recently is Uh, so this is his wonderful website that he's made for his, uh, for his girlfriend, and, and this is their dog, uh, where you can, you know... Like, it is all kind of like procedurally generated. Uh, he's just added this cap th- uh, this morning, I think. Let's... I wanna take a surprise. Um, but you can walk around, and it's got like a, a mini map, and you can run, and you can pick things up.

Um, so over here's a stick, and you gotta, like, kinda like pick up the stick. Oh, yeah, take the stick, and then it t- kinda tells you where to, like, go and drop it. Um, and again, this is just something, like, that he's made in his spare time that's, that's beautiful and fun and charming. other people, like Lorenzo, who's one of our other designers, has made, made Bencho, which is, like, all of these interactive components, which is super interesting.

Uh, yeah. So this is, this is one of our designers, Natalie. She made an app for her partner who runs a small building company, and one of the things that he has to [00:48:00] do is, like, always go in, uh, and kind of like estimate, h- the measurements of a room, and it can take like, you know, 30 to 45 minutes or whatever.

Uh, and so she built him an app that allows him to kind of like go and just do that. And so now he can walk into a job, and he can kind of take all of these measurements, and it's kind of like helps him do all of his planning. Um,

**Ridd:** this last night. I kid you not, I was trying to do this last night and I was like, "Man, I don't wanna get a measuring stick out," but I didn't... I get it, man

**Myles:** Uh, an-another really cool one is like, uh, one of our designers, Adam, he recently had a baby, and so he made himself a little app which kind of like helps him keep track of baby tracking, right? Like logging sleeps and all of those kinds of things. And this is an app that he made, and it's on the App Store, and you can, you can use it.

And so s-side projects are super powerful and are very encouraged. at the same time, there are people making... Uh, so I can show this one off. This is, this is Marcus, who has [00:49:00] made this kind of like... And, and at Metalab, we have like three or four different variations of this same idea, which is like a way to build out screens really quickly, because we're always like dialing up prototypes at low fidelity, right?

And annotating them and handing them off to clients. And so this is one where you can kind of assemble kind of kits of parts. You can zoom out and see different screens and see what a kind of a prototype looks like. It's got intros, and so it's a full like prototyping tool that, that Marcus has built out.

Um, and other designers have like a similar version of this. And so we're all on these different projects running at different problems and trying to figure out ways of doing it. And I think that's what's so different to in-house is in in-house you thrive on, okay, find the most viable path. Everybody go do it now, homogenize around it, and kind of go like, "This is the way to do it."

We're still not even at that [00:50:00] stage. We're still going, "What else can we do?" Right? And so everybody is always creating new things and coming up with stuff to play around with, which is super fun. it's not top-down. My role is, I'm a, I'm a design director, so my primary responsibilities are to always look after to client work and, and make sure that everybody is, is happy.

But one of the kind of like things that I take up generally is just being curious about everything and sharing it with people, uh, and seeing where that kind of leads to. And so, oth-other things that I have, for example, are like this is a little site that me and another designer keep internally, which is, uh, it's called Field Notes, and it's just learnings about like design and AI.

And so I'll make like a, "Hey, here's how you use GitHub." And it's a kind of like little guide to use it. Or I'll go off and make a test of like what is a design MD file, and if this is like a big thing of showing how it works and run an experiment to, to kind of show that. And so I'm just curious and, and like tinkering and sharing it with people.

So my role has kind of [00:51:00] become a little bit of that. Uh, but still at the core of it is project work and, and making sure that the projects are good. 


## The Value of Curiosity

**Ridd:** You know, it's funny, I, I've interviewed a lot of design leaders, obviously over the last year and a half when the AI uptick has kinda hit a whole other escape velocity, and people are constantly talking about the value of curiosity and how that's something that they look for. And, I felt a little bit of a gap in terms of, you know, what does that actually look like?

You know, great, we've talked about curiosity so much, but that's what this entire episode is, and I'm really grateful for it because just seeing the way that you approach your work, seeing that knee-jerk reaction that you've developed be of like, " I wonder if I can do this, therefore I should do it." How cool is that, you know?

And, and all of the different places that it's led you, and this is just incredibly inspiring. Oodles is really, really impressive, and I appreciate you giving us this behind-the-scenes of everything today.

**Myles:** Thanks so much. I really appreciate it. I think it has never been a more exciting and more [00:52:00] fearful time to be a designer, and I think both things can be true. And that's incredibly uncomfortable, and it's incredibly difficult. But if you are curious, if you are resilient, if you're adaptable, and if you try as hard as you can to focus on what you can do today and how you can change today, don't, don't worry too much about tomorrow, right?

Like, you can't necessarily control that too much. What happened yesterday is gone. and that's kind of how I, I go about things every day is like, "Hey, what can I do today to make my work better, to make my colleagues work better, to help people, to find something out?" and just kinda take that spirit, then I think you'll go a pretty long way

**Ridd:** I can't think of a better way to end this episode, so I appreciate you, Miles

**Myles:** Thanks so much. Appreciate it
