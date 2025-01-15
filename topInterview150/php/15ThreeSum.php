<!-- Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105 -->

<?php
class Solution {
    function threeSum($nums) {
        //first we create the variables, resultTriplets is gonna save the triplets that sums 0 and the size of nums.
        $resultTriplets = [];
        $arraySize = count($nums);

        //then we sort the array nums so we can obtain the result in the order required
        sort($nums); 
        // first we loop i since the position 0 until i be equal to the size - 2 to ensure the elements j and k 
        for ($i = 0; $i < $arraySize - 2; $i++) {

            // Skip duplicates for the current element
            if ($i > 0 && $nums[$i] === $nums[$i - 1]) {
                continue;
            }
            // then we can declare our pointers, j as i+1 and k as the arraysize-1, j is the left pointer and k the right pointer.
            $j = $i + 1; 
            $k = $arraySize - 1; 
            // This loop runs as long as the two pointers do not overlap.
            while ($j < $k) {
                // here we calculate the sum of the three numbers.
                $currentSum = $nums[$i] + $nums[$j] + $nums[$k];
                //if the sum is equal to 0, that's valid and we add it to the result array. 
                if ($currentSum === 0) {
                    $currentTriplet = array($nums[$i], $nums[$j], $nums[$k]);
                    $resultTriplets[] = $currentTriplet;

                    // Skip duplicates for the left pointer
                    while ($j < $k && $nums[$j] === $nums[$j + 1]) {
                        $j++;
                    }

                    // Skip duplicates for the right pointer
                    while ($j < $k && $nums[$k] === $nums[$k - 1]) {
                        $k--;
                    }
                    // here we add 1 to the left pointer and substract 1 to the right pointer.
                    $j++;
                    $k--;
                //if the sum isn't valid, we move the pointers but do not add anything to the result array.
                } elseif ($currentSum < 0) {
                    $j++;
                } else {
                    $k--;
                }
            }
        }

        print_r($resultTriplets);
        return $resultTriplets;
    }
}

$solutionInstance = new Solution(); 
$exampleValue = "example value"; 
$nums = [-1, 0, 1, 2, -1, -4]; 

$solutionInstance->threeSum($nums); 
?>








