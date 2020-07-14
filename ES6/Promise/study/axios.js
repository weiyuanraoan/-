// let axios = require('axios')
let request = require('request')
    // console.log(axios);
let httpurl = "https://www.1905.com/mdb/film/2246657/"
    //获取起始页面的所以分类
async function getClassUrl() {
    let { response, body } = await req(httpurl)
    console.log(body);

}
// axios.get(httpurl, {
//         headers: { 'X-Requested-With': 'XMLHttpRequest' }
//     })
//     .then((res) => {
//         console.log(res);

//     })
function req(url) {
    return new Promise((resolve, reject) => {
        request.get(url, function(err, response, body) {
            if (err) {
                reject(err)
            } else {
                resolve(({ response, body }))
            }
        })
    })
}