var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/games');

var videoGameSchema = mongoose.Schema({
	id: { type: Number },
	title: { type: String, default: 'None' },
	platform: { type: String, enum: ['PS3', 'XBOX 360'] },
	releaseYear: { type: Number }
});

videoGameSchema.methods.assignYear = function () {
	this.releaseYear = 2013;
}

module.exports = mongoose.model('GamesModel', videoGameSchema, 'gamesModel');