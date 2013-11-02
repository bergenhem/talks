//set up our application variable.
//We pass in the ngRoute and sampleAppControllers as dependencies here
var sampleAngularApp = angular.module('sampleAngularApp', [
	'ngRoute',
	'sampleAppControllers'
	]);

//configure our various routes
//.when('route', partialViewUrl, controllerName)
sampleAngularApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/', { templateUrl: 'partials/show.html', controller: 'ShowController' });
		$routeProvider.when('/chars', { templateUrl: 'partials/characters.html', controller: 'CharacterController' });
		$routeProvider.when('/chars/:name', { templateUrl: 'partials/characters.html', controller: 'CharacterController' });
		$routeProvider.otherwise( { redirectTo: '/' });
	}]);

//a custom filter to retrieve a singly entry from our data array
sampleAngularApp.filter('getByName', function() {
	return function(input, name) {
		for(var i = 0; i < input.length; i++) {
			if(input[i].name.toLowerCase() == name.toLowerCase()) {
				return input[i];
			}
		}
		return null;
	}
});