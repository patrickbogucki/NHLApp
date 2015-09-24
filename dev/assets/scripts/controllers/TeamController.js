app.controller('TeamController', ['$scope', '$routeParams', '$location', '$resource', 'teams', 'teamRoster', function($scope, $routeParams, $location, $resource, teams, teamRoster) {
	
	checkTeamIDExists();

	// Find way to put into factory
	$scope.teamRoster = $resource('http://crossorigin.me/http://nhlwc.cdnak.neulion.com/fs1/nhl/league/teamroster/' + $routeParams.teamID + '/iphone/clubroster.json').get();

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