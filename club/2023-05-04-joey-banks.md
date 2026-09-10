---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: avzV2Uzdoe4
slug: 2023-05-04-joey-banks
source_type: descript
source: https://web.descript.com/30f992d7-da66-46e4-9346-cac8d62f8779/f774c
guest: Joey Banks
host: Ridd
title: "Strategies for design systems and flying in Figma"
published: 2023-05-04
duration_min: 43
generated: 2026-09-10
generator: dive-club-ideas
---


## [00:00:00] iOS Kits

[00:00:00] 

[00:00:00] **Ridd:** all right. So Joey, your iOS kits have been downloaded over a half a million times, which is absolutely insane, and I've seen you before talk about the fear that you were experiencing putting that out there for the first time. Can you tell us a little bit about what that was like and, and how did you get to the point where you wanted to share it and put it out there for the world?

[00:00:24] **Joey:** Yeah. it's still unbelievable to me that, people have used something I made over half a million times, , best feeling in the world, and, I never take that for granted. It was really scary putting it out there at first, specifically like the iOS kits, because , there's so much complexity in that file, and I knew that people were going to use it in production work of their own right work to take two design reviews, work to put out there, work to call their own.

And I wanted it to be as well organized as I could. Because, when you grab a file or when you download a resource, you're trusting that author, that person to make the best decisions and to really put the care and the craft into the kit.

And I [00:01:00] wanted to start small, not putting every component out there, but I wanted to start with the ones that I knew and I could trace pretty well and recreate in figma and put out there for others.

So getting over that block was probably the toughest part. But now it's all about maintaining that accuracy throughout, the dozens and dozens of components that have come since. . 

[00:01:18] **Ridd:** Yeah. Well, I, I know I speak for many, many people by saying, just thank you...like I, 

[00:01:24] **Joey:** yeah. 

[00:01:24] **Ridd:** I'm one of those people that is the first thing I do whenever I'm working on a mobile project. it's huge. 

[00:01:28] **Joey:** That project started, because I was like many people and maybe yourself, Ridd and other designers at the time, I was screenshotting a lot on my phone and I was air dropping or even saving those photos and bringing them, on my computer, dragging them into the tool at the time.

And drawing rectangles over UI that I didn't need, and emphasizing the UI that I did need. And it was frustrating cuz like you're putting so much effort into the design work and the mocks that you're trying to show in the design review or within the product that you're working on or within the feature that you're working on.

[00:02:00] And for all of that to be so polished and it's something that you're proud of. And then just to have like a screenshot behind it that's kind of blurry and might not be as accurate as it relates to the rest of the UI was frustrating. You want to finish that last 10% , within any good design.

And so for this it was just, okay, I use Figma a lot, I know a lot of other people do as well. How can I just take that work and prevent myself from needing to always like screenshot and just start to bring more and more of those components within the tool of Figma. 

[00:02:27] **Ridd:** Yeah, that makes total sense. I know there's like a lot of complexity in these different components and just everything to think about. What's the hardest part for you? Like what makes it particularly challenging? 

[00:02:39] **Joey:** I think the hardest part, honestly, is just getting started. And I know it sounds cliche, but with Figma, with design systems, you're always at a blank canvas, and that's the most exciting part, but it's also the most challenging.

I know for myself personally it's very hard for me to get started, but once I do, it's hard for me to stop. The reason why, I think it's hard to get started is there's [00:03:00] just a lot in it.

You're starting from, one switch or one button that ultimately builds into everything that supports iOS or the most popular components these days. And so many of those components use other components and they're dependent on other components. And so you're starting with that one Lego piece, right, that builds the ultimate like model that you're after, and it's just starting the work on that very first one that's the toughest. But as soon as you're done with that, the rest is easy, it takes time, but I got the structure down, I'm in the rhythm, I like know what's next and I can use this to build upon other pieces, for me, that's the most fun part, but it's always getting over that first barrier. 

[00:03:37] **Ridd:** Do you map out the order that you kind of attack the iOS kit because it is important to get kinda those foundational pieces first.

Like how do you even know where to start when you're looking at that blank canvas? 

[00:03:48] **Joey:** I think the toughest project was the very first kit because I didn't know where to start. I had nothing created before. It was a blank canvas to the definition of the word blank canvas.

Right. And [00:04:00] for there, I started with the things that were present on every iOS screen, on every iPhone design, the status bar, the tap bar buttons, typography, colors, like the primitive elements that make up the larger screen. And what's funny is each year, I'm kind of building off of that very first file in pretty major ways, although Figma has changed and there's new features, and iOS has of course, evolved a lot since that first file. I think it was iOS 13 that I made. A lot is still remain consistent... typography has remained pretty consistent, colors as well. And it's really just taking those Lego pieces to those building blocks and adding more to them. It's always kind of funny cause near WWDC I'll start working on the previous file, that is current at the time. And I'll add to it, I'll reorganize some things. I'll refactor based on fig's newest features, and I'll kind of prepare that file for when the next version of iOS drops, so I can get a lot done in that first week of WWDC in time to launch it. And that's always like the most fun part for me is that week of, okay, I've gotta take what I had before, I've gotta add all of Apple's [00:05:00] new features to it that were highlighted that I know designers might want to use in Figma and I get to build on top of what I did before and, and make it better each time. And so that's actually kind of the fun part for me and why I don't necessarily want to stop doing this is because each year you just get to build and build and build and it's just been a fun project for me to work on and to add to.

