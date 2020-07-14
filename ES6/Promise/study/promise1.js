// 1) 三个状态： 等待态(默认) 成功态 失败态 一旦成功就不能失败，反过来也一样。
// 2) 每个promise中有个then方法
let Promise = require('./promise')
    // 3) 如果 new promise 的时候出现了报错 会变成失败态。(抛错也算异常)
let promise = new Promise((resolve, reject) => { //excutor 执行器
    // console.log(1);
    // throw new Error('失败')

    // resolve('hello');
    setTimeout(() => {
        resolve('成功')
    }, 1000);
});
promise.then(data => {
    console.log(data)
}, err => {
    console.log('err', err)
});

promise.then(data => {
    console.log(data)
}, err => {
    console.log('err', err)
});
promise.then(data => {
    console.log(data)
}, err => {
    console.log('err', err)
});
// reject(123)
// }).then(data => { //成功
//     console.log(data)
// }, err => { //失败
//     console.log('err', err)

// console.log(2)

/*
1.抽象表达
是js中进行异步编程的新的解决方案。
2.具体表达
1）从语法上说，promise是一个构造函数
2）从功能上来说，promise对象用来封装一个异步操作并且可以获取其结果。

Promise的状态改变
1.pending=>resolved
2.pending=>reject

说明：
两种状态，一个promise对象只能改变一次。
成功的结构数据为value，失败的结果数据为reason
*/