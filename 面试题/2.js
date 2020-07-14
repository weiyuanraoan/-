/*
 * @Author: your name
 * @Date: 2020-07-10 12:36:07
 * @LastEditTime: 2020-07-10 13:13:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端知识总结\面试题\2.js
 */


// for(let i = 0;i<10;i++){
//   setTimeout(()=>{
//     console.log(i);
//   },1000)
// }



// setTimeout(() => {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);

//   }
// }, 0)

// function Animal(login) {
//   this.login = login;
//   this.sayHi = function() {
//     console.log(this.login);  //undefined
//   }
// }
// var dog = new Animal('John');
// setTimeout(dog.sayHi, 1000);

function fun() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}
fun()