[00:05:18] **Ridd:** Yeah, it's cool. It's even added a element to how I experience Apple's unveiling cuz I have the little Joey Banks in the back of my head. I'm like, you always gonna have to build all of this. Like that one will be tricky for him to build. 

[00:05:29] **Joey:** Joey's drinking a lot of coffee right now working on this kit. . 

[00:05:32] **Ridd:** Yeah, exactly.

[00:05:32] **Joey:** Yep. 

[00:05:33] **Ridd:** Um, tell me about, The component properties unveiling 

mm-hmm. 

and how you even began to incorporate that into the files and what that was like. 

[00:05:44] **Joey:** Yeah. I was so excited about component properties when Figma announced this because it seemed like there was such a long road ahead for, oh my gosh, I've gotta refactor entire libraries, to take advantage of this awesome new feature. But at the same time, I think Component Properties have [00:06:00] done an excellent job at bringing designers closer to engineers within the file, and it's also just provided a way to make components easier for designers to use. Right. The coolest thing about design systems, and I think the coolest thing about building these iOS files within Figma is you get to think a lot about the end designer and the end consumer of the component.

What sorts of things are they going to be editing or maybe turning on or off or hiding and showing, what properties or what sorts of things will they never touch, right? What's not important to them? And so what can you kind of hide? And so when I saw component properties, the first thing I thought of is, wow, this is going to reduce a lot of variants.

Some cases where you might have like 32 or even 64 components to support all of the different states that you need. Now you might need four. And that was just mind blowing because like for a design systems designer, the amount of maintenance required is so much less due to that. But the possibilities for the states that you can support increased, by such a high number, just because you can set ion properties to different layer elements, you can [00:07:00] add or remove text or change what that text says through properties.

This is one of Figma coolest features because we now, as designers, we do assign more properties to elements in Figma and we get to a better align with code. And so when an engineer is inspecting a component, they can see that label component is right there.

And it's called exactly what it is in code. That icon property matches exactly what it does in code. Any chance to bring those two teams together, I think is a win. But for designers especially, the chance to build these components that scale and have more states and properties available is just magic.


## [00:07:31] Component Strategies

[00:07:31] **Ridd:** One of the things that I have found tricky in the past is trying to figure out the right balance between making these, these super components and eliminating variants and having everything be configurable versus knowing when it does make sense to keep things as separate variants. 

[00:07:48] **Joey:** Yeah. 

[00:07:48] **Ridd:** And trying to strike that balance between configurability. And then also being able to see the different states of a component at a glance. How do you [00:08:00] think about that challenge? 

[00:08:02] **Joey:** Yeah. This was something I was thinking a lot about when the feature launched, because the advantage to not using component properties is when you see a fully built, variant based component, you're seeing every possible visual state that could exist.

Again, that might be 32 or 64 or 128 different states, but as an engineer or as a designer going into that component library, I can see everything. And I have a really good idea of what that component can do or can't do. When it comes to using component properties the benefit is you don't have to produce all of those states, but of course the detractors there is that you don't see all of those states, right?

And so I think what happens is like you have to rely a little bit more on good documentation or good examples to show what the component can do. And you also be wanna be really clear of like, when I grab an instance of that component and I bring it in my file, those component properties should be really clear in helping me understand like what this component can do at a glance.

I've really tried to emphasize naming, organization, even just [00:09:00] showing through documentation what the component can do because we wanna optimize for the side of , yes, maintenance and reducing design system component production time. But we also wanna make sure that the experience of a designer who's using the component is not lost or is not, degraded in any sort of way.

And I think it's a continued balance. Like you want to make these really complex components that have so many properties and variants that can do everything, but at the same time, you wanna think more about how is the designer actually going to be using this component? Are those properties relevant to them?

Or could you break the component up into separate pieces for different use cases? And so those are the types of things I'm mostly thinking about when I'm using component properties and trying to strike that balance for designers. 

[00:09:39] **Ridd:** Very cool. Can you talk a little bit about how you approach documentation and like everything from where does that live or even just different ways that you have iterated or improved on your own output over time?

[00:09:55] **Joey:** Yeah, I think documentation is a design system superpower. I've seen, uh, a lot of [00:10:00] teams put it directly in Figma, and I think that works. But I also wanna remember that Figma is not necessarily a documentation tool, right? It's not accessible to everyone inside of the organization. And so what I personally try to think about is, okay, if I'm a designer and I'm using this component, what do I need to know?

