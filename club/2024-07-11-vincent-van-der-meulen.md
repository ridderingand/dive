---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: kzoBKeAIEPw
slug: 2024-07-11-vincent-van-der-meulen
source_type: descript
source: "https://web.descript.com/ca20a9ec-649e-47ab-89d9-eddd47b0762e/27233"
guest: Vincent van der Meulen
host: Ridd
title: The story of Figma's big AI pivot
published: 2024-07-11
duration_min: 43
generated: 2026-09-11
generator: dive-club-ideas
---


## [00:00:00] The journey to build autocomplete

[00:00:00] **Ridd:** so visual search is certainly not the point

[00:00:02] where we started. And it's actually kind of wild to see where we did start. Um, so

[00:00:06] it all starts

[00:00:07] at config 2020 23. And Diagram has just been acquired

[00:00:11] by Figma.

[00:00:12] And on stage

[00:00:13] we,

[00:00:13] we talk a

[00:00:14] lot about autocompletes and our explorations with autocompletes. But It's one of

[00:00:19] our main insights of that keynote is that building autocomplete is really hard. And it's hard for a variety of reasons. But one of the reasons is that the design assistant just has

[00:00:29] to, um, suggest quite a big chunk of design at

[00:00:33] once to be useful.

[00:00:34] So when I talk about autocomplete, I mean a notion that

[00:00:37] as you're working, a

[00:00:38] design assistant is predicting what you want to do next before you actually know it.

[00:00:43] So it's a very magical experience. but for that to be magical, the design

[00:00:46] assistant

[00:00:47] actually has to predict a significant chunk of

[00:00:49] design on the canvas. So

[00:00:51] that's quite hard to like do that all correctly at

[00:00:53] once. And then

[00:00:54] it also has to place

[00:00:55] it in the right

[00:00:56] location, which is quite difficult because you know, you might be using other layouts, you [00:01:00] might not be using other layouts. So positioning is also a significant challenge of that. So that's kind

[00:01:05] of where we, where

[00:01:06] we were at,

[00:01:07] at the end of config

[00:01:07] 2023. Just realizing

[00:01:09] that autocomplete is hard, but really wanting to build it.

[00:01:12] and then we have this inaugural AI hackathon where we come up with this idea

[00:01:17] that we can make autocomplete significantly easier if

[00:01:20] we

[00:01:20] just reduce some of

[00:01:21] the

[00:01:22] scope. Like maybe instead of like this big

[00:01:25] chunk of design, we

[00:01:26] can just suggest a single component at once. And instead of, you know,

[00:01:30] making the

[00:01:30] design assistant place it on

[00:01:32] the canvas for

[00:01:33] you,

[00:01:33] maybe we

[00:01:34] can just have a designer drag

[00:01:35] the suggestion to the right location.

[00:01:37] So we came up with this project

[00:01:39] called Component Suggestions

[00:01:41] where

[00:01:41] As you're working in the asset panel, we try to suggest

[00:01:44] the next component you might

[00:01:45] want to use, and then the designer just has to drag

[00:01:48] it over to wherever they want it.

[00:01:50] So you're creating

[00:01:51] a create account screen, and the design assistant

[00:01:54] will, in the asset panel,

[00:01:55] be like,

[00:01:56] Hey,

[00:01:57] do you want a primary button?

[00:01:58] Here it is,

[00:01:59] and I've already [00:02:00] filled out the text for you. So you'll get like a primary button with the text that says

[00:02:03] create account. so we thought it was

[00:02:05] very promising and during the hackathon

[00:02:07] demo, it actually seems very compelling. Like,

[00:02:09] I'm

[00:02:09] able to design

[00:02:10] screens faster than I could because is constantly handing me these components with the props filled out.

[00:02:16] that's where we started and we got so much

[00:02:19] love from the hackathon demo

[00:02:20] that we

[00:02:21] actually decided to build it.

[00:02:22] So we set out

[00:02:23] to

[00:02:23] make that our next thing, component suggestions, the simpler version of autocomplete.

[00:02:27] You know, I have a lot

[00:02:29] of conversations about how in many ways

[00:02:32] AI

[00:02:32] tooling is

[00:02:33] lagging for

[00:02:33] designers

[00:02:34] as it relates to developers,

[00:02:35] And I hadn't actually considered the

[00:02:37] spatial component as a primary variable for that Mm-Hmm. until you mentioned it, 'cause it's not like

[00:02:41] you have the blinking cursor. You also have to figure out not only what comes next, but like, where the heck do we put this thing.

[00:02:47] So it's interesting to hear some

[00:02:48] of the challenges that you were thinking through so many challenges.

[00:02:51] Like where is the designer working, right? Like

[00:02:53] you have

[00:02:53] like

[00:02:53] this big web design

[00:02:54] screen that's

[00:02:55] like, 1280 pixels wide and like the designer might be working in

[00:02:58] the bottom left

[00:02:58] corner. They might be working in

[00:02:59] the [00:03:00] white

[00:03:00] space in the center and yeah, in a text editor, like forget a copilot, right?

[00:03:04] You have a blinking cursor that

[00:03:05] like indicates where the program is working and where they are thinking in a design. So you just have none of that, right? The designer is

[00:03:11] just like moving their cursor and it's entirely unclear

[00:03:15] um, where you

[00:03:16] should suggest something. So that's a huge

[00:03:18] challenge

[00:03:18] of like autocomplete

[00:03:19] in, yeah, like a design environment.

[00:03:22] It makes

[00:03:22] sense then why you kind of moved

[00:03:23] that

[00:03:24] series of explorations to the components

[00:03:26] like the assets panel can you go even

[00:03:29] deeper like what

[00:03:30] were

[00:03:31] the

[00:03:31] types of little knobs that you were turning in those

[00:03:33] early prototypes and what were some of the things

[00:03:35] that you were exploring and

[00:03:36] thinking

[00:03:36] about?


## [00:03:37] Focusing on component suggestions

[00:03:37] **Ridd:** Yeah, so the initial plan was

[00:03:39] fairly easy. We just take the user selection. We convert it to a text representation because it's 2023. And. The first thing we do is we create a script called It's based on user design and language

[00:03:49] models. User models only understand text at this point. We use a user select to text and we ask GBT,

[00:03:55] which component would you like to insert next?

[00:03:58] So that's where we start. [00:04:00] And again, this hackathon demo was a hit. And I'm able to design these very simple screens very easily because this component suggestions autocomplete is just

[00:04:08] able to suggest the

[00:04:09] next

[00:04:09] component super quickly.

[00:04:11] But then when

[00:04:11] we actually start running it on real designs,

[00:04:13] when we start giving it to Figma

[00:04:14] designers, It just breaks down entirely,

[00:04:17] like

[00:04:17] the component suggestions are suddenly random,

[00:04:20] you get components that don't fit the scenario at all,

[00:04:23] you get components that, a

[00:04:24] real designer would never use in that scenario, so at that point we

[00:04:27] indeed have

[00:04:28] to, like, turn many more knobs, so

[00:04:30] we try looking, like, hey, how do we make this, like, simple component

[00:04:33] suggestion

[00:04:34] system better,

[00:04:36] so

[00:04:36] that's why we start thinking of, okay, the way you and I design, whenever we're in a scenario, we have to predict the components we look at, like,

[00:04:43] what have we designed in

[00:04:44] the past?

[00:04:44] What

[00:04:44] have other designers designed in the past that's similar and what components were they using we figured that

[00:04:49] okay, we

[00:04:50] can make this component suggestions project a lot better if we start giving

[00:04:54] this LLM access to anything that's been designed in the past, that's similar to your current selection.

[00:04:59] If only

[00:04:59] it [00:05:00] can see examples

