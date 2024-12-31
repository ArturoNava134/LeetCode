// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].


class RomanToInterger {
    // first we can build a switch to assign a value for each character in the roman numeral.
    public int values(char n){
        switch (n) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }

    public int romanToInt(String s) {
        // then we can start our variables sum and position, sum is gonna handle the operations
        // and position is used to get the first position bc the loop will start in 1
        int sum = 0;
        int position = values(s.charAt(0));
       
        // we also save the length to stop the loop.
        int length = s.length();
        for (int i = 1; i<length; i++){
            // we declare the next number as the value in the position i that means that if we start in 0, it is gonna be in 1
            // so we have the first value and the seccond one.
            int nextNumber = values(s.charAt(i));
            // we have to check if the position is less than the next number.
            if (position < nextNumber){
                //if it is, we save the sum as the substract of the position.
                //if we already have a value, we just substract it, if we don't the value is negative
                //for example, IV returns true in the first position so we save sum as -1 in the first case and in the seccond case
                //that doesn't enter in the loop bc it don't have a next value, it go to the line 50 and sum the remaining number
                sum -= position;
            }else{
                // if the position is greater than the next number, we just add it to sum and continue.
                sum += position;
            }
            //after the validation we save the position as the nextNumber so we can move trough the loop the both variables.
            position = nextNumber;
        }
        // we use it in the last number, we just add the last one to the sum and save it in the response.
        int res = sum += position;
        return res;
    }

    public static void main(String[] args){
        RomanToInterger solution = new RomanToInterger();

        String number = "IV";

        int result = solution.romanToInt(number);

        System.out.println(result);
    }
}