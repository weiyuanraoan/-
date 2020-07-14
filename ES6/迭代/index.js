/*
 * @Author: your name
 * @Date: 2020-07-05 11:33:18
 * @LastEditTime: 2020-07-05 11:50:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端知识总结\ES6\迭代\index.js
 */
/*
迭代协议：规定了迭代与实现的逻辑
迭代器：具体的迭代逻辑实现
迭代对象：可迭代的对象 - [Symbol.interator]方法
迭代语句：
    for...in 以原始插入的顺序迭代对象的可枚举属性
    for...of 根据迭代对象的迭代器具体实现迭代对象数据
*/

//for...of
// var arr = [1, 2, 3, 4]
// for (var i = 0; i < arr.length; i++) {
//     console.log(i, arr[i]);

// }
// var arr1 = [1, 2, 3, 4]
// for (var i in arr) {
//     console.log(i, arr[i]);
// }
// var arr2 = [1, 2, 3, 4]
// for (var i of arr) {
//     console.log(i, arr[i]);
// }

//迭代对象 ： 就是看有没有Symbol.interator方法 对象则没有这个属性

var obj = {
    a: 1,
    name: 'pan'
}
obj[Symbol.interator] = function() {
    return {
      
        value: '',
        done: true
    }
}
for (var i of obj) {
    console.log(i);

}