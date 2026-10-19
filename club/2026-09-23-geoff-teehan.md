---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: Lmr2Ud2A0ew
slug: 2026-09-23-geoff-teehan
source_type: descript
source: descript://Geoff Teehan
guest: Geoff Teehan
host: Ridd
title: "Navigating change as a designer"
published: 2026-09-23
duration_min: 52
generated: 2026-10-16
generator: dive-club-ideas
---

Speaker labels in Descript: **Geoff → Geoff Teehan (guest)**; **Ridd → Ridd (host)**. [HH:MM:SS] timecodes (every 60s) from the Descript composition (49:19; this export has no chapter headers), Copy-to-clipboard export checked complete (00:00:00–00:49:00, continuous, ends on the sign-off). Timecodes are Descript edit-time. The composition does not exactly match the published YouTube cut: D 00:30:38–00:31:03, 00:31:16–00:31:27 and 00:33:17–00:33:40 (plus small trims near 00:34:06–00:34:14 and 00:38:09–00:38:17) are not in the video. YouTube = Descript + offset: +0:59 to 00:05:10 (cold open + intro); +2:30 to 00:26:54 (sponsor reads at YT 06:11–07:42); +3:05 to 00:30:38 (Dive Talent Network read at YT 29:27–29:59); then +2:41 / +2:33 / +2:16 / +2:09 across the cut spans and +1:59 from 00:38:17 to the end; YouTube adds a Dive Radio plug after the sign-off (YT 51:20–51:42).

**Geoff:** [00:00:00] I was out with my son. I had gotten something he painted, and when it came back, I remembered it being a different color. And then that made me think of a professor in college, color theory class, who mentioned something about just co- uh, humans being incredibly poor at remembering colors. And so we had this hackathon coming up at work, and I was like, "I'm gonna make this dumb game where I'm gonna show you a color for a few seconds, and then I'm gonna change the color and give you HSB controllers to try and recreate it.

Then I'm gonna score you using, at first, just a r- a, a really simple algorithm, just about how close you are to the HSB numbers. Uh, and then I give you a score of one to 10. You run five rounds and, uh, uh, and then you see how good you are at remembering color." And for the hackathon, because w- we do payments infrastructure, I built in gambling.

just internal. It wasn't, like, a public app or anything like that. I put it out. It was, like, originally just a Vercel link that I put out on [00:01:00] Twitter. No, actually, you know what? I put it out on Threads. the next day it just lit on fire.

And I had, like, some Google Analytics hooked up, and I remember maybe it was, like, three days in, four days in, I had now switched it over to an actual, tiled.gg. I remember sitting on my couch on a weekend and I was watching the real time numbers go up. This is just a single game. It's very simple.

It took, like, I think I had the first version done in, like, six hours. In 24 hours, it was pretty polished. In 48 hours, I had multiplayer. I had, like, I just, I just kept building on top of it. Anyway, I'm watching these numbers tick up, and there was, like, 1,000 people using it at a single time. It was just like a thou- in the last 30 minutes, you know how they measure real time on

And it kept going up. And I'd look throughout the day and it was like, at one point it was like 5,000 people were playing it simultaneously. And I was like, "Oh my God, this is incredible." Like, total viral game. I had no idea. This was just a dumb little thing. And I had built it out as a single HTML file, and it was just using, it was just like hiding and showing DOMs and, like, it was [00:02:00] really, really basic.

It was 8,000 lines of code, which was cool because I could ship it instantly. Any change was just like, there was no build process, just ship. But it was obviously extremely inefficient. I'd hooked it up to, like, Supabase because that's what Cursor told me to, to use. I had no idea what I was doing. It was just exploding and it was-- And I'd also built out, like, my own analytics screen.

Huge mistake. It was just making so many calls. Anyways, I had a problem though, like I kind of, you know, I, I, I caught the, the moving bus and I have a real, I have a, I have a day job that requires all of my attention. And so this was more than i- i- it had to become more than a weekend project because it, because of the scale and I needed to reduce costs.

There was just so much to do. so my son, who was living in Toronto, working at a bank, hating every minute of it I called him up and I said: "Hey, I did this thing." He knew about it and his friends knew about it. I said: "I'm either gonna kill it because I just, I can't afford to, to do both, or I need your help."

And so he [00:03:00] quit, he quit his job, and now he basically runs the thing. I help him out on the weekends and in some evenings when I can, ideating new games and helping him build out some things and, you know, art direction and some polish here and there because he's not a designer by trade, but he's quickly becoming one.

And it's been awesome because the, you know, seven games now, we just built in auth. We still use display ads. He built out an iOS app for Color, the most popular game, that, that's in review now. And so it's become a business. This little side project became a business, and we had to take it pretty seriously.

So we did, you know, we hired somebody on Upwork who w- focused in on backend work to really help us get over some of the hurdles that we just can't. We still use him when we need to do big releases, but, you know, I'd say 95% of it, you know, it's, it's he and I

**Ridd:** It's so cool. I love the backstory too, because I was definitely part of the exploding Vercel build in that first, like, week even. Because I saw that thing on Twitter, [00:04:00] I started playing with it. I'm with my entire family, and I'm having so much fun. I'm showing it to my family. I'm like, "You guys, do you wanna play this with me?"

And you had just released the multiplayer, and we spent like three straight hours just playing that game in the living room. It was addicting. So tip of the cap, it was very well done.

**Geoff:** Thanks. I think one, you know, one of the things that we really tried to do with all of them was zero friction. So like, download an app, don't have to sign up. You just, you enter the URL and you immediately start playing. That sucks for retention, but it is awesome for, like, when something goes viral because it makes it absolutely frictionless.

