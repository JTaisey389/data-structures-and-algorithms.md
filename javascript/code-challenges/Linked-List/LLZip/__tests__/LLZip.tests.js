'use strict';

const LL = require('javascript/Linked-List/ll-kth-from-end/ll-kth-from-end.js');

describe('****Linked List Tests***', () => {
it('should add a kth value on the node, and return a null if a number does not match', () => {
    let list = new LL;
    let first = 64;
    let second = 35;
    let third = 1;
    let fourth = 64;
    let fifth = 32;

    list.insert(first);
    list.append(second);
    list.append(third);
    list.append(fourth);
    list.append(fifth);

    expect(list.kthFromEnd(2)).toBe(30);
    expect(list.kthFromEnd(4)).toBe(10);
    expect(list.kthFromEnd(-5)).toBe(null);
    expect(list.kthFromEnd(8)).toBe(null);
  });
});