---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: xpu-c7a9Zws
slug: 2024-09-18-janum-trivedi
source_type: descript
source: "https://web.descript.com/7e5d5ef4-4303-4958-93ad-e08563268b51/ef2fc"
guest: Janum Trivedi
host: Ridd
title: What makes a software product feel great
published: 2024-09-18
duration_min: 47
generated: 2026-09-10
generator: dive-club-ideas
---


## [00:00:00] Building the Arc download animation

[00:00:00] **Janum:** I was working with, ~~uh, ~~Dustin Sonos, who's the head of design over there. And, you know, he was kind of working on this, render of this download animation.

[00:00:07] That'd be like very. fun and physical and, you know, it kind of does that nice loop. my job was to kind of take that idea and take that render and figure out how we bring it to life ~~think like ~~when you're working in a traditional design tool, whether that's ~~you know, ~~Figma or, After Effects ~~or something like that.~~

[00:00:20] it's ~~like ~~one thing to, make an interaction or animation that, plays well in that, because you're kind of controlling all the environmental variables. And then it's another thing to figure out, how do you make this interaction or animation, generalizable and feel great in, every instance, right?

[00:00:33] How close is the download link to, where it's going to end up, right? Is it, you know, like an inch away on the screen, or is it, like, across over here? ~~Um. ~~ ~~I, ~~I think probably the biggest thing that I was trying to, ~~like, ~~explore was, 1st is, how do we decide, what curve ~~this, ~~this icon is going to take?

[00:00:47] ~~you know, the, the, my, my first, ~~my first stab at building a prototype for this was ~~like, yeah, ~~messing around with ~~like ~~Bezier curves, cool control points move on with my life. ~~Right. ~~you can kind of do that. ~~Um, ~~but then the next question is ~~like, ~~at what pace does the icon need to move at [00:01:00] along that curve?

[00:01:00] And this is kind of where the Bezier curve starts breaking down because ~~like. You know, um, ~~if you just ~~like ~~pick some ~~like ~~random timing curve, ~~uh, ~~it's ~~like ~~not going to feel super natural, right? Even if you have a timing curve, that's ~~like ~~based on the Bezier path, it's not going to feel natural because what you're essentially trying to animate is physics, but you're doing physics motion. With not physics curves. So it's always going to kind of be in that ~~like little ~~uncanny valley. ~~Right. So, ~~so ~~I, ~~I built a couple of prototypes. I wasn't ~~like ~~super happy with ~~like ~~how it was ~~just like ~~feeling. And then I had that realization of this is actually kind of like a high school physics problem, right?

[00:01:30] Joey is standing on the roof of, uh, his school and he ~~like ~~throws ~~like ~~a baseball with initial velocity of ~~like ~~500, you know, whatever per second, where does it land? Right. And I was like, oh, this is actually, ~~like, ~~the exact problem, but, ~~like, ~~inverted. We know where we want this ball to land, and we know that we want to inject some initial y velocity so it kind of goes up before it lands there.

[00:01:50] So I called up my sister, who's ~~like, uh, who's actually like, um, like ~~a math and calculus teacher in Detroit, Michigan.

[00:01:53] And I was like, Hey, what up? ~~Uh, ~~you trying to give me, ~~like, ~~a refresher on the quadratic equation? And she was [00:02:00] so happy. I think she used this example ~~like in her, ~~in her class for ~~like ~~weeks after that. She's like, yes, absolutely. ~~And like, you know, I have, I'm in my like workspace here and I have like every Tuesday I get a bunch of friends together and we like ~~so we like, you know, I have, I'm in my like workspace here and I have like every Tuesday I get a bunch of friends together and we like jam on side project stuff.

[00:02:11] Got this big whiteboard over there. It looked like I just ~~like ~~wrote a bunch of ~~like ~~fake math to ~~like ~~look cool, but I was actually trying to figure out ~~like ~~how to solve for ~~like, okay, ~~if we injected this much velocity going up and we know where it needs to land, how do we calculate the velocity going that way?

[00:02:22] ~~Anyway. ~~Long story short, ~~um, ~~I actually modeled the physics for it, every single frame, to figure out, ~~you know, ~~where would it fall, so you have this natural gravitational, ~~um, ~~fall, and that felt incredible, and it made it so it was super flexible, we could change how loopy was even based on where you were clicking, right?

[00:02:39] Like, if you're clicking up at the top of the desktop, we don't want to shoot it all the way into outer space, right? We want to just give you like a little, a little curve, right? And it's going to fall nicely. The other thing about doing it that way is that means like on every single frame, we're not just like saying, hey, Animate on this Bezier curve, ~~we, ~~we know the exact position and velocity and acceleration at on every single frame that this icon is [00:03:00] moving and that probably seems unnecessary and I don't know, maybe it kind of is, but it's a lot of what I do with my life, ~~uh, ~~if we have those values, we can actually drive other animations off those things.

[00:03:10] If you think about, throwing an object, right, when the object is really close to the ground, you have this, like, really intense shadow, And then as the object kind of moves up, the shadow radius becomes larger and the opacity goes down.

[00:03:22] And if we had the velocity, we know when the velocity hits zero. And so we can kind of tie those things together. Now the shadow is based on the position, the velocity, and then when it finally hits that, Destination position, we knew that final velocity and with that final velocity, we could inject that into a spring and create this like really juicy, like, breaking animation where the icon kind of squishes and deforms, right?

[00:03:44] ~~I think what was really satisfying about it is ~~

[00:03:44] it covered the design portions. It covered the, artistic portions. And also was like nice to use some, you know, some like basic calculus again, like, you know, I was like, uh, it's like a design engineer now. So, yeah, I was, I was pretty happy with how that turned out.

[00:03:57] **Ridd:** told my wife about this interview [00:04:00] and I was like, yeah, you know, I'm talking to John and ~~he's a, ~~he's at Airbnb. ~~Yeah. Okay. You know, not that much. ~~And I was like, he's the guy that, ~~you know, ~~made the arc download animation. And she's like, Oh, you know, she had this eyes light up moment. We're like, Oh, that's so cool.

[00:04:10] **Janum:** It was actually like a little bit of a different type of animation for me to build, because I generally build animations that are like highly interactive and this is actually kind of the opposite, which is you click a link.

[00:04:20] And we kind of render this fire and forget animation, and that's what's needed there. Like, it totally makes sense. for a second, I didn't have to have the constraint of like interrupt ability and reversibility~~ and reversibility ~~and retargeting and all that kind of stuff.

[00:04:32] I could just focus on making that fire and forget animation feel as good as possible

[00:04:37] **Ridd:** I didn't even think about that. You're right. It actually does have less constraints because there's no way to stop it as soon as it starts. It is going to continue and ~~Huh. ~~Okay. So let's. Back, look all the way up in your journey. You studied engineering, you started a couple of companies.


## [00:04:53] Janum's role at Apple

[00:04:53] **Ridd:** Eventually you find yourself in a full time role at Apple and maybe we could start the story there. So can you set [00:05:00] the stage for what that role was like? And then we can dive into some of the specific details.

[00:05:05] . 

[00:05:05] **Janum:** I was an engineer on a team called UI kit frameworks. So UI kit is the, ~~um, ~~set of frameworks that all apps are pretty much built with. ~~Um, ~~even a lot of Swift UI stuff under the hood, it's like UI kit. ~~So, um, ~~when I was there, I actually worked really closely with, ~~uh, ~~our sister team, which is, ~~um, ~~a team called springboard system UI. And this is the team that ~~kind of ~~builds. ~~Uh, ~~everything on iOS that's not an app. So, home screen, lock screen, app switcher, notifications. ~~Um, ~~as well as ~~like ~~all the, ~~um, ~~behind the scenes, under the hood stuff that ~~like, ~~no one ever thinks about. ~~Um, ~~I really, really enjoyed working with them. ~~Uh, and ~~so I actually, the next year I moved over to that team. And, ~~um, And, uh, ~~started working on the iOS app switcher specifically for the iPad. ~~So, ~~the first project that I was working on there was. On the iPad pointer, ~~um, you know, this is a, this is ~~the kind of pointer that, ~~you know, ~~as you move around, it kind of morphs and does all that fancy stuff.

