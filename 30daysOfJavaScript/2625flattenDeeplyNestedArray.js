var flat = function (arr, n) {
  const res = [];
  
  function helper(arr, depth){
    for(const val of arr){
        if(typeof val === 'object' && depth < n){
            helper(val, depth + 1)
        }else{
            res.push(val);
        }
    }
    return res;
  }
  return helper(arr, 0);
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n = 0;

const result = flat(arr, n);
console.log(result);