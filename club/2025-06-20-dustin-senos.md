---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: sbQCYmnNHVY
slug: 2025-06-20-dustin-senos
source_type: descript
source: https://web.descript.com/46c2264f-a10d-4d07-a0b2-3a595037a5ac/666d5
guest: Dustin Senos
host: Ridd
title: "Designing the AI-native web browser"
published: 2025-06-20
duration_min: 54
generated: 2026-09-10
generator: dive-club-ideas
---

## [00:00:00] Origin of Dia

[00:00:00] **Dustin:** we as a design team are really, really heavy on prototyping and exploring, especially early things. And we don't have like a separate product team from design team, at least not at that point. So when we kind of realized, ARC wasn't gonna get us to kind of the bigger dream we had that we realized we wanted to pursue, we just immediately started prototyping and we kind of checked the boxes on the obvious things first.

[00:00:25] It's like, okay, what if, we had a horizontal tab bar that could switch into a vertical tab bar? What if we could do that? What if, uh, rather than having all the profiles or spaces in one window, we made them, uh, separate windows to be more familiar, like other browsers. And we just spun up so many prototypes 

[00:00:43] and tried so many different approaches to that.

[00:00:45] 'cause what we had realized with ARC A lot of the feedback we were seeing is people who love arc, love arc, and they're committed to it and they're like, this has changed how I work. This has changed, like the internet for me, this is fantastic, thank you. But for those people who never crossed that [00:01:00] bridge and got that far, they just felt like ARC was too hard to pick up and they couldn't find value soon enough.

[00:01:06] So we were really, as a design team, trying to like deconstruct that and help ourselves and the, you know, future users find value earlier. And, I think that was, that was our primary role was just like really, really chasing down that value for folks.

[00:01:20] **Ridd:** to me a little bit about the early prototyping. Like how wide did you go on that spectrum? What were some of the things that you were exploring?

[00:01:26] **Dustin:** we, we tried so many different things. I think a lot of folks even almost had their own browsers running. I have like a swift browser that I just hack on all the time. Nate Perry 

[00:01:35] had Archie a browser that he hacked on all the time, just like whatever code base and like set up felt appropriate for us.

[00:01:42] A lot of the crew also were like heavy and origami, so we're pro prototyping many things in origami. And the shape of some of those prototypes looked like, you click the maximize button and now you were actually just looking at like a desktop inside of a browser that you can like double click on and open up like the [00:02:00] GitHub 

[00:02:00] uh, window inside of that to this browser is just a chat thread.

[00:02:06] That's all. It's like we really tried all kinds of different things and let our minds really wander quite far.


## [00:02:11] How the north star shifted from Arc to Dia

[00:02:11] **Ridd:** You talked about this idea of making sure that DIA was easier to pick up. Can we go a little bit deeper there? Like how did this North Star of what good design looks like evolve as you made this shift from Mark to Dia?

[00:02:23] **Dustin:** I think one thing to touch on is like, arc kind of came from, from nothing. We looked at all the existing browsers and we're like, what if there's like a different way of doing this?

[00:02:33] And we just kinda let our curiosity lead us and our minds wander and out came arc, which was a realization that, you know, you don't actually, switch between that many apps and you don't actually go to that many websites potentially if you're working, there's a few places that you could anchor and build a product around it.

[00:02:47] A few different contexts, which we pulled up in spaces for Dia. The realization was. That novelty inside of ARC was great for some people who are like early adopters, are willing to pay [00:03:00] the price of novelty and was actually a detriment to many, many other people. 

[00:03:04] And that the future of L LMS Andis actually less about helping someone say, organize their tabs in their spaces, and more about just helping people get more things done easier, faster, so then they can just get off their computers and like go live their life.

[00:03:20] building a browser that is more familiar means that we are more interesting to more people and easier to pick up for more people, 

[00:03:30] **Ridd:** I like when people use this phrase of like a novelty budget and you know, you're now catering towards pretty kind of a different set of audience. You know, you have to make something that can break out of the tech _proficient_ bubble. So then, given a smaller budget, how did you think about the right places to spend it with?

[00:03:48] India?


## [00:03:49] Spending the novelty budget

[00:03:49] **Dustin:** we spoke a lot about, um, as you say, the novelty budget. And we spoke a lot about the balance of, innovation or familiarity, and I kind of, I kind [00:04:00] of like to stretch it further where anything innovative I really think should strive to feel familiar 

[00:04:07] so that it doesn't, it doesn't have to feel totally different to be innovative.

[00:04:11] I think the most innovative things, once you see them, you're, they just look obvious. You're like, oh, yeah, that, that should have existed from the beginning are, why did this not exist before? So we really, really chose to. Invest in our like innovation budget or our novelty budget in the things that we wanted to be uniquely different about DIA, so that they didn't get in the way of someone learning.

[00:04:33] Or just like waking up on Tuesday and deciding to switch to dia. And you know, we get a lot of feedback online from, I just want chat inside of arc. And it's like, yeah, I understand that. But that is the audience of folks who have already committed to Arc, have already brought everything over to Arc, already invested everything in arc.

[00:04:52] And then of course they want ARC to let them go further. But what we realized is the novelty of [00:05:00] ARC without chat was too much. It was too much. It was a detr for so many people that if we were just to add chat to arc, it's like we're, we've just added even more things to arc that 

[00:05:10] people would feel like they have to learn.

[00:05:11] So it didn't feel appropriate to. Say piecemeal things out of arc to whittle it down into something we felt was, was, more approachable or like brought people value sooner. It felt like we did really need to start, start from scratch and really, really pay the novelty budget in places where we thought it could make the biggest difference.

[00:05:28] 


## [00:05:28] Figuring out the right patterns for AI

[00:05:28] **Ridd:** I mean, when you open up Dia and you open up the AI chat, especially when it's in like the sidebar, it feels obvious. You know? It's like, well, of course it's there. I would imagine it probably wasn't. Immediately obvious. Like what was that process like to even arrive at something where we can open it and be like, well, well, yeah, of course it's there.

[00:05:46] **Dustin:** you know, it's funny, we, we spent so much time thinking about where the chat button goes and what that chat button looks like, because it can be at the, what we call scrim, like the platter level of dia, or it can be at the tap [00:06:00] level. It can be treated as like a sidebar button to be native to Mac os, where it's like, oh yeah, just show her how the sidebar, or it could be like, we have it now as labeled.

