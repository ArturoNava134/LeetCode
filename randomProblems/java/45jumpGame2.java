class Solution {
    public int jump(int[] nums) {
        int jumps = 0, curpos = 0, farthestindex=0;
        for(int i=0;i<nums.length-1;i++){
            farthestindex = Math.max(farthestindex, i+nums[i]);
            if(i==curpos){
                jumps++;
                curpos=farthestindex;
            }
        }
        return jumps;
    }
}