[00:05:53] ~~Um, ~~I didn't work on the more thing, but I worked on the other side of it, which was like, okay, you know, all of the navigation on iPad, it [00:06:00] assumes that you have like your fingers on the glass, right? That you ~~like, ~~swipe up on the glass to go home and to move between apps and to go to control center and all that kind of stuff.

[00:06:07] How is this going to work in a world where you now just have a pointer, right? ~~Um, we still want these gesture, you know, ~~we still want you to be able to kind of like, interactively, ~~uh, ~~go to the switcher or control center or these kinds of things. How's that gonna work? So, ~~um, ~~I spent a while kind of porting a lot of the, ~~um, you know, ~~touch based gestures on iPad to work with the pointer.

[00:06:26] And that's really where I started getting, ~~like, ~~really heavily involved with, ~~like, ~~interaction, gestures, animation. ~~Um, and it's, like, really, like, where the, like, I don't know. ~~like, where, ~~like, ~~the rubber hits the road, where ~~it's, like, ~~you can't Fake anything there, right? If you make something and for some reason it feels off or it feels bad, ~~like ~~the experience of using this product just now feels bad.

[00:06:41] ~~Um, ~~so it was ~~like ~~a ~~really, ~~really high bar on a team that, ~~you know, uh, ~~is really ~~like, they're all like ~~world class, like engineers and, ~~you know, ~~interaction designers, right. Just ~~like ~~by virtue of having that role. ~~Um, so ~~I learned ~~just like, you know, ~~so much being there. ~~Um, I, ~~I particularly worked a lot with, ~~um, ~~someone named Shabam, ~~uh, ~~on Springboard, who's now ~~part of the, ~~part of the design team over there.

[00:06:57] he had a really large role in building [00:07:00] the, ~~um, you know, ~~original, ~~uh, ~~iPhone ~~uh, ~~which ~~I, ~~I consider to be ~~like ~~one of the, ~~like, you know, ~~wonders of the world. And, ~~um, you know, you know, ~~everything he would make, it just felt incredible, ~~right. ~~It felt ~~like. ~~Alive and dynamic and responsive. And so I spent so much time trying to ~~like, ~~look at his ~~like ~~patches and pull requests and just try to ~~like, ~~learn the tricks of ~~like, you know, ~~how do you actually make these interactions feel great?

[00:07:20] Right. ~~Like, like what, even like, you know, ~~from the level of like, what is animation? ~~Right. Which is like, ~~you're transitioning from one state to another. ~~But ~~you can ~~actually ~~model this as ~~like progress, like ~~progress at zero and then progress at one, ~~and you're kind of ~~interpolating between those two numbers.

[00:07:30] ~~But then the interpolation, ~~you get to change the curve, right? Maybe it's linear, maybe it's ease in, ~~but. ~~Ideally, you can actually use a spring, which has a notion of velocity and momentum. ~~So ~~that way, when you, ~~uh, ~~change an animation, it doesn't ~~kind of just ~~jerk to the new destination.

[00:07:42] It kind of fluidly moves to that, ~~um, ~~so ~~I, ~~I started learning a lot of these, ~~you know, ~~Engineering techniques of building fluid interfaces from him and that team and just like totally fell in love with the craft. I'm constantly working on little side projects and stuff. I'll just have like an idea in my head. And like, I need to like build it from scratch to satisfy that itch. So [00:08:00] I was doing a lot of that on the side. ~~Um, ~~and then, you know, eventually I was kind of feeling like, all right, like this is like an amazing experience being on this team, been in Apple for a little bit, of want to have more of a hand in the design and prototyping parts of this process.

[00:08:12] And, ~~um, You know, ~~I think ~~like ~~Apple's a bit more top down. You have ~~like ~~maybe ~~a little bit ~~less, room to move laterally. So, I went over and joined Netflix. 


## [00:08:19] The backstory of refreshing the Netflix iOS app

[00:08:19] **Ridd:** First projects that I saw of yours was the Netflix iOS app and all the different little interaction details that were going viral on Twitter at the time. ~~So ~~can you give us a little bit of a backstory for that project?

[00:08:31] **Janum:** They were really interested ~~in, ~~in trying to take ~~the, ~~the Netflix iOS app, which, ~~you know, ~~had been around for a while, super functional, very stable, very solid.

[00:08:38] ~~Um, ~~they were starting to, ~~like, ~~move into, ~~you know, ~~introducing games to the platform, some other verticals of the business, and they wanted to figure out, how can we make this app feel a little bit more, ~~like, ~~alive and dynamic, right? Versus kind of ~~like, um, it's just like a, ~~like a vending machine or something like that. 

[00:08:51] And so ~~my, um, ~~my manager, you know, she kind of knew, my interest was really in this, fluid dynamic UI or whatever. She was like, , do you want to ~~like ~~take a stab at, ~~I don't know, ~~[00:09:00] doing something to the app. And, ~~uh, ~~you know, I think ~~like, you know, like ~~in my spare time, when I had cycles at Netflix, ~~like ~~I was doing some prototyping already and posted some fun demos and I think that kind of got people excited and so I was like, yes, ~~I mean, like, ~~absolutely.

[00:09:12] ~~Um, ~~so she gave me that opportunity. ~~Uh, ~~which I'm ~~like ~~forever grateful for. ~~And I kind of like, ~~she kind of just ~~like ~~left me alone for the next ~~like ~~nine months in the best way possible, ~~you know, like ~~like obviously we, ~~you know, ~~check in every week, but, ~~um, ~~she just ~~like kind of ~~left me ~~and I, um, ~~I started working really closely with, ~~uh, uh, ~~my design partner there, ~~uh, ~~Ben Johnson, who's been there for, ~~um, you know, ~~seven, eight years at this time.

[00:09:27] And he was so excited that someone else. Wanted to, bring the app into ~~like ~~this new era. So, you know, next like nine months, ~~uh, ~~we were just ~~like ~~jamming on designs and prototypes together and, ~~you know, um, ~~tweaking things ~~and, ~~I was also responsible for ~~like ~~building the thing as well, ~~uh, ~~with the help of, ~~um, uh, ~~an engineer named Adam Bell ~~as well, uh, ~~who is a fantastic engineer at these UIs.

[00:09:45] ~~You know, ~~he worked on ~~like ~~Facebook paper and stuff. ~~Um, ~~And yeah, in, ~~in like ~~about a year, we shipped this refresh of Netflix. 

[00:09:52] **Ridd:** One of the things that you said about this project was your goal was to make it fluid, delightful, and polished. Those were the words you use,

[00:09:59] so [00:10:00] how did you then think about the right areas to inject animation when , you're kind of given a clean slate , to do anything that you really want. Talk to me a little bit about ~~like ~~the model that you were using for like, Oh, what if we did this over here or over here? What were those core surfaces that you wanted to explore first?

[00:10:18] **Janum:** I think one of the first ones that we knew we wanted to do was that, ~~uh, ~~shared transition from the artwork to the detail page, that seemed kind of ~~like, um, I don't know.~~

[00:10:25] ~~To me, it kind of felt ~~like a no brainer, right? It's like, okay, we have this beautiful artwork already. we can kind of bring out the tones of those colors and make that detail page more immersive, right? Before, like, Netflix was just like all black everywhere.

