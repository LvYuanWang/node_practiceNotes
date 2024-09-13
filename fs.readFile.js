/** fs **/
const fs = require('fs');
const path = require('path');

/* fs.readFile */
const filename = path.resolve(__dirname, './myFiles/1.txt');
// 异步读取文件
// fs.readFile(filename, "utf-8", (err, data) => {
//   console.log(data);
// });
// console.log("1");

// Sync函数是同步的, 会导致JS代码阻塞, 极其影响性能
// 通常, 在程序启动时运行有限的次数即可
// 同步读取文件
// const content = fs.readFileSync(filename, "utf-8");
// console.log(content);
// console.log("1");

// promise写法  fs.promises.readFile
async function test() {
  const content = await fs.promises.readFile(filename, "utf-8");
  console.log(content);
}
test();