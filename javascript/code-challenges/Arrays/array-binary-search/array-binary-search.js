/* eslint-disable no-empty */
'use strict';
// - Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

const BinarySearch = (arr, val) => {
  let lower = 0;
  let upper = arr.length -1;
  while(lower <= upper){
    const middle = lower + Math.floor((upper - lower) / 2);
    if(val === arr[middle]){
      return middle;
    }
    if(val < arr [middle]) {
      upper = middle -1;
    } else {
      lower = middle + 1;
    }
  }
  return -1;
};

// BinarySearch = ([0, 2, 6, 8, 10, 12, 15, 22, 34, 55], 15);

module.exports = BinarySearch;
