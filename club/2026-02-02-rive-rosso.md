---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: 6bR2ak0BlGE
slug: 2026-02-02-rive-rosso
source_type: descript
source: https://web.descript.com/94bf993b-366d-42b2-819e-f50abb05e30e/686c5
guest: Guido and Luigi Rosso
host: Ridd
title: "Why Rive is a big deal for the future of design"
published: 2026-02-02
duration_min: 40
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] 


## [00:00:00] Rive in Spotify and Duolingo

[00:00:00] **Guido:** a cultural moment that is Spotify rap that is so global. On that specific date. And, and the fact that Spotify, like the next day, the official Spotify account started talking about how they use Thrive for it, and some of the people working on it started publicly talking about it. It was just, I think the first kind of really huge moment like that that just made everyone so aware at, at that scale of Thrive.

similarly, other tools like, you know, we talked about, you've probably seen us talk about in publicly about Duolingo, who was a very early adopter. They built a lot of stuff that goes out to a lot of people. But yeah, Spotify wrapped was really a special moment for that reason. They had not had a great experience the year before, so there was a lot of pressure on this year to do something really special. We were still building a lot of what we consider the v one of the products, like data binding was just coming out. there was a lot of features and, and they really wanted to make sure that, you know, the, the runtime that features they were using were, were stable because they wanted to have it ready to go, earlier in the year.

They didn't want to be, you know, launching this thing in, in, in November or December. They wanna make sure it's actually loaded [00:01:00] on the device. before the actual date, like a lot of people, you know, aren't gonna update their app on the day that Spotify raft comes out.

So they need to have it done quite a bit earlier so that there's time for people to update their, their apps and all of that. all of that was really exciting and it was exciting how fast it came together. I think it goes to, and we can get into the details about the benefits of Thrive and why, you know, we see it as a really big unlock for teams like that, that can keep iterating, keep building something really quickly, and empower creatives, not just designers, but designers, animators, coders to all work together on something to see the perception be really positive and everyone would be really excited.

There was a bunch of tweets on that first day that Spotify hadn't quite talked about it being built with arrive, yet there's a bunch of tweets asking, like, how are, how is this made? I can't even wrap my head around. There was, I think a tweet that was like, I dunno, I got like maybe 20,000 likes or something that was like, how is this made?

And then, um, I think the very next morning the Spotify team replied and gave us the okay like, yeah, let's talk about it. and so we just retweeted it from the Arrive account [00:02:00] with replying to, you know, arrive. That was, that was a tweet. It was just like, the question was like, how is this made? And it had like, yeah.

And it was just like, reply, arrive. it was such a cultural big thing that happened and, and it kind of validated, riot as a full experience. 

[00:02:12] **Luigi:** What I loved about Spotify, and I think Duolingo does the same thing, and a lot of our customers, every customer is driven right this way, is that they help us push the envelope.

'cause there's a lot of features that we're currently working on and we're like, oh, this would be this, this would make their life so much easier. we need to prioritize this. And there's always a little bit of a internal like, okay, how do we rework this such that they can have this by this drop dead date?

We were reworking the Android runtime this year and we wanted Spotify to really have that and not be able to, you know, miss out on the performance gains of that. And things like Guido said, data binding and everything and how that worked and how they could use it and how helpful it would be for them.

Um, there was just, there's just always this mad rush of features that we're trying to still complete because we are not yet at RV what we consider RV one. 


## [00:02:53] Why Rive is so much more than motion

[00:02:53] **Ridd:** I think one of my main goals for this conversation is to help designers listening, kind of [00:03:00] just break the box of what they currently have put thrive in, because I'm sure like a good percentage of people listening, you know, they put it into this motion after effects, Lottie alternate, like that kind of a bucket.

And I know enough to know that the ceiling is way higher, but it also gets a little bit murky in terms of can this go? What is the vision for the future? And also related the fact that you've been working on this for a long time and you're.

[00:03:26] **Luigi:** A

[00:03:27] **Ridd:** at like a V one. So it's like I want, I really want to understand from this conversation, like what the vision is, why it matters, and how it paints a picture of potentially even like where the world and where these roles are headed.


## [00:03:40] The Rive journey

[00:03:40] **Guido:** So, I don't know that everyone knows this. , We're identical twins. Luigi's the engineer. I'm the designer.

That decision was made when we were in. gonna date us here in late nineties. we just realized that like, wow, this, this works. Like we can, be a team that's, does so much if we're complimentary like that.

so that kind of set the tone for what ended up being some, some of our first startups in the nineties, we, [00:04:00] we launched a, design dev agency that, was doing a lot of custom work.

We, we've always, and that kind of became our thing for the next basically 15 to 20 years. That's, that's why we moved to the us. We got a lot of customers, um, that were here in the us. Red Bull was one of the first ones. And shortly after Xbox, Microsoft, and kind of what people came to us for was these really custom experiences that needed really custom design and development. That's what we became known for. we worked, uh, I've mentioned this one before too, nine 11 Memorial. The, the very first, um, sort of product experience that went along with that, like kiosks and websites. those were all things that had to, be consistent but, but might run JavaScript in one spot and some other framework somewhere else, and on the kiosk.

