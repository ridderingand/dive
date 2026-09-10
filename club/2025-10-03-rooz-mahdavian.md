---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: nSOCY59ram8
slug: 2025-10-03-rooz-mahdavian
source_type: descript
source: https://web.descript.com/902bd1c7-4a1a-44fe-983b-c0e445d4e481/01ed3
guest: Rooz Mahdavian
host: Ridd
title: "Designing frontier interfaces at Neuralink"
published: 2025-10-03
duration_min: 52
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] 


## [00:00:00] What got Rooz interested in neural interfaces

[00:00:00] **Rooz:** I think the earliest point in that journey for me was, uh, like freshman year of high school, there was this like research that had come out of Berkeley, that was truly wild.

Uh, they had basically put folks through an FMRI machine, And they had them, I think it was watch YouTube videos, uh, and they just collected hours and hours of this data.

and then they ended up doing some form of like, quote unquote machine learning where they could. Take, this FM RI signal that would happen while they were watching these movies. and then predict what frame of the movie that they were watching. And then in like real time, they could then reconstruct all of these frames into what to RI looks like then a movie of what they're thinking.

the results were super wild, like super cyberpunk. It was like this composition of frames from which you could see these like semantic things come out. So you could see like, oh, there would be like a bird, or it would be like, uh, you know, a beach. Like you could see some shapes emerge from this noise.

and then they took this extra crazy step of like, them having them go like, take a nap inside of one of these FM RI pods. and then you could see in [00:01:00] effect like what they were dreaming. this was like something that once I saw it was like hard to like, let go of. It was just like unbelievable. up to that point, I'd spent a lot of time actually making movies.

so the idea that you have these images in your mind that you can now. show other people directly was like really, really magical to me for that reason. It's like you spend all of this time trying to recreate that when you go through the process of like making a short, film.

the idea that I could just show somebody that directly was just, you know, incredible. that was like, I guess my first exposure to the idea of some form of a, of a neural interface. and then separately, you know, I was also, I think, computers in general are a magical thing. So I was, I was really going down that rabbit hole that's another way in which you can take something that is in your mind and then show it to somebody else and create an experience for somebody else.


## [00:01:42] Joinin the Apple Watch time

[00:01:42] **Rooz:** so fast forward five years. Uh, I had this crazy opportunity in college to uh, basically intern on the Apple Watch team, the Faces team. This was like one year after the watch had come out. So it was really, the early days of what, the interface for watch might look like.

and the Faces team is also a super amazing place to be. that is like the thing you actually [00:02:00] see all of the time as opposed to being sort of more buried into the layers of the interface. my interim project was what would go onto become the Siri watch face.

So I was just, yeah, generally really excited about what a proactive computer might feel like something that is with you all the time. We have this notion of drive by on watch, which was. you're checking the time. That is in some ways the fundamental value proposition of a watch is that you go to check the time.

but now there's this like kind of opportunity to surface something else while you're checking the time. so the computer in a way is not something you're actively using anymore, but something that's sort of fades into the background and can hopefully just do useful things for you while you're out and about in the real world.

the first version of the Siri Watch face was sort of aimed at exactly that, which is like, again, more primitive forms of machine learning than, uh, I think we have today. But, uh, a way for us to try and figure out what is the most relevant piece of information, uh, that we can give you.

whether it is like a calendar event that you have coming up, the sort of cheesy examples, but also more contextual things like, you know, if you have been going for a walk, like we can surface the ability to start a workout, right. that was just a ton of fun, to go [00:03:00] through that whole, uh, flow at a company like Apple. guess like my first experience going end to end from just a concept that you have in your head to the initial explorations of what that might feel like to the actual prototyping work of building it and then living on that.

and you sort of go through this loop over and over again ultimately to ship something that, feels awesome. I came back, for another year to, build that out further and then I joined full-time after graduating to just sort of continue that work. so after a year there, I was still thinking, about, that, initial sort of exposure to neural interfaces in, high school was definitely like in the back of my mind still. and of course Neuralink had, publicly announced a couple years prior and was still doing a lot of this work.

So after their first demo, this was like July, 2019, it was just watching that it was clear that this is actually going to be a real thing that people get to use. it was like late 2019 that, I made the jump from one frontier interface, uh, on watch to another, in this case, uh, neur interfaces.

[00:03:53] **Ridd:** I love the phrase frontier interface because on LinkedIn as a line item, you know, we've had [00:04:00] similar job titles, and yet you're working on fundamentally different types of products and user experiences. And like every piece top to bottom is unique. 

[00:04:09] **Rooz:** I think what that really means to be like a frontier interface is one that you have no idea what the actual interaction model's gonna look like. Historically, like the interaction model, for a quote unquote computer is what ends up defining all of the things that you can do with it.

looking back like 60 years, that interaction model is usually a function of just what the input mechanism is. and you know, is it, the light pen originally, like just some point on the screen. Is it the cursor, which is like, you know, that plus the ability to click and some number of like clicks.

or is it direct touch like the iPhone? So like, you know, all 10 of your fingers at the same time tracking like all 10 of those points. that ends up really defining the shape of what the computer can do because how you express your intent and at what, cadence and like resolution you can express your intent is going to define like what you can do with a computer in many ways.

we can go, you know, potentially beyond just the physical. we can capture this intent that [00:05:00] right now we, have this image in our mind.

how do we go about, recreating that right now? We like decompose that into, thousands, tens of thousands of, you know, motor intents where we move our hands to effectively color a pixel on the screen at some level of abstraction. And we go through that process very manually up until finally we can then see.

Some form of what originally was in our minds on the computer. if you have a neural interface, you don't have to do that necessarily. just like looking far down the horizon, because that intent is there, much further up the stack than my hand is. you could potentially read that directly.

so that's what I mean when I say frontier is we really don't know what the interaction model could look like, but the, the sort of device itself can potentially change that model. So it's just about exploring that whole space of ideas.


## [00:05:44] Early design at Neuralink

[00:05:44] **Ridd:** So fast forward a little bit then.

What was the point where you realized that there was an opportunity for you to step into more of a traditional design role?

