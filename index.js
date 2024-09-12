/** 模块的查找 **/
/* 绝对路径 */
// require("D:\\Duyi frontend\\node\\node-practiceNotes\\a.js");

/* 相对路径  ./  或 ../ (最终还是会转换成绝对路径) */
// require("./a");

/* 相对路径 
1. 检查是否是内置模块，如：fs、path等
2. 检查当前目录中的node_modules
3. 检查上级目录中的node_modules
4. 转换为绝对路径
5. 加载模块
*/
// require('test_abc');

/* 根据js、json、node、mjs顺序自动补全后缀名字 */
// require('./b');

/* 会自动找src下面的index.js文件 */
// require('./src');

// require('test_def');

// require('./src')

// console.log(require.resolve('./src'));

/*
function require(modulePath) {
  // 1. 将modulePath转换为绝对路径: D:\Duyi frontend\node\node-practiceNotes\myModule.js
  // 2. 判断是否该模块已有缓存
  if(require.cache["D:\\Duyi frontend\\node\\node-practiceNotes\\myModule.js"]) {
    return require.cache["D:\\Duyi frontend\\node\\node-practiceNotes\\myModule.js"].result;
  }

  // 3. 读取文件内容
  // 4. 包裹到一个函数中
  function __temp(module, exports, require, __dirname, __filename) {
    console.log("当前模块路径: ", __dirname);
    console.log("当前模块文件: ", __filename);
    this.m = 5;
    exports.c = 6;
    module.exports = {
      a: 1,
      b: 2
    }
  }

  // 5. 创建module对象
  module.exports = {};
  let exports = module.exports;
  __temp.call(module.exports, module, exports, require , module.path, module.filename)

  return module.exports;
}
*/

const result = require('./myModule');
console.log(result);