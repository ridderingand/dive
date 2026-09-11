---
schema: 1
ip: dive-club
show: club
type: transcript
youtube_id: oIVRZh596C4
slug: 2024-01-25-molly-hellmuth
source_type: descript
source: "https://web.descript.com/2821577e-f57a-4106-8e16-b8ee88e21208/1622b"
guest: Molly Hellmuth
host: Ridd
title: Building with the latest Figma features
published: 2024-01-25
duration_min: 46
generated: 2026-09-11
generator: dive-club-ideas
---


## [00:00:00] Catching up with new Figma features

[00:00:00] **Molly:** After config, there was so many new features to just wrap our heads around and start using and yeah, so it's an overwhelming process to update an entire system using all these features. So I actually took things a little bit slower than I normally might and really experimented with all the different features.

[00:00:17] I even worked on one or two side projects just to really experiment with variables and the new auto layout wrap features and all these different things just to make sure I understood them fully. I understood the limitations of them and like, are they actually doing what I think they're doing? And how can I iterate on these new things?

[00:00:36] I think with every new. feature, it can be easy to just like really quickly jump in and start updating everything and kind of play with like a new toy, but it's so important to, to really take your time and learn how to use these features in a way that's going to like really serve you and your team. So I took like a month or two, which surprised me how long I wanted to take to like fully understand these new features before I [00:01:00] started incorporating them into UI prep.

[00:01:02] And of course , the biggest one is color variables. That's just like, such a massive thing to introduce to any system if you've only been using styles so far, which of course everyone has been. And yeah, that took the bulk of my time and effort and it's like brain power to kind of wrap my head around how should we use these new features, especially these new variables, and make them as powerful as they can be while also being intuitive and easy to learn for both you and like a new person on your team and also maintain long term. So that kind of sweet spot of complexity that you want to hit. And so I really started there and just like really diving into especially just like naming conventions for things like color variables and like, until then semantic naming seemed kind of optional in Figma and now it seems like almost mandatory with like the way we're using these new features or at least [00:02:00] highly suggested.

[00:02:01] And so just making sure that those made sense and were easy to to use and to learn and just kind of going through like a Couple of different ways this might work and how should we structure things and then flipping all on its head and just seeing you know Do I like that better? Do I not like that better?

[00:02:18] Showing it to a few other designers seeing you know, if they think it seems intuitive to them because of course when it makes sense to You might not make sense Initially to someone else so just gain that initial feedback as well and then of course, you know, we're still learning about variables. Variables are still evolving. We've only had this kind of like first wave of updates with them. And I have to imagine there's at least one or two more coming. , just like we saw with Other huge changes like our component variables where we didn't even have, you know, exposed nested instances or Properties the way we have them now.

[00:02:53] And so the way we use things is just Evolving so much. So I'm still very much keeping open mind of should the [00:03:00] variables be used on their own? Should they be fed into color styles? There's just still so many things to Really think about with them. So like still keeping an open mind and I think I jumped into number variables next.

[00:03:11] Those are just an easy win for any system, I think. Because we didn't have them before. And so adding them into any system is just kind of a net positive because you're not having to replace anything or compete with like an existing system of how you Saved and reused certain elements. And, they're also a lot easier to adopt. Especially with the plugin, I think it's Variables Pro. It does a pretty good job of selecting a component or a design and, like, automatically applying number variables. Where I think it's just a lot harder with color variables because You might have the same blue color that's used for a text and a background and a border.

[00:03:47] And identifying which one is which is, has a little more nuance to it. So that, I think, is a little more manual still. So Yeah, it took a little while, longer than I was expecting to update it, because these most updates have been so [00:04:00] foundational. They really touch. Everything in a design system. So, yeah, definitely worth taking the time to, like, fully explore the new features before adopting them in a new system, just to make sure you really know kind of what you're getting into and, like, what you're going to get out of the feature.

[00:04:16] Something I recommend to a lot of my students is fully learn variables, and then also decide if they're right for your system. I think some systems are small enough where they might be adding more complexity Then this is worth it to, , add to your system. Maybe just sticking with some of the original features is actually the kind of more strategic move for your team.


## [00:04:36] How to approach adopting variables

[00:04:36] **Ridd:** Let's drill into that because I think that's a very interesting topic where I kind of did the same thing. Like variables came out. I started immediately trying to think about, okay, how do I teach these? And I realized, geez, I don't actually know yet. Like I ended up building literally like a full system and dummy product just as a way to learn.

[00:04:56] So I think it's interesting to hear you talk about like side projects and [00:05:00] experiments. One of the things that became really clear early in the process is that it is super easy to over architect a system where, yeah, maybe everything's really connected and it's super cool, but it's kind of a pain to use and ends up getting in the way a little bit.

[00:05:16] And so maybe you could talk about how you think teams should go about finding where that line is, like how. Much does it make sense to adopt variables and maybe what are some of the signals where you might realize, okay, maybe actually we have gone too far, or this doesn't make sense given our setup. Can you help teams think about that challenge a little bit?

