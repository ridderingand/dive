---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: CqMZTg7L-wE
slug: 2026-01-02-lewis-healey-kylor-hall
source_type: youtube-captions
source: https://www.youtube.com/watch?v=CqMZTg7L-wE
guest: Lewis Healey and Kylor Hall
host: Ridd
title: "The trick to AI prototyping with your design system"
published: 2026-01-02
duration_min: 53
generated: 2026-09-10
generator: dive-club-ideas
note: "Descript project not found after Drive search exhausted. YouTube captions fallback. Timestamps ±30s; no diarization."
---
[00:00:02] We talk a lot about using AI at

[00:00:04] startups, but what are the more

[00:00:07] established companies doing to scale AI

[00:00:08] prototyping internally?

[00:00:09] >> With AI, it's it's a lot more about

[00:00:11] like, okay, how do we document this so

[00:00:14] that it's available in the AI in the

[00:00:18] LM's memory at all times as opposed to

[00:00:19] typically with the design system, the

[00:00:21] way I see that we would do these things

[00:00:24] is through programs and people and

[00:00:26] cultural reinforcement, design reviews,

[00:00:28] that sort of stuff. Now it's like, okay,

[00:00:30] can we just tell it exactly what we care

[00:00:31] about?

[00:00:32] >> How do you use your design system to get

[00:00:35] the most out of tools like Replet or

[00:00:35] Figma make?

[00:00:37] >> Now we're kind of going into a fluid

[00:00:41] model where anyone with any tool can

[00:00:44] essentially ship to a customer and we

[00:00:45] need to figure out how to support that.

[00:00:47] Like the design system remit has just

[00:00:50] blown up into like anyone in the

[00:00:52] organization can essentially ship and

[00:00:55] that's a really challenging problem to

[00:00:58] solve. Welcome to Dive Club. My name is

[00:01:00] Rid and this is where designers never

[00:01:03] stop learning. This week's episode is

[00:01:06] with Louis Healey and Kyler Hall and

[00:01:08] they're doing a deep dive into all of

[00:01:10] the ways that they scaled [music] AI

[00:01:13] prototyping at Atlassian. And I want to

[00:01:15] start this conversation by taking a look

[00:01:17] at how they're using templates in Figma

[00:01:19] Make because I've never seen this

[00:01:20] approach before

[00:01:22] >> with AI prototyping. At the beginning,

[00:01:25] it very much was about just like

[00:01:28] allowing people to spin up or ideulate

[00:01:30] ideas with code. So very much like how

[00:01:33] do we augment product managers, product

[00:01:35] designers, content designers to

[00:01:38] essentially create a coded prototype of

[00:01:39] their idea. Initially when we were kind

[00:01:42] of piloting AI prototyping earlier this

[00:01:44] year, design system team wasn't

[00:01:47] necessarily the key integration for AI

[00:01:49] prototyping. It was very much like, oh,

[00:01:51] let's just focus on low fidelity and

[00:01:53] just spin something up. And very

[00:01:55] quickly, once we gave people access to

[00:01:58] these AI prototyping tools, it very much

[00:02:00] was like, well, I need this to look like

[00:02:02] an elastic experience. How do we do

[00:02:03] that? And that's when the kind of design

[00:02:06] system team came in and we kind of

[00:02:08] created what you're seeing here, these

[00:02:11] templates. So, this template essentially

[00:02:13] is that starting point, that kind of

[00:02:16] baseline for people to spin up a

[00:02:18] experience. So whether they want to

[00:02:19] create their own kind of like sub

[00:02:21] template. So we have a lot of apps in

[00:02:23] our collections at Atlassian. So we have

[00:02:26] Jira, Confluence, Loom. They may want to

[00:02:29] create their own specific um template

[00:02:32] for product designers to use and kind of

[00:02:34] experiment and ideulate on. And you know

[00:02:36] they don't want to have to create a road

[00:02:39] map every single time. But to do that

[00:02:41] they want to essentially get some very

[00:02:42] similar content which is like you know

[00:02:44] the top nav and the sidenav. they kind

[00:02:46] of need to be the same or or very high

[00:02:49] fidelity. So, we've realized that if we

[00:02:51] create this kind of base template, then

[00:02:53] you get these things like the top nav

[00:02:55] and the sidenav consistent, but then

[00:02:57] also allows them to then make their make

[00:02:59] their own version. We've landed on this

[00:03:02] like kind of abstracted template where

[00:03:04] it's not actually a specific product.

[00:03:07] It's just a bunch of elements that the

[00:03:10] AI would usually get quite wrong. So um

[00:03:12] our top nav and our siden nav was um

[00:03:17] very very hard to consistently generate.

[00:03:18] What we would um find is when we were

[00:03:21] kind of initially creating these

[00:03:23] instructions to generate these

[00:03:25] prototypes it would hallucinate the

[00:03:28] icons the navigation elements like our

[00:03:30] navigation system has a lot of imports

[00:03:32] and it would just always get one or two

[00:03:33] wrong. You know, if people were

[00:03:35] uploading a screenshot and trying to

[00:03:37] kind of replicate an experience in

[00:03:39] production, the top nav and the sidenav

[00:03:41] would also be incredibly wrong because

[00:03:43] we're in a kind of state of of improving

[00:03:45] the the visual refresh of it. This is

[00:03:48] why this template was born where we like

[00:03:50] okay let's just code the topnav let's

[00:03:52] just code the siden nav and then when

[00:03:54] people are uploading a screenshot of

[00:03:56] their the side navigation elements that

[00:03:59] they want we found the agent you know

[00:04:01] figma make and replet is actually very

[00:04:04] very good at just changing the code that

[00:04:06] already exists when before when we were

[00:04:08] focusing on our instructions it was

[00:04:10] taking nothing and trying to build

[00:04:12] everything. So we found just that kind

[00:04:15] of that initial starting point reduced

[00:04:17] probably the um the error rate from

[00:04:20] maybe like half of the prototypes were

[00:04:22] having a lot of navigation issues to

[00:04:25] probably nearly zero of them. Maybe just

[00:04:27] a few icon hallucinations here and

[00:04:29] there. But it if you upload a screenshot

[00:04:32] of any side navigation in Atlassian it's

[00:04:34] going to get a lot of the combination of

[00:04:36] navigation elements pretty correct. And

[00:04:39] that really um supercharged prototyping

[00:04:42] for people because what we found is

[00:04:45] people were spending like maybe two or

[00:04:46] three hours just trying to get that

[00:04:49] topnav and side navigation pixel perfect

[00:04:51] because that's what makes you feel like

[00:04:53] you're in an Atlassian experience. And

[00:04:55] when you're testing with customers, you

[00:04:56] want the topnav and sidenav or the

[00:04:59] chrome to feel like you're in product.

[00:05:00] Otherwise, people are going to get too

[00:05:02] distracted. But the content, it's not

[00:05:04] that important. And what we found is if

[00:05:07] you kind of do any content or any main

[00:05:09] content in this area, you can kind of

[00:05:10] get away with it. But when the top

[00:05:12] navigation and the side navigation is

[00:05:14] incorrect, people start to get a little

[00:05:16] bit confused. The way findings a little

[00:05:19] bit off. So we've really solved that by

[00:05:20] having that hybrid approach of like a

[00:05:23] pre-coded template with design system

[00:05:24] instructions. So then when you're

[00:05:26] building on top of it and when you're

[00:05:28] creating more product specific templates

[00:05:31] like a road map, etc., It's not going to

[00:05:33] get the basic elements and incorrect.

[00:05:35] >> Real quick message and then we can jump

[00:05:37] back into it. So, I got a new computer

[00:05:38] recently and what do you think was the

[00:05:41] very first app that I installed? [music]

[00:05:42] If you've been listening to this show

[00:05:43] for a bit, then you probably guess that

[00:05:46] the answer is Raycast. At this point, it

[00:05:49] is an extension of my fingertips and a

[00:05:50] fundamental way that I use [music] my

[00:05:52] computer. And I'm not alone. I mean, I

[00:05:54] see this sentiment from people I looked

[00:05:57] up to on Twitter all the time. So, if

[00:05:58] you're still on the fence, I mean,

[00:06:01] [music] just do it. Download Raycast and

[00:06:03] thank me later. Just head to

[00:06:04] dive.club/racast

[00:06:07] [music] to get started. All right,

[00:06:09] here's the thing. You don't need another

[00:06:11] dashboard. What you need to do is to

[00:06:14] talk to customers. So, I want to

[00:06:16] introduce you to Genway AI. You can

