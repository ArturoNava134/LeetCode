//this is my solution that can be run but not submited.

package main

import (
	"fmt"
	"sort"
	"strings"
)

func maxScore(s string) int {
	fmt.Println("String", s)
	left := 0
	var arr []int
	var possibleAnswers []int
	sum := 0
	length := len(s)

	if !strings.Contains(s, "0") {
		sum = length - 1
		return sum
	}
	if !strings.Contains(s, "1") {
		sum = length - 1
		return sum
	}

	for i := 0; i < length-1; i++ {
		currVal := string(s[i])
		fmt.Println(string(s[i]))
		if currVal == "0" {
			left += 1
			position := i + 1
			fmt.Println("position in the array:", position)
			subStr := s[position:]
			reamingOnes := strings.Count(subStr, "1")
			fmt.Println("reaming ones:", reamingOnes)
			sum := left + reamingOnes
			possibleAnswers = append(possibleAnswers, sum)
			fmt.Println("possible sum:", sum)
			arr = append(arr, reamingOnes)
		}
	}
	fmt.Println("posibleReamings: ", arr)
	fmt.Println("posible Answers: ", possibleAnswers)
	fmt.Println("left count: ", left)
	sort.Ints(possibleAnswers)
	maxValue := possibleAnswers[len(possibleAnswers)-1]

	fmt.Println("The max number is:", maxValue)
	sum = maxValue
	return sum
}

func main() {

	input := "11100"

	result := maxScoreAccepted(input)

	fmt.Println(result)
}

// solution accepted.

func maxScoreAccepted(s string) int {
	ones, zeroes, score := 0, 0, 0

	// Count total ones in the string
	for _, char := range s {
		if char == '1' {
			ones++
		}
	}

	// Traverse the string
	for i := 0; i < len(s)-1; i++ {
		if s[i] == '0' {
			zeroes++
		} else {
			ones--
		}
		score = max(score, zeroes+ones)
	}

	return score
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
