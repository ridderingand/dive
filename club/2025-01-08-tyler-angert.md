---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: 16FRNUxDXVA
slug: 2025-01-08-tyler-angert
source_type: descript
source: https://web.descript.com/791488df-41e4-4022-a2d3-cc1fdc8f19ce/3e39f
guest: Tyler Angert
host: Ridd
title: "The rise of spontaneous software"
published: 2025-01-08
duration_min: 49
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] **Tyler:** this is 


## [00:00:00] Landing the role at Replit

[00:00:01] **Tyler:** So this was 2019. I was in grad school doing, learning sciences. Making all kinds of prototypes for different learning tools, creative tools in general.

I was getting taken down this rabbit hole of early educational technology. Like, I was doing a internship, a research internship at the MIT media lab where I was working on, , scratch at the time, which is a kid's programming language.

I was just doing a very wide cast of Creative tools, learning tools. and particularly I was looking at companies, , where I was a user of their product. I applied to notion, Figma, , runway ML, I was just looking for honestly, any place that would take like a weird. Like hybrid, design engineering combo thing. 

And one day I just saw this, , position open called coding interface designer. ,

And I saw it and I read the description. I was like, oh, shit, this is exactly what I need. , and then like, I think a day or two later I got an email back from Amjad saying Hey, we should talk. And, yeah, the rest is history. , I was number 7. including the founder. So there were like seven people on the team total. 

The number one lesson I learned in general is this ability to [00:01:00] just. Jump from topic to topic and like be frenetic and, be manic basically, about different sets of ideas and like, see all these connections.

It's the mental equivalent of a flamethrower. it's just out there. And you kind of have like general sense of like, you can hold the flame thrower in your hand and you can direct it, you know, but you don't necessarily know what you're going to light on fire.

, and it's like your responsibility to like, learn how to turn that flame thrower into a really powerful laser beam. And be like, okay, I'm going to do exactly this and you can, widen or narrow the aperture.

And I think I've done a good job of that over the years. 


## [00:01:32] Early design challenges at Replit

[00:01:32] **Ridd:** What were some of the first things that you were pointing the laser beam, or maybe the flamethrower at that time at, when you were designing at Replica, like talk to us about some of those early challenges, even just to give people a sense of what it's like designing a product like that. 

[00:01:45] **Tyler:** So one of my first ones was redesigning our get integration. , I worked with a very good friend of mine now, still, , Jeremy . I wasn't doing all the front end code, Jeremy was doing most of the engineering on that, but I was fully expected to just if I could implement something, I would go do it and I would [00:02:00] ship it. and my shipping velocity of code basically only slowed down maybe two years into working there, like once we our next designer.

But then my next big project after that actually was, redesigning and implementing all of our, marketing pages. and I actually worked with a close friend of mine as a contractor to do the, basic, visual design and site architecture for that. But I kind of led the visual design language for it. Like I designed all the icons. I built all the pages. I built this, very lightweight CMS also, there was like, hosted on replica every time we wanted to make a change to the content, or if there was a typo, we wouldn't have to redeploy the whole app.

[00:02:36] **Ridd:** It's like truly my dream role. Like I joined Maven as employee six and the first designer. The expectation was just like, Hey, as much as you want to code, as much as you want to contribute, go for it. And I just loved it. And kind of similar to you, like over time that started to diminish and I started shifting into more of like a traditional designer role, but man, being early and expected to contribute to both the code [00:03:00] and the design of things.

It's just so much fun. 

[00:03:02] **Tyler:** also, this is telling on myself a bit. When I got the job, , I don't even think they knew this at the time, but it was the first time I had, actually used GitHub like, I had my projects hosted on GitHub, but, PR before. , so I was clicking around just being like, what does this mean?

What does that mean? I honestly had no idea what I was doing. And I was trying to pull together and just fake it till I made it. Honestly, part of the benefit of being, , at the time I was a naive 23 year old. I was just like, Oh, this is just what you do.

you just do everything because there's nobody else here. this thing has to ship. And I just got this job, so obviously I'm going to do everything. 

[00:03:35] **Ridd:** I want to learn a little bit more about just the story. I mean, replit to me is like one of the most fascinating companies right now. I was telling you before this, I've been listening to podcasts with Amjad actually just to hear more of the story, but I want to get your perspective.

So what were like some of those next couple of milestones for you after you got your feet under you on a little bit, 

[00:03:51] **Tyler:** I really wanted to work on just a big feature. Like a net new feature that was like part of a big launch. And at the [00:04:00] time It wasn't clear, what the next big milestone for replica even was, 

there was an education product, which was design for schools, for students in classes, like high school and college to, write and evaluate code and teachers can make assignments. And there was like a student management part of it. 

[00:04:15] **Ridd:** was my first experience with replit actually was going through a coding bootcamp. And that was like what we had to use and where all of our assignments were.

[00:04:21] **Tyler:** really? Wow. , okay. So , very OG. , but there was a tension, right? Because it's like for a small team like that to maintain basically two products, surface areas with presumably two different markets, it was Clearly something has to change here, right? So, part of the discussion about the next big launch or the product was, intertwined with the discussion of.

How are we going to kill one of these things or at least combine them in some way? Because we knew that selling to schools sucks and I was always a proponent of just building really strong general purpose tools that could be sold to schools, but it wasn't made for them. My argument was basically always apple doesn't make macOS for education, they make macOS.

[00:05:00] And then schools, by the computers. And, you know, , there's like an application layer where people buy education, specific software and stuff. I very much had this vision of Repl. it becoming like an OS, uh,

and I was like, look, if we. Make the platform more generic and have like, you know, apps and like, you know, a mini app store, , inside of replic than like, we could sell education apps as a bundle to schools instead of building a completely separate product for them. , so that was kind of a lead up into this major project called, Repl.

