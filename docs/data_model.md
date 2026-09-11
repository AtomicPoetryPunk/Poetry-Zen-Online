# Data Model

## The Guts

A *poem* has many *drafts*.
- *Badges* belong to drafts. Badges might reflect where a poem was submitted, whether it was published, etc.
- Drafts have *ranks*, from 1 to 5, indicating subjective "completeness". A 1 is a rough idea, hardly a poem at all. A 5 is something arguably complete, ready to use, ready to submit.
- Poems have *themes* which function like tags: text labels used to group poems having something in common.
- Drafts have a *source* indicating where they came from, such as an import (from Facebook, Google, a voice note, a handwritten note or journal, etc)
- Poems may exist within an *era*, a span of time identified by the poet.
- A draft has a *status*: active (still working on it), reference (unlikely to change), or retired (like, a trunk story).
- "Reader / Recipient / Venue"? This is a text field.
- Epigraph...?
- Quotation and Quotation Source...?
- Poems and drafts may each have *notes*, a free-form text field about ongoing thoughts regarding the work. (Is it better to put this solely on poems, while drafts have *context*?)
- Drafts may have *context*, a free-form text field about where this draft comes from and why.
- Drafts may have *feedback* associated with a *reader*, such as a reply from a publication, or thoughts from a friend.

*Collections* gather *drafts* but regard *poems*...
- Collections have an *order* of linked drafts.
- (When a draft changes, the user should be notified that there is a newer draft of something in the collection, or that a draft has been marked *retired*. They may choose to retain it, but it should be one click to change it to a different (active) draft.)
- Like poems, collections have *badges*, *themes*.
- Collections may be *cemented* (aka *frozen*) to make them harder to change. This is useful if you're sending it out and don't want to mess with it. (In the current formula, this actually creates a totally separate copy of everything -- drafts, collection, etc -- so that no changes elsewhere in the system impact it.)

So, *eras*...
- An era is a span of time and a name -- maybe with a description?
- Eras may or may not overlap. Eras do not need to cover all periods contiguously. (For example, I might label a few months as "sun-mad" when I had that bad sunburn, but that period is also in the "divorce" era)
- In some sense, an era is like a *dynamic collection* where poems from this period may be gathered and highlighted.
