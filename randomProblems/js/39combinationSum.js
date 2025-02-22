// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []
 

// Constraints:

// 1 <= candidates.length <= 30
// 2 <= candidates[i] <= 40
// All elements of candidates are distinct.
// 1 <= target <= 40

var combinationSum = function(candidates, target) {
    // We initialize an empty array to store all the valid combinations.
    const combinations = [];
    
    // This function will recursively explore all possible combinations.
    function findCombinations(currentCombination = [], currentSum = 0, startIndex = 0) {
        // If the current sum exceeds the target, we stop exploring this path.
        if (currentSum > target) return;

        // If the current sum matches the target, we add the combination to the results.
        if (currentSum === target) {
            combinations.push(currentCombination);
            return;
        }
        
        // We iterate through the candidates array starting from the given index.
        for (let i = startIndex; i < candidates.length; i++) {
            // We recursively call the function, adding the current candidate to the combination.
            // The sum is updated by adding the current candidate's value.
            // We pass 'i' as the index to allow reusing the same element multiple times.
            findCombinations(
                [...currentCombination, candidates[i]], 
                currentSum + candidates[i], 
                i
            );
        }
    }

    // We start the recursive function with an empty combination.
    findCombinations();
    
    // We log the final list of valid combinations to the console.
    console.log(combinations);
    
    // Finally, we return the list of all valid combinations.
    return combinations;
};

let candidates = [2,3,6,7];
let target = 7;
combinationSum(candidates, target);