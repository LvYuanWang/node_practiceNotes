// nextTick 以及 Promise 的执行顺序
// 微任务队列: nextTick > Promise > setImmediate
// 每次执行一个宏任务之后，都会执行微任务队列(nextTick)中的所有任务，然后再执行下一个宏任务

setImmediate(() => {
  console.log('6');
})

process.nextTick(() => {
  console.log('2');
  process.nextTick(() => {
    console.log('3')
  });
})

console.log('1');

Promise.resolve().then(() => {
  console.log('4');
  process.nextTick(() => {
    console.log('5');
  })
})

// 1 2 3 4 5 6