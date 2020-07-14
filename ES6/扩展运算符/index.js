/*
 * @Author: your name
 * @Date: 2020-07-04 15:44:41
 * @LastEditTime: 2020-07-04 16:56:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端知识总结\ES6\扩展运算符\index.js
 */

/*
扩展运算符：
   ...
   把数组对象转成参数序列(使用逗号分隔的序列)
   [a,b,c] => "a","b","c"
*/

var arr1 = [1, 2, 3, 4, 5]
var arr2 = ['a', 'b', 'c']
let obj1 = {
    a: 1
}
let obj2 = {
    b: 2
}

// Math.max(arr[0], arr[1], arr[2])
// console.log(Math.max(...arr));

// 数值对象合并
// console.log([...arr1, ...arr2]);

obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3);

let a = {
    a: 1
}