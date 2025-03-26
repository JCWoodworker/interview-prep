# The purpose of this is to list out functions that are essential to solving larger problems

---

## Directory Structure

  ```interview-prep
      ├── array-manipulation
      ├── common-problems
      └── string-manipulation
  ```

---

## JavaScript Built-in Methods Used

* `.toLowerCase()`:

    ```javascript
    "HeLlO".toLowerCase(); // Returns "hello"
    ```

  * **Definition:** Converts a string to lowercase.
  * **Explanation:** Returns a new string with all characters converted to lowercase.

* `.replace(regex, replacement)`:

    ```javascript
    "hello world".replace("world", "JavaScript"); // Returns "hello JavaScript"
    "1a2b3c".replace(/[^a-z0-9]/g, ''); // Returns "1a2b3c"
    ```

  * **Definition:** Replaces parts of a string that match a pattern.
  * **Explanation:** Returns a new string with specified replacements.

* `.split(separator)`:

    ```javascript
    "apple,banana,cherry".split(","); // Returns ["apple", "banana", "cherry"]
    "hello".split(""); // Returns ["h", "e", "l", "l", "o"]
    ```

  * **Definition:** Splits a string into an array of substrings.
  * **Explanation:** Returns an array of substrings based on the separator.

* `.reverse()`:

    ```javascript
    [1, 2, 3].reverse(); // Modifies the array to [3, 2, 1]
    ```

  * **Definition:** Reverses the elements of an array in place.
  * **Explanation:** Modifies the original array by reversing its elements.

* `.join(separator)`:

    ```javascript
    ["apple", "banana", "cherry"].join(", "); // Returns "apple, banana, cherry"
    ```

  * **Definition:** Joins array elements into a string.
  * **Explanation:** Returns a string by concatenating array elements with a separator.

* `.sort(compareFunction)`:

    ```javascript
    [3, 1, 4, 2].sort(); // Modifies the array to [1, 2, 3, 4]
    [3, 1, 4, 2].sort((a, b) => a - b); // Modifies the array to [1, 2, 3, 4]
    ```

  * **Definition:** Sorts array elements in place.
  * **Explanation:** Modifies the original array, optionally with a compare function.

* `.slice(begin, end)`:

    ```javascript
    [1, 2, 3, 4, 5].slice(1, 3); // Returns [2, 3]
    ```

  * **Definition:** Returns a shallow copy of a portion of an array.
  * **Explanation:** Creates a new array with a subset of the original.

* `.isNaN(value)`:

    ```javascript
    isNaN("hello"); // Returns true
    isNaN(123); // Returns false
    ```

  * **Definition:** Determines if a value is NaN.
  * **Explanation:** Returns true if the value is Not-a-Number, false otherwise.

* `.localeCompare(compareString)`:

    ```javascript
    "apple".localeCompare("banana"); // Returns a negative number
    "banana".localeCompare("apple"); // Returns a positive number
    "apple".localeCompare("apple"); // returns 0
    ```

  * **Definition:** Compares strings in a locale-sensitive way.
  * **Explanation:** Returns a number indicating the sort order.

* `String(value)`:

    ```javascript
    String(123); // Returns "123"
    String(true); // Returns "true"
    ```

  * **Definition:** Converts a value to a string.
  * **Explanation:** Returns the string representation of the given value.

