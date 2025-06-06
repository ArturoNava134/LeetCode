// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
 

// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

var fourSum = function(nums, target) {
    const result = [];
    if (nums.length < 4) {
        return result;
    }

    nums.sort((a, b) => a - b);
    const len = nums.length;

    for (let i = 0; i < len - 3; i++) {
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) {
            continue;
        }

        for (let j = i + 1; j < len - 2; j++) {
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
                break;
            }
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) {
                continue;
            }

            let left = j + 1, right = len - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    left++;
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    console.log(result);
    return result;
};


let nums = [1,0,-1,0,-2,2];
let target = 0;

fourSum(nums, target);