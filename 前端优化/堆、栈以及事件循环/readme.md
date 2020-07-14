<!--
 * @Author: your name
 * @Date: 2020-07-08 14:36:13
 * @LastEditTime: 2020-07-10 13:25:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端知识总结\前端优化\堆、栈以及事件循环\readme.md
--> 
## JS的存储机制
- 栈(stack) 和  堆(heap)
  栈存储一般的数据类型
  (ps：js的数据类型：
  原始类型(即基本(值类型)数据类型):Number,String,null,undefined,Boolean,symbol
  对象类型(即引用数据类型):对象
  Symbol)
  堆一般存储引用数据类型(对象)
  var a1 = 0;   // 栈 
  var a2 = 'this is string'; // 栈
  var a3 = null; // 栈

  var b = { m: 20 }; // 变量b存在于栈中，{m: 20} 作为对象存在于堆内存中
  var c = [1, 2, 3]; // 变量c存在于栈中，[1, 2, 3] 作为对象存在于堆内存中


