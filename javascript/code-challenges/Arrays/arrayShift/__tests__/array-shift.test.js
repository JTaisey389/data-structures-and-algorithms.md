'use strict'
const insertShiftArray = require('/Users/jason/Documents/Projects/401/data-structures-and-algorithms.md/javascript/code-challenges/Arrays/arrayShift/array-shift.js')

describe('Testing challenge Array Shift', () => {
  test('It should return an array with the value inserted at index 2 and 3', () => {
    expect(insertShiftArray([2,4,6,8],5)).toEqual([2,4,5,6,8]);
    expect(insertShiftArray([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
  });
})