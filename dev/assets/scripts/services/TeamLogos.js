app.factory('teamLogos', [function() {
	this.getTeamLogoImgSrc = function(teamName) {
		switch(teamName) {
			case "Anaheim Ducks":
				return "https://upload.wikimedia.org/wikipedia/en/7/72/Anaheim_Ducks.svg";
			case "Arizona Coyotes":
				return "https://upload.wikimedia.org/wikipedia/en/2/27/Arizona_Coyotes.svg";
			case "Boston Bruins":
				return "https://upload.wikimedia.org/wikipedia/en/1/12/Boston_Bruins.svg";
			case "Buffalo Sabres":
				return "https://upload.wikimedia.org/wikipedia/en/9/9e/Buffalo_Sabres_Logo.svg";
			case "Calgary Flames":
				return "https://upload.wikimedia.org/wikipedia/en/6/60/Calgary_Flames_Logo.svg";
			case "Carolina Hurricanes":
				return "https://upload.wikimedia.org/wikipedia/en/3/32/Carolina_Hurricanes.svg";
			case "Chicago Blackhawks":
				return "https://upload.wikimedia.org/wikipedia/en/d/d3/ChicagoBlackhawksLogo.svg";
			case "Colorado Avalanche":
				return "https://upload.wikimedia.org/wikipedia/en/4/45/Colorado_Avalanche_logo.svg";
			case "Columbus Blue Jackets":
				return "https://upload.wikimedia.org/wikipedia/en/0/04/Columbus_BlueJackets.svg";
			case "Dallas Stars":
				return "https://upload.wikimedia.org/wikipedia/en/2/2a/Dallas_Stars_logo.svg";
			case "Detroit Red Wings":
				return "https://upload.wikimedia.org/wikipedia/en/e/e0/Detroit_Red_Wings_logo.svg";
			case "Edmonton Oilers":
				return "https://upload.wikimedia.org/wikipedia/en/4/4d/Logo_Edmonton_Oilers.svg";
			case "Florida Panthers":
				return "https://upload.wikimedia.org/wikipedia/en/8/8f/Florida_Panthers.svg";
			case "Los Angeles Kings":
				return "https://upload.wikimedia.org/wikipedia/en/c/cb/Los_Angeles_Kings_Logo_%282011%29.svg";
			case "Minnesota Wild":
				return "https://upload.wikimedia.org/wikipedia/en/1/1b/Minnesota_Wild.svg";
			case "Montreal Canadiens":
				return "https://upload.wikimedia.org/wikipedia/commons/6/69/Montreal_Canadiens.svg";
			case "Nashville Predators":
				return "https://upload.wikimedia.org/wikipedia/en/9/9c/Nashville_Predators_Logo_%282011%29.svg";
			case "New Jersey Devils":
				return "https://upload.wikimedia.org/wikipedia/en/9/9f/New_Jersey_Devils_logo.svg";
			case "New York Islanders":
				return "https://upload.wikimedia.org/wikipedia/en/4/42/Logo_New_York_Islanders.svg";
			case "New York Rangers":
				return "https://upload.wikimedia.org/wikipedia/commons/a/ae/New_York_Rangers.svg";
			case "Philadelphia Flyers":
				return "https://upload.wikimedia.org/wikipedia/en/d/dc/Philadelphia_Flyers.svg";
			case "Pittsburgh Penguins":
				return "https://upload.wikimedia.org/wikipedia/en/3/3a/Pittsburgh_Penguins_logo.svg";
			case "Ottawa Senators":
				return "https://upload.wikimedia.org/wikipedia/en/d/db/Ottawa_Senators.svg";
			case "San Jose Sharks":
				return "https://upload.wikimedia.org/wikipedia/en/3/37/SanJoseSharksLogo.svg";
			case "St. Louis Blues":
				return "https://upload.wikimedia.org/wikipedia/en/e/e8/StLouis_Blues.svg";
			case "Tampa Bay Lightning":
				return "https://upload.wikimedia.org/wikipedia/en/2/2f/Tampa_Bay_Lightning_Logo_2011.svg";
			case "Toronto Maple Leafs":
				return "https://upload.wikimedia.org/wikipedia/en/f/fc/Toronto_Maple_Leafs_logo.svg";
			case "Vancouver Canucks":
				return "https://upload.wikimedia.org/wikipedia/en/3/3a/Vancouver_Canucks_logo.svg";
			case "Washington Capitals":
				return "https://upload.wikimedia.org/wikipedia/en/2/2d/Washington_Capitals.svg";
			case "Winnipeg Jets":
				return "https://upload.wikimedia.org/wikipedia/en/9/93/Winnipeg_Jets_Logo_2011.svg";
			default:
				return "https://upload.wikimedia.org/wikipedia/en/3/3a/05_NHL_Shield.svg";
		}
	};

	return this;
}]);