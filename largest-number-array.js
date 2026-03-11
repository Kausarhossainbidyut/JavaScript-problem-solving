/**
 * Problem
Write a function that finds the largest number in an array.
 */

function findLargest(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

let numbers = [5, 12, 8, 20, 3];

console.log(findLargest(numbers));
