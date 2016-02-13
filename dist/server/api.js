var express = require('express');
var router = express.Router();
var requestify = require('requestify');
var xmlParser = require('xml2js').parseString;

router.get('/teams', function (req, res) {
	requestify.get('http://www.nicetimeonice.com/api/teams')
	.then(function(response) {
		res.status(200).json(response.getBody());
	});

});

router.get('/teamsDetailed', function (req, res) {
	requestify.get('http://www.tsn.ca/datafiles/XML/NHL/standings.xml')
	.then(function(response) {
		xmlParser(response.body, function(err, result) {
			res.status(200).json(result);
		});
	});

});

router.get('/teamRoster/:teamID', function(req, res, next) {
	var teamID = req.params.teamID;
	requestify.get('http://nhlwc.cdnak.neulion.com/fs1/nhl/league/teamroster/' + teamID + '/iphone/clubroster.json')
	.then(function(response) {
		res.status(200).json(response.getBody());
	})
	.catch(function(data) {
		res.status(404).send("Error");
	});
});

router.get('/teamRosterStats/:teamID', function(req, res) {
	var teamID = req.params.teamID;
	requestify.get('http://nhlwc.cdnak.neulion.com/fs1/nhl/league/playerstatsline/20152016/2/' + teamID + '/iphone/playerstatsline.json')
	.then(function(response) {
		res.status(200).json(response.getBody());
	})
	.catch(function(data) {
		res.status(404).send("Error");
	});
});

// Catches all requests for pages requesting the backend
// and not routing through angular ie after /#/...
router.get('/*', function(req, res, next) {
	res.send("Nothing here");
});

module.exports = router;