[00:06:09] And had early prototypes that kind of pushed the URL bar to the background and brought the, always present chat bar to the surface more closer to the person. And it was at the 

[00:06:21] bottom of the web browser. 

[00:06:22] So if you imagine like a deal looks like this and at the very bottom there's just like a big chat, Hey, how can I help you?

[00:06:28] And what we've thought was like, it's such a not, natural place to have chat at the bottom of that screen because then you could just chat. The webpage would just zoom up and that would be inside of a chat thread. But then we realized, well now as soon as someone's looking at this browser, they go, okay, which input do I type into if I want to go to.

[00:06:45] You know, my, my cooking website, do I click in that chat one and say, Hey, cooking.com, or do I click on the URL bar? even simple things like that, and we tried that for a long time and we're like, this, this makes it really clear. You can chat with the website, it makes it really clear [00:07:00] it's a browser.

[00:07:01] But even that, like the thought that someone would ever have to think and stop and think about which URL bar or what input they're gonna type into in a web browser was just like, no, that's just gonna, uh, incur too 

[00:07:11] much tax on someone. So we, we pushed ourselves to be like, it has to be one box. It has to be smart enough to route to where the person wants to go.

[00:07:20] And that's hard because like muscle memory from other browsers is so, so strong. You can type in Chrome and never look down at any of the auto completes, press enter and it's gonna take you where you expect it to go. So then we had to figure out a way to insert. You could, could be gonna the website or you could be asking a question to our LLM and we have to figure out how to, how to do that.

[00:07:39] **Ridd:** It is interesting 'cause like one of the first things that I noticed when I was playing with the beta was the fact that you're still making floating and sidebar available. Maybe you could talk a little bit about that decision.

[00:07:52] **Dustin:** totally. We had three, we had actually, we have, so we have full response page, we have sidebar, uh, full response pages of, [00:08:00] it's, you're never starting from a website, you're just starting straight through chat. So, but if I'm on a website and I chat, we had sidebar, we have the floating window, which we had now, and then we actually had one that never brought you anywhere.

[00:08:13] So if you clicked at your L bar at the top and asked a question, you know, who won the last baseball game, it would just answer right there.

[00:08:20] **Ridd:** Oh,

[00:08:21] **Dustin:** they would actually never take you anywhere. 'cause we're like, well that, why would you have to open a tab for that if we could just answer you in line and then you could optionally expand that into a full page or a sidebar.

[00:08:31] And we left that one at the drawing, at the cutting board, um, pretty quickly. But we, we, we built it out, for the sidebar, or what we call like, kind of the pip modality. We built the pip modality for people that would have smaller screens. so 

[00:08:46] that if you don't want content reflowing or you're used to seeing your website, or say you're working on an Excel spreadsheet and you want all of that content all the time, the PIP works really well to kind of live on top of that.

[00:08:58] Whereas the sidebar does take up a lot of real [00:09:00] estate.

[00:09:00] **Ridd:** What are some of the other interaction patterns that you all were trying to figure out, or maybe where there were a lot of different types of prototypes when you were figuring out, like how the users should interface with AI inside of the product?

[00:09:12] **Dustin:** I think some of the more curious ones we tried were So let's say I'm on a website and I open up the chat sidebar, and then I ask for like, related things or things to question, like maybe the stance on this article, and then you show links inside of that. We tried some prototypes where it's like, well, what if we just let you click on that link?

[00:09:32] The chat pushes over, the website pushes over, and now a whole new web view opens to the right of that, and then you can just keep following down this rabbit hole. So rather than just constantly opening new tabs, we just kinda let you thread. Down in the conversation. I feel like that navigation is always, compelling.

[00:09:51] 'cause it's like, of course it's like this like tree you can traverse down and then always in practice you just end up, just getting lost in it.

[00:09:58] **Ridd:** Yeah, it makes for [00:10:00] a really good Twitter demo though.

[00:10:01] **Dustin:** It makes, yeah, it makes, and you is, when you see it, you're like, of course. Of course. That's how these things should work. My browsing is rabbit holes.

[00:10:08] Why don't we just let the person, like make a physical rabbit hole? But, at least for us, we landed on something else. Like we were just incurring novelty tax. It's like, is this the problem we're trying to solve right now? Or if you click on something that looks like a link, should it either open a new tab or navigate in place?

[00:10:23] And then the decision was, well, which one do we handle when? And then had to kind of work through that problem versus the other problems.


## [00:10:31] Laying the right foundation for the future

[00:10:31] **Ridd:** I wanna keep coming at these early explorations from different angles, and there's another tension that my assumptions you were probably dealing with, which is okay, we want to have something that is much easier to pick up. There's a simplicity that I. Doesn't exist in ARC that we have to achieve, and yet you're also laying the foundation for this new type of AI native browser that has to support [00:11:00] functionality and use cases and even modalities potentially, that are almost impossible to predict.

[00:11:07] You know, this thing has to be just as valuable today as it is three years from now. And at the rate of change, who freaking knows what that's going to need to account for? So how did you think at like a system level in terms of where does the right levels of flexibility to exist so that we can grow into these potential futures?

[00:11:26] **Dustin:** totally. So I think that goes back to like where the chat button gets placed. because things we realized were the spatial metaphors that we pull on, like it's very intentional that DIA has a scrim, has a kind of a tab wrapper that sits on top of that platter. The chat button is inside, is on top of that platter attached to the web contents, and that our URL bar and tab actually maps the color of the web contents.

[00:11:51] So then at that level, that gives us a container that we can play with, as far as we want, to explore things with bringing context to the [00:12:00] person, assuming that the, if we've done our job right, they realize that the context of the LLMs bringing them is using that container and everything they see inside of that container.

[00:12:09] So that kind of gives us flexibility to play off play with inside of that. And then at the, rim level. Things like bookmarks in DIA are very similar to other browsers and other browsers that people are familiar with and very different than arc. you know, we tried many different explorations on like, well, how could bookmarks be different inside of dia?

[00:12:29] And well, what if they're, you know, auto categorized? Or what if all these things that LLMs let us now do and make? We had all these little stacks of, okay, you're looking at sim racing stuff, here's a stack of that. we intentionally didn't chase some of that stuff down solely to prove out the pitch of dia that like having this chat or this assisted living with you is going to be valuable if we don't make everything else novel, it gives us future runway to then [00:13:00] introduce novelty in different places.

