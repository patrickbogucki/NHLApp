// "goalieCategories":"#, POS, NAME, GP, W, L, OT, GA, SA, Sv, SV%, GAA, SO, PIM, Min"
// "skaterCategories":"#, POS, NAME, GP, G, A, P, +/-, PIM, S, TOI/G, PP, SH, GWG, OT"

app.factory('teamRoster', ['$http', '$routeParams', function($http, $routeParams) {    
    this.fetchTeamRoster = function(){ 
    	return $http.get('/api/teamRoster/' + $routeParams.teamID);
    };

    this.teamID = function() {
    	console.log($routeParams.teamID);
    	return $routeParams.teamID;
    };

    var teamStats = [];

    var playerNull = {};

//TODO: Refactor this mess!
// Gets stats for all players on the team and creates an array containing player objects with their stats
	this.loadTeamStats = function() {
		return $http.get('/api/teamRosterStats/' + $routeParams.teamID).then(function(data) {
			teamStats = [];
			var player;
			var goalieCategories = data.data.goalieCategories.split(', ');
			// console.log(goalieCategories);
			var arrayGoalies = data.data.goalieData;
			for (var indexGoalies = 0; indexGoalies < arrayGoalies.length; indexGoalies++) {
				goalieData = arrayGoalies[indexGoalies].data.split(', ');
				player = {};
				for(var indexGoalieCategories = 0; indexGoalieCategories < goalieCategories.length; indexGoalieCategories++) {
					player[goalieCategories[indexGoalieCategories]] = goalieData[indexGoalieCategories];
				}
				player.id = arrayGoalies[indexGoalies].id;
				teamStats.push(player);
			}
			
			var skaterCategories = data.data.skaterCategories.split(', ');
			// console.log(skaterCategories);
			var arraySkater = data.data.skaterData;
			for (var indexSkater = 0; indexSkater < arraySkater.length; indexSkater++) {
				skaterData = arraySkater[indexSkater].data.split(', ');
				player = {};
				for(var indexSkaterCategories = 0; indexSkaterCategories < skaterCategories.length; indexSkaterCategories++) {
					player[skaterCategories[indexSkaterCategories]] = skaterData[indexSkaterCategories];
				}
				player.id = arraySkater[indexSkater].id;
				teamStats.push(player);
			}
			// console.log(teamStats);
		})
		.catch(function(error) {
			// console.log(error);
		});
	};

//Get player ID and pass back their stats into their panel and apply CSS animation or w/e
	this.getPlayerStats = function(playerID) {
		for (var index = 0; index < teamStats.length; index++) {
			if(teamStats[index].id === playerID) {
				// console.log("Found player");
				return teamStats[index];
			}
		}
		// console.log("Player does not exist");
		return playerNull;
	};

// To be used so as to retrieve team stats from within controller
	this.getTeamStats = function() {
		return teamStats;
	};

    return this;
}]);