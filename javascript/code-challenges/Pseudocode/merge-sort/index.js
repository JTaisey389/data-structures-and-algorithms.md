'use strict';

// let array = [5, 3, 7, 15, 11, 9, 17,19];

function mergeSort(array) {
  const value = array.length; // the value is array.length

  if(value > 1) { // if the value of the array.length we will sort the values either to the left or right
    let middle = value/2; // taking the middle value and dividing it in the center
    let left = array.slice(0,middle); // assigning the right side to slice at index 0 while letting the middle value get added
    let right = array.slice(middle);// the left is assigned a set of values, and with both right and left the middle will be found and continue to sort.

    mergeSort(left);
    mergeSort(right);
    combine(left,right,array); // this is our helper function to combine the values back together
  }
  return array;
}
function combine(left,right,array){
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < left.length && j < right.length){ // our while loop will not only increment through the values it checks to see if length is less than the value inside of the array.
    if(left[i] <= right[j]){ // if the left value is less than or equal to the right value we check the array and assign it the right value at index i and increment + 1
      array[k] = left[i];
      i = i + 1;
    } else {
      array[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }
  while(i < left.length){
    array[k] = left [i];
    i = i + 1;
    k = k + 1;
  }
  while(j < right.length){
    array[k] = right [j];
    j = j + 1;
    k = k + 1;
  }
}

// console.log(mergeSort(array));

module.exports = mergeSort;
