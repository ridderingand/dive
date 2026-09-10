---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: C19H4QimihM
slug: 2025-08-08-vitaly-friedman
source_type: descript
source: https://web.descript.com/6310350b-3dcb-464f-ad48-91535d3d3c36/6bd07
guest: Vitaly Friedman
host: Ridd
title: "Beyond Chat: What's Next for AI Design Patterns"
published: 2025-08-08
duration_min: 53
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] **Vitaly:** do you remember that magical moment when you experienced JGBT for the very first time? Somebody maybe sent you a link to that chat thing and like, okay, I can do chat. And so you went in and you put, send 


## [00:00:10] State of AI design today

[00:00:10] **Vitaly:** something in a text box, and then the text box, that magical text box would actually understand you, right?

[00:00:16] **Vitaly:** This was like this, one of those magical moments that you just don't forget it easily and then you send it something and then it thinks, although it never thinks really, and then it sends you back something that seems to be even. Meaningful and reasonable, and you could ask anything. This felt like a magic box.

[00:00:34] **Vitaly:** And I think that this thing, this experience of having this first experience with magic box, this to many people, was this one in once in a lifetime moment. Like there was a before and after, and this is where excitement came from. But when we zoom out for a second. just think about it like a textbook.

[00:00:49] **Vitaly:** I mean, we've been having textbook for years. This is like, I mean, we know how to design incredible, impeccable, beautiful text boxes, right Mike? I mean, look at you. You can design the [00:01:00] textbook that would sit next to Mona Lisa and Luva, I'm pretty sure about that. Right? And then you basically have that textbook, that magical textbook and you type into it, which has a high interaction cost.

[00:01:09] **Vitaly:** 'cause people are very better at articulating intent. They're very, very bad at articulating what they want. And even if they say what they want, it doesn't mean that they mean it when they say it. It's very, very complicated. People are strange creatures. And then we need to wait. So whenever you send something to chair GBT or AI tool of any kind, you're waiting Sometimes two 20 seconds.

[00:01:30] **Vitaly:** 30 seconds. 40 seconds. Sometimes, maybe a minute. Sometimes if you go into deep research, you might wait for like 5, 7, 10 minutes. Right? But if you ever clicked, like went into an elevator and you clicked on floor four, you don't want to wait for like 20 seconds, even five seconds.

[00:01:45] **Vitaly:** I mean, it always, I'm always getting so nervous when it's just I pressed you. Why don't you just close the doors and start moving? I can't wait till like 40 seconds. Right. And then sometimes it's just repeating itself forever. It's like I always getting so confused by a lot of [00:02:00] us being, uh. Very impatient with ai.

[00:02:02] **Vitaly:** Like why does it take so much time? Why am I, why do I have to repeat myself? Why does it keep forgetting things? Why is it so annoying? Why is it so inaccurate? Why does it bring me to fake places? Why does it keep like bringing me to places where I don't want to be, and why do I have to correct it all the time?

[00:02:18] **Vitaly:** That's not me. And then I now need to learn the language of how to speak to ai. Like for example, what I really get frustrated about that we see all the wonderful prompt engineering guides. I think that maybe that's a kind of a wrong approach to this. Why should I learn how to prompt, why should all the people in the world learn how to prompt?

[00:02:36] **Vitaly:** Shouldn't AI understand me better? , Like the cost of interaction, a code of articulating intent, why does it leave on the user's shoulders? Why shouldn't be just integrated into how AI works? And so instead of chat bot, instead of text box, what if we could just have it disappearing? We still need to articulate intent, but you know what we could do, Mike, maybe, I don't know, buttons. I mean, we can design incredible [00:03:00] input boxes, right? But we can do wonderful buttons and radio buttons and sliders and check boxes and stuff like that. And why on earth is it only me who always have to ask AI something?

[00:03:11] **Vitaly:** Why does it never ask me back? About what I need and what I want. 

[00:03:15] **Ridd:** Man, just the value that can be created when you flip roles and AI asks you questions is amazing.

[00:03:20] **Ridd:** But the, almost everybody I talk to, especially people outside of tech, have no idea that that's even possible. Like that's not in their frame of reference for how this interaction can look like. And I'm like, man. That's probably over half of what I do with AI is just give it a prompt and I say, ask me a bunch of questions and then we'll make a thing together.

[00:03:38] **Ridd:** And so how can we design affordances to help people even understand that that's possible? 

[00:03:43] **Vitaly:** what's really important thing because we start is that many of those things are remarkably simple. There is no big magic. It's like, it seems like we are so obsessed with being AI first, that we're forgetting about the good old things that people are used to and people know and understand because it already lives in the mental model.

[00:03:59] **Ridd:** [00:04:00] Hey, real quick, if you're listening to this in headphones, I highly recommend hopping over to YouTube or the Spotify video player because Vitali shares a ton of really practical examples and we walk through different products and it's a lot of fun. So you could totally keep listening.

[00:04:15] **Ridd:** But to get the full experience, I definitely recommend a video component for this part.

[00:04:20] **Vitaly:** , 


## [00:04:20] Example design patterns for interacting with AI

[00:04:20] **Vitaly:** And so if we go in, let's say and explore something like, Find useful design patterns for AI interfaces. And so, or it goes and it gives me that list typically when it comes to deep research, right? And if it thinks longer, I think maybe switch over. Okay, that's not probably going to ask me anything. Lemme just change it to reason.

[00:04:41] **Vitaly:** Although it's not necessarily the something I would like to do here, but it's going to start thinking and eventually, no it's not. But if you go into deep research mode, typically it'll ask you kind of a bunch of, there a couple of sentences, right? Asking you do you want this, do you want that? And so on and so forth.

[00:04:58] **Vitaly:** And usually what you get there [00:05:00] is basically a list of questions that would appear very much like this. And then what you need to do with that is you copy paste all of that back into the text box and then to each of them, most people would say, yes, I want that. Right? And no, I don't want that. Right? This kind of story, why.

[00:05:17] **Ridd:** Yeah.

[00:05:18] **Vitaly:** Why in earth would we do that? If you go to the safer perplexity, and I do the same thing, I'm going to ask the same thing over here, find useful design patterns on AI interfaces. So if I go in and I say research now, it tells me, Hey, do you want to add some details or clarifications while it's actually working on it?

[00:05:35] **Vitaly:** Because very often people forget some critical details, and so then they have to wait until AI is done to then provide extra details. And here I can say for accessibility. Right. And so it actually does the work and then it adds that layer, that extra information right to it, right? So that's already solved this problem of actually being able to add something while AI is thinking, although it doesn't really, really think, right?[00:06:00] 

[00:06:00] **Vitaly:** So there is that, but there are of course other things that we could do at this point, because I think in many ways, like this articulation that we have to do here, It's just totally unnecessary. Because again, this is a wonderful example that comes from ky, uh, in which he wrote about this pattern here.

