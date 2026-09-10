---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: K71v8otC11s
slug: 2025-07-18-gunnar-gray
source_type: descript
source: https://web.descript.com/223f9e26-0b21-416f-9369-4e4aadcfb6ad/044e8
guest: Gunnar Gray
host: Ridd
title: "Designing Perplexity, shaders + voice interfaces"
published: 2025-07-18
duration_min: 54
generated: 2026-09-10
generator: dive-club-ideas
---

## [00:00:00] Joining Perplexity

[00:00:00] **Gunnar:** When I first joined at Perplexity, I was brought on to lead mobile design. So that was, right in my wheelhouse.

[00:00:08] **Gunnar:** And I joined the team as like the only mobile designer. and then was, immediately just like dumped into the, the fire, the fire hose there. And, there was a lot of like different moving tracks of work and, it was already like a pretty good working mobile app, but there was still a lot of work to be done in terms of, refining certain areas and then scaling new areas like the Discover Feed for example.

[00:00:34] **Gunnar:** That was one of the first things that I, I worked on and sort of redesigned, uh, right when I started.

[00:00:42] **Rid:** You mentioned the fire. Can you talk little more about that? What was life like in those first few months? Give us a sense of What it's like being a designer at Perplexity in the early days in the midst of all that scale.

[00:00:53] **Gunnar:** Yeah, I mean, everything was just moving so fast and the team was still very small. I think I was the third or fourth [00:01:00] designer on the team, including brand. So, everyone was doing a lot of different things at that time. And, the, the shipping velocity was just going so fast too. So every week felt like something new was shipping and you're just trying to like, catch the moving train, when you hop in there.

[00:01:19] **Gunnar:** So, you know, getting thrown into the deep end and, and figuring it out and making it work, I feel like that was the best way to really get started. There wasn't really much onboarding. It was sort of just like, pick up, jump in, Figma. You know, understand what we're doing and working on and just, just go. So it was, it was important just to pick up quick and start contributing fast, and not like dwell on, you know, getting ramped up or learning too much.

[00:01:45] **Gunnar:** Like just sort of learning as you go. Learning how the team is working, learning how we're shipping, learning more about the ins and outs of the product itself too.

[00:01:54] **Rid:** Can you go a little bit deeper about what those early contributions were? Like? You get in there, there's this pace, [00:02:00] it's hardly even an onboarding. It's like, Hey, start shipping, kind of thing. How did you as a designer then identify the ways that you wanted to make an impact on a product that did already have a lot of, you know, functionality?

[00:02:11] **Rid:** There was a baseline that already existed.

[00:02:13] **Gunnar:** Yeah, it certainly had strong foundations. So I was sort of just auditing and assessing the, the product and figuring out like where we could start, refining things or spotting inconsistencies and just starting to, in my own head, kind of form a, a design system and a design language to better define and roll out.

[00:02:37] **Gunnar:** so that was one thing I was looking at. And then, to make it a little bit easier to digest, one of the first things I did was just redesign, like the settings view. Uh,

[00:02:48] **Rid:** perfect first step.

[00:02:49] **Gunnar:** yeah, I mean, you understand like everything, the product has all the settings and preferences, and you can then just sort of redesign in this, in this sort of [00:03:00] isolated area first.

[00:03:01] **Gunnar:** Where you're not touching the full product. Uh, so that was sort of a nice start into things. and then we just ramped up on the Discover feed and that was also really helpful because it was sort of like a new zero to one project. we were totally redesigning the thing. we had new ways of creating content and we wanted to create a more immersive, new experience for, engaging with that content and consuming it.

[00:03:28] **Gunnar:** And that was nice because we didn't have to work too much within the constraints of the current product or any of the current patterns. We got to then create new patterns and new paradigms, uh, that we wanted to use for Discover. 


## [00:03:43] Gunnar's background at Artifact

[00:03:43] **Rid:** Maybe even for quick context for people listening, can you talk a little bit about artifacts, the role you were at before and, and how much crossover was there with the types of things that you were designing?

[00:03:54] **Gunnar:** Yeah. So at Artifact, I was brought on as a founding designer. This was six months [00:04:00] away from going to market and starting to, really define the brand for the product

[00:04:06] **Rid:** tell people listening, who the founders were, just for people unfamiliar with it 'cause it's pretty cool.

[00:04:11] **Gunnar:** yeah. So Artifact was founded by, uh, Kevin Strom and Mike Krieger, the Instagram founders. So it was really cool to be able to come into their, and like. Work with them and learn from them and see how they work. I mean, they were in the work all day, every day, um, coding and building. So it was so like freeing to come in and, and have that opportunity to just build alongside them, and then help them further shape the design of artifact and work in the brand and sort of identify like what we wanted to bring to market first.

[00:04:48] **Rid:** And there was an AI component to that too, right?

[00:04:51] **Gunnar:** I feel like AI and, and chat GPT really started taking off like a few months into artifact when I joined. [00:05:00] So a lot of what they were doing was, Building all the machine learning and personalization for content discovery. And then AI started coming into the picture and it was like, now you can do all of these new things like summarizing content, changing the summary styles, reformatting or like rewriting headlines actually.

[00:05:21] **Gunnar:** So avoiding clickbait by rewriting better headlines that, that are a little more clear and valuable. So that, that all started like ramping up really quick and we, we jumped on that and started exploring all the ways we could use it and how we would want that to show up in artifact. So it was super fun to work with those like early day ideas and, and the technology there.


