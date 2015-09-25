app.factory('teams', ['$http', function($http) {
	return $http.get('http://crossorigin.me/http://www.nicetimeonice.com/api/teams');
}]);