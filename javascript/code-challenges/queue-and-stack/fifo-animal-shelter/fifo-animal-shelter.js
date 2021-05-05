  'use strict';

  const { Queue } = require('javascript/code-challenges/queue-and-stack/Stacks-and-ques/queue.js')

  class AnimalShelter {
    constructor() {
      this.cats = new Queue();
      this.dogs = new Queue();
    }
    enqueue(companion) {
      if (companion.match === 'dog') {
        return this.dogs.enqueue(companion);
      } else if (companion.match === 'cat'){
        return this.cats.enqueue(companion);
      }
    }
    dequeue(floofs) {
      if (floofs === 'dogs') return this.dogs.dequeue();
      if (floofs === 'cat') return this.cats.dequeue();
      return('only the best floofs are available');
    }
  }

  class AlltheFloofs {
    constructor(match, name){
      this.match = match;
      this.name = name;
    }
  }
  module.exports = { AnimalShelter, AlltheFloofs};