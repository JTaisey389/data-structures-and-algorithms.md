'use strict';

class KaryNode {
  constructor(value, items){ // set up the constructor for KaryNode. The constructor passes values through it
    this.value = value,
    this.buzzword = new Array(items);
  }
}

class KaryTree {
  constructor(k) { //the KaryTree constructor establishes the parameters for the queue operation. This.root establishes the root of the node and passedval is the parameter being based into the queue
    this.root = null,
    this.passedval = k; //passedval is the property
  }
}

// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

function fizzBuzzTree(tree){
  let newTree = new KaryTree(tree.k); // the newTree variable is assigned to the KaryTree with the parameter of tree.k
  newTree.root = new KaryNode(tree.root.value, tree.k); // the newTree is set at the root which is null and the KaryNode is passed the values of tree.root.value and tree.k
  let current = tree.root; // assigning a value for the current and the next node
  let next = newTree.root;

  let queue = []; // now we create our arrays that are going to have values passed within 
  let secondqueue = [];
  let firstarray = [];

  queue.unshift(current); //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
  secondqueue.unshift(next);

  while (queue.buzzword) { // set up a while loop to perform an operation
    current = queue.pop();
    //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
    next = secondqueue.pop();
    firstarray.push(current.value);// this array is constructed to push values into the current at the tree.root

    if(current.value % 3 === 0){ // if the current.value of 3 is strict equals to 0 we call the next.value and pass a string of fizzbuzz
      next.value = 'FizzzzzzBuuzzzzz';
    } else if (current.value % 5 === 0){
      next.value = 'Buzzzzz Buzzzzz';
    } else if (current.value % 15 === 0){
      next.value = 'Fizzz Fizzz Fizzz';
    } else {
      next.value = current.value.toString(); //Returns a string representation of an object.
    }
    for(var i = 0; i < current.buzzword.length; i++){
      if(current.buzzword[i]){
        next.buzzword[i] = new KaryNode(i, KaryTree.k);
        queue.unshift(current.buzzword[i]);
        next.unshift(next.buzzword[i]);
      }
    }
  }
  return newTree;
}

const createTree = new KaryTree(3);
createTree.root = new KaryNode(5, KaryTree.k);
createTree.root.buzzword[0] = new KaryNode(1, createTree.k);
createTree.root.buzzword[1] = new KaryNode(15, createTree.k);
createTree.root.buzzword[2] = new KaryNode(12, createTree.k);
createTree.root.buzzword[3] = new KaryNode(8, createTree.k);
createTree.root.buzzword[0] = new KaryNode(10, createTree.k);

// console.log('Fizzzzy Buzzzzz Treee', fizzBuzzTree(createTree));
// console.log('----Buzzword', createTree);

module.exports = {
  Node: KaryNode,
  Tree: KaryTree,
  fizzBuzz: fizzBuzzTree,
};
