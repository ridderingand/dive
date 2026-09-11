---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: BTxgKUWGa34
slug: 2024-06-12-maggie-appleton
source_type: descript
source: "https://web.descript.com/15118c73-5a7b-4495-9f61-cc9108de892e/74632"
guest: Maggie Appleton
host: Ridd
title: Becoming an AI-native designer
published: 2024-06-12
duration_min: 53
generated: 2026-09-11
generator: dive-club-ideas
---


[00:00:00] **Maggie:** ELLICIT makes tools for scientific researchers and we are specifically trying to help researchers do a certain process called systematic literature review, which is where if they want to do some new science, they want to like research a new drug or a new medical device or a new policy for government, they have to go find out all the science that's been done on that in the past.

[00:00:20] They have to be like, What's been studied, you know, where are the research gaps? Like what could I do that would help move this field forward? And to do that, they sometimes have to read. tens of thousands of papers and then figure out exactly what was said in each paper, what study was done, what the results were.

[00:00:35] And usually this is a process that, humans do. So they get like five or six people to spend six months reading PDFs and writing the results into like a huge Google sheet, like a huge Excel file. and the founders of, Elicit, they've been in, language models and AI. For, I think, decades at this point, at least our, like, main, uh, CTO, co founder did his whole PhD on this.

[00:00:56] So, like, he kind of saw this coming, like, writing on the wall language models way before the whole [00:01:00] hype wave, and was like, oh, we're going to be able to use these things to, extract data from huge files, do reasoning, like, really help people. Humans do complex cognitive tasks faster. so founded the company initially as more of a research lab, experimenting with different ways that we could use language models for serious knowledge work, and then landed on literature review as a really good use case for it.

[00:01:20] I think the first alpha was built in like 2020 and then I saw that as a user and got on board as the designer because they didn't have a designer at the time. but essentially, yeah, what it does is we, we use language models to, in a couple minutes, extract all this data from tens of thousands of papers into this big spreadsheet that then researchers can go check every single answer and we really focus on, um, trying to build architectures around language models that make them truthful and reliable, because those are obviously major concerns and major problems, but that's a really interesting research, problem that our, our ML engineers kind of, that's what they're focused on solving.

[00:01:53] so yeah, to sum it up, it's like, we help scientific researchers do this huge literature review process much faster than they could [00:02:00] do manually.


## [00:02:00] How Maggie got ramped up as the first designer

[00:02:00] **Ridd:** Can we talk a little bit more about your role Oh yeah, like, not only are yeah, like the solo designer, but you're getting ramped up on these really new, cutting edge, meaty technology problems. So maybe you could even talk to us a little bit about the earlier stages of your design process. Like, what are some of the ways that you are breaking down these complex problems and getting momentum on new opportunities?

[00:02:24] **Maggie:** I knew nothing about language models and AI. I was like a normal human, right? I started getting into it. I think it was almost like, Exactly nine months before ChatGPT came out. So it was sort of like a head to head start before the big explosion happened. but I got to just get in and start reading all the research papers and like figuring out what language models were and understanding neural networks.

[00:02:44] and that was really important for me to then be able to, once I joined the team, understand what was possible, like what the limitations are, exactly how we have to design the interface to help communicate to users what a language model is, which, you is even kind of debatable, like whether we [00:03:00] should be doing that.

[00:03:00] I mean, we don't explain to them that we're building something in Python or TypeScript or like with a specific server. So like, why would they need to know what the backend is? They just need to be helped to achieve that goal. And they need to know that the results they have at the end are reliable or be taken through a process to make them reliable and accurate.

[00:03:17] so it, is like learning all about language models really helped me, figure out how to design well for them. I couldn't have. done this job without, getting really deep into the technical details of, of how this stuff works. and in terms of how my process for, breaking down the complex stuff, most of the complexity is still where it's always been in design, which is on the user side.

[00:03:36] Like, understanding exactly who our users are, what workflows they do, what every single step in that workflow is. Which parts are slow, and then trying to reason through how we could use language models in, in kind of small, very pointed ways to like, make their process easier, and have a human in the loop throughout that whole process is also a big thing we're, advocate for, which lots of other people do, that's not our phrase, [00:04:00] lots of people advocate for.

[00:04:01] Human in the loop workflows with language models. but we really try to design interfaces that, allow people to check their results easily, and like guide them through it, versus trying to give them a magical answer, which I think most, most AI startups are trying to do at the moment. type into this box and get a whole answer out the other side, and we're a lot more like, okay, you still need to go through this very rigorous process that you know very well, but how do we just make that process faster and easier for you? 


## [00:04:26] How LLMs are impacting Maggie's approach to design

[00:04:26] **Ridd:** Can we go even deeper on 

[00:04:27] **Maggie:** Yeah, sure. Yeah, yeah. 

[00:04:29] **Ridd:** like, what have you been learning about LLMs through this research and ramp up process that's influencing the way that you think strategically about like what the illicit interface should even be.

[00:04:42] **Maggie:** When you look at the pace of change with these models and the trajectory of how much better they've gotten in a very short period of time, it makes it very difficult to predict the future, right? none of us are very good at this at the moment because we have no idea even what these models are capable of at the moment.

[00:04:59] I [00:05:00] think the way we're using them is Just a tiny, tiny fraction of what they're going to allow us to do in the future. We just haven't explored that full range of things yet. one phrase I like from the AI world is, people sometimes say we, we sort of grew language models rather than it built them.

[00:05:14] Like, we don't know, they're like an organic being that we discovered and we don't know what they can do. Like we didn't make them for a purpose. We made them and now we're like, what is this object? Or what is this like organism type thing? so it's really strange because. We know they have all this kind of, like, latent possibility in them, but we're not quite sure how to bring that out.

[00:05:32] So, in designing with them, you're constantly trying to think, okay, I could certainly make a button and then have a single language model call that, like, does one thing, you know, goes to OpenAI or Claude, right, and, like, brings back an answer. but then we're now starting to see things like AI agent architectures, where you get the language model to behave as if it was an agent, A, you know, a being who can like think thoughts and you kind of tell it to do this and you give it access to tools like calculators and web search and like databases for long term memory and it can like [00:06:00] make decisions, like pretty reasonable decisions given a goal.

[00:06:02] So even in this world with AI agents and you think about designing an interface, you're like, well, maybe, this agent should just generate a UI on demand for the user based on what that specific user needs in that moment. Versus me as the designer, mocking up a very particular, drop down menu in Figma, and we're gonna, like, implement this, like, very carefully, and this is the only interface they'll have access to.

