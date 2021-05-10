'use strict';

// let BinaryTree = require('./binary-tree');
// let Node = require('./node');

// this is going to be set up manually
// create a method to instantiate the creation of a new node
let MaxValues = require('../BinaryTree/binary-tree');
let findMaxVal = new MaxValues();

findMaxVal.addNode(4);
findMaxVal.addNode(9);
// findMaxVal.addNode(7);
// findMaxVal.addNode(13);
// findMaxVal.addNode(10);
// findMaxVal.addNode(20);
findMaxVal.addNode(16);
findMaxVal.addNode(18);
findMaxVal.addNode(35); // -----> 35 will be the max value
findMaxVal.addNode(22);

//Throw in a few console logs to see the value of the BST
// console.log(findMaxVal.preOrder());
// console.log(findMaxVal.inOrder());
// console.log(findMaxVal.postOrder());
