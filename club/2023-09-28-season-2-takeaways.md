---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: b_FbLYvqmA4
slug: 2023-09-28-season-2-takeaways
source_type: descript
source: https://web.descript.com/13e18960-952b-45c3-90e0-86089f2146a1/09b8e
guest: Ridd
host: Ridd
title: "5 things I learned in Season 2"
published: 2023-09-28
duration_min: 13
generated: 2026-09-10
generator: dive-club-ideas
---

[00:00:00] **Ridd:** Welcome to Deep Dives, my name is Rid, and this is a special episode, because as we're going deep with all of these talented designers, I'm learning so much from people like Dan Mall and Grace Walker and Fonz Manz. So I wanted to pause and take just a few minutes to share five key takeaways and highlight some of the things that I've learned in season two of deep dives.

Let's dive in. It's pretty easy to go overboard with variables and Figma. And that's why my default advice has been to build the smallest possible system and to not worry or spend too much time architecting for a future that you might not even know if it's going to happen or not. But after talking with designer advocate Louis Aurillache, I realized there's actually one exception to that rule.

Even if you're not sure if you're going to have multiple brands or multiple products in the future, it still makes sense to separate your primitive variables from your semantic variables and put them each [00:01:00] in their own library from day one. So in one file, you'll have your color foundations. These are your blue 300s, your gray 400s.

And then in a separate file, maybe it's your style guide, you'll have your border subtle and your background primary and things like that. It's not really that much more work than keeping these in the same file and just de scoping your primitives. And this way you have a much more flexible foundation.

And you can make sure that you're not going to wake up one day a year from now or something like that and realize that you have this massive refactor on your hands. We do not want to expose primitives to any file that is going to be created. You only want to be able to use the ones that are describing the intention, not what they look like.

There's a way to get around that by prefixing our entire collection with an underscore or a period or full stop. But that seems a little bit fragile to me. So what I want to do is predict a future where maybe we need to move things around. We might need to split files. Something might happen where we [00:02:00] have a new brand that we want to support or a new product we want to develop in which case we might need two semantic layers.

To me that is going to be a really challenging project of splitting one file into two, at least, and piecing back everything back together. So what I'm thinking at the moment is primitives in a separate file. Semantics in a separate file. Just split them up so that you know there's a relationship. But they can live wherever you want.

I've met people who have these portfolios of clients on Retainer, and on the outside, it looks pretty sweet. Having that predictable monthly income looks pretty awesome. But I'd never considered why we should actually avoid getting clients on Retainer in that first year of freelancing until my deep dive with Grace Walker.

Because in that first year, you should be raising your price with Each new client that you take on you got to figure out where is your price ceiling as a freelancer in that first year? I think what I Did and how I [00:03:00] approached pricing was that every project I did I raised my price Particularly within that first year.

I still do that now But to a lesser extent because I feel like there is kind of this This, this growth curve of like you can chart, you can increase your prices very, very rapidly. And then there is like kind of a ceiling that, you know, like there's a max price that someone's going to pay for a solo freelancer, um, for most things.

But in that first year, trying to figure out like what that curve was, was a, was a huge challenge. Um, so increasing my, my pricing with every single project. Once I had done a website for 3, 000, I was like, Okay, well, let's do one for 5, 000, and let's do one for 8, 000, and 10, 000, and 15, 000. And so it really was just every single project, raising that price a little bit, knowing that I can do work at this level, I can probably also do it at that level.

And that's why Grace said that one of the biggest mistakes that she made in that first year of freelancing was taking on too many retainer clients because the more that she raised her prices, the more outdated that retainer [00:04:00] price became. Like I do retainers now and they're perfectly fine, but particularly within that first year when my pricing was changing so rapidly and really growing and kind of scaling up, um, I found that taking on retainer work where I had a fixed price every month, um, three months down the line, that price was outdated.

And so I was having to have conversations with. Like my pricing has changed. I've increased the rate here, but like you don't want to have those conversations too often. Um, and for me, they were really the kind of like a point of stress. And so, um, I found that that kind of retainer work that I was doing in the first year ended up being a blocker to me taking on more growth at higher rates.

Um, so that was something that I think if I were to go back in time, I would absolutely tell myself that. Retainer work can be great eventually, um, but when you are in that first year of rapid growth and rapid price changes Um, giving yourself the freedom to not be tied to a certain rate [00:05:00] for more than a month or two, um, is, is really, really beneficial.

One of the things that Dan Mall said in his deep dive that really stuck with me was this idea of treating your design system like a product. Let's say that you're creating a new software startup. The last thing that you're going to do is go into hiding for a full year and build this product that's fully fleshed out with all of the features that you think your users could possibly need.

No. You're going to find whatever your MVP looks like, and then you're going to iterate your way to success from there, which is why Dan's advice really resonated with me. Stop making the foundation. Stop trying to make the perfect library first. That's not what you're making. You're making a product. So, if you were to make that product, what would you do?

You would do exactly what you just said. You would make a couple of sketches. You'd sketch, right? Whether that's sketching in code or sketching in Figma. And then you would show it to a bunch of people. You'd schedule a bunch of conversations. You'd show it to a bunch of people. You'd get feedback on it.

