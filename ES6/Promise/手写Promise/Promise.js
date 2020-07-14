/*
 * @Author: your name
 * @Date: 2020-07-09 15:17:12
 * @LastEditTime: 2020-07-09 21:32:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端知识总结\ES6\Promise\手写Promise\Promise.js
 */

/*
  自定义Promise函数模块 IIFE
*/

(function (window) {

  /*
  Promsie 执行函数
  excutor:执行器函数(同步执行)
  */
  function Promise(excutor) {
    //将当前promise 对象保存起来
    const _this = this

    _this.status = 'pending'//给promise对象指定status属性 初始值为peding
    _this.data = undefined // 给promise对象指定一个用于存储结果数据的属性
    _this.callbacks = [] //每个元素的结构 { onResolved(){}, onRejected() {}}

    function resolve(value) {

      //如果当前对象不是penging 直接结束

      if (_this.status !== 'pending') {
        return
      }
      //将状态改成resolve

      _this.status = 'resolved'
      //保存value

      _this.data = value
      //如果有待执行的callback,立即异步执行回调函数

      if (_this.callbacks.length > 0) {
        setTimeout(() => {//放到队列里面执行所有成功的回调
          _this.callbacks.forEach((callbackObj) => {
            callbackObj.onResolved(value)
          })
        })

      }
    }
    function reject(reason) {
      //如果当前对象不是penging 直接结束

      if (_this.status !== 'pending') {
        return
      }

      _this.status = 'rejected'
      //保存reason

      _this.data = reason
      //如果有待执行的callback,立即异步执行回调函数

      if (_this.callbacks.length > 0) {
        setTimeout(() => {//放到队列里面执行所有成功的回调
          _this.callbacks.forEach((callbackObj) => {
            callbackObj.onRjected(reason)
          })
        })

      }
    }

    //立即同步执行构造器函数
    try {
      excutor(resolve, reject)
    } catch (error) {//如果执行器抛出异常 则promise变为rejected状态
      reject(error)
    }

  }
  /*
  Promise 的原型对象的方法
  指定成功和失败的回调函数
  返回一个新的promise对象
  */
  Promise.prototype.then = function (onResolved, onRjected) {

    const _this = this

    //返回新的promise对象
    return new Promise((resolve, reject) => {
      if (_this.status === pending) {
        //当前状态还是pending  把回调函数保存起来
        _this.callbacks.push({
          onResolved,
          onRjected
        })
      } else if (_this.status === resolved) {
        setTimeout(() => {
          /*
          1.若干抛出异常 return的promise就会失败 reason 就是error
          2.如果回调函数不是promise，return 的promise 就会成功 value 就是返回的值
          3.如果回调函数返回的是promise，return的promise 结果就是这个promise的结果
          */
          try {
            const result = onResolved(_this.data)

            if (result instanceof Promise) {
              result.then(resolve,reject)
              // result.then(
              //   value => resolve(value),//当result 成功时 让return 的promise也成功
              //   reason => reject(reason)//当result 失败 让return 的promise也失败
              // )
            }
            else {
              resolve(result)
            }


          } catch (error) {
            reject(error)
          }

          onResolved(_this.data)
        })
      } else {
        setTimeout(() => {
          onRjected(_this.data)
        })
      }
    })
  }


  /*
  Promise的原型对象的Catch
  指定失败的回调的对象
  返回新的promise
  */
  Promise.prototype.catch = function (onReject) {

  }
  /*
   * Promise 的函数对象resolve
   返回指定结果的成功的promise
   */
  Promise.resolve = function (value) {

  }
  /*
   * Promise 的函数对象reject
   返回一个指定的reason的失败的promise
   */
  Promise.reject = function (reason) {

  }
  /*
   * Promise 的函数对象all
   返回一个promise 所有的promise成功时才成功 
   */
  Promise.all = function (promises) {

  }
  /*
  * Promise 的函数对象race
  返回一个promise 其结果由第一个promise决定
  */
  Promise.race = function (promises) {

  }

  //向外暴露Promise函数
  window.Promise = Promise
})(window)
