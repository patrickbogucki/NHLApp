var express = require('express');
var app = express();
var path = require('path');
var db = require('./database.js');
var requestify = require('requestify');

app.get('/',function(req, res, next) {
	// db.selectUsers;
	console.log(path.join("TESTing"));
	next();
});

app.get('/api/teams', function (req, res) {
	requestify.get('http://www.nicetimeonice.com/api/teams')
	.then(function(response) {
		res.send(response.getBody());
	});

});

app.get('/api/teamsDetailed', function (req, res) {
	requestify.get('http://www.nicetimeonice.com/api/teams')
	.then(function(response) {
		res.send(response.getBody());
	});

});

app.use("/", express.static(path.join(__dirname, '..', '..')));

app.listen(3000, function () {
	console.log('Example app listening on port 3000');
});

