var promiseAll = function(functions) {
    return new Promise((resolve, reject)=>{
        let results = [];
        let completed = 0;
        let isRejected = false;

        functions.forEach((fn, index)=>{
            fn().then(res=>{
                if(isRejected) return;
                results[index] = res;
                completed++;

                if(completed === functions.length){
                    resolve(results)
                }
            }).catch(error=>{
                if(!isRejected){
                    isRejected = true;
                    reject(error)
                }
            });
        });
    });
};

const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(5), 200))
  ];
  
  const start = Date.now();
  promiseAll(functions)
    .then(resolvedValues => {
      const t = Date.now() - start;
      console.log({ t, resolved: resolvedValues });
    })
    .catch(err => {
      console.error('promiseAll rejected:', err);
    });