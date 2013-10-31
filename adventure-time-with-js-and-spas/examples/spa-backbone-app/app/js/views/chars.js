//If our app variable doesn't exist yet, define it as an empty object
var app = app || {};

//Overall Character View
app.CharsView = Backbone.View.extend({
	el: $('#content'),
	template: _.template($('#characters-template').html()),
	initialize: function() {
		var charsList = app.Characters;
		this.createCharacters(charsList);
		this.characters = charsList;
	},
	events: {
		'change #character-select' : 'characterSelected'
	},
	characterSelected: function(character) {
		console.log(this.$el);
		console.log(this.$('#character-select').val());
	},
	createCharacters: function(charsList) {
		var finn = new app.Character({
			name: 'Finn'
		});
		var jake = new app.Character({
			name: 'Jake'
		});
		var bmo = new app.Character({
			name: 'BMO'
		});
		charsList.add([finn, jake, bmo]);
	},
	render: function() {

		//Take our template, pass in our characters collection, and render the resulting HTML
		this.$el.html(this.template({characters: this.characters}));

		//best practice is to return the view object
		return this;
	}
});