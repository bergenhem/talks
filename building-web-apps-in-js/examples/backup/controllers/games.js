var GameModel = require('../models/gamesModel');

var games = [
	{ "id" : "0", "title" : "Bioshock Infinite", "platform" : "XBOX 360", "releaseYear" : "2013" },
	{ "id" : "1", "title" : "Tomb Raider", "platform" : "XBOX 360", "releaseYear" : "2013" },
	{ "id" : "2", "title" : "Guacamelee", "platform" : "PS3", "releaseYear" : "2013" },
	{ "id" : "3", "title" : "God of War - Ascension", "platform" : "PS3", "releaseYear" : "2013" }
];


exports.getAllGames = function(req, res) {
/*	res.writeHead(200, 'OK', {'content-type': 'application/json'});
	res.write(JSON.stringify(games));
	res.end();*/


	GameModel.find({ }, function(err, foundGames) {
		if(err) {
			console.log('Error in getting all items:\n' + err);
			res.writeHead(404, 'Not Found', {'content-type': 'application/json'});
			res.end();
		}
		else {
			if(foundGames.length == 0) {
				res.writeHead(404, 'Not Found', {'content-type': 'application/json'});
				res.end();
			}
			else {
				res.writeHead(200, 'OK', {'content-type': 'application/json'});
				res.write(JSON.stringify(foundGames));
				res.end();
			}
		}
	});

}

exports.addGame = function(req, res) {
/*	var passedGame = req.body;

	console.log('Passed Item:\n' + JSON.stringify(passedGame));

	games.push(passedGame);
	
	console.log('\nNew All games:\n' + JSON.stringify(games));

	res.writeHead(201, 'Created', {'content-type': 'application/json'});
	res.end();*/

	var sampleDataContext = new GameModel();

	console.log('passedGame:\n' + JSON.stringify(req.body));
	console.log('test:\n' + passedGame.id);

	sampleDataContext.id = passedGame.id;
	sampleDataContext.title = passedGame.title;
	sampleDataContext.platform = passedGame.platform;
	sampleDataContext.releaseYear = sampleDataContext.assignYear();

	sampleDataContext.save(function(err, videoGames) {
		if(err) {
			console.log('Failed to save');
			res.writeHead(500, 'Internal Server Error', {'content-type': 'application/json'});
			res.end();
		}
		else {
			console.log('Add data');
			console.log('Data: \n' + JSON.stringify(sampleDataContext));
			res.writeHead(201, 'Created', {'content-type': 'application/json'});
			res.end();
		}
	});
}