[00:05:53] **Rooz:** I started doing just a ton of prototyping on what it would feel like to, you know, download an app, like a Neuralink app, and connect [00:06:00] to your implant and. Sort of calibrate a model for the first time. So like the, the earliest steps in here was just like getting some feel for yeah.

What a human experience could be and if this is like a north star that we're all really, really stoked about. spent a lot of time doing that. purely on iOS. 'cause that was the focus at the time it felt like those early days at Apple again, where it was like you had, just a truly a blank canvas. And then, you're just going through the loop over and over again of like, some concept that you have initially in your mind and then, you know, 10 different iterations on that thing, and then ultimately something that you can hold in your hand and play with.

so that was really cool. The flip side is though, that because it was so early in the process, there were almost like too few constraints to actually do something really meaningful here. It was like you could do a lot of cool things, but like you're guessing a little bit too much on, what the interaction model's gonna be.

And obviously it is something that We're not designing for ourselves. We're designing for, you know, whoever that first participant is gonna be, but it's going to be somebody with some sort of motor disability. So it's like they're gonna have a very different sensory, experience than we do.

So it's really hard to actually try and directly empathize with that and actually optimize for that. If you [00:07:00] can't feel it. 

[00:07:00] **Ridd:** can I drill in on that point for a second? Because that was something that was coming to mind while you were talking where you're doing all these different expirations. Yeah. Maybe it's a little bit early, but the part that's so fascinating to me is like. We talk a lot about empathy as designers, but this is a whole other level.

You know, it's like very difficult. You're not just imagining a, a job that you've never had before. You're imagining a state of being that you've never really come close to before. What's that like?

[00:07:29] **Rooz:** I would go so far as to say that it is not something that you can imagine well enough for that to be useful. we have our own, I think, internal models of like what it would feel like to, yeah, basically just try and imagine something without moving. That works well in the sense that you can just sit there obviously for something like a calibration task.

when you're actually just trying to imagine moving, you can do that step of it and I think you can do that step of it well. because you don't have to move, so you just kind of visually try and focus on something [00:08:00] on the screen and get a feel for Is there some, Thing happening in your mind when you're watching something on the screen where it feels like, almost like mirror neurons, you know, I use that word loosely, but mirror neurons are firing and you feel like there's a connection between you and that thing, that step of it.

You definitely can, I think, imagine 'cause you can experience that. That's what we call open loop. So what that means is that like, if you imagine this like cartoon loop of like, there's a human in there.

The human has some intent in their mind. Uh, that intent goes down into some action, and then they observe the outcome of that action, and then that goes back into their brain. So it's like there's this loop of control. open loop just means the loop is open. they are, observing, but they don't actually see any outcome on the screen.

They're just purely observing what's going on. closed loop is when you can actually see an outcome, and then that obviously feeds back and closes the loop, the open loop stage, you can definitely, sort of use your own experience and your own instincts to sort of create an experience that feels right for the task that you're designing for.

But closed loop is extremely hard [00:09:00] because you ultimately cannot experience. the neural interface directly. So, for example, , we have various ways of simulating, these kinds of control. when I move the cursor, we have a model that will basically read, the velocity of that movement and then convert it into, some spike representation. So like what the neural representation could look like for this kind of movement. but if you're actually using that to optimize some aspect of the interface, it's gonna fall flat because you're moving a real cursor.

So you have all of these additional feedback mechanisms from, where you're hand is in space to the feeling of the friction that you feel when you move like a physical mouse or the friction on like a track pad, to the pressure of like a click. you're not gonna get any real sense of, how that feels to use.

That is, I think, actually representative of What it would feel like for somebody who doesn't have any of those things. And it's just looking at what's on screen. so the closed loop side of things is definitely to answer your original question, I think. Not something that you can, empathize with directly.

And I think you can weekly try, but it's never [00:10:00] something that is a reliable indicator of what that feels like to use.

But to even get there, we knew that they, would have to connect to an implant for the first time. and beyond that, we knew that they would have to calibrate a model, so we would need something for the open loop side and we would need to have some best guess, based on academia and also like other work that had been done, in research as to what that closed loop thing should feel like.

and then we also knew that we wanted them to actually use this like outside of a lab, outside of just any sessions with us. Like the real magic is all gonna happen outside when we're like not in the room and they're just using their, their BCI to do stuff. we wanted this to be something that they could actually just like live with.

And all of the work that goes into actually making something that's like reliable, has a simple enough interface that they can actually use on literally like their Mac to just like, go around, click on stuff, do stuff with their computer again. so we had a really good sense now of it's not really gonna be an iOS thing anymore.

It's gonna be just like a Mac app that enables them to use their computer again. And what the basic building blocks were gonna be of that experience. 


## [00:10:56] Designing a brain interface for a cursor

[00:10:56] **Ridd:** I wanna drill into some of those building blocks and maybe the first one we could talk [00:11:00] about is just the cursor. Like what are all of the things that you have to think through as someone that's designing this experience cause my assumption is there's so many things that we take for granted and traditional, you know, B2B SaaS designers just get outta the box.

[00:11:14] **Rooz:** I think the cursor is the focal point of that experience. Ultimately, it is like, when we use a cursor, it is the focal point of your intent in, you know, two dimensions. So it encapsulates like a lot. The thing that I think the, the B2B people get for free, and just really anybody that's building an interface for a cursor gets for free is that there's such a rich spectrum of sensory experience that just goes into using a cursor that I think at this point is so subconscious that you don't really think about it.

But it's all of those additional, senses that I talked about earlier around, like, you get friction, you get pressure, you get sound what all of that means is having like a cursor that just feels like an extension of yourself and like, feels like you're just focused on what the cursor's doing and you don't really think too much about what your hands are doing anymore.

You don't have to think about any of these things when you're actually building an app. Like that's just like, you [00:12:00] know, you put a butt on screen, you can add some sort of depth to that button and, you know, do the really nice things you do to make a a button click feel great. But ultimately, when you do that, it's taking into account all of these other sensory mediums.

So our challenge was like, our participants are not gonna have that. We still want the cursor because it is the focal point of the experience to feel amazing. so then, what's the right way to bring some form of that feedback to the cursor? there's a million ways to do this.

