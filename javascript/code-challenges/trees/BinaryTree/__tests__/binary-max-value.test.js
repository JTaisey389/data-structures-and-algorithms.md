'use strict';

const Node = require('../node');
const BinaryTree = require('../binary-tree');


describe('------Test for Trees------', () => {
  it('Should create a new Binary Tree', () => {
    const tree = new BinaryTree;
    expect(tree.preOrder()).toEqual(null);
  });
  it('Should findMaxValue within the Binary Tree', () => {
    let one = new Node (4);
    let two = new Node (9);
    let three = new Node (7);
    let four = new Node (13);
    let five = new Node (10);
    let six = new Node (20);
    let seven = new Node (16);
    let eight = new Node (18);
    let nine = new Node (35);
    let ten = new Node (22);

    let testValue = new BinaryTree(one);
    testValue.root.left = four;
    testValue.root.right = six;
    testValue.root.right.right = two;
    testValue.root.right.left = seven;
    testValue.root.left.left = eight;
    testValue.root.left.right = six;
    testValue.root.right.left.left = nine;
    testValue.root.left.left.right = ten;
    testValue.root.right.left.right = three;
    testValue.root.left.left.left = five;

    expect(testValue.findMaxValue()).toBe(35);
  });

});

