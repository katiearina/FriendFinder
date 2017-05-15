$("#submit").on("click", function(event) {
	event.preventDefault();

	var name = $("#name").val().trim();
	var photo = $("#photoLink").val().trim();
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

	// Here we grab the survey elements
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

	// friendData.push(newFriend);

	$.post("/api/friends", newFriend,
		function(data) {
			// alert("API!");
		});

	$(".modal-body").html("Boo!");

});