There's a million ways to do this also that we still have not actually even prototyped or tried. But our first, take on this, is actually not the, the version of the cursor we have today, but our first take on this was, some form of a regular cursor that you see. when you connect to your implant.

It does this wild like transition. So it'll like take over your Macs cursor and it'll all like spin into like this new, you know, magical BCI cursor. and then the main question was, yeah, we have the, like, we have a model, we'll talk about that later, that like will take some intents into a probability of, a click.

So there'll be some probability of a left click, some probability of a right click. the moving is fine. Like when you're [00:13:00] moving a CRI around, that is something that you can see, but it's the composition of moving and clicking. how do you make that feel? Not like a discreet event. So like, you know, the click will just happen.

but a continuous interaction, the reason you want that to feel continuous, by the way, it's just because there is. Right now, just at the current stage, there is some latency to that click. it takes some amount of time for our model to ramp up its confidence that, oh yeah, the user is actually, the participant is trying to click here.

and what that means is that if the model were perfect, it would be the same amount of latency every time. and actually the latency would, would just be, you know, whatever the, sampling frequency of our implant is, which is like, let's say 15 milliseconds right now. So every 15 milliseconds, the computer will get some new information about your neural activity.

in a perfect world, right, that click would just happen. The second you think about the click, so like within 15 milliseconds. and then you actually wouldn't really need a UI here 'cause it's, the model's always right. and the latency is basically zero. the click will happen on screen. The challenge is that there is some latency, let's say it's like a hundred milliseconds, 200, 300, [00:14:00] somewhere in that range.

that probability that it assigns is sometimes it'll be a hundred milliseconds before you get to the right probability. Sometimes it'll be 300. and especially when we're thinking about what the first month of like the b, CI journey would be like, there's also a very good chance that sometimes it'll just be wrong.

So like it'll click when you didn't intend to click. that's obviously something we wanna solve for, but we want the experience of that to be at least visible and much more importantly to be predictable. So when you are in this flow of like trying to click for the first time, that isn't this random thing that just after some amount of time the click will happen on the screen, but it's this continuous interaction, much like when you press your finger down on your track pad, there's a continuous interaction there.

and you can see the intensity of that ramp up over time. and our intuition was that that would just feel a lot better visually than just like the click happening would, with no feedback at all. So the first version of this used color, to perform that click, we had I think this really nice blue for a left click and this orange for right click.

And we would actually mix the two depending on the relative [00:15:00] probability of each click. and then we also use depth, and a slight perspective shift on the cursor. So as you were clicking, the cursor would sort of tilt inward just a little bit. The amount of tilt was driven by the probability of the left click and the vibrancy of the blue, was attached to that alongside like how much it filled in.

it would start kind of at the base of the cursor and then as it was tilting in, it would just sort of like grow or stretch towards the tip. and go from this like. a nice light blue to a very bright blue. we can also use like the HDR parts of the display to like, make that a little bit brighter.

You don't want this, you're gonna click a thousand times a day. So like, you do want this to be subtle. we didn't want this like, to feel like a waiting interaction, but the intuition was that having it be continuous and map directly to the, output of the decoder is something that one, let them, just feel like a smooth, fluid interaction as opposed to just this like discreet thing.

Two, this is always a challenge is when things aren't working, give us some visibility, both them and us, some visibility into that. Like, you don't want just random clicks happening on screen and you have [00:16:00] no idea. and then the third thing is a more subtle point, but the interesting thing about a neural interface, this is true about all interfaces, but you are also learning how to use it.

so when you are actually in a closed loop way, again, the last step of that flow is that you actually observe the output and then change your inputs based on the output. So because it's a control loop, seeing each stage of that pipeline, when it goes from 0.1 probability to 0.2 to 0.3 gives you a way to subconsciously over time learn to modulate your own behavior to click better.

So if the model is just completely wrong, this is gonna be a very, very hard thing for you to do. But if there are subtle inaccuracies in that output, there's kind of like a coaptation that can happen over time. so we wanted to make sure that like, that's true of motion, for example, you can learn to, to move it more precisely over time. That learning step, obviously imagine like if you had a new arm like today, like the very first things you do would be like super weird and uncoordinated. Um, but over time you would learn to like really precisely modulate [00:17:00] every single piece of that arm.

But that is a challenge, right? It's like learning how to ride a bike. we wanted the same sort of continuity that you have in motion to apply to the interaction of clicking.


## [00:17:08] How the Cursor interactions evolved

[00:17:08] **Ridd:** What were some of the lessons that you were learning from participants that evolved the way you thought about a click? Like where are you at now and what is the reason for that Delta?

[00:17:17] **Rooz:** the biggest thing was actually that the space of interactions changed a lot. So we went from let's say just one click or two clicks that we wanted for the first day. to the richer set of all of the things you do on a computer. So scrolling is a huge thing that's very distinct from how you move a cursor, like how you actually scroll something.

of course dragging and dragging is something you think should just work. a drag is something that you hold down over time when we hold it, like there's some, again, some resistance that we actually feel right from the literal spring inside of these switches that is kind of our signal to keep applying pressure that isn't fully there with obviously something that offers like no resistance.

and it's also like tally, if you actually look at like the neural [00:18:00] data, what you see is like sometimes, what it looks like is actually more of a transition into like clicking down. Then it transition back into clicking up. that may be a better model for a cursor that drags is, it's almost like you get into the click down soon and you get into the clickup.

The flip side is that if you go down that route, every other click that isn't a drag gets a lot like slower. It's just like, 'cause you now have to like transition between these two states. There may be a much better modeling approach here and that's definitely something that a lot of people spend a lot of time thinking about.

we wanted basically on the first day for you to be able to move and click. and because you could do that, we also wanted to at least have one other click in there.

it's just a nice thing to have, frankly. Right click is like a pretty useful thing for just like popping over something, but not necessary. It was more just 'cause we wanted to test out. if you have multiple clicks in this mix, like can you reliably switch between them?

But over time, then there's a far richer space of interactions that you need to just use your computer. And the more you stack in there, the less just having one simple model where it's just like you can see what the thing is and it's mixing between the two [00:19:00] inside the cursor that just kind of fell apart.

