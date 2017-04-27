/**
 * 解析ip地址
 */
const dns = require('dns')

dns.lookup('nodejs.cn', (err, address, family) => {
	if (err) {
		console.error(err)
		return
	}

	console.log(`nodejs.cn ip address ${address} family ${family}`)
})