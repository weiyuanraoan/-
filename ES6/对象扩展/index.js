/*
 * @Author: your name
 * @Date: 2020-07-05 10:22:47
 * @LastEditTime: 2020-07-05 11:33:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端知识总结\ES6\对象扩展\index.js
 */
/*
  对象简介表示法
    当对象的key与对应的属性所引用的变量或函数同名的时候，就可以简写成一个

*/

var a = 1;
var fn = function() {}

// var obj = {
//     a: a,
//     fn: fn
// }

var obj = {
    a,
    fn
}
console.log(obj);

// 属性名表达式
var x = 'miaov'
var obj1 = {
    // 设置key为动态的时候
    x: 1 //这个是对象里的属性 对象的key必须是字符串
}
console.log(x);
console.log('x');
console.log([x]);