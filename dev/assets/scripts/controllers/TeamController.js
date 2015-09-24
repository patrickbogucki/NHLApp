app.controller('TeamController', ['$scope', '$routeParams', '$location', 'teams', 'teamRoster', function($scope, $routeParams, $location, teams, teamRoster) {
	
	checkTeamIDExists();

	teamRoster.then(function(data) {
		$scope.teamRoster = data;
	});

	function checkTeamIDExists () {
		$scope.teamID = $routeParams.teamID;
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