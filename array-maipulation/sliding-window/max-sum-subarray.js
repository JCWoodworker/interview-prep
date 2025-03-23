

function findMaxSumSubarray(arr, k) {
  // Find the maximum sum of a subarray with length k
  let maxSum = 0;
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

// Example usage:
console.log(findMaxSumSubarray([1, 4, 2, 10, 2, 3, 1, 0, 20], 4)); // Output: 24