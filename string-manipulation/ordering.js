// Sorts a string in numeric order then alphabetic order
// Letters and numbers in a string are sorted one element at a time!


function orderString(s) {
  return s.split('').sort().join('');
}

// Example usage:
console.log(orderString("h123ello99")); // Output: 12399ehllo