[00:06:15] **Vitaly:** And basically the idea is very simple. We kind of have a task builder. So what do you want to do here? I want to ask a search or explain or something else. And maybe I want to integrate it into, I dunno, slack or Gmail, Salesforce, and something like that. And maybe I want to make something out of that. So if you think about this, you can actually frame it into some of the frequent tasks that people are doing.

[00:06:35] **Vitaly:** You can say, you know what, summarize as Slack channel and turn it into a word file.

[00:06:41] **Vitaly:** Or maybe analyze some data from Salesforce and turn it into a PowerPoint. So click, click, click. And what happens in between though, is that while you have selected that to say, you know, what was that one?

[00:06:54] **Vitaly:** Search Notion PowerPoint. So I want to search in Notion and [00:07:00] make a PowerPoint so you can say, well, let me create a template for you. So this is a prompt, and of course it could be extended and augmented search, my notion for a particular topic. That's something that you have to provide and create a PowerPoint presentation summarizing the findings.

[00:07:13] **Vitaly:** Click, click, click. You'll write your topic. Done. And then you basically get the results, right? So it's kind of like task planner if you like. I think that's incredible, right? In other ways, I would also say, uh, that we can do much more than that. One really nice example of that is consensus. I love, I mean, I love consensus so many ways.

[00:07:33] **Vitaly:** If somebody's not aware of consensus yet, this is really, really great example of really good AI experience. So let me guide you. I mean, this is like going all, I'm getting too excited about this, I guess, right? But let's say we are looking for something, I don't know, like let's go for some sort of drive research.

[00:07:50] **Vitaly:** I'm not obviously expert in any of that, but let's just go for that and so just pick one and so it goes in and it actually going to try to find, answer to those [00:08:00] things that's not very surprising, right? And ask all the thing for me. Beautiful. What I absolutely love. While I was actually working on that, let me come back.

[00:08:09] **Vitaly:** And show it over here. What I love is it actually takes the good old fashioned stuff that we love and care about, like filters and it offers them for you right here. Isn't that amazing? I mean, for me it's like why? Why don't we have it everywhere?

[00:08:23] **Ridd:** so funny 'cause the pattern is so familiar, and

[00:08:25] **Ridd:** yet I don't think I've actually seen it in relation

[00:08:27] **Vitaly:** I have never seen it in any kind of AI experiences before.

[00:08:30] **Vitaly:** So sure, you can ask anything, you can ask any kind of question, but what if I want to just specify it? I want to say last five years, and maybe I'm looking for at least five citations and maybe a particular journal rank and maybe a particular methodology, right? I want to see only, I dunno, observational studies, right?

[00:08:48] **Vitaly:** And maybe case reports and you know, whatever. Things like that. And you apply it and then you execute a query with that. That's finitely more useful than just saying, ask me anything. Right. It's a [00:09:00] simple thing, but it actually makes quite a difference. And once you get the result here, now obviously you get these citations and all that and so on and so forth, right?

[00:09:08] **Vitaly:** That's, uh, not very surprising here. But one thing that they do have, which I find quite impressive is consensus meter. Because the problem with AI is that usually it gives you just an answer. So you ask the question, it gives you a statement or it gives you an overview. But why doesn't it give me distribution of overview?

[00:09:24] **Vitaly:** So distribution of statements. So the idea behind it is, okay, does urban heat island effect reduce accuracy and electricity peak forecasting? So you kind of get the distribution of, of um, what papers tell you.

[00:09:35] **Vitaly:** Right. 95% of papers indicate Yes. And if you, uh, one of them is, indicates possibly, right. And there is I guess none that indicates No. those things are helpful. And then I kind of like this layering. So on the one hand, typically in AI experiences, we have this sources. And, you know, references and stuff like that.

[00:09:55] **Vitaly:** But here they're also color coded, So green meaning this is okay [00:10:00] confirmed, right. And yellow if it comes up somewhere means that it's not confirmed or there are mixed opinions on that. Uh, so those things are little things that are really, really impressive. And then it can also filter that part.

[00:10:13] **Vitaly:** You can filter that output by a particular sentiment as well. Like we should not forget that filtering, sorting, searching and all of that stuff is great. We shouldn't be just dismissing it for the sake of, you know, AI first. If anything, we should probably be, I dunno, leaning more towards maybe ai Second, just bring the good old fashioned filters.

[00:10:34] **Vitaly:** Filters are great. I would love to see more filters in AI experiences. And it's not hard to do you just under the hood, you basically augment the prompt with some specific. You know, details that you want to be respected or so, right. But it cannot be just, you know, generating text, right? It must be actually really doing some sort of, but it must be some sort of a combination I guess between uh, just an AI that just generates text and something that [00:11:00] actually tries to understand and categorize and classify.

[00:11:02] **Vitaly:** So that's a little bit more complicated, of course, than just regular systems. But I think that it's incredible. This is what I want.

[00:11:09] **Ridd:** that was the thing that stood out to me is even just differentiating from this isn't a bullet list. We're not operating within this

[00:11:17] **Ridd:** mental model of a back and forth or a doc. It's there are controls and UI and it's all very familiar, and yet again, I haven't seen it very often in these new AI products.

[00:11:29] **Vitaly:** There's also one more thing that is often missing because remember one of the main challenges that we have is that we have pretty poor accuracy, not even accuracy. I would say that a lot of people are assuming that there will be some hallucinations and there's not very clear if you can trust something or not.

[00:11:42] **Vitaly:** And so a lot of time this sort of fixing errors or refinement journey or verification journey, whatever we want to call it, takes time. But then what I absolutely love about illicit, and it's a fantastic by the way, if you never, uh, dear friends who is going to watch the site, if you've never heard of it.

[00:11:57] **Vitaly:** It's a really, really fantastic, also well [00:12:00] designed AI tool. It does a couple of things really well, and first of all, it really tries to be accurate, so it gather sources and then it screens those sources for specific criteria that you might can select and then extracts data from that. But what I love most is these as risks.

[00:12:18] **Vitaly:** Mike, what are these asterisk.

[00:12:20] **Ridd:** I don't know.

[00:12:20] **Vitaly:** They are magical. That to me, that's truly magical because typically this would be just references to some papers, but that creates a burden again, that lives on the user's shoulder because they now have to go to the paper and find a place where this is mentioned. Right.

[00:12:34] **Vitaly:** Instead, they're linking directly to a particular segment where of that paper, right. That indicates where this comes from. literally direct linking to this segment, not even to the paper. Right? And then it can also go through a couple of mentions there to see where it's actually coming from and why it's coming here.

[00:12:55] **Vitaly:** Right? 

[00:12:55] **Ridd:** cause I'm just looking at the references and I'm like, well, do I recognize the URLs?

[00:12:59] **Vitaly:** yeah,[00:13:00] 

[00:13:00] **Ridd:** that's probably good enough. Like I trust it. I'm not

[00:13:01] **Ridd:** gonna put in the effort of actually clicking on them.

