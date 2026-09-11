---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: 3FUyZXwMX9c
slug: 2023-11-14-jeff-mcavoy
source_type: descript
source: "https://web.descript.com/81f82967-9a85-4593-b659-44626574773a/0d5e4"
guest: Jeff McAvoy
host: Ridd
title: How to get animation super powers with Rive
published: 2023-11-14
duration_min: 43
generated: 2026-09-11
generator: dive-club-ideas
---


## [00:00:00] Rive animation examples

[00:00:00] **Jeff:** One of the things I wanted to start off with was this, , cursor tracking animation here.

[00:00:05] Rive does a lot of vector based animation, but it also lets you add a mesh to bitmap animation so you can create these kind of faux 3d effects with the advanced runtimes, you can have other elements control your Rive file.

[00:00:20] So in this case, you know, you hover over the login, you're gonna get this little... Speech bubble. If you hover the forgot password one, you get a different animation. When you start to type, you get these little kickouts, , on the character. , once you fill in the level, , the shades pop down. And then, yeah, when you hover the submit button, , you get this looping, , kind of surfing animation, 

[00:00:43] **Ridd:** these are very smart animations.

[00:00:45] **Jeff:** Yes.

[00:00:46] **Ridd:** seen something like this before. There's just so many different states it's really impressive.

[00:00:51] **Jeff:** I did have to like draw out a diagram of how I wanted this to work, 

[00:00:54] **Ridd:** It reminds me of a tweet that I saw recently where, It was basically talking about how like [00:01:00] more and more products that are going to be launching are going to come with some kind of an accompanying character just to build affinity with that brand and have it baked into onboarding and things like that.

[00:01:09] And so now I'm starting to think that a lot of those characters are going to end up being created in Rive.

[00:01:13] I'M excited to see how this is built behind the scenes, but let's just keep it going for a little bit because I'm enjoying seeing these different pieces of inspiration.

[00:01:21] **Jeff:** Awesome. , I recently traveled to, , Costa Rica, and when they launched the text feature, and so I thought, let me test this out with , a currency converter. So, , when this one, you type it in and the text within this animation updates. It uses some JavaScript to, , do the correct multiplication and then tell you what the currency is so that's another newer, more incredible feature is having text built into your animation but then being able to update that text at run time. So in this case, the form input is driving ... What shows up there.,

[00:01:54] uh, this is one that I built that actually does, , voice reactions. So, , this is taking an audio [00:02:00] input and then the animation is reacting to. The speech, , which is super cool. Again, that like functionality is actually driven through JavaScript, but it's taking that, converting it to a value that can then drive the Rive animation as well.

[00:02:15] This was for, , a challenge, , with the Slator app, which does, , AI, , JavaScript creation it took this shape and then animated sort of the different states of what it looked like at different levels.

[00:02:28] And then kind of put that into a blend state so that it can be driven by a number input. Then just hook it up to the code and it works.

[00:02:38] **Ridd:** I don't even have a question. I just have a big smile on my face. I've never seen anything like this on the web before. It is so cool.

[00:02:44] **Jeff:** uh, The other thing I figured out with this is, , how to do this, , viewport reactive, , animation. So, with this one, as you scale the viewport, , the animation, , resizes with it, but in a way that I've determined. So, I have it set, like, once it gets to a certain [00:03:00] point, the, , third eye pops into there.

[00:03:02] And then each eye independently, , follows the cursor. , that's what I was trying to figure out.

[00:03:07] Like, how do you get an animation to... Work both on a wide desktop and a like a vertical phone 

[00:03:13] **Ridd:** I can't get over how smart these are. I mean, every time I've ever added an animation like this and encountered this problem... You have to include two totally different animation files and then show hide at the different break points. And the fact that you can bake that logic into the animation itself, I just had no idea that that was possible.

[00:03:31] **Jeff:** I didn't either and actually that's one of the things I love about Rive as well is I can come up with an idea and be like, I don't know if I can I don't know if that's possible and then figure out how to do it and then it is possible Which is just amazing. So yeah, this is a loading animation, in this case it's actually just counting up with javascript. It's not really loading anything, but it also has interactivity baked into it, so, you know, I can hover over the dog, it'll pop its head up and turn, you know, turn like dogs [00:04:00] do. and then this is a, just like a double trim path thing that's kind of filling in the bar, but it also is controlling how far the dog's tail wags. So. As it gets more and more full, the tail is wagging farther and farther side to side, , 

[00:04:14] aNd then, , the Rifle website is where I'm, , trying to share , my knowledge of how to integrate. Rive animations into Webflow websites, and I've got a couple of examples here. This is a scroll based animation. And this one I wanted to show because I think Lottie gets used for scroll based animation a lot.

[00:04:32] , because. It's pretty powerful what you can do with it. , what Rive does is, , even more impressive. So you can see I'm not moving at all. And actually , this little button here is kind of slightly waving. The waves are animating here. And then as I scroll, , I can trigger things to happen at certain points.

