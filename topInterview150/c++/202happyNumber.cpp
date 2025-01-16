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
