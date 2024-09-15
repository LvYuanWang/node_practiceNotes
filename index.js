const fs = require('fs');
const path = require('path');

const from = path.resolve(__dirname, './temp/writeStreamTest.txt');
const to = path.resolve(__dirname, './temp/writeStreamTestCopy.txt');

// 将 from 文件内容写入到 to 文件中

// 方法二
function method2() {
  const rs = fs.createReadStream(from);
  const ws = fs.createWriteStream(to);

  console.time("method2");

  rs.pipe(ws);  // pipe() 方法可以将可读流中的内容直接输出到可写流中, 并且会解决背压问题

  rs.on('close', () => {
    console.timeEnd("method2");
  })
}
method2();