What is the tagline for what the component should do? What are the variant labels for how this component exists as it is on the canvas? The best feature I think of documentation and Figma is the ability to add a quick description for any component. If I'm an engineer and I'm using that component, I can also link directly to where the actual documentation might exist externally.

And so I try to err on the side of. Pour more documentation resources outside of Figma and just keep exactly what you need to know inside of Figma. That way you're not necessarily doing a lot of editing and copywriting within the tool itself, but you're placing it in an area that's accessible to everyone and you're keeping design where design is in Figma and you're keeping documentation and code where it is externally.

Definitely a [00:11:00] tough balance to strike, but I think providing a bit of both in both contexts works really well. 


## [00:11:04] Career Journey

[00:11:04] **Ridd:** So I'd love to transition a little bit and kind of just get to know you a bit more and your career arc, because even just looking at your LinkedIn, what's really interesting is, I mean, you went from design intern to designer advocate at Figma in like under five years,

[00:11:23] **Joey:** Yeah. 

[00:11:23] **Ridd:** So I'm kind of wondering like, were there inflection points where you really were, you know, taking off in your career or at what point along the journey were you really growing as a junior designer and what did that look like? 

[00:11:37] **Joey:** Yeah, the career journey has been really interesting. My very first job was in San Francisco and it was at a transportation company called Scoot. And this was before the popularity of the little scooters that you could ride around town. These were kind of like electric Vespas and I was the only designer there. I was using Sketch and I was just figuring out how to exist in the adult world as a designer.

And then around halfway through my time at that position, I was actually [00:12:00] diagnosed with Type one diabetes. I was 23 years old and it was a disease that was totally new to me. Kind of flipped my life upside down, and no one I knew, or no one in my family had had it.

So it was something again, new to wrap my head around and to totally readjust to, having that and interacting more with our healthcare system, it made me want to get into the field of healthcare. I wanted to try to do what I could do as a designer in that space and help other people who were living with diabetes and so, I joined a company called Verta Health, and this was actually where I first got started with Figma.

It was back in 2016. And gosh the tool has changed so much since then, but it's also stayed the same, right? But it's also stayed the same in some really, some really critical core and fun ways that make Figma Figma. When I was there, I realized that like our patients were our number one priority and improving their experience and getting features to them and what we were often spending a lot of time on was recreating elements that should already exist, right? We were recreating lots of [00:13:00] buttons. Our palette was not quite the best and was pretty sporadic. And that's where I fell in love with the idea of design systems, because it was like, oh my gosh, we can ship things faster, we can help more patients, and we can also organize within Figma. That is where I fell in love with the tool. 

[00:13:16] **Ridd:** I remember listening to your config talk and that was the first time I actually had heard about the diabetes story. And like, I always thought it was so cool that you immediately decided I'm gonna work on this, like I can actually like impact this world. And now you have this, this motivation and this cause and, and I don't know, I always looked up to that. I think that's like a really 

[00:13:38] **Joey:** thanks 

[00:13:38] **Ridd:** really cool thing that you did.

[00:13:40] **Joey:** I really appreciate you saying that, and I'm not necessarily one to like jump in after a problem all the time and like to get closer to it, but for something like this, where unfortunately there's no known cure and it was something that I realized I was going to live the rest of my life likely with I just wanted to get a little bit closer to the problem and be with others who are also in the space and who are, you know, against [00:14:00] similar challenges, but what better way to try to get there through design, right? And through, especially like the improvement of healthcare at the time. 

[00:14:06] **Ridd:** It's amazing. I'd love to hear a little bit more about the decision and journey that actually led you to work at Twitter, and what was that like working on a product that you were using every single day?

[00:14:20] **Joey:** I was so excited to join Twitter. I really think Twitter is the product that got me interested in the world of design because I was able to be a little bit closer to San Francisco and designers there.

And, as someone who grew up in Ohio and was going to school in Ohio, that felt so far away, but Twitter made it feel a bit closer. And I remember when I got to Twitter, it felt like when I opened a Figma file, it felt like I was meeting a celebrity for the first time. I was like, oh my gosh, these are like the designs that make up this tool that has given me so much and has provided me with so many amazing friends and connections.

And I get to see the icons and the buttons and the UI and the text that like, make up this [00:15:00] product. And it was really, really exciting. 

for me, it was also the largest company I had joined. It was around 7,000 people at the time, and the biggest company I had been at prior was a hundred. So it was a pretty big jump.

But I wanted to learn what was it like to specifically work on design systems for a company of that size. And also how could I take the knowledge that I learned while at Figma and apply it to this larger team and to apply it to something that I cared a lot about, which was designers experience using Figma and using components to build out UI that ultimately would go into a tool that, again, had provided me with so much.

[00:15:35] **Ridd:** This was your first time actually being in a, like a full-time design systems role. 

[00:15:40] **Joey:** Yeah. 

[00:15:41] **Ridd:** What was that? 

[00:15:41] **Joey:** Yeah, this was my very first time, 

[00:15:42] **Ridd:** ...like imposter syndrome being like, you know, all of a sudden being a part of this new team and working in a new way like what was--- what was that like working on that team? 

