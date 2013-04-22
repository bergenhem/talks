var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello FITC Toronto!\n');
}).listen(1337, '127.0.0.1');
console.log('Server running on port 1337')