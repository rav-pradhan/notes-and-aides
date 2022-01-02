---
topicID: "refactors"
topic: "Refactors"
title: "Replace temp with query"
metaDescription: "Replace temp with query"
syntaxHighlights: true
---

If local variables and parameters interfere with extracting a method, you can use the *Replace Temp with Query* refactor.

## Problem

In the snippet below, we are placing the result of an expression in a local variable for use later on in the code.

```js
function calculateTotal() {
  var basePrice = quantity * itemPrice;

  if (basePrice > 1000) {
    return basePrice * 0.95;
  } else {
    return basePrice * 0.98
  }
}
```

## Solution

The *Replace Temp with Query* refactor would mean moving the expression into its own method and return the result. Querying the method instead of using a variable with mutable, local state helps in pursuing single responsibility.

```js
function calculateTotal() {
  if (basePrice() > 1000) {
    return basePrice() * 0.95
  }  else {
    return basePrice() * 0.98;
  }
}

function basePrice() {
  return quantity * itemPrice
}
```