[00:10:38] It was like content and then black. we have this like huge billboard up at the top and so we're also thinking like, could we make the colors kind of match the artwork? That was a really long process. It's like, again, ~~I think, ~~I think this is a great example of like, it's really easy to Create a mock of the homepage with some particular like hero artwork and then draw a gradient that looks just like incredible.[00:11:00] 

[00:11:00] And then figuring out how you systematize that and do it automatically is really, really annoying. And, you know, we tried all sorts of things, you know, we tried blowing the image up and then applying blurs and saturation filters and stuff like that. You know, we tried creating like mesh gradients.

[00:11:15] We tried. straight up extracting colors and then putting that there and everything looked like really, really wrong in the end we weren't like, oh, the technique is just this do that. No, ~~it was like, ~~it was like 200 lines of color extraction for a piece of artwork.

[00:11:27] And then we'd like meticulously. ~~Kind of like ~~tune and tweak the hues and the saturations and the brightness is if the hue is like a yellow, we discard that color and then we find another one. And ~~we, ~~we, we tune those components as well to draw this gradient. so I think that's like another good example of that, like, design engineering intersection as well.

[00:11:45] **Ridd:** Like you've seen this UI in places, even in something like Apple CarPlay, for instance, and I guess I assumed that you were blowing up the image and blurring, but 200 lines and color extraction, , that's really fascinating, actually.

[00:11:57] **Janum:** yeah. And you know, it's not perfect too, right? Like, you know, [00:12:00] you can get into states where it looks like a little bit like too gray or washed out or this or that. But I think we got it to like a decent position. Sometimes when I ~~like ~~look at the Netflix app now, ~~I'm like, ~~I just see all the things that ~~I didn't have, like, I, like, ~~I would have wanted to ~~like ~~improve and I didn't have time to do it.

[00:12:12] ~~like, ~~I have to ~~like ~~remind myself that ~~like, okay, like ~~for what I did in ~~like ~~that year, like~~ like ~~it was good.

[00:12:15] ~~It~~ 

[00:12:15] **Ridd:** I didn't realize how much you were touching the actual design of the app rather than the interaction animation side. Were there other places where you're like, okay, in order to unlock this level of delight, actually, we do need to make like a design tweak here.

[00:12:31] **Janum:** Yeah, I mean, ~~well, ~~the whole project was ~~like a, ~~like the design did change, right? ~~Like, ~~it wasn't like we designed this new art direction for the homepage and then figured out like, oh, how do we like tack on interactions, right? we wanted the whole thing to feel Very cohesive, The language matched the interactions match, the, motion of things and the content. it was a little bit like, you know, we're, we're kind of like boiling the ocean for a little bit, ~~ you know, We're kind of like boiling the ocean for a little bit, ~~


## [00:12:53] Getting buy-in for design decisions on the Netflix app

[00:12:53] **Ridd:** So given the fact that you're boiling the ocean, you're making all of these design decisions. [00:13:00] How much were you having to like get sign off on these different directions? Or, Hey, we're going to invest all this time in figuring out this like dynamic color background.~~ Or, Hey, we're going to invest all this time in figuring out this like dynamic color background.~~

[00:13:08] ~~Like, ~~what was it like having to, Present these ideas and how often did you have to?

[00:13:14] 

[00:13:14] **Janum:** Netflix is a pretty different kind of company. One. ~~It's very like, kind of engineering led. ~~It's not traditionally a super product design led company, is, I think, good and bad. And ~~I think, but ~~I think the opportunity there is like, there's maybe like a little bit less scrutiny.

[00:13:25] if you're trying to ~~like ~~push the boundaries of things, ~~but pretty much, you know, like ~~we have ~~like ~~our director VP ~~kind of ~~sign off on this experiment, right? ~~Like, you know, ~~we were going to AB test this before, ~~like, ~~actually rolling out to everyone. And we ~~kind of ~~decided, okay, ~~like ~~we're willing to ~~like ~~budget. ~~You know, ~~this amount of time and have a couple of people ~~like ~~work on this and we'll see how it goes. ~~Um, and ~~in terms of ~~like ~~all these approvals and reviews, ~~like ~~we really didn't have a lot, we would demo it to ~~like ~~a couple of people in leadership ~~and like kind of ~~in ~~like ~~the hallway and they're like, cool, ~~like ~~keep going.

[00:13:48] ~~Um, ~~I think Netflix, like ~~they, ~~they hire good people. They trust you a lot to be, ~~you know, ~~a good steward of the product of the design of the engineering. ~~Um, Um, you know, uh, ~~and, ~~you know, ~~if you read their culture memo, they're like, yeah, and ~~if, uh, ~~if you're not doing that, we'll fire you. 

[00:13:59] **Ridd:** Alright, So you're [00:14:00] introducing all of this animation and movement in, ~~you know, ~~like you said, kind of this boil the ocean type project.


## [00:14:06] The importance of tuning your animations

[00:14:06] **Ridd:** There's kind of a spectrum that in my mind exists here, where on one hand, you're very intentionally saying, okay, these are the curves that we're going to formalize, and we're going to ensure all of the standardization and how things move throughout all of the different surfaces. And on the other, it's kind of, you know, for each individual implementation, you're saying what looks and feels best here as someone who is doing a lot of prototyping and a lot of interaction design, how much do you care about the standardization of these animations?

[00:14:35] **Janum:** Yeah, it's a great question. I am not really in the standardization camp for, ~~um, I guess, like, ~~constants that, ~~like, ~~affect animations and springs and curves and things like that. I think in the design process, you have this final step at the end called tuning that I don't think people, ~~like, ~~really talk about or give much credence to.

[00:14:51] ~~Um, ~~but ~~I think, ~~I think really, ~~like, you know, ~~step one is you build the thing. And you kind of iterate on, ~~like, ~~the core functionalities of the interaction. ~~Right. Um, ~~and then ~~kind of ~~at the end, you get to this [00:15:00] point where you need to, ~~like, ~~make sure all your springs have the right damping and ~~like, you know, they're, they're like, ~~they're not too tight, but ~~they're not, you know, ~~they're not too soft.

[00:15:05] And that's a step where you just have to, ~~like, literally, like, ~~change one number by, ~~like, ~~0. 02 and try it ~~again and ~~again and again and again. And you ~~just like, ~~end up with this, ~~like, ~~big file of ~~like, look, here are the ~~tuned constants, like, Don't touch it, right? ~~And ~~they're not going to be standard because a lot of times it doesn't make sense to fully standardize these numbers because, you know, spring animation, that moves something just like, 50 points. It's going to feel really different than that same spring being used to translate ~~that like ~~across the whole screen and ~~like ~~become super large, right? I think standardization, like everyone loves this idea, ~~I think, you know, ~~if you really want to make stuff that feels good and feels really tailored to the exact animation that you're building, ~~like ~~you have to do the tuning step and it's not going to match ~~like, you know, often like ~~what your design system says.

[00:15:42] **Ridd:** Okay, so you do this big visual and interaction overhaul. You release it. It doesn't sound like you got fired, so I think it was at least somewhat successful.~~ It doesn't sound like you got fired, so I think it was at least somewhat successful. ~~Can you talk to us a little bit about what the impact of the project was?

[00:15:54] **Janum:** The app with the update got approved on like a Friday. And then the next Monday I was [00:16:00] starting at browser co. So I really, really threaded that line and I very narrowly, um, Made it happen.

[00:16:07] but what was funny is like, I didn't actually like know the, outcome of it till after the fact. Right. Like I had a weekend Monday, woke up, I was now at browser Co. I was like, man, wonder how this is going to go. at this point, I did know, like runs these, you know, AB tests.

