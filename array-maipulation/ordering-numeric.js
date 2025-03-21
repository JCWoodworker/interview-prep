// Order a numeric array

function orderArrayNumeric(arr) {
  return arr.slice().sort((a, b) => a - b);
}

// Example usage:
console.log(orderArrayNumeric([1, 10, 2, 25, 3])); // Output: [1, 2, 3, 10, 25]
console.log(orderArrayNumeric([100, 5, 20, 150, 1])); // Output: [1, 5, 20, 100, 150]
console.log(orderArrayNumeric([11, 5, 3, 4, -6])) // Output: [-6, 3, 4, 5, 11]