app.factory('teamsDetailed', ['$http',  function($http) {
	return($http.get('/api/teamsDetailed'));
}]);