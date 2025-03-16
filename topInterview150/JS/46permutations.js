// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]
 

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.


var permute = function(nums) {
    // we start an array to store all generated permutations
    const result = [];
    
    function generatePermutations(start) {
        // if we've placed all elements, we store the current permutation
        if (start === nums.length) {
            result.push([...nums]); // we make a copy of nums to avoid mutation
            return;
        }
        
        // we iterate through the remaining elements
        for (let i = start; i < nums.length; i++) {
            // swap the current element with the start element
            [nums[start], nums[i]] = [nums[i], nums[start]];
            
            // we recurse to generate further permutations
            generatePermutations(start + 1);
            
            // we undo the swap (backtrack)
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
    
    // we start recursion from index 0
    generatePermutations(0);
    console.log(result);
    return result;
};

let nums = [1,2,3];
permute(nums);