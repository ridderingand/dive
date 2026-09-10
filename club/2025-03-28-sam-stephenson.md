---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: 306frHXyw_Y
slug: 2025-03-28-sam-stephenson
source_type: descript
source: https://web.descript.com/35196022-b92a-46ae-a554-22dacb348116/565a8
guest: Sam Stephenson
host: Ridd
title: "The winding journey of designing an AI product"
published: 2025-03-28
duration_min: 51
generated: 2026-09-10
generator: dive-club-ideas
---


## [00:00:00] The Granola origin story

[00:00:00] **Sam:** I quit my job and was like messing around with side projects. Chris had quit his job, uh, to figure out what to do next as well.

Um, we met like halfway through that, so we didn't know each other, and then we started, uh, hanging out and basically just jamming on our own side projects together. , and we had a period of a few months just doing that.

Uh, I think at the time I was building my own note taking app, like a general purpose kind of note taking app. Um, Chris was like, I think had discovered GPT-3. This was, it's like hard to put yourself back in that time, but this was like pre-chat GPT. I think his thinking was like this, you know, this is gonna change everything in technology and, and uh, and like, but it's not obvious how to apply it, like what the use cases are gonna be and how we're gonna interact with this new thing.

Um, so he was kind of just like building little things to kind of poke and prod at what might be possible with, with LLMs. We kind of went down a few rabbit holes I [00:01:00] guess.

Like we, we talked about, how could we kind of change, like build a, a new kind of note taking app or like a tools for thought type product that um, would be the kind of your second brain. And we could do that kind of all automatically through AI organizing everything and, \\ we got a couple of those conversations and then we very quickly realized that this was like a, it's like a trap that I think I've definitely been in before building products. And I, it's a common one among like product builders where like, uh, it's real tempting to try and like design this, this beautiful system from the top down of like how, how a piece of software should work and how you should use it.

, it's real seductive, you know? And, but I think that's not how like useful things actually get built. They get like useful things get built by, like figuring out. Uh, point in someone's workflow where they're struggling with a thing or whether they're, they're not able to do it, and just focusing on that and trying to like build a thing to, to help them do, you know, do just one thing better and then you can build the next one and the next one and, and eventually you get somewhere, you know, [00:02:00] broader than that.

But yeah, I think it took a couple of conversations and then we realized like, ah, shit, we're, we've fallen into the trap, we're gonna take a step back. And, um, I think at that point we deliberately decided, , we're gonna like down tools and not build anything for a little bit and we're just gonna talk to people.

Um, we knew we wanted to work in the, or build in the kind of AI work tools space, so we kind of started with a super high level, uh, brief to ourselves. It was just like, let's talk to a dozen, two dozen people, uh, about the work, you know, and just like. Look at their day, look at, you know, what sucks about your day?

What, what takes your time where it shouldn't do? What stuff do you, do you, uh, regret having spent time on? What would you like to do less off? That kind of thing, just kind of fishing for problems, I guess in, in people's days. , 


## [00:02:52] Honing in on a specific problem

[00:02:52] **Ridd:** Once you'd identified that ballpark of problems, what were some of those initial experiments that you were running and in general, what were you doing [00:03:00] to learn from people in those early days?

[00:03:02] **Sam:** I've been a designer and doing user research for a long time and have found through trial and error that like. Observing what people actually do. It gives you very different results to just asking people like what they think they do.

I think we noticed pretty quickly talking to people about their work, that people like, the things people would verbalize were often, uh, kind of like very rosy, pictures of what, what their real work life is like. One thing we found super helpful was like, we would sit with someone and like look at their calendar and then get them to basically go like, blow by blow, be like, cool it like it's nine o'clock yesterday, tell me what you're doing. And then 9 15, 9 30, 9 45 and actually like grounding the conversation in the real thing where they couldn't like post rationalize what they were doing with their time.

Um. Helped us get much more realistic, I think, kind of insight into what, their work life was like. And one common thing that came up again and again was like, I suck at taking notes and therefore I don't know [00:04:00] what I'm supposed to do after the meeting. , I lose track of the things I promised that causes a lot of stress.

, when we looked at how people actually took notes, basically like you get, you get two modes, um, mode One is you are like furiously transcribing everything that's been said on the call. Um, yeah, it's a, it's, it's, it's, it's a real split, you know, there's a lot of,, a lot in each bucket. And, um, the flip side of that was, , people who barely take any notes, they take like one or two little scribbles. Um, often things that like don't make sense later, you know, it's like a random piece of gibberish, which meant something to them at the time but didn't, you know, you could look at it like an hour later and it looks like junk on a piece of paper.

I guess another thing that was in the mix, which was interesting was AI note takers had already kind of been on the scene for a while at this point, and a lot of the people we talked to have tried them. Everyone we spoke to who tried them had. Kind of been enamored with the idea of it, but then in practice just hadn't found it that useful. Um, lots of folks would just kind of leave it running on [00:05:00] the call, but then never go back to stuff afterwards.

Um, when we interrogated, why a bit on that? Like I think things that came up were transcripts are not actually a very useful artifact from a meeting. , they're too detailed. Um, like, I think, I kind of like to think of it like the raw material of a, of a call and, and it's not actually something I think that you should be looking at really.

, after the meeting's over, it's, it's too full of noise. And these tools present the transcript. It's kind of like the main interface, or at least they did at the time. Basically the feedback we got was that like 90% of, of it isn't useful to me. What I really just want is like the two or three things that I said I would do, , or that I need to take away from this meeting, and I just wanna be able to remember that, so, you know, people were finding it hard to write notes.

These tools weren't solving the problem for them. And it felt like, you know, we could do something with that. Like there was a space to, to build something better there.

[00:05:50] **Ridd:** was there a clear moment where you realized like, okay, we're onto something here?

[00:05:54] **Sam:** cl I think a lot later, honestly, like, I don't know, I think at this point we were still in just like, let's try this, let's try that. 


## [00:05:59] Early product experiments

[00:05:59] **Ridd:** So talk to [00:06:00] me a little bit about what are some of the different things that you were trying then? Like what were those experiments that you're running?

[00:06:04] **Sam:** We tried. I guess one thing we tried early on was like a very simple interaction where you would, um, type a word about something that was said, uh, you know, in the last 30 seconds or whatever. And this tool would like, have the transcript as like running in the background. And so when you type that word, it could kind of flesh that out into a bullet, into like a useful piece.

