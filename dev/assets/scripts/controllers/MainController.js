app.controller('MainController', ['$scope', 'teams' ,function($scope, teams) {
	$scope.title = "Teams";
	getTeams();

	function getTeams() {
		teams.then(function(data) {
			$scope.teams = data.data;
		});
	}
}]);