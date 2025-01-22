// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30


// the code i did in my notebook: 
// var generate = function(numRows) {
//     let res = [[1]]; 
//     if (numRows == 1) {
//         return res; 
//     }
//     if (numRows == 0) {
//         return [[]]; 
//     }
//     let FandLidx = 1;

//     for (let i = 2; i <= numRows; i++) {
//         let rowN = i;
//         let row = [FandLidx]; 
//         if (rowN > 2) {
//             let lastRow = res[rowN - 2]; 
//             let lrLength = lastRow.length;

//             for (let t = 0; t < lrLength - 1; t++) {
//                 let currPosition = lastRow[t];
//                 let nextPosition = lastRow[t + 1];
//                 let nextVal = currPosition + nextPosition;
//                 row.push(nextVal); 
//             }
//         }

//         row.push(FandLidx); 
//         console.log("row: ", row); 
//         res.push(row); 
//     }

//     console.log("res:", res); 
//     return res;
// };


// a better solution:

var generate = function(numRows) {
    let res = [[1]]; 
    if (numRows === 1) {
        return res; 
    }
    if (numRows === 0) {
        return []; 
    }

    let FandLidx = 1;

    for (let i = 2; i <= numRows; i++) { 
        let row = [FandLidx]; 
        let lastRow = res[i - 2]; 

       
        for (let j = 0; j < lastRow.length - 1; j++) {
            let nextVal = lastRow[j] + lastRow[j + 1]; 
            row.push(nextVal);
        }

        row.push(FandLidx); 
        console.log("row: ", row); 
        res.push(row); 
    }

    console.log("res:", res); 
    return res;
};



let numRows = 5;
generate(numRows);
