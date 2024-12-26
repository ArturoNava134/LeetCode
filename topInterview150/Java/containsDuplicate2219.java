import java.util.HashSet;
import java.util.Set;

class containsDuplicate2219 {
    public boolean containsDuplicate(int[] nums, int k) {
        // Create a set to store unique elements
        Set<Integer> set = new HashSet<Integer>();

        // Loop through the array
        for(int i = 0; i < nums.length; i++) {
            // Remove elements that are outside the range of the last `k` elements
            if(i > k) set.remove(nums[i - k - 1]);

            // Check if the element already exists in the set (duplicate found)
            if(!set.add(nums[i])) return true;
        }

        // Return false if no duplicates are found
        return false;
    }

    public static void main(String[] args) {
        // Create an instance of the class
        containsDuplicate2219 solution = new containsDuplicate2219();
        
        // Example input
        int[] nums = {1, 2, 3, 1};
        int k = 3;
        
        // Check for duplicates and print the result
        System.out.println(solution.containsDuplicate(nums, k));  // Output: true
    }

}