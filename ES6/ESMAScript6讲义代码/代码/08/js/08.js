// let arr = [3, 1, 22].sort(function (a, b) {
//     return a - b;
// });
// let arr = [3, 1, 22].sort((a, b) => a - b);
//
// console.log(arr);


// let fn = (...other) => {
//     return other[0] + other[1]
// };
// console.log(fn(10, 20));
// console.log(typeof fn);
// console.log(fn instanceof Function);

'use strict';

function fn(x) {
    if (x <= 1) {
        return 1;
    }
    return fn(x - 1);
}
fn(10);


