## [00:05:45] Designing AI experiences

[00:05:45] **Rid:** I mean, if you were working on anything AI related, especially in consumer back in 2022, that's kind of og, which is funny to say, but you know, like that's pretty early days. So maybe we could talk at a high level to start [00:06:00] about the different ways that designing AI experiences has shaped the way that you approach your practice as a designer.

[00:06:08] **Gunnar:** I think the first thing is just, uh, a mindset shift. Like I think of, or AI native products as, as a new medium to design and build for, and, and what those differences are from like, the way we used to build products and thinking about sort of what does, what does this AI medium mean?

[00:06:27] **Gunnar:** now we have outcome driven interactions where you can just state what you want and the system is gonna handle it. it's very much context aware. , So the systems will dynamically adjust based on your, you know, your requests or asks and in a totally non-deterministic way. So it's very.

[00:06:47] **Gunnar:** Very fluid in that sense. And then it's also very multimodal. So I think voice becomes very important, in an AI context as we think of voice interfaces and conversations [00:07:00] and voice assistance and things like that. So I think there's some newer foundations to understand in the medium that you're working with, to better design those outputs.

[00:07:09] **Gunnar:** so there's like the foundational level of that. and then there's also the, the process for designing those outcomes. So Previously, it just felt very, very static from a design standpoint in, in my world at least, where you would spend a lot of time in Figma and you would do a lot of work upfront to then start building and shipping.

[00:07:34] **Gunnar:** But since joining artifacts, since joining Perplexity, being on an in-house kind of scrappy startup team, it's so much more of a dynamic environment and there's such a blurry line between design and engineering now where sometimes design is setting the vision or sometimes engineering is showing what's possible, and you [00:08:00] need to be so close to those.

[00:08:02] **Gunnar:** Inputs and outputs that like it almost starts to feel silly working in such a static environment where you wanna get working software as fast as possible and you wanna be able to see those outputs and understand what those are in order to kind of shape those and, and form them however you want.

[00:08:22] **Gunnar:** So you really need to be super close, like designing and building at the same time. I think that's one thing at perplexity where we, we try to get working software as soon as possible so we can learn much faster. 'cause AI has like totally increased the, the number of reps you can get on, on a problem and as you iterate through a problem.

[00:08:44] **Gunnar:** So I feel like there's such a tighter, feedback loop there. it's much faster to come to conclusions where you don't wanna sit around too long or like dwell on ideas or designs. You just want to do whatever you need to do to get something [00:09:00] working and then refine it from there.

[00:09:01] **Rid:** Is there some kind of an example from something that you've shipped? Maybe it's a discover, maybe it's something else where we could really go deep into how you all collaborate as a team within this bucket of an opportunity or a problem you're trying to solve or a feature you're trying to release. And I really wanna understand where you insert yourself in that process, how you collaborate with engineers, how the output even evolves over time.

[00:09:26] **Rid:** I, I feel like there's a lot to dig in there, so I'm wondering if there's an example we could point to.

[00:09:30] **Gunnar:** a good example of, that way of working is probably with our voice features, both our, our Android voice assistant, but also the voice mode on iOS. so that was a project that it went through many iterations and, I think that it was so back and forth in like testing and experimenting to truly understand what outputs you were dealing with and like how the, the actual prompting was working to get [00:10:00] those outputs, how fast it felt and what the performance was like, and, and how accurate it was too.

[00:10:07] **Gunnar:** and then also just like uncovering. All of the different use cases and all of the different scenarios that you could run into with voice. because it's so dynamic, it could go any which way. So that was something that was, you know, we, we designed like kind of the core shell interface, but it became much more of a, a system to define in terms of like the, the back and forth voice and how you're interacting with voice and accounting for all of those, the different states you could be in.


## [00:10:40] Designing voice interfaces

[00:10:40] **Rid:** can you talk more about the role that you as a designer play when you're shaping what this voice interaction should become when there's really not that many pixels involved?

[00:10:50] **Gunnar:** I think my role on voice mode, specifically was more about crafting the system and accounting for all of the different states you [00:11:00] might be in, where virtually there's very minimal interface to it, but there's so much feedback and interaction to, to design, even though the interface is fairly minimal.

[00:11:11] **Gunnar:** So, one thing I did was first just try to understand all of the interactions and what sort of patterns we could map to that. So when you think about voice, you're, you're gonna have a few different states. You're gonna have a connecting state before it's actually active. you're gonna have a listening state.

[00:11:31] **Gunnar:** You're gonna have a response state, you're gonna have an end state. when you stop talking, what is that moment like? How, how do you know that the system knows that you're done talking too? So there's all these little interaction details, that are really the core UI elements of that experience.

[00:11:50] **Gunnar:** so when I, you know, came into the project and started thinking about it more, I, I kind of went into defining those different states, knowing that those are pretty [00:12:00] crucial to, to the experience. And if you don't have that feedback from the system, if you don't understand what's going on, if you don't know those cues, it feels very, confusing and you're not really sure how it's working or if it's working at all.