And, and so that always required a lot of effort to, to convert these graphics to code. And so that is really what the ride vision is aimed to fix. It's aimed to fix this, this thing that Legia and I have dealt with the, the core problem of converting graphics to code. Yeah, we've battled it for like [00:05:00] since the late nineties.

let's give the designers an ability to actually work on a graphics format that ships not a, mockup or a prototype, but then an engineer or an AI has to convert to code. you know, 'cause whether you're working in, in Sketch or Figma or after. You are working with constraints, you're just working in constraints of the software that you're using, so why not actually give you the constraints of what the, the actual runtime and hardware that it's gonna run on are, give, give the designers the same constraints, and get them designers and devs and motion people all working on the same format and the same language.

And so that was really the big challenge of building Ride and why it's taken so long to get to almost V one. is that it's not just about building an editor, it's about building a new type of graphics format, a a new type of editor, a new type of render that can run Performantly everywhere and, and a low level sq plus plus runtime that can run across all those platforms too.

[00:05:56] **Luigi:** if you ever play a game or if you ever play something, if you're ever interacting with [00:06:00] something, one of the most important things is that you can interrupt whatever's happening. Like the, the best games are the ones that let you, like actually mid jump or mid something switch to something else, and getting that really smooth visual feedback that it's doing exactly what you expect and it looks just, it looks smooth, but there's a lot of work under the hood to make sure that those transitions are smooth and are happening at the right time, and the constraints are being followed such that something doesn't bend the wrong way or whatever.

Having tooling to be able to do that is actually to not. Something that most designers have to work with, game developers work with it to some degree. and I think that, that, that was the first part of what does a tool that lets you mix animations with constraints that are respected no matter what happens, and being able to preview that very clearly in an editor that lets you basically interrupt things at any time, change things at any time.

Because the biggest problem and one of the fundamental things that. Was really hard in battling all these different systems that we fought with when we, when Guido and I were building all those different [00:07:00] pieces of software that he talked about was the iterative loop. it's such a problem to be working and tooling that doesn't give me immediate feedback.

I'll never be able to chase whatever it is that I'm trying to figure out. And so the tool needs to give you that in real time immediately, which ties into every feature we've built in Arrive. It's why we have scripting directly in the editor and why all the features are directly in the editor.

Because you need to be able to immediately see the result. You need to not be able to hit, compile or in flash command enter, you had to hit command, enter every time you wanted to see the result of some code you wrote. No, you need to see that right away. You need to see that immediately. Whatever I'm doing is having an effect and how can I tweak it such that I'm not broken out of that iterative loop?

So the hardest thing with about that is that . No runtime format, no vector graphics. Renderer had been built to really think that way or support anything that way. So we had to write a format that had those concepts in it. And then also abstract. At the time, the renderer we tested, we tested so many different renderers to try to see, okay, can any of these keep up?

And none of them could keep up. So we started [00:08:00] writing our own, and then we started hiring people to help, because at the time it was just me and Guido and I was, it was just way too much for me to do all of that stuff and be successful at everything else that we wanted to do. So we finally started growing the team, and we've been very fortunate along the way to find some really talented people who share that vision and who loved the, the kind of carte blanche of, let's, let's redo this.

Let's, let's rebuild a pipeline and let's build it right? And we don't have constraints. We don't have to follow the SVG spec. We don't have to follow the HTML spec. Let's make our own spec if we were rebuilding Vector graphics today, what would we do differently?

And, and that got a lot of people excited and we've been very fortunate to. keep doing that. And we take that approach with anything that we interface with or build at arrive.

[00:08:41] **Ridd:** Listening to you talk, I think the thing that I wasn't actually even aware of is that motion it feels like has always been the stepping stone for you. Whereas like that was like how I interpreted what rive even is, but that was just the way to even get to something much, much larger.

[00:08:55] **Guido:** Yeah. So, so Mo Motion was a requirement for the format, and, and [00:09:00] that's, that was sort of one of the hardest things to figure out is because if you think about all the graphics formats that existed before Arrive, you can think of like, you know, PNGs or, SVGs or, any graphics format that you can think of.

It basically just describes pixels or curves at rest in, in one state. That's it. there's nothing that describes, you know, changing state and movement and all. Even video, a video format is just a sequence of frames. Is, you know, originally designed, you know, to be scanned from a film world, put on a computer to do some special effects on, and then printed back on film and video is just a sequence of frames.

It's not, it's not interactive. It's, and, and the disconnect that Luigi and I had was that, we felt like there needed to be this, this graphics format that could change state at any frame that you can, you know, you make a button and in that button it's got states for hovered or for selected or, or a, you know, bigger than a button a, a bigger component that has, you know, animation to transition in and transition out a whole, a [00:10:00] whole set of components and screens and characters and all of that.