[00:13:02] Things like bookmarks, things like tab organization. without introducing novelty everywhere. And then, you know, LLMs get better, we identify usage patterns that we wanna chase down. We'd have to back out of this novel system like we did with Arc and have to start over again. So by choosing the novelty and choosing, to keep it simple and specific places, or familiar in specific places, I think gives us the best runway for, you know, the shifting sands of what AI is right now.

[00:13:29] **Ridd:** I really like that reframing. 'cause you're right, there's a lot of low hanging fruit that AI would be pretty good at and our incorporates a lot of that. But you are kind of saying either we can make this horizontal wrapper layer of AI work or nothing really matters.

[00:13:45] **Dustin:** Yeah, totally. you know, if we, if we can't get people to find value outta the corp pitch of Dia right now, we've either buried it or the value's not there yet. So everything else novel would just be like a detraction from that and. We really look at this launch of DIA as [00:14:00] like the starting line for us is kind of how we look at it internally.

[00:14:03] It's like, cool, we're at the starting line now. We have a product back out, it's in public. We're iterating on this thing in public again, where are we gonna take it? 

[00:14:10] Versus like, this is a complete product. It's like no one thinks this thing is complete. Like there are so many rough edges in it that like, you know, we still stress about as a design team.

[00:14:19] So I think that's, that's exciting to me. It's like, cool, we're back in the race. Where are we gonna go?

[00:14:23] **Ridd:** How'd you think about the release line then? Like when was this ready to go out the door?


## [00:14:27] How The Browser Co knew when to launch

[00:14:27] **Dustin:** I think that that adage of like, if you're not embarrassed about a couple things when you release, you've waited too long, is really true. We picked a date and we're like, okay, 

[00:14:37] this is this, this is the date, and

[00:14:39] **Ridd:** Sometimes that's the best way to do it. You need the

[00:14:41] **Dustin:** run with it. Exactly. Pick the date and then. Some things came in. I, and I think this is a, a testament to the team at Browser Co.

[00:14:49] Which like pound for pound are the most hands down, talented across the board, engineers, designers, everyone, people I've worked with, like the skills inside of dia, the right [00:15:00] skill, code skill, the custom skills. We, we've, we built all of that in like less than a couple months from design to code, to production, to out.

[00:15:10] It was just like, came, the idea appeared and we're like, yeah, that makes sense. That's a good way of framing it. And like less than two months, more closer to one month, we built that whole thing. So we were like very, very close to the edge when we were, when we actually released this thing.


## [00:15:25] Picking the right building blocks for AI

[00:15:25] **Ridd:** Let's talk about skills then a little bit, because I think the way that I interpret skills is kind of going back to the earlier question where you have to lay the right foundation for where the heck this is gonna go. It was very important that you picked the right. Building blocks that can create a pathway towards potentially even a more agentic future.

[00:15:45] So how did you think about that opportunity and ultimately, why did you land where you did?

[00:15:52] **Dustin:** I, and, and this includes dia, so I'm not throwing any other products under the bus. I'm throwing Dia under the bus with this as well, I [00:16:00] feel like a chat input with like an attach icon and a send button and some like, Hey, do you wanna do this or that, that turns into a chat stream is like the best we've got right now, and not the end state or not the ideal way of communicating with like LLMs.

[00:16:18] I feel like I. if I hand you a piece of paper and say, draw me something, you're like, uh, I don't know. But if I hand you a piece of paper, I'm like, draw me a cat. You can just like immediately pick it up and start doing something. So you see as all these different companies chipping at that same problem of like an empty text box is terrifying.

[00:16:34] Unless you know the power of LLMs, you're not gonna know what to put in that. So circling back on that skills are hopefully intended as a way of showing you some of the things that DIA can do. DIA is particularly good at helping you write, or particularly good at helping you code. And by kind of branding those things, making them feel like a tangible unit, we hope that that helps people [00:17:00] understand the output of what DIA can help you with. It still is not an ideal entry point. The UI of just this like chat input is like, I think that's the sweet spot that I'm still really, really intrigued to iterate on more of like, how do you clearly show someone what they could type in this thing? At the same time without making them feel like they have to make a decision, which one of these seven skills am I trying to do right now is, is kind of like the big boss, I think, across the industry for design and like AI and LLMs.

[00:17:28] **Ridd:** I know it's one of the hardest questions in the industry, but like pull on that a little bit more. Like where do you at least want to. Point the ship and start exploring and maybe any ideas rattling around in your brain for what, what could this look like in the future?

[00:17:41] **Dustin:** D is in an interesting place because as a browser striving for familiarity, I don't want anyone to hit Command T and have to stop and think about what they should be clicking on or typing in that box. 

[00:17:54] So if we were, say, working on a writing tool, the input could be [00:18:00] very, very whittled down to just before writing.

[00:18:03] And maybe it's not even an input, maybe it's, you know, buttons or. you know, like a fig gem, like toolbar at the bottom of some canvas, helping you like get started that like an AI assistant is like holding your hand and guiding yours like another cursor on the interface. for DIA, we need to still strike that balance of the input should still work like a URL bar on a typical web browser, but it should feel like you can do more with it.

[00:18:26] things we've done in DIA right now is like when you, switch to a different tool, we colorized the input, we kind of poof it and you could see like, now I'm in a different mode. I think we could pull on that thread further where it could feel even more like you're asking the assistant to do something different for you.

[00:18:42] I think we could do a better job that when we detect. That what you're typing in is likely gonna be a coding question. We could do a better job flipping that to show you that we're asking coding questions. Maybe there's not one input. Maybe there's multiple inputs when you switch into those different kind of, uh, forks in the road you're going down.

[00:18:59] I think [00:19:00] there's a lot of, a lot of different opportunities to explore in that.


## [00:19:03] Designing for agentic world

[00:19:03] **Ridd:** we can go a little bit deeper on the skills piece specifically then, like when you imagine what this might unlock in the future, what are some of the things that you think about?

[00:19:12] **Dustin:** very curious about like the agentic stuff. Like can I send one of these agents off one day to like, you know, do my grocery shopping for me based on the things I've bought in the past? Like, it seems like that would make sense. I'm very deep in the like MCP server land of like how those do.

