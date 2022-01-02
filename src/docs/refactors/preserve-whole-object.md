---
topicID: "refactors"
topic: "Refactors"
title: "Preserve Whole Object"
metaDescription: "Preserve Whole Object"
syntaxHighlights: true
---

If local variables and parameters interfere with extracting a method, you can use the *Preserve Whole Object* refactor.

## Problem

A common smell is where object properties are stored in variables before then being passed to a method:

```js
const low = tempRangeToday.low
const high = tempRangeToday.high

const withinScope = scope.withinRange(low, high)
```

## Solution

Instead the whole object can be passed in.

```js
const withinScope = scope.withinRange(tempRangeToday)
```
