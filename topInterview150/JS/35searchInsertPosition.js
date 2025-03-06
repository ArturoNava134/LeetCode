// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104


var searchInsert = function(nums, target) {
    console.log("test");
    
    for (let i = 0; i < nums.length - 1; i++) {
        let currentPosition = nums[i];
        let nextPosition = nums[i + 1];
        console.log("curr:", currentPosition);
        console.log("next:", nextPosition);

        if (currentPosition === target) {
            console.log("position:", i);
            return i;
        }
        if (currentPosition < target && nextPosition > target) {
            console.log("position:", i + 1);
            return i + 1;
        }
    }

    if (nums[0] >= target) {
        console.log("position: 0");
        return 0;
    }

    if (nums[nums.length - 1] < target) {
        console.log("position:", nums.length);
        return nums.length;
    }

    if (nums[nums.length - 1] === target) {
        console.log("position:", nums.length - 1);
        return nums.length - 1;
    }

    return nums.length;
};