[00:05:41] **Molly:** Yeah. I think it all really comes down to like scope and complexity of your system. if you know, you need theming for like light and dark theme, or, you know, you want to support multiple brands and you want all those brands to share some files, then I think. Go ahead and start using variables. That's going to have like clear value right [00:06:00] away.

[00:06:00] But most teams don't need either of those. I would say. Most teams think of it as like a nice idea for maybe in the future. But they just don't need multiple themes or multiple brands. They're just one product. And things are pretty straight forward. I think it makes sense to at least practice, make like a really small dummy project, and go through the process. Especially since right now Figma's suggestion is to create variables for colors and then feed them into color styles. Which can feel like a really kind of tedious and difficult process.

[00:06:31] , and people can be scratching their head like, How is this making this easier again? Like, can we go over the pros of , you know, why are we going through all these steps just so we can like make this one thing blue? , and so I think going through the process and fully understanding what's involved in it and also deciding, okay, is this going to make things easier or harder for us?

[00:06:49] For some teams, it even comes down to like, do we even need really specific semantic naming? Or can we combine some of these categories? Can we just have, you know, backgrounds and borders share the [00:07:00] same color that we use? Or is it helpful to keep them separated? So I think kind of going through like a practice project and just thinking about like, okay, where do we want to be in five years?

[00:07:10] And like, is this going to help us get there or just be kind of like an interesting distraction right now? That being said, once you do find a good system and it doesn't work for you, once it's set up, it's like a lot of front loaded work, where once it's set up and you like the system, then you're just kind of using it as you would with like a simple, straightforward style system.

[00:07:28] if you're a little on the fence, you can always give it a try, and then, , it's kind of easy to walk back, especially if you are feeding the variables into styles, because you're only ever using those styles. So you can always just remove the variables and keep the styles as is, so it can be relatively lower risk if you kind of add an extra layer of functionality.


## [00:07:47] Avoiding feature adoption regrets

[00:07:47] **Ridd:** you said something kind of interesting, which is. Basically just a reminder to keep in mind that this is still wave one of a really large feature set and inevitably not [00:08:00] only are things going to change and we're going to have additions to this feature, you know, we've talked about like typography variables and image variables and things like that, but also the strategies inevitably will change as we put the feature set to the test a little bit.

[00:08:15] And it reminds me of Component properties where all of a sudden we had boolean properties available to us and we just said, you know what, we're going to boolean property everything and remove all of our variants and we're going to create these super components that can do. Everything. And the more we went down that path, we kind of realized like, Oh shoot.

[00:08:35] Like that doesn't actually make sense. Like there's no discoverability. You can't actually see how this is being used. It's more clicks for everyone consuming the components. Do you have a sense that we're going to be feeling a similar way about variables in the future where we're like, okay, we just went all in and applied them everywhere or we use them this way.

[00:08:53] And then maybe it didn't make that much sense. Like, how do you even think about keeping that open mind and making sure [00:09:00] that you're not going too far and down a direction that doesn't really work?

[00:09:04] **Molly:** I think about this often, this is what keeps me up at night, is what's going to be the thing we regret in six months from now? And there's definitely going to be something, for sure. Um, I often remind my students, like, hey, remember base components? And when we thought making a button with, you know, a hundred variants was like a really cool idea.

[00:09:21] And then like a few months later, it wasn't. I think that's going to be a similar case here. Hopefully not as extreme because the base components were a little painful to undo. , but at the time they were the best practice given that first wave of the feature sets for our new components and how we were building them.

[00:09:39] So at the time it did make sense, but we were using an incomplete feature and I think that we're I guess variables are incomplete in terms of they don't even have, , text variables or images or gradients or all the categories, but even just the best practices for how to use the variables that we do have really haven't been established.

[00:09:58] If you look online for a good guides on [00:10:00] them, there's not much to be honest because people just don't know yet. We're still figuring it out, even the top. Creators or teams or like Figma themselves, there just aren't that many resources right now. Other than like just the basics of like announcing the features.

[00:10:16] To really go into like, okay, here's the best way to do this, here's the best strategy. Because we're all still kind of feeling it out, we're all still kind of waiting for those, you know, that second, main, third wave to drop on how we're going to use these a little bit differently, how we're going to like add to them.

[00:10:30] When variables first came out, the expectation was like, oh, we're just going to use color variables and apply the variable to an object. And now there's this like, possible idea that maybe it's best to feed them into a style and then apply the style to the object.

[00:10:42] So even that is like a massive shift in how we're using this feature, just within the first few months of the feature being released. So I think it's important to start exploring and experimenting early, but maybe Adopt a bit slowly, and just be really cautious. Start experimenting, see [00:11:00] what's possible, have some practice projects.

[00:11:03] Think about what might be possible, and like how the current features might serve your team, , long term. But maybe don't apply them just yet, maybe apply them in small stages, in small steps, or just in like ways that feel safe. Like I think adding number variables is fairly safe, I don't see that one changing too much.

[00:11:21] And you'll see us ever having like number styles to compete with our variables. So that one feels like a pretty safe place to start. 


## [00:11:28] How Molly uses number variables in her design systems

