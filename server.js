// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require('./app/routing/htmlRoutes');

module.exports = app;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Friend Finder Friends (DATA)
// =============================================================
var friends = [{
	name: "Katie",
	photoLink: "https://cloud.githubusercontent.com/assets/22947371/26036648/4c8a3618-38af-11e7-960d-da57b2bdddb2.jpg",
	spaghettiSyrup: 4,
	treeJump: 5,
	drawingFly: 5,
	birthdayBird: 2,
	jumpsuitFight: 2,
	kneeElbows: 2,
	balloonFood: 1,
	moodTattoo: 5,
	assassinDollars: 5,
	clothingBedding: 1
}, {
	name: "Cameron",
	photoLink: "",
	spaghettiSyrup: "",
	treeJump: "",
	drawingFly: "",
	birthdayBird: "",
	jumpsuitFight: "",
	kneeElbows: "",
	balloonFood: "",
	moodTattoo: "",
	assassinDollars: "",
	clothingBedding: ""
}, {
	name: "Mary",
	photoLink: "",
	spaghettiSyrup: "",
	treeJump: "",
	drawingFly: "",
	birthdayBird: "",
	jumpsuitFight: "",
	kneeElbows: "",
	balloonFood: "",
	moodTattoo: "",
	assassinDollars: "",
	clothingBedding: ""
}];

app.use("/", htmlRoutes.home);

app.get("/survey", htmlRoutes.survey);

app.get("/style.css", function(req, res) {
	res.sendFile(path.join(__dirname, "app", "public", "style.css"));
});



// Starts the server listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});