[00:12:14] **Rid:** I'm gonna go really deep and nerdy here, and it's gonna be for selfish reasons because I'm literally working on this right now. Like yesterday, I was having all kinds of back and forths with ai, trying to figure out different states and patterns, and trying to create some kind of a blueprint that I could give to engineers to help refine this underlying conversational system that we're working on for inflight.

[00:12:40] **Rid:** So you've already figured out a little bit about this, so I'm just going to get kind of deep here for a second. when you're collaborating with engineers on a voice-based product, what are the very specific deliverables that you are bringing to the table and what are you then doing to figure out what [00:13:00] those should be when there's not as much of a playbook and refine and iterate on those in a way that is helpful?

[00:13:06] **Gunnar:** I think that's a perfect example of the way that design and engineering work so closely together, because design can lead a vision, but also engineering can show what's possible. So it's really about getting the working demos as soon as possible and starting to just play with it and understand.

[00:13:29] **Gunnar:** How it's responding and using it in real context as well. So I think it's pretty easy to fall into the trap of like ideal context and ideal use cases where everything just works and you have the obvious states down and you're like, this is exactly how you're gonna step through it. But to actually use it in practice and to use it, on the daily for yourself, like as you want to ask questions or, how you [00:14:00] want to interact with it.

[00:14:01] **Gunnar:** actually using it from the standpoint of like real use and real problems. You have, you start to kind of see those little edge cases or like nooks and crannies and, and how it's really feeling and, and also understanding how fast it's feeling too, because that's a super important thing for boys.

[00:14:18] **Gunnar:** So. I feel like for both voice mode, but also the voice assistant on Android, that goes even deeper because you can do so many more things on, on the Android assistant where it can interface with other apps. It can pull up websites, it can do tasks for you. And there's so many little things that can happen during that process.

[00:14:39] **Gunnar:** so we're really both relying on, on engineering to show us where those moments are and how it's really working, but also really testing it out ourselves and identifying those uses as we go, or those problems or those edge cases, if that makes sense.

[00:14:57] **Rid:** it, it totally does. And I get now like, [00:15:00] the importance of racing to get something in code that you can play with, especially for voice, is so important because, there's only so much you can do as the designer without using this thing. Figuring out where it falls down. Maybe then you're saying, Hey, it fell down here.

[00:15:14] **Rid:** I would've expected this to happen. Maybe this is how we could set up this ideal use case. And then you're giving that back to engineers and just having that loop. I would imagine you probably had many, many of those refinement touchpoint.

[00:15:25] **Gunnar:** yeah. Yeah, exactly. Or, or if you're asking it to do a task and you realize halfway through it, you're like, oh, this would actually be really cool here, or this would be really helpful to do in this context. Like it's really about going through those motions to uncover all of those little moments.


## [00:15:43] Learning with Perplexity voice mode

[00:15:43] **Rid:** Have I told you about my weird personal use case for voice mode and perplexity?

[00:15:47] **Gunnar:** Uh, no, I don't think so.

[00:15:49] **Rid:** Okay, so I do the dishes, right? That's like my kind of nightly routine. I put the baby down, I do the dishes, and I throw in AirPods. I open up voice [00:16:00] mode and perplexity has actually stolen a little bit from my podcast consumption because I just pick a topic that I wanna riff on and I ask a question, and then it turns in this rabbit trail.

[00:16:12] **Rid:** And I'll end up just talking to your voice mode for like 40 minutes while doing dishes. And I'll just go down the craziest conversational paths. it's one of the main ways that I learn right now,

[00:16:22] **Gunnar:** Mm-hmm. Yeah. That's so cool. I've, I've heard others use it that way as well. it's such a great thing to have that passive, conversation where you don't have to be at your keyboard. You don't have to be at a computer. You don't have to be looking at your screen.

[00:16:36] **Gunnar:** You can just be riffing, like hands free. And, and that's always been the goal of voice mode, as well. And we're, we're, we're, we're pretty much, you know, there now with the hands free experience. It wasn't always like that. You had to

[00:16:50] **Rid:** You. You had the big orange button.

[00:16:52] **Gunnar:** big orange

[00:16:53] **Rid:** Okay, let's talk about that for a second then. When you first joined, did V one of voice mode already exist in the mobile app?

[00:16:59] **Gunnar:** [00:17:00] Yeah, V one, it did exist. I believe it was like a little half sheet that came up. It just kind of overlayed the home view and

[00:17:08] **Rid:** so the orange button is not V one.

[00:17:10] **Gunnar:** no, so it's actually, it's V two, we have three versions of voice

[00:17:14] **Rid:** I didn't know that. Okay.

[00:17:15] **Gunnar:** So I like, I honestly kind of forgot about the first version where we

[00:17:19] **Rid:** never even saw it. Yeah.

[00:17:21] **Gunnar:** yeah, it was, it was like, feels like so long ago now, but the first, yeah, it was like a little half sheet.

[00:17:27] **Gunnar:** We had this little like, sign wave visualizer. It was done before I had joined. I believe that was also like a push to talk. It was using a whole different, API and, and that, so I, I don't know the full ins and outs of like that first, first iteration,

[00:17:43] **Rid:** you went zero to one on the orange button flow though, like that was your visual direction. Talk to me a little bit about that then, because I understand all of the reasons why you did the V two and the hands free and it's beautiful. But there was something also so [00:18:00] unique from even just a UI perspective on that second version that I definitely love.

