'use strict';

const LinkedList = require('./linked-list');

// eslint-disable-next-line no-unused-vars
let LL = new LinkedList();
let fistList = new LinkedList();
let secondList = new LinkedList();

fistList.append(2);
fistList.append(8);
fistList.append(17);

secondList.app(5);
secondList.app(20);
secondList.app(35);

module.exports = LinkedList;
