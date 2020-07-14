// function *cit() {
//     yield 1;
//     yield 22;
//     yield 3;
// }
//
// let it = cit();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


// function *cit(items) {
//     for (let i = 0; i < items.length; i++) {
//         yield items[i];
//     }
// }
//
// let it = cit([1, 22, 3]);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


let items = ['a', 'b', 'c'];
// for (let i of items) {
//     console.log(i);
// }

// console.log(items.keys());
// console.log(items.values());
// console.log(items.entries());

// for (let i of items.keys()) {
//     console.log(i);
// }
// console.log('----');
// for (let i of items.values()) {
//     console.log(i);
// }
// console.log('----');
// for (let i of items.entries()) {
//     console.log(i);
// }

let values = items.values();
console.log(values.next());









