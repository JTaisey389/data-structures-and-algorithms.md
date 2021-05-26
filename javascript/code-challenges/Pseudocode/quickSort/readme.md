# Challenge Summary

- Pseudocode: Quick Sort

## Challenge Description

- Review the provided pseudocode, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

## Challenge

- Provide a visual step through for each of the sample arrays based on the provided pseudo code
- Convert the pseudo-code into working code in JavaScript
- Present a complete set of working tests

## Testing Parameters

“Happy Path” - Expected outcome
Expected failure
Edge Case (if applicable/obvious)

## Approach & Efficiency

- For this code challenge the goal is to use the QuickSort Method. Here is a general outline of steps to complete the task.

1. The first part is to locate the **pivot** element within the provided array
2. We have a start at the left pointer at the first element of the array
3. We also have a start at the right pointer at the last element of the array.

- This will start our set up to do the quickSort of the array

4. Now we can compare the left side element with the pointer and if the **value** is less than the **pivot** element, now we move the left pointer to the right (add 1 to the index). We continue to traverse the left side element until it is greater than or equal to the pivot.
5. Next we can compare the right side element with the pointer and if the **value** is less than the **pivot** element, now we move the right pointer to the left (subtract 1 to the index). We continue to traverse the right side element until it is less than or equal to the pivot.
6. The left pointer is now checking if the **value** is less than or equal to pointer, then saw the elements in the locations of these pointers.
7. We increment the left pointer and decrement the right pointer. Both pointers are traversing towards each other.
8. Finally if the left pointer is still less than the **value** of the right pointer, we repeat the process; else return the index of the left pointer.

[Link](https://www.guru99.com/quicksort-in-javascript.html)

![Example](https://www.guru99.com/images/1/011019_1052_QuickSortAl2.png)

## Solution

[Secondary Link](Assets/Quick_Sort.jpg)

![Link](Assets/Quick_Sort.jpg)