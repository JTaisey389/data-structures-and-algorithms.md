# Quick Sort

- Quick sort is an algorithm based of the idea of divide and conquer. Quick sort will divide a set of elements into smaller components based off of the sort method and divide into smaller parts. Each element is evaluated against a **pivot** value and does a comparison to see if the **value** is less than or greater than or equal to. 

## Steps

- The sample array is [5,3,7,15,11,9,17,19]

1. The first part is to locate the **pivot** element within the provided array. Our **pivot** will be 15.

2. We have a start at the left pointer at the first element of the array. The starting **value** is 5.

3. We also have a start at the right pointer at the last element of the array. The last **value** is going to be 19. 

- This will start our set up to do the quickSort of the array

4. Now we can compare the left side element with the pointer and if the **value** is less than the **pivot** element, now we move the left pointer to the right (add 1 to the index). We continue to traverse the left side element until it is greater than or equal to the pivot.

5. Next we can compare the right side element with the pointer and if the **value** is less than the **pivot** element, now we move the right pointer to the left (subtract 1 to the index). We continue to traverse the right side element until it is less than or equal to the pivot.

6. The left pointer is now checking if the **value** is less than or equal to pointer, then saw the elements in the locations of these pointers.

7. We increment the left pointer and decrement the right pointer. Both pointers are traversing towards each other.
8. Finally if the left pointer is still less than the **value** of the right pointer, we repeat the process; else return the index of the left pointer.

### Visuals

[Link](Assets/Quick_Sort.jpg)
![Link](Assets/Quick_Sort.jpg)
