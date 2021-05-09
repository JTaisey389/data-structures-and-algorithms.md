// Testing to include
/*
- a new node can be created and added to the tree
- a node has a value, left, right property
- preOrder, inOrder, postOrder, will log and traverse in the right way
  - You will need to mock the right way
- If there is no root node, kick out of the traversal and return "no root" or "false"
-*/

'use strict';

const BinaryTree = require('../binary-tree');
const BinarySearchTree = require('../binary-search-tree');

xdescribe('------Test for Trees------', () => {
  it('Should create a new Binary Tree', () => {
    const tree = new BinaryTree;
    expect(tree.preOrder()).toEqual(null);
  });
  it('Should add new nodes to the Binary Tree', () => {
    const tree = new BinaryTree;
    tree.addNode(7);
    tree.addNode(28);
    tree.addNode(14);
    expect(tree.root.val).toEqual(7);
    expect(tree.root.right.val).toEqual(28);
    expect(tree.root.left.val).toEqual(14);
  });
  it('Should return PreOrder, PostOrder, and Inorder and let the smoke out when thinking too much about this problem', () => {
    const tree = new BinaryTree;
    tree.addNode(7);
    tree.addNode(28);
    tree.addNode(14);
    tree.addNode(3);
    tree.addNode(5);
    tree.addNode(9);

    expect(tree.preOrder()).toEqual([7,28,3,14,5,9]);
    expect(tree.preOrder()).toEqual([3,7,28,5,14,9]);
    expect(tree.preOrder()).toEqual([9,7,3,5,28,14]);
  });
  it('Should return true when trying to find a valid value in the Binary tree', () => {
    const tree = new BinaryTree;
    tree.addNode(7);
    tree.addNode(28);
    tree.addNode(14);
    tree.addNode(3);
    tree.addNode(5);
    tree.addNode(9);

    expect(tree.contains(14)).toEqual(true);
    expect(tree.contains(2)).toEqual('Can not find the value in the tree');
  });
});

describe('------Test for Trees Part Dux------', () => {
  it('Should create a new Binary Search Tree', () => {
    const tree = new BinarySearchTree;
    expect(tree.preOrder()).toEqual(null);
  });
  it('Should add new nodes to the Binary Search Tree', () => {
    const tree = new BinarySearchTree;
    tree.addNode(7);
    tree.addNode(28);
    tree.addNode(14);
    expect(tree.root.val).toEqual(7);
    expect(tree.root.right.val).toEqual(28);
    expect(tree.root.left.val).toEqual(14);
  });
  it('Should return PreOrder, PostOrder, and Inorder and let the smoke out when thinking too much about this problem', () => {
    const tree = new BinarySearchTree;
    tree.addNode(7);
    tree.addNode(28);
    tree.addNode(14);
    tree.addNode(3);
    tree.addNode(5);
    tree.addNode(9);

    expect(tree.preOrder()).toEqual([7,28,3,14,5,9]);
    expect(tree.preOrder()).toEqual([3,7,28,5,14,9]);
    expect(tree.preOrder()).toEqual([9,7,3,5,28,14]);
  });
  it('Should return true when trying to find a valid value in the Binary Search tree', () => {
    const tree = new BinarySearchTree;
    tree.addNode(7);
    tree.addNode(28);
    tree.addNode(14);
    tree.addNode(3);
    tree.addNode(5);
    tree.addNode(9);

    expect(tree.contains(14)).toEqual(true);
    expect(tree.contains(2)).toEqual('Can not find the value in the tree');
  });
});
