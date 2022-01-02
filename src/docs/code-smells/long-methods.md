---
topicID: "code-smells"
topic: "Code Smells"
title: "Long Methods"
metaDescription: "Long methods"
---

## Indicators

A method that contains too many lines of code. Generally, any method longer than ten lines should make you start asking questions.

It is harder to create a new method than to add to an existing one, especially when only a small incision to an existing method is required - say, one or two lines.

This can build up over time, however, to the point where methods that started with only nine or ten lines, soon grow to double or even triple that, in a spaghetti code manner.

Short methods live the longest. With clear names, they can easily tell a developer who is scanning the codebase exactly what is going on. The longer a method is, the harder it becomes to understand and maintain it.

Short methods also help ensure no duplicate code is present; as the number of lines in a method grows, so does the possibility of there being duplicate code.

## On Performance

There is a claim that the increase in the number of methods would hurt performance. In many cases, though, the impact is so negligble that it isn't worth worrying about.

Of course, there may be instances where a more procedural style of programming is of importance. However, in many cases, breaking down longer methods will drastically improve code readability and maintenance with little sacrifice to performance.

What's more, breaking down long methods can also help with discoverability of performance gains. With clearer code and smaller methods, developers and teams will find it easier to effectively restructure code and squeeze out performance gains through this, if required.

## Techniques for handling long methods

- [Decompose Conditional](/docs/refactors/decompose-conditional)
- [Extract Method](/docs/refactors/extract-method)
- [Introduce Parameter Object](/docs/refactors/introduce-parameter-object)
- [Preserve Whole Object](/docs/refactors/preserve-whole-object)
- [Replace Method with Method Object](/docs/refactors/replace-method-with-method-object)
- [Replace Temp with Query](/docs/refactors/replace-temp-with-query)