[00:06:23] You start to think, well, what would, like, a very dynamic changing interface look like if a model is, like, controlling it based off a set of primitives you give it? but that's the kind of thing you have to start thinking about, well, that's not possible now, or not really, not in a production environment.

[00:06:37] I've seen some prototypes that try to do this. but, in like a year, that might be possible. So you start to go, well, maybe I'm just wasting my time in the present, and yet there's no other alternative in the present. So you're stuck in this weird limbo of like, what's the right choice right now, given what will be possible in this, in the near future.


## [00:06:52] Designing in the short-run limbo

[00:06:52] **Ridd:** Yeah, I didn't really think about that. Cause we do talk about dynamic interfaces a lot and it feels like this [00:07:00] inevitable outcome. And yet it's not there. And you're operating as the sole designer for a startup where you're already expecting everything to change. That's gotta be an interesting challenge to try to balance what you believe about the future versus what you're capable of doing now.

[00:07:15] **Maggie:** Yeah, this is the constant struggle because, I mean, especially in a, in a place like Elicit, we talk a lot about, oh my gosh, these models are going to be so capable in the future, we have to be ready for when the next model comes out, we have to, be future proof, but at the same time, you're still, mired in all the difficult day to day things that every other designer and developer team is, where you're like, oh, there's a weird bug on the sidebar when you, hover in this position, and like, you know, all our drop shadows are super inconsistent, Users are confused by the text on this button.

[00:07:41] I go between the incredibly banal day to day, like normal startup designer stuff, right? Just like when you're the only designer, you're trying to do seven roles at once, and you're doing all of them kind of badly. And you're just like juggling, you know, the flaming plates or whatever the metaphor is.

[00:07:56] but then you're also having to think about the fact that we're, you know, this [00:08:00] entire process could change tomorrow. Or like, I need to be thinking about how I could be bringing language models in more to like help. augment my work, or speed me up, or like, help solve all these tiny, annoying problems.

[00:08:11] Which they can do when it's in code. I don't think we're there yet in terms of language models helping with the design process. I at least haven't found any tools or systems specifically designed to make that easier. Although I'm hopeful that will happen at some point. Like, I could use a lot of help.

[00:08:26] Like, Solo designer, like, drowning over here, you know?

[00:08:28] **Ridd:** Let's talk a little bit more about the interface level. Because I've seen kind of this spectrum of implementation specificity, where on one end you have very open ended UI that in theory can do everything. On the other, it's actually really defining the actions that AI can help you with. Here are 10 options, click a button kind of thing.


## [00:08:47] UI patterns for interacting with AI

[00:08:47] **Ridd:** How do you think about that spectrum? And even more broadly, like how are you exploring the different UI patterns for interacting with [00:09:00] AI.

[00:09:01] **Maggie:** don't want to say hate, but I think the current world where many of the, AI interfaces are super open ended, right, here's a text box, like, you figure out what to do with it, are sort of misguided, or they're, they're like a temporary historical blip that we will get over soon, I'm hoping.

[00:09:17] Because the, like, everything's a chatbox world is, You put the onus on the user to, figure out what to do with this thing. You're like, oh, it can do anything. If you tell a user they can do anything, they will do nothing. They will, type in, what's the capital of Uganda? And then, close the tab or something.

[00:09:32] They're just like, what, what is this thing for? Like, they don't have a goal that they're trying to achieve with it. I think even if you give them like inline suggestions or like have a couple buttons it's still not guiding them through a specific workflow to a specific goal. I mean I'm being critical here of course there are things searching on the web or very kind of base level open ended stuff that like sure can do a bunch of like simple low level tasks.

[00:09:55] Yeah, I guess in this like, kind of very simple, what we might call a horizontal interface, like [00:10:00] one interface that can do many things, kind of not, not that well, versus, vertical interfaces. This is like a metaphor that I think Joel Spolsky first came up with. Vertical interfaces do a very specific thing really, really well.

[00:10:11] Think of The software your dentist uses to check which, which of your teeth they need to operate on, or like, the kind of software that a financial accountant would use. Like, they are trying to achieve super specific goals with really well predefined workflows, and that you're just trying to help them do that easily with software.

[00:10:27] and I think this is the kind of stuff that is much more interesting to explore with AI, and that AI is much more likely to have a big impact in, Really advanced, professional, complex workflows where you can have the language model help in all kinds of interesting ways, just being like tiny helper, like behind the scenes, like suggesting good stuff, or like helping find the right data at exactly the right time and handing it to you, or like helping you see patterns in masses of data that you're trying to understand.

[00:10:53] I think this is where it's really going to shine. I mean, AIs are In a way, very advanced search across all kinds [00:11:00] of things that they have access to. and yet people are still kind of overly focused on the fact you can like chat to them like a human, which just doesn't seem that interesting to me in terms of helping move whole industries forward and make all their workflows more efficient and have humans suffer less and having to do really boring financial or governmental or medical workflows.

[00:11:18] I think this is just all the opportunity feels like it's in the complex stuff to me.

[00:11:21] **Ridd:** I like the idea of vertical interfaces a lot because you're right. Like a lot of the ways, or at least the early tools that adopted AI were that they were tools, very open ended, do almost anything with them. And I have still noticed a trend. I believe I was trying to figure out where notion started, I think their dropdown now of what ask AI does is now like they have like 15 options in there and it's like that, that trend makes sense.

[00:11:48] Right. It's like, no, we need to get, we need to put more guardrails in place to help people interact more effectively with AI. And yet when you're doing it in a broad open ended product, you get 15 dropdowns, whereas something like [00:12:00] illicit, you do have an opportunity to think through slightly more opinionated workflows, which is probably pretty interesting to think about.

[00:12:07] **Maggie:** Yeah. I mean, in ways it makes the job both easier and harder in the sense of like, I think if you're designing the AI for Notion, right, you're trying to make it as flexible as possible. And you don't know what the end user wants to do because your end users are doing all kinds of things. You've got like teachers in there, you've got salespeople, you've got, I don't know, a whole CRM, like the number of use cases, because it's infinite, that's right there. Selling point, that's what makes them really good software, is they can do lots of things for lots of people. But then, with language models, you really, the way that they perform well is you, do what we call fine tuning. So we take like a base model, like a GPT 4 or Claude, and then you train it on the exact kind of inputs and outputs it's going to expect to see.

