const { EventEmitter } = require('events');

const myEvent = new EventEmitter();

myEvent.on('info', (name, age) => {
  console.log(`My name is ${name} and I am ${age} years old.`);
})
myEvent.on('info', (name, age) => {
  console.log(`name: ${name} --- age: ${age}`);
})

myEvent.emit('info', 'John', 20); // emit: 触发事件, 传递参数, 如果有多个事件则按顺序执行
myEvent.emit('info', 'Joker', 19); // emit: 触发事件, 传递参数, 如果有多个事件则按顺序执行