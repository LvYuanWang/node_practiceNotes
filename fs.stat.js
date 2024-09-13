/** fs **/
const fs = require('fs');
const path = require('path');

/* fs.stat */
// 用于获取文件的状态信息
async function test() {
  const imgFilePath = path.resolve(__dirname, './myFiles/dog.jpg');
  const textFilePath = path.resolve(__dirname, './myFiles/1.txt');
  const fileStat = await fs.promises.stat(imgFilePath);
  const textFileStat = await fs.promises.stat(textFilePath);
  console.log(textFileStat);
  console.log(textFileStat.isDirectory());
}
test();