[00:19:29] now let these LLM speak speak to each other kind of in, in human language, which is really, really powerful. I can see skills continuing to get deeper and deeper based on Dia knowing more about you. So you can imagine if I am writing and it sees that I am using DIA all the time to write and I write on this website in this way, or that website, in this way, DIA could continue to like learn that context and understand that about [00:20:00] you.

[00:20:00] So it's given you very turnkey, but very contextually appropriate suggestions to you. And hopefully the skills stay at the surface level. Pretty familiar, easy to pick up, easy to like wrap your arms around, but the depth of what we can do continues to deepen and deepen and deepen.


## [00:20:15] Designing for personalization

[00:20:15] **Ridd:** To me, the depth is kind of tied to this idea of personalization. And at the end of the day, whatever you can do uniquely is almost always tied to like, what context can you give these models? So you are really deep in that rabbit hole compared to probably the majority people that are listening. So what are some of the design considerations that you have to start thinking through when so much of a product's value proposition is tied to this depth of personalization?

[00:20:41] **Dustin:** the memory stuff is off by default because we wanna make sure people know that, that they can opt into this and that Dia will, uh, learn from their history if they opt into that. We also, from the get go, we do not store anything from like banking websites or sensitive pages.

[00:20:57] Like we, from the very beginning we were like [00:21:00] security, security, security. How do we make this, give people more power but not open up a lot of security or open up hopefully as few security issues as possible. so like the data is stored locally, it's encrypted, it's per your browser profile. So like having that foundation then kind of put a lot of us at ease being like, okay, if it's secure, it's private by default.

[00:21:20] That's the stances this company is taking. Then the things you can go really deep on in how you design for are. Not overfitting, I think is one thing where it's like, if I tell Dia once to not use M dashes, then I don't want Dia every single time it responds to me to be like, because you told me to not use M dashes.

[00:21:38] It's like, It doesn't always need to remember things forever and like it 

[00:21:43] can, I think memories can fade, I think is an interesting thing. And really thinking about it as like, DIA should feel like a friend that knows you really well and a friend that knows you really well doesn't always bring up like, oh yeah, that's 'cause we went to high school together in every

[00:21:57] **Ridd:** Yeah. Yeah, yeah.

[00:21:58] **Dustin:** So like that, [00:22:00] that 

[00:22:00] level I think is, yeah, 

[00:22:01] **Ridd:** Thinking about which memory should fade is a very interesting concept that I hadn't spent a lot of time considering before. And it, it's cool because so much of the design process in that oral of personalization is completely removed from the pixels.

[00:22:17] **Dustin:** call vibe coding what you will, but it's like we're in a very different place now of how to build and think about products. And I think very much from like an AI first lens is, I think the correct I a correct path to be at least curious about and going down.

[00:22:32] because our software can be very different now, and it's like we finally, as designers have this new putty that lets us build very, very different tools, which is really fun.


## [00:22:42] Traits of AI-first designers

[00:22:42] **Ridd:** Let's pull on that a little bit then, and hypothetically, let's say that you were to hire somebody listening to this who is not working at a product that's making a lot of use of ai. They're a little bit more green. What are some of the AI first [00:23:00] practices or mental models or ways of even approaching the craft that you would expect them to learn on the job while working at the browser code?

[00:23:07] **Dustin:** across the board with designers, I really value just curiosity. And I think our company Brows Go exists because we just repeatedly ask like, what could be, what could we do? And like, is this possible? So I think approaching all of this towards curiosity and also understanding that you don't need to know everything about AI to be able to make use of it.

[00:23:28] Like don't get too caught up if you're just dipping your toes in. Like don't get super caught up in like all the models and all of this and rag and all that stuff. Like just learn it enough so that you can, Know which tool to reach for when, and kind of know the bounds of what you can do with AI from a design place.

[00:23:46] So

[00:23:47] **Ridd:** I am gonna make you get super specific there for a second to help someone think about where that line of enough is.

[00:23:52] **Dustin:** if I were to talk to someone getting into the industry right now, I would suggest that they through just the pure design [00:24:00] lens, don't look at it as like vibe coding. Look at it as like vibe designing, and very quickly go install Claude Code or your Vibe coding tool of choice. Think about a problem that maybe already exists, like go redesign Instacart.

[00:24:15] Do it. With AI as like your co-pilot and see where it goes and just stay curious with the process and ask the AI questions while it's doing it. Because I think people really, really quickly realize that the future of how to design products, I think is already here. I think it's just not evenly distributed yet.

[00:24:33] I think it probably is still in the terminal for many, many people, but I think that is very, very much, the right threat for people to be pulling on. Like I spend more time in cloud code now than I do in Figma

[00:24:44] building things, and I, I'm building prototypes natively in Swift. I am an eng, I was previously an engineer by trade, so I think I am able to like, coax it further in the directions I want.

[00:24:55] But the time from IDEA to actually like be having something to click on [00:25:00] with the supportive AI is like compressed, almost zero now. A few minutes for many, many things.

[00:25:05] **Ridd:** What are the types of things that you're personally exploring then as the design leader? Spending more time, vibe, coding,

[00:25:11] **Dustin:** I have always been like a very hands-on design leader where I am. I like staying close to the metal. So I've always typically have an IC project on the go. right now I got brought up to speed when cloud code came up with just like an idea, I had rattling in the back of my head for a long time to build an app to help me find a park to go to with my kid.

[00:25:32] Uh, just 'cause Vancouver has open data. The data is great, the apps are bad. Google Maps is like this universal tool for finding whatever you need. I just needed parks with playgrounds and washrooms that were close to me. So I just chased that down in like the evenings to figure that out. At work, I use a lot of AI to help me spin up interfaces that, either just have like a lot of data managing that needs to be done, like handling [00:26:00] streaming or handling MCP tools and that sort of work, which is like code I'm getting out of Claude.

[00:26:05] I would never expect to ship to production 'cause I'm not, I'm literally not even looking at it, but it's good enough to let me actually have a chat stream come in that's streaming, using tools and doing that, that is streaming. So I like use it to again, ask like, what if, what if this happened? What if when tools showed up they looked like this, but not anything going into production right now.


## [00:26:26] The role that MCP plays in the future of design

[00:26:26] **Ridd:** You talked about MCPA couple times, and I'm going to. Assume that probably 80 to 90% of people listening have an understanding of MCP to the point of it's how LLMs talk to each other,

[00:26:37] **Dustin:** Yep.

