// 练习: 读取一个目录中的所有子目录和文件
const fs = require('fs');
const path = require('path');

class File {
  #dirSize = 0;
  constructor(filename, name, ext, isFile, size, createTime, updateTime) {
    this.filename = filename;
    this.name = name;
    this.ext = ext;
    this.isFile = isFile;
    this.size = size;
    this.createTime = createTime;
    this.updateTime = updateTime;
  }

  async getChildren() {
    if (this.isFile) return [];
    let childrenFiles = await fs.promises.readdir(this.filename);
    childrenFiles = childrenFiles.map(child => {
      const childPath = path.resolve(this.filename, child);
      return File.getFile(childPath);
    })
    return Promise.all(childrenFiles);
  }

  async getContent(isBuffer = false) {
    return this.isFile ? isBuffer ? await fs.promises.readFile(this.filename) : await fs.promises.readFile(this.filename, "utf-8") : null;
  }

  static async getFile(dirname) {
    const fileAttribute = await fs.promises.stat(dirname);
    const name = path.basename(dirname);
    const ext = path.extname(dirname);
    const isFile = fileAttribute.isFile();
    const size = fileAttribute.isFile() ? fileAttribute.size : await this.getChildrenFilesSize(dirname);
    const createTime = new Date(fileAttribute.birthtime).toLocaleString();
    const updateTime = new Date(fileAttribute.mtime).toLocaleString();
    return new File(dirname, name, ext, isFile, size, createTime, updateTime);
  }

  static async getChildrenFilesSize(dirname) {
    let dirSize = 0;
    const childrenFiles = await fs.promises.readdir(dirname);
    for (const child of childrenFiles) {
      const childPath = path.resolve(dirname, child);
      const childFileAttribute = await fs.promises.stat(childPath);
      if (childFileAttribute.isFile()) {
        dirSize = dirSize + childFileAttribute.size;
      } else {
        dirSize += await File.getChildrenFilesSize(childPath);
      }
    }
    return dirSize;
  }
}

async function readDir(dirname) {
  const fileProperty = await File.getFile(dirname);
  return await fileProperty.getChildren();
}

async function test() {
  const dirname = path.resolve(__dirname, './myFiles');
  const files = await readDir(dirname);
  console.log(files);
  const filesDir = await files[4].getChildren();
  console.log(filesDir);
  console.log(await filesDir[0].getContent());
}
test();

// async function getSize() {
//   const dirname = path.resolve(__dirname, './myFiles');
//   const dirSize = await File.getChildrenFilesSize(dirname);
//   console.log(dirSize);
// }
// getSize();