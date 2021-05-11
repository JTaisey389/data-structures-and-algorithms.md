# Binary Search Tree's

- Binary search tree's can be executed with a DOM **Document Object Model**
- A node has a left child and a right child
- At the head of the tree is a Node or a Parent Node
- As you work through the tree you get to the end where there are leaf nodes
- There are only two children per parent

- There are levels within the tree that you have to traverse, in the example Brian talked about the tree had four levels.

## BFS

- Breadth First Serach: Level order traversal

## DFS

- Depth First Search:
The order of processing a node: Read the node's value, go to the left for any value's and then go to the right to check the value
  - Strategy one: Pre-order search - D,L,R
  - Strategy two: In order search - L, D, R
  - Strategy three: Post order search - L, R, D

## Challenge Summary

- Breadth-First Traversal

## Challenge Description

- Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.

![Example](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-17/binary-tree.png)

## Testing Parameters

“Happy Path” - Expected outcome
Expected failure
Edge Case (if applicable/obvious)

## Approach & Efficiency

- The approach to this breadth first looks to revolve around the InOder and PostOrder methods. I bring that up because the values in the node are read in a Left, Data, Right approach or Left, Right, Data approach. What I see within the provided sample is that the InOrder approach applies most consistently to the code challenge. With that in mind setting up the expected results should be fairly straight forward. Keeping that in mind I think as a proof of life would be to traverse the tree with all three methods.

PreOrder: Data, Left, Right Approach
InOrder: Left, Data, Right Approach
PostOrder: Left, Right, Data Approach

## Solution

![Solution Code](/Assets/Code_Challenge17_BreadthFirst.jpg)

[Secondary Link](Assets/Code_Challenge17_BreadthFirst.jpg)
