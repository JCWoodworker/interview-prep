//  Combines two arrays by interleaving each element from each array

function combineArraysInterleave(arr1, arr2) {
  // Interleave elements from two arrays
  const result = [];
  const maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) result.push(arr1[i]);
    if (i < arr2.length) result.push(arr2[i]);
  }
  return result;
}

// Example usage:
console.log(combineArraysInterleave([1, 2, 3], ['a', 'b', 'c', 'd'])); // Output: [1, 'a', 2, 'b', 3, 'c', 'd']