And so that was the, the very first sort of thing we, we knew had to work really well for this new type of graphics format is that it had to change state every frame. And if it can change state every frame, it means it can do motion really well. And so that was like this first sort of like. thing that we built and that, and that we started showing off was like, look at the motion that this is capable.

'cause that was sort of like, well, why would I wanna use this in the first place? We have HML, we have, you know, SBGs, we have all these other things that define graphics and, and ui, why would I even use this? And so serendipitously he found us, he just stumbled across our site and animated this, this fly.

JJ he's, uh, Juan, Carlos, j jc tune on, on, on social media. he was the first person that joined Drive after me and Luigi. because he just made this like fly that had like a ton of motion and bounciness and like, and it was just like, okay, this demonstrates why people should, should use Thrive. He, he had just like, kind of signed up, built something and put it up on our site and we're like, whoa, we got a real animator here.

that made us realize like, this is how we get people [00:11:00] excited and show 'em like, why you need this format. Look, look at the stuff you can do with it. Look at the motion you can achieve that you just can't achieve with anything else. I mean, other than video, but then it's not interactive. You can't make a transition and, and animate.

And so I think that really set the tone for like, okay, arrive is an animation tool. Arrive, is trying to compete with After Effects and all of that. and instead it, that really wasn't our intention. our intention was to go after something much bigger. The building, those full experiences that we've talked about and helping designers and developers, any creative person, designers, developers, animators, those are really the three archetype creatives that we think about at Ride that should all be working together in the same experience, with the same set of constraints, with the same set of tools.

To build something really special, the likes of which you're starting to see now with Spotify wrapped, and they're gonna be working on even bigger experiences. the stuff that Duolingo is building, the, the LinkedIn year review that they did with Arrive, some vehicle companies, which we can't talk about yet, are doing some really exciting stuff.

[00:11:54] **Ridd:** Okay, I'm starting to get it. It's starting to click a little bit. And I remember even looking on Twitter randomly, [00:12:00] somebody put, it was probably just like a prototype of a car dashboard. That was definitely the moment for me where I was like, wait, what? What is drive? You know, like I, I didn't think anything like that was possible.


## [00:12:10] The new "Creative" builder

[00:12:10] **Ridd:** And I, even from my own experience, we've been working with a amazing, freelancer Bartech, who's been doing a lot of live stuff for inflight, and it's, I think the, he is amazing and, and like he represents this new type of, I don't even know what the word is, you know? 'cause he's very much so designer, developer, animator, like, what, you know, creative builder.

I, yeah. You know, you're just a creative. Yeah. I love that. And it's a theme that has spanned many of the most recent episodes where it's like, you know, if you would've historically considered yourself just a designer, there's this reliance that you have, right? You're, you're making mockups and now somebody else has to match your intent and, and nail all of

[00:12:49] **Luigi:** you're selling yourself short.

[00:12:51] **Ridd:** Right. Yeah. And so it's like that's kind of a cool comparison that I'm now making where I'm like, oh yeah, you actually have just been working towards this vision that I feel like we're seeing in different [00:13:00] parts of the web, but like for a long time. And I look at someone like Bartech and I'm like, yeah, that's it.

'cause I bring this dude in and I'm like, I have a really rough idea of what like the core UX might be, but like, figure it out, man. Just design it and build it and animate it. And somebody like that can really wear all of the hats without having to loop in a bunch of other people and that's amazing.

[00:13:22] **Luigi:** Every designer has this ability. They just need to trust themselves enough to give it a try. if you're a designer, you're already thinking about these problems.

[00:13:29] **Guido:** and that's some of the reasons why we, we, we chose to, you know, not sugarcoat things when we introduced things like data binding. And more engineering heavy concepts. We didn't want to like give them friendly names for designers. We're like, no, these have names in engineering. Let's use their real names so that when engineers are working in arrive, they're not having to do the opposite.

Just learn the, the, the simplified names of things that we gave. Things like, no, let's get everyone again in that concept of working in the same constraints, talking the same language, and level up everyone [00:14:00] together instead of, accepting that, oh, designers aren't smart enough to understand the engineering terms.

We need to dumb them down. 

[00:14:05] **Luigi:** if there's design components that are exposed to engineering, they shouldn't be called something different. We should all talk the same language. And so that's, that's been, really a fundamental decision. And a lot of the features that have come out that have had these names that are, you know, they're not called variables, they're called view models.

And we've taken that same approach for everything in arrived.

[00:14:25] **Guido:** One way to help people maybe sort of grasp what the vision of Arrive is, is think of it as an experience engine, that is lightweight enough because that's what we built the runtime of the format to do, like, to be super lightweight that you can run it as part of your experience.

For example, Spotify, they didn't build their entire app with Thrive. They built the Spotify wrapped experience with

[00:14:47] **Luigi:** You can bolt it on. 

[00:14:48] **Guido:** but it is so lightweight that it doesn't trigger, and this was part of like the, the, the exploration we did early on with Spotify last year of like, okay, can we actually ship arrive?