Um, and that prototype was literally just that. It was like a web UI where no database behind it. No, like storage. You could only do one of these at a time. It was just to try out the interaction of like, write a thing, hit tab, get it to order, complete a sentence. That felt promising, you know, like, and, and that one felt pushing on further.

Um, we tried a bunch of other ones that were more like, uh, um, buttons you could hit during a meeting. Like, uh, just like bookmark this moment or, uh. Or like that was an action item or that was a quote that I want to get kind of thing. [00:07:00] We might come back to them I think in some form, some of them in the future, but like, at least at the time, we kind of failed to make it feel like a really effortless thing.

Like you have to kind of, you have to remember that the tool is there and you're gotta move your mouse and go click the button and all of that takes you out of the meeting, which is not what we wanna do. Yeah, it was things like that, it was like deliberately just like trying out individual interactions without worrying about like the infrastructure or the whole product around it.

We kind of, I guess the thinking was like, if we can nail this one thing, then we can probably build a product around it. But it's just, it's the one thing, it's gotta feel really effortless. 

[00:07:32] **Ridd:** it's cool, knowing where you arrived, and then hearing all of the different explorations where you really were attacking this from so many different angles all at once. Were there clear, like tipping points or maybe a moment where you had some kind of an insight that puts you on the right track, which ultimately manifested as the product that we see today?

[00:07:53] **Sam:** I guess we would be showing these prototypes to people kind of as we build them. Um, and people's reaction [00:08:00] to them was like a, a lot of what we used to decide what was, what was interesting or not. like for example, the bookmarking and favoring stuff like, uh, it felt like a good idea to us at the time.

We put it in front of people and asked them to do a meeting with it, and they would, uh, mostly just forget honestly, or like, . Or like they would think it was a good idea, but then they would hit it just once and then the result would naturally be that useful. Um, yeah. The, the one I, the, the first one I mentioned, um, that ended up having more legs and we kind of ran with that for a bit longer, and that was like a real, um, uh, people got it.

When you looked at it, it was like an instant, like, oh yeah, that's, that's how it should be. Like that, that just, you know, that makes total sense.

[00:08:40] **Ridd:** You're talking about kind of like the, the auto complete once

[00:08:43] **Sam:** the auto complete one. Yeah, yeah, yeah, yeah,

[00:08:47] **Ridd:** So how'd you build off of that?

[00:08:49] **Sam:** , we basically built like a proof of concept product, I guess at that point, like around that interaction. Basically the minimum thing you could use to do an actual meeting with and use it to get meeting notes.

[00:09:00] Um, this was over like Christmas 2022. I remember sitting at the dining table of my family's house, uh, building this, and it was, um, it was like a. Uh, single page web app, I guess. Um, rich Text Editor. And we just had this one interaction where you would, um, it would transcribe in the background, you would type a word, hit tab, and it would order complete a sentence.

Um, you can think of it like a, like a GitHub copilot or something, but with a bit more, um, nudging from you. Like you write the word that you want the thing to be about. it was, It was really dumb. Like the app, it wasn't really unsophisticated. There was no database behind it, so no, like long term memory for the app.

You, you had to copy, paste your notes out of it into notion or notes or wherever you wanted to keep it afterwards. , there was no user accounts. Uh, the transcription was all done through the, uh, speakers of your computer, so you couldn't use headphones. You had to just kind of like. Let the sound come out and back in [00:10:00] again to, to be transcribed.

, that one stuck around a long time actually, that we, we didn't fix that for like six months.

[00:10:05] **Ridd:** Six months.

[00:10:06] **Sam:** Yeah, yeah, yeah. Yeah. It was a mission.


## [00:10:10] Raising money and going for it

[00:10:10] **Ridd:** At what point did you start thinking of this as a startup that you were gonna raise money for and really go after?

[00:10:15] **Sam:** I was in like side project land for longer I think. I think Chris was kind of like set on trying to figure out what his next startup would be. Um, I was happy, tinkering and, you know, making a thing that, that was cool and people liked.

I think the tipping point was, um, Soleio, who we both know, uh, um, had been chatting with Chris on and off for a few months, I think before, like leading up to Christmas of that year. I think we had a conversation with him in like January of that year where we showed him what we built. He was into it or I don't think he was into this idea particularly, but I think the trajectory was starting to look promising, you know, from where we'd come to, to where we were now.

And yeah, at that point he basically said like, uh, I might be in, if you guys are thinking about raising, then, uh, then count me in. I dunno what it was like for Chris, but for me that was like real, [00:11:00] that felt like a moment I've never had, you know, never had like somebody kind of like express, like backing for you.

Like that I, I guess, and, and believe that you could get somewhere good with it.

[00:11:09] **Ridd:** Yeah, I'd imagine that reshapes even what you're thinking of in terms of like what this could become at that

[00:11:14] **Sam:** Yeah, yeah, yeah. I had a lot of, uh, it was like a lot of soul searching that that month. I'm like, what am I gonna do with my life? I was, uh, I was like kind of two timing or three timing with other projects at the time as well, and, and, uh, deciding to let those go so I could just be all in on this was a, was a process.

Like it sounds like an obviously good idea now, thinking about it, but back then I was really like not sure what to do.

[00:11:39] **Ridd:** I mean, a lot of the product feels obvious to me right now, which is why I think it's so good. But even in our, you know, short discussions before this, it's been like a winding path to get to this point. And so a big part of the conversation, I really just wanna understand the winding path because you have reached this place of informed simplicity that is, you know, it's, it's obvious, like [00:12:00] you said.

So you have this moment on Christmas. What most people are familiar with when they think of granola is this, you know, polished Mac app that's ready to go outta the box. This beautiful onboarding, help us bridge that gap a little bit. What were you doing to really design the product after you've made this mental switch?

To go all in.

[00:12:21] **Sam:** At first we just started sending the app digitally to people that like our friends and being like, Hey, try this out and tell us what you think.

, and we really didn't get much from that. Like, I think very quickly realized that like, uh, you know, people are usually too busy to try a thing and also like. The tool that we had sucked at the time, we could get useful, , like insight from watching people use it, but we had, you had to kind of be on a call or give them like a reason to be trying it.