[00:11:28] **Ridd:** Can you talk to me a little bit about how you use number variables in your system? Cause you can kind of like define them almost as a primitive, like you'd see in like a tailwind or just, you know, your four, your eight point scale, or you can kind of make them more like use case. And how do you think about aliasing?

[00:11:47] Like, I think it's an obvious starting point because it is kind of simple, but also if you push on it, it gets kind of complex and there's a lot of different strategies. So I'd love to hear how you think about it.

[00:11:56] **Molly:** That is true. I think, yeah, on one level it is simple, but you [00:12:00] can make it complex, just like with anything else you can end up with, you know. 100 plus number variables, that's probably not where you want to be for most teams. Um, again, you can start with a primitive collection, feed it into a semantic collection, then apply that semantic collection of variables to your designs.

[00:12:16] I think unless you're a really huge team and you're really going all in on number variables, maybe both collections make sense for you, but I think for the majority of the teams, skipping straight to the semantic collection and just adding in like raw numbers to , those values. I think it's fine. I think we're pretty much all using an 8 point grid and we can all just kind of figure out what the numbers should be.

[00:12:38] We don't need a list of like multiples of 8 to choose from. , and if we do we can just update them like manually. If for some reason 6 becomes like the magic number we could always go in and make those updates manually. I don't think it would be that difficult. , so I think you can simplify it first by only using one collection.

[00:12:56] And then I think you can also simplify it by not getting too component [00:13:00] specific aside from any like very small instances where you need a component specific number. I think you can do more general big topics like spacing and sizing or maybe just like sizing for height and sizing for width and then space between for your auto layout components.

[00:13:18] , so even these kind of general like that and then being really Be mindful when you do get component specific, because you obviously don't want a whole set of numbers for like every component in your system. It's going to be a lot. , but some things like, maybe you have a few sizes just for your icons.

[00:13:33] That's technically kind of component specific, but I think it's really valuable to say, hey, icons can be one of three sizes. They're going to be 24, 16, or 32. Something like that. That's really straightforward. I think that's really an easy one to use, and like corner radius is pretty specific. But I think just naturally specific.

[00:13:52] So I think keeping things as simple as possible. I always remind myself of, you know, KISS. Keep it simple, stupid. Just always find a way to [00:14:00] iterate and make something even simpler than however you first made it. Just to make it that much easier to like adopt and maintain. Because the second you start getting really specific in one area, you're going to be really tempted to get specific in all these other different areas.

[00:14:12] And that's when things get a little off the rails.

[00:14:14] **Ridd:** I couldn't agree more. And it's kind of validating actually to even hear you come to those kinds of conclusions because in the same way, like I started off and I was like, well, I'm just going to define my primitive size values. And then you get in there and you're like, man, but I have to publish this.

[00:14:32] And it's getting in the way every time I open up like a dropdown menu So I also really like this idea of just building the smallest possible system. And it's really awesome to hear how you think about it. I have a few other Figma related, just quick getting questions because I can't pass on this opportunity to pick your brain.


## [00:14:51] Molly's favorite updates to the UI Prep system

[00:14:51] **Ridd:** So maybe we can just move into a little Figma lightning round here. And the first one is when you look [00:15:00] at. The UI prep system and all the updates you made for 8. 0. What is your favorite update that you've made? 

[00:15:08] **Molly:** That's a tough one. I mean, I think the color variables, just because they were so huge, and , I could have light and dark themes in one file, which is something I hadn't done before. I'd always had two separate files people could use. I'd always been tempted to use Token Studio, but I felt It's just quite a huge learning curve, , even though it's like so powerful and such a great tool, it's just not for everybody.

[00:15:32] And I think now having the ability to just like keep these multiple themes in one file and just be able to do one little switch at the top of the page and have everything switch over just feels like magic. I think the first moment I got that working exactly how I wanted to and I had all the colors set just right, it was like so rewarding to just see everything kind of switch over.

[00:15:50] So that was like the best like kind of magic moment I think of these updates. And then. Also, auto layout wrap is just so cool. First, applying that to just like a few different [00:16:00] components. Even with just like a simple little list of chips, it's just so satisfying to see. Cause you know, we've all like, just like beat our head against the table every once in a while.

[00:16:07] Like, uh, if I could just make this like, move down once there isn't enough room. Like, it would be so much better. Like, I guess I'll create like a second component. Like, This one's for a long list, this one's for a short list, or, you know, whatever it is. , that was just like such a small, like, little win for me, I think, with certain components, where I could finally have them have, like, the exact behavior that I wanted.


## [00:16:25] Strategies for grays in a color system

[00:16:25] **Ridd:** You mentioned the themability and my next question is, okay, let's say that you're starting out, you're building this themable system. You're going to have a light mode and a dark mode. Are you pulling from a single set of gray primitive colors to power both of those modes, or do you have a set of grays specifically for light and then a set of grays specifically for dark?

[00:16:51] **Molly:** When I was updating the UI Prep system for these new variables, I really studied the Adobe Color Spectrum system and all the documentation on color, which I thought [00:17:00] was, like, Really straightforward, and like, really made a lot of sense. And I love how they handle their light and dark themes, and I essentially copied it exactly where they have themable, , color palettes.

