# Challenge Summary

- The challenge is to zip two linked lists

## Challenge Description

Write a function called zipLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Notes
- A main benefit of a linked list is that it is a more memory efficirent wayt of maintaining a dynamic collection of things that could get really large.

## Approach & Efficiency

- We have two linked lists that are the same value length but have different numbers in each of the nodes.
- The goal is to merge one linked list into the first linked list without causing issues
- The linked list will be zipped together and the values will be combined
- My approach is to maintain the tail and head node of one linked list so those do not get manipulated
- For the node to be zipped each node will need to corrispond to an assigned value between the two node values where it will be zipped in


## Solution

![Solution Code](javascript/code-challenges/Assets/Code_Challenge_08_ZipLL.jpg)