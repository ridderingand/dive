---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: 0-41r6ifA7c
slug: 2025-12-29-enrico-tartarotti
source_type: youtube-captions
source: https://www.youtube.com/watch?v=0-41r6ifA7c
guest: Enrico Tartarotti
host: Ridd
title: "How did one person design and build all of this?"
published: 2025-12-29
duration_min: 49
generated: 2026-09-10
generator: dive-club-ideas
note: "Descript project not found after Drive search exhausted. YouTube captions fallback. Timestamps ±30s; no diarization."
---
[00:00:01] Let's say that I started this like five

[00:00:03] years ago. I would have raised some

[00:00:05] money like hire 10 people and we do all

[00:00:07] like designs and then refine like the

[00:00:09] whole loop it's much slower. With AI the

[00:00:12] speed of this process can be 10xed

[00:00:14] essentially right for this stage where

[00:00:17] I'm at. This is kind of the superpower

[00:00:19] that I have versus all my competitors.

[00:00:22] Welcome to Dive Club. My name is Rid and

[00:00:24] this is where designers never stop

[00:00:26] learning. This week's episode is a deep

[00:00:29] dive into a new video collaboration tool

[00:00:30] called Flask. [music]

[00:00:32] But it's not just about the design

[00:00:35] details. The reason I find this product

[00:00:38] so inspiring is that it was designed and

[00:00:42] built by one person, Enrico Tartarati.

[00:00:43] But what's really special is this dude

[00:00:46] was a PM before he started working on

[00:00:49] this. So it's the perfect example of

[00:00:52] what it looks like to thrive as a

[00:00:54] generalist builder. Today we're going to

[00:00:56] go deep into everything that it took to

[00:00:59] design and build a well-crafted product

[00:01:01] and all of the lessons that Enrico has

[00:01:03] learned along the way. So let's dive

[00:01:05] right into what he made. [music] The

[00:01:08] core idea of Flask is that creativity

[00:01:10] cannot be conveyed in a text box. That's

[00:01:13] the core idea of it. So let me open a

[00:01:16] random video that uh we have. So it

[00:01:19] supports both YouTube videos and regular

[00:01:21] videos that you can upload. So the core

[00:01:25] idea of this is that of course just like

[00:01:26] any other collaboration tool where we

[00:01:28] are working together to make a video

[00:01:29] like me and my team or I need to show it

[00:01:31] to someone else we want to comment on

[00:01:33] it. We want to say oh this piece sucks

[00:01:35] this piece is good. What I was finding

[00:01:39] myself doing was writing gigantic

[00:01:41] walls

[00:01:43] of text

[00:01:46] trying to explain this and that with

[00:01:48] words but it just doesn't work. Imagine

[00:01:51] trying to convey to someone take this

[00:01:51] mouse.

[00:01:53] >> Like imagine trying to describe this

[00:01:56] mouse to someone just with words. It

[00:01:57] doesn't work like they would understand.

[00:01:59] With creativity, you need references.

[00:02:02] You need to explain complex ideas. So

[00:02:04] the idea with Flassy that sure you can

[00:02:06] leave your comment. But then you can

[00:02:10] also go ahead and hit record and 3 2 1

[00:02:12] and now I'm recording myself. So I can

[00:02:14] explain to someone a complex idea. So

[00:02:16] for example here in the intro I want to

[00:02:18] make it I don't know a tiny bit faster

[00:02:19] and reduce the chromatic aberation on

[00:02:22] the sides. So I hit enter and flask is

[00:02:23] going to automatically capture all the

[00:02:26] insights from there and the recording is

[00:02:28] going to be available right here in the

[00:02:29] comment. [music] Real quick message and

[00:02:32] then we can jump back into it. If you're

[00:02:33] like me then you know adding motion to

[00:02:36] your designs is the easiest way to make

[00:02:39] them feel premium. The thing is, I'm not

[00:02:41] a motion designer. But that's why

[00:02:44] Jitter's new AI brainstorm feature is a

[00:02:45] gamecher. [music]

[00:02:47] I just drop in my design and then get

[00:02:50] instant motion ideas that I can tweak,

[00:02:52] refine, and make my own. It's seriously

[00:02:53] so easy to animate your work with

[00:02:56] Jitter. I cannot recommend it enough.

[00:02:59] [music] Just head to dive.com/jitter

[00:03:02] to try it out today. I saw a scroll

[00:03:03] stopping tweet the other day. The

[00:03:05] creators of Tailwind are working

[00:03:07] directly on paper [music] to train the

[00:03:10] output to be perfect. They even invested

[00:03:12] in the company. So just think about the

[00:03:14] possibilities for a second. In the

[00:03:15] future, [music] you could design

[00:03:17] something in paper and then just write

[00:03:19] click and copy the perfect Tailwind as

[00:03:21] if the creators themselves wrote it by

[00:03:23] hand. Or maybe you take an existing code

[00:03:25] component and import it into paper to

[00:03:27] make edits [music] directly on the

[00:03:29] canvas. I mean, this is going to totally

[00:03:32] change how we design and deliver UIs for

[00:03:34] the web. And it's just another reason

[00:03:36] why I'm betting big on paper as the next

[00:03:38] [music] great design tool. You can try

[00:03:40] it out today. Just head to

[00:03:42] dive.club/paper.

[00:03:44] [music] Okay, now on to the episode. The

[00:03:46] thing that I find so interesting about

[00:03:49] you and this product [music] is you're a

[00:03:51] solo builder with a product background.

[00:03:53] You've never actually been a

[00:03:54] professional designer, right? And yet

[00:03:57] like this thing looks really good. So

[00:03:58] can you give us just a quick crash

[00:04:00] course of your background? But what I'm

[00:04:02] really interested in digging into is how

[00:04:06] the heck did you develop this level of

[00:04:08] taste and refine your visual skills to

[00:04:10] the point where you're able to do the

[00:04:12] full end to end design for something

[00:04:13] like this?

[00:04:15] >> Well, I've always been, you know, that

[00:04:17] guy growing up like always with

[00:04:19] computers and programming like a lot of

[00:04:21] the people I guess uh following this

[00:04:24] podcast. So I I I know how to code from

[00:04:26] a young age. I I've never been trained

[00:04:28] as a like a software engineer to be

[00:04:30] honest. It's just like I'm I'm I'm

[00:04:32] passionate about technology. Uh I worked

[00:04:34] as a product manager at Amazon and at

[00:04:36] Maze. Maze is one of the biggest uh user

[00:04:38] research tools out there. I left that

[00:04:40] job last year. Since then and on the

[00:04:42] side of this on over the past 5 years,

[00:04:44] I've uh also been running my YouTube

[00:04:46] channel where I talk about the design

[00:04:48] engineering and psychology behind the

[00:04:50] tech that we use every day. So I would

[00:04:52] say that the design piece comes from

[00:04:56] first of all being always into digital

[00:05:00] media some way. Like when I was 15 I was

[00:05:02] doing I don't know after effects you

[00:05:04] know VFX shots like with me with my

[00:05:06] scrappy camera and trying to do like

[00:05:08] gunshots and stuff. So a lot of these

[00:05:10] things kind of translate over. So, for

[00:05:12] example, knowing how to edit videos or

[00:05:14] how to do thumbnails with Photoshop,

[00:05:18] even though it's not the same as uh you

[00:05:20] know, designing an interface from like a

[00:05:23] tool level or a pixel level, the the

[00:05:25] core taste that you acquire into

[00:05:27] something, it's kind of the same. A

[00:05:28] friend of mine is an Italian designer. I

[00:05:30] took his course. So, but it was very

[00:05:33] hands-on. So, there's not a lot of

[00:05:35] design theory, empathy, a lot of none of

[00:05:37] that. It's more like, okay, how do you

[00:05:39] actually, you know, center things,

[00:05:40] organize things? what is the spacing

[00:05:41] between this and that? You start to get

[00:05:43] a feel for things. To be honest, the

[00:05:46] biggest learning experience has been

[00:05:47] just building it. Building it and being

[00:05:51] exposed to the best in the field like

[00:05:54] being exposed to top level god tier

[00:05:56] products when it comes to design. Uh

[00:05:58] like for example in May I I visited

[00:06:00] notion's headquarters. I made a video

[00:06:01] there talking with the designers and the

[00:06:03] engineers and it was so cool to go

[00:06:04] behind the scenes of all the little

