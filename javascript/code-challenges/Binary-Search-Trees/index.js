'use strict';

// let BinaryTree = require('./binary-tree');
let Tree = require('./binary-search-tree');
// let Node = require('./node');

// this is going to be set up manually
// create a method to instantiate the creation of a new node
let binarySearchTree = new Tree();
binarySearchTree.addNode(12);
binarySearchTree.addNode(22);
binarySearchTree.addNode(14);
binarySearchTree.addNode(30);
binarySearchTree.addNode(8);
binarySearchTree.addNode(20);
binarySearchTree.addNode(15);
binarySearchTree.addNode(19);
binarySearchTree.addNode(33);

//Throw in a few console logs to see the value of the BST
console.log(binarySearchTree.preOrder());
console.log(binarySearchTree.inOrder());
console.log(binarySearchTree.postOrder());
