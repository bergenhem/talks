var Workspace = Backbone.Router.extend({
	routes : {
		'' : 'getShow',
		'chars/:name': 'getCharacter',
		'chars/' : 'getChars',
		'*actions' : 'defaultRoute' //http://example.com/#whatever
	}
});

var app_router = new Workspace();

app_router.on('route:getCharacter', function(name) {
	console.log('/chars/' + name);
});

app_router.on('route:getChars', function() {
	console.log('/chars/');
	this.charsView = new app.CharsView();
	this.charsView.render();
});

app_router.on('route:getShow', function() {
	console.log('/#/')
	this.showView = new app.ShowView();
	this.showView.render();
});

app_router.on('route:defaultRoute', function(actions) {
	console.log('/' + actions);
});

//start our router
Backbone.history.start();