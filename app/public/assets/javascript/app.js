// =============================================================
// Variable Declarations

var newFriend;

// =============================================================
// Function Declarations

// Use survey input to add new friend
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

	// Validate user input 
	// (I would like to eventually change these alerts to in-page notifications/alerts, but ran out of time for this homework.)
	if (name === ("")) {
		alert("Please enter a valid name");
	}
	else if (photo === ("")) {
		alert("Please enter a valid URL");
	}
	else if (isNaN(spaghettiSyrup)) {
		alert("Please answer question 1");
	}
	else if (isNaN(treeJump)) {
		alert("Please answer question 2");
	}
	else if (isNaN(drawingFly)) {
		alert("Please answer question 3");
	}
	else if (isNaN(birthdayBird)) {
		alert("Please answer question 4");
	}
	else if (isNaN(jumpsuitFight)) {
		alert("Please answer question 5");
	}
	else if (isNaN(kneeElbows)) {
		alert("Please answer question 6");
	}
	else if (isNaN(balloonFood)) {
		alert("Please answer question 7");
	}
	else if (isNaN(moodTattoo)) {
		alert("Please answer question 8");
	}
	else if (isNaN(assassinDollars)) {
		alert("Please answer question 9");
	}
	else if (isNaN(clothesBedding)) {
		alert("Please answer question 10");
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

		// Post new friend to API
		$.post("/api/friends", newFriend,
		function(data) {
			// Nothing to see here.
		});

		findBestMatch();
	}
};


// Find best friend match
function findBestMatch() {

	var bestMatchFriendIndex;
	var currentURL = window.location.origin;

	// AJAX call for current friends
	$.ajax({url: currentURL + "/api/friends", method: "GET"})
		.done(function(friendData){

			var differenceArray = [];
			
			// Loop through all but the last friend in the array
			for (var i = 0; i < (friendData.length - 1); i++) {
				// console.log(friendData[i].scores);

				// Set difference to 0 to start
				var difference = 0;
				
				// For each item in the "scores" array inside of each friendData object..
				for (var j = 0; j < friendData[i].scores.length; j++) {

					// Add the absolute difference between each score with the most recently added friend to get the total difference between the new friend
					// and the preexisting friends
					difference += Math.abs((parseInt(friendData[friendData.length - 1].scores[j]) - parseInt(friendData[i].scores[j])));
					// console.log("i = " + i + " | j = " + j + " | difference: " + difference);
				}

				// Add each difference to the empty differenceArray
				differenceArray.push(difference);
				// console.log(differenceArray);
			}

			// Create function to get smallest item in array
			function getMinOfArray(array) {
				return Math.min.apply(null, array);
			};

			// Set variable "smallest" equal to the smallest difference amount in the differenceArray
			var smallest = getMinOfArray(differenceArray);

			// Set bestMatchFriendIndex (index value) equal to the index of the smallest item in the differenceArray to figure out which friend has the least
			// amount of difference to the new friend
			bestMatchFriendIndex = differenceArray.indexOf(smallest);
			// console.log(bestMatchFriend);

			// Set modal HTML to show the friend name and photo at the specified bestMatchFriendIndex value
			$(".modal-body").html("<h1 class='modalname'>" + friendData[bestMatchFriendIndex].name + "</h1>"
			+ "<img class='modalimage' src='" + friendData[bestMatchFriendIndex].photo + "'>");

			callModal();
		});
};

// Display modal
function callModal() {
	$("#friendModal").modal({
		keyboard: false
	});
};

// Reset input fields and modal HTML on submit
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

// On friend finder survey submit..
$("#submit").on("click", function(event) {
	event.preventDefault();
	createNewFriend();
});

// On modal close..
$(".modalClose").on("click", function (event) {
	resetSurvey();
});
