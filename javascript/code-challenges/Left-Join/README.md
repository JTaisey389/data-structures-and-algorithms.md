# Challenge Summary

- Left Join

## Challenge Description

- Write a function that LEFT JOINs two hashmaps into a single data structure.
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
- LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
- The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.
- Avoid utilizing any of the library methods available to your language.

## Testing Parameters

- Write at least three test assertions for each method that you define.

## Approach & Efficiency

- The approach to this challenge would be to join the two sets of key/value pairs together within a hashmap. It would be something along the lines of adding an additional value to the key while maintaining the original position of the first set of key/value pairs. My gut instinct feels that a comparison operator to check the second hash tables values would establish what key the new values belong to. As the operator traverses the hash map the keys are checked against the already stored values and if they match it will add the value at index position 3 within an array. As a precursor to the setup an initial array would be used to store the first key/value pair. The new values would be pushed into the array as it's iterated through. 

## Solution

[Solution Example](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-33/dsa-33-io-table.png)

![Example](Assets/Left_Join.jpg)