[00:13:04] **Vitaly:** Yeah. And I think that's also like one thing that's really important here is that. There is no emphasis on chat bot and so on. Yes. This is a, a center stage experience where you have to type right, or you have to choose whatever topic that you're interested in, but there is no chat bot here because at this point you are exploring the data that is in front of you, right?

[00:13:21] **Vitaly:** And sure, you can bring back that text box, um, in some ways somewhere. I'm pretty sure about that. You are kind of more in the proper exploration research mode at this point. Right. And I like that as well. And it goes also, of course, for all the other things. And I think this is incredible. This is why I think, those kind of experiences, they're totally different.

[00:13:43] **Vitaly:** They're unlike the traditional chatbots at all because they really provide an enormous speed up for people who just need to understand something and don't have the time to go through papers on their own. But then this really backs up certain ideas and concepts and [00:14:00] I dunno, uh, statements that are being then explained here in elicit.

[00:14:04] **Vitaly:** So that's, that's great.

[00:14:06] **Ridd:** I remember going through Elicit, I mean, it was probably close to a year and a half ago, and it was really, really impressive because it did feel like, wow, they did not just slap a chat on, like, AI is in the very fabric of what this product is. And the moment that I really felt that was, I think they had something, it might have changed, but when you were even setting up a research study, you could use AI to customize the columns.

[00:14:31] **Ridd:** So you're getting structured data, but you're using AI to, to structure your report and you're, you're not having to think about it in terms of this perfect prompt inside of an input. It's like, no, no, no. There's this familiarity of a spreadsheet, but now I'm just answering isolated questions of what data do I want at the column

[00:14:47] **Ridd:** level?

[00:14:48] **Ridd:** And I saw that and I was like, oh man, that makes so much sense.

[00:14:50] **Vitaly:** Yeah, we don't have that either. I think that, uh, what I started doing, and I think if I look at my perplexity, because I started setting up this sort of, [00:15:00] um, preferences and customization settings. Oh, personalization. I think it's here when I basically ask it to show results on a data table whenever it can.

[00:15:09] **Ridd:** Oh.

[00:15:10] **Vitaly:** I just find it very useful. And so this is just a sort of a, like a prompt that is being then submitted with every query that you send. So you can find it in chat g pt, you can find it in Perplex, you can find it everywhere. a way to tell AI what it needs to know about you to respond to queries better, I take it very seriously. So this is something that I try to review as much as I can, but it's limited in space, so you can't do much there. 

[00:15:34] **Ridd:** Even this text box is an interesting example because I'm looking at this, I'm like, yeah, that all makes a lot of sense. I want most of that. And yet so often my preferences boxes are empty.

[00:15:46] **Vitaly:** Hmm.

[00:15:46] **Ridd:** 'cause I genuinely like, I don't know what goes in there. I'm sure I could figure it out, but I would have to probably interact with a different AI to even figure out what should go into this chat box.

[00:15:54] **Vitaly:** Yeah. I mean, it's kind of really brings me back to also this here. This is a wonderful resource. Uh, [00:16:00] I don't know why so many people are not aware of it. This is fantastic. This is coming from Luke Benni. Luke Benni has been coming up with a couple of ideas about what could be a really nice AI experience.

[00:16:11] **Vitaly:** He has some really nice ideas in there. Like for example, something like this is probably something that you would appreciate, So the idea is a bit of handholding indeed. So when you're writing a prompt. before you even start writing here, you can be asked something like, okay, so what do you want?

[00:16:25] **Vitaly:** Right? Is it like what kind of, maybe there is a reference, maybe there is a particular level of expertise that you're expecting or anything like that. And again, these are just old fashioned UI controls, but oh my, uh, why do we feel like they are not needed anymore in the age of ai? I think that something like that would be incredible.

[00:16:42] **Vitaly:** On the other hand, he's even suggesting something like this, which I think is really, really cool too, assisted authoring for prompts. So you maybe start prompting here and then you have an AI assistant that operates on that level of the text that you have provided and say, Hey, uh, let me make it a bit more success.

[00:16:57] **Vitaly:** Let me maybe add more specific [00:17:00] context and maybe I can ask what kind of context it needs. Like, for example, writes and present for whom are looking for a presentation to executives. For designers, for, you know, maybe you want to just specify that, just ask a few questions. I think that my ultimate goal is, before anybody sends a prompt, the purpose should be to make it so succinct, so accurate, so useful, so detailed, so contextual that the chance of getting a very generic and not very helpful response is minimized, So I want to maybe slow down people in prompting, right? Slow down people and actually sending something to AI system because obviously it's like it doesn't come for free, first of all, because of sustainability. But then on the other hand, it also takes time. 20 seconds, maybe 30 seconds, depends. And then you have to look through this wall of text and then you realize that something is missing.

[00:17:53] **Vitaly:** 'cause the answer is, it's not at all what you wanted and you're missing like one important keyword in there or something like that. Then you [00:18:00] start all over again. People are wasting an enormous amount of time going back and forth with this AI output just because they missed something. So maybe we could do a bit of a, handholding indeed.

[00:18:10] **Vitaly:** Or just say, Hey, hold on for a moment. Do you mean this or that here? Right on the level of the prompt rather than the level of the output. I, I'd love that.

[00:18:18] **Ridd:** I, I totally agree because this is the perfect example of, I don't know, that prompt to me is it's a very novice prompt, you

[00:18:25] **Ridd:** know, but it's still the majority use case. People go into AI and they say, make me a thing. And if you lead with a verb, AI's gonna make something.

[00:18:33] **Ridd:** You know, it's always gonna make something. And this would be the perfect example where with a little bit of understanding of how prompt engineering works, you probably would say something like, my goal is to create an annual dah, dah, don't build anything yet. Line break.

[00:18:49] **Vitaly:** Yeah,

[00:18:50] **Ridd:** Let's have a back and forth. Ask me questions and get all of the context you need.

[00:18:53] **Ridd:** And at the end of it. You understand how to be a prompt engineer. So be the prompt engineer and write the thing that's [00:19:00] perfect for you. That gives

[00:19:00] **Ridd:** you all the context you need to write. Make something that is good,

[00:19:03] **Ridd:** but like maybe 0.1% of the worldwide population understands that that's the interaction that you have to have.

[00:19:09] **Ridd:** So how do we productize that? 

[00:19:10] **Vitaly:** absolutely. I think that it's like the, the story there is like when we are looking at all the frameworks for prompting, in many ways they have a particular structure, right? So why don't we just replicate the structure in a way that people don't have to remember it. Like for example, this is another pattern from here as well, which I think is great.

[00:19:26] **Vitaly:** Maybe we should do just that. Maybe this should be the start of the AI experience rather than the chat bot with open Xbox, right? Hey, uh, main prompt, uh, context, background, output details. And you know, sometimes you say act as a UX designer, right? Or act as a financial advisor, anything like that. So maybe we should have that structure somehow reflected right here.

