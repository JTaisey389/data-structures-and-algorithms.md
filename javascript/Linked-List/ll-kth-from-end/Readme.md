# Challenge Summary

- The challenge is to get k-th value from the end of a linked list.

## Challenge Description

Write a method for the Linked List class which takes a number, **k**, as a parameter. Return the node’s value that is **k** from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency

- For this problem we assign a k value to the 3rd index in a node
- The goal is to either replace, remove, or update the K value in the node. We need to first identify the head which has a value of 2
- Next we identify the tail which has a value of NULL
- From what we can see there is 5 values that we need to inspect to see if it is the third index
- Starting from the head we traverse the node and check it's value with a comparison operator like  (obj) === ('20'), if value = 20; return true;
  else return false
- From here we start to check the values, but there is an important part of the algorithm that  we need to stop the process of traversing the node.
if(obj) = true; return (kValue) and exit the node

## Solution

![Solution Code](javascript/code-challenges/Arrays/Assets/Code_Challenge_06_LLKTh.jpg)