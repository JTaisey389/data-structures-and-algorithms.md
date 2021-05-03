'use strict';

const Queue = require('../queue');

describe('===Test for Queueing===', () => {
  it('should create a Queue', () => {
    let queue = new Queue;
    expect(queue.front).toEqual(null);
  });

  it('should add a Node to the queue', () => {
    let queue = new Queue;
    let first = 23;
    let value = value;

    queue.enqueue(first);
    expect(queue.front.value).toEqual(23);
  })

  it('should add multiple nodes to the  Queue', () => {
    let queue = new Queue;
    let first = 23;
    let second = 31;
    let value = value;
    let next = next;

    queue.enqueue(first);
    expect(queue.front.value).toEqual(23);
    queue.enqueue(second);
    expect(queue.front.next).toEqual({'next': null, 'value': 23});
  })
  it('should remove multiple nodes from the Queue', () => {
    let queue = new Queue;
    let first = 25;
    let second = 31;
    let third = 40;

    queue.enqueue(first);
    queue.enqueue(second);
    queue.enqueue(third);
    queue.dequeue();
    queue.dequeue();
    expect(queue.peek()).toEqual(third);
  })
  it('should return the value of the front of the  Queue', () => {
    let queue = new Queue;
    let first = 23;
    let second = 31;

    queue.enqueue(first);
    queue.enqueue(second);
    expect(queue.peek()).toEqual(first);
  })
  it('should return the values of all the numbers in the Queue', () => {
    let queue = new Queue;
    let returnVal = '{ 31 } => { 23 } => NULL';
    queue.enqueue(23);
    queue.enqueue(31);
    expect(queue.print).toEqual(returnVal);
  })
  it('should return null when trying to remove a node from an empty Queue', () => {
    let queue = new Queue;
    console.log(`check empty ${queue.dequeue()}`);
    expect(queue.dequeue).toEqual(null);
  })
})