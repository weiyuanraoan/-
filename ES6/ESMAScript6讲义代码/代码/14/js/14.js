// console.log(Object.is(100, '100'));
// console.log(Object.is({}, {}));
// console.log(+0 === -0);
// console.log(Object.is(+0, -0));
// console.log(NaN === NaN);
// console.log(Object.is(NaN, NaN));

// let obj1 = {
//     name : 'Mr.Lee',
//     age : 100
// };
//
// let obj2 = {
//     name : 'Mr.Wang',
//     age : 200
// };
//
// let obj3 = {
//     gender : '男'
// };
//
// console.log(Object.assign(obj1, obj2, obj3));
// console.log(obj1);
// console.log(obj2);

// let obj = {
//     fn() {
//         return 'fn';
//     }
// };
//
// let obj2 = {
//     fn() {
//         return 'fn2';
//     }
// };
//
// let f = Object.create(obj);
// console.log(f.fn());
// console.log(Object.getPrototypeOf(f) === obj);
//
// Object.setPrototypeOf(f, obj2);
// console.log(f.fn());



let obj = {
    fn() {
        return 'fn';
    }
};

let f = {
    fn() {
        return super.fn() + ' extend!';
    }
};

Object.setPrototypeOf(f, obj);
console.log(f.fn());

let h = Object.create(f);
console.log(h.fn());











