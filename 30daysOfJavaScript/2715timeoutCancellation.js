var cancellable = function(fn, args, t) {
    const timer = setTimeout(()=>fn(...args), t)
    return () => clearTimeout(timer);
};

const fn = (x) => {
    const result = x * 5;
    console.log({ time: 20, returned: result }); 
    return result;
};

const args = [2];
const t = 20;


const cancel = cancellable(fn, args, t);


