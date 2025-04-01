using System;

public class Solution {
    public int LongestConsecutive(int[] nums) {
        if (nums.Length == 0) return 0;

        Array.Sort(nums);
        int count = 1;
        int max = 1;

        for (int i = 1; i < nums.Length; i++) {
            if (nums[i] == nums[i - 1]) {
                continue;
            }
            if (nums[i] == nums[i - 1] + 1) {
                count++;
            } else {
                count = 1; 
            }
            max = Math.Max(max, count);
        }
        Console.WriteLine(max);
        return max;
    }
}

class Program {
    static void Main() {
        int[] nums = {0, 3, 7, 2, 5, 8, 4, 6, 0, 1};
        Solution solution = new Solution();
        solution.LongestConsecutive(nums);
    }
}