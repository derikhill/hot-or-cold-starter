
$(document).ready(function(){
	
	var newNumber 
	var computerChoice
	var userChoice
	var guessCount 

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	// New Game
  	$(document).on("click", ".new", function(){
  		$("#count").val('0');
  		$('ul#guessList li').remove();
  		newNumber = randomNumber();
  		console.log('new number');
  	});

  		$('form').submit(function(event) {
  		var userGuess = $('#userGuess').val();
  		$('ul#guessList').prepend('<li>' + userGuess + '</li>');
  		$('#userGuess').val('');
  		$("#count")
  	});
/*$('#userGuess').change(function(){
	var obj=$(this)
		var text=obj.val();
		var list='ul#guessList';
		var item=$('<li />');
		if(text !='') {
			item.text(text).prependTo(list);
		}
			obj.val('');
		});*/
var compare = function(userGuess, computerChoice) {
	if (userGuess == computerChoice) {
		return "Yes! You guessed it! Let's play again."
	}
	/*else if() {
		return "Your guess is cold."
	}*/

}

function randomNumber () {

var computerChoice = Math.floor(Math.random() * 101);
		console.log('new secret number' + computerChoice);
		return computerChoice;
}
});