[00:15:50] **Joey:** Always have imposter syndrome has never gone away. And I definitely remember joining and one, like being so enamored with the product and, and the people there and the, the respect I had for the [00:16:00] team, and know, Wow, this is my first design system job and, and this is also the role where I'm going to be, again, like building these components for others to use to do their best work.

There was a, a ton of responsibility with that, right. Especially for a team that I was just getting to know and I was just getting to earn their trust, I had an amazing manager, an amazing team there, people I looked up to so much. And I think we were all in that same boat.

We were a pretty new team within the org. And we just tried to build the best thing we could and we tried to work really closely with the people who were relying on the design system to do their best work and to take their feedback, and to build. And I think it, it taught me so much around design systems is about relationships and it's such a service model, of building things for others, seeing how they're using those components, seeing how it's shaping the UI, and then feeding that back into the system for even more people to work with.

[00:16:50] **Ridd:** Can you talk a little bit more about the relationships piece? Especially working at a company that is thousands of people. How does that work? 

[00:16:59] **Joey:** the [00:17:00] relationship side beyond building components. I think it's the coolest part of design systems. It's part of your job to know people and to know what they're working on, and to know how they work and to take that knowledge and those relationships and to build for them.

At Twitter, the design team was over 300 people or so at the time. And there were a lot of projects happening, and we were a pretty small design systems team that was supporting all of those designers. And so it was really important for me and our team to just know people and again, know what they were working on, knowing how they were working, knowing what they were looking for in a design system, and what their experience was with Figma.

This meant, actually a lot of teaching in Figma and making sure that everyone was comfortable with the foundational tools like auto layout or component properties. That way they could build the best components or use the components to their advantage within the design. 

[00:17:49] **Ridd:** So you're now at this design systems role at Webflow and I'd love to hear a little bit more about that. Why'd you join and what's it like working at Webflow specifically? [00:18:00] 

[00:18:00] **Joey:** Yeah, Webflow has been awesome. I've been there for about seven months, and it has been a completely new challenge. I joined because I really wanted to be back in the space of design tools and the tool is so new to me. You know, I knew Figma like the back of my hand in so many ways, but Webflow, I knew what it could do, but I didn't know it as well. And I wanted to join actually without that knowledge. That way I could kind of take a lot of those unknowns and apply it to the design system mark in that way. 

When I joined, we had a decent amount of components that were coded up and available within production, but we didn't have a lot of things available in. And the things that we did have in Figma weren't quite built with many of the latest features that we've talked about, like the newest version of auto layout or the newest version of component properties. They looked really strong and were so well organized, but we just needed to update them.

As you can imagine, that was an exciting few months for me of going in there and working within production, Figma files to really get those components to where they needed to be for the best experience. 

[00:18:57] **Ridd:** That sounds so fun, by the way. . 

[00:18:59] **Joey:** Yes. Yeah. [00:19:00] Coffee, music and updating Figma is, 

[00:19:02] **Ridd:** oh my gosh, pretty good. It's someone that, like, I've just used Webflow so much over the last few years to be able to just refactor a bunch of Webflow components... 

[00:19:09] **Joey:** yeah, 

[00:19:09] **Ridd:** I would pay someone to, to, to do that. I think. 

[00:19:12] **Joey:** Thankfully, I'm that person. I feel, I feel lucky. Um, and we have an amazing team. We have a few designers who are supporting us, a larger design team, of course. And a group of engineers who are so talented and are so passionate about the world of design systems and really eager to like partner more with design. For a little while there, we didn't necessarily have a dedicated partner on the design systems team and. That part was especially exciting to me.

Like I really wanted to come and, and help build the bridge between design and engineering handoff when it came to components and design system work. And we've been doing a few techniques to help us with that. The first one is we've been using Figma to slack, which allows you to take all of your version history and Figma and post it to a public, slack channel. And just having that stream of updates has been, I think, helpful for the team to see what's happening and [00:20:00] for engineers to also have insight. 

The other plugin that we've been using is, Nathan Curtis's New Eight Shapes, specs plugin. Before I was spending so much time taking an instance and demonstrating every possible combin. and this eight shapes plugin has totally changed the way that our engineers are coming in and inspecting files within Figma and seeing that output. So it's been immensely useful. 


## [00:20:22] Component Organization

[00:20:22] **Ridd:** Joey, I'd love to hear a little bit more about your approach to component organization, how it works at Webflow and maybe even how you would recommend other designers to think.

[00:20:34] **Joey:** oh, my favorite topic. so at Webflow we have a few distinct products. We have our designer and our dashboard and our marketplace, and each of the three products are similar in a lot of ways, but also pretty different, and the unique thing about Webflow is we have one design system to support those three products, and so when it comes to Figma, originally we had one big file with both our light and our dark theme components in there. [00:21:00] And as we were thinking and as I was kind of identifying where Webflow is headed and what we're working on, The challenge is you'll begin to have more designers who are focused on those unique three products, right, and more in the future. And for their experience in Figma to always see light and dark theme components as they relate to multiple products, that's tough because every time you grab a button, if you have to switch the theme, that's not a good experience, right? And you really wanna optimize for their work and where they're at in that moment.

