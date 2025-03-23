function minWindowSubstring(s, pattern) {
  let minLength = Infinity;
  let minWindowStart = 0;
  let matched = 0;
  const patternFrequency = {};

  for (const char of pattern) {
    if (!(char in patternFrequency)) {
      patternFrequency[char] = 0;
    }
    patternFrequency[char] += 1;
  }

  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    if (rightChar in patternFrequency) {
      patternFrequency[rightChar] -= 1;
      if (patternFrequency[rightChar] >= 0) {
        matched += 1;
      }
    }

    while (matched === pattern.length) {
      if (minLength > windowEnd - windowStart + 1) {
        minLength = windowEnd - windowStart + 1;
        minWindowStart = windowStart;
      }

      const leftChar = s[windowStart];
      windowStart += 1;
      if (leftChar in patternFrequency) {
        if (patternFrequency[leftChar] === 0) {
          matched -= 1;
        }
        patternFrequency[leftChar] += 1;
      }
    }
  }

  if (minLength === Infinity) {
    return "";
  }
  return s.substring(minWindowStart, minWindowStart + minLength);
}

// Example usage:
console.log(minWindowSubstring('ADOBECODEBANC', 'ABC')); // Output: 'BANC'