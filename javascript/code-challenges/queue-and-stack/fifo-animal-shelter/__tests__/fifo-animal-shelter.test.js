
'use strict';


const {AnimalShelter} = require('javascript/code-challenges/queue-and-stack/fifo-animal-shelter/fifo-animal-shelter.js');
const {AlltheFloofs} = require('javascript/code-challenges/queue-and-stack/fifo-animal-shelter/fifo-animal-shelter.js');

let animalShelter = new AnimalShelter;

let jameson = new AlltheFloofs('dog', 'Jameson');
let bailey = new AlltheFloofs('dog', 'Bailey');
let tux = new AlltheFloofs('cat', 'Tux');
let tucker = new AlltheFloofs('dog', 'tucker');

describe('====== Animal Shelter Test==========', () => {
  it('should enqueue a new floof to the shelter', () => {
    animalShelter.enqueue(jameson);
    expect(animalShelter.cats.peek()).toBe(jameson);
  });

  it('should enqueue multiple floofs to the shelter', () => {
    animalShelter.enqueue(bailey);
    animalShelter.enqueue(tux);
    animalShelter.enqueue(tucker);
    expect(animalShelter.cats.peek()).toBe(bailey);
    expect(animalShelter.dogs.peek()).toBe(tux);
  });

  it('should dequeue an floof from the shelter', () => {
    expect(animalShelter.dequeue('cat')).toBe(tux);
  });

  it('should dequeue multiple floofs from the shelter', () => {
    animalShelter.dequeue('dog');
    expect(animalShelter.dequeue('dog')).toBe(tucker);
  });

  it('should return error if shelter is empty', () => {
    expect(animalShelter.dequeue('dog')).toBe('empty queue');
  });

  it('should return error if preference is not dog or cat', () => {
    expect(animalShelter.dequeue('not a floof')).toBe('only dogs and cats available');
  });

});