var sampleAppControllers = angular.module('sampleAppControllers', []);

sampleAppControllers.controller('ShowController', ['$scope',
	function ShowController($scope) {
		//TODO: IMPLEMENT
	}]);

sampleAppControllers.controller('CharacterController', ['$scope', '$rootScope', '$routeParams',
	function CharacterController($scope, $rootScope, $routeParams) {
		if($routeParams.name) {
			$scope.name = $routeParams.name.toLowerCase();
		}
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
		$scope.character = null;

		$scope.selectChange = function() {
			$rootScope.selectedCharacter = $scope.character.id;
		}
	}]);