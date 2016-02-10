app.directive('myPlayerInfoGoalie', [function() {
	return {
		restrict: 'E',
		scope: {
			player: '=',
			getPlayerStats: '&'
		},
		templateUrl: '/dev/assets/scripts/templates/my-player-info-goalie.html'
	};
}]);