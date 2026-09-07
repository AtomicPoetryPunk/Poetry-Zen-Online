# Overview



This project is a three-fold tool for poets of all skill levels and interest.



1\. A poetry archival tool

2\. A poetry workstation

3\. A poetry-centered social media experience



It should be thought about from these three perspectives, as each pillar presents its own set of issues and incentives.





##### The poetry Archival Tool:



The promise of a comprehensive database of your own poetry.



\-The app must be able to import and export Google Docs/.docx files seamlessly, since that is what most poets are already using. A frictionless onboarding experience is paramount. In the demo I have created, you can simply drag and drop a .docx file or folder of .docx files into the app, and the app has a script to identify if the import is a brand new poem or potentially just a draft of an already existing poem. There is also architecture that makes the export/import round trip seamless: each draft of a poem is assigned a poem ID of ten digits, "P\_XXXXXXXXXX" written directly into the metadata of the exported .docx file. This ID is just the identification system the database already uses, re-tooled here for ease of the most common import/export scenario. But logic must exist for importing poems intelligently regardless of the poem ID being present in the file or not.



\-We must come up with a fun and easy solution for how to allow the user to scan and import their Facebook posts and Notes app notes to build their own archive, the way I did. It is incredibly rewarding to see how much you have actually written over the years. I think this will be one of the main selling points of the site for lots of people.



\-The archive itself must be comprehensive, but never overwhelming. For example, this is why I have implemented the "archive/current" toggle, which hides all but the active and reference drafts in a given tree.



\-Filters: I have gone through a long process of adding and removing poem properties in the database, and I believe I have landed on a list of properties that is the most useful, without being too many to manage. It is likely to evolve. One thing is, the "eras" property, as it is now, is very specific to me personally, but I would like that to be user-defined in the end. Like, I would probably recommend people use roughly 4-year chunks, but the user chooses what the specific ranges for the eras should be, like when a book was released, or a big life event occurred, anything that makes a specific chunk of years of work different from the others. This helps a lot with organization and can be easily sorted automatically by what year the poem is given.



\-The Five-Rank system. I am pretty firm on this aspect being present in the archive. The system itself could be developed more, sure; probably it is in need of an essay or something on my part, but I really do believe in this system as an organizational tool, both for organizing an archive and for removing a lot of friction from the poetry writing process in general. I believe that someday this system will catch on, and it will be one of the things I am most remembered for as a poet. ALSO, this is a good example of how important incentive structures are to me. The system itself is designed to incentivize the most difficult parts of being a writer: sharing with others, being open to their feedback, and submitting to publishers/contests. The amount of community engagement and poems I've submitted for myself has gone up significantly since implementing this system into my own workflow. The vulnerability of art is so easy to skip. We have a whole lot of influence over people in simply how we design this webapp. Other apps have used that influence to manipulate people into giving them money/information and taking advantage of people. My goal is genuinely to, in every possible way, use our influence to improve the lives of others. Giving poets tools to improve their craft and connect with community.



\-Users own their poetry. A poem being admitted into their archive creates a record of legal ownership (we need to research to see if there is anything we need to do to make that true and official). This way, if a poem is stolen, a poet has easy access to proof of authorship, with a copyright date.



\-Furthermore, the archive itself should be downloadable, either as a big zip folder of .docx files, or as an SQL database, at any time that the poet can take with them. Their poetry is theirs after all; we are just hosting it for convenience. I want poets to trust us with their most precious data, their art. Whenever possible, I do not want to collect or keep data on any of our users (besides things that will directly improve their experience with the app, like zip code for events in proximity, or affinities for narrowing down submission opportunities, maybe), and probably this is obvious, but I never, never, never, ever want to sell anyone's personal data ever. Even if this blows up and we get offered a buy-out by a big company someday, I am personally not against this, but I would not settle for a contract that doesn't ensure the safety and protection of our users forever. We are cultivating a community, and it is our responsibility to protect them, just like a real-life community organizer would (or should) be expected to.



