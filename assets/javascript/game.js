/*Create 4 different characters to be chosen.  This will comprise of 4 "boxes" 
with the characters name on top, an image in the middle, and the HP at the bottom.



When a user chooses a character, move the chosen character to a "your character" section and the 
enemies to an "availale for attack section"


clicking on an enemy in the "available for attack section" will move that enemy to a "defender" section.


The user can then fight the enemy using the attack button.  When the attack button is pressed
the defender and enemy chartacter lose hp according to each of their respective attacks.  The enemy only has
1 counter attack value while the userCharacter has a scaling one.  It then displays the damage that was done. It also 
permanently stores the users' attack value. 


If the usercharacter's health goes to or below 0, then display game over, end the scripts, and display a restart(reset)
button.


if the user defeats a character, display that they "have defeated "enemy name", and can choose to fight another enemy".



Once all 3 are defeated, it display "You Won!! Game Over!" and displays the restart(reset button)
*/

/*Crystals-Game Psuedo Code*/
$(document).ready(function() {
	var mainAudio = new Audio('assets/audio/minecraft-theme-song.mp3');
	var mining = new Audio('assets/audio/gravel1.mp3');
	mainAudio.play(mainAudio);
/*Display title, textbox with information, and bottom crystal layout*/

	var oneHundred = 100;
	var computerScore = 19 + Math.floor(Math.random() * oneHundred);
	document.getElementById("score").innerHTML = computerScore;
	console.log(computerScore);
	playerScore = 0;
	var wins = 0;
	var losses = 0;
	$(".wins-losses").html("<br> Wins: " + wins + "<br><br>"
		+ "Losses: " + losses);

  	var reset = function () {
  		playerScore = 0;
  		var crystalOneScore = 0;
  		var crystalTwoScore = 0;
  		var crystalThreeScore = 0;
  		var crystalFourScore = 0;
  		var computerScore = 19 + Math.floor(Math.random() * oneHundred);
  		document.getElementById("score").innerHTML = computerScore;
  		var crystalArray = [1,2,3,4,5,6,7,8,9,10,11,12];
		console.log(crystalArray);
		var crystalOneScore = crystalArray[Math.floor(Math.random() * crystalArray.length)];
			var crystalArray = crystalArray.filter(function(elem){
	   			return elem != crystalArray[crystalOneScore]; }); 
		console.log(crystalArray);

		var crystalTwoScore = crystalArray[Math.floor(Math.random() * crystalArray.length)];
			var crystalArray = crystalArray.filter(function(elem){
	   			return elem != crystalArray[crystalTwoScore]; }); 
		console.log(crystalArray);
		var crystalThreeScore = crystalArray[Math.floor(Math.random() * crystalArray.length)];
			var crystalArray = crystalArray.filter(function(elem){
	   			return elem != crystalArray[crystalThreeScore]; }); 
		console.log(crystalArray);
		var crystalFourScore = crystalArray[Math.floor(Math.random() * crystalArray.length)];
			var crystalArray = crystalArray.filter(function(elem){
	   			return elem != crystalArray[crystalFourScore]; }); 
		console.log(crystalArray);

  	}



/*display a random number between 19-120 in the box right below the instructions sections. Display win and
losses to the right of that*/

	





/** When the player clicks on a crystal, it will add a specific amount of points to the player's 
	total score and display that in their "total score" area. 
		* Your game will hide this amount until the player clicks a crystal.
		* When they do click one, update the player's score counter.
		the crystals' random numvers betweem 1-12 will be different every game.*/
	var crystalArray = [1,2,3,4,5,6,7,8,9,10,11,12];
	console.log(crystalArray);
	var crystalOneScore = crystalArray[Math.floor(Math.random() * crystalArray.length)];
		var crystalArray = crystalArray.filter(function(elem){
   			return elem != crystalArray[crystalOneScore]; }); 
	console.log(crystalArray);

	var crystalTwoScore = crystalArray[Math.floor(Math.random() * crystalArray.length)];
		var crystalArray = crystalArray.filter(function(elem){
   			return elem != crystalArray[crystalTwoScore]; }); 
	console.log(crystalArray);
	var crystalThreeScore = crystalArray[Math.floor(Math.random() * crystalArray.length)];
		var crystalArray = crystalArray.filter(function(elem){
   			return elem != crystalArray[crystalThreeScore]; }); 
	console.log(crystalArray);
	var crystalFourScore = crystalArray[Math.floor(Math.random() * crystalArray.length)];
		var crystalArray = crystalArray.filter(function(elem){
   			return elem != crystalArray[crystalFourScore]; }); 
	console.log(crystalArray);


	$(".crystalOne").on("click", function() {
		mining.play(mining);
	    playerScore = crystalOneScore + playerScore;
	    console.log(playerScore);
	    $(".playerScore").html("<p>" + playerScore + "</p>");
	    $(".wins-losses").html("<br> Wins: " + wins + "<br><br>"
				+ "Losses: " + losses);
		    if (playerScore == computerScore) {
				console.log("winner!");
				$(".winnerDisplay").html("<p> You Won!! </p>");
				wins = 1 + wins;
				  $(".wins-losses").html("<br> Wins: " + wins + "<br><br>"
				+ "Losses: " + losses);
				reset();
			} else if (playerScore > computerScore) {
					console.log("loser..");
					$(".winnerDisplay").html("<p> You Lost.. </p>");
					losses = 1 + losses;
					  $(".wins-losses").html("<br> Wins: " + wins + "<br><br>"
					+ "Losses: " + losses);
					  reset();
	}
	});
	$(".crystalTwo").on("click", function() {
		mining.play(mining);
	     playerScore = crystalTwoScore + playerScore;
	    console.log(playerScore);
	    $(".playerScore").html("<p>" + playerScore + "</p>");
	  
		    if (playerScore == computerScore) {
				console.log("winner!");
				$(".winnerDisplay").html("<p> You Won!! </p>");
				wins = 1 + wins;
				  $(".wins-losses").html("<br> Wins: " + wins + "<br><br>"
				+ "Losses: " + losses);
				reset();
			} else if (playerScore > computerScore) {
				console.log("loser..");
				$(".winnerDisplay").html("<p> You Lost.. </p>");
				losses = 1 + losses;
				  $(".wins-losses").html("<br> Wins: " + wins + "<br><br>"
				+ "Losses: " + losses);
				  reset();
	}

	});
	$(".crystalThree").on("click", function() {
		mining.play(mining);
	    playerScore = crystalThreeScore + playerScore;
	    console.log(playerScore);
	    $(".playerScore").html("<p>" + playerScore + "</p>");
	    $(".wins-losses").html("<br> Wins: " + wins + "<br><br>"
				+ "Losses: " + losses);
		    if (playerScore == computerScore) {
				console.log("winner!");
				$(".winnerDisplay").html("<p> You Won!! </p>");
				wins = 1 + wins;
				  $(".wins-losses").html("<br> Wins: " + wins + "<br><br>"
				+ "Losses: " + losses);
				reset();
			} else if (playerScore > computerScore) {
				console.log("loser..");
				$(".winnerDisplay").html("<p> You Lost.. </p>");
				losses = 1 + losses;
				  $(".wins-losses").html("<br> Wins: " + wins + "<br><br>"
				+ "Losses: " + losses);
				  reset();
	}
	});
	$(".crystalFour").on("click", function(){
		mining.play(mining);
	    playerScore = crystalFourScore + playerScore;
	    console.log(playerScore);
	    $(".playerScore").html("<p>" + playerScore + "</p>");
	    $(".wins-losses").html("<br> Wins: " + wins + "<br><br>"
				+ "Losses: " + losses);
		    if (playerScore == computerScore) {
				console.log("winner!");
				$(".winnerDisplay").html("<p> You Won!! </p>");
				wins = 1 + wins;
				  $(".wins-losses").html("<br> Wins: " + wins + "<br><br>"
				+ "Losses: " + losses);
				reset();
			} else if (playerScore > computerScore) {
				console.log("loser..");
				$(".winnerDisplay").html("<p> You Lost.. </p>");
				losses = 1 + losses;
				  $(".wins-losses").html("<br> Wins: " + wins + "<br><br>"
				+ "Losses: " + losses);
				  reset();
	}
	});



 /*The player wins if their total score matches the random number from the beginning of the game.
*/
	

	/** The player loses if their score goes above the random number.



	* The game restarts whenever the player wins or loses.
		* When the game begins again, the player should see a new random number. Also, all the 
		 crystals ill have four new hidden values. Of course, the user's score (and score counter
		  will reset to zero.
*/
});