[00:16:21] So ~~we have some, you know, ~~we have a good sense of ~~like ~~how this is going to ~~like ~~impact metrics. ~~And, you know, ~~I was talking to ~~like ~~, our data partner and, he was like, ~~ yeah, ~~we have ~~like ~~a statistically significant sample come back and the result is ~~like ~~suspiciously large. I was like, oh, God, ~~like, ~~suspiciously bad.

[00:16:36] He's like, no, ~~, like, ~~all of these core metrics are substantially in the green. ~~Right. And it's like, ~~when you're operating at that scale, ~~it's like, like, ~~I was really expecting all those core metrics to be ~~like, ~~slightly in the red to neutral. And ~~we kind of, ~~we kind of accounted for that, ~~right.~~

[00:16:47] If we're going to make a substantial change to ~~like. ~~The art direction and design language of Netflix, with the hope of bringing it to other canvases and other platforms, ~~like, you know, ~~we're probably going to take ~~like ~~a little bit of a short term hit and then we'll find out [00:17:00] what's, ~~you know, ~~causing that regression and we'll fix it.

[00:17:02] Right. ~~And it was like, while that, like, on the first go, ~~the sample came back and it was ~~like, ~~yep, all core business metrics are ~~like ~~positive. By ~~like ~~a substantial margin and it's just ~~like ~~not really what I was expecting and I never sold This idea in terms of ~~like, ~~oh, I'm gonna promise you ~~like, you know ~~positive metrics increases, ~~right?~~

[00:17:18] ~~Like I think that'd be like a really silly thing to do ~~but it was, ~~and, and the, and it, ~~and it really objectively empirically showed that craft does affect the business, right? It is not kind of like a vanity exercise in ~~like, ~~doing art school in software. It's like, this thing can really have ~~like ~~a tangible impact on those things.

[00:17:33] Right. And again, I still, to this day, I don't sell craft under that idea, but it's really nice now knowing like. I've seen what this can do. And if we need to make that kind of case, we can make that kind of case and test that.

[00:17:46] **Ridd:** I mean, ~~it's, ~~it's cool to hear. I wonder how many people are going to cite this conversation even, because it's, So often that level of craft and detail is sold under this umbrella of, well, it's an investment into things that you can't really [00:18:00] measure, but they are important. We promise, like we promise they're important, but you can't really tell.

[00:18:04] And so to hear that it had empirical impact is really, really cool.

[00:18:08] **Janum:** Yeah, totally. ~~Right. It's, it's like, ~~it's like investing in feel is you're effectively investing in people liking using your product. ~~Right. ~~There's ~~like ~~a million products that have terrible feel and people hate using them. And they complain to ~~like ~~whoever is forcing them to use these things.

[00:18:20] And as soon as they're not forced to use it, they ~~like ~~immediately ~~like ~~throw it in the garbage. ~~Right. So like ~~feel is. product quality, ~~right? Just like, ~~just like stability, ~~just like, you know, ~~performance, ~~like ~~all those kinds of things. They're all in the same bucket,

[00:18:30] **Ridd:** it's interesting to think. About what the impact would have been if there was more of like incremental releases and you're like, Hey, we're going to just take this surface area and invest in feel and then this surface area and then this surface area, would it have been in the red or been neutral to the point where maybe the entirety would have never been greenlit,

[00:18:48] **Janum:** Yeah, 100%. ~~Yeah, ~~we made a pretty conscious decision to take this bet of we're just ~~gonna, you know, we're ~~gonna test this, we're gonna have the control group that doesn't enable any of this stuff. We're going to have the main group that turns everything on. And then one third [00:19:00] group that ~~just like ~~turns off the, ~~that ~~zoom transition, just in case, ~~like ~~we literally ~~like ~~screwed up the engineering for it.

[00:19:04] ~~Right. ~~But we were like, you know, we're going to test this as ~~like ~~a whole thing, because as soon as we start breaking this refresh up, it's no longer a refresh. You've just kind of created this ~~like ~~Frankenstein's monster ~~of like,~~ you end up with something like really strange and nonsensical, ~~and it doesn't like make sense ~~and it's not going to feel the same.

[00:19:19] Right. So we didn't do that. I think our bet paid off there.


## [00:19:22] How Janum's role has evolved at Airbnb 

[00:19:22] **Ridd:** Okay. So you mentioned going from Netflix to the browser co, we talked a little bit about that. Now you're actually at Airbnb. You've been here almost a year. So it's still kind of new, but talk to us a little bit about how your kind of day to day role has evolved now that you're in another new environment like Airbnb.

[00:19:42] **Janum:** The arc of my career has very much been like, started full on product engineering and I'd love, I still love engineering products, right? But I kind of got more and more interested in. ~~Uh, ~~interaction design and prototyping, animation, interaction, things like that.

[00:19:57] I went from Apple, and then I went to Netflix [00:20:00] where my role was like really split 50 50, but I still had like a massive amount of engineering to do. Then I went to BrowserCo, and the, ~~you know, ~~proportion of engineering strength. Down to maybe, I don't know, 30%. ~~Um, in, ~~in terms of ~~like ~~contributing to ~~like ~~the production code base.

[00:20:14] Right. ~~Um, ~~and then I joined, ~~uh, ~~Airbnb where my role is, ~~I don't know. I, I, ~~I think ~~my, I guess ~~I'm like a design engineer. ~~Um, and I, yeah, I'm, I'm some hybrid of, you know, ~~I do a lot of prototyping. ~~Um, ~~I do a lot of interaction design, especially things that are, ~~you know, that have ~~motion or gestural in nature. I also do a lot of ~~like ~~proof of concepting, ~~you know, I think ~~the designers are ~~like really, ~~really ambitious, which is fantastic. ~~And ~~sometimes, ~~you know, ~~they'll come up with an idea that, ~~you know, ~~they're not quite sure, ~~like, you know, they might show engineering and, engineering might not be sure totally ~~how to approach ~~this.~~

[00:20:35] So ~~I can kind of come in and, , ~~I can kind of break down that piece of tricky UI and ~~kind of, you know, ~~provide like a reference example of ~~like ~~how you can do this. ~~So, um, yeah, it's like a pretty, um, like, you know, my, ~~my role is pretty broad in that it changes fairly frequently.

[00:20:45] ~~I, you know, ~~I'll stay on a project for, ~~you know, ~~a month or two, depending on what it is, but I'm just ~~kind of like, you know, ~~moving around the company, making prototypes, creating demos. ~~Um, you know, ~~figuring out, ~~you know, ~~what are some technical unlocks for some new design that we want to do. ~~Um, you know, ~~sometimes I'm doing ~~like, you know, ~~more large scale prototyping across the product.

[00:20:59] **Ridd:** [00:21:00] Listening to you talk about like proof of concepting, it does feel like it's almost necessitated because there are designers that really push the boundaries and Airbnb has this really high level of craft and interaction that maybe, a lot of people listening to this, they don't work at that type of company, which kind of makes me curious, like how many People are there at Airbnb that do this type of role that you're in where you're really kind of sitting as in many ways, like the bridge between traditional designers and traditional engineering, is it a common role?

[00:21:33] Like, are there a lot of you and how does that kind of fit into the org?

[00:21:36] **Janum:** I would not say there are a lot of that role, I'm kind of ~~like a, ~~like a leaf node, like a free electron. ~~Um, you know, ~~there are a couple other teams that have similar roles, ~~uh, you know, ~~focusing on prototyping, ~~um, You know, ~~I'd estimate ~~maybe, ~~maybe on the order of like 10 or a dozen around the company.

