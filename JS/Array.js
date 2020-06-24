/*
 * @Author: your name
 * @Date: 2020-06-24 22:41:53
 * @LastEditTime: 2020-06-24 23:34:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端知识总结\JS\Array.js
 */

// 数组的三种创建方法  *也可以使用from方法
var array1 = [1, 2, 3, 4]
var array2 = new Array(1, 2, 3, 4)
let array3 = Array(1, 2, 3, 4)

let arr1 = [10] //[10]
let arr2 = Array(10) //[10*undefined]

//数组的访问  *查找的实质将arr[0]=>arr['0'] 采用tostring方法隐式转换
let arr1 = [0, 1, 2]
arr1[0] //0

// Array 的实例属性是可以修改的  *有奶便是娘
let array = []
array.constructor = String;
array.constructor === Array; //[false]
array.constructor === String //[true]

//数组的长度 length *可以删除或增加属性
let arr = [0, 1, 2];
arr.length = 2;
console.log(arr); // [0, 1]
arr.length = 5;
console.log(arr); // [0, 1, empty × 3]
//其中empty 也叫空的对象引用(来自V8源码) 和  undefined 大致全等。
console.log(arr[3] === undefined); //[true]

// from 方法 从类数组对象或可迭代对象中创建一个新的数组