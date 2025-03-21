// This adds a layer to ordering-mixed-01.js
// It orders and inserts all numbers FIRST, then orders and inserts all string.
// 1 and '1' no longer appear side by side if there are any other numbers to sort

function orderMixedArrayCorrected(arr) {
  return arr.slice().sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b; // Numerical comparison for numbers
    } else if (typeof a === 'number') {
      return -1; // Numbers come before strings
    } else if (typeof b === 'number') {
      return 1; // Numbers come before strings
    } else {
      return String(a).localeCompare(String(b)); // Lexicographical comparison for strings
    }
  });
}

const mixedArray = [
  "apple",
  "banana",
  10,
  "cherry",
  5,
  "date",
  100,
  "12",
  "1",
  "10a",
  1,
];

const orderedArray = orderMixedArrayCorrected(mixedArray);
console.log(orderedArray);
// output: [ 1, 5, 10, 100, '1', '10a', '12', 'apple', 'banana', 'cherry', 'date' ]