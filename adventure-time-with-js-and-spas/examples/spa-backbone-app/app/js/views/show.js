//If our app variable doesn't exist yet, define it as an empty object
var app = app || {};

//Overall Character View
app.ShowView = Backbone.View.extend({
	el: $('#content'),
	template: _.template($('#shows-template').html()),
	render: function() {
		//$el is the jQuery selector of 'el' and allows use to use .html()
		//allso we want to pass in the model to bind our view
		this.$el.html(this.template);

		//best practice is to return the view object
		return this;
	}
});