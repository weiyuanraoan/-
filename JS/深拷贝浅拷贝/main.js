/*
 * @Author: your name
 * @Date: 2020-07-10 13:26:14
 * @LastEditTime: 2020-07-11 09:25:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端知识总结\JS\深拷贝浅拷贝\main.js
 */ 

// var num1 = 22;
// var num2 = num1;
// console.log(num1,num2);
// var num2 = 12
// console.log(num1,num2);
// var a ={
//   name:'pan',
//   age:22
// }

// var b = a//指针 指向一个地址
// b.name="aaa"
// console.log(a,b);

// 浅拷贝
function copyobj(o){
  let newobj = {}
  for(let i in o){
    newobj[i] = o[i]
  }
  return newobj;
}
var a = {
  name:'pan',
  age:22
}
var b = copyobj(a)//赋值
console.log(a,b);
b.name="aaa"
console.log(a,b);

//深拷贝 loadsh (clone)
