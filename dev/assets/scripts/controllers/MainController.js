app.controller('MainController',
 ['$scope', 'teams', 'teamsDetailed', 'teamLogos',
 function($scope, teams, teamsDetailed, teamLogos) {
	
	$scope.title = "Teams";

	function getTeams() {
		teams.then(function(teamsData) {
			$scope.teams = teamsData.data;
			teamsDetailed.then(function(teamsDetailedData) {
				$scope.teamsDetailed = teamsDetailedData;
				teamsDetailedData.teams = teamsData.data;
				for  (var item = 0; item <  teamsDetailedData.data.standings["info-teams"][0]["team-standing"].length; item++) {
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

	$scope.getTeamLogoImgSrc = function (teamName) {
		return teamLogos.getTeamLogoImgSrc(teamName);
	};

	getTeams();
	getTeamsDetailed();
}]);