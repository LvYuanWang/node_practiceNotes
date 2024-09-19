// http模块
const http = require('http');
const url = require('url');

function requestContentDetail(req) {
  console.log(`请求方法: ${req.method}`);
  const requestUrl = url.parse(req.url);
  console.log("请求地址详情: ", requestUrl);
  console.log("请求头: ", req.headers);
}

// 创建服务器
const server = http.createServer((req, res) => {
  requestContentDetail(req);
  res.setHeader("name", "Joker");
  res.setHeader("age", 19);
  res.statusCode = 404;
  console.log(`响应状态码: ${res.statusCode}`);
  res.write("Hello NodeServer!")
  res.end();
})

server.listen(9527);

server.on('listening', () => {
  console.log('listening port in 9527');
})