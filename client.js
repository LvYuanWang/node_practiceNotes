// http模块
const http = require('http');

const options = {
  hostname: 'yuanjin.tech',
  port: 5005,
  path: '/api/movie',
  method: 'GET'
}

// 客户端
const request = http.request(options, res => {
  console.log(`状态码: ${res.statusCode}`);
  console.log("响应头: ", res.headers);

  res.on('data', chunk => {
    console.log("响应主体: ", JSON.parse(chunk.toString()));
  })

  res.on('end', () => {
    console.log('响应中已无数据');
  })
})

request.end();

request.on('error', error => {
  console.error(`请求错误: ${error.message}`);
})