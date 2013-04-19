var games = [
	{ "id" : "0", "title" : "Bioshock Infinite", "platform" : "XBOX 360", "releaseYear" : "2013" },
	{ "id" : "1", "title" : "Tomb Raider", "platform" : "XBOX 360", "releaseYear" : "2013" },
	{ "id" : "2", "title" : "Guacamelee", "platform" : "PS3", "releaseYear" : "2013" },
	{ "id" : "3", "title" : "God of War - Ascension", "platform" : "PS3", "releaseYear" : "2013" }
];


exports.getAllGames = function(req, res) {
	res.writeHead(200, 'OK', {'content-type': 'application/json'});
	res.write(JSON.stringify(games));
	res.end();
}

exports.addGame = function(req, res) {
	var passedGame = req.body;
	
	games.push(passedGame);
	
	console.log("New All games:\n" + JSON.stringify(games));

	res.writeHead(201, 'Created', {'content-type': 'application/json'});
	res.end();
}