# You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

# Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

# 0 <= j <= nums[i] and
# i + j < n
# Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

# Example 1:

# Input: nums = [2,3,1,1,4]
# Output: 2
# Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
# Example 2:

# Input: nums = [2,3,0,1,4]
# Output: 2
 

# Constraints:

# 1 <= nums.length <= 104
# 0 <= nums[i] <= 1000
# It's guaranteed that you can reach nums[n - 1].


class Solution(object):
    def jump(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        jumps = 0            # Counts the number of jumps needed.
        current_max = 0      # The farthest point reachable with the current number of jumps.
        reachable_jump = 0   # The farthest point reachable with one more jump.

        # Loop through the list, except the last element.
        for i in range(len(nums) - 1):
            # Update the farthest reachable index from this position.
            reachable_jump = max(reachable_jump, i + nums[i])
            
            # When we reach the end of the range for the current jump,
            # it means we need to perform another jump.
            if i == current_max:
                jumps += 1
                current_max = reachable_jump
        print(jumps)
        return jumps

sol = Solution()

nums = [2,3,1,1,4]
sol.jump(nums)