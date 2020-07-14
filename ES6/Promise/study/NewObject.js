// var Vehicle = function() {
//     this.price = 1000;

// }
// var v = new Vehicle()
// this.price = 2000

// console.log(this.price);

// 1000
function f() {
    return '姓名：' + this.name;
    console.log(this.name);

}

var A = {
    name: '张三',
    describe: f
};

var B = {
    name: '李四',
    describe: f
};
console.log(A.describe()) // "姓名：张三"
console.log(B.describe())

// "姓名：李四");