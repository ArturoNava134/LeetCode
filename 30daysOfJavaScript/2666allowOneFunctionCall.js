var once = function(fn) {
    let called = false;
    return function(...args){
        if (called){
            return undefined;
        }
        called = true;
        return fn(...args);
    }
};

const fn = (a, b, c) => (a + b + c);
const onceFn = once(fn);

console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
