'use strict';
const mergeSort = require('../../merge-sort/index');

describe('---TEST for insertion sort function', () => {
  it('should sort the array in an ascending order', () => {
    let sampleArray = [5, 3, 7, 15, 11, 9, 17,19];
    let test = mergeSort(sampleArray);

    expect(test).toEqual([3,5,7,9,11,15,17,19]);
  });
  it('should sort a reverse sorted array in ascending order', () => {
    let sampleArray = [20,18,12,8,5,-2];
    let test = mergeSort(sampleArray);

    expect(test).toEqual([-2,5,8,12,18,20]);
  });
  it('should sort a few uniques array in ascending order', () => {
    let sampleArray = [5,12,7,5,5,7];
    let test = mergeSort(sampleArray);

    expect(test).toEqual([5,5,5,7,7,12]);
  });
  it('should finish sorting a nearly sorted array in an ascending order', () => {
    let sampleArray = [2,3,5,7,13,11];
    let test = mergeSort(sampleArray);

    expect(test).toEqual([2,3,5,7,11,13]);
  });
});