[00:06:18] think of it kind of like Vibe

[00:06:20] researching to validate [music] your

[00:06:22] ideas quickly. Just draft your

[00:06:25] questions, select an ICP, and then their

[00:06:28] AI agent runs interviews on your behalf

[00:06:30] by pulling from a panel of global

[00:06:32] participants. I mean, you can literally

[00:06:33] set it up in the morning and get

[00:06:35] actionable insights by [music]

[00:06:37] lunchtime. It's validation at your

[00:06:39] fingertips and you can try it out free

[00:06:41] for 14 days. Just head to

[00:06:44] dive.club/genway

[00:06:48] to get started. That's gnawy. [music]

[00:06:51] Okay, now on to the episode. It's genius

[00:06:55] because I've spent so much time just

[00:06:57] making little tweaks to the shell of my

[00:06:59] UI when actually the only thing that I

[00:07:01] want to prototype is a piece of the

[00:07:03] content or maybe it's a different layout

[00:07:05] on the screen and I don't I don't care

[00:07:06] about the sidebar. I just want it to

[00:07:08] feel a little bit real. I mean, I've got

[00:07:10] so frustrated with it that at times I've

[00:07:14] even taken screenshots of prod and my

[00:07:16] first prompt is add this image as the

[00:07:18] background to the page and then I just

[00:07:20] put components on top of it because I'm

[00:07:23] tired of adjusting the shell. And so

[00:07:25] this starting point makes a lot of

[00:07:26] sense. I'm even just going to restate my

[00:07:28] understanding so for myself and

[00:07:30] everybody it's like really clear how

[00:07:32] this is being used. So we're looking at

[00:07:36] Figma make. This is presumably a file in

[00:07:37] a project somewhere that anybody can

[00:07:41] just run and duplicate and it exists in

[00:07:43] code. It's not any one real product.

[00:07:46] It's honestly kind of just a set of like

[00:07:48] core scaffolding and subcomponents and

[00:07:52] sidebar interactions that the AI is then

[00:07:54] using as a foundation to build whatever

[00:07:56] that person wants. And then you've even

[00:07:58] baked some education for how to use the

[00:08:00] template into like the core page layout

[00:08:02] itself. And so anybody can open this up

[00:08:04] and they just start typing and talking

[00:08:06] with the agent about what they want to

[00:08:07] make. Is that kind of correct

[00:08:08] understanding?

[00:08:11] >> Absolutely. Yeah. So this template you

[00:08:12] can either use it where you're creating

[00:08:14] your own sub templates. So you know that

[00:08:16] kind of geospecific road map that then

[00:08:18] people then want to then duplicate. So

[00:08:20] it's a bit of a network effect or you

[00:08:22] can just if you're creating tile in your

[00:08:23] experience you're just ideating

[00:08:25] something new. You can just duplicate

[00:08:27] this template and then you can just you

[00:08:29] know go for your life. So we've included

[00:08:32] some you know key instructions to to

[00:08:33] people you know if you want to change

[00:08:35] the product name to Jira what we've

[00:08:37] actually tried to do is we found that

[00:08:39] hallucinations of this icon and this

[00:08:41] logo were very very common there's a

[00:08:44] huge spectrum of confidence and

[00:08:46] understanding of how to prompt at

[00:08:48] Atlassian and what we found some people

[00:08:52] were saying like change logo to Jira and

[00:08:54] what it would do is it would go based on

[00:08:57] its pre-trained knowledge um and it

[00:08:59] would just pull in a really old Jira

[00:09:01] logo and then swap that out.

[00:09:02] >> So what we've actually found is by

[00:09:05] having a configuration

[00:09:08] object of just some hard, you know,

[00:09:10] constants that then includes product

[00:09:13] icon and some elements and then hooking

[00:09:18] align:start position:0%

[00:09:20] um randomly we found that actually it

[00:09:23] hallucinated a lot less and then on top

[00:09:24] of that we found it hallucinated even

[00:09:27] less when we gave people like a copyable

[00:09:30] command that rather than saying change

[00:09:31] logo to Jira they can just click that

[00:09:33] and copy it and then they know how to

[00:09:36] switch things into that logo. So, we've

[00:09:37] kind of had this really hybrid approach

[00:09:41] of like pre-coded elements, you know,

[00:09:42] design system instructions, but then

[00:09:45] also the user experience of how to

[00:09:47] reduce very common and like annoying

[00:09:50] hallucinations that would just, you

[00:09:51] know, create that extra one or two

[00:09:53] prompts, but it would probably really

[00:09:55] lower the bar of people's confidence

[00:09:57] that they can't seem to get the simplest

[00:10:00] stuff working. And that's because, you

[00:10:01] know, the AI doesn't know about the

[00:10:03] intricacies of these new logos we've

[00:10:06] created. it's just going based off what

[00:10:08] it has been, you know, pre-trained on,

[00:10:10] which is like, oh, this is the Jira

[00:10:12] logo. So, we found that really, really

[00:10:13] effective.

[00:10:14] >> Before this, we just tried to give

[00:10:17] people a set of prompts like here's 100

[00:10:19] lines, copy and paste this into Figma

[00:10:21] make, it might work, it might it might

[00:10:23] set it up. And a lot of that's like we

[00:10:25] have a bunch of theming. We have like

[00:10:27] feature flags and feature gates that

[00:10:29] have to be turned on that aren't even

[00:10:31] documented well outside of internally.

[00:10:33] So it's very hard to ask an LM to do

[00:10:35] that. The only way to really do it is

[00:10:37] basically have an engineer tell you how

[00:10:39] to do it. So we want prototypes to kind

[00:10:42] of show off where where we're headed. We

[00:10:44] we might use them for demos and design

[00:10:46] reviews, that sort of stuff. So we of

[00:10:47] course want it to ideally be cutting

[00:10:50] edge and possibly even even you know

[00:10:52] future baked. So a lot of that just

[00:10:54] requires us to kind of bake in a lot of

[00:10:56] the code things that in a designer

[00:10:58] should never even know exists. We

[00:10:59] started with those prompts and a lot

[00:11:01] more of them and then over time it's

[00:11:03] just like well what if we just bake the

[00:11:05] entire default that an engineer should

[00:11:08] know by by heart into these templates so

[00:11:09] people could just iterate very quickly.

[00:11:11] We've also taken that a little bit

[00:11:13] further as well where you may not want

[00:11:16] an entire template right like we have

[00:11:18] you know rovo which is our kind of you

[00:11:21] know AI and Atlassian and that's kind of

[00:11:25] interface through a a chat box now do

[00:11:27] you have to duplicate a template to just

[00:11:30] add robo in probably not right like if

[00:11:31] you already have an existing prototype

[00:11:33] it gets a little bit cumbersome so what

[00:11:35] we've found is we've created this thing

[00:11:38] called recipes where they are kind of

[00:11:40] what Carlo mentioned before, which is

[00:11:42] like a code blob with some instructions

[00:11:44] basically of like here's how you

[00:11:48] recreate the chat box and then this is

[00:11:49] where you put it. And it's not going to

[00:11:51] be pixel perfect to what is in

[00:11:53] production, but it's be good enough to

[00:11:56] get that look and feel without having to

[00:12:00] make every single user of of prototyping

[00:12:02] upload a screenshot and try and get that

[00:12:06] pixel perfect. So we found this kind of

[00:12:08] recipe approach as well really helps

[00:12:11] with those like smaller elements that

[00:12:12] you know are maybe a little bit more

[00:12:14] technical for people to do. Another

[00:12:17] example is like dark mode by default.

[00:12:19] Some of our user personas are that you

[00:12:21] know developers probably aren't using

[00:12:23] light mode by default and if we're

[00:12:25] prototyping maybe we want dark mode.

[00:12:27] That's you know involving a lot of like

[00:12:29] theming coding. It's a little bit tricky

[00:12:31] to actually change the default mode to

[00:12:33] dark mode. So we created a recipe where

[00:12:35] you could just paste a bunch of

[00:12:36] instructions in and it will just switch

[00:12:39] out the mode for you into dark mode. So

[00:12:40] we're trying to think of the user

[00:12:44] experience of a non-technical user using

[00:12:46] code which can be a challenge in itself.

[00:12:48] >> Okay, so this is the end state. It's

[00:12:50] beautiful. You're introducing me to a

[00:12:51] lot of concepts that I haven't

[00:12:52] considered before. Even the way that

[00:12:55] you're thinking about recipes is genius.

[00:12:58] I think my goal after seeing this now is

[00:13:00] to kind of understand like how can

