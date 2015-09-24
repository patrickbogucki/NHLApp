app.factory('teamRoster', ['$resource', '$routeParams', function($resource, $routeParams) {
	return $resource('http://crossorigin.me/http://nhlwc.cdnak.neulion.com/fs1/nhl/league/teamroster/' + $routeParams.teamID + '/iphone/clubroster.json');
}]);