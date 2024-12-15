
var jump = function(nums) {
    // this variable is gonna be needed to count the jumps that we have to do.
    let jumps = 0;
    // this one is gonna be used for know if the position we are looping, is the max we can reach with the jump.
    let currentMax = 0;
    // this one will help us to know what's the farthest jump we can do.
    let reacheableJump = 0;

    for (let i = 0; i < nums.length - 1; ++i) {
        // we assign reacheablejump as the max between the current reacheableJump defined and the position + the jump we can do.
        reacheableJump = Math.max(reacheableJump, i + nums[i]);
        // if the position is equal to the maxJump we can do with the first jump, we add 1 to the jump and assign our
        // current Max as the new reacheable jump.
        if (i === currentMax) {
            jumps++;
            currentMax = reacheableJump;
        }
    }
    
    console.log(jumps);
    return jumps;
};

nums = [1];

jump(nums);