[00:18:05] **Rid:** So I would love to talk about it and kind of get some of the story and maybe we can even talk about just at a high level, how this feature has evolved from a design standpoint.

[00:18:13] **Gunnar:** that second version of voice mode, we knew it wasn't the end game, but we had to get something out to market, something that worked, something that was still like, pretty good, uh, even though it didn't have all the interactions we wanted. So we used that, that push to to talk button was, uh, you know, somewhat of a hedge because. There were issues with the, the latency of voice and that ask to response time. you didn't always know like when the model would finish or if it knew you were done talking. if we were trying to do the hands free mode, it would either interrupt you too early or you would finish and there was like a really long pause before it detected you were done.[00:19:00] 

[00:19:00] **Gunnar:** So by introducing, uh, the push to talk button, it actually made it feel much faster and kind of gave it this tactile experience. We had haptics and sound to it, so, even though it was somewhat of a hedge, we still wanted to make it feel very. Delightful. And we wanted to make it feel good to interact with.

[00:19:17] **Gunnar:** So it made it faster because you knew when you were finished and you were able to signal when you were done by just releasing the button. so that alone just made it feel a little bit faster and then, you know, the whole response flow could, could kick in right after that. 

[00:19:34] **Rid:** let's talk about the button for a second, because not many people, I mean, definitely not myself. Like I've never designed an interface where like pretty much the entire interface is one button.

[00:19:44] **Gunnar:** Yeah.

[00:19:44] **Rid:** be a damn good button if there's one button and that's the entire ui. So how many things did you explore?

[00:19:49] **Rid:** How'd you arrive at the arc direction for that page?

[00:19:52] **Gunnar:** knowing we had a big, big button on the page, we're like, we gotta make this the best looking thing or like the most fun to [00:20:00] interact with. So really leaning into sound and haptics and just like a new visual accent that looked a little bit different from the rest of the product.

[00:20:10] **Gunnar:** So you felt like this is sort of its own special thing or its own special entity that like this, you know, this is different. And, the rest of the interface, was built on this idea of this adaptive and dynamic like grid visualization. So we had this like full screen dot grid and we wanted to use that because it was a way to.

[00:20:36] **Gunnar:** Take up the full screen and really build in more like visual feedback mechanisms so we could animate all the dots in different ways, depending on the state you were in for, whether it was listening to you, when it was loading, when it was responding to you, which then we had like streaming text coming in and images.

[00:20:57] **Gunnar:** that was sort of the foundational system we wanted to [00:21:00] use for feedback and communicating what the system was doing. And it allowed us to do that in cool, interesting ways with like the patterns and, and the color, uh, and made it feel, you know, a little bit more immersive for, for a voice mode, whether you wanted to look at the screen or not.

[00:21:16] **Gunnar:** it was, it was there if you needed it.


## [00:21:18] Designing V3 of voice mode in Perplexity

[00:21:18] **Rid:** Okay, so then now let's move on to V three. There's the technological jump where y'all get to the point where you're like, okay, the hands-free mode feels attainable. Now you're kind of given this blank slate, apparently, because it looks very different than what you had. So how did you think about the right visual accompaniments to.

[00:21:39] **Rid:** Whatever this real time voice interaction could become.

[00:21:42] **Gunnar:** Mm-hmm. Yeah. Yeah, real time really changed it. So it, it changed it in that it was so much faster and it was so much direct. So you were able to go from ask to answer, almost instantly. And the, the previous version of this, like big full [00:22:00] screen visualizer, it was gonna feel a little bit jarring maybe, in, in how fast it could sort of move.

[00:22:05] **Gunnar:** So we, we looked at. A few different versions and like jumping into tools like cursor to spin up some metal shaders to see like what we could do within that environment and how, what sort of interesting visualizers we could make to help communicate that system feedback or those different states. And, we did some exploration with the grid, but again, it was almost like taking up too much surface area for what we wanted.

[00:22:34] **Gunnar:** and then I ended up landing on this like particle sphere visualizer with, with metal shaders. And that instantly felt like the perfect form factor for voice because it could sort of shapeshift in many different ways depending on the state you're in. And it was a very, focused entity on the screen, it could shape in different ways that were like, drastically different too.

[00:22:59] **Gunnar:** It could [00:23:00] be like a full circle sphere or it could be more of like a ring visualization. So having that contrast between the different states just felt right. and then layering in more and more, um, like color, like different colors for asking or listening and a different color for the response. just the way it could sort of move and shift around felt really, really dynamic and natural and, and a little bit softer than like the full screen grid experience that we used to have.

[00:23:31] **Gunnar:** So I think that lended itself really well to, to voice and, and the real time of function and it really worked well when we got into. Transitioning between more states. So we introduced more assistance and like tasks, so you could have voice mode bring up actionable widgets for you. booking restaurants, playing podcasts, playing YouTube, looking [00:24:00] up places, all, all sorts of different use cases.

[00:24:03] **Gunnar:** And you could really see this particle orb, sort of transition between the states where it kind of like moves down lower and it's a little deemphasized so that other information could take over and have a clean surface to do so. so it really felt like the right pattern. And then it was about really dialing it in on like the metal shaders and working with production to get that in and actually like hooked up to voice.

[00:24:29] **Gunnar:** So it was my first sort of. Intro into actually jumping into code and prototyping and making something useful that engineering could roll with and roll it into production.