[00:17:10] So they have an entire palette for, let's say your light theme, and a completely separate color palette for your dark theme. And what's great is that, at first glance, it looks like you just inverted everything. You just made 1 through 10 go 10 through 1. But when you look at it a little closer, you can see that each color is actually optimized just a little bit to have even higher and, like, better contrast with either a light or a dark background.

[00:17:32] So it's just going to be, like, even more accessible and even more just attractive, because it's going to just pop more. 

[00:17:37] So these little optimizations, I think, really go a long way. 


## [00:17:39] Where Molly gets inspiration

[00:17:39] **Ridd:** I love that. You mentioned Adobe as like a source of inspiration, and that kind of begs the next question for me, which is like so many designers, like tens of thousands of designers literally are plugged into your Friday 5 newsletter as like a source of inspiration and learning. And like, if you're not subscribed, you should go to UIPrep's [00:18:00] website and check that out because it's awesome.

[00:18:01] I read every edition. My question then is like, what sources are you plugged into to keep learning and growing 

[00:18:09] **Molly:** yeah, that's a good question. Every week I'm thinking of five new tips for the newsletter, which , which I'm surprised like it's been years and it still doesn't get old. I don't run out of resources because there's just so many great things to look to like creators or other frameworks or design systems.

[00:18:25] I always, you know, my Kind of go to people are like, , Brad Frost, Dan Maul, Nathan Curtis. All these really huge people in the design system space having like such really rich, valuable resources whenever they do come out.

[00:18:38] I wish they would post more, but whenever they post something, I know it's gonna be gold. So I'm always, , definitely looking there and just like studying how other design systems are doing things. Even if they don't really have like a public, , Like an article or a resource about how they do things, just like going through and like actually studying like a tool and like seeing like, Oh, how is this company, like their live product?

[00:18:58] How are they tackling this and kind of digging [00:19:00] into it? , I think that can be such a huge source of learning. It's just kind of like digging into how someone else did something. 

[00:19:06] **Ridd:** It's cool that you mentioned products and not just open source systems. Cause that is something that always kind of bugged me a little bit. It's like, if you're a small medium sized business and you want to learn about doing a design system, the only. True publicly available resources are from like the biggest players, which have a totally different set of challenges and constraints.

[00:19:28] And maybe some of those don't make sense for your 12 person design team or something like that. But one of the most helpful. Things that I did when even thinking about how different colors could map is I did study a few different products. I actually went into linear. I know it's like so cliche, but I just looked at their theming and I took screenshots and I just, I dropped to see how they were changing their grays across themes and I almost learned as much from that as going to design systems.

[00:19:58] com or something like that. You know, 

[00:19:59] **Molly:** yeah, I [00:20:00] know when I was updating UI prep for new variables, I also try to figure out the best way to name all the colors I don't, it definitely was like Taking screenshots of like demo videos from I think it was like Asana and Atlassian and Ford from their talk at config and just like even in a talk when they kind of really discuss something like going in like pausing and like taking a screenshot like okay how'd they named this like why would they do that when like this company did that like I'm thinking through like Maybe their reasoning and like what they consider pros and cons and just kind of like figuring out the, you know, the average of them.

[00:20:34] I often think about creating a design system like cooking. When you're cooking something, maybe I'll look at like five different recipes and see how all of them tackle things and like, you know, why they did it. Cook at low temperature for this time or high temperature for that time or add these different ingredients.

[00:20:50] And I almost never go with an exact recipe, but I will in my mind kind of calculate all of them. Take an average factor and like what I need and like what I have in the fridge and then build something [00:21:00] there So even though it's not Directly copying or like leaning too much on like one particular source.

[00:21:05] I think just like being exposed to as many systems as possible Helps you make better decisions in your own system, a question I get a lot in my course is about using kind of unconventional colors some students like My team is using yellow and like, I can't, I can't give it some otherwise, like, yellow is our brand color and like, I gotta make it work, like, please help me because it's impossible.

[00:21:28] Um, we all have a moment of silence for this one designer and then we start, and then we start brainstorming and I, it always comes down to like, hey, team, like, Amazon, their button is yellow, like, if they can do it, you can do it, like, if you can find, Unconventional solutions. I'm sure a number of, like, big teams and small teams and medium teams who are doing something similar.

[00:21:49] And you can do the same thing. You can kind of see how all of them are tackling it, take an average of that, factor in, like, what you need, and then make a decision based on all of that rich information.


## [00:21:59] Molly's favorite plugins for design systems

[00:21:59] **Ridd:** I love [00:22:00] that moving along in my list of Figma curiosities here. If someone's working on a design system, I'm curious what other plugins you'd recommend they check out. You mentioned variables pro are there other ones that you find yourself using or recommending most often? 

[00:22:15] **Molly:** A lot of times I recommend when people are adding in color, especially if they're creating like a brand new system, to use a Super Palette. , that's a really great one. Copying directly like another palette from another system.