\-On the downloadable SQL database, I would really love this app to be available offline. Obviously the browser-based app needs to be online, and that is all we are concerned with to start, but I won't consider this app finished if I can't drive out to a lake and work on my poetry in nature. I imagine when the browser app is stable, we could make a desktop application and a phone app that have the ability to sync with the database and go offline and update when returning to the land of the internet.



\-While scale is small, if we keep all the archive data as text only, that should minimize our server overhead. Maybe over time we could upgrade to allowing for poets to store images (for concrete poetry/broadsides) or even videos of performances, but that is getting a little bit dicey in my view. Human faces draw so much attention away from everything else, and I really want the app to feel open and spacious at all times to encourage introspection and creativity. Visiting the site should carry the vibe of a writer's retreat. Anyway, I have a decent job, and I believe in this project. When the time comes, I am happy to build a machine and keep it running in my basement or something forever. I'm not entirely sure how that stuff works, but in my imagination, it is manageable.





##### The Poetry Workstation:



The promise of an all-in-one workstation geared specifically for poetry. 



\-Unlike other word processors, which are powerful tools for many kinds of writing, our tool needs to be simple and focused. Powerful in the sense that it can do everything a poet may want, yet simple enough to never interrupt the poet's creative flow.



\-A poet should be able to draft poems, new and old, in an organized way, with a record of changes so that they can see the work they've done on a poem as it matures. Very rewarding and often overlooked. This incentivizes editing poems, and not just being satisfied with first drafts.



\-Compiling poems into collections for manuscripts is where we can do the most good for poets, and attract them to our platform. No poet I have ever talked to has a good system for deciding what poems go into a manuscript, or how to format said manuscript. This would be a godsend to most working poets I know; anyone I have shown this to has gone bananas for it, and has insisted they would be early adopters when we officially launch. The things I have not yet solved that I believe would improve the experience would be the ability to export as a .PDF directly, as formatting .docx gets dicey on different systems, and some sort of way to streamline cover-letter writing as well.



\-The hyperspace button. You've seen it, you know it. Lowkey though, this is my favorite part of the whole design because it represents so much more. This app, and the internet in general, should be FUN TO USE. This is not least-common-denominator, focus-group, corporate crud; this is responsible, quirky, and fun! The old internet was like... Neopets, Homestar Runner, Bionicle, Space Jam... Interesting and fun to use. (That said, it can be taken too far. The quirkiness should be understated, but present. Never distracting from the other goals of the user experience. The hyperspace button is a good example because it is a very useful tool, but also funny, and also rainbow, and also not demanding your attention because it still matches the aesthetic of everything else. I think if every button did something silly would become a distraction pretty quickly.)



\-When no poem is selected, I have a Zen poem or quote displayed. This is intended as a short burst of inspiration and lends itself to the open-feeling that is conducive to creativity. I recognize, though, that this is also me trying to make the world a better place by inspiring introspection and harmony with nature. Not evangelism per-say, but some genuine Zen exposure in a totally Zen-as-commodity culture couldn't hurt. And some site-wide good karma couldn't hurt either. I don't want it to be alienating, though; that is not the goal.



\-We should bake real Zen Buddhist spells into the code. I do know some. We could do it. It wouldn't even be sacrilegious lol. Don't tell the Christian users, though.



\-People want an app that meets them where they are at. The first biggest piece of criticism I have received for this app is simply "But I do most of my writing on my phone," and that is so totally fair and valid. A fully functioning phone app is not necessarily in the first stage of scope for this project, because that is like a whole other deal I'm not at all ready to tackle. But there must be a mobile version of the site, at launch, that works for all of the most essential mechanics. First impressions matter a lot, and this strikes me as a make-or-break feature for most people. Social can come later if it has to, Facebook post importing can come later, but the workspace and archive must be easily accessible from a phone on day one.





##### The Poetry-Centered Social Media Aspect:



The promise of a social media platform that is made specifically for sharing poetry. Not Tumblr, Not Facebook, Not Discord. I have never, in all my years writing poetry, been satisfied with a social media experience in terms of my poetry expression needs. This is the section with the most question marks for me, and in designing for it, it was the moment where I realized I needed to bring another person into this project, so I would welcome any additional creative input as we build this.



