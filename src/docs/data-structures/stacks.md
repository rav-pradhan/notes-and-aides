---
topicID: "data-structures"
topic: "Data Structures"
title: "Stack"
metaDescription: "tack"
syntaxHighlights: true
---

## What is a stack?

The stack abstract data type is defined as a structured, ordered collection of elements. In terms of interactions, we can only remove an element from the end of the structure, also known as the "top".

As such, stacks adhere to the **"Last In, First Out"** (LIFO) principle.

In real-world terms, you can think of a stack as a **pile of books**, set upon each other vertically. The quickest way to remove a book is to simply **remove the top one**.

If you are trying to find a book halfway down the pile, it may be risky trying to remove all of the ones above it in one go. The integrity of the pile is at risk and all of the books could come tumbling down. Removing each book from the top, one by one, may end up being the quicker and safer way to get to the desired book.

![Representation of a Stack and its Last In, First Out principle](../svgs/stacks.svg)

## Stack Operations

| Operation       | Description                                                              |
| --------------- | ------------------------------------------------------------------------ |
| `push(element)` | Adds a new item to the top of the stack.                                 |
| `pop()`         | Removes the top item from the stack, i.e., the last added item.          |
| `peek()`        | Returns the top item from the stack, but does not remove it.             |
| `size()`        | Returns the number of items on the stack.                                |
| `isEmpty()`     | Determines whether or not the stack is empty, returning a boolean value. |

## JavaScript implementation

### With Arrays

For many languages, using a builtin type like an array is likely the quickest way to create a stack or _stack-like_ data structure.

```js
// this is our stack
let letters = []

const name = 'Hannah'

var reversedName = ''

// put letters of the word into the stack
for (let i = 0; i < name.length; i++) {
  letters.push(name[i])
}

// pop off the stack in reverse order
for (var i = 0; i < name.length; i++) {
  reversedName += letters.pop()
}

if (reversedName === name) {
  console.log(`${word} is a palindrome`)
} else {
  console.log(`${word} is not a palindrome`)
}
```

We can also implement a stack without using an array. It may not be likely that this is used, unless you wanted to restrict users of the stack to the explicit operations as per the specification.

```js
class Stack {
  constructor() {
    this.count = 0
    this.storage = {}
  }

  // Adds an element onto the end of the
  // stack and increments stack `size`
  push(element) {
    this.storage[this.count] = element
    this.count++
  }

  // Removes and returns the element at 
  // the "top" of the stack
  pop() {
    if (this.count === 0) {
      return undefined
    }

    this.count--

    const result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }

  size() {
    return this.count
  }

  peek() {
    return this.storage[this.count - 1]
  }
}
```
