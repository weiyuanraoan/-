let url = require('url')

console.log(url);

let httpUrl = "https://blog.csdn.net/xiao__gui/article/details/8315148"
let urlObj = url.parse(httpUrl)
console.log(urlObj);

let targetUrl = "https://blog.csdn.net/"
httpUrl = "./xiao__gui/article/details/8315148"

let newurl = url.resolve(targetUrl, httpUrl)
console.log(newurl);