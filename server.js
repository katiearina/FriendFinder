// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing (for POST requests)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Used to link to CSS and JS pages within HTML files
app.use(express.static(path.join(__dirname, "app", "public")));

// Require external route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server listening
// =============================================================
app.listen(PORT, function() {
  console.log("Magic is happening on PORT " + PORT + "!");
});