[00:19:46] **Vitaly:** So as you write it, you know what to write because if it asks you, ask me anything. So what are you supposed to do Exactly and how would you structure that? So this I think is really powerful. I mean, those little [00:20:00] things are not difficult, it's just UI stuff. It's really not hard at all, but then you're augmenting whatever people are looking for with this stuff in a more structured way and give them sort of a structure to operate within.

[00:20:12] **Vitaly:** And then you end up with a better experience as well because the input is better. And so the output would be better. 

[00:20:16] **Ridd:** Anything else on chatbot land before we, it is kind of like a broader spectrum of AI things that I wanna get your take on.

[00:20:25] **Ridd:** Uh, but this is like one of the main things that I'd love to hear you talk

[00:20:27] **Vitaly:** Yeah. I, 

[00:20:28] **Ridd:** I'm curious if there's anything we haven't mentioned.

[00:20:30] **Vitaly:** think to me it's really slowing down People when they are trying to articulate their intent is really, I think, important. if they are fast in the beginning, then the slowness of AI really breaks this experience for them. But if we kind of keep them for a moment and ask them something that we need to know in order to give them a better response, right, then it's actually a better place.

[00:20:52] **Vitaly:** The only thing I would say is that So when you're asking something like what are common patterns and heuristics, designers should be thinking about when working with AI [00:21:00] products, right? Instead of asking you to type, it gives you radio buttons

[00:21:04] **Vitaly:** or check boxes, whatever, right? This should be it, right? Instead of saying, Hey, answer that question, then answer that question, then answer that question, can they just go and say, boom, boom, boom, boom, boom, go, And if you want to skip, you should be able to skip then as well, right? So if it's kind of really slows you down in that way, it's not like you have to type all the time, But you just go. Because very often what we see is the opposite. We see that when you start deep research, JGPT, for example, before it even goes into deep research mode, it'll tell you, well, before I even start doing the deep research, here are a few questions that I would like you to answer.

[00:21:38] **Vitaly:** And then there maybe six or seven or eight questions, and then you have to copy paste them all in other text box and then answer each of them. But why don't you just give me, I don't know, read your buttons, text boxes, sliders instead, for each of those, I can answer directly without copy pasting anything.

[00:21:53] **Vitaly:** I can basically select and choose my journey and then off you go and you can do your thing. I think in many ways this would be [00:22:00] remarkable. Right. , 


## [00:22:00] Dynamic interfaces in AI

[00:22:00] **Ridd:** Something that comes up a lot is this idea of a dynamic interface, something that AI is generating on the fly, and it was like all the rage, and then it's kind of trend it down a little bit and people are like, you know what, actually, predictability is nice. And yet for that type of interface that you were showing with perplexity, this is where it's like kind of the sweet spot where

[00:22:20] **Ridd:** dynamically generated interfaces that have the sole goal of context extraction, that is like killer because you're always gonna only need the most basic atomic components that users are already familiar with, and you're just tailoring some kind of a set of controls to get people to be a little bit more specific about what they want. That feels like, yeah, you might see that in almost all of these tools here soon.

[00:22:45] **Vitaly:** Yeah, I hope so. I hope so. I mean, it's also kind of the story about how exactly we capture user's context, right? Because in the end it's all about that, right? It's, it's just all about that. I mean, there are different parts of the journey, Where obviously people need to articulate, then they need to [00:23:00] be going through this wall of text, And then they need to do something with it. Very often they want to extract, or they want to compress, or they want to expand. Like there are many, there's a lot of tweaking here and there that is happening too, right? Because they just want to get to the right thing, whatever that is, and maybe send it to a manager or create a presentation or something.

[00:23:19] **Vitaly:** But they want something valuable. And I see in testing, it's so funny because people take the output from ai. And then they look at it and read it and check it and verify if it's all right, more or less or not. And then they cherry pick. They take maybe the first paragraph and then the second and maybe the seventh and maybe the 12th, and they pull it all in.

[00:23:40] **Vitaly:** Its separate place, like maybe in a text data or something like that. And then they do the editing there, and then they bring it back to chat, GBT or so to summarize it for them and restructure it in a meaningful way. This is weird. Whenever you have a dedicated space for whatever they're doing here, that's not great.

[00:23:58] **Vitaly:** We need to reduce the [00:24:00] distance between where people want to do something and when they do that, this is really important because ideally I would love to be able to have an option to, if I go back to GGPT here, to say, hold on for a moment.

[00:24:09] **Vitaly:** I don't need this. Can I just remove this part? Well, I cannot because I can just have a conversation about that. So I need to bring it, copy it somewhere, and then move from there. But again, coming back to perplexity and I kind of like perplexity for a lot of things can say, hold on for a moment, let me kind of go into editing mode.

[00:24:26] **Vitaly:** It might be just not as visible or not as clear. Can say, convert it to a page. So once you do that, it kind of goes through it and it kind of creates an article or a page on that topic, But what's important for me is that it has a table of content that you can navigate within. It's, we'll see in a moment here so you can jump to a specific area while it's working.

[00:24:45] **Vitaly:** Maybe, um, this kind of something that you also see here on consensus, by the way. Have this way to navigate. So if I ask a separate question, right, I can go and jump to that question or to the previous question, I can really kind of navigate between that [00:25:00] response, right within that response. And then in here, back then back to perplexity here.

[00:25:05] **Vitaly:** So I get this text being generated. 

[00:25:07] **Vitaly:** You will be in a moment able to do something that you, I don't think you can do anywhere else because of the way of how it's actually designed.

[00:25:14] **Vitaly:** Because it kind of, I think it really maps well into how people use AI as well. Here we go. Yes it can, but it's broken somehow. Ooh, this is not what was supposed to happen. This is supposed to be context menu where you can actually add

[00:25:29] **Ridd:** it. It's just missing the background.

[00:25:31] **Vitaly:** Yeah. I'm not quite sure why, I guess because maybe 'cause I broke it, but kinda the point is of this, right?

[00:25:36] **Vitaly:** And I can say, now go and say, let me just change that and maybe remove this part or extend this part or do something with it. Right. Can I write extend more? Okay. So it's probably will be extend. at this point. Yeah, so it will, right. So kind of really operate on the level of that output, Uh, which is something that you cannot do much in other places, right? So this is nice. And [00:26:00] then you can of course also say, I want to move columns around and add some sections and also have this little, you know, different use. I want to have a table on something, right? Why isn't this everywhere 

[00:26:10] **Ridd:** Yeah, I have not seen that.


## [00:26:13] Why we need more old-school affordances 

[00:26:13] **Vitaly:** So simple. So I want, uh, instead of saying, please write down in a list format or in a table format, or anything like that and make it compact or something, I think that this should be everywhere. I mean, just everywhere by default, like in every single AI experience. Because in, I mean, it depends of course, on where it's used, but I think in it has incredible value.

