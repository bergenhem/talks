var express 			= require('express'),
	gamesController 	= require('./controllers/games');

var app = express();

//configure the server
app.configure(function () {
	app.use(express.bodyParser());

	//define a place for our CSS and JS files
	app.use(express.static(__dirname + '/public'));

	//register ejs as .html so we can have .html pages
	app.engine('.html', require('ejs').__express);

	//define our views folder
	app.set('views', __dirname + '/views');

	//set our view engine to HTML
	app.set('view engine', 'html');
});

/*app.get('/', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello FITC Toronto!\n');
});*/

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/request', function(req, res) {
	console.log('We got a request!');
});
app.get('/allgames', gamesController.getAllGames);
app.post('/insertgame', gamesController.addGame);

app.listen(1337);
console.log('Listening on port 1337...');

//curl -i GET -H "application/json" http://localhost:1337/allgames

//curl -i -X POST -H 'content-type: application/json' http://localhost:1337/insertgame -d '{ "id": "4", "title": "Dead Space 3", "platform": "XBOX 360" }'