app.factory('teams', ['$http', function($http) {
	return $http.get('/api/teams');
}]);