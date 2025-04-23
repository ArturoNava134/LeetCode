var chunk = function(arr, size) {
    let currSubArr = [];
    let res = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        currPosition = arr[i];
        console.log(currPosition);
        console.log("count:", count);
        if (count <= size){
            currSubArr.push(currPosition);
            console.log("number pushed: ", currPosition);
            count++;
            if(count == size){
                res.push(currSubArr);
                count = 0;
                currSubArr = [];
            }
        }
    }
    if(currSubArr.length){
        res.push(currSubArr);
    }
    console.log(res);
    return res;
};

let arr = [];
let size = 1;

chunk(arr, size);