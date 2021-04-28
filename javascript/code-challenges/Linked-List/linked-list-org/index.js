'use strict';

const LinkedList = require('./Lib/ll.js');
let ll = new LinkedList();

console.log('empty list with no-thing', ll);

ll.append(10);

console.log('a single item node', ll);

ll.append(20);

console.log('Two item node', ll);

