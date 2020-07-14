// function fn(name,
//             age = 100,
//             arr = [],
//             obj = {},
//             callback = function () {}) {
//
//     console.log(name);
//     console.log(age);
//     console.log(arr);
//     console.log(obj);
//     console.log(callback('callback'));
// }
//
// fn('Mr.Lee', 200, [1,22,3], {key : 1}, function (info) {
//     return info;
// });

// function pi() {
//     return 3.14;
// }
//
// function fn(r, p = pi()) {
//     console.log(r * r * p);
// }
//
// fn(10);


// function fn(name = 'Mr.Lee', age) {
//     console.log(name);
//     console.log(age);
// }
//
// fn(undefined, 100);

// function fn(x, y = x) {
//     console.log(y);
// }
//
// fn(5);

// function fn(name, ...other) {
//     console.log(name);
//     console.log(other);
// }
//
// fn('Mr.Lee', 100, '男');

function fn() {

}
let fn2 = function () {};
let obj = {
    fn3 : function () {},
};

console.log(fn.name);
console.log(fn2.name);
console.log(obj.fn3.name);
console.log((new Function()).name);










