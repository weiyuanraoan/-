/*
 * @Author: your name
 * @Date: 2020-07-04 17:00:46
 * @LastEditTime: 2020-07-05 10:17:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端知识总结\ES6\字符串扩展\index.js
 */
/*
unicode 表示法
*/
//  '\u' 编码
console.log('\u4E00'); // 一
// 中文unicode表示方法


/*
  模板字符串
  保持 内容 格式
  支持变量表达式解析
  ${js表达式}
*/

var str = 'a    b'
console.log(str);

let str1 = `a
b `
console.log(str1);
let str2 = `a
${Math.max(1,3)}`
console.log(str2);

let a = Math.max(1, 3)
console.log(a);