[00:22:26] I typically point people to Adobe, but there's a ton of really great other design systems and like, their colors. You can also generate your own color using, , like a hex code from like your existing Uh, design system, if you have one. I know it is paid, but there's a free trial. , so take advantage of it.

[00:22:43] And, yeah, that was a great one. I used contrast, it's really great for just double checking all of your contrast between layers, especially text on backgrounds. And, , 8 shapes is also really, really great. It makes documenting so, so, so much easier, and it really does a better job, I think most of us would [00:23:00] do on our own, of just highlighting some of the important things like spacing and sizing and, you know, what's available.

[00:23:05] , I think it's right now the best one for documentation, and I have all my students using it.


## [00:23:10] Strategies for creating tables in Figma

[00:23:10] **Ridd:** Yeah. Same. It's really, really impressive. If you are going to create a table. Are you going to group your components by column, or are you going to group them by row?

[00:23:19] **Molly:** An age old question. Um, it's funny, if you look in the history of UIPrep, I think every edition, I like flip flop, because I always go back and forth of what's better. So my short answer is, neither is right or wrong. After many iterations, I think columns, Suit the most amount of use cases and are typically going to be easier to work with because they're just a little more flexible Especially like resizing columns like adding a new column , I think it's just going to be typically easier However, if your team and you're like prototyping realistic prototype is like number one in our hearts and minds Maybe rows are better because you can really have those interactive components and have the [00:24:00] rows highlight and be show a selected state really easily Or if you're like we have huge Data intensive tables that like need to expand and like almost like an accordion and show additional information You can't you just need a row So I think for those like specific use cases sometimes rows make more sense, but for I think the majority of people Columns are gonna be easier.

[00:24:22] Also, there's no harm in having both if you have multiple types of tables like you can use both You don't need to you know, pick one and be like on team column or team row You can kind of pick and choose as they suit you


## [00:24:33] How the UI Prep system has evolved

[00:24:33] **Ridd:** You've obviously been building design systems in Figma for years now. You mentioned flip flopping between tables and rows as your thinkings evolved. Are there other ways that the UI prep system has Clearly like evolved in terms of how you are thinking or your strategies for building, or maybe you're using different tactics that you weren't in the beginning.

[00:24:57] **Molly:** I think the through line is always trying to make it as [00:25:00] easy to learn and use as possible. I think a little blip in that was maybe trying to use, , the base components and properties because we were just caught in this like weird in between zone of a, you know, of a feature that was still taking form.

[00:25:16] And so at times , trying to see, okay, let's make these components as powerful as possible, and then kind of coming back to the other side of the spectrum and making them as usable as possible. So now I really have components really split up into much smaller component sets to make them even more discoverable and like so much easier to use.

[00:25:33] , and it's funny seeing the difference between the UIPrep system and a system that I'll build out for a client. Because the needs are so different. In UIPrep, I'm trying to create a component that's as Powerful and usable for the most amount of people to make things really flexible and like intuitive For you know a new designer or an experienced designer where for a client the components means like hyper focused on like that One client's needs and like okay this button needs to do just the one [00:26:00] thing This input needs to do this one thing versus trying to make it really flexible so even entire systems can be different for , just whatever they're working on and a lot a really large huge enterprise team might need Very flexible components because they're going to be used in like such a wide range of, you know, like multiple products.

[00:26:18] So they need to really account for a lot of different use cases, whereas a much smaller team is going to be a lot more specific and, you like pinpoint an exact use case with each component, which makes it a lot easier to use. But of course it's a little bit restricting. So it's fun to see the differences just.

[00:26:33] Even as like one designer, me, right now, I'll build a design system for three different clients in three, maybe completely different ways, just based on their needs and their scope.


## [00:26:43] When to separate out components

[00:26:43] **Ridd:** What about a button set? You talked a little bit about how the size of our variant sets have kind of been going up and down over the years. If building from scratch today, would you group the types of buttons, like a primary, secondary outline button? [00:27:00] Would you group those into a single component variant set, or would you create separate main components for each type?

[00:27:07] **Molly:** Right now, I would create a separate component set for each type, so I'd have like brand primary be one type, and then brand secondary be a second type. And then same for if I have, , a danger and a success button. , it's a much easier experience for the designer using these tools.

[00:27:23] I think it's also easier for developers to just kind of see things. And I always like to just point people to, you know, actually look inside, pull up the assets menu. Click on , the button, expand the button section, like you should see like a really nice understandable like menu of options as you're designing and see, okay, here's a pretty clear list of what I can use and then kind of work backwards from there.

[00:27:44] If you have a ton of buttons, maybe combining some makes that list like a little more digestible because it's not so massive. , the one thing I go back and forth on is should size be included in a component set or should it be its own separate thing? And for buttons, [00:28:00] because size is the only difference, I like to keep them as a single set.

[00:28:05] So like, button, primary, and, yeah, primary brand would have large and small inside of one component set. Whereas something else, maybe like a tooltip, I actually have them as separate. There's a large tooltip and a small tooltip as separate components because I actually have More elements inside of the large tool tip It not only is it larger, but it also has a title and a description Maybe even has, you know, an icon in there because it has more elements and the size isn't the only difference That's the point where I like to split it into a separate component

