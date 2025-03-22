// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

var subsets = function(nums) {
    // we initialize the result array with an empty subset
    let res = [[]];

    // dfs function to explore all possible subsets
    function dfs(index, current) {
        // we iterate through the remaining elements in the array
        for (let i = index; i < nums.length; i++) {
            // we add the current element to the current subset
            current.push(nums[i]);
            // we push a copy of the current subset to the result
            res.push([...current]);

            // recursively move to the next element
            dfs(i + 1, current);
            // backtrack by removing the last element
            current.pop();
        }
    }

    // we start dfs with an empty subset at index 0
    dfs(0, []);
    console.log(res); 
    return res;
};


let nums = [1, 2, 3];

subsets(nums); 
