// Checks if two strings are anagrams

function areAnagrams(s1, s2) {
  const cleanStr1 = s1.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
  const cleanStr2 = s2.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
  return cleanStr1 === cleanStr2;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("triangle", "integral")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