it apps, the idea was just to have this gallery of, things made on repl. it that people could just easily fork and use but , the long term goal there was you have this gallery and people could, like, install apps, you know, effectively as, embedded iFrames inside of the Repl.

it IDE, and, it could interact with the data inside of, like, your projects, , effectively. , the other main thing, by the way, which I forgot to mention, was There used to be Repl. it community, it was called Repl. talk, it was just like a forum, built directly into Repl.

it, So there was also this tension between like, what do we do with talk, like, we're, spending a lot of time on moderation, and most of the time [00:06:00] people just share links to their projects that they made directly, so why not, cut the ability to make text posts and ask questions and just have people share, their, , projects and apps directly.

We were trying to go through this transition where we had to be very disciplined about , the simplicity of the sharing experience and like what the purity of the platform to some degree. Does it, does that make sense?

[00:06:21] **Ridd:** Totally you have to maintain the simplicity, but something that is clear to me listening to your talk is that there are a lot of exploration still going on. Like you're very much so trying to figure out what Repl. it even is in the early days, as I'm sure it's growing pretty quickly too. 

[00:06:36] **Tyler:** Yeah, definitely. My longterm bet, which I still think is true for what it's worth is you build this platform for creating software. you end up posting all the software. I might get heat for saying like, you create an operating system.

What I'll put operating system in air quotes, because , whatever, all the nerds will freak out and be like, Oh, it's not an operating system. It's just web apps. But like, you have this platform where people can, build like suites of tools that they use every day. And it's like, to [00:07:00] most people, that's the perception of what, what an OS is.

It's like all the apps that they use, like on a screen. so I was like, okay, you help people code. You make it easier and easier and easier. People build their own tools and then eventually you get into hardware I even have a mock somewhere on Twitter.

I posted of a phone with like a replica, like loading screen on it. yeah. And some, some vision of this has already been partially accomplished with the mobile app. I think that's going to be a big part of it. Yeah, I think everybody was, pretty on board with this, 10 year, 20 year vision of, Repl.

it will make computers at some point, and I remember very early on, actually, Amjad would always say things oh, you know, Repl. it should be ubiquitous and everywhere, I want Repl. it running on my fridge. have a smart fridge, right? Repl. it should be running on it. Or like, you know, let's just pre install a Repl.

it binary onto cheap Raspberry Pis and just like drop Repl. it via parachute, like all over the world and like have it run. But of course, as you hire more people and like there's financial expectations for people to pay for shit.

You can't be so big brain and you have to find a realistic, ladder up to this, this [00:08:00] grand thing. 


## [00:08:00] How to succeed at a hypergrowth startup

[00:08:00] **Ridd:** What do you think it takes to succeed as a designer who's really early at one of these companies that is scaling and where there's just this myriad of ideas, like pre installed raspberry pies falling from the sky. 

[00:08:13] **Tyler:** Just having patience when things are like relatively unclear also be being willing to throw things out when they're not working is very important to, not having too much personal attachment to things. So like you don't get upset when people criticize it, but also having enough personal attachment to care 

and also just being willing to like pick things up they hired you cause you're smart, right. And you have skills, so be smart and learn new things. You know, nobody hires a 23 year old because they're like some like design savant, you know, There's a million more people who are more experienced than you you're not there because you have like reached the peak of your craft or something. 


## [00:08:46] How Tyler grew at Replit

[00:08:46] **Ridd:** Given the fact that Repl. it took a pretty big bet on you as this naive 23 year old, when you look back on your journey, what are some of the clear growth areas where you can see this before and after, 

[00:08:58] **Tyler:** Probably the biggest one, [00:09:00] actually, is this, , we did a big redesign of, , the workspace , we finally added, like, tab and window management. And it was a huge, technical and design challenge because , every time you created a new, , REPL, your code editor would be on the left side of the screen. And then the right side of the screen was split, , . You had this, predefined layout for like how certain projects look, but, , when people had different kinds of projects, they were like, Oh, I don't need.

This over here, I just want to focus on the console output. I'm making like a CLI application or a basic chat bot. I don't need all of this cruft. Right. point is that there was this big, , What do we let the user do versus like, what do we predefine? What are like good defaults to begin with? , how do we make the behavior of the workspace, , more predictable? There was this long rabbit hole of, kind of implicit design decisions that were made purely because we kind of just kept adding future after future, after future.

And then combined, we were also about to start planning, making the mobile app, And we were going to do it, , in react native, or at least some like combination of react native swift and Android. , but the majority of the code we [00:10:00] want to be shared, ? So we had this big.

Technical and design challenge where we needed to make the workspace configurable. We also wanted to use the same system as the basis of the mobile app. And then there were questions about how does the layout from your desktop transfer to the phone? Are they completely separate?

Can we follow a model similar to you know, , your browser open on desktop and your browser open on on mobile and sync the tabs or something there's this very, very long list of questions. And, through all this, it was just like, this huge hairball of , sequencing and scope questions and, this is also when we started hiring our first PMs. , I was, the lead designer on a lot of this work, and I was, , really struggling to work with PMs because they totally did not see the picture about, why it was, such a hard problem to,

[00:10:45] **Ridd:** of context to share it too. 

[00:10:47] **Tyler:** yeah, and they were, like, trying to, , figure out how to scope it and when somebody is hired who doesn't necessarily use the product themselves that much, like I did, I was using replica all the time, even for my own side projects. And that's how I would learn [00:11:00] more about, , what we needed because I was just a power user

and, I basically just disagreed with like PMs are telling me. Cause I'm like, this doesn't make any sense. Like, why would I ship this without that? 

