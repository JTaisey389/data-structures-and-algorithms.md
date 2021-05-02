'use strict';

const LL = require('../Lib/ll.js');

xdescribe('Test for Linked List', () => {
  it('should create an empty LL on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  })

  it('should add a node to the list', () => {
    let list = new LL();
    let first = 1; 
    let second = 2;

    list.insert(first);
    expect(list.head.value).toEqual(1);

    list.insert(second);
    expext(list.head.next).toEqual({'next': null, 'value': 2});
  })

  it('should return true when finding a value that matches the input value', () => {
    let list = new LL();
    let first = 1;
    list.insert(first);
    expect(list.includes(1)).toBe(true);
  })
  it('should return a false when looking for a value that does not exist', () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.insert(first);
    expect(list.insert(2)).toEqual(false);
  });
  it('should return a collected value of all the numericals that exist in the linked list', () => {
    let list = new LL();
    let a = 1;
    let b = 2;
    let c = 3;

    list.insert(a);
    list.insert(b);
    list.insert(c);
    expect(list.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });
});