const MyRequest = require('./myRequest');

const request = new MyRequest('http://www.baidu.com');

request.send();

request.on('res', (Headers, body) => {
  console.log(Headers);
  console.log(body);
})