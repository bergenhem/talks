//If our app variable doesn't exist yet, define it as an empty object
var app = app || {};

var CharacterList = Backbone.Collection.extend({
	//reference our model
	model: app.Character,
	initialize: function() {
		this.createCharacters(this);
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
	getIdByName: function(name) {
		switch(name){
			case 'finn':
				return 0;
			case 'jake':
				return 1;
			case 'bmo':
				return 2;
			default:
				return 0;
		}
	},
	getNameById: function(id) {
		switch(id) {
			case 0:
				return 'finn';
			case 1:
				return 'jake';
			case 2:
				return 'bmo';
			default:
				return 'finn';
		}
	}
});

app.Characters = new CharacterList();