var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            const id = setTimeout(() => reject("Time Limit Exceeded"), t);
            fn(...args)
                .then((res) => resolve(res))
                .catch((err) => reject(err))
                .finally(() => clearTimeout(id));
        })
    }
};

const fn = async (n) => {
    await new Promise(res => setTimeout(res, 100)); // Simulates a delay of 100ms
    return n * n;
};

const inputs = [5];
const t = 50;

const limited = timeLimit(fn, t);

const runTest = async () => {
    const start = performance.now();
    let result;
    try {
        const res = await limited(...inputs);
        result = { resolved: res, time: Math.floor(performance.now() - start) };
    } catch (err) {
        result = { rejected: err, time: Math.floor(performance.now() - start) };
    }
    console.log(result);
};

runTest();