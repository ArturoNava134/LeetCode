// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104


package randomProblems.java;

public class SearchInsertPosition {
    public int searchInsert(int[] nums, int target) {
        System.out.println("test");
        for (int i = 0; i < nums.length - 1; i++) {
            int currentPosition = nums[i];
            int nextPosition = nums[i + 1];
            System.out.println("curr: " + currentPosition);
            System.out.println("next: " + nextPosition);

            if (currentPosition == target) {
                System.out.println("position: " + i);
                return i;
            }
            if (currentPosition < target && nextPosition > target) {
                System.out.println("position: " + (i + 1));
                return i + 1;
            }
        }

        if (nums[0] >= target) {
            System.out.println("position: 0");
            return 0;
        }

        if (nums[nums.length - 1] < target) {
            System.out.println("position: " + nums.length);
            return nums.length;
        }

        if (nums[nums.length - 1] == target) {
            System.out.println("position: " + (nums.length - 1));
            return nums.length - 1;
        }

        return nums.length;
    }

    public static void main(String[] args) {
        SearchInsertPosition solution = new SearchInsertPosition();
        int[] nums = {1, 3, 5, 6};
        int target = 7;

        int result = solution.searchInsert(nums, target);

        System.out.println(result);
    }
}
