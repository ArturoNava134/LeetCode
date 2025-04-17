var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const alreadyExists = this.cache.get(key);
    if(alreadyExists){
        clearTimeout(alreadyExists.timeoutId);
    }
    const timeoutId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);
    this.cache.set(key, {
        value, timeoutId
    });
    return Boolean(alreadyExists)
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.cache.has(key))
        return this.cache.get(key).value;
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

const actions = ["TimeLimitedCache", "set", "get", "count", "get"];
const values = [[], [1, 42, 100], [1], [], [1]];
const timeDelays = [0, 0, 50, 50, 150];

const runTest = async () => {
    const output = [];
    let obj;

    for (let i = 0; i < actions.length; i++) {
        await new Promise(res => setTimeout(res, timeDelays[i]));

        const action = actions[i];
        const val = values[i];

        if (action === "TimeLimitedCache") {
            obj = new TimeLimitedCache();
            output.push(null);
        } else if (action === "set") {
            const res = obj.set(...val);
            output.push(res);
        } else if (action === "get") {
            const res = obj.get(...val);
            output.push(res);
        } else if (action === "count") {
            const res = obj.count();
            output.push(res);
        }
    }

    console.log(output);
};

runTest();