// poll轮询列队

const start = Date.now();
setTimeout(function f1() {
  console.log('setTimeout', Date.now() - start);
}, 200)

console.log('start');

const fs = require('fs');

fs.readFile('./index copy.js', (err, data) => {
  console.log('fs.readFile');
  const start = Date.now();
  while (Date.now() - start < 300) {
    // console.log(Date.now() - start);
  }
})