But retaining those people becomes the issue, which is why we saw such a rise and such a fall.

**Ridd:** It makes sense. You did, like, the whole social loop though, I think you really nailed. Like, when I was originally ideating for Backyard Designers, which did not... A little more niche, so it didn't have that type of virality. But like, you know, it, it really had a moment for, like, [00:05:00] a week. I fed Claude two web-based games for inspiration on, like, the social loop.

Dialed was one of them, and the other one was, uh, 82 in '0, the NBA game. So I have been thinking about this product since.

well, for people who are listening who are still like, "Great story, but who the hell is this guy?"

**Geoff:** Nie?

**Ridd:** Uh, can you give us a little bit of context about the rest of your journey?

Because you've done a lot more than just develop viral web-based games. Uh, so maybe take us through some of the, the main chapters of your journey leading up to Lightspark, and maybe you could talk a little bit about how that shaped who you are as a designer.

**Geoff:** my senior year, I started designing rave flyers back in the '90s, early '90s. and I was really into print design because I had a neighbor who he went to school for design, had printed out a brochure for a local Porsche dealership, and I was like: "Holy shit, that's a job.

That's incredible. I wanna do that." and so got a computer, started designing, you know, rave flyers and stuff like that, then worked at a print shop. I really wanted to do, [00:06:00] but what I really wanted to do was be an identity designer, that just to me was the upper echelon. That alongside annual report design back in the '90s was insane.

Like huge budgets, photographers, illustrators, people who deal with like infographics, incredible copywriters. You're dealing, uh, with like really high-end stocks, and you're finishing off with this like beautiful piece that you're giving to people that are invested in your company. Really amazing art form that is dead.

but that's what I r- that's what I wanted to do, and I couldn't get, I couldn't get a job doing that. So I went and worked at a print shop did an identity design for this internet startup back in like '96, I wanna say. And they were just trying to put some of the first companies on the internet for 1,000 bucks.

That was their deal, basically. It was like a menu. What do you want? We'll buy the URL, and then we'll build it for you. they offered me a job to go lead design, lead design. I was a, a designer at, uh, at a, a very small startup, where we were trying to do this. That company [00:07:00] failed. Then a few people that were great from that company and I got together and we did another company f- we were using Future Splash, which became Flash.

And so we became like a, a Flash development house for a few years. And then there was a digital company called Modem Media that acqui-hired us. and then 2001, 2002, that first bubble burst, and then again left without a job.

And that's where I met my p- my business partner, John Lacks, and we started an agency in 2002 called Tien and Lacks. In 2002, the web didn't do that much, right? It was like ads and static pages and microsites were becoming a thing, As the web grew and became more mature in like the mid-2000s when you could begin to make it do things, that's where we really got interested in like software design, So we then really focused in on getting away from the advertising work, because the agencies They were investing all of [00:08:00] their time and resources into where the money was, which was like traditional advertising.

Well, that was beginning to change and we didn't want to compete in that space. Plus we just felt like there was a way bigger opportunity and no one was doing it. And agencies sure as shit were not going to be building software, not anytime soon, And then we started to work with large companies. You know, sometimes it was a startup, so we, you know, we worked on the first few v- versions of medium.com. I took my entire team, down to San Francisco, and we were there for, six months to a year working on Medium.

And then we had other teams that were working on some products for Google. We had other teams that were working on projects for Facebook. And eventually, you know, the industry had changed so much and we had had to change our company. You know, we were around for 13, 14 years. industry changed so much and we changed so much, and we saw another change coming things are getting cheaper, right?

Like there's more, there's more people doing this now. There's-- Like we're not the only game in town. We were expensive on purpose. a [00:09:00] lot of smaller shops were really... They were getting good too, and they were charging a lot less. We weren't losing contracts, we just saw a growth problem. And usually when that happened at our company, what would happen is one of the partners would take on the entire book of business, and they'd just focus in on making sure that money was coming in and clients were being serviced.

And then the other partner would take time, and I mean, you know, a substantial amount of time to rethink where the industry is going and how we're gonna get out in front of it. And it was at this moment where we were like: You know what? I don't, I don't mind taking on the client work. I love that stuff, but I don't wanna spend two or three months thinking about the future and how we're going to restructure everything.

' Cause we had done it two, three times before, and my business partner didn't wanna do that either. And so-- And we had had some of these companies, you know, our clients, some of the ones I had mentioned, come try to hire us away. Uh, and then eventually in 2015, we took it more seriously when Facebook came [00:10:00] back to us and said, " We keep hearing your name and we're, we're tired of you not working here." So, uh, that was a compelling conversation, and we shopped around a little bit. Facebook was a logical choice, and I found myself at Facebook working on News Feed, which was in 2015, like the largest surface on the internet. I was a com- Even I'd built a lot of software, I'd never worked in a large company like that, so I was a fish out of water.

and I had a lot to learn, and I learned so much there. That place was awesome to me. I really got to understand how modern software at scale gets built and growth and just like so many other things, and politics and like how to, how to get, how to make something happen inside of a large organization.

that's where I met my now business partner, David Marcus, who used to be president of PayPal. He was running Messenger and building payments into Messenger, amongst many other things. And he was starting a secret project at Facebook that had to do with like crypto, which I was not...

I mean, I was into Bitcoin and that kind of thing, but like I was like a, a crypto pro- this [00:11:00] sounds like a, wanna try and figure out what to do with crypto, but now you're trying to figure out what problem it's gonna solve. And I was like, "I'm not interested in coming to work on that." And then he convinced me.

