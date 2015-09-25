app.controller('TeamController', ['$scope', '$routeParams', '$location', '$http', 'teams', 'teamRoster', function($scope, $routeParams, $location, $http, teams, teamRoster) {
	
	checkTeamIDExists();

	teamRoster.getTeamRoster((function(data) {
		$scope.teamRoster = data;
		updatePlayersImageUrl($scope.teamRoster.goalie);
		updatePlayersImageUrl($scope.teamRoster.forwards);
		updatePlayersImageUrl($scope.teamRoster.defensemen);
	
	}));



	function checkTeamIDExists() {
		$scope.teamID = $routeParams.teamID;
		teams.then(function(data) {	
		var teams = data.data;
		var teamIDIsValid = false;
		for(var i = 0; i < teams.length; i++) {
			if($scope.teamID === teams[i].teamID) {
				teamIDIsValid = true;
				$scope.selectedTeam = teams[i];
				break; 
			}
		}
		if(!teamIDIsValid) {
			$location.path('/');
		}
		});	
	}
	
	// Changes linked image to use images from NHL site with transperant
	// backgrounds
	function updatePlayersImageUrl(position) {
		position.forEach(function(element, index) {
			var newImageUrl = "http://cdn.nhle.com/photos/mugs-silo-stats/" + element.id + ".png";
			element.imageUrl = newImageUrl;
		});
	}

}]);