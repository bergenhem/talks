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
		if(this.charView.selectedView){
			this.renderCharacterCheck();
			this.charView.renderViewByModelId(this.charView.selectedView);
		}
		else {
			this.charView.render();
		}
	},
	getCharacter: function(name) {
		var id = app.Characters.getIdByName(name);
		this.renderCharacterCheck();
		this.charView.renderViewByModelId(id);
	},
	defaultRoute: function(actions) {
		this.navigate('#/', { trigger: false });
		
		this.showView.render();
	},
	renderCharacterCheck: function() {
		if(this.charView.$el.find('#character-select').length === 0){
			this.charView.render();
		}
	}
});

//instantiate our router
var app_router = new Workspace();
app.Router = app_router;

//start tracking URL
Backbone.history.start();