[00:04:50] As this gets lower, you know, the, like the water kind of rises. And then once it gets to 50 percent, The lights are gonna come on, , it'll start searching, but even, you know, when I stop, if you [00:05:00] were to stop on a Lottie, it would just be frozen.

[00:05:02] Right? And so this can continue to have parts moving around, you know, water waving, lights moving, the propeller spinning, , all that stuff. And then you know, you can have like a kind of an easter egg down there at the bottom too. So that's one of the things that...

[00:05:15] That's, that's really great about it. I can have this whole thing driven by, , the scroll percentage, but also include other motions and listeners and interactions along the way too. 


## [00:05:28] Exploring the Rive editor

[00:05:28] **Ridd:** I really just want to see, like, how do you make something like this now? So maybe we could take a look at the editor because now you have me really curious.

[00:05:36] **Jeff:** Yeah, I'll start off by making something really simple and just kind of show what the editor looks like and then we can look at behind the scenes in a more complex file as well.

[00:05:46] **Ridd:** Perfect.

[00:05:46] **Jeff:** So I just opened a new file in Rive and, by default you get this artboard.

[00:05:50] You can change the size to whatever you like. , I like to turn off the background color. And then, , you've got some pretty familiar probably tools, a pen tool, [00:06:00] shape tools. text tool, , movement tool, stuff like that. So you can kind of create whatever you want. , I'll start with a circle. Just kind of drag it out, and give it a nice color.

[00:06:12] And, , what I might do here is, uh, set up an animation that when you hover this circle, this other smaller circle will, , come out and rotate around it. So, , I just duplicated the circle. And I'm going to put it into a group, and , it can change the origin of where that circle rotates from by freezing it.

[00:06:34] So I'll move that down so that it'll rotate around the center here. So now if I rotate this group, it's going to rotate around, and I'm going to make that the animation.

[00:06:43] **Ridd:** Cool.

[00:06:44] **Jeff:** So, that's going to be the setup for this super simple one, but if I click over from design mode into animate mode, you'll see This is where a lot of the animation and interactivity happens.

[00:06:56] This is the state machine where you can add the [00:07:00] different animation states that you want to create and control how they transition between each other. And then your list of timelines over here. So you get timeline one by default, which is great. I'll start with that. And what I want to do is just create an idle state.

[00:07:15] So I actually will rename it to idle. And in this one, I want the position of the circle to just be down here inside of this one so that we don't see it. And then I will make a new timeline and call this, , hover on. And in this one, when you move things around, you can see which keys you've set.

[00:07:41] So in this one, I basically just set the Y position of it to minus 18. And on this one, I want the Y position to be here. So I'm just gonna. Add a key to it, uh, in the editor, , over here. Anything that has a diamond, you can add a keyframe to. , and then for the group itself, I'm [00:08:00] going to, , rotate it. So I'm going to have it start from zero.

[00:08:03] And then, this is a one second timeline. I'll have it go 360, rotate around. So if I play that, it's going to rotate. And I change this to a loop. So this will just keep going. And then I can create some logic to transition between those two things in the state machine. So, first I'm going to create, , what's called an input.

[00:08:24] You've got a number, boolean, or trigger types. In this one I want it to be a boolean, so I can have it just be on or off. , so I'm going to call it hover. And then you can also create listeners in your canvas as well. So, if I select the bigger circle and create a new listener, I'm going to have it say when the pointer enters.

[00:08:45] I want to set the hover input to true, and then I'll create another one that says when the pointer exits, set the hover input to false. And now with that setup, I can use that to transition [00:09:00] between the two timelines. So, , it defaults us to, , transitioning right into the idle state from entry, but, you know, I could even just start from scratch and drag it over into the timeline here, or into the state machine.

[00:09:11] And then add the hover as well. And then I want to make sure it starts on the idle timeline. And then I'm going to have it transition between these two. So I want it to go from idle to hover. When, and I can set the conditions here on the transition. When hover is true. And then go back to idle. When hover is false. Now if I hit play. You can see that, , the smaller circle disappeared because it's, that's what we set on the idle timeline and you can see that's where it's playing. And then if I hover, it's gonna go into that animation. And right now it kind of looks like it's just instantly jumping between them.

[00:09:52] We can also set a little transition duration, , and I can actually highlight both of these transitions. And set, , say, [00:10:00] 300 milliseconds. And then, if I restart it, , you'll get a little bit more of a transition. So you can see the, the circle kind of coming in and out. The other thing I can do is I want to make sure this rotation completes all the way, so that it goes all the way back to the top, and then, Comes back in so when it's coming back to the idle state I can add the exit time So I want to say it's gonna complete 100 percent of the previous animation Before transitioning back in so now whenever I hover off it should Animation and then transition back in actually it's going a little bit farther because of that Duration that I said so I can put that a little maybe make it like a hundred make it a little bit snappier

