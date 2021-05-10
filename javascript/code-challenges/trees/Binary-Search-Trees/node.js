'use strict';

class Node { // construct the values for the BST and BT
  constructor(value,left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = Node;

