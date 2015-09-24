app.directive('myPlayerInfo', [function() {
	return {
		restrict: 'E',
		scope: {
			player: '='
		},
		templateUrl: '/dev/assets/scripts/templates/my-player-info.html'
	};
}]);