He's like, "No, no, no, no, no, no. It's way bigger than that. We're just not talking about it. Come in and give me 60 minutes." And I'd s- I'd say inside of five minutes I was completely bought in to what we, to what we were trying to build. Yeah. It was like, let's, already send money over the products at Facebook, but not in the way you think.

So there's no, there's no real payments in like integration into something like WhatsApp, but people send money using WhatsApp all the time. They go to Western Union, they take a picture of the receipt and, and then they WhatsApp it to their friends, and then their friend or family member go to an OXXO and they try to redeem it, and hopefully the system's not down. And so we were like, "We can fix that. We can create payments inside of this, and now all of a sudden y- you can pay anybody anywhere in the world instantly and for free using a messaging app." So sending [00:12:00] money like sending a message. was a pretty compelling argument. Mark was behind it. we had, you know, resources.

We built that up, and ultimately there were so many external factors, and the fact that we were Facebook made it really difficult. at first the pitch seems great because you're like, "Okay, you have the company behind this, so you have unlimited resources.

You have access to the best talent. You don't need-- You can recruit from within. and you've got a really good idea with an audience and a platform already set up. All you're doing is building a feature on top of it." in retrospect, it, it, it's obviously way more d- complicated than that, but it sounded easy at, at the time.

And af- and then, and then after four years, the project failed. And David and I were not done we just wanted to attack it from a different perspective. So obviously building payments into Facebook or Meta products is very much a consumer problem, which has been 95% of what I worked on in my career.

And we were gonna take a different spin at it. We're gonna build the infrastructure that allows companies like Facebook or Uber or [00:13:00] whomever to do payouts or to send money. and so we're gonna build the infrastructure to let other people build a product on top of that. that's Lightspark, and that's kind of a real quick version of how I got here.

**Ridd:** what's it been like then, as somebody who's had a storied career in consumer and all of a sudden, it's not that you're working at B2B. I mean, payment APIs are like the deep end of B2B. It's the opposite end of the spectrum. So talk to me a little bit about that switch.

**Geoff:** I mean, it's all the same. I think having worked at an industry where you you touch so many different verticals and so many different types of work, you can be surprised at what you'll find interesting as a designer. I used to, when we were, you know, back when I had my agency, you'd think about clients like Red Bull or Nike Porsche or some, like, just like some big brand that you would like to-- or Apple.

You, that feels like the end goal, right? Where you're gonna be able to work on a really serious brand, working on really fun, interesting, you know, cutting-edge work. And that stuff can be fun. But I remember getting a project in to redesign, a [00:14:00] mutual fund site for advisors.

I mean, that sounds-- It, it sounds as miserable as anything you can imagine for somebody who is thinking about Nike, Apple, and Red Bull. What I learned by taking that job on, because it was building software, we, we had to build software for these people And they're not savvy. They're savvy financially.

They're not savvy for the new web. This is like 2005, '6, '7 or something like that. and it was so awesome to build that product, 'cause it was like you were really thinking about a problem, you were really solving something real, tangible. know, with a lot of the Red Bull stuff, it's like you're trying to create excitement, virality, or just make somebody feel something.

And I think that, like, some of the more perceived boring things are just so critical, and I think it's... A- and, and so useful and so impactful that's what I like. That's wh- that's what I really take out of it. Also, generally, I don't wanna throw all B2B under the bus 'cause I think all design's, [00:15:00] rising, but, you know, 10 years ago, These systems, these B2B systems, they're-- most of them are still terrible, and I think design has a place in that. These are still human beings that are ultimately using the system, and if it's designed really well, they'll use it more. They'll d- they'll, they'll use it more efficiently. They'll think more positively about it.

They'll trust it more, and they'll become your advocate. And that's important for a company like ours. I think it's important for everybody. But I just feel like I could bring a lot to the table in a space like this, even though the end consumer wasn't necessarily the thing we were designing for.

Now, a large part of what we do is we consult, we pitch clients and partners to use our stack, which means we have to envision what an integration might look like. If you are a ride sharing company and you have to pay out, tens of millions of people all over the world, that's very expensive, We could envision your software, [00:16:00] and so we will mock up and, and sometimes just like full on native apps that are one-to-one where they can tap through and really understand how like a payment system or a payout system could work inside their app. So we still do a lot of consumer work, it's just not ours.

**Ridd:** You can still kind of see the consumer flavor. Even on the marketing side, I was playing with it. Like, obviously it's beautiful, but you even have the little sound design on the hover states, and like the, the DNA is there. You can see it

**Geoff:** Yeah, I mean, you can take it all seriously still, right? just because it's, you know, global payments infrastructure doesn't mean you can't, like, give it some life

**Ridd:** Speaking of giving it some life, can you give us a little backstory behind rose.gg, which is another tool you made? I've shared it endlessly. I think it's incredible. Why did you make that? How'd you make that? And also, like, what does that say about how you even think about the role that software plays in this new

**Geoff:** so Rows is basically a project tracker, but you could use it to [00:17:00] track anything, books you wanna read. just track our projects. I like to keep everything on our team extremely lightweight.

We can get into that a little bit more later, but that's where this stems from. we were using a simple Google spreadsheet, and here's the projects, here's who's on them, here's a description, any associated links, few other things. And we'd meet about them and we'd, you know, shift things around, mark them as done, et cetera.