And so we made the decision to split these components up into two different libraries and we're doing that by theme. So all of our designer dark mode components are in one library. All of our light dashboard marketplace components are in another library.

For a while we were organizing our pages by category, but I've actually moved away from that, and I'm just having a page for every component. The reason for this is I think categories are a bit different for everyone, right? For a category that I identify, like someone might think they're in another category.

And so just removing any sort of friction [00:22:00] to finding where a component is and and getting it and then getting back to your work and doing that in a faster way is always the priority. So that's what we've focused on. 

[00:22:08] **Ridd:** How do you keep a component in sync when a version of it lives in a light mode versus a dark mode library if you're gonna make a change to one. Does that get tricky and how does that work? 

[00:22:21] **Joey:** I think that was the biggest challenge that we were identifying and thinking about as we made this decision. We know that the maintenance is going to have to happen, but we were also thinking like, well, if both those light and dark themed components are still in one file, you have to maintain them just the same, right? Except you're just doing it in one file. In this case, you're doing it in two different files, and so the workload felt roughly the same, just separate. And so I think it's okay, like if you're in a position or if you're at a company or a team where it makes sense to break things out into different files, that way a designer or designers or the team can turn on those different libraries based on what they're working on to better optimize their experience.

The [00:23:00] maintenance cost isn't that high. And something else I, I try to think about as well is balancing design system maintenance versus the customer consumer experience. Right. And optimizing for like it's important to be able to maintain these components and ensure that they're up to date and, and accurate with where the products are going.

But at the same time, if it's a bad experience to use those components, what's the point? Right? And so really trying to strike that balance we might have to invest a bit more time, but ultimately we think this is probably a better experience for the end consumer. 

[00:23:30] **Ridd:** Yeah, that makes total sense. I think like a lot of the things that you're talking about are really getting into the weeds of Figma features and organizations and component props and all these different technical feature sets. Figma. 

[00:23:46] **Joey:** Yeah. 


## [00:23:47] Design Systems Team Dynamics

[00:23:47] **Ridd:** What are some of the other aspects of your day-to-day job that people might not expect? 

[00:23:54] **Joey:** A lot of it is communication and also just providing pattern answers, right? Like within [00:24:00] any product, I'm sure there's inconsistencies and ones that you wanna solve. And a big part of the job is identifying those and consolidating thinking about, okay, it looks like we're using this pattern here and that pattern there, they're roughly doing the same thing. So how can we perhaps consolidate that into a single component?

Another big part of the design system job is just building relationships and working with other teammates to understand like where they're going and perhaps how we can stay as close to one step ahead or behind as we can, and not getting too distant in one direction. So keeping up with the team, building components to support and also just modifying components based on what we're seeing or what is being asked, I think is the biggest kind of day-to-day task within design systems.

[00:24:44] **Ridd:** Something I've always been kind of curious about, especially as someone who hasn't worked at a Twitter or a webflow sized company. How do you balance this idea of a product roadmap pushing forward into new frontiers, just different [00:25:00] paradigms within the product, and then a design systems team? Is part of your job to stay in front or are you auditing the work that is being done that is more exploratory? How do you slot into new feature work? 

[00:25:15] **Joey:** Staying, as one-to-one as you can with where the team is headed is tough. This is the toughest part of the role. I look at it as sometimes you are a little bit ahead, where you might be defining more patterns and more UI practices that could be put in place, smaller templates, that build out the larger page or the larger ui, right?

In some cases though, there might be UI coming that isn't supported by the design system. Perhaps the components just look different perhaps they're used in a different way that wasn't anticipated. I think it's that freedom and flexibility to sometimes be ahead and sometimes be behind just makes for a better experience and a more flexible design system to support where the team is going.

The last thing we wanna do is say like, "Hey! absolutely not! don't, do not build that or design that because we can't support it yet" right? 

One of my favorite [00:26:00] metaphors from a friend John Doman, he always says like, we're, we're trying to look at people who might be nailing a screw into the wall and just replace that, screw with a nail and say, "Hey! we saw you were using this component for that purpose. We have one that could do it just a little bit better. And so we want to help you swap that out", right? We don't wanna take away the job that you're doing or take away the flexibility and the task that you're doing or how you're thinking about the design. We just wanna give you the best tool for that current moment.

And so that's the other piece I think to design systems that I love so much, which is just understanding how the different tools or the different components are being used and seeing if that's the best way. And if it is, how do you better support that? And if not, how do you replace those? 

[00:26:40] **Ridd:** I love that analogy. 

[00:26:42] **Joey:** It's a good one. Yeah. 

[00:26:43] **Ridd:** For, for someone like you at, at Webflow where you're leading the charge on design system, it's this big team, this huge product surface area, how do you identify when a screw is being used and like, what's your strategy for even auditing different usage [00:27:00] across the platform when it's just you?

