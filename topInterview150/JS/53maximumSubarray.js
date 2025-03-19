// Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

var maxSubArray = function(nums) {
    //first we set our current Sum as 0 and the max sum as -infinity.
    let currSum = 0;
    //we set maxSum as -Infinity bc we want to accept negative values if we set it as 0, it cannot take negative values
    //and it will remain always as 0 instead of getting the max number for example.
    // nums = [-3, -5, -1]; in this case it returns -1 but if it was 0 it remain as 0 and the response isn't correct.
    let maxSum = -Infinity;

    //we loop trough the entire array.
    for (let i = 0; i < nums.length; i++){
        //this is the value we are in the array.
        let currValue = nums[i];
        //then we set the current sum as the Current Sum + the current Value
        currSum += currValue;
        //and each time we loop, we compare the max sum (in that moment) and the current sum if the current Sum is higher we set it as the maxSum.
        maxSum = Math.max(maxSum, currSum);
        // for each loop we want to know if the current sum is negative, if it's negative, we set it as the initial state (0)
        // so we can the sum again.
        if (currSum < 0){
            currSum = 0;
        }
    }
    console.log(maxSum);
    return maxSum;
};

nums = [5,4,-1,7,8];

maxSubArray(nums);