our first participant, like one month or so into his journey. we had a very different signal quality, than we did on the very first day. and so we actually took a step back and also supported a dwell interaction.

cause we found that the clicks in this regime were actually much harder to decode than the motion. Something about just that continuous ability to, to see every slight movement you make, in a moving cursor made it easier for him to move the cursor than it did for him to actually perform a click.

and so what that meant is we wanted this gradient of control. that goes everywhere from just moving the cursor. And then if you can move the cursor, you can use, motion as your signal for one to click. So that's like what the dwell would do. So if you slow it down and bring it to a stop, then you can basically hold that in a certain place and then perform a click that way.

we wanted to support that. And then we also wanted to support layering in a left click, or right click a drag, a scroll, a zoom, and all of the other interactions that you need to like, you know, as you progressively ramp up, we went from just having this really [00:20:00] simple cursor that could show you just using color, these two clicks.

To, a more circular representation. so this is like a circle and a dot, like a radical almost. this actually made it a little bit easier to see the difference in your, click probability. So in this world, we didn't use color anymore, but we use just this, the outer radius of the circle.

as you were targeting something like you with the intent to click, it would sort of scale down, um, and focus in onto that thing. Um, so it would collapse to a point basically the more you ramp up your click probability, perhaps because our eyes are more sensitive to motion than color, this was an easier thing, uh, to actually use to perform a click.

and it also supported just using dwell more naturally, the circular cursor was easier to actually see through than like a normal cursor is today. And because primarily you're just looking at it as your signal of like where the motion is. we could make it a little bit bigger without it obscuring the stuff you actually want to click on.

so we went from this more traditional sort of pointer style to this sort of circular style, and that opened also the door to, going [00:21:00] between different, interaction modes more easily. So we ended up building a different mode switcher, where you could sort of slam your cursor to the right side of the screen and then it would go, on rails and you would use the same model that you used to move the cursor to pick a new mode and then come out.

so you would shoot right, scroll up or down, shoot left. what's nice about this is that it was something that could be really fast, basically if you learn to use it well, as opposed to something where you have to use your normal dwell because then there's no time spent actually selecting that mode.

and it's just one fluid motion of like going to the right, to the sort of part of the screen that you learn like through this sort of. Neural muscle memory of like where this mode should be and then popping out back left. and then once we had different modes, uh, we had like drag in there, we had scroll in there, we could easily change the behavior of like what this redle is going to do and the visual appearance of like what it looks like to like, make it obvious to you what it's going to do now that you're in this mode.

a lot of that was like harder to do. I, I'd say with just like the conventional cursor style and having everything exist in one space, uh, [00:22:00] within the cursor, the trade off there, and this is definitely as our models improve, something that I think will then go back and revisit is, uh, you do have to switch modes to actually switch the, the way in which you do your interaction.

So yeah, the world of BCI I is like an interesting one where there's like, if the model is perfect, it's always gonna do what you want. It's like an obvious statement, but In that world, you really don't need these interfaces.

But bet is that the way in which you get to that world is like more of walking along this ladder than it is like trying to do everything at once upfront. we want basically you to be able to use your cursor to do all this stuff today, even if the ways in which we get there are more of like design and engineering optimizations than they are what we think the perfect final solution is.


## [00:22:40] Can we ever delete the cursor?

[00:22:40] **Ridd:** Are there rungs on that ladder that you anticipate said differently, maybe like specific barriers or unlocks in the capabilities that you're really excited to bring to this product?

[00:22:51] **Rooz:** the rung on the ladder that I'm most excited about, if this is something that we can do, I think it's like definitely an open question, would be, can we delete the [00:23:00] cursor? So if you think about what the cursor Is ultimately it is just like this focal point of your intent that you have to move around.

90% of the stuff you do is more just like, I want to interact with this thing at this point on my screen. do you need like a cursor for that? If you can read that intent that I have, that I want to interact with this point on my screen? probably not. I would say, the cursor's like amazing for direct manipulation tasks.

So when you actually want to directly manipulate something, the cursor kind of fades away when you do that, which is really nice and you can just like, it feels like I'm rotating this thing. Uh, it feels like I'm, you know, scaling it up, whatever transformation I'm applying to it, it feels like, the cursor isn't there anymore.

It's just my hand interacting with this digital element on screen that is a key interaction model in this new world. But like if that first step of just like the 90% of the time I'm just trying to interact with something, I don't think I need a cursor for that. so that's like one step of this ladder I would say, that is quite a few runs out.

on the way to [00:24:00] that, I'm personally very excited about a world in which you don't need to switch modes. some form of that first design that we had where you can see, not just the, click probabilities like inside of this cursor, but the way in which you wanna do this interaction.

so for example, if it is something like, uh, I'll give you like one cheesy example, like if I want to zoom in on something, right? Visually, we still want to give you some form of continuous feedback about that zoom. The cursor, almost like miosis, like cellular division could like explode into like two finger points, right?

And then those could then be your visual anchor for how you're doing this zoom in interaction. That's another step of the ladder, How do you go beyond basically the current interaction model into something that doesn't require switching modes to a new style of cursor?

That mode switching is something that our model can actually learn. So we pick up on your intent, not in this case of just this crazy high order intent of I wanna interact with this thing on my screen, but rather the specific I want to drag now. that could feel like [00:25:00] magic because it's just like when you want to drag, it just switches to the drag thing.

Um, you don't have to channel that intent through how we currently do it, which is we have a mode switcher and we also have a quick switch where you can use one of your clicks to quickly switch to your preferred mode in this specific app. So that gets us like, of course functionally like 90% of the way there, because most of the time your second interaction is dragging.

Uh, I'm curious like what yours would be, but that's definitely what mine would also be. because you can do it on a per app basis, like if an illustrator, you're mostly are like zooming, right? you can easily remap that and like functionally that gets you 90% of the way there, but it's still lacking.

I think the, the actual magic that is unique to something like a neural pointing device that these fiscal pointing devices just can't do, which is that we can read some form of our underlying intent. And I think the next like 10 rungs on this ladder are just bringing like the actual raw intent into our experience.

