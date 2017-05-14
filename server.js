// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

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
	photoLink: "URL",
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
	name: "",
	photoLink: "",
	spaghettiSyrup: ,
	treeJump: ,
	drawingFly: ,
	birthdayBird: ,
	jumpsuitFight: ,
	kneeElbows: ,
	balloonFood: ,
	moodTattoo: ,
	assassinDollars: ,
	clothingBedding: 
}, {
	name: "",
	photoLink: "",
	spaghettiSyrup: ,
	treeJump: ,
	drawingFly: ,
	birthdayBird: ,
	jumpsuitFight: ,
	kneeElbows: ,
	balloonFood: ,
	moodTattoo: ,
	assassinDollars: ,
	clothingBedding: 
}];