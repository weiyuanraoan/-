const fs = require('fs')
    //导入文件模块
    //node 读写文件也有同步和异步的接口。

//同步 node
// const a = fs.openSync('pan.txt', "r", )
// console.log(a) //3 这是标识 在内存中显示。
//var buf = Buffer.alloc(20) // Buffer 自动开辟的内存大小

// const b = 
// 异步操作 充满回调
// fs.readFile('pan.txt', { flag: 'r', encoding: 'utf-8' }, function(data, err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
//     console.log(456)
// })

//封装成一个函数来执行

function fsRead(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, { flag: 'r', encoding: 'utf-8' }, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
            // console.log(123)
        })
    })
}
// const a = fsRead('pan.txt')
// a.then(function(res) {
//     console.log(res)
// })

async function ReadList() {
    var file1 = await fsRead('pan.txt')
    var file2 = await fsRead('pan1.txt')
    var file3 = await fsRead(file1 + 'pan.txt')
    console.log(file1.length)
    console.log(file1.toString().length);

    console.log(file2)
    console.log(file3);

}
ReadList()
    //             if (err) {
    //                 // console.log(err)
    //                 reject(err)
    //             } else {
    //                 // console.log(data)
    //                 resolve(data)
    //             }

//         })
//     }
// }
// console.log(123)

// console.log(b.toString())