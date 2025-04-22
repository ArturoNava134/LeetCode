var isEmpty = function(obj) {
  for(const x in obj){
    console.log(false);
    return false;
  }  
  console.log(true);
  return true;
};

let obj = {"x": 5, "y": 42};
isEmpty(obj);