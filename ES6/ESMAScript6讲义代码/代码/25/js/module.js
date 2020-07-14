// export let name ='Mr.Lee';
//
// export function sum(x, y) {
//     return x + y;
// }
//
// export class Person {
//     constructor(name) {
//         this.name = name;
//     }
//
//     run() {
//         return 'name : ' + this.name;
//     }
// }

let name ='Mr.Lee';

function sum(x, y) {
    return x + y;
}

class Person {
    constructor(name) {
        this.name = name;
    }

    run() {
        return 'name : ' + this.name;
    }
}

export default name;
export {
    sum,
    Person
}







