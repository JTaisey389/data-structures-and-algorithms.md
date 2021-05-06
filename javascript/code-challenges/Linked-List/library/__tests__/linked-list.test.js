'use strict';
// REFACTOR
const LL = require('../linked-list');

describe('===== Linked List =====', () => {
  it('should successfully create an empty linked list', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('should insert a value into the linked list', () => {
    let list = new LL();
    list.insert('TEST-VALUE');
    expect(list.head).toBeDefined();
  });

  it('should point to the first node in a linked list', () => {
    let list = new LL();
    list.insert('TEST');
    expect(list.head.obj).toEqual('TEST');
  });

  it('should insert multiple nodes into the linked list', () => {
    let list = new LL();
    list.insert('Test-1');
    list.insert('Test-2');
    list.insert('Test-3');
    expect(list.head.obj).toEqual('Test-3');
  });

  it('should return true when looking for a value within the linked list that exists', () => {
    let list = new LL();
    list.insert('Test-1');
    list.insert('Test-2');
    list.insert('Test-3');
    expect(list.includes('Test-2')).toBe(true);
  });

  it('should return false when looking a value that does not exist in the linked list', () => {
    let list = new LL();
    list.insert('Test-1');
    list.insert('Test-2');
    list.insert('Test-3');
    expect(list.includes('Test-4')).toBe(false);
  });
  // COME BACK TO DIS
  it('should return a collection of values that exist in a linked list', () => {
    let list = new LL();
    list.insert('Test-1');
    list.insert('Test-2');
    list.insert('Test-3');
    expect(list.toString()).toMatch(/Test-2/);
  });

}),
describe('ll-insertions', () => {

  it('should add a node to the end of the linked list', () => {
    let list = new LL();
    list.append('Test-1');
    list.append('Test-2');
    expect(list.head.next.obj).toEqual('Test-2');
  });

  it('should add multiple nodes to the end of a linked list', () => {
    let list = new LL();
    list.append('Test-1');
    list.append('Test-2');
    list.append('Test-3');
    expect(list.head.next.next.obj).toEqual('Test-3');
  });

  it('should split the linked list and insert a value in the millde', () => {
    let list = new LL();
    list.insert('Test-1');
    list.append('Test-3');
    list.insertBefore('Test-3', 'Test-2');
    expect(list.head.next.obj).toEqual('Test-2');
  });

  it('should insert a node before the first node of a linked list', () => {
    let list = new LL();
    list.insert('Test-0');
    list.insertBefore('Test-1', 'Test-0');
    expect(list.head.obj).toEqual('Test-0');
  });

  it('should insert the node in the middle of a linked list', () => {
    let list = new LL();
    list.insert('Test-1');
    list.append('Test-2');
    list.append('Test-4');
    list.insertAfter('Test-2', 'Test-4');
    expect(list.head.next.next.obj).toEqual('Test-4');
  });

  it('should add a node at the back of the linked list', () => {
    let list = new LL();
    list.insert('Test-3');
    list.insert('Test-0');
    list.insert('Test-1');
    list.insertAfter('Test-0', 'Test-1');
    // console.log(JSON.stringify(list,undefined,2));
    // console.log('------TEST-----------LOOKING FOR LIST-', list);
    expect(list.head.next.next.obj).toEqual('Test-1'); //Look into dis one
  });
});

describe('===kthFromEnd===', () => {

  it('should return exception when k is greater than list length', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.kthfromEnd(5)).toBe('Exception');
  });

  it('should return correctly when k is equal to list length', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.kthfromEnd(3)).toBe(1);
  });
  it('should return exception when k is not a positive integer', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.kthfromEnd(-3)).toBe('Exception');
  });
  it('should return when list is of size 1', () => {
    let list = new LL();
    list.append(1);
    expect(list.kthfromEnd(3)).toBe('Exception');
    expect(list.kthfromEnd(1)).toBe(1);
  });
  it('should return correctly on happy path', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.kthfromEnd(0)).toBe(3);
    expect(list.kthfromEnd(1)).toBe(2);
    expect(list.kthfromEnd(2)).toBe(1);
  });
});
