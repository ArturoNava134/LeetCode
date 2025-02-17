var thirdMax = function(nums) {
    let depuredArray = [...new Set(nums)];
    console.log("depuredArray: ", depuredArray);
    let sortedArray = depuredArray.sort((a, b) => a - b); 
    console.log("sorted array: ", sortedArray)
    let saLength = sortedArray.length;
    
    if (saLength < 3){
        let max = Math.max(...sortedArray);
        console.log("max: ", max);
        return max;
    }else{
        let max = sortedArray[saLength - 3];
        console.log("max:", max);
        return max;
    }
};

let nums = [2,2,3,1];

thirdMax(nums);