Otherwise it's, it wasn't really worth, you know, worth their time to use it. To caveat that we did have a couple of people who very early on, , were like, I believe in you guys. I'm gonna, I'm gonna use granola from now, starting now for all of my meetings. [00:13:00] Um, Michael, uh, one of our investors in particular was like this and, and, uh, he stuck to it.

He's like, as far as I can tell, every one of his meetings since then he's used granola for. And, uh, that was so, so helpful, you know, because like, it was kind of unusable at the beginning,

[00:13:16] **Ridd:** Yeah, I was gonna say Michael's AirPods. Were gathering dust.

[00:13:19] **Sam:** Yeah. Yeah. And he, and you know, he is like, he's a real investor. He is like, he's like, you know, startups are pitching him.

He's gotta make decisions worth millions of dollars. And, and, and he is using our shitty tool to like collect, to make the decisions. And yeah, we owe a lot to, to him like, you know, sticking with it. Um, but I guess what, what really helped from that was like , he would complain at us and it was like real complaining, you know, like, like, uh, guys, I need this and it's not doing the thing I need it to do.

The, just the quality of the feedback was so much higher , than someone kind of like pontificating about what they think might be cool for it. And then we were just trying a lot of stuff, trying a lot of different interactions.

The kind of tab order complete thing that I [00:14:00] talked about before, we tried a long time to make that work. I think the idea behind it felt very seductive that, basically you could do all your note taking in real time and you could be kinda like real time partnering with the ai. , it felt very sci-fi, you know, it still, it still feels cooler than using granola today.

But I, I guess the more we watch people using it, just the like problems came up very quickly where like, we keep hearing things like every time granola writes a note, I need to check what it said. And I don't, I don't trust that it's gonna be good until I've looked at it and as soon as I look at the note, I'm like out of the meeting and I'm not present in the conversation anymore.

And, um, that's the whole point of granola. You should be more present in the conversation because you're using it, not less. Yeah, we tried, I. Lots of things to try and mitigate this. We, um, made the notes way shorter. We turned them into quotes rather than, than, uh, like summarize bullet points. , we gave you more control, like we gave you like, ways to summon a action item just ways to like, kind of like narrow the gap between what you had in your head and what the AI [00:15:00] produced on the paper. Um, but I don't know. We never, never really got there. Like, I think just as soon as there is a gap between what you want and what the AI produces, it's, it's frustrating if you can't change it real time and you can't help it kind of gravitate towards looking at that on the screen.


## [00:15:15] Letting go of ideas you're emotionally attached to

[00:15:15] **Ridd:** What was it like letting go of an idea that you probably established a bit of a emotional attachment to over the months?

[00:15:21] **Sam:** It was tough. . We didn't let go of it for a long time. What we did was we just added more stuff. Um, like the app started out simple, but we, but basically every experiment we tried, we just added it and added it and added it into the app.

And we didn't often take things away. So, at some point, I can't remember how many months in it was, but we, we were like, cool. This real time thing is like, hmm, not sure. Um, let's try a different approach. Let's just try, uh, just taking whatever you wrote, um, , from one column. And like back then there was many, many columns in, in the, the ui.

And, uh, we take what the notes you wrote and we'll just put them in a summary, like, you know, separately [00:16:00] after the call. Um, and let's see what, let's see what, let's see what happens. And um, you know, like if people like it, then they'll use the summary thing and if they don't like it, maybe they'll keep using the real time thing.

Um. I dunno if it was like a great methodology for trying, you know, trying out ideas. Just adding and adding, adding it made the product like horrifically complex looking and, and really hard to kind of get to grips with. 

[00:16:22] **Ridd:** The pile of interactions and UI that you've discarded is so much bigger than what is in production today. And like I knew that, but listening to you talk, it's clear. I really underestimated just how much you've experimented and tried.

[00:16:37] **Sam:** yeah, yeah, yeah. It is, it is. I would, I need to like, uh, aggregate it all in one big figment board or something. I don't know. It'd be cool to see the, all of the, all of the iterations.

Yeah. . 


## [00:16:46] The two different types of note-taking products

[00:16:46] **Ridd:** I wanna talk a little bit about your past experience because you mentioned that you kind of were experimenting and working in this note taking tools for thought kind of second brain space. So how did that experience influence the way that you thought about [00:17:00] the design for granola?

[00:17:01] **Sam:** I've been a designer for a bunch of startups before granola and, um, I guess I've always, 'cause I've been into this space, I've been like hacking on, uh, note taking apps for myself.

And there's a, there's one, there's a talk of WorkFlowy, which, um, it's been around for donkey's years and like, uh, I was big into making themes for it like 10 years ago. Like, 'cause it was great. It felt really ugly and I was like, uh, you know, trying to make prettier themes for it. And more recently I was at a, a company called Idea Flow who were building like a, one of these, like a, like a general purpose notepad.

You, you type all your thoughts in Idea flow, helps organize it for you, helps you make sense of kinda bigger ideas. Um, I guess like through all of this time spent in that space, I've spoken to a lot of users and a lot of people who use products like this. Um, I count myself as one of those types of people too.

And, uh, I think, uh, one thing you see is like, using a kind of second brain note taking knowledge [00:18:00] organization , tool when you're in that mode using a tool like that, it's a very kind of like reflective, , slow thinking way of operating. There's this, um, psychologist Daniel Kahneman, who has this famous, uh, concept of like system one and system two thinking.

Um, system one is like the kind of animal part of our brain. I think it's like actually like the, the kind of like stem of your brain or something. Um, it's very like reactive, panicky, like, uh, it's the, it's the thing designed to keep you alive and, you know, running from, from precess and that kind of thing.

Um, and then there's like system two, which is the kind of prefrontal cortex e front party of brain that's like. Reasoning and, and rational thought and, and can solve complex problems, that kind of thing. Um, I think a lot of the tools for thought space works on the assumption that we are like system two creatures and that we, we, um, we're capable of like, you know, these very complex reasoning and rational thought and blah, blah, blah.

And I think it's partially true, like I think [00:19:00] obviously humans are, are, are, can solve incredibly complex problems and can, you know, can be very sophisticated thinkers. But I think a lot of like real work unfortunately is, is much more system one. Um, like if you look at people's day to day, uh, like if you work on a computer, it's a lot of, uh, overpromising people, you know, promising that you'll do these 10 things for different people and being late to meetings and kind of like struggling to keep on top of your to-do list through your inbox.