[00:05:00] of, So if you have

[00:05:01] things that are similar to your selection, then it can know

[00:05:04] exactly which components are and aren't

[00:05:06] appropriate to use in that scenario.

[00:05:08] So at

[00:05:08] that point you kind of get

[00:05:09] a system where you select something, we run vector search on your

[00:05:15] selection to find similar designs,

[00:05:17] and

[00:05:17] then we pull those similar designs

[00:05:20] into the context

[00:05:21] window of the large language model,

[00:05:23] also in

[00:05:24] the form of text, because that's ultimately

[00:05:26] what the

[00:05:26] large language model expects.

[00:05:28] But, of course, this whole notion,

[00:05:30] right, of

[00:05:30] searching similar designs, like, we, we had to build that.


## [00:05:33] Planning for the pivot

[00:05:33] **Ridd:** So take us to the

[00:05:35] exact moment where you started to kind of realize, like, okay, the initial path

[00:05:40] that we set ourselves on, there

[00:05:42] might

[00:05:43] not be a viable future here. And then what

[00:05:46] was it like, even ideating on how you might slightly pivot into a new direction?

[00:05:52] It was, it

[00:05:52] was rough, honestly, because we spent months trying

[00:05:54] to make this component suggestions project work. we would have, like, these research sessions internally,

[00:05:59] and then we would make [00:06:00] changes, and then we

[00:06:00] would go back to research. But

[00:06:02] we just kept having designers be like, what even is this suggestion?

[00:06:05] Like, why

[00:06:06] are you showing this to me?

[00:06:07] And when we

[00:06:09] started feeding in past designs into this, um, autocomplete, We figured,

[00:06:14] okay, this

[00:06:14] surely, this is really going

[00:06:16] to help the autocomplete nail the component prediction If we just give it

[00:06:19] a bunch of fast designs,

[00:06:20] it's going to do

[00:06:21] amazingly well. but what

[00:06:22] actually happened

[00:06:23] was that, it still suggested random components.

[00:06:26] and we

[00:06:26] had made this system just so complex that it was hard

[00:06:30] to reason

[00:06:30] about.

[00:06:30] we had like a bunch Of steps like chained after each

[00:06:33] other. One

[00:06:34] of them

[00:06:34] being search, and all these steps had, like, some failure rate. So, ultimately, the chance

[00:06:39] of success was just way too low, and

[00:06:40] we realized, okay, we've, we are in over our heads, 

[00:06:43] and we

[00:06:44] have

[00:06:44] just

[00:06:44] made a system that's too complex, we need to make this a lot

[00:06:47] more simple, and hey, wait a second,

[00:06:49] this, first step that the assistant is doing, search, to find similar path designs, is actually very interesting and

[00:06:56] useful

[00:06:56] on its own,

[00:06:57] which, looking back, was a complete no brainer, [00:07:00] because, um, I myself had prototyped image search at

[00:07:02] Uber,

[00:07:02] like, years, years prior.

[00:07:04] Like, looking back, we

[00:07:04] probably should have known from the start that, hey, search is actually a great product to build. Just start there instead of trying to build this super complex autocomplete. But, sometimes you just have to, um, have to try building

[00:07:15] ambitious

[00:07:16] things and realizing that

[00:07:18] it doesn't work yet.

[00:07:19] And then, um, yeah, go from there.

[00:07:21] I want to get all

[00:07:22] the way into

[00:07:22] Visual Search. Let's set, like,

[00:07:24] a few pieces of context. The first is you mentioned working on somewhat similar things at Uber. Can you talk a little bit more about

[00:07:32] that

[00:07:32] experience

[00:07:32] and maybe

[00:07:33] even the role that it played in this

[00:07:35] problem set the

[00:07:36] second time around?


## [00:07:37] Vincent's relevant experience at Uber

[00:07:37] **Ridd:** For sure,

[00:07:37] yeah.

[00:07:38] So I've always been just obsessed with the idea of like finding designs and how

[00:07:42] do you, give designers insight into what's happening

[00:07:45] across the org, like what similar

[00:07:46] designs other designers

[00:07:47] are making. But also how do you

[00:07:49] help designers find their designs quickly?

[00:07:52] Yeah, definitely.

[00:07:52] Um, so at Uber, like my coworker,

[00:07:54] Christian Rao, came up with this

[00:07:56] idea of, Design Finder, where we indeed have

[00:07:59] this Design Finder [00:08:00] Slack channel

[00:08:00] at Uber, and he, pitched

[00:08:02] this idea of let's just make a tool that lets designers

[00:08:05] find designs by uploading an image. So him and I started prototyping that.

[00:08:10] And

[00:08:10] we actually built this, 

[00:08:11] demo where, given any screenshots,

[00:08:13] Uber

[00:08:14] designers could find their design in Figma. but this was

[00:08:16] kind of where, where it stopped because, you know, we are at Uber. We're not

[00:08:20] at Figma. We don't have access

[00:08:21] to the design tool internals.

[00:08:23] So we

[00:08:23] built this fun prototype, but it was completely unfeasible to build reverse

[00:08:27] image search for Figma when you're not at Figma.

[00:08:29] So we, we presented it ultimately as Figma schema as, Hey, it would be cool if somebody would build this. But, 

[00:08:34] we figured it wouldn't be us because, Hey, we're at Uber.

[00:08:37] Like we can't take

[00:08:38] this any further than just

[00:08:39] this fun, like concept car.

[00:08:41] so that was like years ago. So to now be able to

[00:08:43] return to that project in

[00:08:45] a way was like very satisfying. Yeah.

[00:08:46] Not only return

[00:08:47] to the project

[00:08:48] but have Uber be the example in the yeah, That is really cool Yeah, And

[00:08:53] work Yeah and work on that

[00:08:55] keynote with like the same

[00:08:56] people I work with at uber, too It

[00:08:58] was, yeah, it was hilarious in a lot of

[00:08:59] ways, [00:09:00] but amazing.

[00:09:01] Okay,

[00:09:01] so you

[00:09:01] said something else

[00:09:02] you talked about these research sessions

[00:09:04] internally Yeah,


## [00:09:05] Figma's bi-weekly research sessions

[00:09:05] **Ridd:** Give us a little more context about that. What

[00:09:06] did that look like?

[00:09:07] Yeah, I mean, shout out to our researcher Gus Griffin.

[00:09:10] but

[00:09:10] with Gus we would, create Uh, Basically

[00:09:12] set up like these bi weekly

[00:09:13] research sessions

[00:09:14] where we would just give our autocompletes

[00:09:16] to designers, when it was still autocompletes, and we would just tell

[00:09:19] them like, hey, pretend we're not here.

[00:09:21] Go try

[00:09:22] to design

[00:09:22] your, 

[00:09:23] design work like normal

[00:09:24] and see if this

[00:09:25] autocomplete is helping you. so that was kind of like the way we,

[00:09:28] improved autocompletes and ultimately also started improving our search was through these, uh, Biweekly research sessions

[00:09:34] maybe. And then in between these research sessions, the goal

[00:09:37] is to crank out as much code as possible to hopefully have something better,

[00:09:40] by the next session, right?

[00:09:41] Like if one session was bad for some reason, then we would try to just quickly debug why, why it was

[00:09:47] bad, and in that way, and

[00:09:49] then hopefully whatever show up better next

[00:09:51] time. Is there a specific example

[00:09:52] that you could

[00:09:53] share of something

[00:09:53] that you learned in

[00:09:54] one of those sessions and how

[00:09:55] that

[00:09:55] informed the next couple

[00:09:56] weeks of work?

[00:09:56] Yeah. One of the issues that like we talked about right like was

[00:09:59] not [00:10:00] knowing

