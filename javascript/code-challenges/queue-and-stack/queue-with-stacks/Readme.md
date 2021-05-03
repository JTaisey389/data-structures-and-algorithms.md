# Challenge Summary

- The challenge is to create a Queue and a Stack

## Challenge Description
- Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

    * enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
    * dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.
The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## Approach & Efficiency

- The first approach is that for both the stack and the queue is that I need to identify the top/front. Those I can assign to a variable of **null** (let front/top = null)
- My second approach is to assign a value to each of the stack/queue which will need a variable. (let second = 12).
- The second step can be repeated as many times as needed to create a queue or a stack
- Using **PseudoQueue** class I will impement a standard FILO (First, in, last, out) approach for the queue. Within the queueing process this will only utilize two stack objects. 
- The stack instances only have push, pop, and peek


## Solution

![Solution Code](/Assets/Code_Challenge_11.jpg)