And. All of all of that puts you in quite a reactive mode. , And I think, a tricky part of designing for in, in this space is that if you assume that this person is system two rational thinker, then I think it just like clashes the reality with reality. You know, like, like actually your users probably a lot of the time are just trying to keep up , with the deluge of, of information they're being hit with and things they promised, and they're just not gonna have the time to engage with your product in the [00:20:00] way that you think they should. I think in the future you'll be able to kind of like take a step back from all your meetings in the last week and look at kind of patterns from the meetings you've had or like, uh, things that are bubbling up from different customer calls and, and kind of take your time to wade through interesting things like that.

But that's not the kind of, that's not where we wanted to start with granola. I think we knew that we wanted to get you utility in a meeting, which is a stressful situation. And so we needed to solve for system two brain first and we could get to the other stuff later.


## [00:20:34] Ruthlessly prioritizing the core flow

[00:20:34] **Ridd:** How does that high level principle translate into what the interface looks and feels like?

[00:20:39] **Sam:** I'd say the main thing is that we just kind of try to ruthlessly prioritize the core flow of . Starting a meeting from the notification, jotting down a few things that you care about and getting really great notes at the end, and that kind of happening seamlessly without you needing to think about granola during the meeting.

, it has trade offs. Like [00:21:00] we, like, I think a lot of the kind of like, uh, features on the edges of granola, like templates, , are not nearly discoverable enough people regularly go like six months with before they realize that templates exist or that you can view the transcript.

yeah, and I would like to fix a few of those things, but like, I think , yeah, it's just like ruthless attention to the core flow and like, and making that as seamless as we can 


## [00:21:19] Adding intentional friction

[00:21:19] **Ridd:** can we talk about viewing the transcript for a second? Because you put that in this tiny little popover dialogue where it is very clearly a second class citizen. And tying back to your view of the transcript as a raw material and, and like how much of that is intentional differentiation from existing products or your opinion of what makes a good note-taking tool today versus, Hey, we just got a bunch of moving pieces and, and that's the way that it ended up being.

[00:21:48] **Sam:** Yeah. I, I think, uh, yeah, we've been on the journey with the transcript and I feel like we still haven't, uh, it's not, it's in like ideal form right now, you know, I think we can make it better over time too. But, um, when we were talking to folks who [00:22:00] used existing note notetakers, , it became apparent very quickly that the transcript was kind of useless.

Uh, you know, and except for like very specific things, but generally speaking, not very helpful. 

[00:22:09] **Ridd:** So you put it in a 400 pixel box.

[00:22:12] **Sam:** not even, not even at the beginning. We, we, we hit it. That was, that was the one was like no transcript.

, it was literally, I guess we had the tab thing at the time, so it was like a, it was just a white sheet of paper, , with a little listening indicator and you would type stuff, hit tab, and that was it. No transcript. And very quickly people were like, one, I can't tell if the thing is on, if it's working.

I don't, I don't trust it. It's working. Two, , this note feels like bullshit, but I can't tell if it's bullshit or not. Like I, I dunno what was actually said here. And three, like, I think another utility of the transcript, which we discovered over time was just like having the thing coming in in real time is like really helpful for a lot of people and just understanding the conversation.

Especially non-native English speakers, I think often appreciate being able to see the conversation printed in words in real time during the conversation. , it's like subtitles, I guess. [00:23:00] Uh. So we kind of conceded that. We, um, we put it in a sidebar at the beginning. It was in a sidebar for a long time.

Always like much smaller and I guess kind of deliberately hard to read. Like, I think we wanted the hierarchy to feel very strong where your notes were. The thing in granola, like that's what granola is. It's just a place for your notes. And the transcript is like this supporting thing, which you can, you can look at if you want, but otherwise you shouldn't be, be thinking about.

It's moved around the UI a few times, but like, it's always been this small kind of hard to read thing, which I guess should feel kind of friction full, you know, like, like operating with it. It's, it's, it's behind a click for a reason.

[00:23:39] **Ridd:** I mean, that was my impression that it was like intentional friction, which I do think is, it's working, you know, like I don't click into it. But maybe there is that subconscious trust that you've created because I know that it's a click away. It does remind me of something that you talked about earlier where you were saying how you want granola to feel like your personal space, uh, like this is, you know, your stuff.


## [00:23:59] Creating the feeling of a personal space

[00:23:59] **Ridd:** [00:24:00] And I would imagine that having your notes in front of the transcript is tied back to that overarching idea. Is there anything else that you're doing to create that feeling, especially when the interface itself is incredibly minimal.

[00:24:11] **Sam:** Yeah. Yeah. Good question. It's this idea I read in a book a long time ago. Uh, it's called like, , the science of Organizing our Digital stuff or something like that. It's like the most nerdy computer book ever. Um.

[00:24:21] **Ridd:** you really are a second brain guy.

[00:24:23] **Sam:** Yeah, I got really into it. Yeah,

[00:24:26] **Ridd:** I didn't realize we were at that level.

[00:24:30] **Sam:** yeah, yeah. , there was one bit of it, which like I, I forgot most of the book, but like, this is one chapter where they talk about doing a study where, um, uh, they basically compared a nested folder structure UI in like, you know, finder or Windows Explorer or whatever, , to search for like retrieving stuff.

You know, they, they gave like a a hundred people a computer and were like, find this file and off you go. Um, and I think the thing [00:25:00] that stuck with me from that was they said, I think search and search and, uh, browsing one in different scenarios different for different reasons doesn't matter. But the interesting thing was that, um, navigating files and folders, uh.

Activated a different part of your brain. It, it activated the like spatial navigation part of your brain. Um, whereas anything search related activated the, like linguistic, uh, like communication part of your brain. And the thing that was interesting there to me was like navigation and the kind of spatial part of your brain is much older and much like we've had that as humans for, for like millennia more than, than language.

Um, and so we're much faster and it happens much more subconsciously, whereas, um, linguistic thinking is much more like a, it's like single threaded and, uh, much slower and feels more effortful. And I thought that was a really cool idea. I've like no idea what's going on in granola, but like, I like that really resonated.[00:26:00] 

And so I guess I've always been very keen from the start that granola should feel. Kind of spatial there should be a physicality to it. , and we should try and keep the user in the spatial brain rather than in the, just in the language kind of thinking brain. That manifests in a few ways.