[00:13:02] someone else reverse engineer this

[00:13:04] system that you've built because I'm

[00:13:07] pretty sold. So can we even go back in

[00:13:11] time a bit and talk about like what did

[00:13:14] it take to even arrive at that end state

[00:13:16] and maybe we can dig into some of the

[00:13:17] lessons that you've learned along the

[00:13:20] way. Essentially how how we started to

[00:13:23] um integrate the design system is you

[00:13:26] know Ka and I thought oh great sweet.

[00:13:27] We're just going to take our Atlassian

[00:13:29] documentation.

[00:13:31] We're going to put in a bunch of

[00:13:33] examples or a text file upload that text

[00:13:36] file and say now build with this. And we

[00:13:39] got some pretty rubbish results because

[00:13:41] first of all the file was massive. So it

[00:13:44] was just truncating the information and

[00:13:47] only creating a subset of of the

[00:13:48] components, but it also didn't really

[00:13:51] know how to use those components and how

[00:13:53] to use it in an AI prototyping world

[00:13:54] because what we were doing is we were

[00:13:56] applying just the mental model of a

[00:13:58] human using documentation and trying to

[00:14:02] apply it to a machine or an AI. So the

[00:14:04] that was a very very quick learning um

[00:14:06] of yeah, okay, that's not going to work.

[00:14:07] Let's actually just like figure out how

[00:14:10] to actually talk to this machine. And I

[00:14:11] think some of the the cool things that

[00:14:13] we did is we got some really good

[00:14:17] results by actually trying to talk to

[00:14:20] the AI in a way that it understands.

[00:14:23] What I mean by that is that we have a

[00:14:26] guidelines.mmd file which includes all

[00:14:29] of our design system um documentation.

[00:14:31] Now eventually this will be an MCP once

[00:14:33] we can plug in MCP but for now these are

[00:14:36] instruction files. And this is

[00:14:38] essentially how we get design system

[00:14:40] generations to a pretty high fidelity.

[00:14:42] But there's an interesting thing that we

[00:14:43] found really valuable which I've not

[00:14:46] seen too many people do which is we try

[00:14:49] and instruct it to kind of think in

[00:14:51] Tailwind still which is obviously going

[00:14:54] to it's pre-trained data. I assume most

[00:14:56] models have been trained on shad CN and

[00:14:57] Tailwind because of the amount of open

[00:14:59] source code out there which is you know

[00:15:01] why everything is react as well. We try

[00:15:03] and go okay generate that when you think

[00:15:07] in Tailwind classes once you see this

[00:15:09] thing it oh it's actually this design

[00:15:11] system component. So what we mean by

[00:15:13] that is we actually have in every

[00:15:14] instruction in every one of our

[00:15:17] components we have a translating from

[00:15:19] tailwind

[00:15:21] section where we say if you see these

[00:15:24] class names actually it should be this

[00:15:26] react code and we found this actually

[00:15:29] really beneficial in terms of reducing

[00:15:31] some of those hallucinations where you

[00:15:33] know we have a component in Allesian

[00:15:36] called lozenge now I don't see I don't

[00:15:38] think I've seen lozenge in many other

[00:15:40] design systems it's a very

[00:15:42] name and then whenever there's new new

[00:15:43] people joining um joining Atlassian

[00:15:45] they're like what's a lozenge and then

[00:15:47] we have to explain it so AI is probably

[00:15:49] not going to know what a lozenge is it's

[00:15:50] probably going to think it's something

[00:15:52] else this provides an opportunity for us

[00:15:54] to kind of say oh you see it this way

[00:15:57] feel free to think that way but then now

[00:15:59] translate it into something that we want

[00:16:00] to generate so you can see here like

[00:16:02] span if it's you know using these

[00:16:05] tailwind classes it's actually this this

[00:16:08] important badge and and we found that

[00:16:10] really effective in in reducing quite a

[00:16:13] lot of hallucinations. And at the top,

[00:16:14] we then have really specific

[00:16:16] instructions saying, you know, use

[00:16:19] Elastian design system first,

[00:16:21] use design tokens first, and then use

[00:16:23] Tailwind for like kind of missing things

[00:16:24] and try and swap things over.

[00:16:26] >> Who's responsible for this document? I

[00:16:27] mean, this is about as robust as a

[00:16:29] guidelines document I've ever seen.

[00:16:31] >> Myself [clears throat] and Kyla. The the

[00:16:32] first version of this was fully

[00:16:34] vibecoded. So Carla was away for a month

[00:16:37] I think in Japan and I love working with

[00:16:40] Carla and I was just in this this depth

[00:16:42] of like having to get this design system

[00:16:44] integration working because we were in

[00:16:46] the middle of a pilot and we had 300

[00:16:49] people wanting to just like use design

[00:16:51] system and I had no way of understanding

[00:16:53] how to do that. So the first set of

[00:16:55] these instructions was absolutely

[00:16:58] vibecoded and I'm sure Kylo can attest

[00:16:59] to it. Like there was a lot of

[00:17:02] discrepancies. There was a lot of like

[00:17:04] just contradictions and everything but

[00:17:06] it got really good results. Then after

[00:17:08] that we then decided okay how do we

[00:17:10] actually centrally manage this and how

[00:17:12] do we actually generate this with some

[00:17:16] level of of consistency which I'm sure

[00:17:17] Carlo can can talk about how we got to

[00:17:18] that. Now,

[00:17:21] >> so on on Alask [clears throat]

[00:17:24] uh full file and that's about 5,000

[00:17:26] lines of just a gente content and we'll

[00:17:28] say 90% of that was vibe coded about 9

[00:17:31] months ago because it was like oh okay

[00:17:33] let's actually you know I think I think

[00:17:35] the the journey for a lot of us was like

[00:17:37] oh hey we can we can use cursor like

[00:17:39] it's allowed to use cursor we also got

[00:17:41] VS code and like different things click

[00:17:42] for different people at different times

[00:17:43] I think I I clicked with cursor and I

[00:17:45] was like okay what does it look like to

[00:17:47] teach it how to work with the design

[00:17:49] system and a lot of that was just like

[00:17:52] okay let me just create instructions to

[00:17:53] tell it how to use our token system

[00:17:56] because it does not get it from its

[00:17:57] industry training model at all. So we

[00:17:59] just have to basically make a table of

[00:18:03] here's every single token. So this is

[00:18:06] like the the first version that we I

[00:18:07] would say we started with I think back

[00:18:09] in like March. Well, this has probably

[00:18:11] come a long ways from the first version,

[00:18:14] but um this is the the current iteration

[00:18:16] of the first version, which we were

[00:18:17] like, okay, what is what does it look

[00:18:19] like just to put all of this agenda

[00:18:20] content? Like there's a bunch of prompts

[00:18:22] floating around, which is like, hey, how

[00:18:23] do you create a button? How do you style

[00:18:25] something? How do you use our tokens?

[00:18:27] How do you use our theming? Um that sort

[00:18:28] of stuff that was floating around for

[00:18:30] probably a month. And it was like, okay,

[00:18:31] could we just make this public? So, we

[00:18:34] made an LMTXT file. The full version is

[00:18:36] kind of all of our content uh truncated

[00:18:39] together. And yeah, kind of a lot of it

[00:18:41] was just let's let's create some some

[00:18:43] maps to explain like what these things

[00:18:46] mean. And then over in Figma make and

[00:18:48] replet, we've actually in addition to

[00:18:50] showing light and dark modes, we'll

[00:18:51] actually show like a tailwind class as

[00:18:53] well just for color. I don't have that

[00:18:55] up, but um

[00:18:58] >> yeah, this is really where it started.

[00:19:02] But this is yeah this is like 5,000

[00:19:04] lines whereas we've kind of settled on

[00:19:07] something more 2 to 3,000 lines within

[00:19:09] prototyping that's a little bit more

[00:19:12] succinct because a lot of these are very

[00:19:15] verbose in in relatively good ways but

[00:19:17] it takes a lot of tokens and a lot of

[00:19:19] context to actually generate with this.

[00:19:23] So we've tried to avoid using it in full

[00:19:25] if that makes sense. But yeah, this is

[00:19:28] basically where I started generating

[00:19:31] effectively just vibe coding. Okay, go,

[00:19:33] you know, build a button section, go

[00:19:35] build a lozen section, go build the

[00:19:36] token section. Here's the file. And a

[00:19:38] lot of that was just hallucinated

[00:19:41] originally um until I could go in or me

[00:19:43] or or another engineer or Lewis could go

[00:19:45] in and be like, hey, these are all the

