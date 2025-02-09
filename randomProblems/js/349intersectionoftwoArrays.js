// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

var intersection = function(nums1, nums2) {
    res = [];
    for(let i = 0; i < nums1.length; i++){
        let currentValue = nums1[i];
        console.log("currentValue", currentValue);
        if(nums2.includes(currentValue)){
            console.log("is in nums2");
            if(res.includes(currentValue)){
                console.log("already in the response");
                continue;
            }else{
                console.log("pushed");
                res.push(currentValue);
            }
        }
    }
    console.log("res:", res);
    return res;
};

let nums1 = [4,9,5];
let nums2 =  [9,4,9,8,4];
intersection(nums1, nums2);