Pretty simple. And it worked. It was fine. Then, then we were starting to formalize some tools around the office, and so then Notion came in, and Notion was pretty good. You know, at first you kind of open it up and you're like: Oh, shit, like a, this is like I'm building a database and, like, there's so many views. And we eventually dialed it into, I guess, as best we could, but it was still kind of like it still did way more than what we needed. the needs of a five-person design team versus a huge engineering team are vastly different, right?

And so, like, Rows wouldn't work for them. so what they needed was something even bigger, so they were using Jira. Uh, So one weekend I was just like: I'm just gonna build something [00:18:00] super simple where it's just for us.

Like, it's just, it's, it's software just for our design team, and it's going to service us and us alone. so I built that, right? It wasn't, it wasn't a product. It was like a page, with some interactions and that kind of thing. then we just started taking it further and further because we, we started to use it, cause we meet every morning and we critique work. you know, even just using it here and there, I was just like: You know what would make this better? This. Or somebody would be like: Oh, I, I just did this. We should have, like, Command Z. And it's just, like, in the meeting, just like: Okay, now it works. Like, just ship it. Boom. Done.

**Ridd:** Mm-hmm.

**Geoff:** it became valuable enough for us where we were like: this is really great, and I think other people might find it great too. and so the question then becomes: Do you- choose to make it permanent? Do you give it permanence? Do you provide it to other people? Because if you do, that comes with a commitment, in my opinion.

Especially for something like this, right? Like, yes, of course, you could always pull your data off and I'm sure huge [00:19:00] teams aren't using this thing anyway, But you still just wanna be respectful that somebody has given their time and their trust to you, and so you have to, you gotta honor that.

turning that into a product, turning Rows into a product was a lot more work. Not only just did you have to make a marketing site, but then you need, we needed to do sign-up flows. We had to do, like, deletion practices. We had to do, like, there's just... The list is endless, uh, the, of the things that we had to do to make that, to turn it from a, an internal tool into a product that other people could use.

**Ridd:** You tweeted recently the Jack Dorsey quote think it's, it's something like, uh, " Make every detail perfect, but limit the number of details." And to me, this is the embodiment of that idea where the, the product only does like six things. You know? It's, it's like a crud machine and nothing more, and yet you sweat the details on every single little interaction.

And we'll include the link in the show notes, but even just the, the [00:20:00] delete and how the particles evaporate, like it's just above and beyond

in... It's perfect

**Geoff:** I mean, some of it is so over the top it's almost, it's almost funny, I think,

**Ridd:** But that's what makes it so good though. Like I, I-- It made me happy. It made me happy using it, and it was a piece of software that you wouldn't expect to ha- invoke that type of response, where I, I look at that and I'm like, " Yeah, maybe that's not the mass, uh, commercialization approach that you would take."

But all of a sudden now with software becoming like cheap and, and, you know, borderline free in the long run, it's like that's what I hope comes out of it, right? It's like you put so much care into something that maybe didn't even deserve it

what does it look like to have that... Like, how much of that mindset do you apply then to the actual B2B work that you are doing?

**Geoff:** I think my team are more obsessed about stuff like that than I am, and I'm obsessed.

they really care about all the details. I mean, I think you can see that in the marketing site, you can see that in the blog posts, you can see that on our dashboards. Well, you can't, but like, it's everywhere in [00:21:00] everything that we do.

I know it matters. Like our documentation as well, like there's another piece in our design blog where we, we talk about what else could docs do. And one of our designers here, Pat, he what docs could do and built out, I think it's one of the coolest doc, sites ever.

It lets you not only see code, it lets you choose things visually, it lets you-- It gives you an example of like how it might get implemented on the front end, so you're, you really get like a full picture of like how our software works, what the output is, and how it might actually display. we just had good docs before.

It worked, you know? but like it's, it's questioning those things, like what could make this better? how could this be different, but not just for different's sake? And I think we ask that question all the time, what makes it awesome now is that notion of abundance, you don't have to debate an idea, prioritize it, get [00:22:00] approval, assign a team just to learn if your idea's any good. You build it and then you decide. It used to just, it was the reverse before because it's so cheap. And I, I'm not saying like you're building... We're not, we're not building, you know, our interfaces for our backend or like for our internal tools and, and customers that are moving money this way.

There's a much different approach there. But we can definitely test prototypes and, and, and do things like that, 

**Ridd:** Even the way that the doc site works, like can you imagine making that pitch to like a key stakeholder five years ago, how we should invest this much into

that ceiling? 

**Geoff:** for, first of all, it would probably take like four months to build that.

**Ridd:** Exactly.

**Geoff:** So there's no way that's getting approved. that's where I like this. Especially at the... You know, I don't know what it's like to work at Meta anymore.

I'm, I'm sure it's a lot different than when I was there four and a half years ago. but I know at a smaller company like this, you know, 80 to 100 people, it is how you can work and it's incredible. I'm not saying anything new. Everybody knows [00:23:00] this, but it's, uh, it's really changing things because I think it just gives us the ability to just try things and then decide.

and I don't think it means that we're going to make the same amount of software faster. I think what it really means is we're just gonna make way more software, some of it might just exist for you. Like you might just build a tool to, to tweak something on something that you're building and it disappears, You might build something that solves one problem for a few people for a week. and you might build something much, much more substantial. You're just gonna build... You're gonna have a lot more stuff. But I think the problem becomes like when this little piece of software becomes important, and this this goes back to the rose thing. When it becomes somewhat important, somebody has to own it, right? just making something and then making something permanent are two really different decisions. I think that, like, that's just a big distinction is that we're just gonna ha- we have this abundance We need to figure out [00:24:00] what, what lasts, 

