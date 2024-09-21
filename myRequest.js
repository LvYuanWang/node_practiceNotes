// 网络请求模块
const { EventEmitter } = require('events');
const http = require('http');

module.exports = class extends EventEmitter {
  constructor(url, options) {
    super();
    this.url = url;
    this.options = options;
  }

  send(body = "", method = "GET") {
    const options = { ...this.options, method };
    const request = http.request(this.url, options, res => {
      let headers = res.headers;
      let body = "";
      res.on('data', chunk => {
        body += chunk.toString("utf-8");
      })
      res.on('end', () => {
        this.emit('res', headers, body);
      })
    })
    request.write(body);
    request.end();
  }
}