[00:21:49] ~~Um, ~~and ~~I, I think ~~I think it's something that the company is interested in investing more because ~~I think, like, you know, having ~~having people that are able to ~~kind of, um, like, ~~fully speak and do both those jobs, ~~you're able to, like, ~~you're able to both design things that are actually more ambitious. [00:22:00] And you ~~actually ~~have the technical capability and knowledge to actually ship it, right?

[00:22:03] ~~Um, and, you know, ~~if you don't have that glue in between, ~~uh, one or, you know, ~~you kind of have a harder time with ~~like ~~one or both of those aspects.

[00:22:10] **Ridd:** prototyping role imply that you are not often contributing to prod?

[00:22:15] **Janum:** So this is actually the first job where ~~like, um, ~~I just haven't done that at all. I'm still doing a ton of very technical work, right? ~~Like I'm, you know, ~~when I'm designing stuff, I'm not really in Figma ~~like ~~very often, ~~like I'm, I'm, ~~if I'm in Figma, I'm using it as kind of like a Photoshop, ~~right? I'm like ~~trying to ~~like. You know, you know, ~~white out some rectangle and replace it with another rectangle or ~~like, you know, ~~something like that, ~~like, ~~like really rudimentary stuff.

[00:22:33] Like, I think if you see me in Sigma, you're like, Oh my God, ~~like, like ~~this guy should never design anything. ~~Um, like, like ~~most of the time ~~I'm, I'm, ~~I'm designing and creating interfaces and prototypes, ~~like ~~in code, that's ~~like ~~where I'm comfortable. And it's where I can actually build something that I can ~~like ~~play with and ~~I can, ~~I can see how it feels, right.

[00:22:49] ~~Uh, ~~see how all those ~~like ~~seams. ~~Uh, ~~actually fit together, I think that's the biggest value of ~~like ~~prototyping is once you actually ~~like ~~have something that you can play around with. You intuitively know what's wrong with the thing that you [00:23:00] have, right.

[00:23:00] In a way that is maybe not as obvious if you're ~~kind of like, um, ~~working in, ~~you know, in like ~~renders or ~~like, you know, ~~mocks or something like that. 


## [00:23:06] Why Janum doesn't use SwiftUI much

[00:23:06] **Ridd:** listening to you talk, I kind of assumed that you were living in SwiftUI all day, but that's not the case, ~~which I found pretty interesting. ~~So can you talk to me a little bit about that?

[00:23:15] **Janum:** the thing that I really like about designing. Interactions or prototypes or what generally software is making stuff that just feels absolutely fluid and responsive and immersive, right?

[00:23:28] Like every last detail. Because if you start cutting the details out, it kind of breaks that immersion. And one of the ways that you can break that immersion is. ~~Um, ~~having poor performance, right? dropping frames, you know, you're dragging something around and it's kind of stuttering or you throw a box up to the left or something and it kind of stutters or, or it changes direction in a way that doesn't quite feel natural at right.

[00:23:51] ~~um, ~~I think SwiftUI does. ~~You know, ~~especially when it comes to ~~like, you know, ~~more complex animations, interactions, gestures. I think it does have a lot of those ~~kind of like ~~performance issues. ~~Um, ~~and then I [00:24:00] think ~~the, the, ~~the declarative nature of SwiftUI makes a little bit more difficult to actually debug and kind of open up the box to see what's going wrong in there.

[00:24:07] a lot of my work, ~~you know, ~~like all the Netflix work, for example, that's all UI kit and core animation. Because it needed to be highly custom and not just that it needed to never drop a frame, right. Independent of ~~like, what, ~~what other parts of the app are ~~like ~~using resources, ~~right.~~

[00:24:22] ~~Um, ~~we just needed to maintain a really, really high quality bar. I'm not quite sure that Swift UI is like necessarily that level of production ready right now. And then also my demos, ~~Like, ~~I was not super happy with ~~like ~~the existing animation APIs on iOS. ~~Uh, you know, ~~be it SwiftUI or UIKit.

[00:24:38] ~~So I, so, um, ~~a couple of years ago I worked with my friend Ben ~~to write, um, ~~to write a library called Wave, ~~um, ~~that I now use for ~~like, you know, ~~pretty much everything. ~~Um, yeah. And you know, sometimes, ~~sometimes the right tool for the job is ~~like ~~a metal shader, ~~right? ~~Sometimes it's like you can't even work in rectangle land if you want to create some kind of visual effect ~~or something like that, right?~~

[00:24:53] ~~Like. You know, um, ~~I think, ~~you know, you know, ~~if you want to create the apple intelligence wave form effect around the border of the phone, ~~right? Like, yeah, ~~good [00:25:00] luck doing that in rectangle land. Why? Because they're not rectangles, ~~right? So, you know, um, ~~in the last year, ~~like, ~~I've also gotten fairly comfortable writing shaders, and that opens up a whole new world.

[00:25:08] ~~And, you know, sometimes it's, uh, ~~sometimes the answer is not even software at all. Sometimes the answer is really just ~~like. You know, ~~have some stuff in Figma and do some magic moves ~~and and ~~and solve it at that level first, ~~right? ~~

[00:25:15] **Ridd:** All right, so you hit on like four different things that I wanted to ask questions about. So we're going to kind of just go

[00:25:20] **Janum:** Okay. ~~Yeah.~~

[00:25:20] **Ridd:** and get into some specifics. 


## [00:25:22] What it means for software to feel great 

[00:25:22] **Ridd:** One of the things I really wanted to talk about is like, in your opinion, what makes software feel great? You mentioned performance. You said this phrase, every last detail. What are some of those other details that to you are necessary for something to truly feel great?

[00:25:38] **Janum:** This is like the holy question, right? kind of assume we're talking about something interactive, something that's someone animated, right? level one is you create an animation that's fire and forget. ~~Um, ~~You press a button that displays a modal, and it runs that animation, and you have to wait for that full animation to finish before you can use the content in it, or before you can dismiss it, right?

[00:25:57] You're just locked in. That's not great, because it's not [00:26:00] super responsive. You are thinking about how you want to use this piece of software faster than the software is letting you do it. ~~Right. ~~So the next step is making that animation interruptible as that modal is coming up. I should be able to tap the background and have it, ~~uh, ~~change its direction immediately.

[00:26:17] Right. Level 3 is how do we actually ~~make that, uh, ~~make that change of direction feel more smooth, Because it's kind of, you know, if if that modal is coming up and then you dismiss it and it just kind of jerks back down. Like, yeah, I mean, that's interruptible. It doesn't feel that good. ~~Right. ~~So the next step is you actually want to maintain the momentum of these interactions.

[00:26:35] If there's a lot of momentum going up, then it should slowly curve back down before, before hiding again, right? And ~~that's something that, um, ~~that's something that we call, like, retargeting, right? It's maintaining the momentum of animations as you change where they're animating to. ~~Um, ~~and then, you know, if we go back to that idea of, like, modeling, ~~uh, ~~animations as moving between progress values of 0 and 1, ~~You know, it's one thing to kind of figure out, ~~you know, you're interpolating between zero state and the one state, But then also, what [00:27:00] happens beyond those two points? What happens when you're pushing beyond one of those edges, right? ~~So ~~a really good example is scrolling on iOS. If you scroll to the bottom of a page, it doesn't just stop, ~~right? It doesn't just, it doesn't, you can actually, ~~at that point you are past 100 percent progress, but you can still actually pull it ~~right.~~

[00:27:17] ~~And it's, ~~and what's actually happening is, ~~uh, ~~when that progress is greater than a hundred, we're actually rubber banding, ~~uh, ~~that progress value, ~~right? ~~So you can pull it, but it gets tighter and tighter and tighter, and you can't really pull it much more. But it's telling you. That hey, there's not a bug here, This is the end. There's nothing past it. And the software is not broken. Right? So also considering. happens outside of that ideal context of zero to one, that's super important. ~~Um, ~~and then, ~~you know, ~~you just generally have this idea of ~~like, um, ~~responsivity, Whenever you are interacting with the UI, the UI should be responding in some regard.

