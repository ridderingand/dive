---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: J08endIde9E
slug: 2026-01-28-best-ai-coding-tools
source_type: descript
source: https://web.descript.com/8d8e5d3b-ec4d-4db1-9a4c-ed422d761eb9/f453a
guest: Ridd
host: Ridd
title: "Best AI Coding Tools for Designers"
published: 2026-01-28
duration_min: 17
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] one of the biggest parts of my practice as a designer today is knowing which tools to reach for when coding with ai. I've tried a lot of different workflows over the last year, and I've come up with a mental model that I find very useful, so I'm gonna share it with you today.

[00:00:16] **Michael Riddering-2:** these are the quadrants that exist inside of my brain. The X AEs is the size of whatever I'm working on. Is it a quick P three bug fix or are we going zero to one on some really big, meaty, ambiguous idea? And the Y axis is how much of the material that I'm gonna work with already exists in production.

is this feature work that is starting from a blank slate? Or you know, maybe we're just iterating on something that is already shipped.

[00:00:44] **Michael Riddering-3:** There's a lot of hype right now on Twitter about how the canvas is dead and everything has to exist in code. And honestly, I think it's kind of ridiculous. And yeah, not to overuse the double diamond metaphor, but. I think there is merit to thinking of our work that way. 'cause a lot of times it's [00:01:00] very unshaped.

We have no idea what problem we're even solving or what way to approach it. And if that's the case, man, I love making a mess on a canvas and I actually use a lot of writing. Like this is often what the initial stages of my design looks like. And you could see how ridiculous this is, right? Like I'm just not ready to start playing in code.

I just want to get the general. Shape of an idea.

[00:01:25] **Michael Riddering-4:** now when we look at the bottom left quadrant, there are currently three AI prototyping tools that I reach for. The first is Figma make lovable and dein and if I already have UI that is ready to go, then Figma Make is pretty great at spinning up that initial scaffold.

[00:01:43] **Michael Riddering-5:** I'll give you a couple examples. A few months ago I was, you know, blank canvas exploring a new type of publish flow for inflight, and this was all happening in the canvas. And as a part of that, I had this little top component here I had the idea for this little spinning progress component [00:02:00] that would actually count down and jiggle once you get to your limit.

and since I already had the component outlined in Figma, it was really easy for me to just port this over to make. Nailed down exactly how I want the interaction to feel. and then I actually just grabbed this URL and included that on the canvas as a part of handoff.

Another example is the Figma plugin. Like I designed all of this pixel by pixel inside of Figma, and then I realized, ah, man, I need some kind of a little success animation. And so I whipped this up really quickly, made it so that the developer could grab just the animation code below, and then that was shipped to prod within the hour.

And it's a nice example of when Figma make can be really useful. Like this Did not take me many prompts at all.

[00:02:44] **Michael Riddering-6:** Now if you're dealing with something where maybe you don't have a bunch of UI ready to go, or you know, maybe it's slightly larger where you think you're gonna have 10, maybe even 20 prompts, then I do find that lovable ends up being a little bit faster in the long run, and I'm able to wield the tool more effectively.[00:03:00] 

This example here is the Vibe slider, where. We knew we were gonna build this inside of arrive, and I wanted to just get a really rough proof of concept that I could send to Bartech the animator to bring it to life pixel by pixel. So I did some exploring with lovable and eventually landed on this general interaction after I about 30 minutes, and I had none of this UI upfront, so it was a pretty good use case for lovable.

Another slam dunk use case for lovable is whenever you're working with Lottie or Arrive, which I find really helpful, especially with just how easy it is to create Lottie animations inside of jitter. Like these were made in, I don't know, like five minutes in jitter, and I just wanted to test them out in this component, which didn't already exist in production.

So I whipped up these cards really quickly and just played with this hover effect, and then I would go back into jitter and tweak some things and then reload it in lovable. That creative process worked really well, and still to this day, [00:04:00] these animations exist inside of production.

the important thing to remember though, when you're working inside of this bottom left quadrant is you're creating incredibly small, focused prototypes, and the trap that you fall into is trying to rebuild production inside of an AI prototyping tool that doesn't sit on top of your production code base.

and I've totally been guilty of this. six months ago I was spending days prototyping, fully functional components inside of lovable like this one.

And it turned out kind of great actually. Like I was really happy with how this worked. There's no way that I had been able to do something like this inside of Figma because there's a bunch of different animations and anytime you're working inside of a tech space environment, like you kind of gotta get into production code.

So all of this made a lot of sense to me,

but I'm also self-aware enough to admit that I spent way too long sweating the details on all of these pixels and interactions and doing it in a way that wasn't built on top of [00:05:00] my design system at all. 

