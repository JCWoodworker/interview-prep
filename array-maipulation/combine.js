function combineArraysUnique(arr1, arr2) {
  // Combine arrays, removing duplicates
  console.log(`UNIQUE = ${[...new Set([...arr1, ...arr2])]}`)
  return [...arr1, ...arr2];
}

// Example usage:
console.log(combineArraysUnique([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 3, 4, 5]