[00:12:47] And then, so you say, okay, here's the kind of user input data you're going to see, and here's an ideal output for all of those inputs, and then the model learns, okay, I should really focus on giving you exactly these kind of outputs. And that's what makes the answers from it [00:13:00] really good, when you have like a super specific thing you need it to do.

[00:13:03] You're like, okay, I'm going to always give you a scientific PDF paper, and I want you to always give me a less than 100 word summary that like does not hallucinate, and I want you to double check your answer, and I want you to Make sure you don't use too much jargon, or if you do, explain it. give it really specific prompts and really specific fine tuning instructions.

[00:13:21] And then it can perform super well. But if you don't know what that input is, or you don't have like a set of those inputs you know are going to come in, you're just kind of using the base model and it's not going to perform as well on very specific tasks.

[00:13:33] **Ridd:** I would imagine that you're doing a decent amount of research to see what other products are doing and how other designers are implementing AI. And I do think a lot of the shortcomings are slightly obvious. We've talked about a lot of them. Most of it does tie back to this idea of being too open ended in my opinion.


## [00:13:49] Age of multi-modal models 

[00:13:49] **Ridd:** But are there things that you were noticing that are catching your eye or different implementations of AI that have you a little bit more excited?

[00:13:56] **Maggie:** Yeah, this is funny. I mean, I don't know when this will be released, but as of recording, [00:14:00] two days ago, OpenAI released GPT 4. 0 Omni, which is a model that can take in, audio and visuals and text and like blends them all together. So this is like a omni multimodal model, which is the way all these models are moving.

[00:14:13] Like, we all started with language models, right? Just trained on text, like, outputting text. and then of course we got more, you know, image models like Midjourney, or DALI. And now the company, the foundational companies are learning oh, we can blend these all together so that it's a little more like a human, right?

[00:14:27] A human who can see and hear and type. and so the direction this seems to be going is we're going to have models that can understand, spatial visual patterns and take in, you know, audio text. And so that means that we're going to have, many more capabilities that are not just it can output text, 


## [00:14:42] TLDraw

[00:14:42] **Maggie:** I have a bias here where I'm friends with the TL draw team, which are, nominally a whiteboarding app, really the world's best whiteboard was like nominally or the world's best drawing tool. You can like draw gorgeous arrows, like Steve who runs it. Just he, he's an artist by trade, but also a developer and just [00:15:00] the best whiteboarding app.

[00:15:01] But then funnily enough, because they had really high quality whiteboarding primitives, they've just like stuck AI into there. And now it's, one of the best AI software development tools I've seen anywhere, because you can draw the wireframe of what you want, and then you can just click this button that they call make real, and it just writes the code and like gives you an inline.

[00:15:20] app or website that works. Like you can, you can like draw a game and be like, okay, if I hit this button, plus one point, if I hit that button, negative one point, and it will set up like a state machine in the background and like keep track of points for you. you can set up physics. You can be like, oh, these little guys are jumping up and down.

[00:15:34] You can write annotation text next to the drawing and be apply this logic, whatever I've described here to this thing. And it just does it because it's all just visual text reasoning. that stuff is wild. I am most excited about Visual, spatial, like what happens when we get canvases plus AI to really be able to draw and doodle and like just do this kind of open ended, non textual exploration.

[00:15:55] **Ridd:** I've seen some of those demos on my Twitter feed and I don't even know what to [00:16:00] do with them mentally. Like, I just see, I see it. I can see what is happening in this little gif box or whatever. And I'm just like, what the heck?

[00:16:09] **Maggie:** They're kind of crazy. And then they have another one where you like draw whatever you want and then it will make the photorealistic image right next to it of what you're drawing. It's easy to control that, um, to do that. It's just wild. It's like, oh, now this is the best drawing app like anywhere on the market.

[00:16:23] It just, because I think this is another principle that people who already had really good software primitives in place, high quality ones, like Notion, TLDraw, like these kind of things, like GitHub, they already had the code infrastructure in place. They're the ones who are going to do really well because then you just put AI on top of that existing structure that humans already, it's designed for humans to use well, and you just train the models on that kind of interface to take actions in it and Boom, you, you're winning in the market.

[00:16:50] **Ridd:** now to Elicit. Because something that you're saying that I'm trying to kind of like wrestle this tension in my head, You know, everything we're talking about right now is [00:17:00] AI. At the output level. , it's creating imagery. It's generating code. It's writing text.


## [00:17:07] Why Maggie is more interested in cognitive AI than generative AI

[00:17:07] **Ridd:** You also have said that language models are, are maybe even more interesting as reasoning engines. How do you think about like the different capabilities, that spectrum and like, how does it actually translate into what the heck you draw in Figma for Elisa?

[00:17:22] **Maggie:** this is a a new drum I've started banging is Condensing, synthesizing, sense making AI is way more important and interesting than generative AI. I'm definitely saying that from a biased point of view of like, I'm much more interested in exploring tools that help us Find the signal in the noise, we already have too much information to deal with, how do we use AI to help us find the right stuff at the right time, make sense of it, move our thought process along, act as critical reasoning partners, like, these are use cases that are very compelling to me.

[00:17:51] And there is some, value to generative stuff, like, you know, mid journey is really interesting, TL Draw is really, is really interesting. But I also think there's a lot of, danger, badness over here. you know, [00:18:00] like we just generate 6, 000 SEO articles and like flood flood the web, which is already happening.

[00:18:05] there goes all you know, quality information or finding anything of use on the web. And there go all the human connections. And a whole talk on on how much I hate the flood of generative AI onto the web. So I feel like everyone's trying to generate stuff. And I want more people to try to, you know, work on building tools that are focused on, more critical reasoning, like, more systematic processes.

[00:18:26] More how do we use LMs to do very interesting cognitive work? and day to day at Elicit, this, I mean, this philosophy very much, was given, kind of handed to me by the founders when I joined. This was their whole thing. It's like, we want to do serious knowledge work with language models. we want to find ways where we have them do Very small, specific things, and we look very closely at the outputs of those and we check them, and then we feed those outputs into another language model call.

[00:18:50] So it's sort of like, language model calls all the way down in this compositional stack, where you say, okay, you know, in this paragraph, figure out if it mentions this keyword, [00:19:00] you know, if it does, get a second language model to check that, okay, if that's true, then like, rank these paragraphs by importance, you get it to do all these small compositional tasks.

