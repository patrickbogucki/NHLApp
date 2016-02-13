var express = require('express');
var app = express();
var api = require('./api');
var path = require('path');
var db = require('./database.js');

app.use('/scripts', express.static(path.join(__dirname, '..', '..', 'node_modules')));
app.use(express.static(path.join(__dirname, '..', '..')));
app.use(express.static(path.join(__dirname, '..')));

app.use('/api', api);

app.listen(3000, function () {
	console.log(path.join(__dirname, '..', '..', 'node_modules'));
	console.log('Example app listening on port 3000');
});

