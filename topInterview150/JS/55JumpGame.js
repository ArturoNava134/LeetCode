// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

// wrong solution, it can be runned but has problems in the test for doing the submit.

var canJumpp = function(nums) {
    // we declare the initial position as 0 to be in the first element of the array
    let initialPosition = 0;
    let length = nums.length;
    if (length-1 == 0){
        console.log('true');
        return true;
    }
    console.log('length: ', length);
    // then we declare the last index as the length-1 to get its position as an array.
    let lastIndex = nums.length-1;
    console.log('Last Index: ', lastIndex)
    // start a loop to through the entire array 
    for (let i=0; i<nums.length; i++){
        // we save our allowed jumps using the value of the position we are currently in.
        let AllowedJumps = nums[i];

        console.log('Allowed Jumps = ', AllowedJumps)
        let endJumps = [];
            // we can build the seccond loop. using the number of jumps we are allowed to do.
            for (j = 1; j < AllowedJumps+1; j++){
                //we define each jump as the position + the value of the jump.
                let jump = initialPosition+j
                console.log('Jump =', jump)
                endJumps.push(nums[jump]);
                // we check if the jump's position is equal to the lastIndex, if it is, we return true.
                
                if (jump == lastIndex){
                    console.log("True")
                    return true;
                }
            }
        console.log('Saltos por posición: ', endJumps);

        if (endJumps.length === 0){
            console.log('false');
            return false;
        }

            //at the end if the loop continues that means that the jumps were not equal to the lastIdx 
            // then we add 1 to the initial position so we can check the next jump looking for a true response.
            console.log('Position: ', initialPosition);
            initialPosition++;
    }
    //if the complete array is reviewed means that we could't find the last position using the jumps so we return false.
    console.log("False");
    return false;
};


//submited solution.

var canJump = function(nums) {
    // we define our reacheable jump as the first position to start but it needs to be declared out of the loop
    // so we can save it's value. if the next number in the array + the index is lower than the number defined, we keep it.
    let reacheableJump = nums[0];
    //then we build a loop to go through the complete array.
    for (let i=0; i<nums.length;i++) {
        // we validate if the reacheable jump is less than the position we are in, if it is, we return false 
        // because if our index is more than the reacheable jump, that means we can reach it so we can't reach the last element too.
        if (reacheableJump < i){
            console.log('false');
            return false
        }
        // here we can compare if the index + the posible jump is higher than the actual reacheable jump, we update the reacheable
        // jump as this value.
        reacheableJump = Math.max(i+nums[i], reacheableJump);
    }
    // if it is possible to finish the loop without finding false values, we can return true, that means that the reacheableJump is
    // higher than the last index.
    console.log('true');
    return true;
};

nums = [3,0,8,2,0,0,1];

canJump(nums);
