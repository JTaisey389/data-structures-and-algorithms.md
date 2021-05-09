
'use strict';


const {AnimalShelter, AlltheFloofs} = require('../fifo-animal-shelter');

let animalShelter = new AnimalShelter;

let jameson = new AlltheFloofs('dog', 'Jameson');
let bailey = new AlltheFloofs('dog', 'Bailey');
let tux = new AlltheFloofs('cat', 'Tux');
let tucker = new AlltheFloofs('dog', 'Tucker');

xdescribe('====== Animal Shelter Test==========', () => {
  it('should enqueue a new floof to the shelter', () => {
    animalShelter.enqueue(jameson);
    expect(animalShelter.dogs.first.value.name).toBe('Jameson');
  });

  it('should enqueue multiple floofs to the shelter', () => {
    animalShelter.enqueue(bailey);
    animalShelter.enqueue(tucker);
    expect(animalShelter.dogs.first.value.next.name).toBe('Bailey');
    expect(animalShelter.dogs.first.value.next.name).toBe('Tucker');
  });

  it('should dequeue an floof from the shelter', () => {
    const result = animalShelter.dequeue('cat');
    expect (result.value.name).toBe(tux);
  });

  it('should dequeue multiple floofs from the shelter', () => {
    animalShelter.dequeue('dog');
    expect(animalShelter.dogs.first.value).toBe('tucker');
  });

  it('should return error if shelter is empty', () => {
    expect(animalShelter.dequeue('dog')).toBe('empty queue');
  });

  it('should return error if preference is not dog or cat', () => {
    expect(animalShelter.dequeue('not a floof')).toBe('only dogs and cats available');
  });
});
