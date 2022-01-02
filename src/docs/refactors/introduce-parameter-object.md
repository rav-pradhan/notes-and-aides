---
topicID: "refactors"
topic: "Refactors"
title: "Introduce Parameter Object"
metaDescription: "Introduce Parameter Object"
syntaxHighlights: true
---

If local variables and parameters interfere with extracting a method, you can use the *Introduce Parameter Object* refactor.

## Problem

A method contains a repeating group of parameters:

```js
function warehouseAddress(number, street, city, postcode) {}
function courierAddress(number, street, city, postcode) {}
function deliveryAddress(number, street, city, postcode) {}
```

## Solution

Parameters can be replaced with an encapsulating object:

```js
function warehouseAddress(address) {}
function courierAddress(address) {}
function deliveryAddress(address) {}
```
