// node生命周期
// 1. node执行: 从命令行输入node index.js 启动node程序
// 2. main: node程序从上到下执行，遇到setTimeout时，会将回调函数放入事件队列中(timers阶段)
// 3. event loop: 执行完毕后，会进入事件循环，等待事件队列中的回调函数执行
// 4. timers阶段: 会检查是否有回调函数需要执行，如果有则执行
// 5. poll轮询阶段: 会检查是否有I/O事件(比如: 读取文件、监听请求)需要处理，如果有则执行, 如果没有则等待
// 6. check阶段: 会检查是否有setImmediate回调函数需要执行，如果有则执行

// timers阶段: 用于执行setTimeout和setInterval的回调函数 
setTimeout(function f1() {
  console.log('setTimeout');
}, 5000)

console.log('start');

const http = require('http');

// poll轮询阶段: 用于执行I/O操作的回调函数
const server = http.createServer((req, res) => {
  console.log('request in');
})

server.listen(9527);