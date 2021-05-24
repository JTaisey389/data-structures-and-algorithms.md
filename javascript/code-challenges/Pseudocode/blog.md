# Insertion Sort

- Insertion sort is a type of algorithm made for arrays which compares the values within an array. Insertion sort takes in an array of integers, and sorts the values into ascending order.

- The function uses a for loop with nested while loop inside. As with any loop you start at i = 1 and traverse through with the i < arr.length. Inside of the for loop, j = i - 1, and a temporary variable is set within the arr[i]. As you continue in the for loop j is assigned with positive integer and the temporary variable is passed < arr[j] and is reassigned. The array is then incremented with the prior, arr[j+1] which becomes arr[j], and j = j - 1. The loop will run until the temporary value is no longer less than the value of arr[j].

## Steps

- The sample array is [5,3,7,15,11,9,17]

Step 1: On the first go, i = 1, j = 0 and temp = [1] = 4. Now we enter the while loop, and the conditional evaluates to true, so array [1] becomes 5(5 and 3 swaps places). J= -1 breaks out of the loop and now the array is [3,5,7,15,11,9,17].

Step 2: On the second iteration, i = 2, j = 1, and temp=array[2]=7. Now we go into the while loop, and the conditional evaluates to false, so nothing changes. The array is [3,5,7,15,11,9,17].

Step 3: On the second iteration, i = 3, j = 2, and temp=array[3]=15. Now we go into the while loop, and the conditional evaluates to false, so nothing changes. The array is [3,5,7,15,11,9,17].

Step 4: On the fourth iteration, i = 4, j = 3, and temp=array [4]=11. Now we go into the while loop, and the conditional evaluates to true, so array [4] becomes 11(11) and 15 swaps places). J= -1 breaks out of the loop and now the array is [3,5,7,11,15,9,17].Now we go into the while loop, and the conditional evaluates to true, so array [5] becomes 15(15) and 9 swaps places). J= -1 breaks out of the loop and now the array is [3,5,7,9,11,15,17].
