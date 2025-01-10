let nums = [-1, 1, 0, -3, 3];
//this is my solution that works but has timelimit exceeded.
function productExceptSelf(nums: number[]): number[] {
    let length = nums.length;
    let res: number[] = [];
    for (let i: number = 0; i < length; i++) {
        let currVal = nums[i];
        console.log("current value:", currVal);
        let numberToPush: number = 1; 
        let zeroCount = 0; 

        for (let j: number = 0; j < length; j++) {
            let nextValue: number = nums[j];
            if (nextValue === 0) zeroCount++;
            if (i === j) continue;

            if (nextValue !== 0) {
                numberToPush *= nextValue;
            }
            console.log("next value: ", nextValue);
        }

        
        if (zeroCount > 1) {
            numberToPush = 0;
        } else if (zeroCount === 1 && currVal !== 0) {
            numberToPush = 0;
        }

        console.log("number to push: ", numberToPush);
        res.push(numberToPush);
    }
    console.log("response:", res);
    return res;
};


// this is the solution that can be submitted
function productExceptSelfSubmited(nums: number[]): number[] {
    let n = nums.length;        
    const result = new Array(n);
  
    let prefixProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefixProduct;
        prefixProduct *= nums[i];
    }

    
    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }
    console.log(result);
    return result;    
};

productExceptSelfSubmited(nums);
