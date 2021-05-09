'use strict';

class PseudoQueue {
  constructor(){
    this.next = null;
    this.length = 0;
  }
  enqueue(value) { // add an item in the queue
    this[this.length] = value;
    if(!this.next) this.next = 0;
    this.length++;
    return this;
  }
  dequeue() { // remove an item in the queue
    let remove = this.next;
    let result = this[this.next];
    delete this [this.next];
    this.length--;
    this.next = remove + 1;
    if(this.length === 0) this.next = null;
    return result;
  }
  peek(){ // take a look at how long the queue is, or it's starting value
    return this[this.next];
  }
  isEmpty(){
    if(this.length === 0) return true;
    return false;
  }
  // Stack Pseudo Code
  // constructor(){
  //   this.length = 0;
  // }
  push(value){
    this[this.length++] = value;
    return this;
  }
  pop(){
    if(this.length === 0) return 'empty stack';

    const result = this[--this.length];
    delete this[this.length];
    return result;
  }
}

module.exports = PseudoQueue;