when you're designing complex systems, you know, a tab or window management thing, you can't necessarily pick apart like a single component of it.

And ship just that right. Sometimes you need the whole system shipped out once in order for it to make sense. , I specifically pitched working on a part of this early project for three months where nothing would get shipped, I was pitching a anti shipping project.

I was like, I need time to just go deep and test a ton internally. we don't need to ship this because like, I know what I want. I'm a power user. And like, this is a power user thing. Let me go insane on this for a little bit. And then we can figure out. 

[00:11:42] **Ridd:** What did it take to get people behind that investment?

[00:11:44] **Tyler:** I think people just trusted me at the time. because before that I had basically spent two years, just working on things and shipping them as quickly as possible. or at least every project before that had already shipped. And I was like, just give me some time to , really break this down.

I think partially, people were [00:12:00] open to it because this. tab window management thing had like been attempted multiple times before and had never worked because people always said that it was breaking and it wasn't, like up to par, so I honestly just said like, Hey, , this needs time and attention. And like, if I have the pressure where I need to ship it, I'm not actually going to see like all of the possibilities. And I think people just trusted me. 


## [00:12:21] Tyler's advice to his 23 year old self

[00:12:21] **Ridd:** I want to ask one more kind of high level reflection question about Repl. it before we talk about what you're focusing on now. If knowing what, you know, now you could go back and give your naive 23 year old self a piece of advice to better equip you for the journey that you were about to go on. What do you think you would say to that version of yourself?

[00:12:38] **Tyler:** Ooh, , damn, that's a really good question. 

, at a very concrete level, I wish I had spent a little bit more time honestly doing like infrastructure work, , Like I was never on call, for example, .

Not that I wanted to be like, , nobody wants to be woken up at 3am

[00:12:51] **Ridd:** Didn't see that answer coming. , 

[00:12:52] **Tyler:** but you know, as a founder now where I'm doing all the engineering work, I have to do now what I probably would have been [00:13:00] exposed to very early on if I was in a more engineering heavy, heavy role.

so I think a more general way of putting this is I wish I sought like more explicit advice and mentorship from my engineering colleagues where it was a lot more implicit where, like, I'd write code and get reviewed, blah, blah, blah. But, in my head, I was just doing design work. really looking at the engineering work as, like, a part of the whole thing.

And like seeing that as something that I should work on more directly. , I think that's, that's what I would tell myself just like, seek really hard, like technical mentorship. 




## [00:13:29] Why Tyler started a new AI company

[00:13:29] **Ridd:** All right. So let's zoom ahead to this next chapter because you somewhat recently announced Patina 

[00:13:36] **Tyler:** Mm 

[00:13:37] **Ridd:** new company on Twitter. And I saw it kind of been following along since I want to know where the seed of that idea started. Like, what did it take for you to get to the point where you're like, you know what, I'm ready to start my own thing. 

[00:13:50] **Tyler:** If you like go back through my Twitter, , like all throughout my tenure at Repl. it, I was Building stuff on there and shipping it and they weren't all business related, but I was just kind of always thinking about things that [00:14:00] I could work on at some point.

, and I remember actually, there was this project I did, in the middle of Repl. it called Freeze Frame. This idea where you could kind of take like living screenshots of your desktop you would hit like command shift two and And, , it would basically save, all the positions of, like, the apps that you have open and, like, the exact state that the apps are in, like, what document you have open, what message you're open to, what note, all of your tabs, et cetera.

it ended up failing because, you just couldn't reliably, reopen. To the exact state that you needed. It's a startup for another time when, you know, there are new operating systems that are less restrictive, but, when I was working on that, I actually asked Amjad, about what he thought about me leaving at some point and like advice on like founding stuff.

And he told me straight up, he's I think you're effectively not ready and you should stay here for, another 2 years and hone your skills he was totally right in hindsight, and I ended up just getting, a lot better over those next, , 2 years. And, towards the end of, my time at replit. I wasn't looking to leave immediately when, I became fully vested. , but when you're not, when there's [00:15:00] zero financial incentive anymore, you get to be very honest with yourself about, like, what you like and what you want , and whatnot.

So, leaving honestly was much more about, I need to take a break and there are clearly, like, a million ideas that, , I want to explore. and I had enough saved up that I could take, you know, a decent amount of time off, without worrying about it. 

So I was like, Fuck it. It's now or never, , I ended up leaving in January of this year, 2024. The initial plan was like, just take a year. And if I don't start something, that's cool. The main goal is just exploring things. And if I happen to get excited about an idea that can end up being a company, then go and pursue that.

I think like a week after I quit, I ended up, incorporating a LLC called very nice tools. And , my whole thesis behind it was I'm going to make really nice, core utility software that is super uncomplicated. I was like, Oh, There's like this just suite of random shit that people use on the internet that like, I could easily just like build better versions of. There's not going to be any complicated business model.

People pay for it because they like it. [00:16:00] And they're going to give me money because it's a good tool. And like, that was the whole, like very nice tools argument. but I was kind of just like hacking on things like here and there and trying to figure out exactly what kind of thing I wanted to make.


## [00:16:10] Picking the right problem to solve

[00:16:10] **Tyler:** At first I was also dead set on bootstrapping, by the way, completely like avoiding any VC, I think at some point I realized, I didn't know if I wanted to do something small and sustainable and bootstrapped because I was actually interested in that, or because I was afraid about doing something bigger.

And I came to this realization that there are some ideas that just require capital upfront. I am not an exited founder. I don't have just money sitting around to like blow on my own ideas. so if I'm not going to raise capital, then by definition, I need to fund myself. Number one. And then number two, I need to do something small and scoped enough that, , I can start making money on it relatively immediately, and that became really unattractive to me I kept going towards like ideas that were a little bit bigger and more abstract. And I also realized that my bottleneck was not like good ideas. I went through my notes over like five or six months. I collected all of my like [00:17:00] major ideas I was looking at this list and it's 30 years worth of startups. I could work on this forever. So clearly the bottleneck is not ideas.