[00:19:08] That can add up to very impressive, complex outputs. You could, the goal in the future is that you have a language model, just do a whole literature review for you. It finds all the relevant papers, it filters out the irrelevant ones, it reads every paper, meaning it kind of, like, extracts the right data.

[00:19:24] It, like, figures out which ones had maybe the highest, effect size or, like, impact score, and then it summarizes everything down into, a nice two pager that just tell you something like, okay, here's everything we know about, child malnutrition in the world right now, and, like, all the best ways to solve it, and just, it just has, done a bunch of really difficult cognitive work for you.

[00:19:43] This is like the dream. 

[00:19:44] So when it comes to designing it illicit, a lot of what we're doing is trying to think about how to move closer to that goal. And in the meantime, we still are keeping humans in the loop while that's not possible or , while language models can't do that level of like complex compositional reasoning.

[00:19:59] We're like, okay, [00:20:00] well, how could we keep humans in here to still get to that really valuable output, but like, they're still helping along the way checking and they're the ones you know, screening down papers and like making sure the extracted data is right. But with an eye to like, at some point we want to be able to remove humans from parts of this.

[00:20:15] so every UI, you know, that we design is like, okay, For now, there's you know, you hover over this cell and you like see a confident score level for like what the language model thinks, whether this is right or not, you have like an approve, I checked this one kind of box, but hopefully in the future, we could just slowly get rid of that stuff and pass it down to like a more, streamlined workflow, but still visible, still where you could check all the language models Calculations and reasoning just to make sure they're actually right and that they're not just like hallucinating stuff.

[00:20:42] **Ridd:** Okay, so I'm listening to you talk and something that is kind of happening in my brain is like, man, it's almost difficult to explore in Figma without having some understanding of like, what's possible with these models. And historically. [00:21:00] Even if a designer has never coded before, you still have like a rough sense because we use websites.

[00:21:06] We use web apps all the time. We kind of intrinsically know what's possible, but that's not necessarily the case, especially when you're in a startup environment where you're trying to anticipate where things are going to be going. So. I'd like to talk a little bit more about your. Learning journey and how we can maybe make that applicable for someone, because I'm sure there's a person listening right now.


## [00:21:26] Maggie's journey with code

[00:21:26] **Ridd:** That's like, okay, this is very interesting. I can see how this is a big deal. Now, what, like, where do I even start if I want to explore this further?

[00:21:34] **Maggie:** I've gone on a very particular journey in being a designer. That is very Developer designer hybrid I when I started doing design very quickly Was like well I don't want to hand off this figma design to someone else to implement because like they might not do it Right or like I just want to I want to be, I want to be the one, like, doing the magic.

[00:21:52] Like, you know, when I hover over this button, I want to see exactly what happens, and then I want to go tweak what happens. I don't want to do, a Figma prototype. I [00:22:00] need, you know, working code. So I very quickly just taught, well, I didn't quickly teach myself, but I made a very concerted effort of learning front end web development because I wanted to implement my own designs, and I just got a kick out of it. Writing real code and watching it run and, being in the browser and, seeing things move and animate feels like magic to me. It still does. It's, very addicting. I just would stay up till 3 a. m. just for tweaking the CSS. Just so, so good. I've never known a design career where I, make Figma files and hand them off.

[00:22:28] the vast majority of my work, I'm, committing code in GitHub. Usually, I write a lot of documents ahead of time to, like, figure out all the complex stuff, right? Get everyone aligned, make sure we know what all the user stories are, all the problems, all the edge cases, get the developers on board.

[00:22:42] But then, once we're okay, we kind of think we know the shape of the solution, I'll mock up a bit in Figma, but I'll, I'll move to front end code really quickly. And then just send people preview links to PRs, being like, okay, here's the preview link of how it could work like this. And especially with language models, you also need the results to be coming in.

[00:22:59] [00:23:00] You can't, fake that stuff as much in, in Figma. So it just helps to be in an environment with live working data, and you can be like, okay, you know, you can resize the browser on this thing, you know, what happens, oh, we forgot the focus state, all of that live, real browser environment stuff matters a lot to me, so.

[00:23:16] I've only ever known design work as someone who's working in code. So I think I have a very different perspective to like, frankly, real designers at like bigger companies on like proper teams with processes. I, I am from a different world to them. Let's say,

[00:23:29] **Ridd:** For what it's worth, it's my favorite world too. okay. being the sole designer where I get to like actively commit CSS is one of my favorite roles.

[00:23:39] Maybe we could zoom out just slightly and talk a little bit about this trend, because I know, you know, not only are you writing code in your day to day job, but you're also like actively thinking about design engineering and this kind of trend that we're seeing online. So what thoughts do you have there?


## [00:23:56] Maggie's thoughts on design engineering

[00:23:56] **Ridd:** And like, how is it actually impacting the way that you not [00:24:00] only approach your practice now, but like what type of software creative you want to be in the future?

[00:24:05] **Maggie:** , this is funny. The whole design engineer thing. I like, don't know what to think of it anymore. It was like, I came across this word. and other people have claimed like creative technologist was the previous name for this. And I read it and I went, Oh, that's a designer who also does engineering.

[00:24:18] Like that must be me. but I looked at everyone else using that label and it seems to be the communities more centered around people who are, do very advanced, like, interface animations, are really good at kind of like cool, cool, interactive animations, but also maintain like design system libraries in the front end.

[00:24:34] So if they're more maintaining components and kind of thinking about, holistic technical design systems. So my understanding is that's how that word is being used currently to like mean design engineer. But I still think of it in my head as like, well, designer who does engineering, you know, read the label kind of thing.

[00:24:49] so the way I use it to like, think about my own career is just that I take my engineering skills, maybe not as seriously as my design skills. Like, I still think I should try to be leveling up my design skills more than any [00:25:00] other, area. Yeah. But I also want to be leveling up in my development skills.

[00:25:03] So this is where like, I still, we can get into this, like ironically, like spend a fair amount of time trying to learn new, frameworks or libraries or like, Oh, I saw a cool interaction pattern. Like, can I reproduce that myself? I'm still trying to invest in that side of my skills. I'm trying to learn a bit about databases.

[00:25:20] I want to figure out how to build a full app. you know, Thinking about the product all the way through to like the back end. just so that I have a more holistic understanding of what it means to be a software designer. I just don't want it to only mean I make interface mock ups in Figma.

