app.controller('TeamController', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.teamName = $routeParams.teamID;
}]);