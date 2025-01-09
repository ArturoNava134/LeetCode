// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
 

// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

#include <iostream>
#include <vector>
#include <algorithm>
#include <cstdio>

using namespace std;

class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        // first we get the length of nums
        int length = nums.size();
        //then we sort the nums using the sort function.
        sort(nums.begin(), nums.end());
        // we declare our response as the nums in the last position - k, so we get the kth value that we need.
        int res = nums[length-k];

        cout << res;
        return res;
    }
};

int main() {
    int arr[] = {3,2,3,1,2,4,5,5,6};
    vector<int> nums(arr, arr + sizeof(arr) / sizeof(arr[0]));
    int k = 4;
    Solution solution;
    solution.findKthLargest(nums, k);
    return 0;
}
