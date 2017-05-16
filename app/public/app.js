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

if (name === ("")) {
	alert("Please enter a valid name");
	// return;
}
else if (photo === ("")) {
	alert("Please enter a valid URL");
	// return;
}
else if (isNaN(spaghettiSyrup)) {
	alert("Please answer question 1");
	// return;
}
else if (isNaN(treeJump)) {
	alert("Please answer question 2");
	// return;
}
else if (isNaN(drawingFly)) {
	alert("Please answer question 3");
	// return;
}
else if (isNaN(birthdayBird)) {
	alert("Please answer question 4");
	// return;
}
else if (isNaN(jumpsuitFight)) {
	alert("Please answer question 5");
	// return;
}
else if (isNaN(kneeElbows)) {
	alert("Please answer question 6");
	// return;
}
else if (isNaN(balloonFood)) {
	alert("Please answer question 7");
	// return;
}
else if (isNaN(moodTattoo)) {
	alert("Please answer question 8");
	// return;
}
else if (isNaN(assassinDollars)) {
	alert("Please answer question 9");
	// return;
}
else if (isNaN(clothesBedding)) {
	alert("Please answer question 10");
	// return;
}

else {
	// Grab the survey elements
	var newFriend = {
		"name": name.trim(),
		"photo": photo.trim(),
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
}
};

function findBestMatch() {
	var bestMatchFriend;
	var currentURL = window.location.origin;

	$.ajax({url: currentURL + "/api/friends", method: "GET"})
		.done(function(friendData){
			var differenceArray = [];
	for (var i = 0; i < (friendData.length - 1); i++) {
		console.log(friendData[i].scores);
			var difference = 0;
			for (var j = 0; j < friendData[i].scores.length; j++) {
				difference += Math.abs((parseInt(friendData[friendData.length - 1].scores[j]) - parseInt(friendData[i].scores[j])));
				// difference += difference;
				console.log("Diff: i = " + i + "j = " + j + " " + difference);
			}
				differenceArray.push(difference);
				console.log(differenceArray);
	}

	function getMinOfArray(array) {
		return Math.min.apply(null, array);
	};
		// for (var k = 0; k < differenceArray; k++);
		// var smallest = Math.min(differenceArray[k]);
		var smallest = getMinOfArray(differenceArray);
		bestMatchFriend = differenceArray.indexOf(smallest);
		console.log(bestMatchFriend);

		$(".modal-body").html("<h1 class='modalname'>" + friendData[bestMatchFriend].name + "</h1>"
		+ "<img class='modalimage' src='" + friendData[bestMatchFriend].photo + "'>");

	function callModal() {
	$("#flipFlop").modal({
		keyboard: false
	});
	};

	callModal();

	});
};

// AJAX call to pull and display friendData
// function runFriendQuery() {
// 	var currentURL = window.location.origin;

// 	$.ajax({url: currentURL + "/api/friends", method: "GET"})
// 		.done(function(friendData){
// 			console.log("-------------------------------");
// 			console.log("URL: " + currentURL + "/api/friends");
// 			console.log("-------------------------------");
// 			console.log(friendData);
// 			console.log("-------------------------------");

// 	$(".modal-body").html("<h1 class='modalname'>" + friendData[bestMatchFriend].name + "</h1>"
// 		+ "<img class='modalimage' src='" + friendData[bestMatchFriend].photo + "'>");

// 		});

// };

function callModal() {
	$("#flipFlop").modal({
		keyboard: false
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

	$(".modal-body").html("");
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