So the goal so far, I mean, has been just, to enable the use of the cursor, and to enable it [00:26:00] with the same fidelity that we can use it. so I think the current record, our first participant set a wild bar. It was like nine and a half. B-P-S-B-P-S is just like a metric for, the information that we can actually read.

Really, you can just think of it as just like a score, because you can use the same task that they use to measure the BPS of like your cursor, like, so you can use it with a track pad or like a mouse, and just do what they do, which is like click on positions on the screen and it measures basically how quickly you can do that and how accurately you can do that.

so yeah, first participant set this wild bar from that first point, where the signal quality had like dropped off and he had to go back to using dwell. because he just loved using his neural cursor. He like used it every day for months and got, insanely better at using it and went from I think something like four BPS, like two at like, at the very bottom rung was like two BPS.

and he just like walked his way up this ladder to I think nine and a half is where he ended up. For context, I can do about like 10, like that's my personal record. [00:27:00] Uh, I'm probably on end frankly 'cause I use a track pad. But, he ended up around nine and a half. And then this year our 10th participant, did 10 and a half.

it was like 10.38, I think is the final number. the primary goal is to enable the use of the cursor at the same fidelity that we can use it. The reason this is like so exciting for us is like the cursor beyond just being, the focal point of your agency or whatever is also, how you use a computer.

So if you think about what that entails, that entails, like, we use computers to be productive. Uh, we use them to express ourselves. We use them, to communicate with each other. and we use them to like have fun. it's a pretty wide subset of the human experience that can be enabled with just a really sort of fluid cursor.

so that is definitely like the goal and that's kind of why we walk this space of like different trade-offs just to enable some form of cursor use. Um, because we think that like obviously there's this better thing out there that, you know, is in the back of our minds of like, where can we go from here?

but the reason like not to reinvent the wheel in this case is just [00:28:00] because the wheel is how you get on the highway, which is this existing system.

[00:28:03] **Ridd:** that.

[00:28:03] **Rooz:** that's definitely the focus. But there are rungs like beyond that then, which is like, there are things that are not just a projection onto a cursor that we use today that are very unique to DCI.


## [00:28:13] What they're learning from early participants

[00:28:13] **Ridd:** I'm interested in learning more about just how the product experience itself has evolved over time. So as you're getting more and more usage from these participants.

how were their behaviors shaping some of the experiments and just how you were even thinking about what the product needed to be.

[00:28:29] **Rooz:** One fallback we built into the system in general was voice input. So just being able to, say a simple command to recalibrate the model to change some parameters of the model. not something we envision as our final sort of experience, but it was a great, in those early days when things were far less predictable, it was a really reliable fallback option for them to have.

our third participant actually had a LS, that means that they cannot speak. and that means that, of course, voice input is not something that's going to work well here. so this actually bled through to like every edge of our interface in some sense. Like things that we had taken, a voice input [00:29:00] as flex for granted for, we had to think a little bit harder about what a good fallback option would be.

but I think the coolest thing that actually came out of this, directly from our third participant, was a feature that we called the parking spot. The cursor is always moving to some extent. This is one of those things in that bucket of like, as models improve, this will never be the case, hopefully.

Um, but in the short term, you still want to use it. So some amount of motion is going to be there, uh, that the model's just kind of incorrectly guessing or is correlated to them actually just thinking when, for example, they're talking to somebody next to them or they're watching like a movie on YouTube.

Um, there's just some amount of activity that our models are incorrectly labeling as motion here. you can solve this on the modeling side. Longer term effort, shorter term, it's like you just need some way to park the cursor. our previous participants could just say, Hey, turn the cursor off, and then it would just turn off and then they could just say, turn it on to bring it back on again.

For our third participant, obviously they couldn't do that, so we needed to think of some sort of way to use the cursor to turn the cursor off and then use the cursor to bring it back on. we tried a few things here, but the final [00:30:00] thing we landed on was this thing called the parking spot, where, they could just sort of eat their cursor or shoot their cursor into the bottom right of the screen.

And if they push it there, it'll park it, it'll like this little thing will pop out. It'll lock up the cursor. and then they can actually use a gesture, uh, within that surface to bring it back out. So we apply a bunch of little transformations in there to like hold it still. Um, we simulate gravity inside of it.

they can still by pushing really, really hard or by actually going through a specific pattern, so like a dot, dot, dot, they can pull the cursor back out fully on their own. So, that was a really cool one because we did that primarily for the third participant.

but when we shipped that, our first two at the time were like, wait, this is like amazing. And then they, they actually were bigger, uh, for the first few weeks. Like, they were using it far more than our third party was. there's a lot you learn from like each individual participant that comes through, and most of the time actually, What they give you feedback about often always bleeds out into everybody else's experience as well.

[00:30:58] **Ridd:** What does it mean to simulate gravity on the [00:31:00] cursor like that?

[00:31:00] **Rooz:** You could think of it as like, we just do the right math to work this out, but you can think of it as like, when the cursor goes inside this parking spot, it's almost like it falls into a hill. So like the cursor kind of rolls down here. And then it's, it's sitting there. we can obviously tune the depth of that hill so we can tune, like if it's a really steep valley or if it's like just a really flat, narrow hill.

but what it means in practice is that they have to push harder to roll it up there and like maintain momentum as they go up. the actual like output of the model at any given point is not a position. It's actually like a velocity. So it's actually like a nudge, so to speak. what that means in this context is like if we add gravity to drag the cursor down there, they'll have to actually roll it out kind of manually.

when I say that our third participant actually wasn't using it as much the first two weeks, it's because it, that version of it, the gravity based approach didn't actually work for him, which is a really interesting rabbit hole. he, like a lot of people with, uh, late stage a LS, he used an eye tracker as his primary way of, uh, communicating with the world and using a computer.

what that [00:32:00] meant is that when he was like watching a movie for example, your eyes are all like all over the screen. it was a really interesting situation where when he was watching a movie, the cursor would just pop out when he's like, not even looking at it, no matter, even with really, really strong gravity.

But when he really focused his eye on the cursor and tried to move it, inside the parking spot with that high gravity, it was really hard to push it out. So really interesting. Uh,

