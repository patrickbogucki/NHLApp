app.factory('teamRoster', ['$http', '$routeParams', function($http, $routeParams) {
	var teamID = $routeParams.teamID;
	
	return $http.get('http://nhlwc.cdnak.neulion.com/fs1/nhl/league/teamroster/' + teamID + '/iphone/clubroster.json')
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
}]);