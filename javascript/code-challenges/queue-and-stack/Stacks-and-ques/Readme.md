# Challenge Summary

- The challenge is to create a Queue and a Stack

## Challenge Description

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
    * This object should be aware of a default empty value assigned to top when the stack is created.
    * Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
    * Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
    * Should raise exception when called on empty stack
    * Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
    * Should raise exception when called on empty stack
    * Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
- Create a Queue class that has a front property. It creates an empty Queue when instantiated.
    * This object should be aware of a default empty value assigned to front when the queue is created.
    * Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
    * Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
    * Should raise exception when called on empty queue
    * Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
    * Should raise exception when called on empty queue
    * Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.


## Approach & Efficiency

- My approach is that the queue and stack are very similuar in construction, a stack being vertical and a queue being horizontal. With stacks you push a value, you check the top,  and you pop off the top value. 
- Queues work defferently that you identify the front, enqueue so you put something into the queue, dequeue which removes and latstly you can peek at a queue. 
- Top, front will need a assigned value like null or 0 
- Push, Enqueue to push a value of (XXX) and ensure the top value remains the same
- Pop, Dequeue to remove a specified value, but ensures the order is maintained
- Peek at the value or values in the stack or queue


## Solution

![Solution Code](/Assets/Code_Challenge_10_Stack_&_Queue.jpg)