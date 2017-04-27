/**
 * child_process.fork()
 * 专门用于衍生新的 Node.js 进程
 */
const fork = require('child_process').fork;

// the same as child_process.spawn('node', ['./index.js'])
fork('./index.js')