[00:10:00] where like designers are working. So we saw that a lot where like a designer was like

[00:10:04] working whatever they were working the sidebar

[00:10:06] in a web design and then they

[00:10:07] got a suggestion

[00:10:08] for an area in their design

[00:10:09] that's like in

[00:10:10] the bottom right or something

[00:10:11] completely

[00:10:12] unrelated area.

[00:10:12] So

[00:10:13] then we started thinking like, okay, for

[00:10:14] our next research session. Maybe we can, give the

[00:10:17] large language model

[00:10:18] context about where you have been working recently about

[00:10:21] your recently

[00:10:22] selected layers. Because maybe

[00:10:23] if we

[00:10:24] tell the design assistant, like, hey,

[00:10:25] Red

[00:10:25] has recently been, like,

[00:10:26] editing these layers, maybe it can

[00:10:28] then, know where to suggest something for.

[00:10:31] so that was, like, one of these ideas where, like, okay, like, we see a problem in user research

[00:10:34] and then we try to fix it. Okay, another piece of context, then, is, You're a year

[00:10:40] after this acquisition of Diagram, kind of this small little tight knit team. Can you just give us a

[00:10:46] little bit of

[00:10:46] a picture

[00:10:47] of like,

[00:10:47] what is your

[00:10:48] new role look like in Figma?

[00:10:50] And how are you operating as a squad now, kind of just in this

[00:10:53] much broader org chart?


## [00:10:55] Understanding Vincent's new role at Figma

[00:10:55] **Ridd:** Totally. Yeah, so at

[00:10:56] Figma, my role becomes like software engineer because we don't[00:11:00] 

[00:11:00] have design

[00:11:00] engineers officially.

[00:11:01] but I remain a

[00:11:02] design engineer in spirit,

[00:11:03] and the fun thing is that

[00:11:04] for this

[00:11:05] project

[00:11:05] I get to collaborate with Marco

[00:11:06] and Jordan.

[00:11:07] And collaborating with those

[00:11:09] guys is just

[00:11:10] incredibly

[00:11:10] satisfying because, you know, I've worked with them

[00:11:12] a bunch. And so we all have a good understanding of what we want, what

[00:11:16] good and bad design looks like. And 

[00:11:19] more importantly, it's just incredibly fun. We're just constantly laughing as we're working.

[00:11:23] So

[00:11:23] what

[00:11:23] this looks like, for instance, with Jordan,

[00:11:25] I'm using Jordan because he works in the New York office

[00:11:28] is we go in in the morning and I know that Jordan shows up

[00:11:31] like super early at around 8

[00:11:32] a. m. And we just, start

[00:11:33] cranking on these design problems and

[00:11:35] we just,

[00:11:35] throw

[00:11:35] out a bunch of wild ideas

[00:11:37] and then we're like, okay, this, this seems good.

[00:11:39] And then

[00:11:39] we start prototyping that. then a few hours later, we just have

[00:11:42] a deployment link,

[00:11:44] um, where people can like play around with like the idea

[00:11:46] themselves.

[00:11:47] And then, yeah,

[00:11:48] we would

[00:11:48] just like, okay, take

[00:11:49] another look at it and decide whether it's good or bad and then potentially toss it or

[00:11:54] keep it and actually build on it.

[00:11:56] So,

[00:11:56] that was

[00:11:56] a super fun cycle with Marco and Jordan, just constantly, trying to [00:12:00] prototype ideas as quickly

[00:12:00] as possible and then especially not being

[00:12:02] afraid to just, completely, toss all of

[00:12:04] these ideas out of the window. because ultimately what matters is that

[00:12:08] this thing feels right.

[00:12:09] And you shouldn't

[00:12:10] stop until you're, you're there.

[00:12:11] It's a measuring

[00:12:12] stick that I'm becoming increasingly

[00:12:14] interested in, in terms of like how I think about the way that teams work is the percentage

[00:12:18] of code that's thrown away. Uh huh.

[00:12:21] And I think that speaks a lot to like the

[00:12:22] culture of prototyping. I would assume that you're probably throwing away a lot of code as you're kind of figuring out what's possible with AI.

[00:12:28] No, totally. Because a lot of these ideas, you can't really get

[00:12:30] a sense of what they feel

[00:12:31] like, right? Like

[00:12:32] when you're just like drawing them out. So

[00:12:33] you really want to

[00:12:34] get to a

[00:12:34] point either way. The prototype

[00:12:36] or just by

[00:12:37] actually coding it up

[00:12:37] that you can verify

[00:12:38] it's often

[00:12:39] whenever someone designed something 

[00:12:40] I

[00:12:40] don't even bother saying

[00:12:41] like, Oh, A or B is better.

[00:12:44] I just say like, okay, make them both send us deploy links and we'll try them out

[00:12:48] both 

[00:12:48] we'll throw one away. that's

[00:12:49] fine. um, that's just

[00:12:50] the cost of doing good work. So can you go a little bit deeper about

[00:12:53] how you collaborate

[00:12:53] with Marco then?

[00:12:55] Who is in more of like a traditional designer role.

[00:12:57] it's kind of an interesting problem [00:13:00] space with AI because so much of the quality of the quote unquote design is tied to

[00:13:04] the quality of the output from these underlying models.

[00:13:06] How does

[00:13:07] that impact

[00:13:07] the way that you collaborate with someone who is in a

[00:13:11] full blown designer role?

[00:13:13] Marco also

[00:13:13] has an engineering background, so it helps a lot.

[00:13:15] But

[00:13:16] the way I collaborate with Marco was.

[00:13:17] I think it really comes down to, like, kind of communicating, what problems you're running

[00:13:21] into as you're, like, developing these models. So with Marco, it was a lot

[00:13:24] like, hey, hey, Marco, we have, like, problem

[00:13:26] X, 

[00:13:27] our search is, instead

[00:13:28] of, returning,

[00:13:29] useful designs, it's actually returning, cover images, you know, how every file has a cover image, 

[00:13:33] what

[00:13:34] should we do about that?

[00:13:35] so it's a lot about like, just communicating what you're experiencing on

[00:13:38] the ground with these AI models and then

[00:13:39] just letting

[00:13:40] good designers like Marco run with it. But the one thing that is different is that these

[00:13:43] models will just never, 

[00:13:45] behave the way you expect.

[00:13:46] You can draw out all

[00:13:47] these fun designs about,

[00:13:48] you know, your search function

[00:13:49] working properly and like returning the right things. But then in practice. There's a lot of,

[00:13:52] weird

[00:13:53] things you have

[00:13:53] design around, and

[00:13:54] weird things you have to account for, so, what helps there is just, like,

[00:13:57] this tight, loop of designers

[00:13:58] where, you're not gonna, [00:14:00] like, be able to anticipate all

[00:14:01] those ideas,

[00:14:01] like, you just

[00:14:02] need

[00:14:02] to, like,

[00:14:02] start building, encounter those ideas,

[00:14:04] and then go back to, like,

[00:14:05] an awesome designer like Marco, and be like, hey, this came up, let's talk

[00:14:09] about

[00:14:09] how to

[00:14:09] fix it, let's, whatever, let's hop on the Slack huddle, or, um, yeah, let's talk

[00:14:12] this through, because we should, yeah,

[00:14:14] address this.

[00:14:15] I mean, it kind of does feel

[00:14:16] a little bit unique, To me, actually, because like what you're describing specifically this cover photo example, it's not really a pixel problem. It's not something that

[00:14:22] you would be like, okay, I

[00:14:23] need

[00:14:23] to think

[00:14:23] about how to solve this.

[00:14:24] I'm going to draw things in figma

[00:14:25] and figure it out.