[00:26:38] **Ridd:** but it keeps coming up and they keep seeing it when they scroll on Twitter. So then where does your brain go when you start thinking about MCP and what it unlocks and what does the nature of these explorations with MCP even look like?

[00:26:48] **Dustin:** I think MCP unlocks the ability for these different tools to talk to each other through natural language what I think is very cool about that is it [00:27:00] lets. some of the more interesting things is when like two services can talk to each other versus it just feels like you're talking one-on-one with a website.

[00:27:08] It's like, well, what if I can talk one-on-one with that website, but that website can actually talk to this other website in the background. What is possible now across these two products you use? we don't, we don't see that into many products right now. We see a lot of that happening at the server level, but that's not, hasn't been brought to the client level in a really approachable or human way yet, which I think is really, really powerful.

[00:27:30] And I think that is obviously the age agentic world loves thinking about that. But I think it doesn't even have to be taking actions on your behalf. I think it could be bringing content to you, uh, through this network of 

[00:27:42] connected LLMs. I.

[00:27:43] **Ridd:** I'm taking a little running tally of. How many times you're saying what is possible in this conversation, and I think it's really cool because it speaks to the irrelevance of the lines between design and code. When we all have the tools to express ourselves at a high level of fidelity. [00:28:00] The only thing that matters then is having an understanding of what is possible.

[00:28:03] And the fact is a lot of that is dictated by more technical topics that do require a little bit of an appetite for more of a traditional designer.

[00:28:11] **Dustin:** yeah,

[00:28:11] **Ridd:** I don't know what to do with that yet. It's just like a theme that I'm kind of noticing from this conversation.

[00:28:15] **Dustin:** yeah. It's, it's funny, a few years ago we were constantly having that conversation on Twitter about like, shit, designers, code, et cetera, and like, Personally, speaking of from my own personal take, I can't imagine doing what I do if I wasn't able to at least understand the code a bit. And like I did work full-time as an engineer in the past, so it's like I'm coming at this initially as an engineer who got into design, but there's almost no excuse now as a designer to not code because the tools have made the code irrelevant.

[00:28:49] Like if you're showing wire frames nowadays, it's like you're kind of working at the wrong fidelity because it's so much quicker to actually build a working prototype than like show a wire frame and [00:29:00] get feedback on it.

[00:29:01] **Ridd:** Mm-hmm. I've been thinking a lot about where does the line of required technical proficiency live nowadays and trying to get ultra specific because the question should, designers code is not relevant anymore. Here's my working hypothesis, and you can tell me where you think it needs to evolve.

[00:29:17] And I think it goes back to something that you said earlier where you talked about the importance of asking questions while you were trying to accomplish some kind of a goal or outcome using, you know, your code prototype tool of choice. I think it's, can you ask good enough questions to something like Cursor and then understand the response.

[00:29:36] You don't have to be able to read all this intact, but you have to be able to, at least at a high level, understand what is being accomplished and how does it roughly work. And if you can do that, I think you can build almost anything that's not, you know, deep on the back end.

[00:29:48] **Dustin:** A hundred percent. And Cursor and these other tools will like help you understand the errors that come out of it. So even if it's spitting out, compile errors or whatnot, just have sidecar another LLM to help you 

[00:29:59] [00:30:00] understand the errors that are coming out of it.

[00:30:02] So, At Browser Co. I would say all of the designers are proficient with prototyping. I think that goes to different depths. some can write Native Swift and chefs shipped to Swift apps. Some can do incredible work in origami. Some, some can do clickable prototypes in Figma.

[00:30:17] But across the board, , everyone is always prototyping and always showing prototypes. It, we are very rarely are working in static mocks. Aside from brand work, 

[00:30:28] brand work, it's very different. But then as soon as you put together a website, like our DO website is like, that will, that's hard to express how that footer comes

[00:30:37] **Ridd:** Yeah, I was just thinking of the footer.

[00:30:39] **Dustin:** So it's like everything happens in motion. I'm, I am very bullish on designers. Learning more about coding. I think vibe coding is a fantastic new world for, to be a designer. It's like such a fun, fun world now where you can build anything you think of. And now the bar is, 

[00:30:53] what can you think of?

[00:30:54] **Ridd:** I'm definitely having more fun right now as a designer than at any point in my career by

[00:30:59] **Dustin:** a [00:31:00] hundred percent. A hundred percent,


## [00:31:01] Design culture at Browser Company

[00:31:01] **Ridd:** All right, so let's talk about the culture a little bit. You talked about this idea of like, okay, design in motion, lots of prototyping. How do those prototypes get shared? How do you all collaborate? How do you all even figure out which of the many prototypes to prioritize and explore further and ship?

[00:31:17] Can you just share a bit about how design operates in practice at the browser company?

[00:31:22] **Dustin:** I think we're around 90 people as a company. There's seven designers included myself we have more recently. More of a PM function as well. And I think that has really been a good unlock for us. a lot of the team is remote, so we have kind of like a gravity in New York, but like Slack is, our Slack and notion are like our central, kind of central hub Slack notion in linear. The culture inside of Browser Co is to be always dog fooding things. So like the DIA version of DIA we have is very different than the version of DIA that is out in public because we are always, we always have [00:32:00] experiments running inside of that thing through our feature flags. we've built a culture where it's very, very natural for everyone at the company regardless of their role to give any type of feedback.

[00:32:10] So we have. People that are not trained designers given feedback at a pixel level on things is based on what they, , feel about their subjective take or their objective takes, , on designs. And that's happening all day long. You scroll through dog food and it's like, you can almost like not keep up with it.

[00:32:27] it can be kind of stressful as a designer I think when you first drop into that environment because I, I have never seen or worked anywhere in my career that gives so much constant feedback from all kind of all angles. And as a designer you just need to learn are these personal preferences? what is kinda the motive behind the feedback?

[00:32:45] Is it because they are using a giant monitor and this is not working on their big monitor 'cause they're a mouse user and everyone has been thinking about this with track pads. Really, really distilling that and understanding the. not what to listen to and what to ignore. 'cause I think you should listen to everything, but what to [00:33:00] prioritize and what to not prioritize.

[00:33:01] imagine you ha you're a designer, you're the design team, you have lots of prototypes being built, lots of ideas being explored, and you have this fire hose of feedback coming at you internally and this fire hose of feedback coming at you externally. I think what we do is we try to have really strong opinions on the decisions we make and the less product you have, the less surface area of the product you have, I think the stronger opinions you need to have.

