---
topicID: "code-smells"
topic: "Code Smells"
title: "Large Class"
metaDescription: "Large classes"
---

## Indicators

- Lots of fields and/or methods in a class
- A class that has multiple behaviours as opposed to a single responsibility

Classes are often designed to be small - initially. However, like [methods](/docs/code-smells/long-methods), they are prone to getting bloated as the codebase grows and new features are implemented.

This bloat can manifest in multiple, seemingly related features being included in a class.

## Why break down large classes?

Classes that are larger than they ought to be, or contain multiple behaviours, likely have a high cognitive complexity. Developers working on the class may find they have to remember a number of things to follow the inner workings of it.

## Techniques for handling large classes

However, when a class is doing too many things, it's worth thinking about breaking this down into more manageable building blocks. Some methods of doing so include:

- **Extract Class** - useful if there is an encapsulated component of behaviour that could be extracted into its own class
- **Extract Interface** - useful if there's a need to have common behaviour which the client interacts with
