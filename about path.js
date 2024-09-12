/** path **/
const path = require('path');
/* path.basename() */
// const basename = path.basename(__filename, '.js');  // 获取参数的文件名，第二个参数是后缀名
// console.log(basename); // index

/* path.sep */
// console.log(path.sep); // \  // 当前系统的路径分隔符

/* path.delimiter */
// console.log(process.env.path.split(path.delimiter)); // 获取环境变量的路径分隔符

/* path.dirname */
// console.log(path.dirname(__filename)); // 获取文件的目录名

/* path.extname */
// console.log(path.extname(__filename)); // 获取文件的后缀名

/* path.join() */
// const basePath = "node_modules/node-practiceNotes";
// const fullName = path.join(basePath, '../', 'node', 'join', 'index.js');  // 生成路径
// console.log(fullName); // node_modules\node\join\index.js

/* path.relative() */
// const relative = path.relative('/data/relative/test/aaa', '/data/relative/impl/bbb'); // 获取相对路径
// console.log(relative); // ..\..\impl\bbb

/* path.resolve() */
const resolveCurrent = path.resolve(__dirname, './index.js'); // 获取相对路径
console.log(resolveCurrent);
const resolveCommand = path.resolve('./index.js'); // 获取相对当前命令行的路径
console.log(resolveCommand);
