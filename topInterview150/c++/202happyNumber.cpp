// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1

#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>

using namespace std;

class Solution {
public:
    int getSquare(int k) {
        int sum = 0;
        string numberStr = to_string(k);
        vector<int> digits;

       
        for (char ch : numberStr) {
            digits.push_back(ch - '0'); 
        }

       
        for (int digit : digits) {
            sum += digit * digit;
        }

        return sum;
    }

    bool isHappy(int n) {
        unordered_set<int> seen;
        int result = n;

        do {
            if (seen.find(result) != seen.end()) {
                cout << "Cycle detected! Number is not happy." << endl;
                return false;
            }
            seen.insert(result); 

            cout << "Current number: " << result << endl; 
            result = getSquare(result); 
        } while (result != 1);

        return true;
    }
};

int main() {
    int n = 19;

    Solution solution;
    bool output = solution.isHappy(n);
    cout << output;
    return 0;
}
