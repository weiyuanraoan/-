/*
 * @Author: your name
 * @Date: 2020-07-08 14:31:24
 * @LastEditTime: 2020-07-08 14:48:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端知识总结\前端优化\堆、栈以及事件循环\main.js
 */


// console.log(1)
// let promise = new Promise(function (resolve, reject) {
//   console.log(3)
//   resolve(100)
// }).then(function (data) {
//   console.log(100)
// })
// setTimeout(function () {
//   console.log(4);
// })
// console.log(2)

var a = "aa";//栈
function one() {//栈
  let a = 1;
  two();
  function two() {
    let b = 2;
    three();
    function three() {
      console.log(b)
    }
  }
}
console.log(a);
one();
