package main

import (
	"fmt"
	"sort"
)

// merge takes a slice of intervals and returns the merged intervals.
func merge(intervals [][]int) [][]int {
	// If there are no intervals, return an empty slice.
	if len(intervals) == 0 {
		return [][]int{}
	}

	// Sort intervals based on their starting values.
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	// Initialize the merged intervals with the first interval.
	merged := [][]int{intervals[0]}

	// Iterate through the rest of the intervals.
	for i := 1; i < len(intervals); i++ {
		current := intervals[i]
		// Get the last interval in merged.
		lastMerged := merged[len(merged)-1]

		// If the current interval overlaps with the last merged interval,
		// update the end of the last interval to be the maximum of both ends.
		if lastMerged[1] >= current[0] {
			merged[len(merged)-1][1] = max(lastMerged[1], current[1])
		} else {
			// Otherwise, append the current interval.
			merged = append(merged, current)
		}
	}

	return merged
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	intervals := [][]int{{1, 3}, {2, 6}, {8, 10}, {15, 18}}
	result := merge(intervals)
	fmt.Println(result)
}
