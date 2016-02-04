var express = require('express');
var app = express();
var path = require('path');
var db = require('./database.js');
var requestify = require('requestify');
var xmlParser = require('xml2js').parseString;

app.use(express.static(path.join(__dirname, '..', '..')));

app.get('/api/teams', function (req, res) {
	requestify.get('http://www.nicetimeonice.com/api/teams')
	.then(function(response) {
		res.status(200).json(response.getBody());
	});

});

app.get('/api/teamsDetailed', function (req, res) {
	requestify.get('http://www.tsn.ca/datafiles/XML/NHL/standings.xml')
	.then(function(response) {
		xmlParser(response.body, function(err, result) {
			res.status(200).json(result);
		});
	});

});

app.get('/api/teamRoster/:teamID', function(req, res, next) {
	var teamID = req.params.teamID;
	requestify.get('http://nhlwc.cdnak.neulion.com/fs1/nhl/league/teamroster/' + teamID + '/iphone/clubroster.json')
	.then(function(response) {
		res.status(200).json(response.getBody());
	})
	.catch(function(data) {
		res.status(404).send("Error");
	});
});



// Catches all requests for pages requesting the backend
// and not routing through angular ie after /#/...
app.get('/*', function(req, res, next) {
	res.send("Nothing here");
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000');
});