**Ridd:** I wanna go back to something that you said about how the people on your team care even more than you do, which is obviously a very high bar. talk to me a little bit about how you approached building the design team around you and what the ideal shape looked like, how you wanted that to operate. You kinda get this blank canvas.

You, you know, you've been around the block, you've seen different shapes of teams. What was your approach this time around?

**Geoff:** want anybody jaded from big companies. I think it was more just around I need to find some folks that really care about the work and wanting to get better, like no egos. This kind of goes without saying, but I really mean the no ego part so much I've worked with people where they won't show you anything until it's perfect. I've worked with people where if you give them a piece of feedback, they just kind of pocket veto it, or ignore it, or whatever. and God forbid you have somebody on your team that maybe [00:25:00] thinks they could just take a, riff on it.

and I want the exact opposite of that. you can step on anybody's toes, no one's gonna care. We all just wanna win. We all just want the work to be as good as it could be. We wanna get better as designers. We wanna learn from other people. So the first hire is, uh, for me, was just like, I need somebody super well-rounded 'cause it was just me, uh, for the first six months.

And then I hired Jay, and Jay was great all around. He was like an incredible visual designer. He is a great product thinker. He's very proactive. He doesn't require a lot of hand-holding. he didn't require any hand-holding, I should say. and he just jumped right in and was immediately producing good work. and then the next hire, same thing. I think for each hire-- And now I think I'm maxed. Like I think at our company size and even as big as we wanna get, I don't think I need more than what I have today, which is myself and four designers. I really don't. I think that the level [00:26:00] of horsepower that we have, not just 'cause of the people, but because of the tools and the people and our culture and our product, I feel like that is ample.

Then I think it's like, what's the superpower that you bring that none of my other team has?

Like, how do you level us up, right? Because if I hire all the same archetype, like w- we all care about the same things, that's great. It's really great. But like no one's going to really improve as much as maybe you want. Plus you're gonna have gaps. Oh, no one's good at motion graphics? Okay, so I guess we'll just outsource.

But now that person's not necessarily aligned with us, They don't necessarily have and understand what quality means to us. and so I think that each hire that I've brought on They bring something unique. They're, they have a baseline of greatness, and then they've got a superpower.

and I think that that has been a huge part of it. 

**Ridd:** One of the things you said to me earlier was how you're just giving a [00:27:00] ton of feedback and, and really prioritizing this culture of feedback. And so I'm wondering if you can help us be a fly on the wall for that. maybe kinda two parts. Like one, I'd be curious if there are ways that you feel like you've refined your approach to feedback over the years, but then also, like, if there are any common themes that you find yourself bringing up today, that would be super interesting as well

**Geoff:** feedback in large groups is challenging because there's so many different types of people that need to hear things different ways. And large group crit can crush some people and others can dominate it. and so I think that was always a challenge for me at Meta. And I would run two crits a week at Meta because I really-- I can manage people, I can manage a team, it's fine.

But like, m- that's not where my, my power, my superpower is just trying to get great work out of people, and instilling some of what I've learned over the years into that work. And it's a two-way street, 'cause when I share stuff, I get [00:28:00] feedback too. and so, you know, we meet every morning. It's at 9:15.

Somebody usually pings the group before to see if we need to meet. We meet most mornings. I wrote about this on the blog too. what we do is we will g- just go through the rows list and see, and we'll just go down each one, like what, what's the status of it? Sometimes this meeting take-- Sometimes we don't do the meeting.

Sometimes the meeting takes 15 minutes. Other times we'll spend three hours, because there's no other meetings. I don't do one-to-ones. We're not having a b-bunch of career talks. gonna know when things aren't going well, and you're gonna know when they're going well.

and so we try to remove all other meetings except for this one. when, when it comes time to talk about work and, uh, and, and I think Our tendency here is to share it really early, and to share it really often. I know that that's a common thing, but, like, a lot of people still don't do that. it's no holds barred. It's all very, very respectful. I'm not afraid to jump in first. I'm-- I, I would very much avoid that, on-- in larger crits, but we're a much different [00:29:00] tight-knit team, and I don't... Not, not that I always speak first, but sometimes I will in this environment where I wouldn't normally in, in another environment.

And sometimes the feedback is, like, high level, but a lot of times it's, like, really in the weeds. It's details, and how can we make this better? there are plenty of times, and there's just a culture of people calling things out, and just saying like: "Oh, have you thought about this? Have you thought about that?" And sometimes not even being so polite about it, 'cause that's, you know, I think how you get taught to be polite in critique. It's just like you try to make it their idea. You try to suggest things. It's just like: "No, man, just tell me what's wrong with it. if you think that the-- this just looks like shit, just tell me it looks like shit, and maybe you have some ideas, maybe you don't.

It's okay if you don't have ideas. Also, if you have ideas, take the repo or the Figma file," I guess that doesn't happen so much anymore, " and then just go riff." Or we'll all riff on it in the meeting, Everybody will just have their laptops and be like: "Hey, guys, let's just spend 15 minutes and help try and figure out what the thing is [00:30:00] here."

We won't necessarily nail the answer, but we'll give that person enough to go yoink and then make it their own or make it better, too. And that, and that's just how it works. We're just-- We're in the work, not just talking about it. We're sometimes just doing it.

**Ridd:** I love the just taking 15 minutes and everybody working on a challenge together.

**Geoff:** Yeah

**Ridd:** I've been in that type of meeting before,

**Geoff:** They, they say, "Let's do a lightning round." It usually s- it's usually at the end of the day. There's like maybe somebody's been struggling with a problem, and they're just like, "Yo, I'm really struggling. Can we do a lightning round this afternoon at 4:00?"

