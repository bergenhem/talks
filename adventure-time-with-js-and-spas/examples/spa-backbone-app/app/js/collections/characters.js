//If our app variable doesn't exist yet, define it as an empty object
var app = app || {};

var CharacterList = Backbone.Collection.extend({

	//reference our model
	model: app.Character
});

app.Characters = new CharacterList();