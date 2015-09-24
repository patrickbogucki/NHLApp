app.factory('teamRoster', ['$http', '$routeParams', function($http, $routeParams) {
	var teamID = $routeParams.teamID;
	
	return $http.get('http://crossorigin.me/http://nhlwc.cdnak.neulion.com/fs1/nhl/league/teamroster/' + teamID + '/iphone/clubroster.json')
		.then(function(data) {
			return data.data;
		}, (function(err) {
			return err;
		})
	);
}]);