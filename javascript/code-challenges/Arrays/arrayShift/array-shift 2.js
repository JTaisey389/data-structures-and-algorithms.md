'use strict';

const insertShiftArray = (output, value) => {
  const newVal = [];
  const middleInteger = Math.ceil(output.legth / 2);
  for (let i = 0; i <= output.legth; i++)
    if (i < middleInteger) {
      newVal.push(output[i]);
    } else if (i === middleInteger){
      newVal.push(value);
    } else if (i > middleInteger) {
      newVal.push(output[i+1]);
    }
  return newVal;
};

module.exports = insertShiftArray;

// describe('Testing challenge Array Shift', () => {
//   test('It should return an array with the value inserted at index 2 and 3', () => {
//     expect(insertShiftArray([2,4,6,8],5)).toStrictEqual([2,4,5,6,8]);
//     expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
//   });
// })