[00:27:02] **Joey:** So I think the first thing that usually happens when you're identifying where and how components are being used is, one, just making sure it's the best component for the job. And you can do that through understanding, accessibility and understanding like the best experience and therefore the best component to use for that experience. 

And knowing those components and knowing technically how they work and how they operate, for anyone, is really important and a big part of the job. And it's why I always love having an accessibility designer or an accessibility minded engineer on the team. 

The other thing is, just looking at the UI and looking at like, it seems like we're using a radio here, but it's actually, that's the only option. And so maybe we swap that radio out with, let's say, a single button or a single link that does the same thing, right?

Part of it. Auditing, like what we believe on the design systems team is the best UI practice. And again, not overstepping or not stepping on anyone's toes to swap something out, but just saying, hey, like maybe you don't think that's the best experience too, but you thought that was the only component [00:28:00] available. We actually have another pattern or a piece that could support that. It's kind of on a constant job, Because there's always outdated ui, there's always outdated components, there's always new components, and there's always new patterns to chase after. Especially for a team that's pushing so fast.

The other piece is just creating avenues for teams to work with you and to work with the design systems team. One practice that I love is just having a weekly meeting where designers can meet with us and can share what they're working on so if we hear someone who is taking on a new project, we can meet them at the start of that design phase and understand, huh, you know, seems like we've got some challenges there.

I don't know if we have a component to support what you might be after, but let's work through the process together to build that for you or to modify, an existing pattern that could help you out. And I think that piece of like getting there early and just understanding even if you don't have the ability to build or modify that component, just being there as like a partner to help that person or to help that team kind of go from the beginning of the design phase to the end. [00:29:00] I think is really valuable and important. And so that's my favorite meeting of the week is just understanding like, what is everyone working on? What challenges are ahead? How can our team's roadmap, influence and help their work? Yeah, coolest part of the design systems. 

[00:29:13] **Ridd:** I love how, so often it boils down to relationships and communication. That is definitely the theme that you've been hitting on throughout this conversation. And it's a neat element of a job as a design systems designer that I feel like a lot of people just don't even really recognize.

They think that you're just, you know, siloed in Figma. Yeah. Just plugging away on component properties. . 

[00:29:36] **Joey:** That's what I thought at first, to be honest. And that's why I was so excited. I was like, oh my gosh, I get to spend all day in Figma and work on that production work. 

But as soon as I realized that, yeah, if you do that, you know, you might have a success rate, but you're also missing so much opportunity to support the team and where they're going and the velocity of the team. And just the quality of the work that can be done, or the number of components that could be created. Right? That's how. [00:30:00] that work happens is understanding and working with other people to see where they're going, what, where the challenges are, what could be improved. And that gives you that constant, uh, workload.

You know, I wanna say at least on the Figma side and on the documentation side and on the engineering partnership side to keep going and to keep making things better and to keep up and, you know, like we were talking about earlier, like staying one step either behind or ahead of the team at times, that is like the most valuable thing is just relationship building, understanding how people are doing and, and supporting them where you can. Because that's what this team is about, is just supporting people being service minded. , and yeah, just taking on that work, that can help.


## [00:30:37] Common Mistakes Designers Make in Figma 

[00:30:37] **Ridd:** Well, speaking of supporting people and being service minded, something that you do is you offer a lot of coaching to all of these different designers and, uh, I looked and you've actually done over 300 training sessions, which is amazing. I mean, just from a pure how much you would just invest in the community is, is wonderful. 

[00:30:54] **Joey:** Thanks. 

[00:30:55] **Ridd:** I'm kind of curious with all of these conversations and, and discussions that you're having with [00:31:00] designers, what are some of the more common pitfalls or shortcomings or mistakes that you see designers commonly making in Figma?

[00:31:08] **Joey:** You know, the thing that I see a lot in what I've ran into myself as far as biggest mistakes in Figma is not thinking of scale and building for where the company is at today and not planning for where the company might be in two or three years. And so how that translates down to Figma is if you are supporting iOS, web and Android, for example, putting all of those components plus your styles in the same Figma file it works today. But as the teams grow and as the number of designers grow who are independently working on those platforms, it's gonna be a bummer to always grab a button and be unsure if that's the iOS button or the web button or the Android button, right? And so by separating components into different libraries and putting all of your tokens at the top, that's gonna give designers and really engineers better separation, for their working groups.

And so the [00:32:00] experience translates down to, okay, I'm a designer. I'm working on iOS, so I'm just going to enable the iOS library as well as our core tokens library. That way I can see all components related to that space. It's hard to do this later on, and it's so much easier to do it earlier on, right? Because later on you're taking all of these components and you're cutting and pasting and you're ensuring, and fingers crossed that nothing breaks along the way. And when you do it early on, you're setting up that structure for success a few years down the road. So that's the number one thing, is just planning out organization of where and how you wanna store these components.

[00:32:34] **Ridd:** Do you have any guiding principles that someone should have in the back of their head when they're maybe starting early on a project or they're tasked with kind of reorganizing things? How as a designer do I know how many libraries that I even should support? And how to draw the lines between those separations.

