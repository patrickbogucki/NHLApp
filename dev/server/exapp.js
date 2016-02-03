var express = require('express');
var app = express();
var path = require('path');
var db = require('./database.js');

app.use(express.static(path.join(__dirname, '..', '..')));

app.get('/', function (req, res) {
	res.sendFile(path.join('..', '..', '/index.html'));
});

app.get('/addUser', function (req, res) {
	db.addUser("Dave");
	res.redirect('/');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000');
});

