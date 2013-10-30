//If our app variable doesn't exist yet, define it as an empty object
var app = app || {};

//Define our Character Model

app.Character = Backbone.Model.extend({

	//Set up our models so we always have these fields
	defaults: {
		name: '',
		species: '',
		occupation: '',
		description: '',
		linkUrl: ''
	}
});