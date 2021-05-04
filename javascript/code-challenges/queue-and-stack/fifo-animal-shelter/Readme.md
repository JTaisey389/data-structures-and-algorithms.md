# Challenge Summary

- First-in, First out Animal Shelter.

### Challenge Description
- Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
- Implement the following methods:
    * enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
    * dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.


### Approach & Efficiency
- This lab takes a focus on enqueueing and dequeueing two different queues. The goal is to keep each set of queues in there assigned orders and to ensure the values of each assigned cat/dog are read. As part of the main approach I would declare a class for my function and pull in a constructor to assign the front node a value. Working through the queue would be a fairly standard practice and is just a matter of adding a message of isEmpty once the queues are emptied out. 

## Solution

![Solution Code](/Assets/Code_Challenge_12.jpg)