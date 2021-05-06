'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(obj) {
    let node = new Node(obj);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  } //This stops the append
  insert(obj) {
    let node = new Node(obj);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this;
  }
  insertBefore(obj, objVal) {
    try {
      let node = new Node(objVal);
      let current = this.head;
      if (current.obj === obj) {
        node.next = this.head;
        this.head = node;
      } else {
        let previous = this.head;
        current = current.next;
        while (current.next) {
          if (current.obj === obj){
            node.next = current;
            previous.next = node;
            break;
          }
          current = current.next;
          previous = previous.next;
        }
        if(current.obj === obj) {
          node.next = current;
          previous.next = node;
        } else {
          throw 'Exception';
        }
      }
    }
    catch (error) {
      console.log(error);
      return error;
    }
    return this;
  }
  insertAfter(obj, objVal) {
    try {
      let node = new Node(objVal);
      let current = this.head;
      if (current.obj === obj) {
        node.next = this.head;
        current.head = node;
      } else {
        current = current.next;
        while (current.next) {
          if (current.obj === obj){
            node.next = current;
            current.next = node;
            break;
          }
          current = current.next;
        }
        if(current.obj === obj) {
          current.next = node;
        } else {
          throw 'Exception';
        }
      }
    }
    catch (error) {
      console.error(error);
      return error;
    }
    return this;
  }
  includes(obj) {
    let current = this.head;
    if (current.obj === obj) {
      return true;
    } else {
      while (current.next) {
        if (current.obj === obj) return true;
        current = current.next;
      }
      if (current.obj === obj) return true;
      return false;
    }
  }
  toString() {
    let current = this.head;
    let string = `{ ${current.obj} `;
    while (current.next) {
      current = current.next;
      string += `} => { ${current.obj}`;
    }
    string += '} => NULL';
    return string;
  }
  kthfromEnd(k){
    if (k < 0) return 'Exception';
    let counter = 1;
    let current = this.head;
    while (current.next) {
      counter += 1;
      current = current.next;
    }
    let assignedVal = counter - k;
    let index = 1;
    let item = this.head;
    if (assignedVal < 0) return 'Exception';
    while (index < assignedVal) {
      item = item.next;
      index += 1;
    }
    return item.obj;
  }
}

module.exports = LinkedList;
