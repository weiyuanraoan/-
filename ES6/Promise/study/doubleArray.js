const Arr1 = [1, 2, 3, 4, 5]
const Arr2 = []
for (let i = 0; i < Arr1.length; i++) {
    Arr2.push(Arr1[i] * 2)
}
Arr1.push(6)
console.log(Arr2)
console.log(Arr1)

// const item = [1, 2, 3, 4, 5]
// foreach(item => { return item * 2 })
// console.log(Arr2)
// let array = [11, 22];
// let arrayChange = []
// array.push(333);
// arrayChange = array
// console.log(array)
//     //返回的结果就是数组改变后的长度：3
// console.log(arrayChange)
// console.log(arrayChange.length) //undefined