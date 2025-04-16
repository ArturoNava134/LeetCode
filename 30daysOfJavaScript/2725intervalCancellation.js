var cancellable = function(fn, args, t) {
        fn(...args);
    const intervalTimer = setInterval(() => {
        fn(...args)
    },t);
    const cancelfn = () => clearInterval(intervalTimer);
    return cancelfn; 
};


const fn = (x) => x * 2;
const args = [4];
const t = 35;
const cancelTimeMs = 190;

const cancelFn = cancellable(fn, args, t);
setTimeout(cancelFn, cancelTimeMs);
