// const isAnagram = (word1, word2) => {
// 	const sortedWord1 = word1.split("").sort().join("")
// 	const sortedWord2 = word2.split("").sort().join("")
// 	if (sortedWord1 === sortedWord2) {
// 		return true
// 	}
// 	return false
// }

// function findAnagramsWithinAnArray(initialWord, wordArray) {
// 	for (let i = 0; i < wordArray.length; i++) {
// 		let areTheseAnagrams = isAnagram(initialWord, wordArray[i])
// 		if (areTheseAnagrams) {
// 			return true
// 		}
// 	}
// 	return false
// }

// const firstWord = "sword"
// const wordArray1 = ["james", "fast", "words"]
// const wordArray2 = ["forge", "fast", "grudge"]

// console.log(findAnagramsWithinAnArray(firstWord, wordArray1))
// console.log(findAnagramsWithinAnArray(firstWord, wordArray2))

const word = "a man a pan a panama"
const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "")
const wordMayBePalindrome = cleanedWord.split("").reverse().join("")
console.log(
	"Cleaned Word: " +
		cleanedWord +
		"\n" +
		"Possible palindrome: " +
		wordMayBePalindrome
)
console.log(
	cleanedWord === wordMayBePalindrome
		? `You've got a palindrome!`
		: `Not a palindrome`
)
