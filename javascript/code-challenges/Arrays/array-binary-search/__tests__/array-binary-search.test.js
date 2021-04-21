/* eslint-disable new-cap */
'use strict';

// Require our linked list implementation
const BinarySearch = require('../array-binary-search.js');

// TEST CHALLENGE DAY 03
describe('Testing challenge Array-Binary-Shift', () => {
  test('It should return an interger that matches the value within the arrays', () => {
    expect(BinarySearch([0, 2, 6, 8, 10, 12, 15, 22, 34, 55], 15)).toStrictEqual([6]);
  });
});
describe('Testing challenge Array-Binary-Shift', () => {
  test('If the key is not in the array, return -1', () => {
    expect(BinarySearch([1, 5, 8, 9, 10, 13, 17, 22], 15)).toStrictEqual([-1]);
  });
});


// TEST CHALLENGE DAY 04
xdescribe('Testing challenge Array-Binary-Shift', () => {
  test('It should return an interger that matches the value within the arrays', () => {
    expect(LinkedLilst([4,8,15,16,23,42], 15)).toStrictEqual([-1]);
    expect(LinkedLilst([11,22,33,44,55,66,77], 90)).toStrictEqual([-1]);
    expect(LinkedLilst([1,2,3,5,6,7],4)).toStrictEqual([-1]);
  });
});

// TEST CHALLENGE DAY 05
xdescribe('Testing challenge Array-Binary-Shift', () => {
  test('It should return an interger that matches the value within the arrays', () => {
    expect(LinkedLilst([4,8,15,16,23,42], 15)).toStrictEqual([-1]);
    expect(LinkedLilst([11,22,33,44,55,66,77], 90)).toStrictEqual([-1]);
    expect(LinkedLilst([1,2,3,5,6,7],4)).toStrictEqual([-1]);
  });
});

// TEST CHALLENGE DAY 06
xdescribe('Testing challenge Array-Binary-Shift', () => {
  test('It should return an interger that matches the value within the arrays', () => {
    expect(LinkedLilst([4,8,15,16,23,42], 15)).toStrictEqual([-1]);
    expect(LinkedLilst([11,22,33,44,55,66,77], 90)).toStrictEqual([-1]);
    expect(LinkedLilst([1,2,3,5,6,7],4)).toStrictEqual([-1]);
  });
});
