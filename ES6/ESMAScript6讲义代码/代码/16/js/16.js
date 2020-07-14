//  let set = new Set();
// set.add(1);
// set.add(22);
// set.add(22);
// set.add('22');
// set.add('c');
// // // console.log(set);
//  console.log(set.size);

// let set = new Set([1, 22, 3, 4, 5]);
// console.log(set.has(22));
// console.log(set.has('22'));
// console.log(set);
// set.delete(22);
// console.log(set);
// set.clear();
// console.log(set);


//let set = new Set([1, 22, 3, 4, 5]);
// let array = [...set];
// console.log(array);

// for (let i of set) {
//     console.log(i);
// }
// set.forEach(function (key, value, s) {
//     console.log(key + '-' + value);
//     console.log(s);
// });


//let ws = new WeakSet([1,22,3]);


// let set = new Set(),
//     obj = {1:1};
//
// set.add(obj);
// console.log(set);
//
// obj = null;
//
// console.log(set);




let ws = new WeakSet(),
    obj = {1:1};

ws.add(obj);
console.log(ws.has(obj));

obj = null;

console.log(ws.has(obj));













