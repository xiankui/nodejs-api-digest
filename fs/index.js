/**
 * 文件（夹）操作
 */
const fs = require('fs')

fs.readFile('./blob.json', (err, data) => {
	if (err) {
		console.error(err)
		return
	}

	data = JSON.parse(data)

	console.log(`fs readFile blob.json ${data.blob}`)
})