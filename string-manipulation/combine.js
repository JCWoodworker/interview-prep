// Combines multiple strings

function combineStrings(strings, separator = "") {
  return strings.join(separator);
}

// Example usage:
console.log(combineStrings(["hello", "world"], " ")); // Output: hello world
console.log(combineStrings(["apple", "banana", "cherry"], ", ")); // Output: apple, banana, cherry
