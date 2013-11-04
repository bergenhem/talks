var express = require('express');

var serverApp = express();

serverApp.configure(function () {
	serverApp.use(express.static(__dirname + '/app'));
	serverApp.engine('.html', require('ejs').__express);
	serverApp.set('view engine', 'html');
});

serverApp.get('/', function(req, res) {
	res.render('index');
})

serverApp.listen(3000);
console.log('Listening on port 3000...');