[00:24:42] **Rid:** Were you doing explorations with shaders?

[00:24:45] **Gunnar:** Yeah. Mm-hmm.

[00:24:46] **Rid:** Talk to me a little bit about that process.


## [00:24:48] Learning shaders in Cursor 

[00:24:48] **Gunnar:** it, it felt so empowering to be able to, I, I feel like tools like Cursor have just totally lowered the barrier to entry for anyone who hasn't coded or [00:25:00] wants to learn how to code or learn prototyping more. that barrier is so low now and it felt really empowering to be able to just open up cursor and not only prompt it to do things, but also have it explained to you like what was happening.

[00:25:16] **Gunnar:** So using it as a learning mechanism, like instead of going out and trying to find a bunch of tutorials on how to build metal shaders. You just ask cursor, build it along with me. But also you could ask questions about, you know, explaining how something is working or giving you a breakdown on what you know, what this does and what that does.

[00:25:39] **Gunnar:** And so you're, you're building, but you're also learning along the way. And I felt like that was a really big unlock for me. and it's something I've continued to use just more and more in, any prototyping context or even like trying to get more into production at Plexity.

[00:25:55] **Rid:** You obviously got hooked too. 'cause I was just looking and you have a little side project now working [00:26:00] with shaders.

[00:26:00] **Gunnar:** Yeah. I'm, I'm hooked man. I'm, I'm always trying to build in, in code now, and I'm trying to get out of Figma as much as I can because I got a little taste of what it's like to. Build in code and I've really seen the advantages there. So it almost feels silly to sit in Figma for too long or like work in a static environment for too long when you could just be prototyping it.


## [00:26:29] Advantages of exploring in code

[00:26:29] **Rid:** What are some of those advantages in your mind? I think we hear a lot about it from a macro perspective, and I see a lot of people that are quick to say, well, of course leaders want us to get more into code because they just wanna pay less people. But as an ic, what are the pros that you see?

[00:26:45] **Gunnar:** Pros are just speed. it's definitely faster, it's easier to work with, it's faster to learn too. So, , really being able to code and feel out the interactions at the same time. Just leads you [00:27:00] to make better choices or understand very quickly if something's not working. And you're also working within the, the bounds of the system as well, and understanding where you can push and where you can pull and where your constraints lie or where those limits are.

[00:27:17] **Gunnar:** so you're not spending too much time dwelling on one solution that you might end up changing anyways as soon as you get to production. So it's really just speeding up that process and that iteration cycle. 

[00:27:31] **Gunnar:** also at the end of the day, you have something working that you can hand off to, and engineering can roll with that, and it saves them a ton of time trying to figure out what you mean by like a static comp or even a prototype because, you have working code at the end of the day and you can then just roll that into production.

[00:27:51] **Gunnar:** They can rewrite some of it, of course, but it's still, it's much more helpful to have like a piece of working software to hand off versus. [00:28:00] Maybe like a video of a prototype or some static comps with notes. Um, so it's really helped the, that engineering collaboration on design as well. I think with the, the shaders, I've done a lot of 3D work and After Effects.

[00:28:15] **Gunnar:** it's something I've just picked up out of curiosity over the last four years. cause I was genuinely interested in how it works and I was inspired by everything you could create and sort of what opportunities that opens. So I, I did think about like 3D and after effects as, a way to prototype the shader experience.

[00:28:37] **Gunnar:** But at the end of the day, I was still thinking like, I can't really hand this off. And it also might not look exactly how I want it to. Like I would better understand how it works in the system. In the environment to start art directing from there. So all the art direction came in just riffing and cursor [00:29:00] on different shader patterns and sort of tuning those and refining those to what was in my head where, certainly could have done it in after effects and, and cinema four D and that, that would've felt more natural to me.

[00:29:13] **Gunnar:** But I wanted it to feel like a more useful artifact. And I wanted to simply just learn too. Like I was just curious how it could work in a metal shader environment in iOS. now we have the, the ability to do that. It just made sense to, to pick up a new tool and, and learn it there.

[00:29:32] **Gunnar:** But e every time I'm, you know, approaching something new, it's really just about like what tool is gonna get the job done the fastest. So like sometimes it's a static mockup, sometimes it's a just one isolated component of something. Other times it's an animated video if, if I really can't like, do that or pull it off in cursor or with, um, a, a different [00:30:00] prototype.

[00:30:00] **Gunnar:** so really I, I see all these tools as just exactly that, just tools in your toolkit and you get to draw from those depending on what you're trying to do. But you should think about like what will be the fastest path forward and, and how to best use those tools.


## [00:30:17] Gunnar's (limited) technical background

[00:30:17] **Rid:** I know you have the video background. How much of a technical background did you have before perplexity?

[00:30:21] **Gunnar:** Not a ton of technical background, at all. So early on when I was doing a little bit of web design, I, I did a little development like H-T-M-L-C-S-S. Little bit of JavaScript, but that's years behind me. I haven't picked that stuff up in a long time. So, I felt very much like I was starting from scratch and especially getting into Swift ui, that's a different, you know, a different language and a different tool and X code.

[00:30:50] **Gunnar:** so yeah, that was all new, but, cursor was really helpful to sort of guide me along the way and, and help me out.

