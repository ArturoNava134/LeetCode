# Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

# Example 1:

# Input: nums = [1,2,3,4,5,6,7], k = 3
# Output: [5,6,7,1,2,3,4]
# Explanation:
# rotate 1 steps to the right: [7,1,2,3,4,5,6]
# rotate 2 steps to the right: [6,7,1,2,3,4,5]
# rotate 3 steps to the right: [5,6,7,1,2,3,4]
# Example 2:

# Input: nums = [-1,-100,3,99], k = 2
# Output: [3,99,-1,-100]
# Explanation: 
# rotate 1 steps to the right: [99,-1,-100,3]
# rotate 2 steps to the right: [3,99,-1,-100]
 

# Constraints:

# 1 <= nums.length <= 105
# -231 <= nums[i] <= 231 - 1
# 0 <= k <= 105


# My solution, time Limit Exceeded but it works.

class Solution(object):
    def rotate(nums, k):

        length = len(nums)
        if (length < k):
            k = k-length*(k//length)
            for i in range(length-k):
                nums.append(nums[i-dif])
                nums.pop(i-dif)
                dif += 1
        else:
            # we assign the loop at the end of the array but we substract k so we position the loop in the last k numbers that we're
            # gonna move.
            i = length-k
            # newIndex variable is gonna be used for move the values to that position, we start at the first one
            newIndex = 0
            # with a while loop we can stop the loop when it reach the last positon of the array starting at the i value.
            while (i < length):
                # using pop we delete the value of the i position but we can save that value in a variable to use it later.
                deletedNumber = nums.pop(i)
                # using insert we can insert the value defined in the deletedNumber variable just specifying the position to insert
                # in the first case is 0 and the number to insert. (deleted number)
                nums.insert(newIndex, deletedNumber)
                #now we increase our values to move the while loop and the newIndex to add it in the position required.
                newIndex += 1
                i += 1
            
        # print(nums)

    

    nums = [1, 2]

    k = 3

    rotate(nums, k)



# solution accepted by leetcode: 

class Solution2(object):
    def rotate(nums, k):
          # this set the k value to the array size, if k is for example: 10 is gonna be divided by the length
          # and it ends at the position that we need.
        k = k % len(nums)
          # nums[-k:] takes the last k elements of the array and nums[:-k] takes the rest of elements excluding the last k
          # nums[:] changes the original variable instead creating a new one
          # this function changes the positions of the two definded values resulting in the response that we need.
        nums[:] = nums[-k:] + nums[:-k]