'use strict';

const {AnimalShelter} = require('javascript/code-challenges/queue-and-stack/fifo-animal-shelter/fifo-animal-shelter.js');
const {AlltheFloofs} = require('javascript/code-challenges/queue-and-stack/fifo-animal-shelter/fifo-animal-shelter.js');

let animalShelter = new AnimalShelter;

let jameson = new AlltheFloofs('dog', 'Jameson');
let bailey = new AlltheFloofs('dog', 'Bailey');
let tux = new AlltheFloofs('cat', 'Tux');
let tucker = new AlltheFloofs('dog', 'tucker');

animalShelter.enqueue(jameson);
animalShelter.enqueue(bailey);
animalShelter.enqueue(tux);
animalShelter.enqueue(tucker);

console.log(animalShelter);

console.log(animalShelter.dequeue('dog'));
console.log(animalShelter.dequeue('dog'));
console.log(animalShelter.dequeue('cat'));
console.log(animalShelter.dequeue('dog'));