[00:05:01] **Michael Riddering-7:** Now I do have a newcomer to this quadrant, which is Dein, Which gives me the speed and convenience of a lovable where you know, it's just a single input box and I get it. Not everybody is able to pull down like a production code base. You might not work in that environment. And so this is a really great way to spin up a prototype that uses all of my styles and components pretty quickly.

Like this is the inflight design system. It is connected to the in-flight code base and it automatically updates for me, I tested it out on a few different prototypes and it worked incredibly well. So this is definitely starting to creep into my practice, but the biggest shift for me over the last few months has been the emergence of Opus 4.5 with Claude Code and just how easy it makes it to ship something directly to production.

With the disclaimer, again, being, you know, I'm working on inflight, it's a startup, we're shipping quickly, and I crank out multiple prs every single day, which I get it. Not everybody can do. I've tried a few different tools and workflows for using Cloud Code. [00:06:00] I actually started off using the Warp Terminal with the GitHub desktop app. I then moved to Claude's Native Mac app, which is really good. I kind of just get frustrated about how quickly I'm able to move sometimes and I freaking hate having to wait for Claude to reply every two minutes.

The tool that has pretty much consumed the majority of my AI coding as of late is conductor.

It's an easy way to run multiple cloud codes in parallel, and each one is their own isolated workspace. So I can work on multiple features at once, which kind of solves that flow state problem where I'm stopping and starting every single two minutes, Obviously this is great for speed, but what I love again is that it helps me stay in a flow state because I don't have all of these little stop start, stop, start where I'm waiting for Claude to process my request.

If we go back to our four quadrants, the placement of these agent groups is pretty intentional. Like it's not up in this quadrant, it's kind of eating at this middle ground right here. that's because it's [00:07:00] swallowing more and more of my design work because honestly, and I cannot stress this enough, it's so freaking easy.

So let's look at some of these quick fixes. And for me, most of the time, this starts in linear and I'll batch an hour or two to just kind of work through some of my issues that I'm recording.

[00:07:18] **Michael Riddering-8:** sometimes it starts with a little research. Like I just want Claude to go figure out what the state of things is. so I know what to do. So if I take this issue, for instance,

I saved a little loom where a user was having this issue Where we used to have this ability to pin a question inside of inflight, so you had spatial context and we removed it through some of my design work. So I'm gonna bring it back.

So I'll just create a new workspace, which automatically spins everything up for me, and I'll probably dictate something like this. Hey, so in a previous build when you were creating your feedback guide, users had the ability to pin a question to a place on the [00:08:00] canvas, and that way there was some spatial context associated with that question item.

I'm wondering how much of that currently exists in the code base. Can you please do a little bit of research Around adding pins on the canvas and report back around what the state is, what's possible, and anything else that I need to know in order to make some changes in this space.

Side note, I pretty much dictate all of my prompts. It's so much faster and it's a little bit rambly, but I, it just works. So I find myself speaking a lot. Now, what that did is it created a new work tree and Claude is gonna go off and do a bunch of research. And the cool thing again is I don't have to wait for it to report back. I can just pop back into linear and you know, I'll mark this as in progress and maybe I'll just grab something else

Like this here, we need to increase the version title, character limit by 10 pixels. So I'm gonna just grab this image and I'm literally gonna grab the title exactly and I'll come in here, hit New [00:09:00] Workspace, command N, And I'll paste the text. And honestly for this, this is gonna be super, one ChatAble. I can just hit enter and I bet that it automatically figures it out for me.

And maybe I'll come in here and grab one more. I often like to work on three at a time, so let's grab this here, Copy this text. Come back into conductor. I'm gonna hit Command N again and just dump it all in. Okay. Just for your understanding, when someone initially fills out or answers one of the feedback requests, it marks it as complete, and then an add comment button appears below.

When users click that add comment button, I automatically want to focus the text input that appears in its place.

so my favorite sound is that Choo. And you can see here, you get this little update. Lemme [00:10:00] get rid of Super Whisper. In this situation, it's a little bit meatier. So Claude just dumped everything that I need to know in order to give it future changes. And what I can actually do is spin up multiple agents in parallel.

and you can see here it one shot at it, except I just realized that in my split brain while making this video, I said 10 pixels instead of 10 characters, um, revert that I asked. I actually wanted to increase by 10 characters, not pixels. Oops. Not pixels. Okay. Embarrassing. But this kind of stuff happens all the time.

Okay, that was a really simple one. So I might just create a PR at this point, but the button that I absolutely love is this up here I can just hit command shift R, and it's automatically gonna spin up a new agent for me and then review my code. And again, this one's very, very simple, but when I'm [00:11:00] starting to get into waters that maybe I don't have as firm of an understanding for.

