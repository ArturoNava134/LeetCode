var reduce = function(nums, fn, init) {
    let res = init;
    nums.forEach((n) => {
        res = fn(res, n);
    });
    return res;
};


let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) {
    return accum + curr;
};
let init = 0;

let output = reduce(nums, fn, init);
console.log(output); 
