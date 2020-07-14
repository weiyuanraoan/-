/*
 * @Author: your name
 * @Date: 2020-07-04 15:27:51
 * @LastEditTime: 2020-07-04 15:41:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端知识总结\ES6\解构赋值\index.js
 */

/*
  解构赋值
  允许按照一定模式，从数组和对象中提取值，并对变量进行赋值，
  这就叫做解构赋值
*/

// let arr = [1, 2, 3]

// let [a, b, c] = arr
// console.log(a, b, c);
// 需要一一对应

// let { foo, bar } = { foo: 'aaa', bar: 'bbb' }
// 左侧变量的值必须为右侧存在的key 解构的顺序不需要一一对应。
// console.log(bar, foo);

// top 为全局变量  后面的top会覆盖前面的变量
// let { left: L, top: T } = { left: 100, top: 200 }
// console.log(L, T);

// let { foo: [a, b] } = { foo: [100, 200], bar: 'bbb' }
// console.log(a, b);

let [a] = 'miaov' //可迭代
console.log(a);