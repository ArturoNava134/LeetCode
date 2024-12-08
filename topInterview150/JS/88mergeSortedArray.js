// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109


//My first solution before reading the instructions huh..

//This solution uses a different variable to solve the problem but doesn't follow the requirements.

// const nums1 = [1,2,3,0,0,0];
// const nums2 = [2,5,6];
// const m = 3;
// const n = 3;

// var merge = function(nums1, m, nums2, n) {
//     outptArr = [];
//     for(i = 0; i < m; i++){
//         ValReaded = nums1[i];
//         outptArr.push(ValReaded);
//     }
//     for(j = 0; j < n; j++){
//         secondValReaded = nums2[j];
//         outptArr.push(secondValReaded);
//     }
//     outptArr.sort((a, b) => a - b);
//     console.log(outptArr)
// };

// merge(nums1, m, nums2, n);


//Second solution Accepted by leetCode

const nums1 = [1,2,3,0,0,0];
const nums2 = [2,5,6];
const m = 3;
const n = 3;

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m);

    for(let i = 0; i<n; i++ ){
        currentVal = nums2[i];
        nums1.push(currentVal);
    }
    nums1.sort((a, b) => a - b);
    console.log(nums1)
};

merge(nums1, m, nums2, n);