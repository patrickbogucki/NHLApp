app.factory('teamRoster', ['$http', '$routeParams', function($http, $routeParams) {    
    this.fetchTeamRoster = function(){ 
    	return $http.get('/api/teamRoster/' + $routeParams.teamID);
    };

    var teamStats = [];

	this.loadTeamStats = function() {
		return $http.get('/api/teamRosterStats/' + $routeParams.teamID).then(function(data) {
			teamStats = [];
			var player;
			var goalieCategories = data.data.goalieCategories.split(', ');
			console.log(goalieCategories);
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
			console.log(skaterCategories);
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
			console.log(teamStats);
		})
		.catch(function(error) {
			console.log(error);
		});
	};

	this.getPlayerStats = function(playerID) {

	};

	this.getTeamStats = function() {
		return teamStats;
	};

    return this;
}]);