[00:10:38] **Ridd:** I really like how. This is feeling quite intuitive. And a big part of it is actually, you know, I've spent the last month playing with Figma variables in prototyping, and it's neat to think how designers are going to already be adding more. And conditional logic to prototypes. And this really works the same way.

[00:10:58] And then you have like the little [00:11:00] diamond key frames. Like I don't have much after effects experience. Like I probably spent like two total days in it, but it does feel like this perfect middle ground between something like Figma and after effects, where a lot of what you just showed feels quite intuitive,

[00:11:16] Let me really quickly restate. My understanding and you can tell me kind of where I'm at because I'm really interested in this state machine and is it basically like the Timelines that you are creating they like hold these different keyframes where you can say okay, this is a state that I want and you're like in isolation defining what those states are and then The state machine is just all of the timelines you create are added to this kind of spatial canvas where you can add the logic and point different states to each other.

[00:11:48] Is that my kind of on the right track there?

[00:11:50] **Jeff:** Yeah. And in some cases, a timeline can just have like a single key in it, you know, this first one we created it's really just defining a state of the animation. , [00:12:00] or it can. have, keys set over time as well. So you can do both.

[00:12:04] And you can, yeah, you can transition between two states that have just a single key set. You can transition between... , states that have looping animations, running animations, and then the inputs and the listeners and then the, yeah, these transitions all kind of help control the logic of how it happens.

[00:12:22] One other just important feature is the fact that you can add layers to your state machine. So, you know, if I add a new layer here, you can see I've got another entry state and then sort of another blank canvas here. And if I hit play, both of these layers are going to play at the same time.

[00:12:36] So if I create another timeline quickly. I'm going to call it, , color change, and let's say I just want to key, , I grab both of these circles and key the color, and then, , let's say I want to change it here to like a purplish color, and then I'll copy my keyframes from the beginning and paste them at the end so that I [00:13:00] can loop and it'll kind of transition between these.

[00:13:04] , if I go to my state machine and then add that. As, , another layer and then hit play. You can see that's also going to play at the same time. as the other functionality that we have set up. So that's another really powerful feature, is that you can have multiple, , entry states playing, , so that each layer can play one state at a time.

[00:13:25] , but you can have things controlling multiple states by adding these layers to it. And that's where you can get some really advanced kind of stuff. 


## [00:13:32] Walking through an advanced form animation

[00:13:32] **Ridd:** Amazing. I mean, it's just so powerful. It's sparking so many different ideas for what you could accomplish. I'm wondering, can we take a look at one of these more advanced projects that you've worked on?

[00:13:43] **Jeff:** Yeah, definitely. This is that form animation we looked at. And, , here you can see that I did set up inputs for each of the different types of interactions. , and it's not necessarily one to one, , but I have these [00:14:00] different, , levels of, , animation going on. So, , I'll hit play and kind of walk through, you know, what's going on on each of these.

[00:14:06] So if I go here to the beginning, this rocking animation is literally it just looping on its own. And even if I double click into it, you can see this is just that animation. , I've got some. Bones connected to the vertices of the, these shapes.

[00:14:22] That's a little bit more advanced for it than we have, , for today, but this looping animation does is just controlling , that motion. And that'll just keep going throughout the interaction. And then same thing with blinks, , that's a really great thing to put on its own layer.

[00:14:35] You can actually like offset that from other time too so that you don't have the character blinking at the same time as another action like you would with a single timeline animation, and then for typing, , it can go to the right and to the left. And so this one is going to work with, a trigger input set up over here, which just fires when you hit it. So, in this case, when you click that, you can see it's going to transition between [00:15:00] these two, and that controls these little kick outs that happen.

[00:15:02] So, that's how, when the user is typing in the form, , it's firing that trigger, which means it just goes back and forth between those two. I set the condition here, right,, so when it's a trigger it's just... Did the trigger fire basically, 

[00:15:16] **Ridd:** can I pause you really quickly for something like this kick out and you have the little three dots that are appearing around the legs.

[00:15:23] **Jeff:** yeah.

[00:15:23] **Ridd:** Can you show us where you're creating that? Like, I know you go into the design panel, but I'd love to see again, the connection between where you're defining these styles and how it relates back to the timeline.

[00:15:34] **Jeff:** Yeah, definitely So those little splashes Are trim paths and so here you can see this is the timeline that's controlling the right kick , if I go back into the design mode Let's see if I can find it quickly. Here it is. It is a shape that has three paths inside of it. And so the shape itself is where you define the stroke and fill, so this is another kind of unique, , advantages that you can have multiple [00:16:00] paths within a single shape. And then on , the stroke itself, , I'm applying this trim path. You can set it to be, , synced or sequential. In this case, I wanted , all three to play through at the same time. So it's on set to synced and then, actually, if I put it on a hundred percent, that's what the paths look like.