[00:26:34] **Vitaly:** I mean, maybe not this because you kind of adding images or so, but this, and maybe this, it's great. Right. So I, I'm mainly a little bit obsessed with this because I think like, in, in some way I feel like the, we can do so much better. I mean, this is not difficult stuff. I mean, by no means this is something that we just forgotten to use because it getting a little bit too excited about AI hype

[00:26:59] **Ridd:** I could see [00:27:00] maybe like an auto at the beginning

[00:27:02] **Ridd:** where it's like, okay, if you don't wanna make the choice, fine, we'll,

[00:27:05] **Ridd:** we'll do the best that we can. But this is such an intuitive little control that I would use it every single day.

[00:27:11] **Vitaly:** Me too. Yeah. So that's, uh, kind of the part of the story and I think, I think that there is a lot of innovation, I have to say. So it's like really moving very, very quickly. I like, for example, in Germany, when you're searching for, I dunno, how do windmills work, for example, right? And I go in here. It also takes a bit of time.

[00:27:29] **Vitaly:** You see, they're like always waiting and we are kind of, uh, taking this for granted. People are very impatient. If anything, they become way more impatient over the last couple of years. 


## [00:27:37] Taking advantage of loading states

[00:27:37] **Ridd:** I'm almost now wondering if this is the right place for some of that context extraction too. You know, like you almost assume that you have this first lightweight prompt and it's like, can you already get information that you would feed into the next prompt

[00:27:52] **Ridd:** while you're processing the first one?

[00:27:53] **Ridd:** And I bet people would be totally fine actually waiting much longer. It reminds me of something that the Gamma [00:28:00] Head of Design said,

[00:28:01] **Ridd:** and he talked about how when presentations were being generated, they then prompted people to work on the theming and you can

[00:28:08] **Vitaly:** Oh, makes 

[00:28:09] **Ridd:** of the theming controls and then people all of a sudden they didn't care about how long it was loading 'cause it took, it gave him something to do.

[00:28:14] **Ridd:** Maybe that's the place to get some of that extra context.

[00:28:17] **Vitaly:** mean, the case of perplexity is just asking for more context, right. As well. So this is like, uh, we can keep people waiting or we could give them something to do to create a more meaningful output. Right? So that makes perfect sense to me. I mean, one thing that I really liked, um, about Germany is that they have this one thing.

[00:28:34] **Vitaly:** Where is it? I think it was maybe not in every model. Oh no, they do. Uh, they have double-check response button. And I was like, for a moment I was thinking, what does it mean? So if you click on it, so it basically tries to go through its output, And try to find any sources that actually back up, uh, whatever the check is doing.

[00:28:53] **Vitaly:** So if there is anything, no, I don't see any highlight here typically. Right. It becomes [00:29:00] green if Google found content. That's slightly similar to the statement and something that's slightly different from the statement is highlighted this way. Just usually it's highlighted, but here doesn't I can try to verify sources to make sure that it's actually right. So for example, sure hallucinations is something we cannot fix yet, right? But if you could say to, you know, GGPT and perplexes, you know what, go through all these links and just make sure that they exist.

[00:29:23] **Vitaly:** Or maybe it should actually be a default mode anyway, right? Although it probably would take a bit more time there too, right? So, those things are very, very simple adjustments and refinements, but I think that they all compound over time. So once you bring, the selection of a format, once you bring, more content, more structured prompting, once you bring a better way to navigate the output, once you bring in the distribution of results rather than just the summary, those things really compound.

[00:29:49] **Vitaly:** I want to see AI products that people fall in love with, and I don't see people falling in love with. I mean, I know that prop complexity, people working on prop complexity and cloud, many other [00:30:00] things. They absolutely love the tools, but I want people to feel, wow, that's absolutely amazing AI experience, or just experience because people don't think about it this way.

[00:30:09] **Vitaly:** I want them to really be helped, right? To find a lot of value so they don't waste time in front of the screen. Navigating through the output, finding the ways to copy the text, to edit the text, to tweak the text, to bend the text, to ask something else, to add more context. It's a story. It's like it's usually takes quite enormous amount of time, which is very often just maybe not necessary to do. 


## [00:30:33] Designing for trust in AI experiences

[00:30:33] **Ridd:** Anything else that designers should be considering if the goal is to maintain this trust in an AI experience?

[00:30:41] **Vitaly:** I would say the best way to get to trust is to provide accuracy. Unfortunately, we just can't do that really absolutely reliably with AI like we do with Azure, with software, right. scoping would be very important there. And so scoping is kind of get to the, the same idea as kind of gathering enough context.

[00:30:58] **Vitaly:** But what I mean by scoping, But [00:31:00] basically we want to make sure that people understand where they are. Uh, very often the problem is that they might be asking a question, but to get that notion of trust, they need to understand where the answer is coming from. Typically, it's the internet. and the internet cannot be necessarily trusted.

[00:31:17] **Vitaly:** So if you want to elicit trust and build trust, we're gonna need to show sources. And it's actually also quite helpful to be able to indicate what is the domain or the scope that is respected for that query that the person is submitting, right? So it could be not necessarily a file like it is over here.

[00:31:35] **Vitaly:** It could be like these little filters, like let's say experts with 20 years of experience, right? Or anything like that. And in fact, nothing is being displayed most of the time. We don't see any reference about what specifically was kind of explored or studied. It seems like it's almost random. Maybe it actually is, right?

[00:31:51] **Vitaly:** I'm not quite sure how everything is working under the hood in some of those AI engines, right. But maybe it would be a good idea to say, okay, these are the, not just the sources [00:32:00] of where it's coming from, but more global scope. for this query, we consider 279 pages from experts who seem to be credible and have this level of expertise and have at least this degree in, I don't know, whatever in healthcare, So anything like that could be quite helpful. Right. And on the other hand, what I would also say is probably the best way to build trust is to reflect back to people that they understood. And the way to do that is through. Kind of highlighting what we assume or what we believe in.

[00:32:33] **Vitaly:** Uh, just to give you an example, uh, che g pity, and also everybody else as well at this point have memory, right? So if you go to customized che g pity, there are some things that you can say to AI about yourself, right? I think it's kind of in preferences in settings, right? So is it personal? Yes. So you can actually have memory.

[00:32:51] **Vitaly:** So you can basically reference safe memories and also reference chat history. You can also manage that, right? So basically you can say, you know what, dear GBT, [00:33:00] remember that I like carrots. Do you like carrots, Mike?

[00:33:05] **Ridd:** Uh, they're okay.

[00:33:05] **Vitaly:** Hmm. That was not very exciting. Alright, here we go. Remember that I like curs. And then of course it does, it remembers it.

[00:33:12] **Vitaly:** So next time it'll actually, if I ask something like, give me a recipe for dinner. It might give you, oh, here we 

[00:33:19] **Ridd:** Look at that. There 

[00:33:20] **Vitaly:** Look at that right there. I didn't even tell JGPT to do that, but now it knows, right? So that's nice. That's great. It can also tell me, hey, like maybe it could be like a, you know, batch right here, a vegan, right.

