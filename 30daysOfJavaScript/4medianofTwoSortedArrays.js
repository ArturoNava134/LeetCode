var findMedianSortedArrays = function(nums1, nums2) {
    const merged = nums1.concat(nums2);
    merged.sort((a, b) => a - b);
    const n = merged.length;
    
    if (n % 2 === 0) {
      const mid1 = n / 2 - 1;
      const mid2 = n / 2;
      return (merged[mid1] + merged[mid2]) / 2;
    }
    
    return merged[Math.floor(n / 2)];
  };
  

let nums1 = [1,3];
let nums2 = [2];

findMedianSortedArrays(nums1, nums2);