[00:06:06] details and the level of you know

[00:06:09] obsession that they go for every detail.

[00:06:11] So you kind of absorb some of that. You

[00:06:12] use a new tool like I'm friends with

[00:06:14] David from Supercut. You had it on the

[00:06:15] podcast as well.

[00:06:17] >> And you use a tool. You're like, "Oh,

[00:06:19] this feels good. Let me actually zoom in

[00:06:21] to the every like menu and things and

[00:06:23] understand why like why do they do this

[00:06:25] uh in one way or the other?" And then

[00:06:26] you're thinking, "Okay, like actually my

[00:06:28] thing kind of sucks now that I see this.

[00:06:29] So let me go and fix it." So this is

[00:06:31] >> I've been in the place before with

[00:06:32] Supercut.

[00:06:34] >> Yeah. Yeah. So like you ship your thing

[00:06:37] and you're happy with it and then you

[00:06:38] you discover things that are at a higher

[00:06:40] level and then you slowly build up like

[00:06:43] that. You know I think it's again going

[00:06:45] back to to to things coming from

[00:06:47] different angles like with YouTube is

[00:06:48] kind of the same. you know, your first

[00:06:49] video, you're excited, you're like, "Oh

[00:06:51] my god, this is great. It's going to be

[00:06:53] an amazing million views." And now if I

[00:06:55] look back at it, it was horrible. But

[00:06:57] then I'm like, "Okay, at the moment I

[00:06:58] was so proud and then I watch something

[00:07:00] else like I can I I can integrate

[00:07:02] something from that or the intro from

[00:07:03] that other person or that angle from

[00:07:05] whatever." And then slowly you kind of

[00:07:08] build it up. The thing now is that with

[00:07:11] AI and you know with the speed at which

[00:07:13] you can build the speed of this process

[00:07:16] can be 10xed essentially, right? So if

[00:07:18] in the past let's say that I was I don't

[00:07:20] know in a startup that I that I I

[00:07:22] started this like 5 years ago I would

[00:07:23] have raised some money like hire 10

[00:07:25] people and we do all like designs and

[00:07:28] then refine like the whole loop is much

[00:07:30] uh it's much slower and right now I just

[00:07:33] was able to iterate much faster and

[00:07:35] again if I see someone that has like a

[00:07:37] cool idea for how to do like menus or

[00:07:40] drop downs or whatever in a day it can

[00:07:43] be out and I'm like okay now this looks

[00:07:44] better this feels better being that I'm

[00:07:46] not this gigantic company. I don't have

[00:07:48] all the baggage of oh like how are the

[00:07:50] legacy customer going to feel about it?

[00:07:51] I don't care. I'm just going to release

[00:07:53] it and you know [laughter]

[00:07:54] see see how it is. It's not it's not

[00:07:56] going to this is not sustainable of

[00:07:59] course for um when you have like a $100

[00:08:01] million a year business. But for this

[00:08:04] stage where I'm at, this is kind of the

[00:08:06] superpower that I have versus all my

[00:08:09] competitors that that are these kind of

[00:08:11] huge companies. I've shipped a lot of

[00:08:12] things over the months that turned out

[00:08:13] to be something that people were like

[00:08:15] confused about. And so, okay, I just

[00:08:16] rolled back the change. The fact that

[00:08:18] you have such an active early community

[00:08:20] is also useful because you get immediate

[00:08:21] feedback like, hey, this is stupid.

[00:08:24] Okay, oh, sorry. I I'll roll it back and

[00:08:25] find a better way to do it.

[00:08:26] >> Your point about the speed of

[00:08:29] development with AI is so interesting

[00:08:31] for someone in your position where

[00:08:32] you're sweating a lot of these like

[00:08:35] interface details kind of for the first

[00:08:36] time or at least the first time where

[00:08:38] you've been responsible for all of them.

[00:08:40] advice I've given to younger designers

[00:08:42] in years past is like you just got to

[00:08:45] get through your first 5, 10, 100

[00:08:47] designs because they're undeniably going

[00:08:49] to suck. Like you just have to get

[00:08:51] through the suck in order to get to the

[00:08:52] point where you actually are making

[00:08:53] something of high quality. And I think

[00:08:55] that's what's so fascinating to me

[00:08:57] looking at your work is just the

[00:09:00] trajectory and the rate at which you've

[00:09:03] been able to get to something for the

[00:09:05] first time that is really high quality

[00:09:08] is is truly impressive. And one of the

[00:09:10] things that you mentioned to me off the

[00:09:13] record was how David at Supercut did a

[00:09:14] little critique of your work and kind of

[00:09:17] just went through the product one time.

[00:09:20] And I'm wondering if from his feedback

[00:09:24] you're able to identify specific ways

[00:09:27] that you've evolved the lens that you

[00:09:29] use to evaluate what you're making and

[00:09:31] maybe even other products too.

[00:09:32] >> Yeah, I think I mean that was a fun

[00:09:33] story. There's like four I think four

[00:09:35] employees a supercar or something like

[00:09:37] that. And one of them is one of the my

[00:09:38] engineers that was working with me at

[00:09:40] Maze in my team. We just randomly

[00:09:42] stumbled across each other with in this

[00:09:45] co-working in Barcelona. And so then for

[00:09:46] the month I was there I also got to meet

[00:09:48] like them and David and we got start to

[00:09:50] talk. So then we were like uh I was

[00:09:53] about to launch the first version like

[00:09:55] the public launch in October and I asked

[00:09:57] them we did a bit of a trading of skills

[00:10:00] like me for like more YouTube production

[00:10:02] and content for them and then David took

[00:10:04] a look I think he's he's amazing like

[00:10:06] he's a he's a way better designer and

[00:10:10] then visual like in all aspects than me

[00:10:11] and so he took a look at the product and

[00:10:13] he's like okay it looks cool but it it

[00:10:16] looked like a toy. So I was like you you

[00:10:18] can still kind of feel and see that it

[00:10:21] has a bit of this, you know, 3D type of

[00:10:24] effect where, for example, like the top

[00:10:26] of each border radius is a bit lighter.

[00:10:27] So it gives like this light from the top

[00:10:29] type of effect. But it was way more

[00:10:32] exaggerated in that first version.

[00:10:34] Looking at it now, I can see that it was

[00:10:36] a bit tacky, a bit too much. And he's

[00:10:37] like, "Okay, it's I get what you're

[00:10:39] trying to do here, but it cannot feel

[00:10:41] too much like a toy. It needs to be like

[00:10:43] it's a product that people will use." So

[00:10:45] we actually sat down and we we started t

[00:10:47] typing tailwind classes into it. The

[00:10:49] thing about taking this kind of feedback

[00:10:51] is to be able to technically go ahead

[00:10:54] and understand what the feedback is and

[00:10:55] how to fix it. We started literally

[00:10:58] talking about which tailwind classes to

[00:11:00] add or remove to the CSS of the

[00:11:02] components to make it look more and

[00:11:03] that's what you see now like I have a

[00:11:04] tailwind class that creates this kind of

[00:11:06] 3D effect in the subtle way that I want

[00:11:08] everywhere. So it's like centralized but

[00:11:11] now my taste has evolved based on that

[00:11:14] learning. So now if I I could never

[00:11:16] recreate something as bold, let's call

[00:11:18] it tacky in the way that I that I did in

[00:11:20] the first version because I would be my

[00:11:22] own judge of that. I think going getting

[00:11:24] your work out there to the user. A user

[00:11:25] is never going to say oh like your

[00:11:28] border radius on the top is is off like

[00:11:29] they don't know about that.

[00:11:32] >> So I think it's useful to yes get it out

[00:11:33] to users and see like if they actually

[00:11:35] use it if there's retention and like

[00:11:36] does it make sense for the business.

[00:11:38] Does the pricing make sense? Is the

[00:11:39] information architecture correct? Like

[00:11:40] do people understand what the product

[00:11:43] does? And that's one type of feedback.

[00:11:44] But then also trying to get feedback

[00:11:47] from the closest person that you have

[00:11:49] access to. Of course, like depending on

[00:11:50] your level, you might be having access

[00:11:53] to different kind of network, but that

[00:11:55] can maybe they're one step ahead of you

[00:11:56] that can give you some feedback about

[00:11:58] like, hey, like don't mind about how you

[00:12:01] use it. Just roast it. Like please, I

[00:12:03] told you like David, please roast it.

