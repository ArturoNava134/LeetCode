package main

import "fmt"

func isValidSudoku(board [][]byte) bool {
	// Declare 3 sets of booleans to track seen numbers in each row, column, and 3x3 square.
	var rowSeen, columnSeen, squareSeen [9][9]bool

	// Loop through each row (rowIdx) and each column (colIdx) in the board.
	for rowIdx, row := range board {
		for colIdx, value := range row {
			// If the current cell has a value.
			if value != '.' {
				fmt.Println("current row:", rowIdx)
				fmt.Println("current column:", colIdx)
				// Convert the character ('1' -> 0, '2' -> 1) by subtracting 49 (ASCII value of '1').
				num := int(value) - 49
				fmt.Println("num:", num)

				// Check if the number has already been seen in the current row, column, or 3x3 sub-grid.
				if rowSeen[rowIdx][num] || columnSeen[colIdx][num] || squareSeen[rowIdx/3*3+colIdx/3][num] {
					// If the number already exists, return false, as this is an invalid Sudoku.
					return false
				}

				// Mark the current number as seen in the corresponding row, column, and 3x3 square.
				rowSeen[rowIdx][num], columnSeen[colIdx][num], squareSeen[rowIdx/3*3+colIdx/3][num] = true, true, true
			}
		}
	}
	// If we successfully finish looping through the board without encountering duplicates, return true.
	return true
}

func main() {

	board := [][]byte{
		[]byte("53..7...."),
		[]byte("6..195..."),
		[]byte(".98....6."),
		[]byte("8...6...3"),
		[]byte("4..8.3..1"),
		[]byte("7...2...6"),
		[]byte(".6....28."),
		[]byte("...419..5"),
		[]byte("....8..79"),
	}

	result := isValidSudoku(board)
	fmt.Println(result)
}
