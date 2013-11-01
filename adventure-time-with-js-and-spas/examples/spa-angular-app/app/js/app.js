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