The bottleneck is like courage and conviction and, going for it and being honest with yourself about the resources that you need to do it. Well, I tried to boil down the ideas that I was most excited about and. One of the ideas that I kept returning to was, being able to build mobile apps on mobile. And a lot of this, like that kind of interest, I'm not the first person to think of that by any means, but there's a lot of ways to interpret how that might be implemented. And, I think some of the motivation came from first principles in the sense where it's I have this device, And there's software on it.

There's apps. How can I need to use another device in order to, like, put things onto it? Like, shouldn't it be kind of like a self contained thing where I can just, like, make stuff And then secondly, I also had this tweet go viral about this where, um, I was explaining how my, my grandma doesn't know how to use iMessage.

I'll FaceTime her occasionally and I'm like, did you see the pictures I sent? And she's like, no. all she knows how to do is FaceTime me and she does it like through [00:18:00] her Apple Watch. And she just like tells it via voice like, okay, I could make a small messaging app for her. what she needs effectively is like a Tyler app where it's just like my face. And she clicks on it and there's like one button to FaceTime me and then there's like a stream of images that like just come in, she just wants to see like updates from my life. So I just need to send her things and she needs a button to call me. you know, I can build that kind of thing in like a day or whatever, even like an hour. , but you know, I can't just send her that app. Right. , I either have to publish it to the app store.

Right. And then have this like publicly available app where it's like made for my grandma to call me. In that case, like I would likely need to add some kind of But then now this app that's made for just me and my grandma, like she has to log into like, that's stupid. And then if I want to avoid the app store publishing thing, then I need to publish it to the web, in which case, I need to make this web app I need to obfuscate the URL so that like, it's not easy to find or like also add some kind of auth and then she needs to remember to like go into Safari in order to use it.

I have to instruct her like over the phone, like, Oh, here's how you like add it to the home screen. [00:19:00] And then like this whole,

[00:19:01] **Ridd:** is going to work.

[00:19:02] **Tyler:** yeah, like ridiculous. And I remember when I posted this, people in the comments were like, why don't you just send her a test flight? I just explained how she doesn't know how to read her messages. And you're telling me that she's somehow going to understand how to like open a test flight link. That was my realization where I was like, there's this ridiculous. Ecosystem issue where, you can't publish native software, , very easily and, distributing it is a nightmare and like people, want like small personal tools like this.

, but the hoops that you have to jump through in order to get there is like very, very high. So something needs to change. I also realized that Most people are not walking around thinking about like random bits of software that they need, like I was looking at my own screen time and it's like photos, messages, maps, Instagram, Twitter, follows a pretty clear power law distribution of like time spent.

More often than not, what people need is not like completely new, like bespoke software off the cuff, which is very much the zeitgeist right now around generative software. Like, Oh, you just prompt, you need it. Like you need it for two minutes. It's like done. And [00:20:00] it's gone. Like after you use it, like a disposable plate, like that's much less interesting to me.

Actually. I'm much more interested in like speed of execution, but actually more like permanent. Tools that you can use, more regularly and like grow over time. Which is part of the name of patina is you use things over time and it develops a nice sheen, a nice like look of age over it.

What people are good at is critiquing the apps that they currently use that they don't like. suggesting features that they want or features that they don't need or are cruft. Right. And they're like, I wish I had the photos out, but it was like, just my favorites.

Right. Or like, there's just like a favorites tab and like a reasons tab or something like that. Of course that's not everybody, but , the insight that I had was why don't you just build utility tools that people use every day. But. In a way where they can be easily modified or forked or, or, you know, customized to some degree.

So that was part of the realization. The other main thing I realized is that even if you, couldn't magically snap your fingers and suddenly Apple was like, actually, you don't need to publish to the app store at all.

You just send people apps over iMessage, right. And you can install them [00:21:00] onto your phone. You're still left with the problem of like, okay, well, how do people make things? even if you solve all the distribution issues, the authoring experience is still An enormous, if not bigger challenge. , so realizing that plus like realizing that most people are not walking around, like thinking of random apps that they need made me realize 


## [00:21:16] Tyler's vision for spontaneous software

[00:21:16] **Tyler:** People just need good starting points, great defaults, and then to, to use that as a springboard and like go off from there to make whatever software that they need, which ended up leading me into this thesis of patina and this is the first time that I'm probably saying this publicly besides on my deliberately vague website is, , building core utilities like the phone maps.

Messages, but designed to be extended, from the ground up. 

[00:21:39] **Ridd:** Okay. So much to unpack there. 

Most of the conversation that I've even had on this show is truly generative software that is very disposable, but this is a unique take to have something that is not necessarily designed to be thrown away.

It's just my use case looks a little bit different than [00:22:00] your use case. And is that, that's kind of what you're getting at with this idea of spontaneous software, which is like the main thing that I saw on the website.

[00:22:06] **Tyler:** Yeah, exactly. , also shout out, , bad role. Uh, one of my investors who came up with spontaneous. that was

[00:22:12] **Ridd:** Alliteration always wins. 

[00:22:14] **Tyler:** yes. , but yeah, spontaneous is a great summary of it because like spontaneous doesn't necessarily mean throw it away. It just means fast and like in the moment and like right when you have the idea, which is related to what I'm thinking about around casual software creation and you know, lowercase P projects versus uppercase P projects.

And it's spontaneous software is about like the, the, the speed and like the, the lack of preparation that you can go into, like making something with rather than