And all the designers will spend an hour, and then they'll just discuss, and then problem solved almost always.

**Ridd:** Okay, so you talked about the lack of meetings, presumably just creating space for focused work, and then also this culture of feedback. Anything else that we haven't talked about that you're doing as a leader that taps into this superpower of getting great work out of people?

**Geoff:** We have a really good social relationship too Like we hang out, we go to dinners, you know, we'll [00:31:00] go to concerts. Yeah, we're friends. Makes a, makes a big difference

**Ridd:** one of the things that you mentioned earlier was that your son is one of these hires, which I think is just a phenomenal part of this story and, and such a fun piece of the culture. So I guess I'd like to hear a little bit more of like the context for that.

**Geoff:** yeah. I'll try not to get teary.

**Ridd:** yeah, I, I know it's a special thing, right? Like, uh, you don't get that very... It's, it's a LeBron and Bronny kind of thing.

**Geoff:** my son, my eldest son, Cole, he was studying to be a designer, went down to, SCAD. COVID happened, didn't really get to experience it. Was missing home anyways, so went back up into Toronto and, and finished his, uh, his degree actually in industrial ge- design.

He started out in product design and graduated, uh, I guess a couple years ago now. And we were, I, I guess we were two, three designers maybe at the time. And he was hanging out a lot down in LA. He was in Toronto, but he'd come down for a visit and just stay for a while.

He wasn't working. He was looking for work. And he was doing-- getting ready [00:32:00] for some interviews up in Toronto to go work on, uh, an app, a startup. And I was obviously very encouraging of that. and then we were throwing like a partner conference called Sync, we really needed some help on it.

We just needed another pair of hands, and he was pretty capable with like Figma. Early days, you know, new grad, but he was, he, he was pretty capable. So he just came in and started to help us out. And that was just like him, learning on the job. And i- his work just got better. And then he, he was working on some other things.

He went home then I was like: You should just come work with us because I think you're gonna learn so much so quickly working around these people. They're genuinely good people. It's not just about wanting to get the work better. They want everybody to be better. And so I had Jay, who, uh, is his manager, bring him on and start working on stuff.

It was mostly like sales material and building out mocks for pitches at first. But now, you know, [00:33:00] now he's shipping code and building, you know, real tools for salespeople to use and for our customers to use. it's surreal to think about it 'cause it, I don't know, as a dad, you, you, you know, you, you think about those father and son companies, you know, the nostalgia of that.

And like the fact that I get to live that is, yeah, it's pretty awesome.

**Ridd:** And you don't see it in tech. I think that's why I like it so much, because that's also, like, a dream of mine, but you never see it in tech

**Geoff:** you never see it in tech because tech's still pretty new.

You know, my son's You will though. I think you will. I think you're gonna see a lot of like, brothers in business, fathers and sons and daughters and mothers, like you're gonna see it

**Ridd:** another reason why I find it so fascinating is that there's so much change happening right now, and I think a lot of uncertainty even for people listening, they maybe feel a little bit of uncertainty about what the future of this role looks like. And you've kind of navigated a couple of these cycles already, you know?

And, and so what do you think your son can be doing [00:34:00] right now where he doesn't wake up one day and realize, "Oh, like this is the equivalent of the annual reports." Like it's just gone, you know? Like how do you invest in your son to thrive in this career moving forward where he still has so much to go?

**Geoff:** it's not like it was even in the earliest days of the internet, even though that was exploding. it's incredibly hard to look that far out. It was incredibly hard to look that far out back then. Now I think it's impossible. I just don't even know.

And I feel, look, I feel lucky to get to work with both of my kids and, uh, and I know how hard it is to find work because they both looked for an extremely long time. And I know, and I know their friends really well too, and I know they're really struggling as well. All I try to do is just try and look out just far enough to make sure we're at least not behind, if you're not shipping software now, you're behind, I just wanna at least be at the forefront. I don't have to have a crystal ball and be out, ahead of it so much, and I think that I just wanna [00:35:00] instill that in him.

It's like, it's one day at a time, but, like, don't lose, sight of, like, what's new just because you're used to the tool or your workflow or whatever. I think that's sound advice. I think it's hard to live by, because I know even for me, I open up X now and it's like, holy shit, there's not enough time in the day to try all these things.

And And I'm sure there's some amazing stuff in here. I think you just have to have your finger at least on the pulse, 

**Ridd:** it's quite a claim, the whole like if you're not shipping software, you're behind. Especially as, again, like y- you've seen a few of these cycles now, you know? And so I, I almost could see it going like the other way where it's like, "Ah, you know, it's not about the tool," you know? Design, you know, there's this strand of design that kind of goes through all of these different eras, but

that's quite a statement.

**Geoff:** yeah, yeah. But like the tools, they're just accelerating faster, and I guess that's the part that's scary. just use design tools as an example, right? I'll use design tools, and then I'm gonna use another analogy. design tools, you know, whatever.

It started [00:36:00] out with like Photoshop, a mixture of Photoshop and Illustrator, probably QuarkXPress if you were doing print. And then, but, and for web design, you know, it was mostly Photoshop, and you learned it, and new versions came out, you learned it, and you figured out how to like bend it to your will. then Flash came out. That was crazy. Totally different. Could do completely different things that Photoshop never could, nor could CSS, nor could any of that, right? Not to the degree that Flash could. Totally new tool. and then we just kind of went back to the basics 'cause that had to go away because of the iPhone, basically. and then we turned to Sketch. better, different, better at some things, worse at others. And then Figma. Figma was like, oh my God, this is incredible. Like, we can build out full design systems, and there's like auto layout and like I'm getting code. Like I'm getting, I'm almost, I'm almost building.

