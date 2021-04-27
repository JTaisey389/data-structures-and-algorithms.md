'use strict';
const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(obj) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.net;
            }
            current.next
        }
        return this;
    }; //This stops the append
    Insert(obj) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        return this;
    }
    includes(obj) {
        if (!this.head) {
            console.log('aint shhhh here');
            return false;
        } else {
            console.log('We look for', obj);
            let checkForValue = this.head; // We look at the head Node
            while (checkForValue) {
                if (checkForValue === obj) {
                    console.log('Found head node')
                    return true;
                } else {
                    checkForValue = checkForValue.next
                }
            }
            console.log(`no the ${obj} is not in ${this.head}`)
            return false;
        }
    }
    toString() {
        let returnedString = '';
        if (!this.head) {
            console.log('there is nothing to look in');
            return false;
        } else {
            let thisNode = this.head;
            while (thisNode) {
                returnedString += `{ ${thisNode.value} } => `;
                thisNode = thisNode.next;
            }
            return returnedString += 'NULL';
        }
    }
    insertBefore(obj, objVal) {
        if (!this.head) {
            console.log('there is nothing to look in');
            return 'Value is not found';
        } else {
            console.log('we are looking for', obj);
            let checkForValue = this.head;
            if (checkForValue.value === obj) {
                this.head = new Node(objVal);
                this.head.next = checkForValue;
            }
            while (checkForValue.next) {
                if (checkForValue.next.value === val) {
                    console.log('Found what I was looking for');
                    let newNode = new Node(insertedValue);
                    let retainedValue = checkForValue;
                    newNode.next = retainedValue;
                    retainedValue.next = newNode;

                    return true;
                } else {
                    checkForValue = checkForValue.next
                }
            }
        }
        console.log(`no the ${obj} is not in ${this.head}`)
        return 'Value is not found'
    }
    insertAfter(obj, objVal) {
        if (!this.head) {
            console.log('there is nothing to look in');
            return 'Value is not found';
        } else {
            console.log(' we are looking for', obj)
            let checkForValue = this.head;
            while (checkForValue.next) {
                if (checkForValue.value === obj) {
                    console.log('Hey we found what we needed');
                    let newNode = new Node(objVal);
                    let holdVal = checkForValue.next;
                    checkForValue.next.next = holdVal;
                    return true;
                } else {
                    checkForValue = checkForValue.next;
                }
            }
            checkForValue = checkForValue.next
        }
    }
}


