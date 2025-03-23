function findMinAvgSubarray(arr, k) {
  let minAvg = Infinity;
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  minAvg = windowSum / k;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    minAvg = Math.min(minAvg, windowSum / k);
  }
  return minAvg;
}

// Example usage:
console.log(findMinAvgSubarray([1, 12, -5, -6, 50, 3], 4)); // Output: -1.0