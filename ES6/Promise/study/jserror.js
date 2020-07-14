/* 
1.错误的类型
  Error：所有错误的父类型
  ReferenceError:引用的变量不存在
  TypeError：数据类型不正确的错误
  RangeError：数据值不在其所允许的范围类
  SyntaxError：语法错误
2.错误处理
  捕获错误：try ... catch
  抛出错误：throw error
3.错误对象
  message 属性：错误相关信息
  stack属性：函数调用栈记录信息
*/

//1.常见的内置错误
// ReferenceError:引用的变量不存在
// console.log(a);
// console.log('------'); //没有捕获error 下面的代码不会执行


// TypeError：数据类型不正确的错误
// let b = null
// console.log(b.xxx);
// // ----------------
// let b = {}
// b.xxx()
// RangeError：数据值不在其所允许的范围类
// function fn() {
//     fn()
// } //函数调用超过次数限制
// fn()

// SyntaxError：语法错误
// const c = "1'1'1"
// console.log(c);

// 2. 处理错误
// 捕获错误：
// try...catch
/*try {
    let d
    console.log(d.xxx);
} catch (error) {
    console.log(error.message);
    console.log(error.stack);
}
*/
console.log('出错之后');
//抛出错误： throw error 
function something() {
    if (Date.now() % 2 === 1) {
        console.log('当前时间为奇数，可以执行任务');
    } else {
        throw new Error('当前时间为偶数，无法执行任务')
    }
}
try {
    something()
} catch (error) {
    alert(error.message)
}