[00:27:50] ~~Um, ~~you know, obvious example is like, okay, you're scrolling and you know, that's, you need to be scrolling like. One to one, It's even it's even a little things. It's like, you know, if you look at the netflix zoom transitions, the [00:28:00] reason those boxes depressed down a little bit before expanding up is because.

[00:28:05] ~~you're, ~~you're almost kind of pushing ~~this, ~~this box down on a spring and then it springs back up to you. . So, you know, I know, ~~I know like, uh, I think ~~like Disney or Pixar has those ~~like, you know, 12 principle ~~12 principles of animation, right? So those really apply to, ~~to, uh, ~~UI work as well too.~~ too.~~

[00:28:17] ~~Um, but, uh, I don't know. ~~I think there's a million things and I think there's like a million details that you just ~~like, ~~have to make a bunch of stuff. To figure out why the stuff you made kind of feels bad and then Actually find that principle like i'll give you another example, which is ~~ I don't think ~~I don't think this is like something that people ~~like ~~really ~~like ~~know about or I think it's like such a great thing on iOS.

[00:28:34] But, people have such good muscle memory when they're typing on the keyboard on iOS, right? They'll go into iMessage. they'll open up the text box, and then as that keyboard is still animating up, people naturally will start typing even before it's fully presented, They're typing against buttons that aren't yet there, right?

[00:28:54] But the designers knew that. They knew that people have muscle memory. So even though those keys are still animating up, [00:29:00] and you're pressing over here, we should pretend like the keyboard is actually there. ~~until you actually build that and prototype it and use it and use it for so long, you're not going to find that opportunity.~~ these things are like non obvious, right? But then if you take that away and you actually make it, so you have to hit the exact moving key target as it's animating up, you know, people will like lose their mind, right? ~~it's a, ~~it's a million small things. And if anyone is interested in, studying these principles, ~~like, ~~more broadly, I mean, the holy text here ~~is, um, ~~is the 2018 WWDC talk, ~~uh, ~~Designing Fluid Interfaces.

[00:29:25] And this is the talk with some of the, ~~um, ~~primary designers of the fluid switcher from the iPhone X, kind of talking about all the principles. ~~Uh, ~~that led into, ~~um, you know, ~~all those new gestures. So ~~that, that is like, ~~that is where everyone should start. And then just make a bunch of stuff and ~~then ~~figure out why it's not that good.

[00:29:39] **Ridd:** We'll definitely add that to the show notes for people as a next step. The next thing I want to talk about then is, okay, given these like million details that you have to think about, why did you decide that you needed to create the animation engine wave? Like what were the gaps that you were trying to fill?

[00:29:56] And maybe you could even just give us a little bit of an idea of like, what [00:30:00] does it actually take to build something like this? ~~Like, I truly have no idea. ~~So with the understanding that you are talking primarily to designers with an interest in engineering. Maybe it's ~~like the, you know, we don't need the, the explain like I'm five version, but maybe ~~like the explain like an eighth grader version, talk to us about what it took to pull that off.

[00:30:12] **Janum:** So I'll start with ~~like ~~why I decided to ~~like ~~make Wave. ~~Um, ~~and I'll start with an example ~~on, ~~on the iPhone, which is picture in picture. You know, you're watching a video and then you get that little pit thing. ~~And, um, ~~if you pick it up and throw it around, it always lands in one of those four corners.

[00:30:27] But at the moment that you release it, it doesn't just jerk to one of those corners, kind of based on the intensity and the speed of your swipe, it kind of gracefully arcs and curves and kind of bounces back and finds its home, ~~right? And, ~~the magic that's happening there is, when you release your finger, that drag, you have some velocity in there, and it's pointing this way.

[00:30:51] And the targets up here, but what's happening is, even though it's animating to the top, the velocity is going the other direction. So those springs are going to [00:31:00] actually, you know, still push a little bit this way and then kind of curve back. And it turns out that, a lot of the APIs in UIKit and SwiftUI, don't really have that great support for maintaining that velocity or maintaining that momentum.

[00:31:16] And if you don't have good control over that Things are just gonna feel stiff. They're gonna feel jerky. They're not gonna feel natural. And I was really frustrated with that. I decided to start writing WAVE, which makes it really easy to, you know, the idea with WAVE is you just tell it where you want some animation to end up, whether that's a position or a size or a color.

[00:31:36] And then at any time you can change your mind, you can say, actually go over here, actually change to this color, and everything will kind of gracefully move, Facebook created a similar, ~~uh, ~~engine a long time ago, ~~uh, ~~called Pop. This is the engine that they used, ~~uh, ~~to make Facebook Paper feel so fluid.

[00:31:49] ~~Um, ~~and Pop, you know, it's pretty old. I think it's like pretty unmaintained now. And so I wanted something that still felt modern and gave you a lot of control. ~~um, so, so, ~~so ~~that's what, uh, ~~that's what Wave was. And in terms of, ~~you know. What was ~~[00:32:00] what it was like to build it? ~~Um, ~~I mean, it was a lot of actually learning and understanding and trying to break apart how spring physics actually works, ~~when you ~~when you throw around these terms of ~~like ~~stiffness or damping versus damping ratio or response or, you know, whatever, it's like, ~~You know, well, ~~turns out you're going to need to, ~~like, ~~read a lot of Wikipedia pages with a lot of, ~~like, ~~incomprehensible, ~~like, ~~math, ~~you know, ~~notation and figure out how you translate that into, ~~like, ~~code, right?

[00:32:23] ~~Um, ~~so ~~I, you know, ~~I had help with Ben and, ~~you know, ~~I think without him ~~that, you know, ~~this would have been impossible. But, ~~um, ~~yeah, I mean, I think to this day, it's one of the things that I'm more proud of because, ~~like, ~~it was really nice to, ~~like, ~~Build a tool that ~~like, it was like for me, it ~~was exactly the tool that I needed to make the kinds of software and UI that I wanted to make, and then it happens to be open source and other people happen to like using it, it was really ~~like ~~a labor of love and it was just like a building my own tool thing.


## [00:32:48] Why shaders are a big deal (and how they work)

[00:32:48] **Ridd:** All right. So the other thing that you started talking about was shaders. And like for anyone that is listening, that's like ever been on Twitter, like it's almost impossible as a designer to not come across Shader [00:33:00] now, and yet it's kind of this black box for people who don't really get into code, so I know this is not the easiest of questions, but can you help designers who have no real idea what a shader is, understand it a little bit better, but also talk about like, what does it make possible?

[00:33:18] Like, why is it such a big deal? And why is it becoming so popular?

[00:33:21] **Janum:** . I'll start with like why it's becoming popular, ~~uh, ~~especially in the last year, which is, um, SwiftUI just made it a lot easier to, ~~um, ~~take a shader that you wrote and apply it to a SwiftUI view. ~~Um, ~~before it was a process to one, write the shader, but then you had to write like a ton of boilerplate and set up an infrastructure to ~~like, ~~just get it plugged in.

[00:33:40] And that, that was like a huge step that made it, You know, not very fun for people to dabble with. So that's why it got popular. ~~But so like, ~~so what are shaders? Okay. ~~So, ~~shaders are these little programs. That, ~~uh, ~~run on every single pixel on a screen. So if you think about like traditional software, you might say, okay, ~~I want to, ~~I want to create a rectangle that's [00:34:00] a hundred by a hundred points, and I want to put it in the center of the screen.

