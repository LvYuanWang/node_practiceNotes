/** fs **/
const fs = require('fs');
const path = require('path');

/* fs.readdir */
// 获取指定目录下的所有子文件/目录
async function test() {
  const dirname = path.resolve(__dirname, './myFiles');
  const allFileAndDir = await fs.promises.readdir(dirname);
  console.log(allFileAndDir);
}
test();