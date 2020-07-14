var a = new Promise((resolve, reject) => {
    var b = 1 + c; // ReferenceError: c is not defined，错误会在下面的a打印出来之后报出。
    resolve(true);
})
console.log(1, a);
a.then(res => {


        console.log(2, res);
    })
    .catch(err => {
        console.log(err);
    })