[00:33:26] 'cause it's way easier just to keep adding stuff. I think 

[00:33:29] if anything, arc was a failure of us not having strong enough conviction in our decisions. So we just kept adding things to it where the amount of stuff we now choose to not put in, needs to be grounded in, I wouldn't say like principles.

[00:33:41] We don't have like written down principles per se, but very, very strong. Conviction in the direction we want to go. 

[00:33:47] **Ridd:** How do you put that into practice as a leader?

[00:33:49] **Dustin:** when I share my opinions internally or I share my feedback on projects, I always try to ground it in why I am giving that feedback so that at least I [00:34:00] have internal, there's internal consistency in my feedback. So it's not saying like, I don't like that. It's like, I think this could be better because of this.

[00:34:07] And I'll share always the thinking behind that. So as a leader, at least I'm internally consistent. And then as a design team, we will like say we have someone who spikes higher on visual design. I will always try to pull that person into the conversations to be like, Hey, is this matching the visual design direction that you wanted to push DIA in?

[00:34:25] And we'll just 

[00:34:26] kind of like naturally and organically, uh, pull people into the fold for those conversations. Same with like motion all designers are so different in space, spike in different ways that depending on the problem in front of us, I'll make sure the people that we're all talking collectively and then I will also make sure as a leader to like make sure the right voices are getting the chance to speak and share their thoughts.


## [00:34:47] Research and designing for every day people

[00:34:47] **Ridd:** I am gonna come back to the visuals piece. So I'm gonna put a pin in that because I wanna pull on the external feedback strand for a second and given the context that I actually remember [00:35:00] talking to Nate about this when you all were first working on arc and he, he brought up like, Hey, we dog food the heck outta this.

[00:35:06] We prototype it. We're our own end users. We're designing for ourselves, you know? And the fact is for dia, you can't really do that to the same extent, I'm sure, right? Because you have to intentionally learn from people who are not very tech savvy. So how did you ensure that you were getting outside of yourselves, especially early on, and were there specific things that you were trying to learn?

[00:35:32] And I'm even thinking about how y'all did a go to market strategy with college students, for instance. How much did that. Change the way that you learn in the early days of a new product.

[00:35:44] **Dustin:** I still feel like we're designing our product for ourselves. We all, everyone at the company still uses a web browser all day long for different, different, degrees. If you're a Slack user in the app, you're maybe not India as much throughout the day as someone that lives with all their web tools, [00:36:00] notion everything inside of the product. the work in front of us and the work that we've done better in DIA than I think we did with Arc was choosing where to hide the complexity and then understanding and being more intentional about the audience that's gonna seek out that complexity and find it. I'll give a concrete example with custom skills.

[00:36:22] So in Arc. You can make a boost, you get a remote control and you can zap stuff off the webpages. It's like, that's cool. That's awesome. We did everything, every time we shipped something at arc, we were always trying to figure out how do we help people find this thing? How do we always bring it to the surface of

[00:36:40] **Ridd:** No, you saved twitter.com for me.

[00:36:42] **Dustin:** exactly, and there's like, there's not that much real estate and you can't have that many top level buttons that make sense in a browser or that are, understandable. Dia our custom skills. I, which I think are like, I think they're really [00:37:00] neat. And for those who haven't played with them before.

[00:37:02] You can give dia slash command. So you can do slash cooking. You can give that, when you type that command, you can then have a canned prompt that runs. So anytime you type slash cooking, you can have it search your. Favorite websites, convert the recipes for a family of two versus a family of four. Just all, all on the go. That's a really specific audience that is going to understand a slash command, understand a prompt, and then actually be able to get value out of that empty text box. In Arc, we would've put a giant button on the surface. It's at 

[00:37:30] like, make a custom skill 

[00:37:31] in dia. You have to hover on a message and click save his skill.

[00:37:37] previous Arc World, we would've been like, well no one will ever find that. That is not gonna bring anyone value. And but then understanding that the curious people that will do that, we'll, we'll seek that out and we'll find it and we'll learn how to use it is kind of, we've done a better job meeting people where they are.


## [00:37:52] Evolving the visual language from Arc to Dia

[00:37:52] **Ridd:** Okay. Let's go back to the visual piece for a second. Were there intentional ways that you wanted to evolve the [00:38:00] either UI or the way that you experienced the brand inside of the product?

[00:38:04] **Dustin:** as a company and for me, I. Just as a, as a individual designer as well, because my personal design aesthetic is like very plain, no color content first. That's it. And then I had worked on ARC for a long time that is this like bright pink and yellow with gradients and smiley faces.

[00:38:24] And as a space is a different color, and you have the noise and,

[00:38:28] Exactly. And like you could click a gene texture, you could add textures to this thing, which is like so far removed from my personal aesthetic that it was always this like level of dissonance that I was just like, working through. And I was often surprised by when I would push myself outta my comfort zone with design.

[00:38:44] Like I designed a lot of the theme stuff that it would resonate with people. I'm like, that's what's wild to me, that you want your web browser to look like this. Got it. But I'll design a tool for you that can look like that. With Dia, we intentionally chose. An aesthetic that would [00:39:00] get more out of the way in order to, I think, not push people away.

[00:39:04] I think a, a clear example of this is like, imagine you are some top level exec at some finance company and you and your team have worked on all this stuff and you're about to present, present it to your boss and all the stakeholders and you open up arc and it's bright pink, there's a winking, smiley face and you're just like, uh, yeah.

[00:39:24] Like I promise, like this is like not juvenile, like what I'm about to present to you. It's like we, by going down that design path, we narrow the audience that it's interested in the product. With DIA we took a much more intentional, like the product should sit in the background, let the content come forward and let whatever you're looking at shape what the, what the UI looks like.

[00:39:45] So you know, if you're looking at a bright yellow website, you more, the browser is bright yellow 'cause that's reflective of what you're actually looking at. We still let you pick a theme, but it's much more subtle in DIA and we will forever play with these things. We might [00:40:00] ramp it up more, we might give you more options, but outta the gate, we want it to make it feel more appropriate and more context.

[00:40:07] **Ridd:** It's interesting to juxtapose the two browsers as you're talking, where I guess personalization actually always has been at the heart of everything. It was just for arc, it was more visually represented, whereas now everything is kind of happening behind the scenes.