[00:30:58] **Rid:** I was really hoping that was gonna be your [00:31:00] answer, because I think that's like my favorite part of being able to do this podcast is I remember a moment in time simultaneously feels like two weeks and five years ago, so I have no idea when it actually was. But all the AI workflows and tools were coming up and myself, like I'm sure many other people felt this little bit of fomo, a little bit of intimidation, like, oh my gosh, I'm getting left behind.

[00:31:24] **Rid:** All this is so scary. I don't wanna jump into that. And then one by one, I've heard people like yourself come on and share, yeah, I had no idea how to do this thing. And then I was curious, so I just tried it and. You know, now I've shipped this amazing shader interaction to one of the more popular mobile apps in all of tech, you know, and it's so inspiring, especially given your background where man, even just down to the last six months, you can just do things.

[00:31:57] **Gunnar:** Yeah. You, you really can. [00:32:00] I think there's this element of always leading with curiosity, and I think that's sort of led up to that moment. So for, for several years prior, always just playing with tools and experimenting, learning how 3D works, learning how animation and motion works, that all really led up to, to that moment of shaders in voice mode and being able to art, direct them exactly how we wanted because you've already been in other tools doing similar things, so you could better describe what you wanted.

[00:32:33] **Gunnar:** And I think it just goes to show like how much curiosity compounds on itself. And you should always lead with that too, because it'll bring you to, to new places you don't even know about yet. 


## [00:32:45] Power to the generalists

[00:32:45] **Rid:** and it makes sense. I like to think of AI as an amplifier, right? Like if you have the tiniest little seed of know-how in a given area, all of a sudden it's 10 x more valuable. And so when you use that kind of lens, it's very easy to arrive at this [00:33:00] conclusion that especially it's startups, the value of a generalist designer.

[00:33:05] **Rid:** Is unreal, right? Like you can contribute in so many different ways just by having tangential interests to what we think of as the traditional box of product design, and then a curiosity and willingness to try out these different tools and see how AI can help you expand in all of these different directions.

[00:33:27] **Gunnar:** a hundred percent. Yeah, that's exactly right. It's a crazy time.

[00:33:31] **Rid:** How wide is the spectrum of contributions that you're able to make at perplexity?

[00:33:35] **Gunnar:** That's, that's one of the things I love about perplexity is it, it lends itself really well to generalists. and you can flex so many different ways. a lot of our designers are writing code. some of them are more design and engineering built.

[00:33:52] **Gunnar:** Some of 'em are more product and brand built. So you have these really kind of cool different [00:34:00] spectrums of designers across the team. And I think we have a lot of flexibility to sort of do what we want and what makes sense for any given task we're working on. And I think how that's showed up for me, and one thing I've really appreciated is that ability to not only work on product, but also help.

[00:34:21] **Gunnar:** Bridge the brand world into that and contribute to some of the brand side of the work too. So for, say, for example, we're launching, features for the mobile app, like I would often end up doing the marketing for those and the show reel, like making, show reels and demos of those features and being able to animate and present those in the ways that we felt best communicated those features.

[00:34:49] **Gunnar:** So you're able to sort of cross into brand and marketing. And then the other way around is working more brand into product even understanding what it means to [00:35:00] have brand in your product and how you think about it. I think a lot of that has sort of been eyeopening for me too.


## [00:35:06] Implementing brand into product

[00:35:06] **Rid:** can we go deeper on what it means to you to successfully integrate the Perplexity brand into the mobile app specifically?

[00:35:13] **Gunnar:** yeah. When it comes to implementing brand into product, the way I see it is I think of brand and product a lot. Just about how the product keeps its promises, um, in, in non-obvious ways. So of course there's visual identity and there's tone of the product, and there's visual branding elements in the product.

[00:35:34] **Gunnar:** But at the end of the day, like how is the product delivering on its value? How is it keeping those promises? And I think perplexity does that in a few different ways.

[00:35:44] **Gunnar:** There's also just the, the brand is very curiosity driven. So how do you evoke more curiosity? How do you bring that feeling into the product? And you could see that via the follow ups. which, which was another idea that [00:36:00] was founded on in perplexity was all of the f follow up questions where you could just go down rabbit holes.

[00:36:07] **Gunnar:** And it's also kind of training you to ask better questions, to ask questions that you hadn't thought of. these are all the different ways I think of, of working brand and product that maybe not be so obvious, or like different from just a visual layer that you might think of.

[00:36:23] **Rid:** I'm working on a lot of similar product challenges right now, and one of the things I'm really wrestling with is the value of the follow-up questions, like the text-based follow-up questions and how to recreate some of that feeling voice mode because it's so powerful being able to get the array of options and be like, wow, I wouldn't have thought about that.

[00:36:43] **Rid:** And, and widening the array of responses that an AI can give. There's a lot of fun design challenges in there.

[00:36:51] **Gunnar:** it's been such a, such a novel thing. And to do it, we've thought about how to do it in a voice context as well. like [00:37:00] do we use the, the visual surface for that as like quick actions or do we actually work it into the, the prompt itself? So it would prompt you at the end with like other questions.

[00:37:13] **Gunnar:** but then there's also trade offs with that, because. You want it to feel very fast and concise at the same point. So I don't think we've totally nailed it in voice

[00:37:23] **Rid:** it's, it's tricky. Like I was literally yesterday spending hours with GPT going back on these simulations and trying to think about almost creating a subtle conversational fork with each response where it's like, here's your path to go deeper, and then here's your exit ramp if you want to go somewhere else.

