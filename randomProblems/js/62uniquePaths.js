// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

// Example 1:


// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down


var uniquePaths = function (m, n) {
    // First, we create an array with 'n' elements, all initialized to 1.
    // This array represents the number of ways to reach each cell in the first row.
    const arr = Array(n).fill(1);
    
    // We iterate through the rows, starting from the second row.
    for (let i = 1; i < m; i++) {
        // For each row, we iterate through each column, starting from the second column.
        for (let j = 1; j < n; j++) {
            // For each cell, we update its value to be the sum of the cell directly above it
            // and the cell to its left, representing all the unique paths to reach that cell.
            arr[j] = arr[j - 1] + arr[j];
        };
    };
    
    // The last element in the array represents the number of unique paths to reach the bottom-right corner.
    let res = arr.at(-1);
    
    // We log the result to the console.
    console.log(res);
    
    // Finally, we return the result.
    return res;
};

let m = 3;
let n = 7;

// We call the function with the dimensions of the grid.
uniquePaths(m, n);