[00:12:04] Don't hold back. Just tell me anything

[00:12:06] that you see that is wrong that is like

[00:12:08] even small details. I I want to get a

[00:12:11] ton of work from this to do and fix. So

[00:12:13] I think you need both and um that's

[00:12:15] that's the way to grow yourself as well.

[00:12:16] You know,

[00:12:17] >> you mentioned the tailwind classes.

[00:12:19] Having used the product, I can notice,

[00:12:21] okay, you have these kind of consistent

[00:12:23] borders. There's a consistent gradient

[00:12:26] on the hover states for certain buttons.

[00:12:29] How far have you went into the

[00:12:32] systematizing things direction as a solo

[00:12:33] builder? Like where do you think that

[00:12:34] line is?

[00:12:37] >> I tried to do the minimum possible so

[00:12:40] that things look generally okay. So, for

[00:12:42] example, I don't know the the J and L

[00:12:44] keys here, they don't have any spacing

[00:12:46] between them. There's a bunch of details

[00:12:49] in in their UI that are not to the

[00:12:51] level. And to be to be honest, this

[00:12:53] probably I mean, I don't I'm not sure if

[00:12:55] this is a full like perfect circle, this

[00:12:58] icon. I need to check. But you see that

[00:13:00] I'm not trying to go like pixel peeping

[00:13:01] on everything. I choose I pick my

[00:13:04] battles. That's the thing. And for

[00:13:06] whatever else where I don't pick my

[00:13:07] battles, I try to systematize. So for

[00:13:12] example, up until last week, this was a

[00:13:15] uh its own kind of menu with its own

[00:13:18] styling. And now I created a generic

[00:13:20] styling for all menus like this is shed

[00:13:22] CI and I just created like um I

[00:13:24] customized the the classes. So for

[00:13:26] example, if I do this and you see that

[00:13:28] it has this kind of translucent effect

[00:13:31] and the hover state and I just say,

[00:13:33] okay, I just literally tell Claude,

[00:13:34] okay, take this menu that we built

[00:13:36] manually like maybe two months ago and

[00:13:38] just now we're going to use this

[00:13:40] standard default component from Chassien

[00:13:42] just adapt it and there we go. So now

[00:13:45] this is literally the same or if I do

[00:13:47] this then again this is literally the

[00:13:49] same menu. Uh and most of the time you

[00:13:51] don't need to do any tweaks. So, I pick

[00:13:54] my battles. Like, for example, here on

[00:13:56] this part, the comments box, this is

[00:14:00] where I would spend hours and hours

[00:14:02] pixel peeping. And like, for example,

[00:14:03] >> I can tell for what it's worth. It's

[00:14:04] nice.

[00:14:06] >> There's a little springy animation and

[00:14:08] it's been tweaked and it's nice. And

[00:14:10] this is because this is the components

[00:14:12] that 80% of the people are going to

[00:14:14] actually use and interact the most with.

[00:14:17] So, yeah. Okay. Like the the chevron

[00:14:20] rotates. Like I don't think all the

[00:14:21] other chevron rotates, but this one

[00:14:23] does. And is it consistent? Maybe at the

[00:14:25] moment, no. But here it's important that

[00:14:28] it's nice. Uh or this turns into an ax

[00:14:30] to close it. Would I do this on every

[00:14:32] plus button in the app? Probably not.

[00:14:34] And I don't have like a generic

[00:14:37] component. I just try to pick my battles

[00:14:39] and then systematize when you can. Like

[00:14:40] for example, I have two types of

[00:14:43] buttons. Uh let me see. So this is a

[00:14:45] secondary button with this kind of

[00:14:47] gradient hover effect and it's uh

[00:14:49] there's like a also like when you hold

[00:14:52] it down it moves and translates to to

[00:14:54] the bottom. Uh and there's like a

[00:14:55] primary button as well which is this and

[00:14:58] you'll see it all the way in the UI. So

[00:14:59] I mean doesn't take long to create

[00:15:01] those. I'm probably going to use a lot

[00:15:03] of primary and secondary buttons. So

[00:15:06] makes sense to to do it. But then other

[00:15:08] than that, I have a a tailwind class for

[00:15:10] this kind of 3D border effect which I

[00:15:12] might use on things that are not a

[00:15:13] comment or maybe it's a button or maybe

[00:15:15] it's something else here and there like

[00:15:18] uh here it's used for this uh indicator

[00:15:21] of time stamp. And it's just easy for me

[00:15:23] to have a few things here and there that

[00:15:25] are standardized but not be too locked

[00:15:28] to a perfect system. Also because again

[00:15:29] because your taste is going to evolve

[00:15:31] and the app is going to evolve. You

[00:15:33] don't want to lock yourself into too too

[00:15:35] much of a rigid system when it comes to

[00:15:36] when it comes to things because now you

[00:15:38] have AI. It's not about oh I need to

[00:15:40] manually update the same thing in 10

[00:15:42] places. You can just ask the AI hey find

[00:15:43] all the instances of this and just

[00:15:46] change it. So I think there also less of

[00:15:48] a need of like a super duper

[00:15:50] standardized design system. But at the

[00:15:52] same time the right little pieces of

[00:15:55] consistency help create a standard, you

[00:15:57] know, look and feel to the app. [music]

[00:15:58] I've been designing products every day

[00:16:01] for the last 15 years. But in the last 6

[00:16:03] months, everything [music] has changed.

[00:16:05] With AI in the mix, I'm cranking out

[00:16:08] ideas faster than ever. But none of that

[00:16:10] matters if I can't get the feedback that

[00:16:12] I need to get the team aligned. [music]

[00:16:15] And right now, getting async feedback

[00:16:17] still kind of sucks. So, I'm building

[00:16:20] the product I've always wanted, and it's

[00:16:22] called Inflight. I use it every day to

[00:16:25] share ideas and get feedback from the

[00:16:27] team. And it's totally changing the way

[00:16:29] that I work. So, I'm [music] excited to

[00:16:31] show you. Right now, I'm only giving

[00:16:32] access to DiveClub listeners. So,

[00:16:35] [music] head to dive.comclub/inflight

[00:16:38] to claim your spot.

[00:16:41] Can we look at the timeline component? I

[00:16:42] can already tell that there's like a ton

[00:16:46] of little interactions and minuscule

[00:16:47] design details in there. Can you talk

[00:16:50] about some of the decisions that you've

[00:16:51] made, some of the intentional ways that

[00:16:53] you've iterated? I'd love to kind of

[00:16:54] just use that as an excuse to go

[00:16:55] through.

[00:16:57] >> This is the timeline. you might need a

[00:16:59] client or someone that's not familiar

[00:17:00] with video to use it. But at the same

[00:17:02] time, you also might have like an

[00:17:04] editing video professional use it. So

[00:17:06] you you want to have something that is

[00:17:09] powerful but that you discover how it

[00:17:10] works because it's slightly different

[00:17:12] that than like a standard video player

[00:17:14] that you discover progressively and it

[00:17:17] makes sense. So for me like okay if I

[00:17:19] start to create a comment here let's say

[00:17:23] Enrico or like make this

[00:17:25] slower then the comment is going to

[00:17:28] appear there visual straightforward I

[00:17:30] understand what's going on right uh if I

[00:17:32] add another comment here let's say that

[00:17:35] it's like here and this is important and

[00:17:37] this is I don't know uh an audio

[00:17:40] recording of some of some kind uh where

[00:17:43] I might say so here for example we want

[00:17:46] to make it a match cut. Cool. So now I

[00:17:49] have an audio recording here. I can say

[00:17:51] uh this is important.

[00:17:53] And there we go. I started to to create

[00:17:56] some comments and um and to add to my to

[00:17:59] my timeline. But what happens now is

[00:18:01] that if I go here and create something,

[00:18:03] then you can already see that there is

[00:18:05] no space. So what's going to happen?

[00:18:07] Let's see. I just create it.

[00:18:10] And now you see that oh things have

[00:18:12] changed. It has zoomed automatically.

[00:18:12] Mhm.

[00:18:14] >> There's an animation. I don't need like

[00:18:15] a tutorial to tell me, oh, this is a

[00:18:18] zoomable thing. I I it just zoomed. It

[00:18:20] must be zoomable. That's why there is

[00:18:23] this plus. And this these controls are

[00:18:25] not important because people are going

[00:18:27] to use them. These are here just because

