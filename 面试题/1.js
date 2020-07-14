/*
 * @Author: your name
 * @Date: 2020-07-10 12:27:13
 * @LastEditTime: 2020-07-10 15:43:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端知识总结\面试题\1.js
 */ 

var tag = 0
function test1(){
  return tag
}

function test2(){
  tag = 1;
  return 
  tag
  
}

function test3(){
  return(
    test2()
  )
}

console.log(test3());
console.log(test2());
console.log(test1());
