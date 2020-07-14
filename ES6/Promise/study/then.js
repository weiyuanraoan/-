// 1.(then中传递的函数)判断成功和失败函数的返回结果
// 2.判断是不是promise 如果是就采用状态
// var ninja = {
//     chirp: function(n) {
//         return n > 1 ? ninja.chirp(n - 1) + '-chirp' : 'chirp';
//     }
// }
// console.log(ninja.chirp(3)) //chirp-chirp-chirp

var ninja = {
    chirp: function(n) {
        return n > 1 ? ninja.chirp(n - 1) + '-chirp' : 'chirp';
    }
}
var samurai = { chirp: ninja.chirp };
ninja = {};

try {
    console.log(samurai.chirp(3) === 'chirp-chirp-chirp')
} catch (err) {
    if (err) {
        alert(false);
    }

}