[00:33:34] **Vitaly:** Carrots or whatever else that I like just to reflect back to me that I know you, I, this is where it's coming from. It doesn't have to be like text. Oh, here's a vegan carrot for what dinner recipe. That is simple, flavorful, and satisfying. Maybe you don't have to write all of that. Just write me vegan because you're vegan carrot because you like carrots and whatever else.

[00:33:54] **Vitaly:** Right. Just as an indicator, as a signal that it understands why. So it kind of explains [00:34:00] why it's coming with this, 

[00:34:01] **Ridd:** I like that too, because then you could turn off carrot and you all of a sudden have a one click

[00:34:04] **Vitaly:** Yeah, yeah, yeah. Exactly. Right. Exactly.

[00:34:07] **Ridd:** to eat carrots tonight.

[00:34:08] **Vitaly:** Exactly. So you can kind of build it up, or maybe it could be a dropdown. We can select something else, right? But instead we're just dealing with text.

[00:34:15] **Vitaly:** And now if you want to say, okay, I don't like, I don't want carrots today. I do like carrots. Don't remove carrots from my memory, but I don't, but I don't want to have carrots today. That becomes a story. 

[00:34:25] **Vitaly:** And you cannot just tweak and say, you know what? Make it more, I dunno, uh, more mushroomy, I don't even know what it means.

[00:34:32] **Vitaly:** Right? I want more mushrooms, make it more mushroomy in a way. There is no way, there is no tweak in that. There is no button on that. Right? And now it asks me a question, right? And then I have to go again and type,


## [00:34:43] Designing the refinement journey

[00:34:43] **Ridd:** And if you do want to iterate on it, you would probably go down this path that would lead you to eight full responses stacked vertically, which all of a sudden becomes very difficult to parse.

[00:34:52] **Ridd:** Where in a perfect world, I almost want like, okay, here's the ingredient list and I wanna be able to perform like item level interactions.

[00:34:59] **Ridd:** And

[00:34:59] **Vitaly:** [00:35:00] And maybe even to do this like a checkbox, 

[00:35:01] **Ridd:** Yeah, exactly. Or like even exploring things. Maybe this isn't the perfect use case for spatial exploration, but I'm really, really interested in canvas based workflows right

[00:35:11] **Ridd:** now. And this would be a perfect example where I'm like, okay, this looks pretty good, but there's like this chunk, I don't, maybe I don't have these ingredients.

[00:35:17] **Ridd:** Okay, now let me just isolate that and iterate on like, okay, what can I do instead? And maybe I wanna try three different things and then,

[00:35:22] **Ridd:** okay, this is the one, and I insert it back in, rather than having this like really repetitive output over and over again.

[00:35:28] **Vitaly:** Yeah. So this kind of refinement journey, I think that these are, they're the most painful ones because if you need to tweak now, well you need to kind of see, okay, what else? What from this do I need or do I want, or what do I not want? And then you say, maybe more like this. Maybe more like that. And it's, this is a horrible input.

[00:35:45] **Vitaly:** More like this, more like that. Because I mean, you have to copy, paste whatever it is that you like and say, I have this. I don't have that. this is just a waste of time. So we could actually have a more interactive experience here, right? By breaking this down into some, um, [00:36:00] topics.

[00:36:00] **Vitaly:** I mean, of course it'll be happening later because once the output is generated, is generated token by token. So at this point when you're generating it, you don't know what's coming up and you don't know maybe necessarily what it's going to be like. But then you can actually do this sort of post-processing potentially and say, uh, present it as this.

[00:36:15] **Vitaly:** Or maybe could have this little button here saying to do list, make a to do list out of that, or whatever, right? But when it comes to a table to a list, it could be presented this way. those things really feel like, okay, give me a break. This are just little niceties, right? I think they're compound and make a different compound and make a difference between people just spending a few minutes on a task.

[00:36:39] **Vitaly:** People spending 20 minutes on a task that can make a difference, especially when you do some sort of profound research. And again, also this kind of interaction or navigation between these turns. So if I ask something else, now I have two walls of text I need to go through every time. And if I find that, okay, this is not what I want at all, so let me go back.

[00:36:59] **Vitaly:** If you have like [00:37:00] three or four of them, that becomes a story, but not here. Right? Because if I go and I ask a follow up question, let me just add it in here, something like, um, specifically related to research in Iceland. Okay, greeting stereo. But who's watching us from Iceland? By, by the way? Oh, there is one 16 sources.

[00:37:21] **Vitaly:** Excellent. Right? But now I can say, hey, here is a navigation between these two different queries. Right? So I can also delete one if I don't find it relevant to me. Right? Let me go back 

[00:37:33] **Ridd:** Wow. Such a little detail.

[00:37:35] **Vitaly:** Yeah. I love 

[00:37:36] **Ridd:** great. Yeah, It's 

[00:37:37] **Vitaly:** really, really nice. And then again, this option to delete is super helpful too.

[00:37:42] **Vitaly:** So you just get what you need.

[00:37:44] **Ridd:** Yeah. 'cause if you don't do something right or you get this wall of text that isn't as relevant as you thought it was gonna be, it's now this permanent part of the

[00:37:51] **Ridd:** record drives me crazy. 

[00:37:53] **Vitaly:** Or you have to restart the conversation over again and kind of asking the same thing. these are all just really kind of small things that do add up. Um, maybe one [00:38:00] thing, uh, one, one thing I would like to show, if 

[00:38:02] **Ridd:** Yeah. Please, 

[00:38:03] **Vitaly:** So this is Xa. Xa is also pretty cool. And I think you can see quite a few tools doing that because there is a lot of different kind of interaction modes.

[00:38:12] **Vitaly:** I mean, we spoke just about chat, right? But of course there is also voice, and voice is usually very difficult to deal with in general. But there is also a way to present data in a slightly different way, like a data table, but maybe almost like a data grid. So there is websites here. And websites here, you can actually look for things and it kinda gives you this list, right?

[00:38:33] **Vitaly:** The reason why I wanted to show this is because it's actually really interesting of what it actually does. So if I took, let's say something like founding engineers at ai, startups based in Seattle, get me the technical strength and seniority. What I love about this is that it also takes the prompt and then it breaks it down into kind of almost like UI controls.

[00:38:55] **Vitaly:** So it says, okay, I'm going to break it into themes. So first of all, I need to find founding engineers at the company [00:39:00] developing AI products and services. That's about right. Uh, company's classified as an AI startup. That's about right. Person is based in Seattle. Seems to be right. And I can also add some other criteria here and say, engineer, founding engineers, right?

[00:39:16] **Vitaly:** any preference that I have, I have no idea what criteria to add 

[00:39:19] **Ridd:** proficient in React.

