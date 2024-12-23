import java.util.Arrays;

public class plusOne66 {

    public int[] plusOne(int[] digits) {
        // Start from the last digit (least significant digit)
        for (int i = digits.length - 1; i >= 0; i--) {
            // If the digit is less than 9, just add 1 and return the result.
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }
            // If the digit is 9, set it to 0 (carry over) and continue to the next digit.
            digits[i] = 0;
        }
        
        // If we're here, it means all the digits were 9 and we need to add a leading 1.
        int[] result = new int[digits.length + 1];
        result[0] = 1;  // Set the first digit as the carry-over (1)
        
        return result;
    }

    public static void main(String[] args) {
        plusOne66 solution = new plusOne66();
        
        // Example input
        int[] digits = {9, 8, 7, 6, 5, 4, 3, 2, 1, 0};  // Test case
        int[] result = solution.plusOne(digits);
        
        // Print the result array
        System.out.println(Arrays.toString(result));  // Expected output: [9, 8, 7, 6, 5, 4, 3, 2, 1, 1]
    }
}
