// Variable Declarations
// =============================================================
// Set inputs equal to variables
var name = $("#name").val();
var photo = $("#photoLink").val();
var spaghettiSyrup = $("#spaghettiSyrup").val();
var treeJump = $("#treeJump").val();
var drawingFly = $("#drawingFly").val();
var birthdayBird = $("#birthdayBird").val();
var jumpsuitFight = $("#jumpsuitFight").val();
var kneeElbows = $("#kneeElbows").val();
var balloonFood = $("#balloonFood").val();
var moodTattoo = $("#moodTattoo").val();
var assassinDollars = $("#assassinDollars").val();
var clothesBedding = $("#clothesBedding").val();

var newFriend; 

// Function Declarations
// =============================================================
function createNewFriend() {
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
		// alert("API!");
	});

	// displayModal();
	runFriendQuery();
};


// function displayModal() {
// 	$(".modal-body").html(friendData[0].name);
// };


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


// Function Calls
// =============================================================
$("#submit").on("click", function(event) {
	event.preventDefault();
	createNewFriend();
});