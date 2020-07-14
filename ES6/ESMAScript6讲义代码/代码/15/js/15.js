// let s = Symbol('the s!');
// console.log(s);
// console.log(typeof s);

// let s1 = Symbol('s'),
//     s2 = Symbol('s');
//
// console.log(s1 === s2);

// let s = Symbol('s');
// console.log(s.toString() + '变量');
// console.log(String(s) + '变量');
// console.log(!s);

// let obj = {
//     name : 'Mr.Lee',
//     name : 'Mr.Wang'
// };
// console.log(obj);

// let x = 'name',
//     y = 'name';
//
// let obj = {
//     ['user' + x] : 'Mr.Lee',
//     ['user' + y] : 'Mr.Wang',
// };
//
// console.log(obj);

let x = Symbol(),
    y = Symbol();

let fn = Symbol();

let obj = {
    [x] : 'Mr.Lee',
    [y] : 'Mr.Wang',
    [fn]() {
        return 'fn';
    }
};
console.log(obj);
console.log(obj[y]);
console.log(obj[fn]());











