// import java.util.ArrayList;
import java.util.Arrays;
// my first approach was about saving the numbers that i was looping into a arrayList
// and if the number already exist we return true, and if it doesn't we just push it. 
// but this solution exceeded the time limit of compiling.

class Solution {
    // public boolean containsDuplicate(int[] nums) {
    //     ArrayList<Integer> temp = new ArrayList<>();

    //     for (int i = 0; i <= nums.length - 1; i++) {
    //         int currVal = nums[i];
    //         if (temp.contains(currVal)) {
    //             return true;
    //         }
    //         temp.add(currVal);
    //     }

    //     return false;
    // }

    //so this is a good approach to the solution
    public boolean containsDuplicate(int[] nums) {
        // first we sort the array.
        Arrays.sort(nums);
        // and loop through it
        for(int i = 0; i < nums.length - 1; i++){
            // for each loop we check if the current value is equal to the next one
            // bc we sorted it, so it should be formed this way in case that there is a number repeated
            // smtn like this 123345
            //so when we loop in the position 2 the position 2+1 is gonna be the same, and we return true
            if(nums[i] == nums[i + 1]){
                return true;
            }
        }   
        // if we complete the loop that means that there are no numbers repeated, so we return false
        return false;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {1, 3, 5, 6, 3};
        boolean result = solution.containsDuplicate(nums);
        System.out.println(result);
    }
}




