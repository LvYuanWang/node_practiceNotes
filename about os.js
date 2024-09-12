/** OS **/
/* os.EOL */
const os = require('os');
// console.log(os.EOL); // 在 POSIX 上是 \n，Windows 上是 \r\n

/* os.arch() */
// console.log(os.arch()); // x64: 返回操作系统 CPU 架构

/* os.cups() */
// console.log(os.cpus()); // 返回一个对象数组，包含每个逻辑 CPU 内核的信息

/* os.freemem() */
// console.log(os.freemem() / 1024 ** 3); // 返回系统空闲内存量，单位是字节, 转换成 GB: os.freemem() / 1024 / 1024 / 1024

/* os.homedir() */
// console.log(os.homedir()); // 返回当前用户的 home 目录

/* os.hostname() */
// console.log(os.hostname()); // 返回操作系统的主机名

/* os.tmpdir() */
console.log(os.tmpdir()); // 返回操作系统的默认临时文件目录