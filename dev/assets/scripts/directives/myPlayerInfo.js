app.directive('myPlayerInfo', [function() {
	return {
		restrict: 'E',
		scope: {
			player: '=',
			stats: '&'
		},
		templateUrl: '/dev/assets/scripts/templates/my-player-info.html'
	};
}]);