#include <iostream>
#include <cmath>
using namespace std;

class Solution {
public:
    bool isPowerOfTwo(int n) {
        if (n <= 0) {
            cout << n << " is not a power of two" << endl;
            return false;
        }
        // Keep dividing n by 2 as long as it's divisible by 2
        while (n % 2 == 0) {
            n /= 2;
        }

        if (n == 1) {
            cout << n << " is a power of two" << endl;
            return true;
        } else {
            cout << n << " is not a power of two" << endl;
            return false;
        }
    }
};

int main() {
    Solution solution;
    int n = 16; // Example input

    solution.isPowerOfTwo(n);

    return 0;
}
