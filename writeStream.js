const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './temp/writeStreamTest.txt');

// 可写流的创建
const ws = fs.createWriteStream(filePath, {
  encoding: 'utf-8',
  highWaterMark: 3, // 每次写入的字节数
})

let i = 0;
function writeStream() {
  let flag = true;
  while (i <= 100 * 1024 && flag) {
    console.log(i);
    flag = ws.write("a");
    i++;
  }
}
writeStream();
ws.on('drain', () => {
  console.log('写入完毕, 当前列队已清空');
  writeStream();
})