[00:32:23] **Ridd:** that's, that's a high level of depth that you have to think through. That is really interesting.

[00:32:28] **Rooz:** the solution there actually ended up being, it supports like two modes where you can use it with gravity. Uh, and that actually for our other two participants, it worked so well that we found other issues where like one participant was like, Hey, I parked the cursor and I was talking to somebody and like my screen went to.

Leap. So like he was having like a whole 30 minute conversation where the crier doesn't move and on Mac os if the crier doesn't move your system's, like, oh, you're not doing anything. And it'll dim the display and then shut it off. So in their case it worked too Well in his case it like, yeah, it literally did not do with gravity, at least what you'd expect [00:33:00] at all.

Where what he looked at it, he couldn't move it. And when he looked away, he could have huge velocities as he's like watching something. So we ended up going with a gesture for him. and that worked super well. So he could just do like an up down left. Right. Um, these little dots would light up, it would follow them in order and then he would just like pull the cursor out that way.

[00:33:17] **Ridd:** it's fascinating to listen to you talk because you're obsessing over the smallest pieces of these interactions. I mean, observing and thinking about a cursor from every possible angle, all of the different ways that we could make this possible, and the end goal is to basically delete it. To delete it, all of the work that you've done to an extent.

You know, like that's a really interesting tension that not many people get to operate in.

[00:33:42] **Rooz:** I think ultimately , the goal is to just build an incredible experience and to do that in like every step of the way. So like if the way in which we get to a world where we could, let's say like delete the cursor, like whatever that means. Our hunch is that getting there is going to require like a lot of data, it's gonna require a much more robust [00:34:00] understanding of how these mechanics work.

[00:34:02] **Ridd:** in that world starts to get very sci-fi to even think about, but the measuring stick is no longer what a quote unquote normal person can do on a computer. You know, you've blown the roof off of what, what is possible in terms of interaction with computers at a, a very high level, right?

Like thinking about how quickly I'm able to do something on a trackpad will feel archaic in that world.

[00:34:23] **Rooz:** right now. The interaction model's, again, very similar to the ones that we use. but there's no like reason. It has to be, so I think there will be new interaction models in this world that, are yeah, just very different than having to use our, like, physical hands to like articulate something.

I don't know if it would be like archaic, but I think it would just be very different. Like, it, it'll just be hopefully a lot more natural and hopefully a lot less indirect.


## [00:34:46] Dreaming about the future of BCI

[00:34:46] **Ridd:** Anything specific that you find yourself thinking about as someone that probably spends more time pondering where this specific world is heading than the typical person listening, for instance.

[00:34:57] **Rooz:** I think there are a few for me, the caveat being that like, [00:35:00] this is definitely just like the stuff that I'm excited about, and not necessarily stuff we're working on. and I also think like the fun thing is like at Neuralink you'll get a million different answers based on who you talk to.

but I think for me it really, a lot of it goes back to, that study from 15 years ago that first sparked my interest in this field, which is like, I think the richest things, in my mind are visual imagery. I also think that like both like as a software designer and as like a wannabe filmmaker when I was younger.

Where so much of the work, so much of the magic of a computer is, and also so much of the tedium of a computer is, is in the, this process of taking an image in your mind and spending, a very long time, whether it's in software, whether it's in After Effects or final cut, to, articulate that into this visual thing that it feels like people just understand more easily.

a picture is worth a thousand words basically. that side of things is I think what I'm most excited about. You know, looking onto the very distant future, what that would mean. We talk a lot about, you know, bridging this empathy gap between folks, but like, that feels like a much more [00:36:00] tangible version of that, where I can show you how I'm feeling instead of telling you how I'm feeling.

and then also just for all of the stuff that people wanna make in the world. there's this rich, interior space that I think everybody has and everybody shares. I always think it's like funny when some people tell me like, oh, like, no, I'm just like not very creative.

do you dream at night? And like, if so, like that, like look what your mind is capable of making and generating. I think that is a hugely enabling thing in the future where you can sit down on a computer basically. And, in this world where, a model on that computer can act on behalf of your intent in let's say, you know, far down the line A frame.

So what we today call vibe coding, you know, in the future, like the time that it takes for a model to actually produce an artifact that you described will, I think come down to a. And the flip side of that is then what is the bottleneck here? It's you actually articulating what it's that you want. in all domains, in the arts and in work, this will be a very exciting and wild experience where you can [00:37:00] just sit down on a computer and basically daydream with it.

and things will pop up on screen that, are a direct sort of extension of what you have in your head. and what would that look like if that came down to just being one frame? I truly don't know, but I think that that's a really, really, uh, exciting role to be in. we are working on something called Blindsight, that is the earliest rung in this ladder, which is that for, people who no longer have vision, some way for them to see again in the world.

What this would mean is our, our implant sits in the part of the brain, not for motor movement, which is where our current implant is, but for, uh, for vision. And we can actually read from like, let's say a pair of glasses that they wear, what they're seeing, and then, create the right stimulation pattern in that part of the brain to try to recreate some form of that image in their mind.

obviously this is incredible, uh, but also it is like a, a truly wild design space because, the first versions of this are gonna be, to use a really crude metaphor, they're gonna be like Atari as opposed to being like, you know, a PlayStation five. So the visual fidelity that we [00:38:00] can actually create, uh, in terms of just the number of electrodes that are in this part of the brain, is going to be very small, relative to how rich visual information actually is.

So then that's its own completely distinct design space of like how do you recreate an image that is true to life, quote unquote in this domain? What features of that image are like the right ones to highlight here? what knobs do you wanna give people, basically?

'cause they should have some form of control over how they see the world. that can be something that's just like sci-fi and cool. It's like being able to zoom into things, right? But it could also be something Far more nuanced than that in terms of how, you know, you want to, for example, just to borrow more metaphors like dithering, Uh, if you're familiar with dithering, it's like one way of in the eighties when we were in this regime of like low pixel counts, um, to try and recreate features that we perceive, through, you know, algorithms that apply, that basically are artifacts of our perception. and use this like lower sort of resolution space to still try and create some sense of, for example, like shadows in some sense of like, texture in this world.

