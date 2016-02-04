app.controller('MainController',
 ['$scope', 'teams', 'teamsDetailed', 'teamLogos',
 function($scope, teams, teamsDetailed, teamLogos) {
	
	$scope.title = "Teams";
	$scope.predicate = '$.fullName';
	$scope.reverse = false;
	$scope.order = function(predicate) {
		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
		$scope.predicate = predicate;
	};

	var NYI = {
		name : "NY Islanders",
		fullName : "New York Islanders",
		teamID : "NYI"
	};

	var NYR = {
		name : "NY Rangers",
		fullName : "New York Rangers",
		teamID : "NYR"
	};

	function getTeams() {
		teams.then(function(teamsData) {
			$scope.teams = teamsData.data;
			teamsDetailed.then(function(teamsDetailedData) {
				var arrayTeamsWithStats = teamsDetailedData.data.standings["info-teams"][0]["team-standing"];
				assignFullNameandIDToTeamsWithStats(arrayTeamsWithStats, teamsData.data);
				$scope.teamsWithStats = arrayTeamsWithStats;
			});
		})
		.catch(function(data) {
			console.log("error");
		});
	}

	function assignFullNameandIDToTeamsWithStats(arrayTeamsWithStats, teamsData) {
		for  (var indexTeamWithStats = 0; indexTeamWithStats < arrayTeamsWithStats.length; indexTeamWithStats++) {
			arrayTeamsWithStats[indexTeamWithStats].$.fullName = "FAIL";
			for(var indexTeams = 0; indexTeams < teamsData.length; indexTeams++) {
				if(teamsMatch(arrayTeamsWithStats[indexTeamWithStats], teamsData[indexTeams])) {
					setFullNameAndID(arrayTeamsWithStats[indexTeamWithStats], teamsData[indexTeams]);
					break;
				}
				else if (teamIsNYI(arrayTeamsWithStats[indexTeamWithStats])) {
					setNYFullNameAndID(arrayTeamsWithStats[indexTeamWithStats], NYI);
					break;
				}
				else if (teamIsNYR(arrayTeamsWithStats[indexTeamWithStats])) {
					setNYFullNameAndID(arrayTeamsWithStats[indexTeamWithStats], NYR);
					break;
				}
			}
		}
	}

	function scanTeamsAndAssignFullNameandIDToTeamsWithStats(arrayTeamsWithStats, teamsData) {

	}

	function teamsMatch(teamWithStats, team) {
		return teamWithStats.$.name === team.name.substr(0, teamWithStats.$.name.length);
	}

	function teamIsNYI(teamWithStats) {
		return teamWithStats.$.name === NYI.name;
	}

	function teamIsNYR(teamWithStats) {
		return teamWithStats.$.name === NYR.name;
	}

	function setNYFullNameAndID(teamWithStats, team) {
		teamWithStats.$.fullName = team.fullName;
		teamWithStats.$.teamID = team.teamID;
	}

	function setFullNameAndID(teamwithStats, team) {
		teamwithStats.$.fullName = team.name;
		teamwithStats.$.teamID = team.teamID;
	}

	$scope.getTeamLogoImgSrc = function (teamName) {
		return teamLogos.getTeamLogoImgSrc(teamName);
	};

	getTeams();
}]);