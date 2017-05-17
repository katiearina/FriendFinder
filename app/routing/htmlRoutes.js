var path = require("path");

// =============================================================
// Basic routing for HTML pages

module.exports = function (app) {

	// Display survey page at designated URL
	app.get("/survey", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	// Display home page as default (any URL aside from /survey)
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

};