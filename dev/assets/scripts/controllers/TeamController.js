app.controller('TeamController', ['$scope', '$routeParams', '$location', 'teams', 'teamRoster', function($scope, $routeParams, $location, teams, teamRoster) {
	$scope.teamID = $routeParams.teamID;

	teamRoster.then(function(data) {
		$scope.teamRoster = data;
	});

	var teamIDs;
	teams.then(function(data) {	
		teamIDs = data;
		for(var i = 0; i < teamIDs.length; i++) {
			if($scope.teamID === teamIDs[i].teamID) {
				return;
		}
	}	
	$location.path('/');
	});
	

}]);