// 文件名后缀为 .mjs 的文件，Node.js 会将其视为 ES Modules 文件，而不是 CommonJS 文件
import * as obj from './a.mjs';

console.log(obj); // { c: 3, default: 5 }

import obj2, { a, b } from './b.js';

console.log(obj2, a, b);

import('./a.mjs').then(obj => console.log(obj));