[00:19:47] wrong media queries. Let's say let's go

[00:19:48] and fill in with the right media

[00:19:49] queries. And it's like, oh, okay, look

[00:19:51] at this file instead. Don't just use

[00:19:53] industry trained things. And then we get

[00:19:57] all the right things. Lewis probably use

[00:19:58] some things like this to basically be

[00:20:00] like, can we have, you know, a Figma

[00:20:02] make or replet version of this? And

[00:20:04] then, oh, Tailwind doesn't work. We're

[00:20:06] hallucinating more on icons than we were

[00:20:09] before. So, let's overindex on certain

[00:20:11] things. And then I think there were also

[00:20:12] some cases where it's like, we don't we

[00:20:15] don't need all of these these props or

[00:20:17] we don't even need the hide component.

[00:20:19] Um, it it probably knows how to do that.

[00:20:22] So this is like everything whereas I

[00:20:24] think replet and Figma make we probably

[00:20:27] show only 20 or 30 components as opposed

[00:20:31] to like the 100 plus we have. So not

[00:20:33] only is it specifically our content but

[00:20:35] it's also a very drilled down version of

[00:20:36] our content

[00:20:39] >> for a timeline view as well like this

[00:20:42] lens. the first created file. Then

[00:20:44] that's what I tried to use when I then

[00:20:46] vioded when Carlo was away for a month.

[00:20:48] Then had to vive code my own thing. And

[00:20:50] then once Carlo came back, we then

[00:20:51] figured out how to make a scalable

[00:20:51] version.

[00:20:53] >> Okay, so we saw the guideline file.

[00:20:55] We've talked about some of the lessons

[00:20:58] learned even about giving people coded

[00:20:59] lines of of text that they can just like

[00:21:03] paste into prompts. Were there other

[00:21:05] areas or clear points where you just

[00:21:07] iterated? You did something different.

[00:21:09] you learned something about how this

[00:21:11] process should work where you made a

[00:21:13] change or this just influenced the way

[00:21:15] that you thought about what it would

[00:21:18] take to enable AI prototyping at scale.

[00:21:20] >> We were getting pretty good results like

[00:21:23] maybe 60 70% from like what we call a

[00:21:24] one shot. So, I was like benchmarking

[00:21:26] the effectiveness of these AI

[00:21:28] prototyping tools and I was kind of

[00:21:30] screenshotting a simple card and then

[00:21:33] I'd screenshot a really complex screen

[00:21:35] and I would see how well it performed

[00:21:37] from a single shot or like a single

[00:21:39] prompting like build this screenshot and

[00:21:40] then see what the results were and we

[00:21:41] were getting

[00:21:43] >> this just based off of just on the

[00:21:45] guideline file and that's it

[00:21:47] >> just off the instructions. Yeah, just

[00:21:48] off the instructions. it was getting

[00:21:51] like 50 60% accuracy like with the

[00:21:53] hybrid template approach it was you know

[00:21:55] getting a lot higher um it was

[00:21:57] hallucinating a lot but I was still

[00:22:00] getting annoyed by certain parts of it

[00:22:01] and that was like things like our text

[00:22:05] and our icons and I was just obsessed

[00:22:06] with trying to just get it higher and

[00:22:08] higher and I had a little bit of

[00:22:10] inspiration from like printer sheets.

[00:22:12] So, like you know when you like print

[00:22:14] and you need to configure your printer,

[00:22:16] it prints like this special sheet of all

[00:22:18] these like colors and shapes and

[00:22:20] patterns and then it's used to then

[00:22:22] configure the heads of the printer or

[00:22:24] something. So, I was like, what if I

[00:22:26] just did that for AI prototyping? What

[00:22:29] if I just put a bunch of things on a

[00:22:32] prototype and just said, describe it to

[00:22:34] me. How would you describe this? How

[00:22:36] would you actually prompt this? and then

[00:22:38] use that to then reinforce the

[00:22:40] instructions to basically

[00:22:42] >> talk to it how it expects to be talked

[00:22:45] to. And that really helped with kind of

[00:22:48] like understanding why the icons were

[00:22:51] were being hallucinated and then also

[00:22:54] things like text like why why it

[00:22:56] couldn't figure out certain aspects of

[00:22:58] text. And I found that it was kind of

[00:23:00] hard to determine the the font size of

[00:23:02] something when I asked it to kind of be

[00:23:03] like, "Oh, here's a bunch of text. tell

[00:23:05] me the font size is tell me the font

[00:23:08] weight it would often hallucinate that

[00:23:10] from just a screenshot. I found that

[00:23:11] yeah like with these sticker sheets that

[00:23:13] it thought differently than what I

[00:23:15] thought like. So then it was very much

[00:23:16] around like okay how do we actually like

[00:23:18] meet in the middle and and improve those

[00:23:21] outputs and we actually got way better

[00:23:23] kind of um our primitive layer

[00:23:25] essentially like our typography

[00:23:28] components like heading and text um that

[00:23:30] started to be rendering a lot more

[00:23:32] accurately because when it was seeing a

[00:23:34] screenshot I was talking to it in the

[00:23:36] way that it actually read that I'm kind

[00:23:38] of like talking to the computer vision

[00:23:40] element of it when before I was very

[00:23:43] much just like oh this is Atlassian deal

[00:23:45] with it. Um, so I find that if you

[00:23:48] really try and go closer to the metal,

[00:23:50] um, then you're probably going to get

[00:23:52] better results and understanding why.

[00:23:53] >> Is there an example that we can use just

[00:23:55] to get specific about it? Cuz I nodding

[00:23:57] along cuz like conceptually it makes

[00:23:58] total sense, but I'm also like, okay,

[00:23:59] but like

[00:24:01] >> where and what is that change that would

[00:24:03] allow you to kind of close that gap?

[00:24:05] >> You can see the prompt here, which is

[00:24:06] like I want to calibrate your computer

[00:24:09] vision model like can you add um the

[00:24:11] image in and then create bounding boxes.

[00:24:13] So, this is very much like me just

[00:24:17] trying to get it to tell me about these

[00:24:20] elements and what it picks up cuz what

[00:24:22] what I was suspecting is a lot of things

[00:24:25] around like certain components that have

[00:24:27] like a weak border or things with more

[00:24:30] wide space. It was really struggling to

[00:24:32] pick up the bounding box of them

[00:24:35] >> and then recreate them. So, this really

[00:24:37] told me a lot about like the limitations

[00:24:39] of the computer vision. And what I found

[00:24:42] as well is like the more complex the

[00:24:44] screenshot, the less it picked up and

[00:24:46] actually it truncated and missed a bunch

[00:24:49] of elements. Um, so you know like things

[00:24:51] lower down on the on the side navigation

[00:24:53] of a screenshot as an example. So let's

[00:24:55] say this is our side navigation. Things

[00:24:57] around this prompt box or anything would

[00:24:59] just been completely skipped because it

[00:25:01] probably has reached a context limit of

[00:25:03] like how much it can ingest. And that

[00:25:05] really told me a story around oh okay

[00:25:09] like first of all I have to now instruct

[00:25:11] our thousands of people prototyping that

[00:25:13] okay when you're uploading a really

[00:25:14] complex screenshot it's going to miss

[00:25:16] stuff so break things down into like

[00:25:18] sections of like the top now side nav so

[00:25:21] it really helped me improve the you know

[00:25:23] the training I gave people but also

[00:25:25] showed me like you know as you can see

[00:25:27] here the bounding boxes that it's

[00:25:29] created around it and how it interprets

[00:25:31] certain elements so I got it to like

[00:25:34] name things as So you can see with this

[00:25:37] one we have a component called icon

[00:25:40] tile. I was really interested to see how

[00:25:41] it picked up these smaller tiles with

[00:25:43] these kind of subtler imagery which we

[00:25:45] have a lot in our products. My suspicion

[00:25:47] was it's not picking it up and that's

[00:25:49] why it was hallucinating it and it was

[00:25:52] true. So you can see with these this

[00:25:55] size it didn't pick up the color at all.

[00:25:57] >> It just picked up the icon. So I was

[00:25:59] like, okay, I need to provide more

[00:26:02] specific instructions to improve the

[00:26:05] outputs of this or help users go, okay,

[00:26:07] if you have something that's being

[00:26:09] hallucinated with an icon tile, which is

[00:26:10] this component, you're probably going to

[00:26:12] have to use maybe Figma MCP or you're

[00:26:13] going to have to upload a smaller

[00:26:15] screenshot or like a zoomed in

[00:26:17] screenshot of it, and update it

