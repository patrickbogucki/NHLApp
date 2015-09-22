var app = angular.module('NHLApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainController',
			templateUrl: 'dev/assets/scripts/views/main.html'
		})
		.when('/:teamID', {
			controller: 'TeamController',
			templateUrl: 'dev/assets/scripts/views/team.html'
		})
		.otherwise({
			redirectTo: '/'
		});
		
});