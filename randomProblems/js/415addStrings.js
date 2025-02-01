// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"
 

// Constraints:

// 1 <= num1.length, num2.length <= 104
// num1 and num2 consist of only digits.
// num1 and num2 don't have any leading zeros except for the zero itself.

var addStrings = function(num1, num2) {
    let leftPointer = num1.length - 1;
    let rightPointer = num2.length - 1;
    let carryOver = 0;
    let sumResult = [];
    
    while (leftPointer >= 0 || rightPointer >= 0 || carryOver) {
        let digit1 = leftPointer >= 0 ? num1.charCodeAt(leftPointer) - '0'.charCodeAt(0) : 0;
        let digit2 = rightPointer >= 0 ? num2.charCodeAt(rightPointer) - '0'.charCodeAt(0) : 0;
        
        let digitSum = digit1 + digit2 + carryOver;
        carryOver = Math.floor(digitSum / 10);
        sumResult.push((digitSum % 10).toString());
        
        console.log(`Adding ${digit1} + ${digit2} + carry ${carryOver}, Result: ${digitSum % 10}, New Carry: ${carryOver}`);
        
        leftPointer--;
        rightPointer--;
    }
    
    let finalResult = sumResult.reverse().join('');
    console.log(`Final sum result: ${finalResult}`);
    return finalResult;
};

