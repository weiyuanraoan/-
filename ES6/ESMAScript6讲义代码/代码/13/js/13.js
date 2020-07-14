// function fn(name, age) {
//     return {
//         name : name,
//         age : age
//     }
// }
//
// function fn(name, age) {
//     return {
//         name,age
//     }
// }
//
// console.log(fn('Mr.Lee', 100));


// let obj = {
//     fn : function () {
//         return 'fn'
//     }
// };

// let obj = {
//     fn() {
//         return 'fn'
//     }
// };
//
// console.log(obj.fn());


// let obj = {
//     ['user' + 'Name'] : 'Mr.Lee',
//     ['user' + ' Age'] : 100,
//     'user Gender'   : '男'
//
// };
// console.log(obj.userName);
// console.log(obj['userName']);
// console.log(obj['user Age']);
// console.log(obj['user Gender']);


// let myName = 'abc';
// // let obj = {
// //     name : 'Mr.Lee'
// // };
// let obj = {
//     [myName] : 'Mr.Lee'
// };

//console.log(obj);

let obj = {
    ['f' + 'n']() {
        return 'fn';
    }
};

console.log(obj.fn());