[00:25:34] I want it to mean like I understand what software is end to end. Like I understand everything from like you look at the users and their problems in the marketplace and then all the way through to what is the back end object relation map and what primitives do you have that make these two end up meeting at the middle in the interface.

[00:25:53] So that's my interpretation of it but I think most design engineer job postings would have a different take. 

[00:25:58] **Ridd:** I want to zoom in on one [00:26:00] part of this kind of thing that we're orbiting around in this conversation is you say the word learn a lot and it reminds me of something that Sileo said in a past episode where he talked about like the time to proficiency for someone being the greatest indicator of.


## [00:26:14] How Maggie approaches learning

[00:26:14] **Ridd:** Basically how high their ceiling is. And when I listened to you talk, it's quite clear that you're pretty good at learning Maggie. So can you just talk to us about that? Even at a high level, it doesn't matter if it's about LLMs or web frameworks, what have you learned about the, the way to go from zero to one on new skillset or a new area of interest?

[00:26:38] **Maggie:** Yeah, uh, that's funny you pulled out that quote because I watched that episode and I wrote that one down. I have like a spaced repetition system where I just put in stuff that's like interesting or like open questions I'm thinking about and I wrote down that Saleo quote. Saleo is very smart. but I was like, oh, what a good, what a good like rule of thumb.

[00:26:52] Like someone's time to proficiency. and I was like, oh, I, I hope I would be one of those people, but I don't know. Sometimes

[00:26:59] when you're in, 

[00:26:59] **Ridd:** [00:27:00] you are. I'm just going to say right now. I think you are.

[00:27:02] **Maggie:** , I definitely, in a good way, I think, always assume that I am kind of, clueless. So I, I put a lot of pressure on myself to be like, okay, I know nothing. I'm not a proper designer. I'm not a proper developer. Like I need to like learn as much as possible.

[00:27:15] I need to be like scouting out all the people who I think are best at this thing. And then. Do a lot of like, okay, you know, what are they tweeting? What's on their website, but trying to figure out like, what are they actually doing day to day? and I go do things like DM them and be like, Hey, what are you doing?

[00:27:28] day to day what do you spend your time on? Because and I think I've also been lucky to have access to people who are like more senior designers or senior developers and either ask them directly on zoom calls or like working up close with them, pay a lot of attention to exactly what they're doing on a sort of detailed level, okay, you know, You're like, writing in a bunch of Python commands, what framework is this?

[00:27:49] sitting next to ML engineers I found really helpful in the beginning, just sitting and just watching what they're doing and just being like, okay, it's like 40 screens open here, there's like some giant process running in the background, like, can you just [00:28:00] give me the lowdown on what's going on? Um, so I found that very useful.

[00:28:03] It's like detailed attention to hour by hour tasks of people who are very proficient or professional in a thing. ironically, maybe not ironically, sadly, I find trying to Google for the top articles on any subject is pretty quickly useless. you can do it and you can spend 40 minutes clicking through all those top links and you'll just be like, this seems pretty shallow.

[00:28:21] No detail in here. This is very high level. This is very how to be a great designer. one, do the design process. Like, two, like, talk to your users. But there's no detail in there. There's no here is a specific outline for the interview you should do with your user tomorrow, you know?

[00:28:33] So, I try to find material that is like, very tactical, dense, details on the ground. game tape. If you can find someone who's like, live streamed their process, that's amazing. because the high level stuff is almost always too vague to be useful.

[00:28:45] **Ridd:** I love game tape as

[00:28:47] **Maggie:** Yeah, gay too.

[00:28:48] **Ridd:** You're totally right. I mean, it's, it's unfortunately that is the reality, especially with the newer advancements that, you know, every time something new happens in AI, you get a flood [00:29:00] of. Just buzzword regurgitation, just nonsense. I was even on YouTube the day after the open AI announcement.

[00:29:09] Oh my gosh. It's just like 40 thumbnails that are the exact same thing saying nothing.

[00:29:14] **Maggie:** figuring out how to have a spidey sense for, like, the amount of information density in a piece of content is, like, a big part of it. you, like, you'll find an article or a YouTube video and, like, within 30 seconds of skimming it, you're like, oh no, no, no, there's nothing here. But then there's other ones you come across, right?

[00:29:27] Someone will have done, these are usually hidden in weird places. Like you might find like a GitHub repo of like a bunch of like prompt engineering prompts. Or like someone's guide to how they're using, a Colab notebook that was big in ML. Like a lot of people write these big Colab notebooks with their whole, ML chain broken down of how they're doing some big process.

[00:29:44] And just going through that, you're suddenly like, oh wow, okay, I'm like seeing the real detail of how this works here. This is not like some hand wavy summary.


## [00:29:52] Impact of AI on Design

[00:29:52] **Ridd:** Okay. Let's zoom out even further now, because I know you're thinking a lot about big picture stuff. So what are some of the [00:30:00] long term implications for. This new technology. And how do you think that that might impact design more broadly?

[00:30:07] **Maggie:** I don't know. I've been having a couple of months of something existential, thrill and terror or something of trying to, trying to understand where this is going. And I think it's easy to assume timelines are always shorter than they're going to be. right. Like, I think it's easy to be like, okay, in a year, I'll be able to write some text into like copilot or cursor and it will just make me a whole react app.

[00:30:29] And it will be like. Perfect, and there will be no bugs, right? And it'll just be like, I won't need a developer anymore. I think in reality, reality is way more complex than we think it's going to be, really. And there's the thing of like, maybe the first 90 percent of building an app, a language model will be able to do a lot of basic stuff.

[00:30:46] If you're like, build me a sidebar, you know, build me a pretty standard settings page, like, all that kind of stuff, I think pretty quickly we could automate. But that last 10 percent That's going to be the hard stuff, I think. I mean, and that's also a lot of the glue work. Like, okay, well now [00:31:00] how do you like set up a backend and connect these two and get a server up and running?

[00:31:03] And what if you get like a massive users and like it flattens your server? Like, there's just all the complex, difficult things of engineering will still exist. And this is the work I think developers are going to have to end up doing. It's like this higher level, you know, really architecting apps well, really thinking carefully about data structures, like the, the hard, the hard stuff of engineering.

[00:31:22] But that, grunt work stuff that we're currently having to do, like I still have to make a drop down menu and like make sure it like works on focus and stuff. I'm excited that that will all get automated away. I think a lot of the like low level busy work will just disappear within one to two years.