how long the thing lasts, you know? You know, when you move into a new apartment or a house, like you kind of slowly decorate it.

you make it feel like your own over time. And you walk into somebody's apartment and you can clearly see, we're like your studio, right? Like you have plants in there clearly. You like greenery. and I like your, your purple lighting, you know, there's something , about that.

that's unique to you. but I could be out shopping and I'll [00:23:00] spontaneously make a decision To go buy a new lamp, you know, or like a new book, they'll look great on my coffee table the decision to a door in my apartment in a certain way is not related to how long that adornment actually lasts, you know, so it's a quick decision, but it lasts a long time. 

[00:23:16] **Ridd:** So how do you go from these overarching ideas about what should exist in the world, these connected problems that you've been able to tie together, this vision for spontaneous software. What is the entry point? Like, talk to me about how you thought about what the heck to build first.

[00:23:32] **Tyler:** Partially I tried to not overthink it, honestly. , I think at first I was like, , I know I'm gonna work on like core utilities, right, that can be extended. What are the core utilities, right, that you use all the time? I'm like, I use my camera. I use my photos. I use messages and maps.

Honestly, I was just trying to look at, like, what I had the most gripes with and, like, the most ideas for, and, camera and photos were up there. , in fact, one of the, like, earliest pictures I had that I raised money on was a programmable [00:24:00] camera. I had this design prompt where I was like, you know, when you scroll through, um, like, all the modes on the iPhone where it's like photo, video,

how come you can't just add a new one and write a prompt in and it does something, you know, like whether, whether it's like a filter or like, you know, extract this data or, or whatever.

, and I do have prototypes of that, but I ended up moving over to photos mainly because. I just have a lot of complaints here, right? I could make something better if I wanted to. , so I should probably start there, but over time, I actually gained more conviction on it because I was like, if you're going to do something interesting here more than just like a redesign, but like, you know, incorporating some sort of generative software component into your photos, if you want to do anything interesting with ML models, or like, you know, train custom models or like get insight on like a lot of data.

The only source of data that you have access to, um, as a third party developer, has a lot of data in it. , Is the camera roll , you can make an iOS app, get permission to the camera and then like, boom, I have like 64, 000 photos in there from like, back to 2016, a lot of people have tens of [00:25:00] thousands of photos, in their library, and besides that, like, you can access your calendar.

Natively, you can't access messages. You can't access notes, at least not very easily. but the camera rolls , it's like the neighborhood, watering hole, you know, of data in your phone, where it's like, you're taking pictures of things. You like, you're taking screenshots of messages or things that are important to you.

There's, you know, years and years of context of your life. That's, that's just sitting in the photo roll. and if you try to think about, like, what will the next big consumer AI app be? And like, what will it take advantage of? You can almost derive that it has to be a photos app from first principles, because fact one, models need a lot of data to do something interesting with, assuming you're training models or like you're doing some kind of indexing. And then fact two is the only source of a lot of data you have access to is the, is the camera roll is your photos.

It's like a treasure trove of data that you can do so much with and like expand so much into. 

[00:25:50] **Ridd:** Talk to me a little bit about what you're exploring right now. Where are you at in this process? 


## [00:25:54] Tyler's early explorations

[00:25:54] **Tyler:** I would say that the biggest overarching concept I'm working on is Albums or pictures to [00:26:00] X, like taking collections of pictures and exporting them into some other consumable format. The simplest example, which is not even AI related is take a bunch of these pictures and like convert them into a web link gallery, the equivalent of like an iCloud link, but, you know, it's just a website with the pictures hosted. And I have that working right now, actually. but you can kind of imagine , this very long list of like X to Y. Conversion problems where you just have like pictures or videos, exporting them into some other format.

So you have the kind of basic, naive level of, conversions or exporters where it's like, take these pictures, post them online. Here's a link, right? Take a bunch of pictures of notes, you know, stitch them together into a PDF, export it to a PDF. But with generative AI models, you could do things like, Hey, take pictures of my notes and generate flashcards out of them.

Take all the pictures of sushi that I've I've taken out at restaurants and generate like a food map out of it. Some version of this product idea I've said is like, artifacts, but for your, for your photos, I caught artifacts.

, in general, there's data sitting here. , you can extract it out and then you can share it and you [00:27:00] can present it in whatever format you want. so I'm just exploring like basically a ton of different use cases around like. You know, what data can you actually get out of your photos and what export formats and then beyond that, I'm also looking a lot into, just improving core functionality that, uh, like Google and Apple are ignoring, How can you make semantic search actually work and not only work, but how can you make it work fast and like, you know, not require you to like upload 50, 000 photos to cloud storage when we refer to be useful.

How can you teach your photo roll or your camera about objects that are personal to your life? my photo roll, it would even fail on, like, searching for sweaters, right? It doesn't know what my favorite sweater is, right? Could I, tap on a picture of me wearing my favorite sweater and be like, this is my favorite sweater? And then it just knows. All of the pictures of my favorite sweater, and a lot of these are kind of really interesting applied ML problems too, because it's not that necessarily all of these questions or technical problems are unique, or I'm the first one to think of them, but often they've been solved or attempted in [00:28:00] isolated research lab type settings and not running models on device, on a phone, um, Like the benchmark is not whether a model can actually execute something like this.

The benchmark is well, somebody actually use the future and like use the product. , so I'm just working through kind of this, this variety of thing right now. 

[00:28:15] **Ridd:** A lot of the things that you're talking about are about equipping people to generate some kind of an output based off of their camera role as this really rich data set.

How much of the vision for what you can do and even what spontaneous software means is tied to giving users the ability to change the interface itself and like what the core functionality of the app even contains. 

