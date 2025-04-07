var filter = function(arr, fn) {
    const res = [];

    for (const i in arr) {
        if (fn(arr[i], Number(i))) {
            res.push(arr[i]);
        }
    }
    console.log(res);
    return res;
};

const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n) { return n > 10; };

filter(arr, fn);
