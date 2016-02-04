app.factory('teamRoster', ['$http', '$routeParams', function($http, $routeParams) {    
    this.fetchTeamRoster = function(){ 
    	return $http.get('/api/teamRoster/' + $routeParams.teamID);
    };
    return this;
}]);