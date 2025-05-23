// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 
//q
// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each element in nums appears exactly three times except for one element which appears once.

var singleNumber = function(nums) {
    let sortedArray = nums.sort((a, b) => a - b);
    console.log(sortedArray); 
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        console.log("loop position: ", i);
        let currentNumber = sortedArray[i];
        let nextNumber = sortedArray[i+1];
        console.log("Current: ", currentNumber," Next: ", nextNumber);
        if (currentNumber == nextNumber){
            count++;
        }else{
            if (count < 2){
                console.log(currentNumber);
                return currentNumber;
            }else{
                count = 0;
            }
        }
        console.log("Count: ", count);
    }
};

let nums = [2,2,3,2];

singleNumber(nums);