is this gonna put us [00:15:00] over the, the file size for, for the entire app where we now can't download over, sell. It's an engine that is so lightweight that you can add it to , your existing experience and have negligible effect on your file size and performance. yet at the same time, so flexible and powerful that you can build your entire app with it. And that's been the, the five years of building where, you know, there weren't quite all the features there yet to do that.

Like, uh, the text engine we described vector feathering, which people got really excited about last year when it launched just about a year ago actually. yeah, it can be games and people are starting to build full blown games.

In fact, we have, we can't, we can't, can't talk about customers yet, but there are some pretty awesome studios, big studios that we hope to talk about later this year that are building like, like names that you know very well, that are building really cool experiences with Thrive, , and launching on big game engines.

and there's really just a few features left that were on our original V one list, and that's why UC us now being more public, um, coming on podcasts, we, [00:16:00] we were always very much of the mind of like. we don't wanna be over promising and, and have people like come in and then churn because they're, they're missing, you know, dynamic text or they're missing responsive layouts, which we just shipped last year and vector feathering, which is like, was a huge undertaking. We didn't, we didn't wanna give people like, you just your default glow and drop shadow, because that is some of the things that can, can most, kill performance. And was one of the big reasons why we just didn't want to turn on like, here's a blur filter that a designer can go nuts on and on their like, you know, M four max computer.

They're like, this is great. What do you mean it's not running well

[00:16:32] **Ridd:** would be that

[00:16:33] **Guido:** an Android from five years ago? Yeah. Um, and instead we,

[00:16:36] **Luigi:** mean, flash had exactly, this is exactly what happened to flash, remember, it took them forever to add drop shadows, blurs, and when they did it, it had exactly this, all these caveats and warnings and ways to cache it so that it was faster 


## [00:16:50] How Rive built vector feathering

[00:16:50] **Ridd:** let's talk about this for a second because I did put a tweet out and just kind of sourcing just general ideas of, of things that people were curious about, and the vector feathering came up, I think, at least like three times. [00:17:00] So talk about like, what are you doing that is unique there and why does it matter?

[00:17:05] **Luigi:** what most engines do when they do a screen space effect that blurs or does some interesting, uh, shimmer effect refraction. All game engines, all apples, liquid glass. What they normally do is they draw things in layers and then they apply an effect that samples from those layers and does a very different thing on, on what you finally see.

And there's ways to cache that. So it only happens within little rectangles of the screen, but it normally always involves some kind of copy of raster data. So the GPU is doing one thing, then it's using that data again for another thing, and then it's drawing the whole thing together. And it's just, it's just a lot, it's a lot of fill rate, it's a lot of redrawing to the same regions.

What vector feathering does instead is, it computes the, the vector extrusion of the edge. So it takes a shape and it grows it a little bit. It figures out in that that what we call the feather, the, the, that, that little edge, we can [00:18:00] run the actual gossan formula for doing a blur. Directly as we are drawing the shape. So there's no resampling of the background, there's no filter applied after everything it's happening as it's drawing it. That means the pipeline is unified. That means there aren't as many state changes from the CPU to the GPU. It's just all much, much, much cleaner.

And it's fundamentally doing much less because it's only evaluating that function on that very specific shaped edge. The feather, uh, versus the whole screen or even an optimized version of the screen, it's still doing way less overall. And that's, that's kind of the same approach that this is. So this is why no one else can do this though, because we have of a tool that lets you see exactly the result of that.

The result is that it's not quite the same as taking the screen and blurring the whole thing, right? So visually it'll look a little bit different. It gets very, very close to a full, to a real goss and blur. It almost is. And now in particular, Chris has been working and has evolved it such that it's very, very close, but it [00:19:00] isn't fundamentally the same.

So if you. A designer, a goss and blur. And then you tell an engineer, okay, implement that. And they do it with vector feathering. They're gonna complain, well, this doesn't look quite, this one pixel here is a little off. What's going on with that? And that's a fundamental reason why arrive exists, because then you at design time, see exactly as it is.

And if that pixel doesn't look right, tweak the value such that it looks right until you're happy. And then it, it'll, it'll work the whole way through. So the whole pipeline has to be built for this from the start. And so that's why it's novel. That's why it's different. That's why it's not, it's not a blur traditionally.

It's a blur, but it's a blur on specifically only certain geometry.

[00:19:37] **Guido:** We get some people who are like, Why did you choose this hard mode? Why didn't you just make this runtime that other people can use different design tooling and different animation tooling and then just import it? Derive and, and, you know, your secret sauce is a performance of your runtime and your new format and all that.

And well, we, you just described as exact reason why we couldn't do that. Because if some, someone designed something in a different tool, they would import it and it would never look [00:20:00] exactly the way they want. Whereas instead, if you're designing directly in Arrive and using those tools, you're working within the same constraints at design time that the runtime has.

So yeah, that's, that's been part of the hard mode is that to, to solve this problem holistically and really get designers to be able to build experiences that are in the moment that you're building it exactly what's gonna ship and can keep iterating on that experience right there, meant having to build the whole pipeline.

