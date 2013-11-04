//If our app variable doesn't exist yet, define it as an empty object
var app = app || {};

//Individual Character View
app.CharView = Backbone.View.extend({
	//el: $('#characterSection'),
	template: _.template($('#character-template').html()),
	//We want to take our template and actually render it in the view
	render: function() {

		//Take our element and set the HTML to that of the template afer it is data bound to our 
		//JSON serialized model (Character)
		this.$el.html(this.template(this.model.toJSON()));

		//best practice is to return the view object
		return this;
	}
});