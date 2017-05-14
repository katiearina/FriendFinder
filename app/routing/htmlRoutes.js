var express = require("express");
var path = require("path");

// =============================================================
// Basic routing for HTML pages
exports.home = function(req, res) {
	res.sendFile(path.join(__dirname, "..", "public", "home.html"));
	// console.log("Home +" + __dirname);
};

exports.survey = function(req, res) {
	res.sendFile(path.join(__dirname, "..", "public", "survey.html"));
	// console.log("Survey +" + __dirname);
};