app.controller('TeamController', ['$scope', '$location', 'teams', 'teamRoster', function($scope, $location, teams, teamRoster) {

	teamRoster.fetchTeamRoster()
	.then(function(data) {
		$scope.teamRoster = data.data;
		updatePlayersImageUrl($scope.teamRoster.goalie);
		updatePlayersImageUrl($scope.teamRoster.forwards);
		updatePlayersImageUrl($scope.teamRoster.defensemen);
	})
	.catch(function(data) {
		$location.path('/');
	});

	teamRoster.loadTeamStats();
	
	// Changes linked image to use images from NHL site with transperant
	// backgrounds
	function updatePlayersImageUrl(position) {
		position.forEach(function(element, index) {
			var newImageUrl = "http://cdn.nhle.com/photos/mugs-silo-stats/" + element.id + ".png";
			element.imageUrl = newImageUrl;
		});
	}

	$scope.stats = function(player) {
		console.log(teamRoster.getTeamStats()[0].Min);
		player.points = teamRoster.getTeamStats()[0].Min;
	};

}]);