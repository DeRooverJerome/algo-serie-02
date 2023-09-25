// Algorithmie en JAVASCRIPT -----------------------------------------
// Séries 2 -------------------------

// 00 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Create a function which returns the number of true values there are in an array.

// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).
// Expected results
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

// RESULT **************************************************

// function countTrue(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === true) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countTrue([true, false, false, true, false]));
// console.log(countTrue([false, false, false, false]));
// console.log(countTrue([]));

// 01 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.

// Notes
// You cannot move backward (which is why example #3 doesn't work).
// If you are already on the same tile, return false, as you would be advancing away.
// Expect only positive integer inputs.
// Expected results
// possibleBonus(3, 7) ➞ true

// possibleBonus(1, 9) ➞ false

// possibleBonus(5, 3) ➞ false

// RESULT **************************************************

// function possibleBonus(a, b) {
//   if (a > b) {
//     return false;
//   }
//   let diff = Math.abs(a - b);
//   return diff >= 1 && diff <= 6;
// }

// console.log(possibleBonus(3, 7));
// console.log(possibleBonus(1, 9));
// console.log(possibleBonus(5, 3));

// 02 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

// Expected results
// num_of_digits(1000) ➞ 4

// num_of_digits(12) ➞ 2

// num_of_digits(1305981031) ➞ 10

// num_of_digits(0) ➞ 1

// RESULT **************************************************

// function num_of_digits(number) {
//   let temp = number.toString();
//   return temp.length;
// }

// console.log(num_of_digits(1000));
// console.log(num_of_digits(12));
// console.log(num_of_digits(1305981031));
// console.log(num_of_digits(0));

// 03 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Notes
// Return an empty array if the object is empty.

// Expected results
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []

// RESULT **************************************************

// function toArray(obj) {
//   if (obj.length === 0) {
//     return [];
//   }
//   const result = [];
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result.push([key, obj[key]]);
//     }
//   }

//   return result;
// }

// console.log(toArray({ a: 1, b: 2 }));
// console.log(toArray({ shrimp: 15, tots: 12 }));
// console.log(toArray({}));

// 04 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Notes
// Notice that num is also included in the returned array.

// Expected results
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// RESULT **************************************************
