// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

nums = [1,1,1,2,2,3] //array de prueba


var removeDuplicates = function(nums) {

    // we declare k as 2 to start in the third value.
    let k = 2;
    // loop trought the array nums starting from the third value
    for(let i = 2; i < nums.length; i++){
        let currentPosition = nums[i];
        // if the current position is different of k -2 position or is diferent of k - 1 position 
        // then the third position will be placed as the current value and we move k 1 position but if both are equal to the current position
        // the k value will stay at its position for example when we are at the fourth position the k value is 4 so the if will check 
        // the positions 3 and 2, in this case they're equal to the current position (4) so the if doesn't do anything, 
        // the k value will still be 4 but the loop continue so the currentPosition will change to 5.
        if(currentPosition != nums[k - 2] || currentPosition != nums[k - 1]){
            nums[k] = currentPosition;
            k++;
        }
    }
    return k;
};

removeDuplicates(nums)