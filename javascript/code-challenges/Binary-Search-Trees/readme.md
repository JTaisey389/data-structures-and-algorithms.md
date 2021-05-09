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

- The challenge is to create a binary search tree and a binary tree

## Challenge Description

- The goal is to create a node class that stores values in the node, the left child node, and the right child node. We will need to traverse the nodes either with a binary search tree or a binary tree.

- Testing will need to include the following:

1. Can successfully instantiate an empty tree
2. Can successfully instantiate a tree with a single root node
3. Can successfully add a left child and right child to a single root node
4. Can successfully return a collection from a preorder traversal
5. Can successfully return a collection from an inorder traversal
6. Can successfully return a collection from a postorder traversal

## Approach & Efficiency

- To approach this problem both the BST and BT's will need to be set up with a default value of null to establish the top node. The length of both need to be declared as **this.length = 0** to establish that the BST and BT are currently emptied. From there we set up the vaules in how we will evaluate the structures with a **preOrder**, **inOrder**, **postOrder**.

PreOrder: Data, Left, Right Approach
InOrder: Left, Data, Right Approach
PostOrder: Left, Right, Data Approach

## Solution

![Solution Code](/Assets/BT_BST_CodeChallenge.jpg)
