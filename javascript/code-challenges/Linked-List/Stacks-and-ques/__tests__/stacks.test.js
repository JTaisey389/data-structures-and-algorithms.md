'use strict';

const Stack = require('../stack');

describe('===Test for Stacks===', () => {
  it('should create a new Stack', () => {
    let stack = new Stack;
    expect(stack.top).toEqual(null);
  })
  it('should add a Node to the stack', () => {
    let stack = new Stack;
    let first = 23;

    stack.push(first);
    expect(stack.top.value).toEqual(23);
  })
  it('should add multiple nodes to the  Stack', () => {
    let stack = new stack;
    let first = 23;
    let second = 31;

    stack.push(first);
    expect(stack.top.value).toEqual(23);
    stack.push(second);
    expect(stack.top.next).toEqual({'next': null, 'value': 23});
  })
  it('should remove multiple nodes from the Stack', () => {
    let stack = new stack;
    let first = 25;
    let second = 31;
    let third = 40;

    stack.push(first);
    stack.push(second);
    stack.push(third);
    stack.pop();
    stack.pop();
    exprec(stack.peek()).toEqual(first);
  })
  it('should return the value of the top of the  Stack', () => {
    let stack = new stack;
    let first = 23;
    let second = 31;

    stack.push(first);
    stack.push(second);
    exprec(stack.peek()).toEqual(second);
  })
  it('should return the values of all the numbers in the Stack', () => {
    let stack = new stack;
    let returnVal = '{ 31 } => { 23 } => NULL';
    stack.push(23);
    stack.push(31);
    expect(stack.print).toEqual(returnVal);
  })
  it('should return null when trying to remove a node from an empty Stack', () => {
    let stack = new stack;
    console.log(`check empty ${stack.pop()}`);
    expect(stack.pop).toEqual(null);
  })
})