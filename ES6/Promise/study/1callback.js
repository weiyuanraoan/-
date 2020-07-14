// 回调函数 是高阶函数的一种
// 高阶函数 1) 如果函数的参数是一个函数 
//          2）如果一个函数返回了一个函数(返回函数就是高阶函数)

// 常见的高阶函数的应用
// 有一个核心功能


/*1） 同步回调
理解： 立即执行， 完全执行完了才结束， 不会放到回调队列中
例子： 数组遍历相关的回调函数 / Promise 的excutor函数
2） 异步调用
理解： 不会立即执行， 会放入回调函数队列中将来执行
例子： 定时器回调 / ajax回调 / Promise的成功 | 失败的回调
*/

//1.同步回调函数
const arr = [1, 3, 5]
arr.forEach(item => {
    //遍历回调 同步回填函数 不会放入队列 一上来就要执行完
    console.log(item);
})
console.log('forEach()之后');

//2.异步回调函数
setTimeout(() => {
    // 异步回调函数 会放入队列中将来执行
    console.log('time callback()之后');
}, 0)
console.log('setTimeout()之后');






//AOP 面向切片编程
// function say() {
//     // todo。。
//     console.log('说话')
// }
// Function.prototype.before = function() {

// }
// const newFn = say.before(function() {
//     console.log('说话前')
// })
// newFn();