so yeah, what would dithering look like in this [00:39:00] domain? 

[00:39:00] **Ridd:** I've heard a lot on this show, but that's one of the most interesting design opportunity spaces that I've ever thought of. Like it just didn't exist in my brain until you shared that and it's. Amazing and compelling. not just because of its novelty, but also just the impact that you are having is really incredible.

And I, I know I mentioned this just a little bit before we started recording, but I was reading some of the participant stories and I was reading how Nolan, one of the first participants got a, you know, he's going back to school and he got a, a job on the internet. It is just amazing. Like it moved me deeply.

And so what you all are doing is just about as inspiring as it gets.

[00:39:37] **Rooz:** I fully agree. I think this is the stuff that people get out of bed for on our team and definitely throughout the company. we are so privileged to be in this world now where we have, 10 plus folks, who are actually using the thing. We call them like the neural knots, uh, 'cause like astronauts, it's a completely new space that we're exploring together.

They've obviously done, like back to that point of like what the cursor used to look like and how things work now. things [00:40:00] have changed dramatically once they could actually tell us how things feel, and what pieces of that, like we actually do need to optimize what pieces of that don't really matter.

but ultimately, like, yeah, just the impact it can make on their lives has been super inspiring for all of us.


## [00:40:11] Neuralink is hiring a second design engineer

[00:40:11] **Ridd:** Let's say that somebody is listening and they're inspired by this journey, they wanna be a part of it. Y'all have opened up a second, you know, design engineer type role, so could you share a little bit more about like what's that role going to be like? I'm sure someone is listening and they're like, yeah, that could be really cool, but also I don't a hundred percent get what that would look like.

[00:40:31] **Rooz:** I mean, the role would be a lot of what, I think I've talked about today, just a lot more of that. we're at this phase now where we have, yeah, 10 plus people that act actively use the thing every day. They use it for like hundreds of hours a week collectively. and one piece of that is of course, just like actually just continuing to make that a great experience for them.

we generally, because we are such a small team, we are super focused about what pieces of that experience, like we spend the most time on making great. we have a [00:41:00] very high bar for like what grade is, and we wanna maintain that across that whole experience.

So one piece of it is literally just this thing that people use literally every day. making that amazing and continuing to make that amazing. a second piece of it is all of the rungs in the ladder that we have not explored yet. the process of doing that now that we have folks who can actually try stuff and tell us is really just like, it's something you have to kind of go end to end on.

which means that there may be some initial idea or hunt you have about how things might work, what you might call a hypothesis. there's a lot of actual work in between that and making it something that somebody can actually use. there's obviously a lot of like design work there and there's also just like the engineering work of turning it into something that they can use and try out for the first time.

The nuance is also that That first experience they have with it is not necessarily going to be the most informative if it's something they actually actively have to use and try. what's awesome about our participants is like, they're so down to just like take something and run with it and try it.

and they will give you such great feedback after using something for like a day versus like a month. sometimes it's also not just a prototype, to [00:42:00] actually get a meaningful signal on is this a direction we want to go in? Like is this a feature that will work? Um, you kind of need to go beyond Yeah, just something that will work in a hacky way in one session with a participant and it turn it into something that they can live with for a month.

the vast majority of those things also like will, not pan out, uh, is the reality of it. So right now we're in this phase where there's both a core set of features that we know that we wanna make. Great. cause we want that V one to exist in the world. And also a lot of blue sky around what this could be that requires an ability both to just like kind of go end to end in both design and engineering.

It's the role, but also, be somewhat comfortable with things. It's the fact that it's experimental, meaning that like there will be a lot of uncertainty into like, will this thing actually ship And because you want somebody to live with it, there's also a lot of work that needs to go into actually shipping it in some form so they can try, 

[00:42:49] **Ridd:** The blue sky piece is really interesting to me because even just listening to you talk now for a while, I mean it's so clear. what you are doing is the complete opposite of looking on mobbing and trying to [00:43:00] piece together the right pieces, the right things that already exist in the world to like figure out a solution.

You know, like you are really working from first principles in the truest sense. my question then is what are the signals that you would even look for in a candidate that would get you to a confidence level where you're like, yeah, yeah, they actually have what it takes to move the needle and help us find some of those next rungs on the ladder.

[00:43:22] **Rooz:** the thing we optimize most for is feeling when it comes to what it's actually like to use the interface. So as much as we try to be principled about what the building block should be for a space that we cannot experience ourselves, I think there's just a general Ambition to just make something that's like really awesome, inspiring.

I think we're all, yeah, obviously like indirectly so inspired by our participants and we do want, what it feels like for them to use these, this magical new toy to be amazing. anybody who has a clear desire to do those things, that's usually what that means in practice is even for something that, you know, that you're probably going to delete, there's like a lot of extra work that, uh, goes into just making that [00:44:00] amazing, the equivalent of kind of like the polishing phase and the tuning phase that you'll have at a lot of other companies when something is actually, you know, going to ship in a calendar year.

we try to put as much of that as we can into just an experiment, because a person will use it and, and also, this is where the prototyping, ability, like the engineering side of the role is. So, key The stack here is like very wide. I think that the tightest interplay is really between the machine learning side of the work and the actual interface side of the work.

Because the machine learning side, ultimately some form of that, at least right now, is well we need to figure out a way to label something. So like the label is ultimately what, uh, on some level is very tied to what they see on screen. how well that label captures the real intent here, like what they were really thinking at that time.

what the models can do, defines what the interface can do and what the interface does in some ways heavily biases what the models can do.

So there's kind of like a very direct relationship between those two things, especially. that makes the primary bottleneck here. Just like, can you build out something to try these things [00:45:00] end to end? Because a lot of stuff is just the offline data, meaning like, trying to collect data and then just run your analysis offline generally is a dead end, uh, for anything on like the UI side.

So it means you have to make something that is like actually fully interactive to actually validate this well and potentially also work with folks on the modeling side. If you have a really wild new idea you wanna try, that involves a lot. It involves a task to collect the data. It involves some final interface so that they can control it.