* `typeof(operand)`:

  * **Numbers:**

      ```javascript
      typeof 42;          // Returns "number"
      typeof 3.14;        // Returns "number"
      typeof NaN;         // Returns "number" (Yes, NaN is a number type!)
      typeof Infinity;    // Returns "number"
      typeof -Infinity;   // Returns "number"
      ```

  * **Strings:**

      ```javascript
      typeof "Hello, world!"; // Returns "string"
      typeof '';             // Returns "string" (Empty string)
      typeof `template literal`; // Returns "string"
      ```

  * **Booleans:**

      ```javascript
      typeof true;        // Returns "boolean"
      typeof false;       // Returns "boolean"
      ```

  * **Undefined:**

      ```javascript
      typeof undefined;   // Returns "undefined"
      typeof variableThatDoesNotExist; //Returns "undefined"
      ```

  * **Objects:**

      ```javascript
      typeof { key: 'value' }; // Returns "object"
      typeof null;        // Returns "object" (This is a known quirk of JavaScript)
      typeof [1, 2, 3];    // Returns "object" (Arrays are objects in JavaScript)
      typeof new Date();  // Returns "object"
      typeof /regex/;     // Returns "object" (Regular expressions are objects)
      ```

  * **Functions:**

      ```javascript
      typeof function() {}; // Returns "function"
      typeof Math.sin;     // Returns "function"
      ```

  * **Symbols (ES6):**

      ```javascript
      typeof Symbol('description'); // Returns "symbol"
      typeof Symbol.iterator;       // Returns "symbol"
      ```

  * **BigInt (ES11):**

      ```javascript
      typeof 9007199254740991n; // Returns "bigint"
      ```

    * **Definition:** Returns the type of the operand.
    * **Explanation:** Returns a string indicating the data type.

* `Math.max(...values)`:

    ```javascript
    Math.max(1, 5, 2); // Returns 5
    Math.max(...[1, 5, 2]); // Returns 5
    ```

  * **Definition:** Returns the largest of zero or more numbers.
  * **Explanation:** Returns the maximum value from the provided numbers or array.

* `Math.min(...values)`:

    ```javascript
    Math.min(1, 5, 2); // Returns 1
    Math.min(...[1, 5, 2]); // Returns 1
    ```

  * **Definition:** Returns the smallest of zero or more numbers.
  * **Explanation:** Returns the minimum value from the provided numbers or array.

* `Math.floor(x)`:

    ```javascript
    Math.floor(4.9); // Returns 4
    ```

  * **Definition:** Returns the largest integer less than or equal to a given number.
  * **Explanation:** Rounds a number down to the nearest integer.

* `Math.random()`:

    ```javascript
    Math.random(); // Returns a random number between 0 (inclusive) and 1 (exclusive)
    ```

  * **Definition:** Returns a pseudo-random number between 0 and 1.
  * **Explanation:** Used to generate random numbers.

* `.push(element)`:

    ```javascript
    let arr = [1, 2];
    arr.push(3); // arr is now [1, 2, 3]
    ```

  * **Definition:** Adds one or more elements to the end of an array.
  * **Explanation:** Modifies the original array and returns the new length.

* `.pop()`:

    ```javascript
    let arr = [1, 2, 3];
    let removed = arr.pop(); // removed is 3, arr is now [1, 2]
    ```

  * **Definition:** Removes the last element from an array.
  * **Explanation:** Modifies the original array and returns the removed element.

* `.shift()`:

    ```javascript
    let arr = [1, 2, 3];
    let removed = arr.shift(); // removed is 1, arr is now [2, 3]
    ```

  * **Definition:** Removes the first element from an array.
  * **Explanation:** Modifies the original array and returns the removed element.

* `.substring(startIndex, endIndex)`:

    ```javascript
    "hello".substring(1, 4); // Returns "ell"
    ```

  * **Definition:** Returns the portion of a string between the start and end indexes.
  * **Explanation:** Returns a new substring.

* `.indexOf(searchElement, fromIndex)`:

    ```javascript
    "hello".indexOf("l"); // Returns 2
    [1, 2, 3].indexOf(2); // Returns 1
    "hello".indexOf("l", 3); // Returns 3
    ```

  * **Definition:** Returns the first index at which a given element can be found in the array or string.
  * **Explanation:** Returns -1 if the element is not found.

* `Object.keys(obj)`:

    ```javascript
    Object.keys({a: 1, b: 2, c: 3}); // Returns ['a', 'b', 'c']
    ```

  * **Definition:** Returns an array of a given object's own enumerable property names.
  * **Explanation:** Returns an array containing the keys of the object.
* `
