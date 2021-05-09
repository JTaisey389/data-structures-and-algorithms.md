'use strict';

const PseudoQueue = require('../Pseudo-queue');

xdescribe('===Test for Queueing===', () => {
  it('should create a PseudoQueue', () => {
    let queue = new PseudoQueue;
    expect(queue.front).toEqual(null);
  });

  it('should add a Node to the queue', () => {
    let queue = new PseudoQueue;
    let first = 12;
    let value = value;

    queue.enqueue(first);
    expect(queue.front.value).toEqual(23);
  });

  it('should add multiple nodes to the  PseudoQueue', () => {
    let queue = new PseudoQueue;
    let first = 12;
    let second = 28;
    let value = value;
    let next = next;

    queue.enqueue(first);
    expect(queue.front.value).toEqual(23);
    queue.enqueue(second);
    expect(queue.front.next).toEqual({'next': null, 'value': 23});
  });
  it('should remove multiple nodes from the PseudoQueue', () => {
    let queue = new PseudoQueue;
    let first = 12;
    let second = 28;
    let third = 33;

    queue.enqueue(first);
    queue.enqueue(second);
    queue.enqueue(third);
    queue.dequeue();
    queue.dequeue();
    expect(queue.peek()).toEqual(third);
  });
  it('should return the value of the front of the  PseudoQueue', () => {
    let queue = new PseudoQueue;
    let first = 12;
    let second = 28;

    queue.enqueue(first);
    queue.enqueue(second);
    expect(queue.peek()).toEqual(first);
  });
  it('should return the values of all the numbers in the PseudoQueue', () => {
    let queue = new PseudoQueue;
    let returnVal = '{ 31 } => { 23 } => NULL';
    queue.enqueue(12);
    queue.enqueue(28);
    expect(queue.print).toEqual(returnVal);
  });
  it('should return null when trying to remove a node from an empty PseudoQueue', () => {
    let queue = new PseudoQueue;
    console.log(`check empty ${queue.dequeue()}`);
    expect(queue.dequeue).toEqual(null);
  });
});
