//If our app variable doesn't exist yet, define it as an empty object
var app = app || {};

//Overall Character View
app.AppView = Backbone.View.extend({
	el: '#adventureapp'
});