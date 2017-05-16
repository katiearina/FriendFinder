var path = require("path");

// =============================================================
// Basic routing for HTML pages

module.exports = function (app) {
app.get("/survey", function (req, res) {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
	// console.log("Survey +" + __dirname);
});

app.use(function (req, res) {
	res.sendFile(path.join(__dirname, "../public/home.html"));
	// console.log("Home +" + __dirname);
});
};