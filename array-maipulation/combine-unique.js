//  This combines only the UNIQUE elements of each array.

function combineArraysUnique(arr1, arr2) {
  // Combine arrays, removing duplicates
  return [...new Set([...arr1, ...arr2])];
}

console.log(combineArraysUnique([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]


