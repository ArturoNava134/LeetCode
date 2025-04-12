function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if(key in cache){
            return cache[key];
        }
        cache[key] = fn(...args);
        return cache[key];
    }
}

const sum = (a, b) => a + b;

const memoizedSum = memoize(sum);

const actions = ["call", "call", "getCallCount", "call", "getCallCount"];
const values = [[2, 2], [2, 2], [], [1, 2], []];

const output = [];
let callCount = 0;

for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const value = values[i];
    if (action === "call") {
        const result = memoizedSum(...value);
        callCount++;
        output.push(result);
    } else if (action === "getCallCount") {
        output.push(callCount);
    }
}

console.log(output);