[00:37:42] **Rid:** And how quickly can you give two paths conversationally in a voice interaction? I don't know. I had this moment of, man, I've been doing this for hours. It feels like design. It looks nothing like what I'm used to, but I'm still acting as the role of a designer. You know? It's just [00:38:00] very, very different.

[00:38:01] **Gunnar:** It's still, yeah, it's still designed, designed through, through prompting and like shaping it's sort of a new, new skillset and a new avenue of designers to, to leverage.

[00:38:11] **Rid:** We've talked a lot about voice. You've been at perplexity for a year and a half. Things are moving at a million miles an hour. Is there anything else that you've had a hand in or ship that you're particularly proud of that we can highlight?

[00:38:23] **Gunnar:** some of the most recent work is we also redesigned the Discover feed again from what we did right when I joined Perplexity. So we redesigned, um, the main feed. We also redesigned the pages and, uh, it's been cool to compare because we've seen a A lot better retention and engagement on the feed with some of those design choices that we made. Uh, so it's also been a really good learning moment on like what's been working and, and what's not. 

[00:38:54] **Rid:** Are you able to describe some of those changes where we can get a sense of what the underlying thinking is?

[00:38:59] **Gunnar:** we wanted [00:39:00] to do it for a few different reasons. one reason being that our volume. Of content has picked up a lot. We're able to surface a lot more stories in feed now. Before it was very much a manual process.

[00:39:14] **Gunnar:** It was very handcrafted, hand curated, and you only had so many stories, fresh stories a day to engage with. So that's why we did more of an immersive feed format. That was like a single story at a time, but now the volume has, you know, 10 XD from there. And we needed just a little more dense of a feed to make that consumption path a little bit easier.

[00:39:39] **Gunnar:** So you might get two or three stories at a time as you're scrolling the feed. so you're, you're able to just consume much faster and find something. Relevant or find something interesting faster too. so there was that side of things there. There was also the personalization and the ranking side of things.

[00:39:57] **Gunnar:** So doing a lot of work to better [00:40:00] personalize your feeds. And the, the density also helps with that because, we can be confident that if you see, you know, a few stories at a time, one of them's probably good and relevant and you'll probably engage with it. Versus if we wanna make the bet that we're just gonna show you one story at a time, like it better be spot on, you know?

[00:40:22] **Gunnar:** Good for you. Yeah, exactly. So there's the, the personalization aspect, which that's continued, that's still getting better and better. and then there's also the, the pages themselves and the stories and reformatting those stories and allowing more control over those stories. So the story details, also got a redesign in format, so carrying over that, that principle of like conciseness and density to the content.

[00:40:51] **Gunnar:** we shortened up the stories a little bit just so they're easier to consume. And we've also given you tools to manipulate those stories you can set a [00:41:00] preference. Do you want. More of like a full report of the story, or do you just want the summary bullets and then we will, we'll carry that format through for all the rest of your stories there.

[00:41:10] **Gunnar:** We have a little toggle where it's like summary or report. so you're, you're again, very, you're, you're just able to consume much faster and we've seen a really good lift on that, that page redesign also.

[00:41:22] **Rid:** That's cool. I have to play with that. I saw a similar pattern in particle news. I don't know if you've,

[00:41:28] **Gunnar:** It's, mm-hmm.

[00:41:29] **Rid:** That was where I saved that to my notion where I was like, this is really cool. Because depending on the story, I definitely want to have that initial TLDR take a very different shape or form

[00:41:39] **Gunnar:** Yeah. Totally.

[00:41:40] **Rid:** even a lot of how I'm thinking about things for inflight too.

[00:41:43] **Rid:** And even just hearing you say something like, we shortened the story. It's like such a small detail, but that alone is kind of crazy, right? Like historically, we've always designed around user generated content and you get what you get,

[00:41:56] **Gunnar:** Yeah.

[00:41:56] **Rid:** And now having the ability to really [00:42:00] tailor this output in a way that meets your goals as the designer is totally different.

[00:42:05] **Gunnar:** Yeah. It really is. And it's, it's also all about just like putting users in control too, and letting them choose how, how do they want this content surface to them? And, and this is just one step, uh, into that direction too, along with personalization. But it, it all kind of wraps into the same, same bucket.

[00:42:26] **Rid:** Something I'm curious about, especially through the lens of, you know, have all this dynamic content and personalization. But you know, when you joined, there's only four designers.

[00:42:35] **Rid:** There's a smaller product suite and there's just been so much growth where now you have the separate Android mobile app and Mac app and you just released Comet. So, so I want to kind of get a sense of how much you all prioritize or how you think about the relationship between that product suite as it relates to systems design, visual languages, overlap [00:43:00] between designers, collaborating.

[00:43:02] **Rid:** Can you talk a little bit about what's the strategy at perplexity right now as you all are growing the product surface area?

[00:43:08] **Gunnar:** Yeah, in terms of growing our surface area and growing the design team at the same time, we have many more contributors. It's still fairly flexible and loose. And our, our mindset is pretty much like, let's have consistent design foundations, but you can kind of use those however you want and shape whatever you're working on as long as it's, foundationally consistent.

