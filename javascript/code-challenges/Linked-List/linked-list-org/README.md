# Challenge Summary

- Create a linked list that will add, remove or show a value within the list.

## Pull Request

<https://github.com/JTaisey389/data-structures-and-algorithms.md/pull/23>

## Challenge Description

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"
Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names)

## Approach & Efficiency

- With the use of Next this code challenge presents a way to look at the next value on the linked list. My approach is that we have to let a few numericals equal to a value that if it returns a true then we can move one. For each step there has to be a comparision operator to check and see if the value matches the test result. Additionally if the value returns true the linked list can traverse to the second value.

## Solution

![Solution](../Assets/Code_Challenge_Linked _List.jpg)
