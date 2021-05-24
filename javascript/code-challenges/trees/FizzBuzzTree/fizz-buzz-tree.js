'use strict';

const Queue = require('../../queue-and-stack/Stacks-and-ques/queue');
class KaryNode {
  constructor(value, first = null, second = []){ // set up the constructor for KaryNode. The constructor passes values through it
    this.value = value,
    this.first = first,
    this.second = second;
  }
}
class KaryTree {
  constructor(k) {
    var node = new KaryNode(k);
    this.root = node;
  }
  fizzBuzzTree(){
    var createdNode = this.root;
    var queue = new Queue();
    while(createdNode && createdNode.second){
      for(let i = 0; i < createdNode.second.length; i++){
        queue.enqueue(createdNode.second[i]);
      }
      if(createdNode.value % 18 === 0 ){
        createdNode.value = 'FizzBuzz';
      } else if (createdNode.value % 4 === 0 ){
        createdNode.value = 'Buzz';
      } else if (createdNode.value % 6 === 0){
        createdNode.value = 'Fizz';
      } else {
        createdNode.value = String(createdNode.value);
      }
      createdNode = queue.dequeue();
    }
    return this;
  }
}
const newNode = new Node(8);

var tree = new KaryTree(1);
tree.root.second.push(newNode);
console.log('----TEST-----', tree);
tree.root.second.push(new Node(8));
tree.root.second[0].first = tree;
tree.root.second[1].first = tree;
tree.root.second.push(new Node(9));
tree.root.second[2].first = tree;
tree.root.second[0].second.push(new Node(20));
tree.root.second[0].second[0].first = tree.root.second[0];
tree.root.second[0].second.push(new Node(14));
tree.root.second[0].second[1].first = tree.root.children[0];

module.exports = { KaryNode, KaryTree};
