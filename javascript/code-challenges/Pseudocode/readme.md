# Challenge Summary

- Pseudocode: Insertion Sort

## Challenge Description

- Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Insertion Sort based on the pseudocode provided.

![Example](/Assets/Pseudocode.png)

- Example:
  
  `FOR i = 1 to arr.length`
  `int j <-- i - 1`
  `int temp <-- arr[i]`
  
  `WHILE j >= 0 AND temp < arr[j`
  `arr[j + 1] <-- arr[j]`
  `j <-- j - 1`
  `arr[j + 1] <-- temp`

## Testing Parameters

“Happy Path” - Expected outcome
Expected failure
Edge Case (if applicable/obvious)

## Approach & Efficiency

- For this code challenge I think starting at the first position of the array works best. With that in mind we will need to increment through with a for loop and establish a set of variables to pass into the for loop. As you step through the for loop you are identifying each the values within the set array.

## Solution

![Solution Example](Assets/Selection_Sort.jpg)

[Secondary Link](/Users/jason/Documents/Projects/401/data-structures-and-algorithms.md/Assets/Selection_Sort.jpg)
