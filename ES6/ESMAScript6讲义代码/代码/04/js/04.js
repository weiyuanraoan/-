// let info = ['Mr.Lee', 100, '男'];
// let [name, age, gender] = info;

// let info = ['Mr.Lee', 100, '男'],
//     [name, age, gender] = info;

//let [name, age, gender] = ['Mr.Lee', 100, '男'];

//let [name, [age, gender]] = ['Mr.Lee', [100, '男']];

//let [,, gender] = ['Mr.Lee', 100, '男'];

//let [name, age, gender = '男'] = ['Mr.Lee', 100];

//let [name, ...other] = ['Mr.Lee', 100, '男'];

//console.log(name);
//console.log(other);
//console.log(age);
//console.log(gender);

// let obj = {
//     name : 'Mr.Lee',
//     age  : 100
// };
//
// let {name, age} = obj;

// let obj = {
//     name : 'Mr.Lee',
//     age  : 100
// }, name = 'Mr.Wang';
//
// ({name, age} = obj);
//
// console.log(name);
// console.log(age);

// let obj = {
//     name : 'Mr.Lee',
//     age  : 100,
// };
//
// let {name : myName, age : myAge, gender = '男'} = obj;
// console.log(myName);
// console.log(myAge);
// console.log(gender);

// let obj = {
//     name : 'Mr.Lee',
//     age  : 100,
//     info : {
//         id : 1,
//         gender : '男'
//     }
// };
//
// let {info : {id ,gender}} = obj;
// console.log(id);
// console.log(gender);

let {name, age} = {name : 'Mr.Lee', age : 100};
console.log(name);
console.log(age);











