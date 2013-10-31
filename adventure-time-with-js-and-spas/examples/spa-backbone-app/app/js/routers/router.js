var Workspace = Backbone.Router.extend({
	routes : {
		'' : 'show',
		'chars/' : 'getCharacters',
		'chars/:name': 'getCharacter',
		'*actions' : 'defaultRoute' //http://example.com/#whatever
	},
	showView: new app.ShowView(),
	charView: new app.CharsView({ collection: app.Characters }),
	show: function() {
		this.showView.render();
	},
	getCharacters: function() {
		this.charView.render();
	},
	getCharacter: function(name) {
		this.charView.render();
	},
	defaultRoute: function(actions) {
		this.navigate('#/', { trigger: false });
		
		this.showView.render();
	}
});

//instantiate our router
var app_router = new Workspace();
app.Router = app_router;

//start tracking URL
Backbone.history.start();