'use strict'

class Queue {
  constructor(){
    this.length = 0; // this length property is used to house the length and is used as a way to enqueue/dequeue
    this.next = null;
  }
  enqueue(value) { // add an item in the queue 
    this[this.length] = value;
    if(!this.next) this.next = this[this.length];
    this.length++;
    return this;
  }
  dequeue() { // remove an item in the queue
    let remove = this.next
    let result = this[this.next]
    delete this [this.next]
    this.length--
    this.next = remove + 1
    if(this.length === 0) this.next = null
    return result
  }
  peek(){ // take a look at how long the queue is, or it's starting value
    return this[this.next]
  }
  isEmpty(){
    if(this.length === 0) return true
    return false
  } 
}

module.exports = Queue

// queue.enqueue(10);

// console.log('empty queue', queue);
// console.log('enqueue first', queue.enqueue(1));
// console.log('enqueue second', queue.enqueue(2));
// console.log('enqueue third', queue.enqueue(3));

