'use strict';

const fizzbuzz = require('../fizz-buzz-tree');

describe('testing fizzBuzzTree function', () => {
  const tree = new fizzbuzz.Tree(3);
  tree.root = new fizzbuzz.Node(1, tree.k);
  tree.root.buzzword[0] = new fizzbuzz.Node(3, tree.k);
  tree.root.buzzword[1] = new fizzbuzz.Node(5, tree.k);
  tree.root.buzzword[2] = new fizzbuzz.Node(12, tree.k);
  tree.root.buzzword[0].buzzword[0] = new fizzbuzz.Node(15, tree.k);
  tree.root.buzzword[0].buzzword[1] = new fizzbuzz.Node(8, tree.k);
  tree.root.buzzword[1].buzzword[0] = new fizzbuzz.Node(1, tree.k);
  tree.root.buzzword[2].buzzword[0] = new fizzbuzz.Node(10, tree.k);
  const fizzBuzzTree = fizzbuzz.fizzBuzz(tree);

  console.log('TEST======', new fizzbuzz.Tree(3));

  it ('should change numbers divisible by 3 to Fizz', () => {
    expect(fizzBuzzTree.root.buzzword[0]).toEqual('Fizz');
    expect(fizzBuzzTree.root.buzzword[0].buzzword[0]).toEqual('Fizz');
  });
});


