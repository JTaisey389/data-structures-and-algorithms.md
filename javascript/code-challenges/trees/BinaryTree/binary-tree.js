/* eslint-disable no-constant-condition */
'use strict';

const Node = require('./node');

class BinaryTree{
  constructor(root = null){
    this.root = root;
  }
  newNode(object){// add a new node
    const createNode = new Node(object);
    if(!this.root){// assign what the root node is
      this.root = createNode;
      return this;
    }
    let current = this.root; // current is assigned the root value

    const newNode = node => {
      if(!current[node]) {
        current[node] = newNode;
        return this;
      }
      current = current[node];
    };
    while(true) {
      if(object === current.object){
        return this;
      }
      if(object < current.object)newNode('left');// created left Node with value
      else newNode('right');
    }
  }
  contains(value) {
    if(!this.root) return undefined;
    let current = this.root,
      specificVal = false;
    while(current && !specificVal) {
      if(value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else specificVal = true;
    }
    if(!specificVal)return `Can not find ${value} within the tree`;
    return specificVal;
  }
  preOrder(){
    //Data first -> Left -> Right
    let results = [];
    if(!this.root)return null;
    let _walk = node => {// read the data first in order
      results.push(node.value); // go left -> if node.left is null, we are at a leaf
      if(node.left)_walk(node.left); // go left -> if node.left is null, we are at a leaf
      if(node.right)_walk(node.right);// go right -> if node.right is null, we are at a leaf (ALSO may need to be changed to (node.right)_walk(node.right))
    };
    _walk(this.root);
    return results;
  }
  inOrder(){
    //Data first -> Left -> Right
    let results = [];
    if(!this.root)return null;
    let _walk = node => {// read the data first in order
      if(node.left)_walk(node.left); // go left -> if node.left is null, we are at a leaf
      if(node.right)_walk(node.right);// go right -> if node.right is null, we are at a leaf (ALSO may need to be changed to (node.right)_walk(node.right))
      results.push(node.value); // go left -> if node.left is null, we are at a leaf
    };
    _walk(this.root);
    return results;
  }
  postOrder(){
    //Data first -> Left -> Right
    let results = [];
    if(!this.root)return null;
    let _walk = node => {// read the data first in order
      if(node.left)_walk(node.left); // go left -> if node.left is null, we are at a leaf
      if(node.right)_walk(node.right);// go right -> if node.right is null, we are at a leaf (ALSO may need to be changed to (node.right)_walk(node.right))
      results.push(node.value); // go left -> if node.left is null, we are at a leaf
    };
    _walk(this.root);
    return results;
  }
  findMaxValue(){
    let data = this.postOrder(); // asign the data as the postOrder method
    //console.log('Values in array', data);// display the values
    let maxValue = data[0]; // asign the maxValue to data with an array at index 0
    for(var i = 1; i < data.length; i++){// loop through the data to get the value
      if(data[i] > maxValue){// if the data at the index is greater than the maxValue that will equal the data and pass in the value
        maxValue = data[i];
      }
    }
    return maxValue;
  }
}
module.exports = BinaryTree;
