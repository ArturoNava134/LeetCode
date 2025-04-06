var map = function(arr, fn) {
    // functional programming solution
    // return arr.map(fn);
    const res = [];
    for (const i in arr){
        res.push(fn(arr[i], Number(i)));
    }
    console.log(res);
    return res;
};

const arr = [1, 2, 3];
function plusone(n) {
    return n + 1;
}
const result = map(arr, plusone);