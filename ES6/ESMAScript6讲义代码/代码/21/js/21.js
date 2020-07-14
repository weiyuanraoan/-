let obj = {
    name : 'Mr.Lee',
    age : 100,
    gender : '男'
};


let p = new Proxy(obj, {
    get(target, property) {
        //return '已屏蔽';
        if (property === 'age') {
            //return target[property] - 80;    //obj.age
            return target[property];
        } else {
            return 'fail';
        }
    },
    set(target, property, value) {
        //return false;
        if (property === 'age') {
            if (!Number.isInteger(value) || value > 150) {
                throw new TypeError('年龄不合法！');
            }
            target[property] = value;
        }
    }
});


p.age = 80;
console.log(p.age);
console.log(obj.age);

// console.log(p.name);
// console.log(p.age);
// console.log(p.abc);
// console.log(obj.name);
// console.log(obj.abc);

















