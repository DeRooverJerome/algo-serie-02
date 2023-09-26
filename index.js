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
//   let result = [];
//   for (let key in obj) {
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

// function arrayOfMultiples(num, length) {
//   const multiples = [];
//   for (let i = 1; i <= length; i++) {
//     multiples.push(num * i);
//   }
//   return multiples;
// }

// console.log(arrayOfMultiples(7, 5));
// console.log(arrayOfMultiples(12, 10));
// console.log(arrayOfMultiples(17, 6));

// 05 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

// Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
// Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
// Notes
// Return a string.
// If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
// If the number is 0, 0.0, 000, 00.00, etc... return "0".
// Expected results
// removeLeadingTrailing("230.000") ➞ "230"

// removeLeadingTrailing("00402") ➞ "402"

// removeLeadingTrailing("03.1400") ➞ "3.14"

// removeLeadingTrailing("30") ➞ "30"

// RESULT **************************************************

// function removeLeadingTrailing(n) {
//   const parsedNumber = parseFloat(n);

//   if (!isNaN(parsedNumber)) {
//     return parsedNumber.toString();
//   } else {
//     return "0";
//   }
// }

// console.log(removeLeadingTrailing("230.000"));
// console.log(removeLeadingTrailing("00402"));
// console.log(removeLeadingTrailing("03.1400"));
// console.log(removeLeadingTrailing("30"));

// 06 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// In this challenge you will be given an array similar to the following:

// [[3], 4, [2], [5], 1, 6]

// In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

// [1, [2], [3], 4, [5], 6]

// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

// Notes
// To reiterate, elements of the array will be either integers or arrays with a single integer.

// Expected results
// sortIt([4, 1, 3]) ➞ [1, 3, 4]

// sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

// sortIt([4, [1], 3]) ➞ [[1], 3, 4]

// sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

// sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]

// RESULT **************************************************

// function sortIt(arr) {
//   return arr.sort((a, b) => a - b);
// }

// console.log(sortIt([4, 1, 3]));
// console.log(sortIt([[4], [1], [3]]));
// console.log(sortIt([4, [1], 3]));
// console.log(sortIt([[4], 1, [3]]));
// console.log(sortIt([[3], 4, [2], [5], 1, 6]));

// 07 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

// Notes
// If the input tries to divide by 0, return: "Can't divide by 0!"

// Expected results
// calculator(2, "+", 2) ➞ 4

// calculator(2, "*", 2) ➞ 4

// calculator(4, "/", 2) ➞ 2

// RESULT **************************************************

// function calculator(a, operator, b) {
//   switch (operator) {
//     case "*":
//       return a * b;
//     case "/":
//       if (a == 0) {
//         return "Can't divide by 0!";
//       } else {
//         return a / b;
//       }
//     case "-":
//       return a - b;
//     case "+":
//       return a + b;
//     default:
//       break;
//   }
// }

// console.log(calculator(2, "+", 2));
// console.log(calculator(2, "*", 2));
// console.log(calculator(4, "/", 2));

// 08 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.

// Notes
// The total world's landmass is 148,940,000 [Km^2]
// Round the result to two decimal places.
// Expected results
// areaOfCountry("Russia", 17098242) ➞ "Russia is 11.48% of the total world's landmass"

// areaOfCountry("USA", 9372610), "USA is 6.29% of the total world's landmass"

// areaOfCountry("Iran", 1648195) ➞ "Iran is 1.11% of the total world's landmass"
// Notes
// The total world's landmass is 148,940,000 [Km^2]
// Round the result to two decimal places.

// RESULT **************************************************

// function areaOfCountry(country, area) {
//   let totalWorldMass = 148940000;
//   let calcul = (area / totalWorldMass) * 100;
//   return `${country} is ${calcul.toFixed(2)}% of the total world's Landmass`;
// }

// console.log(areaOfCountry("Russia", 17098242));
// console.log(areaOfCountry("USA", 9372610));
// console.log(areaOfCountry("Iran", 1648195));

// 09 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Given an input string, reverse the string word by word, the first word will be the last, and so on.

// Notes
// A word is defined as a sequence of non-space characters.
// The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.
// Expected results
// reverseWords(" the sky is blue") ➞ "blue is sky the"

// reverseWords("hello   world!  ") ➞ "world! hello"

// reverseWords("a good example") ➞ "example good a"

// RESULT **************************************************

// function reverseWords(input) {
//   let words = input.trim().split(/\s+/);
//   let reversedWords = words.reverse();
//   let reversedString = reversedWords.join(" ");
//   return reversedString;
// }

// console.log(reverseWords(" the sky is blue"));
// console.log(reverseWords("hello   world!  "));
// console.log(reverseWords("a good example"));


