function twoSum(nums, target) {

  const complements = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complementIndex = complements.get(nums[i]);
    console.log(complementIndex);
    if (complementIndex !== undefined) {
      console.log(i, complementIndex);
      return [i, complementIndex];
    }
    complements.set(target - nums[i], i);
  }
  return []; 
}

// function twoSum(nums, target){
//   for (let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//       console.log("i: ", i);
//       console.log("j: ", j);
//       if(nums[i] + nums[j] === target){
//         return [i, j];
//       }
//     }
//   }
// }

let n1=[2,7,11,15], n2=[3,2,4];
let target1 = 9, target2=6;

twoSum(n2,target2);

