app.filter('byDivision', function() {
	return function(teams, divisions) {
		var items = {
			divisions: divisions,
			out: []
		};
		angular.forEach(teams, function(value, key){
			if (this.divisions[value['division-name']] === true) {
				this.out.push(value);
			}
		}, items);
		return items.out;
	};
});