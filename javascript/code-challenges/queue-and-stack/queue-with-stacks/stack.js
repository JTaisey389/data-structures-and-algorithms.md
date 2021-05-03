'use strict';

//Our stack constructor needs to keep track of how many items are in the stack
//Stack: First in Last Out (FILO)
function Stack() {
  this.length = 0;
}

Stack.prototype.push = function(value) { // We are going to push value to a stack
  this[this.length++] = value; // this is a key value pair 
  return this;
}

Stack.prototype.pop = function(){
  if(this.length === 0) return 'empty stack';
  
  const result = this[--this.length];
  delete this[this.length];
  return result
}
// let stack = new Stack();

Stack.prototype.peek = function(){
  //show me the top item in the stack, but don't remove it like pop
  if (this.length === 0) return false
  return this[this.length-1];
}

Stack.prototype.isEmpty = function(){
  if(this.length === 0) return true
  return false
}

module.exports = Stack
// console.log('empty stack', stack);
// console.log('stack with 1 item', stack.push('first'));
// console.log('stack with 2 items', stack.push('second'));
// console.log('stack with 3 items', stack.push('third'));

// console.log('popped off the stack', stack.pop('chopy chopy third'))
// console.log('popped off the stack 1 item', stack.pop('chopy chopy second'))
// console.log('popped off the stack 1 item', stack.pop('chopy chopy third'))
// class Stack() {
//   constructor(){
//     this.length = 0;
//   }
// }