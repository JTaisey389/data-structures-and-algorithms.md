/* eslint-disable new-cap */
'use strict';

// Require our linked list implementation
const BinarySearch = require('../array-binary-search');

// TEST CHALLENGE DAY 03
describe('Testing challenge Array-Binary-Shift', () => {
  test('It should return an interger that matches the value within the arrays', () => {
    expect(BinarySearch([0, 2, 6, 8, 10, 12, 15, 22, 34, 55], 15)).toStrictEqual(6);
  });
});
describe('Testing challenge Array-Binary-Shift', () => {
  test('If the key is not in the array, return -1', () => {
    expect(BinarySearch([1, 5, 8, 9, 10, 13, 17, 22], 15)).toStrictEqual(-1);
  });
});