[00:16:18] And so, , what I'm doing is just. I don't remember which value I have on it, something like this, and then I'm just , animating the offset, so it kind of plays through.

[00:16:27] **Ridd:** Hmm.

[00:16:28] **Jeff:** Actually I can have it look however I want to in the design mode, because I have it completely controlled on this timeline too, so it definitely starts at the zero, yep.

[00:16:39] Trim start at zero, trim offset at zero, and then it's gonna, um, Grow a little bit yet at 2 percent so you can actually see the dots. And then this is going to just going to go from 0 percent to a hundred percent. So the offset will just play through and then it disappears at the end. 

[00:16:57] **Ridd:** Yeah, that makes sense. Again, I keep coming back to some of the [00:17:00] recent Figma changes, because I think that is a switch that's happened recently, where instead of. Defining all of the different states in actual art boards, you would kind of define just the starting state and then use something like variables to

[00:17:13] **Jeff:** Yeah,

[00:17:14] **Ridd:** communicate to Figma, how you want this to change based off of different interactions.

[00:17:18] And so that kind of mental model is definitely mapping for me.

[00:17:23] **Jeff:** Yeah, that makes perfect sense. That's a perfect comparison. And then this is the one that, , when you hover over the login, text, , link or the forgot password one.

[00:17:33] Here it actually, I should, this is kind of more like a butterfly, like, pattern for these. This one starts into this idle state for speech bubbles. And then depending on, , what is triggered, it'll go through either the login bubble loop or the password bubble loop. And so I can show that by triggering that here.

[00:17:51] So if I hit login, it plays through the login bubble. And then, actually, it plays through it again, but backwards, here, and then goes [00:18:00] back to the idle state. So I can set the speed to negative one in the state machine here. Which, , actually, the fewer keys you set, the smaller and smaller your file size is.

[00:18:10] So that was, , sort of a space saving measure. But it works well because I know, you know, it's going to be an animation that can just play forwards and backwards. And then the same thing with the, , password one, if I hit trigger that, it's going to play through that and then play it back in reverse, , and then go back to the idle state here.

[00:18:26] And again, it's just, if the login trigger is fired, it's going to go through this, it's going to play this one at a hundred percent. So that means it's going to play that entire animation before transitioning to the next one, which is the same animation backwards.

[00:18:41] And then it's going to make sure to play that. , fully through, and then go back to this idle state and wait for another input, basically.

[00:18:48] **Ridd:** This is kind of my favorite part of what I've seen so far. Like I have basically no experience with this kind of spatial. Logic map and it's really, really cool. I could also see how it might be [00:19:00] slightly intimidating. I'm kind of curious, like what was your experience level coming into Rive? I mean, have you just operated on timelines?

[00:19:09] Had you played with one of these maps? Like maybe in like a DaVinci resolve or anything like that before?

[00:19:13] **Jeff:** You know, I tried to get into Blender, , and it has this, , incredibly complex node editing system. And that was... Too much. That's too much. Um, I could have probably stuck with it and I figured it out, but like it made sense to me, but it was just like, there were so many options that there's a pretty steep learning curve there.

[00:19:33] , but the, the concept of like defining the flow visually makes a lot of sense to me. And so then just being able to come in and like, yeah, arrange things and think like, Oh yeah, I want us to go from here to here , and then setting the conditions on it, , just started to make sense. Pretty quickly, I think.

[00:19:49] **Ridd:** You describe this as like a butterfly pattern. So you obviously have some kind of logic or, or just like generic rules that you're following in terms of like how to organize this. Spatial [00:20:00] logic canvas in a way that makes sense.

[00:20:02] How do you think about that?

[00:20:04] **Jeff:** In this case I knew I was gonna be animating something in the same place the same kind of animation These are both these like speech bubble ones. I couldn't trigger both the login and the password thing at the same time with this setup.

[00:20:17] But I knew I would want to have them starting from this central kind of idle state, , which I think in this case just keys the scale, yeah, the scale of both of the bubbles down to zero, so they're just basically there but invisible. , And so I knew I was going to want to have that sort of like resetting idle state there and then have a loop in one direction or a loop in another direction based on what was being triggered.

[00:20:41] So, it does, it feels like experimentation every time I think, , I called it a butterfly, but I just made that up. So,

[00:20:48] **Ridd:** It made sense to me.

[00:20:50] **Jeff:** okay. And then , the glasses one this is a, I think this is a Boolean, so yeah, if you enter your [00:21:00] JavaScript level, that's one of the, the questions on the form. As soon as it's not empty, basically, the, the sunglasses, it goes to the sunglasses down state, and again, it's just going to stay there until, if you empty out the form, it'll go back to that state. , this is one of the simplest, , layers in the animation. And actually, the surfing one,, it looks complex, but it's very similar, , because, , So instead of on this one where it just goes, you know, to a state and then waits, this one, , plays through an in state and then holds on a loop and then comes to, , an out state and then goes back to an idle.