And again, it involves ideally, something that they can live with independently and give you a much richer signal on how well it's going to work. so people that yeah. Are Excited about doing all of that. And also, are excited about making each individual experiment you run as amazing as it can be, such that we have confidence that When we hit a dead end, it's not just because it was, for example, like an MVP. I generally think that like the mentality of like an MVP can sometimes be quite self-defeating because you've basically done the absolute minimum you possibly could have done and gotten like a pretty mid signal on something.

the [00:46:00] shots that we try to shoot, we try to like shoot them as best we can because the, the results that come out of that very much dictate ultimately the direction we're gonna go in.


## [00:46:07] Sweating the details at Neuralink

[00:46:07] **Ridd:** Is there an example of a hunch that led to some experimentation process that you could talk through from your own experience that would help people get a little bit better? A sense of what it is like day in the life of someone working on Neuralink. And maybe if there are also examples of what it looks like to sweat the details throughout that experiment.

That would be great too.

[00:46:30] **Rooz:** one good example here is what we currently call the body mapping task. the structure of this task right now, is there's an actual like 3D arm that we render and we have a whole rendering pipeline to draw this 3D arm.

the approach there means that we can draw your focus to very specific pieces of it and then combine it with the actual guidance that we tell you. with like visual indicators in the guidance that we give you as well. So what does this task do?

This is the very first thing, when we sort of spec this out, this would be the very first thing that a participant sits down and does. [00:47:00] And before they actually go into the part of the experience where they sort of calibrate their implant for the very first time and get to a moving cursor, they just explore this like wide space of like, you are now going to imagine moving your arm again, this arm that like you currently cannot move, or you have very limited residual motion for, Get a feel for just like what, works for them. Like what kind of motion still feels intuitive to them even though they can't move it well, which ones don't. And then also get a feel, get a, not a feel, but a signal for what motions can we actually read really well. So when they imagine doing this, like what does the burst of activity look like and which motions seem to be better here and weaker and sort of compare between the two.

Like pick one from this wide set of like, you know, moving your arm up, down, left, right, moving your wrist up, down, left, right. and like four other things that you could presumably use to move a cursor. Getting some sense of the overlap between what feels good for them and also what, uh, we can actually decode.

the hunch here was primarily that, like seeing that arm on [00:48:00] screen, would make that first experience far more natural than us just telling them, Hey, like, try doing this. Uh, it would give them something to basically like look at and like cross reference.

and then the details here were basically like, well, okay, well how do we wanna do this? Uh, , one we could like try and pre-render all of these motions. Like that will probably work. but what if we could actually just decode that arm then like, why take this arm and then try to like go down to the cursor.

if they're already back in this world of just looking at that arm, in some ways that's a far more natural thing to do than trying to think about moving your arm to then move a cursor. so the real hunch here was if we can do this, can we also like, can they also puppet this arm basically?

do that, that was an extraordinary amount of engineering work. 'cause we can't just use a pre-rendered animation anymore. we need to actually, render like a 3D arm. We need to mesh that out. Uh, we need to have some shading pipeline so that we can like, make that not look goofy.

There's obviously a huge uncanny valley in, a 3D arm on screen. So we wanted that to just look, basically like have the minimum [00:49:00] amount of detail for you to, uh, get a feel for what the gesture actually is without like all of the redundant information about like what an arm is. and we wanted to also like, feel natural, so we didn't wanna use like a skeleton basically.

Like you could also do something where you see off the bones, but like that didn't feel like it was gonna be a really cool experience to us. and then finally like one extra bit of magic that we absolutely did not need to do, but we thought it'd be really cool if, now you have this arm and we also need to give you some text.

To like tell you what the kind of motion is. So for example, like if you're gonna do like a squeeze, like we need to also like pop up something that says, Hey, squeeze this arm. it'd be really cool if, because that's on screen, so your eye's going to already be looking there. , If the sort of text itself can embody that motion alongside of the arm just to like reinforce that whole thing.

then we did these wild text animations where like when you do the squeeze, like the squeeze itself kind of like focuses in. So everything in the background sort of, uh, recedes. And then the squeeze actually, like we do kinetic type, so it like fully squeezes in alongside the motion itself. So that's [00:50:00] an example of something we totally did not need to do.

It's just cool. the hunch here was actually that if this works, basically if there is this mind body connection that we can induce by then just having this arm on screen, having the perspective of it feel right relative to like where they are, that maybe we can actually, Have this simple imaginary space where in their head they're just like, okay, now I'm squeezing the arm.

I'm not thinking about all these joints. I'm not thinking about like moving each individual finger. I'm just like, oh, I'm squeezing the arm. And then we would be able to decode that. and if we can decode that, like the, like, that's a really rich interaction space, right? I'm not thinking about moving a cursor anymore.

I'm just thinking about, moving my arm. And obviously, because this is something I could do before, that's also like really, really cool. it's not a cursor, but it's a, it's a full arm, this arm that I no longer have the ability to move. It did not pan out in the sense that we could not on the first week, like we tried, uh, actually decoding this and it was just far, worse than decoding the cursor, which makes sense intuitively in the sense that it's a much bigger space.

but ultimately, like we just like didn't know. so there was like a [00:51:00] hunch it didn't work. that doesn't mean that it won't work in the future. But at the time, like it was just a bet on what if we could decode the full arm, what would it take to get there? And then how do we unify that with what we already know we want to do?

[00:51:11] **Ridd:** It is funny, I went ahead and read the job description for the second designer that you're trying to bring on, and there was a line that I pasted into my notes because I wanted to bring it up and look for an example, which was they need the ambition to build something that feels magical beyond the local mini of that which works.

And I think you pretty much already answered that question with the squeezing of the text. Totally unnecessary, but also like what a fun way to bring delight. And the fact that you did that into an experiment is the perfect example that I was looking for of going above and beyond even when you have no idea if this is technically even possible, at least in the short run,

Well, Ru, this has been amazing. Thank you for creating one of the most unique episodes, probably the most unique episode that I've ever had. Like just hearing the way [00:52:00] that you think about this set of interactions and design opportunities is truly fascinating. Really appreciate you coming on and sharing with us today.

[00:52:10] **Rooz:** Yeah, thanks for having me. This was a ton of fun.