[00:31:37] **Ridd:** I want to talk about this both through the more developer lens and the design lens, because I think they're related, but also in very different points. So maybe to start, 


## [00:31:47] How much technical knowledge designers will need

[00:31:47] **Ridd:** how do you think about where the threshold for technical literacy exists? That would allow designers to take advantage of AI's ability to automate that grunt work you're talking about.

[00:31:58] **Maggie:** To get very specific and [00:32:00] tactical, like I was, you know, Me, 15 years ago, let's say, starting out, I, I would go learn, JavaScript, React, HTML, CSS, not necessarily React, but like that is the main framework right now. I would make sure I understood the shape of code in those languages and look at a lot of source code and try to build stuff myself with the help of AI.

[00:32:20] I would like, Get GitHub Copilot. I would get VS Code and learn how to get like a very basic website set up. and I would just start trying to prompt it to be like, okay, build me a sidebar with these links in it. Okay, now add a dropdown menu here. Okay, now I want to change the entire color scheme to like dark mode.

[00:32:36] how would I do that? And I would just spend a ri a lot of time. building with Copilot and AI, to figure out what it's capable of. But also it will just teach you how to build at least basic apps and websites. I just think the technical literacy of understanding the shape of an app to understand how components like are linked together, how pages are built, how you write CSS, how the styling and the, and the interactivity from [00:33:00] JavaScript all come together for me as a designer has been incredibly critical.

[00:33:03] It helps me understand the affordances of the web. I mean, I only build for the web, but of course if you build for something like iOS apps, it's different than you're looking at the affordances of Swift and the, and the iOS platform. But I need to understand the material I'm working with in the same way that like, carpenters understand wood really well, right?

[00:33:18] And like, architects understand if you're gonna build a five story building, like, you need to know what materials you're gonna put in the, support pipe so that it doesn't fall down. To me, that is what code is. even if the thing you are designing is like pixels and figma or seems to be to you, what you are actually designing is a live interactive system in a very specific, runtime environment and a very specific computing environment that has affordances that you can only discover if you are, like, working in the native medium of it.

[00:33:43] because there's a ton the web can do that we don't take advantage of because designers don't know what's possible, I think.

[00:33:48] **Ridd:** This idea of understanding the materials is becoming more prevalent, especially in these conversations that I've been having. I want to push on it like even more, like, actually, how [00:34:00] does that help you? Like you're maybe just exploring and figma your earlier stages.

[00:34:03] You haven't graduated to preview builds yet. How does this understanding of the materials translate to what you are doing and unlock new opportunities for you?

[00:34:12] **Maggie:** I will definitely put a caveat on this, in that there are many types of designers and if you are someone who is more user research, like core, maybe information architecture, like that kind of traditional UX stuff, you're right, you probably don't need as much of that, you're more focused on like who's the user, what's their workflow, like figuring out what Okay.

[00:34:29] abstract representations will serve that user and get them to their goal well. So I think that's a whole side of design that you're right, like, it doesn't matter as much. But if you're talking about someone who's genuinely designing, where is the button and what does it look like? Like, what happens when they hover near the button, on the button?

[00:34:46] What happens when they, tab into the button? Could that button expand to become a different element now that we're inside that element? can you use the position of the mouse and the proximity of where it is in the browser? Make something else happen. This gets into the detailed material bits of it that I think matter to [00:35:00] me when I'm thinking through design stuff is The web has all these APIs or like as I said like affordances like it can take in voice Or audio and you can have the interface react to what audio it's hearing You can use your mouse position.

[00:35:11] You can use like force touch press amounts like you could use you know more keyboard inputs It's just like you know You begin to see the web differently. It's like, oh, this is like a very dynamic system that has all kinds of inputs I can react to in different ways. You, the only way to play with that is to be in the live environment itself.

[00:35:28] I'm of course talking about very experimental software here. If you're like, I don't know, I'm designing an e commerce site, right, and there's like a bunch of like products on the front page and there's like a nav, like sure. I mean, this is a solved problem already. You can do that in Figma, I guess, because we've built this so many times that we have components that are reusable for this. But, I will say, that is the stuff that AI will be able to well. Anything that we already have a large amount of historical data on is the stuff that it's going to be great at creating. So if we're like, hey, we've all made 6, 000 modals, and we've all made 6, 000, whatever, like, slide [00:36:00] over sidebars, It's just going to do that stuff in a flash.

[00:36:03] And so, as a designer, you no longer need to do that work. So what is the work of the designer in a world where that stuff's been automated? And that gets into, well, what are, like, novel interface patterns we've never tried before? how could we design interfaces that, like, serve these user needs really well that we've never solved before in software?

[00:36:19] That's where, like, I think future design work gets really interesting.


## [00:36:23] How AI will impact the role of a designer

[00:36:23] **Ridd:** Let's talk a little bit more about that then, because if more traditional UX designers are going to develop this technical literacy and, you know, Code becomes easier for more people. Like, how does that, let's play that out. Like, how does that impact the role of designer in the broader landscape?

[00:36:38] **Maggie:** have a couple, like, weird, weird predictions here. right, so like, let's, let's imagine the world's where, yeah, the cost of development drops to almost zero. Or, so cheap that anyone can, like, prompt up at least a very simple app. let's just say, okay, people can log into this app, they can, like, create, add, and delete things, they can edit stuff, they can, like, maybe track data over time, they can, like, access APIs on the web.

[00:36:58] It's kind of, like, standard stuff. let's [00:37:00] say, you no longer need, like, , lots of developers to do that. I think in this world, we get a huge explosion of software, just so much more software than we had before. and ironically, because teams might be smaller, or we might have more like solopreneurs, The level of design quality of this software might drop quite a lot because if you are no longer in the mindset of like, okay, I need to hire like four developers and a designer and they're gonna like, you know, spend two years building this thing.

[00:37:24] You just can whip this stuff up in a couple days. You won't. Involve a designer at all and you will just go with what you think is like I don't know the best the best interface and the best like way to do things Which if you're not a trained designer is likely to be bad Like most of us have pretty bad design intuitions to start off with unless we like train that muscle so there's a world where design gets much worse in the software world But then designers become more valuable because we have way more software.

[00:37:49] We need to design way more of this software And A lot of design work can't be automated, the, like, understanding users bit, the, like, abstract conceptual thinking bit, at least not yet. So, core UX skills become [00:38:00] super valuable, and, like, exploratory interface stuff becomes more valuable, but the middle bit that a lot of us do now, which is, like, implementing the boring sidebar, or, like, designing the boring sidebar, that's all automated.