[00:14:26] It is a lot more like conversational and sparring on how

[00:14:30] we even want

[00:14:31] to

[00:14:32] think about the way that users would interface with an AI model. Mm hmm.

[00:14:35] one

[00:14:35] more

[00:14:35] question then about

[00:14:36] the diagram, you know, unit, the squad

[00:14:39] specifically. .

[00:14:40] How has

[00:14:40] the

[00:14:40] way that you all work evolved now

[00:14:43] that you're part of this much larger org? I think

[00:14:47] you have to, when you're part

[00:14:48] of a larger org, you

[00:14:49] have to spend a lot more time bringing people along for the journey. A diagram

[00:14:53] is pretty simple, right? It

[00:14:53] was just uh, five people

[00:14:55] and

[00:14:56] often it

[00:14:56] was just whatever, me, Jordan, and Andrew, for

[00:14:58] instance, like in a [00:15:00] WeWork. So

[00:15:00] when we

[00:15:00] had an idea, you'd go up to your CEO, the big boss, Jordan, and you'd be

[00:15:03] like, Hey, Jordan, I want to do this.

[00:15:05] And Jordan's

[00:15:05] reply would always be, Hell yeah,

[00:15:07] let's do it. so that was pretty easy. Whereas I think my right like

[00:15:10] you need to be more careful because, you need to work with partner teams, people need to make strategic decisions as to what

[00:15:16] projects invest in. So you really have to

[00:15:19] Bring people along

[00:15:20] for the journey more, where

[00:15:20] you have

[00:15:21] to, like, think more about, okay,

[00:15:22] like communicating. Why is

[00:15:23] this project

[00:15:24] important? Why

[00:15:25] should people care,

[00:15:26] And, really be more

[00:15:27] deliberate

[00:15:27] there, which, which

[00:15:28] is something I learned over time. It's fun to hear you talk about that

[00:15:31] because you

[00:15:31] also have this tweet from not long ago.

[00:15:33] You say, everything is low priority until a cowboy

[00:15:36] comes along and shows people

[00:15:37] the way. What's the backstory there and how does

[00:15:40] that tie back to this pivot to visual search? Yes, the backstory there is that, we were building

[00:15:46] autocomplete,

[00:15:46] right? And autocomplete wasn't

[00:15:48] going well. And after a

[00:15:50] few months, we just don't have anything to show for it.

[00:15:53] And

[00:15:54] Which isn't great. So at that point, we are starting to think of just shipping search instead. But, [00:16:00] you

[00:16:00] know, you have to bring people along. and You have to convince the rest of the company that this is a good idea.

[00:16:05] I had tried doing this

[00:16:06] earlier

[00:16:07] in our projects.

[00:16:07] At some

[00:16:08] point, I

[00:16:08] actually really wanted to build text search instead of this more complex autocomplete. And I'd written this text document.

[00:16:15] This PRD where I basically outlined the case for text search, where it's

[00:16:18] like, Hey, we should build text search

[00:16:20] for these reasons.

[00:16:21] And, given

[00:16:22] this

[00:16:23] machine learning model and a fine tune like this, we can, we can probably pull it off. and that PRD just

[00:16:27] completely went nowhere.

[00:16:29] People, people were

[00:16:30] excited about it,

[00:16:31] but everyone was like, uh, I'm not sure if I believe what's written

[00:16:35] here.

[00:16:35] Like, do you have any

[00:16:35] proof that this is, that we

[00:16:37] can indeed pull

[00:16:37] off text search that's like what you're writing about

[00:16:39] these machine learning models is actually true?

[00:16:41] So when I tried pitching things in

[00:16:44] written form, it

[00:16:45] didn't really go anywhere. when later on,

[00:16:47] like, we again,

[00:16:48] pivoting to search, I

[00:16:49] was like, this time I'm going to do it differently.

[00:16:51] I

[00:16:52] need more proof. well, I need to actually

[00:16:53] show to people that, hey,

[00:16:54] from a technical perspective, you have nothing to worry about. We're going to

[00:16:57] nail this.

[00:16:58] one

[00:16:58] thing, um, [00:17:00] before I

[00:17:00] come into the story, was

[00:17:01] something that my

[00:17:02] coworker Matt Daly did,

[00:17:03] where he briefly proved that, okay,

[00:17:05] if we represent designs as images, search is actually quite

[00:17:08] feasible. We can

[00:17:09] build. Reverse image search quite easily

[00:17:12] and we can build selection search quite

[00:17:14] easily here. I have like this

[00:17:15] small little playground that

[00:17:16] you can play around with so my coworker

[00:17:19] kind

[00:17:19] of did like

[00:17:19] this small, like, yeah, proof of concept where he proved that from

[00:17:22] a technical perspective, it was

[00:17:23] possible, but on my side. and this is where

[00:17:26] the tweet came from. on my

[00:17:27] side, I really wanted

[00:17:28] to, like, show people product wise, not just from a technical perspective,

[00:17:31] but product wise that, like search was, was a good way

[00:17:34] to go.

[00:17:35] So,

[00:17:35] what I did is over the course of

[00:17:37] two weeks, I built this end

[00:17:39] to

[00:17:39] end prototype, where I started showing people, hey, using our technology, building search

[00:17:45] is actually possible.

[00:17:46] when we build search in this way, it unlocks a myriad

[00:17:48] of product opportunities, like selection search, like text search, and like

[00:17:52] image search. And because I'd written the PRD before that like

[00:17:55] didn't go anywhere, I was

[00:17:56] like hell bent on

[00:17:57] actually making

[00:17:58] a working prototype, this time.

[00:17:59] So [00:18:00] over the course of two weeks, I just, yeah, make this functional

[00:18:02] prototype that just shows people end to end, these are all the product use cases, that it would unlock, here's how it, what it would look like

[00:18:09] in the product,

[00:18:10] And because it is working in our code base,

[00:18:12] you don't have anything to worry about really because I'm

[00:18:15] using

[00:18:15] completely

[00:18:16] real tech.

[00:18:16] of course the real thing is going

[00:18:17] to be harder, but this is, this is also real. so that really helped, in bringing people along this time and making them more comfortable believing in search.

[00:18:25] I

[00:18:25] know this

[00:18:25] is not

[00:18:25] an engineering podcast, but I do think it's important for designers to understand some of these foundational models,

[00:18:32] how they work, how it impacts, like, Systems level decisions.

[00:18:35] And so you

[00:18:36] were saying phrases like,

[00:18:37] you know, design as images. And I think some

[00:18:40] people

[00:18:40] listening might be like, well, of course,

[00:18:41] designs are images. What do you mean

[00:18:43] by that? So can you talk a little bit more about the underlying tech? Like what system

[00:18:48] level changes did you have to

[00:18:50] pitch

[00:18:51] and ultimately make to enable some of

[00:18:52] these

[00:18:53] UX experiences?


## [00:18:54] How the underlying large language models work

[00:18:54] **Ridd:** Yeah. So when we were just building

[00:18:56] autocomplete

[00:18:56] and when we

[00:18:56] were building search for autocomplete.

[00:18:59] we were

[00:18:59] representing [00:19:00] designs as text because ultimately the large language

[00:19:02] model needed like a text representation of a design. So

[00:19:05] the third step that we were doing was also using,

[00:19:07] text.

[00:19:08] So, um, given your selection, we

[00:19:10] would convert your selection to text and then try to using an embedding model, find similar designs based

[00:19:16] on their text representations as well. But it turns out finding similar designs based on the text representations is actually a really bad idea.

[00:19:23] because designs are very visual, rights. Often

[00:19:26] they use

[00:19:26] a lot

[00:19:26] of images. Often they have

[00:19:28] a lot

[00:19:28] of like