Like the, um, it's a Mac app on your desktop, like it feels more like a place I guess that that is, that has weight on your screen and is, and sits there and takes up space. Um, the home screen, uh, we've tried so many times to redesign this and haven't found, it's like a running joke at this point that, you know, every couple weeks someone tries to rethink the home screen.

It should feel kind of like a stack of objects, like a stack of, uh, stack of notes. Um, there's this weird tension in granola where like, we call them notes, but actually they're kind of like meetings mostly, you know, with exceptions. Um. But I think as soon as you call it a meeting, it, it's like a conceptual idea rather than a note, which feels like a piece of paper like that has physicality.

It's a list of, it should feel a bit like a [00:27:00] list of objects and, and as you use it over time, it should feel like you're building a collection of your stuff. You know, that, that, that feels like it has significance. The UI is like one piece of paper , , and it kind of like puts your content very front and center.

Um, it's very clear that there's like one main object in granola. Like the, um, a lot of the, uh, note taker bot uh, interfaces that we looked at at the beginning are like three columns and different panels everywhere. And there's no real feeling that like, this is like, what am I looking at? I, is it this, this is like, I can't pin down what kind of object this is that I'm looking at.

Um, we wanted that to feel very obvious in granola two. 


## [00:27:38] Nailing down the onboarding flow

[00:27:38] **Ridd:** Can we talk about onboarding for a second? Something that stood out to me in the early days was the amount of time that you were spending, just putting what you have in front of people, talking through it, talking through, you know, their workflow, how your product works, what was the journey like for you to figure out how to do self-serve onboarding, because I do think you have a pretty unique approach and I sent granola to multiple [00:28:00] people just for the fact that, hey, you should look at this onboarding for inspiration.

So what's the backstory there?

[00:28:05] **Sam:** Up until like two or three months before launch, we didn't have any onboarding. And the thing was really hard to understand. We had some very good advice early on. Uh, David Lee, who's a, he's a YC partner, but also Angel invested in granola and, uh, , he was like a, , if you just like give your product to people and watch them try and use it when you're very early, you're actually trying to solve two problems at the same time.

You're trying to solve the problem of. Have you made a useful product that people pick up and use and get utility out of and have you, have, you, uh, can, can you solve this problem of making the thing easy to understand and easy to use and to figure out? And those are like independent problems.

You don't need to think about them. You know, they, they're interdependent. Like the simpler you make the product, the easier it is to understand and pick up, but you don't need to do both at the same time. You're kind of like doing it in a hard mode if you try to. We heard that. We were like, ah, yeah, okay, this is kinda stupid what we were doing before.

And, uh, we switched [00:29:00] to hand onboarding every user that we gave granola to, um, by which I mean we would get them on a video call and I would share my screen and I would, or no, they would share their screen, but I would be like, okay, now click the sign in button. Now when you want to create a new note, go to the top right and click this one and then, and then this, and then this.

Um. The idea being we just show 'em how to use it and, and even if the thing looks as complicated as hell, they can, they can use it and then we can get feedback on what it's like to live with. ,

[00:29:29] **Ridd:** How many of those do you think you did?

[00:29:32] **Sam:** we did like five a week. We had like, uh, 150 beta users like when we started thinking about onboarding, at which point we started adding people at scale a bit more.

But, um, yeah, so it wasn't a ton, but you know, like 150

[00:29:46] **Ridd:** mean, that's still a pretty big number. Yeah.

[00:29:47] **Sam:** Yeah. Yeah.

[00:29:48] **Ridd:** you're learning a lot in those calls, I'm

[00:29:50] **Sam:** yeah. Yeah. Big ton. Yeah. And I think we got to the point where we started to have confidence that the core product was kind of working. Like, um, [00:30:00] uh, retention was good. People used it many times a day. People started talking about how great it was to other people. Like all those signs were really good. Um, the only problem was that if you gave it to someone, they couldn't figure out what the hell it was and why they should use it and, and all that.

And it was kind of a Frankenstein at this point. It was like a, there was like a, um, transcript, sidebar and then tabs with your private notes that you could click between. And then there was like a summary page that also had tabs that you could have many summaries. Um, I think we still had those like template buttons on the right, so you could generate random stuff as well.

Chat. There was a lot of things. So you know, the, the problem we kind of switch modes to like, okay, the, the thing kind of works. I think we just need to figure out how to get some random person on the internet to figure it out and start to use it for themselves. I, What that looked like was basically we just stopped holding people's hands on the video calls, but otherwise kept the same thing.

And, you know, slowly started watching them struggle with things and we could pick away at the problems and, and what was working or what wasn't working. 

[00:30:58] **Ridd:** So it sounds like there was almost this [00:31:00] correlation between. onboarding and the forced simplification of the problem of the product. Where like before, it's like, okay, can we solve the problem? Maybe we're over solving the problem in more ways than we should be even thinking about it. Okay, check.

Now how do we create something that people can understand? 

[00:31:17] **Sam:** Yeah. Yeah. Big time. Yeah. I guess the, , the self-serve onboarding brought up a bunch of things. Like, it put, there was a bunch of really obvious stuff like, making the onboarding flow, like the, you know, the signup button and the permission screens and all of that stuff. Uh, comforting and you know, like you feel okay about what you're signing up to and all that stuff.

I guess the harder ones were like, what's the mental model someone should have of what granola is and how, and how it, and what it's doing. And we really struggled with that a long time. 'cause I guess, back then granola was like a, there was your notes in a sidebar and which was like, it's hard to explain.

It was like the main UI in the meeting. And then once the meeting was finished, it would like collapse down into a sidebar and give you this panel of the summary. Um, [00:32:00] but what that meant was you had kind of like two artifacts. You had the notes that you'd written and then you had the thing that granola made and they looked like separate objects.

What we saw was basically people gravitated towards just, just playing with their notes. 'cause that's what they knew and that's what they thought they created during the meeting and. The granola summary was like this other thing, which they had just come outta nowhere and they didn't trust.

It's just confusing for the user to have two artifacts and it needs to feel like one artifact. , and it should feel like the same when you write notes during a meeting. It's the same piece of paper that then becomes the summary at the end. Um, it's just like granada's just taking your notes and it's like adding bits and, and tidying stuff up.

