/* setTimeout */
// const timer = setTimeout(() => {
//   console.log('setTimeout');
// }, 0);
// console.log(timer); // 在node环境中为 object 类型      在浏览器环境中为 number 类型

/* setImmediate */
// setImmediate 相当于 setTimeout(() => { }, 0);
// const immediate = setImmediate(() => {
//   console.log('setImmediate');
// });

/* __dirname */
// console.log(__dirname); // 当前文件所在的目录

/* __filename */
// console.log(__filename); // 当前文件的绝对路径

/* buffer */
// const buffer = Buffer.from('abcdefg', "utf-8");
// console.log(buffer);

/* process */
// console.log("当前命令行: ", process.cwd()); // 当前命令行所在的目录

// setTimeout(() => {
//   console.log('abc');
// }, 15000)
// process.exit(); // 退出当前进程

// console.log(process.argv); // 获取命令行参数

// console.log(process.platform); // 获取当前系统平台

// process.kill(1234); // 杀死进程, 参数为进程id

console.log(process.env); // 获取环境变量