[00:19:28] visual characteristics.

[00:19:30] So, one of

[00:19:31] the reasons why our

[00:19:32] initial, autocomplete search wasn't good

[00:19:34] was because we

[00:19:35] went

[00:19:35] to text route

[00:19:36] with our search

[00:19:37] And because we were trying to

[00:19:38] find designs that are similar in text form.

[00:19:41] So a huge insight was that, okay, of course, any AI model for design should be visual instead. So instead of comparing designs to text

[00:19:49] and running search on, on those text representations, let's just take all the beautiful pixels that they are

[00:19:55] and let's find similar

[00:19:56] designs, using Ghost.

[00:19:58] So

[00:19:58] I know you made a prototype, which [00:20:00] obviously

[00:20:00] speaks a lot louder

[00:20:01] than a PRD, but

[00:20:02] what were some of

[00:20:02] the other ways that you de risked this

[00:20:05] in the minds of other people

[00:20:06] on the

[00:20:07] team? 


## [00:20:07] Vincent's pitch video

[00:20:07] **Ridd:** Yeah, so I made an end to end prototype, again, just to show

[00:20:10] that from a technical perspective,

[00:20:11] this is possible. And it

[00:20:12] was this

[00:20:13] prototype

[00:20:14] that

[00:20:14] kind of showed.

[00:20:15] Okay, you can do selection search. You can do

[00:20:17] image search, you can do text search.

[00:20:19] but I figured a prototype by itself wouldn't be enough, because.

[00:20:23] You know, you have this prototype.

[00:20:25] What are you gonna do?

[00:20:26] Are you going to send people a link? You have to,

[00:20:28] I guess,

[00:20:28] like, get people to click on it.

[00:20:30] You have to trust that people like

[00:20:31] understand the prototype without

[00:20:33] your narration.

[00:20:34] So

[00:20:34] one thing I did, in addition to the prototype, was create this, video around it.

[00:20:38] where. I'm

[00:20:40] basically going

[00:20:41] through the prototype, and

[00:20:42] I'm

[00:20:42] basically pitching the idea

[00:20:43] of,

[00:20:43] Hey,

[00:20:44] we should focus on search instead. And here are all the three ways. that would truly

[00:20:49] enrich like, you know, Figma's product, and this is what it would

[00:20:51] look like in the product and then in the end also, explain

[00:20:54] how it ladders up to autocomplete, how this isn't like a departure, but actually a stepping

[00:20:59] stone to, [00:21:00] like, some of the bigger things we're trying to do. so that

[00:21:01] became a, two to three minute video that ultimately ended

[00:21:04] up like going viral

[00:21:05] across the

[00:21:05] company

[00:21:06] and also really helped in these conversations

[00:21:08] with like partner teams, because now I don't have to, Do all the explaining myself. I just

[00:21:13] shoot him

[00:21:13] a video and boom, we're done. Can you talk a little bit about

[00:21:17] pitching visual

[00:21:18] search as a building block?

[00:21:20] Like when you

[00:21:20] look at this, why do you think it's the right foundation and what types of experiences could it

[00:21:25] unlock in the future that you find

[00:21:27] particularly exciting?

[00:21:28] For sure. I

[00:21:29] think

[00:21:29] of a lot of,

[00:21:29] like AI,

[00:21:30] it just helps to think of like, how do humans

[00:21:33] go

[00:21:33] about a problem, right?

[00:21:34] And if

[00:21:34] we think about how product designers, design, we need to know what has been designed. If you're designing a checkout page, right? You need to know like,

[00:21:42] okay, what

[00:21:43] checkout pages, has my company

[00:21:44] designed before?

[00:21:45] Like, what's the one that's currently

[00:21:46] in production?

[00:21:47] And you maybe need to, like, also know what,

[00:21:49] like

[00:21:50] the page before the checkout page looks like. So

[00:21:52] designers needs to have some kind of internal

[00:21:55] search step right where before they designed a screen

[00:21:57] day, they do search themselves. we really believe [00:22:00] that For any AI design assistant. That's

[00:22:02] true, too.

[00:22:03] So we've been talking about autocomplete a lot

[00:22:04] where

[00:22:05] autocomplete probably gets

[00:22:07] better if it's able to have context as

[00:22:09] to what's been designed in your organization in

[00:22:12] the past, but you've also, for

[00:22:13] instance, seen

[00:22:14] make

[00:22:14] designs where make designs currently just spits out, you

[00:22:18] know, these these designs that don't have any context about your

[00:22:21] organization. but in

[00:22:22] the future,

[00:22:24] as Dylan talked about, we want to, you know, get that design system support.

[00:22:27] And we also want to,

[00:22:28] give it context

[00:22:29] about your organization, right? we're never going to be

[00:22:31] able to design something sensible

[00:22:33] if we design whatever, like, your checkout page

[00:22:35] in a vacuum. So that's where we really

[00:22:38] think

[00:22:38] search is powerful.

[00:22:40] We

[00:22:40] can put the search, and in the industry this is called RAG, like in front of all these AI

[00:22:45] Systems and suddenly

[00:22:46] they'll get better

[00:22:47] and they'll

[00:22:47] be more contextual to your work. Okay, so you have the prototype in the video.

[00:22:52] Yesterday

[00:22:53] it shipped. Talked about a flagship item in the keynote.

[00:22:56] What were some of the

[00:22:57] differences between

[00:22:58] what

[00:22:58] you?

[00:22:59] Originally [00:23:00] demonstrated and what made it to production and can you talk a little bit about those? Decisions and the product strategy behind those evolutions.


## [00:23:08] How it evolved before the Config keynote

[00:23:08] **Ridd:** So initially in my prototype, I'm imagining it

[00:23:11] in

[00:23:11] the file browser. I figured file browser

[00:23:13] would be

[00:23:13] a good place to, put this because that's where people already search for their files.

[00:23:17] But we have a lot of other AI features that we were working on, right?

[00:23:20] So we have,

[00:23:21] rename layers, we

[00:23:22] have make designs. So it was kind of tempting to put it in editor instead, because all of a sudden you get fun little synergy with like those features. And ultimately, you know, a search feature should be

[00:23:33] available

[00:23:34] in editor, in the editor, right?

[00:23:35] Because you

[00:23:35] don't want to force designers to always go to file browser whenever they need

[00:23:38] to look something up. So that's why

[00:23:40] we, for instance, in this case, started, you know, in

[00:23:42] the editor instead of file browser, which is like a huge difference between my initial prototype and what ships and then there's, of course,

[00:23:49] you know,

[00:23:49] along the way, a bunch of weird concepts that like you didn't see in the in the keynote,

[00:23:53] but, that

[00:23:54] we also tried.

[00:23:55] Can you talk a little bit more about some of the weird concepts?

[00:23:57] we, tried a bunch of different things. So when

[00:23:58] we first like toyed [00:24:00] around,

[00:24:00] played played around with the idea of

[00:24:02] search, We were looking for the right

[00:24:03] form factor. So at some point, we had this idea of a

[00:24:06] section that you could drag

[00:24:07] designs into.

[00:24:08] and as you drop designs

[00:24:10] into the section,

[00:24:10] it

[00:24:10] would kind of perform a search and then just kind of like

[00:24:13] auto expands

[00:24:14] like your section with you know, search results. So that way,

[00:24:17] search as a mood board, if you will. Um, and then we were also fascinated by the idea that, Given a search result, the designer might want more

[00:24:24] of something. So what if we let him wrap

[00:24:26] it whole, on like a single design, which means, okay, what if there was a way

[00:24:31] for a

[00:24:31] designer to say, give me more like this.

[00:24:33] so we build a bunch of funky prototypes and Mark did