[00:39:20] **Vitaly:** Oh, here we go. Proficient in React, right? Here we go. Right? I can also exclude some things, which again, no AI allows you to do. So it's kind of like literally filtering, right? You can say, oh, hold on for a moment. Depending on what I'm looking for. Gives me a way to add enrichments. So what else do you want to know from them?

[00:39:38] **Vitaly:** Is it just text strength? Maybe years of experience, graduation date, anything else that you find relevant? And how many results do we want? So it basically creates a table with all this information pulled out. And because I told it I need 25 results, it'll actually try to find as many sources as it can to give me 25 results.

[00:39:57] **Vitaly:** So I will get a spreadsheet with 25 [00:40:00] results, and they all can be filtered with all the data for each of those things that I find relevant for me. So I can compare it and I can sort by it. Why on earth don't we have an option to sort and filter results that we're getting from ai? Isn't it the most obvious thing ever?

[00:40:17] **Vitaly:** And I mean, I'm, I mean, not that I'm coming across probably the most grumpiest person ever, right? But 

[00:40:22] **Ridd:** you've done your research. 

[00:40:23] **Vitaly:** yeah. But those are little, little things really that can tremendously improve experience tremendously. And they are things that we are used to in software, but for some reason they never really make it to ai.

[00:40:36] **Vitaly:** I'm not quite sure.

[00:40:37] **Ridd:** A couple more questions maybe


## [00:40:38] Quiet UI vs. Visible UI

[00:40:38] **Ridd:** before I let you go, and I kind of wanna zoom out a little bit. There's another design challenge that I've experienced as someone working on a product that involves a lot of ai, where you kind of have this spectrum on one end you have the more disguised AI and everything's happening behind the scenes and on the other, you know, you're just slapping sparkle icons [00:41:00] everywhere.

[00:41:00] **Ridd:** So there's like the spectrum and basically every designer has to figure out, where do I fit onto that spectrum? What advice do you have for that person? Well, how are

[00:41:08] **Ridd:** you thinking through that challenge? 

[00:41:10] **Vitaly:** I dunno why, but this is like something that I also observe, and this is something that, um, we call quiet AI versus visible ai. So there are a few tools, like for example, dovetail, uh, dovetail is a tool for researchers, which allows you to record sessions and find insights and create reports and kind of, and all the good stuff that researchers need to do.

[00:41:29] **Vitaly:** what was really surprising to me is that there is no sparkles there 

[00:41:32] **Ridd:** Hmm. 

[00:41:33] **Vitaly:** none. Basically what you have is you take a close look at the user journey and you look at what people need to do. Well, they need to be able to record sessions, they need to do recruiting. Okay, maybe AI can help with that, right?

[00:41:45] **Vitaly:** They need to find some insights. Okay? So maybe AI can help with that. Uh, maybe you also need to redact some sensitive information that people are providing. Well, AI can help with that. So you basically take a look at the existing journey, then you sprinkle a bit of AI all across it [00:42:00] to either reduce frustrations or improve or speed up successes, right?

[00:42:05] **Vitaly:** And so that's the quiet, it's kind of all indeed as you're saying, like kind of happening under the, under the hood. But on the other hand, we have these experiences where it's kind of almost feels like AI first. And I'm a little bit allergic to AI first in general, because I feel like, well, it's like saying JavaScript first, or I don't know, ships first and containers first, right?

[00:42:25] **Vitaly:** Or anything. Right? Technology's here to serve and to help people get somewhere. So if anything, we should not be that obsessed about uh, ai, but to be absolutely obsessed about humans because they are the ones who are kind of using that technology in the end, right? So we really need to do a lot of research and understand what do they do with ai, not what we do with ai.

[00:42:46] **Vitaly:** I mean, we can do things with ai. I mean, we are technologists, if you like, right? But we need to be obsessed about how people use that thing, right? And so for me, the really important thing is not to say AI first, but maybe AI [00:43:00] second. Not AI loss, but we need to think about what is it that AI is good for in our product that we're delivering, right?

[00:43:09] **Vitaly:** So what value does it bring? And then we see where people struggle in getting that value and where we can actually boost that value even further. If there is certain thing, a certain area, let's say, where people lose a lot of time, they waste a lot of time going back and forth and maybe they don't know what they want necessarily, so we need to guide them somewhere, right?

[00:43:28] **Vitaly:** Well, maybe I can help there and that's great, but it's not the thing. It's not the value generate. It's sort of a path to the value that AI provides. It has an incredible opportunity. We just just have a thing that we haven't really unpacked properly yet. Right. And so personally, I would say I would look at user needs.

[00:43:46] **Vitaly:** I would look at what people. Where people struggle and then boost it all up with a bit of AI to see that we can maybe really help people there. But also on that journey, I think it's important that we allow [00:44:00] people to reduce that interaction cost that we were speaking about before, like kind of articulating what is it that they want and so on.

[00:44:07] **Vitaly:** And also helping them in the cases where they kind of are struggling with the output and they want to refine it because AI doesn't come for free, ? It feels like it's magical and can do everything for us, it comes with a tremendous cost. I mean, there are many, many different layers from indirection costs and fixing errors costs to compute costs to energy costs.

[00:44:26] **Vitaly:** It's like no, technology comes for free. We just need to be aware of that. And so when somebody submits a prompt, I want that prompt to be almost perfect. Almost ideal. So I know everything that I need to know to really generate something meaningful. Otherwise, it's just waste of time and energy and everything in between.

[00:44:44] **Vitaly:** personally, and I'm not trying to be difficult, but I, I guess I am, I would probably go with a, or quiet AI direction rather than loud AI also, which is very funny. Um, there was a research done by Think by Normal Nielsen Group, and what, uh, they discovered is [00:45:00] that actually when people see AI as a label or batch somewhere, it's not necessarily a good thing because people are not looking for AI features.

[00:45:08] **Vitaly:** They're looking for features that work. They might happen to be, you know, AI or not, right? But it's not necessarily something that customers really appreciate. Like, oh, this, they have AI feature now, where is that AI feature? Right? it can even have this opposite effect where if, because it's ai, it's maybe untrustworthy, maybe it's hallucinating, maybe it does that and does that.

[00:45:33] **Vitaly:** So I would always run the test to say, okay, this is an AI feature, or AI powered, and this is just a feature or a product. Right. And see what works better. I would not be surprised if there was, there will be no difference at all. 

[00:45:45] **Ridd:** I can already feel it for myself, where I just assume that I'm gonna be upsold when I click on an AI feature.

[00:45:52] **Ridd:** And because it happens so many times, I see little sparkle. I'm like, oh, that's interestingly click, and it's like, you have to upgrade to our our next plan.

[00:45:57] **Ridd:** I'm like, man, I'm so tired of

[00:45:58] **Ridd:** this. 

[00:45:59] **Vitaly:** but, but you know [00:46:00] what, this is interesting, right? Because I think that this is an issue that a lot of people have because they realize that even in, you know, whatever tool you're using, people are running at the limits of the credits very quickly, much faster than we think because they think like, Ooh, I'm just going to go further and just play a bit more and play a bit more, experiment a bit more, right?

