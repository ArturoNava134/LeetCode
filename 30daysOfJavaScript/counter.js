var createCounter = function(n) {
    return function() {
        return n++;
    };
};

let fn = createCounter(10); 
let res = fn();             
console.log(res);            
console.log(fn());          
console.log(fn());          
