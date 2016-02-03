app.controller('MainController', ['$scope', 'teams', 'teamsDetailed' ,function($scope, teams, teamsDetailed) {
	$scope.title = "Teams";
	function getTeams() {
		teams.then(function(teamsData) {
			$scope.teams = teamsData.data;
			teamsDetailed.then(function(TeamsDetailedData) {
				$scope.teamsDetailed = TeamsDetailedData;
				TeamsDetailedData.teams = teamsData.data;
				for  (var item = 0; item <  TeamsDetailedData.standings["info-teams"]["team-standing"].length; item++) {
				}
			});
		})
		.catch(function(data) {
			console.log("error");
		});
	}

	function getTeamsDetailed() {
		teamsDetailed.then(function(data) {
			$scope.teamsDetailed = data;
		});
	}
	getTeams();
	getTeamsDetailed();
}]);