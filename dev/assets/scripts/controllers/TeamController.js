app.controller('TeamController', ['$scope', '$location', 'teams', 'teamRoster', 
	function($scope, $location, teams, teamRoster) {

	$scope.teamName = "";

	$scope.selectedGoalieIndex = undefined;
	$scope.selectedForwardIndex = undefined;
	$scope.selectedDefensemanIndex = undefined;

 	$scope.goalieCardClicked = function ($index) {
 		$scope.selectedForwardIndex = undefined;
		$scope.selectedDefensemanIndex = undefined;
		if ($scope.selectedGoalieIndex === $index) {
			$scope.selectedGoalieIndex = undefined;
		} else {
			$scope.selectedGoalieIndex = $index;
		}
  	};

  	$scope.forwardCardClicked = function ($index) {
 		$scope.selectedGoalieIndex = undefined;
		$scope.selectedDefensemanIndex = undefined;
		if ($scope.selectedForwardIndex === $index) {
			$scope.selectedForwardIndex = undefined;
		} else {
			$scope.selectedForwardIndex = $index;
		}
  	};

  	$scope.defensemenCardClicked = function ($index) {
 		$scope.selectedForwardIndex = undefined;
		$scope.selectedGoalieIndex = undefined;
		if ($scope.selectedDefensemanIndex === $index) {
			$scope.selectedDefensemanIndex = undefined;
		} else {
			$scope.selectedDefensemanIndex = $index;
		}
  	};

	setTeamName();

	function setTeamName() {
		teams.then(function(teamData) {
			for(var team of teamData.data) {
				if(teamRoster.teamID() === team.teamID) {
					$scope.teamName = team.name;
					break;
				}
			}
		});
	}

	teamRoster.fetchTeamRoster()
	.then(function(data) {
		$scope.teamRoster = data.data;
		updatePlayers($scope.teamRoster.goalie);
		updatePlayers($scope.teamRoster.forwards);
		updatePlayers($scope.teamRoster.defensemen);
	})
	.catch(function(data) {
		$location.path('/');
	});
	
	// Changes linked image to use images from NHL site with transperant
	// backgrounds and adds the @ sign to twitter handles if they don't have it
	function updatePlayers(position) {
		position.forEach(function(player, index) {
			addImageToPlayer(player);
			addAtSignToTwitterHandle(player);
			addStatsToPlayer(player);
		});
	}

	function addImageToPlayer(player) {
		var newImageUrl = "http://cdn.nhle.com/photos/mugs-silo-stats/" + player.id + ".png";
		player.imageUrl = newImageUrl;
	}

	function addAtSignToTwitterHandle(player) {
		if (player.twitterHandle !== undefined && player.twitterHandle.substr(0, 1) !== "@") {
			player.twitterHandle = "@" + player.twitterHandle;
		}
	}

	function addStatsToPlayer(player) {
		teamRoster.loadTeamStats().then(function() {
			var playerStats = teamRoster.getPlayerStats(player.id);
			player.stats = playerStats;
		})
		.catch(function() {
			console.log("TeamController - addStatsToPlayer FAILED");
		});
	}

}]);