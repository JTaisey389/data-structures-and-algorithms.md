'use strict';

const Node = require('../node');
const BreadthFirst = require('../breadth-binary-tree');


describe('------Test for Breadth First------', () => {
  it('Should create a new Binary Tree', () => {
    const tree = new BreadthFirst;
    expect(tree.preOrder()).toEqual([]);
  });
  it('Should perform a Breadth First Search', () => {
    let a = new Node (6);
    let b = new Node (2);
    let c = new Node (18);
    let d = new Node (12);
    let e = new Node (13);
    let f = new Node (9);

    let checkValue = new BreadthFirst(a);
    checkValue.root.left = f;
    checkValue.root.right = e;
    checkValue.root.right.right = d;
    checkValue.root.left.right = c;
    checkValue.root.left.left = b;

    expect(checkValue.traverseBFS()).toEqual([6,9,13,2,18,12]);
  });
  it('Should return a false when the tree is empty', () =>{
    // let one = new Node ();

    let checkValue = new BreadthFirst();
    expect(checkValue.traverseBFS()).toEqual([]);
  });
});


