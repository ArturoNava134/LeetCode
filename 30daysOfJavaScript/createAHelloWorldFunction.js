var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};

let args = [{}, null, 42];
let fn = createHelloWorld();
let res = fn(...args);
console.log(res);  