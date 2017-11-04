$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;

var q1 = {
	question : 'Who was Luke Skywalkers Dad?',
	possibleAnswers : ['A. Yoda',
				 'B. Obi-wan',
				 'C. Anakin Skywalker',
				 'D. Owen'],
	flags : [false, false, true, false],
	answer : 'C. Anakin Skywalker'
};

var q2 = {
	question: 'What movie, of the Original 6, is the only movie that Tattoine does not make an appearence?',
	possibleAnswers: ['A. Revenge of the Sith',
				 'B. Empire Strikes Back',
				 'C. Return of the Jedi',
				 'D. Attack of the Clones'],
	flags : [false, true, false, false],
	answer : 'B. Empire Strikes Back'
};

var q3 = {
	question : 'Who Kills Jabba the Hutt?',
	possibleAnswers : ['A. Luke Skywalker',
				 'B. Princess Leia',
				 'C. Lando',
				 'D. Han Solo'],
	flags : [false, true, false, false],
	answer : 'B. Princess Leia'
};

var q4 = {
	question : 'What Planet do Anakin and Obi-wan have their epic battle?',
	possibleAnswers : ['A. Mustafar',
				 'B. Kamino',
				 'C. Naboo',
				 'D. Coruscant'],
	flags : [true, false, false, false],
	answer : 'A. Mustafar'
};

var q5 = {
	question : 'Which movie, of the Original 3, has the most deaths?',
	possibleAnswers : ['A. A New Hope',
				 'B. Empire Strikes Back',
				 'C. Return of the Jedi',
				 'D. The Clone Wars'],
	flags : [true, false, false, false],
	answer : 'A. A New Hope'
};

var q6 = {
	question : 'What does the term New Harvest mean in context of the Original Trilogy?',
	possibleAnswers : ['A. It was the fake name for Return of the Jedi',
				 'B. It was what Empire Strikes back was originally called',
				 'C. It was what they called the harvest in A New Hope',
				 'D. It was the name of the Family guy parody episode'],
	flags : [true, false, false, false],
	answer : 'A. It was the fake name for Return of the Jedi'
};

var q7 = {
	question : 'What planet to Wookies come from?',
	possibleAnswers : ['A. Alderaan',
				 'B. Endor',
				 'C. Kashyyk',
				 'D. Bespin'],
	flags : [false, false, true, false],
	answer : 'C. Kashyyk'
};

var q8 = {
	question : 'How many hands does Anakin/Darth Vadar cut off?',
	possibleAnswers : ['A. 5',
				 'B. 3',
				 'C. 2',
				 'D. 6'],
	flags : [false, true, false, false],
	answer : 'B. 3'
};

var q9 = {
	question : 'What is the Name of the green-skinned bounty hunter Han Solo kills in the Mos Eisleys cantina?',
	possibleAnswers : ['A. Jango Fett',
				 'B. Boba Fett',
				 'C. Jabba',
				 'D. Greedo'],
	flags : [false, false, false, true],
	answer : 'D. Greedo'
};

var q10 = {
	question : 'Who is believed to be the Chosen One?',
	possibleAnswers : ['A. Yoda',
				  'B. Anakin Skywalker',
				  'C. Luke Skywalker',
				  'D. Leia Organa'],
	flags : [false, true, false, false],
	answer : 'B. Anakin Skywalker'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});



});