/** fs **/
const fs = require('fs');
const path = require('path');

/* fs.mkdir */
// 创建目录
// async function createDir() {
//   const dirname = path.resolve(__dirname, './myFiles/oneDir');
//   await fs.promises.mkdir(dirname);
//   console.log('创建目录成功');
// }
// createDir();

// 判断文件或者目录是否存在
async function exists(filename) {
  try {
    await fs.promises.stat(filename);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    }
    throw error;
  }
}

const dirname = path.resolve(__dirname, "./myFiles/twoDir")
async function test() {
  const isExist = await exists(dirname);
  if (isExist) {
    console.log('文件已存在, 无需创建');
  } else {
    await fs.promises.mkdir(dirname);
    console.log('创建目录成功');
  }
}

test();