const p = new Promise((resolve, reject) => { //执行器函数是同步的
    console.log('执行exeutor');

    setTimeout(() => {
        const time = Date.now()
        if (time % 2 == 0) {
            resolve('成功的数据，time=' + time)
        } else {
            reject('失败的数据，time' + time)
        }
    }, 1000)
})

p.then(
    value => { //接受得到成功的value数据 onresolve
        console.log('成功', value);

    },
    reason => {
        console.log('失败', reason);

    }
)