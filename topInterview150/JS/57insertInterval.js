// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.

 

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 

// Constraints:

// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 105

var insert = function (intervals, newInterval) {
    let [newStart, newEnd] = newInterval;
    let intervalsBefore = []; // Intervals that come before newInterval
    let intervalsAfter = []; // Intervals that come after newInterval
  
    for (const interval of intervals) {
      const [currentStart, currentEnd] = interval;
  
      // If the current interval is completely before newInterval
      if (currentEnd < newStart) {
        intervalsBefore.push(interval);
      }
      // If the current interval is completely after newInterval
      else if (currentStart > newEnd) {
        intervalsAfter.push(interval);
      }
      // There is an overlap, so merge the intervals
      else {
        newStart = Math.min(newStart, currentStart);
        newEnd = Math.max(newEnd, currentEnd);
      }
    }
    
    console.log([...intervalsBefore, [newStart, newEnd], ...intervalsAfter]);
    return [...intervalsBefore, [newStart, newEnd], ...intervalsAfter];
  };

  
let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];

let newInterval = [4,8];

insert(intervals, newInterval);