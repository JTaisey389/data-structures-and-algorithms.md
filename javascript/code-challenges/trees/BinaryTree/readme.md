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

- Find the maximum value in a Binary Tree

## Challenge Description

- Write an instance method called find-maximum-value. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

![Example](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-16/binary-tree.png)

## Testing Parameters

“Happy Path” - Expected outcome
Expected failure
Edge Case (if applicable/obvious)

## Approach & Efficiency

- My approach to this problem is we first need to initially set up the Binary tree with values. Once the values are set we have three operations to walk through to confirm the values within the tree's.

  - Strategy one: Pre-order search - D,L,R
  - Strategy two: In order search - L, D, R
  - Strategy three: Post order search - L, R, D

- In each operation the highest value will need to remain the same no matter the outcome. I think the best way to do this is to set up my code in a way that when the pre-order, post-order, and in-order push the results to the instance of **find-maximum-value**.

PreOrder: Data, Left, Right Approach
InOrder: Left, Data, Right Approach
PostOrder: Left, Right, Data Approach

## Solution

![Solution Code](/Assets/Code_Challenge_16_Max_Val.jpg)

[Secondary Link](Assets/Code_Challenge_16_Max_Val.jpg)