But they're the same notes. They're not, it's nothing different. It's the same artifact. That took a while to build conviction in. And then I think like the animation of it revealing was like really important in making it feel seamless and that we tried a few different things before we landed on that as the, the approach.

We took on a bit of like design debt for want of a better term in other parts of the app to make this happen. Like I think the, the like tabs we have [00:33:00] between your private notes and the summary, , it's kind of weird and it confuses people still.

Um, it's like a product of the fact that we basically don't want most people to think about it. And so like we make it small and in the bottom and really you just look at one piece of paper, which is the summary at the end, but people need to be able to see what they wrote. Otherwise, like it just solves a bunch of edge cases.

And they trust, they trust the thing they wrote much more than the thing we generated. 

[00:33:25] **Ridd:** I 

Mean same. And it's interesting again to hear how intentionally adding just a little bit of friction bearing something just a little bit more than maybe some people would feel comfortable doing, is actually what allows for that simplicity of the product. And, and I, I think, I think it works. And even when I think of granola, that interaction, that bar floating over and transforming my notes into the ai like smart notes like that is the interaction that I associate with your product.

And it's fascinating to hear how you went through a lot of code, in a lot [00:34:00] of design explorations in order to get to that place.

[00:34:02] **Sam:** Yeah, yeah, . It's a very happy memory. We, um, coincidentally had an offsite, uh, in, uh, TANIF in like January. And, um, I think we kind of like built conviction that this like single piece of paper, uh, route was gonna be the thing we try. And, uh, so we basically took this week in Tanif to build a lot of what you see as granola today, or like the main interaction.

And, uh, it was like one of those happy, you know, like hacking away at this thing all day, but in the sun. And, uh, we did it like in the, by the end of the week there was a working thing, which felt really good 


## [00:34:34] What Sam has learned about prompt engineering

[00:34:34] **Ridd:** so much of the quality of the product is tied to the output of that interaction. What does the AI write for me? So what have you learned about prompt engineering while designing this product?

[00:34:47] **Sam:** Yeah, it's really hard. I don't know, I still, I still, uh, when I look at our notes, I'm like, I'm like mostly disappointed still, you know, it's like, uh, . I think a few things I guess we've like learned or that, that have been helpful. [00:35:00] So the context you give the notes really, really matters, if you just give a transcript to chat GBT and ask it to summarize it, it'll be super generic. And it, and I think an analogy I like is like, um, think of ai AI like an intern, like a, like an intelligent college graduate, but someone you just basically just plucked off the street.

They don't know who you are or like what, why they're there. They've just been told to summarize something. yeah, If you pluck a person off the street, bring 'em into your meeting room and ask you to take notes for you, they're gonna have no idea what's important or like what you care about or who you are or why this meeting is happening or, or like what is the one most important thing that everybody needs to take out of this meeting.

Um, and so we shouldn't expect the AI to be able to do that either. Like we, we need to provide as much of that context as possible. Um, so I guess over the, you know, we we're still improving on this, but, but, but we basically are doing our best to like add in extra context for the, for the AI so it knows as much as possible about why this meeting's happening and who the people are.

And, and stuff like that. 


## [00:35:59] Glimpse of the future product strategy

[00:35:59] **Ridd:** All right. [00:36:00] Let's look ahead a little bit. So you have product market fit, things are growing, the product's very sticky. Where do you take the product from here?

[00:36:08] **Sam:** Ultimately, we, we want to build a tool that you're using for a lot of your day, a lot of your work. Like, like there's a big part of your life, um, that can help you in, in lots of ways. Um, the thing that gets me outta bed, at least in the morning, is like we get to kind of invent the future of how people interact with software and , how they kind of work alongside this AI stuff.

And it's a really cool opportunity. Um, and so I think, yeah, I think over time we'll look for more, more and more ways to, to let you do that in more context. Um, the big things on our mind right now, more, more concretely are like, uh, um, I think granola is a very valuable product for you as an individual. Uh, just getting notes for yourself.

Um, but we could do so much more to help a whole team work together more productively and, like a team should be better if everybody's using granola, uh, because you can do so much more with that stuff [00:37:00] rather than just any one individual.

the other big area, like area to push on is, uh, helping you with more than notes. Like, not say useful, but they're definitely not everything you want out of a meeting. And often it's the things that you promise to do for someone are the more pressing, more important things that you need to do afterwards.

The kind of hand wavy vision of the future, which I like is like a granola, like you use granola, it's kind of like on your screen, taken over a third of your screen or whatever. Um, you're having a meeting and as the meeting goes on, you say, oh yeah, I'll do that for you. Or like, uh, oh, let's schedule a the next call to do this.

And then, and then, uh, oh, I need to update that ticket in linear here and I need to do this and I need to do that. And granola's smart enough with your, with your kind of nudging it along the way to be doing those things in the background for you. Um, you know, it needs to be connected to the right tools and it needs to understand enough about your context to be able to do that.

But that's kind of like, I don't know, I think there's a bunch of cool sci-fi stuff there, which I will be fun to play with.

[00:37:57] **Ridd:** I mean, by capturing the meeting, you're upstream of almost everything [00:38:00] else that happens in an org.

[00:38:01] **Sam:** Yeah. Yeah, I think so. Yeah. So much of the most important context of what's going on in a company is in the meetings and we always thought of this as kind of like, it's our foot in the door to be able to play in this space and to be able to give you value as a knowledge worker, I guess.

[00:38:14] **Ridd:** Hey, quick note. I'm not kidding when I say I use granola for every single meeting that I have. Like I can't imagine not using this product every day now. So I ask them if they'd be willing to hook it up for the dive community, and they're giving like an amazing offer. So if you go to dive.club/granola, there's a secret landing page where you and.

Everyone on your team can get three months free. It's like a crazy good offer. So if you are a designer, then I can't recommend the product enough. Definitely check that out. And now let's keep going with the episode.

There's a fun tension though, where right now you have this beautiful simplicity. It feels like my space, it's everything's stripped down, and there's a world where you totally botch [00:39:00] this and it's like full of integrations and a big old add to linear button and CTAs to invite your teams on every page.

So. How do you even think about carving that path as a designer where you don't want to go too far in one direction?

[00:39:18] **Sam:** yeah. I don't know.

[00:39:20] **Ridd:** Good luck.