[00:43:32] **Gunnar:** That's, that's what matters most across the product suite. Um, but you still have a lot of flexibility within that. And we're also empowered to, I mean, every, every day, every week we're coming across new challenges or new use cases or new needs for something, and that could afford some different visual language.

[00:43:54] **Gunnar:** Or some different, you know, visual treatment or something to roll into the foundations [00:44:00] and, and we're not strict about it. If it makes sense and if we need it, like we will, we'll roll that in and, and it, it's surprising how that can like scale too and like scale and inform maybe some of the brand work that's happening.

[00:44:13] **Gunnar:** and then in terms of the different product surfaces, we want them to feel unique and differentiated and like you have a reason to use one over the other. We don't just want one product that's gonna do the same thing across the board.

[00:44:29] **Gunnar:** , Or you might get like the same interface, so Android assistant is sort of this like os takeover. It's very contextual to what you're doing. You just kind of have these little widgets that you're interacting with. the mobile version of the app, which we're actually, uh, working on a redesign right now, where, where today it kind of feels like a reflection of the web product, , in terms of navigation, in terms of some of the interaction.

[00:44:54] **Gunnar:** So that actually is pretty close and consistent. But the new redesign, I [00:45:00] would say feels much more focused and much more opinionated, and kind of reprioritizes and reemphasizes some of those navigation elements to really distill it down to like the core mobile use case that you wanna use it for. So that's kind of what I mean by looking at our suite of products and making them feel.

[00:45:20] **Gunnar:** intentionally focused on certain tasks, and you'll see that show up in some newer ideas for Mac Os. , Web app, of course, is like its own surface. we have Comet that also has new surfaces with like the comment assistant. but we really wanna drive, like focus and intentionality to each of these surfaces to best serve the context you're in or the use case that, you need for that platform.

[00:45:48] **Rid:** I'd imagine it's probably more fun as a designer that way too. I get a little bit more creative freedom. Get to flex the brand muscles and see what happens.

[00:45:54] **Gunnar:** yeah, a hundred percent. Mm-hmm.


## [00:45:56] Where Gunnar wants to invest as a designer

[00:45:56] **Rid:** we've covered a lot of ground. Personally, I'm very inspired by your [00:46:00] journey as a self learner, someone who is very evidently curious and has the agency to just go try things and make things happen.

[00:46:07] **Rid:** So maybe even on a personal level before I let you go, as someone who enjoys self-learning and is also kind of plugged into the state of the world and where things are heading a little bit. So, how do you think about the areas that you want to invest in as a designer and the ways that you wanna level up your own skillset moving forward?

[00:46:29] **Gunnar:** Mm-hmm. the way I see leveling up is just trying to get a pulse on where things are going and sort of shape yourself from there. So for me personally, it was like, wow, coding has become much more accessible now with tools like Cursor, and that's a tool I, I really need to pick up and learn because.

[00:46:50] **Gunnar:** I see the, the value and the advantages, and I've experienced it firsthand. So for me personally, that's, that's an area I'm definitely like [00:47:00] upskilling in. Like I, I want to contribute more code, I want to build in more code. , Just seeing the way, the way we work now and how much faster we can work that way.

[00:47:09] **Gunnar:** that's clearly like one, one pulse on the industry I see is, is just like expanding your, your tool set there. And that's probably the dominant one to be honest as, as a product designer, if, if you don't already know it, like there's no reason not to jump into that now.

[00:47:27] **Rid:** I think it carries a lot of weight coming from you because you are coming from a more artistic end of the spectrum than I am. You know, like I've always been more of a technical systems designer. I went through a coding bootcamp many years ago, forgot most of it, but I did it. You know, like I'm generally interested in that, whereas I can't draw anything and I, you know, I've just started animating and jitter.

[00:47:50] **Rid:** I have such a low level of artistic skills, you know, but like you spike in that area. And so for you to come with that background and still say [00:48:00] the thing that I'm investing in is more of the technical side of the craft, carries a lot of weight in my.

[00:48:06] **Gunnar:** I mean, I could also frame it this way in that like you also need to assess yourself and assess where you're at too. So if you are like heavily technical, maybe less artistic, or less visual Why not just start dipping into that and see what opportunities that opens and what that could learn or what, what you could learn from that.

[00:48:27] **Gunnar:** so I, I think there, there needs to be some, some self-reflection to understand like where you want to go. 'cause in my, in my position, a lot of the work I've done up to date has been visual brand motion tied in with product design and ENC coding was kind of the outlier for me. So that was a clear thing, like I wanted to dig in further.

[00:48:52] **Gunnar:** And I try to make a point of this every year. I tell myself I want, I want to kind of reinvent myself in some way or [00:49:00] learn something new. So one year it was animation and after effects, another year it was cinema four D and 3D. Uh, this year it's. It's cursor, it's coding, it's, it's that focus just to spend a year going deep on, and all of that experience and knowledge, like really compounds on itself over time.

[00:49:22] **Rid:** Well, gunner, I'm, I'm very inspired. Thank you for coming on and sharing a little bit more about who you are and your journey, and I hope that people listening are encouraged to take new steps and try new things and take a little bit more of a generalist mentality to their career because.

[00:49:38] **Rid:** It's working and it's cool to see. So I appreciate you coming on and sharing with us today.

[00:49:42] **Gunnar:** Oh yeah. Appreciate it, man. Thank you.

