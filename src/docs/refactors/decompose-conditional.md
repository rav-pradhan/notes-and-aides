---
topicID: "refactors"
topic: "Refactors"
title: "Decompose Conditional"
metaDescription: "Decompose Conditional"
syntaxHighlights: true
---

Conditional operators and loops within a method is a sign that code can be moved to a separate method.

With conditionals, the Decompose Conditional refactor can be used.

## Problem

Consider the following complex conditional:

```js
if (date < START_OF_SUMMER_HOLIDAYS || date > END_OF_SUMMER_HOLIDAYS) {
  totalCost = numberOfTickets * offPeakRate
} else {
  totalCost = numberOfTickets * peakRate
}
```

## Solution

We can look at decomposing the more complicated parts of the conditional logic into separate methods.

This ensures that the code is easier to read when scanning through, as a well-named method can convey intent better than logic within the statement.

```js
if (isSummerHoliday(date)) {
  totalCost = peakCharge(numberOfTickets)
} else {
  totalCost = offPeakCharge(numberOfTickets)
}
```