[00:21:37] So there's just these like transitionary kind of states in between. So if I check the box. You can see it plays through the, like, in out animation, and then it goes into the loop, and it's going to stay on the loop until, , we turn it off, and then it'll, again and again. This is the same animation, but played in reverse.

[00:21:56] , which saves on some animation time and some [00:22:00] keyframes. , but this one just goes from, you know, having none of the waves on the canvas to them transitioning in, and then the surfboard kind of moving into place, and then the character jumps on it. And then from there, it goes into that looping one.

[00:22:15] Which looks like this, , and I think the starting and ending keys from the transition are , the same or very similar, so the transition's really smooth between those two states. And then, yeah, it'll just play this until it's ready to go play this one in reverse and go back to this kind of like waiting state.

[00:22:32] **Ridd:** Can you show me one more time where the logic is defined to stop the surf loop?

[00:22:37] **Jeff:** , yeah, that's on the transitions itself. So if you click the transition, there's a lot of parameters you can set. If you don't set any conditions on an animation, it will automatically proceed to the next one. It'll just kind of like fire through them. But if you set a condition, it's going to wait until that condition is met.

[00:22:55] So in this case, I want to make sure the surfing, , boolean is set to true. So when [00:23:00] it's true, it goes through this one. And you can see from here to here, it just kind of happened automatically. And so on that one, I'm setting it so that the exit time is 100%, so I say, play this through 100 percent of the way, and then go to this one.

[00:23:14] And this one's not proceeding yet, because the next transition out from this state, , has a condition, and so it won't proceed until this is false. And then, this is set up very similar, it'll play this. Same animation except in a minus 1x speed and then it's gonna play a hundred percent of that animation and then proceed to this one, which is actually just a blank state And then it'll wait there for the condition to be met again. 

[00:23:42] **Ridd:** And where are you defining whether surfing is true or surfing is false?

[00:23:46] **Jeff:** that's runtime code ,

[00:23:49] **Ridd:** Is this a good transition? Because one of the things that I really want to learn more about is like, okay, this looks awesome, but like, how the heck do we get this on a website?

[00:23:57] **Jeff:** yes, yeah, perfect. [00:24:00] So, with listeners, you can set, some interaction to happen just automatically within the Rive file itself. , but with inputs, and especially if you have several inputs, these can all be accessed and controlled by the runtime code itself.

[00:24:14] So I can say, you know, fire this trigger, When a certain thing is happening using JavaScript code, . So, yeah, I'll show how that works. 


## [00:24:24] Developer super powers with Slater

[00:24:24] **Jeff:** I'm using, , this tool, , Slator, which gives me some AI support to, , write the code, which is super helpful. , 

[00:24:31] **Ridd:** before we get into the code, let's pause for a second because I think a lot of people were watching this and they just saw a code screen come up and they're like, Whoa, I have no idea how to write any of this. You mentioned the AI support. I know that Rive has documentation too.

[00:24:47] So maybe, can you just give us like the high level of like, where were you at as a developer when you started playing with Rive and how did you get to the point where you were able to actually put [00:25:00] something like this together?

[00:25:02] **Jeff:** I started learning Rive because I saw what could be done and then realizing that with the code implementation, you can just take it so much farther. I had done a little bit of research into JavaScript, , not enough to really create anything, but I think realizing that using JavaScript to control the Rive animations is what made me continue down that path and figure out how to, You know, create the code.

[00:25:28] And also just being able to use AI tools. I don't actually have to know JavaScript all that well. I want to be able to look at a file , and like have a basic understanding of how it's happening, but I don't have to know the syntax or how to correct it.

[00:25:42] , I can rely on AI tools to fix that for me, or even just write it for me for the most part in the first place. And then, you know, knowing the right thing to copy and paste, that's about as far as I go. So I, I often say I'm a designer pretending to be a developer, but,

[00:25:57] **Ridd:** [00:26:00] I

[00:26:00] **Jeff:** Actually I started really simple and then it's like, Oh, that worked great.

[00:26:03] Let me try the next thing. Right. So then let me add a little bit more complexity. So that's, that's been my path is continuing to add complexity and functionality to each new experiment and figuring out one way or another. Often it works. There's code out there to make it work the way you want it to, you just got to find it or, have an AI generated for you.

[00:26:23] **Ridd:** love it. Can you help people understand a little bit of what it actually looks like to have AI generate code for you? Like what?

[00:26:31] **Jeff:** Oh yeah.

[00:26:31] **Ridd:** Is a general idea of a prompt that you would even give. Cause I think a lot of people know conceptually , okay, yeah, AI can help me code, but then they're focused in an input and they're like, I have no idea what to type.

[00:26:43] **Jeff:** What I really love about this is that the code is here and then the AI chat is right here too. So you can actually chat with it and then, you know, edit your code or you can ask it questions about the code. I started with on this one, this is the prompt that I put in actually to make this work. So I said, I want to have a Rive animation react to user [00:27:00] actions on a form. Yeah. When I click the link with ID, log in link, or so when the link is hovered, , console log in. So that's what I started with is just add a console log in that I know what that looks like in the code.