[00:24:35] an amazing job here where, yeah, you have this grid and you,

[00:24:38] you click on one item and then suddenly more of that item and that style like pops up.

[00:24:43] so none

[00:24:43] of those things ultimately shifts in part because, you know, actions is a really like

[00:24:47] speed oriented

[00:24:48] surface.

[00:24:49] Where we want to like just get out of people's way where

[00:24:51] we're we're

[00:24:52] in the editor after all but

[00:24:54] I do think that a Lot

[00:24:54] of those

[00:24:55] ideas and and certainly rabbit holing. I hope we'll make we'll make its way

[00:24:58] back in the future [00:25:00] I'm very interested in rabbit holing

[00:25:01] like a lot

[00:25:02] of the things that have shipped have

[00:25:04] kind of focused on blank canvas

[00:25:06] work right now Which

[00:25:06] totally makes sense as a foundation

[00:25:08] But I'm like

[00:25:08] how can

[00:25:09] we use this in more of like an iterative way that can

[00:25:11] help me kind of take what is initially In my

[00:25:13] brain and just see it in so many different ways Okay, so something else that

[00:25:17] you Kind of just illuminated for me that I wasn't aware of is just the culture internally at Figma

[00:25:25] of

[00:25:25] like what is in staging and How you kind of have to even get people excited about

[00:25:30] the different ideas that you're testing So, can you talk a little

[00:25:33] bit about how you mobilize this idea in the staging environment at Figma?

[00:25:40] Yeah, yeah, so we


## [00:25:41] Getting designers excited to try it in staging

[00:25:41] **Ridd:** at Figma we

[00:25:41] constantly ship to staging and that staging basically means the internal version of Figma that's available to people our goal was to always ship the staging as fast

[00:25:49] as possible, even

[00:25:51] if it's, well, somewhat bad. so we tried out

[00:25:54] a lot of, like, wonky, wonky ideas, right?

[00:25:56] So, um, at some point, you know, we're

[00:25:58] building search, but actions doesn't yet [00:26:00] exist. So we have to put an entry point somewhere.

[00:26:02] So we,

[00:26:02] put an entry point just straight on the canvas because we want people to use search. and it's

[00:26:06] completely in people's way.

[00:26:08] People bump

[00:26:08] into it, like, accidentally.

[00:26:10] But,

[00:26:10] shipping the staging, I think the point is that.

[00:26:12] it just gives you a bunch of feedback very quickly. when you ship a bad idea, like an on campus

[00:26:16] entry point,

[00:26:17] it's in everybody's way.

[00:26:18] You just get a lot of feedback. so shipping to staging and, you know,

[00:26:21] trying out ideas internally was super instrumental.

[00:26:24] but sometimes shipping to staging isn't enough, you know? when you

[00:26:26] have an on campus

[00:26:27] entry point, of course, everyone's going to try

[00:26:29] it because, okay, they're going

[00:26:30] to see

[00:26:31] a search icon every

[00:26:32] time they click on a

[00:26:32] layer. It's very obvious, but

[00:26:34] often when you ship the staging, they're just

[00:26:36] and

[00:26:37] people just don't try what you want.

[00:26:38] so even internally, you have

[00:26:39] to, like sell people. so at one point for Visual Search

[00:26:42] I created this

[00:26:43] kind

[00:26:43] of,

[00:26:44] like, marketing video almost, when we

[00:26:46] had just launched Visual Search to staging

[00:26:48] that just, shows someone in Slack asking where is this design? And then they'd click out of the window, and then music starts playing, and Visual Search pops up, and the designer finds

[00:26:57] their design

[00:26:58] super quickly, and the layers are editable. [00:27:00] so

[00:27:00] Yeah, video was again one of the ways

[00:27:02] in which I tried Convincing people to

[00:27:04] to use stuff

[00:27:05] on staging because staging users are real users, too They're

[00:27:07] not always going to try your stuff.

[00:27:09] I love it

[00:27:09] I love that you just

[00:27:10] keep returning to a video

[00:27:11] as a way to keep people excited

[00:27:13] We sourced a few

[00:27:14] questions from Twitter. And one of the

[00:27:16] concerns that I've seen bubble up a few times is like,


## [00:27:19] How to make sure you're showing the right search results

[00:27:19] **Ridd:** How do you make sure that you're showing users the right thing? Like, I don't want to have to deal with outdated screens or components.

[00:27:26] can you

[00:27:26] talk a little bit about

[00:27:27] how you're thinking about that challenge?

[00:27:28] Yeah,

[00:27:28] and this is an area we're still, we're still very

[00:27:31] much working on, but it

[00:27:32] is, it is one of, one of my biggest concerns was for sure, like making sure that system administrators feel comfortable using this feature or having their users, feature and that it doesn't propagate bad designs.

[00:27:42] so in this case I think it comes down

[00:27:43] to ranking. there are a lot of ways in

[00:27:45] which designers tell

[00:27:47] whether a design is good or bad, right?

[00:27:48] You get

[00:27:49] into a file and you look at the, page names and you see

[00:27:52] a page called a graveyard. You see a page

[00:27:54] called MVP. You see

[00:27:56] Which one should you use?

[00:27:58] And

[00:27:58] then in a file, [00:28:00] right, there's a lot more signals like that. You can look

[00:28:02] at like when was a

[00:28:03] design last edit?

[00:28:05] Is

[00:28:05] it marked ready for dev or

[00:28:06] not? Is it marked as ready, for

[00:28:09] complete or not? So

[00:28:11] I think in the near future, we'll start incorporating some of those signals.

[00:28:14] and it, it's not going to

[00:28:15] be perfect.

[00:28:16] but I we're just going

[00:28:17] to incorporate all

[00:28:18] those ways in

[00:28:18] which designers tell whether

[00:28:19] design is canonical or not.

[00:28:22] And we're going to incorporate that into our search system. but there will always be a risk of, you know, us, sometimes servicing an

[00:28:27] old

[00:28:28] iteration that you probably didn't want

[00:28:29] to be serviced. But

[00:28:30] right now you also have that risk, right?

[00:28:32] Like,

[00:28:32] I

[00:28:32] could jump

[00:28:32] **Vincent:** your design 

[00:28:33] **Ridd:** I can accidentally whatever riff on the wrong

[00:28:35] iteration, that happens. Um, but that's the price

[00:28:37] you sometimes pay

[00:28:38] for, you know, unlocking,

[00:28:39] unlocking new workflows You

[00:28:42] mentioned being a design engineer in spirit, even though you, you kind of put a little bit into the traditional engineer

[00:28:47] box

[00:28:48] I want to talk about that more, because you said something that I found really interesting. You

[00:28:51] talked about how design engineers Have the ability to see

[00:28:55] opportunities that sometimes others can't see.

[00:28:58] Can you talk a little

[00:28:59] bit [00:29:00] more about that and

[00:29:01] the role that it played

[00:29:01] in this project


## [00:29:02] The super power of being a design engineer

[00:29:02] **Ridd:** So I

[00:29:03] think it all started right with the component

[00:29:05] suggestions project, 

[00:29:06] we

[00:29:06] realized

[00:29:06] that

[00:29:07] building actual autocompletes

[00:29:09] was super

[00:29:10] hard,

[00:29:11] But because I have knowledge of both design engineering, I

[00:29:14] realized that hey There's a version of autocomplete component suggestions that we can build That's feasible from both a technical perspective,

[00:29:21] but also simultaneously

[00:29:22] appealing to designers.

[00:29:24] So that's something you can constantly do,

[00:29:25] where you can look at the state

[00:29:26] of your technology and the constraints you have

[00:29:28] there. And if you then look at the opportunities

[00:29:31] and the user problems in design, and then, if

