'use strict';

const Node = require('./node.js');

class LinkedList {
    constructor(){
        this.head = null;
    }
    append(values) {
        let node = new Node(values);
        if(!this.head) {
            this.head = node;
    } else {
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }
    return this;
 }
}

module.exports = LinkedList;
