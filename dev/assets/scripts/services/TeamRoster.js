app.factory('teamRoster', ['$http', '$routeParams', function($http, $routeParams) {
	return $http.get('http://crossorigin.me/http://nhlwc.cdnak.neulion.com/fs1/nhl/league/teamroster/' + $routeParams.teamID + '/iphone/clubroster.json');
}]);