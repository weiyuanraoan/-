/*
 * @Author: your name
 * @Date: 2020-07-04 11:32:37
 * @LastEditTime: 2020-07-04 12:01:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端知识总结\ES6\作用域\indes.js
 */

/*  作用域：变量的作用范围
    全局 - 非函数
    函数 - 函数包含

    块作用域 - 对{ } 包含的范围
*/

// {
//     var a = 1;
//     let b = 2;
//     const c = 3
// }
// console.log(a);
// // console.log(b);
// // console.log(c);

// let i = 1
// for (let i = 0; i <= 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0);
// }

// let i = 1
// for (var i = 0; i <= 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0);
// }

// var i = 1
// for (let i = 0; i <= 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0);
// }
var a = { k1: 1 }
var b = a

// b={k1,1,k3}{}
a.k3 = a = { k2: 2 }
console.log(a);
console.log(b);
/*  var 声明变量预解析
    不支持块级作用域
    允许重复声明变量

    let 不支持变量预解析
    支持块作用域
    不允许重复声明(暂存死区)

    const 不支持变量预解析
    支持块作用域
    不允许重复声明(暂存死区)
    常量(值一旦确定 不允许修改 必须初始化)
*/