[00:38:10] It's, like, the two edges that, like, I think become quite valuable.

[00:38:13] **Ridd:** Yeah, that's interesting. Cause I think we talk a lot about how like, you know, AI is going to free designers to think more strategically and on higher level problems. But I think a lot of that conversation happens within the silos of the existing And if you zoom out, like actually at a landscape level, no, like the demand for design will be pulled towards the extremes where actually you will have to be focused on the more advanced, more exploratory problems.

[00:38:40] I like that angle.

[00:38:41] **Maggie:** I definitely do think it's an expanding pie, right? I don't worry that designers aren't gonna, aren't gonna have work to do. but I think the, the type of work we do will look very different. So there is this fear of like, a lot of us will probably have to shift skill sets a lot, or like, really change how we work.

[00:38:55] Even me, right? Being like, oh, I'm like a, you know, hybrid front end designer [00:39:00] developer. There's a good chance my, a lot of my skill set will like, totally be automated in a couple years, and I'll have to go much deeper on understanding information architecture and user research, Or get more into the, like, much more engineering, exploratory side of things, I could, I could be, kind of at ground zero in a couple years.

[00:39:16] **Ridd:** What is that like? How do you deal with that possibility?

[00:39:19] **Maggie:** well, I tweeted something that it was what a terrible historical moment. I still have to learn all this, kind of very boring, code syntax and, like, new libraries and, like, understand the mental models of, how these things work. today, if I want to build stuff, I have to go learn this stuff.

[00:39:33] But I know that it's going to be automated in, like, a couple years, and so I'm just oh, I'm in the worst. I have to do this if I want to, like, achieve these outcomes in the short term. But long term, this isn't gonna pay off for me. It's not like these are gonna, pay dividends for years that I know exactly how to, make a prototype in Vue.

[00:39:47] Like it doesn't, it doesn't work. so I don't know. I, I just kind of go okay, well, the future is probably going to be good. I'm sure I'll be fine. I doubt I'll be like living on the streets. Maybe I won't be like a millionaire, that's kind of fine. Yeah, it's just a little, [00:40:00] I think it's like a very British attitude to like, well, it's probably gonna be fine.

[00:40:03] I don't know, what did you want? Some impressive life? Like,

[00:40:05] **Ridd:** Okay. Let's our lens for a second and talk more about design advancements, because I think the ways that AI can impact the day to day of people writing code is much easier, at least for me to think about. It's more concrete. It's already happening. Whereas You know, you alluded to this earlier in the conversation.

[00:40:25] It's not happening for design. Like it's not in web design a little bit. Still, a lot of it kind of feels like a toys for product designers outside of generic back and forth in text with Chachi BT, 


## [00:40:38] How AI might impact our roles soon

[00:40:39] **Ridd:** it's almost nothing. So how do you think about the potential entry points for AI? Are there areas that you're focusing on or things that even like you, you just really want to happen?

[00:40:48] **Maggie:** , I know, keep waiting for these companies to pop up. I think I have to give them another year or two. there's a lot. I do a lot of work of just like looking at the mass of user data and trying to synthesize into like [00:41:00] specific things we should do, which is a perfect use case for AI.

[00:41:03] It's right. We have a constant stream of things coming into the customer support inbox. We've got user interviews going on that have transcripts. We have sales calls going on that have transcripts. I want to put all this stuff in one big pool, and I want the AI to be like, hey, okay, not only here's the most, commonly mentioned things, because sometimes those aren't solvable, right?

[00:41:19] Sometimes people are just like, oh, I, my job changed, I don't need your service anymore. that's, you know, not as relevant, even if that's the most mentioned thing. but it could also be like, oh, you know, these three people have mentioned this, we've never considered a feature like that, you know, maybe it understands my feature set, too. And it makes, a proposal for me, like a one pager. It's like, hey, given what I know about your interface, and given what your users are asking for, like, how do you consider this? What I'm suggesting is quite a complex cognitive task, right? It kind of has to do some faux reasoning. Language models do not genuinely reason, but the thing that they do looks an awful lot like reasoning and could be used as a proxy for reasoning.

[00:41:52] It can say like, okay, if I was pretending to be a really smart product manager or really smart product designer, here's what I might suggest based on the data [00:42:00] I'm seeing. Even if it just tracked all of that over time and just every now and again suggested hey, what about this product feature?

[00:42:06] Hey, what if we made this small change to like make this easier? That kind of stuff, is like a good entry point. there's a lot it could do in terms of like helping me write up documents. Again, this is like a huge thing that takes a lot of time. I think a lot of this does at the moment require a lot of human cognitive labor.

[00:42:21] Like I have to think really hard, like, well, what are the user stories? What are the requirements for each of those stories? and then go into like, okay, what are the possible solutions for each of these? A lot of, that just takes a lot of brain power and time. again, suggesting possible, like, solutions to things.

[00:42:36] Oh, good. Thumbs up. Thanks, um, Mac. That was helpful. Um,

[00:42:40] **Ridd:** of world class AI

[00:42:42] **Maggie:** exactly. This is, this is what AI does, is, um, is this is what we're using it for. But it's great. But like, I think we could do more complex things, is like one of the points. Um, so yeah, I think there's a lot to do in like, suggesting things, synthesizing data, helping me keep track of things even, like, You know, I'll like write specs and then just like forget about [00:43:00] them, they just disappear into the void.

[00:43:01] If, Notion AI could be like, hey, two weeks ago you wrote this spec, I've updated it for you, do you want to take another look? that kind of stuff.

[00:43:08] **Ridd:** yeah, I really like that. It reminds me of something that Brad Frost was talking about too, where this idea of like being able to contribute towards this knowledge base of how we build product, different guidelines, not even necessarily at a product strategy standpoint, but like more of an interface level even, Being able to interface with those guidelines and ask it questions rather than having to like remember things or systematize every single element. It's similar to some of the stuff that you're doing in elicit in that it's like very constrained in terms of like the type of questions that you're asking. And I could see that being like an interesting application as well, but it does, it's kind of, everything still feels a little bit far off,

[00:43:48] **Maggie:** Yeah, I bet, I wonder if that, if Brad had thoughts on this, because like, actually design systems should be another huge entry point, right? It's like, it's saying, hey, You've, like, made three different drop downs, do you want to make this into one drop down? right? Or just like, hey, [00:44:00] your accessibility is, like, off in these four areas, can I just fix them for you?