[00:29:34] you're a design engineer, you by yourself can kind

[00:29:36] of see the Venn diagram and you can see the

[00:29:38] opportunities, which is like super compelling, and

[00:29:40] for search too, right?

[00:29:41] we have this user problem. Of users

[00:29:44] posting slack all the time that they're looking for design, and

[00:29:47] we have this technology, opportunity, I guess, where,

[00:29:51] reverse image search

[00:29:52] technology has been around for forever. It's actually really good. let's combine these two and let's, you know,

[00:29:57] let's let's connect the dots here and let's build [00:30:00] visual search and if you're not a design engineer, you can still get to

[00:30:03] those insights, right? this normally happens is that

[00:30:06] a

[00:30:06] designer observes a problem. Users not finding a design and an engineer, has all the 

[00:30:11] backgrounds and then

[00:30:12] the way an idea or like a project happens is they, they bump

[00:30:16] into each other and they have a few meetings and then they finally after a few meetings, share their mind share with each other.

[00:30:21] And then they realize. Oh, there's

[00:30:23] a great opportunity here.

[00:30:24] But if you're a design engineer,

[00:30:25] you

[00:30:25] can kind of skip those meetings because you're both

[00:30:27] people at once, right?

[00:30:28] You can you can

[00:30:29] see both sides

[00:30:29] at once, which I find

[00:30:31] very compelling. You know, we talked so much about how will a I impact the role of

[00:30:35] design?

[00:30:36] but what

[00:30:37] about the design engineer? Like, if you kind of

[00:30:39] imagine what the

[00:30:40] future of this role might look

[00:30:42] like, what are some of

[00:30:43] the things that

[00:30:44] you have your eye

[00:30:45] on or 

[00:30:45] trends that you anticipate might continue? one

[00:30:48] design engineer

[00:30:49] persona that

[00:30:49] will really appear is a machine learning focused design engineer. I think that's a pretty safe bet.

[00:30:54] I think one design engineer persona we have

[00:30:57] seen a lot in our industry, which is, like the WebGL [00:31:00] focused design engineer, right?

[00:31:01] You're a design engineer and you're really

[00:31:03] good at WebGL at

[00:31:03] the same time, too, or something

[00:31:05] like that, and whatever. You make pretty marketing pages,

[00:31:07] a lot of the time, which, which, is

[00:31:09] great,

[00:31:09] But,

[00:31:09] Yeah, it's a very narrow, interpretation of design engineering. but I

[00:31:12] think another,

[00:31:13] another version of design engineering

[00:31:14] we might get is, yeah, the design engineer that's a lot more

[00:31:17] machine learning focused, that,

[00:31:18] is, fine tuning their own

[00:31:20] models, to really help bridge the gap between design and engineering that's, really reading the most recent

[00:31:25] machine learning papers and seeing how embeddings can be useful, throughout the various, user journeys

[00:31:30] that they're solving for.

[00:31:31] So I

[00:31:31] think that's, that's

[00:31:32] one of the ways in which design

[00:31:33] engineering, probably will change. Yeah, it's interesting because it's

[00:31:35] like You

[00:31:36] can see a

[00:31:37] world where?

[00:31:38] so many of the

[00:31:39] interfaces that we are designing are just at the end of the day really just feeding context into an underlying model and

[00:31:45] and, There is

[00:31:47] this feeling that, like, okay,

[00:31:49] technical empathy

[00:31:49] and

[00:31:50] being able to understand what the heck

[00:31:51] is actually happening will become more important.

[00:31:53] So it's

[00:31:53] interesting to hear you talk about, like, machine

[00:31:55] learning versus WebGL, because I almost wonder how designers [00:32:00] will, like,

[00:32:00] you almost need someone to maybe

[00:32:01] help them bridge that gap of understanding of,

[00:32:03] like, what's even

[00:32:03] possible? I think, you know, a traditional designer, that's a big part of our job, is asking,

[00:32:08] what's possible?

[00:32:08] What could

[00:32:09] we do here? And now a lot of that answer is tied to technological capability in

[00:32:13] a way that's a little bit more of

[00:32:14] a black box than

[00:32:15] it's been

[00:32:15] historically.

[00:32:16] No, totally. And I think

[00:32:17] that's why it's interesting to have

[00:32:18] a design

[00:32:18] engineer,

[00:32:19] like, you know, design engineer, take a look at machine learning, right?

[00:32:21] Because I think a

[00:32:22] lot of machine learning engineers, they're only focused on using their research for a Very narrow set of things.

[00:32:27] So

[00:32:27] often they don't even

[00:32:28] realize how awesome the models

[00:32:29] they're sitting on are.

[00:32:30] so if you don't have a design engineer,

[00:32:32] kind of peeking over into their fields,

[00:32:34] exploring the latest models, then I think

[00:32:36] for a

[00:32:36] lot

[00:32:36] of models, uh, we'll never realize, you know, how they can be used

[00:32:39] and

[00:32:39] the awesome, the awesome things

[00:32:41] they might unlock.

[00:32:42] Can we make it a little bit more practical for someone that's slightly less technical?

[00:32:46] What's

[00:32:47] something that you've learned

[00:32:48] about? AI machine learning LLMs, whatever that's Influenced the

[00:32:53] way that you think about

[00:32:55] what good design

[00:32:56] looks like in the future 

[00:32:57] A lot of it is again

[00:32:58] comes down to, I think, that [00:33:00] ultimately design will now just be like content driven. 

[00:33:02] Like, if you look at

[00:33:03] Instagram, right, like only a

[00:33:04] tiny part of the Instagram

[00:33:06] actual design is, the static things, um, like it's the tab

[00:33:09] bar and whatever, but, but the majority of the screen is just dynamic content.

[00:33:13] But what I'm realizing increasingly is that designers

[00:33:16] should really design, with the algorithm, for

[00:33:19] the algorithm and should really consider, like, okay, how does my design feel? and look with

[00:33:23] various types of content, and

[00:33:24] they should try to,

[00:33:25] Get as close to that real design

[00:33:26] as possible, where, instead of whatever, just drawing pretty pictures,

[00:33:30] they should try and, plug real data into their designs and plug the real algorithm into their designs and see, how that evolves.

[00:33:36] Because without it, you're, just not going

[00:33:38] to succeed designing this new world I want to go even deeper

[00:33:40] on that. Like,

[00:33:41] Let's speak to a very specific listener right now who's like mid career, stable job, content. They don't really know how to code. They've noticed an uptick in more technical dialogue

[00:33:51] on Twitter or this show or

[00:33:53] whatever.

[00:33:53] Why should they

[00:33:54] care?

[00:33:55] Like, what does it actually unlock to invest time [00:34:00] in growing these technical muscles as a designer?


## [00:34:03] Why you should care about code

[00:34:03] **Ridd:** Because it's the most fun you'll ever

[00:34:04] have, I think.

[00:34:05] Which is a cop out answer that

[00:34:07] probably people don't want to hear. But, um, when I got into design

[00:34:10] engineering, I

[00:34:10] think a lot

[00:34:11] of,

[00:34:11] like, other people

[00:34:12] I know is we got into design engineering because it was

[00:34:14] like, super fun, like, if you're designing in

[00:34:17] a design tool, often you're

[00:34:19] designing something 80 percent of the way, right?

[00:34:20] And then, the last 20%, is

[00:34:23] done in code,

[00:34:24] which is why we at Figma

[00:34:25] think it's so important, right, to bridge the gap

[00:34:27] between designers and developers. So in a

[00:34:28] way, by

[00:34:29] becoming a design engineer, I see it as a way

[00:34:31] To

[00:34:31] obtain more things to design, right? Now you

