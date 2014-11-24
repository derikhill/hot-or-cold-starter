
$(document).ready(function(){
	
	var randomNumber;
	var guessFlag;
	var guessCount;
	var userChoice;
	var found = false;

	newGame();

  	//--- Creating new game ---//
  	$(".new").click(function(event){
  		event.preventDefault();
  		newGame();
  	});

	//--- Input box ---//
	$("form").submit(function(event){
		event.preventDefault();
			if (userChoice = $('#userGuess').val()) {
			console.log("User chose = "+ userChoice);
			$("#userGuess").val('');
			guessFlag = checkChoice(userChoice);
			if (!guessFlag) {
				guessCount++;
				setCount(guessCount);
				$("ul#guessList").append("<li>" + userChoice + "</li>");
				guessFlag = checkTemperature(Math.abs(randomNumber - userChoice));
			};
		} else {
			setFeedback("You've already won. Start a new game.");
		};
  	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	//--- New Game ---//
	function newGame() {
		guessCount = 0;
		found = false;
		$("ul#guessList li").remove();
		setFeedback("Make your Guess!");
		setCount(guessCount);
		randomNumber = computerChoice();
		$("#userGuess").val('');
	}

	//--- Random computer number ---//
	function computerChoice() {
		var computerChoice = Math.floor(Math.random() * 101);
			console.log('new secret number ' + computerChoice);
			return computerChoice;
	}

	//--- Guess count ---//
	function setCount(count) {
		$('#count').text(guessCount);
	}

	//--- Setting user parameters ---//
	function checkChoice(userGuess) {
		if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
			setFeedback("Sorry, you must enter a number between 1 and 100");
			return true;
		}
	}

	//--- Set Feedback Message---//
	function checkTemperature(guessDifference) {

		if (guessDifference == 0) {
			setFeedback("Yeah! You got it!!");
		} 
		else if (guessDifference <= 5) {
			setFeedback("You're so close it's burning!");
		} 
		else if (guessDifference <= 10){
			setFeedback("You're getting hot!");
		} 
		else if (guessDifference>=10 && guessDifference <= 20) {
			setFeedback("Your Guess is getting Warm!");
		} 
		else if (guessDifference>=20 && guessDifference <= 30) {
			setFeedback("Your guess is cold!");
		} 
		else if (guessDifference>=30 && guessDifference <= 40) {
			setFeedback("Your guess is really cold!");
		} 
		else {
			setFeedback("Your guess is freezing!");
		}

	}

	/*--- Set the feedback ---*/
	function setFeedback(feedback) {
		$('#feedback').text(feedback);
	}
});