[00:18:30] to tell you that hey, this is something

[00:18:31] zoomable.

[00:18:32] >> So most people are not not going to

[00:18:34] interact with these. It's more like, oh,

[00:18:36] actually, if there's uh this and this

[00:18:38] and this, oh, probably there's some kind

[00:18:39] of zooming going on here, right? So, of

[00:18:40] course, you can use them, but you can

[00:18:42] use your mouse or your trackpad and you

[00:18:43] can zoom in and out. I'm with the mouse

[00:18:46] right now, but you can see that. Okay,

[00:18:48] now it's zoomed and so I can pan, I can

[00:18:50] move around and now I can understand

[00:18:52] like, oh, now I understand what

[00:18:53] happened, right?

[00:18:56] >> Yeah, the Figma style clustering is nice

[00:18:58] too like there's so many little things

[00:19:00] happening in here. The challenge with

[00:19:03] this was basically this is one of the

[00:19:06] the few let's call an innovations of

[00:19:08] this which is all the competitor have

[00:19:11] like player play bar list of comments.

[00:19:13] >> Yeah that's every single competitor in

[00:19:15] the space has that what I wanted to do

[00:19:17] is like okay now you have this as well

[00:19:19] which is was not in the original version

[00:19:20] because now people were asking it so

[00:19:22] they were so used to it like okay I'm

[00:19:23] just going to add a sidebar but if you

[00:19:25] want like this is how you can use it as

[00:19:28] well which is all visual. So you can

[00:19:30] basically interact with it as you would

[00:19:32] be normally in a video editing timeline,

[00:19:35] right? So for example here now I have

[00:19:37] two elements and there's not enough

[00:19:39] space for them to appear. So what

[00:19:41] happens is that now there's grouping.

[00:19:42] This is similar to Figma where you have

[00:19:44] comments and you zoom in and out and

[00:19:46] there's grouping. Now when you when you

[00:19:48] group what happens is if I click on it

[00:19:50] it's going to zoom to the minimum level.

[00:19:52] There's an algorithm that calculates

[00:19:54] what is the minimum level of zoom where

[00:19:56] both of them are in their expanded

[00:19:58] state. There's also a second state which

[00:19:59] is like if you see if I start to zoom

[00:20:01] out and you see that now they collide.

[00:20:03] If I take another zoom one of them is

[00:20:04] going to be collapsed in this state and

[00:20:06] again if I click it's going to expand to

[00:20:08] the minimum level to which the timeline

[00:20:10] is is expanded. The grouping system it

[00:20:11] took a lot of iterations to get right

[00:20:13] because there's so many things like for

[00:20:15] example here there's three elements and

[00:20:18] then two groups can collide as well and

[00:20:19] so they're going to be merged in a

[00:20:21] bigger group or a group can collide with

[00:20:23] a collapsed element or a group can

[00:20:25] collide with a full element. So there's

[00:20:28] also a little springy animations when a

[00:20:30] a group is created to give you that idea

[00:20:31] that they've been kind of grouped

[00:20:33] together. That's been quite complex to

[00:20:35] do. Also, there's different shapes. Like

[00:20:37] this is a circle. It tells you that it's

[00:20:38] a different shape than this, which is

[00:20:40] more similar to to an element. So the

[00:20:41] circle tells you, hey, there's more of

[00:20:43] one and the rectangle tell you there's

[00:20:44] only one.

[00:20:45] >> How are you keeping track of all this?

[00:20:47] Like how do you make sense of all of

[00:20:49] these different possible states and

[00:20:51] build something that is elegant? Like is

[00:20:52] it all happening at once? Do you sit

[00:20:54] down and map it all out? Is it like you

[00:20:56] add one at a time and play with it and

[00:20:57] see where it breaks?

[00:20:58] >> It's it's a lot about playing with it.

[00:21:00] So when I think of this, I do it of

[00:21:02] course with the AI, but I I know to

[00:21:04] code. I know it's I read all the code.

[00:21:06] I'm writing like maybe 5% of the code

[00:21:09] and it's mostly like front end changes.

[00:21:11] What I care about is that okay, is the

[00:21:13] AI planning it in or or developing it in

[00:21:16] a in a crazy stupid way and then I can

[00:21:17] intervene. So it's mostly about code

[00:21:19] architecture rather than I don't give a

[00:21:21] crap about the cleanest code and the

[00:21:23] most compact. I don't care about that.

[00:21:25] But I care that the architecture of the

[00:21:26] code and like okay everything is

[00:21:28] centralized. There's not five functions

[00:21:30] that do a slightly different thing than

[00:21:32] one another. Uh or the back end

[00:21:34] architecture is done properly like all

[00:21:36] these things that are important. But so

[00:21:39] for example here it's a lot about all

[00:21:41] these little like front end tweaks and

[00:21:43] interactions and mouse versus keyboard

[00:21:47] versus uh like a mouse pad in trackpad.

[00:21:49] So I just use it. So I start with an

[00:21:51] idea of what might be the edge cases

[00:21:53] here. So what I would usually do in this

[00:21:55] case is okay let's say that now we have

[00:21:56] to build this expandable timeline.

[00:21:57] Imagine that we have the list of

[00:21:59] comments we have a timeline we have to

[00:22:01] create an expanding thing. The first

[00:22:02] thing I would do is I I do research

[00:22:04] myself but in the meantime I send off

[00:22:07] cloud code which is my main like coding

[00:22:09] model that I use. I send it off to do

[00:22:11] some research like what is the best are

[00:22:13] there some libraries pre-builts that

[00:22:15] already exist that do uh timeline

[00:22:18] expansion and contraction. Okay cool.

[00:22:20] And then I see okay are they viable to

[00:22:21] implement? Okay, then let's try it. If

[00:22:23] they are open source, then it's fine. A

[00:22:24] lot of the times, like in this case, I

[00:22:26] found that there are some limitations to

[00:22:27] those. So, I'm like, okay, we're going

[00:22:28] to need to build it from scratch. I I

[00:22:30] ask, okay, like are there some best

[00:22:31] practices that we need to build that we

[00:22:32] need to take into consideration when

[00:22:34] we're building a system like this? And

[00:22:35] maybe it's about okay like when there's

[00:22:37] like 200 elements we don't need to

[00:22:39] render those outside the viewport

[00:22:41] because it can it can the performance

[00:22:42] can get lowered and like all these

[00:22:44] little things that usually the AI can

[00:22:46] just figure out and get from

[00:22:47] documentation from the internet and

[00:22:48] you're going to be like okay we need

[00:22:50] this we need this this is too like we

[00:22:51] don't care this is too much of an edge

[00:22:52] case like let's take it for later. So

[00:22:54] it's going to create like a first

[00:22:56] version and already in my prompt I can

[00:22:58] think of some edge cases like okay what

[00:23:01] happens if two things collide and I tell

[00:23:03] it I tell the AI what do I need to

[00:23:04] happen in this case like okay if they

[00:23:06] collide then they are grouped together I

[00:23:07] this is a bit more complex and then I

[00:23:09] start to use it and most of the time I I

[00:23:11] then I notice the things that are wrong

[00:23:14] with it like or okay actually if we are

[00:23:15] on the corner if we are on the on the

[00:23:18] like one thing is that if I am on the

[00:23:21] edge here if I'm all the way to let's

[00:23:23] say that I move this Here you see that

[00:23:26] now it cannot go past

[00:23:29] >> the the end like now there's an

[00:23:32] exception so that I can move the

[00:23:33] indicator

[00:23:35] >> but the comment stays there and that by

[00:23:37] the way affects all the math of

[00:23:39] everything else. Do I know by heart

[00:23:41] every line of code behind this? No, I

[00:23:43] don't. But because the the risk is kind

[00:23:46] of more limited in the sense that uh

[00:23:49] it's it's more of a front end change

[00:23:51] than like a security backend thing. I'm

[00:23:53] okay with it and I just, you know, use

[00:23:56] it until it feels good to me. Use it

[00:23:58] until like I I think there's some bug or

[00:24:00] something weird. So, another thing that

[00:24:03] is kind of more hidden away in this is

[00:24:06] uh let me see. Okay, [snorts] so let's

[00:24:08] go back to a simpler example here. So

[00:24:10] with the playhead, what can happen is

[00:24:13] that okay, I'm in this situation and now

[00:24:15] the feedback I got from people at the

