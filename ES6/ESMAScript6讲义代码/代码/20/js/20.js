
let p1 = new Promise((resolve, reject) => {
    //模拟异步1
    setTimeout(() => {
        //console.log('异步1');
        resolve('1.异步');
    }, 3500);
});

let p2 = new Promise((resolve, reject) => {
    //模拟异步2
    setTimeout(() => {
        //console.log('异步2');
        resolve('22.异步');
    }, 800);
});

let p3 = new Promise((resolve, reject) => {
    //模拟异步3
    setTimeout(() => {
        //console.log('异步3');
        resolve('3.异步');
    }, 1500);
});



// p1.then(value => {
//     console.log(value);
//     return p2;
// }).then(value => {
//     console.log(value);
//     return p3;
// }).then(value => {
//     console.log(value);
// });


// let p = Promise.all([p1, p2, p3]);
//
// p.then(value => {
//     console.log(value);
// });


// let p = Promise.race([p1, p2, p3]);
//
// p.then(value => {
//     console.log(value);
// });

// let ps = Promise.resolve('成功');
//
// //console.log(ps);
// ps.then(value => {
//     console.log(value);
// });


function getP() {
    if (true) {
        return new Promise(resolve => {
            resolve('成功');
        })
    } else {
        return Promise.resolve(0);
    }
}

getP().then(value => {
    console.log(value);
});















