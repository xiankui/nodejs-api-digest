/**
 * Buffer
 * Nodejs内置类
 * 处理二进制数据流
 * 默认为 utf8 编码
 */
var buf = Buffer.from('hello world', 'ascii')

console.log('Buffer.from hello world ascii', buf)

console.log('buf toString hex', buf.toString('hex'))

console.log('buf toString base64', buf.toString('base64'))

console.log('buf toString', buf.toString())  // utf8


var _buf = Buffer.from('aGVsbG8gd29ybGQ=', 'base64')


console.log('hello world base64 get buffer', _buf)

console.log('_buf toString', _buf.toString())

console.log(buf === _buf)  // false like {} == {}