It meant having to build the de design tool, the animation tool, all the rendering features and all of that.

[00:20:30] **Luigi:** it, it's all tooling like, like people will say, well, you know, Photoshop lets me design stuff like this. Yeah. But Photoshop was a tool for a different era. Photoshop was never a tool for runtime. And it's the same thing from when we went from, you know, from building boats to building cars. You need the right tooling.

And the right tooling for something that is fundamentally interactive. Must be interactive.

[00:20:50] **Ridd:** the people who say the tools don't matter. I'm like, I, that era, the door's closed. Like we can't say that anymore. Right. And like even myself, I'm a perfect example. I've done a [00:21:00] few little things with Thrive, or at least, you know, worked with with someone like a Bartech. And man, you get a little taste.

I'm like, okay, I'm gonna do that again. And even now my own product roadmap, I think about these little micro experiences to help designers get better feedback. They're all gonna be in Thrive. They're all gonna be in Thrive. 'cause I can do things that I just simply couldn't do otherwise. 

[00:21:19] **Guido:** the fundamentals of good design, the fundamentals of good animation and the fundamentals of like knowing how to code. They're still gonna give you a massive edge no matter what tool you're in.

And I think that those are the people who are most successful at arrive are the people who already have, you know, the fundamentals of good motion, the fundamentals of good design. even with, the, the new scripting engine, um, we're seeing designers like immediately be able to use the AI agent to help them build code and scripts.


## [00:21:46] Scripting with AI in Rive

[00:21:46] **Guido:** But, Luigi went into one of our, we can't talk about this customer yet, but very big streaming platform that is using Arrive and building some games with Arrive, that have very high like performance requirements. One of our designers built this awesome experience that was [00:22:00] really great, and used the AI agent to help 'em do all the code, like he's never touched code.

And he, he built the whole thing. Luigi had to then come in after and, and make sure like that the performance was really good and go and like basically double check it. And he actually used the AI agent. To, to help him improve the performance. So, so Wiji, who is like one of the most low level engineers I think that I've ever met, low level meaning that he can work down to the like machine code basically even he like gets value out of using AI to help 'em think and, and think through these, these massive things.

[00:22:29] **Ridd:** L Let's go a little bit deeper on that too, because I think that's why the timing of this conversation is particularly interesting to me because I'm the perfect example of someone who like, you know, got a little taste of what is possible with ai and now I'm just overly confident in everything. I'm like, I can learn any tool, I can make anything happen in code, I can build anything.

You know, so like even the next episode that drops that will be out before this comes out, it's like, you know, three JS in blender and all this kind of stuff. I would've had, I would've had no interest really. But now all of a sudden I'm like, you know, AI can help me. Like if I [00:23:00] care enough to see something in the world, I can make it.

So I am trying to point that ambition at arrive. Very much so. And I see the new release. You have the scripting engine, you have the AI agent. Talk to me a little bit about like, what does that unlock for people like myself?

[00:23:15] **Luigi:** the, the point of what scripting was meant to unlock was the ability for, again, when, when we were building stuff, as customers would come to us, they needed very specific things. And what we quickly realized is, yeah, we can build the knobs and whistles to give you this thing, but then everyone is taking this feature and everyone who doesn't need this feature will have it as part of their runtime.

And this is exactly the problem that a lot of game engines and other app engines run into, is that they, they get bloated. They get bloated because they start building features for customers that need them, but not everyone needs them. And so the scripting engine was really meant to come at a time where the fundamentals of changing states of animation applied to, uh, text, applied to, to visuals, applied to curves, applied to images, applied to audio, applied to layouts.

All these fundamental building blocks, like [00:24:00] Riri is very low level in all these things. You'll see when you use Arrive, everything is kind. We don't give you a scroll panel. We give you the bits to build a scroll panel. And that's the same thing with, with everything in Arrive. And that's why scripting had to come at a time when all those building blocks were there and then you could bring the logic that made it work the way that you needed and could expose features that we didn't have that you needed.

But all the fundamental stepping stones are are there to do that. And that's why scripting is here now. It's meant to be a way to unblock your needs and be not only efficient at it, but also be, be, be kind of unlimited in what you can build with Thrive. that's why it had to come.

It had to come now after all those other features already. And the hardest decision that we made in the last two years was one. what is it, what are we bringing and, and how do we make a fit into those constraints? And two, how do our designers, engineers, people, creatives, how do they interface with this, this coding language?

[00:25:00] And it was a pretty early on decision to build a native editor for it.

[00:25:03] **Ridd:** we're talking a lot about like. You know, data transfer and even be able to like pull things in. And that was a moment for me where I was kind of like, oh wow, you know, it was kind of a aha moment where I could actually like have it be determined.

Whatever I'm making is determined by like actual data that I'm getting that it's like stored in my database. I don't even have the right language to describe that, but for somebody who's listening, who's still trying to increase the fidelity of what they're able to imagine in terms of just use cases and what this could look like, like help them understand the relationship between

