---
topicID: "data-structures"
topic: "Data Structures"
title: "Queues"
metaDescription: "Queues"
syntaxHighlights: true
---

## What is a queue?

The queue abstract data type is an ordered collection of elements, where new items are added to the "rear" and removed from the "front".

As such, queues adhere to the **"First In, First Out"** (FIFO) principle; it is a **linear data structure**.

A queue characteristically does not have a specific capacity. The abstraction defines that a new element can always be added.

In real-world terms, a queue is just like what we experience when lining up to buy cinema tickets or to checkout at the supermarket. We join the queue at the end and exit it with a successful transaction when we reach the front of it.

![Representation of a Queue and its First In, First Out principle](../svgs/queue.svg "Queue")

## Queue Operations

| Operation          | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| `enqueue(element)` | Adds a new item to the end of the queue.                                 |
| `dequeue()`        | Removes the item at the front of the queue.                              |
| `size()`           | Returns the number of items currently in the queue.                      |
| `isEmpty()`        | Determines whether or not the queue is empty, returning a boolean value. |

## Queue JavaScript example

```js
class Queue {
  constructor() {
    this.collection = []
  }

  enqueue(item) {
    return this.collection.push(item)
  }

  dequeue() {
    return this.collection.shift()
  }

  size() {
    return this.collection.length
  }

  isEmpty() {
    return this.collection.length === 0
  }
}
```

## What is a Priority Queue?

A priority queue is an abstract data type that's similar to a queue or stack. However, the difference here is that each element within the queue is assigned a priority.

Elements are subsequently ordered by priority, and those with a higher priority are dequeued prior to those with a lower priority. The instances where elements share the same priority level, the one that was added into the queue first is served first.

An example of a priority queue in real-world terms can be an A&E department outpatient queue. Outpatients who enter A&E are triaged and are set a priority order. Those with the most critical situations are prioritised to be seen first.

![Representation of a Priority Queue and how the priority level of an element determines where it goes in the queue](../svgs/priority_queue.svg "Priority Queue")

## Priority Queue Operations

| Operation          | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| `enqueue(element)` | Adds a new item to the queue based on its priority                       |
| `dequeue()`        | Removes the item at the front of the queue.                              |
| `size()`           | Returns the number of items currently in the queue.                      |
| `isEmpty()`        | Determines whether or not the queue is empty, returning a boolean value. |

## Priority Queue JavaScript Example

```js
class PriorityQueue {
  constructor() {
    this.collection = []
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element)
    } else {
      // Check to see where the new element should be spliced in based on priority values
      let added = false
      for (let i = 0; i < this.collection.length; i++) {
        if (element.priority < this.collection[i].priority) {
          this.collection.splice(i, 0, element)
          added = true
          break
        }
      }
      // If the element's priority isn't higher than any of the current elements,
      // push the new element to the end of the collection
      if (!added) {
        this.collection.push(element)
      }
    }
  }

  dequeue() {
    return this.collection.shift().value
  }

  size() {
    return this.collection.length
  }

  isEmpty() {
    return this.collection.length === 0
  }
}
```
