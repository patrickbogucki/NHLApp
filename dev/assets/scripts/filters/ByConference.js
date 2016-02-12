app.filter('byConference', function() {
	return function(teams, conferences) {
		var items = {
			conferences: conferences,
			out: []
		};
		angular.forEach(teams, function(value, key){
			if (this.conferences[value['conference-name']] === true) {
				this.out.push(value);
			}
		}, items);
		return items.out;
	};
});