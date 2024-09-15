const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './test.txt');

// 可读流的创建
const rs = fs.createReadStream(filePath, {
  encoding: "utf-8",
  highWaterMark: 1, // 每次读取的字节数
  autoClose: true, // 读取完毕后是否自动关闭文件
})

rs.on('open', () => {
  console.log('文件打开了');
})

rs.on('error', (err) => {
  console.log('文件读取失败', err);
})

rs.on('data', (data) => {
  console.log('每次读取到的数据: ', data);
  rs.pause(); // 暂停读取
})

rs.on('pause', () => {
  console.log('暂停读取');
  rs.resume(); // 恢复读取
})

rs.on('resume', () => {
  console.log('恢复读取');
})

rs.on('end', () => {
  console.log('文件读取完毕');
})

rs.on('close', () => {
  console.log('文件关闭了');
})
