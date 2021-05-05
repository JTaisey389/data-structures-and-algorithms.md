# Challenge Summary

- Multi-Bracket Validation

### Challenge Description

Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

    - Round Brackets : ()
    - Square Brackets : []
    - Curly Brackets : {}

### Approach & Efficiency

- The focus of the challenge is to balance out three different objects, and to be able to change the order and it will remain balanced. I was reading a few articles about the approach to the code and to treat it like a stack, with a stack we use a FIFO approach. With that concept, if we have a set of brackets that are not balanced, the idea would be to peek at the order to first get an idea. From there we can push the top value and hold it until we get a matching value. In this way you are also staging some of the items in a queue.

### Helpfull Resources

[Link](https://levelup.gitconnected.com/solving-balanced-brackets-in-javascript-with-stacks-edbc52a57309)

### Solution

![Solution Code](/Assets/Code_Challenge_13.jpg)