[00:24:16] beginning it was more like Figma where

[00:24:19] you have this this bar right here was uh

[00:24:21] more like okay I create a rectangle and

[00:24:23] then it's in this kind of plus create

[00:24:26] mode and then I draw a rectangle. But

[00:24:29] what all of the people were doing in my

[00:24:32] user tests was basically taking the the

[00:24:34] comment button, it becomes a plus and

[00:24:36] then they were always trying to find the

[00:24:38] play head and put it onto the playhead.

[00:24:40] So at some point I'm like, okay, people

[00:24:41] just want to create things where the

[00:24:44] playhead is fine. I'm going to make it

[00:24:45] simpler. But now, for example, this is

[00:24:47] an edge case. You have this this

[00:24:49] timeline here. The playhead is not

[00:24:52] visible in the viewport. So when I hit

[00:24:55] C, which is my uh command shortcut, or I

[00:24:56] click on it and I focus on the on the

[00:24:58] toolbar here,

[00:25:02] >> the viewport out auto moves so that the

[00:25:03] playhead is centered, then like, oh,

[00:25:04] actually, yeah, I'm creating something

[00:25:07] here and there's this pulsating thing

[00:25:08] which tells me where I'm creating things

[00:25:10] and I can tweak it as well. I think like

[00:25:11] a lot of the design theory would tell

[00:25:13] you, oh, you have to think about

[00:25:14] feedback. You're not going to think

[00:25:15] about it until you try it and you feel

[00:25:17] that, oh, I created something, but I

[00:25:18] don't know where and then you go ahead

[00:25:20] and fix it. So it's just it's a lot of

[00:25:22] you know trying it out yourself as you

[00:25:24] build it and making sure again that you

[00:25:26] have a high standard for for all the

[00:25:28] things that that you build or another

[00:25:31] one is so let's say that I start to zoom

[00:25:33] in and I have this display head that

[00:25:36] moves right so it's moving uh it's

[00:25:38] moving along but you notice that the

[00:25:41] timeline is also slowly moving so that I

[00:25:42] can just watch through the entire video

[00:25:44] and don't need to to you know like

[00:25:46] scroll manually to to follow the

[00:25:48] playhead. But an interesting nugget is

[00:25:50] that this is because one of my users

[00:25:52] were like, "Hey, I find myself scrolling

[00:25:54] all the time to to follow my playhead.

[00:25:55] Can't can you just like do it

[00:25:57] automatically just like Final Cut does?"

[00:25:58] I never use Final Cut. So, I just

[00:26:01] downloaded like a trial version and I

[00:26:02] spotted an interesting thing that Final

[00:26:03] Cut does, which is that of course when

[00:26:06] you start to play like you see that now

[00:26:08] we start the play with the playhead in

[00:26:10] this position like on the edge of this

[00:26:13] of the video. So if I hit play, the

[00:26:16] playhead is slowly but surely going to

[00:26:18] move to the center because the speed

[00:26:20] that at which the timeline is moving is

[00:26:23] a bit faster. And so if I now go 2x

[00:26:26] speed, it's going to do it up until it's

[00:26:29] in the it's exactly in the middle. And

[00:26:31] now it's going to stay in the middle and

[00:26:33] kind of be fixed over there.

[00:26:35] >> And same thing like this. If I put it

[00:26:37] here, you see that slowly going back. So

[00:26:40] the speed adjusts to center it. It's a

[00:26:41] small little thing. If I didn't see it

[00:26:42] in Final Cut, I would never have thought

[00:26:45] to implement it into Flask, but it's

[00:26:47] like, oh, this is cool and it's a nice

[00:26:49] detail that, you know, probably most

[00:26:51] people are not going to notice, but it's

[00:26:53] it's cool. And now it's got to talk

[00:26:55] about it in a podcast. So, [laughter]

[00:26:58] well, okay. So, you notice the detail,

[00:27:00] you want to incorporate it, maybe you

[00:27:02] don't remember, but like rough idea, how

[00:27:04] easy or hard is it for someone like you

[00:27:06] to then implement that detail with cloud

[00:27:07] code?

[00:27:09] >> Did this take a whole day? Was it pretty

[00:27:10] close to

[00:27:12] >> I would say the the hardest things to

[00:27:15] implement are the boring ones like

[00:27:18] authentication done properly backend

[00:27:20] stuff like the the weeks that I find or

[00:27:22] the where I work the hardest and are the

[00:27:25] hardest to do is for changes where if I

[00:27:26] made the change the product looks

[00:27:28] exactly the same because I've done some

[00:27:30] like backend migration or like for

[00:27:33] example there was a change where before

[00:27:35] you would have text type comments and

[00:27:37] then recording type comments and then

[00:27:39] screen type comments. So three types of

[00:27:41] comments. And now for example if I do a

[00:27:45] voice note like la test and I can also

[00:27:48] go ahead and in my clipboard take an

[00:27:51] image a view and these are all

[00:27:53] attachments to a comment

[00:27:55] >> and visa might look like a small change

[00:27:57] but now I need to completely rearchitect

[00:27:59] the database migrate all the data from

[00:28:02] the users just to allow this but now I'm

[00:28:04] much more flexible because if tomorrow I

[00:28:06] want to allow I don't know like I don't

[00:28:08] know 3D models I'm not going to do it

[00:28:09] but like 3D models as attachment and

[00:28:11] they are just another attachment in the

[00:28:13] possible like architecture of

[00:28:14] attachments. So it's

[00:28:17] >> it allows me to be faster later on. So

[00:28:19] to be honest like implementing something

[00:28:22] like this adaptive playback speed is the

[00:28:24] easiest thing to do. It's it's more

[00:28:26] about noticing that the product needs

[00:28:28] this small tweak rather than the

[00:28:30] complexity of implementing it. Now does

[00:28:32] the file with the actual code look

[00:28:35] bigger? And yes, of course, but I'm not

[00:28:37] trying to optimize for like the leakest

[00:28:40] code ever. I'm trying to optimize for

[00:28:42] the most robust and proven architecture

[00:28:44] on the code side, on the technical side

[00:28:47] that allows to get a cool experience on

[00:28:49] the user front end.

[00:28:51] >> My assumption is that's probably the

[00:28:52] answer that people were wanting to hear

[00:28:54] anyway given that it's, you know,

[00:28:55] designers, people who maybe don't have

[00:28:58] this robust engineering background. And

[00:28:59] that's at least for me why I'm so

[00:29:01] inspired by what you're doing because

[00:29:03] gosh, you've been able to throw the ball

[00:29:06] incredibly far without a dedicated full

[00:29:08] stack engineer who's handwriting a bunch

[00:29:10] of code, you know. So maybe we could

[00:29:12] even tap into that perspective. You said

[00:29:14] you wrote about 5% of code, which is

[00:29:18] maybe 5% more than most designers. Given

[00:29:20] the fact that, you know, since whenever

[00:29:22] March, you've been relying on cloud code

[00:29:25] heavily, building a lot of code with AI.

[00:29:28] Are there different tactics you've

[00:29:30] adapted or things you've learned or ways

[00:29:32] that you've maybe tweaked your process?

[00:29:34] I know you mentioned the intentional

[00:29:36] like deep research to find libraries up

[00:29:39] front. Anything else that aspiring

[00:29:40] builders could learn from?

[00:29:43] >> I don't write all the code, but I'm very

[00:29:46] attentive to what Claude writes. And

[00:29:47] this is where I think, you know, having

[00:29:49] a bit of a technical background helps.

[00:29:50] Again, I'm not the best engineer in the

[00:29:53] world, but I can understand when cloud

[00:29:54] is doing its thing and writing and

[00:29:56] explaining to you like as it does when

[00:29:58] it's doing some stuff like

[00:30:01] complex implementations,

[00:30:03] edge cases like that's where I stop it

[00:30:05] and I and I'm like no, we need to

[00:30:08] architect it better. So usually if I

[00:30:09] have to start with my process from the

[00:30:10] beginning let's say that I have to

[00:30:12] implement a new feature or something a

[00:30:13] lot of the things are boring and have

[00:30:15] been sold thousands of times like I

[00:30:18] don't know authentication how teams work

[00:30:20] like how uh permissions work for

[00:30:23] something or how do you how does a

[00:30:24] sidebar you know how do you resize

[00:30:26] something these are all things that have

[00:30:28] been solved already they've been solved

