// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
 

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
 


class MinimumSizeSubarraySum209 {
    
    //solution accepted but can't be submitd due a timeout. 
    public int minSubArrayLen(int target, int[] nums) {
        int length = nums.length;
    
        // Loop through possible subarray lengths from 1 to the length of the array
        for (int i = 1; i <= length; i++) {
            int sum = 0;
    
            // Loop to evaluate subarrays of the current length 'i'
            for (int j = 0; j + i - 1 < length; j++) {
                // If it's the first subarray of this length, calculate the sum of the first 'i' elements
                if (j == 0) {
                    for (int p = 0; p < i; p++) {
                        sum += nums[p];
                    }
                } else {
                    // For subsequent subarrays, update the sum by removing the element at the start 
                    // of the previous subarray and adding the next element to the subarray
                    sum = sum - nums[j - 1] + nums[j + i - 1];
                }
    
                // If the sum of the subarray is greater than or equal to the target, return the current subarray length
                if (sum >= target) {
                    return i;
                }
            }
        }
    
        // Return 0 if no subarray meets the condition
        return 0;
    }
    
    //this is a simpler solution that i found. 

   public int minSubArrayLenAccepted(int s, int[] a) {
    // Return 0 if the input array is null or empty
    if (a == null || a.length == 0)
        return 0;
    
    // Initialize pointers and variables: 
    // 'i' and 'j' are the left and right pointers for the sliding window,
    // 'sum' keeps track of the sum of the current window, 
    // 'min' holds the minimum subarray length that meets the condition.
    int i = 0, j = 0, sum = 0, min = Integer.MAX_VALUE;
    
    // Iterate through the array using the right pointer 'j'
    while (j < a.length) {
        // Add the current element at 'j' to the sum and move 'j' to the right
        sum += a[j++];
        
        // If the sum is greater than or equal to the target 's', try to minimize the window size
        while (sum >= s) {
            // Update the minimum subarray length found so far
            min = Math.min(min, j - i);
            // Remove the element at 'i' from the sum and move 'i' to the right to shrink the window
            sum -= a[i++];
        }
    }
    
    // If no valid subarray was found, return 0; otherwise, return the minimum length
    return min == Integer.MAX_VALUE ? 0 : min;
    }


    public static void main(String[] args){
        MinimumSizeSubarraySum209 solution = new MinimumSizeSubarraySum209();

        int target = 7;
        int[] nums = {2,3,1,2,4,3};

        int result = solution.minSubArrayLenAccepted(target, nums);

        System.out.println(result);

    }

}