And then you would iterate. And you would do that a bunch of [00:06:00] times. Until six times, and you would go, I think our accordion is ready for primetime. You know, let's get, let's get 30 people in here to use it. Not 3, 000 not 30, 000. Yeah, you know, let's get 30 people in here to see if you know to kick the tires on this The problem is that too many people are looking at systems like Polaris and material and they're letting that Shape what their output should be but these are massive systems that have been refined over years But if you treat your system like a product, then you're not going to build this V1 that is robust and comprehensive.

It would be the equivalent of launching a new e commerce startup and looking at Shopify as the measuring stick for what you have to build to launch. Instead, we need to find that minimum viable system to launch with. And we're going to do it by following a pretty familiar product process. You're going to talk to people, do user interviews, get feedback on early concepts and pattern matching and maybe we're going to end up launching with something that's pretty small.

Maybe it's even [00:07:00] one set of buttons. So if you're working on a new system right now or maybe you see Figma variables and you think that this is the time for a large refactor, instead of asking yourself what your V1 can be, What if you asked yourself what your v0. 1 can be? Because I bet you can launch with a lot less and iterate from there.

And this product mindset carries into the rest of the design system lifecycle as well. Because the best product teams are the ones that are eliminating feature bloat whenever possible. They're often actually deleting code and removing things from the product. And a design system works the same way.

Once you get the data and you're seeing how designers actually use these components and you're getting all of this feedback along the way, you can start to identify your highest value components. And then only support that. You can actually remove the rest from the system. Because what Dan shared is that the best design system teams are not the ones building the biggest, most [00:08:00] comprehensive systems.

They're the ones that are relentlessly trimming the fat. I've had the privilege of talking to people who have designed systems for like five years, right? They've had it at the organization for five years. Um, and one of the things that has been surprising to me, but no longer surprising because I've seen it so much, um, is that...

What a lot of those teams are doing is they are removing components from their design system, right? They, like, they've grown to 300 components or 100 components or whatever it is. And then the next phase of that, after that 18 months, after that, you know, three years mark, is like, we're going to go down to 50.

And I'm like, why are you going down to 50? And they're like, well, because we can support 150, like, okay. You know, with our team of 10, you know, at this point. But we could, we could support 50 components much better. At a high level. So what they're doing is they're analyzing What are the highest impact components that we have?

You know, and components or patterns or whatever it is that that design system has taken on as their chart. What are the highest [00:09:00] impact things that we have and let's support those things fully. One of the ideas that I haven't been able to get out of my brain recently is the structure of a design portfolio.

And it all stems from a deep dive that I had with Yuen Wang, who is the head of design at Maven. And when I say design portfolio, you probably have an image pop into your head. It's that same hero section with some kind of a generic statement, and then you have a grid of cards with thumbnails and a CTA that takes you to your individual project pages.

But the problem is, this type of layout fragments our narrative. We spend so much time obsessing over how to tell the best project story and all of the details and our process and the output and what we learned and the takeaways and how we've grown that we forget to tell our compelling story. And at the end of the day, that's what's most important.

What if we started to view project pages as more of an appendix and not the primary way that people consume our work? That's why I really like Yuen's take where she says that more [00:10:00] designers should start to draw inspiration from 3D artists because they always have this one video that is the Perfect embodiment of who they are and what they're capable of making.

And if we started doing this as product designers, we'd probably start to view our homepage as more of our sizzle reel. And then we'd have a single place to tell our story, share all of our best UI accomplishments, prototypes, all in a single scroll track. Just like show the the best stuff like kind of like the the what is it called like the highlight reel that like the 3d Designers usually would pack together, right?

It's just like a trailer of like all the super cool stuff that they made I think maybe we designers like product designers should do more of that too you've probably heard somebody at some point say something like The only thing that matters is what's in production. And that's totally true, but man, is it hard to fight this urge to keep Figma clean and treat it like it's the source of truth.

That's why I so appreciated Adrien Griveau's [00:11:00] perspective. He's the founding designer of Linear. And obviously everything about their product is exquisite and yet what Adrian says he does is a lot of times he's just taking a screenshot of what is currently in production, drawing rectangles over it to hide any elements that is necessary and then he's actually designing on top of that screenshot and that's a big part of how he is collaborating with the engineers at Linear.

Most of the time if I do small improvement I will just take a screenshot of the app and just design on top of it because. In the end, what is the user looking at? Like, okay, maybe your file look fancy and super nice, but if in production, you don't have the same thing. Uh, that there is a point for me, like everything that's happening behind the scenes is nice.

I'm very excited to see that happening. And I think we have better tools to do that. So for sure it's cool. But in the end, people are looking at your productivity. What do they see? Now, if you know me at all, you know, that I love organizing things in Figma and building different systems. And for sure, I am [00:12:00] a big believer that strategically using components in Figma can make you a much more effective designer.

But every once in a while, I need to be reminded that the system is not the product, and the product is the only thing that matters. I think when you are very early on on your product, spending the time designing systems, it's to me the time that you don't spend improving your product. So it's the philosophy behind there was that.

If you are alone or if you are one of the designers working on a project, all the time you will spend designing the design system is the time that we are not building new things or improving the thing you already have. I hope you're learning as much as I am with deep dives. We're going to keep it going next week when we kick off season three.

Don't forget to subscribe on YouTube, Spotify, or wherever you get your podcasts. I'll catch you in the deep end.

