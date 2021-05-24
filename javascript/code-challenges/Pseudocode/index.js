'use strict';

// let array = [5, 3, 7, 15, 11, 9, 17];

function insertionSort(array) {
  for (var i = 1; i < array.length; i++){
    let j = i - 1;
    let temp = array[i];
    while (j >= 0 && temp < array[j]) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = temp;
  }
  return array;
}

// console.log(insertionSort(array));

module.exports = insertionSort;
