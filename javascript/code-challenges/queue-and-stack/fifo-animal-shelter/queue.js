'use strict';

const Node = require('../../queue-and-stack/fifo-animal-shelter/node');
class Queue {
  constructor(){
    this.next = null;
    this.length = 0; // this length property is used to house the length and is used as a way to enqueue/dequeue
    this.first = null;
    this.last = null;
  }
  enqueue(value) { // add an item in the queue
    // let value = new Node(value);

    if(!this.first){
      this.first = value;
      this.last = value;
      this.length++;
    } else{
      this.last.next = value;
      this.last = value;
      this.length++;
    }
  }
  dequeue() { // remove an item in the queue
    if(this.isEmpty() === true){
      return null;
    } else {
      let removedVal = this.first;
      this.first = this.first.next;
      removedVal.next = null;
      this.length--;
      return removedVal;
    }
  }
  peek(){ // take a look at how long the queue is, or it's starting value
    if(this.isEmpty() === true){
      return null;
    } else {
      return this.first.value;
    }
  }
  isEmpty(){
    if(this.length === 0) return true;
    return false;
  }
}

module.exports = Queue;


