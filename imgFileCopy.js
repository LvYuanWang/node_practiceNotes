/** fs **/
const fs = require('fs');
const path = require('path');

/* fs.writeFile */
/* fs.readFile */
async function copyImg() {
  const imgFilePath = path.resolve(__dirname, './myFiles/dog.jpg');
  const imgBuffer = await fs.promises.readFile(imgFilePath);
  const filename = path.resolve(__dirname, './myFiles/dogCopy.jpg');
  await fs.promises.writeFile(filename, imgBuffer); // 向文件写入内容
  console.log('img copy success!');
}
copyImg();