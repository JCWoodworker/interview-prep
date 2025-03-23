// Parses a CSV string

function parseCSV(csvString) {
  // Parse a CSV string into an array of arrays
  return csvString.split('\n').map(row => row.split(','));
}

// Example usage:
const csvData = "name,age,city\nJohn,30,New York\nJane,25,London";
console.log(parseCSV(csvData));
// Output: [ [ 'name', 'age', 'city' ], [ 'John', '30', 'New York' ], [ 'Jane', '25', 'London' ] ]