[00:34:03] And you just like set its position and it's like there. ~~And, and at this point, you know, Um, ~~it's really easy to reason about. ~~Um, ~~it's very quick. ~~The, ~~the issue is that, ~~you know, ~~in some senses you are kind of limited in what you can do with that UI to things that are fundamentally like rectangular in form or some other kind of polygon or shape, right?

[00:34:19] But it's a little bit limited to like what your primitives are. Now, ~~let's say you wanted to create something, ~~let's say you wanted to create some effect, ~~you know, ~~maybe it's like a shimmer effect or ~~like ~~a little ripple or ~~like, you know, ~~the Siri waveform thing, ~~right? ~~These are things that are not easily or really at all expressible in, 2D UI land, right?

[00:34:37] So, so this is where shaders come in. A shader is a little program that you write that, runs. Concurrently on every single pixel on screen, every single frame. And this sounds like really, really crazy, right? And it's like, okay, well, like, how is this like possible? And surely this must be like extraordinarily inefficient.

[00:34:54] the trick here is that, these little shader programs, they actually run on the GPU on your phone or [00:35:00] your computer, and the GPU is really, really good. At running 10,000 of these programs all at the same time, like that's what it's optimized to do, ~~Um, and your shader is kind of, it's, it's asking a very basic question of you.~~

[00:35:09] It's saying, Hey, I'm a pixel at this coordinate. What color should I be? ? So, ~~I could say ~~I could draw that same box in a shader, right? And it would look something like, okay, ~~uh, ~~I am a particular point. Am I within this? Box, if so, return blue, otherwise return black, right? That's a very simple shader.

[00:35:28] ~~Uh, ~~it kind of illustrates this question of the shader is coming from the perspective of the pixel, which is a really weird thing to kind of invert your thinking, What it lets you do is like really, really crazy visual effects because you are now.

[00:35:42] Operating on individual pixels and ~~you can, you can do all sorts of insane, like completely insane things, right? Yeah, sure, ~~you can do ripples and shimmers and things like that. ~~You know, you, you can also like, ~~you can also, ~~um, ~~I have one little example that, it's one of my demos. ~~Um, you know, ~~for people that ~~like ~~actually are good at shaders and have done this for a long time, this will not be too impressive for you.

[00:35:55] But ~~like, you know, ~~I made this ~~like ~~little example lock screen that it's just ~~like ~~little mountain [00:36:00] terrain thing, right? And I can kind of pan around. ~~Um, ~~this is not a video or like some pre built asset that all the mountains themselves are, that's all in one shader. There is one shader that's saying, ~~I am a, ~~I am a pixel.

[00:36:12] At this position, what color should I be? And it turns out you can do like a bunch of like absolutely crazy math called, if anyone's interested for some reason, they're called SDFs, sign, distance fields, or functions. And you can, you can literally create 3d terrains, ~~so, ~~so video games have been doing this for like forever, right?

[00:36:30] And all the video games that you play, those are all shaders. They are much more new in kind of like UI design land because, ~~you know, ~~You know, I mean, the learning curve is. I would say substantially more difficult, but, I think maybe a good exercise to like anyone engineers or designers that are interested in playing around with this a little bit.

[00:36:47] It's like, ~~draw, you know, take, ~~take some random ~~like ~~JPEG image, put it on screen. And then apply a shader on it and even just ~~like ~~try to tweak ~~like ~~the red value of it or something like that, right? Or just ~~like, you know, ~~write ~~like ~~some simple one line changes the [00:37:00] base color. ~~Um, another, ~~another resource that we should put into the show notes is, ~~um, ~~the site called thebookofshaders.

[00:37:04] com. That's a very good interactive tutorial that's ~~like ~~really accessible to anyone, ~~um, that, ~~that kind of helps you understand this stuff. 

[00:37:11] **Ridd:** Well, you just easily doubled my own understanding of shaders. So thank you. That was, that was quite comprehensive and appreciated. You talked a little bit about some of these demos. I mean, I did actually, I looked at the 3D mountain landscape background. I'm just mind blowing.

[00:37:25] Can you share a little bit more about some of the things that you're exploring and all these little passion projects and demos that you're working on?

[00:37:30] **Janum:** I often find myself thinking of like random, interesting UI interactions or animations or something. And I'm like, Oh, like, wouldn't it be cool if like that existed? Like, how would that work?

[00:37:41] How would that feel? ~~Um, and so I'm like, okay, well. Maybe I should just build it. ~~So ~~I have this, like, ~~I have this like little wave demos project that it's like probably a collection of like, ~~you know, ~~30 or 40 different demos that I've created over the years of just, ~~you know, ~~totally random ideas. ~~Um, I, and ~~I have this ~~like ~~really, really long running dock of, it's kind of my, ~~like ~~dumping ground for ~~like ~~all of these ideas ~~that I, ~~that just ~~come, ~~come to me and ~~I'll, ~~I'll take down and, ~~um, ~~I make some [00:38:00] small portion of it and then.

[00:38:01] Some small portion of the things that I make are like actually good, you know, so some of those I'll post, ~~but there's a lot of like junk, ~~but making junk ~~is kind of, ~~is kind of part of the process, right? ~~Some, some, ~~some of the times ~~there, you know, ~~there are things like, Oh, I see some other piece of software did this really wild UI effect.

[00:38:15] how did they do that? technically, like, how is that even possible? ~~what, ~~what's happening there? ~~Um, you know, ~~I remember one good example of this was ~~like when the, uh, ~~when the dynamic island came out, ~~right? ~~And when the dynamic island kind of splits into those two balls using that ~~like ~~meta ball animation, I was like, that is just ridiculous.

[00:38:30] That, that's fresh and new and I have no idea how to build it. And again, that doesn't fall under the rectangle paradigm, And so, you know, I did a bunch of research. I was like, Oh, this is that same kind of thing. Signed distance functions and I can maybe do this in a shader. And so I made a little metaball demo and then I was like, Oh, I can make these balls draggable and I could throw them around and inject velocity into it.

[00:38:53] So, ~~so a lot of them are also, ~~have a vague idea of ~~vaguely ~~where I want to go, or I have some ~~like ~~kernel of an idea. And then as I'm building it, I'll just [00:39:00] be like, Oh, ~~wouldn't it? Like, ~~what if I just tried this? Wouldn't it be cool if it did that? And it just ~~like ~~becomes something else.

[00:39:04] ~~Um, and, uh, some of, you know, ~~some of them work out and, ~~uh, you know, ~~a lot of them don't. But they are all fundamentally ideas or concepts that like nerd sniped me in some sense. ~~Right. ~~They were ideas that I couldn't not build. Otherwise, ~~like ~~it would ~~like ~~affect my sleep. ~~Right.~~

[00:39:16] **Ridd:** , the phrase rectangle paradigm is kind of buzzing in my brain right now because in some ways it's like there's safety in that as a designer who has basically built a career in the rectangle paradigm, right? There are constraints and bumpers and things are predictable and everything is a box and a box and a box.

[00:39:36] And man, when I first saw Dynamic Island demo. That day that it just took over Twitter. It was a humbling, ~~like, ~~like deeply humbling where it's like, Oh my gosh. I mean, that is just so far outside of my personal playground where all of a sudden it's like, geez, like literally anything is possible. Like I can think of anything, the bar for [00:40:00] creativity and the execution to math is so much higher than when you're just drawing rectangles instead of rectangles.

[00:40:06] **Janum:** Yeah. I think shaders kind of in a lot of ways, ~~they're, they're like the, ~~they're like the final frontier and UI development, right. It's like the ultimate escape hatch that you are no longer limited by ~~like ~~anything Your framework or design system or software library gives you, you are just given this canvas and it is fully up to you to figure out what to do with it.