[00:46:16] **Vitaly:** And before you know it, you're running out of credits and then I mean, it can be affordable, but it can be very expensive too. Not everybody wants to pay like for pro of like plan $200 a month or so, even if produces incredible deep research and whatever, right?

[00:46:31] **Vitaly:** That's expensive. I mean, that's really expensive, right? And so when you're hitting limitations of a tier, this is it. This is the end of the journey. And the goal is I think that a lot of companies are realizing that now we need to get people to, uh, to some success within the credit fund that they have.

[00:46:49] **Vitaly:** And that does not mean give them the free form textbooks to do whatever they want because then they hit that limit very, very quickly. We need to guide them to make that prompt small, [00:47:00] right, and accurate and concise so they don't prompt more. They should prompt less but better, right? So we need to give them some success in the first session before they hit the limits of the free tier.

[00:47:12] **Vitaly:** But if they just keep going, keep going, keep going, keep going. It might be either very expensive for the company because they're just using too many credits, right? Or they'll be hitting the limitations too fast and then there is no value either way.

[00:47:24] **Ridd:** before I let you go, one final question and I kind of want to just look a little bit further into the future and get inside your brain a bit. You're obviously thinking about all of these different UX principles and how they evolve and these emergent behaviors that we're seeing as much as basically anybody that I know.


## [00:47:40] The future use cases that Vitaly is excited about 

[00:47:40] **Ridd:** So when you kind of look in terms of. Where this is all headed. Maybe it's more agentic behaviors, maybe it's just different ways of interfacing with ai. What are some of the things that you have your eye on right now that you are particularly excited to see unfold?

[00:47:56] **Vitaly:** Yes. I think that there's a lot of excitement about agents, [00:48:00] but in practice as of now at least, uh, there is very little. Reliability, uh, in that space also, because agents always come with some guard rails that you need to establish. That means permissions. That means you need to have some sort of approval layers and things like that.

[00:48:16] **Vitaly:** It's, I mean, nothing comes for free, right? It's can be quite challenging to put together in the first place. But what I really believe in, and I think that's, you know, if somebody is watching this 20 years and I'll be thinking, what the hell were they thinking back then? I think that we will probably not end up seeing a lot of prompt engineering guides anymore.

[00:48:38] **Vitaly:** I think that in the end it'll be just a part of ui. I think that it's, at this point, like all these little things will be just natural. We just doing, like some people would say, I think it maybe was a head of design perplexity who said that in many ways AI could be perceived very much like fancy new thing that will be very much like auto complete Now.

[00:48:56] **Vitaly:** Just everywhere. A little bit of that, a little bit of this, a little bit of AI [00:49:00] here, a little bit of that here, but not really properly advertised as the big new thing. One significant shift that this to me is that we're probably moving to the world where we are.

[00:49:10] **Vitaly:** Becoming more, less tactical and more strategic. In many ways, that means that, you know, not that they passes by without somebody on the fringes of the internet telling us that we're going to be replaced by ai, and if not ai, that's going to replace it. Then people who know and understand and get AI will replace us.

[00:49:28] **Vitaly:** And I think I disagree because I think that there is an enormous value that humans bring to the table. not only in terms of like critical thinking, emotional intelligence and so on, that goes without saying, but to me there must be somebody who has a vision about where the hell it's going.


## [00:49:43] How AI changes our role as designers

[00:49:43] **Vitaly:** I don't, I don't believe, maybe for now, maybe I'm just naive, but I don't see products being designed and developed by AI to serve people at the best way possible. I mean, to be able to create this connection, almost like a strong [00:50:00] emotional connection with the product. but I must see people working on it who put a lot of thought into what my experience is like.

[00:50:06] **Vitaly:** And I'm not sure if any AI can out care and outlaw this attention to details that people bring to the table. in the end, what I think is kind of us humans, right? Moving away from the work that we're doing, yes, it will change and it has already changed and it'll be shifting further. I'm not, I have no questions about that, but that only means that what we're doing will be different.

[00:50:26] **Vitaly:** We'll be just orchestrating those AI experiences in some way. The other, maybe with agents, maybe with agents who have subagents and whatever, right? But somebody must be guiding and orchestrating and kind of creating this experience for people because AI is very good at creating experiences, but I'm not sure if it's creating experiences for people.

[00:50:46] **Vitaly:** I want to see people who kind of come to a website, to an AI product and say, this is amazing. I absolutely love it. I want to use it every day. That they feel like extremely passionate about it and they really, really want to use it because they fell in love with this [00:51:00] interface because of how it understands people's needs.

[00:51:02] **Vitaly:** It understands what people care about. It understands when to say things in certain way and what not, when to adapt a particular tone and voice. And maybe AI can do that, and I'm not trying to be like one of those people saying, no, ai, forget about ai. It's not important. It's, uh, you know, we are the people, right?

[00:51:20] **Vitaly:** Uh, but I think that there is an enormous amount of value that we bring to the table. We just shouldn't forget that. And what I'm expecting. Is that we need to see that there are a lot of things that AI is very good at. There are a lot of things that humans are very good at.

[00:51:33] **Vitaly:** What I want to see are wonderful human first experiences that happen to have some AI components in them. That's what I want to see. Right. Where you kind of have the marriage of both. 

[00:51:45] **Ridd:** Yeah. Well, I mean, I couldn't agree more and really, really appreciate you coming on and getting super specific about things too. I mean, this was just fun to see

[00:51:55] **Ridd:** how you are interpreting the space and, and what you're paying attention to and what you're [00:52:00] studying. So really, really grateful. Took time

[00:52:03] **Vitaly:** Oh, no, thank you so much for having me. I mean, I, I, I can be here tomorrow, uh, and definitely tomorrow. That's no problem. Uh, at all. I think that's the, the main point for me is that it's, there is enormous amount of. Value in finding those little details because I think that they can really break and make an interface or make an experience.

[00:52:19] **Vitaly:** It's like when those things really come together, they really do compound and then you have a very different experience. I mean, I think like the very first AI product that I fell in love with is actually this one, which is consensus. I probably would use it even if I didn't find anything meaningful for me there.

[00:52:34] **Vitaly:** It's just a great AI experiences. I would love to see more of that.

[00:52:38] **Ridd:** I mean, I hope that's what this episode does for people is even gives a little bit of a finer lens that designers can use to interpret some of the AI experience that they're playing with, and also to see the tiny, subtle details and opportunities that they can take advantage to make these products something that are truly usable and not still just riding the wave of these new [00:53:00] technological capabilities.

[00:53:00] **Vitaly:** let's, uh, let's wait and see. I guess maybe once we watch this like 20 years later, so thinking well, they had interfaces back then. That's interesting.

[00:53:10] **Ridd:** Uh, I love it. This has been fun. Thanks for tally.

[00:53:13] **Vitaly:** Thank you so much for having me. 

