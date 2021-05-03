'use strict';

const PseudoQueue = require('../Pseudo-queue');

describe('===Test for Stacks===', () => {
  it('should create a new PseudoQueue', () => {
    let stack = new PseudoQueue;
    expect(stack.top).toEqual(null);
  })
  it('should add a Node to the stack', () => {
    let stack = new PseudoQueue;
    let first = 12;

    stack.push(first);
    expect(stack.top.value).toEqual(12);
  })
  it('should add multiple nodes to the  PseudoQueue', () => {
    let stack = new PseudoQueue;
    let first = 12;
    let second = 30;

    stack.push(first);
    expect(stack.top.value).toEqual(12);
    stack.push(second);
    expect(stack.top.next).toEqual({'next': null, 'value': 30});
  })
  it('should remove multiple nodes from the PseudoQueue', () => {
    let stack = new PseudoQueue;
    let first = 12;
    let second = 30;
    let third = 35;

    stack.push(first);
    stack.push(second);
    stack.push(third);
    stack.pop();
    stack.pop();
    expect(stack.peek()).toEqual(first);
  })
  it('should return the value of the top of the  PseudoQueue', () => {
    let stack = new PseudoQueue;
    let first = 12;
    let second = 30;

    stack.push(first);
    stack.push(second);
    expect(stack.peek()).toEqual(second);
  })
  it('should return the values of all the numbers in the PseudoQueue', () => {
    let stack = new PseudoQueue;
    let returnVal = '{ 30 } => { 12 } => NULL';
    stack.push(12);
    stack.push(30);
    expect(stack.print).toEqual(returnVal);
  })
  it('should return null when trying to remove a node from an empty PseudoQueue', () => {
    let stack = new PseudoQueue;
    console.log(`check empty ${stack.pop()}`);
    expect(stack.pop).toEqual(null);
  })
})