[00:40:20] **Dustin:** Yeah. I can give a little story of like where themes came from in Arc we were getting ready to ship it and just got a lot of push that like, Hey, it's just gray. This browser is gray. It's like, yeah, I think it should be gray. I want a gray browser. It's like, no. It's like we need to make this thing have more color.

[00:40:36] It needs to stand out. All browsers are great. Make this thing stand out more Stewed on that a lot. It's like, yeah, we are new to the market and we do need to stand out, but not everyone is gonna want a purple web browser. What do we do? So where we landed was, can we let people pick the colors they want, but also let the colors serve a purpose?

[00:40:55] So an arc, it was like a way finding exercise. We're introducing spaces. [00:41:00] Let person pick a different color for every space. So then immediately, like, I'm in my purple space, that's work. I'm in my blue space. That's personal done. But then let you not have to pick a theme because we're not gonna let, you're not gonna find a theme that fits for everyone.

[00:41:12] I think in Dia we turn down the gas from like 300% to like 10%. So now when you pick the theme, it's less like taking over the whole browser because it,

[00:41:24] **Ridd:** Mm-hmm.

[00:41:25] **Dustin:** likely not everyone wants that.

[00:41:27] **Ridd:** Okay. I wanna zoom out again and talk about the design culture as a whole. You've mentioned a little bit about like the prototyping design in motion, that kind of a thing. I think I'm gonna toss a hypothetical your way as a way to kind of get at this topic a little bit more, which is, let's say something happens and you realize, you know what, I'm gonna go lead a different design org in 2026.


## [00:41:51] Why focusing on problems is more important than ever

[00:41:51] **Ridd:** How has your almost five years at the browser company influenced Your goals for what you would want to instill in that [00:42:00] new design culture.

[00:42:01] **Dustin:** this is gonna sound probably obvious and trite, but I think really even more so now than ever before focusing on. The problems you're trying to solve for someone or the job set person is trying to do, because even more so than ever in the past, it is easier and easier to design and build stuff. So then you're just gonna have this forever increasing platter of ideas in front of you that you're gonna need to choose 

[00:42:29] from. So I think if I were to go somewhere new, I would very intentionally have those conversations, interrogate the process to be like, are we actually getting to the crux of the problem we're trying to solve? Or are we just like building stuff? And it's fun to build stuff, but I like building things that people use and that help people.

[00:42:48] So, and I think

[00:42:50] **Ridd:** Hm.

[00:42:50] **Dustin:** in the future where you can immediately build anything you can dream of, it's really, really healthy to like know what problem you're chasing down and how you're gonna know when you've solved that problem. What [00:43:00] signals, if we put this into the world, we think we're solving this problem, how are we gonna know when we actually do solve that problem or not?

[00:43:06] And being very intentional about that. 'cause I think. Design will forever move up the stack further. And I think to become better and better at design, it's like helping, helping cast design in that at that light.

[00:43:18] **Ridd:** That would've been an incredibly boring answer two years ago,

[00:43:21] **Dustin:** It's true. Yeah, but it's really relevant. Like you're talking and I'm like, man, I feel that. I feel the in temptation because it's not just the ease of software creation, it's the fact that you can just plug any model in and it can accomplish a million things out of the box.

[00:43:41] **Ridd:** And so it's so easy to be like, oh, what if it also could do this and this and this? And then it's like, goodness gracious. I mean, I've been working on a project for six months and I already feel that temptation.

[00:43:51] **Dustin:** about like movie equipment, not that many years ago it was too expensive and out of many people's hands to make a movie that looked like a feature film. But [00:44:00] now for like, I. The cost of a Honda Civic, I can go buy enough equipment to look exactly or very, very close to a feature film because that has happened, you don't see all these feature films being made now that are exceptional films.

[00:44:14] You still need a good idea and you still need to have that vision. The tools have gotten better, the tools are widely available now, but it's still, what you're actually trying to say and how, what story you're actually gonna tell and what in our world, what products you're gonna build is all it what?

[00:44:28] It still matters. And I think we're just seeing that in the design world now, where the tools are how anyone can design anything they want, other robots can build it for us. The problems people have are never gonna go away.


## [00:44:39] Where to invest as a designer today

[00:44:39] **Ridd:** When you kind of imagine these futures, what are some of the ways that you see it shifting the value prop of design within an org and even what matters when somebody listening to this who's maybe a few years into their career when they're thinking about how, how do I invest in myself? I, I go on Reddit all the [00:45:00] time.

[00:45:00] It's like the number one thing on the UX design subreddit is always like, what the heck do I do? I'm motivated. I want to do something , what do I invest in?

[00:45:08] **Dustin:** if I were getting to the industry now, I would. Really, really focus on solving actual problems and have a portfolio of solving problems. And I think a clear example of that is like, it is really easy to say focus on like fun micro interactions and tweet them out and get lots of likes, but like, that is like such a, it's called micro. Think about it as like you've solved a micro problem.

[00:45:33] So it's like if you're trying to get a job and you're showing the world, you can si solve little tiny problems. Like that's not, that's not helpful. And it's like a hiring person. I would much rather see someone be like, Hey, I went to like the local food bank and I interviewed them for a week and figured what other, and I built this software for them.

[00:45:51] And look, they used to struggle with all this stuff and now this software has helped them with all of that stuff. It, it's, at the end of the day, we, we, we have to build things that [00:46:00] solve problems for humans and help humans along. So I would chase that stuff down and fill my portfolio with like actually solving real problems for real people.

[00:46:08] And explore the micro interactions. That stuff is fantastic. It's cool. I love seeing it. We, we do it in DIA as well, but like the industry is going to shift further and further away from that, I believe. And I think the value is gonna be higher and higher and higher. Can you pattern match across human problems that people are having?

[00:46:26] Choose the right tool and choose the right design to solve that problem. And I'd be really curious to see people chase that stuff down outta school.

[00:46:33] **Ridd:** I love that answer because it's also the best way to learn too. Like you talked about the importance of just getting into the tools and immersing yourself, and it's very, very difficult to do when you don't have something that you're pointing at and some definition of success. But when you have like an outcome that you wanna bring into the world, man, you're way more motivated to push past that stupid bug that is not going away, you know?

[00:46:56] **Dustin:** Totally, totally. And like your motivation shouldn't be [00:47:00] like likes and stuff on the Twitter, it should be really, really understanding how rewarding it is to see a problem, a unique problem that no one has solved before. And solving it is like, it's, it's the dream. And I think that is, that's the skill I think more and more people should be, should be trying to work on.

