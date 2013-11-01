var sampleAngularApp = angular.module('sampleAngularApp', [
	'ngRoute',
	'sampleAppControllers'
	]);

sampleAngularApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/', { templateUrl: 'partials/show.html', controller: 'ShowController' });
		$routeProvider.when('/chars', { templateUrl: 'partials/characters.html', controller: 'CharacterController' });
		$routeProvider.when('/chars/:name', { templateUrl: 'partials/characters.html', controller: 'CharacterController' });
		$routeProvider.otherwise( { redirectTo: '/' });
	}]);

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