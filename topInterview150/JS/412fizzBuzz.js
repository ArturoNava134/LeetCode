var fizzBuzz = function(n) {
    // Create an empty array to store the results
    let result = [];
    
    // Iterate from 1 to n
    for (let i = 1; i <= n; i++) {
        // If the number is divisible by 3 and 5 add "FizzBuzz"
        // we use 15 bc to make it divisible by 3 and 5 it has to be divisible by 15 too
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } 
        // If the number is divisible only by 5, add "Buzz"
        else if (i % 5 === 0) {
            result.push("Buzz");
        } 
        // If the number is divisible only by 3, add "Fizz"
        else if (i % 3 === 0) {
            result.push("Fizz");
        } 
        // If not divisible by any, add the number as a string
        else {
            result.push(i.toString());
        }
    }
    
    console.log(result);
    return result;
};

let n = 5;
fizzBuzz(n);