[00:25:32] **Guido:** yeah. Let's go back to

[00:25:33] **Ridd:** the data there.

[00:25:33] **Guido:** Let's use Spotify as a, I think they're a perfect example. You know, when there's that kind of race at the end of the experience where all the artists, kind of the top artists for you appear. There's like the global one and there's, there's one for you where they appear and they kind of like start racing each other all around, all that, and that, that looks very cool.

Motion graphics moment, which was animated and all that, but the, The whole thing is driven by data so that everyone sees something different. For example, the images that appear [00:26:00] there are of the artists that you know are in first place for you, but your artist might be different from my artist. And so all those images are, are data bound that that's easy to think about.

You just change a source of an image and it loads a different image in there. but the position, you know, every single property in rive can be data bound. So the, the position xy at scale, rotation, um, font way, all of that can be driven by data too. So, so you get this very dynamic race that looks very different.

Like, like in, in the middle of the year in July you were listening way more to one artist and they pop forward and then, you know, sort of in August they kind of pulled back and they disappear. And this other artist came out of nowhere. You know, everyone had um, K-pop demon hunters pop up in whatever it was, September, October.

Everyone's like chart kind of just suddenly had that then pop up there. but that was different for everybody. You know, that kind of multiple snakes that appear on the screen racing and moving and all around. and that was something that without data binding, you would've had to do a whole bunch of, either permutations of animations that like, here's all the different [00:27:00] versions that we can support.

And then we, put in some data, you know, and hard code it in and, and have the engineers control it. But with arrive it did, it doesn't have to be done like that. You can actually, in the editor, build it in a way where then you can get it sample data. the fetch feature I'm talking about now will actually let you bring in the real data so you can see, you know, let me just change the language across this entire experience and see what does, does this fit in, like what we just in Thai or in Japanese, does it, does it look right?

Does is all my wrapping set up rights, or, and, and my ellipses, overflows and all that so that it doesn't break the experience. so with Arrive Today, you can do that, but you have to set up all your sample data yourself in, in these view models in our data panel. and so when the designers, you know, are building something like that, they can actually set up their animation to do a bunch of stuff, but then be driven by data, which shows up in a data panel.

And when you're playing it back, you can interact with that data. You can, you can see like, okay, in July this person became 90% of what I listened to, and you can actually see it react and move down the screen more and, and pop in and, um, appear. And, that's what working with Data and Arrive enables you to do, 

[00:27:57] **Luigi:** And this is multistructured data, right? These are, these aren't [00:28:00] just little properties. This is like entire structures of data that can be nested and can be very clearly exposed to the engineering team. Who then sees, okay, well this, this arc board, this of the entry point is this data val, these data values here, this is what the designer wants me to control to drive this experience.

And you can very clearly understand, okay, that's my contract, that's what I can do. I need to also expose this. Can, can we get an extra field in here? Let me go at it. Okay? Now the design team can go hook that up and make it work with whatever's there. But it's all in that common system that lets you see exactly what's

[00:28:33] **Guido:** I can. I can give you, I think, a simpler example that maybe 'cause the Spotify one was very unique to them. It's very gamified. It's maybe not a ui, but like a more common experience that we've worked with, with some vehicle companies is imagine your car cluster, right? Where you have the car, maybe, maybe like a digital twin of your vehicle in the middle.

And then you have like a, some, some different icons that can turn on. Like, I'm turning right, I'm turning left. Hazard lights, I don't know, compass direction of the car, the vehicle is pointing and all that type of stuff. you [00:29:00] might like what we were just saying, like, Hey, I, I actually have like this icon that needs to, you know, blink if, if the left turn signal is on, or the right turn signal is on, can you pass me that data?

So, so the engineers would be like, oh yeah, we have that in our backend. We're gonna pass it to you. And the designer makes a view model think of view models as basically like data for a specific component or for a specific screen. It's, it's like a collection of properties. So a view model is a collection of properties.

You might have a view model that is for your. Your car component or for your, collection of icons across the top, and you call it, you know, icon collection vm, and that's the view model that has all the, you know, it's, it's, it's, it's a component that gets linked to that. Then when you bring that component into a bigger screen, you bring an instance of that view model that, that has data that's connected to it and controls it.

So, so one example of this is I might make a view model called, my car and it's a little visual representation of my car. And now, in that view model we put left turn signal. It's, it's a bullying value, true or false. when that data comes in saying, Hey, it's true now, we can connect it to an animation that makes it blink, uh, the, the, the [00:30:00] actual like, you know, light on the car starts blinking when that view model property turns on.

but that, that data is reusable so we can reuse that same, um, view model property that came. I don't have to tell my engineers like, Hey, I wanna actually use this also to turn on the icon, not just in the, in the, you know, digital twin version of the car that's there. I want its light to blink, but I also want the icon to blink up there.

And maybe I wanna also, you know, do some other thing. I,

[00:30:25] **Luigi:** Play a sound.

