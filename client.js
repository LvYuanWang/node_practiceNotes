const net = require('net');

// 创建客户端
const socket = net.createConnection(
  { host: "www.baidu.com", port: 80 },
  () => { console.log('连接成功'); }
);

var responseContent = '';
/**
 * 提炼出响应字符串的消息头和消息体
 * @param {*} response 
 */
function parseResponse(response) {
  const index = response.indexOf('\r\n\r\n'); // 找到消息头和消息体的分隔符
  const head = response.slice(0, index).split("\r\n").slice(1).map(str => str.split(":").map(s => s.trim())).reduce((a, b) => { a[b[0]] = b[1]; return a; }, {});  // 消息头
  const body = response.substring(index + 4); // 消息体
  responseContent = { head, body }
}

socket.on('data', chunk => {
  const response = chunk.toString();
  !responseContent && parseResponse(response);
  console.log(responseContent);
  console.log("来自服务器的消息");
  socket.end(); // 结束连接
})

socket.write(`GET / HTTP/1.1
Host: www.baidu.com
Connection: keep-alive

`);

socket.on('close', () => {
  console.log('连接关闭');
})