[00:26:19] peacemeal because if you're uploading a

[00:26:20] big screenshot, it's just going to miss

[00:26:23] that. So this didn't necessarily always

[00:26:25] influence our instructions of our, you

[00:26:26] know, our design system instructions

[00:26:28] that would then generate the code. It

[00:26:30] very much also influenced how I actually

[00:26:33] talk about how to get [music] the best

[00:26:36] results from that kind of one shot with,

[00:26:37] you know, the thousands of people um

[00:26:39] using prototyping. [music] Hey, really

[00:26:41] quickly, let me tell you about the

[00:26:43] allnew dive talent network. I've hand

[00:26:45] assembled over a hundred of the most

[00:26:47] talented designers and builders that I

[00:26:49] know so I can recommend them to my

[00:26:51] favorite companies. So, if you're

[00:26:52] listening to this and [music] you're

[00:26:53] open to new opportunities, the talent

[00:26:55] network is anonymous and super low

[00:26:58] pressure. It's just an easy way to see

[00:27:00] what's out there without having to post

[00:27:01] on social media. So, if you're

[00:27:03] interested in joining or maybe you're

[00:27:05] looking for your next hire, head to

[00:27:08] align:start position:0%

[00:27:10] I mean, gosh, you're dealing with a heck

[00:27:11] of an adoption [music]

[00:27:13] problem, I would imagine, and a lot of

[00:27:15] education required to get people

[00:27:17] comfortable and out of their comfort

[00:27:19] zones and whatever tools they were

[00:27:22] familiar with before. So, what have been

[00:27:24] some of the tactics that you've had the

[00:27:27] most success with and maybe any key

[00:27:29] learnings along the way in terms of how

[00:27:32] do we set people who are not as

[00:27:33] technical up for success with AI

[00:27:35] prototyping? Our first problem is

[00:27:39] getting people to even see any training

[00:27:41] you've done. So we've got, you know,

[00:27:43] hundreds of designers, hundreds of PMs,

[00:27:45] hundreds of thousands of engineers, and

[00:27:47] we've probably got around like 11,000

[00:27:48] employees.

[00:27:51] So there's thousands of people that are

[00:27:53] going to be using AI prototyping at one

[00:27:55] time. It's almost impossible to even

[00:27:58] reach that many people. Even if I DM'd

[00:28:01] 100 people a day, right? It's every time

[00:28:03] it's going to take a time. So that is

[00:28:05] the kind of starting point in your

[00:28:07] brain. It's like like not everyone is

[00:28:09] going to see this thing and I've done a

[00:28:11] lot of training like adoption training

[00:28:12] design system training before and I

[00:28:14] found that like if you build it they do

[00:28:17] not come. You really have to make sure

[00:28:20] it's as simple as possible and also in

[00:28:23] the different formats that people learn

[00:28:25] in. So the the first approach we did was

[00:28:28] like okay looms let's focus on looms

[00:28:29] let's focus on video guidance but then

[00:28:31] also written guidance. We found that uh

[00:28:34] really effective in just providing a

[00:28:37] baseline of a 101 prototyping

[00:28:39] essentials, right? Like here's just the

[00:28:41] basic stuff that you need to know to

[00:28:43] succeed. And a lot of that covered is

[00:28:45] like one of the videos I recorded was

[00:28:48] just a UI tour, just a 3minut UI tour of

[00:28:50] this button does this, this button does

[00:28:53] this, this button does this. Because a

[00:28:54] lot of what you'll find a lot of people

[00:28:57] aren't that exploratory, right? They've

[00:29:00] maybe got a top- down push to, you know,

[00:29:02] you need to use AI prototyping. AI, AI,

[00:29:03] maybe they got a bit of pressure. They

[00:29:05] may not have time to click every button

[00:29:07] and understand what it means. And I

[00:29:08] found it was really effective just to

[00:29:10] tell them this does this, this does

[00:29:12] this, this does this. That's important.

[00:29:13] That's not important. Don't worry about

[00:29:15] that. That created a really nice

[00:29:17] baseline for people. And then you start

[00:29:18] like building up the the confidence and

[00:29:20] the knowledge and more advanced topics.

[00:29:23] But the 101 was really around like, you

[00:29:25] know, here's the UI, here's this new

[00:29:27] thing you have to learn, and here's just

[00:29:29] some tips on how to get the best result.

[00:29:32] So like that thing I mentioned before

[00:29:33] around like, you know, if you want to

[00:29:35] recreate a screenshot, which is like one

[00:29:37] of the most common use cases, right?

[00:29:38] Like I don't have this thing in Figma,

[00:29:40] it's too hard for me to constantly

[00:29:42] recreate it in Figma. I just want to

[00:29:43] upload a screenshot and then start from

[00:29:45] there so I can iterate or add a text box

[00:29:46] or whatever. then it was providing

[00:29:48] guidance on okay you know it's going to

[00:29:50] hallucinate or it's going to get things

[00:29:52] wrong unless you do things in this kind

[00:29:54] of way and it was just you know really

[00:29:56] providing providing that guidance in

[00:29:59] terms of distributing that guidance

[00:30:01] we've had a few ways we've tried to be

[00:30:03] creative as possible we had like a

[00:30:06] dedicated AI builder week um which you

[00:30:07] know we've talked about publicly which

[00:30:10] was you know our president um a new just

[00:30:11] basically said everyone thousands of

[00:30:14] people tools down for an entire week and

[00:30:16] you're all just going to learn AI

[00:30:18] prototyping and it really created a lot

[00:30:20] of a home moments for people where they

[00:30:23] were then given that space and we we had

[00:30:25] training we had you know guest

[00:30:27] interviews we had master classes I did

[00:30:30] like a 500 person replet master class

[00:30:32] across two

[00:30:34] >> which was incredibly stressful but

[00:30:36] incredibly valuable because we went

[00:30:38] through step by step you know this is

[00:30:40] you know let's build something together

[00:30:42] and it gave those those moments for

[00:30:44] people they're like ah okay I can't do

[00:30:45] this in Figma

[00:30:47] this is too hard. If I'm creating a

[00:30:49] filtering experience, I can't build

[00:30:52] these interactions in. But in Replet, in

[00:30:54] Figma make, I can do it in 5 minutes. I

[00:30:56] can just instruct it like build this

[00:30:58] filtering sequence and it will literally

[00:31:00] work and feel real. So, we kind of made

[00:31:02] sure we had a lot of space for those

[00:31:04] moments. Now, we're in a phase where

[00:31:06] it's all about we've got a 101, we've

[00:31:09] got a 2011, we've got a lot of guidance.

[00:31:11] How do we get that to the people that

[00:31:13] need to use it? you know, maybe inactive

[00:31:15] users or people that haven't seen the

[00:31:17] course material before. What we actually

[00:31:19] did is we created a Slack bot. So, I

[00:31:21] created it in Replet. Well, first I

[00:31:23] created it in cursor in like 15 minutes

[00:31:24] and then I created one in Replet where

[00:31:26] it's got kind of a wizzywig dashboard

[00:31:29] and we have an AI enablement bot and

[00:31:32] what I found is if you add a bunch of

[00:31:34] people to a Slack channel, they're

[00:31:35] probably going to ignore it at our

[00:31:37] scale. You know, you got Slack fatigue.

[00:31:40] If you DM people, they will respond to

[00:31:43] you pretty quickly and they will almost

[00:31:44] like feel like they have to respond to

[00:31:46] you. So I was like, how can I replicate

[00:31:49] that at scale, right? Like if I put

[00:31:50] people in a channel, I do an at channel

[00:31:54] or an at here in whatever communications

[00:31:56] tool, most people are going to ignore

[00:31:59] it. So what I created was a Slack bot

[00:32:01] that creates a group DM. So our design

[00:32:04] ops leads can then be the key recipient.

[00:32:08] they can add in maybe 400 people that

[00:32:09] they want to reach out. maybe they're

[00:32:11] inactive users or they haven't used it

[00:32:14] recently and it will group DM from the

[00:32:18] Slackbot to that person with a kind of a

[00:32:20] canned message of like oh hey you know

[00:32:22] hey first name we've noticed that you

[00:32:24] know you've been inactive user can you

[00:32:26] fill in this survey and let us know and

[00:32:28] we got a lot of engagement from people

[00:32:30] around like oh I didn't realize this was

[00:32:32] a thing or like oh I'm so sorry I've

[00:32:35] been busy xy zed and it gave us a lot of

[00:32:37] really good feedback on why people

[00:32:39] aren't using the thing or what the gaps

[00:32:42] are without having to like DM hundreds