[00:30:26] **Guido:** play. A sound to turn, yeah, make a sound play. I don't have to go and tell my engineer all of that. All I need to know is like, okay, I have, I have that data coming in, I'm just gonna connect that also to the icon, you know, color changing.

or I'm gonna connect it to, uh, the sound event that has to fire when that thing is on and when it's off, it has to stop playing that sound. all that stuff is what data binding enables you to do. It allows you to have this data that then you connect to playing in animation, changing a state, just connected directly to a property like, like in Spotify.

The, position of where those characters are on the screen, where the, the, the artists are on the [00:31:00] screen, You can put it at like 80% and it'll jump down to 80% and, and you can interpolate and that that's connected directly to the y value of that group of objects.

[00:31:08] **Luigi:** Well on the next part of it. That's, that's, I think the, you know, the biggest like unlock I think designers love this, is imagine if you're building, so the Spotify thing that had multiple things on the screen, but imagine also, I don't know, you're building a store that's selling products or a list of songs or something.

You design that once. You get your view model for that. Then the name of the song, the, the artist, some, the length, the duration. I designed that. Once I hook it up to that data and now I tell it, okay, I've actually got 20 of those coming in and it stacks them or it puts 'em in the right direction. You control the direction, you control the layout of how it looks like.

You can make them look one next to another on a screen like racing cars, but it's actually your artists as they race throughout the year. And that's where it gets extremely powerful is when you start being able to do this times end and you start being able to do this for as many of these things as possible.

Then you're being efficient, you're drawing thing once and you're giving it the multiple states that it needs to display them in [00:32:00] different ways depending on what it data is. And then you can try it and all those different variations of, of that data coming in. It hasn't quite clicked for everyone yet, but why this is so powerful is because you can start designing much faster because you start thinking in terms of how it actually works at runtime much sooner.

And you don't need to just, okay, I'll build this here, not here, and I'll make a copy of it and paste it and put it like this. You immediately start thinking, oh, in the other version, I need to hide this icon because it doesn't have an image or something. Okay, I'll build it like that. I'll make an animation that makes that go away and now give it to me 10 times.

What does that look like? And you can do that all directly as you're designing it. And I think that's, that's, that's so much more powerful and efficient and iterative than doing a bunch of design work that then you throw away.

[00:32:43] **Ridd:** Can we pull on maybe one or both of your hypotheticals here help people imagine what they could do with scripting on top of that foundation.

Just, it could be anything. I, again, I'm trying to come back to just helping people imagine like, what can I do with Rise? 

[00:32:57] **Luigi:** So, so one of the interesting things that scripting gives you [00:33:00] the ability to do is kind of that end thing that I just talked about. It does let you directly take one of these components and instance them multiple times. We do this in a bunch of the games that you've seen built and arrive, like the zombie one, it'll take a zombie and I, I want 30 zombies on this level.

Great. I'll make a copy of it with the script. The script can place it anywhere, can change all of its view model properties. but it can also put data into the view model. So it can also say, okay, instead of actually directly ins sensing graphics and placing them around, I can just work with data. I can go say, okay, I need three copies Of the car twin or, or, or the, the, the music or whatever it is. So you can use it to actually create variations of data that you can preview directly in your at design time and make sure that things work right. Like, okay, let me put some German here, let me put some Thai there. And it could do that too.

It's, it's, it's very, very flexible.

[00:33:52] **Ridd:** Know you're approaching the V one. Are we able to kind of shine a light on what you all are looking at upcoming to give people an idea of where [00:34:00] you're headed?


## [00:34:00] Where Rive is headed next

[00:34:00] **Guido:** So the biggest thing that's missing today from someone building their entire app in Arrive or their entire website or their entire, any experience in Arrive, um, is a few small things. Not so small, but small in the scale of like the five years that we've been

[00:34:16] **Ridd:** Yeah. You guys have a different definition of small and timelines.

[00:34:20] **Guido:** One is text input. So the ability to actually have a field where you input text into all the fundamentals for it are there. Um, but there's a lot that goes into that that people don't realize it. In fact, building our code editor in arrive was part of figuring all of this out. There's like having to select text, there's having to handle focus management.

and in our editors, even multiple cursors with multiple people working together on the text field and all that. So, so we really wanted, again, like we were just saying from from first principles, fundamentals, build a system that lets you build anything with it. and so that's one that's coming relatively soon this year.

It'll be a, a big unlock. The other one is focus management, which comes with it. But it's important not just [00:35:00] for text, but also for accessibility.

So the ability to like use a keyboard to tab through and focus on the right thing and have a screen reader read back to you, you know, this is a text box, this is a button, this is a headline. and that type of stuff. So that today is doable With Ride. We have customers that are doing data binding, unlock the ability to do a lot of accessibility and expose it at runtime, but it requires a lot of manual work

