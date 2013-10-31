//If our app variable doesn't exist yet, define it as an empty object
var app = app || {};

app.CharsView = Backbone.View.extend({
	el: $('#content'),
	template: _.template($('#character-template').html()),
	initialize: function() {
		this.render();
	},
	//We want to take our template and actually render it in the view
	render: function() {
		//$el is the jQuery selector of 'el' and allows use to use .html()
		//also we want to pass in the model to bind our view
		//this.$el.html(this.template(this.model.toJSON()));

		this.$el.html(this.template());

		//best practice is to return the view object
		return this;
	}
});