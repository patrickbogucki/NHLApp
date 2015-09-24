app.factory('teams', ['$http', function($http) {
	return $http.get('http://crossorigin.me/http://www.nicetimeonice.com/api/teams')
		.then(function(data) {
			return data.data;
		}, function(err) {
			return err;
		});
}]);