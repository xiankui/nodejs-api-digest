/**
 * child_process.exec()
 * 衍生一个 shell，然后在 shell 中执行 command，且缓冲任何产生的输出。
 */
const exec = require('child_process').exec;

exec('ls -lh /usr', (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error ${error}`)
		return
	}

	console.log(`stdout: ${stdout}`)
	console.log(`stderr: ${stderr}`)
})