[00:28:41] **Tyler:** I don't want to just give people like something that they can just completely reconfigure in whatever way they want, you know, talk to any designer, any artist, constraints are what breed creativity, right? This is not like, Totally general purpose, software creation platform, right?

This is for media and content that like you care about, right. Things in your life. and being able to do things with them in [00:29:00] different ways, like either export them or, you know, download like new software that can edit them in different ways. I mean, that's one of my own design challenges is how opinionated am I upfront about the kind of core interface versus like how much, , flexibility do I give people?

And I'm going to try to be opinionated where it matters the most right where it's I know that there are decisions that I can make that are probably the right call here, right? And aren't necessarily that important to, have kind of user input about, But who knows, maybe there's a future where it's like the entire thing itself can be like re skinned and like redone.

But, I do kind of like this idea of playing a game of telephone, but with app source code, where it's like, you can kind of like keep forking it and forking it and forking it and somewhere down the chain, it's something completely different, you know, it wasn't even like a photos app anymore.

can you kind of gradually evolve a photos app, for example, into a messenger app? And what are all the gradient steps along the way? but for now, I'm trying to scope it enough so that like, it doesn't just overwhelm people, you know, at the end of the day, this has got to be a rock solid, really good photos app.

And that's the core of it. And then all the other generative [00:30:00] stuff is Hopefully it'll feel natural and be this is, oh, this is how it should have always been. 

[00:30:03] **Ridd:** Yeah, it's fun to think how much of your vision for what the product can be is almost impossible to even wrap your head around right now. Like everything changing everything evolving and you're dealing with things that are inherently more malleable. Like it's gonna be a fun journey. 

[00:30:17] **Tyler:** And there's just a lot of opportunity , to go nuts, honestly.

[00:30:19] **Ridd:** Can I put it in a future feature request while I have you? I want to be able to use my photos app to play a game with my wife, where we go and travel for a weekend and we contribute to a photo album, but it's locked until we arrive back at home and then we can have some kind of like a fun consumption experience together while contributing privately up to that point. 

[00:30:42] **Tyler:** that's amazing. I can make that happen

[00:30:44] **Ridd:** Please, that would be, that would be great.

[00:30:46] **Tyler:** Yeah, that's that's a great idea. Almost like film developing.

[00:30:49] **Ridd:** Yeah.. 

[00:30:50] **Tyler:** I like that a lot. What's cool about that , and this is part of the whole thesis behind like the app and the company is previously that would have needed to be like an entire startup.

[00:30:58] **Ridd:** It's

a whole product [00:31:00] startup company. Everything. 

[00:31:01] **Tyler:** Dispo. Right. Like the whole, like, and it wasn't like four albums. Right. But it's like, if you want that feature, right. You'd be like, okay, sorry. It's not on the roadmap, but like, I can just be like, Hey, right. Here's this like little programmable

[00:31:12] **Ridd:** I love it. Yeah, I mean, that's what I want. I want just that one little feature from Dispo, but just for me and my wife. And I don't even really care about sharing it anywhere else. Like I just want it to be for me. 

[00:31:23] **Tyler:** that's great. , I can make it happen for you.

[00:31:24] **Ridd:** What are some of the design challenges or interaction opportunities that you find yourself thinking through when you're trying to get to the To this level of usability that ultimately you have to get to 


## [00:31:35] Design challenges of AI products

[00:31:35] **Tyler:** I would say the main design problem right now is just trying to figure out what the first core feature is that people actually care about and figuring out how to not expose too many of the internal details of like how it works, to the user.

Like the fact that there are so many chat apps is basically a self fulfilling prophecy. it is very easy to create chat apps purely because like the way that the models are designed, like export the data into something that's [00:32:00] easy for chat apps to consume.

Likewise, , right now when I'm designing like semantic search, the way that these models are designed , you know, if you want to be able to like type in anything and be like, , what images are most related to this text? Okay. Right? The models that you use to do that under the hood, just taken text and taken images and then spit out a big long list of numbers called an embedding that you can use to compare to, , figure out like what's most related to another, but, most people stop there.

We're still like, oh, this is just for text search, right? or like, you know, image similarity search, you know, Hey, here's an image, what are all the images most similar to it? If you really understand the material that you're working with and like the, the capabilities of these models, you think a little bit more abstractly, you can do things like. I just thought of this idea today, by the way, I could have like a live camera feed and use that to search my library. Like if I want all of the pictures of me smiling, I can just smile right into the camera and it will grab the frames from that and then you Take the embedding and then use that to search against the library, or you can imagine I could upload a video as my search query, ?

And not that it would like, just [00:33:00] try to find the images most similar to the video, but like, imagine if you have this video loaded on screen and then you have like your photo library behind it. As you scrub through the frames of the video, , it'll filter, , the most similar images in your library to whatever frame you're currently on.

So you could, like, scrub through the video basically as a search mechanism, right? And like, that's a completely different, search UX pattern that I don't think I've seen anywhere that, you know,

[00:33:22] **Ridd:** I've never seen that 

[00:33:23] **Tyler:** completely capable now because we can just like easily cross compare images, but most people haven't, thought that far ahead.

[00:33:28] **Ridd:** We're in this age where Much of product strategy is dictated by what is possible now as things are advancing so quickly. And so you use the phrase, understand the materials, which really stood out to me. We're like, yeah, you, you kind of got to be able to roll up your sleeves and get into it to even figure out what the end user design can be. 


## [00:33:51] Importance of understanding the materials

[00:33:51] **Tyler:** The kinds of things you can design and build, uh, or even think of are directly related to the concepts that you understand. Right? If all you [00:34:00] know about, machine learning, for example, is oh, there's this, like, big company out in California that, like, takes in my text and it gives me text back.