This is that extra boost of confidence to make me feel like my engineer's not gonna hate me for this pr. So I've been relying on this more and more, and oftentimes it will do a good job of highlighting the couple things that I should clean up, or maybe a slight refactor to write the code more efficiently.

Maybe I want to abstract something into a reusable component that all comes up during this review here. So it's become a pretty big part of my practice.

In this case it actually did catch something where I also want to update that little character counter pattern that I shared earlier from Figma Make and make it so that it still only counts down when 10 characters left rather than 20. Yeah, that makes a lot of sense.

Can you please update that? So it's still starting when only 10 characters remain.

At this point, I don't have to wait again. I'll pop over and see how is this guy doing?

most of the time I want to test things visually, so you can just hit command R and that is [00:12:00] automatically gonna spin up a dev server for you. In this case, it's live at 3 0 2, which I can open it up and now I'll play with it.

[00:12:08] **Michael Riddering-9:** So I answer the vibe slider, and if I hit add comment, it's automatically focused. Test it again for good measure. We are looking good.

So at this point I can hop back into conductor, confirm that adding comment auto focus is working. Great. I'll go ahead and create a PR and then while that's processing, I can pop back over here. We've increased the max title length, so this looks good. I'll create another pr.

hop back into my auto focusing the comment, and you can see it's here. I can go ahead and click on this and it's gonna automatically open it up in GitHub, write a little description, test plan, and I can ask for a quick review.

[00:12:53] **Michael Riddering-10:** Now, obviously not all design work is one shot able in this top left quadrant. So if we think about this [00:13:00] top right quadrant, this is where, you know, maybe I do have some building blocks to work with in production. Maybe a good amount of it is, you know, backend logic that I'm trying to understand and extrapolate Regardless, it's probably, you know, a pretty big meaty idea that I have to strategically break down with ai, and this is where I like to use the Claude Code Mac app as a CTO to help me prompt and evaluate the output of what I'm getting inside of Conductor.

As an example, I'm actually working on my own kind of personal operating system to replace obsidian and be my hub that I can just keep iterating on. And actually a lot of dive club workflows will be done inside of this tool. And you can see, you know, working title radar SI hate naming things. And I have this development plan.

I have a clawed integration, which apparently is called Molting now. As well as a Claude MD of just the top level context of the project, and I had a lot of back and forth with Claude to help it understand what [00:14:00] I was trying to accomplish. If I open up this original message, it's talking about my goals and I wanna understand feasibility, and basically I wanna build my perfect productivity software that is designed specifically for my workflows and use cases. Then I just went for it. I mean, looking at the amount of back and forth that I had one evening with Claude, just having it. Ask me questions. Ask me questions, ask me questions, and then I would give answers and it would refine, and then I would tell it to commit certain things to memory. And I'm just building up this understanding so that Claude can effectively function as my CTO and help me create some of these initial project docs.

The most important one is this development plan here. And I specifically asked Claude to break it up into phases and to think strategically about which work can happen in parallel so that I can use separate conductor work trees as well as separate conductor agents within an individual PR as effectively as possible. So you can see, like this is phase one, the core data [00:15:00] layer, and what I'm doing is I'm creating a new chat for each one of these phases, and then I actually have Claude write the prompts for conductor for me. So if I scroll all the way up here.

These are separate conductor work tree chats, and then it's simultaneously writing the prompt for each one of them.

I literally don't even read these. I kid you not. I just grab them and paste it into conductor because I've already done all of the work upfront in the planning phase.

what I then do is tell conductor that it has to report back to the CTO, and I take that report, I paste it back into Claude, and I ask it to evaluate the output, make sure everything looks good, and then it will create the prompt for the next step.

now this is obviously a pretty heavy duty example because I'm custom creating a product for myself from scratch, but the same concept applies even when I'm working with inflight. For instance, like if I'm going to. Tackle a larger feature that I know is gonna [00:16:00] touch some backend stuff and be a little bit more involved, like I'm not just working on a P three bug kind of thing.

I'll often give Claude Mac app the context upfront, have it help me write my prompts, and then I play that back and forth game where I have this CTO to evaluate the output on top of using conductor's built in code review agent as well. And it's just a way for me as. A designer who I, I do consider myself more of a builder, but I am not a senior engineer kind of person, and this way I'm kind of double and triple checking my work with ai.

Now I can't emphasize enough that this is my mental model in the way that I am personally practicing as a designer. And everybody's gonna be a little bit different based off of where you're at in your career, the type of company that you work at, and especially at the rate things are changing with ai.

But hopefully this adds a little bit of clarity and helps you think about which tools to reach for at which parts of your process. And I'm still learning as I [00:17:00] go. I can't emphasize that enough, so I'm sure there's going to be a part two of this episode as well. So I'm sure there's going to be a part two of this episode as well.