[00:32:50] **Joey:** Yeah. When you're starting out, think about the different areas of the team that are naturally there today. Maybe it's platform based or maybe it's function [00:33:00] based. Perhaps it is, people based, right? You have different people working on different things, and so what do those teams look like in Figma?

How are files organized in Figma? And I think there's a lot to learn there as far as how you set up your component library to match that already implemented organization or that way of working, right? And so I wouldn't go overboard as far as creating, you know, a different file for every component, let's say.

But having separate, unique files for bundles of components that were related to one another, I think is the best move you can do. It helps as you grow the design systems team, it allows more and more designers to contribute to the design system and, you know, ensure that you're moving at the right speed, but not pushing these huge changes that might disrupt hundreds or thousands of files.

And you're allowing designers to have a better experience when they're going to work with the component library and Figma.

[00:33:48] **Ridd:** Yeah, that makes total sense. Even just how much Figma has improved the process of moving components in the last few years 

[00:33:54] **Joey:** Oh yeah. 

[00:33:54] **Ridd:** Because I mean, that's the game changer, right? Like, it, it kind of enables us to, to have [00:34:00] components maybe start off at the lower level and slowly move upstream as we, you know, if someone like you is identifying different use cases for it. Uh, I'm very grateful for how, much more seamless that is today . 

[00:34:12] **Joey:** Me too. And there's a lot of thinking around this that is helpful, which is, one, you know, it's helpful to move components from one file to another. But two, I've found in my career so far, that most designers are pretty systems minded in that way of creating components to help make their work faster.

And these might be local components, right? But there's a lot of value there. For someone who's already made a component in the file, they've thought about the layout, the typography, the color, everything that's used to make that component work in the design that they have. And I think there's real value in identifying where those components are created and moving those components or pushing that work up to the design system to create a repeatable pattern or to allow other designers to take advantage of that work that's already been done.

[00:34:55] **Ridd:** Outta curiosity, is that something that happens at Webflow a lot? Are designers often doing their [00:35:00] own explorations in creating local components and is that something that you kind of look for? 

[00:35:05] **Joey:** Yeah, I've noticed this. And I think it's great like by either taking a component from the design system, turning it into a local component and then building the top of it, or just by building smaller components that might be taking advantage of icons or different, UI elements , and combining them into just this one reusable thing, especially during the exploration phase. Is something that a lot of people are doing both at Webflow and where I've worked previously, and this all bubbles up to this idea of like a product component library or a sibling library, which is a component library that sits just below the core libraries and pulls tokens and might reuse a number of components that sit in those core libraries, but also make time and make certain to, push those components that are local and those feature files back up to the libraries.

Right? And so you kind of get this two-way cycle of yes, we're taking components and building the top of them, but we're also pushing those new local components [00:36:00] back up into the feature files. And so that process is something I care a lot about just because it reuses the work that designers are already creating. It allows other designers to take advantage of their work and to also, create more consistency and to use those patterns. And it grows the design system so much faster just because we have more components coming in and more of a way to identify what work is happening in those different work streams.


## [00:36:23] Keyboard Shortcuts to be Efficient in Figma

[00:36:23] **Ridd:** Very cool. I guess a couple more questions here. I'm interested in learning a little bit more about how you specifically work in Figma. You've obviously spent as many hours over the last five or six years as anyone, and I'm curious, how has your workflow improved over time and what are some of the things that you do to work efficiently in Figma?

[00:36:44] **Joey:** Yeah. To work efficiently in Figma. It has always been about keeping up, I think with the latest features and also just seeing how other designers are working? It wasn't long ago that we were making components out of all of our text, to create textiles, right? Essentially before, they came into existence. [00:37:00] And if you weren't paying attention to how Figma is growing and how other designers are working, you might still be doing that. And it was working well at the time, but it's also a bit of an outdated practice, and there's so much more that comes with creating textiles, for instance. And so for me, I've learned a lot about how other designers are using Figma, identifying those practices. and putting it in work of my own. And that comes to organization, that comes to using auto layout well, component properties of course. 

And really just like how do you create a component that can exist for a designer in a multitude of different states, with different content inside and different placements of items. =And how do you make that the best thing that it can be? 

For me, I've learned also a ton of new Figma shortcuts over the years. , ones that I couldn't believe I took so long to learn, so that's been a time saver.

[00:37:48] **Ridd:** What are some of your favorite keyboard shortcuts or the different shortcuts that you think that different designers should adopt

[00:37:54] **Joey:** to align things? I was forever selecting or selecting one object or two, and then, going up to [00:38:00] the panel on the right. Now that's just option W A S D if you're on a Mac, just shifting those.

And if you want to vertically and horizontally, option V and option H. I learned those in like 2021 and I've been using Figma since 2016, so I wish I had learned that sooner. Also, applying auto layout shift, a removing auto layout, command shift A, those two are super, super helpful. So yeah, there's a ton in there and I feel like Figma is always adding new shortcuts.

