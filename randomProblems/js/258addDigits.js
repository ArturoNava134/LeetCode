// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0
 

// Constraints:

// 0 <= num <= 231 - 1

var addDigits = function(num) {
    
    if(num == 0){
        return 0; 
    }
    //first we convert the num to an array.
    let arrayNum = Array.from(String(num), Number);
    //then we start a loop that doesn't stop until the array is different to 1
    while(arrayNum.length != 1){
        // result number as 0 each time the loop repeats
        number = 0;
        // then we loop the array
        for (i = 0; i < arrayNum.length; i++){
            // we obtain each value of the array
            currVal = arrayNum[i];
            // and we add the value to the number 
            number += currVal;
        }
        // we convert the value we got from the adding to an array too
        const arrayNumber = Array.from(String(number), Number);
        // and replace the arrayNum with that number;
        arrayNum = arrayNumber;
    }
    // once the loop finish, that means that the array's length == 1
    console.log(arrayNum);
    // so we save the response as the unique value that the array contains and return it.
    let res = arrayNum[0];
    return res;

};

let num = 38;

addDigits(num);