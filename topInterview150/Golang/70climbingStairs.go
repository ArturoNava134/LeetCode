// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:

// 1 <= n <= 45

package main

import "fmt"

// i found this solution.

func climbStairs(n int) int {
	// first we declare a slice, we use a slice instead of an array bc it doesn't need a size to be declared
	// so it can grow depending in our needs.
	dp := make([]int, n+1)
	//we declare the steps we can do 1 to climb 1 step, and 2 ways to climb two steps.
	dp[1] = 1
	dp[2] = 2
	// then we loop starting at the third position bc we already defined the positions 1 and 2.
	for i := 3; i <= n; i++ {
		// at the first test, for example in 3 there are 3 ways to climb 3 steps, in this case we take the ways of the
		// position 1 and 2 and they're 3.  if for example the value of n is 9 the values of i-1 and i-2 are gonna be
		// 13 and 21, it is 34 ways to do 9 steps.
		dp[i] = dp[i-1] + dp[i-2]

	}
	// so we return the value of the position n in the dp slice.
	return dp[n]
}

func mainClimbing() {
	n := 1
	result := climbStairs(n)

	fmt.Println("result: ", result)
}