I'm almost building now.

**Ridd:** Угу

**Geoff:** it's just like I am building. there was this window of time where it was like a lot of Figma still, and then a [00:37:00] little bit of AI to try and build it out. And then that's just gotten, it's just flipped.

this tool is just accelerating much faster, and it's just a, a, a much different shape than the design tools.

'Cause the design tools have all kind of been same but different. This is a much different design tool. But to me, it, it's still a design tool. 

**Ridd:** the thing about like the Sketch to Figma jump is you actually could get left behind at that jump, but not necessarily because Figma did anything too radically different in terms of the output. Like, I think it was a better UX in a lot of ways, but Figma was, this is where collaboration happens.

Like, you have to use this tool because you cannot collaborate with the rest of the team if you're not inside of this tool because it's all web-based, which was what was such a, you know, that was the crux of the value proposition, especially in the early days, where it's interesting now with all of the AI tools, we've almost punted collaboration in some ways.

Like, it's much harder to work together. There's a lot more friction to like, you can't just hop [00:38:00] into somebody's Figma file, but the capabilities have skyrocketed to a degree where we're just like, "No, no, no, this is now, this is now the trump card where you can actually get left behind again." But sometimes it almost feels like we're working a little bit more single player.

**Geoff:** yeah, the other analogy I I would use for this would be like photography with photography, the cost of film made you think before you pressed the shutter, right? You had 24 shots or whatever you had in your, in your, in your film, You were being really mindful of the things that you were shooting, right?

You weren't taking 12 nearly identical shots of your lunch but when digital photography came out, we didn't start just taking 20% more photographs, right? Because the cost was essentially zero.

So we would take photos of everything, right? like we're gonna go look back at this and laugh at how small this all was. 'Cause like when digital cameras showed up, people used them like film cameras.

Same pictures, right? but no one was photographing their parking spot yet with their digital [00:39:00] camera. And I think that's where software is. I think like no one's photographing their, their parking spot yet. just faster development, the same pictures without the development costs, and our parking spot phase hasn't started yet. and that's where I think the what deserves to last comes and like what do you commit to?

Because building is gonna become free. You're gonna go from this crazy process to determine what to build, then to build it, then to test and iterate. And it's just gonna be, "I need this, and now I have working software."

**Ridd:** Do you ever squint your eyes and imagine what some of the second order effects would be of abundance? Like if we really are just in a transitionary period of

**Geoff:** okay, so I 

**Ridd:** what does it even look like?

**Geoff:** I think 95% of it is gonna be shitty, right? So, and shit, shitty software is easy to deal with. It just goes away 'cause it's bad. No one, you know, it's a blip. because inside of whatever small percentage, there's gonna be some [00:40:00] really good stuff. and what I th- what I think will happen is, like, people will recognize the good stuff And either the person who created it will make it real and permanent, or somebody will copy it and make it real and permanent and turn it into a business. And I think that's, I think that's actually a risk too, is like the cost of copying is free.

to go back to Color, I didn't have an iOS app. Still don't, right? I, I... This was February when I, when I first launched Dialed, it started with just a ton of copycat websites, who were like, you know, even like using our name. They basically just like told whatever agent to copy the game.

And then iOS and the Android store, like they just got inundated with clones as well. And this is early days, man. were they perfect copies? No. But like people were downloading them and using them, that's ano- that's gonna be another challenge is that it's gonna be easy just to mimic and copy and then try and make something better. that's gonna be awesome, and it's also, I think, gonna suck a lot because you might hit [00:41:00] on something really big, and then in 24 hours somebody can take it, make it better, and become the winner.

**Ridd:** That's gonna happen in time. I, I think about that for designers. Even, um, Shad CN had a post recently on Twitter, and it, like, it hurt my heart to read 'cause he had, like, poured his heart and soul into this component and set of interactions, and then he's like, it wa- took under 24 hours and somebody had ripped it completely and positioned it as their own.

And that, I mean, we have ju- we're in the first inning of that dynamic and what it means to be a software maker in that world.

**Geoff:** What-- So this has always existed. The speed at which you get there is changing. So I'll give you another ancient example. One of the things that put our old agency on the map was this thing called the iPhone PSD. It was basically when the iPhone got released, everybody wanted to mock up apps, but there were no mock-up tools, and Apple didn't provide any assets.

And so one evening, I took [00:42:00] every screenshot from my iPhone, and I redrew like, vector with gradients and all the things to try and make it look as, close to one-to-one as possible, and created components so that you could just open up this Photoshop file, and you have all the templates and all the assets, and they're all editable.

The buttons stretch properly, and I just put it out in the world. It got really popular, but a lot of people just started to steal it and then try to charge for it. So we were just like, "No, no, just give it, put it out there for free. It's good for us. This is like free advertising." and then people just started to, to steal it even back then and make it their own.

They'd, they'd move things around, but we put a bunch of things in the, in the file. These are really interesting. If you, if you don't know what a trap street is, you can look it up on Wikipedia, but I'll expl- I'll explain it. a trap street is when a, a cartographer, somebody who makes maps, would draw a map, and they would purposely put a few mistakes in it so that if somebody tried to copy that map and extend it and make it their own, they'd know that they were using [00:43:00] their property.

And so I used to do that in that file, and I would be able to call people out all the time and be like, "Don't lie to me. I know it's mine because this, this, this, this, and this." but that's not gonna be true for software, right? Like, it's just like that-- It's just gonna be a totally different thing.

