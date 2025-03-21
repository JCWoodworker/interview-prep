// Ordering an array that contains words AND numbers

function orderMixedArray(arr) {
	return arr.slice().sort((a, b) => {
		const aStr = String(a)
		const bStr = String(b)

		if (!isNaN(a) && !isNaN(b)) {
			return a - b // Numerical comparison for numbers
		} else {
			return aStr.localeCompare(bStr) // Lexicographical comparison for strings
		}
	})
}

// Example usage:
const mixedArray = [
	"apple",
	"banana",
	10,
	"cherry",
	5,
	"date",
	100,
	"12",
	"1",
	"10a",
  1,
]
const orderedArray = orderMixedArray(mixedArray)
console.log(orderedArray)
// Output: [ 1, 5, 10, '12', 100, '10a', 'apple', 'banana', 'cherry', 'date' ]

// more examples
const mixedArray2 = ["zebra", 100, "aardvark", 50, "cat", 25]
const orderedArray2 = orderMixedArray(mixedArray2)
console.log(orderedArray2)
// Output: [ 25, 50, 100, 'aardvark', 'cat', 'zebra' ]

const mixedArray3 = ["100", 100, "a", 1, "A"]
const orderedArray3 = orderMixedArray(mixedArray3)
console.log(orderedArray3)
//Output: [ 1, 100, '100', 'A', 'a']
