# Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

# You must implement a solution with a linear runtime complexity and use only constant extra space.

 

# Example 1:

# Input: nums = [2,2,1]

# Output: 1

# Example 2:

# Input: nums = [4,1,2,1,2]

# Output: 4

# Example 3:

# Input: nums = [1]

# Output: 1

 

# Constraints:

# 1 <= nums.length <= 3 * 104
# -3 * 104 <= nums[i] <= 3 * 104
# Each element in the array appears twice except for one element which appears only once.


#my solution consist in declaring a hashmap to map each value in the array and the times it appears.
class Solution(object):
    def singleNumber(nums):
        #here we declare the empty hashmap.
        hashmap = {}
        #then we loop through the array and map te value in the key using the position and the times it appears 
        for i in nums:
            #we use an if bc using it we can know if the key number is already mapped, if it is we just add 1 to it, if isn't we set it as 1
            if i in hashmap:
                hashmap[i] += 1
            else:
                hashmap[i] = 1
        # then we loop through the key and count of the hashmap
        for key, count in hashmap.items():
            print("key:", key)
            print("count:", count)
            # and if a value has the count 1 we return the key of that value.
            if count == 1:
                print("result:", key)
                return key

        print(hashmap)

    nums = [4,1,2,1,2]
    singleNumber(nums)

