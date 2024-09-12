/** util **/
const util = require('util');

/* util.callbackify */
// async function delay(duration) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(duration);
//     }, duration);
//   })
// }

// const delayCallback = util.callbackify(delay);
// delayCallback(1000, (err, data) => {
//   console.log(data);
// })
// console.log('hello node')

/* util.promisify */
// function delayCallBack(duration, callback) {
//   setTimeout(() => {
//     callback(null, duration);
//   }, duration);
// }

// 方法一
// const delay = util.promisify(delayCallBack);
// delay(1000).then(d => { console.log(d) });

// 方法二
// const delay = util.promisify(delayCallBack);
// (async () => {
//   const res = await delay(1000);
//   console.log(res);
// })()

/* util.isDeepStrictEqual() */
const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
}

const obj2 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
}

// 深度比较两个对象是否相等
console.log(util.isDeepStrictEqual(obj1, obj2)); // true