[00:38:25] **Ridd:** It's, it's a lot to keep up with. I mean, you say the alignment, shortcuts and like, I know those exist and they're still not muscle memory. Like I, I use Figma nonstop. I teach other people how to use Figma and it's, it's a lot sometimes, like there's a lot of different shortcuts to, to commit to muscle memory. I've been kind of trying. chunk out one at a time to, to commit to memory. And, uh, you have just convinced me to, to do the next , 

[00:38:51] **Joey:** give it a go. I feel like after a week you will say, how did I ever click those elements at the top instead of running the shortcut? 

[00:38:57] **Ridd:** Okay. I, I love it. When I [00:39:00] kind of look at the state of design right now, it feels like the tooling and technology is advancing so quickly and it can be a little bit overwhelming knowing what is noise and what do I want to keep up with and dealing with just the fomo every time I see some new tweet about a different workflow or a tool or something like that. How do you approach this kind of, all of these updates that we're seeing and the different features and workflows and automations? How do you know what to focus on? 

[00:39:32] **Joey:** I've always been interested in like different workflows and automations that will help me work faster or more efficiently, and part of that is I just enjoy working faster, right?

Who doesn't? But another part of me just loves that process of seeing like, huh, how could I improve this? Right? How could I make this flow better that I, might. Tens if not hundreds of times a day. And so for me, there's so much coming out, especially in the state of, AI and design tooling and what I'm [00:40:00] trying to pay attention to is what is the work I love doing?

And is this thing I'm seeing, does that help me work faster and more efficiently? Or is it something that might be tangential to that work? And if it's tangential, it's, it's really interesting to pay attention to what is the design of that thing, right? Like how are they presenting it? If it's a tool or a resource or even the awesome work that Jordan Singer and Diagram are doing to make designing and Figma much more easier and accessible to everyone. 

But I also know that I have projects I want to do and, and I'm working on, right? And I don't wanna put those aside, but I just want to get those done in a way that helps everyone faster.

And so I think it's just striking a balance between like, what are you interested in learning and how can you take that learning and apply it back to your own work And, to not get too deep in the overwhelm of there's something new every day. That's kind of amazing that there is. And just finding that balance, I think is a practice.

[00:40:51] **Ridd:** Yeah. It's, it's awesome. I, I deal with that too. It's like, I feel like I'm constantly suppressing FOMO on Twitter. 

[00:40:57] **Joey:** Uh, a hundred percent. 

[00:40:58] **Ridd:** It's a daily challenge now. [00:41:00] 

[00:41:00] **Joey:** There's so many talented teams and designers and, and just the fact that we're at a point in our, our industry where we're thinking even more about how do we make the work that we do better and, and faster and more efficient, through some of these, but also seeing like really incredible experiments, right?

I can't help but feel that 2023 is the year of the button. It seems like every day on Twitter we see like this new incredible button, whether it's using your camera or reflection or small throwbacks to, a little bit of the s geomorphic days. But that's fun. That's the thing that inspires me and it makes me think because I missed so much of those s Geomorphic days, and so much of that like taking real world interfaces and applying them to a digital, design, it's teaching me, right? I came into the world of design during the flat era and I, I totally missed that. And so to see some of these things coming back like, yes, it's overwhelming because I can't create a texture to save my life in any way, but I can also take some of those learnings and apply it to, you know, small bits of shadows and details that I might not normally have experimented with, and I can put those forward.


## [00:42:00] Dive: Level Up with Figma course

[00:42:00] 

[00:42:00] **Ridd:** Yeah, I totally agree. Well, Joey, I wouldn't be able to let you go before giving you a quick opportunity to, to share a, a bit about your course that you're teaching about Figma. So maybe if you could give us a bit of detail around Yeah. Who's it for and what they can expect. 

[00:42:14] **Joey:** Yeah, I'm so excited about this. I learned very early on, especially when working at Figma, just how much I love talking about this tool and helping other designers work with the tool and in a way that, there's so much going on in 2023, and the last thing you want to be blocked by, overwhelmed by, I think, is the design tool that you're working in.

And so what I love to do, and what I'm doing with this course is helping anyone, whether you're a beginner or you're more on the advanced side, Just level up in Figma, regardless of your starting point. Helping designers just increase their knowledge and increase their practice and increase like the awareness of what tools exist today and how to use them.

It's so rare to find a component that doesn't use many of Figma s latest features. And the last thing I think you want to do is be uncertain about how to use that particular [00:43:00] component. And so this course is all about helping anyone feel better about the tool of Figma, the features that are involved. And just feeling overall more comfortable and confident within it. So I'm so excited for this. There's like recorded sessions, there's live sessions. We've got a few guests who are coming and I really can't wait to kick this off. 

[00:43:18] **Ridd:** It's gonna be awesome. I appreciate it and uh, it was great talking with you Joey.

[00:43:23] **Joey:** Thanks Ridd, I really appreciate it. It was great to talk with you and yeah, thanks for the time!