[00:32:44] of people constantly. So that was a real

[00:32:47] unlock for us on how to enable at scale.

[00:32:49] >> Are there other challenges or things

[00:32:51] that you're thinking about in terms of

[00:32:53] just maintaining this system and how

[00:32:55] everything works especially as your

[00:32:57] product surface area continues to

[00:32:58] expand.

[00:32:59] >> One of the other things that we've had a

[00:33:01] lot of success with was um that I've

[00:33:03] seen from the engineering side is a lot

[00:33:06] of design leaders are going out and

[00:33:08] sharing prototypes. So a lot of this is

[00:33:11] like coming in our design reviews top

[00:33:14] down in like you know weekly loom sort

[00:33:15] of thing like oh here's a prototype I I

[00:33:18] built in this in this new tool new

[00:33:21] technology or here's an idea for how we

[00:33:23] could do this with rovo. So seeing that

[00:33:26] from, you know, your skip lead or your,

[00:33:27] you know, your leader in your design

[00:33:29] space, I think that's kind of promoted a

[00:33:31] lot of verality where

[00:33:33] >> it's like, oh my, you know, my boss is

[00:33:35] doing this or my boss's boss is doing

[00:33:37] this. Maybe I should do this as well.

[00:33:39] And then and then it's like the the good

[00:33:42] demos in our sort of design reviews

[00:33:44] appear to be the prototypes. So it's

[00:33:46] like, oh, hey, if you if you come in

[00:33:48] with just a static design, you know, it

[00:33:49] might be a great design, everything, but

[00:33:51] if you come in with a prototype, like

[00:33:52] people will actually get a little bit

[00:33:54] excited and a lot more commentary on the

[00:33:56] looms. That's that's what I'm seeing

[00:33:58] from afar. So I think that's really

[00:34:01] helped stir this thing as well is like

[00:34:03] it's not just flashy, oh, we could use

[00:34:06] it. Here's some some learnings, but also

[00:34:07] people hit the ground running and just

[00:34:09] started using it on a on a daily basis.

[00:34:11] Both high level leadership as well as

[00:34:14] like, you know, low level IC's. Um,

[00:34:15] yeah, that's been

[00:34:17] >> cool. I' I've noticed that, too. Like,

[00:34:19] there's a buzz when you share something

[00:34:20] that is fully functional. It's just it's

[00:34:22] cooler. There's like a novelty factor

[00:34:24] still that draws people in.

[00:34:25] >> Yeah. In terms of like maintainability,

[00:34:28] how do we maintain this thing today? So,

[00:34:30] I'll I'll show you a little bit behind

[00:34:31] the scenes on what these templates

[00:34:35] actually have. So, uh this is Replet has

[00:34:37] a lot of boiler plate. So, we've kind of

[00:34:39] put our stuff into this boiler plate.

[00:34:41] So, these documentation files are ours.

[00:34:44] Like this is the guidelines file that uh

[00:34:46] Lewis showed. We have slightly different

[00:34:49] ones for Figma make and for for Replet.

[00:34:53] So we kind of split out the examples MD

[00:34:55] and the guidelines MD because they get

[00:34:57] indexed a little bit separately um with

[00:34:59] Replet from from their guidance. We kind

[00:35:01] of let them guide us on hey how how

[00:35:03] should we serve you this 2000 line file.

[00:35:06] I get mostly into the template here but

[00:35:09] yeah a lot of it is just let us define

[00:35:12] the exact base of the template. So if I

[00:35:15] go into our actual front end monor repo

[00:35:17] like this is good code that's the

[00:35:18] baseline is you're starting with good

[00:35:20] code you're starting with relatively

[00:35:22] production code this might even be

[00:35:26] better than sort of a brand new PC of an

[00:35:27] application that someone might might

[00:35:30] spin up so we'll say this is you know

[00:35:33] frontend blessed stuff for the most part

[00:35:35] there is of course little bits in here

[00:35:38] that may not be super blessed as we're

[00:35:39] trying to get it working in this

[00:35:41] environment because we don't have like

[00:35:43] GraphQL and the whole teamwork graph and

[00:35:45] and stuff behind it. So there's there's

[00:35:47] some some mocks and other things like

[00:35:49] you know the way we the way we do

[00:35:52] theming and routing a little bit is is

[00:35:56] not 100% perfect but I'll go into cursor

[00:35:59] here which is what I use and show you

[00:36:01] how we maintain it. We have the same

[00:36:04] just you know a folder for AI tooling

[00:36:05] that sits within the rest of our design

[00:36:07] system. So we have a lot of design

[00:36:09] system packages. We kind of house all of

[00:36:12] these templates within the code. So they

[00:36:15] are actually like production code or at

[00:36:18] least they pass most of the linting and

[00:36:20] type checking um apparently aside from

[00:36:25] that one in our codebase. And this kind

[00:36:26] of helps us maintain it so that if we

[00:36:28] actually change like our theming for

[00:36:32] example, this will break. Um, and if we

[00:36:33] want to update our theme and you know

[00:36:36] it's no longer the refreshed version of

[00:36:38] our topography theme, people will update

[00:36:40] this and then we can actually go and

[00:36:42] deploy that to replet so things don't

[00:36:44] break over time. So a lot of it's just

[00:36:46] literally use the design system. Now

[00:36:48] some of this we're we're going to be

[00:36:50] transferring into our CSS andJS library

[00:36:53] shortly, but for the most part we kind

[00:36:55] of break this down into yeah a lot of

[00:36:56] different components like a lot of

[00:36:58] different apps. Currently, most of

[00:37:01] these, as Lewis showed, are are just

[00:37:03] basic sort of this is how to use the

[00:37:05] template. We might be building these up

[00:37:08] more so Trello is actually like a proper

[00:37:12] clone of of the template um as opposed

[00:37:15] to uh you know, just a a hello world

[00:37:17] page. And then we bake in all of our

[00:37:19] like our feature flags. So we have a

[00:37:20] bunch of feature flags which basically

[00:37:23] control functionality that effectively

[00:37:26] is required to be turned on in order to

[00:37:29] have an Atlassian like experience to

[00:37:31] some extent. Not that many but like our

[00:37:33] our our new logos some of our visual

[00:37:36] refresh stuff or topography stuff. We

[00:37:38] take all of this and effectively we we

[00:37:40] bundle it up and we do a distribution.

[00:37:43] So these guideline files are generated

[00:37:46] actually from a very large amount of

[00:37:49] other content. So these guidelines files

[00:37:51] for example if I go into the avatar here

[00:37:53] uh everything in our avatar uh package

[00:37:55] here that we have defined is actually

[00:37:57] automated and maintained from within our

[00:38:00] codebase. So instead of going through

[00:38:02] and if we want to document something

[00:38:04] document in five different places which

[00:38:06] is what happened we we went and we're

[00:38:08] like okay atassian.design

[00:38:10] atlask kit.assian.com

[00:38:13] lmstxt mcp now let's add it to

[00:38:16] prototyping. All five of those places

[00:38:18] were like different content and

[00:38:19] >> at least two or three of those places

[00:38:21] were vibe coded content. So it's like

[00:38:24] okay how can we make it so this actually

[00:38:27] represents what we tell to our customers

[00:38:29] on elast design. Uh make sure these are

[00:38:31] actually our usage guidelines. I think

[00:38:34] we we are in a a state of making them

[00:38:36] better. I don't think they're in perfect

[00:38:37] parody. We're working through this in

[00:38:39] the next half but our approach so far

[00:38:42] has been some sort of structured

[00:38:45] content. So, we're not going down like

[00:38:48] the full data XML sort of approach, but

[00:38:49] we are going with something a little bit

[00:38:51] simpler that we think we could we could

[00:38:53] use to maintain I guess the couple

[00:38:54] thousand packages that live within our

[00:38:57] monor repo. A lot of these are just

[00:38:59] strings or even markdown files in some

[00:39:03] cases and we basically define what our

[00:39:05] component is, how to import that. So

[00:39:07] with this we grab all the types. With

[00:39:09] this we actually kind of give it enough

[00:39:12] context so that the LM ideally

[00:39:14] understands what an avatar component is

[00:39:16] in its own language like it's a profile

[00:39:19] photo or a representation of a user. Uh

[00:39:20] we give it a description. We have

[00:39:23] examples. We even have examples that are

[00:39:27] purely for AI in this case rather than

[00:39:28] all of our internal examples which are a

[00:39:30] little bit less clean. We have ones that

[00:39:32] are just like this is what I want AI to

[00:39:36] build with. very simple, clean, not all

