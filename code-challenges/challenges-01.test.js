'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named `addOne` that takes an array of numbers, and returns a new array of the numbers, incremented by 1.

Use `forEach` to loop over the input array and work with each value.  Push the new value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */
// expect(addOne([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5, 6]);

const addOne = (arr) => { // what we are saying is var addOne to the array 1,2,3,4,5.
  const result = []; // we then say var result is equal to the empty array
  arr.forEach(function(number) { // next we take the array for each number in that function
    result.push(number +1); // this will then push the results of the number and add 1
  });
  return result;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named `addExclamation` that takes an array of strings, and returns a new array of the same strings with an "!" added to the end.

Use `forEach` to loop over the input array. Modify each string, and add the updated value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */

// expect(addExclamation(['hi', 'how', 'are', 'you'])).toStrictEqual(['hi!', 'how!', 'are!', 'you!']);
const addExclamation = (arr) => { //we are saying const to add an exclamation poin to the array
  const result = []; //passing the results into an empty array
  arr.forEach(function(greetwith){ //now we have the array for each greetwith to pass into the function
    result.push(greetwith +'!'); //then we take the reslut and push to the greetwith and add the exclamation point
  });
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named `allUpperCase` that takes an array of strings, and returns a new array of the strings converted to upper case.

Use `forEach` to loop over the input array. The modified strings should each be added into a local array. Return that local array.
------------------------------------------------------------------------------------------------ */
// test('It should return an array with an exclamation point added to each value of the original array', () => {
//   expect(addExclamation(['hi', 'how', 'are', 'you'])).toStrictEqual(['hi!', 'how!', 'are!', 'you!']);

const allUpperCase = (arr) => { // we are constraining the letters to alluppercase to the array. This is where we say allUpperCase is = to the arr
  const result = []; // we pass information into the empty array
  arr.forEach(greeting => { // with the array we then say for each greeting and passing that through a function
    const greetingUpperCase = greeting.toUpperCase(); // within out function we delcare a contrain to greetingUpperUpercase and do a comparison of greeting.toUpperCase
    result.push(greetingUpperCase);// now we take the result and push it to the greeting to uppercase 
  });
  return result;// return result 
  // return what I expect to be returned 
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named `greeting` that takes in a single string and returns the string in all uppercase letters, and followed by an "!".

Then, write a function named `speaker` that takes in an array of strings and a callback function. 

Use `forEach` to build a new array of strings, each string modified by the callback. Return the new array. 
------------------------------------------------------------------------------------------------ */
// xdescribe('Testing challenge 4', () => {
//   test('It should provide an array of strings, that get uppercased, and a "!" at the end', () => {
//     expect(speaker(['hello', '301', 'students'], greeting)).toStrictEqual(['HELLO!', '301!', 'STUDENTS!']);
//   });
// });

//A callback is a function passed as an argument to another function.
const greeting = (word) => { //greeting is equal to word
  return word.toUpperCase(); // We take the word which is equal to the greenting and change that to .toUpperCase
};

const speaker = (words, callback) => { // speaker is equal to words and callback
  const result = []; // the results are equal to the empty array
  words.forEach(word => { // For each words we want to take the word from the function earlier
    result.push(`${callback(word)}!`); // now we call the result and push that to the callback of word
  });
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.

Then, write a function named addNumbers that takes in four arguments:
  - A number to be added to an array
  - An array into which the number should be added
  - The number of times the number should be added
  - A callback function to use to add the numbers to the array (Hint: you already defined it)

Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.

Return the modified array.
------------------------------------------------------------------------------------------------ */
// describe('Testing challenge 5', () => {
//   test('It should add the number 8 to the array five times', () => {
//     expect(addNumbers(8, [], 5, addValues)).toStrictEqual([8, 8, 8, 8, 8]);
//     expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
//   });
// });

const addValues = (arr, value) => { // The addValues is = to arr and values
  arr.push(value); //we are taking arr and pushing it to the value
};

const addNumbers = (num, arr, times, callback) => { // the add numbers is equal to num, the arr, the times and the callback
  for (var i = 0; i < times; i++) { // a for loop to itterate through which is less than the number of times
    callback(arr, num); // we call back the arr and num
  }
  return arr;
};

/* ------------------------------------------------------------------------------------------------

CHALLENGE 6

Write a function named createList that takes in an array of the current store intentory.

The inventory is formatted like this:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]

This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.
------------------------------------------------------------------------------------------------ */
// describe('Testing challenge 6', () => {
//   const inventory = [{ name: 'apples', available: true }, { name: 'pears', available: true }, { name: 'oranges', available: false }, { name: 'bananas', available: true }, { name: 'blueberries', available: false }];

//   test('It should only add the available items to the list', () => {
//     expect(createList(inventory)).toStrictEqual(['apples', 'pears', 'bananas']);
//     expect(createList(inventory).length).toStrictEqual(3);
//   });
// });

const createList = (availableItems) => { // create list is = to the availableItems
  const groceryList = []; // the groceryList is equal to an empty array
  availableItems.forEach(inventory => { // We check to see for each item of the available inventory
    if(inventory.available === true){ // if the inventory is available this strict equals to true
      groceryList.push(inventory.name); //now we take the grocerylist and push it to the inventory.name
    }
  });
  return groceryList;
};

/* ------------------------------------------------------------------------------------------------
STRETCH - CHALLENGE 7

Write a function named fizzbuzz that takes in an array of numbers.

Iterate over the array using forEach to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.

Return the resulting output array.
------------------------------------------------------------------------------------------------ */

const fizzbuzz = (arr) => {
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

xdescribe('Testing challenge 1', () => {
  test('It should return an array with 1 added to each value of the original array', () => {
    expect(addOne([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5, 6]);
  });
});

xdescribe('Testing challenge 2', () => {
  test('It should return an array with an exclamation point added to each value of the original array', () => {
    expect(addExclamation(['hi', 'how', 'are', 'you'])).toStrictEqual(['hi!', 'how!', 'are!', 'you!']);
  });
});

xdescribe('Testing challenge 3', () => {
  test('It should return an array of uppercase strings', () => {
    expect(allUpperCase(['hi', 'how', 'are', 'you'])).toStrictEqual(['HI', 'HOW', 'ARE', 'YOU']);
  });
});

xdescribe('Testing challenge 4', () => {
  test('It should provide an array of strings, that get uppercased, and a "!" at the end', () => {
    expect(speaker(['hello', '301', 'students'], greeting)).toStrictEqual(['HELLO!', '301!', 'STUDENTS!']);
  });
});

xdescribe('Testing challenge 5', () => {
  test('It should add the number 8 to the array five times', () => {
    expect(addNumbers(8, [], 5, addValues)).toStrictEqual([8, 8, 8, 8, 8]);
    expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
  });
});

xdescribe('Testing challenge 6', () => {
  const inventory = [{ name: 'apples', available: true }, { name: 'pears', available: true }, { name: 'oranges', available: false }, { name: 'bananas', available: true }, { name: 'blueberries', available: false }];

  test('It should only add the available items to the list', () => {
    expect(createList(inventory)).toStrictEqual(['apples', 'pears', 'bananas']);
    expect(createList(inventory).length).toStrictEqual(3);
  });
});

xdescribe('Testing challenge 7', () => {
  const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  test('It should print out messages or numbers', () => {
    expect(fizzbuzz(inputs)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
    expect(fizzbuzz(inputs).length).toStrictEqual(16);
  });
});
