$("#submit").on("click", function(event) {
	event.preventDefault();

	// Here we grab the survey elements
	var newFriend = {
		name: $("#name").val().trim(),
		photoLink: $("#photoLink").val().trim(),
		spaghettiSyrup: $("#spaghettiSyrup").val(),
		treeJump: $("#treeJump").val(),
		drawingFly: $("#drawingFly").val().trim(),
		birthdayBird: $("#birthdayBird").val(),
		jumpsuitFight: $("#jumpsuitFight").val(),
		kneeElbows: $("#kneeElbows").val(),
		balloonFood: $("#balloonFood").val(),
		moodTattoo: $("#moodTattoo").val(),
		assassinDollars: $("#assassinDollars").val(),
		clothesBedding: $("#clothesBedding").val(),  
	};

	console.log(newFriend);

$.post("/api/friends", newFriend,
	function(data) {
		alert("API!");
    });

});