[00:30:30] from a design standpoint and they've

[00:30:31] been solved from a technical standpoint

[00:30:34] like how do you architect this right so

[00:30:35] for example right now what I'm doing is

[00:30:37] I need to one of the boring things which

[00:30:40] is rearchitect all the permissions and

[00:30:41] like what users can and cannot do

[00:30:43] depending on like are they guests are

[00:30:45] they not are they admins and now I'm

[00:30:48] finding out I I sent uh cloud code on

[00:30:51] its own like research journey I I myself

[00:30:52] start to do some research and then I

[00:30:54] send Gemini which I think the Gemini

[00:30:55] deep research is very good like okay

[00:30:57] what is the best practice if I think

[00:30:59] about notion Figma they have very strong

[00:31:01] like a very advanced permissions so do

[00:31:04] everybody follows the same pattern 90%

[00:31:05] of the time yes because it's what works

[00:31:07] past and they all kind of converge to

[00:31:10] that solution like 10 years ago and

[00:31:11] there's probably some Wikipedia or some

[00:31:13] like tech blog or something that

[00:31:14] explains like hey this is the pattern

[00:31:16] that you follow you have like in this

[00:31:18] case it would be like a table where you

[00:31:20] have all your roles and all your like

[00:31:21] actions you're trying to do and you

[00:31:23] match them and you have and whenever an

[00:31:24] operation you try to do an operation you

[00:31:27] do a check with this table and so now

[00:31:28] you're like oh okay that's how the

[00:31:30] industry does it so we're going to do it

[00:31:32] as well so the next step is okay is

[00:31:34] there a library that's open source where

[00:31:36] someone has already done is for me in

[00:31:37] this case let's say that there's not

[00:31:39] okay so then we're just going to build

[00:31:41] it but now you have an understanding of

[00:31:43] how the industry does it versus hey we

[00:31:46] need proper permissions for our members

[00:31:47] and then cla is like okay I'm just

[00:31:49] trying try to do my best right it's like

[00:31:53] saying I know how to draw but I'm trying

[00:31:55] to do impressionism but then I have

[00:31:57] never seen an impressionist painting

[00:31:59] right if this is an already solved

[00:32:02] problem then just stick to what works

[00:32:04] and don't try to innovate and then just

[00:32:05] pick your bells pick this few things

[00:32:07] that are really unique to you. For

[00:32:08] example, the expandable timeline. Okay,

[00:32:10] that's something that no one else has

[00:32:11] done in this way, and that's where I'm

[00:32:12] going to spend my time and make it

[00:32:15] really mine. But do I want a super

[00:32:17] custom permissions? Like, no. I just

[00:32:19] want what people are familiar with,

[00:32:20] what's easy to build because it's not in

[00:32:22] my core proposition. I have the most

[00:32:24] advanced permissions in the world. Like

[00:32:26] 90% of the things you do are like this.

[00:32:28] They're like being solved by someone

[00:32:29] before either technically or

[00:32:32] design-wise. If I make another example,

[00:32:34] like do we want to go and build a new

[00:32:36] way of selecting and creating tags?

[00:32:39] Right. This is I I I'm I'm not ashamed

[00:32:40] to admit it. It's copied from notion

[00:32:43] because they did it so well. Like

[00:32:44] >> that's where I would look too.

[00:32:45] >> Yeah. So like, okay, you have your list

[00:32:47] and you can navigate with the keyboard

[00:32:50] and then I can start to type and if it's

[00:32:53] if I type F7, it's a filter and then or

[00:32:54] it's a create.

[00:32:54] >> Yeah,

[00:32:56] >> it's simple. It works. They've done it.

[00:32:58] People are using notion already that are

[00:32:59] probably using Flask. So why do I need

[00:33:01] to reinvent the wheel here? Unless this

[00:33:03] is my core thing that I want to do

[00:33:06] better then there's no need. So in this

[00:33:08] case I didn't copy the technical side of

[00:33:09] it. I copied the design side of it. Most

[00:33:11] of the boring technical things they are

[00:33:13] again already being solved. In some

[00:33:16] cases there there is a best practice but

[00:33:18] it's so complex that you might want to

[00:33:19] offload it to someone else and pay them.

[00:33:21] Like for example at the beginning like

[00:33:22] oh I'm just going to store and process

[00:33:24] my own videos. That's a company in

[00:33:26] itself. So especially like if I had 10

[00:33:29] 10 engineers that are expert with video

[00:33:30] processing, okay, I can do it. But at

[00:33:33] the moment I'm not. Now if you ask

[00:33:35] claude to design to build this, what it

[00:33:37] would do is, oh, let me write this from

[00:33:39] scratch. And I would say no, let's go

[00:33:43] and find some developer that has done

[00:33:44] this has been solved like thousands of

[00:33:46] times and look at that. There's some

[00:33:48] libraries that do this perfectly. So

[00:33:50] we're just going to use them and just,

[00:33:52] you know, there's a documentation.

[00:33:53] Cloud's going to read the documentation

[00:33:55] and it's going to implement it. And even

[00:33:58] in my app now, there is one function

[00:33:59] that is kind of a utility function and

[00:34:02] every piece of the app now in the future

[00:34:04] that needs a calculation of time ago

[00:34:07] between two dates or two timestamps,

[00:34:08] it's going to call that. Probably some

[00:34:09] engineers that are watching this are

[00:34:12] going to be like, yeah, duh. But

[00:34:13] [laughter] this is how you build

[00:34:15] something that is scalable and hopefully

[00:34:17] has, you know, as little bugs as

[00:34:19] possible. Uh or for example here like

[00:34:22] you see that now if you have this like

[00:34:24] if you open a folder here like you

[00:34:27] preview a flask it has this sidebar

[00:34:29] right here which tells you okay this is

[00:34:31] the asset these are the comments I can

[00:34:34] filter this looks awfully similar to

[00:34:34] >> Mhm.

[00:34:38] >> the sidebar inside an individual flask.

[00:34:40] If I open this one up would you look at

[00:34:43] that it's very similar so similar that

[00:34:45] it's literally the same component.

[00:34:46] There's some different things that

[00:34:48] happen like this component needs to be

[00:34:50] rendered in here but also in the main

[00:34:52] dashboard. So there's some magic in

[00:34:55] going on to allow that, but I made sure

[00:34:58] that it's the same component. And now I

[00:34:59] designed it in and I designed it in a

[00:35:01] way as well so that okay, the things

[00:35:02] that are here make sense both in there

[00:35:04] and in here. But now we have one

[00:35:06] centralized component that does both

[00:35:07] things. And it's not to bash on

[00:35:09] designers, but like having that

[00:35:11] technical, you know, actually I need to

[00:35:13] implement it later on makes you, you

[00:35:15] know, change your perspective. Like now

[00:35:16] you think, okay,

[00:35:19] >> I need I want to preview something here

[00:35:22] and I have a page where I have actual

[00:35:24] information and like actions about my my

[00:35:27] flask in this case. So if I didn't have

[00:35:28] to implement this, I would be like, oh,

[00:35:29] let's create a new preview thing that's

[00:35:31] perfectly optimized for this and it's

[00:35:33] going to have like 60% of that. Uh, and

[00:35:35] then another one for here. Now that I

[00:35:36] have to build it, I'm like, wait a

[00:35:38] second, can I just use the same

[00:35:40] literally the same component and maybe

[00:35:42] with some like conditionals of like

[00:35:44] different things? But turns out I think

[00:35:47] yes. So that's how it came to be and how

[00:35:48] it works like this. So

[00:35:50] >> it forces a level of system thinking

[00:35:50] almost.

[00:35:51] >> Yeah, it forces a lot of system

[00:35:53] thinking. I also think like do I really

[00:35:55] want to implement this like super

[00:35:57] perfect design that I that I created for

[00:35:59] myself that it's such a pain in the ass

[00:36:01] because it has so many edge cases but

[00:36:02] it's just to make it look a bit more

[00:36:04] beautiful. Probably not. And that's

[00:36:06] fine. Uh and that's that's what gets to

[00:36:08] the 9010 that I was talking about. Now,

[00:36:10] is it an excuse to have like a shitty

[00:36:12] working component which is the main

[00:36:13] component of your app? No. That's what

[00:36:15] people look at. That's what people, oh,

[00:36:17] this spring animation is cool. If I put

[00:36:18] a springy animation in some like