\-A place for 30/30's, good lord, is this desperately needed in the poetry scene. I think this may be one of the main selling points for people who come to this app. Truly, every experience before now has been just terrible.



\-"writing groups" both public and private. Some can be location-specific, like a "Portland Poetry" group; some can be affinity-focused, like "Pacific Islander" or "LGBT"; some can be just a couple of friends that want to be in a group together.



\-Poems posted into groups are actually just pointers to a specific poem in your archive, not duplicate poems. This allows for cross-posting into multiple groups, and also the feature that pulls the poem from every place posted when submitted to a journal.



\-Moderation will be difficult. I am thinking maybe for a group to be created, at least one user needs to be assigned as the moderator for that group. But there is a way to appeal moderation decisions, and then that comes to someone in charge of the app to remove. I think blocking an account from the social aspects of the site but letting them keep the archive and workspace aspects is a subtle way of disincentivizing bad actors from just making a new account and returning to harassing behavior. We will need more preventative measures, but this is a start. We can adapt to this problem as we grow, but I think we will be safe for a while.



\-A social media app that is not predatory by its very nature - what a novel concept! I remember the original promise of the internet, a place to witness and be witnessed. We are not alone in this ambition, by the way. There is a whole vanguard of developers independently working on niche projects like this to take the internet back. A cool internet is still possible, and it depends on projects like this. (There are even grants for projects like this that I am researching on the back burner)



\-I don't love this part, but I think it is necessary. We need a seamless way to create aesthetic Instagram-ready images for easy posting there, or on Facebook. The more options, the better on this. Because every time someone does it, if it looks nice, it is likely to draw more users to our app.



\-No ads, unless they are unintrusive and directly relevant to the user. I am talking, like, poetry shows in your area, or open submission periods at publishers. I am imagining a bulletin board type of thing when you go to the social section of the site where you can see things like this.



\-It will be tempting to put the social media aspect as a whole disconnected arm of the site, but I do not want that. I want the site to always feel like one site, always one click away from working on your poetry. Like the poems on the left column and collections on the right, but the center can be dynamic, changing to a social type of platform, or whatever is needed. Like if I click on "WORKSPACE" at the top of the screen, it could give a drop-down to select if you want to open the social stuff, or whatever else we add later. I am hoping for cohesive integration throughout.



\-I have always considered apps/websites like Facebook to be a type of video game in itself. We should be cognizant of the fact that we are manipulating attention with our design, and then be intentional about what we want to incentivize. For instance, comment sections incentivize community, but like-counters incentivize superficially strong reactions; profile pictures incentive beauty-standards (but old-school image avatars could incentivize personal expression); a badge/trophy system can be used to incentivize vulnerability (badges awarded for submissions, or contest entries, real-life poetry slams).



\-On the badge system, I have imagined that we would have our own set of badges that can be awarded to poems or poets (maybe displayed on a profile page) and that we could offer organizers the option to design and award their own badges for specific events. Like, Slamlandia could pay a (very reasonable) premium to be able to have the winners of real-life slams get a Slamlandia-specific badge to display on their profile. The premium account would also entitle an organizer to post their events on the aforementioned bulletin board.



\-No intrusive ads or addictive design, but realistically, we do need a revenue structure. I have already put so many hours into this project, and we are just at the beginning. This is real work, and we need to eat food and pay our rent. So I am open to any revenue ideas you have, and exploring options on my own. At a glance, I think we could have a donation page, like a KO-FI or a Patreon (Maybe Patreon users can choose a poem or Zen quote that gets displayed on the home page); we could find investors; we could implement the premium option for organizer privileges; there are ways to bring in money without becoming predatory. I also want to do things like advertise on Instagram and Facebook someday (where our potential new users may be hiding), but that stuff costs money. My poverty background and monastery sensibilities make me cringe a little at the thought, but what we absolutely cannot do is pretend we don't need money, make a free platform for a couple of years, realize we really do need the money after all, and then start introducing revenue streams out of desperation. We need to have a plan in place before we get to that point.