[00:39:38] the 4,000 different cases we have for

[00:39:40] this component, but just basically the

[00:39:43] three relatively basic versions cuz we

[00:39:45] realized if you give it all of those

[00:39:47] different types, it will hallucinate

[00:39:49] more and more and more and think, well,

[00:39:51] I can do this mixed with this mixed with

[00:39:54] this, right? And then the answer is no,

[00:39:56] you really can't. So, we we try and

[00:39:59] describe, I guess, the 80% mark for most

[00:40:01] of these components. The same goes with

[00:40:03] our content and and usage guidelines.

[00:40:05] This is not everything we care about on

[00:40:07] this component, but is probably 80% of

[00:40:10] usages, which is kind of our our target

[00:40:12] in prototyping to be honest, is is the

[00:40:14] 80% mark. We take all of that, these

[00:40:18] offerings JSON files, and bundle it up

[00:40:21] and just distribute it. So, we have a

[00:40:24] bunch of sort of codegen and and scripts

[00:40:27] basically to to crawl the entire monor

[00:40:29] repo and grab a very large amount of

[00:40:30] files. So we'll just we'll just run sort

[00:40:33] of the distribute command. And then what

[00:40:35] this does is it distributes um

[00:40:38] effectively a template for Figma make

[00:40:40] and replet. So we have a fast and full

[00:40:41] version of our templates. We have a

[00:40:43] couple others but they're not really

[00:40:45] hooked up right now. So if I go in here,

[00:40:47] everything that you would see in here,

[00:40:49] all of the examples, we generate this,

[00:40:51] yeah, from the avatar component. All the

[00:40:53] guidelines, we generate that from that

[00:40:55] avatar component. All of these apps, we

[00:40:58] generate that directly from our monor

[00:41:01] repo and what we do is we just copy all

[00:41:02] of these files. We're looking for a way

[00:41:05] to sync them a little bit more directly

[00:41:08] to maintain them even better. But yeah,

[00:41:10] the the goal is really just been about

[00:41:13] like how can we automate the content

[00:41:16] that AI needs because we've had very

[00:41:19] poor success with just asking AI to go

[00:41:20] to elastino. design and read our

[00:41:23] components or index them or expecting

[00:41:25] that it knows what our lozenge or our

[00:41:27] avatar means. Especially whenever we get

[00:41:30] into the the nitty-gritty of all of

[00:41:33] those type interfaces or our usage

[00:41:34] guidelines or especially when we're

[00:41:36] talking about like translating from

[00:41:38] tailwind whenever it just hallucinates

[00:41:40] and it can't understand that oh this

[00:41:43] image should be an avatar. The best way

[00:41:44] we can change that is just going in and

[00:41:46] being like well let's let's handle this

[00:41:48] edge case and let's let's fix it.

[00:41:51] Zooming out for a second, how long have

[00:41:53] you two been in design systems roles?

[00:41:55] And how big of a departure has the last

[00:41:57] eight months been from what you're

[00:41:59] typically used to? Because it feels like

[00:42:01] you're almost inventing an entirely new

[00:42:04] subd discipline within what it means to

[00:42:05] run design systems at a large company.

[00:42:07] >> I've been here for the past 3 and a half

[00:42:10] years on the Atlassian design system. In

[00:42:12] the past, I've had much smaller design

[00:42:15] systems, but um definitely nothing to

[00:42:19] this scale. So I would say AI is really

[00:42:21] a step change for us. So for example, I

[00:42:24] presented at at config I think in 2024

[00:42:26] around how we do adoption basically

[00:42:28] across all of Alassian. How do we how do

[00:42:29] we roll out our our visual changes, our

[00:42:32] our new navigation, our you know dark

[00:42:35] mode, that sort of stuff. And with AI

[00:42:37] it's it's changed a lot where it's like

[00:42:40] okay how would I do adoption with AI? It

[00:42:42] is absolutely night and day. with with

[00:42:43] AI, it's it's a lot more about like,

[00:42:45] okay, how do we document this so that

[00:42:48] it's available in the AI in the LM's

[00:42:51] memory at all times as opposed to

[00:42:53] typically with the design system, the

[00:42:55] way I see that we would do these things

[00:42:57] is through programs and people and

[00:43:00] cultural reinforcement, design reviews,

[00:43:01] that sort of stuff. Now, it's like,

[00:43:04] okay, can we just tell it exactly what

[00:43:06] we care about? Can we tell it exactly

[00:43:08] what it needs to do? let's kind of cut

[00:43:11] out all the fluff and just give it the

[00:43:13] bare minimum. And then the other side is

[00:43:15] like, okay, it primarily knows let's say

[00:43:18] Chadian, Lucid, Radics, whatever it's

[00:43:19] trained on. How can we make our

[00:43:22] components more closely aligned with

[00:43:24] that? like why do we call it a lozenge

[00:43:26] component if the industry doesn't have a

[00:43:29] lozenge component or why do we call our

[00:43:32] prop appearance versus variant or or

[00:43:34] things like that is kind of where we're

[00:43:36] getting into where it's like can we just

[00:43:38] shift our system to be more I guess

[00:43:40] general for lack of a better word like

[00:43:41] like the rest of the industry

[00:43:43] >> I was an adoption person just like with

[00:43:45] with Carlo Klo and I worked together on

[00:43:47] adoption I've been with Atassian three

[00:43:49] and a half years now I was kind of the

[00:43:51] Figma plug-in guy then the Figma guy and

[00:43:52] then I was the kind of designer an

[00:43:57] adoption guy and I really saw AI as a

[00:44:00] adoption story just like Kylo in terms

[00:44:03] of like there it's a threat to adoption

[00:44:04] essentially. It's like I saw all these

[00:44:06] things being generated that weren't

[00:44:08] using the elastic design system and I

[00:44:10] actually wasn't an early adopter of AI.

[00:44:12] I was probably actually quite behind on

[00:44:14] a lot of stuff and now I'm like lead

[00:44:16] design technologist on the AI pillar

[00:44:18] because my passion and my drive was from

[00:44:21] an adoption lens like how do I enable

[00:44:23] product managers, product designers,

[00:44:26] content designers to generate Atlassian

[00:44:28] experiences with the design system.

[00:44:31] That's always been my mission. Before it

[00:44:32] was very much like how do I increase

[00:44:34] adoption in Figma and how do I increase

[00:44:36] confidence that then translates into

[00:44:39] code. this is now just the next step for

[00:44:41] me and now obviously I am a lot more

[00:44:44] involved in the overall AI but it's for

[00:44:45] me at the beginning it was very much

[00:44:48] that that just like design system

[00:44:50] adoption lens and increasing that that

[00:44:52] fidelity interestingly enough I was

[00:44:55] actually initially asked to be a tool

[00:44:57] lead for Figma make as we were kind of

[00:44:59] upskilling Figma make

[00:45:02] >> and then it massively scope spiraled

[00:45:04] into like me essentially being

[00:45:06] responsible for the design system

[00:45:09] integration for the entire organization

[00:45:11] with Kylo to enable these thousands of

[00:45:13] people to do AI prototyping. So it's

[00:45:15] it's crazy how things can just in the

[00:45:17] space of 8 months just completely shift

[00:45:20] your entire mindset where I went from

[00:45:21] being a lead designer working on

[00:45:24] adoption to a lead design technologist

[00:45:27] leading up an AI pillar with this like

[00:45:30] massive scope of work in such a short

[00:45:31] space of time. So I'm very grateful for

[00:45:33] it. But sometimes I look back and I'm

[00:45:35] like oh wow 6 months ago we were just

[00:45:38] doing that. Like that's crazy how mature

[00:45:39] you can get so quickly.

[00:45:41] >> Well, I mean six months is an eternity

[00:45:43] in today's day and age with how fast

[00:45:44] things are accelerating. So I guess

[00:45:47] before I let you go, I want to use that

[00:45:49] as a launching point to maybe look ahead

[00:45:51] into the next 6 months and beyond

[00:45:53] because you two are thinking about this

[00:45:55] a lot and you're seeing where the

[00:45:58] bottlenecks exist. I'm sure probably

[00:45:59] asking these questions. Oh man, you

[00:46:01] know, what if we could do this? Maybe

[00:46:02] this would unlock a different set of

[00:46:04] workflows over here. like when you kind

[00:46:07] of just look into the future, what are

[00:46:08] some of the things that are rattling

[00:46:10] around in your mind that you get excited

[00:46:11] about?

[00:46:12] >> We're trying to look at like what does

[00:46:14] an AI native design system look like? We

