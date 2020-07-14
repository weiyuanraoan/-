// let fn = name => name;
// console.log(fn('Mr.Lee'));

// let fn = (x, y) => x + y;
// console.log(fn(10, 20));

// let fn = () => 'Mr.Lee';
// console.log(fn());

// let fn = (x, y) => {
//     return x + y;
// };
// console.log(fn(10, 20));

// let fn = name => ({name : name ,age : 100});
// console.log(fn('Mr.Lee').name);

// let fn = ({name, age}) => name + ', ' + age;
// console.log(fn({name : 'Mr.Lee', age : 100}));

// ((name) => {
//     console.log(name);
// })('Mr.Lee');

let obj = {
    name : 'Mr.Lee',
    age  : 100,
    fn   : function () {
        // let that = this;
        // setTimeout(function () {
        //     console.log(that);
        //     console.log(that.name + ',' + that.age);
        // }, 500)

        setTimeout(() => {
            console.log(this);
            console.log(this.name + ',' + this.age);
        }, 500)
    }
};

obj.fn();






