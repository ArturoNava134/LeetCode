// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 //huh

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closestDifference = Infinity;

    for (let first = 0; first < nums.length; first++) {
        let second = first + 1;
        let third = nums.length - 1;
    
        while (second < third) {
            let currentSum = nums[first] + nums[second] + nums[third];
        
            if (Math.abs(closestDifference) > Math.abs(target - currentSum)) {
                closestDifference = target - currentSum;
            }
        
            if (currentSum < target) {
                second++;
            } else {
                third--;
            }
        }
    }
    let result = target - closestDifference;
    console.log(result);
    return result;
};


let nums = [-1,2,1,-4];
let target = 1;

threeSumClosest(nums, target);