[00:39:24] **Sam:** Yeah. I hope we don't fuck it up either. Um, we have to be kind of dogmatic, I think, about protecting the core flow of using granola. Like we're dead in the water if you aren't using it for your meetings and aren't using it to collect context about what's happening.

So that kind of has to win above everything else. Like, um, it happens regularly even now, like, uh, like, , we're pretty, like, as a team, I guess we wanna move fast and so, . Um, folks are kind of like shipping stuff, you know, autonomously into the app all the time, which is great by design. , but there's often things that they're like, like [00:40:00] if something kind of touches the notification flow or the, um, the like, uh, generating notes after the meeting automatically, that, that kind of thing.

Uh, Chris and I especially are real paranoid about things like that. Like I think, uh, they, you know, we just need to have a real light touch there 'cause this kind of goes back to the whole like system one, system two thing I was talking about.

Like, I think, as you start to use granola for more kinds of work, um, we'll be able to get a bit beyond the system. One only way of thinking, like, I think, during meetings, especially back to back meetings is a very tense, stressful time where you're, you don't have a lot of space in your brain for anything else.

Um, but I think like we have an internal build now where you can, um, you can see all your customer calls in one place and chat with them in aggregate and, and, uh, I think that that's incredibly useful. We use it all the time here and, and, uh, I think that is, it's just a totally different mode of operating.

Like you, you are, if you're [00:41:00] doing that kind of thing, you've probably carved out like an hour or two in your day to like do some reflection and thinking about, you know, what are we gonna build next? Or, I need to write this product spec and therefore you have the time and therefore we can kind of like afford to have a denser UI with more control.

And, and, uh, and you know, a lot more bums to play with basically. Like, I think I could, I could see granola feeling quite, um. Future versions of granola, the difference being quite apparent between like the core meeting flow being super simple and stripped back. And then the kind of more analytical reflective parts of granola being more powerful and more power usy and yeah, I, I dunno, we'll see how that shakes out, but that's kind of where it's going at the moment.

[00:41:43] **Ridd:** that's interesting. You're totally right. 'cause I, I'm not in like sales or anything. I don't have a million meetings, but when I do have meetings, I stack them back to back quite intentionally because I want to compress them into, as I want to create as much empty space in my day as I possibly can. And I don't go back and look at those notes at [00:42:00] all, but maybe I'll get to the point where I'll have like eight or 10 demos for inflight or something like that.

And I'll go back then and say, okay, what do I actually wanna pull out of these? And you're right, I could see that feeling like a very, very different type of product.

[00:42:13] **Sam:** yeah. Yeah. I think so. Before we strip granola back, you know, to the thing it is today, like when it was back in complicated mode. Um, I guess that was kind of the, what we were going for a little bit. Like we had, we had, um, as well as all the panels and sidebars, we had two modes.

We had meeting mode and, and non meeting mode. And as soon as you hit the notification or started transcribing, granola would go into meeting mode, which was this like compact window with nothing on it, just the notepad. And, and then you hit end meeting and, and you get this huge like airplane cockpit of buttons and, and stuff.

And, uh, I think like we got the, like, uh, placement of it wrong or like the, the meeting notes weren't the place to do the airplane cockpit thing, but I, but I could see other parts of the app where that's more appropriate, you know, or we want to play with that more. So


## [00:42:59] Hiring Granola's founding designer

[00:42:59] **Ridd:** All right, so up until this [00:43:00] point, it's just been you designing the product, you're bringing on someone else. I think by the time maybe this episode goes live, is that correct?

[00:43:09] **Sam:** that's the plan. Yeah. Yeah. We have actually, um. Uh, we've started working with a contractor, uh, designer who's, who's, um, doing brand and some product stuff for us. But this, yeah, we're kind of like a, I'm just starting to look for our first full-time in-house product designer.

[00:43:26] **Ridd:** Let's say hypothetically we're having this conversation a year from now, and then you are reflecting on what has become the super successful hire. What are some of the core traits or skills that your particularly appreciative of, of that person?

[00:43:40] **Sam:** Good question. We are in an incredibly fast moving space. AI powered work tools. A lot of people are coming after the meeting, uh, meeting notes, meeting, transcribing thing. 'cause it's got so much potential and so much usefulness. Um. So I think as a product we can't really afford to sit still.

Like we have to keep innovating and, [00:44:00] um, I think that means basically we're gonna have to go through this cycle of like, of, given a particular problem or a part of someone's workflow, like what's the interaction pattern that lets them do 10 x more? , and that's gonna take prototyping and exploration and a bunch of wrong turns.

I would love to have more kind of mental firepower to be, to be trying stuff on that front and to be, to be figuring out what's next for us. We now have a product that's working and has many users and so like we have, we have the challenge of like keeping that going and, and, and protecting that, but also we still gotta keep iterating in, in other places.

[00:44:33] **Ridd:** can't just shift a prod every day anymore.

[00:44:35] **Sam:** exactly. Exactly. We're at the point where we we're just gonna need parallel threads of like, of, um, exploration and discovery and prototyping to figure out what's next for us. Um, yeah, I mean, I I also think like we have to shift things to a super high level of execution in a way that doesn't mess up the granola UI and keeps it , the simple , calm feeling place that, that everybody thinks of it at the moment. I think it's the game.

If you're an early stage designer, you've gotta be able to kind of wear both [00:45:00] hats and know when to deploy which skill, you know? And, uh, but it's part of the fun. That's what I like about it.


## [00:45:06] What it takes to succeed as a startup designer

[00:45:06] **Ridd:** I like the idea of wrong turns. Like even as you were talking, I was picturing someone in a maze, and you just need a designer who can sprint and take as many wrong turns as quickly as possible in order to figure out what the right direction to go is.

[00:45:16] **Sam:** Yeah. Yeah. It's been interesting as their team's grown. 'cause we've had to, we've had to like learn to externalize, I guess some of the things we kind of believe, or the ways we operate a bit more so that we can do that with more people in a scale. I think one of the things we are trying out is like, uh, for a given project are like, are we in like explore mode for this project where we're like the go, like we don't know what the solution looks like and the whole point is to try a bunch of stuff and see what resonates with people and what works.

, or are we in exploit mode? Is this a problem where there's a, there are known solutions that we just need to pick one off the shelf and go execute it to a high level. , what's an example, like a search, for example in the app, like the search bar type of company, see the results? There's a bunch of [00:46:00] design work in that to make it feel nice, but it's also, it's not, uh.

