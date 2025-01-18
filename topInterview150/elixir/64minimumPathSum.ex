# Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

# Note: You can only move either down or right at any point in time.



# Example 1:


# Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
# Output: 7
# Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
# Example 2:

# Input: grid = [[1,2,3],[4,5,6]]
# Output: 12


# Constraints:

# m == grid.length
# n == grid[i].length
# 1 <= m, n <= 200
# 0 <= grid[i][j] <= 200

defmodule Solution do
    @spec min_path_sum(grid :: [[integer]]) :: integer
    def min_path_sum(grid) do
      # First, we print the input grid for debugging purposes.
      IO.inspect(grid, label: "Input Grid")

      # We initialize an empty list for row sums.
      allRowSums = []
      # We create an initial list for column sums with all values set to 0.
      allColumnSums = Enum.map(1..length(hd(grid)), fn _ -> 0 end)

      # We iterate through each row of the grid using Enum.reduce.
      {allRowSums, allColumnSums} =
        Enum.reduce(grid, {allRowSums, allColumnSums}, fn currentRow, {rowAccumulator, columnAccumulator} ->
          # For each row, we calculate the row sum.
          currentRowSum = Enum.sum(currentRow)
          IO.inspect(currentRow, label: "Row")
          IO.puts("Row sum: #{currentRowSum}")

          # Update the column sums by adding the current row's values to their respective column sums.
          updatedColumnSums =
            Enum.zip(currentRow, columnAccumulator)
            |> Enum.map(fn {value, columnSum} -> value + columnSum end)

          # Append the current row sum to the row accumulator.
          {rowAccumulator ++ [currentRowSum], updatedColumnSums}
        end)

      # Print the final row sums and column sums for debugging purposes.
      IO.inspect(allRowSums, label: "Row sums")
      IO.inspect(allColumnSums, label: "Column sums")

      # We calculate the minimum path sum using the helper function find_min_sum.
      smallestPathSum = find_min_sum(grid)
      IO.puts("Minimum Path Sum: #{smallestPathSum}")

      # Return the smallest path sum as the final result.
      smallestPathSum
    end

    # This is a private function to calculate the minimum path sum.
    defp find_min_sum(grid) do
      # We initialize the minimum sum as infinity and iterate through the grid.
      Enum.reduce(grid |> Enum.with_index(), :infinity, fn {currentRow, _rowIndex}, smallestSumSoFar ->
        Enum.reduce(currentRow |> Enum.with_index(), smallestSumSoFar, fn {cellValue, columnIndex}, smallestSum ->
          # Calculate the column sum for the current column.
          columnSum =
            Enum.reduce(grid, 0, fn row, columnAccumulator ->
              columnAccumulator + Enum.at(row, columnIndex)
            end)

          # Adjust the sum to exclude the double-counted cell.
          adjustedSum = Enum.sum(currentRow) + columnSum - cellValue
          # Update the smallest sum if the current adjusted sum is smaller.
          min(smallestSum, adjustedSum)
        end)
      end)
    end
  end


  grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
  IO.inspect(Solution.min_path_sum(grid))

  # this is the code that work but even this one can't be submited.

  defmodule Solution do
    @spec min_path_sum(grid :: [[integer]]) :: integer
    def min_path_sum(grid) do
      # First, we define an initial row that serves as a reference for the traversal.
      # This row starts with 0 and has very large values for the rest of the elements.
      initial_row = [0 | List.duplicate(20000, 199)]

      # We then call the `process_rows` function to compute the minimum path sum.
      process_rows(grid, initial_row)
    end

    defp process_rows([], last_row) do
      # If there are no more rows left to process, the last element of the previous row
      # contains the final minimum path sum, so we return it.
      Enum.at(last_row, -1)
    end

    defp process_rows([[first_cell | rest_of_row] | remaining_rows], [head_of_prev_row | tail_of_prev_row]) do
      # We calculate the current row's cumulative sums, starting with the sum of the
      # first cell in the current row and the first value of the previous row.
      new_row = calculate_row(rest_of_row, tail_of_prev_row, [first_cell + head_of_prev_row])

      # Recursively process the remaining rows, passing the current row as the previous row.
      process_rows(remaining_rows, new_row)
    end

    defp calculate_row([], _previous_row, accumulated_sums) do
      # If there are no more cells left in the current row, we reverse the accumulated sums
      # and return them, as they were built in reverse order during recursion.
      Enum.reverse(accumulated_sums)
    end

    defp calculate_row([current_value | remaining_cells], [top_value | remaining_prev_row], [last_accumulated | _rest] = accumulated_sums) do
      # For each cell, we compute the cumulative value by adding the current cell's value
      # to the smaller of the values from the previous row (top) and the accumulated left value.
      new_value = current_value + min(last_accumulated, top_value)

      # We continue processing the remaining cells, adding the newly computed value to the
      # list of accumulated sums.
      calculate_row(remaining_cells, remaining_prev_row, [new_value | accumulated_sums])
    end
  end
