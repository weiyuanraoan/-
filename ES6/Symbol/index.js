/*
 * @Author: your name
 * @Date: 2020-07-03 17:44:03
 * @LastEditTime: 2020-07-03 18:50:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端知识总结\ES6\Symbol\index.js
 */
// Symbol ES6新增的基本数据类型 值是由 Symbol 函数调用产生的

let s1 = Symbol();
let s2 = Symbol()
console.log(typeof(s1));
console.log(s1, s2);

let s3 = Symbol('symbol')
let s4 = Symbol('symbol')

console.log(s3 === s4);
// 即使传递参数一样 其值也不一样。

// 用处： 属性私有化 数据保护


// 希望Person 的性别在出生以后的性别确定 并且保存到死
// function person(name, sex) {
//     this.name = name;
//     this.sex = sex
// }
// let p1 = new person('潘', '男')
// console.log(p1.name);



// let Person = (function() {
//     let _sex = ''

//     function person(name, sex) {
//         this.name = name;
//         // this.sex = sex
//         _sex = sex
//     }
//     person.prototype.getsex = function() {
//         return _sex;
//     }

//     return person;
// })()

// let p1 = new Person('潘', '男')
// console.log(p1);
// console.log(p1.getsex());


let Person = (function() {
    let _sex = Symbol('sex')

    function person(name, sex) {
        this.name = name;
        // this.sex = sex
        this[_sex] = sex
    }
    person.prototype.say = function() {
        console.log(this[_sex]);
    }
    return person;
})()

let p1 = new Person('潘', '男')
console.log(p1.say());

// console.log(p1[Symbol('sex')]);  看的到 访问不了