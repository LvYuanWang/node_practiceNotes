const fs = require('fs');

fs.readFile('./interviewProblem.js', () => {
  setTimeout(() => { console.log('setTimeout') }, 0);
  setImmediate(() => { console.log('setImmediate') });
})