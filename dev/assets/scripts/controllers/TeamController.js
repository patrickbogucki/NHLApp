app.controller('TeamController', ['$scope', '$routeParams', '$location', 'teams', 'teamRoster', function($scope, $routeParams, $location, teams, teamRoster) {
	
	checkTeamIDExists();

	teamRoster.then(function(data) {
		console.log(data.data.goalie[0].name);
		$scope.teamRoster = data.data;
	});

	function checkTeamIDExists () {
		$scope.teamID = $routeParams.teamID;
				console.log($scope.teamID);
		teams.then(function(data) {	
		var teamIDs = data;
		for(var i = 0; i < teamIDs.length; i++) {
			if($scope.teamID === teamIDs[i].teamID) {
				return;
			}
		}	
		$location.path('/');
		});	
	}
	
	

}]);