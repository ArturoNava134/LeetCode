class Solution(object):
    def sortColors(self, nums):
        i = -1
        for j in range(len(nums)):
            if nums[j]<2:
                i+=1
                nums[i], nums[j] = nums[j], nums[i]
        k = -1
        for j in range(i+1):
            if not nums[j]:
                k+=1
                nums[k], nums[j] = nums[j], nums[k]

nums = [2, 0, 1]
Solution().sortColors(nums)
print(nums)