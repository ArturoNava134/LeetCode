class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        m = len(obstacleGrid)
        n = len(obstacleGrid[0])

        dp = [0] * n
        dp[0] = 1 if obstacleGrid[0][0] != 1 else 0
        
        for row in range(m):
            next_row = [0] * n
            for col in range(n):
                if obstacleGrid[row][col] != 1:
                    next_row[col] += dp[col]
                    if col > 0:
                        next_row[col] += next_row[col-1]
            dp = next_row
        
        return dp[n-1]
        