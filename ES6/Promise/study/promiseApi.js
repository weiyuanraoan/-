/**
 * 什么是Api？
 * 前后台交互的接口
 * 语法(函数的方法)
 */
/*
1.promise的构造函数：Promise(excutor){}
  excutor函数:同步执行(resolve,reject) =>{}
  resolve函数：内部定义成功时我们调用的函数 value=>{}
  reject函数：内部定义失败时我们调用的函数 reason=>{}
  说明：excutor 会让在Promise内部立即同步回调，异步操作还是在执行器中执行

2.Promise.prototype.then方法：(onResolve,onReject)=>{}
  onResolve函数：成功的回调函数 (value) =>{}
  onReject函数： 失败的回调函数(reason)=>{}
  说明：指定用于得到一个新的value的成功回调函数和用于得到失败reason的回调函数
        返回一个新的Promise对象

3.Promise.prototype.catch 方法：(onRejected)=>{}
  onRejected函数：失败的回调函数(reason)=>{}
  说明：then()的语法糖，相当于：then(undefine,onRejected)

1. Promise.resolve
    返回一个成功/失败的promise对象

2. Promise.reject
    返回一个失败的promise对象

3. Promise.all方法: (promises) => {}
    promises: 包含n个promise的数组
    说明: 返回一个新的promise, 只有所有的promise都成功才成功

4. Promise.race方法: (promises) => {}
    promises: 包含n个promise的数组
    说明: 返回一个新的promise, 第一个完成的promise的结果状态就是最终的结果状态
*/

new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('成功的数据')
        }, 1000)
    })
    .then(
        value => {
            console.log('onResolve()1', value);
        }
    ).catch(
        reason => {
            console.log('onReject()1', reason);

        }
    )

const p1 = new Promise((resolve, reject) => {
    resolve(1)
})
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)

p1.then(value => { console.log(value) })
p2.then(value => { console.log(value) })
p3.then(value => { console.log(value) })

const P = Promise.all([p1, p2, p3])
p1.then(value => {
    console.log();

})