Beautiful search isn't gonna like change the game for us. We just, we just, but it's, but, but we need it and we should do it well. Like, um, and so I think for those kind of problems, it's totally okay to just, to go look out there in the world, see who does it best, take what you can from that, apply it to us, and, and execute really fast.

Um,

[00:46:24] **Ridd:** and that familiarity hit too, like as I was using the product, I command K searched without having ever seen that window. And it worked exactly as I would expect because yeah, it's like it's a solved problem.

[00:46:34] **Sam:** Yeah. Yeah, yeah, exactly. Um, I think like, there are not, like, you know, an example of explore mode problems we're gonna be grappling with. It's like, how do you turn a set of meetings into a brief for a client if it's actually useful? You know, like, like if you're a, you work at an agency and you're, you're trying to produce a brief for a client or a proposal, 

, or . like. Looking at all my customer calls from the last week helped me make [00:47:00] sense and find the useful stuff out of that. That's a, that's an unsolved problem. No one's figured that out. And, and, uh, we need a, I I think also like the way to figure out what's useful there is often not to just produce Figma mocks of, of different layouts.

It's still like, try stuff in the product. Um, and

[00:47:17] **Ridd:** aren't really pixel

[00:47:18] **Sam:** no, no, no. Yeah, we've done this a few times since Granola's been out in prodding in the wild. Like, um, if there's a problem in this kind of explore mode territory, we'll deliberately, like fork the app and, , it's usually me, but sometimes other folks on the team will just like hack away at it and, and like, uh, kind of like brute force, uh, potential solution into the app.

And, you know, code can be horrible. Things can be broken. It's like totally fine, but it's, it's like, and then a few of us will go and like, live on that version for, for a few days or a week or two. Um. And see how it feels, you know? And the point is like we, we, once we have conviction, we throw away the app and we build it properly [00:48:00] in, in production.

But it like affords us the freedom , to go nuts and not worry about real users at the same time.

[00:48:07] **Ridd:** Is there an example where you've done that and arrived at the solution just by playing with real code?

[00:48:13] **Sam:** , the multiplayer stuff that we're gonna ship soon is probably an example of that. Like, I think, uh, I won't talk too much in the specifics 'cause we're still figuring it out, but like, , how you make granola notes visible to other people in the app, uh, in a way that feels where we're not like invading your privacy.

Um, and like how you help, you know, in the world where you have like a hundred people at a company using granola, sharing notes with each other, you need some level of organization on top of that to help people kind of cluster stuff into, into places that make sense. It's kind of like a one way door problem, I guess, where like, uh, we've gotta choose the kind of primitives, like the, the organizational structure that we're gonna give, uh, users.

And as soon as we put that out in the wild, it's gonna be real hard to pull back. Like, people are gonna use [00:49:00] it, they're gonna set up folders, or they're gonna like, uh, uh, invite people with this particular showing mechanic and it's gonna be real hard to, to kind of backtrack and try something else. So yeah, we, we, we, that was one where we did like, I guess one a, I did a bunch of upfront open-ended talking to people, research type stuff about it.

But then we started trying solutions by just building versions in the code. Like first versions were purely, , kind of like right at the beginning, like all ui, no memory, no, no connection to the back end, anything like that. Just, um. And how does it feel to like, put a note in a folder like this, or how does it feel to invite people to look at this note like this?

, All kind of smoke and mirrors, you know, UI stuff. And

[00:49:43] **Ridd:** Mm-hmm.

[00:49:44] **Sam:** and then over time we, we kind of solidified it a little bit. Uh, but at the end of the day, it's all through Waco that we're just trying to try out the ideas in real, in real life.

[00:49:54] **Ridd:** We've covered a ton of ground, and I love this story because it really did just start off with, you know, [00:50:00] side project friends, super, super broadly, trying to look at people's day-to-day workflows and try to figure out what's the right problem to solve. And here you are now with, you know, really one of the most exciting startups that I know of.

So it's an inspiring journey. I'm sure somebody out there listening is, you know, hopeful that they can go on a similar journey. So are there any other, uh, insights or lessons or learnings that we haven't talked about yet that you wanna leave people with before I let you go? 

[00:50:27] **Sam:** It's said so often that it's kind of triton, like a, I think people say for the sake of it at the moment to like, make something people love or that's really useful or whatever. I've obviously, like as a designer over the, over my career I've had to learn this, but I think building granola has like hammered it into me even stronger , that.

As a person building product, it's like so easy to get to like fall in love with your ideas and, and, uh, think something sounds great and that you've got the right answer. And, but really the only thing that matters is like, does somebody actually find it [00:51:00] useful and do they pick it up and, and, you know, pick it up again and again.

, and does it really solve their problem? And it's like a really hard thing to keep yourself honest too. Like I think we, we continually still as, as a team, like fall into the trap of like thinking we've solved it and then finding out that we haven't. And it's like a, What's hard about it is like people will tell you that you're doing good things and that you're building a great, you know, you're building a great company and a great product and, and, and Oh my God.

Yeah. I want that feature you're talking about, but like. Uh, really the only thing that matters is like whether they pick it up again and again. I just have to continuously reminding myself to stay honest to that and to, uh, and to keep like grounding myself in talking to real people and watching them use their thing and watching them struggle with it , and then like fixing the things that they struggle with.

And that's kind of like, at the end of the day, that's how we make a better thing. .

[00:51:47] **Ridd:** And you're perfectly qualified to give that answer too, as someone who really deeply understands the space and has spent years working on different implementations and different, different types of note-taking experiences. So for [00:52:00] you to still say, like, at the end of the day, do they keep picking it up or not, and how important and difficult it is to operate with that being the only thing that matters.

At the end of the day, , I've taken a personal note for myself because, uh, it, it's definitely applicable right now. So I appreciate you coming on and just giving the, like really nitty gritty into your thought process and all of the. Different experiments and lessons that make up the winding road. So thank you for coming on, Sam.

Big, big, big fan of granola and everything that you all are building. So appreciate your time today.

[00:52:34] **Sam:** Thank you, red. I really appreciate it. Really appreciate getting to come on here. I've been a fan of the show for a long time. It's, uh, it's, yeah, it's super cool to be here. Cheers.

[00:52:42] **Ridd:** Cool. 

