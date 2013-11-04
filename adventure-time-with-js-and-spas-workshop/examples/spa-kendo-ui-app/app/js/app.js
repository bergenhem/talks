//Let's keep the global scope clean :D
window.KendoApp = (function(){
	var _kendoApp = {};

		_kendoApp.startApp = function() {

			//create our layout
			var myLayout = new kendo.Layout('kendo-layout-template'); 

			//render in our placeholder element
			myLayout.render('#app');

			//initialize our router
			var myRouter = new kendo.Router(); 

			//just our sample data
			var characterList = new kendo.data.DataSource({
				data: [
				{
					id: 0,
					name: "Finn",
					species: "Human",
					occupation: "Hero",
					description: "Finn (full title: Finn the Human, known as Finn Mertens in the Farmworld timeline and formerly as Pen in the original short) is the main protagonist of the series Adventure Time.",
					linkUrl: "http://adventuretime.wikia.com/wiki/Finn"
				},
				{
					id: 1,
					name: "Jake",
					species: "Dog",
					occupation: "Adventurer",
					description: "Jake (full title: Jake the Dog), the deuteragonist of Adventure Time, is a magical dog and Finn's constant companion, best friend, and adoptive brother. Jake has Stretchy Powers (which he has had since he was a puppy), which allow him to stretch and manipulate his body, coming in handy on innumerable occasions throughout his and Finn's adventures.",
					linkUrl: "http://adventuretime.wikia.com/wiki/Jake"
				},
				{
					id: 2,
					name: "BMO",
					species: "MO",
					occupation: "Video Game System",
					description: "BMO (phonetically spelled Beemo) is Finn and Jake's living video game console, portable electrical outlet, music player, roommate, camera, alarm clock, toaster, flashlight, strobe light, skateboarder, friend, soccer player, video editor, and video player.",
					linkUrl: "http://adventuretime.wikia.com/wiki/BMO"
				}],
				schema: {
					model: { id: "id" }
				}
			});

			//hydrate our Kendo UI Data Source
			characterList.read(); 

			//create our ViewModel
			var charModel = kendo.observable({
				name: null,
				species: null,
				occupation: null,
				description: null,
				linkUrl: null,
				comboboxValue: null,
				charList: characterList,
				showById: function(id) {
					var character = this.charList.get(id);
					this.showCharacter(character);
				},
				showCharacter: function(character) {
					this.set('name', character.get('name'));
					this.set('species', character.get('species'));
					this.set('occupation', character.get('occupation'));
					this.set('description', character.get('description'));
					this.set('linkUrl', character.get('linkUrl'));
					this.set('comboboxValue', character.get('id'));
				},
				getIdByName: function(name) {
					switch(name) {
						case 'finn':
							return 0;
						case 'jake':
							return 1;
						case 'bmo':
							return 2;
						default:
							return 0;
					}
				},
				getNameById: function(id) {
					console.log(id);
					switch(id) {
						case '0':
							return 'finn';
						case '1':
							return 'jake';
						case '2':
							return 'bmo';
						default:
							return 'finn';
					}
				},
				comboChange: function(e){
					var selectedValue = e.sender.value();
					this.showById(selectedValue);

					var name = this.getNameById(selectedValue);
					
					//update URL but DO NOT navigate
					myRouter.navigate('/chars/' + name, false);
				}
			});

			//Views
			var showView = new kendo.View('show-view'); 
			var charView = new kendo.View('char-view', {
				model: charModel
			});

			//Routes
			myRouter.route('/', function() {
				myLayout.showIn('#content', showView);
			});

			myRouter.route('/chars/', function() {

				//access our view's model
				var charModel = charView.model;

				myLayout.showIn('#content', charView);

				//if our dropdown has a value we want to update our URL
				if(charModel.name !== null) {
					var lowerCaseName = charModel.name.toLowerCase();

					//do NOT actually navigate/render /chars/:name
					myRouter.navigate('/chars/' + lowerCaseName, false);
				}
			});

			myRouter.route('/chars/:name', function(name) {
				var myId = charModel.getIdByName(name);
				
				charModel.showById(myId);
				
				myLayout.showIn('#content', charView);
			});

			//start the actual router
			myRouter.start();
		}

		return _kendoApp;
})();