[00:28:37] **Ridd:** That's interesting. I hadn't thought about that distinction, but it makes total sense. And I, again, I think that is a change that I've made over the years too, where. I just keep pulling apart component variant sets into smaller chunks. It is just a lot easier to use. Like I should be able to just search for a secondary button and immediately just drag it in and not have to configure anything.

[00:28:57] **Molly:** I think it makes finding everything a lot [00:29:00] easier and also it makes it so you don't have to configure so many properties in the panel on the right side to get to what you're looking for. You can kind of just see what you want, drag it in, and it's, you know, 90 percent there. You just gotta maybe update the text or something.

[00:29:13] So it's, I think it's easier overall.


## [00:29:15] How Molly got started with UI Prep

[00:29:15] **Ridd:** So you're on version eight of UI prep now, which is incredible. And obviously you should be very proud of that. I'm really interested in now going. Back to the beginning a little bit before you actually released that first version. Can you talk to us a bit about where you were at in your career and what led to you like making this jump?

[00:29:41] And what was that initial process of deciding and ultimately shipping this UI kit like?

[00:29:48] **Molly:** Yeah, I started UI prep, God, a long time ago. , and I started it back when I was, , running a design agency and at the time when we started, we were in Sketch, that was the tool to be using [00:30:00] and we had all these really great UI kits and I loved the m so much, especially like UX Power tools. I stood poured over that, that UI kit and like studied like how they did things, like why they did them in that way.

[00:30:10] It was such a great resource for me and. Well, we didn't often use it for our client work, like we use , their methodologies and their patterns and like how they structured their components, all that knowledge we've poured into our client work, which is so valuable. And then when it came time to switch to Figma, we were heartbroken because there wasn't a, a UX card tools for Figma and there weren't really any other strong UI kits to use, none that we could like look up to.

[00:30:36] So I just kind of poured into. All of the features, like, figuring out, okay, like, I'll decide for myself, like, what I think the best way to structure each individual component is. And, for me, it was a great way to have all this upfront work of, okay, I'll figure out the best way to do these things now, so that when, you know, each new client comes around, I'm gonna immediately know the best way to do this.

[00:30:56] Like, really save us time and, like, really create, like, quality work. [00:31:00] And in that process, I ended up just creating the UiPep system, which is great because I could duplicate it for new clients, like have a great start. I didn't need to, you know, create a brand new set of buttons every time we had a new client.

[00:31:11] Like those kind of basic table stakes items were already there and like ready to be customized. So it's a really huge win. And it was so great for us because we had a system that not only was strong, but we knew the ins and outs of. And we knew we were starting each engagement on a really strong foot.

[00:31:27] And once I had this kit made, you know, why not share it with other people? And so I listed it, and it was like, just a side project for me, people who bought it, you know, joined my, newsletter, and so the newsletter kind of started. Really sporadic. It was like a monthly newsletter to start with.

[00:31:45] Really lightweight. It wasn't, , nearly what it is today, , and People really found the system helpful in terms of like education. Like how, just like how I found the other UI guides when I was learning helpful. And so I ended up spinning up, , Free [00:32:00] versions of UIKit, you know, just the buttons, or just the colors, or just the inputs, whatever it is.

[00:32:04] Along with, like, a little demo video explaining, like, how to use them, like, why they're built the way they're built. Which is exactly, like, all I wanted when I was learning. And, , people found it really valuable, and it was a free resource. And that added to the newsletter as well, which added to sales for the UIKit.

[00:32:19] And it kind of just took on a little life of its own. And, , got more and more popular, and so I invested more time in the newsletter. And the website and, , yeah, at a certain point, it became, , a large enough side project that I was able to make that jump and work on it full time, which is what I've been doing for the past few years.


## [00:32:36] Where UI Prep is today

[00:32:36] **Ridd:** Can you give people a better sense of what UI prep looks like now for people that are not as familiar, like from that beginning, where has it taken you?

[00:32:45] **Molly:** It started just as a design system UI kit and a newsletter, and it really became the source of education, because so many people were coming to learn the best way to build a component or set up a file. And [00:33:00] so. More than just a resource, it really became a place for learning. Which really directed how everything was, how I built things, how I talked about them in any article or video I have, from that, , people started reaching out asking for, for training and tutoring and did some like one on one training and some team training.

[00:33:17] I created some courses for like specific teams and it all kind of snowballed into this course that I have now, which is really great, which I have all these years of experience, like updating this UI kit and like doing these one on one trainings. I can kind of pour all of that knowledge into this one really large course with all this information.


## [00:33:35] How Molly has grown as a creator

[00:33:35] **Ridd:** Can you talk a little bit about like how you've grown as a content creator throughout this process? Cause I think so many people are constantly seeing all these things that you're like posting on Twitter and your newsletter and it's really excellent. And I think it's hard to, nobody starts off at that level of excellence.

[00:33:59] So [00:34:00] how did you grow in that area? And what were some of those lessons or inflection points that you had along the way?

