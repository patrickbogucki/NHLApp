app.directive('myPlayerInfo', [function() {
	return {
		restrict: 'E',
		scope: {
			player: '=',
			getPlayerStats: '&'
		},
		templateUrl: '/dev/assets/scripts/templates/my-player-info.html'
	};
}]);