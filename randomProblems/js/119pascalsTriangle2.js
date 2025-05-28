// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

//huh
 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33

var getRow = function(rowIndex) {
    // We initialize the row array with 1s. Since Pascal's Triangle always starts and ends with 1.
    let row = new Array(rowIndex + 1).fill(1);

    console.log("Row Initialized: ", row); 

    // We start iterating from the first row up to the given rowIndex.
    for (let currentRow = 1; currentRow <= rowIndex; currentRow++) {
        console.log("Current Row: ", currentRow);

        // We iterate in reverse order to prevent overwriting values that are needed for calculations.
        for (let col = currentRow - 1; col > 0; col--) {
            console.log(`Updating row[${col}] = row[${col}] (${row[col]}) + row[${col - 1}] (${row[col - 1]})`);

            // Each element (except the first and last) is the sum of the two elements above it.
            row[col] += row[col - 1];

            console.log("Updated Row: ", row);
        }
    }

    // We return the final computed row of Pascal's Triangle.
    console.log("Final Pascal's Triangle Row: ", row);
    return row;
};

// log the result
console.log(getRow(4));