You're going to have a very limited understanding of like the kinds of applications that you can build. and figuring out exactly the depth to which you need to understand something in order to build something interesting. obviously I can't answer that necessarily, but I would definitely bet on trying to understand as much as you can.

or at least like as much as it interests you. It's just so important to be curious about how things are actually made, the degree to which is very personal, like, how interested you are in figuring out how things work. But , if you want to give yourself the best chance of thinking of novel ideas, you need to understand what you're working with, the video frame scrubbing thing, Of course, you don't need to understand how image embedding models work necessarily in order to think of an idea like that, but I can bet you that it's much easier to think of that if you actually have that background, otherwise, you're kind of just like, leaving it up to, like, pure imagination and your imagination has to draw information from somewhere.

So you might as well, like, know what you're working with. 


## [00:34:59] How designers can learn more technical skillsets

[00:34:59] **Ridd:** I want to [00:35:00] tap into your experience as someone that has a little bit more of an engineering background, but still does all of the design of things. So maybe really quickly, we can just pop down a rabbit hole. And I think I want to talk to someone who is listening, who.

Has the curiosity to start exploring a slightly more technical skill set. They haven't really done it yet. And yeah, you can Google and be like, here's the process to learn to code, learn HTML, then CSS, then get, then JavaScript and react, you know, and we can find that list. My question is how has. AI and this new era of software creation influenced the way that you think designers can even formulate a learning journey for themselves.

[00:35:42] **Tyler:** I remember when Chachapiti came out for the first time I would go on like, 45 minute long conversations, just asking about, all these, like, physics concepts I was really interested in, or didn't fully understand.

I think I realized then I was like, Oh my God, it's like the amount of information that I just consumed and internalized in 45 [00:36:00] minutes is like, I think before that it probably would have taken me like a week of Googling and compiling sources and taking notes and blah, blah, blah.

So it's like these tools now let you like just super pinpoint, exactly what you're confused about and like help you fill in the gaps in your knowledge very, very quickly. There's this concept in the, Learning sciences and educational psychology called , the zone of proximal development.

It's basically what is the kind of work that you can do, where you're like struggling a little bit and it's like your growth area. you know, get out of your comfort zone, like that kind of thing. and with AI now, especially tools that have references to sources and can like do like web search and stuff, you're not just able to extend out a little bit, you know, you can really extend far.

Into like what you would you're like, totally uncomfortable knowing and, I think people often view learning and curricula as, if you're a beginner, you're like, beginners are in the same category, you know, but in reality, everybody has like a spectrum of knowledge where maybe you're an expert in something, but like a beginner in, something else, right?

Or maybe you have the capability to understand, like, much more [00:37:00] advanced concept before you've been, do all the prerequisite courses or whatever. I have this whole bit where I think that, like, more elementary school students could probably understand calculus, , if they were taught the right way, and don't necessarily need to, you know, You know, algebra in order to get like, you know, the concept of like a derivative or an integral.

But my point there is that if you take somebody who's never coded before, and put them into like a coding bootcamp, they might be able to understand something that's like, you know, made for the end of the course much more easily than something that's actually at the beginning.

just because of their prior background, it's not often the case, but, you know, I think with AI, , it basically lets you like move very fluidly between like what you're comfortable and uncomfortable with, like in different areas, rather than being strictly tied to like a linear sequence of, learning topics.

So the tools today they give a massive advantage basically to people who are just like super self motivated and curious about things and just can keep asking questions, because you can just go in so many different directions at once and you can fill in all of your gaps very, very quickly across many different levels of abstraction and, uh, knowledge.

I'm a big proponent obviously of [00:38:00] projects and like picking something that you're interested in and trying to like build it from scratch and re implementing things and getting into it, and obviously, all of these models can generate code now, and, you know, Repl.

it is great for, like, creating software, , Cursor is amazing, too, and I have more commentary also on, How much you should rely on it on those tools you know, just producing the software at the end of the day is not necessarily the end goal for a lot of people. Like, sometimes people want to, like I said earlier, know the material and, I've definitely experienced myself, like using replit and cursor specifically. Like I can kind of feel myself, , just like losing sight of like the details. And sometimes the details in the implementation doesn't matter. Right. And you just want to explore a concept, but, in times where you actually need to like, understand like the internal workings, it's important to just keep mental track of how closely you're paying attention to what's being created for you.

There's a lot here, but I would say just don't be afraid to ask a lot of dumb questions and just like hammer these chatbots, buy a chat GPT pro or like a Claude pro subscription, ask it questions all the time, dive into projects , ask Claude and Chachi Petit and your friends who are like in [00:39:00] these technical fields.

Like, what do you think a good starting project could be right. And just have your handheld and try to have, you know, a little bit of self control over when you take the break off and just do things yourself or not. But ultimately it's just about, using your own curiosity and motivation to your biggest advantage. 

[00:39:14] **Ridd:** I was in cloud the other day and that was kind of how I approached it. I was like, I don't even know how to leverage you to make this thing. So. Teach me about how to best interact with you to build software. It was so helpful. It like broke it down into each step of the process and It was just remarkably easy to get going. 

[00:39:33] **Tyler:** Yeah. The, the, the meta learning is very important. It's not just about getting to the thing. It's about getting to the thing that helps you get the thing too, you know? 

[00:39:40] **Ridd:** Yeah. That's really interesting. I haven't even thought about that. Like I could almost. Give context to Claude before I start building saying, Hey, my goal is not just to build, but to learn along the way. And if you could pull out what's happening and to really concise, like explain, like I'm five ideas.

That's I'm going to take that tactic away. I haven't actually done that [00:40:00] yet. 