[00:47:17] **Ridd:** I am sure there's at least somebody listening who's kind of wondering how much that type of investment would steal from time spent, you know, refining the quote unquote craft and getting into the visual design. So do you have any take on that balance, especially as someone who, you know, you're evaluating inbound requests to work at the browser company?

[00:47:39] **Dustin:** The unfortunate answer is I think it all matters. I think it all matters. I think taste matters. I think the ability to identify and you know, internalize what tutu feels good or high craft is valuable. I think I would give myself permission if I were younger, Dustin, to like understand that there will be a gap between what I value view [00:48:00] as good design and my capabilities of getting there.

[00:48:03] And I think giving myself permission to be okay with that and know like, Hey, I see this stuff I love. I can't, for some reason my stuff doesn't look like that. Being okay with that and identifying that and even being able to like articulate that. 'cause I think reflecting on that could help you bridge that gap.

[00:48:19] So I think there is a world and I have made a career, and again, this is just my perspective out of being a mashup of many things. I'm not the best engineer, I'm not the best visual designer, I'm not the best product designer. I can just do a. Medley of a lot of it at Okay. Different levels, which then seems to bring value to the people I work with and the companies I work at.

[00:48:40] So, but I've, I know that, and I know that about myself. So when you're chasing down jobs and looking at jobs, know where you spike and where you don't spike, and then just show up honestly and candidly at that level. , Because I think it'd be unfortunate to get into a situation where you've sold yourself as something that like [00:49:00] you don't actually think you can do or sold yourself as something that's actually not interesting to you.

[00:49:05] So there's many, many ways into the design world and I think just knowing where you want to go and then giving yourself permission to be okay with your skill level, I think is really important.

[00:49:16] **Ridd:** I am gonna give you permission to brag for a second because you're describing yourself as this mishmash of skills. Maybe you don't spike incredibly high on any one skill. I think I probably would say similar about myself, and yet, you know, you've had a lot of success. You've been in these. Premier roles and people would look at and be like, okay, yeah.

[00:49:33] You know, Dustin's got something figured out, you know? So when you reflect on your journey, what do you think led to that? Like, was there a clear inflection point or a set of skills that you have refined or anything that you think that other designers listening could draw from and use as they think about their own career journey?

[00:49:52] **Dustin:** I don't know, and I think a lot of it is probably luck, and I think a lot of it was just me being in the right place at the right time and having the opportunities [00:50:00] that were in front of me.

[00:50:01] **Ridd:** You're not doing a very good job of bragging.

[00:50:03] **Dustin:** sorry.


## [00:50:04] The impact of curiosity in Dustin's journey

[00:50:04] **Dustin:** I think one thing that is true, if I look back at say like different inflection points in my career, it is that I oftentimes took on things that were out of my comfort zone. But I was really curious about,

[00:50:20] **Ridd:** Hm.

[00:50:21] **Dustin:** uh, I'll share a couple examples. I worked at a small web shop as a web developer way, way back when IE six days. And Club Penguin was a flash game company in my hometown that was being worked on. And like I had built one thing in Flash before.

[00:50:39] I wanted to be a Flash developer. So I applied at Club Penguin as a graphic designer and I got the graphic designer job and I was like, cool, I want to be a Flash developer. So then I just like found the lead Flash developer and just like talked to him a bunch and just like put myself in that situation and just like tried to learn from him and then went home and tried to build flash stuff.

[00:50:59] I [00:51:00] think just being curious about how to do it and putting yourself out there and in those situations had led me into like good situations. Same thing happened when I applied at Medium. I was living in up in Canada. I wanted to work down in the States. I was a huge fan of Twitter and F Williams. He said he was tweeted out that he was starting obvious corp.

[00:51:19] I was working as a software engineer. I assumed there were a lot of software engineers in San Francisco and maybe not as many designers. I applied as a designer even though I was a software engineer. 'cause I was like, I'm just gonna try to get out there. And it turned out he liked my work and we, we had a good chat and I ended up working at Medium.

[00:51:34] So I put myself out there a lot. have had a tremendous string of mentors in my life that I am very, very thankful for, that have like helped guide me and have given me feedback. And I think I've tried to not be an asshole. I've tried to just be a good person throughout my career and just try to realize that like it takes many people to build all of these things and paying it forward is really, really good.

[00:51:58] So I think you, [00:52:00] some things, I think you kind of get what you sow. So I think if you're 

[00:52:03] trying to be a good person, trying to be curious, I hope people will be curious about giving you opportunities as well.

[00:52:09] **Ridd:** curiosity comes up just about as much as any word on this show right now, and it's like, it feels like we're transitioning into a whole other era of this industry, and in many ways curiosity is. The almost parachute that allows you to make the jump between eras, you know? And it doesn't really matter if you're 15 years into your career, that's, I've been designing products for 15 years, but if I have no curiosity towards what's coming, I'll get dusted by people who are a couple years in.

[00:52:39] **Dustin:** It's true. And it's just like, I lead the design team here. I have a young daughter. I am trying to be a good father and partner, and it's just like cool AI's here. Now it's like, oh, I guess I gotta go learn AI now. And it's just like, you just have to keep doing that. Or like you 

[00:52:54] said, you will get dusted.

[00:52:55] And it's just like no one is going to give you a curriculum of the things you need to learn, [00:53:00] especially if you're already in a role. You gotta figure out how to do that or else. If you want to not continue to move forward with that stuff, that's fine, but for me it's like I would just want to keep getting better at my craft.

[00:53:10] So I will continue to chase this stuff down.

[00:53:12] **Ridd:** I love it. Well, Dustin, thanks for coming on, man. This has been really, really enjoyable. It's cool to hear all of the little decisions and things that you were wrestling with while you were bringing Dia to Life. Congratulations on getting out the door, by the way. It's been really amazing to just see how.

[00:53:30] Warm the reception has been, and you all have definitely deserted.

[00:53:34] **Dustin:** Incredible. Thanks for saying that. I also want to make sure this was the work of many, many hands and very, a group of very, very talented people, so I do not deserve all the credit by any means. So

[00:53:46] **Ridd:** I don't think you're gonna be the last proser co designer that we bring on, so we'll do a good job of spreading it around.

[00:53:51] **Dustin:** Perfect.