[00:27:13] AI is really good at writing JavaScript code. , it's not actually very good at. The Rive runtime portion of it yet. , it's like somehow hasn't quite learned that so I will say I that is where I do mostly copying and pasting from the Rive documentation or Demonstrations at the Rive Developer relations like team has put out and so, you know setting up the Rive instance here I just a copy and paste that every time and then I just The main thing I need to edit is where's my file hosted, , and then, , over time I've kind of learned like how to log the, , inputs from my state machine, , so that I can control those here.

[00:27:57] So in this case I said, give me the, , [00:28:00] console log when this particular link is being hovered and I didn't have to figure it out. This part, forgot link dot add event listener mouse over. I don't even know what this part means. I don't need to

[00:28:14] **Ridd:** I think that's encouraging for a lot of people. Also, I'm going to add a quick note to like, if someone hears console log and they have no idea what you're talking about, all that is, is just like the really easy way that developers just confirm that something is working. It just spits it out to the console where you can test to make sure , okay, is this connected correctly?

[00:28:30] It would be the equivalent of like. Binding a variable to a prototype in Figma, like maybe a component instance and just changing it in the variables menu to make sure like, okay, can I actually change this number? Yes or no. And you're not actually doing anything with it yet. So just wanted to clarify for people.

[00:28:45] **Jeff:** And that's the, yeah, the best way to do like troubleshooting and stuff too, and so like, , when I had this like mouse over thing, Again, like I didn't need to write this, I just needed to ask for it here and then, but I was able then to say, , here where it says console log [00:29:00] forgot link hovered, that's where I know, oh yeah, I want to make sure when that's happening, that means I also want to fire this input.

[00:29:07] And so that's what I have here. Input two dot fire. And in this case, it's input two because in this case I was doing it by kinda index value.

[00:29:17] But anyway, I know input 2 is password, and so I want that to fire, which means You know, it plays this animation, which then means that that's what this code is telling it to do, is to fire this animation forgot link, and it's gonna play that animation as I defined it in the state machine.

[00:29:35] , and that's what each of these are doing here, is just, you know, looking for the correct, , condition, which, you know, was written by the AI, , for me. And then, , I'm just like, you know, in this case, you know, this is the Boolean, right? So it's like input3. value equals true. So you can set it to true or false, 

[00:29:52] you could do the same thing with a number input. That's how, like, scroll based animations work too. , you just have it scrolling usually between 0 [00:30:00] and 100. , and just updating that number as the user scrolls too.

[00:30:05] **Ridd:** So let me pause really quickly, and I'm just going to kind of restate things back to you, just so we can make sure that I'm on the same page. So in order to set something like this up, you kind of have your boilerplate code that you're just copying and pasting into the top of the page. Every time you're getting that from the Rive documentation, don't really have to think about it.

[00:30:24] **Jeff:** Yes.

[00:30:24] **Ridd:** And then you are using the AI to create some kind of a function. To attach to each of the individual, would you call that a timeline,

[00:30:37] **Jeff:** , The inputs.

[00:30:38] **Ridd:** that's what I'm looking for. Okay. So use the AI to create a function that connects to the individual inputs. And you're either, it's probably either going to be a boolean true false or dot fire, which basically just says, play this animation.

[00:30:53] **Jeff:** yeah,

[00:30:55] **Ridd:** That's not that bad. That's not that scary. It was a little scary when you first started screen sharing, I was looking at [00:31:00] this and I was like, Oh boy, designers are going to hate me, but that's not that bad.

[00:31:05] **Jeff:** Yes, yeah, it's not that bad. There's only three input types. You can make as many inputs as you want, and it can get a little complex when you're doing really advanced things, but it's really just number, boolean, or trigger. And then it's like, it's this panel, these are the things that the code So as long as you've got, you know, your logic set up here, which is great, you know, like this is a nice like visual setup and you can like really, you know, test it out.

[00:31:30] And this, the way it functions here is exactly the way it's going to function at runtime, which is really helpful. , yeah, these are the, it's just these three types, ,

[00:31:38] **Ridd:** And the trigger is always going to be the dot fire.

[00:31:41] **Jeff:** yep, exactly.

[00:31:42] **Ridd:** Amazing. Okay. I'm thinking I'm getting it.

[00:31:45] **Jeff:** Like I said, like started off super small, I think I did something with a trigger fire too.

[00:31:49] It's like, Oh, that works. That's awesome. Let me try one with a Boolean and do like the, you know, set it to true at a certain condition and false on a different condition


## [00:31:58] Connecting Slater to Webflow

[00:31:58] 

[00:31:58] **Ridd:** So we have all of this [00:32:00] really cool code. Slater looks awesome. It's feeling a little bit attainable.

