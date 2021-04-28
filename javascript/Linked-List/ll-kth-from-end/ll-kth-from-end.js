"use strict";

const Node = require('javascript/Linked-List/ll-kth-from-end/node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(object) {
    const createdNode = new Node(object);
    if (!this.head) {
      this.head = createdNode;
      this.length++;
    } else {
      createdNode.next = this.head;
      this.head = createdNode;
      this.length++;
    }
  }

  append(object) {
    let insertNode = new Node(object);
    if (!this.head) {
      this.head = insertNode;
      this.length++;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = insertNode;
      this.length++;
    }
  }

  includes(object) {
    if (!this.head) {
      return false;
    } else {
      let current = this.head;
      while (current) {
        if (current.object === object) {
          return true;
        } else {
          current = current.next;
        }
      }
      return false;
    }
  }

  insertBefore(object, newValue) {
    let newNode = new Node(newValue);
    if (!this.includes(object)) {
      return false;
    } else {
      let current = this.head;
      while (current.next.object !== object) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  insertAfter(object, newValue) {
    let newNode = new Node(newValue);
    if (!this.includes(object)) {
      return false;
    } else {
      let current = this.head;
      while (current.object !== object) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  toString() {
    let result = "";
    if (this.head === null) {
      return "NULL";
    } else {
      let current = this.head;
      while (current !== null) {
        result = result.concat("{", current.object, "}", " -> ");
        current = current.next;
      }
    }
    return result.concat("NULL");
  }

  kthfromEnd(k){
    if (!this) return false
    if (k<0) return false
    let size = this.toString().split('->').length - 1
    if (size <= k ) return false
    let cur = this.head
    for (let i = 0; i < size - k - 1; i++){
      current = current.next
    }
    return current.object
  }
}

module.exports = LinkedList;