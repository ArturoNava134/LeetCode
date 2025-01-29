// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1

#include <iostream>
#include <string>
#include <algorithm>
#include <cmath>

using namespace std;

class Solution {
public:
    int reverse(int x) {
        if (x <= pow(-2, 31) || x >= pow(2, 31) - 1) {
            return 0;
        }

        string str = to_string(x);
        
        if (str[0] == '-') {
            std::reverse(str.begin() + 1, str.end());  // Reverse only the numeric part
        } else {
            std::reverse(str.begin(), str.end());
        }

        try {
            int reversedInt = stoi(str);
            return reversedInt;
        } catch (out_of_range&) {
            return 0;
        }
    }
};

int main() {
    int x = -123;

    Solution solution;
    int output = solution.reverse(x);
    cout << output << endl;

    return 0;
}
