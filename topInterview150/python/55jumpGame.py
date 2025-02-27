class Solution:
    def canJump(self, nums):
        # Maximum steps available
        gas = 0  
        for n in nums:
            if gas < 0:
                return False  # Stuck, can't move forward
            elif n > gas:
                gas = n  # Update max reach
            
            gas -= 1  # Move forward
        
        return True

sol = Solution()

print(sol.canJump([2,3,1,1,4]))  






