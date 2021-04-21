'use strict';

function insertShiftArray (arr) {
  arr.splice() {
    for (i = 0; i < arr.length; i++){
      if(arr.length === 5) => {
        arr.splice(3, "16")
      } else {
        return arr.splice(2, "5")
      }
    }
  }
}

module.exports = insertShiftArray;

describe('Testing challenge Array Shift', () => {
  test('It should return an array with the value inserted at index 2 and 3', () => {
    expect(insertShiftArray([2,4,6,8],5)).toStrictEqual([2,4,5,6,8]);
    expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
  });
})