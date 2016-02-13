var app = angular.module('NHLApp', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainController',
			templateUrl: 'assets/scripts/views/main.html'
		})
		.when('/:teamID', {
			controller: 'TeamController',
			templateUrl: 'assets/scripts/views/team.html'
		})
		.otherwise({
			redirectTo: '/'
		});
		
}]);