const { log } = require("console");

console.log("当前模块路径: ", __dirname);
console.log("当前模块文件: ", __filename);

// console.log(this === module.exports); // true
// console.log(this === exports); // true
// console.log(exports === module.exports); // true
// console.log(__dirname === module.path); // true
// console.log(__filename === module.filename); // true

this.m = 5;
module.exports = {
  a: 1,
  b: 2
}
exports.c = 6;

console.log(this);  // { m: 5, c: 6 }
console.log(exports); // { m: 5, c: 6 }
console.log(module.exports);  // { a: 1, b: 2 }

// console.log(this === exports); // true
// console.log(this === module.exports); // false
// console.log(exports === module.exports); // false