Array.prototype.groupBy = function(fn) {
    const res = {};
    
    for(const obj of this){
        const key = fn(obj);
        if(!res.hasOwnProperty(key)){
            res[key] = [];
        }
        res[key].push(obj);
    }
    console.log(res);
    return res;
};