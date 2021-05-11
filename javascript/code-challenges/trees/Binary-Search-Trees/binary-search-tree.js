/* eslint-disable no-constant-condition */
'use strict';

const Node = require('./node');

class BinarySearchTree{
  constructor(root = null){
    this.root = root;
  }
  newNode(object){ // add the new node
    const createNode = new Node(object);
    if (!this.root){ // assign the root for the node
      this.root = createNode;
      return this;
    }
    let current = this.root; //the current is this.root

    const addNode = node => {
      if(!current[node]) {
        current[node] = addNode;
        return this;
      }
      current = current[node];
    };
    while(true) {
      if(object === current.object){
        return this;
      }
      if(object < current.object)addNode('left');// setting up which is the left and right node
      else addNode('right');
    }
  }
  contains(value) {
    if(!this.root) return undefined;
    let current = this.root,
      key = false;
    while(current && !key) {
      if(value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else key = true;
    }
    if(!key) return `Can not find ${value} within the tree`;
    return key;
  }
  preOrder(){
    //Data first -> Left -> Right
    // if(!this.root) return null;
    let results = [];
    if(!this.root)return null;
    let _walk = node => { // read the data first in order
      results.push(node.value); //go left -> if node.left is null, we are at a leaf
      if(node.left)_walk(node.left);// go right -> if node.right is null, we are at a leaf
      if(node.right)_walk(node.left);
    };
    _walk(this.root); // this is the kick off of the recursive _walk method
    return results;
  }
  inOrder(){
    //Left fisrt -> Data -> Right
    let results = [];
    if(!this.root)return null;
    let _walk = node => { // read the data first in order
      if(node.left)_walk(node.left);// go right -> if node.right is null, we are at a leaf
      results.push(node.value); //go left -> if node.left is null, we are at a leaf
      if(node.right)_walk(node.left);
    };
    _walk(this.root); // this is the kick off of the recursive _walk method
    return results;
  }
  postOrder(){
    //Left first -> Right -> Data
    let results = [];
    if(!this.root)return null;
    let _walk = node => { // read the data first in order
      if(node.left)_walk(node.left);// go right -> if node.right is null, we are at a leaf
      if(node.right)_walk(node.left);
      results.push(node.value); //go left -> if node.left is null, we are at a leaf
    };
    _walk(this.root); // this is the kick off of the recursive _walk method
    return results;
  }
}
module.exports = BinarySearchTree;
