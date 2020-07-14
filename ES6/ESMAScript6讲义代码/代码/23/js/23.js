class Person {  //function Person() {}
    #name;

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    run() {
        return '类的方法：' + this.#name;
    }
}

let p = new Person('Mr.Lee');
p.name = 'Mr.Wang';
console.log(p.name);



// let obj = {};
// obj.name = 'Mr.Wang';
// console.log(obj.name);


// p.name = 'Mr.Wang';
// console.log(p.name);


//p.#name = 'Mr.Wang';
//console.log(p.run());
//console.log(p.#name);


// console.log(p.run());
//p.name = 'Mr.Wang';
//console.log(p.name);
// console.log(p instanceof Person);
// console.log(typeof Person);











