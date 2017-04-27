/**
 * nodejs是基于事件的回调；事件机制是其核心
 * 所有能触发事件的对象都是 EventEmitter 类的实例；如 net.Server  http.createServer  fs.readFile ...
 * .on() 方法用于注册监听器
 * .once() 方法用于注册监听器一次
 * .emit() 方法用于触发事件
 */
const EventEmitter = require('events')

const myEmitter = new EventEmitter()

var count = 0;

myEmitter.on('event', () => {
	console.log(`event emit ${++count}`)
})

myEmitter.emit('event')
myEmitter.emit('event')


// 作为最佳实践，应该始终为 'error' 事件注册监听器。
myEmitter.on('error', (err) => {
  console.log('有错误');
});
// myEmitter.emit('error', new Error('whoops!'));