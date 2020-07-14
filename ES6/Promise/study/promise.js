const PENDING = 'PENDING'
const RESOLVE = 'RESOLVE'
const REJECTED = 'REJECTED'
class Promise {
    //看属性能否在原型上使用
    //看属性是否公用
    constructor(exeutor) {
        this.status = 'PENDING' //默认状态
            //成功函数
        this.status = undefined; //成功的值
        this.reason = undefined; //失败的原因

        this.onResolveCallbacks = []; //成功回调的数组
        this.onrejectedCallbacks = []; //失败回调的数组
        let resolve = (value) => {
                //屏蔽调用
                if (this.status === PENDING) {
                    this.value = value;
                    this.status = RESOLVE;
                    this.onResolveCallbacks.forEach(fn => fn()) //发布

                }
            }
            //失败函数
        let reject = (reason) => {
            if (this.status === PENDING) {
                this.reason = reason;
                this.status = REJECTED
                this.onrejectedCallbacks.forEach(fn => fn())
            }
        }
        try {
            exeutor(resolve, reject); //默认执行器会立即执行
        } catch (e) { //如果执行时发生错误 等价于调用失败方法
            reject(e);
        }
    }
    then(onfulfilled, onrejected) {
        //then 先设置两个参数
        if (this.status === RESOLVE) {
            this.value = value;
            onfulfilled(this.value)
        }
        if (this.status === REJECTED) {
            this.reason = reason;
            onrejected(this.reason)
        }
        if (this.status === PENDING) {
            //如果是异步就先订阅好
            this.onResolveCallbacks.push(() => { //重写push方法
                // todo...
                onfulfilled(this.value);
            });
            this.onrejectedCallbacks.push(() => {
                onrejected(this.reason)
            })
        }
    }
}
module.exports = Promise