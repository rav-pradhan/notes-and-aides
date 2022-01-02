---
topicID: "refactors"
topic: "Refactors"
title: "Replace method with method object"
metaDescription: "Replace method with method object"
syntaxHighlights: true
---

If local variables and parameters interfere with extracting a method, you can use the *Replace Method with Method Object* refactor.

## Problem

A long method that uses local variables heavily intertwined can mean that the [_Extract Method_](/docs/refactors/extract-method) is not feasible.

```js
class Order {
  Price() {
    let primaryBasePrice;
    let secondaryBasePrice;
    let tertiaryBasePrice;
    // long computation
  }
}
```

## Solution

Replace Method with Method Object states that the computationally extensive method can be transformed into a separate class so that the local variables become fields of the class.

This computationally extensive method can then be split into smaller, more maintainable methods within this separate class.

```js
class Order {
  Price() {
    return new PriceCalculator(this).Compute()
  }
}

class PriceCalculator {
  constructor(order) {
    this.primaryBasePrice = order.primaryBasePrice
    this.secondaryBasePrice = order.secondaryBasePrice
    this.tertiaryBasePrice = order.tertiaryBasePrice
  }

  Compute() {
    // perform long computation
  }
}
```
