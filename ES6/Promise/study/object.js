/*
  1.函数对象和实例对象
  函数对象：将函数作为对象来使用，简称函数对象
  实例对象：new 函数产生的对象，简称为对象
  .  左边是对象
  () 左边是函数
*/

function Fn() {
    //Fn对象 
}
const fn = new Fn() //Fn 是构造函数 fn实例对象(简称为对象)
console.log(Fn.prototype)
Fn.bind({})
Fn.call({}) //调用
$('#test') //JQuery 函数
$.get('/test') //放ajax请求 JQuer 函数对象
    //Fn 函数对象 定义在原型上 
function Person(parmas) {

}