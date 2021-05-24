'use strict';

const { KaryNode, KaryTree } = require('../fizz-buzz-tree')

describe('testing fizzBuzzTree function', () => {
  var tree = new KaryTree(1);
  tree.root.children.push(new KaryNode(3));
  tree.root.children[0].parent = tree;
  tree.root.children.push(new KaryNode(5));
  tree.root.children[1].parent = tree;
  tree.root.children.push(new KaryNode(7));
  tree.root.children[2].parent = tree;
  tree.root.children[0].children.push(new KaryNode(15));
  tree.root.children[0].children[0].parent = tree.root.children[0];
  tree.root.children[0].children.push(new KaryNode(30));
  tree.root.children[0].children[1].parent = tree.root.children[0];
  tree.fizzBuzzTree();

  it('It should replace values divisible by 3 with "Fizz"', () => {
    expect(tree.root.children[0].value).toBe('Fizz');
  });
});