[00:32:05] Like I think I could hack my way through something like this, especially with AI support. The big question in my mind now is like, well, okay. How do we get this into something like a web flow site?

[00:32:16] **Jeff:** Yeah. So, , you can, , copy and paste all this JavaScript code into your website. , an advantage of a tool like Slator is that it's hosting the code here for you and , it's hooked up to the site itself. So this is the code that is, driving those animations. , you can also just embed it into. a code block, , in the site itself, which is super easy to do.

[00:32:37] **Ridd:** You said hooked up, explain that, what is, what does hooked up mean in terms of Slater and Webflow?

[00:32:44] **Jeff:** YeS. So the way you hook it up is, , it gives you the scripts and I have this added to the body code of my Webflow site.

[00:32:53] **Ridd:** No

[00:32:54] **Jeff:** so it's got, , this incredible feature called single script. Where it's one script for your [00:33:00] entire site, which is really great if you're using it on multiple pages, like I am.

[00:33:03] And then you can create a new file for each page. And you can select a page. So this is actually pulling in the, , pages on my site. And then I can say, like, you know, currency converter. I already have, but then, yeah, I can say currency converter number two. And I can create a new page. For that page, and they'll add the code to that

[00:33:24] **Ridd:** Wow. So it's basically like an AI powered code companion for Webflow. Is that how this is working?

[00:33:30] **Jeff:** yeah, exactly.

[00:33:31] **Ridd:** I cannot believe I did not know this was a thing.

[00:33:34] **Jeff:** Yeah. It's still new ish. Again, this is another beta product, but, , yeah, the Edgar Allen team are actively developing it and it's, yeah, starting to gain some traction, but it's, it is incredible.

[00:33:45] **Ridd:** this is so, I mean, this is super powers for designers. This is

[00:33:49] **Jeff:** Yeah. So real quick too on this, you can also like save snippets of code.

[00:33:54] So this is what I do. I, this is my like Rive, you know, cheat sheet library. So if I want a new Rive [00:34:00] instance, I can copy that and just paste it in. And then if I want to say like, I want to get my inputs by the name of it. So I can copy that and you know, I just want to make sure I put it in the right place.

[00:34:10] I think it goes here, you know, and then I can say, Oh yeah, I know the name of my input and I, you know, edit it here. So you can kind of save. little code snippets to reuse as well. 

[00:34:19] **Ridd:** And those code snippets did you get those from the documentation on the Rive site ? Wow.

[00:34:24] **Jeff:** Yeah.

[00:34:25] **Ridd:** Okay. This is cool.

[00:34:27] **Jeff:** And this is my personal library right now. They're actually about to launch a community library feature too, so these will be like, available to other users as well too, which is gonna be awesome.

[00:34:38] **Ridd:** So one of the things that you mentioned earlier in the call that I want to just like take a step back and. Make sure I'm understanding correctly, because you mentioned this idea of like easy mode and hard mode. I think this is hard mode. Am I right?

[00:34:52] **Jeff:** Yes, this is definitely hard.

[00:34:54] **Ridd:** Okay. So

[00:34:55] **Jeff:** Advanced mode.

[00:34:56] **Ridd:** So what is easy mode? You [00:35:00] mentioned this idea of the iframe. How does that work?

[00:35:03] **Jeff:** So my example that I have is this one, right? So it's got a listener set up In the Rive file itself, and , it doesn't have any interaction outside of the frame itself here, but it does have interaction inside of it, and that's something that's really easy to implement with just an iframe code.

[00:35:24] In Webflow, it's just an HTML embed, , and you can see it's just this iframe code, and, , I pulled that directly from Rive. So if I open that file in Rive, you can go to the share link, , under the share options, create a share link, generates, , and then it's going to create a couple of links for me.

[00:35:44] I'm just grabbing this embed code. And pasting it in there, , and it'll work just right out of the box. You can edit this code just a little bit if you want to, you can change, you know, how it sizes and things like that. , and then they've actually got some really nice integration with Framer, which I don't use a ton of, [00:36:00] but, , they've got codes, especially for Framer as well.

[00:36:03] Um, or you can also,

[00:36:04] **Ridd:** because I've kind of started using framework a lot more. And so that was one of the things I had in my back of my head was, is this like just for web flow? So I appreciate the fact that they have framework code too.

[00:36:13] **Jeff:** Yeah, I actually think it's easier to work within Framer, , which is part of why I'm leaning into the, like, how to do it in Webflow so much because it's, it is not clear at first. , it, it took me a while to understand how to do it and to realize that, oh yeah, it's not that scary. You just gotta, , figure out the right places to look.

[00:36:32] And then, one nice thing too about, , in Webflow, , you can kinda see that, , It's visible already, and in fact, it's even playing here.

[00:36:41] , this little like, ripple thing is playing. But then , my advanced one looks like, you know, the script will only appear on your published site. So, you can actually see it, and if you go into the preview, the, , the hover will work as well, ,

