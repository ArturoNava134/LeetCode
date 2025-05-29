class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        rows, cols = len(word1) + 1, len(word2) + 1
        cache = [[float("inf")] * cols for _ in range(rows)]

        # Base case: word2 is empty
        for i in range(rows):
            cache[i][cols - 1] = rows - 1 - i
        
        # Base case: word1 is empty
        for j in range(cols):
            cache[rows - 1][j] = cols - 1 - j

        for i in range(len(word1) - 1, -1, -1):
            for j in range(len(word2) - 1, -1, -1):
                if word1[i] == word2[j]:
                    cache[i][j] = cache[i + 1][j + 1]
                else:
                    cache[i][j] = 1 + min(cache[i + 1][j],      # Deletion
                                          cache[i][j + 1],      # Insertion
                                          cache[i + 1][j + 1])  # Replacement

        return cache[0][0]