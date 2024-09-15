const fs = require('fs');
const path = require('path');

const from = path.resolve(__dirname, './temp/writeStreamTest.txt');
const to = path.resolve(__dirname, './temp/writeStreamTestCopy.txt');

// 将 from 文件内容写入到 to 文件中
// 方法一
async function method1() {
  console.time("method1");
  const content = await fs.promises.readFile(from);
  await fs.promises.writeFile(to, content);
  console.timeEnd("method1");
  console.log('复制完成');
}

// 方法二
function method2() {
  console.time("method2");

  const rs = fs.createReadStream(from);
  const ws = fs.createWriteStream(to);

  rs.on('data', chunk => {
    // 每次读到的数据
    const flag = ws.write(chunk);
    if (!flag) {
      rs.pause(); // 暂停读取
    }
  })

  ws.on('drain', () => {
    // 当前列队已写入完成
    rs.resume(); // 恢复读取
  })

  rs.on('close', () => {
    // 写入完成
    ws.end();
    console.timeEnd("method2");
    console.log('复制完成');
  })
}
method2();