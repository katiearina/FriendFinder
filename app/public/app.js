// =============================================================
// Variable Declarations

var newFriend; 

// =============================================================
// Function Declarations

function createNewFriend() {

// Set inputs equal to variables
var name = $("#name").val();
var photo = $("#photoLink").val();
var spaghettiSyrup = parseInt($("#spaghettiSyrup").val());
var treeJump = parseInt($("#treeJump").val());
var drawingFly = parseInt($("#drawingFly").val());
var birthdayBird = parseInt($("#birthdayBird").val());
var jumpsuitFight = parseInt($("#jumpsuitFight").val());
var kneeElbows = parseInt($("#kneeElbows").val());
var balloonFood = parseInt($("#balloonFood").val());
var moodTattoo = parseInt($("#moodTattoo").val());
var assassinDollars = parseInt($("#assassinDollars").val());
var clothesBedding = parseInt($("#clothesBedding").val());

	// Grab the survey elements
	var newFriend = {
		"name": name,
		"photo": photo,
		"scores": [
			spaghettiSyrup, treeJump, drawingFly, birthdayBird,
			jumpsuitFight, kneeElbows, balloonFood, moodTattoo,
			assassinDollars, clothesBedding
		]
	};

	console.log(newFriend);

	$.post("/api/friends", newFriend,
	function(data) {
		// resetSurvey();
	});

	// displayModal();
	// runFriendQuery();
	findBestMatch();
};

function findBestMatch() {
	var currentURL = window.location.origin;

	$.ajax({url: currentURL + "/api/friends", method: "GET"})
		.done(function(friendData){
	for (var i = 0; i < (friendData.length - 1); i++) {
		console.log(friendData[i].scores);
	}
		console.log(friendData[friendData.length - 1].scores);
	});
};

// AJAX call to pull and display friendData
function runFriendQuery() {
	var currentURL = window.location.origin;

	$.ajax({url: currentURL + "/api/friends", method: "GET"})
		.done(function(friendData){
			console.log("-------------------------------");
			console.log("URL: " + currentURL + "/api/friends");
			console.log("-------------------------------");
			console.log(friendData);
			console.log("-------------------------------");

	$(".modal-body").html("<h1 class='modalname'>" + friendData[0].name + "</h1>"
		+ "<img class='modalimage' src='" + friendData[0].photo + "'>");

		});

};

// Reset input fields on submit
function resetSurvey() {
	$("#name").val("");
	$("#photoLink").val("");
	$("#spaghettiSyrup").val("Select Me!");
	$("#treeJump").val("Select Me!");
	$("#drawingFly").val("Select Me!");
	$("#birthdayBird").val("Select Me!");
	$("#jumpsuitFight").val("Select Me!");
	$("#kneeElbows").val("Select Me!");
	$("#balloonFood").val("Select Me!");
	$("#moodTattoo").val("Select Me!");
	$("#assassinDollars").val("Select Me!");
	$("#clothesBedding").val("Select Me!");
};


// =============================================================
// Function Calls

$("#submit").on("click", function(event) {
	event.preventDefault();
	createNewFriend();
});

$(".close").on("click", function (event) {
	resetSurvey();
});
