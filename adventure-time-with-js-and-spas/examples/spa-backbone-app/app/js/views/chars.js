//If our app variable doesn't exist yet, define it as an empty object
var app = app || {};

//Overall Character View
app.CharsView = Backbone.View.extend({
	el: $('#content'),
	template: _.template($('#characters-template').html()),
	selectedView: null,
	events: {
		'change #character-select' : 'characterSelected'
	},
	characterSelected: function() {
		this.renderViewByModelId(this.$('#character-select').val());
		app.Router.updateUrl();
	},
	syncSelectElement: function() {
		//remove our placeholder text
		var placeHolder = $('#character-select option[value=""]');
		if(placeHolder) {
			placeHolder.remove();
		}
		$('#character-select option[value="' + this.selectedView + '"]').prop('selected', true);
	},
	renderViewByModelId: function(id) {
		this.selectedView = parseInt(id);

		this.syncSelectElement(id);

		//get our model, create a view and assign it said model, then render the model
		var selectedModel = app.Characters.get(id);
		var selectedView = new app.CharView({ model: selectedModel, el: $('#characterSection') });
		selectedView.render();
	},
	render: function() {

		//Take our template, pass in our characters collection, and render the resulting HTML
		this.$el.html(this.template({characters: this.collection}));

		//best practice is to return the view object
		return this;
	}
});