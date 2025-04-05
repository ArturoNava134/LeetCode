var createCounter = function(init) {
    var firstValue = init;
    return{
        increment: function(){
            return ++init;
        },
        decrement: function(){
            return --init;
        },
        reset: function(){
            init = firstValue;
            return init;
        }
    }
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