[00:36:53] **Ridd:** Are you setting up that hover just in the default web flow interactions?

[00:36:58] **Jeff:** Oh, no, yeah, so I'm not using Webflow [00:37:00] Interactions at all

[00:37:00] **Ridd:** That hover state is controlled within the Rive logic itself.

[00:37:05] **Jeff:** Yep, yeah. So yeah, it's literally just copy and paste the iframe code. You can grab animations from the Rive, , community. So there's a ton of, , animations that people have put into the community here, and they're all, , available under the Creative Commons, , license. And so, here you can actually just grab the embed code for any of these, they're all available or you can remix it, , so if you want to start with someone else's work and then go from there, you totally can. And there's some really incredible stuff in the community as well.

[00:37:36] **Ridd:** this is pretty cool.

[00:37:38] **Jeff:** Yeah.

[00:37:38] **Ridd:** like really, really energized. I'm excited to play with this. I can tell it's a big deal. Like, I went into the beginning of this conversation knowing that other people were saying that Rive was a big deal, but I didn't really understand why. I think I get it now, which is very exciting.

[00:37:55] At the same time, like, It is kind of a lot and it pulls a [00:38:00] lot of designers out of their comfort zones because some of the different paradigms that you're creating with are new. You might be touching code if you want to really do some of the more advanced stuff. Do you have any encouragement for people who are really excited, but also maybe unsure of , you know, can I actually do this?

[00:38:19] **Jeff:** I started the same way. I was super overwhelmed, , at the beginning. It took me a while of hearing, this can be done, and like digging into it for quite a long time to realize, , okay, this is the code that it takes to make Some of the advanced things happen.

[00:38:32] These are all the things you can do without needing advanced code and kind of understanding what is possible where. I didn't really know JavaScript before starting this. And I started off super simple, you know, can I fire a trigger, , on a certain input took me a while to get that to work, but once it did, it got kind of like a rush of,

[00:38:53] **Ridd:** Oh yeah, I bet that felt amazing. First, the first time you got like an actual piece of JavaScript to work. I bet was really [00:39:00] cool.

[00:39:01] **Jeff:** exactly. And so, and I was kind of hooked, I think at that point, it's just like, okay, if that works, maybe I can do this next thing. And then just kind of, you know, built on the complexity from there. , so I definitely did not start with where I'm at right now, but, , just say over time was able to piece it together and realize like, yeah, it's, it's not.

[00:39:21] Actually, all that hard. It might be a little complex to think about, but just going through it a couple of times, it really starts to click and make sense and just be able to build anything you can think of.

[00:39:33] **Ridd:** And the cool thing is, is this is still so new.

[00:39:35] **Jeff:** Yes.

[00:39:36] **Ridd:** you see different tweets of companies looking for Rive animators where, man, this is a real opportunity to kind of get ahead of the curve where if you can hack some basic things together, it is. Such a great way to stand out. Like if you're the designer on the team that has the ability to bring things to life with motion, add that extra source of delight to an onboarding [00:40:00] page or forgot password page or something like that, man, it's a heck of a skill set to invest in right now.

[00:40:05] **Jeff:** Definitely, yeah. And I do think, you don't have to be an animator to come into it too, I think you're right. You can be a designer and come in and just add motion to your existing designs. , if you are an animator, that's also great. You know, adding the interactive capability is, that's new, right? We've been able to do that before.

[00:40:24] , and so, there's a way to create something that nobody's ever seen before,

[00:40:29] **Ridd:** amazing. Well, Jeff, thank you so much for just taking the time and like sharing quite the masterclass on Rive. I know I've learned a ton. I'm sure other people have as well. Where can people find you? Like what's the next step that someone can take to just stay plugged into what you're doing? Cause you're sharing a lot of really awesome resources with the Rive community.

[00:40:50] **Jeff:** I tweet a lot, , about it. And sharing the experiments that I'm doing. Um, and then I'm, I'm trying to keep this page updated too. This is, um, this is Rive Flow where [00:41:00] it's really about integrating web flow and arrive.

[00:41:04] Um, a bunch of, you know, examples are here. I've got a lot more to add soon. Um, but this is another, you know, resource that I'm trying to, to create as well. So those would be probably the, the two main places to, to go and find me.

[00:41:17] **Ridd:** Awesome. Well, I'm excited to see the rest of what you create and hopefully like a bunch of people listen to this and get inspired and kick the tires on Rive. Like it looks like a lot of fun and thank you again for taking the time.

[00:41:30] **Jeff:** absolutely. I'll say I love answering questions too, 'cause I know it's confusing at first . So Yeah, if anybody's getting stuck on anything, I'm, I'm definitely open to troubleshooting and helping with stuff.

[00:41:43] **Ridd:** Perfect. We'll link your Twitter then. Appreciate it.

[00:41:46] **Jeff:** Cool. Thanks.
