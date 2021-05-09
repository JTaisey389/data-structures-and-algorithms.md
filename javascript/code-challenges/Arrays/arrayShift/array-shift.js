'use strict';

function insertShiftArray (arr, value) {
  let newValues = [];
  let middle = arr.length / 2; //Splits the array in two
  if (arr.length % 2 !== 0) {
    middle += .5;
  }
  for(let i = 0; i <= arr.length; i++){
    if (i < middle) {
      newValues.push(arr[i]);
    } else if ( i === middle ) {
      newValues.push(value);
    } else {
      newValues.push(arr[i-1]);
    }
  }
  return newValues;
}

module.exports = insertShiftArray;
