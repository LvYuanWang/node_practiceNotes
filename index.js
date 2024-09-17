const net = require('net');
const fs = require('fs');
const path = require('path');

// 创建服务器
const server = net.createServer();

server.listen(9527);

// 监听端口后触发的事件
server.on('listening', () => {
  console.log('服务器已启动');
})

// 当连接到当前服务器时触发的事件
// server.on('connection', socket => {
//   console.log('有新的连接加入进来了');
//   // console.log(socket);  // socket对象
//   socket.on('data', chunk => {
//     console.log('来自客户端的消息：', chunk.toString('utf-8'));
//   })
//   socket.write(`HTTP/1.1 200 OK
// Content-Type: text/html

// <h1 style="color: blue;">Hello World</h1>`);
//   socket.end();

//   socket.on('close', () => {
//     console.log('连接关闭');
//   })
// })

// 响应一张图片
const imgPath = path.resolve(__dirname, './images/wallpaper.jpg');
server.on('connection', async socket => {
  const imgBuffer = await fs.promises.readFile(imgPath);
  const head = `HTTP/1.1 200 OK
Content-Type: image/jpeg

`;
  // Buffer.from(): 将字符串转换为Buffer对象
  const responseContent = Buffer.concat([Buffer.from(head), imgBuffer]);
  socket.write(responseContent);
  socket.end();
})