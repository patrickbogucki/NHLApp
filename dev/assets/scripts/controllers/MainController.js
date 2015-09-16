app.controller('MainController', ['$scope', 'teams' ,function($scope, teams) {
	$scope.title = "Teams";
	$scope.getTeams = function() {
		teams.success(function(data) {
			$scope.teams = data;
			console.log($scope.teams[0].name);
		});
	};
	$scope.getTeams();
}]);