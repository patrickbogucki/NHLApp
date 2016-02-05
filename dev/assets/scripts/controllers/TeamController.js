app.controller('TeamController', ['$scope', '$location', 'teams', 'teamRoster', function($scope, $location, teams, teamRoster) {

	teamRoster.fetchTeamRoster()
	.then(function(data) {
		$scope.teamRoster = data.data;
		updatePlayersImageUrlAndTwitterHandle($scope.teamRoster.goalie);
		updatePlayersImageUrlAndTwitterHandle($scope.teamRoster.forwards);
		updatePlayersImageUrlAndTwitterHandle($scope.teamRoster.defensemen);
	})
	.catch(function(data) {
		$location.path('/');
	});

	teamRoster.loadTeamStats();
	
	// Changes linked image to use images from NHL site with transperant
	// backgrounds and adds the @ sign to twitter handles if they don't have it
	function updatePlayersImageUrlAndTwitterHandle(position) {
		position.forEach(function(player, index) {
			var newImageUrl = "http://cdn.nhle.com/photos/mugs-silo-stats/" + player.id + ".png";
			player.imageUrl = newImageUrl;
			if (player.twitterHandle !== undefined) {
				addAtSignToTwitterHandle(player);
			}
		});
	}

	function addAtSignToTwitterHandle(player) {
		if(player.twitterHandle.substr(0, 1) !== "@") {
			player.twitterHandle = "@" + player.twitterHandle;
		}
	}

	$scope.getPlayerStats = function(player) {
		var playerStats = teamRoster.getPlayerStats(player.id);
		player.stats = playerStats;
	};

}]);