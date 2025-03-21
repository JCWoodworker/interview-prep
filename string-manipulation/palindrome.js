// Function that checks if a string is a palandrome
// removes anything that is not a letter or number

function isPalindrome(s) {
  const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("031130")); // Output: true