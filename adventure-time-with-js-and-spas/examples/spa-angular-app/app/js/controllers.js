var sampleAppControllers = angular.module('sampleAppControllers', []);

sampleAppControllers.controller('ShowController', ['$scope',
	function ShowController($scope) {
		//we're not doing anything with the Show View in this app
	}]);

//Set up our CharacterController
//Notice the setup similar to what we did in app.js for sampleAngularApp
//the array here sets up our dependency injection for usage in our controller 
sampleAppControllers.controller('CharacterController', ['$scope', '$rootScope', '$filter',
	'$routeParams', '$location', '$route',
	function CharacterController($scope, $rootScope, $filter, $routeParams, $location, $route) {
		$scope.characters = [
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
			}];

		//$routeParams contains anything after /char/*
		if($routeParams.name) {
			var passedName = $routeParams.name;

			//retrieve our single character
			$scope.character = $filter('getByName')($scope.characters, passedName);
		}

		if($rootScope.selectedCharacter) {
			$scope.character = $filter('getByName')($scope.characters, $rootScope.selectedCharacter);
		}

		//the change event of our dropdown
		$scope.selectChange = function() {
			$rootScope.selectedCharacter = $scope.character.name;
			$location.path('/chars/' + $scope.character.name.toLowerCase());
		}

		//needed to 'silently update' URL - any changes to URL will trigger route
		var lastRoute = $route.current;
		$scope.$on('$locationChangeSuccess', function(event) {
			
			//ensure that we're only 'silently updating' on the Character View
			if($route.current.$$route.controller === 'CharacterController') {
				$route.current = lastRoute;
			}
		});
	}]);