[00:40:00] **Tyler:** Yeah, absolutely. , actually one like practical tactic that I do is if I'm trying to read a research paper and understand it, I'll give it the paper. And I don't just say, like, explain these ideas to me. I'm like, before I start asking questions, I want you to like, summarize everything.

And, give me, what you understand of the material and then, make sure that you, fully understand and memorize, all of the concepts here and be prepared to, like, answer any questions at, like, any level of fidelity or abstraction that I might ask you. And, if you're unsure, if, you know, you're going to answer something, in the right way, just, like, ask me before you, go off onto an explanation and, like, that's a really good way of, making sure that it, crystallizes exactly what you're trying to get out of it. 


## [00:40:36] What skills will become more valuable for designers

[00:40:36] **Ridd:** I want to talk to someone who's listening to this, who, you know, Has this thing in the back of their head where they're trying to figure out how to future proof their career in a world where it feels like everything is changing. And obviously there's no silver bullets, but the question I'd like to ask you is what are some of the skills that you feel confident will become more valuable in this world that we're headed into?

And you can't say curiosity as one of them. 

[00:40:59] **Tyler:** At the end of the day, [00:41:00] you're kind of expression and your input. Is the ultimate bottleneck. I think a lot of people used to think that, , output was the bottleneck to creating great products and being valuable in the economy, right? how many lines of code are you shipping?

, how many designs , can you finish over the course of the week? as the cost of the production process goes to zero, basically for like all, fields. , as far as digital work goes, , that doesn't necessarily mean that the input cost is 0 to write.

Like, you have to gather resources. You have to do research. You have to, you're ultimately making decisions and giving input into the machine in some way. It's not necessarily all going to be text prompts, obviously, but the more like domain knowledge that you have over, what's actually important to build the better off you'll be.

So, , writing skills. , research skills, actually understanding markets, being able to, like, reflect on, what's important to you, who you care about, what you care about, your ability to, envision the future and, predict market trends and, think, like, what's valuable. That's probably the most important because, like, Claude writes 90 percent of my code right now, right?

that's not the reason why, , investors put money into my, bank account. because I'm hand crafting every single character of code. They invested in me because I [00:42:00] know what I want to build and I have a vision for the future. And I know how to use these tools to my advantage to get it out there.

[00:42:04] **Ridd:** Before I let you go, you're making a living kind of at the bleeding edge of technology and what's possible right now. So maybe even outside of what you're actually working on, are there any other projects or demos that you've come across recently that you're just like, dang, that is a big deal? 

[00:42:22] **Tyler:** This is very recent. Um, but what comes to mind is this, it's this physics project called, Genesis. I don't know if you saw it. On

[00:42:29] **Ridd:** I saw it from your tweet. Oh, let's talk about this. This looks crazy.

[00:42:34] **Tyler:** Yeah. Like, Oh my God. For people who haven't seen it, it's this physics simulation tool, it's mostly like a code based project where, you know, you write Python scripts and it generates physics simulations for whatever you're trying to do, like in their like launch demo video, it's show me like a.

Video of like a water droplet, you know, flowing down a beer bottle, , and visualize like the velocity and all the forces acting on the water droplet as it flows [00:43:00] down. And it just makes it . And, you know, there are some caveats that apparently that the text prompt to generating that is a future future, like it's not out right now.

But, they have this roadmap and a lot of working prototypes and demos of just this insanely. Adaptive physics engine plus like visualization engine and I was looking at this and I'm like, I thought this was, like, at least 5 years away or something like that.

[00:43:23] **Ridd:** It's crazy. 

[00:43:24] **Tyler:** I really like this product, , Granola. it's this like, this, yeah, this like AI note taking app, the idea is like, every time you have a meeting, you like open up this notepad and you can like write down Like you can just write notes in it, but it's also recording the transcript of what you're talking about.

So after the meeting is done, it'll go and take the transcription and it'll use the notes that you manually put down basically as like anchor points of this is what, you know, Ridd or Tyler thought was important during the meeting. So we're going to like emphasize those parts of the transcript more and create like a nice kind of human AI combined summary.

And it's, it's great. 

[00:43:56] **Ridd:** A fun fact is when I edit this [00:44:00] episode, initially in Descript, I will start a new granola meeting and jot down notes as I'm editing, and then it listens to the entire transcript and it helps me write because I can tie my notes to what you're saying in the transcript.

[00:44:14] **Tyler:** Oh, wow. Oh, so you use that as like a post processing

[00:44:17] **Ridd:** I use it for everything.

[00:44:20] **Tyler:** That's amazing.

[00:44:21] **Ridd:** Absolutely everything. I got on a call with Sam to talk about it and it was like pretty clear, like I'm way out in left field of their traditional use cases, but it's a powerful tool.

[00:44:32] **Tyler:** That's so cool. Yeah. Oh, the other product I really love recently is, uh, the daylight computer, the, uh, like e paper,

um, tablet that you can like use in the sun.

Um, yeah, I just got it. It's great.

[00:44:45] **Ridd:** really cool. I saw, uh, Gabe Valdivia demo it to me at config and he was working on the design of it. So I only had to play with it for like 20 seconds, but it was so much cooler than I thought it was going to be. 

[00:44:56] **Tyler:** Yeah. It's great. It's either going to at some point [00:45:00] obliterate , the Kindle market, or it's going to replace iPads for a lot of people, cause it's just, it's fantastic 

[00:45:04] **Ridd:** Okay, cool. Cool. Cool. Well, Tyler, this has been ridiculously fun. Thank you so much for sharing a little bit about the journey. Given a, just a peek into like what you're thinking about, what you're working on, very, very excited to follow along with the journey and see where you take this.

[00:45:19] **Tyler:** Thank you so much. Yeah, I haven't had this much fun in a long time. Uh, this is, this is great.

