/* eslint-disable new-cap */
'use strict';

// let BinaryTree = require('./binary-tree');
// let Node = require('./node');

// this is going to be set up manually
// create a method to instantiate the creation of a new node
let BreadthFirst = require('./breadth-binary-tree');

let newQueue = new BreadthFirst();

function makeQueue(){
  newQueue.createNode(6);
  newQueue.createNode(2);
  newQueue.createNode(18);
  newQueue.createNode(12);
  newQueue.createNode(13);
  newQueue.createNode(9);
}

module.exports = makeQueue;

//Throw in a few console logs to see the value of the BST
// console.log(findMaxVal.preOrder());
// console.log(findMaxVal.inOrder());
// console.log(findMaxVal.postOrder());
