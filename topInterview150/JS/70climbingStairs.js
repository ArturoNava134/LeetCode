// Function to calculate the number of ways to climb 'n' stairs
const countWaysToClimbStairs = function(steps, memo = {1: 1, 2: 2}) {
   // Check if the result for the current number of steps is already calculated
   if (memo[steps] !== undefined) {
       return memo[steps];
   }

   // Recursive case: calculate the number of ways for the current number of steps
   memo[steps] = countWaysToClimbStairs(steps - 1, memo) + countWaysToClimbStairs(steps - 2, memo);

   // Log the current result for debugging
   console.log(`Ways to climb ${steps} steps: ${memo[steps]}`);

  
   return memo[steps];
};

// Example usage: calculate ways to climb 2 stairs
const numberOfSteps = 2;
const result = countWaysToClimbStairs(numberOfSteps);
console.log(`Total ways to climb ${numberOfSteps} steps: ${result}`);