[00:36:20] godforsaken place in the UI, nobody's

[00:36:22] going to notice it. But the work here, I

[00:36:24] think it's going to pay off because it's

[00:36:25] the main piece that you're going to

[00:36:26] interact with.

[00:36:28] >> So, I couldn't help but notice you also

[00:36:30] have a little Figma file going. So, can

[00:36:32] you just talk about what are you doing

[00:36:34] in Figma versus in code? But my

[00:36:36] assumption is the bulk of it's in code,

[00:36:37] but you know there's a there's a lot of

[00:36:39] stuff in here too. So how do you think

[00:36:40] about the different tools that you reach

[00:36:41] for?

[00:36:43] >> Yeah, I use Figma so much that I'm on

[00:36:45] the free plan. Uh [laughter]

[00:36:48] um because of with my experience with

[00:36:50] Maze, I'm like when I started this, I'm

[00:36:51] like, okay, I'm just going to design it

[00:36:54] as my designer would have done in at

[00:36:56] Maze, right? So okay, let's build all

[00:36:58] the components with different states.

[00:37:01] And this has been sitting collecting

[00:37:03] dust for months because at the beginning

[00:37:05] I'm like yeah let's do all this and it

[00:37:07] is helpful at the beginning but you see

[00:37:10] that the more I go right on the file the

[00:37:12] more messy and random it gets like this

[00:37:15] is complete chaos because it's for now

[00:37:17] it's just me and maybe if some more

[00:37:19] people come along it will become more

[00:37:22] organized but Figma forb has been mostly

[00:37:25] useful in two places one place is very

[00:37:27] very high level like I need to think

[00:37:29] about how the redesign of a screen would

[00:37:31] look like. So, for example, and I do it

[00:37:34] in a very crappy way to be honest, like

[00:37:36] let's take the I don't know the

[00:37:38] dashboards here. So, okay, like let me

[00:37:41] screenshot how like Google Drive looks

[00:37:43] like or this is the old flask or this is

[00:37:45] frame.io, my competitor, this is Figma

[00:37:48] and I I got some inspiration. Uh, and

[00:37:50] then here what I would do is like this

[00:37:52] is not like a fully designed UI. This is

[00:37:55] literally screenshots. So, this is a

[00:37:57] giant screenshot of Flask at the moment.

[00:37:59] And I just blacked out the bottom like

[00:38:00] oh what would this look like if it's

[00:38:02] like a canvan board and so then I

[00:38:04] created some like quick rectangles and

[00:38:05] this is literally a screenshot I think

[00:38:08] you can see the edges a screenshot of

[00:38:09] flask at the moment because I didn't

[00:38:11] have a fully upto-date Figma file with

[00:38:13] the latest components as they were in

[00:38:15] the UI and I don't care I just like you

[00:38:17] can see that the the indicator get got

[00:38:20] cut off here because even this this is

[00:38:22] just a screenshot it's not like a real

[00:38:24] component so all I need is how would

[00:38:26] this more or less feel like if it

[00:38:29] Because a cam board will look like this.

[00:38:31] Okay, then it could be useful or not

[00:38:32] useful or it might be a good direction

[00:38:34] to go into or not. Or like yeah,

[00:38:35] vertical board view like what if we have

[00:38:37] a cam band that is vertical and it's

[00:38:39] kind of you scroll. Could it work? I

[00:38:41] don't know. Let's try and see in 5

[00:38:42] minutes how it's looking like. It

[00:38:44] doesn't need to be perfect also no. Uh

[00:38:46] or like here, okay, like this is the new

[00:38:48] this a bit more refined. But again, you

[00:38:50] see that the flask don't don't look

[00:38:52] anywhere close to the final ones. But I

[00:38:53] don't care. It's more like give me the

[00:38:56] the gist of like as a structure. Does

[00:38:57] this make sense? So this is one way I

[00:38:59] use it. Like super high level, very

[00:39:00] rough like

[00:39:03] >> sketching almost like you're just like

[00:39:06] high level IIA kind of stuff.

[00:39:08] >> I think this is basically wireframing

[00:39:10] just with a bit more styling because

[00:39:12] otherwise I don't like it's it's too

[00:39:13] wireframed.

[00:39:14] >> Yeah.

[00:39:15] >> So that's that's kind of how I think

[00:39:17] about it or like to take some random

[00:39:19] notes. For example, here I was trying to

[00:39:22] be to create a component, the component

[00:39:24] for the recordings, which is what we saw

[00:39:27] in this component right here, which is

[00:39:29] the component that we have for all the

[00:39:31] recordings in Flask, which is the like

[00:39:33] you have it here, but you have it also

[00:39:35] for audio recordings as well. And again,

[00:39:38] if you were a designer on your own and

[00:39:39] someone else has a build, it's like, oh,

[00:39:41] let's create the perfect video recording

[00:39:43] component and the perfect audio

[00:39:44] recording component. I'm like, "No,

[00:39:46] because I know how the back end works

[00:39:48] and like I architect it in such a way so

[00:39:50] that they are basically the same thing.

[00:39:52] It just one has video and one doesn't. I

[00:39:55] want one component that can work in a

[00:39:57] decent way with both some like a

[00:39:59] waveform to be displayed. It makes sense

[00:40:02] and a 16x9 video preview to be

[00:40:04] displayed. So, I was just like trying

[00:40:07] out with different like layouts and how

[00:40:09] this could be, you know, working. And

[00:40:11] this is not like pixel perfect to the

[00:40:13] final one, but I don't care. It's more

[00:40:14] like, okay, how do I lay them out so

[00:40:16] that the information kind of makes

[00:40:18] sense? And on the other end of the

[00:40:20] spectrum of how I use Figma for for

[00:40:22] this, I actually need some very detailed

[00:40:24] things to try out. Like I don't know,

[00:40:27] for example, this this is literally the

[00:40:29] playar the playar for Flask. So you see

[00:40:32] that this is kind of my I decided, oh,

[00:40:33] this is a cool color gradient, so I'm

[00:40:35] just going to use it as my kind of

[00:40:38] signature playar effect, right? I just

[00:40:40] needed an asset and I just, you know,

[00:40:41] designed the asset in Figma. And then

[00:40:44] these are my colors that I also use for

[00:40:46] my my like main CTA and stuff and that's

[00:40:49] how I got it. Uh or like I don't know at

[00:40:51] some points there was some gradienting

[00:40:52] that I needed. So I just create this

[00:40:55] gradients uh with some yeah I don't even

[00:40:57] know what's in here like some layer

[00:41:00] blurs and stuff and I just you know I

[00:41:02] use Figma to to create that asset or for

[00:41:04] example here are the actual product hunt

[00:41:06] images that I used when launching in

[00:41:08] product hunt. like you need some images,

[00:41:10] I just create them in Figma and I I like

[00:41:12] to use that or now I'm toying with the

[00:41:14] idea of changing the logo to like

[00:41:16] character so that the character can have

[00:41:18] like different states based on oh things

[00:41:20] are saved up or uploading or they're

[00:41:22] recording and so I mean I'm not the best

[00:41:24] like character designer but it's more

[00:41:26] like would this make even like I'm

[00:41:28] probably going to get this redesigned by

[00:41:29] someone that's actually you know able to

[00:41:31] do this properly but it's more to get a

[00:41:34] sense of okay like would this look

[00:41:36] decent and just like experimenting with

[00:41:38] these is like super small details. So

[00:41:40] let's say that I want to implement this.

[00:41:43] Now I have some SVGs that I can use or I

[00:41:45] I don't know possibly can animate uh for

[00:41:47] this. So that's how I use Figma or like

[00:41:49] here again this is another example of

[00:41:52] some wireframing of how the landing page

[00:41:55] would potentially be looking like. It's

[00:41:57] just a bunch of random stuff like

[00:41:58] whenever I feel the need to just open

[00:42:00] Figma here for example there was some

[00:42:02] exploration on how this component would

[00:42:05] look like. So, we need to record camera,

[00:42:07] we need to record mic, we need to record

[00:42:10] video. We have some options like how

[00:42:11] does this work? Like when it's

[00:42:13] recording, how does this look like? It's

[00:42:16] like a 16x9. Uh when it's just text, how

[00:42:17] does this look like? And okay, default

[00:42:19] focus recording.

[00:42:21] >> I get the spectrum now where it's like

[00:42:23] things kind of almost feel like

