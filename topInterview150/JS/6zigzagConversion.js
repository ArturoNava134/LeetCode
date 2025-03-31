

var convert = function(s, numRows) {
    // If there's only one row or the string length is less than numRows, return the string as is
    if (numRows === 1 || s.length < numRows) return s;

    // Variable to control direction, false means going down and true means going up
    let direction = false;
    // Counter to keep track of the current row
    let count = 0;

    // Create an array of empty strings with size equal to numRows
    let arr = new Array(numRows).fill("");

    // Iterate through the string
    for (let i = 0; i < s.length; i++) {
        // Get the current character
        let curr = s[i];

        // Add the character to the corresponding row
        arr[count] += curr;
        
        // Change direction when reaching the first or last row
        if (count === 0 || count >= numRows - 1) direction = !direction;
        
        // Move count up or down depending on the direction
        direction ? count++ : count--;
    }

    // Join all rows and return the result
    console.log(arr.join(""));
    return arr.join("");
};

let s = "PAYPALISHIRING";
let numRows = 3;

convert(s, numRows);

