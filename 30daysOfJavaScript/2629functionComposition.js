var compose = function(functions) {
    return function(x) {
        for(const fn of functions.reverse()){
            x = fn(x);
        }
        return x;
    }
};


const functions = [x => x + 1, x => x * x, x => 2 * x];
const x = 4;

const composedFunction = compose(functions);
const result = composedFunction(x);

console.log(result); 