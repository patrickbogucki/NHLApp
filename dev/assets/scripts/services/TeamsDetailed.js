app.factory('teamsDetailed', ['$http', 'teams',  function($http, teams) {
	var x2js = new X2JS();
	return $http.get('https://crossorigin.me/http://www.tsn.ca/datafiles/XML/NHL/standings.xml')
	.then(function successCallback(response) {
		var jsonObj = x2js.xml_str2json(response.data);
		return jsonObj;
	  }, function errorCallback(response) {
	  	return response;
	  });
}]);