[00:46:16] don't know the answer necessarily, but

[00:46:18] it's very much important to look ahead

[00:46:20] like what does the future look like 3,

[00:46:23] five, whatever years. And my opinion is

[00:46:25] it doesn't look that too different to

[00:46:27] today because it's just the AIS are

[00:46:29] going to get better, the tools are going

[00:46:31] to be more kind of holistic. I'm of the

[00:46:33] opinion like what can we actually do

[00:46:35] today to bring the future forward and

[00:46:37] you know what agents can we create what

[00:46:39] tooling can we spin up like what context

[00:46:43] can we create to leverage that and also

[00:46:45] you know how can we make our own team

[00:46:47] kind of AI native so the future is

[00:46:49] actually really interesting because it's

[00:46:51] kind of you look ahead of where you need

[00:46:54] to be but there's actually just so much

[00:46:56] you can do today to get you there but

[00:46:58] it's probably going to be like duct

[00:47:00] taped together or like there's going to

[00:47:02] be an agent that just like does one

[00:47:04] thing really well and then you have to

[00:47:05] like switch to another agent that does

[00:47:07] one thing really well and that's maybe

[00:47:09] like today's model. What I feel like is

[00:47:10] going to be in the future is going to be

[00:47:13] this end to end where maybe it's just

[00:47:15] one agent, one tool that will just kind

[00:47:17] of like handle the entire software

[00:47:19] delivery life cycle. I don't know what

[00:47:21] tool that would be. I don't know if it

[00:47:23] would be a third party or people build

[00:47:25] it as a first party. Who knows how

[00:47:29] powerful AI can be in 3 to 5 years. I

[00:47:31] can imagine incredibly powerful or the

[00:47:32] tools that people create are incredibly

[00:47:35] powerful, but I'm very excited for the

[00:47:38] way it's going where I feel like teams

[00:47:41] are going to be able to organizations

[00:47:42] are going to be able to truly create

[00:47:46] velocity for the way that they want to

[00:47:49] write, create and deliver to customers.

[00:47:51] And at the moment we're in kind of a

[00:47:54] fixed mindset or a fixed tool set where

[00:47:55] you know traditionally the software

[00:47:56] delivery life cycle was you know very

[00:47:58] much you have requirements they get

[00:48:00] translated into design it's usually

[00:48:02] Figma or another design tool and then an

[00:48:04] engineer then has to read the design and

[00:48:06] then build that. Now we're kind of going

[00:48:10] into a fluid model where anyone with any

[00:48:13] tool can essentially ship to a customer

[00:48:15] and we need to figure out how to support

[00:48:17] that. like design system remit has just

[00:48:19] blown up

[00:48:21] >> into like anyone in the organization can

[00:48:24] essentially ship and that's a really

[00:48:26] challenging problem to solve and I think

[00:48:28] we need to build more tooling more

[00:48:31] linting everything to actually tackle

[00:48:33] that new kind of persona um because I

[00:48:35] feel like design system is the kind of

[00:48:39] core of an AI native organization or a

[00:48:42] truly high velocity organization

[00:48:44] >> the way I see it as as Lewis said is the

[00:48:46] remit bit of a design system is is

[00:48:48] blowing up and I don't think this is new

[00:48:50] for other companies. A lot of companies

[00:48:52] design systems are front-end platform

[00:48:54] teams and they are the entire front-end

[00:48:55] platform or they own the front-end

[00:48:57] platform and they happen to have a

[00:48:59] design system within that or they ship

[00:49:01] design stuff for us a lot of it is how

[00:49:05] do I enable a designer to ship to a Jira

[00:49:07] customer and that's a very scary thing

[00:49:08] scary question for a lot of people but

[00:49:10] also at the same time we've got a couple

[00:49:11] designers that have shipped to

[00:49:14] production in possibly smaller apps I

[00:49:16] can't think of an ex an explicit one in

[00:49:19] Jira but we're going in that direction.

[00:49:20] But the further we go in that direction,

[00:49:23] even the further we go with prototyping,

[00:49:25] people are no longer asking about how do

[00:49:26] I work with the design system? And the

[00:49:28] design system is almost like check, we

[00:49:30] we've we've done that. We do that in 6

[00:49:32] months. I wouldn't say it's perfect. We

[00:49:34] we can maintain it better. We can fill

[00:49:36] in a bunch of the gaps. You know, there

[00:49:38] were there were bugs in the stuff we we

[00:49:39] showed you, but for the most part, it's

[00:49:43] it's good enough to sell that idea. But

[00:49:45] prototyping for us, I think it will not

[00:49:48] stop at just showing an idea. Ideally,

[00:49:50] it will go all the way, you know,

[00:49:52] further along that like, oh, can we take

[00:49:53] that idea, put it into a poll request?

[00:49:55] Can we take that idea? Can we put it

[00:49:57] into design campus? Can we take that

[00:49:58] idea, put it to production? I think the

[00:50:00] the context that's required for that,

[00:50:03] for an LLM to know how to build within

[00:50:05] Atlassian, what's inside my head and

[00:50:07] hundreds and thousands of other

[00:50:09] engineers head in order to actually land

[00:50:12] that is a little bit scary. So the way I

[00:50:15] look at it just some some raw numbers is

[00:50:17] like the Alassian design system is like

[00:50:20] 75 packages in a front-end monor repo

[00:50:23] which is not the entirety of Atlassian

[00:50:25] front end uh which has about 5 to 10,000

[00:50:28] packages. So if you want to build within

[00:50:31] Jira, you not only need to have the the

[00:50:32] context or the LM needs to have the

[00:50:35] context of our 75 packages, but also the

[00:50:38] 5,000 packages, all the different

[00:50:40] libraries, the tools, the engineering,

[00:50:42] the content accessibility standards, all

[00:50:45] of those that are expected of you when

[00:50:46] you're working in Jira. So we have a

[00:50:48] long road ahead of us, I guess, to go

[00:50:52] outside of just this 1% box that is the

[00:50:54] design system. I know the design system

[00:50:56] is the largest 1% box. It probably makes

[00:50:59] up 50% of sort of the React code that

[00:51:01] you might see in Jira. But for the most

[00:51:03] part that it's that other 50% that will

[00:51:05] be very very hard that we have to go and

[00:51:07] document I guess those second layer

[00:51:09] systems or even the third layer systems

[00:51:12] how to write tests how how to use you

[00:51:15] know our version of CSS andJS how to how

[00:51:17] to do all those technical things because

[00:51:19] an engineer can vibe code and say oh no

[00:51:22] you should use compiled instead. Oh no,

[00:51:23] you should use this internationalization

[00:51:25] library. It's specific to Jira, but a

[00:51:28] designer has no clue of that. Even

[00:51:29] myself as an engineer, I don't I don't

[00:51:31] know how to work in Jira. So I think

[00:51:33] that's where we're going in a lot of

[00:51:36] ways. That's how we'll get to the end

[00:51:37] vision that I think we all have, which

[00:51:40] is can we empower anybody to at least

[00:51:42] open a pull request and get peer review

[00:51:44] on that, customer review on that,

[00:51:46] >> and you know, experiment that into

[00:51:48] production. I think that's kind of, you

[00:51:50] know, the five-year goal. Well, you've

[00:51:53] taken a heck of a first step here. Uh

[00:51:55] really impressed by everything that you

[00:51:56] all have shared. Definitely changed the

[00:51:58] way that I'm thinking about the role

[00:52:00] that design systems play and [music] I'm

[00:52:02] just appreciative that you you guys came

[00:52:05] on here and pulled back the curtain. And

[00:52:07] I'm sure that you have inspired a lot of

[00:52:09] teams out there. So, [music] we

[00:52:11] appreciate you taking the time today.

[00:52:13] Before I let you go, I want to take just

[00:52:15] one minute to run you through my

[00:52:16] favorite products because I'm constantly

[00:52:19] asked [music] what's in my stack. Framer

[00:52:22] is how I build websites. Genway is how I

[00:52:25] do research. Granola is how I take notes

[00:52:27] during [music] crit. Jitter is how I

[00:52:30] animate my designs. Lovable is how I

[00:52:33] build my ideas in code. Mobin is how I

[00:52:36] find design inspiration. Paper is how I

[00:52:38] design like a creative. And Raycast

[00:52:40] [music] is my shortcut every step of the

[00:52:43] way. Now, I've hand selected these

[00:52:45] companies so that I can do these

[00:52:47] episodes full-time. [music] So, by far

[00:52:49] the number one way to support the show

[00:52:52] is to check them out. You can find the
