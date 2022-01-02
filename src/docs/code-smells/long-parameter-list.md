---
topicID: "code-smells"
topic: "Code Smells"
title: "Long Parameter List"
metaDescription: "Long Parameter List"
---

## Indicators

- A function/method that contains three, four, or more parameters

Long parameter lists often leads to client code that is awkward and frustrating to work with, and also leads to great cognitive complexity.

Parameter lists grow when methods and functions require too much data.

## Techniques for handling long parameter lists

- [Preserve Whole Object](/docs/refactors/preserve-whole-object) - useful if a number of the parameters can be encapsulated into a single object

There may be times it's less ideal to do this, however, if you do not want to create an unnecessary dependency between classes.
