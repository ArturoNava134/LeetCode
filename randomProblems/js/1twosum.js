function twoSum(nums, target) {

  const complements = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complementIndex = complements.get(nums[i]);
    if (complementIndex !== undefined) {
     
      return [i, complementIndex];
    }
    complements.set(target - nums[i], i);
  }
  return []; 
}