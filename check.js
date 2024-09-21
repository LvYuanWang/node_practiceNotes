// check: 用于执行setImmediate的回调函数

// function fn() {
//   console.log('method fn');
// }

// function fn1() {
//   console.log('method fn1');
// }

// setImmediate(fn);

// 相当于
// setTimeout(fn1, 0)

let i = 0;
console.time();
function fn3() {
  i++;
  if (i < 1000) {
    // setTimeout(fn3, 0); // 16.294s
    setImmediate(fn3); // 3.677ms
    // 原因: setTimeout会将回调函数放入timers阶段，而setImmediate会将回调函数放入check阶段
    // timers阶段会在poll阶段之前执行，所以setTimeout会等待poll阶段执行完毕后才会执行回调函数
    // check阶段会在poll阶段之后执行，所以setImmediate会在poll阶段执行完毕后立即执行回调函数
  } else {
    console.timeEnd();
  }
}
fn3();