// Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

 

// Example 1:

// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.

// Example 2:

// Input: n = 128

// Output: 1

// Explanation:

// The input binary string 10000000 has a total of one set bit.

// Example 3:

// Input: n = 2147483645

// Output: 30

// Explanation:

// The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

 

// Constraints:

// 1 <= n <= 231 - 1

var hammingWeight = function(n) {
    let numberInBits = (n).toString(2)
    console.log("Number in bits: ", numberInBits);
    let dividedBits = numberInBits.split('1')
    console.log("divided Bits: ", dividedBits);
    setsOfBits = dividedBits.length - 1;
    console.log("sets of bits: ", setsOfBits);
    let res =  n.toString(2).split('1').length - 1;
    console.log(res);
    return res;
};

let n = 11;

hammingWeight(n)