[00:40:25] **Ridd:** Do you have any thoughts on cursor and some of these new tools that are coming out? Like how much are you making use of AI even in this process? Because I'm, ~~you know, ~~scrolling Twitter, especially over the last ~~like ~~four or five days, and it's like every single time I open up some designer is shipping some awesome piece of code that was previously not possible.

[00:40:43] ~~And my FOMO is just growing and growing. ~~So I'm wondering you as someone with a little bit more of an engineering background, what's your take on what's happening in the landscape right now?

[00:40:50] **Janum:** I don't use like cursor. I don't, I don't have any of these, like, I don't know, copilot, extensions or anything like that. They seem like pretty helpful in terms of, Making writing boilerplate a lot quicker. I, I think it [00:41:00] also goes a long way in, ~~um, ~~helping people like understand new concepts, ~~um, ~~having like a little bit of like a personal tutor to point you in the general direction of, what do I need to do here? So, I mean, I think that's, I think that's fantastic, right? I'm in support of anything that kind of like makes it easier for people to like learn and create on their own.

[00:41:17] **Ridd:** It makes me wonder how low we can push the technical requirements in order to express yourself through shaders, because that's just such an interesting world to imagine. Like how accessible can we make it where I wonder if someday in the maybe not as distant future as we might think people anywhere with a little bit of technical know how could like, Make software that is inherently art.

[00:41:45] ~~You know, that's like, ~~that's a world that gets me excited to think about.

[00:41:47] **Janum:** A little bit you see this in the game development industry where, ~~you know, ~~they're writing shaders all day but they actually don't write, ~~like, ~~lines of shader code, they actually have, ~~um, ~~these, ~~uh, ~~programs that, ~~uh, ~~are actually pretty similar to, ~~like, ~~how origami works.

[00:41:58] They're these, ~~like, ~~node [00:42:00] based shader editors that you have some inputs and you feed it into this node and do something else in the shader and, ~~uh, ~~eventually all of that does get baked into a shader behind the scenes. But, ~~you know, I think that's, like, you know, ~~I think that, ~~you know, ~~lowers that barrier a lot, too.

[00:42:12] ~~Um, you know, I, I, I think largely, I think ~~if you're a designer and ~~you're kind of, ~~you're kind of interested in ~~like ~~bringing some of your own ideas to life, ~~um, ~~and ~~kind of ~~move up on the fidelity spectrum, realistically, I probably wouldn't start with shaders. ~~I think ~~I think that's like, maybe a decent way to, ~~like, ~~freak yourself out, you know, like, ~~I ~~take ~~like ~~a couple, ~~like, ~~baby steps ~~before, ~~before jumping into that.

[00:42:27] Yeah. ~~Um, ~~but ~~you know, ~~it is there as like a final boss for when you're ready.


## [00:42:30] How designers can develop Janum's skillset

[00:42:30] **Ridd:** Okay. So let's zoom out really quickly. And before I let you go, that actually tees up the last question that I wanted to ask you kind of perfectly, because I think right now a lot of people. Are able to clearly see the two potential learning journeys. You have design, you learn this, then this, then this, then this.

[00:42:49] And you have engineering. And it's like, if you look up any blog posts about how to learn engineering, it's like, well, you learn HTML, then you learn CSS, then you learn JavaScript. And then maybe you can start getting into frameworks. And I look at [00:43:00] your role and you really have created this very interesting Niche, kind of in between the two ~~where you have a foot coming.~~

[00:43:06] Yeah, technically you're in engineering right now, but you're doing a lot of design work and everything that you're working on is inherently visual. So for someone that's listening to this and they're inspired by your journey and they want to think about. learning path that they can chart for themselves to help get to this more specialized role where, yeah, maybe they're not actually contributing production code, but they want to be able to do these really interesting animations.

[00:43:32] So how do you think about that first set of steps that they could take in order to get to where you are today? ~~Yeah,~~


## [00:43:38] Marker

[00:43:38] **Janum:** My recommendation ~~is like, ~~is you just got to start building stuff, ~~right? ~~You got to start by building something ~~like really, ~~really, really simple. ~~Right. ~~Can I just get ~~like ~~a box on screen? ~~Right. ~~And then, okay. Can I ~~tap a button? ~~Tap the screen to have it move over there, ~~right? Like ~~just snowballing ~~tiny, ~~tiny bits and learning as you go.

[00:43:53] ~~think, I ~~especially for this kind of ~~like ~~engineering fluid UI, like, I don't know what, whatever it is that I do. ~~Like, there's no, ~~there's no laid [00:44:00] out path for it. There are no courses for it. A lot of that knowledge is Kind of discovered along the way or through some ~~like, you know, ~~accidental apprenticeship, ~~the ~~I think the most effective and honestly, the ~~only thing that you can ~~only thing that you can do is, ~~I mean, ~~just start building things, right?

[00:44:13] Like, whether that's, you know, getting started with Swift UI. And, you know, seeing some kind of interesting demo and then ~~trying to ~~trying to break apart the anatomy of like what it is that you're seeing on screen. Oh, I see this piece moving here. This thing changes color. This thing fades out and just slowly trying to like layer one, ~~you know, each each, you know, ~~each piece.

[00:44:31] Bit by bit ~~and, uh, ~~and learning on the way. And then, ~~you know, um, ~~you know, I think, especially if you're coming in from the design side and you want to start, ~~you know, ~~bringing these things to life, ~~I think you're going to have, um, ~~I think you're going to have like the eye or glass problem. ~~Like, ~~and if you're not familiar, there's a, ~~there's a, you know, I would ask for this like incredible, like ~~little essay called, ~~um, like ~~on taste.

[00:44:45] ~~And ~~he essentially talks about how, ~~you know, ~~you get into doing something. Because you have good taste, ~~you know, what, ~~you know, what good things look like ~~and, and, ~~and feel like, but ~~your, ~~your execution skills are ~~like, ~~not quite there. ~~Right. ~~And ~~as, as, ~~as designers, ~~like, you know, ~~that sense is ~~like ~~honed to ~~like ~~10 X.

[00:44:59] [00:45:00] Right. So you're going to make stuff that is really, really bad, but the process of looking at what you made. Trying to understand what feels bad about it and then trying to like research and tweak and tune things to make it feel slightly less bad ~~over and ~~over and over again, that is the journey of making world class software.

[00:45:19] ~~Um, ~~and it is also not enough to make something that you're like, yeah, this is a decent approximation and stop there. It's like, no, like ~~half the, ~~half the value is in that like last 10%. ~~All those, like, ~~all those fine details, right?

[00:45:28] Because ~~I think, ~~I think if you're willing to get your hands dirty ~~and, ~~and write some code, you might as well use that superpower to get those details actually right. and it's a journey, but I think it's one that people can do.

[00:45:40] **Ridd:** awesome. Well, I'm sure that people listening are as inspired as I am. So Jonathan, thank you for coming on and just giving a glimpse into this type of role ~~that ~~It's so interesting. Like there's not as you said, there's not like clear, like playbooks or courses. Like, I don't even know if a lot of people even understand the type of role that you're in and

[00:45:59] **Janum:** I'm [00:46:00] not even sure I do.

[00:46:01] **Ridd:** I, you know, I, I wasn't going to say it.

[00:46:03] You said it, not me, but you keep giving like four adjectives for what the role is, and I think it pretty much is a microcosm of the entire industry, even at this point, but if I had to bet on a subset of. software and tech growing, it is this. And so I'm really, really grateful that you came on and shared a little bit about your journey and the types of things that you're exploring and you even taught us about shaders.

[00:46:29] So thank you very much for your time.

[00:46:31] **Janum:** ~~of course, yeah. Thanks, ~~thanks so much for having me, Rid.

