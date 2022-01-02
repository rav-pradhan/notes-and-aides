---
topicID: "refactors"
topic: "Refactors"
title: "Extract Method"
metaDescription: "Extract Method"
syntaxHighlights: true
---

Extract Method is a refactoring recipe that you can use for various circumstances.

## Problem

Consider the following:

``` go
func isPalindrome(input string) bool {
 characters := []rune(input)
 result := []rune{}
 for i := len(characters) - 1; i >= 0; i-- {
  result = append(result, characters[i])
 }

 if string(result) == input {
  return true
 }

 return false
}
```

## Solution

There is a group of code here that can be extracted into its own method, `reverseString()`, that would ensure the length of the initial method body is reduced, whilst making it more readable.

``` go
func isPalindrome(input string) bool {
  reversedInput := reverseString(input)
 if reversedInput == input {
  return true
 }
 return false
}

func reverseString(input string) string {
 characters := []rune(input)
 result := []rune{}
 for i := len(characters) - 1; i >= 0; i-- {
  result = append(result, characters[i])
  }
  return string(result)
}
```

## When to use Extract Method

* When you have a long method that contains more than one responsibility.
* When using a loop within a method. The logic within a for loop, for instance, could be extracted into its own method.