[00:42:25] granular, more graphic design all the

[00:42:29] way to very highle strategic. Let's just

[00:42:30] kind of make sure this general direction

[00:42:32] feels right. And then it sounds like

[00:42:34] basically everything in between you're

[00:42:36] just working with cloud code.

[00:42:38] >> Yeah. I mean if there was a way for this

[00:42:41] to be perfectly synchronized with what's

[00:42:43] on the on the actual product, of course

[00:42:45] it would be great. But

[00:42:45] >> yeah,

[00:42:48] >> for me it's not that important. Like a

[00:42:49] lot of the times I just create something

[00:42:51] quickly in Figma to just take a

[00:42:53] screenshot and show it to Claude and be

[00:42:54] like, hey, this is the structure that we

[00:42:55] need. This is the layout that we need.

[00:42:58] For this stage, I think it works well

[00:42:59] this way. Once you start to get more

[00:43:01] established and like you have a proper,

[00:43:04] you know, like design system that's like

[00:43:06] I think it makes more sense to to

[00:43:08] organize it. But for this stage,

[00:43:10] anything more than this to me would feel

[00:43:11] like I'm wasting time.

[00:43:12] >> Before I let you go, I kind of want to

[00:43:15] tap into your perspective as someone who

[00:43:17] one was at Maze also had more of the

[00:43:20] product background and hear a little bit

[00:43:22] about how you've approached user

[00:43:24] research feedback. I would imagine

[00:43:26] you're at the point now you got enough

[00:43:28] users where it's probably mostly

[00:43:30] inbound, but maybe we could go back in

[00:43:32] time a little bit before you had

[00:43:35] launched. What were you doing to learn

[00:43:38] in those early days? How did you

[00:43:40] structure different research interviews

[00:43:42] any tactics that we could pull from in

[00:43:44] that bucket? The main challenge of

[00:43:46] course is finding users from your target

[00:43:48] audience and on this that's why like

[00:43:50] building for yourself for is very

[00:43:53] helpful because I mean I am a I'm a

[00:43:55] YouTube creator so I just you know

[00:43:56] called up a bunch of my friends that are

[00:43:58] also YouTube creators like hey I'm

[00:43:59] building something do you want to get it

[00:44:02] on a call before I launched anything

[00:44:04] before I had anything it was most mostly

[00:44:06] on understanding okay is is there a

[00:44:08] problem here to solve and if you if you

[00:44:12] really want to get the 9010 of uh user

[00:44:15] research Go read the mom test like all

[00:44:17] all the basics are in there. Just don't

[00:44:19] try to lead your users. Just lead by

[00:44:21] instead of saying what are the main

[00:44:23] problems that you're facing. Just try to

[00:44:25] ask describe to me a normal workflow for

[00:44:27] you. Like if you're doing videos, okay,

[00:44:28] just describe me the the the video

[00:44:30] process or start to finish

[00:44:32] >> and they are going to then tell you oh

[00:44:34] actually here now that it comes to mind

[00:44:35] there's some like problems or like some

[00:44:37] weird workflow that I have to do to do X

[00:44:39] Y and Z. I would just you know take the

[00:44:41] interviews just take some random notes

[00:44:43] and just you know all the interviews

[00:44:45] were me like I was running them so I

[00:44:47] just could find easily patterns just

[00:44:49] write down okay like this is the general

[00:44:51] behavior of people this is how they feel

[00:44:54] about frame.io or some other current

[00:44:55] product that they are using for

[00:44:58] collaborating on video. I would say that

[00:45:00] it gets easier but also harder once you

[00:45:02] build the product because now you have

[00:45:04] something to show them and they can use

[00:45:07] it. It's a it's a lot about again trying

[00:45:10] to remove the suggestions that they give

[00:45:12] you like hey I would want this feature

[00:45:13] or like this should work in this way

[00:45:15] like this is the stuff that you as a

[00:45:17] builder have to think about. What you

[00:45:20] really have to ask is why would you want

[00:45:22] that? like what what is the end goal

[00:45:23] that you're trying to get from like

[00:45:25] having I don't know maybe they say they

[00:45:28] want an API that there are people here

[00:45:31] that want flask API okay cool I noted

[00:45:34] that but why do you want that like what

[00:45:35] is the thing you're trying to do here

[00:45:37] and then you find out that they're like

[00:45:38] oh actually I want to have like

[00:45:40] connected to notion and blah blah blah

[00:45:43] because I just want a place to see all

[00:45:46] the latest comments from all my videos

[00:45:47] that I'm working on because I'm a I

[00:45:50] don't know supervisor cool so then what

[00:45:53] you need to build is not an API but a

[00:45:55] feed of all the most recent comments

[00:45:56] from the entire workspace. Sometimes you

[00:45:58] need to just build what people tell you.

[00:45:59] Like I've been resistant to the idea of

[00:46:01] having a sidebar of comments for so long

[00:46:02] and then people have been telling me it

[00:46:04] to me for so long and I'm like okay fine

[00:46:06] let's build it. And now I actually see

[00:46:07] myself that it was a good idea and I

[00:46:10] actually use it myself. But it's about

[00:46:12] deeply hearing what they are like what

[00:46:15] their core problem is and not listen to

[00:46:16] the solution that they are trying to

[00:46:18] give you just because you know like

[00:46:19] they're doing their best like they just

[00:46:22] a user and it would be like me trying to

[00:46:24] tell you know a pro race car driver like

[00:46:26] how to turn better on a corner the

[00:46:28] problem to solve is just like let's not

[00:46:29] crash. [laughter]

[00:46:32] So, and also your early interviewees can

[00:46:34] become great evangelists for whatever

[00:46:36] you're building later on. Like I got to

[00:46:38] meet so many cool people from those

[00:46:40] early interviews and they are still like

[00:46:42] actively excited about the product and

[00:46:44] sharing it. So you can cultivate those

[00:46:46] relationships and right now I'm trying

[00:46:49] to do like I'm at a later stage but I'm

[00:46:50] trying to do this in a different way

[00:46:52] where now I'm trying to on board some

[00:46:54] like larger teams and I might not be

[00:46:56] meeting all the features that they need

[00:46:58] or like so so now it's more about okay

[00:47:00] right now I don't have what you're

[00:47:01] looking for in terms of all the features

[00:47:03] but I'm expanding the product and

[00:47:06] building it so just jump on board as a

[00:47:08] customer and then you're going to be the

[00:47:10] partner that we'll build this together

[00:47:11] with. So, they're going to be the ones

[00:47:13] that are really wanted to to tell you

[00:47:15] like, hey, you should build this, you

[00:47:17] should build that. Uh, and then you have

[00:47:18] the job of taking that information,

[00:47:20] extracting what you what you should

[00:47:22] actually build. Sometimes it's the thing

[00:47:24] you they tell you to build. Sometimes

[00:47:25] it's something different that solves the

[00:47:27] problem that they have.

[00:47:29] >> Well, let me go. I'm quite inspired by

[00:47:31] your journey and how much you've been

[00:47:32] able to do by yourself. And wearing

[00:47:34] every single possible hat from

[00:47:37] storytelling to design to building and

[00:47:40] product strategy. I think in many ways

[00:47:41] you're creating the blueprint that I

[00:47:43] hope a lot of people watching the show

[00:47:45] follow. So I appreciate you coming on

[00:47:46] today and pulling back the curtain,

[00:47:47] showing how it works.

[00:47:49] >> Thank you. It's been great and uh yeah,

[00:47:50] big fan of the show. So it's great to be

[00:47:51] here. [music]

[00:47:53] >> Before I let you go, I want to take just

[00:47:55] one minute to run you through my

[00:47:57] favorite products because I'm constantly

[00:48:00] asked what's [music] in my stack. Framer

[00:48:03] is how I build websites. Genway is how I

[00:48:05] do research. Granola is how I take notes

[00:48:07] [music] during crit. Jitter is how I

[00:48:10] animate my designs. Lovable is how I

[00:48:13] build my ideas in code. Mobin is how I

[00:48:16] find design inspiration. Paper is how I

[00:48:19] design like a creative. And Raycast

[00:48:21] [music] is my shortcut every step of the

[00:48:23] way. Now, I've hand selected these

[00:48:25] companies so that I can do these

[00:48:28] episodes full-time. So, by far the

[00:48:30] number one way to support the show is to

[00:48:32] check them out. You can find the full
