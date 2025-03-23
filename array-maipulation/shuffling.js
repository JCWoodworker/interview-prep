// Randomize the order of an array

function shuffleArray(arr) {
  // Fisher-Yates shuffle algorithm
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr;
}

// Example usage:
console.log(shuffleArray([1, 2, 3, 4, 5])); // Output: (randomized order)