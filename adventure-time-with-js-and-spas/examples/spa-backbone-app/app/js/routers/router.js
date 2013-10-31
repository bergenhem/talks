var Workspace = Backbone.Router.extend({
	routes : {
		'' : 'show', //http://www.example.com/
		'chars/' : 'getCharacters',
		'chars/:name': 'getCharacter', //http://www.example.com/finn
		'*actions' : 'defaultRoute' //http://www.example.com/#whatever
	},
	showView: new app.ShowView(),
	charView: new app.CharsView({ collection: app.Characters }),
	show: function() {
		this.showView.render();
	},
	getCharacters: function() {
		//check if we have a previous selected character
		if(this.charView.selectedView !== null) {
			this.renderCharacterCheck();
			this.charView.renderViewByModelId(this.charView.selectedView);
			this.updateUrl();
		}
		else {
			this.charView.render();
		}
	},
	//render the appropriate character page
	getCharacter: function(name) {
		name = name.toLowerCase();
		this.renderCharacterCheck();
		this.charView.renderViewByModelId(app.Characters.getIdByName(name));
	},
	defaultRoute: function(actions) {
		this.navigate('#/', { trigger: false });
		
		this.showView.render();
	},
	//just change the actual URL - don't force routing to happen again
	updateUrl: function() {
		this.navigate('#/chars/' + app.Characters.getNameById(this.charView.selectedView), { trigger: false });
	},
	//just a quick check to see if a character has been previously rendered
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