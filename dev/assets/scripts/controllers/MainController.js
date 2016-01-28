app.controller('MainController', ['$scope', 'teams', 'teamsDetailed' ,function($scope, teams, teamsDetailed) {
	$scope.title = "Teams";
	function getTeams() {
		teams.then(function(teamsData) {
			$scope.teams = teamsData.data;
			teamsDetailed.then(function(TeamsDetailedData) {
				$scope.teamsDetailed = TeamsDetailedData;
				TeamsDetailedData.teams = teamsData.data;
				console.log(TeamsDetailedData.standings["info-teams"]["team-standing"][0]._name);
				for  (var item = 0; item <  TeamsDetailedData.standings["info-teams"]["team-standing"].length; item++) {
					console.log(TeamsDetailedData.standings["info-teams"]["team-standing"][item]._name);
				}
			});
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