[00:34:08] **Molly:** Yeah, there's been a lot of, , improvement in this category. , If you hadn't told me when I was a kid that so much of my career would be like writing about things and speaking publicly, I wouldn't believe you because those were my worst topics for sure in school. , these didn't necessarily come naturally to me.

[00:34:25] , but I think when you're talking about a subject and a topic that you really care about, it kind of doesn't matter. You'll find a way to, to get there. And I had, you know, I've had years of experience now. And yeah, it's just a, it's a muscle to, to exercise, I think. And I think, again, as long as you really care about something and want to know more about it, are curious to know more about it. And like. If you want to explain it clearly to someone, maybe even someone that you know, , you kind of just find that way, , through just a lot of practice.

[00:34:55] And, yeah, it's been, , a really interesting process going through all this [00:35:00] and doing something I never expected to be doing , and really loving it because I love the topic so much.

[00:35:06] **Ridd:** When you look into the future and you kind of imagine where this could go and what it could look like. What do you see? 

[00:35:14] **Molly:** Oh, that's a great question. , something I've been thinking about a lot, actually. I mean, the course, I think, is the kind of the heart and soul of UI Prep at this point. I think it's always going to be a place to come and learn and also like find other people. I think today we're, there's so many teams, small teams of designers, everyone's working remotely these days.

[00:35:33] And I think it's, can be a bit lonely. And so just like creating this like. It's a shared space where people can come and learn from each other and have that sense of a community and, , you know, just being able to talk shop is really important. So I think that's always going to be a core part of UiPrep.

[00:35:47] And I think also growing , the consultancy side of things. I've always worked with a few, , clients every year. I think it's really important to If you're talking about something, you should also be doing it. Um, so I gotta walk the talk as much as [00:36:00] I talk the talk. And so I make sure to always have a few clients each year.

[00:36:03] And that's something I really love and really inspires so much of the content and like ideas that I have. And so I think growing that side of things is something I'm really looking forward to doing in the future.


## [00:36:13] Working as a design systems consultant

[00:36:13] **Ridd:** Can you talk about that a little bit more? Cause I'm sure some people are listening. They love design systems. They love building things in Figma and they're like, yeah, that sounds amazing. Like, well, how does she actually do that? Like, how do you get those clients and what do those types of arrangements look like?

[00:36:28] **Molly:** Yeah, so typically what I do is fairly specific and It'll be for a wide range of clients, but a really common use case is a team that has a live product, and they have enough designs to get by, but they're at this growing point where they're adding on new people to their team, and they're growing, and things just aren't scaling, and the design files are kind of breaking, and they don't have the, like, systems in place to scale properly.

[00:36:52] And so typically I'll come in and I'll do like a really thorough audit of their entire system that the product and the design files [00:37:00] and talk with team, figure out what the long term goals are. And from that, we'll kind of figure out how we're going to move forward and make this like a really strong and scalable system that can be used by their team

[00:37:12] and so we'll kind of go through and. Just really big audit, figure out what's keep, what's staying, what's going, what we're consolidating. And then from there I'll help them figure out like the best file structure and how to set up all our variables and our styles and , you know, the first handful of components to get them started.

[00:37:28] And also send them off with some training material so that they actually are able to like strongly adopt these new things. And not only adopt it for the current team, but as they add more team members, they have this like. A really rich start of a library of resources to be adding to and like learning and like understanding how they're going to use the system to move forward.


## [00:37:49] Strategies for design system audits

[00:37:49] **Ridd:** What's the output of that audit? Because I think that that's like a pretty common answer that you hear from people. And yet, I don't have a ton of clarity around [00:38:00] what are you actually putting together and sharing back with the team to like demonstrate your learnings and create some surface area to make recommendations on top of.

[00:38:11] **Molly:** So it's kind of two main categories, colors and components. That's for the most part. Or in, you know, text styles and other things, but those take up a big, big part of the audit, with the components. I mean, we'll literally just go through and like pour over everything and take a screenshot of every component and every possible state it has and add them to just these big buckets.

[00:38:29] So in Figma just like a big frame. Okay, here's, you know, 100 screenshots of inputs that we took with all these different states and like, okay, why are we having these three different types of inputs? And like we show a state. You know, in one way, in this part of the product, and a different way in this part of the product, , can we consolidate them?

[00:38:45] Can we make this easier? And we'll kind of do that through all the different product areas, and then kind of at the end have like a really big bucket of all these different examples of how we're using these components and, do we have gaps? Do we have overlap? , are things just like, maybe not as [00:39:00] accessible as they could be?

[00:39:01] And then we'll also do the same thing for color. We'll go through, and this part is a little more painstaking, where we'll just sample all the colors in the system, and also take note of, okay, we use this gray for like this text here, and this icon there, and this border there, and You know, everywhere it's used.

[00:39:15] And , create just this like, massive bucket. And usually you have a horrifying amount of grays that are being used. And you might realize like, even your, your, your primary color, the most important color is, you know, you have five versions of it, and they're all similar, but like, you can tell there's a difference.

[00:39:31] , and like laying that out, I think, plainly, it's a really huge first step, and like, okay, we have a bit of a problem here, it's manageable, but like, we can certainly consolidate and like make things easier and better moving forward. And for me, typically the next step is a spreadsheet. I love a good spreadsheet.

