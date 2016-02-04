var express = require('express');
var app = express();
var path = require('path');
var db = require('./database.js');
var requestify = require('requestify');
var xmlParser = require('xml2js').parseString;

app.get('/',function(req, res, next) {
	console.log(path.join("TESTING"));
	next();
});

app.get('/api/teams', function (req, res) {
	requestify.get('http://www.nicetimeonice.com/api/teams')
	.then(function(response) {
		res.send(response.getBody());
	});

});

app.get('/api/teamsDetailed', function (req, res) {
	requestify.get('http://www.tsn.ca/datafiles/XML/NHL/standings.xml')
	.then(function(response) {
		xmlParser(response.body, function(err, result) {
			res.send(result);
		});
	});

});

app.use("/", express.static(path.join(__dirname, '..', '..')));

app.listen(3000, function () {
	console.log('Example app listening on port 3000');
});

