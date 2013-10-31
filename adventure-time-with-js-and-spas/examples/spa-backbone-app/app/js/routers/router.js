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
		if(this.charView.selectedView !== null) {
			this.renderCharacterCheck();
			this.charView.renderViewByModelId(this.charView.selectedView);
			this.updateUrl();
		}
		else {
			this.charView.render();
		}
	},
	getCharacter: function(name) {
		this.renderCharacterCheck();
		this.charView.renderViewByModelId(app.Characters.getIdByName(name));
	},
	defaultRoute: function(actions) {
		this.navigate('#/', { trigger: false });
		
		this.showView.render();
	},
	updateUrl: function() {
		console.log(this.charView.selectedView);
		console.log(app.Characters.getNameById(this.charView.selectedView));
		this.navigate('#/chars/' + app.Characters.getNameById(this.charView.selectedView), { trigger: false });
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