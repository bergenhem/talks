//If our app variable doesn't exist yet, define it as an empty object
var app = app || {};

//Overall Character View
app.CharsView = Backbone.View.extend({
	el: $('#content'),
	template: _.template($('#characters-template').html()),
	initialize: function() {
		this.characters = app.Characters;
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
	render: function() {

		//Take our template, pass in our characters collection, and render the resulting HTML
		this.$el.html(this.template({characters: this.characters}));

		//best practice is to return the view object
		return this;
	}
});