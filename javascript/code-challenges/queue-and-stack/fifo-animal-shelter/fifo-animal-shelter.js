'use strict';

const Queue = require('../fifo-animal-shelter/queue.js');

class AlltheFloofs {
  constructor(type, name){// this.type = this.type pass in type
    this.type = type;
    this.name = name;
  }
}
class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }
  enqueue(companion) {
    if(companion.type !== 'dog' && companion.type !== 'cat')return null;
    if(companion.type === 'dog'){
      this.dogs.enqueue(companion);
      return this;
    }
    if(companion.type === 'cat'){
      this.cats.enqueue(companion);
      return this;
    }
  }
  dequeue(floofs) {
    if(floofs.type !== 'dog' && floofs.type !== 'cat')return null;
    if(floofs.type === 'dog'){
      this.dogs.dequeue(floofs);
    } else {
      this.cats.dequeue(floofs);
    }
  }
}


module.exports = { AlltheFloofs, AnimalShelter };
