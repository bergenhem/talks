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
	characterSelected: function() {
		var selectedID = this.$('#character-select').val();

		var selectedModel = app.Characters.get(selectedID);

		var selectedView = new app.CharView({ model: selectedModel, el: $('#characterSection') });
		selectedView.render();
	},
	renderViewByModelId: function(id) {

	},
	createCharacters: function(charsList) {
		var finn = new app.Character({
			id: 0,
			name: "Finn",
			species: "Human",
			occupation: "Hero",
			description: "Finn (full title: Finn the Human, known as Finn Mertens in the Farmworld timeline and formerly as Pen in the original short) is the main protagonist of the series Adventure Time.",
			linkUrl: "http://adventuretime.wikia.com/wiki/Finn"

		});
		var jake = new app.Character({
			id: 1,
			name: "Jake",
			species: "Dog",
			occupation: "Adventurer",
			description: "Jake (full title: Jake the Dog), the deuteragonist of Adventure Time, is a magical dog and Finn's constant companion, best friend, and adoptive brother. Jake has Stretchy Powers (which he has had since he was a puppy), which allow him to stretch and manipulate his body, coming in handy on innumerable occasions throughout his and Finn's adventures.",
			linkUrl: "http://adventuretime.wikia.com/wiki/Jake"
		});
		var bmo = new app.Character({
			id: 2,
			name: "BMO",
			species: "MO",
			occupation: "Video Game System",
			description: "BMO (phonetically spelled Beemo) is Finn and Jake's living video game console, portable electrical outlet, music player, roommate, camera, alarm clock, toaster, flashlight, strobe light, skateboarder, friend, soccer player, video editor, and video player.",
			linkUrl: "http://adventuretime.wikia.com/wiki/BMO"
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