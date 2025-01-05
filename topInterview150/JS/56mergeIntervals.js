// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

var merge = function(intervals) {
    // If there are no intervals, return an empty array.
    if (intervals.length === 0) return [];

    // First, we sort the intervals based on their starting values to ensure proper merging.
    intervals.sort((a, b) => a[0] - b[0]);

    // We initialize a stack to keep track of merged intervals.
    let mergedIntervals = [];

    // Push the first interval into the merged list as the starting point.
    mergedIntervals.push(intervals[0]);

    // Iterate through the rest of the intervals to merge overlapping ones.
    for (let i = 1; i < intervals.length; i++) {
        // Get the last merged interval and the current interval to compare.
        let lastMerged = mergedIntervals.pop();
        let currentInterval = intervals[i];

        // Check if the current interval overlaps with the last merged interval.
        if (lastMerged[1] >= currentInterval[0]) {
            // If they overlap, merge them by updating the end of the interval
            // to the maximum end value between the two intervals.
            mergedIntervals.push([lastMerged[0], Math.max(lastMerged[1], currentInterval[1])]);
        } else {
            // If they do not overlap, push both intervals back to the merged list.
            mergedIntervals.push(lastMerged, currentInterval);
        }
    }

    console.log(mergedIntervals);
    return mergedIntervals;


};


intervals = [[1,3],[2,6],[8,10],[15,18]] 

merge(intervals);