in fact, I would say very few few people are doing it because it's so much manual, especially across having to do it. If you're launching it to the web and then you're doing on iOS and Android and Unity and Unreal, those are all different systems you have to expose it to. So that's actually the main reason we've told people not to build full websites. We have had customers that were like, I just wanna build my entire website. You, you guys added scrolling, virtualized scrolling, virtualized means that like, you can have like a thousand items in it and it only renders what's on the screen, so it'll still be really performant even though there's like potentially an infinite amount of items in there.

Like, we've done a lot of work that enables all these like, use cases that are. Real and, and necessary to be able to build full experiences. but we felt back saying like, yeah, you don't really wanna build a full site [00:36:00] yet because you're gonna miss out on, you know, screen reader support. And also the ability for, you know, a search engine or any kind of bot to, to crawl it and, and read the content.

[00:36:09] **Luigi:** One big thing that is under the scripting umbrella that hasn't been fully baked yet, is the ability to use Pure and to write purely edit time scripts. And that means the ability to not only extend the.

Editor by adding like the shapes and things like Guido was talking about. Um, I wanna make a squirkle. I wanna make a a, a procedural boil effect on all my paths. Great, but what if I want really nice controls over it? Or what if I wanna do a a, um, what if I wanna add illustration support to der so that I can draw and animate those drawings myself directly?

I could write a tool that does that. That's a big part of scripting that we're working on right now that isn't available yet. Because again, we went for the hard thing first. We want scripts that carry through to runtime, but you can absolutely imagine that everything you can do at runtime, you could also do edit a time that helps you create, I [00:37:00] don't know, do do things in a very specific way.

Design things your own way. Um, create a level editor, whatever it

[00:37:06] **Guido:** I mean, the example that one of our, uh, team members just did earlier this week was, , he built this feature that is a. Perfect example of what we would wanna build with the scripting system, which is describing right now, which is only an edit time feature instead of something that we ship out to everybody.

And that's, um, this ability to basically like motion capture your face while you're in ride and have that draw keys on, on, or, or save keys for like a specific set of bones that you've connected. So you like, basically say, Hey, this is my left eye, my right eye, my mouth, my nose, and all that. And this is the way Duolingo by the way, animates their characters.

And we have mesh deformations that, that deformed the vector shapes or, or the raster images, which is how you get this like really 3D looking deformations. but they go and manually move those bones. Like really talented animators today go and do that and position the mouth and the eyes and everything to get these like really expressive things.

someone might want to just act it out themselves and like be like, you know, uh, here's my smile, here's my frown. And it just like, [00:38:00] capture this, capture that. And. And so you'll be able to make that a script that is available at, at a time that saves those keys for you. But that not everybody wants, like, not every, you know, some car company might not need that for their editor and they don't wanna have that installed.

so yeah, this, it's, it's really most akin maybe to Figma plugin model, what we're talking about here. but it's got the ability to do a whole lot of really cool rendering stuff and to actually ship at runtime

[00:38:27] **Luigi:** support the runtime. Yeah,

[00:38:28] **Ridd:** I came into this conversation, I had arrive like in a box, you know, and then you kind of really significantly grew the box. And I'm like, okay, I think I get it now. I get it. And then right at the end of the conversation you're like, oh yeah, and you can use our scripting engine to build literally any tool to create literally anything.

And you're just like, oh

[00:38:45] **Luigi:** We haven't even talked about 3D. We'll save that for another one.

[00:38:48] **Ridd:** I, I, yeah, I was wondering

[00:38:50] **Guido:** 3D and video are, I think the two biggest things. Like if you were looking at after V one, what are the things that like customers most want? I think 3D [00:39:00] video, direct publish, you know, once you can build an, an entire app in Arrive or game in Arrive, you know. Publish it directly to the iOS app store, publish it directly to Steam, publish it directly to wherever.

Those are some of the things like where you can imagine where it's headed.

[00:39:15] **Ridd:** you know, in a world where. So much of, I don't know, so much of design, A lot of it kind of is feeling homogenized in a way that's like, I get it, you know, but there's a very real impact of AI where the floor is being raised to a point where like things are kind of feeling a little bit the same and you all are over here just doing something that really kind of just blows the roof off of what you can accomplish as a creative and as somebody who just wants to like, get their hands dirty and make things.

And so I'm genuinely rooting for arrive and I

[00:39:45] **Guido:** great to

[00:39:46] **Ridd:** on today and, and sharing a little about, about the vision. You know, like this is, you're gonna make you software in general, a heck of a lot more creative. And I'm in full support of.

[00:39:53] **Guido:** that's been entirely the goal. There's, there's a lot of other business reasons why pick people, pick, ride. Like [00:40:00] it's, faster to build stuff with it. It's cheaper. We don't have to code freeze at XY date X, but the number one reason, is that you can just build stuff with it that you can't with anything else.

And that's, that's the number one reason why Legion and I started building it. And why we care about it is that you, you, you can't do bone and skeletal deformations that also interact with UI in any other tool. There's, I mean, you could try, it'll just be a lot of effort and that's what we wanna enable, these really creative experiences that, um, you can't build with another tool.