[00:39:49] And so, kind of documenting everything that we have, making note of what we don't need, what we're consolidating, what states are we going to support for all these different components, , what changes are we going to make, what [00:40:00] are maybe a few things we should add that we didn't have before. , and doing that both for like colors and the components.

[00:40:06] And, , yeah, from there kind of prioritizing everything and then jumping into Figma and starting to create this new system.

[00:40:13] **Ridd:** I think that you have built enough of a reputation where probably it's not super hard to sell yourself. So maybe you could even go back a few years because I think it's a little bit easier in some ways to sell yourself as a pure product designer because you kind of have these like growth metrics at the end of the day, or, you know, , we increased, sign up conversion rate by X percent over two months, and as a design systems specialist, You don't have this like neat bag of business outcomes that you can really easily point to.


## [00:40:50] How Molly sells herself as a consultant

[00:40:50] **Ridd:** And so can you talk a bit about how are you selling yourself and clarifying your personal value proposition [00:41:00] as a consultant?

[00:41:00] **Molly:** Yeah, so a lot of it comes down to time. Because like you said, sometimes it can be a little abstract to figure out, like, okay, well, these new buttons really help, or were they just kind of like, you know, they neatened things up a bit, but maybe didn't make a huge difference, but once you can go through and say, actually, this system is, , you can really measure accessibility , quite clearly. This, you know, even in percentages, like, this wasn't all, um, accessible, and now it is. We have all these different elements that are much more accessible, , both with color and, and text, and even some design patterns.

[00:41:31] The other one is just how much time did it take for your designers to create something? , did they have to recreate something because something was confusing? , onboarding new team members to the system can be a huge, , a huge source of, , taking up time on the team.

[00:41:46] And also moving into development. Having everything named the same way and, , Really clearly usable and , just like a neater or more organized system. It's going to help the Developers really build [00:42:00] out in the code and again save them a lot of time and also save a lot of time in terms of Q& A, you know, you can measure how many bugs were ticketed in any given month and compare that between Before and after the system


## [00:42:11] How to get momentum on your next side project

[00:42:11] **Ridd:** so I want this to wrap up in a way that is like as practical as possible because I know there's someone out there listening and they're truly inspired by your story and how you've been able to build this career and, you know, attain this level of like freedom and, having fun doing it clearly.

[00:42:31] And maybe they have some kind of an idea for. Let's call it a digital product. Maybe it's not even related to Figma. It could be UXR tactics or framework resources. They have something though, but they have no followers, no newsletter. What advice do you have for them to take that nugget of an idea and, you know, wake actionable next step that they [00:43:00] can take to get momentum.

[00:43:01] **Molly:** I think when I started, you know, so many years ago with UI prep, the only reason I, I grew any. , followers, any subscribers to newsletters, because I was just producing value versus really marketing, like talking a lot about a lot of things. I was actually giving away. Really valuable things that honestly should have been paid, but were free not only were they free But there's also like helpful little nuggets on how to use them.

[00:43:26] So I think providing just value up front and You know exchanging that value for a simple email address or a simple follow is really huge versus just you know Shouting from the top of your lungs like hey look over here think as long as you have something really valuable in your Making it visible to sell the UI prep design system.

[00:43:47] I gave away parts of it for free. And that's really how I grew , the first chunk of my, , subscribers, which made the newsletter what it is today. And then once you kind of do get to that, a certain size in terms of either followers [00:44:00] or newsletter subscribers, it turns into a bit of a flywheel and kind of can grow on its own.

[00:44:05] But just to kind of get things started, I think just putting something out there, whether it's a little mini version of a course or a resource or tool, or even like maybe no service. , I think that's a good way to really earn people's trust in addition to just their attention. Because if they like one thing you put out, , they're gonna pay attention and listen when you put out a second thing.

[00:44:25] So I always choose to share less, but when I do share, I make sure I feel really strongly about it. Versus trying to share a lot and just kind of being noisy. I don't want someone to open up an email or see like a Twitter post and go, Oh, it's, it's going to be good. Or I am looking forward to it because like, I like this person.

[00:44:42] I like what they put out. Versus like, oh, they just post every day just because they feel like they should. , so I think just being kind of conscientious around the value that you are adding , is huge in kind of everything in terms of building trust with an audience. How

[00:44:54] **Ridd:** I love it. Well, you've obviously built a lot of trust with a lot of designers all over the world, [00:45:00] and if you're listening to this and you haven't been onto UIPrep. com, definitely go. There's just like a ton of resources. Can't recommend the newsletter and course enough. Molly, if someone's listening to this, like how can they be helpful to you and where you're at on their journey?

[00:45:15] **Molly:** Reach out! Say hi! , let me know what you're thinking. Let me know what you think of my newsletter and the course, , I'm very accessible. Feel free to send me a DM or an email. Just say hey.

[00:45:25] **Ridd:** Amazing. Well, thank you so much for taking the time. Molly, this has been great.

[00:45:29] **Molly:** Thank you so much, this has been really fun.