Yeah, I do, I d- I, I don't know where that's gonna go.

**Ridd:** And it's not even just about the idea too. Like obviously if you have an i- a good idea like a Dialed, and sure people were copying it now, but like if you would release Dialed today, I'm sure I could point Fable 5.1 at it and spit out something that looks really freaking similar in like what, 90 minutes?

You know, like probably. If it's 8,000 lines of code, uh, 90 minutes tops.

**Geoff:** It's not 8,000 lines of code anymore. Now it's a lot more difficult.

**Ridd:** As soon as I said that I was like, "Ah, you probably threw another zero on there." But, but, uh, still, you get the point. It's like there's the idea copying. There's also the visual identity, like the stylistic taste, you know, this like expression that comes out of us that now you put on Twitter, you [00:44:00] see it, you take a picture, and you feed it into Claude, and you're just like, "Hey, can we make our thing like this?"

And then you, you get something. Or, or like a little interaction, and somebody really, really sweats the details on an interaction, and I just... You know, you can take a video and feed it in and just copy all of that, and it's like pretty good. And on one hand, it's undeniably an amazing way to work, you know?

Like I, I, I'm not an idiot. I can-- I know something is good. I see it and I'm like, "Oh, that would be fantastic for my component in this part of my product," and I can just spin up a work tree and start the work in, in 40 seconds. But on the other, you, you, y- I don't know. It's hard. Like I f- I almost feel bad, but it's inevitable

**Geoff:** I think like small things like that, I think just like a hat tip to the developer or whoever, designer is like good. 'Cause I, I, I've done things like that. I started to write with em dashes again 'cause I was like, "Fuck this. I, I, I, I'm, I'm d- I don't care if you think ChatGPT wrote this.

I wrote it." You-- And somebody on X, and I wish I could name [00:45:00] check him right now, I can't, but they had done something on their site where if you hover over an em dash, it says, "Written by a human," or something like that. And I was like, "I'm yoinking this." I was like, I, I wrote them. I was like, "I'm yoinking this idea.

I think it's awesome." And, you know, and other things too, like Aave, they came up with like a really amazing way to deal with iOS Glass on the web. And like I think sometimes you j- you take these things and you can just give like a, a nod, But I think like a full idea, that's a different, that's a different thing entirely.

**Ridd:** It's a, it's a bit of a wacky time to be a, a designer and also, is that even the right word? You know? We're just building software. You talked about, like, shipping software kind of thing. It's why, again, coming back to the idea of you having the ability to work with your son is so cool, because this is, like, one of the most insane times to navigate in the history of the industry.

**Geoff:** you know, I get to witness it firsthand too, because he's, he came into this really cold, right? Like brand new graduate, very [00:46:00] little experience with AI in terms of coding. and it's insane how being around the right people and environment, how quickly he's progressed, And it's not just about my son.

It, it's about that whole generation. Th- they're all progressing that quickly. open up X and I'm like, "Oh my God, this is an amazing piece of work." And it's not always just like this shiny object where it's just like, oh wow, what an insane way to use like a particle effect. It-- Sometimes it's just like, this is a incredibly good idea well executed, and you have probably been in this industry like four years, and that's insane to me.

**Ridd:** Yeah, for me it's seeing how people who truly are AI native. We all say AI native, but we're not AI native. We're like, we could be AI fluent, but we're adapting, you know? for me it's like seeing how they tool chain and you're like, "I just wouldn't even have thought to combine tools and create that type of workflow."

Right? Like, it is just so, exists so far out of my brain, and then you click through to their profile, and it's somebody who's like [00:47:00] 24 years old, and you're

just like, "Who are-- Like what, what are you?" You know? I, I don't even know. I look at a lot of portfolios and you can tell the difference between somebody who has a little bit more of a storied background that is trying to almost rebrand themselves, and then this, this person who they don't even try to describe themself as like a designer or design engineer.

It's just like, "I build software and here's all the things that I built." And man, they're gonna fly past me.

**Geoff:** I wonder what happens to the folks that have been around a while, like a decade plus or, you know, a decade plus, maybe 15 they're all either senior managers, VPs, or heads of design. those companies are gonna change. Large companies are always gonna need structures and leaders and stuff like that.

But what happens to these middle managers who maybe weren't the best craftspeople, but they're really good at managing people, and now you need to do less of that. You're not providing enough value. This is, this is a bold statement and it, and it's not for every company, but [00:48:00] I, I fear for, like, the managers who are not deep in IC work or like capable of good IC work.

Because I think that there's not gonna be a lot of middle management. I think it's going to be managers who build just like ICs, and they just have an extra role on top that just gets layered on top. you know, it's not necessarily gonna be expected to produce as much work because there's other work on top, but I do wonder about what happens with those folks that just have been out of the design game for a long time and aren't experimenting or close to the metal when it comes to development. I don't know what happens to those people.

**Ridd:** I think that's why I admire your journey, Jeff, is that you've been able to reinvent yourself multiple times as the industry's effectively just changed underneath you. And the fact that you have been through so much, accomplished so much, and yet here you are working on, like, a little design team in a startup that's moving fast and everybody is [00:49:00] shipping.

I think it's a testament to not only who you are as a designer, but who you are as a person. So I appreciate you coming on today and, and just sharing about not only your story, but how you see the world and the different things that you're thinking about. It's been a lot of fun, so thanks for the time.

**Geoff:** Thank you so much, Red. Awesome. Really appreciate it
