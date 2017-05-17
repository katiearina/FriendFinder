var friendData = require("../data/friends");

// =============================================================
// Basic routing for API requests

module.exports = function (app) {

	// Display JSON of friend data at designated URL
	app.get("/api/friends", function (req, res) {
		res.json(friendData);
	});

	// Post JSON of friend data at designated URL
	app.post("/api/friends", function (req, res) {
		var newFriend = req.body;
		friendData.push(newFriend);
		res.json(newFriend);
	});
	
};