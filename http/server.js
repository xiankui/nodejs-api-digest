/**
 * 搭建http服务器，接受get/post请求
 */
const http = require('http')
const url = require('url')
const querystring = require('querystring')

function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");

	if (pathname === '/') {
		onGetRequest(request, response)
	}	else if (pathname === '/upload') {
		onPostRequest(request, response)
	} else {
		response.end('haha, welcome to xspace')
	}
}

// get请求；所有浏览器地址请求都是get请求
function onGetRequest(request, response) {
	let qs = url.parse(request.url).query;

	response.writeHead(200, {'Content-Type': 'text/plain'})
	response.write(`querystring ${qs} \n`)
	response.end('http get')
}

// post请求；典型的如表单提交、图片上传等都是post请求
function onPostRequest(request, response) {
	let postData = '';

	request.on('data', chunk => {
		postData += chunk
	})

	request.on('end', () => {
		response.writeHead(200, {'Content-Type': 'text/plain'})
		response.write(`post data ${postData} \n`)
		response.end('http post')
	})
}

const server = http.createServer(onRequest);

server.listen('3000', () => {
	console.log('server running on port 3000')
})