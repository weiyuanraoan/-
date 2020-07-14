const p = new Promise((resolve, reject) => {
    //resolve(1)
    //reject(2)
    setTimeout(() => {
        resolve(1)
    }, 1000);
    // throw new Error('出错了')
}).then(
    value => {
        reason => {
            console.log('reason', reason);
        }
    }
)