[00:34:33] can also worry about that last 20 percent that happens in code.

[00:34:36] you're getting yourself more design work. Now

[00:34:37] all of a sudden you get to worry

[00:34:39] about all these fundamental state machines. Of all these corner cases that normally only engineers worry about. So, in a lot of ways,

[00:34:46] you're still designing. You're just designing in a different medium. which I

[00:34:49] think is super compelling about

[00:34:50] design engineering.

[00:34:51] but yeah, it is truly, The

[00:34:53] most fun fun you'll ever have and I think that's

[00:34:55] the reason why

[00:34:56] people should do it

[00:34:57] if you're just wanting to make money, I'm [00:35:00] sure that design rules will keep existing. And there will, of course, all, always be, a role for, like, specialist designers to write like

[00:35:08] if you're a really great

[00:35:08] visual designer You're going nowhere.

[00:35:10] Like you don't have

[00:35:11] to become a design engineer. do this because it's the most fun, I

[00:35:14] like that answer

[00:35:15] You talked about bridging the gap between

[00:35:17] design and development

[00:35:18] **Vincent:** Mm hmm.

[00:35:18] **Ridd:** A lot of

[00:35:19] the AI use

[00:35:20] cases that were shipped yesterday

[00:35:22] make

[00:35:22] a heck of a lot of sense, but they don't speak directly to that opportunity as much.

[00:35:27] Can you talk a little bit about the role that AI might

[00:35:29] play in condensing that gap? we saw it a lot with CodeConnect, right? Like where, as you're designing, Now you can, like, get code snippets already

[00:35:36] for your design, right? And as a designer, you don't have to

[00:35:38] use that,

[00:35:38] but, it does give you a sense into, how engineers think.

[00:35:42] And I

[00:35:42] think with AI,

[00:35:43] we're only going to, for instance, make

[00:35:45] those code snippets better, right?

[00:35:47] So that, that's one way, like, AI is going

[00:35:48] to make

[00:35:48] code

[00:35:49] generation better. And that, of course, you're going to bring design closer to engineering.

[00:35:52] And then another thing that's that's happening

[00:35:54] is that

[00:35:56] I is going to, make it easier for designers to think

[00:35:58] about state

[00:35:59] machines, right?

[00:35:59] I [00:36:00] think, ultimately, a

[00:36:00] big cap big

[00:36:01] gap between

[00:36:02] designers and engineers is just whether or not you think of state machines,

[00:36:05] do you

[00:36:05] think about,

[00:36:06] all

[00:36:06] the various cases that

[00:36:08] can happen

[00:36:08] to your design and

[00:36:09] how your design will

[00:36:10] respond to it? And right now it's

[00:36:12] very

[00:36:12] hard for designers

[00:36:13] to, one

[00:36:14] be aware of all

[00:36:14] those cases, but also think

[00:36:15] about them, right?

[00:36:16] as

[00:36:16] you saw, yesterday, right? with the, prototyping

[00:36:19] tools, suddenly a designer is able to, to

[00:36:22] wire up a functioning prototype right from their design and

[00:36:26] suddenly they're able,

[00:36:27] because of that Thanks to

[00:36:29] AI, they're able to already start testing their design for, for certain

[00:36:32] cases, right? Like oh, What happens if the user clicks

[00:36:34] here, but they're on this screen, Do I have that case covered in that

[00:36:37] sense like, AI is going to make a lot easier

[00:36:40] for designers to

[00:36:41] start thinking about their designs in more

[00:36:43] complex ways and as they

[00:36:45] do, that

[00:36:46] eventually secretly I think will turn them into

[00:36:48] engineering, right? Because once you, once you have a prototype,

[00:36:51] then you're only so close to,

[00:36:53] the engineering worlds because you're one step away from actually

[00:36:56] making it

[00:36:56] real in code

[00:36:57] I like that connection. And

[00:36:58] I do think that's part of [00:37:00] What it even looks like to have

[00:37:01] more of

[00:37:01] an engineering mindset as a designer

[00:37:02] is being able to spot more and more of these Edge cases and unique states.

[00:37:07] I like I think

[00:37:09] most of what the race to it. Probably. Yeah

[00:37:11] this has been amazing before I let you go though 


## [00:37:14] The most valuable feedback Vincent has received

[00:37:14] **Ridd:** What's a piece

[00:37:15] of feedback that you've been given in your career that's had an impact on

[00:37:19] who you

[00:37:20] are now as a designer and engineer?

[00:37:22] two

[00:37:22] pieces of feedback come to mind

[00:37:23] Probably the most

[00:37:24] thoughtful feedback I've ever gotten

[00:37:26] was from my design

[00:37:27] manager at Amazon.

[00:37:28] I was a design

[00:37:30] intern at Amazon and, oh,

[00:37:31] I was hungry,

[00:37:32] hungry for success and wanting to prove myself. I would

[00:37:36] work every, every day, all day, go in on weekends, and I was just wanting

[00:37:41] to make this internship work

[00:37:42] so badly. Um, and in the end, um, after a lot of stumbling,

[00:37:45] it did work out. my internship was successful. But in my review specifically in my review packets,

[00:37:50] my manager left

[00:37:51] this note just for me that he had added last

[00:37:53] minute, where it's something like, Vincent.

[00:37:55] there is more

[00:37:56] to this world than just working.

[00:37:58] studying, and then going to [00:38:00] sleep

[00:38:00] and

[00:38:00] then doing

[00:38:00] it all over again. Don't forget to. Go to a foreign city, visit museums,

[00:38:05] fall in love, because that will

[00:38:08] not only make

[00:38:08] your life much, much more richer, which

[00:38:10] is something

[00:38:10] I

[00:38:11] realize now,

[00:38:12] but it's also where a

[00:38:14] large part of your

[00:38:14] design intuition comes from, right? Like, it's very hard as a designer or design engineer to, like, solve problems if you're not, a real

[00:38:22] human being yourself, if all

[00:38:23] you do is, you know, build.

[00:38:24] Be glued at your your laptop.

[00:38:26] I

[00:38:26] go back and forth on the weather, you know, on implementing that advice. You know, there's

[00:38:31] weeks where I'm terrible at it and weeks where

[00:38:33] I realized,

[00:38:33] Oh man, Jason was right, all along,

[00:38:36] but it was a very meaningful piece of feedback.

[00:38:39] the, other piece of

[00:38:40] feedback that I've gotten was from my

[00:38:42] friend Yuki. When, when, when I was a designer at he

[00:38:46] just saw me

[00:38:48] live as a designer and he saw me. day to day and one day, we met up and he basically told me when we are designing

[00:38:54] and coding together,

[00:38:55] I see like this, this,

[00:38:56] spark in your eye, but

[00:38:57] when you're just designing,

[00:38:58] I don't really see [00:39:00] it like it's

[00:39:00] just really like what

[00:39:01] you want to do.

[00:39:02] And at that point, I realized, Oh, yeah, man,

[00:39:04] like, why

[00:39:05] did I ever give up

[00:39:05] code? I should

[00:39:06] totally go back to being a design engineer

[00:39:08] and trying to make that happen. Well, I'm glad that

[00:39:10] you went back

[00:39:11] to it because you've obviously had a big

[00:39:12] impact on

[00:39:14] config and what you've shipped and, you

[00:39:16] know. Experience that we're gonna

[00:39:17] have even using Figma moving forward.

[00:39:19] So congratulations

[00:39:21] on an epic release It's all the hard work, it's been really awesome to see. Thank you, yeah, I hope

[00:39:27] people will use and love Visual

[00:39:29] Search and all the other cool ways to search with them. Awesome. Thanks so

[00:39:31] much for having me. Yeah,

[00:39:32] thank you.
