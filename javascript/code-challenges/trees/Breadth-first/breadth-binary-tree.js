/* eslint-disable no-constant-condition */
'use strict';

const Node = require('./node');
const Queue = require('../../queue-and-stack/fifo-animal-shelter/queue.js');

class BreadthFirst{
  constructor(root = null){
    this.root = root;
  }
  createNode(object){
    const newNode = new Node(object);
    if(!this.root){
      this.root = newNode;
      return this;
    }
    let current = this.root;

    const setNode = node => {
      if(!current[node]) {
        current[node] = setNode;
        return this;
      }
      current = current[node];
    };
    while(true){
      if(object === current.object){
        return this;
      }
      if(object < current.object)setNode('left');
      else setNode('right');
    }
  }
  contains(value) {
    if(!this.root) return undefined;
    let current = this.root,
      specificVal = false;
    while(current && !specificVal){
      if(value < current.value) current = current.left;
      else if(value > current.value) current = current.right;
      else specificVal = true;
    }
    if(!specificVal)return `The ${value} you are looking for is not here`;
    return specificVal;
  }
  preOrder(){
    //Data first -> Left -> Right
    let results = [];
    if(!this.root)return [];
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
  traverseBFS(){
    if(!this.root){ // when there is no value return false
      return [];
    }
    const queue = new Queue(); // creating the new queue
    const objValues = []; // set up an empty array named objValues to pass objects into

    queue.enqueue(this.root); // adds the first value to the queue
    while(queue.length !== 0){// this will only add values when the queue has enqueued values
      const checkNodes = queue.first; // now we check the nodes and loop through to add each queue
      if(checkNodes.left) {
        queue.enqueue(checkNodes.left);
      }
      if(checkNodes.right) {
        queue.enqueue(checkNodes.right);
      }
      objValues.push(checkNodes.value); // push the first value in to the queue
      queue.dequeue(); //remove the first node as it already has been accounted for
    }
    return objValues;
  }
}

module.exports = BreadthFirst;
