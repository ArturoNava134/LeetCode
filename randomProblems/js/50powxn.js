// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// Either x is not zero or n > 0.
// -104 <= xn <= 104

//my solution (time limit excedeed.)

var myPowH = function (x, n) {
    if (x === 0 && n <= 0) {
        return false; // Edge case: 0 raised to a non-positive power is undefined
    }

    let res = 1.0;

    if (n > 0) {
        for (let i = 0; i < n; i++) {
            res = res * x;
        }
    } else if (n < 0) {
        for (let i = 0; i < -n; i++) {
            res = res * x;
        }
        res = 1 / res; // Invert the result for negative powers
    }

    console.log("final response: ", res);
    return res;
};


//solution that works. 

var myPow = function(x, n) {
    if (n===0) return 1;
    
    let pow = Math.abs(n);
    
	let result = pow%2===0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2) * x;
    return n < 0 ? 1/result : result;
};

let x = 2.00000;
let n = 10;
let res = myPow(x, n);
console.log(res);
