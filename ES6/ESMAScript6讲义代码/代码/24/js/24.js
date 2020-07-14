class Person {

    static gender = '男';

    static go() {
        return 'GO GO GO ' + Person.gender;
    }

    constructor(name) {
        this.name = name;
    }

    get user() {
        return this.name;
    }

    set user(value) {
        this.name = value;
    }

    run() {
        return 'name : ' + this.name;
    }

}

class Children extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    run() {
        return super.run() + this.age;
    }

    static gender = '女';

    static go() {
        return 'go go go ' + Children.gender;
    }
}


console.log(Person.gender);
console.log(Person.go());
console.log(Children.gender);
console.log(Children.go());


//let c = new Children('Mr.Lee', 100);
// c.user = 'Mr.Wang';
// console.log(c.user);
// console.log(c.run());
//console.log(c.age);
//console.log(c.run());
//console.log(Object.getPrototypeOf(Children) === Person);












