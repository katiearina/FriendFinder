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

// Used to link CSS and JS pages within HTML
app.use(express.static(path.join(__dirname, "app", "public")));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server listening
// =============================================================
app.listen(PORT, function() {
  console.log("Magic is happening on PORT " + PORT);
});