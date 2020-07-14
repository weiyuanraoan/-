// let text = '𠮷';
// console.log(text.length);
// console.log(text.charAt(0));
// console.log(text.charCodeAt(0));
// console.log(text.charCodeAt(1));
// console.log(text.codePointAt(0));
// console.log(String.fromCodePoint(134071));

// console.log('\u01D1');
// console.log('\u004F');
// console.log('\u030C');
// console.log('\u004F\u030C'.normalize() == '\u01D1'.normalize());

// let text = 'Hello, Mr.Lee!';
// console.log(text.includes('Mr.', 4));
// console.log(text.startsWith('Hell'));
// console.log(text.endsWith('ee!'));

// console.log('x'.repeat(5));
// console.log('x'.padStart(6, 'Mr'));
// console.log('x'.padEnd(6, 'Mr'));

let name = 'Mr.Lee',
    age  = 100,
    flag = true,
    //text = '我是' + name + ', 今年' + age + '岁';
    //text = `我是${name}, 今年${age}岁，一加一等于：${1+1}`;
    //text = `结果：${flag ? `true${1+1}` : 'false'}`;
    text = String.raw `我\n是`;

console.log(text);










