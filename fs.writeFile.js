/** fs **/
const fs = require('fs');
const path = require('path');

/* fs.writeFile */
const os = require('os');
const filename = path.resolve(__dirname, './myFiles/1.txt');
const buffer = Buffer.from(`${os.EOL}Hello, Node.js`, "utf-8");
// fs.writeFile(filename, buffer, {             // 向文件写入内容
//   flag: 'a', // 追加内容
// }, (err, data) => {
//   console.log('writeFile success');
// })

async function test() {
  await fs.promises.writeFile(filename, buffer, { flag: 'a' }); // 向文件写入内容
  console.log('writeFile success');
}
test();