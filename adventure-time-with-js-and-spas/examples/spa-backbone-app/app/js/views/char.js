//If our app variable doesn't exist yet, define it as an empty object
var app = app || {};

//Individual Character View
app.CharView = Backbone.View.extend({
	//el: $('#characterSection'),
	template: _.template($('#character-template').html()),
	//We want to take our template and actually render it in the view
	render: function() {
		//$el is the jQuery selector of 'el' and allows use to use .html()
		//also we want to pass in the model to bind our view
		//this.$el.html(this.template(this.model.toJSON()));
		this.$el.html(this.template(this.model.toJSON()));

		//best practice is to return the view object
		return this;
	}
});