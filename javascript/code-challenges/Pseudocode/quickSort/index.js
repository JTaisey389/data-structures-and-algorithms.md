'use strict';

// let array = [5, 3, 7, 15, 11, 9, 17,19];

function quickSort(array, left, right) {
  // We have a function called quickSort with passed values of (array,left,right);
  let index; // Let the index check the values in the if statement
  if (array.length > 1) {
    // if the arrays length is greater than 1
    index = pivot(array, left, right); // we assign the index to pivot with values of (array,left,right)
    if (left < index - 1) {
      // if the left value is less than the index minus 1 we quick sort the values of (array,left,right)
      quickSort(array, left, index - 1);
    }
    if (index < right) {
      // if the index is less than the right value we quick sort the values of (array,left,right);
      quickSort(array, index, right);
    }
  }
  return array;
}
function pivot(array, left, right) {
  // We have a function called pivot that takes in values of (array,left,right)
  let switchEvent = array[Math.floor((right + left) / 2)]; // Let the switchEvent = to the array and to math.floor the values of right and left divided by two.
  let i = left; // I is left
  let j = right; // J is right
  while (i <= j) {
    // while the value of i is less than or equal to J
    while (array[i] < switchEvent) {
      // while the first value is being checked we look at the array at index i and see if it is less than switchEvent
      i++; // Now we increment through the while statement
    }
    while (array[j] > switchEvent) {
      // while array at index value of j is greater than switchedEvent
      j--; // Now we increment through the while statement
    }
    if (i <= j) {
      // if I is less than or equal to j we now use the swap function to change the positions of the values
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}
function swap(array, leftIndex, rightIndex) {
  let swapPlaces = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = swapPlaces;
}
// console.log(quickSort(array));

module.exports = quickSort;