[00:44:03] Like, one click, it sets a PR in, it fixes the accessibility issues, like, everyone wins, right? those are the kind of, like, easy endpoints I'm waiting for people to build products for.

[00:44:12] **Ridd:** Can I ask you one more hypothetical tooling question? Because you've kind of extended your role a little bit into this very front of the front end world and you almost sit in a tooling gap a little bit where like Figma doesn't do anything for you in that world.


## [00:44:30] How Maggie uses Copilot

[00:44:30] **Ridd:** You're not as deeply embedded into like the, the heavy engineering. Do you have any thoughts about what the most valuable future of tooling would even look like for you and like how you can be equipped as someone who does have some technical understanding and yet is still doing the majority of your work in a design authoring tool.

[00:44:51] **Maggie:** I think actually the tooling we have right now might be helping people like me the most, because it's like the co pilots, right? Where you're like, you're in a code editor, VS Code, and you can just be like, [00:45:00] hey, you know, I'm trying to change this component to add this, like, new button, and it needs a new state attached to it, and I want this to happen when, it's loading, and, you know, after three seconds I want it to time out and do something else.

[00:45:10] You can just type that all in plain English natural language. And it just updates the code for you, and you do have to check the code, right? Like, you're the QA, tester. , but people in my position, like, we have the best tools at the moment, because that's, it's just helping me along. but it's still, it's, like, limited at the moment.

[00:45:24] There are lots of things I ask it to do, and it totally fails. It just, like, face plants, or, I have some really bad layout bug, and it cannot fix it. And I'm like, this is, this should be simple. we've got some, like, weird thing happening with Flexbox, and, like, this is not rocket science. And it cannot fix it, and I have to spend hours fixing it.

[00:45:40] so it still falls down in lots of ways that makes me be like, Ugh, we're, we're almost in the dream world and yet so far away. 

[00:45:46] **Ridd:** Before I let you go, I have a couple of one off questions. The first is something you've kind of become known for is. 


## [00:45:54] The impact of digital gardening

[00:45:57] **Ridd:** This practice of writing through digital gardening. man, I get DMs all the time from designers [00:46:00] who want to put themselves out there more, want to start thinking in public. It's a little bit intimidating to make that jump.

[00:46:06] So could you talk a little bit more about your experience and maybe you can even share

[00:46:14] **Maggie:** I love digital gardening. Everyone should, should start a digital garden or a blog or whatever you want to call it. I think, I was lucky in that I started doing this when I was, like, too young to have much ego or sense of importance of myself, which I hope is still true. Like, I still don't think I'm, like, a very important or, like, notable person.

[00:46:30] So if I write something that is incorrect, which I don't, you know, try not to do, I try to make sure I'm putting truthful statements out and, like, interesting work and, like, saying things worth saying, but even if I make mistakes and, like, get ripped apart on Hacker News, it doesn't matter that much because I'm, like, not I'm not that important.

[00:46:45] It's like, it's totally fine, right? Versus I bet if you're maybe someone higher up at some like, you know, brand name company where it matters, you probably have more hesitation about writing online because people expect things of you. I think it's helpful to assume that nobody expects anything of [00:47:00] you and that you're not held to some like, Ridiculously high standard of it.

[00:47:03] You don't, you don't actually matter, which like in the grand scheme of history is usually true. so that's like a freeing bit, right? Like you can write online and it's not a big deal. And like, you can make mistakes. And if you have a digital garden, you can fix your mistakes by updating your posts and like improving them in the future.

[00:47:18] I, but I've, I always say this is like writing publicly online. Has made me a much better designer because I have to think very carefully about problems and like articulate them well. And that turns out to be one of the most important skills in design. It's like naming the problem and articulating it well to your stakeholders and like getting everyone on board, just the core skill of the whole thing.

[00:47:35] and then it has also meant I've had lots of job and career opportunities that I have like no right having just. People, when you write clearly online, think you are way more competent than you are, and like, way better at your job than you are. They're like, wow, you wrote this really thoughtful essay on this totally unrelated thing, and so I assume you are really good at like, senior product level design work.

[00:47:56] **Ridd:** I'm laughing because I have like the exact same experience. So [00:48:00] I,

[00:48:01] **Maggie:** You know, you know, we're just frauds.

[00:48:03] **Ridd:** speaking of career opportunities though, before I let you go, you are hiring a senior designer at elicit. So can you talk a little bit about what would make a candidate someone that you would just be like, yes, we got to have them on the team.

[00:48:19] **Maggie:** Sure. so yeah, we're definitely looking for someone like, senior staff principal, sort of, you have good design experience. Because I'll say We are solving really hard problems. like you can't copy other people. Like, no one has done this interface before. So, like, you have to just, make it up from first principles, or, like, reason your way through it.

[00:48:34] so, yeah, we're looking for someone who can, like, own whole design projects, like, from the ground up, think from, like, the product level all the way through to understanding the technical stuff. We have a lot of ML and AI expertise in house, so it's also a really good place to get up to speed on that if you're, like, okay, I know I want to be working in something with AI, but, like, I don't know anything myself.

[00:48:52] We kind of want someone to like help bring in more design expertise and, and in exchange, they get to get up to speed on, on all the ML [00:49:00] coolness and work with people who are world class at doing it, which is really great. so that's, that's kind of the profile.

[00:49:05] Someone who's worked on tooling, like advanced tooling, complex workflows, like not simple websites, but like, okay, people are making stuff, you know, we have like toolbars going on or we've got infinite canvases, that kind of stuff would be great.

[00:49:16] **Ridd:** Awesome. Well, Maggie, this has been amazing. Thank you so much for coming on today and sharing a little bit about what you're thinking about. For anyone listening. I mean, it would be just an incredible opportunity to work alongside you. So definitely apply if you are considering it. Thanks again for taking the time and yeah, we'll link to your digital garden.

[00:49:36] Everyone should definitely check out your thoughts. There's a lot more than we could possibly have covered in this hour. So thanks again.

[00:49:42] **Maggie:** Yeah, thank you for having me on. It was wonderful to have this space to talk about this stuff. you can have casual conversations with your friends of like, what if, what if all the developers get, replaced? But it's really interesting to be able to talk out loud and think it through with someone, and hopefully if people watching have thoughts, they can, like, angrily tweet at us about it.

[00:49:58] **Ridd:** I welcome them. I welcome [00:50:00] them. Awesome.
