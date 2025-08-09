//optimal solution

/*
using one single loop and hashmaps to store the needed number to reach the target (target minus current number) as a key
and the index of the current looping number as a value so we check the keys(needed) in the next values of the array
for example {5, 2, 4} target: 6
hash: key->value
first position 5, we store 1(target-currentNumber) as the key and 0(position) as the value.
second position 2, we check if 2 is in the current map(isnt), so we store 4 as the key and 1 as the value.
third position 4, we notice that we have 4 in the keys of the hashmap so we return the value(position) of that key
and the current position
 */
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> complements = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            Integer complementIndex = complements.get(nums[i]);
            if(complementIndex != null){
                return new int[]{i, complementIndex};
            }
            complements.put(target-nums[i], i);
        }
        return nums;
    }
}