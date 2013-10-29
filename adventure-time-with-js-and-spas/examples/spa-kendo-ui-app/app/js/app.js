window.KendoApp = (function($){
	var _kendoApp = {};

		_kendoApp.startApp = function() {

			var myLayout = new kendo.Layout('kendo-layout-template'); //create our layout

			var myRouter = new kendo.Router(); //initialize our router

			//Views
			var showView = new kendo.View('show-view'); 
			var charView = new kendo.View('char-view');

			//Routes
			myRouter.route('/', function() {
				myLayout.showIn('#content', showView);
			});
			myRouter.route('/chars', function() {
				myLayout.showIn('#content', charView);
			});

			myRouter.start();
			myLayout.render('#app');
		}

		return _kendoApp;
})(jQuery);