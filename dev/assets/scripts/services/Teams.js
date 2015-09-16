app.factory('teams', ['$http', function($http) {
	return $http.get('http://www.nicetimeonice.com/api/teams')
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
}]);