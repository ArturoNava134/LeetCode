// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
 

// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
 

// Constraints:

// 0 <= nums.length <= 20
// -231 <= nums[i] <= 231 - 1
// All the values of nums are unique.
// nums is sorted in ascending order.


var summaryRanges = function(nums) {
    //we define our output and the first position in the array to get the first value of each number,
    let outputArray = [];
	let position = 0;
    // then we can loop the array starting at 1 to get the next value with i
	for (let i = 1; i <= nums.length; i++) {
        // we define our variables to do it easy to understand
        // currPosition is the position we are looping, the one we need to compare, with the next value.
        let currPosition = nums[i-1]
        // nextVal is the next value that we have in the array, 
        let nextVal = nums[i];
        console.log('currentPosition: ', currPosition);
        console.log('next value: ', nextVal);
        // we can validate if the current position + one is different to the next value, or the loop position is equal to the
        // length of the array(we are at the end of the array.)
		if (currPosition + 1 !== nextVal || i === nums.length) {
            // if the last validation is true, we check if the first number is different to the current position
			if (nums[position] !== currPosition){
                // if is different we push the first position and the current Position. 
                outputArray.push(nums[position] + '->' + currPosition);
            } 
			else{
                // if isn't different we just push the current position as a string to the array, that means the value doesn't have
                // a valid next value and is alone.
                outputArray.push(String(currPosition));
            } 
            // whatever is the last case, we update the position to the i we are looping.
            position = i;
		}		
	}
	console.log(outputArray);
    return outputArray;
};


let nums = [0,1,2,4,5,7];

summaryRanges(nums)