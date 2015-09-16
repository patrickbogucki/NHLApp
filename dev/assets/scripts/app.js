var app = angular.module('NHLApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainController',
			templateUrl: 'dev/assets/scripts/views/main.html'
		})
		.when('/:teamID', {
			controller: 'MainController',
			templateUrl: 'dev/assets/scripts/views/main.html'
		})
		.otherwise({
			redirectTo: '/'
		});
		
});